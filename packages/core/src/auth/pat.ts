/**
 * Personal access tokens (PLAN §7.1 T1-08): `sotfm_pat_<43 base64url chars>` bearer tokens for the
 * public API. Only `sha256(token)` is stored (the secret is shown once), each token has scopes, an
 * optional expiry, a «last used» time and can be revoked. A token acts as its owner **without
 * staff powers** and only reaches the endpoints its scopes allow (`patAllows`); managing tokens,
 * the account, sessions and staff areas always need the browser session.
 */
import {
  type CreatePersonalAccessTokenBody,
  PAT_MAX_ACTIVE,
  PAT_PREFIX,
  type PatScope,
  type PersonalAccessTokenDTO,
} from '@sotf/contracts';
import type { Endpoint } from '@sotf/contracts/endpoint';
import { type Executor, personalAccessToken, user } from '@sotf/db';
import { and, count, desc, eq, gt, isNull, lt, or } from 'drizzle-orm';
import type { z } from 'zod';
import type { Actor, Ctx, Role } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { newId } from '../kernel/ids.ts';
import { hashToken, newSecretToken } from './tokens.ts';

type CreateBody = z.output<typeof CreatePersonalAccessTokenBody>;

/** `lastUsedAt` is written at most this often per token. */
export const PAT_LAST_USED_RESOLUTION_MS = 5 * 60 * 1000;
const DAY = 24 * 3600 * 1000;
const TOKEN_LENGTH = PAT_PREFIX.length + 43;

/** Shape of a token (fast reject before touching the database). */
export function looksLikePat(value: string): boolean {
  return (
    value.length === TOKEN_LENGTH &&
    value.startsWith(PAT_PREFIX) &&
    /^[A-Za-z0-9_-]{43}$/.test(value.slice(PAT_PREFIX.length))
  );
}

/** The bearer token of an `Authorization` header when it is a personal access token. */
export function patFromAuthorization(header: string | string[] | undefined): string | null {
  const value = Array.isArray(header) ? header[0] : header;
  if (!value) return null;
  const match = /^Bearer\s+(\S+)\s*$/i.exec(value);
  const token = match?.[1];
  return token?.startsWith(PAT_PREFIX) ? token : null;
}

type Row = typeof personalAccessToken.$inferSelect;

function toDto(row: Row): PersonalAccessTokenDTO {
  return {
    id: row.id,
    name: row.name,
    prefix: row.tokenPrefix,
    scopes: row.scopes as PatScope[],
    createdAt: row.createdAt.toISOString(),
    lastUsedAt: row.lastUsedAt ? row.lastUsedAt.toISOString() : null,
    expiresAt: row.expiresAt ? row.expiresAt.toISOString() : null,
  };
}

const activeWhere = (userId: number, now: Date) =>
  and(
    eq(personalAccessToken.userId, userId),
    isNull(personalAccessToken.revokedAt),
    or(isNull(personalAccessToken.expiresAt), gt(personalAccessToken.expiresAt, now)),
  );

export async function listPersonalAccessTokens(
  db: Executor,
  userId: number,
  now: Date,
): Promise<{ items: PersonalAccessTokenDTO[]; max: number }> {
  const rows = await db
    .select()
    .from(personalAccessToken)
    .where(activeWhere(userId, now))
    .orderBy(desc(personalAccessToken.createdAt))
    .limit(PAT_MAX_ACTIVE + 5);
  return { items: rows.map(toDto), max: PAT_MAX_ACTIVE };
}

/** Creates a token for the signed-in user (the caller has confirmed the password). */
export async function createPersonalAccessToken(
  ctx: Ctx,
  userId: number,
  input: Pick<CreateBody, 'name' | 'scopes' | 'expiresInDays'>,
): Promise<{ token: string; item: PersonalAccessTokenDTO }> {
  const now = ctx.clock.now();
  const [active] = await ctx.db.select({ n: count() }).from(personalAccessToken).where(activeWhere(userId, now));
  if (Number(active?.n ?? 0) >= PAT_MAX_ACTIVE) {
    throw new DomainError(
      'CONFLICT',
      undefined,
      `You can have up to ${PAT_MAX_ACTIVE} active tokens; revoke one first`,
    );
  }
  const secret = `${PAT_PREFIX}${newSecretToken()}`;
  const [row] = await ctx.db
    .insert(personalAccessToken)
    .values({
      id: newId(),
      userId,
      name: input.name.trim(),
      tokenHash: hashToken(secret),
      tokenPrefix: secret.slice(0, PAT_PREFIX.length + 4),
      scopes: [...new Set(input.scopes)],
      createdAt: now,
      expiresAt: input.expiresInDays === null ? null : new Date(now.getTime() + input.expiresInDays * DAY),
    })
    .returning();
  if (!row) throw new Error('token insert returned nothing');
  ctx.log.info({ userId, tokenId: row.id, scopes: row.scopes }, 'personal access token created');
  return { token: secret, item: toDto(row) };
}

