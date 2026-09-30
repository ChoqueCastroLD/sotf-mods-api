/**
 * The signed-in user's own data (PLAN §5.2 `GET /me`, `/me/summary`, `/me/home`, settings and
 * privacy; T0-13, T0-15, T0-17, T0-33):
 *
 * - `MeDTO`: private user, `permissions` from `can()`, settings and privacy with their defaults,
 *   unread Signals and flags.
 * - `MeSummaryDTO`: the light header payload.
 * - `MeHomeDTO` (base): the number of followed mods with an update since the user's last download,
 *   the «Day 1» checklist derived from real activity, and cards through optional providers (the
 *   catalog and kits card builders plug in there; without them the lists are empty).
 * - Settings/privacy patches merge into the jsonb columns.
 *
 * "User"."onboarding" jsonb: `{ steps?: { <step>: ISO date }, dismissedAt?: ISO, completedAt?: ISO }`
 * (explicit marks; `install_redloader` can only be marked explicitly).
 */

import type { ModCardDTO } from '@sotf/contracts/catalog';
import { ONBOARDING_STEPS } from '@sotf/contracts/gamification';
import type { KitCardDTO } from '@sotf/contracts/kits';
import type {
  MeDTO,
  MeHomeDTO,
  MeSummaryDTO,
  UpdatePrivacyBody,
  UpdateSettingsBody,
  UserPrivacyDTO,
  UserSettingsDTO,
} from '@sotf/contracts/me';
import { type Executor, type User, type UserPrivacy, type UserSettings, user } from '@sotf/db';
import { eq, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { avatarUrlOf, displayNameOf, findUserById, toSelfUser } from '../auth/users.ts';
import { errors } from '../kernel/errors.ts';
import { type PermissionSubject, permissionsOf } from '../permissions/can.ts';

export const DEFAULT_SETTINGS: UserSettingsDTO = {
  locale: null,
  theme: 'system',
  density: 'comfortable',
  reducedMotion: null,
  nsfwOptIn: false,
  nsfwConfirmedAt: null,
  downloadHistory: true,
  compatPrompts: true,
  numberFormat: 'compact',
  keyboardShortcuts: true,
};

export const DEFAULT_PRIVACY: z.infer<typeof UserPrivacyDTO> = {
  hideActivity: false,
  hideRank: false,
  hideFromLeaderboards: false,
  hideKits: false,
};

function pick<T>(value: unknown, allowed: readonly T[], fallback: T): T {
  return allowed.includes(value as T) ? (value as T) : fallback;
}

function bool(value: unknown, fallback: boolean): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

/** Stored settings (any legacy/partial shape) → the full DTO. */
export function settingsOf(stored: UserSettings | null | undefined): UserSettingsDTO {
  const s = (stored ?? {}) as Record<string, unknown>;
  const locale = typeof s.locale === 'string' ? s.locale : null;
  return {
    locale: pick(locale, ['en', 'es', 'de', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh', 'ja', null], null),
    theme: pick(s.theme, ['system', 'dark', 'light'] as const, DEFAULT_SETTINGS.theme),
    density: pick(s.density, ['comfortable', 'compact'] as const, DEFAULT_SETTINGS.density),
    reducedMotion: typeof s.reducedMotion === 'boolean' ? s.reducedMotion : null,
    nsfwOptIn: bool(s.nsfwOptIn, false),
    nsfwConfirmedAt:
      typeof s.nsfwConfirmedAt === 'string' && !Number.isNaN(Date.parse(s.nsfwConfirmedAt))
        ? new Date(s.nsfwConfirmedAt).toISOString()
        : null,
    downloadHistory: bool(s.downloadHistory, true),
    compatPrompts: bool(s.compatPrompts, true),
    numberFormat: pick(s.numberFormat, ['compact', 'full'] as const, DEFAULT_SETTINGS.numberFormat),
    keyboardShortcuts: bool(s.keyboardShortcuts, true),
  };
}

export function privacyOf(stored: UserPrivacy | null | undefined): z.infer<typeof UserPrivacyDTO> {
  const p = (stored ?? {}) as Record<string, unknown>;
  return {
    hideActivity: bool(p.hideActivity, false),
    hideRank: bool(p.hideRank, false),
    hideFromLeaderboards: bool(p.hideFromLeaderboards, false),
    hideKits: bool(p.hideKits, false),
  };
}

/** Unread Signals of a user. */
export async function unreadNotifications(db: Executor, userId: number): Promise<number> {
  const result = await db.execute<{ n: number }>(
    sql`SELECT count(*)::int AS "n" FROM "Notification" WHERE "userId" = ${userId} AND "readAt" IS NULL`,
  );
  return Number(result.rows[0]?.n ?? 0);
}

function subjectOf(row: User, sessionId?: string): PermissionSubject {
  return {
    userId: row.id,
    role: row.role,
    emailVerified: row.emailVerifiedAt !== null,
    suspendedUntil: row.suspendedUntil,
    verifiedCreator: row.verifiedCreator,
    trustLevel: row.trustLevel,
    handle: row.slug,
    ...(sessionId ? { sessionId } : {}),
  };
}

async function requireUser(db: Executor, userId: number): Promise<User> {
  const row = await findUserById(db, userId);
  if (!row || row.deletedAt) throw errors.unauthenticated();
  return row;
}

type OnboardingState = { steps?: Record<string, string>; dismissedAt?: string; completedAt?: string };

/** «Day 1» checklist from the explicit marks and the user's real activity. */
export async function onboardingOf(db: Executor, row: User): Promise<z.infer<typeof MeHomeDTO>['onboarding']> {
  const state = (row.onboarding ?? {}) as OnboardingState;
  const activity = await db.execute<Record<string, Date | string | null>>(sql`
    SELECT
      (SELECT min(d."createdAt") FROM "ModDownload" d WHERE d."userId" = ${row.id}) AS "first_download",
      (SELECT min(f."createdAt") FROM "ModFavorite" f WHERE f."userId" = ${row.id}) AS "follow_mod",
      (SELECT min(c."createdAt") FROM "CompatReport" c WHERE c."userId" = ${row.id}) AS "compat_report",
      (SELECT min(k."createdAt") FROM "Kit" k WHERE k."ownerId" = ${row.id}) AS "create_kit"`);
  const derived = activity.rows[0] ?? {};
  const steps = ONBOARDING_STEPS.map((key) => {
    const explicit = state.steps?.[key];
    const fromData = derived[key];
    const at = explicit ?? (fromData ? new Date(fromData).toISOString() : null);
    return { key, done: at !== null, doneAt: at ? new Date(at).toISOString() : null };
  });
  const completed = Boolean(state.completedAt) || steps.every((s) => s.done);
  const dismissed = Boolean(state.dismissedAt);
  if (completed || dismissed) return null;
  return { steps, completed, dismissed };
}

/** Followed mods whose latest version is newer than the user's last download of that mod. */
export async function followedUpdates(
  db: Executor,
  userId: number,
): Promise<Array<{ modId: number; fromVersion: string | null; toVersion: string }>> {
  const result = await db.execute<{ modId: number; fromVersion: string | null; toVersion: string }>(sql`
    WITH followed AS (
      SELECT DISTINCT f."modId" FROM "ModFavorite" f WHERE f."userId" = ${userId} AND f."modId" IS NOT NULL
    ),
    last_download AS (
      SELECT DISTINCT ON (v."modId") v."modId", v."version", d."createdAt"
      FROM "ModDownload" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
      WHERE d."userId" = ${userId} AND v."modId" IN (SELECT "modId" FROM followed)
      ORDER BY v."modId", d."createdAt" DESC
    ),
    latest AS (
      SELECT DISTINCT ON (v."modId") v."modId", v."version", v."createdAt"
      FROM "ModVersion" v WHERE v."modId" IN (SELECT "modId" FROM followed) AND v."isLatest"
      ORDER BY v."modId", v."createdAt" DESC
    )
    SELECT l."modId" AS "modId", ld."version" AS "fromVersion", l."version" AS "toVersion"
    FROM latest l
    JOIN last_download ld ON ld."modId" = l."modId"
    JOIN "Mod" m ON m."id" = l."modId" AND m."status" = 'published'
    WHERE l."createdAt" > ld."createdAt" AND l."version" IS DISTINCT FROM ld."version"
    ORDER BY l."createdAt" DESC
    LIMIT 100`);
  return result.rows.map((r) => ({ modId: Number(r.modId), fromVersion: r.fromVersion, toVersion: r.toVersion }));
}

export interface MeServices {
  /** `R2_PUBLIC_BASE_URL` for avatars. */
  mediaBaseUrl: string;
  /** Card builders of other domains (catalog, kits); absent → empty lists. */
  modCards?: (db: Executor, ids: number[], viewer: { includeNsfw: boolean }) => Promise<Map<number, ModCardDTO>>;
  recentKits?: (db: Executor, userId: number) => Promise<KitCardDTO[]>;
}

export async function getMe(db: Executor, services: MeServices, userId: number, now: Date): Promise<MeDTO> {
  const row = await requireUser(db, userId);
  const [self, unread, hasMods] = await Promise.all([
    toSelfUser(db, row, services.mediaBaseUrl),
    unreadNotifications(db, row.id),
    db.execute<{ has: boolean }>(sql`SELECT EXISTS (SELECT 1 FROM "Mod" WHERE "userId" = ${row.id}) AS "has"`),
  ]);
  const onboarding = await onboardingOf(db, row);
  return {
    user: self,
    permissions: permissionsOf(subjectOf(row), now),
    settings: settingsOf(row.settings),
    privacy: privacyOf(row.privacy),
    unreadNotifications: unread,
    flags: {
      hasMods: Boolean(hasMods.rows[0]?.has),
      onboardingPending: onboarding !== null,
      mustVerifyEmail: row.emailVerifiedAt === null,
    },
  };
}

export async function getMeSummary(
  db: Executor,
  services: MeServices,
  userId: number,
): Promise<z.infer<typeof MeSummaryDTO>> {
  const row = await requireUser(db, userId);
  return {
    id: row.id,
    handle: row.slug,
    displayName: displayNameOf(row),
    avatarUrl: await avatarUrlOf(db, row, services.mediaBaseUrl),
    role: row.role,
    emailVerified: row.emailVerifiedAt !== null,
    unreadNotifications: await unreadNotifications(db, row.id),
  };
}

export async function getMeHome(
  db: Executor,
  services: MeServices,
  userId: number,
): Promise<z.infer<typeof MeHomeDTO>> {
  const row = await requireUser(db, userId);
  const updates = await followedUpdates(db, row.id);
  const cards =
    services.modCards && updates.length > 0
      ? await services.modCards(
          db,
          updates.map((u) => u.modId),
          { includeNsfw: settingsOf(row.settings).nsfwOptIn },
        )
      : null;
  return {
    updates: cards
      ? updates.flatMap((u) => {
          const mod = cards.get(u.modId);
          return mod ? [{ mod, fromVersion: u.fromVersion, toVersion: u.toVersion }] : [];
        })
      : [],
    updatesCount: updates.length,
    onboarding: await onboardingOf(db, row),
    recentKits: services.recentKits ? await services.recentKits(db, row.id) : [],
  };
}

export async function updateSettings(
  db: Executor,
  userId: number,
  patch: z.infer<typeof UpdateSettingsBody>,
  now: Date,
): Promise<UserSettingsDTO> {
  const row = await requireUser(db, userId);
  const current = settingsOf(row.settings);
  const { confirmAdult, ...changes } = patch;
  const next: UserSettingsDTO = { ...current };
  for (const [key, value] of Object.entries(changes)) {
    if (value !== undefined) (next as Record<string, unknown>)[key] = value;
  }
  if (patch.nsfwOptIn === true && confirmAdult === true && !current.nsfwConfirmedAt) {
    next.nsfwConfirmedAt = now.toISOString();
  }
  const stored: Record<string, unknown> = { ...(row.settings ?? {}), ...next };
  if (next.locale === null) delete stored.locale;
  if (next.nsfwConfirmedAt === null) delete stored.nsfwConfirmedAt;
  if (next.reducedMotion === null) delete stored.reducedMotion;
  await db
    .update(user)
    .set({ settings: stored as UserSettings })
    .where(eq(user.id, userId));
  return next;
}

export async function updatePrivacy(
  db: Executor,
  userId: number,
  patch: z.infer<typeof UpdatePrivacyBody>,
): Promise<z.infer<typeof UserPrivacyDTO>> {
  const row = await requireUser(db, userId);
  const next = privacyOf(row.privacy);
  for (const [key, value] of Object.entries(patch)) {
    if (typeof value === 'boolean') (next as Record<string, boolean>)[key] = value;
  }
  await db
    .update(user)
    .set({ privacy: { ...(row.privacy ?? {}), ...next } })
    .where(eq(user.id, userId));
  return next;
}
