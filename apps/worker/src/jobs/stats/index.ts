/**
 * Statistics job group (WP-52, PLAN §2.9 "Estadísticas", §6.4, §7.2):
 *
 * - `stats.rollup` (hourly at :05, singleton): `ModStatsDaily` of the previous hour's day and of
 *   today, then `ModStats`, `UserStats` and `SiteStat`, recomputed from the raw rows in one
 *   transaction (idempotent). `{ hour }` re-runs a given hour's day (e.g. after a backfill).
 * - `stats.trending` (hourly at :15, singleton): `Mod.trendingScore`.
 * - `stats.unfollows` (domain event `follow.mod_deleted`): records a `mod_unfollow` analytics event
 *   so the rollup can report unfollows per day (idempotent on the event id).
 */
import { recordServerEvent, SERVER_EVENT_KINDS } from '@sotf/core/analytics/index';
import { runStatsRollup } from '@sotf/core/stats/index';
import { runTrending } from '@sotf/core/trending/index';
import { defineJob, defineJobGroup, onEvent } from '../../define-job.ts';

export default defineJobGroup({
  name: 'stats',
  jobs: [
    defineJob({
      queue: 'stats.rollup',
      handler: async (data, { ctx }) => {
        const result = await runStatsRollup(ctx, data.hour ? new Date(data.hour) : undefined);
        ctx.log.info(result, 'stats rolled up');
        return result;
      },
    }),
    defineJob({
      queue: 'stats.trending',
      handler: async (_data, { ctx }) => {
        const result = await runTrending(ctx);
        ctx.log.info(result, 'trending scores recomputed');
        return result;
      },
    }),
  ],
  subscribers: [
    onEvent({
      name: 'stats.unfollows',
      types: ['follow.mod_deleted'],
      handler: async (event, { ctx }) => {
        await recordServerEvent(ctx.db, {
          kind: SERVER_EVENT_KINDS.modUnfollow,
          at: new Date(event.occurredAt),
          entityType: 'mod',
          entityId: event.payload.modId,
          dedupeKey: event.id,
        });
      },
    }),
  ],
});
