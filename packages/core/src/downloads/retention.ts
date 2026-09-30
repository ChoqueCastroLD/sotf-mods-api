/**
 * Retention of the download uniqueness window (PLAN §6.4 `DownloadUnique`: 2 days, §9.3).
 */
import { sql } from 'drizzle-orm';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';

/** Days of `DownloadUnique` kept (today and yesterday). */
export const DOWNLOAD_UNIQUE_RETENTION_DAYS = 2;

/** Deletes `DownloadUnique` rows older than the retention, in batches. Returns the rows deleted. */
export async function pruneDownloadUnique(
  ctx: Ctx,
  options: { batchSize?: number } = {},
): Promise<{ deleted: number }> {
  const batchSize = options.batchSize ?? 10_000;
  const cutoff = utcDay(new Date(ctx.clock.now().getTime() - (DOWNLOAD_UNIQUE_RETENTION_DAYS - 1) * 86_400_000));
  let deleted = 0;
  for (;;) {
    const res = await ctx.db.execute(sql`
      DELETE FROM "DownloadUnique" d
       USING (SELECT "modVersionId", "day", "ipHash" FROM "DownloadUnique"
               WHERE "day" < ${cutoff}::date LIMIT ${batchSize}) old
       WHERE d."modVersionId" = old."modVersionId" AND d."day" = old."day" AND d."ipHash" = old."ipHash"`);
    const n = res.rowCount ?? 0;
    deleted += n;
    if (n < batchSize) break;
  }
  if (deleted > 0) ctx.log.info({ deleted, cutoff }, 'DownloadUnique pruned');
  return { deleted };
}
