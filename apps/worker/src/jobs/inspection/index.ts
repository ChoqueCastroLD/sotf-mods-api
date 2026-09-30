/**
 * Inspection job (WP-40, PLAN §2.8 step 3, §7.4 "Checks automáticos"):
 *
 * - `inspection.run`: the automatic checks of an uploaded mod zip (read with HTTP Range requests,
 *   never loaded whole: zip bomb, zip slip, extensions, manifest, semver) or build JSON (blueprint
 *   structure, 20 MB), written to the upload as an `UploadInspectionDTO` and, for a version, to
 *   `VersionInspection` (`runInspection` of core). Passed → upload `ready`; flagged → `ready` and
 *   moved to `quarantine/`; failed → `rejected` and deleted.
 *
 * Idempotent: an upload that already carries an inspection is skipped.
 */
import { runInspection } from '@sotf/core/inspection/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';
import { workerStorage } from '../uploads/index.ts';

export default defineJobGroup({
  name: 'inspection',
  jobs: [
    defineJob({
      queue: 'inspection.run',
      handler: async ({ uploadId, modVersionId }, { ctx }) => {
        const storage = workerStorage();
        if (!storage) {
          ctx.log.warn({ uploadId }, 'inspection.run skipped: R2 is not configured');
          return { status: 'skipped', reason: 'no_storage' };
        }
        const outcome = await runInspection(ctx, storage, { uploadId, modVersionId });
        return outcome.status === 'skipped'
          ? outcome
          : { status: outcome.status, flags: outcome.inspection.flags.length };
      },
    }),
  ],
});
