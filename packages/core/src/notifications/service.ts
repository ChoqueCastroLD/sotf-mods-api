/**
 * Writing signals (PLAN §7.3): preferences, grouping by `groupKey`, idempotency, the realtime
 * notice and the trigger of instant emails.
 *
 * - A recipient with both channels off gets nothing. With the in-app channel off but email on, the
 *   row is stored hidden (`data.inApp = false`, never listed or counted) so the email job has
 *   something to send.
 * - Grouping: a new signal with the `groupKey` of an **unread** signal of the last 7 days folds
 *   into it (`data.count` + 1, latest actor and target, moved to the top, emailed again).
 * - Idempotency: every draft carries a key (default `<eventId>:<type>`); the last keys are kept in
 *   `data.keys`, so an event retried after a partial failure never duplicates a signal.
 * - `emailedAt` is NULL while an email is pending; rows whose email channel is off are stored with
 *   `emailedAt = createdAt` so the digests never scan them.
 * - Instant emails: one `notifications.digest {frequency: '10m'}` job per 30-second window
 *   (deterministic job id) flushes every pending instant signal; `comment.on_my_mod` waits for
 *   the 10-minute schedule so bursts of comments become one email (PLAN §7.3 "lotes de 10 min").
 */
import type { NotificationType } from '@sotf/contracts/notifications';
import { type Database, type Executor, notification, user, withTx } from '@sotf/db';
import { and, desc, eq, gt, inArray, isNull, sql } from 'drizzle-orm';
import type { Clock } from '../kernel/clock.ts';
import type { Jobs } from '../kernel/jobs.ts';
import type { Logger } from '../kernel/logger.ts';
import { publishNotificationNotice } from '../realtime/index.ts';
import { deterministicUuid } from './ids.ts';
import { forcedEmail, preferencesFor } from './preferences.ts';
import type { NotificationData, NotificationDraft, NotificationPlan, Retraction } from './rules.ts';
import { HIDDEN_NOTIFICATION_TYPES, isHiddenNotificationType } from './visibility.ts';

export interface NotifyDeps {
  db: Database;
  jobs: Jobs;
  clock: Clock;
  log?: Logger;
}

/** Signals whose instant email waits for the 10-minute batch instead of the 30-second flush. */
export const BATCHED_INSTANT_TYPES: ReadonlySet<NotificationType> = new Set(['comment.on_my_mod']);

/** Window (days) in which an unread signal still absorbs new ones of its group. */
export const GROUP_WINDOW_DAYS = 7;
/** Idempotency keys kept per row. */
const MAX_KEYS = 25;
/** Drafts written per transaction (large fan-outs are chunked; retries are idempotent). */
const CHUNK = 250;
/** Width of the instant-email flush window (seconds). */
export const INSTANT_FLUSH_SECONDS = 30;

/** Data keys that are bookkeeping, not message values (hidden from the DTO). */
export const INTERNAL_DATA_KEYS = ['keys', 'inApp', 'targetTitle', 'targetPath', 'legacy'] as const;

/**
 * SQL predicate: the row is visible in the bell and `/signals` (in-app channel on, type not in
 * `HIDDEN_NOTIFICATION_TYPES`).
 */
export const visibleNotification = sql`(NOT (${notification.data} @> '{"inApp":false}'::jsonb) AND ${
  notification.type
} NOT IN (${sql.join(
  HIDDEN_NOTIFICATION_TYPES.map((type) => sql`${type}`),
  sql`, `,
)}))`;

export async function unreadCount(db: Executor, userId: number): Promise<number> {
  const [row] = await db
    .select({ n: sql<number>`count(*)::int` })
    .from(notification)
    .where(and(eq(notification.userId, userId), isNull(notification.readAt), visibleNotification));
  return row?.n ?? 0;
}

export interface NotifyResult {
  created: number;
  grouped: number;
  skipped: number;
  retracted: number;
  broadcast: number;
}

