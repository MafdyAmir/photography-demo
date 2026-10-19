// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical URLs, sitemap and share images. Set SITE_URL to the real domain once it's connected;
// until then Netlify's own `URL` variable (the *.netlify.app address) is used automatically.
const SITE_URL = process.env.SITE_URL || process.env.URL || 'https://example.netlify.app';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
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
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Instrument Serif',
      cssVariable: '--font-serif',
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
  integrations: [
    sitemap({
      filter: (page) => !/\/(thank-you|admin|404)(\/|$)/.test(page),
    }),
  ],
});
