/**
 * Contents of each sitemap (PLAN §4.4, §8.6): `/sitemaps/{static,mods,builds,categories,tags,kits,
 * creators,news,best}.xml`. Every page is listed in the 13 locales with the hreflang cluster;
 * `lastmod` is always a real date of the content (`lastReleasedAt`, `updatedAt`), never "now":
 * pages without one simply omit it. Only indexable pages appear (published, not NSFW, kits public
 * with ≥ 3 items, tags with ≥ 3 items, best hubs with ≥ 5 items).
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import { KIT_LIMITS } from '@sotf/contracts/kits';
import { categoryPath, kitPath, profilePath, tagPath } from '@sotf/contracts/seo';
import { allCards, allCategories, allCreators, allKits, allTags, countCards, newestRelease } from './data.ts';
import type { SitemapPage } from './xml.ts';

export const SITEMAP_TYPES = [
  'static',
  'mods',
  'builds',
  'categories',
  'tags',
  'kits',
  'creators',
  'news',
  'best',
] as const;
export type SitemapType = (typeof SITEMAP_TYPES)[number];

export function isSitemapType(value: string | undefined): value is SitemapType {
  return (SITEMAP_TYPES as readonly string[]).includes(value ?? '');
}

/** Tags index from 3 items (PLAN §4.2). */
const TAG_INDEX_MIN_ITEMS = 3;
/** Best hubs index from 5 real items (PLAN §8.6). */
const BEST_INDEX_MIN_ITEMS = 5;

/** Localized public pages without an entity (PLAN §4.2). Guides and legal pages are MDX per locale. */
export const STATIC_PATHS: readonly string[] = [
  '/',
  '/mods',
  '/builds',
  '/kits',
  '/creators',
  '/patch-radar',
  '/install',
  '/achievements',
  '/news',
  '/about',
  '/brand',
  '/developers',
  '/kelvinseek',
  '/privacy',
  '/terms',
  '/content-policy',
  '/dmca',
  '/cookies',
];

/** GEO hubs of PLAN §4.2 and the listing each one is built from. */
export const BEST_HUBS: ReadonlyArray<{
  topic: string;
  queries: ReadonlyArray<NonNullable<Parameters<typeof countCards>[0]>['query']>;
  match: (card: ModCardDTO) => boolean;
}> = [
  { topic: 'mods', queries: [{ type: 'mod' }], match: (card) => card.kind === 'mod' },
  {
    topic: 'quality-of-life-mods',
    queries: [{ type: 'mod', category: ['quality-of-life'] }],
    match: (card) => card.kind === 'mod' && card.category?.slug === 'quality-of-life',
  },
  {
    topic: 'multiplayer-mods',
    queries: [
      { type: 'mod', multiplayer: 'client_side' },
      { type: 'mod', multiplayer: 'host_only' },
      { type: 'mod', multiplayer: 'all_players' },
    ],
    match: (card) =>
      card.kind === 'mod' &&
      (card.multiplayerRole === 'client_side' ||
        card.multiplayerRole === 'host_only' ||
        card.multiplayerRole === 'all_players'),
  },
  {
    topic: 'dedicated-server-mods',
    queries: [{ type: 'mod', dedicated: 'yes' }],
    match: (card) => card.kind === 'mod',
  },
  {
    topic: 'building-mods',
    queries: [{ type: 'mod', category: ['building'] }],
    match: (card) => card.kind === 'mod' && card.category?.slug === 'building',
  },
  { topic: 'libraries', queries: [{ type: 'library' }], match: (card) => card.kind === 'library' },
];

/** News posts: MDX files under `src/content/news/` (slug = file name), found at build time. */
const NEWS_FILES = import.meta.glob('/src/content/news/**/*.{md,mdx}');

export function newsSlugs(): string[] {
  const slugs = new Set<string>();
  for (const file of Object.keys(NEWS_FILES)) {
    const name =
      file
        .split('/')
        .pop()
        ?.replace(/\.(mdx?)$/, '') ?? '';
    // `welcome-to-v2.es.mdx` and `es/welcome-to-v2.mdx` are translations of one post.
    const slug = name.split('.')[0] ?? '';
    if (/^[a-z0-9][a-z0-9-]*$/.test(slug) && slug !== 'index') slugs.add(slug);
  }
  return [...slugs].sort();
}

