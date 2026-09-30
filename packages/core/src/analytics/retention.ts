/**
 * Retention of the first-party analytics (PLAN §9.3: `AnalyticsEvent` 90 days). The daily
 * aggregates (`ModStatsDaily`) keep the history; the raw events (visitor hashes included) go.
 */
import { sql } from 'drizzle-orm';
import type { Ctx } from '../kernel/context.ts';

export const ANALYTICS_RETENTION_DAYS = 90;

/** Deletes events older than the retention in batches (by id, oldest first). */
export async function pruneAnalyticsEvents(
  ctx: Ctx,
  options: { batchSize?: number; retentionDays?: number } = {},
): Promise<{ deleted: number; cutoff: string }> {
  const batchSize = options.batchSize ?? 10_000;
  const cutoff = new Date(ctx.clock.now().getTime() - (options.retentionDays ?? ANALYTICS_RETENTION_DAYS) * 86_400_000);
  let deleted = 0;
  for (;;) {
    const res = await ctx.db.execute(sql`
      DELETE FROM "AnalyticsEvent"
       WHERE "id" IN (SELECT "id" FROM "AnalyticsEvent" WHERE "ts" < ${cutoff.toISOString()}::timestamptz
                       ORDER BY "id" LIMIT ${batchSize})`);
    const n = res.rowCount ?? 0;
    deleted += n;
    if (n < batchSize) break;
  }
  if (deleted > 0) ctx.log.info({ deleted, cutoff: cutoff.toISOString() }, 'analytics events pruned');
  return { deleted, cutoff: cutoff.toISOString() };
}
