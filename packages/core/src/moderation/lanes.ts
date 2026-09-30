/**
 * Ranger Station lanes (PLAN §7.4 "Colas", §5.2 `GET /ranger/queue?lane=`).
 *
 * | Lane | Items |
 * |---|---|
 * | `new_mods` | mods and libraries in `pending` (first review, resubmissions and the legacy unapproved mods, which stay here untouched — PLAN §14.1) |
 * | `versions` | held versions (`pending`: flagged file or security scan) of mods that are already listed |
 * | `post_review` | versions published without a human look (checks passed, verified creators, 0 detections) during the last 30 days that no ranger has reviewed yet; SLA 72 h |
 * | `builds` | builds in `pending` plus auto-published build versions awaiting their post-review |
 * | `reports` | open user reports |
 * | `comments` | comments held for review (`pending`: links from new accounts, spam heuristics) |
 *
 * Every lane is sorted by risk (high first) and then by waiting time (oldest first); the cursor
 * keeps that order. The page carries the counts of every lane (the tab badges); the same counts are
 * pushed to the `moderation` SSE channel after every change (`publishLaneCounts`).
 */
import type { UserRefDTO } from '@sotf/contracts/common';
import type { ModerationLane, QueueItemDTO, QueuePageDTO } from '@sotf/contracts/moderation';
import { decodeCursor, encodeCursor } from '@sotf/contracts/pagination';
import type { Executor } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { getSnapshot } from '../catalog/snapshot.ts';
import { loadUserRefs } from '../compat/shared.ts';
import { intArray, query, queryOne, toDate, toInt } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { newId } from '../kernel/ids.ts';
import { publishModerationQueue } from '../realtime/index.ts';
import { assertStaff } from './guard.ts';
import {
  flagsOf,
  inspectionFacts,
  LANES,
  latestScans,
  type ModerationDeps,
  POST_REVIEW_DONE_ACTIONS,
  POST_REVIEW_WINDOW_DAYS,
  RISK_RANK,
  type Risk,
  reportRisk,
  riskOf,
  verifiedAuthors,
} from './shared.ts';

type QueueItem = z.infer<typeof QueueItemDTO>;
type QueuePage = z.infer<typeof QueuePageDTO>;
type TargetType = QueueItem['targetType'];

/** Items loaded per lane before sorting (the lanes are small; the SLA keeps them short). */
export const LANE_SCAN_LIMIT = 1000;

const DONE = sql.raw(POST_REVIEW_DONE_ACTIONS.map((a) => `'${a}'`).join(', '));

function postReviewWindow(now: Date): SQL {
  return sql`(${new Date(now.getTime() - POST_REVIEW_WINDOW_DAYS * 86_400_000).toISOString()}::timestamptz AT TIME ZONE 'UTC')`;
}

/** Condition of the post-review lanes (`build` = the builds lane, else mods and libraries). */
function postReviewCondition(now: Date, build: boolean): SQL {
  return sql`v."status" = 'active' AND v."publishedById" IS NOT NULL AND v."publishedAt" >= ${postReviewWindow(now)}
    AND m."status" IN ('published', 'unlisted', 'archived') AND m."userId" IS NOT NULL
    AND ${build ? sql`m."type" = 'Build'` : sql`coalesce(m."type", 'Mod') <> 'Build'`}
    AND NOT EXISTS (SELECT 1 FROM "User" p WHERE p."id" = v."publishedById" AND p."role" IN ('moderator', 'admin'))
    AND NOT EXISTS (SELECT 1 FROM "AuditLog" a WHERE a."targetType" = 'version' AND a."targetId" = v."id"
                      AND a."action" IN (${DONE}))`;
}

const NEW_MODS = sql`m."status" = 'pending' AND m."userId" IS NOT NULL AND coalesce(m."type", 'Mod') <> 'Build'`;
const PENDING_BUILDS = sql`m."status" = 'pending' AND m."userId" IS NOT NULL AND m."type" = 'Build'`;
const HELD_VERSIONS = sql`v."status" = 'pending' AND m."status" IN ('published', 'unlisted', 'archived')
  AND m."userId" IS NOT NULL AND coalesce(m."type", 'Mod') <> 'Build'`;

