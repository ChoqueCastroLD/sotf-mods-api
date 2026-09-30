/**
 * Awards administration (PLAN §7.2 "Premios", §7.4 "Admin"): Mod of the Week overrides, staff
 * picks, Build/Mod of the Month. 👑 admin, session < 12 h, `AuditLog`.
 *
 * - `POST /admin/awards` upserts by `(kind, periodStart)` (the unique key): an admin choice
 *   replaces the automatic Mod of the Week of the same week. The mod must be published; builds
 *   only for `build_of_month`, mods and libraries for the other kinds. Emits `award.created`
 *   (winner signal, badge evaluation, Discord, home/mod purge).
 * - `DELETE /admin/awards/:id` removes it and purges the home page and the mod page.
 * - When a replace or a delete takes an award away from an author, `gamification.evaluate
 *   {userId}` is enqueued for that author so the award badge is revoked now rather than at the
 *   nightly reconciliation.
 */
import type { AwardInputBody, AwardListDTO } from '@sotf/contracts/admin';
import type { AwardDTO } from '@sotf/contracts/gamification';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import type { CatalogConfig } from '../catalog/media.ts';
import { getSnapshot } from '../catalog/snapshot.ts';
import { query, queryOne, toDate } from '../follows/sql.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
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

/** Enqueues a badge re-evaluation of the author of `modId` (in `tx`); no-op for orphan mods. */
async function reevaluateAuthorOf(ctx: Ctx, tx: Executor, modId: number): Promise<void> {
  const owner = await queryOne<{ userId: number | null }>(tx, sql`SELECT "userId" FROM "Mod" WHERE "id" = ${modId}`);
  if (owner?.userId == null) return;
  await ctx.jobs.enqueue('gamification.evaluate', { userId: owner.userId, nightly: false }, { tx });
}

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

/** `POST /admin/awards`. */
export async function createAward(ctx: Ctx, config: CatalogConfig, input: AwardInput): Promise<Award> {
  const actor = await assertStaff(ctx, 'admin.awards');
  if (input.periodEnd < input.periodStart) {
    throw errors.validation('The period ends before it starts', [
      { path: 'periodEnd', code: 'invalid_period', message: 'periodEnd < periodStart' },
    ]);
  }
  const row = await ctx.db.transaction(async (tx) => {
    const target = await queryOne<{ id: number; userId: number | null; status: string; type: string | null }>(
      tx,
      sql`SELECT "id", "userId", "status", "type" FROM "Mod" WHERE "id" = ${input.modId}`,
    );
    if (!target || target.userId === null) throw errors.notFound('Mod');
    if (target.status !== 'published') throw errors.conflict('Only published mods can receive awards');
    const isBuild = target.type === 'Build';
    if ((input.kind === 'build_of_month') !== isBuild) {
      throw errors.validation('Build of the Month goes to builds; the other awards go to mods', [
        { path: 'kind', code: 'kind_mismatch', message: input.kind },
      ]);
    }
    const before = await queryOne<AwardRow>(
      tx,
      sql`SELECT ${COLUMNS} FROM "Award" a WHERE a."kind" = ${input.kind} AND a."periodStart" = ${input.periodStart}::date FOR UPDATE`,
    );
    const saved = await queryOne<AwardRow>(
      tx,
      sql`INSERT INTO "Award" AS a ("kind", "modId", "periodStart", "periodEnd", "reason", "createdById")
          VALUES (${input.kind}, ${input.modId}, ${input.periodStart}::date, ${input.periodEnd}::date,
                  ${input.reason?.trim() || null}, ${actor.userId})
          ON CONFLICT ("kind", "periodStart") DO UPDATE SET "modId" = EXCLUDED."modId", "periodEnd" = EXCLUDED."periodEnd",
                 "reason" = EXCLUDED."reason", "createdById" = EXCLUDED."createdById", "createdAt" = now()
          RETURNING ${COLUMNS}`,
    );
    if (!saved) throw new Error('Award upsert returned no row');
    await recordAudit(tx, ctx, {
      action: before ? 'award.replace' : 'award.create',
      targetType: 'award',
      targetId: saved.id,
      before: before
        ? { kind: before.kind, modId: before.modId, periodStart: before.periodStart, periodEnd: before.periodEnd }
        : null,
      after: { kind: saved.kind, modId: saved.modId, periodStart: saved.periodStart, periodEnd: saved.periodEnd },
      reason: input.reason ?? null,
    });
    await ctx.jobs.emitNew(
      tx,
      'award.created',
      {
        awardId: saved.id,
        kind: saved.kind,
        modId: saved.modId,
        authorId: target.userId,
        periodStart: saved.periodStart,
      },
      { actorId: actor.userId },
    );
    if (before && before.modId !== saved.modId) await reevaluateAuthorOf(ctx, tx, before.modId);
    const tags = [
      'home',
      `mod:${saved.modId}`,
      ...(before && before.modId !== saved.modId ? [`mod:${before.modId}`] : []),
    ];
    await publishCacheInvalidation(tx, tags);
    await purge(ctx.jobs, tags, 'award saved', { tx });
    return saved;
  });
  const [dto] = await toDtos(ctx, config, [row]);
  if (!dto) throw errors.notFound('Mod');
  return dto;
}

/** `DELETE /admin/awards/:id`. */
export async function deleteAward(ctx: Ctx, id: number): Promise<void> {
  await assertStaff(ctx, 'admin.awards');
  await ctx.db.transaction(async (tx) => {
    const before = await queryOne<AwardRow>(tx, sql`DELETE FROM "Award" a WHERE a."id" = ${id} RETURNING ${COLUMNS}`);
    if (!before) throw errors.notFound('Award');
    await recordAudit(tx, ctx, {
      action: 'award.delete',
      targetType: 'award',
      targetId: id,
      before: { kind: before.kind, modId: before.modId, periodStart: before.periodStart, periodEnd: before.periodEnd },
    });
    await reevaluateAuthorOf(ctx, tx, before.modId);
    const tags = ['home', `mod:${before.modId}`];
    await publishCacheInvalidation(tx, tags);
    await purge(ctx.jobs, tags, 'award deleted', { tx });
  });
}