/** Enqueues the flush of instant emails for the 30-second window containing `now`. */
export async function scheduleInstantFlush(tx: Executor, jobs: Jobs, now: Date): Promise<void> {
  const windowMs = INSTANT_FLUSH_SECONDS * 1000;
  const bucket = Math.floor(now.getTime() / windowMs);
  const startAfter = new Date((bucket + 1) * windowMs);
  await jobs.enqueue(
    'notifications.digest',
    { frequency: '10m' },
    { tx, id: deterministicUuid(`notifications.instant-flush:${bucket}`), startAfter },
  );
}

async function applyRetractions(tx: Executor, retractions: readonly Retraction[]): Promise<number> {
  let removed = 0;
  for (const r of retractions) {
    const rows = await tx
      .delete(notification)
      .where(
        and(
          eq(notification.targetType, r.targetType),
          eq(notification.targetId, r.targetId),
          isNull(notification.readAt),
          sql`coalesce((${notification.data}->>'count')::int, 1) = 1`,
        ),
      )
      .returning({
        id: notification.id,
        userId: notification.userId,
        type: notification.type,
        data: notification.data,
      });
    removed += rows.length;
    for (const row of rows) {
      if (row.data.inApp === false) continue;
      await publishNotificationNotice(tx, {
        userId: row.userId,
        notificationId: row.id,
        type: row.type as NotificationType,
        groupCount: 0,
        unreadCount: await unreadCount(tx, row.userId),
      });
    }
  }
  return removed;
}

function keysOf(data: Record<string, unknown>): string[] {
  return Array.isArray(data.keys) ? (data.keys as unknown[]).filter((k): k is string => typeof k === 'string') : [];
}

async function writeDraft(
  tx: Executor,
  draft: NotificationDraft,
  key: string,
  channels: { inApp: boolean; email: boolean },
  now: Date,
): Promise<{ id: number; groupCount: number; grouped: boolean } | null> {
  const [duplicate] = await tx
    .select({ id: notification.id })
    .from(notification)
    .where(
      and(
        eq(notification.userId, draft.userId),
        sql`(${notification.data}->'keys') @> jsonb_build_array(${key}::text)`,
      ),
    )
    .limit(1);
  if (duplicate) return null;

  const base: NotificationData = {
    ...draft.data,
    targetTitle: draft.target?.title ?? null,
    targetPath: draft.target?.path ?? null,
  };
  if (!channels.inApp) base.inApp = false;
  const emailedAt = channels.email ? null : now;

  if (draft.groupKey) {
    const since = new Date(now.getTime() - GROUP_WINDOW_DAYS * 24 * 3600 * 1000);
    const [existing] = await tx
      .select({ id: notification.id, data: notification.data })
      .from(notification)
      .where(
        and(
          eq(notification.userId, draft.userId),
          eq(notification.groupKey, draft.groupKey),
          isNull(notification.readAt),
          gt(notification.createdAt, since),
          channels.inApp ? visibleNotification : sql`${notification.data} @> '{"inApp":false}'::jsonb`,
        ),
      )
      .orderBy(desc(notification.id))
      .limit(1)
      .for('update');
    if (existing) {
      const previous = existing.data as Record<string, unknown>;
      const count = (typeof previous.count === 'number' ? previous.count : 1) + 1;
      const keys = [...keysOf(previous), key].slice(-MAX_KEYS);
      await tx
        .update(notification)
        .set({
          actorId: draft.actorId,
          targetType: draft.target?.type ?? null,
          targetId: draft.target?.id ?? null,
          data: { ...base, count, keys },
          createdAt: now,
          ...(channels.email ? { emailedAt: null } : {}),
        })
        .where(eq(notification.id, existing.id));
      return { id: existing.id, groupCount: count, grouped: true };
    }
  }

  const [row] = await tx
    .insert(notification)
    .values({
      userId: draft.userId,
      type: draft.type,
      actorId: draft.actorId,
      targetType: draft.target?.type ?? null,
      targetId: draft.target?.id ?? null,
      groupKey: draft.groupKey,
      data: { ...base, count: 1, keys: [key] },
      emailedAt,
      createdAt: now,
    })
    .returning({ id: notification.id });
  if (!row) throw new Error('notification insert returned no row');
  return { id: row.id, groupCount: 1, grouped: false };
}

