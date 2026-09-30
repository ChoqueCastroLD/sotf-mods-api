/**
 * Mod detail (PLAN §5.2 `GET /mods/:id`, `/mods/by-slug/:user/:slug`, `/mods/by-manifest/:id`;
 * T0-03 status rules, T0-30 NSFW).
 *
 * Visibility by URL:
 * - `published` → 200;
 * - `unlisted` → 200 with the `unlisted` banner and `noindex`;
 * - `archived` → 200 with the `archived` banner (and the successor when there is one);
 * - `pending` → 200 only when the latest version passed the automatic checks, with the
 *   `pending_review` banner and `noindex`; otherwise 404;
 * - `rejected` → 404 · `removed` → 410.
 * NSFW mods are reachable by direct URL with the `nsfw` banner (the web shows an interstitial).
 *
 * The public detail never carries `descriptionMd` (owner-only, studio endpoints of WP-40).
 */
import type { ModDetailDTO } from '@sotf/contracts/catalog';
import {
  type ImageDTO,
  type LinkDTO,
  LOCALE_BCP47,
  LOCALES,
  type MilestoneDTO,
  MOD_LICENSES,
  type TagRefDTO,
} from '@sotf/contracts/common';
import type { CompatSummaryDTO } from '@sotf/contracts/compat';
import { bayesianRating, REVIEW_RULES, type ReviewsSummaryDTO } from '@sotf/contracts/reviews';
import type { VersionDTO } from '@sotf/contracts/versions';
import type { SupportLink } from '@sotf/db';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { buildMetaOf, ogImageOf } from './build-facts.ts';
import { type CatalogConfig, imageDto, type MediaRow, safeHttpUrl } from './media.ts';
import { type CatalogEntry, type CatalogSnapshot, getSnapshot, taxonomyKey } from './snapshot.ts';
import { cached, num, row, rows } from './sql.ts';
import {
  type CompatRowOf,
  compatAggregate,
  latestOf,
  loadDependentIds,
  loadVersions,
  textToHtml,
  type VersionsData,
} from './versions.ts';

export type ModLookup = { id: number } | { handle: string; slug: string } | { manifestId: string };

const DETAIL_TTL_MS = 60_000;
const LINK_KINDS = new Set(['website', 'github', 'youtube', 'twitch', 'discord', 'kofi', 'patreon', 'other']);
const LICENSES = new Set<string>(MOD_LICENSES);
const CONTENT_LANG = /^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/;
const HEX = /^#[0-9A-Fa-f]{6}$/;

/** Finds the entry of a lookup in the snapshot (exact matches only). */
export function findEntry(snapshot: CatalogSnapshot, lookup: ModLookup): CatalogEntry | undefined {
  if ('id' in lookup) return snapshot.byId.get(lookup.id);
  if ('manifestId' in lookup) return snapshot.byManifestId.get(lookup.manifestId);
  return snapshot.byHandleSlug.get(`${lookup.handle}\n${lookup.slug}`);
}

/**
 * Applies the public visibility rules of T0-03: returns the entry when it may be shown by URL,
 * throws NOT_FOUND / GONE otherwise.
 */
export function assertReachable(snapshot: CatalogSnapshot, entry: CatalogEntry | undefined): CatalogEntry {
  if (!entry) throw errors.notFound('Mod');
  const author = snapshot.authors.get(entry.userId);
  if (author?.hidden) throw errors.notFound('Mod');
  switch (entry.status) {
    case 'published':
    case 'unlisted':
    case 'archived':
      return entry;
    case 'pending':
      if (entry.latestChecks === 'passed') return entry;
      throw errors.notFound('Mod');
    case 'removed':
      throw errors.gone('This mod was removed');
    default:
      throw errors.notFound('Mod');
  }
}

/** Resolves a lookup to a reachable mod (NOT_FOUND / GONE otherwise). */
export async function reachableMod(
  ctx: Ctx,
  config: CatalogConfig,
  lookup: ModLookup,
): Promise<{ snapshot: CatalogSnapshot; entry: CatalogEntry }> {
  const snapshot = await getSnapshot(ctx, config);
  return { snapshot, entry: assertReachable(snapshot, findEntry(snapshot, lookup)) };
}

/** `hreflang` alternates of a path: the 13 locales (`en` unprefixed) + `x-default`. */
export function alternatesOf(path: string): ModDetailDTO['alternates'] {
  return [
    ...LOCALES.map((lc) => ({ hreflang: LOCALE_BCP47[lc], path: lc === 'en' ? path : `/${lc}${path}` })),
    { hreflang: 'x-default', path },
  ];
}

