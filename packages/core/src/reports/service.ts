/**
 * User reports (PLAN §7.4 "Reportes", §5.2 `POST /reports`, `GET /ranger/reports`,
 * `POST /ranger/reports/:id/resolve`).
 *
 * - Members with a verified email report a mod, version, comment, review, user, kit or compat
 *   report for one of the reasons of `REPORT_REASONS` (limit: the `reports` rate-limit bucket).
 *   One open report per reporter and target (a second one is a 409); own content cannot be
 *   reported (authors use "request removal" in Basecamp).
 * - Automatic hide: when ≥ 3 distinct reporters with trust level ≥ 1 have open reports on the
 *   same target, it is hidden until a ranger reviews it (`hideTarget`, audit `report.auto_hide`
 *   with no actor).
 * - Resolving closes every open report of the target at once (each reporter gets a
 *   `report.resolved` signal). `resolve` may hide the target; `dismiss` restores a target that was
 *   hidden by reports (auto or on resolution) when no report of it remains open.
 * - Every write refreshes the `reports` lane count on the rangers' SSE channel.
 */
import {
  type CreateReportBody,
  REPORT_AUTO_HIDE_THRESHOLD,
  type ReportCreatedDTO,
  type ReportDTO,
  type ReportPageDTO,
  type ResolveReportBody,
} from '@sotf/contracts/moderation';
import { decodeCursor, encodeCursor } from '@sotf/contracts/pagination';
import type { Transaction } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import type { CatalogConfig } from '../catalog/media.ts';
import { loadUserRefs } from '../compat/shared.ts';
import { query, queryOne, sqlState, toDate } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { assertStaff, loadSubject } from '../moderation/guard.ts';
import { publishLaneCounts } from '../moderation/lanes.ts';
import { hideTarget, loadTarget, REPORT_HIDE_REASON, type ReportTargetType, restoreTarget } from './targets.ts';

type Report = z.infer<typeof ReportDTO>;
type ReportPage = z.infer<typeof ReportPageDTO>;
type CreateReportInput = z.output<typeof CreateReportBody>;
type ResolveReportInput = z.output<typeof ResolveReportBody>;

const UNIQUE_VIOLATION = '23505';

/** Audit actions that mean "hidden because of reports" (restorable on dismissal). */
const REPORT_HIDE_ACTIONS = ['report.auto_hide', 'report.hide_target'] as const;

interface ReportRow {
  id: string | number;
  reporterId: number;
  targetType: ReportTargetType;
  targetId: number;
  reason: Report['reason'];
  details: string | null;
  status: Report['status'];
  assignedToId: number | null;
  resolution: string | null;
  resolvedAt: Date | string | null;
  createdAt: Date | string;
}

const REPORT_COLUMNS = sql.raw(
  `r."id", r."reporterId", r."targetType", r."targetId", r."reason", r."details", r."status", r."assignedToId",
   r."resolution", r."resolvedAt", r."createdAt"`,
);

async function toDtos(ctx: Ctx, config: CatalogConfig, list: readonly ReportRow[]): Promise<Report[]> {
  const refs = await loadUserRefs(
    ctx.db,
    config,
    list.flatMap((r) => [r.reporterId, r.assignedToId]).filter((id): id is number => id !== null),
  );
  const targets = new Map<string, Awaited<ReturnType<typeof loadTarget>>>();
  for (const r of list) {
    const key = `${r.targetType}:${r.targetId}`;
    if (!targets.has(key)) targets.set(key, await loadTarget(ctx.db, r.targetType, r.targetId));
  }
  return list.map((r) => {
    const target = targets.get(`${r.targetType}:${r.targetId}`) ?? null;
    return {
      id: Number(r.id),
      targetType: r.targetType,
      targetId: r.targetId,
      target: target ? { title: target.title, path: target.path } : null,
      reason: r.reason,
      details: r.details,
      status: r.status,
      reporter: refs.get(r.reporterId) ?? null,
      assignee: r.assignedToId === null ? null : (refs.get(r.assignedToId) ?? null),
      resolution: r.resolution,
      resolvedAt: toDate(r.resolvedAt)?.toISOString() ?? null,
      createdAt: (toDate(r.createdAt) ?? new Date(0)).toISOString(),
    };
  });
}

// -----------------------------------------------------------------------------------------------
// Create
// -----------------------------------------------------------------------------------------------

/** Distinct reporters with trust level ≥ 1 that have an open report on the target. */
async function trustedReporters(tx: Transaction, type: ReportTargetType, id: number): Promise<number> {
  const row = await queryOne<{ n: number }>(
    tx,
    sql`SELECT count(DISTINCT r."reporterId")::int AS "n"
          FROM "Report" r JOIN "User" u ON u."id" = r."reporterId"
         WHERE r."targetType" = ${type} AND r."targetId" = ${id} AND r."status" = 'open'
           AND u."trustLevel" >= 1 AND u."deletedAt" IS NULL AND u."bannedAt" IS NULL`,
  );
  return row?.n ?? 0;
}

