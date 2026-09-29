/**
 * Backfill runner (PLAN §6.9, research/02 §11).
 *
 * Common rules, enforced here so every backfill gets them:
 * - **Idempotent and resumable**: each backfill selects only rows whose new column is still empty
 *   (or rows past its watermark) and walks them with an id cursor in batches of 1–5 k rows.
 * - **One transaction per batch** with `lock_timeout = 3s`; a crash loses at most one batch.
 * - **Registered** in `"MigrationRun"` (name `backfill:<id>`, rows, checksums before/after, notes
 *   such as the watermark). The watermark of a batch is written in the batch's own transaction.
 * - **`--dry-run`** runs every batch and rolls it back: the counts are real, nothing is kept and
 *   no `"MigrationRun"` row is left behind.
 * - Only v2 columns and tables are written, except the audited fixes (B4, B5), which store every
 *   previous value in `"DataFixAudit"` (PLAN §6.1 rule 3).
 * - A session advisory lock prevents two runs at the same time.
 */
import type { Logger } from '@sotf/db';
import type pg from 'pg';
import { inTransaction } from '../db.ts';

export const BACKFILL_LOCK_KEY = '4705206785634133331';

export type BackfillId = 'B1' | 'B2' | 'B3' | 'B4' | 'B5' | 'B6' | 'B7' | 'B9' | 'B10' | 'B11' | 'B12' | 'B13' | 'B14';

export interface BackfillContext {
  client: pg.Client;
  dryRun: boolean;
  batchSize: number;
  log: Logger;
  /** Directory for reports (B6 writes the email collisions there). */
  outDir: string;
  /** Id of this run's `"MigrationRun"` row (`null` in a dry run). */
  runId: number | null;
  /** Free-form notes stored in `"MigrationRun".notes` at the end. */
  notes: Record<string, unknown>;
  /**
   * Runs `fn` in one transaction (rolled back in a dry run). `notes`, when given, are merged
   * into this run's `"MigrationRun".notes` inside the same transaction (watermarks).
   */
  batch<T>(fn: () => Promise<T>, notes?: () => Record<string, unknown>): Promise<T>;
}

export interface Backfill {
  id: BackfillId;
  title: string;
  /** Writes legacy columns or rows (always audited). */
  touchesLegacy: boolean;
  /** Part of the cut-over delta (`--delta`, PLAN §6.13 D4). */
  delta: boolean;
  /** Optional SQL returning one text column: a checksum of what the backfill writes. */
  checksumSql?: string;
  run(ctx: BackfillContext): Promise<number>;
}

export interface BackfillResult {
  id: BackfillId;
  rows: number;
  ms: number;
  dryRun: boolean;
  notes: Record<string, unknown>;
}

export interface RunOptions {
  dryRun?: boolean;
  batchSize?: number;
  log: Logger;
  outDir: string;
}

async function checksum(client: pg.Client, sql: string | undefined): Promise<string | null> {
  if (!sql) return null;
  const { rows } = await client.query<{ checksum: string | null }>(sql);
  const first = rows[0];
  return first ? (Object.values(first)[0] as string | null) : null;
}

/** Walks `table` by id in batches: `fn(fromExclusive)` returns the last id it processed (or null). */
export async function eachBatch(
  ctx: BackfillContext,
  fn: (afterId: number) => Promise<{ lastId: number | null; rows: number }>,
): Promise<number> {
  let cursor = 0;
  let total = 0;
  for (;;) {
    const { lastId, rows } = await ctx.batch(() => fn(cursor));
    total += rows;
    if (lastId === null) return total;
    cursor = lastId;
  }
}

/** Runs the given backfills in order. Throws on the first failure (earlier batches stay committed). */
export async function runBackfills(
  client: pg.Client,
  backfills: readonly Backfill[],
  options: RunOptions,
): Promise<BackfillResult[]> {
  const { rows: lock } = await client.query<{ ok: boolean }>('SELECT pg_try_advisory_lock($1::bigint) AS ok', [
    BACKFILL_LOCK_KEY,
  ]);
  if (!lock[0]?.ok) throw new Error('another backfill run holds the lock; try again when it finishes');
  const results: BackfillResult[] = [];
  try {
    for (const backfill of backfills) results.push(await runOne(client, backfill, options));
  } finally {
    await client.query('SELECT pg_advisory_unlock($1::bigint)', [BACKFILL_LOCK_KEY]);
  }
  return results;
}

async function runOne(client: pg.Client, backfill: Backfill, options: RunOptions): Promise<BackfillResult> {
  const dryRun = options.dryRun === true;
  const start = performance.now();
  const before = dryRun ? null : await checksum(client, backfill.checksumSql);
  let runId: number | null = null;
  if (!dryRun) {
    const { rows } = await client.query<{ id: number }>(
      `INSERT INTO "MigrationRun" ("name", "checksumBefore", "notes") VALUES ($1, $2, '{}'::jsonb) RETURNING "id"`,
      [`backfill:${backfill.id}`, before],
    );
    runId = rows[0]?.id ?? null;
  }
  const ctx: BackfillContext = {
    client,
    dryRun,
    batchSize: options.batchSize ?? 5000,
    log: options.log,
    outDir: options.outDir,
    runId,
    notes: {},
    async batch(fn, notes) {
      return inTransaction(
        client,
        async () => {
          const result = await fn();
          if (notes && runId !== null) {
            await client.query(`UPDATE "MigrationRun" SET "notes" = "notes" || $2::jsonb WHERE "id" = $1`, [
              runId,
              JSON.stringify(notes()),
            ]);
          }
          return result;
        },
        { rollback: dryRun },
      );
    },
  };
  options.log.info(`${backfill.id} ${backfill.title}${dryRun ? ' (dry run)' : ''}`);
  let rows: number;
  try {
    rows = await backfill.run(ctx);
  } catch (error) {
    if (runId !== null) {
      const message = error instanceof Error ? error.message : String(error);
      await client.query(`UPDATE "MigrationRun" SET "notes" = "notes" || $2::jsonb WHERE "id" = $1`, [
        runId,
        JSON.stringify({ ...ctx.notes, error: message }),
      ]);
    }
    throw error;
  }
  const ms = Math.round(performance.now() - start);
  if (runId !== null) {
    const after = await checksum(client, backfill.checksumSql);
    await client.query(
      `UPDATE "MigrationRun" SET "finishedAt" = now(), "rowsAffected" = $2, "checksumAfter" = $3,
         "notes" = "notes" || $4::jsonb WHERE "id" = $1`,
      [runId, rows, after, JSON.stringify({ ...ctx.notes, ms })],
    );
  }
  options.log.info(`${backfill.id} ${dryRun ? 'would change' : 'changed'} ${rows} row(s) in ${ms} ms`);
  return { id: backfill.id, rows, ms, dryRun, notes: ctx.notes };
}

/** Latest value of `key` in the notes of finished or interrupted runs of a backfill. */
export async function lastNote<T>(client: pg.ClientBase, id: BackfillId, key: string): Promise<T | null> {
  const { rows } = await client.query<{ value: T | null }>(
    `SELECT "notes" -> $2 AS value FROM "MigrationRun"
      WHERE "name" = $1 AND "notes" ? $2 ORDER BY "id" DESC LIMIT 1`,
    [`backfill:${id}`, key],
  );
  return rows[0]?.value ?? null;
}