/** YouTube video id of a URL (watch, youtu.be, embed, shorts), or null. */
export function youtubeId(url: string | null): string | null {
  const safe = safeHttpUrl(url);
  if (!safe) return null;
  const u = new URL(safe);
  const host = u.hostname.replace(/^www\.|^m\./, '');
  let id: string | null = null;
  if (host === 'youtu.be') id = u.pathname.slice(1).split('/')[0] ?? null;
  else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    if (u.pathname === '/watch') id = u.searchParams.get('v');
    else {
      const m = /^\/(?:embed|shorts|live|v)\/([^/?#]+)/.exec(u.pathname);
      id = m?.[1] ?? null;
    }
  }
  return id && /^[A-Za-z0-9_-]{6,20}$/.test(id) ? id : null;
}

/** Kind of an external link, from its host. */
export function linkKindOf(url: string, declared?: string): LinkDTO['kind'] {
  if (declared && LINK_KINDS.has(declared)) return declared as LinkDTO['kind'];
  const host = new URL(url).hostname.replace(/^www\./, '');
  if (host === 'github.com' || host.endsWith('.github.io')) return 'github';
  if (host === 'youtube.com' || host === 'youtu.be' || host.endsWith('.youtube.com')) return 'youtube';
  if (host === 'twitch.tv' || host.endsWith('.twitch.tv')) return 'twitch';
  if (host === 'discord.gg' || host === 'discord.com' || host.endsWith('.discord.com')) return 'discord';
  if (host === 'ko-fi.com') return 'kofi';
  if (host === 'patreon.com') return 'patreon';
  return declared === undefined ? 'website' : 'other';
}

/** Validated `LinkDTO`s (invalid URLs are dropped). */
export function linksOf(
  list: ReadonlyArray<SupportLink | { url: string; label?: string; kind?: string }> | null,
): LinkDTO[] {
  const out: LinkDTO[] = [];
  for (const item of list ?? []) {
    const url = safeHttpUrl(item?.url);
    if (!url) continue;
    const label =
      'label' in item && typeof item.label === 'string' && item.label.trim() ? item.label.trim().slice(0, 60) : null;
    out.push({ kind: linkKindOf(url, 'kind' in item ? item.kind : undefined), url, label });
  }
  return out;
}

interface DetailRow {
  description: string;
  descriptionHtml: string | null;
  videoUrl: string | null;
  license: string | null;
  sourceUrl: string | null;
  supportLinks: SupportLink[] | null;
  contentLang: string | null;
  dedicatedServer: string | null;
  safeToRemove: string | null;
  logColor: string | null;
  originalAuthorName: string | null;
  originalAuthorUrl: string | null;
  successorModId: number | null;
  possiblyOutdated: boolean;
  createdAt: Date;
  publishedAt: Date | null;
  editedAt: Date | null;
  ogImageKey: string | null;
  buildMeta: unknown;
  buildGuid: string | null;
  buildShareVersion: string | null;
  numberOfElements: number | null;
}

interface GalleryRow extends MediaRow {
  url: string;
  alt: string | null;
}

/** Reviews summary of the visible reviews (histogram, mean, Bayesian mean). */
export function reviewsSummaryOf(
  histogramRows: ReadonlyArray<{ rating: number; n: string | number }>,
): ReviewsSummaryDTO {
  const histogram = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 };
  let sum = 0;
  let count = 0;
  for (const r of histogramRows) {
    const rating = Math.round(Number(r.rating));
    if (rating < 1 || rating > 5) continue;
    const n = num(r.n);
    histogram[String(rating) as keyof typeof histogram] += n;
    sum += rating * n;
    count += n;
  }
  const round = (x: number) => Math.round(x * 100) / 100;
  return {
    count,
    average: count > 0 ? round(sum / count) : null,
    bayes: round(Math.min(5, bayesianRating(sum, count))),
    showStars: count >= REVIEW_RULES.publicStarsMinReviews,
    histogram,
  };
}

