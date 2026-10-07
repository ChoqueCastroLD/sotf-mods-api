/**
 * Explore URL state (PLAN §4.2, §4.6, T0-06; research/03 §6.2). Pure and shared by the pages
 * (SSR) and the client script: the URL is the only state, so every view works as a plain GET
 * form without JavaScript and every link is a real, cacheable URL.
 *
 * - `parseExploreState(params, scope)`: tolerant reading of the query (unknown or invalid values
 *   are ignored, never a 404: PLAN §4.6 «Los parámetros de filtro que la v2 no reconoce se
 *   ignoran»).
 * - `exploreHref(state, scope)`: canonical URL of a state (defaults and fixed values omitted,
 *   stable parameter order, `page=1` dropped). A single included category on `/mods` or
 *   `/builds` is the category hub (`/categories/:slug`).
 * - `apiQueryOf(state, scope)`: the `GET /api/v2/mods` query.
 * - `isFiltered(state, scope)`: anything beyond `?page=N` → `noindex, follow` + canonical to the
 *   base (PLAN §4.2).
 */
import type { ModListQuery, ModSort } from '@sotf/contracts/catalog';

export const LIST_TYPES = ['mod', 'library', 'build', 'all'] as const;
export type ListType = (typeof LIST_TYPES)[number];

/** Sorts offered in the UI (`relevance` only while a text filter is active). */
export const EXPLORE_SORTS = [
  'new',
  'downloads',
  'trending',
  'updated',
  'rating',
  'name',
  'follows',
  'comments',
] as const;
export const ALL_SORTS = [...EXPLORE_SORTS, 'relevance'] as const satisfies readonly ModSort[];

export const MULTIPLAYER_VALUES = ['client_side', 'host_only', 'all_players', 'singleplayer_only'] as const;
export type MultiplayerFilter = (typeof MULTIPLAYER_VALUES)[number];
export const PLATFORM_VALUES = ['Client', 'Server', 'Universal'] as const;
export type PlatformFilter = (typeof PLATFORM_VALUES)[number];
export const UPDATED_VALUES = ['30d', '90d', '1y'] as const;
export type UpdatedFilter = (typeof UPDATED_VALUES)[number];
export const RATING_VALUES = [4, 3] as const;
/** «At least N downloads» steps of the search page. */
export const DOWNLOADS_VALUES = [100, 1000, 10000] as const;
/** Page sizes offered by the listing pages (`EXPLORE_PAGE_SIZE` is the default). */
export const PAGE_SIZES = [12, 24, 48, 96] as const;
export const VIEW_VALUES = ['grid', 'list', 'compact'] as const;
export type ExploreView = (typeof VIEW_VALUES)[number];

/** Page size of every listing (API default; SEO pages keep the same size forever). */
export const EXPLORE_PAGE_SIZE = 24;
/** Sorts whose natural direction is ascending (A to Z). */
export function defaultOrderOf(sort: ModSort): 'asc' | 'desc' {
  return sort === 'name' ? 'asc' : 'desc';
}
/** Highest page the API accepts. */
export const MAX_PAGE = 10_000;
/** Limits of the list parameters (contract `ModListQuery`). */
const MAX_CATEGORIES = 12;
const MAX_TAGS = 10;
const MAX_QUERY = 100;

export interface ExploreState {
  type: ListType;
  category: string[];
  excludeCategory: string[];
  tag: string[];
  excludeTag: string[];
  multiplayer: MultiplayerFilter | null;
  dedicated: boolean;
  platform: PlatformFilter | null;
  updatedWithin: UpdatedFilter | null;
  minRating: number | null;
  minDownloads: number | null;
  hasSource: boolean;
  verified: boolean;
  author: string | null;
  nsfw: boolean;
  /** «Unapproved»: pending mods whose automated checks passed (never mixed with the default list). */
  unapproved: boolean;
  q: string;
  sort: ModSort;
  order: 'asc' | 'desc';
  page: number;
  /** Items per page (one of `PAGE_SIZES`). */
  pageSize: number;
  view: ExploreView;
}

/**
 * Where a listing lives: `/mods` (tabs), `/builds`, `/categories/:slug` or `/tags/:slug`.
 * `fixedCategory`/`fixedTag` are implied by the path and never written to the query.
 */
export interface ExploreScope {
  kind: 'mods' | 'builds' | 'category' | 'tag';
  /** Locale-less path of the listing. */
  basePath: string;
  /** Type used when the URL has none. */
  defaultType: ListType;
  fixedCategory?: string;
  fixedTag?: string;
}

export const MODS_SCOPE: ExploreScope = { kind: 'mods', basePath: '/mods', defaultType: 'mod' };
export const BUILDS_SCOPE: ExploreScope = { kind: 'builds', basePath: '/builds', defaultType: 'build' };

