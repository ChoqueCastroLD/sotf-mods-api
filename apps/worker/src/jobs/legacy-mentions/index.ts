/**
 * Legacy mention drain (WP-43, PLAN §6.9 B18): `legacy.mentions` turns the rows of the legacy
 * "PendingMention" queue into signals and deletes them in the same transaction; the emails go out
 * with the instant flush. Only after the cut-over: with `LEGACY_COEXIST=true` the runtime does not
 * consume the queue (POST_CUTOVER_QUEUES) and the handler refuses to run as a second guard, because
 * the legacy cron still mails and deletes those rows.
 */
import { drainLegacyMentions } from '@sotf/core/notifications/index';
import { defineJob, defineJobGroup, type JobGroup } from '../../define-job.ts';
import { lazyOptions, type NotificationOptionsSource } from '../notifications/options.ts';

export function createLegacyMentionJobs(source?: NotificationOptionsSource): JobGroup {
  const options = lazyOptions(source);
  return defineJobGroup({
    name: 'legacy-mentions',
    jobs: [
      defineJob({
        queue: 'legacy.mentions',
        handler: async (_data, { ctx, services }) => {
          if (options(services).legacyCoexist) {
            ctx.log.warn('legacy.mentions skipped: LEGACY_COEXIST=true (the legacy cron owns PendingMention)');
            return { skipped: 'legacy_coexist' };
          }
          const result = await drainLegacyMentions({ db: ctx.db, jobs: ctx.jobs, clock: ctx.clock });
          if (result.rows > 0) ctx.log.info(result, 'legacy mentions drained');
          return result;
        },
      }),
    ],
  });
}

export default createLegacyMentionJobs();
