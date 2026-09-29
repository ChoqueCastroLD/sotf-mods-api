/**
 * Mod reads of the legacy surface (PLAN §5.5, research/01 §2.3–§2.5): `GET /api/mods`, the detail
 * by `mod_id` or by slug, `find`, `featured` and `check`. These services return plain rows; the
 * byte-exact serialisation (key order, quirks) lives in `apps/api/src/legacy/serializers.ts`.
 *
 * Fidelity notes:
 * - string orders (`versions` of the list = lowest version by ascending string order, detail
 *   versions by descending string order) are done by PostgreSQL with the database collation, as
 *   Prisma did;
 * - every sort gets `id` as tie-breaker in the same direction (deviation `stable-order`);
 * - the search is `ILIKE` on name, description and author name (literal, like Prisma `contains`).
 */
import { LEGACY_CHECK_MESSAGES, LEGACY_ORDERBY, type LegacyModsFilter } from '@sotf/contracts/legacy';
import type { Executor } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';
import {
  approvedCondition,
  arrayParam,
  DETAIL_VISIBLE,
  firstRow,
  likeContains,
  rows,
  VERSION_VISIBLE,
  withDates,
} from './db.ts';
import { semverGt } from './semver.ts';

/** Scalar columns of "Mod" in the legacy order, plus the author and category references. */
export interface LegacyModRow {
  id: number;
  name: string;
  slug: string;
  mod_id: string;
  shortDescription: string;
  description: string;
  dependencies: string;
  type: string | null;
  modSide: string | null;
  isNSFW: boolean;
  isApproved: boolean;
  isFeatured: boolean;
  isMultiplayerCompatible: boolean;
  requiresAllPlayers: boolean;
  lastWeekDownloads: number;
  downloads: number;
  latestVersion: string | null;
  latestVersionSize: string | null;
  averageRating: number | null;
  reviewsCount: number | null;
  favoritesCount: number;
  commentsCount: number;
  sourceUrl: string | null;
  imageUrl: string | null;
  buildGuid: string | null;
  buildShareVersion: string | null;
  numberOfElements: number | null;
  lastReleasedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: number | null;
  categoryId: number | null;
  /** Author (null when the mod has no user). */
  userName: string | null;
  userSlug: string | null;
  userImageUrl: string | null;
  userIsTrusted: boolean | null;
  /** Category (null when the mod has none). */
  categoryName: string | null;
  categorySlug: string | null;
}

export interface LegacyImageRow {
  modId: number;
  isPrimary: boolean;
  isThumbnail: boolean;
  url: string;
}

export interface LegacyListVersionRow {
  modId: number;
  version: string;
  isLatest: boolean;
}

export interface LegacyDetailVersionRow {
  id: number;
  version: string;
  isLatest: boolean;
  changelog: string;
  downloadUrl: string;
  extension: string | null;
  filename: string | null;
  createdAt: Date;
  updatedAt: Date;
  downloads: number;
}

/** A list item: the mod row and its relations. */
export interface LegacyListMod {
  mod: LegacyModRow;
  images: LegacyImageRow[];
  /** At most one element (the lowest version by string order). */
  versions: LegacyListVersionRow[];
  favorites: number;
}

export interface LegacyDetailMod {
  mod: LegacyModRow;
  images: Array<{ url: string }>;
  versions: LegacyDetailVersionRow[];
  favorites: number;
}

const MOD_COLUMNS = sql`
  m."id", m."name", m."slug", m."mod_id", m."shortDescription", m."description", m."dependencies", m."type",
  m."modSide", m."isNSFW", m."isApproved", m."isFeatured", m."isMultiplayerCompatible", m."requiresAllPlayers",
  m."lastWeekDownloads", m."downloads", m."latestVersion", m."latestVersionSize", m."averageRating",
  m."reviewsCount", m."favoritesCount", m."commentsCount", m."sourceUrl", m."imageUrl", m."buildGuid",
  m."buildShareVersion", m."numberOfElements", m."lastReleasedAt", m."createdAt", m."updatedAt", m."userId",
  m."categoryId",
  u."name" AS "userName", u."slug" AS "userSlug", u."imageUrl" AS "userImageUrl", u."isTrusted" AS "userIsTrusted",
  c."name" AS "categoryName", c."slug" AS "categorySlug"`;

const MOD_DATES = ['lastReleasedAt', 'createdAt', 'updatedAt'] as const;

async function modRows(db: Executor, query: SQL): Promise<LegacyModRow[]> {
  return withDates(await rows<LegacyModRow>(db, query), MOD_DATES);
}

const MOD_FROM = sql`"Mod" m
  LEFT JOIN "User" u ON u."id" = m."userId"
  LEFT JOIN "Category" c ON c."id" = m."categoryId"`;

