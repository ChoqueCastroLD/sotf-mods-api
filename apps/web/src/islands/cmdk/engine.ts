/**
 * Search engine of the palette (PLAN §7.9, T0-07).
 *
 * - The per-locale index (`GET /api/v2/search/index?locale=`, ≈ 15 KB br, edge-cached with the
 *   `search-index` tag) is fetched the first time the palette opens and kept for the page's life.
 * - MiniSearch with prefix search, `fuzzy: 0.2` (1–2 typos: «stak mod» → StackMod, «kelvn» →
 *   Kelvin) and boosts on the name and the `manifestId`; downloads nudge popular entries up.
 * - An exact `manifestId` or name (case- and accent-insensitive) always comes first.
 * - Words are matched with AND first and OR as a fallback, so an extra word never empties the list.
 * - When the local index has nothing, the server search (`GET /api/v2/search`, full text over
 *   descriptions too) is asked; that request is also what records the query in the aggregated
 *   daily log (`SearchQueryDaily`), so searches without results are counted.
 */
import type { SearchHitDTO, SearchIndexDTO } from '@sotf/contracts/search';
import MiniSearch, { type SearchResult } from 'minisearch';
import type { Scope } from './scope.ts';
import { exactKey, processTerm, tokenize, tokenizeQuery } from './text.ts';
import type { ActionItem, EntryItem, EntryType, GroupId, ResultGroup, ResultItem } from './types.ts';

export const INDEX_URL = '/api/v2/search/index';
export const SEARCH_URL = '/api/v2/search';

interface Doc {
  key: string;
  title: string;
  alt: string;
  manifestId: string;
  tags: string;
  category: string;
}

const FIELDS = ['title', 'manifestId', 'alt', 'tags', 'category'] as const;
const BOOST: Record<(typeof FIELDS)[number], number> = { title: 3, manifestId: 3, alt: 1, tags: 0.6, category: 0.5 };
const EXACT_BONUS = 1_000_000;

function createMiniSearch(): MiniSearch<Doc> {
  return new MiniSearch<Doc>({
    idField: 'key',
    fields: [...FIELDS],
    storeFields: [],
    tokenize,
    processTerm,
    searchOptions: {
      tokenize: tokenizeQuery,
      processTerm,
      prefix: true,
      fuzzy: (term) => (term.length > 3 ? 0.2 : false),
      maxFuzzy: 2,
      boost: BOOST,
    },
  });
}

/** Which entry types a scope shows. */
const SCOPE_TYPES: Record<Scope, ReadonlySet<EntryType>> = {
  all: new Set(['mod', 'build', 'kit', 'user', 'category', 'page']),
  mods: new Set(['mod']),
  builds: new Set(['build']),
  kits: new Set(['kit']),
  creators: new Set(['user']),
  actions: new Set(),
};

const GROUP_OF: Record<EntryType, GroupId> = {
  mod: 'mods',
  build: 'builds',
  kit: 'kits',
  user: 'creators',
  category: 'categories',
  page: 'pages',
};

/** Fixed order used to break ties between groups. */
const GROUP_ORDER: readonly GroupId[] = [
  'recent',
  'trending',
  'mods',
  'builds',
  'kits',
  'creators',
  'categories',
  'pages',
  'actions',
  'server',
];

/** Items per group when searching everything; a scoped search shows up to `SCOPED_LIMIT`. */
const ALL_LIMITS: Partial<Record<GroupId, number>> = {
  mods: 6,
  builds: 4,
  kits: 3,
  creators: 3,
  categories: 3,
  pages: 3,
  actions: 4,
};
export const SCOPED_LIMIT = 40;

export class PaletteIndex {
  readonly entries = new Map<string, EntryItem>();
  readonly categoryNames = new Map<string, string>();
  readonly trending: EntryItem[] = [];
  private readonly byType = new Map<EntryType, EntryItem[]>();
  private readonly exact = new Map<string, string[]>();
  private readonly popularity = new Map<string, number>();
  private readonly search = createMiniSearch();

