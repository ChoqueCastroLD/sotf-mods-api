/**
 * Explore (T0-06, PLAN §5.2 `GET /mods`): filters with inclusion and exclusion, sorts, page-based
 * pagination and facet counts, computed over the cached snapshot.
 *
 * - Only `published` items (with `unapproved=1`: only `pending` ones whose checks passed, never both
 *   at once); NSFW only with `nsfw=1` (T0-30). The response is shared by every
 *   visitor (edge cache, no cookie), so the age-gated opt-in is enforced by the caller: the web only
 *   sends `nsfw=1` for visitors who opted in, and the cards carry `nsfw` so thumbnails are blurred.
 * - `category` accepts legacy slugs (`qol` → `quality-of-life`) and matches mods whose legacy
 *   category was retired into it. Categories are OR, tags are AND, exclusions always apply.
 * - Facets are disjunctive: the counts of a facet ignore that facet's own inclusion filter (so the
 *   other values stay visible with the number they would add); tag counts are conjunctive
 *   refinements (how many results remain when the tag is added).
 */
import type { FacetsDTO, ModListQuery, ModSort } from '@sotf/contracts/catalog';
import type { ModKind } from '@sotf/contracts/common';
import { totalPages } from '@sotf/contracts/pagination';
import type { z } from 'zod';
import {
  type CatalogEntry,
  type CatalogSnapshot,
  compareCategories,
  isListable,
  isUnapprovedListable,
} from './snapshot.ts';

export type Facets = z.infer<typeof FacetsDTO>;
type FacetName = keyof Facets;

/** The listing query after defaults (what the contract parses). */
export type ListQuery = ModListQuery;

const DAY_MS = 86_400_000;
const UPDATED_WITHIN_DAYS = { '30d': 30, '90d': 90, '1y': 365 } as const;
const MAX_TAG_FACETS = 40;

/** Relevance scores of a text query (mod id → score); undefined when there is no query. */
export type Relevance = ReadonlyMap<number, number> | undefined;

interface Resolved {
  kinds: ReadonlySet<ModKind> | null;
  includeCategories: ReadonlySet<number> | null;
  excludeCategories: ReadonlySet<number>;
  includeTags: readonly string[];
  excludeTags: ReadonlySet<string>;
  author: string | null;
  updatedSince: number | null;
  /** Multiplayer roles (OR), null when not filtered. */
  multiplayer: ReadonlySet<string> | null;
}

function resolve(snapshot: CatalogSnapshot, query: ListQuery, now: Date): Resolved {
  const categoryIds = (slugs: readonly string[] | undefined) => {
    const ids = new Set<number>();
    for (const slug of slugs ?? []) {
      const category = snapshot.categoriesBySlug.get(slug.toLowerCase());
      // Unknown slugs match nothing (an include filter with no id yields no results).
      ids.add(category ? category.id : -1);
    }
    return ids;
  };
  const kinds: Set<ModKind> | null = query.type === 'all' ? null : new Set([query.type]);
  const include = query.category && query.category.length > 0 ? categoryIds(query.category) : null;
  return {
    kinds,
    includeCategories: include,
    excludeCategories: categoryIds(query.excludeCategory),
    includeTags: (query.tag ?? []).map((t) => t.toLowerCase()),
    excludeTags: new Set((query.excludeTag ?? []).map((t) => t.toLowerCase())),
    author: query.author ? query.author.toLowerCase() : null,
    updatedSince: query.updatedWithin ? now.getTime() - UPDATED_WITHIN_DAYS[query.updatedWithin] * DAY_MS : null,
    multiplayer:
      query.multiplayer === undefined
        ? null
        : new Set(Array.isArray(query.multiplayer) ? query.multiplayer : [query.multiplayer]),
  };
}

