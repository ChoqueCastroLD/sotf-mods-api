/**
 * Gamification job group (WP-60, PLAN §7.2, §2.9):
 *
 * - `gamification.xp` (domain events): the XP rules with their daily caps, revocations and
 *   restorations, onboarding steps and the badge evaluation of every user touched
 *   (`consumeGamificationEvent`; idempotent, so a retried event changes nothing).
 * - `gamification.evaluate`: nightly reconciliation at 03:30 UTC (`{ nightly: true }`: catalog sync,
 *   consensus XP after 72 h, kit followers, patch-day releases, pending onboardings, every badge,
 *   creator tiers and ranks) or one user (`{ userId }`).
 * - `milestones.check` (hourly at :45): download milestones (retroactive `reachedAt`, one
 *   celebration per mod) and creator tiers.
 * - `awards.mod-of-week` (Mondays 00:05 UTC): the Mod of the Week of the week that starts
 *   (`{ weekStart }` re-runs a given Monday; an existing award is never replaced).
 *
 * B16 (`runB16` in `@sotf/core/gamification`) is dispatched by the `backfill.run` job group.
 */
import {
  consumeGamificationEvent,
  GAMIFICATION_EVENT_TYPES,
  runGamificationEvaluate,
  runMilestonesCheck,
  runModOfWeek,
} from '@sotf/core/gamification/index';
import { defineJob, defineJobGroup, onEvent } from '../../define-job.ts';

export default defineJobGroup({
  name: 'gamification',
  jobs: [
    defineJob({
      queue: 'gamification.evaluate',
      handler: async (data, { ctx }) => {
        const result = await runGamificationEvaluate(ctx, data);
        ctx.log.info({ eventId: data.eventId, ...result }, 'gamification evaluated');
        return result;
      },
    }),
    defineJob({
      queue: 'milestones.check',
      handler: async (data, { ctx }) => {
        const result = await runMilestonesCheck(ctx, data.modId);
        ctx.log.info(result, 'milestones checked');
        return result;
      },
    }),
    defineJob({
      queue: 'awards.mod-of-week',
      handler: async (data, { ctx }) => {
        const result = await runModOfWeek(ctx, data.weekStart);
        ctx.log.info(result, 'mod of the week');
        return result;
      },
    }),
  ],
  subscribers: [
    onEvent({
      name: 'gamification.xp',
      types: GAMIFICATION_EVENT_TYPES,
      handler: async (event, { ctx }) => {
        const result = await consumeGamificationEvent(ctx, event);
        if (result.users.length > 0) ctx.log.debug({ type: event.type, users: result.users }, 'gamification event');
      },
    }),
  ],
});
