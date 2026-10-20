// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical URLs, sitemap and share images. Set SITE_URL to the real domain once it's connected;
// until then Netlify's own `URL` variable (the *.netlify.app address) is used automatically.
const SITE_URL = process.env.SITE_URL || process.env.URL || 'https://example.netlify.app';

// Sub-path the site is served from (e.g. "/photography-demo" on a GitHub Pages project site). "/" = domain root.
const BASE_PATH = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  // Next page starts loading on hover/tap, while the camera iris closes (Iris.astro).
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  trailingSlash: 'never',
  build: { format: 'file' },
  // English only for the MVP. Add 'ar' here (and src/i18n/ar.ts) when the Arabic/RTL version is built.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  // Downloaded at build time and served from the site itself (no Google Fonts request at runtime).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Barlow',
      cssVariable: '--font-sans',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      // Wayfinding-signage grotesque for hall letters, headings and booth codes.
      provider: fontProviders.google(),
      name: 'Big Shoulders',
      cssVariable: '--font-display',
      weights: [700, 800, 900],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Arial Narrow', 'sans-serif'],
    },
  ],
  integrations: [
    sitemap({
      filter: (page) => !/\/(thank-you|admin|404)(\/|$)/.test(page),
    }),
  ],
});
