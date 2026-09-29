/**
 * Platform job group (WP-20).
 *
 * - `cdn-purge-on-event`: maps every domain event to its cache tags (PLAN §2.7 event → tags map,
 *   `tagsForEvent`) and enqueues `cdn.purge` (debounced 20 s per tag set). The purge itself (web
 *   LRU, Cloudflare, `NOTIFY cache`) is the `cdn.purge` job of WP-61. Idempotent: a duplicate event
 *   only produces a coalesced duplicate purge.
 */
import { purge, tagsForEvent } from '@sotf/core';
import { defineJobGroup, onEvent } from '../../define-job.ts';

export default defineJobGroup({
  name: 'platform',
  subscribers: [
    onEvent({
      name: 'cdn-purge-on-event',
      types: '*',
      handler: async (event, { ctx }) => {
        const tags = tagsForEvent(event);
        if (tags.length === 0) return;
        await purge(ctx.jobs, tags, `event:${event.type}`);
      },
    }),
  ],
});
