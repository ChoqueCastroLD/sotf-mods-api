/**
 * Notification preferences (PLAN §7.3): a type × channel matrix, `inApp` on/off and `email`
 * instant/daily/weekly/off. A missing "NotificationPreference" row means the defaults of
 * `NOTIFICATION_DEFAULTS`; storing a row equal to the defaults deletes it, so defaults changed
 * later reach everyone who never touched that row.
 *
 * Rules enforced here (not by the UI):
 * - types without an in-app channel (`creator.weekly_report`) are always `inApp: false`;
 * - `mod.status_changed` to `removed` is transactional and emailed even when the email is off
 *   (see `forcedEmail`).
 */
import {
  type EmailFrequency,
  NOTIFICATION_DEFAULTS,
  NOTIFICATION_TYPES,
  type NotificationType,
} from '@sotf/contracts/notifications';
import { type Executor, notificationPreference } from '@sotf/db';
import { and, eq, inArray, sql } from 'drizzle-orm';

export interface EffectivePreference {
  type: NotificationType;
  inApp: boolean;
  email: EmailFrequency;
  inAppAvailable: boolean;
  isDefault: boolean;
}

export type PreferenceMatrix = ReadonlyMap<NotificationType, EffectivePreference>;

export function isNotificationType(value: string): value is NotificationType {
  return (NOTIFICATION_TYPES as readonly string[]).includes(value);
}

function defaultOf(type: NotificationType): EffectivePreference {
  const d = NOTIFICATION_DEFAULTS[type];
  return {
    type,
    inApp: d.inAppAvailable && d.inApp,
    email: d.email,
    inAppAvailable: d.inAppAvailable,
    isDefault: true,
  };
}

function effective(type: NotificationType, row: { inApp: boolean; email: string } | undefined): EffectivePreference {
  const base = defaultOf(type);
  if (!row) return base;
  const email = (['instant', 'daily', 'weekly', 'off'] as const).includes(row.email as EmailFrequency)
    ? (row.email as EmailFrequency)
    : base.email;
  return { ...base, inApp: base.inAppAvailable && row.inApp, email, isDefault: false };
}

/** The full matrix of one user (defaults filled in), in `NOTIFICATION_TYPES` order. */
export async function preferenceMatrix(db: Executor, userId: number): Promise<PreferenceMatrix> {
  const rows = await db
    .select({
      type: notificationPreference.type,
      inApp: notificationPreference.inApp,
      email: notificationPreference.email,
    })
    .from(notificationPreference)
    .where(eq(notificationPreference.userId, userId));
  const byType = new Map(rows.map((r) => [r.type, r]));
  return new Map(NOTIFICATION_TYPES.map((type) => [type, effective(type, byType.get(type))]));
}

/** Preferences of several users for one type (one query; used by fan-out). */
export async function preferencesFor(
  db: Executor,
  userIds: readonly number[],
  type: NotificationType,
): Promise<Map<number, EffectivePreference>> {
  const out = new Map<number, EffectivePreference>();
  if (userIds.length === 0) return out;
  const unique = [...new Set(userIds)];
  const rows = await db
    .select({
      userId: notificationPreference.userId,
      inApp: notificationPreference.inApp,
      email: notificationPreference.email,
    })
    .from(notificationPreference)
    .where(and(eq(notificationPreference.type, type), inArray(notificationPreference.userId, unique)));
  const byUser = new Map(rows.map((r) => [r.userId, r]));
  for (const id of unique) out.set(id, effective(type, byUser.get(id)));
  return out;
}

export interface PreferenceChange {
  type: NotificationType;
  inApp: boolean;
  email: EmailFrequency;
}

/**
 * Applies changes to the matrix. Rows equal to the defaults are removed; types without an in-app
 * channel store `inApp: false`. Returns the updated matrix.
 */
export async function updatePreferenceMatrix(
  db: Executor,
  userId: number,
  changes: readonly PreferenceChange[],
): Promise<PreferenceMatrix> {
  const last = new Map<NotificationType, PreferenceChange>();
  for (const change of changes) last.set(change.type, change);
  for (const change of last.values()) {
    const d = NOTIFICATION_DEFAULTS[change.type];
    const inApp = d.inAppAvailable ? change.inApp : false;
    const isDefault = inApp === (d.inAppAvailable && d.inApp) && change.email === d.email;
    if (isDefault) {
      await db
        .delete(notificationPreference)
        .where(and(eq(notificationPreference.userId, userId), eq(notificationPreference.type, change.type)));
    } else {
      await db
        .insert(notificationPreference)
        .values({ userId, type: change.type, inApp, email: change.email })
        .onConflictDoUpdate({
          target: [notificationPreference.userId, notificationPreference.type],
          set: { inApp: sql`excluded."inApp"`, email: sql`excluded."email"` },
        });
    }
  }
  return preferenceMatrix(db, userId);
}

/** Emails that ignore the preference (transactional): a mod being removed. */
export function forcedEmail(type: NotificationType, data: Readonly<Record<string, unknown>>): boolean {
  return type === 'mod.status_changed' && data.status === 'removed';
}
