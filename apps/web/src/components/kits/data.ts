/**
 * Server-side data of the public kit pages (WP-71, PLAN §7.8, research/03 §6.5).
 *
 * - `/kits`: `GET /api/v2/kits` (public kits with at least one item), sort, compatibility filter,
 *   staff picks and page-based pagination. Every parameter is normalised; unknown values fall back
 *   to the defaults and a non-canonical query is answered with a 301 to the clean URL.
 * - `/kits/:user/:slug`: the tolerant resolver (`GET /api/v2/resolve`) decides between 200, 301
 *   (case, renamed slug), 404 and 410, then the kit is read by id. Private kits are 404 for
 *   everybody here: the HTML is shared (edge-cached with `kit:{id}`), so nothing uses cookies.
 * - `/k/:code`: `GET /api/v2/kits/by-code/:code` → 301 to the canonical page.
 */

import { isApiError } from '@sotf/contracts/client';
import type { GameBuildDTO } from '@sotf/contracts/compat';
import { type KitCardDTO, type KitDTO, normalizeKitCode } from '@sotf/contracts/kits';
import { kitPath } from '@sotf/contracts/seo';
import { optional, serverApi } from '../../lib/api.ts';
import { href } from '../../lib/i18n.ts';

export type { KitCardDTO, KitDTO };
export type KitItem = KitDTO['items'][number];

// -----------------------------------------------------------------------------------------------
// Listing
// -----------------------------------------------------------------------------------------------

export const KIT_SORTS = ['popular', 'new'] as const;
export type KitSort = (typeof KIT_SORTS)[number];
export const KIT_PAGE_SIZE = 24;
const LIST_TIMEOUT_MS = 4000;

export interface KitListState {
  sort: KitSort;
  /** Only kits with nothing broken and no conflict on the current build. */
  works: boolean;
  staffPick: boolean;
  page: number;
}

export const DEFAULT_KIT_LIST_STATE: KitListState = { sort: 'popular', works: false, staffPick: false, page: 1 };

/** Reads the listing state from the URL (tolerant: unknown values fall back to the defaults). */
export function parseKitListState(url: URL): KitListState {
  const params = url.searchParams;
  const sort = params.get('sort');
  const page = Number.parseInt(params.get('page') ?? '', 10);
  return {
    sort: sort === 'new' ? 'new' : 'popular',
    works: params.get('compat') === 'works',
    staffPick: params.get('staff') === '1',
    page: Number.isInteger(page) && page >= 1 && page <= 10_000 ? page : 1,
  };
}

/** Canonical query string of a state (defaults omitted, fixed order). */
export function kitListQuery(state: KitListState): string {
  const params = new URLSearchParams();
  if (state.sort !== 'popular') params.set('sort', state.sort);
  if (state.works) params.set('compat', 'works');
  if (state.staffPick) params.set('staff', '1');
  if (state.page > 1) params.set('page', String(state.page));
  const query = params.toString();
  return query ? `?${query}` : '';
}

/** Locale-aware URL of the listing with some fields changed (filters reset the page). */
export function kitListHref(state: KitListState, patch: Partial<KitListState>, locale: App.Locals['locale']): string {
  const next = { ...state, ...patch };
  if (!('page' in patch)) next.page = 1;
  return `${href('/kits', locale)}${kitListQuery(next)}`;
}

/** True when the listing is filtered (filtered views are `noindex, follow`). */
export function isFiltered(state: KitListState): boolean {
  return state.sort !== 'popular' || state.works || state.staffPick;
}

export type KitListData =
  | { kind: 'redirect'; location: string }
  | {
      kind: 'ok';
      state: KitListState;
      /** null when the API failed (the page answers 503 with an error state). */
      list: { items: KitCardDTO[]; total: number; totalPages: number; pageSize: number } | null;
      currentBuild: string | null;
    };

