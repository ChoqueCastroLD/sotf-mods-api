/**
 * Mod knowledge job group (T1-12):
 *
 * - `cleanup.coauthor-invites` (daily 04:55 UTC): deletes co-author invitations left pending for
 *   more than `INVITE_TTL_DAYS`. Idempotent.
 */
import { cleanupStaleInvites, INVITE_TTL_DAYS } from '@sotf/core/mod-knowledge/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export default defineJobGroup({
  name: 'mod-knowledge',
  jobs: [
    defineJob({
      queue: 'cleanup.coauthor-invites',
      handler: async (_data, { ctx }) => {
        const removed = await cleanupStaleInvites(ctx.db, ctx.clock.now());
        ctx.log.info({ removed, ttlDays: INVITE_TTL_DAYS }, 'stale co-author invitations removed');
        return { removed };
      },
    }),
  ],
});
