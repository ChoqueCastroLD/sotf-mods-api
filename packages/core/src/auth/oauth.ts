/**
 * OAuth login and linking (PLAN §7.1 T1-01, Discord). The provider is inactive unless its client
 * id and secret are configured (`OAuthService.enabled`).
 *
 * `complete()` decides what a verified provider profile means:
 * 1. The identity is already linked → sign that account in (or, when linking, report it).
 * 2. A signed-in user is linking → attach it (one identity per provider and account).
 * 3. The profile's **verified** email belongs to an existing account → never sign in directly: a
 *    short-lived ticket is issued and the owner confirms with the account password
 *    (`confirmLink`), so a provider-side email cannot take over an account.
 * 4. Otherwise a new account is created with the verified email (no usable password: the owner
 *    can set one with «forgot password»).
 */
import { randomBytes, randomInt } from 'node:crypto';
import { RESERVED_HANDLES } from '@sotf/contracts';
import type { OAuthError, OAuthProvider } from '@sotf/contracts/oauth';
import type { Executor } from '@sotf/db';
import { oauthIdentity, oauthLinkTicket, user, withTx } from '@sotf/db';
import { and, eq, isNull, lt, or, sql } from 'drizzle-orm';
import type { Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { newId } from '../kernel/ids.ts';
import { secondFactorMethods } from './challenges.ts';
import { type AuthOutcome, type AuthService, siteLink } from './service.ts';
import { type CreatedSession, createSession } from './sessions.ts';
import { hashToken, newSecretToken } from './tokens.ts';
import { findUserByEmail, findUserById, localeOf, toSelfUser } from './users.ts';

export interface OAuthProviderConfig {
  clientId: string;
  clientSecret: string;
}

export interface OAuthProfile {
  id: string;
  username: string;
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
}

export type OAuthResult =
  | { kind: 'session'; session: CreatedSession; created: boolean }
  | { kind: 'linked' }
  | { kind: 'ticket'; ticket: string }
  | { kind: 'error'; error: OAuthError };

export const LINK_TICKET_TTL_MS = 15 * 60 * 1000;
const DISCORD_API = 'https://discord.com/api/v10';
const FETCH_TIMEOUT_MS = 8000;

export interface OAuthServiceDeps {
  auth: AuthService;
  providers: Partial<Record<OAuthProvider, OAuthProviderConfig>>;
  /** `PUBLIC_SITE_URL`. */
  siteUrl: string;
  fetch?: typeof fetch;
}

function isUniqueViolation(error: unknown): boolean {
  let current: unknown = error;
  for (let depth = 0; depth < 5 && current; depth += 1) {
    if ((current as { code?: unknown }).code === '23505') return true;
    current = (current as { cause?: unknown }).cause;
  }
  return false;
}

/** Handle candidate from a provider username: `[a-z0-9-]`, 3–24, no edge/double hyphens. */
export function handleFromUsername(username: string): string {
  let base = username
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 24)
    .replace(/-+$/g, '');
  if (base.length < 3) base = `${base}${base ? '-' : ''}survivor`.slice(0, 24).replace(/-+$/g, '');
  return base;
}

export class OAuthService {
  readonly deps: OAuthServiceDeps;

  constructor(deps: OAuthServiceDeps) {
    this.deps = deps;
  }

