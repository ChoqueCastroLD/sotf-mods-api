/**
 * Account reads shared by auth, `/me` and the account jobs: lookup by email or handle, the private
 * `SelfUserDTO`, the display name and locale used in emails and the avatar URL.
 */
import type { SelfUserDTO } from '@sotf/contracts/auth';
import { LOCALES, type Locale } from '@sotf/contracts/common';
import { accountDeletion, type Executor, media, type User, user } from '@sotf/db';
import { and, eq, isNull, sql } from 'drizzle-orm';
import { normalizeEmail } from './disposable.ts';

/** Finds a live (not deleted) account by email (case-insensitive) or handle (case-insensitive). */
export async function findUserByIdentifier(db: Executor, identifier: string): Promise<User | null> {
  const value = identifier.trim();
  if (!value) return null;
  const condition = value.includes('@')
    ? eq(user.emailNormalized, normalizeEmail(value))
    : sql`lower(${user.slug}) = ${value.toLowerCase()}`;
  const [row] = await db
    .select()
    .from(user)
    .where(and(condition, isNull(user.deletedAt)))
    .limit(1);
  return row ?? null;
}

export async function findUserByEmail(db: Executor, email: string): Promise<User | null> {
  const [row] = await db
    .select()
    .from(user)
    .where(and(eq(user.emailNormalized, normalizeEmail(email)), isNull(user.deletedAt)))
    .limit(1);
  return row ?? null;
}

export async function findUserById(db: Executor, id: number): Promise<User | null> {
  const [row] = await db.select().from(user).where(eq(user.id, id)).limit(1);
  return row ?? null;
}

/** True when an email is used by any account (deleted ones are anonymized and never match). */
export async function emailTaken(db: Executor, email: string, exceptUserId?: number): Promise<boolean> {
  const rows = await db
    .select({ id: user.id })
    .from(user)
    .where(eq(user.emailNormalized, normalizeEmail(email)))
    .limit(2);
  return rows.some((row) => row.id !== exceptUserId);
}

/** True when a handle is used by an account or its slug history (case-insensitive). */
export async function handleTaken(db: Executor, handle: string): Promise<boolean> {
  const result = await db.execute<{ taken: boolean }>(sql`
    SELECT EXISTS (SELECT 1 FROM "User" WHERE lower("slug") = ${handle.toLowerCase()})
        OR EXISTS (SELECT 1 FROM "UserSlugHistory" WHERE lower("slug") = ${handle.toLowerCase()}) AS "taken"`);
  return Boolean(result.rows[0]?.taken);
}

/** Name shown in emails and headers: displayName → legacy name → handle. */
export function displayNameOf(row: Pick<User, 'displayName' | 'name' | 'slug'>): string {
  const name = (row.displayName ?? '').trim() || (row.name ?? '').trim() || row.slug;
  return name.slice(0, 64);
}

/** Preferred locale of an account (settings), else the fallback. */
export function localeOf(row: Pick<User, 'settings'>, fallback: string = 'en'): Locale {
  const preferred = row.settings?.locale;
  if (preferred && (LOCALES as readonly string[]).includes(preferred)) return preferred as Locale;
  return (LOCALES as readonly string[]).includes(fallback) ? (fallback as Locale) : 'en';
}

/** Avatar URL: the processed avatar `Media` (smallest variant ≥ 96 px), else the legacy image URL. */
export async function avatarUrlOf(
  db: Executor,
  row: Pick<User, 'avatarMediaId' | 'imageUrl'>,
  publicBaseUrl: string,
): Promise<string | null> {
  if (row.avatarMediaId) {
    const [m] = await db
      .select({ variants: media.variants, status: media.status })
      .from(media)
      .where(eq(media.id, row.avatarMediaId));
    if (m && m.status === 'ready' && m.variants.length > 0) {
      const sorted = [...m.variants].sort((a, b) => a.w - b.w);
      const pick =
        sorted.find((v) => v.w >= 96 && v.format === 'webp') ?? sorted.find((v) => v.w >= 96) ?? sorted.at(-1);
      if (pick) return `${publicBaseUrl.replace(/\/+$/, '')}/${pick.key.split('/').map(encodeURIComponent).join('/')}`;
    }
  }
  const legacy = (row.imageUrl ?? '').trim();
  return /^https:\/\//.test(legacy) ? legacy : null;
}

/** The private `SelfUserDTO` of an account. */
export async function toSelfUser(db: Executor, row: User, publicBaseUrl: string): Promise<SelfUserDTO> {
  const [deletion] = await db
    .select({ executeAfter: accountDeletion.executeAfter })
    .from(accountDeletion)
    .where(
      and(eq(accountDeletion.userId, row.id), isNull(accountDeletion.cancelledAt), isNull(accountDeletion.executedAt)),
    );
  const locale = row.settings?.locale;
  return {
    id: row.id,
    handle: row.slug,
    displayName: displayNameOf(row),
    email: row.email,
    emailVerified: row.emailVerifiedAt !== null,
    role: row.role,
    verifiedCreator: row.verifiedCreator,
    avatarUrl: await avatarUrlOf(db, row, publicBaseUrl),
    locale: locale && (LOCALES as readonly string[]).includes(locale) ? (locale as Locale) : null,
    trustLevel: Math.max(0, Math.min(3, row.trustLevel)),
    createdAt: row.createdAt.toISOString(),
    suspendedUntil: row.suspendedUntil && row.suspendedUntil > new Date() ? row.suspendedUntil.toISOString() : null,
    deletionScheduledAt: deletion ? deletion.executeAfter.toISOString() : null,
  };
}