  constructor(dto: SearchIndexDTO) {
    for (const [slug, name] of dto.categories) this.categoryNames.set(slug, name);
    const docs: Doc[] = [];

    for (const [id, kind, name, handle, category, tagsCsv, manifestId, downloads, compat, thumb, path] of dto.mods) {
      const type: EntryType = kind === 'build' ? 'build' : 'mod';
      const tags = tagsCsv ? tagsCsv.split(',').filter(Boolean) : [];
      const item: EntryItem = {
        key: `${type}:${id}`,
        type,
        id,
        title: name,
        subtitle: `@${handle}`,
        path,
        thumb,
        kind,
        compat,
        downloads,
        categorySlug: category,
        tags,
        manifestId,
      };
      this.add(item, downloads);
      this.addExact(item.key, name, manifestId);
      docs.push({
        key: item.key,
        title: name,
        alt: handle,
        manifestId,
        tags: tags.join(' '),
        category: category ? `${category} ${this.categoryNames.get(category) ?? ''}` : '',
      });
    }

    for (const [id, name, owner, itemsCount, path] of dto.kits) {
      const item: EntryItem = {
        key: `kit:${id}`,
        type: 'kit',
        id,
        title: name,
        subtitle: `@${owner}`,
        path,
        thumb: null,
        count: itemsCount,
      };
      this.add(item, itemsCount * 50);
      this.addExact(item.key, name);
      docs.push({ key: item.key, title: name, alt: owner, manifestId: '', tags: '', category: '' });
    }

    for (const [id, handle, displayName, modsCount, path] of dto.users) {
      const item: EntryItem = {
        key: `user:${id}`,
        type: 'user',
        id,
        title: displayName || handle,
        subtitle: `@${handle}`,
        path,
        thumb: null,
        count: modsCount,
      };
      this.add(item, modsCount * 500);
      this.addExact(item.key, handle, displayName);
      docs.push({ key: item.key, title: displayName, alt: handle, manifestId: '', tags: '', category: '' });
    }

    for (const [slug, name, path] of dto.categories) {
      const item: EntryItem = {
        key: `category:${slug}`,
        type: 'category',
        id: slug,
        title: name,
        subtitle: null,
        path,
        thumb: null,
      };
      this.add(item, 0);
      this.addExact(item.key, name);
      docs.push({ key: item.key, title: name, alt: slug.replace(/-/g, ' '), manifestId: '', tags: '', category: '' });
    }

    for (const [key, title, path] of dto.pages) {
      const item: EntryItem = { key: `page:${key}`, type: 'page', id: key, title, subtitle: null, path, thumb: null };
      this.add(item, 0);
      this.addExact(item.key, title);
      docs.push({ key: item.key, title, alt: key.replace(/[-_]/g, ' '), manifestId: '', tags: '', category: '' });
    }

    for (const id of dto.trending) {
      const item = this.entries.get(`mod:${id}`) ?? this.entries.get(`build:${id}`);
      if (item) this.trending.push(item);
    }

    this.search.addAll(docs);
  }

  private add(item: EntryItem, popularity: number): void {
    this.entries.set(item.key, item);
    this.popularity.set(item.key, 1 + Math.log10(1 + Math.max(0, popularity)) / 10);
    const list = this.byType.get(item.type);
    if (list) list.push(item);
    else this.byType.set(item.type, [item]);
  }

  private addExact(key: string, ...values: Array<string | null | undefined>): void {
    for (const value of values) {
      if (!value) continue;
      const folded = exactKey(value);
      for (const variant of new Set([folded, folded.replace(/\s+/g, '')])) {
        if (!variant) continue;
        const list = this.exact.get(variant);
        if (!list) this.exact.set(variant, [key]);
        else if (!list.includes(key)) list.push(key);
      }
    }
  }

  /** Entries of a type in index order (most downloaded / followed first). */
  top(type: EntryType, limit: number): EntryItem[] {
    return (this.byType.get(type) ?? []).slice(0, limit);
  }

