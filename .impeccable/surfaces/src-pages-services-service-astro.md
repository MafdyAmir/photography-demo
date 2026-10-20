---
version: 1
slug: "src-pages-services-service-astro"
primary_target: "src/pages/services/[service].astro"
related_targets: ["src/pages/index.astro","src/layouts/BaseLayout.astro"]
---

# Services surface (Shotix rebrand)

Mode: Persuade. Scope: the four service pages (/services/<id>) plus the sitewide world they establish (header, footer, home, work, project, about, contact inherit it).

Audience: event/exhibition organisers and marketing leads arriving on a phone from Instagram/WhatsApp. Job: confirm in seconds that Shotix has covered events like theirs, then message. Proof: named real projects with photos + reels. Constraints: PRODUCT.md (no invented claims, no prices, mobile-first, Lighthouse targets, RTL-ready, English now/Arabic later).

Decisions: four services = Events Coverage (A), Exhibition Coverage (B), Launches & Openings (C), Social & Brand Content (D). Videos self-hosted, compressed, click-to-load with poster. Logo = supplied PNGs (dark/light), no SVG available. User delegated visual choices: logo colours to a degree, photography leads, creative, beautiful on mobile above all.

## Direction contract

THESIS: The site is the exhibition centre Shotix works in. Each service is a hall with its letter on a gold plate, each project a numbered booth; the photographs are the exhibits. It refuses the category default: autoplay showreel under a centred headline plus four equal service cards.

OWN-WORLD: Near-black venue ground (#0a0a0b) with warm off-white type. Logo gold (#f4b223) is the only marking colour: hall plates, booth codes, the route line, the primary action. Navy (#27303b) for secondary surfaces. Condensed signage grotesque in caps for halls and booth codes, a plain sans for reading. Photos run full colour, edge to edge, never tinted or carded. Square corners. Thin rules like hall signage.

STORY: Read the hall sign, see the real exhibits (named clients), understand photo + video from one crew with same-day reels, then tap "Check your date" and land in WhatsApp with the date and venue already written.

FIRST VIEWPORT: Phone, 390px wide. Logo top-left, menu top-right. A gold plate down the inline-start edge carrying the hall letter at full height. Heading set beside it (Exhibition Coverage), one line saying what you get. Under it, one real photo at full bleed with a gold booth tag (B01 · EGYPS · WEG). A sticky bottom bar holds the working action: date + venue fields that open WhatsApp. On desktop the plate grows into a tall gold column, the photo takes the right two-thirds, and the action sits under the heading.

FORM: Hall Signage & Floor Plan. Position 4 of 7 on the grounded list, assigned by the roll. seed:700719d43fcdd71d. Raised: one unbroken gold route line (step row); gold the only mark colour, one inverted plate per screen (jackfield); every frame traces to its booth (jacquard); whole-module reflow (hardware); deep corridor gaps between sections (cloud quarry); plain signage words (consumer).

SIGNATURE INTERACTION: The gold route line runs down the inline-start edge from the hall plate through the booths to the inquiry. Scroll-driven, it draws progressively, and each booth's code lights as the line reaches it. Under reduced motion the line is static and complete.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open
- Booth codes are display labels (hall letter + order), not data claims.

## Adaptations (recorded after finish review, 2026-10-20)
- **Sticky bar is date-only.** Date + venue + button can't sit legibly in one 390px bar (inputs drop under 16px or the button loses its label). The bar asks for the date; venue is the first reply in WhatsApp. The full date + venue form still appears in the desktop hero and in every closing CTA.
- **Hero frame is CMS-chosen per service** (`heroImage`), so it isn't fixed to B01. Exhibitions uses the strongest Food Africa frame (B02). If the hero is a booth's cover, that booth's card shows its next gallery frame, so no photo repeats on the page.
- **Desktop photo is ~46% wide, not two-thirds**, so the date form keeps a readable column beside the plate.