  get #fetch(): typeof fetch {
    return this.deps.fetch ?? fetch;
  }

  /** True when the provider's credentials are configured. */
  enabled(provider: OAuthProvider): boolean {
    const config = this.deps.providers[provider];
    return Boolean(config?.clientId && config.clientSecret);
  }

  redirectUri(provider: OAuthProvider): string {
    return `${this.deps.siteUrl.replace(/\/+$/, '')}/api/v2/auth/oauth/${provider}/callback`;
  }

  #config(provider: OAuthProvider): OAuthProviderConfig {
    const config = this.deps.providers[provider];
    if (!config?.clientId || !config.clientSecret) throw errors.notFound('Provider');
    return config;
  }

  /** Provider authorization URL (PKCE S256). */
  authorizeUrl(provider: OAuthProvider, input: { state: string; challenge: string }): string {
    const config = this.#config(provider);
    const url = new URL('https://discord.com/oauth2/authorize');
    url.searchParams.set('client_id', config.clientId);
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('redirect_uri', this.redirectUri(provider));
    url.searchParams.set('scope', 'identify email');
    url.searchParams.set('state', input.state);
    url.searchParams.set('code_challenge', input.challenge);
    url.searchParams.set('code_challenge_method', 'S256');
    url.searchParams.set('prompt', 'consent');
    return url.toString();
  }

  /** Exchanges the code and reads the profile; null when the provider refuses or is unreachable. */
  async fetchProfile(provider: OAuthProvider, code: string, verifier: string): Promise<OAuthProfile | null> {
    const config = this.#config(provider);
    try {
      const tokenResponse = await this.#fetch(`${DISCORD_API}/oauth2/token`, {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded', accept: 'application/json' },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code,
          redirect_uri: this.redirectUri(provider),
          client_id: config.clientId,
          client_secret: config.clientSecret,
          code_verifier: verifier,
        }),
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
      if (!tokenResponse.ok) return null;
      const tokens = (await tokenResponse.json()) as { access_token?: unknown };
      if (typeof tokens.access_token !== 'string') return null;
      const profileResponse = await this.#fetch(`${DISCORD_API}/users/@me`, {
        headers: { authorization: `Bearer ${tokens.access_token}`, accept: 'application/json' },
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
      if (!profileResponse.ok) return null;
      const me = (await profileResponse.json()) as Record<string, unknown>;
      if (typeof me.id !== 'string' || typeof me.username !== 'string') return null;
      return {
        id: me.id,
        username: me.username.slice(0, 64),
        displayName: typeof me.global_name === 'string' && me.global_name.trim() ? me.global_name.trim() : null,
        email: typeof me.email === 'string' && me.email ? me.email : null,
        emailVerified: me.verified === true,
      };
    } catch {
      return null;
    }
  }

  async #sessionFor(tx: Executor, ctx: Ctx, userId: number, now: Date): Promise<CreatedSession | null> {
    const row = await findUserById(tx, userId);
    if (!row || row.deletedAt || row.bannedAt) return null;
    await tx.execute(
      sql`UPDATE "User" SET "lastLoginAt" = ${now.toISOString()}::timestamptz AT TIME ZONE 'UTC' WHERE "id" = ${userId}`,
    );
    return createSession(tx, {
      userId,
      passwordHash: row.password,
      remember: true,
      ipHash: ctx.ipHash,
      userAgent: ctx.userAgent,
      country: ctx.country,
      now,
    });
  }

  async #freeHandle(tx: Executor, username: string): Promise<string> {
    const base = handleFromUsername(username);
    for (let attempt = 0; attempt < 12; attempt += 1) {
      const suffix = attempt === 0 ? '' : `-${randomInt(1000, 10_000)}`;
      const candidate = `${base.slice(0, 24 - suffix.length).replace(/-+$/g, '')}${suffix}`;
      if (RESERVED_HANDLES.has(candidate) || candidate.startsWith('deleted-')) continue;
      const taken = await tx.execute<{ taken: boolean }>(sql`
        SELECT EXISTS (SELECT 1 FROM "User" WHERE lower("slug") = ${candidate})
            OR EXISTS (SELECT 1 FROM "UserSlugHistory" WHERE lower("slug") = ${candidate}) AS "taken"`);
      if (!taken.rows[0]?.taken) return candidate;
    }
    return `survivor-${randomBytes(4).toString('hex')}`.slice(0, 24);
  }

  /** What a verified provider profile means for this request (see the file header). */
  async complete(
    ctx: Ctx,
    provider: OAuthProvider,
    profile: OAuthProfile,
    input: { intent: 'login' | 'link'; locale: string },
  ): Promise<OAuthResult> {
    const now = ctx.clock.now();
    const linking = input.intent === 'link' && ctx.actor ? ctx.actor : null;

    const [existing] = await ctx.db
      .select()
      .from(oauthIdentity)
      .where(and(eq(oauthIdentity.provider, provider), eq(oauthIdentity.providerUserId, profile.id)));

    if (existing) {
      if (linking)
        return existing.userId === linking.userId ? { kind: 'linked' } : { kind: 'error', error: 'already_linked' };
      return withTx(ctx.db, async (tx): Promise<OAuthResult> => {
        const session = await this.#sessionFor(tx, ctx, existing.userId, now);
        if (!session) return { kind: 'error', error: 'banned' };
        await tx
          .update(oauthIdentity)
          .set({ lastLoginAt: now, providerUsername: profile.username })
          .where(eq(oauthIdentity.id, existing.id));
        await this.deps.auth.recordEvent(tx, ctx, 'oauth_login', true, existing.userId);
        return { kind: 'session', session, created: false };
      });
    }

    if (linking) {
      try {
        await ctx.db.insert(oauthIdentity).values({
          id: newId(),
          userId: linking.userId,
          provider,
          providerUserId: profile.id,
          providerUsername: profile.username,
          createdAt: now,
        });
      } catch (error) {
        if (isUniqueViolation(error)) return { kind: 'error', error: 'already_linked' };
        throw error;
      }
      await this.deps.auth.recordEvent(ctx.db, ctx, 'oauth_link', true, linking.userId);
      return { kind: 'linked' };
    }

    if (!profile.email) return { kind: 'error', error: 'email_missing' };
    if (!profile.emailVerified) return { kind: 'error', error: 'email_unverified' };

    const owner = await findUserByEmail(ctx.db, profile.email);
    if (owner) {
      if (owner.bannedAt) return { kind: 'error', error: 'banned' };
      // The password alone would open the session (`confirmLink`): an account with a second factor
      // links Discord from Settings → Security after a normal sign-in instead.
      if ((await secondFactorMethods(ctx.db, owner.id)).length > 0) return { kind: 'error', error: 'two_factor' };
      const ticket = newSecretToken();
      await ctx.db
        .update(oauthLinkTicket)
        .set({ usedAt: now })
        .where(and(eq(oauthLinkTicket.userId, owner.id), isNull(oauthLinkTicket.usedAt)));
      await ctx.db.insert(oauthLinkTicket).values({
        id: newId(),
        userId: owner.id,
        tokenHash: hashToken(ticket),
        provider,
        providerUserId: profile.id,
        providerUsername: profile.username,
        createdAt: now,
        expiresAt: new Date(now.getTime() + LINK_TICKET_TTL_MS),
      });
      return { kind: 'ticket', ticket };
    }

    return this.#register(ctx, provider, profile, input.locale, profile.email);
  }

  async #register(
    ctx: Ctx,
    provider: OAuthProvider,
    profile: OAuthProfile,
    localeInput: string,
    email: string,
  ): Promise<OAuthResult> {
    const now = ctx.clock.now();
    const locale = localeOf({ settings: { locale: localeInput } }, ctx.locale);
    // Nobody knows this password: the owner sets one through «forgot password» when they want it.
    const passwordHash = await this.deps.auth.deps.hasher.hash(randomBytes(32).toString('base64url'));
    const displayName = (profile.displayName ?? profile.username).slice(0, 32).trim();
    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        return await withTx(ctx.db, async (tx): Promise<OAuthResult> => {
          const handle = await this.#freeHandle(tx, profile.username);
          const [created] = await tx
            .insert(user)
            .values({
              email,
              password: passwordHash,
              name: displayName.length >= 2 ? displayName : handle,
              slug: handle,
              displayName: displayName.length >= 2 ? displayName : null,
              settings: { locale },
              emailVerifiedAt: now,
              lastLoginAt: now,
              createdAt: now,
              updatedAt: now,
            })
            .returning();
          if (!created) throw new Error('user insert returned nothing');
          await tx.insert(oauthIdentity).values({
            id: newId(),
            userId: created.id,
            provider,
            providerUserId: profile.id,
            providerUsername: profile.username,
            createdAt: now,
            lastLoginAt: now,
          });
          await ctx.jobs.emitNew(tx, 'user.registered', { userId: created.id, locale }, { actorId: created.id });
          await ctx.jobs.emitNew(tx, 'user.email_verified', { userId: created.id }, { actorId: created.id });
          const session = await createSession(tx, {
            userId: created.id,
            passwordHash,
            remember: true,
            ipHash: ctx.ipHash,
            userAgent: ctx.userAgent,
            country: ctx.country,
            now,
          });
          await this.deps.auth.recordEvent(tx, ctx, 'oauth_register', true, created.id);
          ctx.log.info({ userId: created.id, provider }, 'account registered with OAuth');
          return { kind: 'session', session, created: true };
        });
      } catch (error) {
        if (!isUniqueViolation(error)) throw error;
        // The handle was taken meanwhile (retry), or the identity/email appeared: look again.
        const [identity] = await ctx.db
          .select()
          .from(oauthIdentity)
          .where(and(eq(oauthIdentity.provider, provider), eq(oauthIdentity.providerUserId, profile.id)));
        if (identity) return { kind: 'error', error: 'failed' };
        if (await findUserByEmail(ctx.db, email)) return { kind: 'error', error: 'failed' };
      }
    }
    return { kind: 'error', error: 'failed' };
  }

  /** Confirms a pending link with the account password, links and signs in. */
  async confirmLink(ctx: Ctx, input: { ticket: string; password: string }): Promise<AuthOutcome> {
    const now = ctx.clock.now();
    const tokenHash = hashToken(input.ticket);
    const [ticket] = await ctx.db.select().from(oauthLinkTicket).where(eq(oauthLinkTicket.tokenHash, tokenHash));
    if (!ticket || ticket.usedAt) throw errors.notFound('Link');
    if (ticket.expiresAt.getTime() <= now.getTime()) {
      throw new DomainError('GONE', undefined, 'This link has expired');
    }
    await this.deps.auth.deps.limits?.consume('oauth-link-confirm', `ticket:${ticket.id}`, {
      max: 5,
      window: '1 hour',
    });
    const owner = await findUserById(ctx.db, ticket.userId);
    if (!owner || owner.deletedAt || owner.bannedAt) throw errors.notFound('Link');
    // Two-factor may have been turned on after the ticket was issued: never skip it with the password.
    if ((await secondFactorMethods(ctx.db, owner.id)).length > 0) throw errors.notFound('Link');
    const result = await this.deps.auth.deps.hasher.verify(owner.password, input.password);
    if (!result.ok) {
      await this.deps.auth.recordEvent(ctx.db, ctx, 'oauth_link', false, owner.id);
      throw new DomainError('INVALID_CREDENTIALS', undefined, 'The password is not correct');
    }
    try {
      return await withTx(ctx.db, async (tx) => {
        const claimed = await tx
          .update(oauthLinkTicket)
          .set({ usedAt: now })
          .where(and(eq(oauthLinkTicket.id, ticket.id), isNull(oauthLinkTicket.usedAt)))
          .returning({ id: oauthLinkTicket.id });
        if (claimed.length === 0) throw errors.notFound('Link');
        await tx.insert(oauthIdentity).values({
          id: newId(),
          userId: owner.id,
          provider: ticket.provider,
          providerUserId: ticket.providerUserId,
          providerUsername: ticket.providerUsername,
          createdAt: now,
          lastLoginAt: now,
        });
        // The provider vouched for this very email: the account's address is now verified.
        if (!owner.emailVerifiedAt) {
          await tx.update(user).set({ emailVerifiedAt: now }).where(eq(user.id, owner.id));
          await ctx.jobs.emitNew(tx, 'user.email_verified', { userId: owner.id }, { actorId: owner.id });
        }
        const session = await this.#sessionFor(tx, ctx, owner.id, now);
        if (!session) throw errors.notFound('Link');
        await this.deps.auth.recordEvent(tx, ctx, 'oauth_link', true, owner.id);
        const fresh = (await findUserById(tx, owner.id)) ?? owner;
        return { user: await toSelfUser(tx, fresh, this.deps.auth.deps.mediaBaseUrl), session };
      });
    } catch (error) {
      if (isUniqueViolation(error)) throw errors.conflict('This external account is already linked');
      throw error;
    }
  }

  async connections(
    db: Executor,
    userId: number,
  ): Promise<{ provider: OAuthProvider; username: string; linkedAt: string }[]> {
    const rows = await db.select().from(oauthIdentity).where(eq(oauthIdentity.userId, userId));
    return rows.map((row) => ({
      provider: row.provider,
      username: row.providerUsername,
      linkedAt: row.createdAt.toISOString(),
    }));
  }

  /** Unlinks a provider after confirming the password. */
  async unlink(ctx: Ctx, provider: OAuthProvider, password: string): Promise<void> {
    const owner = await this.deps.auth.confirmPassword(ctx, password);
    const removed = await ctx.db
      .delete(oauthIdentity)
      .where(and(eq(oauthIdentity.userId, owner.id), eq(oauthIdentity.provider, provider)))
      .returning({ id: oauthIdentity.id });
    if (removed.length === 0) throw errors.notFound('Connection');
    await this.deps.auth.recordEvent(ctx.db, ctx, 'oauth_unlink', true, owner.id);
  }

  /** Where the callback sends the browser once the flow is done (path on this site). */
  landing(locale: string, path: string): string {
    return siteLink(this.deps.siteUrl, locale, path);
  }
}

/** Deletes expired or used link tickets (worker housekeeping). */
export async function purgeOAuthLinkTickets(db: Executor, now: Date): Promise<number> {
  const cutoff = new Date(now.getTime() - 24 * 3600 * 1000);
  const rows = await db
    .delete(oauthLinkTicket)
    .where(
      or(
        lt(oauthLinkTicket.expiresAt, cutoff),
        and(sql`${oauthLinkTicket.usedAt} IS NOT NULL`, lt(oauthLinkTicket.usedAt, cutoff)),
      ),
    )
    .returning({ id: oauthLinkTicket.id });
  return rows.length;
}
