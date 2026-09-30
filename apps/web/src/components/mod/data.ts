/**
 * Server-side data of the mod pages (WP-62, PLAN §4.2, §4.6).
 *
 * Every mod page (`/mods/:user/:slug`, `/versions`, `/versions/:version`, `/reviews`) starts with
 * `resolveModPage()`: the tolerant resolver (`GET /api/v2/resolve`) decides between 200, 301 (old
 * slug, case, owner change, `/mods` ↔ `/builds`), 404 and 410 (tombstones), then the detail is
 * read by id. The HTML is shared by every visitor (edge-cached with `mod:{id}` and `user:{id}`),
 * so nothing here uses cookies.
 *
 * Secondary blocks (dependents, related, first reviews and comments, per-build compatibility) are
 * optional: each has an 800 ms budget and the page renders without it when the API is slow.
 */
import type { ModCardDTO, ModDetailDTO } from '@sotf/contracts/catalog';
import { type ApiClient, isApiError } from '@sotf/contracts/client';
import { encodePathSegment, modPath } from '@sotf/contracts/seo';
import type { VersionDTO } from '@sotf/contracts/versions';
import { optional, serverApi } from '../../lib/api.ts';
import { href } from '../../lib/i18n.ts';

type Awaited2<T> = T extends Promise<infer U> ? U : T;
export type ReviewPage = Awaited2<ReturnType<ApiClient['reviews']['list']>>;
export type CommentPage = Awaited2<ReturnType<ApiClient['comments']['list']>>;
export type ModCompat = Awaited2<ReturnType<ApiClient['compat']['modCompat']>>;
export type ModPublicStats = Awaited2<ReturnType<ApiClient['stats']['modPublicStats']>>;
export type { ModCardDTO, ModDetailDTO, VersionDTO };

/** Mod kinds served under `/mods` (builds live under `/builds`, WP-63). */
export type ModPageKind = 'mod' | 'library';

export interface ModPageContext {
  locals: App.Locals;
  url: URL;
}

export type ResolvedModPage =
  | { kind: 'ok'; mod: ModDetailDTO; rest: string[] }
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

/**
 * `/mods/<user>/<slug>/<rest…>` of the (locale-less) request, decoded once: legacy slugs carry
 * `'`, `(`, `)`, `+` and spaces and the adapter's own decoding differs between runtimes.
 */
export function modPathSegments(url: URL): { user: string; slug: string; rest: string[] } | null {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] !== 'mods' || segments.length < 3) return null;
  return {
    user: decodeSegment(segments[1] as string),
    slug: decodeSegment(segments[2] as string),
    rest: segments.slice(3).map(decodeSegment),
  };
}

function statusOf(error: unknown): number | null {
  return isApiError(error) ? error.status : null;
}

/**
 * Resolves the requested mod page. `rest` is the sub-path after the slug (`['versions', '1.3.8']`),
 * kept on the 301 target by the resolver.
 */
export async function resolveModPage(context: ModPageContext): Promise<ResolvedModPage> {
  const parts = modPathSegments(context.url);
  if (!parts) return { kind: 'not-found' };
  const locale = context.locals.locale;
  const requested = modPath('mod', parts.user, parts.slug);
  const suffix = parts.rest.length ? `/${parts.rest.map(encodePathSegment).join('/')}` : '';
  const resolved = await serverApi().seo.resolve({ query: { path: `${requested}${suffix}` } });

  if (resolved.status === 410) return { kind: 'gone' };
  if (resolved.status === 404 || resolved.id === null) return { kind: 'not-found' };
  if (resolved.status === 301) {
    if (!resolved.canonicalPath) return { kind: 'not-found' };
    return { kind: 'redirect', location: `${href(resolved.canonicalPath, locale)}${context.url.search}` };
  }
  if (resolved.kind !== 'mod' && resolved.kind !== 'build') return { kind: 'not-found' };

  let mod: ModDetailDTO;
  try {
    mod = await serverApi().catalog.getMod({ params: { id: resolved.id } });
  } catch (error) {
    const status = statusOf(error);
    if (status === 404) return { kind: 'not-found' };
    if (status === 410) return { kind: 'gone' };
    throw error;
  }
  // A build reached through `/mods` (the resolver answers 200 on exact paths only).
  if (mod.kind === 'build') {
    const target = `${mod.canonicalPath}${suffix}`;
    return { kind: 'redirect', location: `${href(target, locale)}${context.url.search}` };
  }
  return { kind: 'ok', mod, rest: parts.rest };
}

