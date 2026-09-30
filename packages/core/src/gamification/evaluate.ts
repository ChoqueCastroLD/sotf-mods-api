/**
 * Evaluation passes (`gamification.evaluate`, PLAN §2.9, §7.2):
 *
 * - `evaluateUsers` (inside a transaction): badges of the given users (award the missing ones,
 *   reconcile the state badges), creator tier and survivor rank. Called by the event consumers
 *   after every change, and by the job with `{ userId }`.
 * - `runNightlyEvaluation` (03:30 UTC): the reconciliation of everything that has no event or is
 *   time-based: badge catalog sync, Field reports matching the consensus after 72 h (+5 XP),
 *   every 10 followers of a kit (+10 XP), patch-day releases, pending onboarding completions,
 *   every badge of every user, creator tiers and `User.xp`/ranks. Idempotent; safe to re-run.
 */
import type { Executor } from '@sotf/db';
import { withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { query, toDate } from '../follows/sql.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { awardBadges, type BadgeCandidate, badgeCandidates, launchCutoff, reconcileBadges } from './badges.ts';
import { syncBadgeCatalog } from './catalog.ts';
import { completePendingOnboardings } from './onboarding.ts';
import { refreshCreatorTiers } from './tiers.ts';
import { grantXp, refreshAllXp } from './xp.ts';

/** Field reports are compared with the consensus once they are this old. */
export const CONSENSUS_DELAY_HOURS = 72;
/** Nightly look-back for consensus checks (older reports were settled by earlier runs or B16). */
export const CONSENSUS_LOOKBACK_DAYS = 30;
/** Days after a breaking build in which a compatible release earns `patch_day_release`. */
export const PATCH_DAY_XP_DAYS = 14;
/** Followers per `kit_followers_10` grant. */
export const KIT_FOLLOWERS_STEP = 10;

export interface EvaluateResult {
  users: number;
  badgesAwarded: number;
  badgesRemoved: number;
  tiersChanged: number;
}

/**
 * Badges, tier and rank of some users, inside `tx`. `silent` = retroactive (no signals); by default
 * everything is silent until B16 has run, so nothing is announced one by one before the launch.
 */
export async function evaluateUsers(
  tx: Executor,
  ctx: Ctx,
  userIds: Iterable<number>,
  options: { silent?: boolean } = {},
): Promise<EvaluateResult> {
  const ids = [...new Set([...userIds].filter((id) => Number.isSafeInteger(id) && id > 0))];
  const result: EvaluateResult = { users: ids.length, badgesAwarded: 0, badgesRemoved: 0, tiersChanged: 0 };
  if (ids.length === 0) return result;
  const cutoff = await launchCutoff(tx);
  const now = ctx.clock.now();
  const touched = new Set<number>();
  for (const userId of ids) {
    const candidates = await badgeCandidates(tx, { userId, launchCutoff: cutoff });
    const awarded = await awardBadges(tx, candidates, {
      jobs: ctx.jobs,
      now,
      silent: options.silent ?? cutoff === null,
    });
    const removed = await reconcileBadges(tx, candidates, userId);
    result.badgesAwarded += awarded.length;
    result.badgesRemoved += removed.length;
    for (const id of removed) touched.add(id);
    const tiers = await refreshCreatorTiers(tx, userId);
    result.tiersChanged += tiers.length;
    for (const id of tiers) touched.add(id);
  }
  if (touched.size > 0) {
    await purge(
      ctx.jobs,
      [...touched].map((id) => `user:${id}`),
      'gamification.evaluate',
      { tx },
    );
  }
  return result;
}

/** Standalone evaluation of one user (job `gamification.evaluate {userId}`). */
export async function evaluateUser(ctx: Ctx, userId: number): Promise<EvaluateResult> {
  return withTx(ctx.db, (tx) => evaluateUsers(tx, ctx, [userId]));
}

// -----------------------------------------------------------------------------------------------
// Time-based XP rules
// -----------------------------------------------------------------------------------------------

/**
 * +5 XP for each Field report that, 72 h later, matches the consensus of its version on its build
 * (`works`→works, `partial`→mixed, `broken`→broken). Reports on your own mods do not count.
 * `lookbackDays = null` scans the whole history (B16).
 */
export async function grantConsensusXp(tx: Executor, now: Date, lookbackDays: number | null): Promise<number> {
  const settled = new Date(now.getTime() - CONSENSUS_DELAY_HOURS * 3_600_000);
  const from = lookbackDays === null ? null : new Date(settled.getTime() - lookbackDays * 86_400_000);
  const rows = await query<{ id: number; userId: number; createdAt: Date | string }>(
    tx,
    sql`
      SELECT r."id", r."userId", r."createdAt"
        FROM "CompatReport" r
        JOIN "ModVersionCompat" c ON c."modVersionId" = r."modVersionId" AND c."gameBuildId" = r."gameBuildId"
        JOIN "ModVersion" v ON v."id" = r."modVersionId"
        JOIN "Mod" m ON m."id" = v."modId"
       WHERE r."status" = 'visible' AND r."createdAt" <= ${settled.toISOString()}::timestamptz
         ${from ? sql`AND r."createdAt" > ${from.toISOString()}::timestamptz` : sql``}
         AND r."userId" IS DISTINCT FROM m."userId"
         AND c."computedStatus" = CASE r."result" WHEN 'works' THEN 'works' WHEN 'partial' THEN 'mixed' ELSE 'broken' END
         AND NOT EXISTS (
           SELECT 1 FROM "XpEvent" e
            WHERE e."userId" = r."userId" AND e."kind" = 'compat_report_consensus'
              AND e."refType" = 'compat_report' AND e."refId" = r."id"::text)
       ORDER BY r."id"`,
  );
  let granted = 0;
  for (const r of rows) {
    const outcome = await grantXp(tx, {
      userId: Number(r.userId),
      kind: 'compat_report_consensus',
      refType: 'compat_report',
      refId: Number(r.id),
      at: new Date((toDate(r.createdAt) ?? settled).getTime() + CONSENSUS_DELAY_HOURS * 3_600_000),
    });
    if (outcome === 'granted') granted += 1;
  }
  return granted;
}

/** +10 XP to the owner for every 10 followers a public kit reaches (all kits, or one). */
export async function grantKitFollowerXp(tx: Executor, now: Date, kitId?: number): Promise<number> {
  const rows = await query<{ id: number; ownerId: number; followersCount: number }>(
    tx,
    sql`SELECT k."id", k."ownerId", k."followersCount" FROM "Kit" k
         WHERE k."deletedAt" IS NULL AND k."visibility" = 'public' AND k."followersCount" >= ${KIT_FOLLOWERS_STEP}
           ${kitId === undefined ? sql`` : sql`AND k."id" = ${kitId}`}`,
  );
  let granted = 0;
  for (const kit of rows) {
    const steps = Math.floor(Number(kit.followersCount) / KIT_FOLLOWERS_STEP);
    for (let step = 1; step <= steps; step += 1) {
      const outcome = await grantXp(tx, {
        userId: Number(kit.ownerId),
        kind: 'kit_followers_10',
        refType: 'kit',
        refId: `${kit.id}:${step * KIT_FOLLOWERS_STEP}`,
        at: now,
      });
      if (outcome === 'granted') granted += 1;
    }
  }
  return granted;
}

/**
 * +30 XP to a creator (once per breaking build) for a version of one of their mods that works on a
 * breaking build and was published within 14 days after it. `gameBuildId`/`modVersionId` narrow
 * the scan (event consumer); without them every breaking build is checked.
 */
export async function grantPatchDayXp(
  tx: Executor,
  now: Date,
  filter: { gameBuildId?: number; modVersionId?: number } = {},
): Promise<number> {
  const rows = await query<{ userId: number; gameBuildId: number; publishedAt: Date | string }>(
    tx,
    sql`
      SELECT DISTINCT ON (m."userId", g."id") m."userId", g."id" AS "gameBuildId",
             coalesce(v."publishedAt", v."createdAt") AS "publishedAt"
        FROM "GameBuild" g
        JOIN "ModVersionCompat" c ON c."gameBuildId" = g."id" AND c."computedStatus" = 'works'
        JOIN "ModVersion" v ON v."id" = c."modVersionId" AND v."status" = 'active'
        JOIN "Mod" m ON m."id" = v."modId" AND m."userId" IS NOT NULL AND m."status" IN ('published', 'unlisted', 'archived')
       WHERE g."isBreaking"
         AND (coalesce(v."publishedAt", v."createdAt")::date - g."releasedAt") BETWEEN 0 AND ${PATCH_DAY_XP_DAYS}::int
         ${filter.gameBuildId === undefined ? sql`` : sql`AND g."id" = ${filter.gameBuildId}`}
         ${filter.modVersionId === undefined ? sql`` : sql`AND v."id" = ${filter.modVersionId}`}
       ORDER BY m."userId", g."id", coalesce(v."publishedAt", v."createdAt")`,
  );
  let granted = 0;
  for (const r of rows) {
    const outcome = await grantXp(tx, {
      userId: Number(r.userId),
      kind: 'patch_day_release',
      refType: 'game_build',
      refId: Number(r.gameBuildId),
      at: toDate(r.publishedAt) ?? now,
    });
    if (outcome === 'granted') granted += 1;
  }
  return granted;
}

// -----------------------------------------------------------------------------------------------
// Set-based badge pass (nightly and B16)
// -----------------------------------------------------------------------------------------------

/** Every badge of every user: award the missing ones, reconcile the state badges. */
export async function evaluateAllBadges(
  tx: Executor,
  ctx: Ctx,
  options: { silent: boolean; launchCutoff: Date | null },
): Promise<{ awarded: number; removed: number; candidates: BadgeCandidate[] }> {
  const candidates = await badgeCandidates(tx, { launchCutoff: options.launchCutoff });
  let awarded = 0;
  const chunk = 2000;
  for (let i = 0; i < candidates.length; i += chunk) {
    const batch = candidates.slice(i, i + chunk);
    awarded += (await awardBadges(tx, batch, { jobs: ctx.jobs, now: ctx.clock.now(), silent: options.silent })).length;
  }
  const removed = await reconcileBadges(tx, candidates);
  if (removed.length > 0) {
    await purge(
      ctx.jobs,
      removed.map((id) => `user:${id}`),
      'gamification.reconcile',
      { tx },
    );
  }
  return { awarded, removed: removed.length, candidates };
}

export interface NightlyResult {
  catalog: { upserted: number; retired: number };
  consensusXp: number;
  kitFollowerXp: number;
  patchDayXp: number;
  onboardingCompleted: number;
  badgesAwarded: number;
  badgesRemoved: number;
  tiersChanged: number;
  xpRowsChanged: number;
}

/** The nightly reconciliation (`gamification.evaluate {nightly: true}`). */
export async function runNightlyEvaluation(ctx: Ctx): Promise<NightlyResult> {
  const now = ctx.clock.now();
  const catalog = await withTx(ctx.db, (tx) => syncBadgeCatalog(tx));
  const xp = await withTx(ctx.db, async (tx) => ({
    consensusXp: await grantConsensusXp(tx, now, CONSENSUS_LOOKBACK_DAYS),
    kitFollowerXp: await grantKitFollowerXp(tx, now),
    patchDayXp: await grantPatchDayXp(tx, now),
  }));
  const onboardingCompleted = await completePendingOnboardings(ctx);
  const badges = await withTx(ctx.db, async (tx) => {
    const cutoff = await launchCutoff(tx);
    return evaluateAllBadges(tx, ctx, { silent: cutoff === null, launchCutoff: cutoff });
  });
  const tiers = await withTx(ctx.db, async (tx) => {
    const changed = await refreshCreatorTiers(tx);
    if (changed.length > 0) {
      await purge(
        ctx.jobs,
        changed.map((id) => `user:${id}`),
        'gamification.tiers',
        { tx },
      );
    }
    return changed.length;
  });
  const xpRowsChanged = await withTx(ctx.db, (tx) => refreshAllXp(tx));
  return {
    catalog,
    ...xp,
    onboardingCompleted,
    badgesAwarded: badges.awarded,
    badgesRemoved: badges.removed,
    tiersChanged: tiers,
    xpRowsChanged,
  };
}
