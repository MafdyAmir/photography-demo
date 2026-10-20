# Commercial Photography Site (MVP)

Portfolio + lead-generation site for **Shotix Studios**, a Cairo photo + video team for events, exhibitions, launches
and brand content. Product truth: `PRODUCT.md` (supersedes the PRD's product/brand/corporate positioning).
Original brief: `docs/PRD — موقع تصوير تجاري (MVP).md` (Arabic). Visual direction: `.impeccable/surfaces/` and `DESIGN.md`.

## Stack (decided — overrides the PRD's WordPress recommendation)
- Astro 7, `output: 'static'`. Content collections in `src/content.config.ts` (Zod 4 via `astro/zod`).
- Decap CMS at `/admin` (`public/admin/`), auth via DecapBridge (the team needs no GitHub account).
- Netlify hosting + Netlify Forms for the inquiry form. GA4 for analytics.
- **No backend, no database, no server functions.** Leads go to email (Netlify Forms) or WhatsApp only.

## Content
- Collections: `projects`, `services` (4 fixed files), `testimonials`, `settings` (singleton `site.yml`). All YAML.
- Categories (= services, "halls" A–D): `events`, `exhibitions`, `launches`, `social`. Project slug = file name;
  category names are reserved slugs (they're category URLs). Booth codes (e.g. B02) are computed in `getBoothCodes()`.
- Project videos: compressed MP4s in `public/videos/` + a poster image. `Film.astro` loads the Video.js 10 player
  (`@videojs/html`) on the first press only; `FilmReel.astro` shows them in a Swiper carousel.
- Swiper (`src/scripts/swiper.ts`, only the modules we use) is imported on demand by `FilmReel`
  for video reels. lightGallery is used by `Gallery.astro` for the project image lightbox (with
  thumbnails, pinch-zoom, and swipe gestures). Page transition: `Iris.astro` (camera shutter,
  SVG + small script, off for reduced motion).
- All images live in `src/assets/uploads/` and are referenced relatively (`../../assets/uploads/x.jpg`)
  so Astro `<Image />` optimizes them at build time.
- Query content through `src/lib/content.ts` (handles published filter, ordering, slug check).

## Rules
- **Alt text is required on every image.** The schema enforces it; never bypass it with empty or generic alt.
- Only real Shotix work. Self-initiated work must be `isConcept: true` (badge). No link to wedding work.
  Testimonials and client logos must be real and approved. Copy speaks as "we" (a team).
- Never show fixed prices. The budget field stays hidden while `budgetRanges` is empty.
- Out of scope — do not add: booking, payments, client dashboards/accounts, CRM, blog, Arabic version (yet).
- Every page ends with a "Start a Project" CTA and has a unique title + meta description.
- Mobile-first. Targets: Lighthouse mobile Perf ≥ 90, SEO ≥ 95, A11y ≥ 90; no horizontal scroll.
- RTL-ready: UI strings in `src/i18n/`, use CSS logical properties (`margin-inline`, `inset-inline-start`, …),
  set `lang`/`dir` from `LOCALES` in the layout.

## CMS (`public/admin/config.yml`)
- Decap 3.16.3 from unpkg. Field rules mirror `src/content.config.ts` — change both together.
- Each collection sets `media_folder`/`public_folder: ../../assets/uploads` (entry-relative). Without this the
  editor can't show image thumbnails.
- The schema treats `""`/`null` as "not set" (`empty`/`optionalText` helpers) because Decap writes those for
  cleared optional fields. Keep that pattern for any new optional field.
- Known Decap bug (verified locally): the **first image uploaded inside a new entry is not saved**. Workaround in
  `docs/ADMIN-GUIDE.md`: upload on the Media page first, then pick. A missing image fails the build, so the
  live site keeps the previous deploy.
- No multi-file upload in Decap's default media library (one file per upload).
- Local testing: `npm run cms` (decap-server, port 8081) + `npm run dev`, then `/admin/` (uses `local_backend`).

## Form & analytics
- Netlify Forms: form `inquiry` in `src/components/InquiryForm.astro` (`data-netlify`, honeypot
  `company_website`, `action="/thank-you"`). Hidden UTM/landing fields come from `src/lib/attribution.ts`.
- GA4 only loads when `PUBLIC_GA4_ID` is set (after idle). Click events = any element with `data-event` +
  `data-event-location`; same-tab navigations are queued in sessionStorage and sent on the next page.
  `inquiry_submit` fires on `/thank-you` only after a real submit (sessionStorage flag).
- Env vars: `PUBLIC_GA4_ID`, `SITE_URL` (falls back to Netlify's `URL`), `PUBLIC_GSC_VERIFICATION`, `BASE_PATH` (sub-path, e.g.
  `/photography-demo`; default `/`). See `.env.example`.
- **Every internal link must go through `url()` from `src/lib/url.ts`** so the site also works from a sub-path
  (GitHub Pages project site: https://mafdyamir.github.io/photography-demo/, deployed by `.github/workflows/pages.yml`).
  Never hard-code `href="/work"`. On Windows Git Bash prefix commands with `MSYS_NO_PATHCONV=1` when passing `BASE_PATH=/x`.
- GitHub Pages is a preview only: Netlify Forms and `/admin` (CMS login) do not work there.

## Docs
- `docs/SETUP.md` — manual launch steps (GitHub, Netlify, forms, DecapBridge, GA4, domain, Search Console).
- `docs/ADMIN-GUIDE.md` — the team's CMS guide (Arabic).

## Commands
- Package manager is **Bun** (`bun.lock`; `npm` is aliased to bun on the dev machine). `bun run dev` / `bun run build` / `bun run check`
- `npm run cms` — local CMS backend for testing `/admin/`
