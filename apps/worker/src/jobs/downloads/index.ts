/**
 * Download jobs (WP-31, PLAN §2.8, §2.9, §9.3):
 *
 * - `cleanup.download-unique` (daily, `30 4 * * *`): the uniqueness window
 *   `DownloadUnique(modVersionId, day, ipHash)` only needs today and yesterday (a flush may still
 *   write yesterday's late events), so rows older than 2 days are deleted in batches.
 */
import { pruneDownloadUnique } from '@sotf/core/downloads/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export default defineJobGroup({
  name: 'downloads',
  jobs: [
    defineJob({
      queue: 'cleanup.download-unique',
      handler: async (_data, { ctx }) => pruneDownloadUnique(ctx),
    }),
  ],
});
