/**
 * Security scan job (WP-51, PLAN §7.4 "security.scan"):
 *
 * - `security.scan {modVersionId, sha256}` (enqueued by publishing for every new version): the
 *   VirusTotal lookup / upload / poll cycle and the publication policy of `runSecurityScan`
 *   (`@sotf/core/security-scan`). One job at a time per process; every API call takes a slot of
 *   the shared quota (4/min, 500/day, ledger in Postgres), so several workers stay within it.
 * - Without `VIRUSTOTAL_API_KEY` versions get an "not scanned" report and those of non-verified
 *   creators go to human review.
 *
 * Idempotent: a version with a final verdict for its SHA-256 is skipped; polls and quota waits
 * re-enqueue the same payload with `startAfter`.
 */
import {
  createVirusTotalClient,
  createVirusTotalThrottle,
  runSecurityScan,
  type VirusTotalClient,
} from '@sotf/core/security-scan/index';
import { defineJob, defineJobGroup, type JobGroup } from '../../define-job.ts';

export interface SecurityScanJobOptions {
  /** Tests inject a fake client (or null to simulate a missing key). Default: from the env. */
  virusTotal?: (ctx: Parameters<typeof runSecurityScan>[0]) => VirusTotalClient | null;
}

export function createSecurityScanJobs(options: SecurityScanJobOptions = {}): JobGroup {
  return defineJobGroup({
    name: 'security-scan',
    jobs: [
      defineJob({
        queue: 'security.scan',
        options: { localConcurrency: 1 },
        handler: async (data, { ctx, services }) => {
          const virusTotal = options.virusTotal
            ? options.virusTotal(ctx)
            : (() => {
                const key = services.env.VIRUSTOTAL_API_KEY?.trim() || null;
                if (!key) return null;
                const throttle = createVirusTotalThrottle(ctx.db, ctx.clock);
                return createVirusTotalClient({ apiKey: key, beforeRequest: () => throttle('scan') });
              })();
          const outcome = await runSecurityScan(ctx, { virusTotal, storage: services.storage() }, data);
          ctx.log.info({ modVersionId: data.modVersionId, ...outcome }, 'security.scan');
          return outcome;
        },
      }),
    ],
  });
}

export default createSecurityScanJobs();
