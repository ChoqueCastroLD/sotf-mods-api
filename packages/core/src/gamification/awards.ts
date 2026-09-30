/**
 * Awards (PLAN §7.2 "Mod of the Week", §5.2 `/awards/current`, admin awards):
 *
 * - **Mod of the Week** (`awards.mod-of-week`, Mondays 00:05 UTC) picks, for the week that starts
 *   on that Monday, the mod with the best
 *   `trendingScore = uniqueDownloads7d × clamp((d7 + 10) / (prev7 + 10), 0.5, 3)` over the seven
 *   days that just ended (`d7`) and the seven before (`prev7`). Legacy version-days without unique
 *   counts contribute their raw downloads (same rule as the hourly trending of WP-52).
 *   Filters: `published`, not NSFW, not a build, `compatStatus ≠ broken`, `ratingBayes ≥ 3.5` when
 *   it has ≥ 3 visible reviews, a visible author, and no author repeated from the two previous
 *   weeks. A week that already has an award (an admin override or a re-run) is left alone.
 * - Admin overrides, staff picks and the monthly awards are written by the admin module (WP-51,
 *   `core/admin/awards.ts`), which emits `award.created` like this job does.
 * - `award.created` drives the signal to the author, the Discord announcement (Mod of the Week),
 *   the purge of the landing and the mod page, and (gamification consumer) the repeatable badge:
 *   `mod-of-the-week` per ISO week, `staff-pick` per mod. Deleted awards lose their badge in the
 *   nightly reconciliation.
 */