function compatSummary(
  latest: VersionDTO | null,
  compatRows: CompatRowOf[],
  current: CompatSummaryDTO['gameBuild'],
): CompatSummaryDTO {
  if (!latest || !current) return { status: 'untested', works: 0, partial: 0, broken: 0, gameBuild: current };
  const rowForLatest = compatRows.find((c) => c.modVersionId === latest.id && c.gameBuildId === current.id);
  if (!rowForLatest) return { status: 'untested', works: 0, partial: 0, broken: 0, gameBuild: current };
  const agg = compatAggregate(rowForLatest);
  return { status: agg.status, works: agg.works, partial: agg.partial, broken: agg.broken, gameBuild: agg.gameBuild };
}

/** Cached versions of a mod (60 s, tag `mod:{id}`). */
export function getVersionsData(ctx: Ctx, snapshot: CatalogSnapshot, entry: CatalogEntry): Promise<VersionsData> {
  return cached<VersionsData>(
    ctx,
    { name: 'catalog:versions', max: 500, ttlMs: DETAIL_TTL_MS },
    `${entry.id}:${entry.status}`,
    async () => ({
      value: await loadVersions(ctx, snapshot, entry),
      tags: [`mod:${entry.id}`, `user:${entry.userId}`],
    }),
  );
}