/** WHERE clause of `GET /api/mods` (research/01 §2.3 + the v2 deviations of PLAN §5.5). */
export function legacyListWhere(filter: LegacyModsFilter): SQL {
  const conditions: SQL[] = [];
  if (filter.search !== null) {
    const pattern = likeContains(filter.search);
    conditions.push(sql`(m."name" ILIKE ${pattern} OR m."description" ILIKE ${pattern} OR u."name" ILIKE ${pattern})`);
  }
  if (filter.userSlug !== null) conditions.push(sql`u."slug" = ${filter.userSlug}`);
  if (filter.userSlugFavorites !== null) {
    conditions.push(sql`EXISTS (
      SELECT 1 FROM "ModFavorite" f JOIN "User" fu ON fu."id" = f."userId"
       WHERE f."modId" = m."id" AND fu."slug" = ${filter.userSlugFavorites})`);
  }
  if (filter.modIds !== null) conditions.push(sql`m."mod_id" = ANY(${arrayParam(filter.modIds)}::text[])`);
  conditions.push(approvedCondition(filter.approved));
  if (filter.category !== null) conditions.push(sql`c."slug" = ${filter.category}`);
  conditions.push(sql`m."isNSFW" = ${filter.nsfw}`);
  if (filter.type !== null) conditions.push(sql`m."type" = ${filter.type}`);
  return sql.join(conditions, sql` AND `);
}

function orderClause(orderby: LegacyModsFilter['orderby']): SQL {
  const { column, direction } = LEGACY_ORDERBY[orderby];
  const dir = direction === 'desc' ? 'DESC' : 'ASC';
  // Whitelisted identifiers (LEGACY_ORDERBY is a constant map).
  return sql.raw(`m."${column}" ${dir}, m."id" ${dir}`);
}

async function listImages(db: Executor, modIds: number[]): Promise<Map<number, LegacyImageRow[]>> {
  const map = new Map<number, LegacyImageRow[]>();
  if (modIds.length === 0) return map;
  const found = await rows<LegacyImageRow>(
    db,
    sql`SELECT "modId", "isPrimary", "isThumbnail", "url" FROM "ModImage"
         WHERE "modId" = ANY(${arrayParam(modIds)}::int[]) ORDER BY "modId", "id"`,
  );
  for (const image of found) {
    const list = map.get(image.modId) ?? [];
    list.push(image);
    map.set(image.modId, list);
  }
  return map;
}

async function favoriteCounts(db: Executor, modIds: number[]): Promise<Map<number, number>> {
  const map = new Map<number, number>();
  if (modIds.length === 0) return map;
  const found = await rows<{ modId: number; n: number }>(
    db,
    sql`SELECT "modId", count(*)::int AS "n" FROM "ModFavorite" WHERE "modId" = ANY(${arrayParam(modIds)}::int[]) GROUP BY "modId"`,
  );
  for (const row of found) map.set(row.modId, row.n);
  return map;
}

async function lowestVersions(db: Executor, modIds: number[]): Promise<Map<number, LegacyListVersionRow>> {
  const map = new Map<number, LegacyListVersionRow>();
  if (modIds.length === 0) return map;
  const found = await rows<LegacyListVersionRow>(
    db,
    sql`SELECT DISTINCT ON (v."modId") v."modId", v."version", v."isLatest"
          FROM "ModVersion" v
         WHERE v."modId" = ANY(${arrayParam(modIds)}::int[]) AND ${VERSION_VISIBLE}
         ORDER BY v."modId", v."version" ASC, v."id" ASC`,
  );
  for (const row of found) map.set(row.modId, row);
  return map;
}

/** `GET /api/mods`: one page of mods and the total. */
export async function listLegacyMods(
  db: Executor,
  filter: LegacyModsFilter,
): Promise<{ items: LegacyListMod[]; total: number }> {
  const where = legacyListWhere(filter);
  const offset = (filter.page - 1) * filter.limit;
  const [found, count] = await Promise.all([
    modRows(
      db,
      sql`SELECT ${MOD_COLUMNS} FROM ${MOD_FROM} WHERE ${where}
          ORDER BY ${orderClause(filter.orderby)} LIMIT ${filter.limit} OFFSET ${offset}`,
    ),
    firstRow<{ total: number }>(db, sql`SELECT count(*)::int AS "total" FROM ${MOD_FROM} WHERE ${where}`),
  ]);
  const ids = found.map((m) => m.id);
  const [images, versions, favorites] = await Promise.all([
    listImages(db, ids),
    lowestVersions(db, ids),
    favoriteCounts(db, ids),
  ]);
  return {
    total: count?.total ?? 0,
    items: found.map((mod) => {
      const version = versions.get(mod.id);
      return {
        mod,
        images: images.get(mod.id) ?? [],
        versions: version ? [version] : [],
        favorites: favorites.get(mod.id) ?? 0,
      };
    }),
  };
}

async function detailOf(db: Executor, mod: LegacyModRow | undefined): Promise<LegacyDetailMod | null> {
  if (!mod) return null;
  const [images, versions, favorites] = await Promise.all([
    rows<{ url: string }>(db, sql`SELECT "url" FROM "ModImage" WHERE "modId" = ${mod.id} ORDER BY "id"`),
    rows<LegacyDetailVersionRow>(
      db,
      sql`SELECT v."id", v."version", v."isLatest", v."changelog", v."downloadUrl", v."extension", v."filename",
                 v."createdAt", v."updatedAt", v."downloadsCount" AS "downloads"
            FROM "ModVersion" v
           WHERE v."modId" = ${mod.id} AND ${VERSION_VISIBLE}
           ORDER BY v."version" DESC, v."id" DESC`,
    ).then((found) => withDates(found, ['createdAt', 'updatedAt'])),
    favoriteCounts(db, [mod.id]),
  ]);
  return { mod, images, versions, favorites: favorites.get(mod.id) ?? 0 };
}