/** Revokes a token of the user (NOT_FOUND when it is not theirs or already revoked). */
export async function revokePersonalAccessToken(ctx: Ctx, userId: number, id: string): Promise<void> {
  const rows = await ctx.db
    .update(personalAccessToken)
    .set({ revokedAt: ctx.clock.now() })
    .where(
      and(
        eq(personalAccessToken.id, id),
        eq(personalAccessToken.userId, userId),
        isNull(personalAccessToken.revokedAt),
      ),
    )
    .returning({ id: personalAccessToken.id });
  if (rows.length === 0) throw errors.notFound('Token');
  ctx.log.info({ userId, tokenId: id }, 'personal access token revoked');
}

export interface ResolvedPat {
  actor: Actor;
  scopes: readonly PatScope[];
  tokenId: string;
}

/** Resolves a bearer token to its owner (null when unknown, revoked, expired or the owner is banned/deleted). */
export async function resolvePersonalAccessToken(db: Executor, token: string, now: Date): Promise<ResolvedPat | null> {
  if (!looksLikePat(token)) return null;
  const [row] = await db
    .select({
      id: personalAccessToken.id,
      scopes: personalAccessToken.scopes,
      lastUsedAt: personalAccessToken.lastUsedAt,
      expiresAt: personalAccessToken.expiresAt,
      revokedAt: personalAccessToken.revokedAt,
      userId: user.id,
      role: user.role,
      slug: user.slug,
      emailVerifiedAt: user.emailVerifiedAt,
      verifiedCreator: user.verifiedCreator,
      trustLevel: user.trustLevel,
      suspendedUntil: user.suspendedUntil,
      bannedAt: user.bannedAt,
      deletedAt: user.deletedAt,
    })
    .from(personalAccessToken)
    .innerJoin(user, eq(user.id, personalAccessToken.userId))
    .where(eq(personalAccessToken.tokenHash, hashToken(token)))
    .limit(1);
  if (!row) return null;
  if (row.revokedAt || (row.expiresAt && row.expiresAt.getTime() <= now.getTime())) return null;
  if (row.bannedAt || row.deletedAt) return null;

  if (!row.lastUsedAt || now.getTime() - row.lastUsedAt.getTime() >= PAT_LAST_USED_RESOLUTION_MS) {
    await db
      .update(personalAccessToken)
      .set({ lastUsedAt: now })
      .where(
        and(
          eq(personalAccessToken.id, row.id),
          or(
            isNull(personalAccessToken.lastUsedAt),
            lt(personalAccessToken.lastUsedAt, new Date(now.getTime() - PAT_LAST_USED_RESOLUTION_MS)),
          ),
        ),
      );
  }
  return {
    tokenId: row.id,
    scopes: row.scopes as PatScope[],
    actor: {
      userId: row.userId,
      // A token never carries staff powers, whatever the owner's role.
      role: 'user' as Role,
      emailVerified: row.emailVerifiedAt !== null,
      suspendedUntil: row.suspendedUntil,
      handle: row.slug,
      verifiedCreator: row.verifiedCreator,
      trustLevel: row.trustLevel,
    },
  };
}

// ------------------------------------------------------------------------------------------------
// Scope policy
// ------------------------------------------------------------------------------------------------

const READ_DOMAINS = new Set([
  'me',
  'studio',
  'notifications',
  'follows',
  'kits',
  'gamification',
  'catalog',
  'versions',
  'reviews',
  'comments',
  'compat',
  'downloads',
  'search',
  'stats',
  'seo',
  'uploads',
]);
/** Private account reads a token may not make even with `read`. */
const ACCOUNT_ONLY = new Set(['me.sessions', 'me.getExport']);
const MODS_WRITE_DOMAINS = new Set(['studio', 'uploads', 'versions', 'kits']);
const SOCIAL_WRITE_DOMAINS = new Set(['comments', 'reviews', 'follows', 'compat', 'notifications']);

/** The scope an endpoint needs from a token, or null when tokens may never call it. */
export function requiredPatScope(endpoint: Pick<Endpoint, 'id' | 'method' | 'auth'>): PatScope | null {
  if (endpoint.auth === 'moderator' || endpoint.auth === 'admin' || endpoint.auth === 'internal') return null;
  const domain = endpoint.id.split('.', 1)[0] ?? '';
  if (ACCOUNT_ONLY.has(endpoint.id)) return null;
  if (endpoint.method === 'GET' || endpoint.method === 'HEAD') return READ_DOMAINS.has(domain) ? 'read' : null;
  if (MODS_WRITE_DOMAINS.has(domain)) return 'mods:write';
  if (SOCIAL_WRITE_DOMAINS.has(domain)) return 'social:write';
  return null;
}

/** True when a token with `scopes` may call the endpoint. */
export function patAllows(endpoint: Pick<Endpoint, 'id' | 'method' | 'auth'>, scopes: readonly PatScope[]): boolean {
  const needed = requiredPatScope(endpoint);
  return needed !== null && scopes.includes(needed);
}

/** Deletes tokens that expired or were revoked more than 30 days ago (worker housekeeping). */
export async function purgePersonalAccessTokens(db: Executor, now: Date): Promise<number> {
  const cutoff = new Date(now.getTime() - 30 * 24 * 3600 * 1000);
  const rows = await db
    .delete(personalAccessToken)
    .where(or(lt(personalAccessToken.expiresAt, cutoff), lt(personalAccessToken.revokedAt, cutoff)))
    .returning({ id: personalAccessToken.id });
  return rows.length;
}
