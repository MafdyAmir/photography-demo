# Commercial Photography Site (MVP)

Portfolio + lead-generation site for a photographer moving into product / brand / corporate photography.
Source of truth: `docs/PRD — موقع تصوير تجاري (MVP).md` (Arabic). Read it before larger changes.

## Stack (decided — overrides the PRD's WordPress recommendation)
- Astro 7, `output: 'static'`. Content collections in `src/content.config.ts` (Zod 4 via `astro/zod`).
- Decap CMS at `/admin` (`public/admin/`), auth via DecapBridge (photographer needs no GitHub account).
- Netlify hosting + Netlify Forms for the inquiry form. GA4 for analytics.
- **No backend, no database, no server functions.** Leads go to email (Netlify Forms) or WhatsApp only.

## Content
- Collections: `projects`, `services` (3 fixed files), `testimonials`, `settings` (singleton `site.yml`). All YAML.
- Project slug = file name. Slugs `product`, `brand`, `corporate` are reserved (they're category URLs).
- All images live in `src/assets/uploads/` and are referenced relatively (`../../assets/uploads/x.jpg`)
  so Astro `<Image />` optimizes them at build time.
- Query content through `src/lib/content.ts` (handles published filter, ordering, slug check).

## Rules
- **Alt text is required on every image.** The schema enforces it; never bypass it with empty or generic alt.
- Spec / self-initiated work must be `isConcept: true` and show the "Concept Project" badge. Never present
  wedding work as commercial experience. Testimonials and client logos must be real and approved.
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
- Env vars: `PUBLIC_GA4_ID`, `SITE_URL` (falls back to Netlify's `URL`), `PUBLIC_GSC_VERIFICATION`. See `.env.example`.

## Docs
- `docs/SETUP.md` — manual launch steps (GitHub, Netlify, forms, DecapBridge, GA4, domain, Search Console).
- `docs/ADMIN-GUIDE.md` — photographer's CMS guide (Arabic).

## Commands
- `npm run dev` / `npm run build` / `npm run check`
- `npm run cms` — local CMS backend for testing `/admin/`
- `npm run seed:images` regenerates the labelled placeholder photos (all must be replaced before launch).
