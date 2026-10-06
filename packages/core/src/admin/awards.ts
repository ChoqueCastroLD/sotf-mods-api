/**
 * Awards administration, read only (PLAN §7.4 "Admin"): `GET /admin/awards` lists the stored awards.
 * Creating and deleting awards answers 410: awards (Mod of the Week overrides, staff picks, Build
 * of the Month), their badges, signals and Discord posts were removed in the Classic redesign.
 */
import type { AwardInputBody, AwardListDTO } from '@sotf/contracts/admin';
import type { AwardDTO } from '@sotf/contracts/gamification';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import type { CatalogConfig } from '../catalog/media.ts';
import { getSnapshot } from '../catalog/snapshot.ts';
import { query, toDate } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { assertStaff } from '../moderation/guard.ts';

type Award = z.infer<typeof AwardDTO>;
type AwardInput = z.output<typeof AwardInputBody>;

interface AwardRow {
  id: number;
  kind: Award['kind'];
  modId: number;
  periodStart: string;
  periodEnd: string;
  reason: string | null;
  createdAt: Date | string;
}

const COLUMNS = sql.raw(
  `a."id", a."kind", a."modId", a."periodStart"::text AS "periodStart", a."periodEnd"::text AS "periodEnd", a."reason", a."createdAt"`,
);

async function toDtos(ctx: Ctx, config: CatalogConfig, list: readonly AwardRow[]): Promise<Award[]> {
  const snapshot = await getSnapshot(ctx, config);
  const out: Award[] = [];
  for (const r of list) {
    const entry = snapshot.byId.get(r.modId);
    if (!entry) continue;
    out.push({
      id: r.id,
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

/** `GET /admin/awards`: newest period first (≤ 500). */
export async function listAwards(ctx: Ctx, config: CatalogConfig): Promise<z.infer<typeof AwardListDTO>> {
  await assertStaff(ctx, 'admin.awards');
  const list = await query<AwardRow>(
    ctx.db,
    sql`SELECT ${COLUMNS} FROM "Award" a ORDER BY a."periodStart" DESC, a."id" DESC LIMIT 500`,
  );
  return { items: await toDtos(ctx, config, list) };
}

/** `POST /admin/awards`: awards were removed (Classic redesign); existing rows stay readable. */
export async function createAward(_ctx: Ctx, _config: CatalogConfig, _input: AwardInput): Promise<Award> {
  throw errors.gone('Awards were removed');
}

/** `DELETE /admin/awards/:id`: see `createAward`. */
export async function deleteAward(_ctx: Ctx, _id: number): Promise<void> {
  throw errors.gone('Awards were removed');
}
