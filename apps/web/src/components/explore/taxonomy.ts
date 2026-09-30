/**
 * Categories and tags for the Explore pages: one cached read of `GET /categories` and
 * `GET /tags` (edge TTL 900 s at the API; in-process memo of 60 s here so a burst of listing
 * renders does not fan out), localized names and the legacy-slug resolver (`qol` →
 * `quality-of-life`, PLAN T0-06 and docs/backlog/WP-10.md).
 */
import type { CategoryDTO, TagDTO } from '@sotf/contracts/catalog';
import type { Locale } from '@sotf/i18n';
import type { z } from 'zod';
import { optional, serverApi } from '../../lib/api.ts';

export type Category = z.infer<typeof CategoryDTO>;
export type Tag = z.infer<typeof TagDTO>;

/** Legacy category slugs of the 2023–2026 site (used when the API is unreachable). */
const LEGACY_FALLBACK: Readonly<Record<string, string>> = { qol: 'quality-of-life' };

const MEMO_MS = 60_000;
let memo: { at: number; categories: Category[] | null; tags: Tag[] | null } | null = null;

async function fetchTaxonomy(): Promise<{ categories: Category[] | null; tags: Tag[] | null }> {
  if (memo && Date.now() - memo.at < MEMO_MS && memo.categories && memo.tags) return memo;
  const [categories, tags] = await Promise.all([
    optional((signal) => serverApi().catalog.categories({ query: { kind: 'all' } }, { signal }), 1500),
    optional((signal) => serverApi().catalog.tags({}, { signal }), 1500),
  ]);
  const next = { at: Date.now(), categories: categories?.items ?? null, tags: tags?.items ?? null };
  if (next.categories && next.tags) memo = next;
  return next;
}

export interface Taxonomy {
  /** False when the categories could not be loaded (the page still renders, with slugs). */
  readonly available: boolean;
  readonly categories: readonly Category[];
  readonly tags: readonly Tag[];
  category(slug: string): Category | null;
  /** Active category for a slug or one of its legacy slugs. */
  resolveCategory(slug: string): { slug: string; kind: 'mod' | 'build' } | null;
  categoryName(slug: string, fallback?: string): string;
  tag(slug: string): Tag | null;
  tagName(slug: string): string;
  /** `taxonomy(nameKey, fallback)` for `@sotf/ui/domain` (category names on cards). */
  byNameKey(nameKey: string, fallback: string): string;
}

function localized(names: Category['names'], locale: Locale, fallback: string): string {
  return names[locale] ?? fallback;
}

/** Title-cases a slug for tags missing from the curated list (`base-building` → `Base building`). */
function humanize(slug: string): string {
  const text = slug.replace(/-/g, ' ');
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export async function loadTaxonomy(locale: Locale): Promise<Taxonomy> {
  const { categories, tags } = await fetchTaxonomy();
  const categoryList = categories ?? [];
  const tagList = tags ?? [];
  const bySlug = new Map<string, Category>();
  for (const category of categoryList) bySlug.set(category.slug, category);
  const byLegacy = new Map<string, Category>();
  for (const category of categoryList) {
    for (const legacy of category.legacySlugs) if (!bySlug.has(legacy)) byLegacy.set(legacy, category);
  }
  const tagBySlug = new Map<string, Tag>();
  for (const tag of tagList) tagBySlug.set(tag.slug, tag);
  const byNameKey = new Map<string, string>();
  for (const category of categoryList)
    byNameKey.set(category.nameKey, localized(category.names, locale, category.name));
  for (const tag of tagList) byNameKey.set(tag.nameKey, localized(tag.names, locale, tag.name));

  const resolveCategory = (slug: string) => {
    const found = bySlug.get(slug) ?? byLegacy.get(slug);
    if (found) return { slug: found.slug, kind: found.kind };
    if (categories) return null;
    // Catalogue unavailable: accept the v2 slugs and the known legacy aliases.
    const fallback = LEGACY_FALLBACK[slug] ?? slug;
    return /^[a-z0-9][a-z0-9-]*$/.test(fallback) ? { slug: fallback, kind: 'mod' as const } : null;
  };

  return {
    available: categories !== null,
    categories: categoryList,
    tags: tagList,
    category: (slug) => bySlug.get(slug) ?? null,
    resolveCategory,
    categoryName: (slug, fallback) => {
      const category = bySlug.get(slug) ?? byLegacy.get(slug);
      return category ? localized(category.names, locale, category.name) : (fallback ?? humanize(slug));
    },
    tag: (slug) => tagBySlug.get(slug) ?? null,
    tagName: (slug) => {
      const tag = tagBySlug.get(slug);
      return tag ? localized(tag.names, locale, tag.name) : humanize(slug);
    },
    byNameKey: (nameKey, fallback) => byNameKey.get(nameKey) ?? fallback,
  };
}