/**
 * Writes drafts inside the caller's transaction `tx` (preferences, grouping, dedupe, realtime
 * notice, instant flush). Use it when the signals must commit together with another write (the
 * legacy mention drain deletes its queue rows in the same transaction).
 */
export async function writeNotificationDrafts(
  tx: Executor,
  deps: Pick<NotifyDeps, 'jobs' | 'clock'>,
  allDrafts: readonly NotificationDraft[],
  keyPrefix: string,
): Promise<Pick<NotifyResult, 'created' | 'grouped' | 'skipped'>> {
  const result = { created: 0, grouped: 0, skipped: 0 };
  // Hidden types (gamification, kits, Patch Radar) are never created any more.
  const drafts = allDrafts.filter((d) => !isHiddenNotificationType(d.type));
  result.skipped += allDrafts.length - drafts.length;
  if (drafts.length === 0) return result;
  const now = deps.clock.now();
  const recipients = [...new Set(drafts.map((d) => d.userId))];
  const active = new Set(
    (
      await tx
        .select({ id: user.id })
        .from(user)
        .where(and(inArray(user.id, recipients), isNull(user.deletedAt), isNull(user.bannedAt)))
    ).map((r) => r.id),
  );
  const prefsByType = new Map<NotificationType, Awaited<ReturnType<typeof preferencesFor>>>();
  for (const type of new Set(drafts.map((d) => d.type))) {
    prefsByType.set(
      type,
      await preferencesFor(
        tx,
        drafts.filter((d) => d.type === type).map((d) => d.userId),
        type,
      ),
    );
  }
  let flush = false;
  for (const draft of drafts) {
    const pref = prefsByType.get(draft.type)?.get(draft.userId);
    if (!active.has(draft.userId) || !pref) {
      result.skipped += 1;
      continue;
    }
    const email = pref.email !== 'off' || forcedEmail(draft.type, draft.data);
    if (!pref.inApp && !email) {
      result.skipped += 1;
      continue;
    }
    const key = draft.dedupeKey ?? `${keyPrefix}:${draft.type}`;
    const written = await writeDraft(tx, draft, key, { inApp: pref.inApp, email }, now);
    if (!written) {
      result.skipped += 1;
      continue;
    }
    if (written.grouped) result.grouped += 1;
    else result.created += 1;
    if (pref.inApp) {
      await publishNotificationNotice(tx, {
        userId: draft.userId,
        notificationId: written.id,
        type: draft.type,
        groupCount: written.groupCount,
        unreadCount: await unreadCount(tx, draft.userId),
      });
    }
    const instant = forcedEmail(draft.type, draft.data) || pref.email === 'instant';
    if (email && instant && !BATCHED_INSTANT_TYPES.has(draft.type)) flush = true;
  }
  if (flush) await scheduleInstantFlush(tx, deps.jobs, now);
  return result;
}

async function writeChunk(
  deps: NotifyDeps,
  drafts: readonly NotificationDraft[],
  keyPrefix: string,
): Promise<Pick<NotifyResult, 'created' | 'grouped' | 'skipped'>> {
  return withTx(deps.db, (tx) => writeNotificationDrafts(tx, deps, drafts, keyPrefix));
}

/** Recently active users receive the realtime notice of a broadcast (bounded fan-out of NOTIFY). */
const BROADCAST_NOTICE_ACTIVE_MINUTES = 15;
const BROADCAST_NOTICE_MAX = 2000;

