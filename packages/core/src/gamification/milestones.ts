/**
 * Per-mod download milestones (PLAN §7.2 "Hitos por mod"): 1 k, 5 k, 10 k, 25 k, 50 k, 100 k,
 * 250 k, 500 k and 1 M.
 *
 * - `ModMilestone.reachedAt` is retroactive: the first UTC day on which the cumulative daily series
 *   (`ModVersionDownloadDaily`, legacy history included) reached the threshold. When only the
 *   legacy counter proves it (the series is short), or it was reached today, the check time is
 *   used.
 * - New milestones emit `milestone.reached` (signal with celebration; Discord for ≥ 10 k via the
 *   announcer) for the **highest** new threshold of each mod only, so a mod that jumps several
 *   thresholds at once gets one celebration. `notifiedAt` records the emission.
 * - `silent` (B16) records them without events (`notifiedAt` = now), as PLAN §7.2 "Lanzamiento"
 *   requires.
 */
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { at, query, toDate } from '../follows/sql.ts';
import type { Jobs } from '../kernel/jobs.ts';

export const MILESTONE_THRESHOLDS = [
  1_000, 5_000, 10_000, 25_000, 50_000, 100_000, 250_000, 500_000, 1_000_000,
] as const;

export interface MilestoneOptions {
  jobs: Jobs;
  now: Date;
  /** Only this mod. */
  modId?: number;
  /** Retroactive run (B16): no events. */
  silent: boolean;
}

export interface NewMilestone {
  modId: number;
  authorId: number | null;
  threshold: number;
  reachedAt: Date;
}

export interface MilestoneResult {
  recorded: number;
  announced: number;
  milestones: NewMilestone[];
}

/** Records the milestones reached and not yet stored; emits the celebration events. */
export async function checkMilestones(tx: Executor, options: MilestoneOptions): Promise<MilestoneResult> {
  const thresholds = `{${MILESTONE_THRESHOLDS.join(',')}}`;
  const modFilter = options.modId === undefined ? sql`` : sql` AND m."id" = ${options.modId}`;
  const now = options.now;
  const today = now.toISOString().slice(0, 10);
  const rows = await query<{ modId: number; authorId: number | null; threshold: number; reachedAt: Date | string }>(
    tx,
    sql`
      WITH th AS (SELECT unnest(${thresholds}::int[]) AS threshold),
      counters AS (
        SELECT m."id" AS "modId", m."userId",
               greatest(coalesce(st."downloadsTotal", 0), m."downloads")::bigint AS approx
          FROM "Mod" m LEFT JOIN "ModStats" st ON st."modId" = m."id"
         WHERE m."status" IN ('published', 'unlisted', 'archived') ${modFilter}
      ),
      candidates AS (
        SELECT c."modId", c."userId" FROM counters c
         WHERE EXISTS (
           SELECT 1 FROM th
            WHERE th.threshold <= c.approx
              AND NOT EXISTS (SELECT 1 FROM "ModMilestone" mm WHERE mm."modId" = c."modId" AND mm."threshold" = th.threshold)
         )
      ),
      series AS (
        SELECT v."modId", d."day", sum(d."downloads")::bigint AS n
          FROM "ModVersionDownloadDaily" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
         WHERE v."modId" IN (SELECT "modId" FROM candidates)
         GROUP BY v."modId", d."day"
      ),
      cumulative AS (
        SELECT "modId", "day", sum(n) OVER (PARTITION BY "modId" ORDER BY "day") AS total FROM series
      ),
      firsts AS (
        SELECT c."modId", th.threshold, min(c."day") AS "day"
          FROM cumulative c JOIN th ON c.total >= th.threshold
         GROUP BY c."modId", th.threshold
      ),
      totals AS (
        SELECT c."modId", c."userId",
               greatest(coalesce((SELECT max(x.total) FROM cumulative x WHERE x."modId" = c."modId"), 0), m."downloads") AS total
          FROM candidates c JOIN "Mod" m ON m."id" = c."modId"
      ),
      reached AS (
        SELECT t."modId", t."userId", th.threshold,
               CASE WHEN f."day" IS NULL OR f."day" >= ${today}::date THEN ${at(now)}
                    ELSE f."day"::timestamptz END AS "reachedAt"
          FROM totals t JOIN th ON th.threshold <= t.total
          LEFT JOIN firsts f ON f."modId" = t."modId" AND f.threshold = th.threshold
      )
      INSERT INTO "ModMilestone" ("modId", "threshold", "reachedAt", "notifiedAt")
      SELECT r."modId", r.threshold, r."reachedAt", ${options.silent ? at(now) : sql`NULL::timestamptz`}
        FROM reached r
      ON CONFLICT ("modId", "threshold") DO NOTHING
      RETURNING "modId", "threshold", "reachedAt",
                (SELECT m."userId" FROM "Mod" m WHERE m."id" = "ModMilestone"."modId") AS "authorId"`,
  );
  const milestones: NewMilestone[] = rows.map((r) => ({
    modId: Number(r.modId),
    authorId: r.authorId === null ? null : Number(r.authorId),
    threshold: Number(r.threshold),
    reachedAt: toDate(r.reachedAt) ?? now,
  }));
  let announced = 0;
  if (!options.silent && milestones.length > 0) {
    const highest = new Map<number, NewMilestone>();
    for (const m of milestones) {
      const current = highest.get(m.modId);
      if (!current || m.threshold > current.threshold) highest.set(m.modId, m);
    }
    for (const m of highest.values()) {
      if (m.authorId === null) continue;
      await options.jobs.emitNew(
        tx,
        'milestone.reached',
        { modId: m.modId, authorId: m.authorId, threshold: m.threshold, reachedAt: m.reachedAt.toISOString() },
        { actorId: null },
      );
      announced += 1;
    }
    const ids = `{${milestones.map((m) => m.modId).join(',')}}`;
    await tx.execute(sql`
      UPDATE "ModMilestone" SET "notifiedAt" = ${at(now)}
       WHERE "notifiedAt" IS NULL AND "modId" = ANY(${ids}::int[])`);
  }
  return { recorded: milestones.length, announced, milestones };
}
