/**
 * Backfill job group (WP-84, PLAN §6.9 and §6.13): the handler of the `backfill.run` queue
 * (singleton, no retries, 6 h expiry), enqueued by the API image's thin entry
 * `node dist/backfill.js <Bnn> [--apply] [--batch-size n] [--wait]`.
 *
 * - `B15` — the R2 pass (`runB15`): HEAD, streamed SHA-256, Range-read manifests, inspections,
 *   declared versions and platform, `logColor`, `buildMeta` and build thumbnails, AVIF/WebP
 *   variants of every legacy image and the OG cards of every entity. Needs R2 credentials.
 * - `B16` (retroactive gamification) was retired with the gamification features.
 * - `B20` — automatic checks (zip, manifest, size, hashes, VirusTotal lookup) of the versions of
 *   legacy mods that are still `pending`, from the objects already in the bucket (`runB20`).
 *   Needs R2 credentials; never changes a mod or version status.
 * - `B21` — seeds `GameBuild` from the Steam news feed (`runB21`); no R2, needs network access.
 * - `B22` — every stored image becomes WebP q75 (`runB22`, owner request): `B22` reports (dry run),
 *   `B22 --apply [--include-unreferenced]` converts and rewrites every database reference,
 *   `B22 --delete-originals [--apply]` lists / deletes the originals that are no longer referenced.
 *   Needs R2 credentials; see ./b22.ts.
 * - Every other id is a database-only backfill of `tooling/migration` (`pnpm db:backfill`: B1–B14;
 *   `pnpm --filter @sotf/migration-tools r2:manifest-fixes`: B8 and the `Library` reclassification
 *   after B15; B17 is the operator CLI `r2:b17`). The job fails fast with that hint.
 *
 * `dryRun` defaults to true (the payload schema): nothing is written unless `--apply` was given.
 */
import {
  createVirusTotalClient,
  createVirusTotalThrottle,
  type VirusTotalClient,
} from '@sotf/core/security-scan/index';
import { createSteamClient, type SteamClient } from '@sotf/core/steam/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';
import { runB15 } from './b15.ts';
import { runB20 } from './b20.ts';
import { runB21 } from './b21.ts';
import { runB22 } from './b22.ts';

export interface BackfillJobOptions {
  /** Tests inject fakes; by default the clients come from the environment. */
  virusTotal?: (ctx: Parameters<typeof runB20>[0]) => VirusTotalClient | null;
  steam?: () => SteamClient;
}

const TOOLING_HINT: Readonly<Record<string, string>> = {
  B8: 'B8 runs from tooling after B15: pnpm --filter @sotf/migration-tools r2:manifest-fixes [--apply]',
  B17: 'B17 rewrites R2 metadata from the operator CLI: pnpm --filter @sotf/migration-tools r2:b17 [--apply]',
  B16: 'B16 (retroactive gamification) was retired: badges, XP and milestones no longer exist',
  B18: 'B18 (pending mentions) is flushed by the worker at the cut-over (legacy.mentions, WP-43)',
};

export function createBackfillJobs(options: BackfillJobOptions = {}) {
  return defineJobGroup({
    name: 'backfill',
    jobs: [
      defineJob({
        queue: 'backfill.run',
        options: { localConcurrency: 1 },
        handler: async ({ name, dryRun, batchSize, deleteOriginals, includeUnreferenced }, { ctx, job, services }) => {
          ctx.log.info({ name, dryRun, batchSize, deleteOriginals, includeUnreferenced }, 'backfill started');
          switch (name) {
            case 'B15': {
              const storage = services.storage();
              if (!storage) throw new Error('B15 needs R2 credentials (R2_* variables of the worker)');
              const result = await runB15(ctx, storage, { dryRun, batchSize, signal: job.signal });
              ctx.log.info({ name, dryRun, ms: result.ms }, 'backfill finished');
              return result;
            }
            case 'B20': {
              const storage = services.storage();
              if (!storage) throw new Error('B20 needs R2 credentials (R2_* variables of the worker)');
              const virusTotal = options.virusTotal
                ? options.virusTotal(ctx)
                : (() => {
                    const key = services.env.VIRUSTOTAL_API_KEY?.trim() || null;
                    if (!key) return null;
                    const throttle = createVirusTotalThrottle(ctx.db, ctx.clock);
                    return createVirusTotalClient({ apiKey: key, beforeRequest: () => throttle('scan') });
                  })();
              const result = await runB20(ctx, storage, { dryRun, batchSize, signal: job.signal, virusTotal });
              ctx.log.info({ name, dryRun, ms: result.ms }, 'backfill finished');
              return result;
            }
            case 'B21': {
              const result = await runB21(ctx, (options.steam ?? createSteamClient)(), { dryRun });
              ctx.log.info({ name, dryRun, ms: result.ms }, 'backfill finished');
              return result;
            }
            case 'B22': {
              const storage = services.storage();
              if (!storage) throw new Error('B22 needs R2 credentials (R2_* variables of the worker)');
              const result = await runB22(ctx, storage, {
                mode: deleteOriginals ? 'delete' : dryRun ? 'report' : 'convert',
                dryRun,
                includeUnreferenced,
                batchSize,
                signal: job.signal,
              });
              ctx.log.info({ name, dryRun, mode: result.mode, ms: result.ms }, 'backfill finished');
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
}

export default createBackfillJobs();
