/**
 * `ModCardDTO` + `CompatSummaryDTO` for a set of mod ids, in one round trip (used by "My
 * downloads"). Sources: `Mod` (legacy + v2 columns), `ModStats` (preferred when present), the
 * owner, the category (retired categories map to their active successor through `legacySlugs`),
 * the thumbnail (`Media` variants, or the legacy `ModImage` key), awards and the compatibility of
 * the latest version on the current game build (`ModVersionCompat`).
 */

import type { ModCardDTO } from '@sotf/contracts/catalog';
import { COMPAT_STATUSES, type ImageDTO, MULTIPLAYER_ROLES, PLATFORMS } from '@sotf/contracts/common';
import type { CompatSummaryDTO } from '@sotf/contracts/compat';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { buildCardFacts } from '../catalog/build-facts.ts';
import { canonicalModPath } from '../resolve/paths.ts';
import { publicObjectUrl } from '../storage/keys.ts';

export interface CardOptions {
  publicBaseUrl: string;
  /** Name of the public bucket (Media rows in another bucket have no public original). */
  publicBucket: string;
}

export interface ModCardWithCompat {
  card: ModCardDTO;
  compat: CompatSummaryDTO;
}

interface MediaVariant {
  w?: number;
  format?: string;
  key?: string;
}

type Row = Record<string, unknown>;

function oneOf<T extends string>(values: readonly T[], value: unknown): T | null {
  return typeof value === 'string' && (values as readonly string[]).includes(value) ? (value as T) : null;
}

function iso(value: unknown): string {
  return (value instanceof Date ? value : new Date(String(value))).toISOString();
}

function kindOf(type: unknown): 'mod' | 'library' | 'build' {
  return type === 'Build' ? 'build' : type === 'Library' ? 'library' : 'mod';
}

export function categoryNameKey(slug: string): string {
  return `taxonomy_category_${slug.replace(/[^a-z0-9]+/gi, '_').toLowerCase()}`;
}

function thumbnailOf(row: Row, options: CardOptions): ImageDTO | null {
  if (row.mediaId) {
    const variants = (Array.isArray(row.mediaVariants) ? row.mediaVariants : []) as MediaVariant[];
    const usable = variants.filter((v) => typeof v.key === 'string' && typeof v.w === 'number');
    const url = (v: MediaVariant) => publicObjectUrl(options.publicBaseUrl, v.key as string);
    const largestWebp = [...usable].filter((v) => v.format === 'webp').sort((a, b) => (b.w ?? 0) - (a.w ?? 0))[0];
    const avif = usable.filter((v) => v.format === 'avif').sort((a, b) => (a.w ?? 0) - (b.w ?? 0));
    const original =
      row.mediaBucket === options.publicBucket && typeof row.mediaKey === 'string'
        ? publicObjectUrl(options.publicBaseUrl, row.mediaKey)
        : null;
    const main = largestWebp ? url(largestWebp) : original;
    if (main) {
      return {
        url: main,
        width: typeof row.mediaWidth === 'number' && row.mediaWidth > 0 ? row.mediaWidth : null,
        height: typeof row.mediaHeight === 'number' && row.mediaHeight > 0 ? row.mediaHeight : null,
        thumbhash: typeof row.mediaThumbhash === 'string' ? row.mediaThumbhash.slice(0, 64) : null,
        dominantColor:
          typeof row.mediaColor === 'string' && /^#[0-9A-Fa-f]{6}$/.test(row.mediaColor) ? row.mediaColor : null,
        srcset: avif.length ? avif.map((v) => `${url(v)} ${v.w}w`).join(', ') : null,
        alt: null,
      };
    }
  }
  if (typeof row.legacyThumbKey === 'string' && row.legacyThumbKey) {
    return {
      url: publicObjectUrl(options.publicBaseUrl, row.legacyThumbKey),
      width: null,
      height: null,
      thumbhash: null,
      dominantColor: null,
      srcset: null,
      alt: null,
    };
  }
  return null;
}

