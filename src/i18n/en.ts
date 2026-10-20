/**
 * UI strings (not CMS content). When Arabic is added, create ar.ts with the same keys
 * and add `ar: { lang: 'ar', dir: 'rtl' }` to LOCALES.
 */
export const LOCALES = {
  en: { lang: 'en', dir: 'ltr' },
} as const;

export const en = {
  nav: {
    work: 'Work',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    startProject: 'Start a project',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    home: 'Home',
  },
  common: {
    viewWork: 'See the work',
    startProject: 'Start a project',
    chatOnWhatsApp: 'Chat on WhatsApp',
    email: 'Email',
    conceptBadge: 'Concept Project',
    conceptNote: 'A self-initiated project created to show our approach, not a paid client commission.',
    allWork: 'All halls',
    seeAll: 'See all work',
    hall: 'Hall',
    booth: 'Booth',
    alsoOffered: 'We also produce podcasts and real estate visuals. Ask us about them.',
  },
  dateCheck: {
    title: 'Check your date',
    date: 'Event date',
    venue: 'Venue',
    venuePlaceholder: 'e.g. Cairo Festival City',
    send: 'Ask on WhatsApp',
    sendShort: 'Ask us',
    note: 'Opens WhatsApp with your date and venue already written.',
  },
  video: {
    play: 'Play',
    films: 'Films & reels',
    prev: 'Previous film',
    next: 'Next film',
    count: (n: number) => `${n} films`,
  },
  home: {
    halls: 'Services',
    hallsIntro: 'Four halls, one crew. Every service is photo and video together.',
    selectedWork: 'Featured work',
    why: 'Why Shotix',
    about: 'About',
    aboutMore: 'More about us',
    testimonials: 'Kind words',
    clients: 'Brands we’ve worked with',
  },
  work: {
    title: 'Work',
    intro: 'Events, exhibitions, launches and brand content we’ve covered in photo and video.',
    filterLabel: 'Filter work by service',
    empty: 'No projects in this hall yet.',
  },
  project: {
    covered: 'What we covered',
    client: 'Client',
    gallery: 'Gallery',
    related: 'More from',
    ctaTitle: 'Want coverage like this?',
    ctaText: 'Send us your date and venue and we’ll tell you how we’d cover it.',
    openImage: 'Open image',
    lightbox: {
      label: 'Image viewer',
      close: 'Close',
      prev: 'Previous image',
      next: 'Next image',
    },
  },
  service: {
    whoFor: 'Who it’s for',
    deliverables: 'What you get',
    examples: 'Work in this hall',
    examplesEmpty: 'New projects for this service are coming soon.',
    process: 'How it works',
    ctaTitle: 'Planning an event?',
  },
  about: {
    title: 'About',
    process: 'How we work',
  },
  contact: {
    title: 'Start a project',
    intro: 'Tell us about your event and we’ll get back to you with how we’d cover it.',
    other: 'Prefer to talk directly?',
    based: 'Based in',
  },
  footer: {
    contact: 'Get in touch',
    explore: 'Explore',
    privacy: 'Privacy',
    rights: 'All rights reserved.',
  },
} as const;

export type UIStrings = typeof en;

/** Current UI strings. Becomes locale-aware when Arabic is added. */
export const t = en;
export const locale = LOCALES.en;
