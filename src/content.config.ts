import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import type { SchemaContext } from 'astro:content';

// Shared field schemas -------------------------------------------------------

export const CATEGORIES = ['events', 'exhibitions', 'launches', 'social'] as const;

/** Every image on the site carries descriptive alt text (PRD §7, §8). */
const imageWithAlt = ({ image }: SchemaContext) =>
  z.object({
    src: image(),
    alt: z.string().trim().min(5, 'Alt text is required: describe what is in the photo.'),
  });

/** The CMS saves cleared optional fields as "" or null, so treat both as "not set". */
const empty = (v: unknown) => (v === '' || v === null ? undefined : v);
const optionalText = (max = 2000) => z.preprocess(empty, z.string().trim().max(max).optional());

const seo = z
  .preprocess(
    (v) => v ?? {},
    z.object({
      title: optionalText(70),
      description: optionalText(170),
    }),
  );

const optionalUrl = z.preprocess(empty, z.url().optional());

const step = z.object({
  title: z.string().trim().min(1),
  text: z.string().trim().min(1),
});

// Collections ----------------------------------------------------------------

/** Case studies. The file name is the URL slug: /work/<slug>. */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/projects' }),
  schema: (ctx) =>
    z.object({
      title: z.string().trim().min(1),
      category: z.enum(CATEGORIES),
      client: optionalText(),
      isConcept: z.boolean().default(false), // self-initiated work only; shows the "Concept Project" badge
      coverImage: imageWithAlt(ctx),
      gallery: z.preprocess(
        empty,
        z.array(imageWithAlt(ctx)).max(12, 'A project can have at most 12 gallery images.').default([]),
      ),
      // Self-hosted MP4s in public/videos. Loaded only when the visitor presses play.
      videos: z.preprocess(
        empty,
        z
          .array(
            z.object({
              src: z.string().trim().regex(/^\/videos\/[\w.-]+\.mp4$/, 'Upload the MP4 to the Videos folder.'),
              title: z.string().trim().min(3),
              orientation: z.enum(['horizontal', 'vertical']).default('horizontal'),
              poster: ctx.image(),
            }),
          )
          .default([]),
      ),
      summary: z.string().trim().min(1),
      coverage: z.preprocess(empty, z.array(z.string().trim().min(1)).default([])),
      featured: z.boolean().default(false),
      published: z.boolean().default(false),
      order: z.preprocess(empty, z.coerce.number().int().optional()),
      date: z.coerce.date(),
      seo,
    }),
});

/** The four fixed service pages: /services/<id>. */
const services = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/services' }),
  schema: (ctx) =>
    z.object({
      title: z.string().trim().min(1),
      category: z.enum(CATEGORIES), // related projects are pulled by this
      cardSummary: z.string().trim().min(1), // short text for the Home service card
      intro: z.string().trim().min(1),
      whoItsFor: z.string().trim().min(1),
      deliverables: z.array(z.string().trim().min(1)).min(1),
      process: z.array(step).min(1),
      heroImage: imageWithAlt(ctx),
      order: z.number().int().default(0),
      seo,
    }),
});

/** Real, approved testimonials only. The section hides when none are published. */
const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string().trim().min(1),
    name: z.string().trim().min(1),
    role: optionalText(),
    company: optionalText(),
    projectRef: z.preprocess(empty, reference('projects').optional()),
    published: z.boolean().default(false),
  }),
});

/** Singleton: src/content/settings/site.yml */
const settings = defineCollection({
  loader: glob({ pattern: 'site.{yml,yaml}', base: './src/content/settings' }),
  schema: (ctx) =>
    z.object({
      siteName: z.string().trim().min(1),
      tagline: optionalText(),
      location: z.object({
        city: z.string().trim().min(1),
        country: z.string().trim().min(1),
        areaServed: optionalText(),
      }),

      // Home
      heroTitle: z.string().trim().min(1),
      heroSubtitle: z.string().trim().min(1),
      heroImage: imageWithAlt(ctx),
      whyWorkWithMe: z.preprocess(empty, z.array(step).max(4).default([])),
      finalCtaTitle: z.string().trim().min(1),
      finalCtaText: optionalText(),

      // About
      aboutShort: z.string().trim().min(1), // Home teaser
      aboutText: z.string().trim().min(1), // Full About page (paragraphs separated by blank lines)
      processSteps: z.preprocess(empty, z.array(step).max(4).default([])),
      aboutImage: imageWithAlt(ctx),

      // Contact
      whatsappNumber: z
        .string()
        .trim()
        .regex(/^\d{8,15}$/, 'WhatsApp number: digits only with country code, e.g. 201001234567'),
      whatsappDefaultMessage: z.string().trim().min(1),
      email: z.email(),
      instagram: optionalUrl,
      linkedin: optionalUrl,
      tiktok: optionalUrl,
      facebook: optionalUrl,

      // Inquiry form. Budget field is hidden while this list is empty (PRD FR-1).
      budgetRanges: z.preprocess(empty, z.array(z.string().trim().min(1)).default([])),
      leadSources: z.preprocess(empty, z.array(z.string().trim().min(1)).default([])),

      // Optional: only logos you have written permission to show. Section hides when empty.
      clientLogos: z.preprocess(
        empty,
        z
        .array(
          z.object({
            name: z.string().trim().min(1),
            logo: ctx.image(),
          }),
        )
        .default([]),
      ),

      defaultSeo: z.object({
        title: z.string().trim().min(1).max(70),
        description: z.string().trim().min(1).max(170),
        ogImage: z.preprocess(empty, ctx.image().optional()),
      }),
    }),
});

export const collections = { projects, services, testimonials, settings };
