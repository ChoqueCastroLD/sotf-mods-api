/**
 * Analytics retention job group (WP-52, PLAN §9.3):
 *
 * - `cleanup.analytics` (daily 04:40 UTC): deletes `AnalyticsEvent` rows older than 90 days in
 *   batches (the daily aggregates in `ModStatsDaily` keep the history). Idempotent.
 *
 * The other `cleanup.*` queues live with their domains (sessions: accounts, uploads: uploads,
 * `DownloadUnique`: downloads, KelvinSeek: kelvinseek).
 */
import { ANALYTICS_RETENTION_DAYS, pruneAnalyticsEvents } from '@sotf/core/analytics/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export default defineJobGroup({
  name: 'cleanup',
  jobs: [
    defineJob({
      queue: 'cleanup.analytics',
      handler: async (_data, { ctx }) => {
        const result = await pruneAnalyticsEvents(ctx);
        ctx.log.info({ ...result, retentionDays: ANALYTICS_RETENTION_DAYS }, 'analytics events cleaned up');
        return result;
      },
    }),
  ],
});
