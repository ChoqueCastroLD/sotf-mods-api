/**
 * Official bundle jobs (T1-04):
 *
 * - `bundle.build {bundleId}`: builds the zip of a bundle's kit (`buildBundle` of core); with
 *   `removeKey` it deletes the zip of a detached bundle instead. Idempotent (the key embeds the
 *   fingerprint of the resolved versions).
 *
 * `bundle.sweep` (the 15-minute rebuild of stale bundles) was retired with the kits; existing zips
 * stay in storage and are rebuilt only when the owner asks for it.
 */
import { buildBundle } from '@sotf/core/bundles/index';
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
  ],
});
