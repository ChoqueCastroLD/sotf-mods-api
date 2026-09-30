/**
 * Tier 2 reads of the legacy surface (PLAN §5.5, research/01 §2.2 #10–#16 and §2.6): site stats,
 * categories, users, user stats, comments and daily download stats. Download numbers come from
 * the daily aggregates ("ModVersionDownloadDaily" + "SiteDownloadDaily"), never from scanning
 * "ModDownload" (research/01 §3.2).
 */
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { utcDay } from '../kernel/clock.ts';
import { DETAIL_VISIBLE, firstRow, rows, withDates } from './db.ts';

export interface LegacySiteStats {
  users: number;
  mods: number;
  downloads: number;
  developers: number;
}

/**
 * `GET /api/stats` (research/01 §2.6): every user, every "Mod" row, every download **including
 * the orphans** (downloads of deleted versions, kept in "SiteDownloadDaily"), and the users with at
 * least one approved `Mod`.
 */
export async function legacySiteStats(db: Executor): Promise<LegacySiteStats> {
  const row = await firstRow<LegacySiteStats>(
    db,
    sql`SELECT
      (SELECT count(*) FROM "User")::int AS "users",
      (SELECT count(*) FROM "Mod")::int AS "mods",
      ((SELECT coalesce(sum("downloads"), 0) FROM "ModVersionDownloadDaily")
        + (SELECT coalesce(sum("downloads"), 0) FROM "SiteDownloadDaily"))::bigint AS "downloads",
      (SELECT count(DISTINCT "userId") FROM "Mod"
        WHERE "isApproved" AND "type" = 'Mod' AND "userId" IS NOT NULL)::int AS "developers"`,
  );
  return normaliseStats(row);
}

/** `GET /api/stats/builds`: users, builds, downloads of builds and users with an approved build. */
export async function legacyBuildStats(db: Executor): Promise<LegacySiteStats> {
  const row = await firstRow<LegacySiteStats>(
    db,
    sql`SELECT
      (SELECT count(*) FROM "User")::int AS "users",
      (SELECT count(*) FROM "Mod" WHERE "type" = 'Build')::int AS "mods",
      (SELECT coalesce(sum(d."downloads"), 0) FROM "ModVersionDownloadDaily" d
         JOIN "ModVersion" v ON v."id" = d."modVersionId"
         JOIN "Mod" m ON m."id" = v."modId"
        WHERE m."type" = 'Build')::bigint AS "downloads",
      (SELECT count(DISTINCT "userId") FROM "Mod"
        WHERE "isApproved" AND "type" = 'Build' AND "userId" IS NOT NULL)::int AS "developers"`,
  );
  return normaliseStats(row);
}

function normaliseStats(row: LegacySiteStats | null): LegacySiteStats {
  // bigint sums arrive as strings from node-postgres (research/01 §1.2).
  return {
    users: Number(row?.users ?? 0),
    mods: Number(row?.mods ?? 0),
    downloads: Number(row?.downloads ?? 0),
    developers: Number(row?.developers ?? 0),
  };
}

export interface LegacyCategoryRow {
  id: number;
  name: string;
  slug: string;
}

/**
 * `GET /api/categories?type=` (`type` defaults to `Mod`; any other value is matched literally, so
 * unknown types answer `[]`). Every category of the type is listed, as the legacy API did —
 * including the v2 taxonomy seeded into the legacy table (deviation `taxonomy-seed`) and retired
 * legacy categories, which mods keep referencing until they are recategorised.
 */
export async function legacyCategories(db: Executor, type: string | undefined): Promise<LegacyCategoryRow[]> {
  return rows<LegacyCategoryRow>(
    db,
    sql`SELECT "id", "name", "slug" FROM "Category" WHERE "type" = ${type || 'Mod'} ORDER BY "name" ASC, "id" ASC`,
  );
}

export interface LegacyUserRow {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  isTrusted: boolean;
  createdAt: Date;
}