/** `GET /api/mods/:mod_id` (exact, case-sensitive manifest id). */
export async function getLegacyModById(db: Executor, manifestId: string): Promise<LegacyDetailMod | null> {
  const [mod] = await modRows(
    db,
    sql`SELECT ${MOD_COLUMNS} FROM ${MOD_FROM} WHERE m."mod_id" = ${manifestId} AND ${DETAIL_VISIBLE} LIMIT 1`,
  );
  return detailOf(db, mod);
}

/** `GET /api/mods/slug/:userSlug/:mod_slug`. */
export async function getLegacyModBySlug(
  db: Executor,
  userSlug: string,
  modSlug: string,
): Promise<LegacyDetailMod | null> {
  const [mod] = await modRows(
    db,
    sql`SELECT ${MOD_COLUMNS} FROM ${MOD_FROM}
         WHERE u."slug" = ${userSlug} AND m."slug" = ${modSlug} AND ${DETAIL_VISIBLE}
         ORDER BY m."id" LIMIT 1`,
  );
  return detailOf(db, mod);
}

/** `GET /api/mods/find?userSlug=&mod_slug=`: the manifest id, or null. */
export async function findLegacyModId(
  db: Executor,
  userSlug: string,
  modSlug: string,
): Promise<{ id: number; mod_id: string } | null> {
  return firstRow<{ id: number; mod_id: string }>(
    db,
    sql`SELECT m."id", m."mod_id" FROM "Mod" m JOIN "User" u ON u."id" = m."userId"
         WHERE u."slug" = ${userSlug} AND m."slug" = ${modSlug} AND ${DETAIL_VISIBLE}
         ORDER BY m."id" LIMIT 1`,
  );
}

/** Row of `featured` (mods and builds). */
export interface LegacyFeaturedRow {
  mod: LegacyModRow;
  images: LegacyImageRow[];
  favorites: number;
}

/**
 * `GET /api/mods/featured` (12 `Mod`) and `GET /api/builds/featured` (4 `Build`): published, not
 * NSFW, by `lastWeekDownloads` desc.
 */
export async function listLegacyFeatured(
  db: Executor,
  type: 'Mod' | 'Build',
  limit: number,
): Promise<LegacyFeaturedRow[]> {
  const found = await modRows(
    db,
    sql`SELECT ${MOD_COLUMNS} FROM ${MOD_FROM}
         WHERE m."status" = 'published' AND NOT m."isNSFW" AND m."type" = ${type}
         ORDER BY m."lastWeekDownloads" DESC, m."id" DESC LIMIT ${limit}`,
  );
  const ids = found.map((m) => m.id);
  const [images, favorites] = await Promise.all([listImages(db, ids), favoriteCounts(db, ids)]);
  return found.map((mod) => ({ mod, images: images.get(mod.id) ?? [], favorites: favorites.get(mod.id) ?? 0 }));
}

export type LegacyCheckResult =
  | { kind: 'not_found' }
  | { kind: 'invalid'; message: string }
  | {
      kind: 'ok';
      modId: number;
      newVersionAvailable: boolean;
      message: (typeof LEGACY_CHECK_MESSAGES)[keyof typeof LEGACY_CHECK_MESSAGES];
      version: string;
      changelog: string;
    };

/**
 * `GET /api/mods/:mod_id/check?version=` (research/01 §2.5): compares the `isLatest` version with
 * node-semver `gt`. An invalid version (either side: builds use UUIDv7) → `invalid` (422 in v2).
 */
export async function checkLegacyMod(
  db: Executor,
  manifestId: string,
  clientVersion: string | undefined,
): Promise<LegacyCheckResult> {
  const latest = await firstRow<{ modId: number; version: string; changelog: string }>(
    db,
    sql`SELECT m."id" AS "modId", v."version", v."changelog"
          FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
         WHERE m."mod_id" = ${manifestId} AND ${DETAIL_VISIBLE} AND v."isLatest" AND ${VERSION_VISIBLE}
         ORDER BY v."id" DESC LIMIT 1`,
  );
  if (!latest) return { kind: 'not_found' };
  const base = { kind: 'ok' as const, modId: latest.modId, version: latest.version, changelog: latest.changelog };
  if (!clientVersion) return { ...base, newVersionAvailable: false, message: LEGACY_CHECK_MESSAGES.latest };
  let newer: boolean;
  try {
    newer = semverGt(latest.version, clientVersion);
  } catch (error) {
    return { kind: 'invalid', message: (error as Error).message };
  }
  return newer
    ? { ...base, newVersionAvailable: true, message: LEGACY_CHECK_MESSAGES.newVersion }
    : { ...base, newVersionAvailable: false, message: LEGACY_CHECK_MESSAGES.noNewVersion };
}
