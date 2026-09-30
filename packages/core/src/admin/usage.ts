/**
 * Admin dashboards (PLAN §7.4 "Admin": KelvinSeek usage and the RUM panel), 👑 + session < 12 h.
 *
 * - `GET /admin/kelvinseek/usage?days=7|30|90`: `"KelvinUsageDaily"` rows (one per UTC day,
 *   written by `recordKelvinUsage`), every day of the window present (zeros when idle), newest
 *   first, plus the budget in force (`SiteSetting('kelvinseek')` over the environment default) and
 *   today's cost. Costs are stored in micro-USD.
 * - `GET /admin/rum?range=7d|28d`: `getRumReport` of the analytics domain (WP-52).
 */
import type { KelvinUsageDTO, RumDTO } from '@sotf/contracts/admin';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { getRumReport, type RUM_RANGES } from '../analytics/rum.ts';
import { query, toInt } from '../follows/sql.ts';
import { type KelvinSeekConfig, loadKelvinSeekConfig } from '../kelvinseek/service.ts';
import type { Ctx } from '../kernel/context.ts';
import { assertStaff } from '../moderation/guard.ts';

type KelvinUsage = z.infer<typeof KelvinUsageDTO>;

const DAY_MS = 86_400_000;

function utcDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** `GET /admin/kelvinseek/usage`. */
export async function getKelvinSeekUsage(
  ctx: Ctx,
  defaults: KelvinSeekConfig,
  days: 7 | 30 | 90,
): Promise<KelvinUsage> {
  await assertStaff(ctx, 'admin.kelvinseek');
  const now = ctx.clock.now();
  const since = utcDay(new Date(now.getTime() - (days - 1) * DAY_MS));
  const [config, list] = await Promise.all([
    loadKelvinSeekConfig(ctx.db, defaults),
    query<{
      day: string;
      requests: number;
      fallbacks: number;
      tokensIn: string | number;
      tokensOut: string | number;
      costMicroUsd: string | number;
    }>(
      ctx.db,
      sql`SELECT "day"::text AS "day", "requests", "fallbacks", "tokensIn", "tokensOut", "costMicroUsd"
            FROM "KelvinUsageDaily" WHERE "day" >= ${since}::date ORDER BY "day" DESC`,
    ),
  ]);
  const byDay = new Map(list.map((r) => [r.day, r]));
  const out: KelvinUsage['days'] = [];
  for (let i = 0; i < days; i += 1) {
    const day = utcDay(new Date(now.getTime() - i * DAY_MS));
    const r = byDay.get(day);
    out.push({
      day,
      requests: toInt(r?.requests),
      fallbacks: toInt(r?.fallbacks),
      tokensIn: toInt(r?.tokensIn),
      tokensOut: toInt(r?.tokensOut),
      costUsd: toInt(r?.costMicroUsd) / 1_000_000,
    });
  }
  return { budgetUsd: config.dailyBudgetUsd, todayCostUsd: out[0]?.costUsd ?? 0, days: out };
}

/** `GET /admin/rum`. */
export async function getAdminRum(ctx: Ctx, range: keyof typeof RUM_RANGES): Promise<z.infer<typeof RumDTO>> {
  await assertStaff(ctx, 'admin.rum');
  return getRumReport(ctx, range);
}
