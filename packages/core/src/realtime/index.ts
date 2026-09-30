/**
 * Realtime notices for the SSE hub (PLAN §2.9 "Tiempo real", §5.3), published by core services
 * **inside** their transaction with `NOTIFY events` (delivered on commit; a rolled-back write never
 * reaches a browser). Events only notify: clients invalidate their queries.
 *
 * - `notification` on `user:{id}`: a signal was created or grouped (with the new unread count).
 * - `mod.updated` on `user:{ownerId}`: something the owner sees in Basecamp changed.
 * - `mod.live` on `mod:{id}`: live download total of a mod (public stream of the mod page).
 * - `moderation.queue` on `moderation`: the size of a moderation lane changed.
 *
 * SSE ids must be unique per message so `Last-Event-ID` replays correctly: a grouped signal keeps
 * its row id, so its SSE id is `<notificationId>.<groupCount>`.
 */
import type { DomainEvent } from '@sotf/contracts/domain-events';
import { sseChannel } from '@sotf/contracts/events';
import type { ModerationLane } from '@sotf/contracts/moderation';
import type { NotificationType } from '@sotf/contracts/notifications';
import type { Executor } from '@sotf/db';
import { publishRealtime } from '../kernel/notify.ts';

export interface NotificationNotice {
  userId: number;
  notificationId: number;
  type: NotificationType;
  groupCount: number;
  unreadCount: number;
}

/** SSE id of a (possibly grouped) signal. */
export function notificationSseId(notificationId: number, groupCount: number): string {
  return `${notificationId}.${groupCount}`;
}

/** `notification` → `user:{id}`. */
export async function publishNotificationNotice(exec: Executor, notice: NotificationNotice): Promise<void> {
  await publishRealtime(exec, {
    channel: sseChannel.user(notice.userId),
    event: 'notification',
    id: notificationSseId(notice.notificationId, notice.groupCount),
    data: { id: notice.notificationId, type: notice.type, unreadCount: notice.unreadCount },
  });
}

/** `mod.updated` → the owner's `user:{id}` channel. `eventId` (the domain event) is the SSE id. */
export async function publishModUpdated(
  exec: Executor,
  notice: { ownerId: number; modId: number; eventId: string },
): Promise<void> {
  await publishRealtime(exec, {
    channel: sseChannel.user(notice.ownerId),
    event: 'mod.updated',
    id: notice.eventId,
    data: { modId: notice.modId },
  });
}

/** `mod.live` → `mod:{id}` (anyone watching the mod page): the new lifetime download total. */
export async function publishModLive(
  exec: Executor,
  notice: { modId: number; downloads: number; id: string },
): Promise<void> {
  await publishRealtime(exec, {
    channel: sseChannel.mod(notice.modId),
    event: 'mod.live',
    id: notice.id,
    data: { modId: notice.modId, downloads: notice.downloads },
  });
}

/** `moderation.queue` → `moderation` (rangers). Producers: the moderation services (WP-51). */
export async function publishModerationQueue(
  exec: Executor,
  notice: { lane: ModerationLane; count: number; id: string },
): Promise<void> {
  await publishRealtime(exec, {
    channel: sseChannel.moderation,
    event: 'moderation.queue',
    id: notice.id,
    data: { lane: notice.lane, count: notice.count },
  });
}

/**
 * The owner notice (`mod.updated`) a domain event implies, if any: the mod's owner has Basecamp
 * open and its queries (status, versions, compatibility) must refresh.
 */
export function modUpdatedNoticeFor(event: DomainEvent): { ownerId: number; modId: number } | null {
  switch (event.type) {
    case 'mod.updated':
    case 'mod.status_changed':
    case 'mod.published':
    case 'version.published':
    case 'version.status_changed':
      return { ownerId: event.payload.authorId, modId: event.payload.modId };
    case 'compat.aggregate_changed':
      return { ownerId: event.payload.modAuthorId, modId: event.payload.modId };
    default:
      return null;
  }
}
