/**
 * Queue assignment, escalation, reason templates and review metrics (PLAN §7.4: "asignarse el
 * ítem", shortcut `e` "escalar", "Plantillas de motivo", "Métricas visibles: tiempo medio de
 * revisión y SLA").
 *
 * - Assignment and escalation are stored per target in `"ModerationAssignment"` (migration 2004)
 *   and every change is audited (`queue.assign`, `queue.unassign`, `queue.escalate`,
 *   `queue.deescalate`); the lanes read the current state with `queueMarks`. Reports also keep
 *   `Report.assignedToId` up to date.
 * - An escalated item sorts as high risk until the escalation is cleared or the item leaves its
 *   lane (a decision, or a resubmission that starts a new review).
 * - The review time is measured from the `mod.submit` / `version.submit` entry that put the item
 *   in review (status `pending`) to the first decision on it (approve, reject, request changes,
 *   remove).
 */
import {
  type AssignItemBody,
  type EscalateItemBody,
  MODERATION_SLA_HOURS,
  type ModerationTemplateListDTO,
  type QueueItemDTO,
  type ReviewMetricsDTO,
} from '@sotf/contracts/moderation';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import { queryOne, toInt } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { DEFAULT_MODERATION_TEMPLATES, loadModerationTemplates } from '../settings/templates.ts';
import { assertStaff } from './guard.ts';
import { laneRowFor, parseItemId } from './item.ts';
import { toQueueItems } from './lanes.ts';
import type { ModerationDeps } from './shared.ts';

type QueueItem = z.infer<typeof QueueItemDTO>;
type ReviewMetrics = z.infer<typeof ReviewMetricsDTO>;
type TimeStats = ReviewMetrics['overall'];

async function currentItem(ctx: Ctx, deps: ModerationDeps, itemId: string): Promise<QueueItem> {
  const { lane, targetType, targetId } = parseItemId(itemId);
  const row = await laneRowFor(ctx, lane, targetType, targetId);
  if (!row) throw errors.notFound('Queue item');
  const [item] = await toQueueItems(ctx, deps, [row]);
  if (!item) throw errors.notFound('Queue item');
  return item;
}

/**
 * `POST /ranger/items/:id/assign`: takes the item (`assign: true`) or releases it. Taking an item
 * assigned to another ranger is a 409 (they must release it first); releasing is allowed to the
 * assignee and to admins. Idempotent.
 */
