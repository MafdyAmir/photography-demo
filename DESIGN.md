---
name: Shotix Studios
description: Cairo photo and video team for exhibitions, events, launches, and brand content
colors:
  primary: "#f2ae1f"
  primary-hover: "#ffc24a"
  on-primary: "#0a0a0b"
  bg: "#0a0a0b"
  surface: "#131417"
  navy: "#1b222b"
  ink: "#f4f2ee"
  ink-subtle: "#c3beb5"
  muted: "#aaa59c"
  muted-subtle: "#8b877f"
  line: "#2c2d31"
  border-subtle: "#45464c"
  black: "#000000"
  white-subtle: "rgb(255 255 255 / 0.08)"
  danger: "#ff8a7a"
typography:
  display:
    fontFamily: "Big Shoulders, 'Arial Narrow', sans-serif"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1rem, 0.6rem + 2vw, 2.5rem)"
  section: "clamp(4rem, 3rem + 4vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
---

# Design System: Shotix Studios

## Overview

**Creative North Star: "The Exhibition Venue & Floor Plan"**

The site is conceived as the exhibition venue Shotix Studios works within. Rather than generic agency templates or floating white cards, the design is structured as a physical space: each service represents a lettered "Hall" (A through D), and each project is an individually catalogued "Booth" (e.g., B01, B02). Photographs and films are the exhibits themselves—presented edge-to-edge in full fidelity without artificial tints, borders, or rounded corners.

The visual atmosphere is dark, architectural, and deliberate: a near-black venue ground (`#0a0a0b`) illuminated by warm white typography and punctuated by a singular marking color—the logo's warm gold (`#f2ae1f`). Gold functions strictly as directional marking: hall identification plates, booth codes, the progressive scroll route line, and key interactive conversions.

**Key Characteristics:**
- **Exhibition Architecture:** Halls (services), booths (projects), and corridors (generous negative space between sections).
- **Singular Accent:** Logo gold is the only marking color; it appears on ≤10% of any view to preserve maximum navigational authority.
- **Pure Materiality:** Real photography and self-hosted film lead without faux styling, drop shadows, or decorative badges.
- **Physical Camera Cues:** 8-blade camera iris shutter transitions (`Iris.astro`) and tactile exhibition wayfinding.
- **Mobile-First Utility:** Sticky date-check action, touch-optimized swiping carousels, and pinch-zoom lightbox.

## Colors

The palette derives from high-end exhibition spaces and the official Shotix logo mark: deep venue blacks, dark slate surfaces, warm typography, and an intense gold highlight.

### Primary
- **Shotix Gold** (`#f2ae1f`): The single brand accent. Used exclusively for active navigation markers, hall letters, booth tags, the route line, and primary actions.
- **Shotix Gold Hover** (`#ffc24a`): Interactive state for buttons and active tags.
- **On Gold Ink** (`#0a0a0b`): High-contrast ink for text sitting directly on gold plates or buttons.

### Neutral
- **Venue Black (Ground)** (`#0a0a0b`): The atmospheric base ground for the entire site.
- **Hall Surface** (`#131417`): Elevated surface background for cards, hero containers, and modals.
- **Logo Navy** (`#1b222b`): Supporting secondary surface drawn directly from the logo mark.
- **Signage Ink** (`#f4f2ee`): Warm off-white for headings, titles, and high-emphasis body text.
- **Muted Stone** (`#aaa59c`): Low-emphasis metadata, category descriptions, booth tags, and captions.
- **Boundary Line** (`#2c2d31`): Hairline dividers and grid lines echoing exhibition trussing.

### Named Rules
**The Marking Color Rule.** Gold is reserved exclusively for navigation, location, and action. It is never used for decorative backgrounds, long paragraph text, or non-interactive flourishes.

## Typography

Typography pairs a compressed wayfinding signage grotesque with a clean, highly legible humanist sans.

**Display Font:** `Big Shoulders`, with fallback `'Arial Narrow', sans-serif`.
**Body Font:** `Barlow`, with fallback `system-ui, sans-serif`.

**Character:** Bold, utilitarian exhibition signage meets clear, dependable client communication.

