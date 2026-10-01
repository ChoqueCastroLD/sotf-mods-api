/**
 * Shared logs job group: `cleanup.logs` (hourly, `JOB_SCHEDULES`) hard-deletes the payload of the
 * logs that expired (24 h) or were hidden by reports and removes tombstones older than 30 days.
 * Idempotent: a retry only finds what is still due.
 */
import { purgeLogs } from '@sotf/core/logs/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export default defineJobGroup({
  name: 'logs',
  jobs: [
    defineJob({
      queue: 'cleanup.logs',
      handler: async (_data, { ctx }) => {
        const result = await purgeLogs(ctx);
        ctx.log.info(result, 'shared logs purged');
        return result;
      },
    }),
  ],
});
