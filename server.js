const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// ── 1. STATIC FILES — Long-term cache for hashed Vite assets ──
// Vite hashes JS/CSS files, so they can be cached forever.
// Images in /images/ are manually managed — also cache 1 year.
app.use('/assets', express.static(path.join(__dirname, 'dist/assets'), {
  maxAge: '1y',
  immutable: true,
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Vary', 'Accept-Encoding');
  }
}));

app.use('/images', express.static(path.join(__dirname, 'dist/images'), {
  maxAge: '1y',
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.setHeader('Vary', 'Accept-Encoding');
  }
}));

// Fonts (woff2) — cache 1 year
app.use('/fonts', express.static(path.join(__dirname, 'dist/fonts'), {
  maxAge: '1y',
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Vary', 'Accept-Encoding');
  }
}));

// ── 2. HTML — NEVER cache (so deployments are instant) ──
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: 0,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// ── 3. SPA fallback ──
app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});