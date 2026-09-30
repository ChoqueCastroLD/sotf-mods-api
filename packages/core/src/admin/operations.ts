/**
 * `GET /admin/ops` (PLAN §10.3 "Métricas operativas", 👑 + session < 12 h): the readout the admin
 * checks before digging into logs — pg-boss queue depth and recent failures, the dead-letter
 * backlog (alert when > 0), downloads in the last hour and day, and the state of the CDN purges.
 *
 * Read-only aggregates over the pg-boss job table (`PGBOSS_SCHEMA`) and `"ModDownload"`; nothing
 * here is cached (the page is opened on demand).
 */
import type { OpsDTO } from '@sotf/contracts/admin';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { query, queryOne, toDate, toInt } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { DEAD_LETTER_QUEUE } from '../kernel/queues.ts';
import { assertStaff } from '../moderation/guard.ts';

type Ops = z.infer<typeof OpsDTO>;

const SCHEMA = /^[a-z_][a-z0-9_]*$/;

/** `GET /admin/ops`. `schema` is the pg-boss schema of the deployment (`PGBOSS_SCHEMA`). */
export async function getOperations(ctx: Ctx, schema = 'pgboss'): Promise<Ops> {
  await assertStaff(ctx, 'admin.rum');
  if (!SCHEMA.test(schema)) throw new Error(`invalid pg-boss schema "${schema}"`);
  const job = sql.raw(`"${schema}"."job"`);
  const now = ctx.clock.now();
  const hourAgo = new Date(now.getTime() - 3_600_000).toISOString();
  const dayAgo = new Date(now.getTime() - 86_400_000).toISOString();
  const [queues, downloads, purge] = await Promise.all([
    query<{
      name: string;
      queued: number;
      active: number;
      failed24h: number;
      completed1h: number;
      oldestQueuedAt: Date | string | null;
    }>(
      ctx.db,
      sql`SELECT j."name",
                 count(*) FILTER (WHERE j."state" IN ('created', 'retry'))::int AS "queued",
                 count(*) FILTER (WHERE j."state" = 'active')::int AS "active",
                 count(*) FILTER (WHERE j."state" = 'failed' AND j."completed_on" >= ${dayAgo}::timestamptz)::int AS "failed24h",
                 count(*) FILTER (WHERE j."state" = 'completed' AND j."completed_on" >= ${hourAgo}::timestamptz)::int AS "completed1h",
                 min(j."created_on") FILTER (WHERE j."state" IN ('created', 'retry')) AS "oldestQueuedAt"
            FROM ${job} j
           WHERE j."state" IN ('created', 'retry', 'active') OR j."created_on" >= ${dayAgo}::timestamptz
              OR j."completed_on" >= ${dayAgo}::timestamptz
           GROUP BY j."name"`,
    ),
    queryOne<{ lastHour: number; last24h: number }>(
      ctx.db,
      sql`SELECT count(*) FILTER (WHERE "createdAt" >= (${hourAgo}::timestamptz AT TIME ZONE 'UTC'))::int AS "lastHour",
                 count(*)::int AS "last24h"
            FROM "ModDownload" WHERE "createdAt" >= (${dayAgo}::timestamptz AT TIME ZONE 'UTC')`,
    ),
    queryOne<{ lastCompletedAt: Date | string | null }>(
      ctx.db,
      sql`SELECT max(j."completed_on") AS "lastCompletedAt" FROM ${job} j
           WHERE j."name" = 'cdn.purge' AND j."state" = 'completed'`,
    ),
  ]);
  const list = queues
    .map((q) => ({
      name: q.name,
      queued: toInt(q.queued),
      active: toInt(q.active),
      failed24h: toInt(q.failed24h),
      completed1h: toInt(q.completed1h),
      oldestQueuedAt: toDate(q.oldestQueuedAt)?.toISOString() ?? null,
    }))
    .sort(
      (a, b) => b.queued + b.active - (a.queued + a.active) || b.failed24h - a.failed24h || (a.name < b.name ? -1 : 1),
    );
  const dead = list.find((q) => q.name === DEAD_LETTER_QUEUE);
  const cdn = list.find((q) => q.name === 'cdn.purge');
  return {
    generatedAt: now.toISOString(),
    queues: list,
    deadLetter: dead ? dead.queued + dead.active : 0,
    downloads: { lastHour: toInt(downloads?.lastHour), last24h: toInt(downloads?.last24h) },
    purge: {
      lastCompletedAt: toDate(purge?.lastCompletedAt)?.toISOString() ?? null,
      queued: cdn?.queued ?? 0,
      failed24h: cdn?.failed24h ?? 0,
    },
  };
}
