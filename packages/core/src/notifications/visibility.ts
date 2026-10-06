/**
 * Which notification types are shown (Classic redesign). The single source of truth for hiding:
 *
 * - gamification: milestones, badges and awards;
 * - kits: everything about kits (added to a kit, followed kit updated, kit comments);
 * - Patch Radar: compatibility reports and breaking-build alerts.
 *
 * Existing rows of these types stay in the database; they are only hidden. Hidden types are never
 * created any more, never listed or counted as unread, never part of a digest, and have no row in
 * the preference matrix. The types stay in `NOTIFICATION_TYPES` so old rows and old emails still
 * parse. To bring one back, remove it from `HIDDEN_NOTIFICATION_TYPES`.
 */
import { NOTIFICATION_TYPES, type NotificationType } from '@sotf/contracts/notifications';

export const HIDDEN_NOTIFICATION_TYPES = [
  // Gamification
  'milestone.reached',
  'badge.awarded',
  'award.won',
  // Kits
  'kit.added_my_mod',
  'kit.updated_followed',
  'kit.comment',
  'kit.comment_reply',
  // Patch Radar and compatibility reports
  'compat.broken_on_my_mod',
  'compat.acknowledged',
  'compat.prompt',
  'patch.breaking_build',
] as const satisfies readonly NotificationType[];

const HIDDEN: ReadonlySet<string> = new Set(HIDDEN_NOTIFICATION_TYPES);

/** The types that are shown, in `NOTIFICATION_TYPES` order. */
export const VISIBLE_NOTIFICATION_TYPES: readonly NotificationType[] = NOTIFICATION_TYPES.filter(
  (type) => !HIDDEN.has(type),
);

/** True when rows of this type are hidden everywhere (lists, counts, digests, preferences). */
export function isHiddenNotificationType(type: string): boolean {
  return HIDDEN.has(type);
}

/** Keeps the visible types of a list (filters, digests). */
export function visibleTypes(types: readonly NotificationType[]): NotificationType[] {
  return types.filter((type) => !HIDDEN.has(type));
}
