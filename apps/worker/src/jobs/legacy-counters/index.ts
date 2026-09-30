/**
 * Legacy counters job group (WP-52, PLAN §2.9, §6.8 "Contadores"):
 *
 * - `legacy.counters` (every 30 min, singleton): recomputes `Mod.downloads`, `lastWeekDownloads`,
 *   `favoritesCount` and `commentsCount` with the formulas of the legacy crons, writing only the
 *   rows that change and never `updatedAt`. It only runs after the cut-over: with
 *   `LEGACY_COEXIST=true` the queue is disabled (`POST_CUTOVER_QUEUES`) because the legacy crons
 *   still own these columns.
 */
import { runLegacyCounters } from '@sotf/core/stats/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export default defineJobGroup({
  name: 'legacy-counters',
  jobs: [
    defineJob({
      queue: 'legacy.counters',
      handler: async (_data, { ctx }) => {
        const result = await runLegacyCounters(ctx);
        ctx.log.info(result, 'legacy counters recomputed');
        return result;
      },
    }),
  ],
});