export async function loadKitList(url: URL, locale: App.Locals['locale']): Promise<KitListData> {
  const state = parseKitListState(url);
  const canonicalQuery = kitListQuery(state);
  // Only the canonical form of the query is served (one cache entry per listing view): unknown
  // parameters, default values and a different order are answered with a 301.
  if (url.search !== canonicalQuery && url.search !== '?') {
    return { kind: 'redirect', location: `${href('/kits', locale)}${canonicalQuery}` };
  }
  const api = serverApi();
  const [list, currentBuild] = await Promise.all([
    api.kits
      .list(
        {
          query: {
            sort: state.sort,
            compat: state.works ? 'works' : 'any',
            page: state.page,
            pageSize: KIT_PAGE_SIZE,
            ...(state.staffPick ? { staffPick: true } : {}),
          },
        },
        { signal: AbortSignal.timeout(LIST_TIMEOUT_MS) },
      )
      .catch(() => null),
    loadCurrentBuild(),
  ]);
  return {
    kind: 'ok',
    state,
    list: list ? { items: list.items, total: list.total, totalPages: list.totalPages, pageSize: list.pageSize } : null,
    currentBuild,
  };
}

/** Label of the current game build («1.0.4»), optional. */
export async function loadCurrentBuild(): Promise<string | null> {
  const builds = await optional((signal) => serverApi().compat.gameBuilds({}, { signal }));
  const current: GameBuildDTO | undefined = builds?.items.find((build) => build.isCurrent);
  return current?.label ?? null;
}

// -----------------------------------------------------------------------------------------------
// Detail
// -----------------------------------------------------------------------------------------------

export type ResolvedKitPage =
  | { kind: 'ok'; kit: KitDTO }
  | { kind: 'redirect'; location: string }
  | { kind: 'not-found' }
  | { kind: 'gone' };

function decodeSegment(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/** `/kits/<user>/<slug>` of the (locale-less) request, decoded once. */
export function kitPathSegments(url: URL): { user: string; slug: string; rest: string[] } | null {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] !== 'kits' || segments.length < 3) return null;
  return {
    user: decodeSegment(segments[1] as string),
    slug: decodeSegment(segments[2] as string),
    rest: segments.slice(3),
  };
}

function statusOf(error: unknown): number | null {
  return isApiError(error) ? error.status : null;
}

export async function resolveKitPage(context: { url: URL; locals: App.Locals }): Promise<ResolvedKitPage> {
  const parts = kitPathSegments(context.url);
  if (!parts || parts.rest.length > 0) return { kind: 'not-found' };
  const locale = context.locals.locale;
  const resolved = await serverApi().seo.resolve({ query: { path: kitPath(parts.user, parts.slug) } });
  if (resolved.status === 410) return { kind: 'gone' };
  if (resolved.status === 301) {
    if (!resolved.canonicalPath) return { kind: 'not-found' };
    return { kind: 'redirect', location: `${href(resolved.canonicalPath, locale)}${context.url.search}` };
  }
  if (resolved.status === 404 || resolved.id === null || resolved.kind !== 'kit') return { kind: 'not-found' };
  try {
    const kit = await serverApi().kits.get({ params: { id: resolved.id } });
    return { kind: 'ok', kit };
  } catch (error) {
    const status = statusOf(error);
    if (status === 404) return { kind: 'not-found' };
    if (status === 410) return { kind: 'gone' };
    throw error;
  }
}

/** A kit by share code (any accepted spelling), or null. */
export async function kitByCode(raw: string): Promise<KitDTO | null> {
  const code = normalizeKitCode(raw);
  if (!code) return null;
  try {
    return await serverApi().kits.getByCode({ params: { code } });
  } catch (error) {
    if (statusOf(error) === 404) return null;
    throw error;
  }
}

/** Other public kits of the curator (sidebar), optional. */
export async function loadMoreFromCurator(kit: KitDTO): Promise<KitCardDTO[]> {
  const page = await optional((signal) =>
    serverApi().kits.userKits({ params: { handle: kit.owner.handle }, query: { page: 1, pageSize: 5 } }, { signal }),
  );
  return (page?.items ?? []).filter((card) => card.id !== kit.id).slice(0, 4);
}
