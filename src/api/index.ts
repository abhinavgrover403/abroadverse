import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import db from '../db/index.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-for-dev';

// Middleware to verify JWT
const authenticate = (req: any, res: any, next: any) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// --- Auth Routes ---
router.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username) as any;

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
  res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
  res.json({ message: 'Logged in successfully', token });
});

router.post('/auth/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

router.get('/auth/me', authenticate, (req: any, res) => {
  res.json({ user: req.user });
});

// --- Leads Routes ---
router.post('/leads', (req, res) => {
  const { name, email, phone, countryOfInterest, message } = req.body;
  try {
    const stmt = db.prepare('INSERT INTO leads (name, email, phone, countryOfInterest, message) VALUES (?, ?, ?, ?, ?)');
    const result = stmt.run(name, email, phone, countryOfInterest, message);
    res.status(201).json({ id: result.lastInsertRowid, message: 'Lead submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit lead' });
  }
});

router.get('/leads', authenticate, (req, res) => {
  const leads = db.prepare('SELECT * FROM leads ORDER BY createdAt DESC').all();
  res.json(leads);
});

// --- Blog Posts Routes ---
router.get('/posts', (req, res) => {
  const posts = db.prepare('SELECT * FROM posts ORDER BY publishedAt DESC').all();
  res.json(posts);
});

router.get('/posts/:slug', (req, res) => {
  const post = db.prepare('SELECT * FROM posts WHERE slug = ?').get(req.params.slug);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

router.post('/posts', authenticate, (req, res) => {
  const { title, slug, category, author, excerpt, content, featuredImage } = req.body;
  try {
    const stmt = db.prepare('INSERT INTO posts (title, slug, category, author, excerpt, content, featuredImage) VALUES (?, ?, ?, ?, ?, ?, ?)');
    const result = stmt.run(title, slug, category, author, excerpt, content, featuredImage);
    res.status(201).json({ id: result.lastInsertRowid, message: 'Post created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

router.put('/posts/:id', authenticate, (req, res) => {
  const { title, slug, category, author, excerpt, content, featuredImage } = req.body;
  try {
    const stmt = db.prepare('UPDATE posts SET title = ?, slug = ?, category = ?, author = ?, excerpt = ?, content = ?, featuredImage = ? WHERE id = ?');
    stmt.run(title, slug, category, author, excerpt, content, featuredImage, req.params.id);
    res.json({ message: 'Post updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update post' });
  }
});

router.delete('/posts/:id', authenticate, (req, res) => {
  try {
    db.prepare('DELETE FROM posts WHERE id = ?').run(req.params.id);
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

// --- Analytics Route ---
router.get('/analytics', authenticate, (req, res) => {
  const leadsCount = (db.prepare('SELECT COUNT(*) as count FROM leads').get() as any).count;
  const postsCount = (db.prepare('SELECT COUNT(*) as count FROM posts').get() as any).count;
  res.json({ leadsCount, postsCount, visitors: 1245, successRate: '98%' });
});

export default router;
