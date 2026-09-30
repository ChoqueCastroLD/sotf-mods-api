/**
 * Media jobs (WP-40, PLAN §2.9, §8.3):
 *
 * - `media.process`: a pending `Media` (image upload, build thumbnail, replicated remote image)
 *   becomes an oriented, metadata-free original plus AVIF/WebP variants at 320–1920 px, with its
 *   ThumbHash and dominant colour (`processMedia` of core). One image at a time per process: sharp
 *   already uses every core for a single image.
 * - `description-images` (subscriber of `mod.published`, `mod.updated` when the description
 *   changed and `mod.status_changed` to `published`): remote images embedded in the Markdown description are fetched under the anti-SSRF
 *   rules, stored on R2 and the description is re-rendered pointing at them with explicit sizes
 *   (`replicateDescriptionImages`). Idempotent: already replicated images are reused.
 *
 * Without R2 credentials the jobs log and do nothing (no upload can exist then).
 */
import { processMedia, replicateDescriptionImages } from '@sotf/core/media/index';
import { defineJob, defineJobGroup, onEvent } from '../../define-job.ts';

export default defineJobGroup({
  name: 'media',
  jobs: [
    defineJob({
      queue: 'media.process',
      options: { localConcurrency: 1 },
      handler: async ({ mediaId }, { ctx, services }) => {
        const storage = services.storage();
        if (!storage) {
          ctx.log.warn({ mediaId }, 'media.process skipped: R2 is not configured');
          return { status: 'skipped', reason: 'no_storage' };
        }
        return processMedia(ctx, storage, mediaId);
      },
    }),
  ],
  subscribers: [
    onEvent({
      name: 'description-images',
      types: ['mod.published', 'mod.updated', 'mod.status_changed'],
      handler: async (event, { ctx, services }) => {
        if (event.type === 'mod.updated' && !event.payload.fields.includes('descriptionMd')) return;
        if (event.type === 'mod.status_changed' && event.payload.to !== 'published') return;
        const storage = services.storage();
        if (!storage) return;
        const { env } = services;
        const report = await replicateDescriptionImages(
          ctx,
          storage,
          { mediaBaseUrl: env.R2_PUBLIC_BASE_URL, publicBucket: env.R2_BUCKET },
          event.payload.modId,
        );
        if (report.images > 0) ctx.log.info({ modId: event.payload.modId, ...report }, 'description images replicated');
      },
    }),
  ],
});
