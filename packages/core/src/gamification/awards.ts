/**
 * Awards, read side only (`GET /awards/current`). Awards are no longer produced or announced:
 * the Mod of the Week job, the admin writes, badges and Discord posts were removed (Classic
 * redesign). Existing "Award" rows stay in the database.
 */
import type { AwardDTO as AwardSchema, CurrentAwardsDTO } from '@sotf/contracts/gamification';
import type { AwardKind } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import type { CatalogConfig } from '../catalog/media.ts';
import { getSnapshot, isListable } from '../catalog/snapshot.ts';
import { query, toDate } from '../follows/sql.ts';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';

export type AwardDTO = z.infer<typeof AwardSchema>;

interface AwardRow {
  id: number;
  kind: AwardKind;
  modId: number;
  periodStart: string;
  periodEnd: string;
  reason: string | null;
  createdAt: Date | string;
}

const AWARD_COLUMNS = sql`a."id", a."kind", a."modId", to_char(a."periodStart", 'YYYY-MM-DD') AS "periodStart",
  to_char(a."periodEnd", 'YYYY-MM-DD') AS "periodEnd", a."reason", a."createdAt"`;

async function toAwardDtos(ctx: Ctx, config: CatalogConfig, rows: readonly AwardRow[]): Promise<AwardDTO[]> {
  if (rows.length === 0) return [];
  const snapshot = await getSnapshot(ctx, config);
  const out: AwardDTO[] = [];
  for (const r of rows) {
    const entry = snapshot.byId.get(Number(r.modId));
    if (!entry) continue;
    if (!isListable(snapshot, entry)) continue;
    out.push({
      id: Number(r.id),
      kind: r.kind,
      periodStart: r.periodStart,
      periodEnd: r.periodEnd,
      reason: r.reason,
      mod: entry.card,
      createdAt: (toDate(r.createdAt) ?? new Date(0)).toISOString(),
    });
  }
  return out;
}

/** `GET /awards/current`: the running Mod of the Week, staff picks and Build of the Month. */
export async function getCurrentAwards(ctx: Ctx, config: CatalogConfig): Promise<z.infer<typeof CurrentAwardsDTO>> {
  const today = utcDay(ctx.clock.now());
  const rows = await query<AwardRow>(
    ctx.db,
    sql`SELECT ${AWARD_COLUMNS} FROM "Award" a
         WHERE a."periodStart" <= ${today}::date AND a."periodEnd" >= ${today}::date
           AND a."kind" IN ('mod_of_week', 'staff_pick', 'build_of_month')
         ORDER BY a."periodStart" DESC, a."id" DESC`,
  );
  const dtos = await toAwardDtos(ctx, config, rows);
  return {
    modOfWeek: dtos.find((a) => a.kind === 'mod_of_week') ?? null,
    staffPicks: dtos.filter((a) => a.kind === 'staff_pick').slice(0, 12),
    buildOfMonth: dtos.find((a) => a.kind === 'build_of_month') ?? null,
  };
}
