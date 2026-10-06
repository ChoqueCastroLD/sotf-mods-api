/**
 * Legacy query parameters of `/mods` and `/builds` (PLAN §4.6 «Mapa de redirecciones legacy»).
 * The mapping runs in the page, not in the middleware, because `category` needs the catalogue
 * (retired slugs resolve through `legacySlugs`: `qol` → `quality-of-life`).
 *
 * | legacy                                   | v2                                              |
 * |------------------------------------------|-------------------------------------------------|
 * | `page=N`                                 | kept (dropped when 1)                           |
 * | `category=qol\|misc\|model-swap\|library` | `/categories/<new slug>` (single category)      |
 * | `search=q`                               | `/search?q=q`                                   |
 * | `orderby=newest`                         | base                                            |
 * | `orderby=oldest`                         | `?sort=new&order=asc`                           |
 * | `orderby=most_downloaded` …              | `?sort=downloads` … (`least_`/`lowest_` → asc)  |
 * | `type=Mod` · `Build` · `Both` · `Library`| removed · `/builds` · `?type=all` · `?type=library` |
 * | `nsfw=false` · `nsfw=true`               | removed · `?nsfw=1`                             |
 * | `showunapproved=true\|1\|on` (also `show_unapproved`) | `?unapproved=1` (false values: removed)  |
 * | `order_by=…`                             | same map as `orderby`                           |
 *
 * Returns the locale-less target (path + query) or `null` when the URL is already canonical.
 * Unknown parameters are dropped from the target (the canonical URL is always clean).
 */
import { type ExploreScope, exploreHref, parseExploreState } from './state.ts';

const ORDER_BY: Record<string, { sort: string | null; order?: 'asc' }> = {
  newest: { sort: null },
  oldest: { sort: 'new', order: 'asc' },
  most_downloaded: { sort: 'downloads' },
  least_downloaded: { sort: 'downloads', order: 'asc' },
  most_downloaded_week: { sort: 'trending' },
  least_downloaded_week: { sort: 'trending', order: 'asc' },
  most_followed: { sort: 'follows' },
  least_followed: { sort: 'follows', order: 'asc' },
  highest_rating: { sort: 'rating' },
  lowest_rating: { sort: 'rating', order: 'asc' },
  most_comments: { sort: 'comments' },
  least_comments: { sort: 'comments', order: 'asc' },
};

/** Legacy `type` values (capitalised, case-insensitive here) → v2 listing. */
const LEGACY_TYPES: Record<string, 'mod' | 'build' | 'all' | 'library'> = {
  mod: 'mod',
  build: 'build',
  both: 'all',
  library: 'library',
};

/** v2 values of `type` (lower-case); anything else is a legacy value. */
const TRUTHY = new Set(['1', 'true', 'on', 'yes']);

const V2_TYPES = new Set(['mod', 'library', 'build', 'all']);

/** Parameters only the legacy site used. */
const LEGACY_ONLY = ['search', 'orderby', 'order_by', 'showunapproved', 'show_unapproved'] as const;
const UNAPPROVED_PARAMS = ['showunapproved', 'show_unapproved'] as const;

/** Parameters of the listing state (what `exploreHref` writes); anything else is ignored. */
export const LISTING_PARAMS = [
  'type',
  'q',
  'category',
  'excludeCategory',
  'tag',
  'excludeTag',
  'compat',
  'multiplayer',
  'dedicated',
  'platform',
  'updatedWithin',
  'minRating',
  'hasSource',
  'verified',
  'author',
  'nsfw',
  'unapproved',
  'sort',
  'order',
  'view',
  'page',
] as const;

/** True when the query carries any listing parameter (current or legacy). */
export function hasListingParams(params: URLSearchParams): boolean {
  return LISTING_PARAMS.some((name) => params.has(name)) || LEGACY_ONLY.some((name) => params.has(name));
}

/**
 * The URL's listing parameters, as written, against the canonical target: empty values and explicit
 * defaults (`sort=new`) are redirected once to the clean URL (a plain GET form writes them all). The
 * order of the parameters and unknown parameters never matter.
 */
function sameKnownQuery(url: URL, target: string): boolean {
  const canonical = (pairs: Iterable<[string, string]>) =>
    [...pairs]
      .map(([name, value]) => `${name}=${value}`)
      .sort()
      .join('&');
  const known: [string, string][] = [];
  for (const [name, value] of url.searchParams) {
    if ((LISTING_PARAMS as readonly string[]).includes(name)) known.push([name, value]);
  }
  const targetQuery = target.includes('?') ? target.slice(target.indexOf('?') + 1) : '';
  return canonical(known) === canonical(new URLSearchParams(targetQuery));
}

