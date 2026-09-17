import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/timemachine_quotes';

const SiteContentSchema = new mongoose.Schema({
  key: { type: String, default: 'active', unique: true },
  hero: {
    headline: { type: String, default: 'Timemachine & Co' },
    subtitle: { type: String, default: 'timeless cinematic wedding stories' },
    videos: [{ title: String, videoUrl: String, poster: String }]
  },
  about: {
    tag: { type: String, default: 'OUR JOURNEY & STORY' },
    title: { type: String, default: 'Capturing Love, Joy & Everything In Between' },
    paragraphs: [{ type: String }],
    collageImages: [{ type: String }]
  },
  weddingFilms: [{ type: mongoose.Schema.Types.Mixed }],
  portfolio: [{ type: mongoose.Schema.Types.Mixed }],
  updatedAt: { type: Date, default: Date.now }
});

const SiteContent = mongoose.models.SiteContent || mongoose.model('SiteContent', SiteContentSchema);

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 8000,
    tlsAllowInvalidCertificates: true
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();

    if (req.method === 'GET') {
      const contentDoc = await SiteContent.findOne({ key: 'active' });
      return res.status(200).json({ success: true, data: contentDoc || null });
    }

    if (req.method === 'PUT') {
      const payload = req.body;
      payload.key = 'active';
      payload.updatedAt = new Date();

      const updated = await SiteContent.findOneAndUpdate(
        { key: 'active' },
        payload,
        { upsert: true, new: true, runValidators: false }
      );

      return res.status(200).json({
        success: true,
        data: updated,
        message: 'Website content saved successfully!'
      });
    }

    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  } catch (err) {
    console.error('❌ /api/content error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
