/**
 * Build jobs (WP-40, T0-24):
 *
 * - `build.extract`: the PNG thumbnail embedded in a BuildShare blueprint becomes a `Media`
 *   (processed by `media.process`) that the wizard offers as the replaceable cover; with a
 *   `modVersionId` it also fills `ModVersion.buildMeta` and gives the build a cover when it has
 *   none (`extractBuild` of core). Idempotent per upload.
 * - `build.geometry` (T1-06): parses the stored blueprint of a version into the packed geometry and the
 *   top-down SVG preview (`BuildGeometry`); enqueued by `build.extract` and by the first read of a build
 *   without geometry. Idempotent (upsert).
 */
import { extractBuild, generateBuildGeometry } from '@sotf/core/builds/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export default defineJobGroup({
  name: 'builds',
  jobs: [
    defineJob({
      queue: 'build.extract',
      handler: async ({ uploadId, modVersionId }, { ctx, services }) => {
        const storage = services.storage();
        if (!storage) {
          ctx.log.warn({ uploadId }, 'build.extract skipped: R2 is not configured');
          return { status: 'skipped', reason: 'no_storage' };
        }
        return extractBuild(ctx, storage, { uploadId, modVersionId });
      },
    }),
    defineJob({
      queue: 'build.geometry',
      handler: async ({ modVersionId }, { ctx, services }) => {
        const storage = services.storage();
        if (!storage) {
          ctx.log.warn({ modVersionId }, 'build.geometry skipped: R2 is not configured');
          return { status: 'skipped', reason: 'no_storage' };
        }
        return generateBuildGeometry(ctx, storage, { modVersionId, publicOrigins: ['https://r2.sotf-mods.com'] });
      },
    }),
  ],
});
