// src/server.ts
import 'zone.js/node';
import express from 'express';
import { join } from 'path';
import { existsSync } from 'fs';
import { renderApplication } from '@angular/platform-server';
import { default as bootstrap } from './main.server';
import { APP_BASE_HREF } from '@angular/common';
import { readFileSync } from 'fs';

const app = express();
const distFolder = join(process.cwd(), 'dist/alert-aid/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index.html';

app.get('*.*', express.static(distFolder, { maxAge: '1y' }));

app.get('*', async (req, res) => {
  try {

// Path to your built Angular index.html
const distFolder = join(process.cwd(), 'dist/alert-aid/browser');
const indexHtmlPath = join(distFolder, 'index.html');

// Read the HTML content
const indexHtmlContent = readFileSync(indexHtmlPath, 'utf-8');

    const html = await renderApplication(bootstrap, {
      document: indexHtmlContent, // if you're reading index.html content
      url: req.originalUrl
      // no need for providers here if already handled in app.config.server.ts
    });
    

    res.status(200).send(html);
  } catch (err) {
    console.error('SSR error:', err);
    res.status(500).send('Internal server error');
  }
});

const port = process.env['PORT'] || 5000;
app.listen(port, () => {
  console.log(`✅ Angular SSR is running at http://localhost:${port}`);
});