export function categoryScope(slug: string, kind: 'mod' | 'build'): ExploreScope {
  return {
    kind: 'category',
    basePath: `/categories/${encodeURIComponent(slug)}`,
    defaultType: kind === 'build' ? 'build' : 'all',
    fixedCategory: slug,
  };
}

export function tagScope(slug: string): ExploreScope {
  return { kind: 'tag', basePath: `/tags/${encodeURIComponent(slug)}`, defaultType: 'all', fixedTag: slug };
}

export function defaultState(scope: ExploreScope): ExploreState {
  return {
    type: scope.defaultType,
    category: scope.fixedCategory ? [scope.fixedCategory] : [],
    excludeCategory: [],
    tag: scope.fixedTag ? [scope.fixedTag] : [],
    excludeTag: [],
    multiplayer: null,
    dedicated: false,
    platform: null,
    updatedWithin: null,
    minRating: null,
    minDownloads: null,
    hasSource: false,
    verified: false,
    author: null,
    nsfw: false,
    unapproved: false,
    q: '',
    sort: 'new',
    order: 'desc',
    page: 1,
    pageSize: EXPLORE_PAGE_SIZE,
    view: 'grid',
  };
}

/** Minimal read interface of `URLSearchParams` (also satisfied by `FormData`-derived params). */
export interface ParamsLike {
  get(name: string): string | null;
  getAll(name: string): string[];
}

function oneOf<T extends string>(values: readonly T[], raw: string | null): T | null {
  return raw !== null && (values as readonly string[]).includes(raw) ? (raw as T) : null;
}

function flag(raw: string | null): boolean {
  return raw === '1' || raw === 'true';
}

const SLUG = /^[a-z0-9][a-z0-9-]{0,79}$/;
const TAG = /^[a-z0-9][a-z0-9-]{0,59}$/;
const HANDLE = /^[A-Za-z0-9_.-]{1,40}$/;

/** Values of a repeatable parameter: `?tag=a&tag=b` and `?tag=a,b`, deduplicated, lower-cased. */
function listOf(params: ParamsLike, name: string, pattern: RegExp, max: number): string[] {
  const out: string[] = [];
  for (const raw of params.getAll(name)) {
    for (const part of raw.split(',')) {
      const value = part.trim().toLowerCase();
      if (value && pattern.test(value) && !out.includes(value)) out.push(value);
    }
  }
  return out.slice(0, max);
}

function pageOf(raw: string | null): number {
  if (raw === null || !/^\d{1,6}$/.test(raw)) return 1;
  const page = Number(raw);
  return page >= 1 && page <= MAX_PAGE ? page : 1;
}

/** Reads the state of a listing from its query (tolerant: invalid values fall back to defaults). */
export function parseExploreState(params: ParamsLike, scope: ExploreScope): ExploreState {
  const state = defaultState(scope);
  if (scope.kind === 'mods' || scope.kind === 'category' || scope.kind === 'tag') {
    const type = oneOf(LIST_TYPES, params.get('type'));
    if (type && !(scope.kind === 'mods' && type === 'build')) state.type = type;
  }
  const fixedCategory = scope.fixedCategory;
  state.category = [
    ...(fixedCategory ? [fixedCategory] : []),
    ...listOf(params, 'category', SLUG, MAX_CATEGORIES).filter((slug) => slug !== fixedCategory),
  ].slice(0, MAX_CATEGORIES);
  state.excludeCategory = listOf(params, 'excludeCategory', SLUG, MAX_CATEGORIES).filter(
    (slug) => !state.category.includes(slug),
  );
  const fixedTag = scope.fixedTag;
  state.tag = [
    ...(fixedTag ? [fixedTag] : []),
    ...listOf(params, 'tag', TAG, MAX_TAGS).filter((slug) => slug !== fixedTag),
  ].slice(0, MAX_TAGS);
  state.excludeTag = listOf(params, 'excludeTag', TAG, MAX_TAGS).filter((slug) => !state.tag.includes(slug));
  state.multiplayer = oneOf(MULTIPLAYER_VALUES, params.get('multiplayer'));
  state.dedicated = params.get('dedicated') === 'yes' || flag(params.get('dedicated'));
  state.platform = oneOf(PLATFORM_VALUES, params.get('platform'));
  state.updatedWithin = oneOf(UPDATED_VALUES, params.get('updatedWithin'));
  const rating = Number(params.get('minRating'));
  state.minRating = Number.isInteger(rating) && rating >= 1 && rating <= 5 ? rating : null;
  const downloads = Number(params.get('minDownloads'));
  state.minDownloads = Number.isInteger(downloads) && downloads >= 1 && downloads <= 1_000_000 ? downloads : null;
  state.hasSource = flag(params.get('hasSource'));
  state.verified = flag(params.get('verified'));
  const author = params.get('author')?.trim() ?? '';
  state.author = HANDLE.test(author) ? author : null;
  state.nsfw = params.get('nsfw') === '1';
  state.unapproved = flag(params.get('unapproved'));
  state.q = (params.get('q') ?? '').replace(/\s+/g, ' ').trim().slice(0, MAX_QUERY);
  const rawSort = params.get('sort');
  // `sort=oldest` is the sort menu's way to say `sort=new&order=asc` from a plain GET form.
  const oldest = rawSort === 'oldest';
  const sort = oldest ? 'new' : oneOf(ALL_SORTS, rawSort);
  state.sort = sort === 'relevance' && !state.q ? 'new' : (sort ?? (state.q ? 'relevance' : 'new'));
  const rawOrder = params.get('order');
  state.order = oldest || rawOrder === 'asc' ? 'asc' : rawOrder === 'desc' ? 'desc' : defaultOrderOf(state.sort);
  state.page = pageOf(params.get('page'));
  const size = Number(params.get('pageSize'));
  state.pageSize = (PAGE_SIZES as readonly number[]).includes(size) ? size : EXPLORE_PAGE_SIZE;
  state.view = oneOf(VIEW_VALUES, params.get('view')) ?? 'grid';
  return state;
}

