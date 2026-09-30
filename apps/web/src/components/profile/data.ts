/**
 * Server-side data of the public profile `/profile/:handle` (WP-64, T0-15, PLAN §4.2), the
 * creators directory `/creators` and `/achievements`.
 *
 * - `resolveProfilePage()` runs the tolerant resolver (`GET /api/v2/resolve`): 200, 301 (renamed
 *   handle, case), 404 (unknown or banned) or 410 (deleted account); the profile is then read with
 *   the canonical handle.
 * - The HTML is shared by every visitor (edge-cached with `user:{id}`): nothing here reads cookies.
 *   The follow state and «this is you» are filled in by `profile-page.ts` after load.
 * - Every tab is one request; a failed tab renders an error state inside the page (with retry)
 *   instead of failing the whole profile. The badge notebook is also read for the header counts,
 *   with the short budget of an optional block.
 */
import type {
  CreatorCardDTO as CreatorCardSchema,
  ModCardDTO,
  UserActivityDTO,
  UserPublicDTO,
  UserReviewDTO as UserReviewSchema,
} from '@sotf/contracts/catalog';
import { isApiError } from '@sotf/contracts/client';
import type { BadgeCatalogDTO, UserBadgesDTO } from '@sotf/contracts/gamification';
import type { KitCardDTO } from '@sotf/contracts/kits';
import { profilePath } from '@sotf/contracts/seo';
import type { z } from 'zod';
import { optional, serverApi } from '../../lib/api.ts';
import { href } from '../../lib/i18n.ts';

export type { KitCardDTO, ModCardDTO, UserPublicDTO };
export type UserActivity = z.infer<typeof UserActivityDTO>;
export type CreatorCardDTO = z.infer<typeof CreatorCardSchema>;
export type UserReviewDTO = z.infer<typeof UserReviewSchema>;
export type UserBadges = z.infer<typeof UserBadgesDTO>;
export type BadgeCatalog = z.infer<typeof BadgeCatalogDTO>;

// -----------------------------------------------------------------------------------------------
// Tabs
// -----------------------------------------------------------------------------------------------

export const PROFILE_TABS = ['mods', 'builds', 'kits', 'badges', 'activity', 'reviews'] as const;
export type ProfileTab = (typeof PROFILE_TABS)[number];

/** Sorts offered on the Mods and Builds tabs (subset of `ModSort`). */
export const PROFILE_SORTS = ['downloads', 'updated', 'new'] as const;
export type ProfileSort = (typeof PROFILE_SORTS)[number];

/** Items per page of the Mods, Builds and Kits tabs. */
export const PROFILE_PAGE_SIZE = 24;
/** Reviews per page of the Reviews tab. */
export const PROFILE_REVIEWS_LIMIT = 10;
/** Highest page a crawler may ask for (the API answers empty pages beyond the last one). */
const MAX_PAGE = 500;

function isTab(value: string | null): value is ProfileTab {
  return value !== null && (PROFILE_TABS as readonly string[]).includes(value);
}

function isSort(value: string | null): value is ProfileSort {
  return value !== null && (PROFILE_SORTS as readonly string[]).includes(value);
}

/** Tabs the profile shows in its tab bar (privacy and empty creator tabs hidden). */
export function visibleTabs(user: UserPublicDTO, active: ProfileTab): ProfileTab[] {
  return PROFILE_TABS.filter((tab) => {
    if (tab === active) return true;
    switch (tab) {
      case 'mods':
        return user.stats.modsCount > 0;
      case 'builds':
        return user.stats.buildsCount > 0;
      case 'kits':
        return !user.privacy.hideKits;
      case 'activity':
        return !user.privacy.hideActivity;
      default:
        return true;
    }
  });
}

/** Tab shown without `?tab`: the creator's work first, the field notebook for everyone else. */
export function defaultTab(user: UserPublicDTO): ProfileTab {
  if (user.stats.modsCount > 0) return 'mods';
  if (user.stats.buildsCount > 0) return 'builds';
  return 'badges';
}

export interface ProfileQuery {
  tab: ProfileTab;
  /** `?tab` was present and valid (not the default one implied by the URL). */
  explicitTab: boolean;
  page: number;
  sort: ProfileSort;
  cursor: string | null;
}

export type ParsedQuery = { ok: true; query: ProfileQuery } | { ok: false };

/**
 * `?tab=&page=&sort=&cursor=`. An unknown tab, a malformed page or sort is not an error page: the
 * caller redirects to the clean profile URL (`ok: false`), so shared links never dead-end.
 */