// -----------------------------------------------------------------------------------------------
// Counts
// -----------------------------------------------------------------------------------------------

/** Number of items in every lane. */
export async function laneCounts(exec: Executor, now: Date): Promise<Record<ModerationLane, number>> {
  const row = await queryOne<Record<ModerationLane, number>>(
    exec,
    sql`SELECT
          (SELECT count(*)::int FROM "Mod" m WHERE ${NEW_MODS}) AS "new_mods",
          (SELECT count(*)::int FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId" WHERE ${HELD_VERSIONS}) AS "versions",
          (SELECT count(*)::int FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId" WHERE ${postReviewCondition(now, false)}) AS "post_review",
          ((SELECT count(*)::int FROM "Mod" m WHERE ${PENDING_BUILDS})
            + (SELECT count(*)::int FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
                WHERE (${postReviewCondition(now, true)}) OR (v."status" = 'pending' AND m."type" = 'Build'
                      AND m."status" IN ('published', 'unlisted', 'archived')))) AS "builds",
          (SELECT count(*)::int FROM "Report" r WHERE r."status" = 'open') AS "reports",
          (SELECT count(*)::int FROM "Comment" c WHERE c."status" = 'pending') AS "comments"`,
  );
  const out = {} as Record<ModerationLane, number>;
  for (const lane of LANES) out[lane] = toInt(row?.[lane]);
  return out;
}

/**
 * Pushes the lane counts to the rangers' SSE channel (`moderation.queue`). Call it inside the
 * transaction of any write that moves items between lanes; the notices are sent on commit.
 */
export async function publishLaneCounts(
  exec: Executor,
  now: Date,
  lanes: readonly ModerationLane[] = LANES,
): Promise<void> {
  const counts = await laneCounts(exec, now);
  for (const lane of new Set(lanes)) {
    await publishModerationQueue(exec, { lane, count: counts[lane], id: newId() });
  }
}

// -----------------------------------------------------------------------------------------------
// Items
// -----------------------------------------------------------------------------------------------

/** One candidate of a lane before sorting. */
export interface LaneRow {
  lane: ModerationLane;
  targetType: TargetType;
  targetId: number;
  modId: number | null;
  authorId: number | null;
  title: string;
  submittedAt: Date;
  risk: Risk;
  flags: QueueItem['flags'];
  assigneeId: number | null;
  /** Filled by `applyQueueMarks` (escalations live in `"ModerationAssignment"`). */
  escalation?: QueueMark['escalation'];
}

/** Assignment and escalation of one queue target (`"ModerationAssignment"`). */
export interface QueueMark {
  assigneeId: number | null;
  escalation: { byId: number | null; at: Date; note: string | null } | null;
}

/** Audit actions of the queue marks (`POST /ranger/items/:id/assign|escalate`). */
export const QUEUE_MARK_ACTIONS = ['queue.assign', 'queue.unassign', 'queue.escalate', 'queue.deescalate'] as const;

/**
 * Assignment and escalation of queue targets. The state lives in `"ModerationAssignment"` (one row
 * per target, migration 2004); every change is also audited (`queue.assign`/`queue.unassign`/
 * `queue.escalate`/`queue.deescalate`). Marks set before `since` (the moment the target entered
 * its lane) are ignored, so a resubmitted mod starts unassigned and not escalated. Reports keep
 * their assignee in `Report.assignedToId` as well (the row value wins for them).
 */