async function writeBroadcast(
  deps: NotifyDeps,
  broadcast: NonNullable<NotificationPlan['broadcast']>,
): Promise<number> {
  return withTx(deps.db, async (tx) => {
    const now = deps.clock.now();
    const data = {
      ...broadcast.data,
      targetTitle: '',
      targetPath: broadcast.path,
      count: 1,
      keys: [`broadcast:${broadcast.targetId}`],
    };
    const inserted = await tx.execute<{ id: number; userId: number }>(sql`
      INSERT INTO "Notification" ("userId", "type", "targetType", "targetId", "data", "emailedAt", "createdAt")
      SELECT u."id", ${broadcast.type}, 'announcement', ${broadcast.targetId},
             CASE WHEN coalesce(np."inApp", true) THEN ${JSON.stringify(data)}::jsonb
                  ELSE ${JSON.stringify(data)}::jsonb || '{"inApp":false}'::jsonb END,
             CASE WHEN coalesce(np."email", 'off') = 'off' THEN ${now}::timestamptz ELSE NULL END,
             ${now}::timestamptz
      FROM "User" u
      LEFT JOIN "NotificationPreference" np ON np."userId" = u."id" AND np."type" = ${broadcast.type}
      WHERE u."deletedAt" IS NULL AND u."bannedAt" IS NULL
        AND (coalesce(np."inApp", true) OR coalesce(np."email", 'off') <> 'off')
        AND NOT EXISTS (
          SELECT 1 FROM "Notification" n
          WHERE n."userId" = u."id" AND n."type" = ${broadcast.type} AND n."targetId" = ${broadcast.targetId}
        )
      RETURNING "id", "userId"`);
    const rows = inserted.rows;
    if (rows.length === 0) return 0;
    const since = new Date(now.getTime() - BROADCAST_NOTICE_ACTIVE_MINUTES * 60_000);
    const active = await tx
      .select({ id: user.id })
      .from(user)
      .where(
        and(
          inArray(
            user.id,
            rows.map((r) => r.userId),
          ),
          gt(user.lastSeenAt, since),
        ),
      )
      .limit(BROADCAST_NOTICE_MAX);
    const idByUser = new Map(rows.map((r) => [r.userId, Number(r.id)]));
    for (const { id } of active) {
      const notificationId = idByUser.get(id);
      if (notificationId === undefined) continue;
      await publishNotificationNotice(tx, {
        userId: id,
        notificationId,
        type: broadcast.type,
        groupCount: 1,
        unreadCount: await unreadCount(tx, id),
      });
    }
    return rows.length;
  });
}

/**
 * Applies a plan. `keyPrefix` (the domain event id) makes drafts without their own dedupe key
 * idempotent. Large fan-outs are written in chunks of 250 drafts per transaction.
 */
export async function applyNotificationPlan(
  deps: NotifyDeps,
  plan: NotificationPlan,
  keyPrefix: string,
): Promise<NotifyResult> {
  const result: NotifyResult = { created: 0, grouped: 0, skipped: 0, retracted: 0, broadcast: 0 };
  if (plan.retractions.length > 0) {
    result.retracted = await withTx(deps.db, (tx) => applyRetractions(tx, plan.retractions));
  }
  for (let i = 0; i < plan.drafts.length; i += CHUNK) {
    const chunk = await writeChunk(deps, plan.drafts.slice(i, i + CHUNK), keyPrefix);
    result.created += chunk.created;
    result.grouped += chunk.grouped;
    result.skipped += chunk.skipped;
  }
  if (plan.broadcast && !isHiddenNotificationType(plan.broadcast.type))
    result.broadcast = await writeBroadcast(deps, plan.broadcast);
  return result;
}

/** Convenience for producers and tests: notify drafts directly (key prefix required). */
export async function createNotifications(
  deps: NotifyDeps,
  drafts: readonly NotificationDraft[],
  keyPrefix: string,
): Promise<NotifyResult> {
  return applyNotificationPlan(deps, { drafts: [...drafts], retractions: [], broadcast: null }, keyPrefix);
}