### Hierarchy
- **Display / Hall Title:** `Big Shoulders`, weight 800–900, uppercase, `line-height: 0.95`, `letter-spacing: -0.005em`. Used for major section titles, hero headings, and hall names.
- **Booth / Meta Label:** `Big Shoulders`, weight 800, uppercase, `font-size: var(--step--1)`, `letter-spacing: 0.1em`. Used for booth codes (e.g. `B01 · EGYPS`), film counts, and hall directory tags.
- **Section Heading:** `Big Shoulders`, weight 800, `font-size: var(--step-2)`, tight leading.
- **Body:** `Barlow`, weight 400 (500 for emphasis), `font-size: var(--step-0)`, `line-height: 1.55`. Max line length ~65–75ch.

## Layout

The spatial model simulates a navigable exhibition floor plan:
- **Max Container Width:** `84rem` (`--max`), centered with responsive horizontal gutters (`clamp(1rem, 0.6rem + 2vw, 2.5rem)`).
- **Corridor Spacing:** Sections are separated by generous "corridors" (`clamp(4rem, 3rem + 4vw, 7rem)`).
- **Route Line:** A 3px gold line (`--line: 3px`) running down the inline-start edge of service routes, drawing progressively as the user scrolls through booths.
- **CSS Logical Properties:** All directional styles use `margin-inline`, `padding-block`, `inset-inline-start`, etc., ensuring instant RTL readiness.

## Elevation & Depth

**Philosophy: Flat & Tonal Layering.**

No drop shadows, blurred ambient shadows, or faux-neumorphic bevels are permitted. Depth is conveyed strictly through tonal stacking and physical overlapping:
- Ground (`#0a0a0b`) → Surface (`#131417`) → Navy plate (`#1b222b`) → Hairline border (`#2c2d31`).
- The Lightbox and Camera Shutter sit in full viewport overlays with pure black / dark gradients.

## Shapes

- **Sharp Geometry:** `border-radius: 0px` across all containers, buttons, inputs, tags, and media frames. No rounded pills or soft cards.
- **Hairline Borders:** `1px solid var(--line)` for structural delineation.
- **The Iris:** Custom SVG 8-blade camera iris used for transitions and aperture brand motifs.

## Components

### Buttons & CTAs
- **Primary Action:** Solid gold background (`#f2ae1f`), black text (`#0a0a0b`), `border-radius: 0`, uppercase `Big Shoulders` or bold `Barlow`, 0.2s color transition on hover to `#ffc24a`.
- **Secondary / Ghost:** Transparent background, `1px solid var(--line)`, text color `var(--ink)`. On hover: gold border and gold text.

### Hall Directory & Booth Cards
- **Hall Plates:** Gold rectangular tabs indicating Hall Letter (A, B, C, D) attached to section headers.
- **Booth Cards:** Edge-to-edge photography, booth code badge (e.g. `B02`), client title, and coverage deliverables.

### Video Player & Carousel (`FilmReel`)
- **Player Skin:** Custom Video.js gold theme with rectangular playback bar and minimal controls.
- **Carousel:** Equal-height slides with responsive widths (vertical 9:16 reels vs. horizontal 16:9 films), swipable via Swiper with custom drawn SVG arrow controls.

### Lightbox (`Gallery`)
- Fullscreen native `<dialog>` with backdrop `#050506`.
- Touch swipe, pinch-to-zoom (up to 3x), keyboard navigation (Left/Right/Esc), live counter (`1 / 12`), and semantic alt text captions.

### Date Check (`DateCheck`)
- Sticky mobile bottom bar allowing immediate event date entry, directly composing a pre-filled WhatsApp message.

## Do's and Don'ts

### Do:
- **Do** keep all corners completely square (`border-radius: 0`).
- **Do** reserve gold strictly for active wayfinding, hall markers, booth tags, and interactive conversion buttons.
- **Do** require meaningful, descriptive `alt` text on every image and video poster.
- **Do** route all internal navigations through the `url()` utility for base path compatibility.
- **Do** use CSS logical properties (`*-inline`, `*-block`) for RTL compatibility.

### Don't:
- **Don't** add drop shadows, gradient text, rounded corners, or decorative floating cards.
- **Don't** use decorative stock photography or placeholder wedding content.
- **Don't** display fixed pricing tables or invent unverified client numbers/claims.
- **Don't** hardcode root absolute URLs like `href="/services"` without the `url()` wrapper.