/** Builds the full detail DTO of a reachable mod (uncached). */
export async function buildModDetail(
  ctx: Ctx,
  config: CatalogConfig,
  snapshot: CatalogSnapshot,
  entry: CatalogEntry,
): Promise<ModDetailDTO> {
  const [detail, gallery, versionsData, reviewRows, comments, milestones, kits, currentBuild, dependentIds] =
    await Promise.all([
      row<DetailRow>(
        ctx.db,
        `SELECT "description", "descriptionHtml", "videoUrl", "license", "sourceUrl", "supportLinks", "contentLang",
                "dedicatedServer", "safeToRemove", "logColor", "originalAuthorName", "originalAuthorUrl",
                "successorModId", "possiblyOutdated", "createdAt", "publishedAt", "editedAt", "ogImageKey",
                "buildGuid", "buildShareVersion", "numberOfElements",
                (SELECT v."buildMeta" FROM "ModVersion" v
                  WHERE v."modId" = "Mod"."id" AND v."isLatest" AND v."status" <> 'rejected'
                  ORDER BY v."id" DESC LIMIT 1) AS "buildMeta"
           FROM "Mod" WHERE "id" = $1`,
        [entry.id],
      ),
      rows<GalleryRow>(
        ctx.db,
        `SELECT i."url", i."alt", med."width", med."height", med."thumbhash", med."dominantColor", med."variants",
                med."sourceBucket", med."sourceKey"
           FROM "ModImage" i LEFT JOIN "Media" med ON med."id" = i."mediaId"
          WHERE i."modId" = $1 AND NOT i."isThumbnail"
          ORDER BY i."position" NULLS LAST, i."isPrimary" DESC, i."id"`,
        [entry.id],
      ),
      getVersionsData(ctx, snapshot, entry),
      rows<{ rating: number; n: string }>(
        ctx.db,
        `SELECT "rating", count(*) AS n FROM "ModReview" WHERE "modId" = $1 AND "status" = 'visible' GROUP BY "rating"`,
        [entry.id],
      ),
      row<{ n: string }>(ctx.db, `SELECT count(*) AS n FROM "Comment" WHERE "modId" = $1 AND "status" = 'visible'`, [
        entry.id,
      ]),
      rows<{ threshold: number; reachedAt: Date; ogImageKey: string | null }>(
        ctx.db,
        `SELECT "threshold", "reachedAt", "ogImageKey" FROM "ModMilestone" WHERE "modId" = $1 ORDER BY "threshold"`,
        [entry.id],
      ),
      row<{ n: string }>(
        ctx.db,
        `SELECT count(DISTINCT k."id") AS n FROM "KitItem" i JOIN "Kit" k ON k."id" = i."kitId"
          WHERE i."modId" = $1 AND k."visibility" = 'public' AND k."deletedAt" IS NULL`,
        [entry.id],
      ),
      row<{ id: number; label: string; isCurrent: boolean; isBreaking: boolean }>(
        ctx.db,
        `SELECT "id", "label", "isCurrent", "isBreaking" FROM "GameBuild" WHERE "isCurrent" ORDER BY "id" DESC LIMIT 1`,
      ),
      loadDependentIds(ctx, snapshot, entry),
    ]);
  if (!detail) throw errors.notFound('Mod');

  const author = snapshot.authors.get(entry.userId);
  if (!author) throw errors.notFound('Mod');
  const latest = latestOf(versionsData.versions);
  const tags: TagRefDTO[] = entry.tagIds
    .map((id) => snapshot.tags.get(id))
    .filter((t) => t !== undefined)
    .map((t) => ({ slug: t.slug.slice(0, 60), nameKey: taxonomyKey('tag', t.slug), name: t.name }));
  const images: ImageDTO[] = gallery
    .map((g) => imageDto(config, g.sourceKey === null && g.variants === null ? null : g, g.url, g.alt))
    .filter((i): i is ImageDTO => i !== null);
  const videoId = youtubeId(detail.videoUrl);
  const successorEntry = detail.successorModId === null ? undefined : snapshot.byId.get(detail.successorModId);
  const successor =
    successorEntry && ['published', 'unlisted', 'archived'].includes(successorEntry.status) ? successorEntry.ref : null;
  const compatCurrent = compatSummary(latest, versionsData.compat, currentBuild);

  const banners: ModDetailDTO['banners'] = [];
  if (entry.status === 'pending') banners.push('pending_review');
  if (entry.status === 'unlisted') banners.push('unlisted');
  if (entry.status === 'archived') banners.push('archived');
  if (compatCurrent.status === 'broken') banners.push('broken_on_current');
  if (detail.possiblyOutdated) banners.push('possibly_outdated');
  if (entry.nsfw) banners.push('nsfw');

  return {
    ...entry.card,
    latestVersion: latest,
    descriptionHtml: detail.descriptionHtml ?? textToHtml(detail.description),
    tags,
    gallery: images,
    video: videoId ? { provider: 'youtube', id: videoId, url: `https://www.youtube.com/watch?v=${videoId}` } : null,
    license: detail.license && LICENSES.has(detail.license) ? (detail.license as ModDetailDTO['license']) : null,
    sourceUrl: safeHttpUrl(detail.sourceUrl),
    supportLinks: linksOf(detail.supportLinks),
    contentLang: detail.contentLang && CONTENT_LANG.test(detail.contentLang) ? detail.contentLang : null,
    dedicatedServer: (['yes', 'no', 'partial', 'unknown'] as const).find((v) => v === detail.dedicatedServer) ?? null,
    safeToRemove: (['yes', 'no', 'unknown'] as const).find((v) => v === detail.safeToRemove) ?? null,
    logColor: detail.logColor && HEX.test(detail.logColor) ? detail.logColor : null,
    dependencies: latest?.dependencies ?? [],
    dependentsCount: dependentIds.length,
    kitsCount: num(kits?.n),
    compatCurrent,
    possiblyOutdated: detail.possiblyOutdated,
    reviewsSummary: reviewsSummaryOf(reviewRows),
    commentsCount: num(comments?.n),
    milestones: milestones.map(
      (m): MilestoneDTO => ({
        threshold: m.threshold,
        reachedAt: new Date(m.reachedAt).toISOString(),
        ogImageUrl: ogImageOf(config, m.ogImageKey)?.url ?? null,
      }),
    ),
    originalAuthor: detail.originalAuthorName?.trim()
      ? { name: detail.originalAuthorName.trim(), url: safeHttpUrl(detail.originalAuthorUrl) }
      : null,
    successor,
    banners,
    noindex: entry.status === 'pending' || entry.status === 'unlisted',
    alternates: alternatesOf(entry.canonicalPath),
    author: author.ref,
    createdAt: detail.createdAt.toISOString(),
    publishedAt: detail.publishedAt ? detail.publishedAt.toISOString() : null,
    editedAt: detail.editedAt ? detail.editedAt.toISOString() : null,
    buildMeta: buildMetaOf(entry.kind, detail.buildMeta, detail),
    ogImage: ogImageOf(config, detail.ogImageKey),
  };
}

/** Public mod detail (cached 60 s per mod, tags `mod:{id}` and `user:{authorId}`). */
export async function getModDetail(ctx: Ctx, config: CatalogConfig, lookup: ModLookup): Promise<ModDetailDTO> {
  const { snapshot, entry } = await reachableMod(ctx, config, lookup);
  return cached<ModDetailDTO>(
    ctx,
    { name: 'catalog:detail', max: 500, ttlMs: DETAIL_TTL_MS },
    `${entry.id}:${entry.status}`,
    async () => ({
      value: await buildModDetail(ctx, config, snapshot, entry),
      tags: [`mod:${entry.id}`, `user:${entry.userId}`],
    }),
  );
}
