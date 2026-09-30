/**
 * Job entry points of the gamification queues (registered by `apps/worker/src/jobs/gamification`):
 *
 * - `gamification.evaluate`: `{ nightly: true }` runs the nightly reconciliation; `{ userId }`
 *   re-evaluates one user (badges, tier, rank, onboarding).
 * - `milestones.check` (hourly at :45): new download milestones (all mods, or `{ modId }`) and the
 *   creator tiers, which move with downloads. Before B16 has run everything is recorded silently.
 * - `awards.mod-of-week` (Mondays 00:05 UTC): see `awards.ts`.
 */
import { withTx } from '@sotf/db';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { launchCutoff } from './badges.ts';
import { type EvaluateResult, evaluateUsers, type NightlyResult, runNightlyEvaluation } from './evaluate.ts';
import { checkMilestones } from './milestones.ts';
import { syncOnboarding } from './onboarding.ts';
import { refreshCreatorTiers } from './tiers.ts';
import { refreshUserXp } from './xp.ts';

export type EvaluateJobResult =
  | ({ mode: 'nightly' } & NightlyResult)
  | ({ mode: 'user'; userId: number } & EvaluateResult)
  | { mode: 'noop' };

/** `gamification.evaluate`. */
export async function runGamificationEvaluate(
  ctx: Ctx,
  data: { userId?: number; nightly: boolean },
): Promise<EvaluateJobResult> {
  if (data.nightly) return { mode: 'nightly', ...(await runNightlyEvaluation(ctx)) };
  const userId = data.userId;
  if (userId === undefined) return { mode: 'noop' };
  const result = await withTx(ctx.db, async (tx) => {
    await syncOnboarding(tx, ctx.jobs, userId, ctx.clock.now());
    await refreshUserXp(tx, userId);
    return evaluateUsers(tx, ctx, [userId]);
  });
  return { mode: 'user', userId, ...result };
}

export interface MilestonesJobResult {
  recorded: number;
  announced: number;
  silent: boolean;
  tiersChanged: number;
}

/** `milestones.check`. */
export async function runMilestonesCheck(ctx: Ctx, modId?: number): Promise<MilestonesJobResult> {
  return withTx(ctx.db, async (tx) => {
    const silent = (await launchCutoff(tx)) === null;
    const milestones = await checkMilestones(tx, {
      jobs: ctx.jobs,
      now: ctx.clock.now(),
      silent,
      ...(modId === undefined ? {} : { modId }),
    });
    const tiers = await refreshCreatorTiers(tx);
    const tags = [
      ...tiers.map((id) => `user:${id}`),
      ...(silent ? milestones.milestones.map((m) => `mod:${m.modId}`) : []),
    ];
    if (tags.length > 0) await purge(ctx.jobs, tags, 'milestones.check', { tx });
    return { recorded: milestones.recorded, announced: milestones.announced, silent, tiersChanged: tiers.length };
  });
}