  /** Scored matches of `text` restricted to `scope` (actions are searched separately). */
  query(text: string, scope: Scope): Array<ResultItem & { score: number }> {
    const allowed = SCOPE_TYPES[scope];
    if (allowed.size === 0) return [];
    const filter = (result: SearchResult) => {
      const item = this.entries.get(String(result.id));
      return item !== undefined && allowed.has(item.type);
    };
    const boostDocument = (id: unknown) => this.popularity.get(String(id)) ?? 1;
    let results = this.search.search(text, { combineWith: 'AND', filter, boostDocument });
    if (results.length === 0) results = this.search.search(text, { combineWith: 'OR', filter, boostDocument });

    const exact = new Set<string>();
    const key = exactKey(text);
    for (const variant of [key, key.replace(/\s+/g, '')]) {
      for (const hit of this.exact.get(variant) ?? []) exact.add(hit);
    }

    const out: Array<ResultItem & { score: number }> = [];
    const seen = new Set<string>();
    for (const result of results) {
      const item = this.entries.get(String(result.id));
      if (!item) continue;
      seen.add(item.key);
      out.push({ item, terms: result.terms, score: result.score + (exact.has(item.key) ? EXACT_BONUS : 0) });
    }
    // An exact name/manifest id that the tokenizer could not reach (punctuation…) still wins.
    for (const hit of exact) {
      const item = this.entries.get(hit);
      if (!item || seen.has(hit) || !allowed.has(item.type)) continue;
      out.push({ item, terms: [key], score: EXACT_BONUS });
    }
    return out.sort((a, b) => b.score - a.score);
  }
}

/** Groups scored results, keeps the best of each group and orders groups by their best hit. */
export function groupResults(
  scored: ReadonlyArray<ResultItem & { score: number }>,
  actions: ReadonlyArray<ResultItem & { score: number }>,
  scope: Scope,
): ResultGroup[] {
  const groups = new Map<GroupId, { items: ResultItem[]; best: number }>();
  const push = (id: GroupId, entry: ResultItem & { score: number }) => {
    const limit = scope === 'all' ? (ALL_LIMITS[id] ?? SCOPED_LIMIT) : SCOPED_LIMIT;
    const group = groups.get(id) ?? { items: [], best: entry.score };
    if (group.items.length >= limit) return;
    group.items.push({ item: entry.item, terms: entry.terms });
    group.best = Math.max(group.best, entry.score);
    groups.set(id, group);
  };
  for (const entry of scored) {
    if (entry.item.type !== 'action') push(GROUP_OF[entry.item.type], entry);
  }
  for (const entry of actions) push('actions', entry);
  return [...groups.entries()]
    .sort(([a, x], [b, y]) => y.best - x.best || GROUP_ORDER.indexOf(a) - GROUP_ORDER.indexOf(b))
    .map(([id, { items }]) => ({ id, items }));
}

/** MiniSearch over the actions (built once per palette; labels are localised). */
export class ActionSearch {
  private readonly search = createMiniSearch();
  private readonly actions = new Map<string, ActionItem>();

  constructor(actions: readonly ActionItem[]) {
    for (const action of actions) this.actions.set(action.key, action);
    this.search.addAll(
      actions.map((action) => ({
        key: action.key,
        title: action.title,
        alt: action.keywords,
        manifestId: '',
        tags: '',
        category: '',
      })),
    );
  }

  query(text: string): Array<ResultItem & { score: number }> {
    let results = this.search.search(text, { combineWith: 'AND' });
    if (results.length === 0) results = this.search.search(text, { combineWith: 'OR' });
    const out: Array<ResultItem & { score: number }> = [];
    for (const result of results) {
      const item = this.actions.get(String(result.id));
      if (item) out.push({ item, terms: result.terms, score: result.score });
    }
    return out;
  }
}

// -------------------------------------------------------------------------------------------
// Network
// -------------------------------------------------------------------------------------------