export async function queueMarks(
  exec: Executor,
  targets: ReadonlyArray<{ targetType: string; targetId: number; since: Date }>,
): Promise<Map<string, QueueMark>> {
  const out = new Map<string, QueueMark>();
  if (targets.length === 0) return out;
  const types = [...new Set(targets.map((t) => t.targetType))];
  const list = await query<{
    targetType: string;
    targetId: number;
    assigneeId: number | null;
    assignedAt: Date | string | null;
    escalatedAt: Date | string | null;
    escalatedById: number | null;
    escalationReason: string | null;
  }>(
    exec,
    sql`SELECT a."targetType", a."targetId", a."assigneeId", a."assignedAt",
               a."escalatedAt", a."escalatedById", a."escalationReason"
          FROM "ModerationAssignment" a
         WHERE a."targetType" = ANY(${`{${types.join(',')}}`}::text[])
           AND a."targetId" = ANY(${intArray(targets.map((t) => t.targetId))})`,
  );
  const since = new Map(targets.map((t) => [`${t.targetType}:${t.targetId}`, t.since.getTime()]));
  for (const r of list) {
    const key = `${r.targetType}:${r.targetId}`;
    const from = since.get(key);
    if (from === undefined) continue;
    const assignedAt = toDate(r.assignedAt);
    const escalatedAt = toDate(r.escalatedAt);
    const mark: QueueMark = { assigneeId: null, escalation: null };
    if (r.assigneeId !== null && assignedAt !== null && assignedAt.getTime() >= from) {
      mark.assigneeId = Number(r.assigneeId);
    }
    if (escalatedAt !== null && escalatedAt.getTime() >= from) {
      mark.escalation = {
        byId: r.escalatedById === null ? null : Number(r.escalatedById),
        at: escalatedAt,
        note: r.escalationReason,
      };
    }
    out.set(key, mark);
  }
  return out;
}

/** Applies `queueMarks` to lane rows: assignee (except reports), escalation, and high risk when escalated. */
export async function applyQueueMarks(exec: Executor, rows: LaneRow[]): Promise<LaneRow[]> {
  const marks = await queueMarks(
    exec,
    rows.map((r) => ({ targetType: r.targetType, targetId: r.targetId, since: r.submittedAt })),
  );
  for (const r of rows) {
    const mark = marks.get(`${r.targetType}:${r.targetId}`);
    if (!mark) continue;
    if (r.targetType !== 'report') r.assigneeId = mark.assigneeId;
    r.escalation = mark.escalation;
    if (mark.escalation) r.risk = 'high';
  }
  return rows;
}

interface VersionLaneRow {
  modId: number;
  versionId: number | null;
  name: string;
  version: string | null;
  userId: number;
  type: string | null;
  submittedAt: Date | string;
  checksStatus: string | null;
}

async function withRisk(
  ctx: Ctx,
  lane: ModerationLane,
  list: readonly VersionLaneRow[],
  targetType: 'mod' | 'version',
) {
  const versionIds = list.map((r) => r.versionId).filter((id): id is number => id !== null);
  const [scans, inspections, verified] = await Promise.all([
    latestScans(ctx.db, versionIds),
    inspectionFacts(ctx.db, versionIds),
    verifiedAuthors(ctx.db, [...new Set(list.map((r) => r.userId))]),
  ]);
  return list.map((r): LaneRow => {
    const scan = r.versionId === null ? undefined : scans.get(r.versionId);
    const inspection = r.versionId === null ? undefined : inspections.get(r.versionId);
    const flags = inspection?.flags ?? [];
    return {
      lane,
      targetType,
      targetId: targetType === 'mod' ? r.modId : (r.versionId ?? r.modId),
      modId: r.modId,
      authorId: r.userId,
      title: r.version && r.type !== 'Build' ? `${r.name} ${r.version}` : r.name,
      submittedAt: toDate(r.submittedAt) ?? new Date(0),
      risk: riskOf({
        flags,
        checksStatus: r.checksStatus ?? inspection?.status ?? null,
        scanVerdict: scan?.verdict ?? null,
        scanPositives: scan?.positives ?? null,
        verifiedAuthor: verified.has(r.userId),
      }),
      flags,
      assigneeId: null,
    };
  });
}

