/**
 * Periodic sweeps of the worker process that need no queue of their own (they only re-enqueue
 * existing queues). Each run takes a transaction-scoped advisory lock so two replicas do not sweep
 * at the same time.
 *
 * - **Lost security scans** (WP-51): `"SecurityScan"` rows still `pending` after 6 h whose
 *   `security.scan` job no longer exists in pg-boss (not queued, retrying or active: e.g. the job
 *   was lost or deleted) are enqueued again, hourly. A scan that is still waiting for a retry or a
 *   VirusTotal poll is left alone, so the VirusTotal quota is never spent twice on one version.
 */
import { type KernelDeps, systemCtx } from '@sotf/core';
import { staleScans } from '@sotf/core/security-scan/index';
import { type Executor, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';

export const STALE_SCAN_AGE_MS = 6 * 3600 * 1000;

function quoteIdent(name: string): string {
  return `"${name.replaceAll('"', '""')}"`;
}

/**
 * Versions with a live (`created`, `retry` or `active`) `security.scan` job, or one that failed its
 * last retry in the past day (sent again at most daily, not every hour).
 */
export async function liveScanJobs(
  db: Executor,
  bossSchema: string,
  modVersionIds: readonly number[],
): Promise<Set<number>> {
  if (modVersionIds.length === 0) return new Set();
  const table = sql.raw(`${quoteIdent(bossSchema)}.job`);
  const result = await db.execute(
    sql`SELECT DISTINCT ("data"->>'modVersionId')::int AS "id" FROM ${table}
         WHERE "name" = 'security.scan'
           AND ("state" IN ('created', 'retry', 'active')
                OR ("state" = 'failed' AND "completed_on" > now() - interval '1 day'))
           AND ("data"->>'modVersionId')::int = ANY(${`{${modVersionIds.join(',')}}`}::int[])`,
  );
  return new Set((result.rows as Array<{ id: number }>).map((r) => Number(r.id)));
}

/** Re-enqueues the lost security scans; returns the version ids that were sent again. */
export async function sweepLostSecurityScans(deps: KernelDeps, bossSchema: string): Promise<number[]> {
  const ctx = systemCtx(deps, 'sweep:security-scan');
  const stale = await staleScans(ctx, STALE_SCAN_AGE_MS);
  const live = await liveScanJobs(
    deps.db,
    bossSchema,
    stale.map((s) => s.modVersionId),
  );
  const sent: number[] = [];
  for (const scan of stale) {
    if (live.has(scan.modVersionId)) continue;
    await deps.jobs.enqueue(
      'security.scan',
      { modVersionId: scan.modVersionId, sha256: scan.sha256 },
      { singletonKey: `rescan:${scan.modVersionId}:${scan.sha256}` },
    );
    sent.push(scan.modVersionId);
  }
  if (sent.length > 0) ctx.log.warn({ modVersionIds: sent }, 'lost security scans enqueued again');
  return sent;
}

export interface Sweep {
  name: string;
  intervalMs: number;
  run: () => Promise<unknown>;
}

export interface SweepRunner {
  /** Runs one sweep now (under its lock); false when another replica holds it. */
  runNow(name: string): Promise<boolean>;
  start(): void;
  stop(): Promise<void>;
}

export function createSweepRunner(options: { deps: KernelDeps; sweeps: readonly Sweep[] }): SweepRunner {
  const { deps } = options;
  const timers: NodeJS.Timeout[] = [];
  const running = new Set<Promise<unknown>>();

  async function runNow(name: string): Promise<boolean> {
    const sweep = options.sweeps.find((s) => s.name === name);
    if (!sweep) throw new Error(`unknown sweep ${name}`);
    return withTx(deps.db, async (tx) => {
      const lock = await tx.execute(
        sql`SELECT pg_try_advisory_xact_lock(hashtextextended(${`sotf-worker:sweep:${name}`}, 0)) AS "locked"`,
      );
      if (!(lock.rows[0] as { locked: boolean } | undefined)?.locked) return false;
      await sweep.run();
      return true;
    });
  }

  function tick(sweep: Sweep): void {
    const task = runNow(sweep.name)
      .catch((error: unknown) => deps.log.error({ err: error, sweep: sweep.name }, 'worker sweep failed'))
      .finally(() => running.delete(task));
    running.add(task);
  }

  return {
    runNow,
    start() {
      if (timers.length > 0) return;
      for (const sweep of options.sweeps) {
        const timer = setInterval(() => tick(sweep), sweep.intervalMs);
        timer.unref();
        timers.push(timer);
      }
    },
    async stop() {
      for (const timer of timers.splice(0)) clearInterval(timer);
      await Promise.allSettled([...running]);
    },
  };
}

/** The sweeps of a worker process. */
export function workerSweeps(deps: KernelDeps, bossSchema: string): Sweep[] {
  return [
    {
      name: 'security-scan',
      intervalMs: 3600 * 1000,
      run: () => sweepLostSecurityScans(deps, bossSchema),
    },
  ];
}
