/**
 * Official bundle jobs (T1-04):
 *
 * - `bundle.build {bundleId}`: builds the zip of a bundle's kit (`buildBundle` of core); with
 *   `removeKey` it deletes the zip of a detached bundle instead. Idempotent (the key embeds the
 *   fingerprint of the resolved versions).
 * - `bundle.sweep` (every 15 minutes): enqueues `bundle.build` for the bundles whose items published a
 *   new version (or whose kit changed) since they were built.
 */
import { buildBundle, staleBundleIds } from '@sotf/core/bundles/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export default defineJobGroup({
  name: 'bundles',
  jobs: [
    defineJob({
      queue: 'bundle.build',
      options: { localConcurrency: 1 },
      handler: async ({ bundleId, removeKey }, { ctx, services }) => {
        const storage = services.storage();
        if (!storage) {
          ctx.log.warn({ bundleId }, 'bundle.build skipped: R2 is not configured');
          return { status: 'skipped', reason: 'no_storage' };
        }
        return buildBundle(ctx, storage, {
          bundleId,
          removeKey,
          siteUrl: services.env.PUBLIC_SITE_URL,
          publicOrigins: ['https://r2.sotf-mods.com'],
        });
      },
    }),
    defineJob({
      queue: 'bundle.sweep',
      handler: async (_data, { ctx }) => {
        const ids = await staleBundleIds(ctx);
        for (const bundleId of ids) {
          await ctx.jobs.enqueue('bundle.build', { bundleId }, { singletonKey: `bundle:${bundleId}` });
        }
        return { enqueued: ids.length };
      },
    }),
  ],
});
