/**
 * Platform module (WP-20): internal operations that belong to no domain.
 *
 * - `POST /internal/cdn/purge` (`internal.purge`): enqueues `cdn.purge` for the tags (debounced;
 *   ≤ 30 tags per Cloudflare call). The web calls it after every deploy with
 *   `{tags:['html'], reason:'deploy:<sha>'}`; the reason is the singleton key, so repeated calls for
 *   the same deploy coalesce (PLAN §2.7).
 */
import { internalEndpoints } from '@sotf/contracts';
import { purge } from '@sotf/core';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'platform',
  register(m) {
    m.implement(internalEndpoints.purge, async ({ body, ctx }) => {
      const singletonKey = body.reason.startsWith('deploy:') ? body.reason : undefined;
      const result = await purge(ctx.jobs, body.tags, body.reason, singletonKey ? { singletonKey } : {});
      ctx.log.info({ tags: result.tags, reason: body.reason, batches: result.batches }, 'cdn purge enqueued');
      return { queued: true as const, tags: result.tags, batches: Math.max(1, result.batches) };
    });
  },
});