export function parseProfileQuery(params: URLSearchParams, user: UserPublicDTO): ParsedQuery {
  const rawTab = params.get('tab');
  if (rawTab !== null && !isTab(rawTab)) return { ok: false };
  const tab = rawTab ?? defaultTab(user);
  const rawPage = params.get('page');
  let page = 1;
  if (rawPage !== null) {
    if (!/^[1-9]\d{0,3}$/.test(rawPage)) return { ok: false };
    page = Math.min(Number(rawPage), MAX_PAGE);
  }
  const rawSort = params.get('sort');
  if (rawSort !== null && !isSort(rawSort)) return { ok: false };
  const sort: ProfileSort = rawSort ?? (tab === 'builds' ? 'new' : 'downloads');
  const cursor = params.get('cursor');
  return {
    ok: true,
    query: {
      tab,
      explicitTab: rawTab !== null,
      page,
      sort,
      cursor: cursor && cursor.length <= 512 ? cursor : null,
    },
  };
}

/** Locale-less URL of a profile tab (the default tab is the bare profile URL). */
export function tabPath(
  user: Pick<UserPublicDTO, 'canonicalPath'>,
  tab: ProfileTab,
  options: { page?: number; sort?: ProfileSort | null; cursor?: string | null; isDefault?: boolean } = {},
): string {
  const params = new URLSearchParams();
  if (!options.isDefault) params.set('tab', tab);
  if (options.sort) params.set('sort', options.sort);
  if (options.page && options.page > 1) params.set('page', String(options.page));
  if (options.cursor) params.set('cursor', options.cursor);
  const query = params.toString();
  return query ? `${user.canonicalPath}?${query}` : user.canonicalPath;
}

// -----------------------------------------------------------------------------------------------
// Resolution
// -----------------------------------------------------------------------------------------------

export interface ProfilePageContext {
  locals: App.Locals;
  url: URL;
}

export type ResolvedProfilePage =
  | { kind: 'ok'; user: UserPublicDTO; rest: string[] }
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

/** `/profile/<handle>/<rest…>` of the (locale-less) request, decoded once. */
export function profilePathSegments(url: URL): { handle: string; rest: string[] } | null {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] !== 'profile' || segments.length < 2) return null;
  return { handle: decodeSegment(segments[1] as string), rest: segments.slice(2).map(decodeSegment) };
}

function statusOf(error: unknown): number | null {
  return isApiError(error) ? error.status : null;
}

/** Handle of a canonical profile path (`/profile/imaxel` → `imaxel`). */
function handleOfPath(canonicalPath: string): string {
  return decodeSegment(canonicalPath.split('/').filter(Boolean)[1] ?? '');
}

/** Resolves the requested profile (see the module comment). */
export async function resolveProfilePage(context: ProfilePageContext): Promise<ResolvedProfilePage> {
  const parts = profilePathSegments(context.url);
  if (!parts?.handle) return { kind: 'not-found' };
  const locale = context.locals.locale;
  const resolved = await serverApi().seo.resolve({ query: { path: profilePath(parts.handle) } });

  if (resolved.status === 410) return { kind: 'gone' };
  if (resolved.status === 404 || resolved.kind !== 'user') return { kind: 'not-found' };
  if (resolved.status === 301) {
    if (!resolved.canonicalPath) return { kind: 'not-found' };
    const rest = parts.rest.length ? `/${parts.rest.map(encodeURIComponent).join('/')}` : '';
    return { kind: 'redirect', location: `${href(`${resolved.canonicalPath}${rest}`, locale)}${context.url.search}` };
  }
  const handle = resolved.canonicalPath ? handleOfPath(resolved.canonicalPath) : parts.handle;

  let user: UserPublicDTO;
  try {
    user = await serverApi().catalog.getUser({ params: { handle } });
  } catch (error) {
    const status = statusOf(error);
    if (status === 404) return { kind: 'not-found' };
    if (status === 410) return { kind: 'gone' };
    throw error;
  }
  return { kind: 'ok', user, rest: parts.rest };
}

// -----------------------------------------------------------------------------------------------
// Tab content
// -----------------------------------------------------------------------------------------------

export interface CardPage<T> {
  items: T[];
  page: number;
  totalPages: number;
  total: number;
}

export type TabContent =
  | { tab: 'mods' | 'builds'; state: 'ok'; data: CardPage<ModCardDTO> }
  | { tab: 'kits'; state: 'ok'; data: CardPage<KitCardDTO> }
  | { tab: 'reviews'; state: 'ok'; data: { items: UserReviewDTO[]; nextCursor: string | null } }
  | { tab: 'activity'; state: 'ok'; data: UserActivity }
  | { tab: 'badges'; state: 'ok'; data: { badges: UserBadges; catalog: BadgeCatalog | null } }
  | { tab: ProfileTab; state: 'hidden' }
  | { tab: ProfileTab; state: 'error' };

/** Budget of a tab request: longer than an optional block (the tab is the page's content). */
const TAB_TIMEOUT_MS = 2500;