/** `GET /api/users/:userSlug` (deleted accounts are not found). */
export async function legacyUserBySlug(db: Executor, slug: string): Promise<LegacyUserRow | null> {
  const found = await rows<LegacyUserRow>(
    db,
    sql`SELECT "id", "name", "slug", "imageUrl", "isTrusted", "createdAt" FROM "User"
         WHERE "slug" = ${slug} AND "deletedAt" IS NULL ORDER BY "id" LIMIT 1`,
  );
  return withDates(found, ['createdAt'])[0] ?? null;
}

export interface LegacyUserStats {
  modsCount: number;
  totalDownloads: number;
  downloadsLastDay: number;
  downloadsLast7Days: number;
  downloadsLast30Days: number;
  totalFavorites: number;
  totalReviews: number;
  averageRating: number;
}

/**
 * `GET /api/users/:userSlug/stats` from the daily aggregates. The windows are UTC days including
 * today (`LastDay` = today, `Last7Days` = today and the 6 previous days, …); the legacy API used
 * rolling hours on the raw rows. Mods that are rejected or removed do not count.
 */
export async function legacyUserStats(db: Executor, userId: number, now: Date): Promise<LegacyUserStats> {
  const today = utcDay(now);
  const row = await firstRow<Record<keyof LegacyUserStats, string | number | null>>(
    db,
    sql`WITH owned AS (
          SELECT m."id" FROM "Mod" m WHERE m."userId" = ${userId} AND ${DETAIL_VISIBLE}
        ), dl AS (
          SELECT d."day", d."downloads" FROM "ModVersionDownloadDaily" d
            JOIN "ModVersion" v ON v."id" = d."modVersionId"
           WHERE v."modId" IN (SELECT "id" FROM owned)
        )
        SELECT
          (SELECT count(*) FROM owned)::int AS "modsCount",
          (SELECT coalesce(sum("downloads"), 0) FROM dl)::bigint AS "totalDownloads",
          (SELECT coalesce(sum("downloads"), 0) FROM dl WHERE "day" >= ${today}::date)::bigint AS "downloadsLastDay",
          (SELECT coalesce(sum("downloads"), 0) FROM dl WHERE "day" > ${today}::date - 7)::bigint AS "downloadsLast7Days",
          (SELECT coalesce(sum("downloads"), 0) FROM dl WHERE "day" > ${today}::date - 30)::bigint AS "downloadsLast30Days",
          (SELECT count(*) FROM "ModFavorite" f WHERE f."modId" IN (SELECT "id" FROM owned))::int AS "totalFavorites",
          (SELECT count(*) FROM "ModReview" r
            WHERE r."modId" IN (SELECT "id" FROM owned) AND r."status" = 'visible')::int AS "totalReviews",
          (SELECT avg(r."rating") FROM "ModReview" r
            WHERE r."modId" IN (SELECT "id" FROM owned) AND r."status" = 'visible')::float8 AS "averageRating"`,
  );
  const n = (value: string | number | null | undefined) => Number(value ?? 0);
  return {
    modsCount: n(row?.modsCount),
    totalDownloads: n(row?.totalDownloads),
    downloadsLastDay: n(row?.downloadsLastDay),
    downloadsLast7Days: n(row?.downloadsLast7Days),
    downloadsLast30Days: n(row?.downloadsLast30Days),
    totalFavorites: n(row?.totalFavorites),
    totalReviews: n(row?.totalReviews),
    averageRating: n(row?.averageRating),
  };
}

export interface LegacyCommentUser {
  name: string;
  slug: string;
  imageUrl: string;
  isTrusted: boolean;
}

export interface LegacyCommentRow {
  id: number;
  message: string;
  imageUrl: string | null;
  createdAt: Date;
  isHidden: boolean;
  user: LegacyCommentUser | null;
}

export interface LegacyCommentThread extends LegacyCommentRow {
  replies: LegacyCommentRow[];
}

interface CommentQueryRow {
  id: number;
  message: string;
  imageUrl: string | null;
  createdAt: Date;
  isHidden: boolean;
  replyId: number | null;
  userName: string | null;
  userSlug: string | null;
  userImageUrl: string | null;
  userIsTrusted: boolean | null;
}

