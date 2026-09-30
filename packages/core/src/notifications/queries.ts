/**
 * Reading and marking signals (PLAN §5.2 `/notifications*`, §7.3): the cursor feed of `/signals`
 * with its filters, the unread counter of the bell and "mark as read". Hidden rows (in-app channel
 * off, kept only for the email) are never listed or counted.
 */
import type { NotificationDTO, NotificationType } from '@sotf/contracts/notifications';
import { NOTIFICATION_FILTER_TYPES, type NOTIFICATION_FILTERS } from '@sotf/contracts/notifications';
import { decodeCursor, encodeCursor } from '@sotf/contracts/pagination';
import { type Database, type Executor, notification, user, withTx } from '@sotf/db';
import { and, desc, eq, inArray, isNull, lt, or } from 'drizzle-orm';
import { avatarUrlOf, displayNameOf } from '../auth/users.ts';
import { gamificationRefs } from '../gamification/queries.ts';
import { errors } from '../kernel/errors.ts';
import { publishNotificationNotice } from '../realtime/index.ts';
import { INTERNAL_DATA_KEYS, unreadCount, visibleNotification } from './service.ts';

export type NotificationFilter = (typeof NOTIFICATION_FILTERS)[number];

export interface ListNotificationsInput {
  filter: NotificationFilter;
  cursor?: string | undefined;
  limit: number;
}

export interface NotificationReadDeps {
  /** `R2_PUBLIC_BASE_URL` for avatars. */
  mediaBaseUrl: string;
}

function publicData(data: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data)) {
    if (!(INTERNAL_DATA_KEYS as readonly string[]).includes(key)) out[key] = value;
  }
  return out;
}

export async function listNotifications(
  db: Executor,
  deps: NotificationReadDeps,
  userId: number,
  input: ListNotificationsInput,
): Promise<{ items: NotificationDTO[]; nextCursor: string | null }> {
  const conditions = [eq(notification.userId, userId), visibleNotification];
  if (input.filter !== 'all') {
    conditions.push(inArray(notification.type, [...NOTIFICATION_FILTER_TYPES[input.filter]]));
  }
  if (input.cursor) {
    const position = decodeCursor(input.cursor);
    const id = position ? Number(position.id) : Number.NaN;
    if (!position || !Number.isSafeInteger(id)) throw errors.validation('Invalid cursor');
    const at = new Date(position.createdAt);
    const before = or(lt(notification.createdAt, at), and(eq(notification.createdAt, at), lt(notification.id, id)));
    if (before) conditions.push(before);
  }
  const rows = await db
    .select({
      id: notification.id,
      type: notification.type,
      actorId: notification.actorId,
      targetType: notification.targetType,
      targetId: notification.targetId,
      groupKey: notification.groupKey,
      data: notification.data,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      actorSlug: user.slug,
      actorName: user.name,
      actorDisplayName: user.displayName,
      actorImageUrl: user.imageUrl,
      actorAvatarMediaId: user.avatarMediaId,
      actorVerifiedCreator: user.verifiedCreator,
      actorRole: user.role,
      actorDeletedAt: user.deletedAt,
    })
    .from(notification)
    .leftJoin(user, eq(user.id, notification.actorId))
    .where(and(...conditions))
    .orderBy(desc(notification.createdAt), desc(notification.id))
    .limit(input.limit + 1);
  const page = rows.slice(0, input.limit);
  // Creator tier and survivor rank of the actors (the rank honours `privacy.hideRank`).
  const refs = await gamificationRefs(
    db,
    page.map((r) => r.actorId).filter((id): id is number => id !== null),
  );
  const items: NotificationDTO[] = [];
  for (const r of page) {
    const data = r.data as Record<string, unknown>;
    const actor =
      r.actorId !== null && r.actorSlug !== null && r.actorDeletedAt === null
        ? {
            id: r.actorId,
            handle: r.actorSlug,
            displayName: displayNameOf({
              displayName: r.actorDisplayName,
              name: r.actorName ?? '',
              slug: r.actorSlug,
            }),
            avatarUrl: await avatarUrlOf(
              db,
              { avatarMediaId: r.actorAvatarMediaId, imageUrl: r.actorImageUrl ?? '' },
              deps.mediaBaseUrl,
            ),
            verifiedCreator: r.actorVerifiedCreator ?? false,
            role: r.actorRole ?? 'user',
            creatorTier: refs.get(r.actorId)?.creatorTier ?? null,
            survivorRank: refs.get(r.actorId)?.survivorRank ?? null,
          }
        : null;
    const title = typeof data.targetTitle === 'string' ? data.targetTitle : '';
    const path = typeof data.targetPath === 'string' && data.targetPath.startsWith('/') ? data.targetPath : null;
    items.push({
      id: r.id,
      type: r.type as NotificationType,
      actor,
      target:
        r.targetType !== null && r.targetId !== null
          ? { type: r.targetType as NonNullable<NotificationDTO['target']>['type'], id: r.targetId, title, path }
          : null,
      groupKey: r.groupKey,
      groupCount: typeof data.count === 'number' && data.count >= 1 ? data.count : 1,
      data: publicData(data),
      readAt: r.readAt ? r.readAt.toISOString() : null,
      createdAt: r.createdAt.toISOString(),
    });
  }
  const last = page.at(-1);
  const nextCursor =
    rows.length > input.limit && last ? encodeCursor({ createdAt: last.createdAt.toISOString(), id: last.id }) : null;
  return { items, nextCursor };
}

export { unreadCount };

/**
 * Marks some (`ids`) or all signals of the user as read and returns the new unread count. Other
 * tabs of the user learn about it through the realtime notice.
 */
export async function markNotificationsRead(
  db: Database,
  userId: number,
  input: { ids: readonly number[] } | { all: true },
  now: Date,
): Promise<number> {
  return withTx(db, async (tx) => {
    const scope =
      'ids' in input
        ? and(
            eq(notification.userId, userId),
            inArray(notification.id, [...new Set(input.ids)]),
            isNull(notification.readAt),
          )
        : and(eq(notification.userId, userId), isNull(notification.readAt));
    const changed = await tx
      .update(notification)
      .set({ readAt: now })
      .where(scope)
      .returning({ id: notification.id, type: notification.type, data: notification.data });
    const count = await unreadCount(tx, userId);
    const visible = changed.filter((row) => (row.data as Record<string, unknown>).inApp !== false);
    const latest = visible.reduce<(typeof visible)[number] | undefined>(
      (best, row) => (!best || row.id > best.id ? row : best),
      undefined,
    );
    if (latest) {
      await publishNotificationNotice(tx, {
        userId,
        notificationId: latest.id,
        type: latest.type as NotificationType,
        groupCount: 0,
        unreadCount: count,
      });
    }
    return count;
  });
}