/** Pending mods (with their latest pending — or latest — version for the risk facts). */
export async function pendingModRows(ctx: Ctx, lane: ModerationLane, condition: SQL): Promise<LaneRow[]> {
  const list = await query<VersionLaneRow>(
    ctx.db,
    sql`SELECT m."id" AS "modId", lv."id" AS "versionId", m."name", lv."version", m."userId", m."type",
               coalesce(m."statusChangedAt", m."createdAt") AS "submittedAt", lv."checksStatus"
          FROM "Mod" m
          LEFT JOIN LATERAL (
            SELECT v."id", v."version", v."checksStatus" FROM "ModVersion" v
             WHERE v."modId" = m."id" AND v."status" IN ('pending', 'active')
             ORDER BY (v."status" = 'pending') DESC, v."isLatest" DESC, v."id" DESC LIMIT 1
          ) lv ON true
         WHERE ${condition}
         ORDER BY 7 ASC
         LIMIT ${LANE_SCAN_LIMIT}`,
  );
  return withRisk(ctx, lane, list, 'mod');
}

export async function versionRows(
  ctx: Ctx,
  lane: ModerationLane,
  condition: SQL,
  postReview: boolean,
): Promise<LaneRow[]> {
  const list = await query<VersionLaneRow>(
    ctx.db,
    sql`SELECT m."id" AS "modId", v."id" AS "versionId", m."name", v."version", m."userId", m."type",
               ${postReview ? sql`v."publishedAt"` : sql`coalesce(v."updatedAt", v."createdAt")`} AS "submittedAt",
               v."checksStatus"
          FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
         WHERE ${condition}
         ORDER BY 7 ASC
         LIMIT ${LANE_SCAN_LIMIT}`,
  );
  return withRisk(ctx, lane, list, 'version');
}

export async function reportRows(ctx: Ctx, condition: SQL = sql`r."status" = 'open'`): Promise<LaneRow[]> {
  const list = await query<{
    id: number;
    targetType: string;
    targetId: number;
    reason: string;
    createdAt: Date | string;
    assignedToId: number | null;
    openOnTarget: number;
    modId: number | null;
    authorId: number | null;
    targetTitle: string | null;
  }>(
    ctx.db,
    sql`SELECT r."id", r."targetType", r."targetId", r."reason", r."createdAt", r."assignedToId",
               (SELECT count(*)::int FROM "Report" o WHERE o."targetType" = r."targetType" AND o."targetId" = r."targetId"
                  AND o."status" = 'open') AS "openOnTarget",
               t."modId", t."authorId", t."title" AS "targetTitle"
          FROM "Report" r
          LEFT JOIN LATERAL (${reportTargetSql(sql`r."targetType"`, sql`r."targetId"`)}) t ON true
         WHERE ${condition}
         ORDER BY r."createdAt" ASC
         LIMIT ${LANE_SCAN_LIMIT}`,
  );
  return list.map((r) => ({
    lane: 'reports',
    targetType: 'report',
    targetId: Number(r.id),
    modId: r.modId,
    authorId: r.authorId,
    title: `${r.reason}: ${r.targetTitle ?? `${r.targetType} #${r.targetId}`}`,
    submittedAt: toDate(r.createdAt) ?? new Date(0),
    risk: reportRisk(r.reason, toInt(r.openOnTarget)),
    flags: [],
    assigneeId: r.assignedToId,
  }));
}

/**
 * Lateral subquery resolving a report target to `{modId, authorId, title}` (for every target
 * type of `REPORT_TARGET_TYPES`).
 */
