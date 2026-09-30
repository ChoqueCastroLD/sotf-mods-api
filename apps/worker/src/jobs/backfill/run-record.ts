/**
 * `"MigrationRun"` bookkeeping of the backfills run by the worker (PLAN §6.9: every backfill is
 * registered with its row count and notes). Same conventions as `tooling/migration` (name
 * `backfill:<id>`, `notes` merged as JSON); a dry run leaves no row behind.
 */
import type { Ctx } from '@sotf/core';
import { sql } from 'drizzle-orm';

export interface RunRecord {
  /** Row id, or null in a dry run. */
  readonly id: number | null;
  /** Merges `notes` into the row (no-op in a dry run). */
  note(notes: Record<string, unknown>): Promise<void>;
  finish(rows: number, notes: Record<string, unknown>): Promise<void>;
  fail(error: unknown, notes: Record<string, unknown>): Promise<void>;
}

function json(value: Record<string, unknown>): string {
  return JSON.stringify(value, (_key, v: unknown) => (typeof v === 'bigint' ? Number(v) : v));
}

export async function startRun(ctx: Ctx, name: string, dryRun: boolean): Promise<RunRecord> {
  if (dryRun) {
    return { id: null, note: async () => {}, finish: async () => {}, fail: async () => {} };
  }
  const res = await ctx.db.execute<{ id: number }>(
    sql`INSERT INTO "MigrationRun" ("name", "notes") VALUES (${`backfill:${name}`}, '{}'::jsonb) RETURNING "id"`,
  );
  const id = res.rows[0]?.id ?? null;
  const merge = async (extra: Record<string, unknown>, finished: boolean, rows: number | null) => {
    if (id === null) return;
    await ctx.db.execute(sql`
      UPDATE "MigrationRun"
         SET "notes" = coalesce("notes", '{}'::jsonb) || ${json(extra)}::jsonb,
             "finishedAt" = CASE WHEN ${finished} THEN now() ELSE "finishedAt" END,
             "rowsAffected" = coalesce(${rows}::bigint, "rowsAffected")
       WHERE "id" = ${id}`);
  };
  return {
    id,
    note: (notes) => merge(notes, false, null),
    finish: (rows, notes) => merge(notes, true, rows),
    fail: (error, notes) =>
      merge({ ...notes, error: error instanceof Error ? error.message : String(error) }, false, null),
  };
}

/** Runs `fn` over `items` with at most `limit` in flight; stops early when `signal` aborts. */
export async function mapLimit<T>(
  items: readonly T[],
  limit: number,
  signal: AbortSignal,
  fn: (item: T) => Promise<void>,
): Promise<void> {
  let next = 0;
  const workers = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, async () => {
    for (;;) {
      if (signal.aborted) return;
      const index = next;
      next += 1;
      if (index >= items.length) return;
      await fn(items[index] as T);
    }
  });
  await Promise.all(workers);
}

/** Keeps at most `max` samples in a report list. */
export function pushSample<T>(list: T[], item: T, max = 200): void {
  if (list.length < max) list.push(item);
}