/** Versions of a mod (semver order, newest first). Required on the versions pages. */
export async function loadVersions(modId: number): Promise<VersionDTO[]> {
  const list = await serverApi().versions.list({ params: { id: modId } });
  return list.items;
}

/** Same, optional (overview: the split button and the field notes degrade without it). */
export async function loadVersionsOptional(modId: number): Promise<VersionDTO[] | null> {
  const list = await optional((signal) => serverApi().versions.list({ params: { id: modId } }, { signal }));
  return list?.items ?? null;
}

export interface OverviewExtras {
  versions: VersionDTO[] | null;
  dependents: ModCardDTO[];
  related: ModCardDTO[];
  /** Nightly recommendations (T1-15); both empty when the API is slow. */
  recommendations: { alsoDownloaded: ModCardDTO[]; similar: ModCardDTO[] };
  reviews: ReviewPage | null;
  comments: CommentPage | null;
  compat: ModCompat | null;
  /** Public download series of the last 30 days (sparkline); null when the API is slow. */
  stats: ModPublicStats | null;
}

/** The optional blocks of the overview, fetched in parallel. */
export async function loadOverviewExtras(mod: ModDetailDTO): Promise<OverviewExtras> {
  const api = serverApi();
  const id = mod.id;
  const [versions, dependents, related, recommendations, reviews, comments, compat, stats] = await Promise.all([
    loadVersionsOptional(id),
    mod.dependentsCount > 0
      ? optional((signal) => api.catalog.dependents({ params: { id } }, { signal }))
      : Promise.resolve(null),
    optional((signal) => api.catalog.related({ params: { id } }, { signal })),
    optional((signal) => api.discovery.recommendations({ params: { id } }, { signal })),
    mod.reviewsSummary.count > 0
      ? optional((signal) => api.reviews.list({ params: { id }, query: { sort: 'helpful', limit: 3 } }, { signal }))
      : Promise.resolve(null),
    mod.commentsCount > 0
      ? optional((signal) => api.comments.list({ params: { id }, query: { sort: 'top', limit: 10 } }, { signal }))
      : Promise.resolve(null),
    optional((signal) => api.compat.modCompat({ params: { id } }, { signal })),
    optional((signal) => api.stats.modPublicStats({ params: { id }, query: { range: '30d' } }, { signal })),
  ]);
  return {
    versions,
    dependents: dependents?.items ?? [],
    related: (related?.items ?? []).filter((card) => card.id !== id).slice(0, 4),
    recommendations: {
      alsoDownloaded: (recommendations?.alsoDownloaded ?? []).filter((card) => card.id !== id),
      similar: (recommendations?.similar ?? []).filter((card) => card.id !== id),
    },
    reviews,
    comments,
    compat,
    stats,
  };
}

/** A version by its string (or `latest`), 404 → null. */
export async function loadVersion(modId: number, version: string): Promise<VersionDTO | null> {
  try {
    return await serverApi().versions.get({ params: { id: modId, version } });
  } catch (error) {
    if (statusOf(error) === 404) return null;
    throw error;
  }
}

/** Per-build compatibility of every version (optional). */
export async function loadCompatOptional(modId: number): Promise<ModCompat | null> {
  return optional((signal) => serverApi().compat.modCompat({ params: { id: modId } }, { signal }));
}

/** A cursor page of reviews (the reviews page; required). */
export async function loadReviews(
  modId: number,
  sort: 'helpful' | 'new' | 'critical',
  cursor: string | undefined,
  limit = 20,
): Promise<ReviewPage> {
  return serverApi().reviews.list({
    params: { id: modId },
    query: { sort, limit, ...(cursor ? { cursor } : {}) },
  });
}