export async function assignQueueItem(
  ctx: Ctx,
  deps: ModerationDeps,
  itemId: string,
  body: z.output<typeof AssignItemBody>,
): Promise<QueueItem> {
  const actor = await assertStaff(ctx, 'moderation.queue');
  const { lane, targetType, targetId } = parseItemId(itemId);
  await ctx.db.transaction(async (tx) => {
    await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtextextended(${`queue:${targetType}:${targetId}`}, 0))`);
    const row = await laneRowFor({ ...ctx, db: tx }, lane, targetType, targetId);
    if (!row) throw errors.notFound('Queue item');
    const current = row.assigneeId;
    if (body.assign) {
      if (current === actor.userId) return;
      if (current !== null) throw errors.conflict('Another ranger took this item; ask them to release it');
    } else {
      if (current === null) return;
      if (current !== actor.userId && actor.role !== 'admin') {
        throw errors.forbidden('Only the assignee or an admin can release this item');
      }
    }
    const assigneeId = body.assign ? actor.userId : null;
    if (targetType === 'report') {
      await tx.execute(sql`UPDATE "Report" SET "assignedToId" = ${assigneeId} WHERE "id" = ${targetId}`);
    }
    const at = ctx.clock.now().toISOString();
    await tx.execute(
      sql`INSERT INTO "ModerationAssignment" ("targetType", "targetId", "assigneeId", "assignedAt", "updatedAt")
          VALUES (${targetType}, ${targetId}, ${assigneeId}, ${assigneeId === null ? null : at}::timestamptz, ${at}::timestamptz)
          ON CONFLICT ("targetType", "targetId") DO UPDATE
            SET "assigneeId" = EXCLUDED."assigneeId", "assignedAt" = EXCLUDED."assignedAt", "updatedAt" = EXCLUDED."updatedAt"`,
    );
    await recordAudit(tx, ctx, {
      action: body.assign ? 'queue.assign' : 'queue.unassign',
      targetType,
      targetId,
      before: { assigneeId: current },
      after: { assigneeId, lane },
    });
  });
  return currentItem(ctx, deps, itemId);
}

/**
 * `POST /ranger/items/:id/escalate`: escalates the item to the admins with a note, or clears the
 * escalation (`escalate: false`). Idempotent when clearing an item that is not escalated.
 */
export async function escalateQueueItem(
  ctx: Ctx,
  deps: ModerationDeps,
  itemId: string,
  body: z.output<typeof EscalateItemBody>,
): Promise<QueueItem> {
  const actor = await assertStaff(ctx, 'moderation.queue');
  const { lane, targetType, targetId } = parseItemId(itemId);
  const note = body.note?.trim() || null;
  if (body.escalate && (note === null || note.length < 3)) {
    throw errors.validation('A note is required to escalate', [
      { path: 'note', code: 'required', message: 'a note of at least 3 characters is required' },
    ]);
  }
  await ctx.db.transaction(async (tx) => {
    await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtextextended(${`queue:${targetType}:${targetId}`}, 0))`);
    const row = await laneRowFor({ ...ctx, db: tx }, lane, targetType, targetId);
    if (!row) throw errors.notFound('Queue item');
    if (!body.escalate && !row.escalation) return;
    const at = ctx.clock.now().toISOString();
    const escalatedAt = body.escalate ? at : null;
    const escalatedById = body.escalate ? actor.userId : null;
    const reason = body.escalate ? note : null;
    await tx.execute(
      sql`INSERT INTO "ModerationAssignment"
            ("targetType", "targetId", "escalatedAt", "escalatedById", "escalationReason", "updatedAt")
          VALUES (${targetType}, ${targetId}, ${escalatedAt}::timestamptz, ${escalatedById}, ${reason}, ${at}::timestamptz)
          ON CONFLICT ("targetType", "targetId") DO UPDATE
            SET "escalatedAt" = EXCLUDED."escalatedAt", "escalatedById" = EXCLUDED."escalatedById",
                "escalationReason" = EXCLUDED."escalationReason", "updatedAt" = EXCLUDED."updatedAt"`,
    );
    await recordAudit(tx, ctx, {
      action: body.escalate ? 'queue.escalate' : 'queue.deescalate',
      targetType,
      targetId,
      before: { escalated: row.escalation !== null && row.escalation !== undefined },
      after: { escalated: body.escalate, lane },
      reason: note,
    });
  });
  return currentItem(ctx, deps, itemId);
}

/** `GET /ranger/templates`: the reason templates in force (the admin setting or the built-ins). */
export async function listModerationTemplates(ctx: Ctx): Promise<z.infer<typeof ModerationTemplateListDTO>> {
  await assertStaff(ctx, 'moderation.queue');
  const items = await loadModerationTemplates(ctx.db);
  return {
    items: items.map((t) => ({ key: t.key, action: t.action, messages: { ...t.messages } })),
    source: items === DEFAULT_MODERATION_TEMPLATES ? 'built_in' : 'setting',
  };
}

const DECISIONS = {
  mod: ['mod.approve', 'mod.reject', 'mod.request_changes', 'mod.remove'],
  version: ['version.approve', 'version.reject', 'version.request_changes', 'version.remove'],
} as const;

const round1 = (n: number | null): number | null => (n === null ? null : Math.round(n * 10) / 10);

function statsOf(row: Record<string, unknown> | null | undefined): TimeStats {
  const num = (v: unknown) => (v === null || v === undefined ? null : Math.max(0, Number(v)));
  return {
    reviewed: toInt(row?.reviewed),
    meanHours: round1(num(row?.mean)),
    medianHours: round1(num(row?.median)),
    p90Hours: round1(num(row?.p90)),
    withinSla: toInt(row?.withinSla),
  };
}

