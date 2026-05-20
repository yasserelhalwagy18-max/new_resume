import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import geoip from 'geoip-lite';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());

// Serve static files from 'dist', but don't automatically serve index.html for '/'
app.use(express.static(path.join(__dirname, 'dist'), {
  index: false,
  maxAge: '1y',
  immutable: true
}));

app.get('*', async (req, res) => {
  // Determine client IP
  const clientIp = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress || req.ip;

  // Detect country
  const geo = geoip.lookup(clientIp);
  const country = geo ? geo.country : 'Unknown';

  // Determine lang and dir based on country
  const lang = country === 'IR' ? 'fa' : 'en';
  const dir = country === 'IR' ? 'rtl' : 'ltr';

  try {
    const indexPath = path.join(__dirname, 'dist', 'index.html');
    let html = await fs.readFile(indexPath, 'utf8');

    // Inject lang and dir into the HTML string
    // Matching `<html lang="..." dir="...">`
    html = html.replace(/<html[^>]*>/i, `<html lang="${lang}" dir="${dir}">`);

    res.send(html);
  } catch (error) {
    console.error('Error reading index.html', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
