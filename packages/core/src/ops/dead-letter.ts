/**
 * Dead letters (PLAN §10.3): jobs whose retries ran out are copied by pg-boss into the shared
 * `dead-letter` queue, which nothing consumes. This module tells the admin what is waiting there,
 * grouped by the queue each job came from, and lets them retry or discard it.
 *
 * Finding the source queue of a pending row, most reliable first:
 *
 * 1. `source_name` of the row, which pg-boss 12.23+ fills when it copies the failed job
 *    (`source_output` holds the error);
 * 2. the original job: a row of the failed state with `dead_letter = 'dead-letter'`, the same
 *    `data` and `singleton_key`, that failed within a minute of the copy (older copies carry
 *    neither column; the original is kept for `deleteAfterSeconds`, a week);
 * 3. unknown: the original is gone. The group has no queue and can only be discarded.
 *
 * Retrying sends the copy's `data` (identical to the original's) back to its source queue through
 * the normal producer, then marks the copy handled. Discarding marks it handled without running
 * it. Handled rows get the state `completed` (retried) or `cancelled` (discarded) and an `output`
 * that says who did it and when, so they stop counting and the alert stops; pg-boss deletes them
 * with its own retention. Both actions are admin only and audited.
 */

import type { DeadLetterActionResultDTO, DeadLetterGroupDTO } from '@sotf/contracts/admin';
import { JOB_QUEUES, type JobQueue } from '@sotf/contracts/jobs';
import { type SQL, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import { query, toDate, toInt } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { DEAD_LETTER_QUEUE } from '../kernel/queues.ts';
import { assertStaff } from '../moderation/guard.ts';

export type DeadLetterGroup = z.infer<typeof DeadLetterGroupDTO>;
export type DeadLetterActionResult = z.infer<typeof DeadLetterActionResultDTO>;

/** Longest error message shown (admin screen and alert email). */
export const DEAD_LETTER_ERROR_MAX = 200;

/** States of a dead-letter row that has not been handled yet. */
const PENDING = sql`('created', 'retry', 'active')`;

const SCHEMA = /^[a-z_][a-z0-9_]*$/;

function jobTable(schema: string): SQL {
  if (!SCHEMA.test(schema)) throw new Error(`invalid pg-boss schema "${schema}"`);
  return sql.raw(`"${schema}"."job"`);
}

/** Whether the job table has the `source_*` columns (pg-boss 12.23+). */
async function hasSourceColumns(ctx: Ctx, schema: string): Promise<boolean> {
  const rows = await query<{ n: number }>(
    ctx.db,
    sql`SELECT count(*)::int AS "n" FROM information_schema.columns
         WHERE table_schema = ${schema} AND table_name = 'job' AND column_name IN ('source_name', 'source_output')`,
  );
  return toInt(rows[0]?.n) === 2;
}

/**
 * CTEs `pending` (rows waiting in the dead-letter queue), `failed` (originals that may be the
 * source of a row without `source_name`) and `resolved` (one row per pending row with its `queue`
 * and `output`).
 */
function resolvedRows(job: SQL, withSource: boolean): SQL {
  const sourceName = withSource ? sql`d."source_name"` : sql`NULL::text`;
  const sourceOutput = withSource ? sql`d."source_output"` : sql`NULL::jsonb`;
  return sql`
    pending AS (
      SELECT d."id", d."data", d."singleton_key", d."created_on", d."output",
             ${sourceName} AS "source_name", ${sourceOutput} AS "source_output"
        FROM ${job} d
       WHERE d."name" = ${DEAD_LETTER_QUEUE} AND d."state" IN ${PENDING}
    ),
    failed AS MATERIALIZED (
      SELECT f."name", f."data", f."singleton_key", f."output", f."completed_on"
        FROM ${job} f
       WHERE f."state" = 'failed' AND f."dead_letter" = ${DEAD_LETTER_QUEUE}
         AND f."completed_on" >= (SELECT min("created_on") FROM pending) - interval '1 minute'
    ),
    resolved AS (
      SELECT p."id", p."data", p."created_on",
             coalesce(p."source_name", m."name") AS "queue",
             coalesce(p."source_output", p."output", m."output") AS "output"
        FROM pending p
        LEFT JOIN LATERAL (
          SELECT f."name", f."output" FROM failed f
           WHERE p."source_name" IS NULL
             AND f."data" = p."data"
             AND f."singleton_key" IS NOT DISTINCT FROM p."singleton_key"
             AND f."completed_on" BETWEEN p."created_on" - interval '1 minute' AND p."created_on" + interval '1 minute'
           ORDER BY abs(extract(epoch FROM (f."completed_on" - p."created_on")))
           LIMIT 1
        ) m ON true
    )`;
}

/** Error text of a pg-boss `output` (an object with `message`, a string or `{ value }`). */
const ERROR_TEXT = sql`CASE jsonb_typeof(r."output")
    WHEN 'object' THEN coalesce(r."output"->>'message', r."output"->>'error', r."output"->>'value')
    WHEN 'string' THEN r."output" #>> '{}'
  END`;

/** One line, at most {@link DEAD_LETTER_ERROR_MAX} characters. */
export function trimError(message: string | null | undefined): string | null {
  const text = (message ?? '').replace(/\s+/g, ' ').trim();
  if (!text) return null;
  return text.length > DEAD_LETTER_ERROR_MAX ? `${text.slice(0, DEAD_LETTER_ERROR_MAX - 1)}…` : text;
}

const KNOWN_QUEUES: ReadonlySet<string> = new Set(JOB_QUEUES);

/** Whether jobs of `queue` can be sent back to it. */
export function isRetryable(queue: string | null): queue is JobQueue {
  return queue !== null && queue !== DEAD_LETTER_QUEUE && KNOWN_QUEUES.has(queue);
}

/**
 * The pending dead letters grouped by source queue, largest first (rows with an unknown source
 * last among equals). No permission check: `getOperations` and the alert job call it.
 */
export async function deadLetterGroups(ctx: Ctx, schema = 'pgboss'): Promise<DeadLetterGroup[]> {
  const job = jobTable(schema);
  const withSource = await hasSourceColumns(ctx, schema);
  const rows = await query<{
    queue: string | null;
    n: number;
    first: Date | string;
    last: Date | string;
    error: string | null;
  }>(
    ctx.db,
    sql`WITH ${resolvedRows(job, withSource)}
        SELECT r."queue", count(*)::int AS "n", min(r."created_on") AS "first", max(r."created_on") AS "last",
               (array_agg(${ERROR_TEXT} ORDER BY r."created_on" DESC) FILTER (WHERE ${ERROR_TEXT} IS NOT NULL))[1] AS "error"
          FROM resolved r
         GROUP BY r."queue"
         ORDER BY count(*) DESC, r."queue" NULLS LAST`,
  );
  const groups: DeadLetterGroup[] = [];
  for (const row of rows) {
    const first = toDate(row.first);
    const last = toDate(row.last);
    if (!first || !last) continue;
    groups.push({
      queue: row.queue,
      count: toInt(row.n),
      firstFailedAt: first.toISOString(),
      lastFailedAt: last.toISOString(),
      lastError: trimError(row.error),
      retryable: isRetryable(row.queue),
    });
  }
  return groups;
}

export type DeadLetterTarget = { kind: 'queue'; queue: string } | { kind: 'unknown' } | { kind: 'all' };

/** The target of a discard request (`queue` is required for the scope `queue`). */
export function deadLetterTarget(body: {
  scope: 'queue' | 'unknown' | 'all';
  queue?: string | undefined;
}): DeadLetterTarget {
  if (body.scope === 'queue') {
    if (!body.queue) {
      throw errors.validation('Name the queue to discard', [
        { path: 'queue', message: 'Required for the scope "queue"', code: 'invalid_type' },
      ]);
    }
    return { kind: 'queue', queue: body.queue };
  }
  return { kind: body.scope };
}

function targetFilter(target: DeadLetterTarget): SQL {
  if (target.kind === 'queue') return sql`r."queue" = ${target.queue}`;
  if (target.kind === 'unknown') return sql`r."queue" IS NULL`;
  return sql`true`;
}

interface Claimed {
  id: string;
  queue: string | null;
  data: unknown;
}

const countOf = (groups: readonly DeadLetterGroup[]) => groups.reduce((sum, g) => sum + g.count, 0);

/**
 * Marks the pending rows of `target` handled and returns them. `retried` rows become `completed`,
 * `discarded` ones `cancelled`. The audit entry commits with the update.
 */
async function claim(
  ctx: Ctx,
  schema: string,
  target: DeadLetterTarget,
  handled: 'retried' | 'discarded',
  actorId: number,
): Promise<Claimed[]> {
  const job = jobTable(schema);
  const withSource = await hasSourceColumns(ctx, schema);
  const state = handled === 'retried' ? 'completed' : 'cancelled';
  const now = ctx.clock.now().toISOString();
  return ctx.db.transaction(async (tx) => {
    const rows = await query<Claimed>(
      tx,
      sql`WITH ${resolvedRows(job, withSource)}
          UPDATE ${job} d
             SET "state" = ${state}::${sql.raw(`"${schema}"."job_state"`)},
                 "completed_on" = now(),
                 "output" = jsonb_build_object('handled', ${handled}::text, 'by', ${actorId}::int, 'at', ${now}::text)
            FROM resolved r
           WHERE d."name" = ${DEAD_LETTER_QUEUE} AND d."id" = r."id" AND d."state" IN ${PENDING}
             AND ${targetFilter(target)}
          RETURNING d."id", r."queue", d."data"`,
    );
    const queues = [...new Set(rows.map((r) => r.queue ?? '(unknown)'))].sort();
    await recordAudit(tx, ctx, {
      action: handled === 'retried' ? 'ops.dead_letter.retry' : 'ops.dead_letter.discard',
      targetType: 'job_queue',
      targetId: null,
      after: { scope: target.kind, queue: target.kind === 'queue' ? target.queue : null, rows: rows.length, queues },
    });
    return rows;
  });
}

/** Puts rows back in the pending list (their job could not be sent). */
async function release(ctx: Ctx, schema: string, ids: string[]): Promise<void> {
  if (ids.length === 0) return;
  const job = jobTable(schema);
  await ctx.db.execute(
    sql`UPDATE ${job} SET "state" = 'created'::${sql.raw(`"${schema}"."job_state"`)}, "completed_on" = NULL, "output" = NULL
         WHERE "name" = ${DEAD_LETTER_QUEUE} AND "id" = ANY(${`{${ids.join(',')}}`}::uuid[])`,
  );
}

async function remaining(ctx: Ctx, schema: string): Promise<number> {
  return countOf(await deadLetterGroups(ctx, schema));
}

/**
 * `POST /admin/ops/dead-letters/retry`: sends every pending failed job of `queue` back to it with
 * its original data. A job whose data no longer fits the queue, or that cannot be sent, stays
 * pending (`failed`).
 */
export async function retryDeadLetters(ctx: Ctx, schema: string, queue: string): Promise<DeadLetterActionResult> {
  const actor = await assertStaff(ctx, 'admin.operations');
  if (!isRetryable(queue)) {
    throw errors.validation('This queue no longer exists, so its failed jobs can only be discarded', [
      { path: 'queue', message: 'Unknown queue', code: 'invalid' },
    ]);
  }
  const rows = await claim(ctx, schema, { kind: 'queue', queue }, 'retried', actor.userId);
  let requeued = 0;
  let skipped = 0;
  const unsent: string[] = [];
  for (const row of rows) {
    try {
      const id = await ctx.jobs.requeue(queue, row.data);
      if (id === null) skipped += 1;
      else requeued += 1;
    } catch (error) {
      ctx.log.warn({ err: error, queue, deadLetterId: row.id }, 'dead letter could not be retried');
      unsent.push(row.id);
    }
  }
  if (unsent.length > 0) {
    await release(ctx, schema, unsent);
    await ctx.db.transaction((tx) =>
      recordAudit(tx, ctx, {
        action: 'ops.dead_letter.retry_failed',
        targetType: 'job_queue',
        targetId: null,
        after: { queue, rows: unsent.length },
      }),
    );
  }
  return {
    action: 'retry',
    handled: rows.length - unsent.length,
    requeued,
    skipped,
    failed: unsent.length,
    remaining: await remaining(ctx, schema),
  };
}

/** `POST /admin/ops/dead-letters/discard`: drops the pending rows of `target` without running them. */
export async function discardDeadLetters(
  ctx: Ctx,
  schema: string,
  target: DeadLetterTarget,
): Promise<DeadLetterActionResult> {
  const actor = await assertStaff(ctx, 'admin.operations');
  const rows = await claim(ctx, schema, target, 'discarded', actor.userId);
  return {
    action: 'discard',
    handled: rows.length,
    requeued: 0,
    skipped: 0,
    failed: 0,
    remaining: await remaining(ctx, schema),
  };
}
