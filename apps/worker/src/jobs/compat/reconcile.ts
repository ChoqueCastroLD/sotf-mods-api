/**
 * Nightly compatibility reconciliation (WP-50 follow-up, PLAN §7.10).
 *
 * Report weights depend on the reporter's current `trustLevel` / `verifiedCreator`, and reports of
 * banned or deleted accounts stop counting. None of those changes emits an event, so an aggregate
 * only picks them up on the next report of the same version. This pass finds the versions whose
 * stored aggregate no longer matches the reporters' current flags and schedules `compat.aggregate`
 * for them (debounced and idempotent), then refreshes the time-dependent mod-level flags
 * (`possiblyOutdated`) of every mod.
 *
 * It runs right after the nightly `accounts.trust-level` recomputation (the change it reacts to),
 * so it needs no queue or schedule of its own.
 */
import { COMPAT_RULES } from '@sotf/contracts/compat';
import { type Ctx, purge } from '@sotf/core';
import { modTags, refreshModsCompat } from '@sotf/core/compat/index';
import { withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';

/** Versions with at least one stale aggregate (same rules as `aggregateCompat`). */
export async function staleCompatVersions(ctx: Pick<Ctx, 'db'>): Promise<number[]> {
  const w = COMPAT_RULES.weights;
  const result = await ctx.db.execute(sql`
    WITH eligible AS (
      SELECT r."modVersionId", r."gameBuildId", r."weight",
             CASE
               WHEN m."userId" IS NOT NULL AND r."userId" = m."userId" THEN ${w.authorTested}::float8
               WHEN u."verifiedCreator" THEN ${w.verifiedCreator}::float8
               WHEN COALESCE(u."trustLevel", 0) <= 0 THEN ${w.trustLevel0}::float8
               ELSE ${w.default}::float8
             END AS "expected"
        FROM "CompatReport" r
        JOIN "User" u ON u."id" = r."userId"
        JOIN "ModVersion" v ON v."id" = r."modVersionId"
        LEFT JOIN "Mod" m ON m."id" = v."modId"
       WHERE r."status" = 'visible' AND u."deletedAt" IS NULL AND u."bannedAt" IS NULL
    ),
    counted AS (
      SELECT "modVersionId", "gameBuildId", count(*)::int AS "n" FROM eligible GROUP BY 1, 2
    )
    SELECT DISTINCT "modVersionId" AS "id" FROM eligible
     WHERE abs("weight"::float8 - "expected") > 0.000001
    UNION
    SELECT c."modVersionId" FROM "ModVersionCompat" c
      LEFT JOIN counted n ON n."modVersionId" = c."modVersionId" AND n."gameBuildId" = c."gameBuildId"
     WHERE c."works" + c."partial" + c."broken" <> COALESCE(n."n", 0)
    UNION
    SELECT n."modVersionId" FROM counted n
      JOIN "GameBuild" g ON g."id" = n."gameBuildId"
     WHERE NOT EXISTS (SELECT 1 FROM "ModVersionCompat" c
                        WHERE c."modVersionId" = n."modVersionId" AND c."gameBuildId" = n."gameBuildId")
    ORDER BY 1`);
  return (result.rows as Array<{ id: number | string }>).map((row) => Number(row.id));
}

export interface ReconcileResult {
  /** Versions whose aggregate was scheduled again. */
  versions: number;
  /** Mods whose `compatStatus` / `possiblyOutdated` changed in the refresh. */
  mods: number;
}

/** Schedules the stale aggregates and refreshes every mod's compat flags. Idempotent. */
export async function reconcileCompat(ctx: Ctx): Promise<ReconcileResult> {
  const versions = await staleCompatVersions(ctx);
  for (const modVersionId of versions) {
    await ctx.jobs.enqueue('compat.aggregate', { modVersionId });
  }
  const mods = await withTx(ctx.db, async (tx) => {
    const changed = await refreshModsCompat(tx, ctx.clock.now(), 'all');
    if (changed.length > 0) await purge(ctx.jobs, modTags(changed), 'compat nightly reconciliation', { tx });
    return changed.length;
  });
  return { versions: versions.length, mods };
}
