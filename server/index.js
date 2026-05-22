import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/chat.js';

dotenv.config();

console.log('==> Starting server...');
console.log('==> PORT:', process.env.PORT);
console.log('==> MONGO_URI set:', !!process.env.MONGO_URI);
console.log('==> JWT_SECRET set:', !!process.env.JWT_SECRET);
console.log('==> GROQ_API_KEY set:', !!process.env.GROQ_API_KEY);
console.log('==> CLIENT_URL:', process.env.CLIENT_URL);

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

app.get('/api/health', (_, res) => res.json({ ok: true }));

console.log('==> Connecting to MongoDB...');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('==> MongoDB connected');
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`==> Server running on port ${port}`));
  })
  .catch(err => {
    console.error('==> MongoDB connection error:', err.message);
    process.exit(1);
  });