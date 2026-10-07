/**
 * Upload jobs (WP-31, PLAN §2.8, §2.9):
 *
 * - `cleanup.uploads` (hourly, `20 * * * *`): uploads past their 24 h lifetime that were never
 *   published are marked `expired`, their multipart upload is aborted and the `incoming/` object is
 *   deleted (`expireUploads` of core). Without R2 credentials only the rows change. Then
 *   `sweepIncoming` deletes the `incoming/` objects older than three days that no live upload or
 *   pending media names, so cleanup never depends on a bucket lifecycle rule (in production the
 *   private role is the public bucket).
 *
 * Storage is `JobContext.services.storage()` (built lazily from the worker env, `src/services.ts`).
 */
import { expireUploads, sweepIncoming } from '@sotf/core/uploads/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export { setWorkerStorageForTests } from '../../services.ts';

export default defineJobGroup({
  name: 'uploads',
  jobs: [
    defineJob({
      queue: 'cleanup.uploads',
      handler: async (_data, { ctx, services }) => {
        const storage = services.storage();
        const expired = await expireUploads(ctx, storage);
        // Strays that no row accounts for (replayed presigned PUTs, dead media jobs): see `sweepIncoming`.
        const orphans = await sweepIncoming(ctx, storage);
        return { ...expired, orphans };
      },
    }),
  ],
});