/** Whether the latest audit entry about the target is a report hide (it is ours to undo). */
async function hiddenByReports(tx: Transaction, type: ReportTargetType, id: number): Promise<boolean> {
  const row = await queryOne<{ action: string }>(
    tx,
    sql`SELECT "action" FROM "AuditLog" WHERE "targetType" = ${type} AND "targetId" = ${id}
         ORDER BY "createdAt" DESC, "id" DESC LIMIT 1`,
  );
  return row !== null && (REPORT_HIDE_ACTIONS as readonly string[]).includes(row.action);
}

/** `POST /reports`. */
export async function createReport(ctx: Ctx, input: CreateReportInput): Promise<z.infer<typeof ReportCreatedDTO>> {
  const subject = await loadSubject(ctx);
  if (!subject) throw errors.unauthenticated();
  if (!subject.emailVerified) throw new DomainError('EMAIL_NOT_VERIFIED', undefined, 'Verify your email first');
  const target = await loadTarget(ctx.db, input.targetType, input.targetId);
  if (!target || target.gone) throw errors.notFound('Reported content');
  if (target.ownerId === subject.userId) {
    throw errors.conflict('You cannot report your own content (use "request removal" in Basecamp)');
  }
  try {
    return await ctx.db.transaction(async (tx) => {
      // Serialises the threshold check of concurrent reports on the same target.
      await tx.execute(
        sql`SELECT pg_advisory_xact_lock(hashtextextended(${`Report:${input.targetType}:${input.targetId}`}, 0))`,
      );
      const created = await queryOne<{ id: string | number }>(
        tx,
        sql`INSERT INTO "Report" ("reporterId", "targetType", "targetId", "reason", "details")
            VALUES (${subject.userId}, ${input.targetType}, ${input.targetId}, ${input.reason},
                    ${input.details?.trim() || null})
            RETURNING "id"`,
      );
      if (!created) throw new Error('Report insert returned no row');
      const reportId = Number(created.id);
      await ctx.jobs.emitNew(
        tx,
        'report.created',
        { reportId, reporterId: subject.userId, targetType: input.targetType, targetId: input.targetId },
        { actorId: subject.userId },
      );
      const reporters = await trustedReporters(tx, input.targetType, input.targetId);
      if (reporters >= REPORT_AUTO_HIDE_THRESHOLD) {
        const hidden = await hideTarget(ctx, tx, input.targetType, input.targetId, REPORT_HIDE_REASON, null);
        if (hidden) {
          await recordAudit(tx, ctx, {
            action: 'report.auto_hide',
            targetType: input.targetType,
            targetId: input.targetId,
            after: { hidden: true, trustedReporters: reporters },
            reason: REPORT_HIDE_REASON,
            actorId: null,
          });
          ctx.log.info(
            { targetType: input.targetType, targetId: input.targetId, reporters },
            'content hidden by reports',
          );
        }
      }
      await publishLaneCounts(tx, ctx.clock.now(), ['reports']);
      return { id: reportId, status: 'open' as const };
    });
  } catch (error) {
    if (sqlState(error) === UNIQUE_VIOLATION)
      throw errors.conflict('You already reported this; a ranger will look at it');
    throw error;
  }
}

// -----------------------------------------------------------------------------------------------
// Rangers
// -----------------------------------------------------------------------------------------------

/** `GET /ranger/reports?status=&cursor=&limit=` (open reports oldest first, closed newest first). */
export async function listReports(
  ctx: Ctx,
  config: CatalogConfig,
  input: { status: 'open' | 'resolved' | 'dismissed' | 'all'; cursor?: string | undefined; limit: number },
): Promise<ReportPage> {
  await assertStaff(ctx, 'moderation.reports');
  const ascending = input.status === 'open';
  const where: SQL[] = [input.status === 'all' ? sql`TRUE` : sql`r."status" = ${input.status}`];
  if (input.cursor) {
    const position = decodeCursor(input.cursor);
    if (!position || !/^\d+$/.test(position.id)) {
      throw errors.validation('Invalid cursor', [{ path: 'cursor', code: 'invalid', message: 'invalid cursor' }]);
    }
    const key = sql`(${position.createdAt}::timestamptz, ${Number(position.id)}::bigint)`;
    where.push(ascending ? sql`(r."createdAt", r."id") > ${key}` : sql`(r."createdAt", r."id") < ${key}`);
  }
  const order = ascending ? sql`r."createdAt" ASC, r."id" ASC` : sql`r."createdAt" DESC, r."id" DESC`;
  const list = await query<ReportRow>(
    ctx.db,
    sql`SELECT ${REPORT_COLUMNS} FROM "Report" r WHERE ${sql.join(where, sql` AND `)} ORDER BY ${order} LIMIT ${input.limit + 1}`,
  );
  const page = list.slice(0, input.limit);
  const last = page[page.length - 1];
  return {
    items: await toDtos(ctx, config, page),
    nextCursor:
      list.length > input.limit && last
        ? encodeCursor({ createdAt: (toDate(last.createdAt) ?? new Date(0)).toISOString(), id: Number(last.id) })
        : null,
  };
}