/** True when the entry passes every filter except the facet `skip` (its inclusion part). */
function matches(
  entry: CatalogEntry,
  query: ListQuery,
  r: Resolved,
  relevance: Relevance,
  skip: FacetName | null = null,
): boolean {
  if (relevance && !relevance.has(entry.id)) return false;
  if (skip !== 'kind' && r.kinds && !r.kinds.has(entry.kind)) return false;
  if (
    skip !== 'category' &&
    r.includeCategories &&
    (entry.categoryId === null || !r.includeCategories.has(entry.categoryId))
  )
    return false;
  if (entry.categoryId !== null && r.excludeCategories.has(entry.categoryId)) return false;
  if (skip !== 'tag' && r.includeTags.length > 0 && !r.includeTags.every((t) => entry.tagSlugs.includes(t)))
    return false;
  if (r.excludeTags.size > 0 && entry.tagSlugs.some((t) => r.excludeTags.has(t))) return false;
  if (skip !== 'compat' && query.compat !== 'any' && entry.compatStatus !== query.compat) return false;
  if (
    skip !== 'multiplayer' &&
    r.multiplayer &&
    (entry.multiplayerRole === null || !r.multiplayer.has(entry.multiplayerRole))
  )
    return false;
  if (query.dedicated === 'yes' && entry.dedicatedServer !== 'yes') return false;
  if (skip !== 'platform' && query.platform && entry.platform !== query.platform) return false;
  if (skip !== 'updatedWithin' && r.updatedSince !== null && entry.lastReleasedAt.getTime() < r.updatedSince)
    return false;
  if (
    skip !== 'minRating' &&
    query.minRating !== undefined &&
    (entry.ratingAvg === null || entry.ratingAvg < query.minRating)
  )
    return false;
  if (query.minDownloads !== undefined && entry.downloads < query.minDownloads) return false;
  if (query.hasSource && !entry.hasSource) return false;
  if (query.verified && !entry.verifiedCreator) return false;
  if (r.author && entry.userHandle.toLowerCase() !== r.author) return false;
  return true;
}

type SortKey = (e: CatalogEntry) => number;

const NAME_COLLATOR = new Intl.Collator('en', { sensitivity: 'base', numeric: true });

const SORT_KEYS: Record<Exclude<ModSort, 'relevance' | 'name'>, SortKey[]> = {
  trending: [(e) => e.trendingScore, (e) => e.downloads7d, (e) => e.downloads],
  downloads: [(e) => e.downloads],
  updated: [(e) => e.lastReleasedAt.getTime()],
  new: [(e) => (e.publishedAt ?? e.createdAt).getTime()],
  rating: [(e) => e.ratingBayes, (e) => e.ratingCount],
  follows: [(e) => e.followers],
  comments: [(e) => e.commentsCount],
  week: [(e) => e.downloads7d, (e) => e.downloads],
};

/** Sorts entries in place (stable, ties broken by id in the same direction). */
export function sortEntries(
  entries: CatalogEntry[],
  sort: ModSort,
  order: 'asc' | 'desc',
  relevance: Relevance,
): CatalogEntry[] {
  const dir = order === 'asc' ? 1 : -1;
  if (sort === 'name') {
    // A to Z when ascending: case, accents and digit runs ("Mod 2" before "Mod 10") are natural.
    return entries.sort((a, b) => NAME_COLLATOR.compare(a.name, b.name) * dir || (a.id - b.id) * dir);
  }
  const keys: SortKey[] =
    sort === 'relevance'
      ? relevance
        ? [(e) => relevance.get(e.id) ?? 0, (e) => e.downloads]
        : SORT_KEYS.trending
      : SORT_KEYS[sort];
  return entries.sort((a, b) => {
    for (const key of keys) {
      const d = key(a) - key(b);
      if (d !== 0) return d * dir;
    }
    return (a.id - b.id) * dir;
  });
}

function bucketCounts(values: Iterable<string | null>): Map<string, number> {
  const counts = new Map<string, number>();
  for (const value of values) if (value !== null) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
}

function toBuckets(counts: Map<string, number>, order?: readonly string[], limit?: number) {
  const list = [...counts.entries()].map(([value, count]) => ({ value, count }));
  if (order) list.sort((a, b) => order.indexOf(a.value) - order.indexOf(b.value));
  else list.sort((a, b) => b.count - a.count || a.value.localeCompare(b.value));
  return limit ? list.slice(0, limit) : list;
}

