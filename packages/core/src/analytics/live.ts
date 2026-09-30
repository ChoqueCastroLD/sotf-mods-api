/**
 * Visitors "right now" for `GET /live/pulse` (PLAN §2.9, T0-05 "isla viva"): distinct daily
 * visitor hashes with a `page_view` in the last few minutes. Cached 15 s per process (tag `stats`).
 */
import { cached, num, row } from '../catalog/sql.ts';
import type { Ctx } from '../kernel/context.ts';

/** Window of "online now" (minutes). */
export const LIVE_VISITORS_WINDOW_MINUTES = 5;

export function countLiveVisitors(ctx: Ctx, windowMinutes = LIVE_VISITORS_WINDOW_MINUTES): Promise<number> {
  return cached<{ n: number }>(
    ctx,
    { name: 'analytics:live-visitors', max: 4, ttlMs: 15_000 },
    `${windowMinutes}`,
    async () => {
      const since = new Date(ctx.clock.now().getTime() - windowMinutes * 60_000);
      const result = await row<{ n: string }>(
        ctx.db,
        `SELECT count(DISTINCT "visitorHash") AS n FROM "AnalyticsEvent"
        WHERE "ts" >= $1::timestamptz AND "kind" = 'page_view' AND "visitorHash" IS NOT NULL`,
        [since.toISOString()],
      );
      return { value: { n: num(result?.n) }, tags: ['stats'] };
    },
  ).then((v) => v.n);
}