/** Default sort of a state: newest first, like the original catalogue (`relevance` while searching). */
export function defaultSortOf(state: Pick<ExploreState, 'q'>): ModSort {
  return state.q ? 'relevance' : 'new';
}

/** Categories/tags beyond the ones implied by the path. */
function extraCategories(state: ExploreState, scope: ExploreScope): string[] {
  return state.category.filter((slug) => slug !== scope.fixedCategory);
}
function extraTags(state: ExploreState, scope: ExploreScope): string[] {
  return state.tag.filter((slug) => slug !== scope.fixedTag);
}

/** True when the state is more than the listing itself (+ page): such URLs are `noindex`. */
export function isFiltered(state: ExploreState, scope: ExploreScope): boolean {
  return (
    activeFilterCount(state, scope) > 0 ||
    state.type !== scope.defaultType ||
    state.sort !== defaultSortOf(state) ||
    state.order !== defaultOrderOf(state.sort) ||
    state.pageSize !== EXPLORE_PAGE_SIZE ||
    state.view !== 'grid' ||
    state.nsfw ||
    state.unapproved
  );
}

/** Number of active filters (the «Filters (3)» badge): type, sort, order, page size and view excluded. */
export function activeFilterCount(state: ExploreState, scope: ExploreScope): number {
  return (
    extraCategories(state, scope).length +
    state.excludeCategory.length +
    extraTags(state, scope).length +
    state.excludeTag.length +
    (state.multiplayer ? 1 : 0) +
    (state.dedicated ? 1 : 0) +
    (state.platform ? 1 : 0) +
    (state.updatedWithin ? 1 : 0) +
    (state.minRating ? 1 : 0) +
    (state.minDownloads ? 1 : 0) +
    (state.hasSource ? 1 : 0) +
    (state.verified ? 1 : 0) +
    (state.author ? 1 : 0) +
    (state.nsfw ? 1 : 0) +
    (state.unapproved ? 1 : 0) +
    (state.q ? 1 : 0)
  );
}

/** Query pairs of a state relative to `scope` (defaults and fixed values omitted). */
export function queryPairsOf(state: ExploreState, scope: ExploreScope): [string, string][] {
  const pairs: [string, string][] = [];
  if (state.type !== scope.defaultType && scope.kind !== 'builds') pairs.push(['type', state.type]);
  if (state.q) pairs.push(['q', state.q]);
  for (const slug of extraCategories(state, scope)) pairs.push(['category', slug]);
  for (const slug of state.excludeCategory) pairs.push(['excludeCategory', slug]);
  for (const slug of extraTags(state, scope)) pairs.push(['tag', slug]);
  for (const slug of state.excludeTag) pairs.push(['excludeTag', slug]);
  if (state.multiplayer) pairs.push(['multiplayer', state.multiplayer]);
  if (state.dedicated) pairs.push(['dedicated', 'yes']);
  if (state.platform) pairs.push(['platform', state.platform]);
  if (state.updatedWithin) pairs.push(['updatedWithin', state.updatedWithin]);
  if (state.minRating) pairs.push(['minRating', String(state.minRating)]);
  if (state.minDownloads) pairs.push(['minDownloads', String(state.minDownloads)]);
  if (state.hasSource) pairs.push(['hasSource', '1']);
  if (state.verified) pairs.push(['verified', '1']);
  if (state.author) pairs.push(['author', state.author]);
  if (state.nsfw) pairs.push(['nsfw', '1']);
  if (state.unapproved) pairs.push(['unapproved', '1']);
  if (state.sort !== defaultSortOf(state)) pairs.push(['sort', state.sort]);
  if (state.order !== defaultOrderOf(state.sort)) pairs.push(['order', state.order]);
  if (state.pageSize !== EXPLORE_PAGE_SIZE) pairs.push(['pageSize', String(state.pageSize)]);
  if (state.view !== 'grid') pairs.push(['view', state.view]);
  if (state.page > 1) pairs.push(['page', String(state.page)]);
  return pairs;
}

