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
    startProject: 'Start a Project',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    home: 'Home',
  },
  common: {
    viewWork: 'View Work',
    startProject: 'Start a Project',
    chatOnWhatsApp: 'Chat on WhatsApp',
    whatsappFab: 'Chat on WhatsApp',
    email: 'Email',
    conceptBadge: 'Concept Project',
    conceptNote: 'A self-initiated project created to show my approach — not a paid client commission.',
    allWork: 'All',
    seeAll: 'See all work',
  },
  home: {
    selectedWork: 'Selected Work',
    services: 'Services',
    servicesIntro: 'Three focused services for brands and businesses.',
    serviceLink: 'Explore the service',
    why: 'Why Work With Me',
    about: 'About',
    aboutMore: 'More about me',
    testimonials: 'Kind Words',
    clients: 'Brands I’ve worked with',
  },
  work: {
    title: 'Work',
    intro: 'Selected product, brand and corporate projects.',
    filterLabel: 'Filter projects by category',
    empty: 'No projects in this category yet.',
  },
  project: {
    brief: 'The Brief',
    goal: 'Goal',
    idea: 'Idea',
    usage: 'Image use',
    role: 'My role',
    services: 'Services',
    client: 'Client',
    gallery: 'Gallery',
    related: 'More',
    ctaTitle: 'Want images like these for your brand?',
    ctaText: 'Tell me about your products and where you’ll use the images.',
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
    examples: 'Examples',
    examplesEmpty: 'New projects for this service are coming soon.',
    process: 'How it works',
    ctaTitle: 'Ready to plan your shoot?',
  },
  about: {
    title: 'About',
    process: 'How I work',
  },
  contact: {
    title: 'Start a Project',
    intro: 'Tell me about your project and I’ll get back to you with ideas and next steps.',
    other: 'Prefer to talk directly?',
    based: 'Based in',
  },
  footer: {
    contact: 'Get in touch',
    explore: 'Explore',
    privacy: 'Privacy',
    weddings: 'Wedding photography',
    rights: 'All rights reserved.',
  },
} as const;

export type UIStrings = typeof en;

/** Current UI strings. Becomes locale-aware when Arabic is added. */
export const t = en;
export const locale = LOCALES.en;
