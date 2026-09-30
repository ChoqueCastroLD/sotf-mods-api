/**
 * Account and authentication flows (PLAN §5.2 "Cuenta y autenticación", §6.10, T0-13, T0-22).
 *
 * - Register: Turnstile, disposable-domain and breached-password checks, reserved handles
 *   (contract), unique email/handle, argon2id hash, verification email, session.
 * - Login: email **or** handle; one generic `INVALID_CREDENTIALS` for every failure, a decoy hash
 *   for unknown accounts and a minimum failure duration so timing does not reveal which part
 *   failed; Turnstile after 3 recent failures (per IP or per account); 10 attempts/hour per account;
 *   transparent rehash of bcrypt/weak hashes to argon2id; banned accounts → `SUSPENDED`.
 * - Forgot/reset: always 202; reset tokens are hashed, 1 h, single use; during the legacy window
 *   the plaintext legacy "PasswordResetToken" rows are accepted once (and deleted, as the legacy did).
 * - Verify/resend, change email (confirm new, warn old), change password (revoke others).
 *
 * Every security-relevant step is recorded in "AuthEvent" (90-day retention, hashed IP).
 */
import type { SelfUserDTO } from '@sotf/contracts/auth';
import { type AuthTokenKind, authEvent, type Executor, passwordResetToken, type User, user, withTx } from '@sotf/db';
import { and, count, eq, gt, isNull, or, sql } from 'drizzle-orm';
import { queueEmail } from '../email/outbox.ts';
import { maskEmail } from '../email/templates.ts';
import type { Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { logHash } from '../kernel/hashing.ts';
import { isDisposableEmail, normalizeEmail } from './disposable.ts';
import type { BreachedPasswordChecker } from './hibp.ts';
import { type PasswordHasher, pwdFingerprint } from './passwords.ts';
import {
  type CreatedSession,
  createSession,
  refreshSessionFingerprint,
  revokeSession,
  revokeUserSessions,
} from './sessions.ts';
import { consumeAuthToken, issueAuthToken } from './tokens-store.ts';
import type { TurnstileVerifier } from './turnstile.ts';
import {
  displayNameOf,
  emailTaken,
  findUserByEmail,
  findUserById,
  findUserByIdentifier,
  handleTaken,
  localeOf,
  toSelfUser,
} from './users.ts';

export const AUTH_EVENT_KINDS = [
  'login',
  'logout',
  'register',
  'rehash',
  'password_forgot',
  'password_reset',
  'password_change',
  'email_verify',
  'email_verify_resend',
  'email_change_request',
  'email_change',
  'session_revoke',
  'sessions_revoke_others',
  'account_delete_request',
  'account_delete_cancel',
  'account_export',
  'oauth_login',
  'oauth_register',
  'oauth_link',
  'oauth_unlink',
  'pat_create',
  'pat_revoke',
] as const;
export type AuthEventKind = (typeof AUTH_EVENT_KINDS)[number];

/** Failed logins within this window that trigger the Turnstile requirement. */
export const TURNSTILE_AFTER_FAILURES = 3;
export const FAILURE_WINDOW_MS = 15 * 60 * 1000;
/** Minimum duration of a failed login (ms): hides which branch failed. */
export const DEFAULT_FAILURE_FLOOR_MS = 400;
/** Legacy reset tokens are accepted when created within this window (PLAN §6.10). */
export const LEGACY_RESET_WINDOW_MS = 24 * 3600 * 1000;
/** Minimum breach count that rejects a new password. */
export const BREACHED_THRESHOLD = 1;

export interface RateLimitHook {
  consume(name: string, key: string, limit: { max: number; window: number | string }): Promise<void>;
}

export interface AuthServiceDeps {
  hasher: PasswordHasher;
  hibp: BreachedPasswordChecker;
  turnstile: TurnstileVerifier;
  /** `PUBLIC_SITE_URL` (links in emails). */
  siteUrl: string;
  /** Public media origin (`R2_PUBLIC_BASE_URL`) for avatars. */
  mediaBaseUrl: string;
  /** Per-account / per-email limits (the API's rate limiter). */
  limits?: RateLimitHook;
  failureFloorMs?: number;
}

export interface AuthOutcome {
  user: SelfUserDTO;
  session: CreatedSession;
}

export interface RegisterInput {
  email: string;
  handle: string;
  password: string;
  displayName?: string | undefined;
  locale: string;
  turnstileToken: string;
}

export interface LoginInput {
  identifier: string;
  password: string;
  remember: boolean;
  turnstileToken?: string | undefined;
}

/** Localized absolute link to a web page (`/es/verify-email?token=…`). */
export function siteLink(siteUrl: string, locale: string, path: string): string {
  const base = siteUrl.replace(/\/+$/, '');
  return `${base}${locale === 'en' ? '' : `/${locale}`}${path}`;
}

function conflict(path: string, code: string, message: string): DomainError {
  return new DomainError('CONFLICT', undefined, message, { errors: [{ path, message, code }] });
}

function invalid(path: string, code: string, message: string): DomainError {
  return errors.validation(message, [{ path, message, code }]);
}

function isUniqueViolation(error: unknown): boolean {
  let current: unknown = error;
  for (let depth = 0; depth < 5 && current; depth += 1) {
    if ((current as { code?: unknown }).code === '23505') return true;
    current = (current as { cause?: unknown }).cause;
  }
  return false;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class AuthService {
  readonly deps: AuthServiceDeps;

  constructor(deps: AuthServiceDeps) {
    this.deps = deps;
  }

  /** Records a security event (hashed IP, bounded UA). */
  async recordEvent(
    db: Executor,
    ctx: Ctx,
    kind: AuthEventKind,
    success: boolean,
    userId: number | null,
  ): Promise<void> {
    await db.insert(authEvent).values({
      userId,
      kind,
      success,
      ipHash: ctx.ipHash,
      userAgent: ctx.userAgent ? ctx.userAgent.slice(0, 512) : null,
      createdAt: ctx.clock.now(),
    });
  }

  async #checkNewPassword(password: string): Promise<void> {
    const breaches = await this.deps.hibp.count(password);
    if (breaches >= BREACHED_THRESHOLD) {
      throw invalid('password', 'password_breached', 'This password appeared in a data breach; choose a different one');
    }
  }

  async #queueVerification(
    tx: Executor,
    ctx: Ctx,
    row: { id: number; email: string; displayName: string; locale: string },
  ) {
    const issued = await issueAuthToken(tx, { userId: row.id, kind: 'email_verify', now: ctx.clock.now() });
    await queueEmail(tx, ctx.jobs, {
      userId: row.id,
      to: row.email,
      template: 'auth.verify_email',
      locale: row.locale,
      payload: {
        displayName: row.displayName,
        url: `${siteLink(this.deps.siteUrl, row.locale, '/verify-email')}?token=${issued.token}`,
        expiresHours: 24,
      },
      dedupeKey: `auth.verify:${issued.id}`,
    });
  }

  // ------------------------------------------------------------------------------------------
  // Register / login / logout
  // ------------------------------------------------------------------------------------------

  async register(ctx: Ctx, input: RegisterInput): Promise<AuthOutcome> {
    if (!(await this.deps.turnstile.verify(input.turnstileToken, ctx.ip))) {
      throw new DomainError('TURNSTILE_REQUIRED', undefined, 'Complete the human check');
    }
    const email = input.email.trim();
    const handle = input.handle.trim().toLowerCase();
    if (isDisposableEmail(email)) {
      throw invalid('email', 'email_disposable', 'Disposable email addresses cannot be used');
    }
    if (await emailTaken(ctx.db, email)) throw conflict('email', 'email_taken', 'This email is already registered');
    if (await handleTaken(ctx.db, handle)) throw conflict('handle', 'handle_taken', 'This handle is taken');
    await this.#checkNewPassword(input.password);
    const passwordHash = await this.deps.hasher.hash(input.password);
    const now = ctx.clock.now();
    const displayName = input.displayName?.trim() || null;
    const locale = localeOf({ settings: { locale: input.locale } }, ctx.locale);

    try {
      return await withTx(ctx.db, async (tx) => {
        const [created] = await tx
          .insert(user)
          .values({
            email,
            password: passwordHash,
            name: displayName ?? handle,
            slug: handle,
            displayName,
            settings: { locale },
            passwordUpdatedAt: now,
            lastLoginAt: now,
            createdAt: now,
            updatedAt: now,
          })
          .returning();
        if (!created) throw new Error('user insert returned nothing');
        await this.#queueVerification(tx, ctx, {
          id: created.id,
          email,
          displayName: displayNameOf(created),
          locale,
        });
        await ctx.jobs.emitNew(tx, 'user.registered', { userId: created.id, locale }, { actorId: created.id });
        const session = await createSession(tx, {
          userId: created.id,
          passwordHash,
          remember: true,
          ipHash: ctx.ipHash,
          userAgent: ctx.userAgent,
          country: ctx.country,
          now,
        });
        await this.recordEvent(tx, ctx, 'register', true, created.id);
        ctx.log.info({ userId: created.id }, 'account registered');
        return { user: await toSelfUser(tx, created, this.deps.mediaBaseUrl), session };
      });
    } catch (error) {
      if (isUniqueViolation(error)) throw conflict('email', 'already_registered', 'This email or handle is taken');
      throw error;
    }
  }

  async #failedLogin(ctx: Ctx, userId: number | null, started: number): Promise<never> {
    await this.recordEvent(ctx.db, ctx, 'login', false, userId);
    const floor = this.deps.failureFloorMs ?? DEFAULT_FAILURE_FLOOR_MS;
    const elapsed = performance.now() - started;
    // Pad to the floor plus a little jitter so both failure branches look alike.
    if (elapsed < floor) await sleep(floor - elapsed + Math.random() * 20);
    throw new DomainError('INVALID_CREDENTIALS', undefined, 'Wrong email, handle or password');
  }

  /** Recent failed logins from this client or against this account. */
  async recentFailures(ctx: Ctx, userId: number | null): Promise<number> {
    const since = new Date(ctx.clock.now().getTime() - FAILURE_WINDOW_MS);
    const who = [
      ...(ctx.ipHash ? [eq(authEvent.ipHash, ctx.ipHash)] : []),
      ...(userId !== null ? [eq(authEvent.userId, userId)] : []),
    ];
    if (who.length === 0) return 0;
    const [row] = await ctx.db
      .select({ n: count() })
      .from(authEvent)
      .where(
        and(eq(authEvent.kind, 'login'), eq(authEvent.success, false), gt(authEvent.createdAt, since), or(...who)),
      );
    return Number(row?.n ?? 0);
  }

  async login(ctx: Ctx, input: LoginInput): Promise<AuthOutcome> {
    const started = performance.now();
    const found = await findUserByIdentifier(ctx.db, input.identifier);

    // 10 attempts per hour per account (the identifier when the account does not exist).
    const accountKey = found ? `user:${found.id}` : `ident:${input.identifier.trim().toLowerCase()}`;
    await this.deps.limits?.consume('login-account', accountKey, { max: 10, window: '1 hour' });

    if ((await this.recentFailures(ctx, found?.id ?? null)) >= TURNSTILE_AFTER_FAILURES) {
      if (!(await this.deps.turnstile.verify(input.turnstileToken, ctx.ip))) {
        throw new DomainError('TURNSTILE_REQUIRED', undefined, 'Complete the human check');
      }
    }

    if (!found) {
      await this.deps.hasher.verifyDecoy(input.password);
      return this.#failedLogin(ctx, null, started);
    }
    const result = await this.deps.hasher.verify(found.password, input.password);
    if (!result.ok) {
      if (result.algorithm === 'unknown') {
        await this.deps.hasher.verifyDecoy(input.password);
        ctx.log.warn({ userId: found.id }, 'login against an unsupported password hash format (suggest a reset)');
      }
      return this.#failedLogin(ctx, found.id, started);
    }
    if (found.bannedAt) {
      await this.recordEvent(ctx.db, ctx, 'login', false, found.id);
      throw new DomainError('SUSPENDED', undefined, 'This account is banned');
    }

    const now = ctx.clock.now();
    let passwordHash = found.password;
    if (result.needsRehash) {
      passwordHash = await this.deps.hasher.hash(input.password);
    }
    return withTx(ctx.db, async (tx) => {
      if (passwordHash !== found.password) {
        // Only if nobody changed the password meanwhile (the legacy API may still write it).
        const updated = await tx
          .update(user)
          .set({ password: passwordHash, passwordUpdatedAt: now })
          .where(and(eq(user.id, found.id), eq(user.password, found.password)))
          .returning({ id: user.id });
        if (updated.length > 0) {
          await this.recordEvent(tx, ctx, 'rehash', true, found.id);
          ctx.log.info({ userId: found.id, from: result.algorithm }, 'password rehashed to argon2id');
        } else {
          passwordHash = found.password;
        }
      }
      await tx.execute(
        sql`UPDATE "User" SET "lastLoginAt" = ${now.toISOString()}::timestamptz AT TIME ZONE 'UTC' WHERE "id" = ${found.id}`,
      );
      const session = await createSession(tx, {
        userId: found.id,
        passwordHash,
        remember: input.remember,
        ipHash: ctx.ipHash,
        userAgent: ctx.userAgent,
        country: ctx.country,
        now,
      });
      await this.recordEvent(tx, ctx, 'login', true, found.id);
      const fresh = (await findUserById(tx, found.id)) ?? found;
      return { user: await toSelfUser(tx, fresh, this.deps.mediaBaseUrl), session };
    });
  }

  async logout(ctx: Ctx): Promise<void> {
    const actor = ctx.actor;
    if (!actor?.sessionId) return;
    await revokeSession(ctx.db, actor.userId, actor.sessionId, ctx.clock.now());
    await this.recordEvent(ctx.db, ctx, 'logout', true, actor.userId);
  }

  // ------------------------------------------------------------------------------------------
  // Password reset
  // ------------------------------------------------------------------------------------------

  /** Always resolves (202): the response never tells whether the email exists. */
  async forgotPassword(ctx: Ctx, input: { email: string; turnstileToken: string }): Promise<void> {
    if (!(await this.deps.turnstile.verify(input.turnstileToken, ctx.ip))) {
      throw new DomainError('TURNSTILE_REQUIRED', undefined, 'Complete the human check');
    }
    await this.deps.limits?.consume('password-forgot-email', normalizeEmail(input.email), {
      max: 3,
      window: '1 hour',
    });
    const found = await findUserByEmail(ctx.db, input.email);
    if (!found || found.bannedAt) {
      ctx.log.info({ email: logHash(input.email) }, 'password reset requested for an unknown account');
      return;
    }
    const locale = localeOf(found, ctx.locale);
    await withTx(ctx.db, async (tx) => {
      const issued = await issueAuthToken(tx, { userId: found.id, kind: 'password_reset', now: ctx.clock.now() });
      await queueEmail(tx, ctx.jobs, {
        userId: found.id,
        to: found.email,
        template: 'auth.password_reset',
        locale,
        payload: {
          displayName: displayNameOf(found),
          url: `${siteLink(this.deps.siteUrl, locale, '/reset-password')}?token=${issued.token}`,
          expiresMinutes: 60,
        },
        dedupeKey: `auth.reset:${issued.id}`,
      });
      await this.recordEvent(tx, ctx, 'password_forgot', true, found.id);
    });
  }

  async resetPassword(ctx: Ctx, input: { token: string; password: string }): Promise<void> {
    await this.#checkNewPassword(input.password);
    const passwordHash = await this.deps.hasher.hash(input.password);
    const now = ctx.clock.now();
    await withTx(ctx.db, async (tx) => {
      let userId: number;
      try {
        userId = (await consumeAuthToken(tx, input.token, ['password_reset'], now)).userId;
      } catch (error) {
        const legacy = await this.#consumeLegacyResetToken(tx, input.token, now);
        if (legacy === null) throw error;
        userId = legacy;
      }
      const target = await findUserById(tx, userId);
      if (!target || target.deletedAt || target.bannedAt) throw errors.notFound('Token');
      await tx
        .update(user)
        .set({ password: passwordHash, passwordUpdatedAt: now, emailVerifiedAt: target.emailVerifiedAt ?? now })
        .where(eq(user.id, userId));
      await revokeUserSessions(tx, userId, now);
      await this.#retireTokens(tx, userId, 'password_reset', now);
      await this.#queuePasswordChanged(tx, ctx, target);
      await this.recordEvent(tx, ctx, 'password_reset', true, userId);
    });
  }

  /**
   * Legacy "PasswordResetToken" (plaintext, created by the legacy API): accepted once when not
   * expired and created within the last 24 h, then deleted (the legacy did the same). Returns the
   * user id, or null when there is no such token.
   */
  async #consumeLegacyResetToken(tx: Executor, token: string, now: Date): Promise<number | null> {
    const [row] = await tx.select().from(passwordResetToken).where(eq(passwordResetToken.token, token)).for('update');
    if (!row) return null;
    if (row.expiresAt.getTime() <= now.getTime() || now.getTime() - row.createdAt.getTime() > LEGACY_RESET_WINDOW_MS) {
      throw new DomainError('GONE', undefined, 'This link has expired');
    }
    await tx.delete(passwordResetToken).where(eq(passwordResetToken.id, row.id));
    return row.userId;
  }

  async #retireTokens(tx: Executor, userId: number, kind: AuthTokenKind, now: Date): Promise<void> {
    await tx.execute(
      sql`UPDATE "AuthToken" SET "usedAt" = ${now.toISOString()}::timestamptz WHERE "userId" = ${userId} AND "kind" = ${kind} AND "usedAt" IS NULL`,
    );
  }

  async #queuePasswordChanged(tx: Executor, ctx: Ctx, target: User): Promise<void> {
    const locale = localeOf(target, ctx.locale);
    await queueEmail(tx, ctx.jobs, {
      userId: target.id,
      to: target.email,
      template: 'auth.password_changed',
      locale,
      payload: {
        displayName: displayNameOf(target),
        changedAt: ctx.clock.now().toISOString(),
        resetUrl: siteLink(this.deps.siteUrl, locale, '/forgot-password'),
        sessionsUrl: siteLink(this.deps.siteUrl, locale, '/settings/security'),
      },
    });
  }

  // ------------------------------------------------------------------------------------------
  // Email verification and change
  // ------------------------------------------------------------------------------------------

  /** Consumes a verification or email-change token. */
  async verifyEmail(ctx: Ctx, token: string): Promise<{ userId: number; kind: 'email_verify' | 'email_change' }> {
    const now = ctx.clock.now();
    return withTx(ctx.db, async (tx) => {
      const consumed = await consumeAuthToken(tx, token, ['email_verify', 'email_change'], now);
      const target = await findUserById(tx, consumed.userId);
      if (!target || target.deletedAt) throw errors.notFound('Token');
      if (consumed.kind === 'email_change') {
        const newEmail = String(consumed.payload.newEmail ?? '');
        if (!newEmail) throw errors.notFound('Token');
        if (await emailTaken(tx, newEmail, target.id)) {
          throw conflict('email', 'email_taken', 'This email is already registered');
        }
        await tx.update(user).set({ email: newEmail, emailVerifiedAt: now }).where(eq(user.id, target.id));
        await this.recordEvent(tx, ctx, 'email_change', true, target.id);
        return { userId: target.id, kind: 'email_change' as const };
      }
      if (!target.emailVerifiedAt) {
        await tx.update(user).set({ emailVerifiedAt: now }).where(eq(user.id, target.id));
        await ctx.jobs.emitNew(tx, 'user.email_verified', { userId: target.id }, { actorId: target.id });
      }
      await this.recordEvent(tx, ctx, 'email_verify', true, target.id);
      return { userId: target.id, kind: 'email_verify' as const };
    });
  }

  async resendVerification(ctx: Ctx): Promise<void> {
    const actor = ctx.actor;
    if (!actor) throw errors.unauthenticated();
    const target = await findUserById(ctx.db, actor.userId);
    if (!target) throw errors.unauthenticated();
    if (target.emailVerifiedAt) throw errors.conflict('The email is already verified');
    await withTx(ctx.db, async (tx) => {
      await this.#queueVerification(tx, ctx, {
        id: target.id,
        email: target.email,
        displayName: displayNameOf(target),
        locale: localeOf(target, ctx.locale),
      });
      await this.recordEvent(tx, ctx, 'email_verify_resend', true, target.id);
    });
  }

  /** Verifies the current password of the signed-in account (`INVALID_CREDENTIALS`). */
  async confirmPassword(ctx: Ctx, password: string): Promise<User> {
    const actor = ctx.actor;
    if (!actor) throw errors.unauthenticated();
    const target = await findUserById(ctx.db, actor.userId);
    if (!target) throw errors.unauthenticated();
    await this.deps.limits?.consume('password-confirm', `user:${target.id}`, { max: 10, window: '1 hour' });
    const result = await this.deps.hasher.verify(target.password, password);
    if (!result.ok) throw new DomainError('INVALID_CREDENTIALS', undefined, 'The password is not correct');
    return target;
  }

  async changeEmail(ctx: Ctx, input: { newEmail: string; password: string }): Promise<void> {
    const target = await this.confirmPassword(ctx, input.password);
    const newEmail = input.newEmail.trim();
    if (normalizeEmail(newEmail) === normalizeEmail(target.email)) {
      throw invalid('newEmail', 'email_unchanged', 'This is already your email');
    }
    if (isDisposableEmail(newEmail)) {
      throw invalid('newEmail', 'email_disposable', 'Disposable email addresses cannot be used');
    }
    if (await emailTaken(ctx.db, newEmail, target.id)) {
      throw conflict('newEmail', 'email_taken', 'This email is already registered');
    }
    const locale = localeOf(target, ctx.locale);
    const now = ctx.clock.now();
    await withTx(ctx.db, async (tx) => {
      const issued = await issueAuthToken(tx, {
        userId: target.id,
        kind: 'email_change',
        now,
        payload: { newEmail },
      });
      await queueEmail(tx, ctx.jobs, {
        userId: target.id,
        to: newEmail,
        template: 'auth.email_change_confirm',
        locale,
        payload: {
          displayName: displayNameOf(target),
          url: `${siteLink(this.deps.siteUrl, locale, '/verify-email')}?token=${issued.token}`,
          newEmail,
          expiresHours: 24,
        },
        dedupeKey: `auth.email-change:${issued.id}`,
      });
      await queueEmail(tx, ctx.jobs, {
        userId: target.id,
        to: target.email,
        template: 'auth.email_change_notice',
        locale,
        payload: {
          displayName: displayNameOf(target),
          newEmailMasked: maskEmail(newEmail),
          requestedAt: now.toISOString(),
          securityUrl: siteLink(this.deps.siteUrl, locale, '/settings/security'),
        },
        dedupeKey: `auth.email-change-notice:${issued.id}`,
      });
      await this.recordEvent(tx, ctx, 'email_change_request', true, target.id);
    });
  }

  async changePassword(ctx: Ctx, input: { current: string; next: string; revokeOthers: boolean }): Promise<void> {
    const target = await this.confirmPassword(ctx, input.current);
    await this.#checkNewPassword(input.next);
    const passwordHash = await this.deps.hasher.hash(input.next);
    const now = ctx.clock.now();
    const sessionId = ctx.actor?.sessionId ?? null;
    await withTx(ctx.db, async (tx) => {
      await tx.update(user).set({ password: passwordHash, passwordUpdatedAt: now }).where(eq(user.id, target.id));
      if (sessionId) await refreshSessionFingerprint(tx, sessionId, passwordHash);
      // Sessions created with the old password stop resolving through their fingerprint anyway;
      // `revokeOthers` also marks them revoked so the sessions page is accurate.
      if (input.revokeOthers) await revokeUserSessions(tx, target.id, now, sessionId);
      else {
        // Keep the other sessions valid: move them to the new fingerprint.
        await tx.execute(sql`UPDATE "Session" SET "pwdFingerprint" = ${pwdFingerprint(passwordHash)}
          WHERE "userId" = ${target.id} AND "revokedAt" IS NULL`);
      }
      await this.#retireTokens(tx, target.id, 'password_reset', now);
      await this.#queuePasswordChanged(tx, ctx, target);
      await this.recordEvent(tx, ctx, 'password_change', true, target.id);
    });
  }
}

/** True when the user row exists and is live (not deleted). */
export async function isLiveUser(db: Executor, userId: number): Promise<boolean> {
  const [row] = await db
    .select({ id: user.id })
    .from(user)
    .where(and(eq(user.id, userId), isNull(user.deletedAt)));
  return Boolean(row);
}