export function reportTargetSql(type: SQL, id: SQL): SQL {
  return sql`
    SELECT m."id" AS "modId", m."userId" AS "authorId", m."name" AS "title" FROM "Mod" m WHERE ${type} = 'mod' AND m."id" = ${id}
    UNION ALL
    SELECT m."id", m."userId", m."name" || ' ' || v."version" FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
     WHERE ${type} = 'version' AND v."id" = ${id}
    UNION ALL
    SELECT c."modId", c."userId", 'Comment on ' || m."name" FROM "Comment" c JOIN "Mod" m ON m."id" = c."modId"
     WHERE ${type} = 'comment' AND c."id" = ${id}
    UNION ALL
    SELECT rv."modId", rv."userId", 'Review of ' || coalesce(m."name", '?') FROM "ModReview" rv LEFT JOIN "Mod" m ON m."id" = rv."modId"
     WHERE ${type} = 'review' AND rv."id" = ${id}
    UNION ALL
    SELECT NULL::int, u."id", coalesce(nullif(u."displayName", ''), u."name") FROM "User" u WHERE ${type} = 'user' AND u."id" = ${id}
    UNION ALL
    SELECT NULL::int, k."ownerId", 'Kit ' || k."name" FROM "Kit" k WHERE ${type} = 'kit' AND k."id" = ${id}
    UNION ALL
    SELECT NULL::int, rq."authorId", 'Request: ' || rq."title" FROM "ModRequest" rq
     WHERE ${type} = 'request' AND rq."id" = ${id}
    UNION ALL
    SELECT NULL::int, rc."authorId", 'Comment on request: ' || rq."title"
      FROM "ModRequestComment" rc JOIN "ModRequest" rq ON rq."id" = rc."requestId"
     WHERE ${type} = 'request_comment' AND rc."id" = ${id}
    UNION ALL
    SELECT m."id", cr."userId", 'Compatibility report on ' || m."name" || ' ' || v."version"
      FROM "CompatReport" cr JOIN "ModVersion" v ON v."id" = cr."modVersionId" JOIN "Mod" m ON m."id" = v."modId"
     WHERE ${type} = 'compat_report' AND cr."id" = ${id}
    LIMIT 1`;
}

export async function commentRows(ctx: Ctx, condition: SQL = sql`c."status" = 'pending'`): Promise<LaneRow[]> {
  const list = await query<{
    id: number;
    modId: number;
    userId: number | null;
    name: string;
    createdAt: Date | string;
  }>(
    ctx.db,
    sql`SELECT c."id", c."modId", c."userId", m."name", c."createdAt"
          FROM "Comment" c JOIN "Mod" m ON m."id" = c."modId"
         WHERE ${condition}
         ORDER BY c."createdAt" ASC
         LIMIT ${LANE_SCAN_LIMIT}`,
  );
  return list.map((r) => ({
    lane: 'comments',
    targetType: 'comment',
    targetId: r.id,
    modId: r.modId,
    authorId: r.userId,
    title: `Comment on ${r.name}`,
    submittedAt: toDate(r.createdAt) ?? new Date(0),
    risk: 'low',
    flags: [],
    assigneeId: null,
  }));
}

/** Every candidate of a lane, unsorted. */
export async function laneRows(ctx: Ctx, lane: ModerationLane): Promise<LaneRow[]> {
  const now = ctx.clock.now();
  switch (lane) {
    case 'new_mods':
      return pendingModRows(ctx, lane, NEW_MODS);
    case 'versions':
      return versionRows(ctx, lane, HELD_VERSIONS, false);
    case 'post_review':
      return versionRows(ctx, lane, postReviewCondition(now, false), true);
    case 'builds': {
      const [mods, held, post] = await Promise.all([
        pendingModRows(ctx, lane, PENDING_BUILDS),
        versionRows(
          ctx,
          lane,
          sql`v."status" = 'pending' AND m."type" = 'Build' AND m."status" IN ('published', 'unlisted', 'archived')`,
          false,
        ),
        versionRows(ctx, lane, postReviewCondition(now, true), true),
      ]);
      return [...mods, ...held, ...post];
    }
    case 'reports':
      return reportRows(ctx);
    case 'comments':
      return commentRows(ctx);
  }
}

function sortKey(r: LaneRow): [number, number, string] {
  return [-RISK_RANK[r.risk], r.submittedAt.getTime(), `${r.targetType}-${r.targetId}`];
}