function commentOf(row: CommentQueryRow): LegacyCommentRow {
  return {
    id: row.id,
    message: row.message,
    imageUrl: row.imageUrl,
    createdAt: row.createdAt,
    isHidden: row.isHidden,
    user:
      row.userSlug === null
        ? null
        : {
            name: row.userName ?? '',
            slug: row.userSlug,
            imageUrl: row.userImageUrl ?? '',
            isTrusted: row.userIsTrusted ?? false,
          },
  };
}

/**
 * `GET /api/comments?mod_id=<numeric id>`: top-level comments newest first, each with its replies
 * oldest first. Only `visible` comments (deviation `comments-hidden`), and only for mods that are
 * public by URL (not rejected or removed).
 */
export async function legacyComments(db: Executor, modId: number): Promise<LegacyCommentThread[]> {
  const found = await rows<CommentQueryRow>(
    db,
    sql`SELECT cm."id", cm."message", cm."imageUrl", cm."createdAt", cm."isHidden", cm."replyId",
               u."name" AS "userName", u."slug" AS "userSlug", u."imageUrl" AS "userImageUrl",
               u."isTrusted" AS "userIsTrusted"
          FROM "Comment" cm
          JOIN "Mod" m ON m."id" = cm."modId"
          LEFT JOIN "User" u ON u."id" = cm."userId"
         WHERE cm."modId" = ${modId} AND cm."status" = 'visible' AND ${DETAIL_VISIBLE}
         ORDER BY cm."createdAt" ASC, cm."id" ASC`,
  ).then((all) => withDates(all, ['createdAt']));
  const top = found.filter((row) => row.replyId === null);
  const topIds = new Set(top.map((row) => row.id));
  const replies = new Map<number, LegacyCommentRow[]>();
  for (const row of found) {
    if (row.replyId === null || !topIds.has(row.replyId)) continue;
    const list = replies.get(row.replyId) ?? [];
    list.push(commentOf(row));
    replies.set(row.replyId, list);
  }
  return top.reverse().map((row) => ({ ...commentOf(row), replies: replies.get(row.id) ?? [] }));
}

export type LegacyDownloadPeriod = 'week' | 'month' | 'all';

/**
 * Mod of `download-stats`: legacy accepted a numeric id (`parseInt` succeeds, so `"12abc"` is 12)
 * or a manifest id. Returns the numeric id or null.
 */
export async function resolveLegacyStatsMod(db: Executor, raw: string): Promise<number | null> {
  const numeric = Number.parseInt(raw, 10);
  const row = Number.isNaN(numeric)
    ? await firstRow<{ id: number }>(
        db,
        sql`SELECT m."id" FROM "Mod" m WHERE m."mod_id" = ${raw} AND ${DETAIL_VISIBLE}`,
      )
    : numeric > 2_147_483_647 || numeric < -2_147_483_648
      ? null
      : await firstRow<{ id: number }>(
          db,
          sql`SELECT m."id" FROM "Mod" m WHERE m."id" = ${numeric} AND ${DETAIL_VISIBLE}`,
        );
  return row?.id ?? null;
}

/**
 * `GET /api/mods/:mod_id/download-stats?period=`: `[{date, count}]` for the days with downloads
 * (UTC), from the daily aggregates. `week` starts 7 days before today, `month` 30 days before.
 */
export async function legacyDownloadStats(
  db: Executor,
  modId: number,
  period: LegacyDownloadPeriod,
  now: Date,
): Promise<Array<{ date: string; count: number }>> {
  const today = utcDay(now);
  const since = period === 'all' ? sql`TRUE` : sql`d."day" >= ${today}::date - ${period === 'week' ? 7 : 30}::int`;
  const found = await rows<{ date: string; count: number }>(
    db,
    sql`SELECT to_char(d."day", 'YYYY-MM-DD') AS "date", sum(d."downloads")::int AS "count"
          FROM "ModVersionDownloadDaily" d
          JOIN "ModVersion" v ON v."id" = d."modVersionId"
         WHERE v."modId" = ${modId} AND ${since}
         GROUP BY d."day"
        HAVING sum(d."downloads") > 0
         ORDER BY d."day" ASC`,
  );
  return found;
}
