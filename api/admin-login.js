import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { password } = req.body || {};
  const adminSecret = process.env.ADMIN_PASSWORD || 'admin2026';

  if (password === adminSecret) {
    return res.status(200).json({
      success: true,
      token: 'admin-token-' + Date.now(),
      message: 'Admin authorization successful.'
    });
  } else {
    return res.status(401).json({
      success: false,
      error: 'Invalid admin passcode. Access denied.'
    });
  }
}