function modImages(card: ModCardDTO): SitemapPage['images'] {
  return card.thumbnail ? [{ url: card.thumbnail.url }] : [];
}

async function modPages(kind: 'mods' | 'builds'): Promise<SitemapPage[]> {
  const cards = await allCards();
  return cards
    .filter((card) => (kind === 'builds' ? card.kind === 'build' : card.kind !== 'build'))
    .map((card) => ({ path: card.canonicalPath, lastmod: card.lastReleasedAt, images: modImages(card) }));
}

async function staticPages(): Promise<SitemapPage[]> {
  const cards = await allCards();
  const mods = cards.filter((card) => card.kind !== 'build');
  const builds = cards.filter((card) => card.kind === 'build');
  const lastmods: Record<string, string | null> = {
    '/': newestRelease(cards),
    '/mods': newestRelease(mods),
    '/builds': newestRelease(builds),
  };
  return STATIC_PATHS.map((path) => ({ path, lastmod: lastmods[path] ?? null }));
}

async function categoryPages(): Promise<SitemapPage[]> {
  const [categories, cards] = await Promise.all([allCategories(), allCards()]);
  return categories
    .filter((category) => category.count > 0)
    .map((category) => ({
      path: categoryPath(category.slug),
      lastmod: newestRelease(cards.filter((card) => card.category?.slug === category.slug)),
    }));
}

async function tagPages(): Promise<SitemapPage[]> {
  const tags = await allTags();
  return tags.filter((tag) => tag.count >= TAG_INDEX_MIN_ITEMS).map((tag) => ({ path: tagPath(tag.slug) }));
}

async function kitPages(): Promise<SitemapPage[]> {
  const kits = await allKits();
  return kits
    .filter((kit) => kit.visibility === 'public' && kit.itemsCount >= KIT_LIMITS.indexMinItems)
    .map((kit) => ({
      path: kitPath(kit.owner.handle, kit.slug),
      lastmod: kit.updatedAt,
      images: kit.cover ? [{ url: kit.cover.url }] : [],
    }));
}

async function creatorPages(): Promise<SitemapPage[]> {
  const creators = await allCreators();
  return creators
    .filter((creator) => creator.modsCount + creator.buildsCount > 0)
    .map((creator) => ({
      path: profilePath(creator.user.handle),
      lastmod: creator.lastReleasedAt,
      images: creator.user.avatarUrl ? [{ url: creator.user.avatarUrl }] : [],
    }));
}

function newsPages(): SitemapPage[] {
  return newsSlugs().map((slug) => ({ path: `/news/${slug}` }));
}

async function bestPages(): Promise<SitemapPage[]> {
  const cards = await allCards();
  const pages: SitemapPage[] = [];
  for (const hub of BEST_HUBS) {
    let total = 0;
    for (const query of hub.queries) total += await countCards({ query });
    if (total < BEST_INDEX_MIN_ITEMS) continue;
    pages.push({ path: `/best/${hub.topic}`, lastmod: newestRelease(cards.filter(hub.match)) });
  }
  return pages;
}

export async function sitemapPages(type: SitemapType): Promise<SitemapPage[]> {
  switch (type) {
    case 'static':
      return staticPages();
    case 'mods':
    case 'builds':
      return modPages(type);
    case 'categories':
      return categoryPages();
    case 'tags':
      return tagPages();
    case 'kits':
      return kitPages();
    case 'creators':
      return creatorPages();
    case 'news':
      return newsPages();
    case 'best':
      return bestPages();
  }
}

/** `lastmod` of each child sitemap in the index: the newest `lastmod` of its pages. */
export function newestLastmod(pages: readonly SitemapPage[]): string | null {
  let newest: number | null = null;
  for (const page of pages) {
    if (!page.lastmod) continue;
    const time = new Date(page.lastmod).getTime();
    if (!Number.isNaN(time) && (newest === null || time > newest)) newest = time;
  }
  return newest === null ? null : new Date(newest).toISOString();
}
