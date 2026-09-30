/**
 * `compat.aggregate` (PLAN §7.10, §2.9): recomputes `ModVersionCompat` of one version (on one build
 * or on every build it has data for) from the visible field reports, emits
 * `compat.aggregate_changed` when a computed status moves, and keeps the denormalised
 * `Mod.compatStatus` / `Mod.possiblyOutdated` in sync.
 *
 * - Runs in the worker (debounced 30 s per payload by pg-boss). Every write is idempotent: running
 *   it twice leaves the same rows and emits nothing the second time.
 * - Weights are recomputed from the reporters' current flags (verified creator, trust level) and
 *   written back to `CompatReport.weight` when they changed, so moderation tools see the weight
 *   that was applied.
 * - `Mod.compatStatus` = status of the latest public version on the current build (`untested`
 *   without a current build or without data). `Mod` is a legacy table: only v2 columns are
 *   written, with raw SQL so the legacy `updatedAt` never moves.
 */
import type { CompatStatus } from '@sotf/contracts/common';
import type { CompatResult } from '@sotf/contracts/compat';
import { type Executor, withTx } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';
import { at, intArray, query, queryOne, toDate } from '../follows/sql.ts';
import { cacheTag, purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import type { Jobs } from '../kernel/jobs.ts';
import {
  type AggregateReport,
  aggregateReports,
  type BuildFacts,
  isPossiblyOutdated,
  latestBreakingBuild,
  reporterWeight,
} from './rules.ts';

const COMPAT_STATUSES = new Set<string>(['works', 'mixed', 'broken', 'untested']);

function statusOf(value: string | null | undefined): CompatStatus | null {
  return value && COMPAT_STATUSES.has(value) ? (value as CompatStatus) : null;
}

/** Versions a visitor can see and report on: active, missing file, or pending with passed checks. */
export const REPORTABLE_VERSION_SQL = sql.raw(
  `(v."status" IN ('active', 'file_missing') OR (v."status" = 'pending' AND v."checksStatus" = 'passed'))`,
);

/** Transaction-scoped lock serialising the aggregates of one version. */
function versionLock(modVersionId: number): SQL {
  return sql`SELECT pg_advisory_xact_lock(hashtextextended(${`ModVersionCompat:${modVersionId}`}, 0))`;
}

interface BuildRow {
  id: number;
  label: string;
  releasedAt: string;
  isBreaking: boolean;
  isCurrent: boolean;
}

export async function loadBuildFacts(db: Executor): Promise<BuildRow[]> {
  return query<BuildRow>(
    db,
    sql`SELECT "id", "label", "releasedAt"::text AS "releasedAt", "isBreaking", "isCurrent"
          FROM "GameBuild" ORDER BY "releasedAt" DESC, "id" DESC`,
  );
}

// -----------------------------------------------------------------------------------------------
// Version × build aggregates
// -----------------------------------------------------------------------------------------------

export interface AggregateJob {
  modVersionId: number;
  gameBuildId?: number | undefined;
}

export interface AggregateRunResult {
  modVersionId: number;
  builds: number;
  changed: Array<{ gameBuildId: number; from: CompatStatus | null; to: CompatStatus }>;
  modChanged: boolean;
}

interface VersionRow {
  id: number;
  modId: number | null;
  authorId: number | null;
}

interface ReportRow {
  id: number;
  userId: number;
  result: CompatResult;
  weight: number;
  verifiedCreator: boolean;
  trustLevel: number;
}

interface CompatRow {
  gameBuildId: number;
  computedStatus: string;
  authorTested: boolean;
}

/** Runs the aggregate of one version (the `compat.aggregate` job handler). */
export async function aggregateCompat(ctx: Ctx, job: AggregateJob): Promise<AggregateRunResult> {
  const result: AggregateRunResult = { modVersionId: job.modVersionId, builds: 0, changed: [], modChanged: false };
  const version = await queryOne<VersionRow>(
    ctx.db,
    sql`SELECT v."id", v."modId", m."userId" AS "authorId"
          FROM "ModVersion" v LEFT JOIN "Mod" m ON m."id" = v."modId"
         WHERE v."id" = ${job.modVersionId}`,
  );
  if (!version) return result;

  await withTx(ctx.db, async (tx) => {
    result.changed = [];
    result.builds = 0;
    await tx.execute(versionLock(version.id));
    const builds = await loadBuildFacts(tx);
    const buildById = new Map(builds.map((b) => [b.id, b]));

    const existing = await query<CompatRow>(
      tx,
      sql`SELECT "gameBuildId", "computedStatus", "authorTested" FROM "ModVersionCompat"
           WHERE "modVersionId" = ${version.id}`,
    );
    const existingByBuild = new Map(existing.map((r) => [r.gameBuildId, r]));

    let buildIds: number[];
    if (job.gameBuildId !== undefined) {
      buildIds = [job.gameBuildId];
    } else {
      const reported = await query<{ gameBuildId: number }>(
        tx,
        sql`SELECT DISTINCT "gameBuildId" FROM "CompatReport" WHERE "modVersionId" = ${version.id}`,
      );
      buildIds = [...new Set([...existing.map((r) => r.gameBuildId), ...reported.map((r) => r.gameBuildId)])];
    }

    for (const gameBuildId of buildIds) {
      const build = buildById.get(gameBuildId);
      if (!build) continue;
      result.builds += 1;
      const reports = await query<ReportRow>(
        tx,
        sql`SELECT r."id", r."userId", r."result", r."weight", u."verifiedCreator", u."trustLevel"
              FROM "CompatReport" r JOIN "User" u ON u."id" = r."userId"
             WHERE r."modVersionId" = ${version.id} AND r."gameBuildId" = ${gameBuildId}
               AND r."status" = 'visible' AND u."deletedAt" IS NULL AND u."bannedAt" IS NULL`,
      );
      const weighted: AggregateReport[] = [];
      const reweigh = new Map<number, number[]>();
      for (const r of reports) {
        const weight = reporterWeight({
          isModAuthor: version.authorId !== null && r.userId === version.authorId,
          verifiedCreator: r.verifiedCreator === true,
          trustLevel: Number(r.trustLevel) || 0,
        });
        weighted.push({ userId: r.userId, result: r.result, weight });
        if (Math.abs(Number(r.weight) - weight) > 1e-6) reweigh.set(weight, [...(reweigh.get(weight) ?? []), r.id]);
      }
      for (const [weight, ids] of reweigh) {
        await tx.execute(
          sql`UPDATE "CompatReport" SET "weight" = ${weight}
               WHERE "id" = ANY(${`{${ids.join(',')}}`}::bigint[])`,
        );
      }

      const before = existingByBuild.get(gameBuildId);
      const authorTested = before?.authorTested === true;
      if (!before && weighted.length === 0) continue;
      const agg = aggregateReports({ reports: weighted, authorTested, authorId: version.authorId });
      const now = ctx.clock.now();
      await tx.execute(
        sql`INSERT INTO "ModVersionCompat"
              ("modVersionId", "gameBuildId", "works", "partial", "broken", "weightedScore", "authorTested",
               "computedStatus", "updatedAt")
            VALUES (${version.id}, ${gameBuildId}, ${agg.works}, ${agg.partial}, ${agg.broken}, ${agg.weightedScore},
                    ${authorTested}, ${agg.status}, ${at(now)})
            ON CONFLICT ("modVersionId", "gameBuildId") DO UPDATE SET
              "works" = EXCLUDED."works", "partial" = EXCLUDED."partial", "broken" = EXCLUDED."broken",
              "weightedScore" = EXCLUDED."weightedScore", "computedStatus" = EXCLUDED."computedStatus",
              "updatedAt" = EXCLUDED."updatedAt"`,
      );

      const from = statusOf(before?.computedStatus);
      const to = agg.status;
      if (from === to || (from === null && to === 'untested')) continue;
      result.changed.push({ gameBuildId, from, to });
      if (version.modId !== null && version.authorId !== null) {
        await ctx.jobs.emitNew(
          tx,
          'compat.aggregate_changed',
          {
            modId: version.modId,
            modAuthorId: version.authorId,
            modVersionId: version.id,
            gameBuildId,
            isCurrentBuild: build.isCurrent,
            from,
            to,
          },
          { actorId: null },
        );
      } else if (version.modId !== null) {
        // Orphaned mod: nobody to notify, but its pages still show the aggregate.
        await purge(ctx.jobs, [cacheTag.mod(version.modId), 'compat'], 'compat aggregate changed', { tx });
      }
    }

    if (version.modId !== null) {
      const changedMods = await refreshModsCompat(tx, ctx.clock.now(), [version.modId]);
      result.modChanged = changedMods.length > 0;
      if (result.modChanged && result.changed.length === 0) {
        await purge(ctx.jobs, modTags(changedMods), 'compat status changed', { tx });
      }
    }
  });
  return result;
}

// -----------------------------------------------------------------------------------------------
// Mod-level status
// -----------------------------------------------------------------------------------------------

interface ModCompatRow {
  modId: number;
  type: string | null;
  compatStatus: string | null;
  possiblyOutdated: boolean;
  versionId: number | null;
  releasedAt: Date | string | null;
  currentStatus: string | null;
  positiveDates: string[] | null;
}

/** Tags to purge when mods change their compat status (cards, listings, landing, Patch Radar). */
export function modTags(modIds: readonly number[]): string[] {
  return [...modIds.slice(0, 50).map((id) => cacheTag.mod(id)), 'compat', 'list:mods', 'home'];
}

/**
 * Recomputes `Mod.compatStatus` and `Mod.possiblyOutdated` of the given mods (`'all'`: every mod)
 * and writes the ones that changed. Returns the ids of the changed mods.
 */
export async function refreshModsCompat(tx: Executor, now: Date, modIds: readonly number[] | 'all'): Promise<number[]> {
  if (modIds !== 'all' && modIds.length === 0) return [];
  const builds = await loadBuildFacts(tx);
  const current = builds.find((b) => b.isCurrent) ?? null;
  const breaking: BuildFacts | null = latestBreakingBuild(builds);
  const filter = modIds === 'all' ? sql`TRUE` : sql`m."id" = ANY(${intArray(modIds)})`;

  const list = await query<ModCompatRow>(
    tx,
    sql`WITH latest AS (
          SELECT DISTINCT ON (v."modId") v."modId", v."id", COALESCE(v."publishedAt", v."createdAt") AS "releasedAt"
            FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
           WHERE ${filter} AND ${REPORTABLE_VERSION_SQL}
           ORDER BY v."modId", v."isLatest" DESC, COALESCE(v."publishedAt", v."createdAt") DESC, v."id" DESC
        )
        SELECT m."id" AS "modId", m."type", m."compatStatus", m."possiblyOutdated",
               l."id" AS "versionId", l."releasedAt",
               (SELECT c."computedStatus" FROM "ModVersionCompat" c
                 WHERE c."modVersionId" = l."id" AND c."gameBuildId" = ${current?.id ?? 0}) AS "currentStatus",
               ARRAY(
                 SELECT DISTINCT g."releasedAt"::text FROM "GameBuild" g
                  WHERE EXISTS (SELECT 1 FROM "ModVersionCompat" c
                                 WHERE c."modVersionId" = l."id" AND c."gameBuildId" = g."id" AND c."authorTested")
                     OR EXISTS (SELECT 1 FROM "CompatReport" r
                                 WHERE r."modVersionId" = l."id" AND r."gameBuildId" = g."id"
                                   AND r."result" = 'works' AND r."status" = 'visible')
               ) AS "positiveDates"
          FROM "Mod" m LEFT JOIN latest l ON l."modId" = m."id"
         WHERE ${filter}`,
  );

  const changed: number[] = [];
  for (const r of list) {
    const compatStatus: CompatStatus =
      current && r.versionId !== null ? (statusOf(r.currentStatus) ?? 'untested') : 'untested';
    // BuildShare builds are save blueprints, not code: a game patch does not outdate them.
    const possiblyOutdated =
      r.type === 'Build'
        ? false
        : isPossiblyOutdated({
            latestReleasedAt: toDate(r.releasedAt),
            breaking,
            positiveBuildDates: r.positiveDates ?? [],
          });
    if (r.compatStatus === compatStatus && r.possiblyOutdated === possiblyOutdated) continue;
    await tx.execute(
      sql`UPDATE "Mod" SET "compatStatus" = ${compatStatus}, "possiblyOutdated" = ${possiblyOutdated},
                 "compatUpdatedAt" = (${at(now)} AT TIME ZONE 'UTC')
           WHERE "id" = ${r.modId}`,
    );
    changed.push(r.modId);
  }
  return changed;
}

/** Refreshes one mod's status (after a version or status change) and purges its pages if needed. */
export async function refreshModCompat(ctx: Ctx, modId: number): Promise<boolean> {
  return withTx(ctx.db, async (tx) => {
    const changed = await refreshModsCompat(tx, ctx.clock.now(), [modId]);
    if (changed.length > 0) await purge(ctx.jobs, modTags(changed), 'compat status changed', { tx });
    return changed.length > 0;
  });
}

// -----------------------------------------------------------------------------------------------
// Author "tested on build X" (publishing, WP-40)
// -----------------------------------------------------------------------------------------------

/**
 * Records the author's "tested on these builds" declaration of a version (publishing flow) and
 * schedules the aggregates. Unknown build ids are ignored; builds no longer listed lose the flag.
 * Call it inside the publishing transaction (`tx`).
 */
export async function setAuthorTestedBuilds(
  tx: Executor,
  jobs: Jobs,
  modVersionId: number,
  gameBuildIds: readonly number[],
): Promise<number[]> {
  const known = await query<{ id: number }>(
    tx,
    sql`SELECT "id" FROM "GameBuild" WHERE "id" = ANY(${intArray(gameBuildIds)})`,
  );
  const ids = known.map((r) => r.id);
  const cleared = await query<{ gameBuildId: number }>(
    tx,
    sql`UPDATE "ModVersionCompat" SET "authorTested" = false
         WHERE "modVersionId" = ${modVersionId} AND "authorTested"
           AND NOT ("gameBuildId" = ANY(${intArray(ids)}))
        RETURNING "gameBuildId"`,
  );
  for (const id of ids) {
    await tx.execute(
      sql`INSERT INTO "ModVersionCompat" ("modVersionId", "gameBuildId", "authorTested")
          VALUES (${modVersionId}, ${id}, true)
          ON CONFLICT ("modVersionId", "gameBuildId") DO UPDATE SET "authorTested" = true`,
    );
  }
  for (const gameBuildId of new Set([...ids, ...cleared.map((r) => r.gameBuildId)])) {
    await jobs.enqueue('compat.aggregate', { modVersionId, gameBuildId }, { tx });
  }
  return ids;
}
