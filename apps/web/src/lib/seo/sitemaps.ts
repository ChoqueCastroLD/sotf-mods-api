/**
 * Contents of each sitemap (PLAN §4.4, §8.6): `/sitemaps/{static,mods,builds,categories,tags,kits,
 * creators,news,best}.xml`. Every page is listed in the 13 locales with the hreflang cluster
 * (partially translated documents: only their translated locales, without cluster);
 * `lastmod` is always a real date of the content (`lastReleasedAt`, `updatedAt`), never "now":
 * pages without one simply omit it. Only indexable pages appear (published, not NSFW, kits public
 * with ≥ 3 items, tags with ≥ 3 items, best hubs with ≥ 5 items).
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import { KIT_LIMITS } from '@sotf/contracts/kits';
import { MAX_PAGE_SIZE } from '@sotf/contracts/pagination';
import { categoryPath, kitPath, profilePath, tagPath } from '@sotf/contracts/seo';
import type { Locale } from '@sotf/i18n';
import { buildPath } from '../../components/content/radar.ts';
import { ABOUT_UPDATED, aboutDoc } from '../../content/about/index.ts';
import { BEST_TOPICS, HUBS } from '../../content/best/hubs.ts';
import { DEVELOPERS_UPDATED, developersDoc } from '../../content/developers/index.ts';
import { INSTALL_VERIFIED, installGuide } from '../../content/install/index.ts';
import { LEGAL_DOCS, LEGAL_META, legalDocs } from '../../content/legal/index.ts';
import { serverApi } from '../api.ts';
import {
  allCards,
  allCategories,
  allCreators,
  allKits,
  allRequests,
  allTags,
  memoized,
  newestRelease,
} from './data.ts';
import type { SitemapPage } from './xml.ts';

export const SITEMAP_TYPES = [
  'static',
  'mods',
  'builds',
  'categories',
  'tags',
  'kits',
  'requests',
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
export const BEST_INDEX_MIN_ITEMS = 5;

/** Localized public pages without an entity nor a Markdown document (PLAN §4.2), all 13 locales. */
export const STATIC_PATHS: readonly string[] = [
  '/',
  '/mods',
  '/builds',
  '/kits',
  '/requests',
  '/creators',
  '/categories',
  '/tags',
  '/patch-radar',
  '/achievements',
  '/news',
  '/brand',
  '/kelvinseek',
];

/**
 * Document pages (`content/{install,about,developers,legal}`): listed only in the locales that have
 * their own translation (untranslated locales canonicalize to English and carry no hreflang
 * cluster, PLAN §4.5), with the document's «last updated» date as `lastmod`.
 */
function documentPages(): SitemapPage[] {
  const docs: Array<{ path: string; locales: Locale[]; lastmod: string }> = [
    { path: '/install', locales: installGuide.locales(), lastmod: INSTALL_VERIFIED.date },
    { path: '/about', locales: aboutDoc.locales(), lastmod: ABOUT_UPDATED },
    { path: '/developers', locales: developersDoc.locales(), lastmod: DEVELOPERS_UPDATED },
    ...LEGAL_DOCS.map((key) => ({
      path: `/${key}`,
      locales: legalDocs.locales(key),
      lastmod: LEGAL_META[key].updated,
    })),
  ];
  return docs.filter((doc) => doc.locales.length > 0);
}

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

type GameBuild = Awaited<ReturnType<ReturnType<typeof serverApi>['compat']['gameBuilds']>>['items'][number];

/**
 * Game builds of Patch Radar (newest first), or null when the compat read fails: the rest of the
 * static sitemap is still served (`/patch-radar` listed without `lastmod`, past builds omitted).
 */
async function gameBuilds(): Promise<GameBuild[] | null> {
  try {
    return await memoized('game-builds', async () => (await serverApi().compat.gameBuilds()).items);
  } catch (error) {
    console.error('[web] sitemap: game builds failed', error);
    return null;
  }
}

async function staticPages(): Promise<SitemapPage[]> {
  const [cards, builds] = await Promise.all([allCards(), gameBuilds()]);
  const mods = cards.filter((card) => card.kind !== 'build');
  const buildCards = cards.filter((card) => card.kind === 'build');
  const current = builds?.find((build) => build.isCurrent) ?? null;
  const lastmods: Record<string, string | null> = {
    '/': newestRelease(cards),
    '/mods': newestRelease(mods),
    '/builds': newestRelease(buildCards),
    '/categories': newestRelease(cards),
    '/tags': newestRelease(cards),
    '/patch-radar': current?.releasedAt ?? null,
  };
  const pages: SitemapPage[] = STATIC_PATHS
    // Patch Radar without any registered build is an empty `noindex` page.
    .filter((path) => path !== '/patch-radar' || builds === null || current !== null)
    .map((path) => ({ path, lastmod: lastmods[path] ?? null }));
  pages.push(...documentPages());
  // Past game builds: `/patch-radar/:build` (the current one is `/patch-radar` itself).
  for (const build of builds ?? []) {
    if (build.isCurrent) continue;
    pages.push({ path: buildPath(build), lastmod: build.releasedAt });
  }
  return pages;
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

async function requestPages(): Promise<SitemapPage[]> {
  const requests = await allRequests();
  return requests.map((request) => ({
    path: `/requests/${request.id}`,
    lastmod: request.editedAt ?? request.createdAt,
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

/**
 * Best hubs: the same reads as `/best/:topic` (`content/best/hubs.ts`, merged and deduplicated),
 * listed from {@link BEST_INDEX_MIN_ITEMS} items; `lastmod` = the newest release among them, i.e.
 * the page's «updated on» date.
 */
async function bestPages(): Promise<SitemapPage[]> {
  const pages: SitemapPage[] = [];
  for (const topic of BEST_TOPICS) {
    const hub = HUBS[topic];
    const merged = new Map<number, ModCardDTO>();
    for (const query of hub.queries) {
      const list = await serverApi().catalog.listMods({
        query: { ...query, sort: 'downloads', order: 'desc', page: 1, pageSize: Math.min(hub.limit, MAX_PAGE_SIZE) },
      });
      for (const item of list.items) if (!merged.has(item.id)) merged.set(item.id, item);
    }
    const items = [...merged.values()].sort((a, b) => b.downloads - a.downloads).slice(0, hub.limit);
    if (items.length < BEST_INDEX_MIN_ITEMS) continue;
    pages.push({ path: `/best/${topic}`, lastmod: newestRelease(items) });
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
    case 'requests':
      return requestPages();
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