export interface LegacyContext {
  /** Resolves a (possibly retired or legacy) category slug to `{ slug, kind }`, or null. */
  resolveCategory: (slug: string) => { slug: string; kind: 'mod' | 'build' } | null;
}

function isLegacyUrl(params: URLSearchParams): boolean {
  if (LEGACY_ONLY.some((name) => params.has(name))) return true;
  const type = params.get('type');
  if (type !== null && !V2_TYPES.has(type)) return true;
  const nsfw = params.get('nsfw');
  if (nsfw !== null && nsfw !== '1' && nsfw !== '0') return true;
  return false;
}

/**
 * The 301 target of a listing URL, or `null`. Besides the legacy parameters it canonicalizes
 * the few v2 shapes that have a better home: `?page=1`, `/mods?type=build` → `/builds`, a
 * single category → its hub, a retired category slug → the active one.
 */
export function legacyListingRedirect(url: URL, scope: ExploreScope, context: LegacyContext): string | null {
  const params = url.searchParams;
  if (scope.kind !== 'mods' && scope.kind !== 'builds') return null;

  // 1. `search=q` wins: the legacy search box submitted to the listing.
  const search = (params.get('search') ?? '').trim();
  if (search) return `/search?${new URLSearchParams({ q: search.slice(0, 100) }).toString()}`;

  const legacy = isLegacyUrl(params);
  const next = new URLSearchParams();
  let targetScope = scope;
  for (const [name, value] of params) {
    if (name === 'search' || name === 'orderby' || name === 'order_by') continue;
    if ((UNAPPROVED_PARAMS as readonly string[]).includes(name)) {
      if (TRUTHY.has(value.toLowerCase())) next.set('unapproved', '1');
      continue;
    }
    if (name === 'type') {
      const lower = value.toLowerCase();
      const mapped = V2_TYPES.has(value) ? (value as 'mod' | 'library' | 'build' | 'all') : LEGACY_TYPES[lower];
      if (!mapped) continue;
      if (mapped === 'build') {
        targetScope = { kind: 'builds', basePath: '/builds', defaultType: 'build' };
        continue;
      }
      if (scope.kind === 'builds') targetScope = { kind: 'mods', basePath: '/mods', defaultType: 'mod' };
      if (mapped !== 'mod') next.set('type', mapped);
      continue;
    }
    if (name === 'nsfw') {
      if (TRUTHY.has(value.toLowerCase())) next.set('nsfw', '1');
      continue;
    }
    next.append(name, value);
  }
  const orderBy = params.get('orderby') ?? params.get('order_by');
  const mappedOrder = orderBy ? ORDER_BY[orderBy.toLowerCase()] : undefined;
  if (mappedOrder?.sort) {
    next.set('sort', mappedOrder.sort);
    if (mappedOrder.order) next.set('order', mappedOrder.order);
  }

  // 2. Parse what is left as v2 state and build its canonical URL (categories resolved).
  const state = parseExploreState(next, targetScope);
  const resolved: string[] = [];
  for (const slug of state.category) {
    const category = context.resolveCategory(slug);
    if (category && !resolved.includes(category.slug)) resolved.push(category.slug);
  }
  const excluded: string[] = [];
  for (const slug of state.excludeCategory) {
    const category = context.resolveCategory(slug);
    if (category && !resolved.includes(category.slug) && !excluded.includes(category.slug))
      excluded.push(category.slug);
  }
  const canonicalState = { ...state, category: resolved, excludeCategory: excluded };
  const target = exploreHref(canonicalState, targetScope, (slug) => context.resolveCategory(slug)?.kind ?? null);

  // 3. Redirect only when the URL uses legacy parameters or a canonicalizable shape; unknown
  //    parameters alone are ignored (no redirect, canonical link to the clean URL).
  const current = `${url.pathname}${url.search}`;
  const shapeChanged =
    params.get('page') === '1' ||
    !sameKnownQuery(url, target) ||
    targetScope !== scope ||
    target.split('?', 1)[0] !== scope.basePath ||
    state.category.some((slug, index) => resolved[index] !== slug);
  if (!legacy && !shapeChanged) return null;
  return target === current ? null : target;
}
