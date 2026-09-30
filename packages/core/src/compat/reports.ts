/**
 * Field reports (PLAN §7.10 "Reportes", §5.2): "does version X work on build Y in mode Z?".
 *
 * - Writing needs a verified email and an account that is not suspended (`compat.report`).
 * - One report per (user, version, build, mode): posting again updates it (201 either way). The
 *   version must be reachable (public mod, visible version) and the build registered.
 * - Every write schedules `compat.aggregate` for the version × build inside its transaction
 *   (pg-boss debounces bursts). Only the first report emits `compat.report_created` (XP and stats
 *   count reports, not edits).
 * - The mod author may acknowledge a report, optionally "fixed in vX" (a version of the same mod):
 *   `compat.report_acknowledged` notifies the reporter.
 */
import type { CompatReportDTO, CreateCompatReportBody, PatchCompatReportBody } from '@sotf/contracts/compat';
import { type Executor, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { assertReachable } from '../catalog/detail.ts';
import { getSnapshot } from '../catalog/snapshot.ts';
import { at, query, queryOne, toDate } from '../follows/sql.ts';
import { type Ctx, hasRole } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { assertCan } from '../permissions/can.ts';
import { REPORTABLE_VERSION_SQL } from './aggregate.ts';
import { type CompatDeps, loadUserRefs, subjectOf } from './shared.ts';

type ReportDTO = z.infer<typeof CompatReportDTO>;
type CreateInput = z.output<typeof CreateCompatReportBody>;
type PatchInput = z.output<typeof PatchCompatReportBody>;

interface ReportRow {
  id: number;
  userId: number;
  modVersionId: number;
  gameBuildId: number;
  mode: ReportDTO['mode'];
  result: ReportDTO['result'];
  note: string | null;
  otherMods: string | null;
  acknowledgedAt: Date | string | null;
  fixedInVersionId: number | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  modId: number | null;
  authorId: number | null;
}

const REPORT_SELECT = sql`
SELECT r."id"::int AS "id", r."userId", r."modVersionId", r."gameBuildId", r."mode", r."result", r."note",
       r."otherMods", r."acknowledgedAt", r."fixedInVersionId", r."createdAt", r."updatedAt",
       v."modId", m."userId" AS "authorId"
  FROM "CompatReport" r
  JOIN "ModVersion" v ON v."id" = r."modVersionId"
  LEFT JOIN "Mod" m ON m."id" = v."modId"`;

async function loadReport(db: Executor, id: number, forUpdate = false): Promise<ReportRow | null> {
  return queryOne<ReportRow>(
    db,
    forUpdate ? sql`${REPORT_SELECT} WHERE r."id" = ${id} FOR UPDATE OF r` : sql`${REPORT_SELECT} WHERE r."id" = ${id}`,
  );
}

const iso = (value: Date | string | null): string | null => toDate(value)?.toISOString() ?? null;

async function reportDto(db: Executor, deps: CompatDeps, r: ReportRow): Promise<ReportDTO> {
  const refs = await loadUserRefs(db, deps.config, [r.userId]);
  return {
    id: r.id,
    modVersionId: r.modVersionId,
    gameBuildId: r.gameBuildId,
    mode: r.mode,
    result: r.result,
    note: r.note,
    otherMods: r.otherMods,
    reporter: refs.get(r.userId) ?? null,
    acknowledgedAt: iso(r.acknowledgedAt),
    fixedInVersionId: r.fixedInVersionId,
    createdAt: iso(r.createdAt) ?? new Date(0).toISOString(),
    updatedAt: iso(r.updatedAt) ?? new Date(0).toISOString(),
  };
}

/** Trimmed optional text: empty → null. */
function text(value: string | null | undefined): string | null {
  if (value === null || value === undefined) return null;
  const trimmed = value.trim();
  return trimmed === '' ? null : trimmed;
}

async function assertMayReport(ctx: Ctx): Promise<number> {
  const subject = await subjectOf(ctx);
  assertCan(subject, 'compat.report', undefined, ctx.clock.now());
  return subject.userId;
}

/** The version must belong to a mod a visitor can reach, and be visible itself. */
async function assertReportableVersion(ctx: Ctx, deps: CompatDeps, modVersionId: number): Promise<number> {
  const version = await queryOne<{ modId: number | null }>(
    ctx.db,
    sql`SELECT v."modId" FROM "ModVersion" v WHERE v."id" = ${modVersionId} AND ${REPORTABLE_VERSION_SQL}`,
  );
  if (!version || version.modId === null) throw errors.notFound('Version');
  const snapshot = await getSnapshot(ctx, deps.config);
  const entry = assertReachable(snapshot, snapshot.byId.get(version.modId));
  return entry.id;
}

/** `POST /compat-reports`: creates or updates the caller's report for (version, build, mode). */
export async function createCompatReport(ctx: Ctx, deps: CompatDeps, input: CreateInput): Promise<ReportDTO> {
  const userId = await assertMayReport(ctx);
  const modId = await assertReportableVersion(ctx, deps, input.modVersionId);
  const build = await queryOne<{ id: number }>(
    ctx.db,
    sql`SELECT "id" FROM "GameBuild" WHERE "id" = ${input.gameBuildId}`,
  );
  if (!build) throw errors.notFound('Game build');
  const note = text(input.note);
  const otherMods = text(input.otherMods);
  const now = ctx.clock.now();

  return withTx(ctx.db, async (tx) => {
    const [written] = await query<{ id: number; inserted: boolean }>(
      tx,
      sql`INSERT INTO "CompatReport" ("userId", "modVersionId", "gameBuildId", "mode", "result", "note", "otherMods",
                                      "createdAt", "updatedAt")
          VALUES (${userId}, ${input.modVersionId}, ${input.gameBuildId}, ${input.mode}, ${input.result}, ${note},
                  ${otherMods}, ${at(now)}, ${at(now)})
          ON CONFLICT ("userId", "modVersionId", "gameBuildId", "mode") DO UPDATE SET
            "result" = EXCLUDED."result", "note" = EXCLUDED."note", "otherMods" = EXCLUDED."otherMods",
            "updatedAt" = EXCLUDED."updatedAt"
          RETURNING "id"::int AS "id", (xmax = 0) AS "inserted"`,
    );
    if (!written) throw new Error('CompatReport upsert returned no row');
    if (written.inserted) {
      await ctx.jobs.emitNew(
        tx,
        'compat.report_created',
        {
          reportId: written.id,
          userId,
          modId,
          modVersionId: input.modVersionId,
          gameBuildId: input.gameBuildId,
          result: input.result,
        },
        { actorId: userId },
      );
    }
    await ctx.jobs.enqueue(
      'compat.aggregate',
      { modVersionId: input.modVersionId, gameBuildId: input.gameBuildId },
      { tx },
    );
    const row = await loadReport(tx, written.id);
    if (!row) throw errors.notFound('Report');
    return reportDto(tx, deps, row);
  });
}

/** `PATCH /compat-reports/:id`: edits the caller's own report. */
export async function updateCompatReport(
  ctx: Ctx,
  deps: CompatDeps,
  id: number,
  input: PatchInput,
): Promise<ReportDTO> {
  const userId = await assertMayReport(ctx);
  return withTx(ctx.db, async (tx) => {
    const before = await loadReport(tx, id, true);
    if (!before) throw errors.notFound('Report');
    if (before.userId !== userId) throw errors.forbidden('You can only edit your own reports');
    const result = input.result ?? before.result;
    const note = input.note === undefined ? before.note : text(input.note);
    const otherMods = input.otherMods === undefined ? before.otherMods : text(input.otherMods);
    const changed = result !== before.result || note !== before.note || otherMods !== before.otherMods;
    if (changed) {
      await tx.execute(
        sql`UPDATE "CompatReport" SET "result" = ${result}, "note" = ${note}, "otherMods" = ${otherMods},
                   "updatedAt" = ${at(ctx.clock.now())}
             WHERE "id" = ${id}`,
      );
      if (result !== before.result) {
        await ctx.jobs.enqueue(
          'compat.aggregate',
          { modVersionId: before.modVersionId, gameBuildId: before.gameBuildId },
          { tx },
        );
      }
    }
    const row = await loadReport(tx, id);
    if (!row) throw errors.notFound('Report');
    return reportDto(tx, deps, row);
  });
}

/** `DELETE /compat-reports/:id`: the reporter (or staff) deletes a report. */
export async function deleteCompatReport(ctx: Ctx, id: number): Promise<void> {
  const subject = await subjectOf(ctx);
  await withTx(ctx.db, async (tx) => {
    const before = await loadReport(tx, id, true);
    if (!before) throw errors.notFound('Report');
    const own = before.userId === subject.userId;
    if (!own && !hasRole(subject, 'moderator')) throw errors.forbidden('You can only delete your own reports');
    await tx.execute(sql`DELETE FROM "CompatReport" WHERE "id" = ${id}`);
    await ctx.jobs.enqueue(
      'compat.aggregate',
      { modVersionId: before.modVersionId, gameBuildId: before.gameBuildId },
      { tx },
    );
  });
}

/**
 * `POST /compat-reports/:id/acknowledge`: the mod author marks a report as seen, optionally fixed
 * in a later version of the same mod. Repeating the same acknowledgement is a no-op.
 */
export async function acknowledgeCompatReport(
  ctx: Ctx,
  deps: CompatDeps,
  id: number,
  fixedInVersionId: number | undefined,
): Promise<ReportDTO> {
  const subject = await subjectOf(ctx);
  return withTx(ctx.db, async (tx) => {
    const before = await loadReport(tx, id, true);
    if (!before || before.modId === null) throw errors.notFound('Report');
    if (before.authorId === null || before.authorId !== subject.userId) {
      throw errors.forbidden('Only the author of the mod can acknowledge reports');
    }
    if (fixedInVersionId !== undefined) {
      const fixed = await queryOne<{ id: number }>(
        tx,
        sql`SELECT v."id" FROM "ModVersion" v
             WHERE v."id" = ${fixedInVersionId} AND v."modId" = ${before.modId} AND ${REPORTABLE_VERSION_SQL}`,
      );
      if (!fixed) {
        throw errors.validation('The fixed-in version must be a public version of this mod', [
          { path: 'fixedInVersionId', message: 'Unknown version of this mod' },
        ]);
      }
    }
    const nextFixed = fixedInVersionId ?? before.fixedInVersionId;
    const repeat = before.acknowledgedAt !== null && nextFixed === before.fixedInVersionId;
    if (!repeat) {
      await tx.execute(
        sql`UPDATE "CompatReport" SET "acknowledgedAt" = ${at(ctx.clock.now())}, "fixedInVersionId" = ${nextFixed}
             WHERE "id" = ${id}`,
      );
      await ctx.jobs.emitNew(
        tx,
        'compat.report_acknowledged',
        { reportId: id, modId: before.modId, reporterId: before.userId, fixedInVersionId: nextFixed },
        { actorId: subject.userId },
      );
    }
    const row = await loadReport(tx, id);
    if (!row) throw errors.notFound('Report');
    return reportDto(tx, deps, row);
  });
}
