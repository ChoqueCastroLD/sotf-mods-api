/**
 * Contents of each sitemap (PLAN §4.4): `/sitemaps/{static,mods,builds,categories,tags,requests,jams,
 * creators}.xml` (`creators` lists the public profiles). Every page is listed in the 13 locales with
 * the hreflang cluster (partially translated documents: only their translated locales, without
 * cluster); `lastmod` is always a real date of the content (`lastReleasedAt`, `updatedAt`), never
 * "now": pages without one simply omit it. Only indexable pages appear (published, not NSFW, tags
 * with ≥ 3 items). Kits, news, best hubs and Patch Radar are gone (CLASSIC.md) and are not listed.
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import { categoryPath, profilePath, tagPath } from '@sotf/contracts/seo';
import type { Locale } from '@sotf/i18n';
import { ABOUT_UPDATED, aboutDoc } from '../../content/about/index.ts';
import { DEVELOPERS_UPDATED, developersDoc } from '../../content/developers/index.ts';
import { INSTALL_VERIFIED, installGuide } from '../../content/install/index.ts';
import { LEGAL_DOCS, LEGAL_META, legalDocs } from '../../content/legal/index.ts';
import { allCards, allCategories, allCreators, allJams, allRequests, allTags, newestRelease } from './data.ts';
import type { SitemapPage } from './xml.ts';

export const SITEMAP_TYPES = [
  'static',
  'mods',
  'builds',
  'categories',
  'tags',
  'requests',
  'jams',
  'creators',
] as const;
export type SitemapType = (typeof SITEMAP_TYPES)[number];

export function isSitemapType(value: string | undefined): value is SitemapType {
  return (SITEMAP_TYPES as readonly string[]).includes(value ?? '');
}

/** Tags index from 3 items (PLAN §4.2). */
const TAG_INDEX_MIN_ITEMS = 3;

/** Localized public pages without an entity nor a Markdown document (PLAN §4.2), all 13 locales. */
export const STATIC_PATHS: readonly string[] = [
  '/',
  '/mods',
  '/builds',
  '/requests',
  '/jams',
  '/categories',
  '/tags',
  '/logs',
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
  const buildCards = cards.filter((card) => card.kind === 'build');
  const lastmods: Record<string, string | null> = {
    '/': newestRelease(cards),
    '/mods': newestRelease(mods),
    '/builds': newestRelease(buildCards),
    '/categories': newestRelease(cards),
    '/tags': newestRelease(cards),
  };
  const pages: SitemapPage[] = STATIC_PATHS.map((path) => ({ path, lastmod: lastmods[path] ?? null }));
  pages.push(...documentPages());
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

async function requestPages(): Promise<SitemapPage[]> {
  const requests = await allRequests();
  return requests.map((request) => ({
    path: `/requests/${request.id}`,
    lastmod: request.editedAt ?? request.createdAt,
  }));
}

async function jamPages(): Promise<SitemapPage[]> {
  const jams = await allJams();
  return jams.map((jam) => ({
    path: `/jams/${jam.slug}`,
    lastmod: jam.resultsPublishedAt ?? jam.announceAt ?? undefined,
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
    case 'requests':
      return requestPages();
    case 'jams':
      return jamPages();
    case 'creators':
      return creatorPages();
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