/** `GET /ranger/metrics?days=`: review time and SLA over the decisions of the last `days` days. */
export async function reviewMetrics(ctx: Ctx, input: { days: number }): Promise<ReviewMetrics> {
  await assertStaff(ctx, 'moderation.queue');
  const now = ctx.clock.now();
  const since = new Date(now.getTime() - input.days * 86_400_000).toISOString();
  const decisions = sql.raw([...DECISIONS.mod, ...DECISIONS.version].map((a) => `'${a}'`).join(', '));
  const row = await queryOne<Record<string, unknown>>(
    ctx.db,
    sql`WITH reviews AS (
          SELECT s."targetType" AS "kind",
                 extract(epoch FROM (d."createdAt" - s."createdAt")) / 3600.0 AS "hours"
            FROM "AuditLog" s
            JOIN LATERAL (
              SELECT d."createdAt" FROM "AuditLog" d
               WHERE d."targetType" = s."targetType" AND d."targetId" = s."targetId"
                 AND d."action" IN (${decisions}) AND d."createdAt" >= s."createdAt"
               ORDER BY d."createdAt", d."id" LIMIT 1
            ) d ON true
           WHERE s."action" IN ('mod.submit', 'version.submit')
             AND coalesce(s."after"->>'status', '') = 'pending'
             AND d."createdAt" >= ${since}::timestamptz
        )
        SELECT
          count(*)::int AS "reviewed", avg("hours") AS "mean",
          percentile_cont(0.5) WITHIN GROUP (ORDER BY "hours") AS "median",
          percentile_cont(0.9) WITHIN GROUP (ORDER BY "hours") AS "p90",
          count(*) FILTER (WHERE "hours" <= ${MODERATION_SLA_HOURS})::int AS "withinSla",
          count(*) FILTER (WHERE "kind" = 'mod')::int AS "modReviewed",
          avg("hours") FILTER (WHERE "kind" = 'mod') AS "modMean",
          percentile_cont(0.5) WITHIN GROUP (ORDER BY "hours") FILTER (WHERE "kind" = 'mod') AS "modMedian",
          percentile_cont(0.9) WITHIN GROUP (ORDER BY "hours") FILTER (WHERE "kind" = 'mod') AS "modP90",
          count(*) FILTER (WHERE "kind" = 'mod' AND "hours" <= ${MODERATION_SLA_HOURS})::int AS "modWithinSla",
          count(*) FILTER (WHERE "kind" = 'version')::int AS "versionReviewed",
          avg("hours") FILTER (WHERE "kind" = 'version') AS "versionMean",
          percentile_cont(0.5) WITHIN GROUP (ORDER BY "hours") FILTER (WHERE "kind" = 'version') AS "versionMedian",
          percentile_cont(0.9) WITHIN GROUP (ORDER BY "hours") FILTER (WHERE "kind" = 'version') AS "versionP90",
          count(*) FILTER (WHERE "kind" = 'version' AND "hours" <= ${MODERATION_SLA_HOURS})::int AS "versionWithinSla"
        FROM reviews`,
  );
  const slaStart = sql`(${new Date(now.getTime() - MODERATION_SLA_HOURS * 3_600_000).toISOString()}::timestamptz AT TIME ZONE 'UTC')`;
  const openOverSla = await queryOne<{ n: number }>(
    ctx.db,
    sql`SELECT (
          (SELECT count(*) FROM "Mod" m
            WHERE m."status" = 'pending' AND m."userId" IS NOT NULL
              AND coalesce(m."statusChangedAt", m."createdAt") < ${slaStart})
          + (SELECT count(*) FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
              WHERE v."status" = 'pending' AND m."status" IN ('published', 'unlisted', 'archived') AND m."userId" IS NOT NULL
                AND coalesce(v."updatedAt", v."createdAt") < ${slaStart})
        )::int AS "n"`,
  );
  const pick = (prefix: string) =>
    statsOf({
      reviewed: row?.[`${prefix}Reviewed`],
      mean: row?.[`${prefix}Mean`],
      median: row?.[`${prefix}Median`],
      p90: row?.[`${prefix}P90`],
      withinSla: row?.[`${prefix}WithinSla`],
    });
  return {
    windowDays: input.days,
    slaHours: MODERATION_SLA_HOURS,
    overall: statsOf(row),
    byTarget: { mod: pick('mod'), version: pick('version') },
    openOverSla: toInt(openOverSla?.n),
  };
}
