import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/timemachine_quotes';
const GOOGLE_SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL || '';

// Middleware
app.use(cors());
app.use(express.json());

// In-Memory Fallback Store (for offline testing when MongoDB is disconnected)
const fallbackQuotesStore = [];

// Mongoose Schema & Model
const QuoteSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  groomName: { type: String, required: true },
  brideName: { type: String, required: true },
  countryCode: { type: String, default: '+91' },
  phone: { type: String, required: true },
  events: [
    {
      name: { type: String, required: true },
      date: { type: String, required: true },
      time: { type: String },
      location: { type: String },
      guests: { type: String }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

const Quote = mongoose.model('Quote', QuoteSchema);

// Database Connection Helper for Serverless & Local
let isMongoConnected = false;

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    isMongoConnected = true;
    return true;
  }
  const uri = process.env.MONGODB_URI || MONGODB_URI;
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
      tlsAllowInvalidCertificates: true
    });
    isMongoConnected = true;
    console.log('✅ Connected to MongoDB Atlas successfully');
    return true;
  } catch (err) {
    isMongoConnected = false;
    console.error('❌ MongoDB connection failed:', err.message);
    return false;
  }
};

// Initial connection attempt
connectDB();

// Ensure DB is connected for API requests
app.use(async (req, res, next) => {
  if (req.path.startsWith('/api')) {
    await connectDB();
  }
  next();
});

// ==========================================================================
// API ROUTES (Flexible Route Aliases for Vercel Serverless & Local)
// ==========================================================================

// Health Check
app.get(['/api/health', '/health'], async (req, res) => {
  const connected = await connectDB();
  res.json({
    status: 'ok',
    mongoConnected: connected,
    mongooseState: mongoose.connection.readyState,
    googleSheetWebhookConfigured: !!GOOGLE_SHEET_WEBHOOK_URL,
    timestamp: new Date().toISOString()
  });
});

// POST /api/quote - Save Quote to MongoDB & Google Sheets
app.post(['/api/quote', '/quote', '/api/quote.js'], async (req, res) => {
  try {
    const { clientName, groomName, brideName, countryCode, phone, events } = req.body;

    if (!clientName || !groomName || !brideName || !phone || !events || !events.length) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields. Please ensure all form steps are completed.'
      });
    }

    const newQuoteData = {
      clientName,
      groomName,
      brideName,
      countryCode: countryCode || '+91',
      phone,
      events,
      createdAt: new Date()
    };

    // Ensure database connection
    const dbConnected = await connectDB();
    if (!dbConnected) {
      console.warn('⚠️ Primary MongoDB connection failed. Attempting direct save...');
    }

    const quoteDoc = new Quote(newQuoteData);
    const savedQuote = await quoteDoc.save();
    console.log('💾 Quote saved successfully to MongoDB Atlas with ID:', savedQuote._id);

    // Google Sheets Webhook Dispatch (Async & Resilient with 302 Redirect Support)
    if (GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        console.log('🚀 Forwarding quote payload to Google Sheets webhook...');
        const https = await import('https');
        const agent = new https.Agent({ rejectUnauthorized: false });
        const bodyPayload = JSON.stringify(newQuoteData);
        
        const sendToSheet = (targetUrl, method = 'POST') => {
          try {
            const options = {
              method,
              agent,
              headers: method === 'POST' ? {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(bodyPayload)
              } : {}
            };

            const req = https.request(targetUrl, options, (res) => {
              if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                // Google Apps Script redirects 302 to an echo GET endpoint
                sendToSheet(res.headers.location, 'GET');
                return;
              }
              let resData = '';
              res.on('data', chunk => resData += chunk);
              res.on('end', () => console.log('✅ Google Sheets webhook result:', res.statusCode, resData));
            });

            req.on('error', err => console.warn('⚠️ Google Sheets webhook warning:', err.message));
            if (method === 'POST') req.write(bodyPayload);
            req.end();
          } catch (e) {
            console.warn('⚠️ Google Sheets webhook dispatch error:', e.message);
          }
        };

        sendToSheet(GOOGLE_SHEET_WEBHOOK_URL, 'POST');
      } catch (webhookErr) {
        console.warn('⚠️ Google Sheets webhook error:', webhookErr.message);
      }
    }



    res.status(201).json({
      success: true,
      message: 'Your quote request has been recorded successfully in MongoDB.',
      quoteId: savedQuote._id,
      storedIn: 'MongoDB Atlas'
    });

  } catch (err) {
    console.error('❌ Error processing /api/quote:', err);
    res.status(500).json({
      success: false,
      error: 'Server error while processing your quote request: ' + err.message
    });
  }
});


// GET /api/quotes - Retrieve List of Quotes (Admin / Studio Testing)
app.get(['/api/quotes', '/quotes'], async (req, res) => {
  try {
    const connected = await connectDB();
    if (connected || isMongoConnected) {
      const quotes = await Quote.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: quotes.length, data: quotes });
    } else {
      return res.json({ success: true, count: fallbackQuotesStore.length, data: fallbackQuotesStore });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


// Serve production static assets if dist exists
app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res) => {
  const distIndex = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(distIndex, (err) => {
    if (err) {
      res.send('Timemachine & Co API Server is active.');
    }
  });
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`\n🚀 Timemachine & Co API Server listening on http://localhost:${PORT}`);
    console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`📋 View Quotes: http://localhost:${PORT}/api/quotes\n`);
  });
}

export default app;

