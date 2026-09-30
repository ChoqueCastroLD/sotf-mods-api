/**
 * Discord job group (WP-43, PLAN §7.1 T0-31, §2.9 `discord.announce`):
 *
 * - `discord.enqueue-on-event`: new mods, new versions, Mod of the Week and milestones ≥ 10 k
 *   become `discord.announce` jobs (job id derived from the event, so a retried event does not
 *   announce twice);
 * - `discord.announce`: posts the embed to every subscribed webhook of
 *   `SiteSetting.discordWebhooks`, records each delivery in "AuditLog" and retries (with the
 *   queue's backoff) only the webhooks that failed with 429/5xx.
 */
import { announcementKey, announceOnDiscord, discordJobsForEvent } from '@sotf/core/discord/index';
import { deterministicUuid } from '@sotf/core/notifications/index';
import { defineJob, defineJobGroup, type JobGroup, onEvent } from '../../define-job.ts';
import { lazyOptions, type NotificationOptionsSource } from '../notifications/options.ts';

export function createDiscordJobs(source?: NotificationOptionsSource): JobGroup {
  const options = lazyOptions(source);
  return defineJobGroup({
    name: 'discord',
    subscribers: [
      onEvent({
        name: 'discord.enqueue-on-event',
        types: ['mod.published', 'version.published', 'award.created', 'milestone.reached'],
        handler: async (event, { ctx }) => {
          for (const job of discordJobsForEvent(event)) {
            await ctx.jobs.enqueue('discord.announce', job, {
              id: deterministicUuid(`discord.announce:${announcementKey(job)}`),
            });
          }
        },
      }),
    ],
    jobs: [
      defineJob({
        queue: 'discord.announce',
        handler: async (data, { ctx, services }) => {
          const opts = options(services);
          const result = await announceOnDiscord(
            {
              db: ctx.db,
              log: ctx.log,
              siteUrl: opts.siteUrl,
              mediaBaseUrl: opts.mediaBaseUrl,
              now: () => ctx.clock.now(),
              ...(opts.fetch ? { fetch: opts.fetch } : {}),
            },
            data,
          );
          ctx.log.info({ key: announcementKey(data), ...result }, 'discord announcement');
          return result;
        },
      }),
    ],
  });
}

export default createDiscordJobs();