async function attempt<T>(call: (signal: AbortSignal) => Promise<T>): Promise<T | null> {
  return optional(call, TAB_TIMEOUT_MS);
}

function cardPage<T>(page: { items: T[]; page: number; totalPages: number; total: number }): CardPage<T> {
  return { items: page.items, page: page.page, totalPages: page.totalPages, total: page.total };
}

/** Badge catalog (`GET /badges`): icons, groups and unlock shares; cached by the API for an hour. */
export function loadBadgeCatalog(timeoutMs = TAB_TIMEOUT_MS): Promise<BadgeCatalog | null> {
  return optional((signal) => serverApi().gamification.badges({}, { signal }), timeoutMs);
}

/** The user's notebook (earned + locked with progress). */
export function loadUserBadges(handle: string, timeoutMs = TAB_TIMEOUT_MS): Promise<UserBadges | null> {
  return optional((signal) => serverApi().gamification.userBadges({ params: { handle } }, { signal }), timeoutMs);
}

/**
 * Content of the active tab. `badges` is passed in when the page already read the notebook (it
 * is shared with the header) so the tab does not ask twice.
 */
export async function loadTab(
  user: UserPublicDTO,
  query: ProfileQuery,
  badges: UserBadges | null,
): Promise<TabContent> {
  const api = serverApi();
  const handle = user.handle;
  const pageQuery = { page: query.page, pageSize: PROFILE_PAGE_SIZE };
  switch (query.tab) {
    case 'mods':
    case 'builds': {
      const tab = query.tab;
      const page = await attempt((signal) =>
        tab === 'mods'
          ? api.catalog.userMods({ params: { handle }, query: { ...pageQuery, sort: query.sort } }, { signal })
          : api.catalog.userBuilds({ params: { handle }, query: { ...pageQuery, sort: query.sort } }, { signal }),
      );
      return page ? { tab, state: 'ok', data: cardPage(page) } : { tab, state: 'error' };
    }
    case 'kits': {
      if (user.privacy.hideKits) return { tab: 'kits', state: 'hidden' };
      const page = await attempt((signal) => api.kits.userKits({ params: { handle }, query: pageQuery }, { signal }));
      return page ? { tab: 'kits', state: 'ok', data: cardPage(page) } : { tab: 'kits', state: 'error' };
    }
    case 'reviews': {
      const page = await attempt((signal) =>
        api.catalog.userReviews(
          {
            params: { handle },
            query: { limit: PROFILE_REVIEWS_LIMIT, ...(query.cursor ? { cursor: query.cursor } : {}) },
          },
          { signal },
        ),
      );
      return page
        ? { tab: 'reviews', state: 'ok', data: { items: page.items, nextCursor: page.nextCursor } }
        : { tab: 'reviews', state: 'error' };
    }
    case 'activity': {
      if (user.privacy.hideActivity) return { tab: 'activity', state: 'hidden' };
      const activity = await attempt((signal) => api.catalog.userActivity({ params: { handle } }, { signal }));
      return activity ? { tab: 'activity', state: 'ok', data: activity } : { tab: 'activity', state: 'error' };
    }
    case 'badges': {
      const [notebook, catalog] = await Promise.all([
        badges ? Promise.resolve(badges) : loadUserBadges(handle),
        loadBadgeCatalog(),
      ]);
      return notebook
        ? { tab: 'badges', state: 'ok', data: { badges: notebook, catalog } }
        : { tab: 'badges', state: 'error' };
    }
  }
}

// -----------------------------------------------------------------------------------------------
// Creators directory
// -----------------------------------------------------------------------------------------------

export const CREATOR_DIRECTORY_SORTS = ['downloads', 'followers', 'recent', 'spotlight'] as const;
export type CreatorDirectorySort = (typeof CREATOR_DIRECTORY_SORTS)[number];
export const CREATORS_PAGE_SIZE = 24;

export function isCreatorSort(value: string | null): value is CreatorDirectorySort {
  return value !== null && (CREATOR_DIRECTORY_SORTS as readonly string[]).includes(value);
}

/** One page of the creators directory, or null when the API is unavailable. */
export function loadCreators(sort: CreatorDirectorySort, page: number): Promise<CardPage<CreatorCardDTO> | null> {
  return attempt((signal) =>
    serverApi().catalog.creators({ query: { sort, page, pageSize: CREATORS_PAGE_SIZE } }, { signal }),
  ).then((result) => (result ? cardPage(result) : null));
}

/** Parses `?page=` of the listing pages (null = malformed, redirect to the clean URL). */
export function parsePage(raw: string | null): number | null {
  if (raw === null) return 1;
  if (!/^[1-9]\d{0,3}$/.test(raw)) return null;
  return Math.min(Number(raw), MAX_PAGE);
}