/** Cards of the given mods (orphan mods without an owner are skipped). Keyed by mod id. */
export async function loadModCards(
  db: Executor,
  modIds: readonly number[],
  options: CardOptions,
): Promise<Map<number, ModCardWithCompat>> {
  const out = new Map<number, ModCardWithCompat>();
  if (modIds.length === 0) return out;
  const result = await db.execute<Row>(sql`
    WITH current_build AS (
      SELECT "id", "label", "isCurrent", "isBreaking" FROM "GameBuild" WHERE "isCurrent" ORDER BY "id" DESC LIMIT 1
    )
    SELECT m."id", m."type", m."mod_id" AS "manifestId", m."name", m."slug", m."userId", m."shortDescription",
           m."latestVersion", m."downloads", m."lastWeekDownloads", m."favoritesCount", m."averageRating",
           m."reviewsCount", m."compatStatus", m."multiplayerRole", m."platform", m."isFeatured",
           m."lastReleasedAt", m."isNSFW", m."status", m."buildGuid", m."buildShareVersion", m."numberOfElements",
           lv."buildMeta",
           u."slug" AS "ownerSlug", coalesce(nullif(u."displayName", ''), u."name") AS "ownerName",
           u."verifiedCreator",
           coalesce(active."slug", c."slug") AS "categorySlug", coalesce(active."name", c."name") AS "categoryName",
           coalesce(active."icon", c."icon") AS "categoryIcon",
           s."downloads7d", s."followers", s."ratingAvg", s."reviewsVisible",
           md."id" AS "mediaId", md."variants" AS "mediaVariants", md."sourceBucket" AS "mediaBucket",
           md."sourceKey" AS "mediaKey", md."width" AS "mediaWidth", md."height" AS "mediaHeight",
           md."thumbhash" AS "mediaThumbhash", md."dominantColor" AS "mediaColor",
           (SELECT i."storageKey" FROM "ModImage" i
             WHERE i."modId" = m."id" AND i."isThumbnail" AND i."storageKey" IS NOT NULL
             ORDER BY i."id" LIMIT 1) AS "legacyThumbKey",
           coalesce((SELECT json_agg(json_build_object('id', a."id", 'kind', a."kind",
                                                       'periodStart', a."periodStart"::text,
                                                       'periodEnd', a."periodEnd"::text) ORDER BY a."periodStart" DESC)
                       FROM "Award" a WHERE a."modId" = m."id"), '[]'::json) AS "awards",
           cb."id" AS "buildId", cb."label" AS "buildLabel", cb."isBreaking" AS "buildBreaking",
           vc."works", vc."partial", vc."broken", vc."computedStatus"
      FROM "Mod" m
      JOIN "User" u ON u."id" = m."userId"
      LEFT JOIN "Category" c ON c."id" = m."categoryId"
      LEFT JOIN LATERAL (
        SELECT a2."slug", a2."name", a2."icon" FROM "Category" a2
         WHERE c."retiredAt" IS NOT NULL AND a2."retiredAt" IS NULL AND c."slug" = ANY(a2."legacySlugs")
         ORDER BY a2."id" LIMIT 1) active ON true
      LEFT JOIN "ModStats" s ON s."modId" = m."id"
      LEFT JOIN "Media" md ON md."id" = m."thumbnailMediaId" AND md."status" = 'ready'
      LEFT JOIN current_build cb ON true
      LEFT JOIN LATERAL (
        SELECT v."id", v."buildMeta" FROM "ModVersion" v
         WHERE v."modId" = m."id" AND v."status" IN ('active', 'yanked')
         ORDER BY v."isLatest" DESC, v."createdAt" DESC, v."id" DESC LIMIT 1) lv ON true
      LEFT JOIN "ModVersionCompat" vc ON vc."modVersionId" = lv."id" AND vc."gameBuildId" = cb."id"
     WHERE m."id" = ANY(${sql.param([...modIds])}::int[])`);

  for (const row of result.rows) {
    const id = Number(row.id);
    const reviews = Number(row.reviewsVisible ?? row.reviewsCount ?? 0);
    const rawRating = row.ratingAvg ?? row.averageRating;
    const rating = rawRating === null || rawRating === undefined ? null : Number(rawRating);
    const modCompat = oneOf(COMPAT_STATUSES, row.compatStatus) ?? 'untested';
    const kind = kindOf(row.type);
    const card: ModCardDTO = {
      id,
      kind,
      manifestId: String(row.manifestId || row.slug),
      name: String(row.name),
      slug: String(row.slug),
      canonicalPath: canonicalModPath({
        id,
        name: String(row.name),
        slug: String(row.slug),
        canonicalSlug: null,
        manifestId: String(row.manifestId),
        type: row.type as 'Mod' | 'Library' | 'Build' | null,
        status: row.status as 'published',
        userId: Number(row.userId),
        ownerSlug: String(row.ownerSlug),
      }),
      userId: Number(row.userId),
      userHandle: String(row.ownerSlug),
      userDisplayName: String(row.ownerName),
      verifiedCreator: row.verifiedCreator === true,
      category: row.categorySlug
        ? {
            slug: String(row.categorySlug),
            nameKey: categoryNameKey(String(row.categorySlug)),
            name: String(row.categoryName),
            icon: typeof row.categoryIcon === 'string' ? row.categoryIcon : null,
          }
        : null,
      shortDescription: String(row.shortDescription ?? ''),
      thumbnail: thumbnailOf(row, options),
      latestVersion: typeof row.latestVersion === 'string' && row.latestVersion !== '' ? row.latestVersion : null,
      downloads: Math.max(0, Number(row.downloads ?? 0)),
      downloads7d: Math.max(0, Number(row.downloads7d ?? row.lastWeekDownloads ?? 0)),
      followers: Math.max(0, Number(row.followers ?? row.favoritesCount ?? 0)),
      ratingAvg: reviews > 0 && rating !== null && rating >= 1 && rating <= 5 ? rating : null,
      ratingCount: Math.max(0, reviews),
      compatStatus: modCompat,
      multiplayerRole: oneOf(MULTIPLAYER_ROLES, row.multiplayerRole),
      platform: oneOf(PLATFORMS, row.platform),
      isFeatured: row.isFeatured === true,
      awards: (row.awards as ModCardDTO['awards']) ?? [],
      lastReleasedAt: iso(row.lastReleasedAt),
      nsfw: row.isNSFW === true,
      status: row.status as ModCardDTO['status'],
      build: buildCardFacts(kind, row.buildMeta, {
        buildGuid: typeof row.buildGuid === 'string' ? row.buildGuid : null,
        buildShareVersion: typeof row.buildShareVersion === 'string' ? row.buildShareVersion : null,
        numberOfElements:
          row.numberOfElements === null || row.numberOfElements === undefined ? null : Number(row.numberOfElements),
      }),
    };
    const compat: CompatSummaryDTO = {
      status: oneOf(COMPAT_STATUSES, row.computedStatus) ?? modCompat,
      works: Number(row.works ?? 0),
      partial: Number(row.partial ?? 0),
      broken: Number(row.broken ?? 0),
      gameBuild:
        row.buildId === null || row.buildId === undefined
          ? null
          : {
              id: Number(row.buildId),
              label: String(row.buildLabel),
              isCurrent: true,
              isBreaking: row.buildBreaking === true,
            },
    };
    out.set(id, { card, compat });
  }
  return out;
}
