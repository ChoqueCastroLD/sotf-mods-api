/**
 * Notifications job group (WP-43, PLAN §7.3, §5.3):
 *
 * - `notifications.signals`: every domain event is planned into signals (`planForEvent`) and
 *   written with preferences, grouping and deduplication (`applyNotificationPlan`); in-app signals
 *   reach the browser through the SSE hub (`NOTIFY events` on commit) and instant emails schedule
 *   their flush. Idempotent across event retries (dedupe keys derived from the event id).
 * - `realtime.mod-updated`: `mod.updated` notice to the owner's channel when a mod, its versions or
 *   its compatibility change (Basecamp refreshes).
 */
import { applyNotificationPlan, planForEvent } from '@sotf/core/notifications/index';
import { modUpdatedNoticeFor, publishModUpdated } from '@sotf/core/realtime/index';
import { defineJobGroup, type JobGroup, onEvent } from '../../define-job.ts';

export function createNotificationJobs(): JobGroup {
  return defineJobGroup({
    name: 'notifications',
    subscribers: [
      onEvent({
        name: 'notifications.signals',
        types: '*',
        handler: async (event, { ctx }) => {
          const plan = await planForEvent(ctx.db, event);
          if (plan.drafts.length === 0 && plan.retractions.length === 0 && !plan.broadcast) return;
          const result = await applyNotificationPlan(
            { db: ctx.db, jobs: ctx.jobs, clock: ctx.clock, log: ctx.log },
            plan,
            event.id,
          );
          ctx.log.info({ eventId: event.id, type: event.type, ...result }, 'signals written');
        },
      }),
      onEvent({
        name: 'realtime.mod-updated',
        types: '*',
        handler: async (event, { ctx }) => {
          const notice = modUpdatedNoticeFor(event);
          if (notice) await publishModUpdated(ctx.db, { ...notice, eventId: event.id });
        },
      }),
    ],
  });
}

export default createNotificationJobs();
