/**
 * Account job group (WP-30, T0-14, T0-22, PLAN §9.3):
 *
 * - `account.export`: builds the data export ZIP, stores it in the private bucket and emails the
 *   presigned link (24 h). Idempotent; the last attempt marks the export failed.
 * - `account.delete`: daily sweep (or one user) of deletions past their 14-day grace period →
 *   anonymization (see @sotf/core accounts/deletion.ts).
 * - `accounts.trust-level`: nightly trust level recomputation.
 * - `cleanup.sessions`: retention of sessions, one-time tokens, the security log, final outbox rows
 *   and expired exports.
 */
import { queueConfig } from '@sotf/core';
import {
  cleanupAccountData,
  type ExportStorage,
  executeDueDeletions,
  recomputeTrustLevels,
  runExport,
  S3ExportStorage,
} from '@sotf/core/accounts/index';
import { defineJob, defineJobGroup, type JobGroup } from '../../define-job.ts';
import { parseWorkerEnv } from '../../env.ts';

export interface AccountJobOptions {
  /** Private bucket of the exports; null disables exports (they fail and are marked failed). */
  storage: ExportStorage | null;
  /** `PUBLIC_SITE_URL`. */
  siteUrl: string;
}

function optionsFromEnv(): AccountJobOptions {
  const env = parseWorkerEnv();
  let storage: ExportStorage | null = null;
  try {
    storage = new S3ExportStorage(env);
  } catch {
    storage = null;
  }
  return { storage, siteUrl: env.PUBLIC_SITE_URL };
}

export function createAccountJobs(options?: AccountJobOptions | (() => AccountJobOptions)): JobGroup {
  let resolved: AccountJobOptions | null = null;
  const get = (): AccountJobOptions => {
    resolved ??= typeof options === 'function' ? options() : (options ?? optionsFromEnv());
    return resolved;
  };
  const exportRetryLimit = queueConfig('account.export').retryLimit ?? 0;
  return defineJobGroup({
    name: 'accounts',
    jobs: [
      defineJob({
        queue: 'account.export',
        handler: async (data, { ctx, job }) => {
          const { storage, siteUrl } = get();
          if (!storage) throw new Error('data exports need R2 credentials (R2_ENDPOINT/R2_ACCOUNT_ID + keys)');
          return runExport(
            { db: ctx.db, jobs: ctx.jobs, clock: ctx.clock, log: ctx.log, storage, siteUrl },
            data.exportId,
            { lastAttempt: job.retryCount >= exportRetryLimit },
          );
        },
      }),
      defineJob({
        queue: 'account.delete',
        handler: async (data, { ctx }) => {
          const executed = await executeDueDeletions(
            { db: ctx.db, jobs: ctx.jobs, clock: ctx.clock, log: ctx.log, storage: get().storage },
            data.userId,
          );
          return { executed: executed.length };
        },
      }),
      defineJob({
        queue: 'accounts.trust-level',
        handler: async (_data, { ctx }) => {
          const changed = await recomputeTrustLevels(ctx.db);
          ctx.log.info({ changed }, 'trust levels recomputed');
          return { changed };
        },
      }),
      defineJob({
        queue: 'cleanup.sessions',
        handler: async (_data, { ctx }) =>
          cleanupAccountData({ db: ctx.db, clock: ctx.clock, log: ctx.log, storage: get().storage }),
      }),
    ],
  });
}

export default createAccountJobs();