/**
 * One report as a `ReportDTO` (null when it does not exist). No permission check: callers are
 * staff services that already ran `assertStaff` (the queue item view).
 */
export async function getReport(ctx: Ctx, config: CatalogConfig, id: number): Promise<Report | null> {
  const row = await queryOne<ReportRow>(ctx.db, sql`SELECT ${REPORT_COLUMNS} FROM "Report" r WHERE r."id" = ${id}`);
  if (!row) return null;
  const [dto] = await toDtos(ctx, config, [row]);
  return dto ?? null;
}

/** `POST /ranger/reports/:id/resolve`. */
export async function resolveReport(
  ctx: Ctx,
  config: CatalogConfig,
  id: number,
  input: ResolveReportInput,
): Promise<Report> {
  const actor = await assertStaff(ctx, 'moderation.reports');
  const note = input.note?.trim() || null;
  await ctx.db.transaction(async (tx) => {
    const report = await queryOne<ReportRow>(
      tx,
      sql`SELECT ${REPORT_COLUMNS} FROM "Report" r WHERE r."id" = ${id} FOR UPDATE`,
    );
    if (!report) throw errors.notFound('Report');
    if (report.status !== 'open') throw errors.conflict('This report is already closed');
    await tx.execute(
      sql`SELECT pg_advisory_xact_lock(hashtextextended(${`Report:${report.targetType}:${report.targetId}`}, 0))`,
    );
    const now = ctx.clock.now().toISOString();
    const status = input.action === 'resolve' ? 'resolved' : 'dismissed';
    const closed = await query<{ id: string | number; reporterId: number }>(
      tx,
      sql`UPDATE "Report" SET "status" = ${status}, "resolution" = ${note}, "resolvedById" = ${actor.userId},
                 "resolvedAt" = ${now}::timestamptz
           WHERE "targetType" = ${report.targetType} AND "targetId" = ${report.targetId} AND "status" = 'open'
       RETURNING "id", "reporterId"`,
    );
    let hidden = false;
    let restored = false;
    if (input.action === 'resolve' && input.hideTarget) {
      hidden = await hideTarget(ctx, tx, report.targetType, report.targetId, REPORT_HIDE_REASON, actor.userId);
      if (hidden) {
        await recordAudit(tx, ctx, {
          action: 'report.hide_target',
          targetType: report.targetType,
          targetId: report.targetId,
          after: { hidden: true, reportId: Number(report.id) },
          reason: note ?? REPORT_HIDE_REASON,
        });
      }
    }
    if (input.action === 'dismiss' && (await hiddenByReports(tx, report.targetType, report.targetId))) {
      restored = await restoreTarget(ctx, tx, report.targetType, report.targetId, actor.userId);
      if (restored) {
        await recordAudit(tx, ctx, {
          action: 'report.restore_target',
          targetType: report.targetType,
          targetId: report.targetId,
          after: { hidden: false, reportId: Number(report.id) },
          reason: note,
        });
      }
    }
    await recordAudit(tx, ctx, {
      action: `report.${input.action}`,
      targetType: 'report',
      targetId: Number(report.id),
      before: { status: 'open' },
      after: {
        status,
        target: `${report.targetType}:${report.targetId}`,
        closedReportIds: closed.map((c) => Number(c.id)),
        hidden,
        restored,
      },
      reason: note,
    });
    for (const c of closed) {
      await ctx.jobs.emitNew(
        tx,
        'report.resolved',
        { reportId: Number(c.id), reporterId: c.reporterId, action: input.action },
        { actorId: actor.userId },
      );
    }
    await publishLaneCounts(tx, ctx.clock.now(), ['reports']);
  });
  const row = await queryOne<ReportRow>(ctx.db, sql`SELECT ${REPORT_COLUMNS} FROM "Report" r WHERE r."id" = ${id}`);
  if (!row) throw errors.notFound('Report');
  const [dto] = await toDtos(ctx, config, [row]);
  if (!dto) throw errors.notFound('Report');
  return dto;
}