function compareRows(a: LaneRow, b: LaneRow): number {
  const [ra, ta, ia] = sortKey(a);
  const [rb, tb, ib] = sortKey(b);
  return ra - rb || ta - tb || (ia < ib ? -1 : ia > ib ? 1 : 0);
}

function cursorOf(r: LaneRow): string {
  return encodeCursor({
    createdAt: r.submittedAt.toISOString(),
    id: `${RISK_RANK[r.risk]}-${r.targetType}-${r.targetId}`,
  });
}

function afterCursor(cursor: string): (r: LaneRow) => boolean {
  const position = decodeCursor(cursor);
  const match = position ? /^([0-2])-([a-z]+)-(\d+)$/.exec(position.id) : null;
  if (!position || !match) {
    throw errors.validation('Invalid cursor', [{ path: 'cursor', code: 'invalid', message: 'invalid cursor' }]);
  }
  const pivot: LaneRow = {
    lane: 'new_mods',
    targetType: match[2] as TargetType,
    targetId: Number(match[3]),
    modId: null,
    authorId: null,
    title: '',
    submittedAt: new Date(position.createdAt),
    risk: (['low', 'medium', 'high'] as const)[Number(match[1])] ?? 'low',
    flags: [],
    assigneeId: null,
  };
  return (r) => compareRows(r, pivot) > 0;
}

/** Turns lane rows into `QueueItemDTO`s. */
export async function toQueueItems(ctx: Ctx, deps: ModerationDeps, list: readonly LaneRow[]): Promise<QueueItem[]> {
  const now = ctx.clock.now().getTime();
  const [snapshot, users] = await Promise.all([
    getSnapshot(ctx, deps.config),
    loadUserRefs(
      ctx.db,
      deps.config,
      list
        .flatMap((r) => [r.authorId, r.assigneeId, r.escalation?.byId ?? null])
        .filter((id): id is number => id !== null),
    ),
  ]);
  return list.map((r) => {
    const author: UserRefDTO | null = r.authorId === null ? null : (users.get(r.authorId) ?? null);
    return {
      id: `${r.lane}:${r.targetType}:${r.targetId}`,
      lane: r.lane,
      targetType: r.targetType,
      targetId: r.targetId,
      mod: r.modId === null ? null : (snapshot.byId.get(r.modId)?.ref ?? null),
      title: r.title.slice(0, 300),
      author,
      submittedAt: r.submittedAt.toISOString(),
      waitingHours: Math.max(0, Math.round(((now - r.submittedAt.getTime()) / 3_600_000) * 10) / 10),
      risk: r.risk,
      flags: flagsOf(r.flags),
      assignee: r.assigneeId === null ? null : (users.get(r.assigneeId) ?? null),
      escalation: r.escalation
        ? {
            by: r.escalation.byId === null ? null : (users.get(r.escalation.byId) ?? null),
            at: r.escalation.at.toISOString(),
            note: r.escalation.note,
          }
        : null,
    };
  });
}

/** `GET /ranger/queue?lane=&cursor=&limit=`. */
export async function getQueue(
  ctx: Ctx,
  deps: ModerationDeps,
  input: { lane: ModerationLane; cursor?: string | undefined; limit: number },
): Promise<QueuePage> {
  await assertStaff(ctx, 'moderation.queue');
  const [rows, counts] = await Promise.all([
    laneRows(ctx, input.lane).then((list) => applyQueueMarks(ctx.db, list)),
    laneCounts(ctx.db, ctx.clock.now()),
  ]);
  let sorted = [...rows].sort(compareRows);
  if (input.cursor) sorted = sorted.filter(afterCursor(input.cursor));
  const page = sorted.slice(0, input.limit);
  const last = page[page.length - 1];
  return {
    lane: input.lane,
    counts,
    items: await toQueueItems(ctx, deps, page),
    nextCursor: sorted.length > input.limit && last ? cursorOf(last) : null,
  };
}
