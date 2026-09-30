/**
 * KelvinSeek job group (WP-32, PLAN §5.5 and §9.3).
 *
 * - `cleanup.kelvinseek` (daily 04:50 UTC, `JOB_SCHEDULES`): deletes the hashed KelvinSeek messages
 *   whose last update is older than 30 days. Legacy rows that were never hashed are kept until the
 *   contract phase decides (PLAN §6.8). Idempotent: a retry deletes what is still older than the
 *   cutoff.
 */
import { cleanupKelvinSeek, KELVINSEEK_RETENTION_DAYS } from '@sotf/core/kelvinseek/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export default defineJobGroup({
  name: 'kelvinseek',
  jobs: [
    defineJob({
      queue: 'cleanup.kelvinseek',
      handler: async (_data, { ctx }) => {
        const deleted = await cleanupKelvinSeek(ctx.db, ctx.clock.now(), KELVINSEEK_RETENTION_DAYS);
        ctx.log.info({ deleted, retentionDays: KELVINSEEK_RETENTION_DAYS }, 'kelvinseek messages cleaned up');
        return { deleted };
      },
    }),
  ],
});
