/**
 * Prefixes an internal path with the site's base path (astro.config `base`).
 * Needed when the site is served from a sub-path, e.g. GitHub Pages project sites.
 * With the default base ("/") this returns the path unchanged.
 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function url(path: string): string {
  return `${base}${path}`;
}

export const BASE = base;
