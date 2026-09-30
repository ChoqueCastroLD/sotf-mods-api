/**
 * Search engine of the palette (PLAN §7.9, T0-07).
 *
 * - The per-locale index (`GET /api/v2/search/index?locale=`, ≈ 15 KB br, edge-cached with the
 *   `search-index` tag) is fetched the first time the palette opens and kept for the page's life.
 * - MiniSearch with prefix search, `fuzzy: 0.2` (1–2 typos: «stak mod» → StackMod, «kelvn» →
 *   Kelvin) and boosts on the name and the `manifestId`; downloads nudge popular entries up.
 * - An exact `manifestId` or name (case- and accent-insensitive) always comes first.
 * - Words are matched with AND first and OR as a fallback, so an extra word never empties the list.
 * - Operators (`by:` `cat:` `sort:` `type:` `mp:`, see `operators.ts`) filter and reorder the
 *   local entries; when MiniSearch finds nothing a subsequence match over names (`kelvnsk` →
 *   KelvinSeek) still answers.
 * - When the local index has nothing, the server search (`GET /api/v2/search`, full text over
 *   descriptions too) is asked; that request is also what records the query in the aggregated
 *   daily log (`SearchQueryDaily`), so searches without results are counted.
 */
import type { SearchHitDTO, SearchIndexDTO } from '@sotf/contracts/search';
import MiniSearch, { type SearchResult } from 'minisearch';
import { type Filters, hasFilters } from './operators.ts';
import type { Scope } from './scope.ts';
import { exactKey, fold, processTerm, subsequenceScore, tokenize, tokenizeQuery } from './text.ts';
import {
  type ActionItem,
  type EntryItem,
  type EntryType,
  type GroupId,
  isEntry,
  type ResultGroup,
  type ResultItem,
} from './types.ts';

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
  scout: new Set(),
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
  'go',
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
  go: 4,
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

    // The last four fields of a mod tuple were added after the first index version: read them
    // defensively so an edge-cached older index still works.
    for (const row of dto.mods) {
      const [id, kind, name, handle, category, tagsCsv, manifestId, downloads, compat, thumb, path] = row;
      const tail = row as unknown as ReadonlyArray<unknown>;
      const updatedDay = typeof tail[11] === 'number' ? tail[11] : undefined;
      const createdDay = typeof tail[12] === 'number' ? tail[12] : undefined;
      const rating = typeof tail[13] === 'number' ? tail[13] / 10 : null;
      const mp = typeof tail[14] === 'number' ? tail[14] : undefined;
      // Non-English indexes carry the original (English) name when `name` is a translation.
      const originalName = typeof tail[15] === 'string' && tail[15] ? tail[15] : null;
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
        handle,
        rating,
        ...(updatedDay !== undefined ? { updatedDay } : {}),
        ...(createdDay !== undefined ? { createdDay } : {}),
        ...(mp !== undefined ? { mp } : {}),
      };
      this.add(item, downloads);
      this.addExact(item.key, name, manifestId, ...(originalName ? [originalName] : []));
      docs.push({
        key: item.key,
        title: name,
        alt: originalName ? `${handle} ${originalName}` : handle,
        manifestId,
        tags: tags.join(' '),
        category: category ? `${category} ${this.categoryNames.get(category) ?? ''}` : '',
      });
    }

    for (const row of dto.kits) {
      const [id, name, owner, itemsCount, path] = row;
      const kitThumb = (row as unknown as ReadonlyArray<unknown>)[5];
      const item: EntryItem = {
        key: `kit:${id}`,
        type: 'kit',
        id,
        title: name,
        subtitle: `@${owner}`,
        path,
        thumb: typeof kitThumb === 'string' ? kitThumb : null,
        count: itemsCount,
        handle: owner,
      };
      this.add(item, itemsCount * 50);
      this.addExact(item.key, name);
      docs.push({ key: item.key, title: name, alt: owner, manifestId: '', tags: '', category: '' });
    }

    for (const row of dto.users) {
      const [id, handle, displayName, modsCount, path] = row;
      const avatar = (row as unknown as ReadonlyArray<unknown>)[5];
      const item: EntryItem = {
        key: `user:${id}`,
        type: 'user',
        id,
        title: displayName || handle,
        subtitle: `@${handle}`,
        path,
        thumb: typeof avatar === 'string' ? avatar : null,
        count: modsCount,
        handle,
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

  /** Categories in index order: `[slug, name]`. */
  categoryList(): Array<[string, string]> {
    return [...this.categoryNames.entries()];
  }

  /** Whether `item` passes the operators (and only entries that can carry them pass). */
  private passes(item: EntryItem, filters: Filters): boolean {
    if (!hasFilters(filters)) return true;
    if (item.type !== 'mod' && item.type !== 'build' && item.type !== 'kit') return false;
    if (filters.type) {
      const kind =
        item.type === 'kit' ? 'kit' : item.type === 'build' ? 'build' : item.kind === 'library' ? 'library' : 'mod';
      if (kind !== filters.type) return false;
    }
    if (filters.by) {
      const wanted = fold(filters.by);
      const handle = fold(item.handle ?? '');
      if (handle !== wanted && !handle.startsWith(wanted)) return false;
    }
    if (filters.cat) {
      if (item.type === 'kit' || !item.categorySlug) return false;
      const wanted = fold(filters.cat);
      const slug = fold(item.categorySlug);
      const name = fold(this.categoryNames.get(item.categorySlug) ?? '');
      if (slug !== wanted && !slug.startsWith(wanted) && !name.startsWith(wanted)) return false;
    }
    if (filters.mp) {
      if (item.mp === undefined) return false;
      const multiplayer = item.mp >= 1 && item.mp <= 3;
      if (filters.mp === 'yes' ? !multiplayer : item.mp !== 0) return false;
    }
    return true;
  }

  /**
   * Scored matches of `text` restricted to `scope` and the operators (actions are searched
   * separately). An empty `text` with operators lists what they select.
   */
  query(text: string, scope: Scope, filters: Filters = {}): Array<ResultItem & { score: number }> {
    const allowed = SCOPE_TYPES[scope];
    if (allowed.size === 0) return [];
    const accepts = (item: EntryItem | undefined): item is EntryItem =>
      item !== undefined && allowed.has(item.type) && this.passes(item, filters);

    let out: Array<ResultItem & { score: number }> = [];
    if (text === '') {
      for (const item of this.entries.values()) {
        if (accepts(item)) out.push({ item, terms: [], score: this.popularity.get(item.key) ?? 1 });
      }
    } else {
      const filter = (result: SearchResult) => accepts(this.entries.get(String(result.id)));
      const boostDocument = (id: unknown) => this.popularity.get(String(id)) ?? 1;
      let results = this.search.search(text, { combineWith: 'AND', filter, boostDocument });
      if (results.length === 0) results = this.search.search(text, { combineWith: 'OR', filter, boostDocument });

      const exact = new Set<string>();
      const key = exactKey(text);
      for (const variant of [key, key.replace(/\s+/g, '')]) {
        for (const hit of this.exact.get(variant) ?? []) exact.add(hit);
      }
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
        if (!accepts(item) || seen.has(hit)) continue;
        out.push({ item, terms: [key], score: EXACT_BONUS });
      }
      if (out.length === 0) out = this.fuzzy(key, accepts);
    }
    return this.order(out, filters);
  }

  /** Subsequence match over names and manifest ids (`kelvnsk`, `axlmnu`) for when nothing else matched. */
  private fuzzy(
    key: string,
    accepts: (item: EntryItem | undefined) => item is EntryItem,
  ): Array<ResultItem & { score: number }> {
    const needle = key.replace(/\s+/g, '');
    if (needle.length < 3) return [];
    const out: Array<ResultItem & { score: number }> = [];
    for (const item of this.entries.values()) {
      if (!accepts(item)) continue;
      const score = Math.max(
        subsequenceScore(fold(item.title).replace(/\s+/g, ''), needle),
        item.manifestId ? subsequenceScore(fold(item.manifestId), needle) : 0,
      );
      if (score >= 0.6) out.push({ item, terms: [needle], score: score * (this.popularity.get(item.key) ?? 1) });
    }
    return out.sort((a, b) => b.score - a.score).slice(0, SCOPED_LIMIT);
  }

  private order(list: Array<ResultItem & { score: number }>, filters: Filters): Array<ResultItem & { score: number }> {
    const sort = filters.sort;
    if (!sort) {
      return list.sort((a, b) => b.score - a.score);
    }
    const value = (entry: ResultItem): number => {
      const item = entry.item as EntryItem;
      switch (sort) {
        case 'new':
          return item.createdDay ?? 0;
        case 'updated':
          return item.updatedDay ?? 0;
        case 'rating':
          return item.rating ?? 0;
        default:
          return item.downloads ?? 0;
      }
    };
    const sorted = list.sort((a, b) => value(b) - value(a) || b.score - a.score);
    // Keep the order when the groups are ranked by their best hit.
    return sorted.map((entry, rank) => ({ ...entry, score: sorted.length - rank }));
  }
}

