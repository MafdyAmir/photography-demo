# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Primary: organisers and marketing teams behind exhibitions and events** (fashion shows, trade/brand exhibitions, launches, corporate events). They need a reliable crew to photograph and film the event and hand back material for social, press and recap content. Most arrive on a phone, from a link in Instagram, Facebook or WhatsApp, and judge in seconds whether the studio has covered events like theirs.
- **Internal: the studio owner as admin.** Adds projects, photos and copy through the CMS from a phone or laptop, with no code and no GitHub account.

## Product Purpose
Portfolio and lead-generation site for **Shotix Studios**. It presents real event and exhibition coverage (photo and video) and turns interested visitors into qualified inquiries via the inquiry form or WhatsApp. Success means qualified inquiries with tracked sources, then the first paid project that came through the site. Running cost stays close to zero (domain plus free static hosting).

## Positioning
Shotix Studios is a media studio offering **photography and videography together**, led by exhibitions and events coverage, with launches, social content, podcasts and real estate as additional services. One crew covers both stills and film of the same event. Confirmed by the owner on 2026-10-20. This replaces the PRD's earlier "product / brand / corporate photography" positioning.

## Operating Context
- Discovery happens mainly through social links (Facebook page, Instagram) and WhatsApp, then search. The design is mobile-first.
- Leads reach the studio only as Netlify Forms email or a direct WhatsApp chat. Nothing is stored on the site.
- Content is managed in Decap CMS at `/admin`. GitHub Pages serves a preview only: forms and CMS login don't work there.
- Market: Cairo, Egypt. Site language is English for the MVP, structured so Arabic (RTL) can be added later.

## Capabilities and Constraints
- Stack decided: Astro static site, Decap CMS (DecapBridge auth), Netlify hosting and Forms, GA4. No backend, database or server functions. Full rules are in `docs/CLAUDE.md`.
- **Service pages (decided 2026-10-20): four grouped pages.** Events Coverage · Exhibition Coverage · Launches & Openings · Social & Brand Content. Photography and videography are how every page is delivered, not separate pages. Podcast Production and Real Estate Visuals are listed as also-offered, with no page until real work exists.
- **Done (2026-10-20):** content model, categories, services, copy and form options moved to events + video.
- **Video (decided):** films live inside projects as compressed self-hosted MP4s with a poster, loaded only on play, so they don't cost the Lighthouse mobile targets (Perf ≥ 90, SEO ≥ 95, A11y ≥ 90).
- Shotix is a team ("we"); all copy speaks as "we".
- No fixed prices. The budget field stays hidden until budget ranges are set.
- Out of scope: booking, payments, client accounts or dashboards, CRM, blog. Arabic comes later.
- No link to wedding work. Weddings are not presented as part of this business.

## Brand Commitments
- Name: **Shotix Studios**.
- **Logo (confirmed 2026-10-20):** `~/Downloads/SHOTIX_Studios_dark_transparent.png` (white letters, for dark backgrounds) and `~/Downloads/SHOTIX_Studios_light_transparent.png` (navy letters, for light backgrounds). Both are 2220×946 transparent PNGs: heavy "SHOTIX" with a gold aperture as the "O", a gold-cut "X", "STUDIOS" between gold rules, and the tagline "PHOTO • VIDEO • EVENTS". Use as-is; never redraw it. The older film-strip version on the Facebook page is superseded. Ask for an SVG for crisp small sizes.
- Facebook page (source for content and branding): https://www.facebook.com/profile.php?id=61573848165646. It describes the studio as "high-quality photography & videography services" covering exhibitions and events.
- Voice: honest and direct. No claimed experience, clients or numbers that can't be backed up.

## Services (as published by the studio, May 2025)
Photography · Videography · Events Coverage · Exhibition Coverage · Podcast Production · Project Launch Coverage · Social Media Content · Real Estate Visuals. Self-description: "a full-service photography and production company" for "brands, businesses, and event organizers"; "a passionate team of creatives" (a team, not one person). Real deliverables: edited photo sets, recap/highlight films, social reels/verticals, same-day/next-day edits.

## Evidence on Hand
- **Downloaded archive (outside the repo):** `~/Downloads/shotix-facebook/` holds 150 photos and 15 videos from the Facebook page, grouped by event in `events/<slug>/{photos,videos}`, with `manifest.json` (title, date, caption, files) and contact sheets in `sheets/`. The owner confirmed this work is real and may be used.
- **17 real projects (2025–2026):** Galleria × Azab fashion talks; EGYPS (WEG booth); Cairo Marathon; Ruby live concert (Village West); Sailun × Nacita drift race; The Goats stand-up (City Garage); Food Africa 2025 and a second exhibition for El Raee Halwa & Tahina; Rodge DJ night; HACE Hotel Expo (International Cool Center / Ozti); Madinet Masr Taj City bazaar; Belmondo film BTS; Al Baset store opening; Azad Art Gallery opening; Raafat Metal Melting booth; Exotics at Night (video only); a college graduation (video only).
- **No portfolio work yet** for Podcast Production or Real Estate Visuals. Don't imply experience there until real work exists.
- The owner confirmed clients may be named on the site (the work is already public with brands visible).
- Contact: WhatsApp +20 120 170 6333 (from the services post; the About tab's "+1 201706333" is a broken format), shotixstudios@gmail.com, linktr.ee/shotixstudios (Instagram, TikTok, Facebook, X, Threads, LinkedIn).
- All images in `src/assets/uploads/` are real Shotix work from the Facebook archive above (16 projects published; Exotics at Night left out because its only video is low-res). The stock placeholders are gone.
- No testimonials or approved client logos yet. Those sections stay hidden; never fabricate them.

## Product Principles
1. **Real work only.** Show actual commissioned coverage. Anything self-initiated is marked as a concept. Never invent clients, quotes or metrics.
2. **The work leads.** Photos and film are the pitch; the site serves them and never competes with them.
3. **One message to a lead.** Every page ends with a clear way to start a project: the form or WhatsApp.
4. **The owner can run it alone.** Every content change must be doable in the CMS from a phone.
5. **Fast on a phone over 4G.** Media-heavy, but never at the cost of the mobile performance budget.

## Accessibility & Inclusion
Lighthouse mobile A11y ≥ 90, visible focus, full keyboard navigation, acceptable contrast. Descriptive alt text is required on every image (enforced by the schema). Video needs captions or a text description wherever it carries information. Layout uses CSS logical properties so it stays RTL-ready.