/** Facet counts under the current filters (see the module comment). */
export function computeFacets(
  snapshot: CatalogSnapshot,
  pool: readonly CatalogEntry[],
  query: ListQuery,
  r: Resolved,
  relevance: Relevance,
  now: Date = new Date(),
): Facets {
  const subset = (skip: FacetName | null) => pool.filter((e) => matches(e, query, r, relevance, skip));
  const categorySlug = (e: CatalogEntry) =>
    e.categoryId === null ? null : (snapshot.categories.get(e.categoryId)?.slug ?? null);
  const categoryOrder = [...snapshot.categories.values()]
    .filter((c) => !c.retired)
    .sort(compareCategories)
    .map((c) => c.slug);
  const categoryCounts = bucketCounts(subset('category').map(categorySlug));
  const orderedCategories = [
    ...categoryOrder.filter((slug) => categoryCounts.has(slug)),
    ...[...categoryCounts.keys()].filter((slug) => !categoryOrder.includes(slug)).sort(),
  ];
  return {
    kind: toBuckets(bucketCounts(subset('kind').map((e) => e.kind)), ['mod', 'library', 'build']),
    category: toBuckets(categoryCounts, orderedCategories),
    tag: toBuckets(bucketCounts(subset(null).flatMap((e) => e.tagSlugs)), undefined, MAX_TAG_FACETS),
    platform: toBuckets(bucketCounts(subset('platform').map((e) => e.platform)), ['Client', 'Server', 'Universal']),
    multiplayer: toBuckets(bucketCounts(subset('multiplayer').map((e) => e.multiplayerRole)), [
      'singleplayer_only',
      'client_side',
      'host_only',
      'all_players',
      'unknown',
    ]),
    compat: toBuckets(bucketCounts(subset('compat').map((e) => e.compatStatus)), [
      'works',
      'mixed',
      'broken',
      'untested',
    ]),
    updatedWithin: updatedWithinBuckets(subset('updatedWithin'), now),
    minRating: minRatingBuckets(subset('minRating')),
  };
}

/** Cumulative "released within" counts (every window that has at least one item). */
function updatedWithinBuckets(entries: readonly CatalogEntry[], now: Date): Array<{ value: string; count: number }> {
  const out: Array<{ value: string; count: number }> = [];
  for (const [value, days] of Object.entries(UPDATED_WITHIN_DAYS)) {
    const since = now.getTime() - days * DAY_MS;
    const count = entries.filter((e) => e.lastReleasedAt.getTime() >= since).length;
    if (count > 0) out.push({ value, count });
  }
  return out;
}

/** Cumulative "at least N stars" counts (rated items only). */
function minRatingBuckets(entries: readonly CatalogEntry[]): Array<{ value: string; count: number }> {
  const out: Array<{ value: string; count: number }> = [];
  for (let stars = 1; stars <= 5; stars++) {
    const count = entries.filter((e) => e.ratingAvg !== null && e.ratingAvg >= stars).length;
    if (count > 0) out.push({ value: String(stars), count });
  }
  return out;
}

export interface ListResult {
  items: CatalogEntry[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  facets: Facets | null;
}

/** Runs an Explore query over the snapshot. */
export function runListQuery(
  snapshot: CatalogSnapshot,
  query: ListQuery,
  now: Date,
  relevance: Relevance = undefined,
): ListResult {
  const r = resolve(snapshot, query, now);
  const includeNsfw = query.nsfw === true;
  const pool = snapshot.entries.filter((e) =>
    query.unapproved ? isUnapprovedListable(snapshot, e, includeNsfw) : isListable(snapshot, e, includeNsfw),
  );
  const matched = sortEntries(
    pool.filter((e) => matches(e, query, r, relevance)),
    query.sort,
    query.order,
    relevance,
  );
  const start = (query.page - 1) * query.pageSize;
  return {
    items: matched.slice(start, start + query.pageSize),
    page: query.page,
    pageSize: query.pageSize,
    total: matched.length,
    totalPages: totalPages(matched.length, query.pageSize),
    facets: query.facets ? computeFacets(snapshot, pool, query, r, relevance, now) : null,
  };
}