import type { AwardDTO as AwardSchema, CurrentAwardsDTO } from '@sotf/contracts/gamification';
import { type AwardKind, type Executor, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import type { CatalogConfig } from '../catalog/media.ts';
import { getSnapshot, isListable } from '../catalog/snapshot.ts';
import { at, query, queryOne, toDate } from '../follows/sql.ts';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { TRENDING_MAX_FACTOR, TRENDING_MIN_FACTOR, TRENDING_SMOOTHING } from '../trending/score.ts';

export type AwardDTO = z.infer<typeof AwardSchema>;

/** Minimum Bayesian rating of a candidate with at least `MOTW_MIN_REVIEWS` reviews. */
export const MOTW_MIN_RATING = 3.5;
export const MOTW_MIN_REVIEWS = 3;
/** Weeks during which a winner's author cannot win again. */
export const MOTW_AUTHOR_COOLDOWN_WEEKS = 2;

// -----------------------------------------------------------------------------------------------
// Dates
// -----------------------------------------------------------------------------------------------

function addDays(day: string, days: number): string {
  const d = new Date(`${day}T00:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return utcDay(d);
}

/** Monday (UTC, `YYYY-MM-DD`) of the week containing `date`. */
export function weekStartOf(date: Date): string {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const weekday = (d.getUTCDay() + 6) % 7; // Monday = 0
  d.setUTCDate(d.getUTCDate() - weekday);
  return utcDay(d);
}

// -----------------------------------------------------------------------------------------------
// Mod of the Week
// -----------------------------------------------------------------------------------------------

export interface ModOfWeekCandidate {
  modId: number;
  authorId: number;
  score: number;
  unique7: number;
  d7: number;
  prev7: number;
}

/** Ranked candidates for the week starting `weekStart` (best first). */
export async function modOfWeekCandidates(
  exec: Executor,
  weekStart: string,
  limit = 10,
): Promise<ModOfWeekCandidate[]> {
  const rows = await query<{
    modId: number;
    authorId: number;
    score: number;
    unique7: number;
    d7: number;
    prev7: number;
  }>(
    exec,
    sql`
      WITH vd AS (
        SELECT v."modId", d."day", sum(d."downloads")::bigint AS downloads, sum(d."uniqueDownloads")::bigint AS uniq
          FROM "ModVersionDownloadDaily" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
         WHERE d."day" >= ${weekStart}::date - 14 AND d."day" < ${weekStart}::date AND v."modId" IS NOT NULL
         GROUP BY v."modId", d."modVersionId", d."day"
      ), w AS (
        SELECT "modId",
               coalesce(sum(CASE WHEN uniq > 0 THEN uniq ELSE downloads END)
                          FILTER (WHERE "day" >= ${weekStart}::date - 7), 0)::float8 AS u7,
               coalesce(sum(downloads) FILTER (WHERE "day" >= ${weekStart}::date - 7), 0)::float8 AS d7,
               coalesce(sum(downloads) FILTER (WHERE "day" < ${weekStart}::date - 7), 0)::float8 AS p7
          FROM vd GROUP BY "modId"
      ), reviews AS (
        SELECT r."modId", count(*) AS n FROM "ModReview" r WHERE r."status" = 'visible' GROUP BY r."modId"
      ), recent AS (
        SELECT DISTINCT m2."userId" FROM "Award" a JOIN "Mod" m2 ON m2."id" = a."modId"
         WHERE a."kind" = 'mod_of_week'
           AND a."periodStart" >= ${weekStart}::date - ${MOTW_AUTHOR_COOLDOWN_WEEKS * 7}::int
           AND a."periodStart" < ${weekStart}::date
           AND m2."userId" IS NOT NULL
      )
      SELECT m."id" AS "modId", m."userId" AS "authorId",
             w.u7 * least(${TRENDING_MAX_FACTOR}::float8,
                          greatest(${TRENDING_MIN_FACTOR}::float8,
                                   (w.d7 + ${TRENDING_SMOOTHING}) / (w.p7 + ${TRENDING_SMOOTHING}))) AS score,
             w.u7 AS unique7, w.d7, w.p7 AS prev7
        FROM "Mod" m
        JOIN w ON w."modId" = m."id"
        JOIN "User" u ON u."id" = m."userId" AND u."deletedAt" IS NULL AND u."bannedAt" IS NULL
        LEFT JOIN reviews rv ON rv."modId" = m."id"
       WHERE m."status" = 'published' AND NOT m."isNSFW" AND coalesce(m."type", 'Mod') <> 'Build'
         AND m."compatStatus" IS DISTINCT FROM 'broken'
         AND (coalesce(rv.n, 0) < ${MOTW_MIN_REVIEWS} OR m."ratingBayes" >= ${MOTW_MIN_RATING})
         AND m."userId" NOT IN (SELECT "userId" FROM recent)
         AND w.u7 > 0
       ORDER BY score DESC, w.u7 DESC, m."id" ASC
       LIMIT ${limit}`,
  );
  return rows.map((r) => ({
    modId: Number(r.modId),
    authorId: Number(r.authorId),
    score: Number(r.score),
    unique7: Number(r.unique7),
    d7: Number(r.d7),
    prev7: Number(r.prev7),
  }));
}

export interface ModOfWeekResult {
  weekStart: string;
  status: 'awarded' | 'exists' | 'no_candidate';
  awardId: number | null;
  modId: number | null;
  score: number | null;
}

interface InsertedAward {
  id: number;
  kind: AwardKind;
  modId: number;
  authorId: number | null;
  periodStart: string;
}

async function insertAward(
  tx: Executor,
  ctx: Ctx,
  input: { kind: AwardKind; modId: number; periodStart: string; periodEnd: string; reason: string | null },
  createdById: number | null,
): Promise<InsertedAward | null> {
  const row = await queryOne<{ id: number; authorId: number | null }>(
    tx,
    sql`
      INSERT INTO "Award" ("kind", "modId", "periodStart", "periodEnd", "reason", "createdById", "createdAt")
      VALUES (${input.kind}, ${input.modId}, ${input.periodStart}::date, ${input.periodEnd}::date, ${input.reason},
              ${createdById}, ${at(ctx.clock.now())})
      ON CONFLICT ("kind", "periodStart") DO NOTHING
      RETURNING "id", (SELECT m."userId" FROM "Mod" m WHERE m."id" = "Award"."modId") AS "authorId"`,
  );
  if (!row) return null;
  const award: InsertedAward = {
    id: Number(row.id),
    kind: input.kind,
    modId: input.modId,
    authorId: row.authorId === null ? null : Number(row.authorId),
    periodStart: input.periodStart,
  };
  if (award.authorId !== null) {
    await ctx.jobs.emitNew(
      tx,
      'award.created',
      {
        awardId: award.id,
        kind: award.kind,
        modId: award.modId,
        authorId: award.authorId,
        periodStart: award.periodStart,
      },
      { actorId: createdById },
    );
  }
  return award;
}

/** Picks and records the Mod of the Week inside `tx` (idempotent per week). */
export async function modOfWeekInTx(tx: Executor, ctx: Ctx, start: string): Promise<ModOfWeekResult> {
  if (weekStartOf(new Date(`${start}T00:00:00.000Z`)) !== start) {
    throw errors.validation(`weekStart must be a Monday (got ${start})`);
  }
  await tx.execute(sql`SELECT pg_advisory_xact_lock(60002, hashtext(${`motw:${start}`}))`);
  const existing = await queryOne<{ id: number; modId: number }>(
    tx,
    sql`SELECT "id", "modId" FROM "Award" WHERE "kind" = 'mod_of_week' AND "periodStart" = ${start}::date`,
  );
  if (existing) {
    return {
      weekStart: start,
      status: 'exists',
      awardId: Number(existing.id),
      modId: Number(existing.modId),
      score: null,
    };
  }
  const [winner] = await modOfWeekCandidates(tx, start, 1);
  if (!winner) return { weekStart: start, status: 'no_candidate', awardId: null, modId: null, score: null };
  const award = await insertAward(
    tx,
    ctx,
    { kind: 'mod_of_week', modId: winner.modId, periodStart: start, periodEnd: addDays(start, 6), reason: null },
    null,
  );
  return {
    weekStart: start,
    status: award ? 'awarded' : 'exists',
    awardId: award?.id ?? null,
    modId: winner.modId,
    score: winner.score,
  };
}

/** Job `awards.mod-of-week`: the week starting `weekStart` (default: the current week). */
export async function runModOfWeek(ctx: Ctx, weekStart?: string): Promise<ModOfWeekResult> {
  const start = weekStart ?? weekStartOf(ctx.clock.now());
  return withTx(ctx.db, (tx) => modOfWeekInTx(tx, ctx, start));
}

// -----------------------------------------------------------------------------------------------
// DTOs
// -----------------------------------------------------------------------------------------------

interface AwardRow {
  id: number;
  kind: AwardKind;
  modId: number;
  periodStart: string;
  periodEnd: string;
  reason: string | null;
  createdAt: Date | string;
}

const AWARD_COLUMNS = sql`a."id", a."kind", a."modId", to_char(a."periodStart", 'YYYY-MM-DD') AS "periodStart",
  to_char(a."periodEnd", 'YYYY-MM-DD') AS "periodEnd", a."reason", a."createdAt"`;

async function toAwardDtos(ctx: Ctx, config: CatalogConfig, rows: readonly AwardRow[]): Promise<AwardDTO[]> {
  if (rows.length === 0) return [];
  const snapshot = await getSnapshot(ctx, config);
  const out: AwardDTO[] = [];
  for (const r of rows) {
    const entry = snapshot.byId.get(Number(r.modId));
    if (!entry) continue;
    if (!isListable(snapshot, entry)) continue;
    out.push({
      id: Number(r.id),
      kind: r.kind,
      periodStart: r.periodStart,
      periodEnd: r.periodEnd,
      reason: r.reason,
      mod: entry.card,
      createdAt: (toDate(r.createdAt) ?? new Date(0)).toISOString(),
    });
  }
  return out;
}

/** `GET /awards/current`: the running Mod of the Week, staff picks and Build of the Month. */
export async function getCurrentAwards(ctx: Ctx, config: CatalogConfig): Promise<z.infer<typeof CurrentAwardsDTO>> {
  const today = utcDay(ctx.clock.now());
  const rows = await query<AwardRow>(
    ctx.db,
    sql`SELECT ${AWARD_COLUMNS} FROM "Award" a
         WHERE a."periodStart" <= ${today}::date AND a."periodEnd" >= ${today}::date
           AND a."kind" IN ('mod_of_week', 'staff_pick', 'build_of_month')
         ORDER BY a."periodStart" DESC, a."id" DESC`,
  );
  const dtos = await toAwardDtos(ctx, config, rows);
  return {
    modOfWeek: dtos.find((a) => a.kind === 'mod_of_week') ?? null,
    staffPicks: dtos.filter((a) => a.kind === 'staff_pick').slice(0, 12),
    buildOfMonth: dtos.find((a) => a.kind === 'build_of_month') ?? null,
  };
}
