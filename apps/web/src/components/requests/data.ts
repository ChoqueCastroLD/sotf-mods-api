/**
 * Server-side data of the public request board (`/requests`, `/requests/:id`).
 *
 * - `/requests`: `GET /api/v2/requests` with status, sort and page-based pagination. Every
 *   parameter is normalised; a non-canonical query is answered with a 301 to the clean URL so
 *   each listing view has one edge-cache entry.
 * - `/requests/:id`: the request and the first page of its comments, read without cookies (the
 *   HTML is shared and edge-cached with `request:{id}`); the signed-in extras (votes, actions)
 *   come from the island.
 */
import { isApiError } from '@sotf/contracts/client';
import {
  REQUEST_LIST_STATUSES,
  REQUEST_SORTS,
  type RequestCommentDTO,
  type RequestDTO,
  type RequestListStatus,
  type RequestSort,
} from '@sotf/contracts/requests';
import { serverApi } from '../../lib/api.ts';
import { href } from '../../lib/i18n.ts';

export type { RequestCommentDTO, RequestDTO };

export const REQUEST_PAGE_SIZE = 20;
/** Page sizes offered by the board (the API accepts up to 50). */
export const REQUEST_PAGE_SIZES = [10, 20, 50] as const;
const CALL_TIMEOUT_MS = 4000;
/** Comments rendered on the server (the island lists the rest with «Load more»). */
export const SSR_COMMENTS = 50;

export interface RequestListState {
  status: RequestListStatus;
  sort: RequestSort;
  /** Text searched in the titles. */
  q: string;
  page: number;
  pageSize: number;
}

export const DEFAULT_REQUEST_LIST_STATE: RequestListState = {
  status: 'open',
  sort: 'top',
  q: '',
  page: 1,
  pageSize: REQUEST_PAGE_SIZE,
};

export function parseRequestListState(url: URL): RequestListState {
  const params = url.searchParams;
  const status = REQUEST_LIST_STATUSES.find((value) => value === params.get('status'));
  const page = Number.parseInt(params.get('page') ?? '', 10);
  const size = Number.parseInt(params.get('pageSize') ?? '', 10);
  return {
    status: status ?? DEFAULT_REQUEST_LIST_STATE.status,
    sort: REQUEST_SORTS.find((value) => value === params.get('sort')) ?? DEFAULT_REQUEST_LIST_STATE.sort,
    q: (params.get('q') ?? '').replace(/\s+/g, ' ').trim().slice(0, 100),
    page: Number.isInteger(page) && page >= 1 && page <= 10_000 ? page : 1,
    pageSize: (REQUEST_PAGE_SIZES as readonly number[]).includes(size) ? size : REQUEST_PAGE_SIZE,
  };
}

/** Canonical query string (defaults omitted, fixed order). */
export function requestListQuery(state: RequestListState): string {
  const params = new URLSearchParams();
  if (state.status !== DEFAULT_REQUEST_LIST_STATE.status) params.set('status', state.status);
  if (state.q) params.set('q', state.q);
  if (state.sort !== DEFAULT_REQUEST_LIST_STATE.sort) params.set('sort', state.sort);
  if (state.pageSize !== REQUEST_PAGE_SIZE) params.set('pageSize', String(state.pageSize));
  if (state.page > 1) params.set('page', String(state.page));
  const query = params.toString();
  return query ? `?${query}` : '';
}

/** Locale-aware URL of the listing with some fields changed (filters reset the page). */
export function requestListHref(
  state: RequestListState,
  patch: Partial<RequestListState>,
  locale: App.Locals['locale'],
): string {
  const next = { ...state, ...patch };
  if (!('page' in patch)) next.page = 1;
  return `${href('/requests', locale)}${requestListQuery(next)}`;
}

/** Filtered, searched, re-sorted or resized views are `noindex, follow`. */
export function isFiltered(state: RequestListState): boolean {
  return (
    state.status !== DEFAULT_REQUEST_LIST_STATE.status ||
    state.sort !== DEFAULT_REQUEST_LIST_STATE.sort ||
    state.q !== '' ||
    state.pageSize !== REQUEST_PAGE_SIZE
  );
}

export type RequestListData =
  | { kind: 'redirect'; location: string }
  | {
      kind: 'ok';
      state: RequestListState;
      /** null when the API failed (the page answers 503 with an error state). */
      list: { items: RequestDTO[]; total: number; totalPages: number; pageSize: number } | null;
    };

export async function loadRequestList(url: URL, locale: App.Locals['locale']): Promise<RequestListData> {
  const state = parseRequestListState(url);
  const canonicalQuery = requestListQuery(state);
  if (url.search !== canonicalQuery && url.search !== '?') {
    return { kind: 'redirect', location: `${href('/requests', locale)}${canonicalQuery}` };
  }
  const list = await serverApi()
    .requests.list(
      {
        query: {
          status: state.status,
          sort: state.sort,
          page: state.page,
          pageSize: state.pageSize,
          ...(state.q ? { q: state.q } : {}),
        },
      },
      { signal: AbortSignal.timeout(CALL_TIMEOUT_MS) },
    )
    .catch(() => null);
  return {
    kind: 'ok',
    state,
    list: list ? { items: list.items, total: list.total, totalPages: list.totalPages, pageSize: list.pageSize } : null,
  };
}

export type RequestPageData =
  | { kind: 'ok'; request: RequestDTO; comments: RequestCommentDTO[]; moreComments: boolean }
  | { kind: 'not-found' }
  | { kind: 'error' };

export async function loadRequestPage(id: number): Promise<RequestPageData> {
  const api = serverApi();
  const signal = AbortSignal.timeout(CALL_TIMEOUT_MS);
  try {
    const [request, comments] = await Promise.all([
      api.requests.get({ params: { id } }, { signal }),
      api.requests.comments({ params: { id }, query: { limit: SSR_COMMENTS } }, { signal }).catch(() => null),
    ]);
    return {
      kind: 'ok',
      request,
      comments: comments?.items ?? [],
      moreComments: comments?.nextCursor != null,
    };
  } catch (error) {
    return isApiError(error) && (error.status === 404 || error.status === 410)
      ? { kind: 'not-found' }
      : { kind: 'error' };
  }
}

/** Locale-less path of a request. */
export function requestPath(id: number): string {
  return `/requests/${id}`;
}
