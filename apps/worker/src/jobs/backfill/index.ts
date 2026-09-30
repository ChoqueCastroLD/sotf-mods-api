/**
 * Backfill job group (WP-84, PLAN §6.9 and §6.13): the handler of the `backfill.run` queue
 * (singleton, no retries, 6 h expiry), enqueued by the API image's thin entry
 * `node dist/backfill.js <Bnn> [--apply] [--batch-size n] [--wait]`.
 *
 * - `B15` — the R2 pass (`runB15`): HEAD, streamed SHA-256, Range-read manifests, inspections,
 *   declared versions and platform, `logColor`, `buildMeta` and build thumbnails, AVIF/WebP
 *   variants of every legacy image and the OG cards of every entity. Needs R2 credentials.
 * - `B16` — retroactive gamification (`runB16` of `@sotf/core/gamification`, WP-60).
 * - Every other id is a database-only backfill of `tooling/migration` (`pnpm db:backfill`: B1–B14;
 *   `pnpm --filter @sotf/migration-tools r2:manifest-fixes`: B8 and the `Library` reclassification
 *   after B15; B17 is the operator CLI `r2:b17`). The job fails fast with that hint.
 *
 * `dryRun` defaults to true (the payload schema): nothing is written unless `--apply` was given.
 */
import { runB16 } from '@sotf/core/gamification/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';
import { workerStorage } from '../uploads/index.ts';
import { runB15 } from './b15.ts';

const TOOLING_HINT: Readonly<Record<string, string>> = {
  B8: 'B8 runs from tooling after B15: pnpm --filter @sotf/migration-tools r2:manifest-fixes [--apply]',
  B17: 'B17 rewrites R2 metadata from the operator CLI: pnpm --filter @sotf/migration-tools r2:b17 [--apply]',
  B18: 'B18 (pending mentions) is flushed by the worker at the cut-over (legacy.mentions, WP-43)',
};

export default defineJobGroup({
  name: 'backfill',
  jobs: [
    defineJob({
      queue: 'backfill.run',
      options: { localConcurrency: 1 },
      handler: async ({ name, dryRun, batchSize }, { ctx, job }) => {
        ctx.log.info({ name, dryRun, batchSize }, 'backfill started');
        switch (name) {
          case 'B15': {
            const storage = workerStorage();
            if (!storage) throw new Error('B15 needs R2 credentials (R2_* variables of the worker)');
            const result = await runB15(ctx, storage, { dryRun, batchSize, signal: job.signal });
            ctx.log.info({ name, dryRun, ms: result.ms }, 'backfill finished');
            return result;
          }
          case 'B16': {
            const result = await runB16(ctx, { dryRun, batchSize });
            ctx.log.info({ name, dryRun }, 'backfill finished');
            return result;
          }
          default:
            throw new Error(
              TOOLING_HINT[name] ??
                `${name} is a database backfill of tooling/migration: pnpm db:backfill ${name} [--dry-run]`,
            );
        }
      },
    }),
  ],
});
