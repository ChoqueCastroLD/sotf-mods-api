/**
 * Discovery job group (T1-07 and T1-15).
 *
 * - `recommendations.compute` (nightly 02:30 UTC, `JOB_SCHEDULES`): recomputes "players also
 *   downloaded" (co-downloads over the last 180 days) and "similar mods" (tags, category and
 *   co-downloads) into "ModRecommendation". The table is replaced in one transaction, so a failed
 *   run keeps the previous result; a retry recomputes from scratch.
 * - `cleanup.scout` (daily 04:55 UTC): deletes cached Scout answers older than 7 days.
 */
import { cleanupScout, computeRecommendations, SCOUT_RETENTION_DAYS } from '@sotf/core/discovery/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export default defineJobGroup({
  name: 'discovery',
  jobs: [
    defineJob({
      queue: 'recommendations.compute',
      handler: async (_data, { ctx }) => {
        const result = await computeRecommendations(ctx.db);
        ctx.log.info(result, 'recommendations computed');
        return result;
      },
    }),
    defineJob({
      queue: 'cleanup.scout',
      handler: async (_data, { ctx }) => {
        const deleted = await cleanupScout(ctx.db, ctx.clock.now(), SCOUT_RETENTION_DAYS);
        ctx.log.info({ deleted, retentionDays: SCOUT_RETENTION_DAYS }, 'scout answers cleaned up');
        return { deleted };
      },
    }),
  ],
});
