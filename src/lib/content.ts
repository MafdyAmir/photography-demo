import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { CATEGORIES } from '../content.config';

export type Category = (typeof CATEGORIES)[number];
export type Project = CollectionEntry<'projects'>;

export const CATEGORY_LABELS: Record<Category, string> = {
  product: 'Product',
  brand: 'Brand',
  corporate: 'Corporate',
};

/** /work/[category] and /work/[slug] share one URL segment, so project slugs can't be category names. */
function assertNoSlugCollisions(projects: Project[]) {
  const clash = projects.find((p) => (CATEGORIES as readonly string[]).includes(p.id));
  if (clash) {
    throw new Error(
      `Project file "${clash.id}" uses a reserved slug. Rename it so it is not one of: ${CATEGORIES.join(', ')}.`,
    );
  }
}

/** Published projects, sorted by `order` (ascending, unset last), then newest date first. */
export async function getPublishedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => data.published);
  assertNoSlugCollisions(projects);
  return projects.sort((a, b) => {
    const ao = a.data.order ?? Number.POSITIVE_INFINITY;
    const bo = b.data.order ?? Number.POSITIVE_INFINITY;
    if (ao !== bo) return ao - bo;
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

export async function getFeaturedProjects(limit = 6): Promise<Project[]> {
  return (await getPublishedProjects()).filter((p) => p.data.featured).slice(0, limit);
}

export async function getProjectsByCategory(category: Category): Promise<Project[]> {
  return (await getPublishedProjects()).filter((p) => p.data.category === category);
}

/** Other published projects in the same category, for "More work" links on a project page. */
export async function getRelatedProjects(project: Project, limit = 2): Promise<Project[]> {
  return (await getProjectsByCategory(project.data.category))
    .filter((p) => p.id !== project.id)
    .slice(0, limit);
}

/** Categories that have at least one published project (filters hide empty ones). */
export async function getActiveCategories(): Promise<Category[]> {
  const used = new Set((await getPublishedProjects()).map((p) => p.data.category));
  return CATEGORIES.filter((c) => used.has(c));
}

export async function getServices() {
  return (await getCollection('services')).sort((a, b) => a.data.order - b.data.order);
}

export async function getPublishedTestimonials() {
  return getCollection('testimonials', ({ data }) => data.published);
}

export async function getSettings() {
  const settings = await getEntry('settings', 'site');
  if (!settings) throw new Error('Missing src/content/settings/site.yml');
  return settings.data;
}