export class IndexLoadError extends Error {
  readonly ref: string | null;
  readonly offline: boolean;

  constructor(message: string, ref: string | null, offline: boolean) {
    super(message);
    this.name = 'IndexLoadError';
    this.ref = ref;
    this.offline = offline;
  }
}

const indexCache = new Map<string, Promise<PaletteIndex>>();

function isIndex(value: unknown): value is SearchIndexDTO {
  if (!value || typeof value !== 'object') return false;
  const dto = value as Record<string, unknown>;
  return (
    dto.v === 1 &&
    Array.isArray(dto.mods) &&
    Array.isArray(dto.kits) &&
    Array.isArray(dto.users) &&
    Array.isArray(dto.categories) &&
    Array.isArray(dto.pages) &&
    Array.isArray(dto.trending)
  );
}

function requestRef(response: Response): string | null {
  return response.headers.get('x-request-id') ?? response.headers.get('cf-ray');
}

async function fetchIndex(locale: string): Promise<PaletteIndex> {
  let response: Response;
  try {
    response = await fetch(`${INDEX_URL}?locale=${encodeURIComponent(locale)}`, {
      headers: { accept: 'application/json' },
      credentials: 'omit',
    });
  } catch {
    throw new IndexLoadError('network', null, typeof navigator !== 'undefined' && navigator.onLine === false);
  }
  if (!response.ok) throw new IndexLoadError(`status ${response.status}`, requestRef(response), false);
  let body: unknown;
  try {
    body = await response.json();
  } catch {
    throw new IndexLoadError('invalid json', requestRef(response), false);
  }
  if (!isIndex(body)) throw new IndexLoadError('unexpected index version', requestRef(response), false);
  return new PaletteIndex(body);
}

/** The index of a locale (one request per page; a failed load can be retried). */
export function loadIndex(locale: string): Promise<PaletteIndex> {
  let pending = indexCache.get(locale);
  if (!pending) {
    pending = fetchIndex(locale);
    pending.catch(() => indexCache.delete(locale));
    indexCache.set(locale, pending);
  }
  return pending;
}

const SERVER_TYPES: Record<Scope, readonly string[]> = {
  all: [],
  mods: ['mod'],
  builds: ['build'],
  kits: ['kit'],
  creators: ['user'],
  actions: [],
};

/**
 * Server search, used when the local index finds nothing (or could not load). Also records the
 * query in the aggregated daily log. Resolves to `[]` on any failure.
 */
export async function serverSearch(
  text: string,
  scope: Scope,
  index: PaletteIndex | null,
  signal: AbortSignal,
): Promise<ResultItem[]> {
  const params = new URLSearchParams({ q: text.slice(0, 100), limit: '8' });
  for (const type of SERVER_TYPES[scope]) params.append('types', type);
  try {
    const response = await fetch(`${SEARCH_URL}?${params}`, {
      headers: { accept: 'application/json' },
      credentials: 'omit',
      signal,
    });
    if (!response.ok) return [];
    const body = (await response.json()) as { hits?: SearchHitDTO[] };
    if (!Array.isArray(body.hits)) return [];
    const out: ResultItem[] = [];
    for (const hit of body.hits) {
      const type: EntryType =
        hit.type === 'mod' ? (hit.kind === 'build' ? 'build' : 'mod') : hit.type === 'user' ? 'user' : hit.type;
      const key = `${type}:${hit.id}`;
      const known = index?.entries.get(key);
      const item: EntryItem = known ?? {
        key,
        type,
        id: hit.id,
        title: hit.title,
        subtitle: hit.subtitle,
        path: hit.path,
        thumb: hit.thumbnailUrl,
        ...(hit.kind ? { kind: hit.kind } : {}),
        ...(hit.compatStatus ? { compat: hit.compatStatus } : {}),
        ...(hit.downloads !== null ? { downloads: hit.downloads } : {}),
      };
      out.push({ item, terms: [], serverHighlight: hit.highlight });
    }
    return out;
  } catch {
    return [];
  }
}
