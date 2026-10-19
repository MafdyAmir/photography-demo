// Generates the labelled placeholder for the photographer portrait (a stock photo of a stranger would be misleading).
// Must be replaced by the photographer's real portrait before launch.
// Usage: npm run seed:images
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve('src/assets/uploads');

// [background-from, background-to, accent]
const palettes = {
  amber: ['#e9dccb', '#c9a27a', '#7a4a24'],
  clay: ['#efe7df', '#d8b9a5', '#8c5a44'],
  leather: ['#e4e0d8', '#a89b86', '#4a3b2a'],
  slate: ['#e6e8ea', '#9aa3ab', '#2f3a44'],
  sage: ['#e8ebe3', '#b2bba5', '#4d5a43'],
  stone: ['#ecebe7', '#c4c0b8', '#3d3a35'],
};

const shapes = {
  bottle: (a) => `
    <rect x="44%" y="30%" width="12%" height="44%" rx="18" fill="${a}" opacity="0.92"/>
    <rect x="47.5%" y="22%" width="5%" height="9%" rx="6" fill="${a}"/>`,
  jar: (a) => `
    <rect x="38%" y="44%" width="24%" height="30%" rx="40" fill="${a}" opacity="0.9"/>
    <rect x="40%" y="38%" width="20%" height="8%" rx="10" fill="${a}"/>`,
  bag: (a) => `
    <rect x="34%" y="42%" width="32%" height="32%" rx="24" fill="${a}" opacity="0.9"/>
    <rect x="42%" y="30%" width="16%" height="20%" rx="60" fill="none" stroke="${a}" stroke-width="14"/>`,
  person: (a) => `
    <circle cx="50%" cy="34%" r="9%" fill="${a}" opacity="0.9"/>
    <rect x="36%" y="46%" width="28%" height="40%" rx="60" fill="${a}" opacity="0.85"/>`,
  desk: (a) => `
    <rect x="18%" y="56%" width="64%" height="4%" fill="${a}"/>
    <rect x="22%" y="60%" width="3%" height="26%" fill="${a}"/>
    <rect x="75%" y="60%" width="3%" height="26%" fill="${a}"/>
    <rect x="40%" y="40%" width="20%" height="15%" rx="6" fill="${a}" opacity="0.85"/>`,
  frame: (a) => `
    <rect x="30%" y="24%" width="40%" height="52%" fill="none" stroke="${a}" stroke-width="10"/>`,
};

function svg({ w, h, palette, shape, label }) {
  const [from, to, accent] = palettes[palette];
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/>
      </linearGradient>
      <radialGradient id="l" cx="0.3" cy="0.2" r="0.8">
        <stop offset="0" stop-color="#fff" stop-opacity="0.45"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <rect width="100%" height="100%" fill="url(#l)"/>
    <rect x="0" y="74%" width="100%" height="26%" fill="${accent}" opacity="0.08"/>
    ${shapes[shape](accent)}
    <text x="50%" y="93%" text-anchor="middle" font-family="Helvetica, Arial, sans-serif"
      font-size="${Math.round(w / 55)}" letter-spacing="4" fill="${accent}" opacity="0.7">PLACEHOLDER · ${label.toUpperCase()}</text>
  </svg>`);
}

const LANDSCAPE = { w: 2000, h: 1333 };
const PORTRAIT = { w: 1600, h: 2000 };

/**
 * Only the photographer's portrait is generated now. Every other image on the site is a
 * temporary royalty-free stock photo (see docs/IMAGE-CREDITS.md) that must be replaced with
 * the photographer's own work before launch.
 */
const images = {
  'photographer-portrait': { ...PORTRAIT, palette: 'stone', shape: 'person', label: 'Photographer portrait' },
};

await mkdir(OUT, { recursive: true });
for (const [name, spec] of Object.entries(images)) {
  await sharp(svg(spec)).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(OUT, `${name}.jpg`));
}
console.log(`Wrote ${Object.keys(images).length} placeholder images to ${OUT}`);
