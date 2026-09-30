/**
 * Server-side data of the build page `/builds/:user/:slug` (WP-63, T0-24, PLAN §4.2, §4.6).
 *
 * - `resolveBuildPage()` runs the tolerant resolver (`GET /api/v2/resolve`): 200, 301 (old slug,
 *   case, owner change, `/builds` ↔ `/mods`), 404 or 410 (tombstone); the detail is then read by id.
 *   A mod or library reached through `/builds` is sent to its canonical `/mods/…` URL.
 * - The HTML is shared by every visitor (edge-cached with `mod:{id}` + `user:{id}`): nothing here
 *   reads cookies. Follow state and the like are filled in by the page script.
 * - Secondary blocks (versions, related builds, first reviews and comments, blueprint facts) are
 *   optional: each has an 800 ms budget and the page renders without it when the API is slow.
 */
import type { ModCardDTO, ModDetailDTO } from '@sotf/contracts/catalog';
import { type ApiClient, isApiError } from '@sotf/contracts/client';
import { BUILD_SIZE_CLASSES, type BuildMetaDTO, type BuildSizeClass, buildSizeClass } from '@sotf/contracts/manifest';
import { encodePathSegment, modPath } from '@sotf/contracts/seo';
import type { VersionDTO } from '@sotf/contracts/versions';
import { optional, serverApi } from '../../lib/api.ts';
import { href } from '../../lib/i18n.ts';

type Resolved<T> = T extends Promise<infer U> ? U : T;
export type ReviewPage = Resolved<ReturnType<ApiClient['reviews']['list']>>;
export type CommentPage = Resolved<ReturnType<ApiClient['comments']['list']>>;
export type { BuildSizeClass, ModCardDTO, ModDetailDTO, VersionDTO };

/** Manifest id of the BuildShare mod every build depends on (T0-24). */
export const BUILDSHARE_MANIFEST_ID = 'BuildShare';
/** Folder BuildShare reads local blueprints from (relative to the game directory). */
export const LOCAL_BUILDINGS_PATH = 'Sons Of The Forest/Mods/BuildShare/LocalBuildings';
/** Default key of the BuildShare panel (Mods → BuildShare → Toggle Key). */
export const BUILDSHARE_TOGGLE_KEY = 'Page Up';

export interface BuildPageContext {
  locals: App.Locals;
  url: URL;
}

export type ResolvedBuildPage =
  | { kind: 'ok'; build: ModDetailDTO; rest: string[] }
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
 * `/builds/<user>/<slug>/<rest…>` of the (locale-less) request, decoded once: legacy slugs carry
 * `'`, `(`, `)`, `+` and spaces, and the adapter's own decoding differs between runtimes.
 */
export function buildPathSegments(url: URL): { user: string; slug: string; rest: string[] } | null {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] !== 'builds' || segments.length < 3) return null;
  return {
    user: decodeSegment(segments[1] as string),
    slug: decodeSegment(segments[2] as string),
    rest: segments.slice(3).map(decodeSegment),
  };
}

function statusOf(error: unknown): number | null {
  return isApiError(error) ? error.status : null;
}

/** Resolves the requested build page (see the module comment). */
export async function resolveBuildPage(context: BuildPageContext): Promise<ResolvedBuildPage> {
  const parts = buildPathSegments(context.url);
  if (!parts) return { kind: 'not-found' };
  const locale = context.locals.locale;
  const requested = modPath('build', parts.user, parts.slug);
  const suffix = parts.rest.length ? `/${parts.rest.map(encodePathSegment).join('/')}` : '';
  const resolved = await serverApi().seo.resolve({ query: { path: `${requested}${suffix}` } });

  if (resolved.status === 410) return { kind: 'gone' };
  if (resolved.status === 404 || resolved.id === null) return { kind: 'not-found' };
  if (resolved.status === 301) {
    if (!resolved.canonicalPath) return { kind: 'not-found' };
    return { kind: 'redirect', location: `${href(resolved.canonicalPath, locale)}${context.url.search}` };
  }
  if (resolved.kind !== 'mod' && resolved.kind !== 'build') return { kind: 'not-found' };

  let build: ModDetailDTO;
  try {
    build = await serverApi().catalog.getMod({ params: { id: resolved.id } });
  } catch (error) {
    const status = statusOf(error);
    if (status === 404) return { kind: 'not-found' };
    if (status === 410) return { kind: 'gone' };
    throw error;
  }
  // A mod or library reached through `/builds` (the resolver answers 200 on exact paths only).
  if (build.kind !== 'build') {
    return { kind: 'redirect', location: `${href(`${build.canonicalPath}${suffix}`, locale)}${context.url.search}` };
  }
  return { kind: 'ok', build, rest: parts.rest };
}

// -----------------------------------------------------------------------------------------------
// Blueprint facts (spec sheet)
// -----------------------------------------------------------------------------------------------

/** What the spec sheet shows about the blueprint; every field may be unknown. */
export interface BuildSpec {
  elements: number | null;
  structures: number | null;
  buildShareVersion: string | null;
  guid: string | null;
  blueprintAuthor: string | null;
  sizeClass: BuildSizeClass | null;
}

const EMPTY_SPEC: BuildSpec = {
  elements: null,
  structures: null,
  buildShareVersion: null,
  guid: null,
  blueprintAuthor: null,
  sizeClass: null,
};

