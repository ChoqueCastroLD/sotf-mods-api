/**
 * Build jobs (WP-40, T0-24):
 *
 * - `build.extract`: the PNG thumbnail embedded in a BuildShare blueprint becomes a `Media`
 *   (processed by `media.process`) that the wizard offers as the replaceable cover; with a
 *   `modVersionId` it also fills `ModVersion.buildMeta` and gives the build a cover when it has
 *   none (`extractBuild` of core). Idempotent per upload.
 */
import { extractBuild } from '@sotf/core/builds/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';
import { workerStorage } from '../uploads/index.ts';

export default defineJobGroup({
  name: 'builds',
  jobs: [
    defineJob({
      queue: 'build.extract',
      handler: async ({ uploadId, modVersionId }, { ctx }) => {
        const storage = workerStorage();
        if (!storage) {
          ctx.log.warn({ uploadId }, 'build.extract skipped: R2 is not configured');
          return { status: 'skipped', reason: 'no_storage' };
        }
        return extractBuild(ctx, storage, { uploadId, modVersionId });
      },
    }),
  ],
});
