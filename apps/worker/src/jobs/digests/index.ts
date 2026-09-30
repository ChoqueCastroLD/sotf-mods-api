/**
 * Digest job group (WP-43, PLAN §2.9, §7.3):
 *
 * - `notifications.digest {frequency}`: `10m` (every 10 minutes and the 30-second instant flush)
 *   mails pending instant signals, retries notification emails waiting in the outbox and, after
 *   the cut-over (`LEGACY_COEXIST=false`), triggers the legacy mention drain; `daily` and `weekly`
 *   send the digests.
 * - `creator.weekly {userId?}`: without a user, fans out one job per creator (deterministic job id
 *   per creator and week, so a re-run never mails twice); with a user, sends that report.
 */
import {
  cadenceOfRun,
  deterministicUuid,
  previousWeekStart,
  retryPendingNotificationEmails,
  sendCreatorWeeklyReport,
  sendSignalEmails,
  weeklyReportRecipients,
} from '@sotf/core/notifications/index';
import { defineJob, defineJobGroup, type JobGroup } from '../../define-job.ts';
import { lazyOptions, mailerFor, type NotificationOptionsSource } from '../notifications/options.ts';

/** Width of the window of the legacy mention trigger (one drain job per window). */
const LEGACY_DRAIN_WINDOW_MS = 10 * 60_000;

export function createDigestJobs(source?: NotificationOptionsSource): JobGroup {
  const options = lazyOptions(source);
  return defineJobGroup({
    name: 'digests',
    jobs: [
      defineJob({
        queue: 'notifications.digest',
        handler: async (data, context) => {
          const opts = options(context.services);
          const mailer = mailerFor(opts, context);
          const cadence = cadenceOfRun(data.frequency);
          const result = await sendSignalEmails(mailer, cadence);
          let retried: Record<string, number> | null = null;
          if (data.frequency === '10m') {
            retried = await retryPendingNotificationEmails(mailer);
            if (!opts.legacyCoexist) {
              const now = context.ctx.clock.now().getTime();
              await context.ctx.jobs.enqueue(
                'legacy.mentions',
                {},
                { id: deterministicUuid(`legacy.mentions:${Math.floor(now / LEGACY_DRAIN_WINDOW_MS)}`) },
              );
            }
          }
          context.ctx.log.info({ cadence, ...result, retried }, 'signal emails sent');
          return { cadence, ...result, retried };
        },
      }),
      defineJob({
        queue: 'creator.weekly',
        handler: async (data, context) => {
          const weekStart = previousWeekStart(context.ctx.clock.now());
          if (data.userId === undefined) {
            const creators = await weeklyReportRecipients(context.ctx.db);
            for (const userId of creators) {
              await context.ctx.jobs.enqueue(
                'creator.weekly',
                { userId },
                { id: deterministicUuid(`creator.weekly:${userId}:${weekStart}`) },
              );
            }
            return { fanOut: creators.length, weekStart };
          }
          const outcome = await sendCreatorWeeklyReport(
            mailerFor(options(context.services), context),
            data.userId,
            weekStart,
          );
          if (outcome === 'retry') throw new Error(`creator report of ${data.userId} will be retried`);
          return { userId: data.userId, weekStart, outcome };
        },
      }),
    ],
  });
}

export default createDigestJobs();