/** Groups scored results, keeps the best of each group and orders groups by their best hit. */
export function groupResults(
  scored: ReadonlyArray<ResultItem & { score: number }>,
  actions: ReadonlyArray<ResultItem & { score: number }>,
  scope: Scope,
  wide = false,
): ResultGroup[] {
  const groups = new Map<GroupId, { items: ResultItem[]; best: number }>();
  const push = (id: GroupId, entry: ResultItem & { score: number }) => {
    const limit = scope === 'all' && !wide ? (ALL_LIMITS[id] ?? SCOPED_LIMIT) : SCOPED_LIMIT;
    const group = groups.get(id) ?? { items: [], best: entry.score };
    if (group.items.length >= limit) return;
    group.items.push({ item: entry.item, terms: entry.terms });
    group.best = Math.max(group.best, entry.score);
    groups.set(id, group);
  };
  for (const entry of scored) {
    if (entry.item.type !== 'action' && isEntry(entry.item)) push(GROUP_OF[entry.item.type], entry);
  }
  for (const entry of actions) push((entry.item as ActionItem).section === 'go' ? 'go' : 'actions', entry);
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
    if (out.length === 0) {
      const needle = fold(text).replace(/\s+/g, '');
      if (needle.length >= 3) {
        for (const item of this.actions.values()) {
          const score = subsequenceScore(fold(item.title).replace(/\s+/g, ''), needle);
          if (score >= 0.6) out.push({ item, terms: [needle], score });
        }
      }
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
  scout: [],
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
