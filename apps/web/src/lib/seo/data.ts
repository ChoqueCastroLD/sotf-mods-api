/**
 * Catalog reads of the machine endpoints, through the public API on the private network (the web
 * never opens a database connection). Full-catalog reads (sitemaps, llms-full.txt) page through
 * `GET /api/v2/mods` 100 items at a time and are memoized for a minute, so a crawler fetching
 * every sitemap at once costs one pass.
 *
 * Only `published`, non-NSFW items are listed by the API: exactly what sitemaps and feeds may
 * announce (PLAN §8.6 «NSFW: fuera de los hubs y sitemaps»).
 */

import type {
  CategoryDTO as CategorySchema,
  CreatorCardDTO as CreatorSchema,
  ModCardDTO,
  TagDTO as TagSchema,
} from '@sotf/contracts/catalog';
import type { ApiClient } from '@sotf/contracts/client';
import { isApiError } from '@sotf/contracts/client';
import type { JamSummaryDTO } from '@sotf/contracts/jams';
import type { KitCardDTO } from '@sotf/contracts/kits';
import { MAX_PAGE_SIZE } from '@sotf/contracts/pagination';
import type { RequestDTO } from '@sotf/contracts/requests';
import type { z } from 'zod';
import { serverApi } from '../api.ts';

export type CategoryDTO = z.infer<typeof CategorySchema>;
export type TagDTO = z.infer<typeof TagSchema>;
export type CreatorCardDTO = z.infer<typeof CreatorSchema>;

type Card = ModCardDTO;
type Creator = CreatorCardDTO;

/** Hard ceiling of pages read per listing (100 × 100 = 10 000 items, the sitemap budget). */
const MAX_PAGES = 100;
const MEMO_TTL_MS = 60_000;

interface Memo<T> {
  at: number;
  value: Promise<T>;
}

const memo = new Map<string, Memo<unknown>>();

/** Memoizes a read for {@link MEMO_TTL_MS}; failures are not kept. */
export function memoized<T>(key: string, load: () => Promise<T>): Promise<T> {
  const now = Date.now();
  const hit = memo.get(key) as Memo<T> | undefined;
  if (hit && now - hit.at < MEMO_TTL_MS) return hit.value;
  const value = load();
  memo.set(key, { at: now, value });
  value.catch(() => {
    if (memo.get(key)?.value === value) memo.delete(key);
  });
  return value;
}

async function allPages<T>(
  fetchPage: (page: number) => Promise<{ items: T[]; totalPages: number }>,
  maxPages = MAX_PAGES,
): Promise<T[]> {
  const first = await fetchPage(1);
  const out = [...first.items];
  const last = Math.min(first.totalPages, maxPages);
  for (let page = 2; page <= last; page++) {
    const next = await fetchPage(page);
    out.push(...next.items);
    if (next.items.length === 0) break;
  }
  return out;
}

function api(): ApiClient {
  return serverApi();
}

/** Every published mod, library and build (newest release first). */
export function allCards(): Promise<Card[]> {
  return memoized('cards:all', () =>
    allPages((page) =>
      api().catalog.listMods({ query: { type: 'all', sort: 'updated', order: 'desc', page, pageSize: MAX_PAGE_SIZE } }),
    ),
  );
}

/** Newest releases of a listing (feeds). */
export async function recentCards(query: {
  type: 'mod' | 'library' | 'build' | 'all';
  category?: string;
  limit: number;
}): Promise<Card[]> {
  const list = await api().catalog.listMods({
    query: {
      type: query.type,
      sort: 'updated',
      order: 'desc',
      page: 1,
      pageSize: Math.min(MAX_PAGE_SIZE, query.limit),
      ...(query.category ? { category: [query.category] } : {}),
    },
  });
  return list.items;
}

export function allCategories(): Promise<CategoryDTO[]> {
  return memoized('categories', async () => (await api().catalog.categories({ query: { kind: 'all' } })).items);
}

export function allTags(): Promise<TagDTO[]> {
  return memoized('tags', async () => (await api().catalog.tags()).items);
}

export function allCreators(): Promise<Creator[]> {
  return memoized('creators', () =>
    allPages((page) => api().catalog.creators({ query: { sort: 'recent', page, pageSize: MAX_PAGE_SIZE } })),
  );
}

export function allKits(): Promise<KitCardDTO[]> {
  return memoized('kits', () =>
    allPages((page) => api().kits.list({ query: { sort: 'new', page, pageSize: MAX_PAGE_SIZE } })),
  );
}

export function allRequests(): Promise<RequestDTO[]> {
  return memoized('requests', () =>
    allPages((page) => api().requests.list({ query: { status: 'all', sort: 'new', page, pageSize: 50 } })),
  );
}

export function allJams(): Promise<JamSummaryDTO[]> {
  return memoized('jams', async () => {
    try {
      return (await api().jams.list({})).items;
    } catch (error) {
      // An API that does not know Jams yet (web deployed first) must not take the sitemap index down.
      if (isApiError(error) && error.status === 404) return [];
      throw error;
    }
  });
}

/** Classifies an API failure: 404/410 of the entity, or anything else (→ 503). */
export function apiStatus(error: unknown): 404 | 410 | null {
  if (!isApiError(error)) return null;
  if (error.status === 410) return 410;
  if (error.status === 404) return 404;
  return null;
}

/** Latest date among cards (`lastReleasedAt`), or null. */
export function newestRelease(cards: readonly Card[]): string | null {
  let newest: string | null = null;
  for (const card of cards) if (newest === null || card.lastReleasedAt > newest) newest = card.lastReleasedAt;
  return newest;
}
