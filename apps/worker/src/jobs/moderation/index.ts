/**
 * Moderation job group (WP-51, PLAN §7.4, §5.3):
 *
 * - `moderation.lane-counts`: publishing, the author's status changes and the comment pipeline
 *   move items in and out of the Ranger Station lanes outside the moderation services (a new
 *   pending mod, an auto-published version entering post-review, a resubmission, a held comment).
 *   After each of those events the lane counts are recomputed and pushed to the rangers'
 *   `moderation` SSE channel (`moderation.queue`), so the tab badges stay live. Idempotent (it only
 *   publishes the current counts).
 */
import type { DomainEventType } from '@sotf/contracts/domain-events';
import type { ModerationLane } from '@sotf/contracts/moderation';
import { publishLaneCounts } from '@sotf/core/moderation/index';
import { defineJobGroup, onEvent } from '../../define-job.ts';

/** Lanes an event can change. */
const LANES_OF: Partial<Record<DomainEventType, readonly ModerationLane[]>> = {
  'mod.published': ['post_review', 'builds'],
  'mod.status_changed': ['new_mods', 'versions', 'post_review', 'builds'],
  'version.published': ['post_review', 'builds'],
  'version.status_changed': ['versions', 'post_review', 'builds', 'new_mods'],
  'scan.completed': ['new_mods', 'versions', 'builds'],
  'comment.created': ['comments'],
  'comment.visibility_changed': ['comments'],
  'comment.deleted': ['comments'],
  'report.created': ['reports'],
  'report.resolved': ['reports'],
};

export default defineJobGroup({
  name: 'moderation',
  subscribers: [
    onEvent({
      name: 'moderation.lane-counts',
      types: Object.keys(LANES_OF) as DomainEventType[],
      handler: async (event, { ctx }) => {
        const lanes = LANES_OF[event.type];
        if (!lanes || lanes.length === 0) return;
        await publishLaneCounts(ctx.db, ctx.clock.now(), lanes);
      },
    }),
  ],
});