function withQuery(path: string, pairs: readonly [string, string][]): string {
  if (pairs.length === 0) return path;
  return `${path}?${new URLSearchParams(pairs as [string, string][]).toString()}`;
}

/**
 * Locale-less URL of a state. The scope may change with the state: a single included category
 * (nothing else category-related) on `/mods` or `/builds` is the category hub, and removing the
 * fixed category of a hub goes back to `/mods` (or `/builds`).
 */
export function exploreHref(
  state: ExploreState,
  scope: ExploreScope,
  categoryKindOf: (slug: string) => 'mod' | 'build' | null = () => null,
): string {
  const target = scopeFor(state, scope, categoryKindOf);
  return withQuery(target.basePath, queryPairsOf(state, target));
}

/** Scope a state belongs to (see `exploreHref`). */
export function scopeFor(
  state: ExploreState,
  scope: ExploreScope,
  categoryKindOf: (slug: string) => 'mod' | 'build' | null,
): ExploreScope {
  if (scope.kind === 'tag') {
    return state.tag.includes(scope.fixedTag ?? '') ? scope : state.type === 'build' ? BUILDS_SCOPE : MODS_SCOPE;
  }
  if (scope.kind === 'category') {
    if (state.category.length === 1 && state.category[0] === scope.fixedCategory) return scope;
    // Fixed category removed or another one added: back to the generic listing.
    const kind = categoryKindOf(scope.fixedCategory ?? '');
    return kind === 'build' || state.type === 'build' ? BUILDS_SCOPE : MODS_SCOPE;
  }
  const single = state.category.length === 1 ? (state.category[0] ?? null) : null;
  if (single) {
    const kind = categoryKindOf(single);
    if (kind) return categoryScope(single, kind);
  }
  return scope;
}

/** A copy of `state` with `patch` applied; any change other than the page resets it to 1. */
export function patchState(state: ExploreState, patch: Partial<ExploreState>): ExploreState {
  return { ...state, page: 1, ...patch };
}

/** `GET /api/v2/mods` query of a state. */
export function apiQueryOf(state: ExploreState, options: { facets?: boolean } = {}): ModListQuery {
  const query: ModListQuery = {
    type: state.type,
    // The compatibility filter is retired; the contract still carries it (default `any`).
    compat: 'any',
    sort: state.sort,
    order: state.order,
    page: state.page,
    pageSize: state.pageSize,
  };
  if (state.category.length) query.category = [...state.category];
  if (state.excludeCategory.length) query.excludeCategory = [...state.excludeCategory];
  if (state.tag.length) query.tag = [...state.tag];
  if (state.excludeTag.length) query.excludeTag = [...state.excludeTag];
  if (state.multiplayer) query.multiplayer = state.multiplayer;
  if (state.dedicated) query.dedicated = 'yes';
  if (state.platform) query.platform = state.platform;
  if (state.updatedWithin) query.updatedWithin = state.updatedWithin;
  if (state.minRating) query.minRating = state.minRating;
  if (state.minDownloads) query.minDownloads = state.minDownloads;
  if (state.hasSource) query.hasSource = true;
  if (state.verified) query.verified = true;
  if (state.author) query.author = state.author;
  if (state.nsfw) query.nsfw = true;
  if (state.unapproved) query.unapproved = true;
  if (state.q) query.q = state.q;
  if (options.facets) query.facets = true;
  return query;
}

/** Keeps only the categories the catalogue knows (unknown filter values are ignored). */
export function sanitizeCategories(state: ExploreState, known: (slug: string) => string | null): ExploreState {
  const map = (list: string[]) => {
    const out: string[] = [];
    for (const slug of list) {
      const resolved = known(slug);
      if (resolved && !out.includes(resolved)) out.push(resolved);
    }
    return out;
  };
  const category = map(state.category);
  return { ...state, category, excludeCategory: map(state.excludeCategory).filter((s) => !category.includes(s)) };
}