function isSizeClass(value: unknown): value is BuildSizeClass {
  return typeof value === 'string' && (BUILD_SIZE_CLASSES as readonly string[]).includes(value);
}

function nonNegativeInt(value: unknown): number | null {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0 ? value : null;
}

function text(value: unknown): string | null {
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : null;
}

/**
 * `buildMeta` of the detail when the API exposes it (additive field requested in
 * docs/backlog/WP-63.md), read structurally so the page works before and after that change.
 */
function detailMeta(build: ModDetailDTO): Partial<BuildMetaDTO> | null {
  const meta = (build as ModDetailDTO & { buildMeta?: unknown }).buildMeta;
  return meta !== null && typeof meta === 'object' ? (meta as Partial<BuildMetaDTO>) : null;
}

/** Legacy columns of a build (`buildGuid`, `buildShareVersion`, `numberOfElements`). */
interface LegacyBuildColumns {
  buildGuid: string | null;
  buildShareVersion: string | null;
  numberOfElements: number | null;
}

async function loadLegacyColumns(build: ModDetailDTO): Promise<LegacyBuildColumns | null> {
  const response = await optional((signal) =>
    serverApi().legacy.getMod({ params: { mod_id: build.manifestId } }, { signal }),
  );
  const data = response?.data;
  // The legacy lookup is by manifest id: make sure it answered for this very build.
  if (!data || data.id !== build.id) return null;
  return {
    buildGuid: data.buildGuid ?? null,
    buildShareVersion: data.buildShareVersion ?? null,
    numberOfElements: data.numberOfElements ?? null,
  };
}

/**
 * Blueprint facts: `buildMeta` of the latest version when the detail carries it, otherwise the
 * legacy columns (every build published before v2, and v2 builds through the legacy mirror).
 */
export async function loadBuildSpec(build: ModDetailDTO): Promise<BuildSpec> {
  const meta = detailMeta(build);
  const legacy = meta?.elements === undefined || meta.guid === undefined ? await loadLegacyColumns(build) : null;
  const elements = nonNegativeInt(meta?.elements) ?? nonNegativeInt(legacy?.numberOfElements);
  const spec: BuildSpec = {
    ...EMPTY_SPEC,
    elements,
    structures: nonNegativeInt(meta?.structures),
    buildShareVersion: text(meta?.buildshareVersion) ?? text(legacy?.buildShareVersion),
    guid: text(meta?.guid) ?? text(legacy?.buildGuid),
    blueprintAuthor: text(meta?.blueprintAuthor),
    sizeClass: isSizeClass(meta?.sizeClass) ? meta.sizeClass : elements === null ? null : buildSizeClass(elements),
  };
  return spec;
}

/**
 * «Author in the blueprint: X» only when it differs from the uploader (T0-24): compared without
 * case, spaces or punctuation against the handle and the display name.
 */
export function blueprintAuthorDiffers(spec: BuildSpec, build: ModDetailDTO): boolean {
  if (!spec.blueprintAuthor) return false;
  const norm = (value: string) => value.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
  const author = norm(spec.blueprintAuthor);
  if (!author) return false;
  return author !== norm(build.userHandle) && author !== norm(build.userDisplayName);
}

// -----------------------------------------------------------------------------------------------
// Optional blocks
// -----------------------------------------------------------------------------------------------

export interface BuildExtras {
  spec: BuildSpec;
  versions: VersionDTO[] | null;
  related: ModCardDTO[];
  reviews: ReviewPage | null;
  comments: CommentPage | null;
}

/** Number of related builds shown under the page. */
export const RELATED_LIMIT = 4;
/** Reviews and comments rendered in the HTML (the islands of WP-70 page on from there). */
export const REVIEWS_PREVIEW = 3;
export const COMMENTS_PREVIEW = 10;

/** The optional blocks of the page, fetched in parallel. */
export async function loadBuildExtras(build: ModDetailDTO): Promise<BuildExtras> {
  const api = serverApi();
  const id = build.id;
  const [spec, versions, related, reviews, comments] = await Promise.all([
    loadBuildSpec(build),
    optional((signal) => api.versions.list({ params: { id } }, { signal })),
    optional((signal) => api.catalog.related({ params: { id } }, { signal })),
    build.reviewsSummary.count > 0
      ? optional((signal) =>
          api.reviews.list({ params: { id }, query: { sort: 'helpful', limit: REVIEWS_PREVIEW } }, { signal }),
        )
      : Promise.resolve(null),
    build.commentsCount > 0
      ? optional((signal) =>
          api.comments.list({ params: { id }, query: { sort: 'top', limit: COMMENTS_PREVIEW } }, { signal }),
        )
      : Promise.resolve(null),
  ]);
  const relatedItems = related?.items ?? [];
  // Builds first (same kind), then whatever else the API found related.
  const relatedBuilds = [
    ...relatedItems.filter((card) => card.kind === 'build'),
    ...relatedItems.filter((card) => card.kind !== 'build'),
  ]
    .filter((card) => card.id !== id && card.status === 'published')
    .slice(0, RELATED_LIMIT);
  return {
    spec,
    versions: versions?.items ?? null,
    related: relatedBuilds,
    reviews,
    comments,
  };
}

/** The BuildShare dependency of the build (required, added automatically on publish). */
export function buildShareDependency(build: ModDetailDTO) {
  return build.dependencies.find((dependency) => dependency.manifestId === BUILDSHARE_MANIFEST_ID) ?? null;
}
