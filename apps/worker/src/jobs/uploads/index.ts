/**
 * Upload jobs (WP-31, PLAN §2.8, §2.9):
 *
 * - `cleanup.uploads` (hourly, `20 * * * *`): uploads past their 24 h lifetime that were never
 *   published are marked `expired`, their multipart upload is aborted and the `incoming/` object is
 *   deleted (`expireUploads` of core). Without R2 credentials only the rows change; the private
 *   bucket's 1-day lifecycle rule removes the objects anyway.
 *
 * Storage is `JobContext.services.storage()` (built lazily from the worker env, `src/services.ts`).
 */
import { expireUploads } from '@sotf/core/uploads/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export { setWorkerStorageForTests } from '../../services.ts';

export default defineJobGroup({
  name: 'uploads',
  jobs: [
    defineJob({
      queue: 'cleanup.uploads',
      handler: async (_data, { ctx, services }) => expireUploads(ctx, services.storage()),
    }),
  ],
});
