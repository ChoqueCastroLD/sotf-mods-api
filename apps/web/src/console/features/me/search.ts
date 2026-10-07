/**
 * Search-param vocabulary of the «You» screens (`/me/following`, `/me/downloads`). Kept apart from
 * the screens because the routes' `validateSearch` runs in the eager route tree.
 */
export const ME_SORTS = ['recent', 'name', 'updates', 'times'] as const;
export type MeSort = (typeof ME_SORTS)[number];
export const ME_FILTERS = ['all', 'updates'] as const;
export type MeFilter = (typeof ME_FILTERS)[number];
export const ME_PAGE_SIZES = [10, 20, 50] as const;
export const DEFAULT_ME_PAGE_SIZE = 20;

export interface MeListSearch {
  q?: string;
  filter?: Exclude<MeFilter, 'all'>;
  sort?: Exclude<MeSort, 'recent'>;
  page?: number;
  size?: number;
}

export interface MeListState {
  q: string;
  filter: MeFilter;
  sort: MeSort;
  page: number;
  size: number;
}

function intOf(value: unknown): number | undefined {
  const n = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
  return Number.isSafeInteger(n) ? n : undefined;
}

/** `validateSearch` of both routes: unknown values are dropped, defaults are not written to the URL. */
export function validateMeSearch(search: Record<string, unknown>): MeListSearch {
  const page = intOf(search.page);
  const size = intOf(search.size);
  return {
    ...(typeof search.q === 'string' && search.q.trim() ? { q: search.q.slice(0, 80) } : {}),
    ...(search.filter === 'updates' ? { filter: 'updates' as const } : {}),
    ...((ME_SORTS as readonly unknown[]).includes(search.sort) && search.sort !== 'recent'
      ? { sort: search.sort as Exclude<MeSort, 'recent'> }
      : {}),
    ...(page !== undefined && page > 1 && page < 10_000 ? { page } : {}),
    ...(size !== undefined && (ME_PAGE_SIZES as readonly number[]).includes(size) && size !== DEFAULT_ME_PAGE_SIZE
      ? { size }
      : {}),
  };
}

export function stateOf(search: MeListSearch): MeListState {
  return {
    q: search.q ?? '',
    filter: search.filter ?? 'all',
    sort: search.sort ?? 'recent',
    page: search.page ?? 1,
    size: search.size ?? DEFAULT_ME_PAGE_SIZE,
  };
}

/** Search to write for a state (defaults left out). */
export function searchOf(state: MeListState): MeListSearch {
  return {
    ...(state.q.trim() ? { q: state.q } : {}),
    ...(state.filter !== 'all' ? { filter: state.filter } : {}),
    ...(state.sort !== 'recent' ? { sort: state.sort } : {}),
    ...(state.page > 1 ? { page: state.page } : {}),
    ...(state.size !== DEFAULT_ME_PAGE_SIZE ? { size: state.size } : {}),
  };
}

/** Rows of the page and the clamped page number. */
export function paginate<T>(
  items: readonly T[],
  page: number,
  size: number,
): { rows: T[]; page: number; pages: number } {
  const pages = Math.max(1, Math.ceil(items.length / size));
  const current = Math.min(Math.max(1, page), pages);
  return { rows: items.slice((current - 1) * size, current * size), page: current, pages };
}
