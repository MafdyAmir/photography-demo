# Changelog

## [Unreleased] — 2026-10-20

### Changed
- Rebranded the site to **Shotix Studios** (photo + video for events, exhibitions, launches and brand content).
  New visual system: near-black venue ground, logo gold as the only marking colour, Big Shoulders Display + Barlow,
  services as lettered "halls" (A–D) and projects as numbered "booths", with a gold route line that draws on scroll.
- Services are now four pages: Events Coverage, Exhibition Coverage, Launches & Openings, Social & Brand Content.
- Copy speaks as a team ("we"); inquiry form offers the new services plus podcast and real estate, and an event date.
- Project schema: `summary` + `coverage` replace the goal/idea/usage/role brief; gallery is 0–12 photos.

### Added
- 16 real projects imported from the studio's Facebook page (photos, alt text, highlight films and reels).
- Self-hosted, compressed project videos (`public/videos/`) that load only when played (`Film.astro`).
- "Check your date" action (`DateCheck.astro`): event date + venue open WhatsApp with the message written;
  a sticky version on phones replaces the floating WhatsApp button.
- Shotix logo (light/dark PNGs), wordmark header, aperture favicon and touch icon.
- Camera-shutter page transition (`Iris.astro`): eight curved blades close over the page on internal links and
  open on the next one. SVG + a few lines of JS, hover prefetch, off for reduced motion. If the next page is slow,
  the shut blades breathe instead of looking frozen.
- Instagram, TikTok and LinkedIn links (from the studio's Linktree) alongside Facebook.
- Service pages: "What you get" as a hall directory board, "How it works" as stops on the route line,
  booth codes on every film.

### Fixed
- Display font (Big Shoulders) never shipped: Google merged "Big Shoulders Display" into "Big Shoulders",
  so the build fell back to Arial Narrow.
- Project cover shrank and sat left on screens wider than the container.
- Service hero photo no longer repeats as a card lower on the page; phone hero shows a one-line summary.
- Films & reels play in Video.js 10 (`@videojs/html`, gold-themed skin, loaded on first play) and sit in a Swiper
  carousel (`FilmReel.astro`) with one height for every film and one-line booth tags.
- Lightbox rebuilt on Swiper: swipe, pinch/double-tap zoom, arrow keys, real alt text per photo (loaded on first open).
- Wide project covers keep portrait subjects' heads in frame.
- Arrow links use a drawn SVG arrow instead of a text glyph.

### Removed
- Placeholder stock photos, demo projects, `IMAGE-CREDITS.md` and the `seed:images` placeholder script.
- Wedding-site link setting.
