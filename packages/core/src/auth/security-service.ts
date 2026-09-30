/**
 * Account security (T1-02 TOTP + recovery codes, T1-26 passkeys): Settings → Security management,
 * the second step of a password sign-in and passkey sign-in.
 *
 * Lock-out rules: everything is optional; a passkey alone never gates the password sign-in (only
 * a confirmed TOTP does, and then the passkey is one of the ways to answer); removing a factor
 * needs the password (plus a live TOTP/recovery code for the TOTP itself).
 */

import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
} from '@simplewebauthn/server';
import type { PasskeyDTO, PasskeyOptionsDTO, RecoveryCodesDTO, SecurityOverviewDTO } from '@sotf/contracts/security';
import { PASSKEY_NAME_MAX, RECOVERY_CODE_COUNT } from '@sotf/contracts/security';
import { type Executor, type User, type UserPasskey, userPasskey, userRecoveryCode, userTotp, withTx } from '@sotf/db';
import { and, asc, count, eq, isNull, lt, or } from 'drizzle-orm';
import { queueEmail } from '../email/outbox.ts';
import type { Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { createChallenge, loadChallenge, recordChallengeFailure, useChallenge } from './challenges.ts';
import { type AuthOutcome, type AuthService, siteLink } from './service.ts';
import {
  decryptSecret,
  encryptSecret,
  generateTotpSecret,
  hashRecoveryCode,
  looksLikeRecoveryCode,
  newRecoveryCode,
  otpauthUrl,
  verifyTotp,
} from './totp.ts';
import { displayNameOf, findUserById, localeOf } from './users.ts';

export interface SecurityServiceDeps {
  auth: AuthService;
  /** `APP_SECRET` (TOTP secret encryption key and recovery-code HMAC key). */
  appSecret: string;
  /** `PUBLIC_SITE_URL`: the WebAuthn relying party is this origin's hostname. */
  siteUrl: string;
  /** Name shown in authenticator apps and passkey prompts. */
  issuer?: string;
}

type SecurityChange =
  | 'totp_enabled'
  | 'totp_disabled'
  | 'recovery_codes_regenerated'
  | 'passkey_added'
  | 'passkey_removed';

/** `errors[].path = 'code'` tells the UI it is the code (not the password) that was wrong. */
const invalidCode = () =>
  new DomainError('INVALID_CREDENTIALS', undefined, 'That code is not correct', {
    errors: [{ path: 'code', message: 'That code is not correct', code: 'invalid_code' }],
  });

function toPasskeyDTO(row: UserPasskey): PasskeyDTO {
  return {
    id: row.id,
    name: row.name,
    createdAt: row.createdAt.toISOString(),
    lastUsedAt: row.lastUsedAt ? row.lastUsedAt.toISOString() : null,
    deviceType: row.deviceType === 'multiDevice' ? 'multiDevice' : 'singleDevice',
    backedUp: row.backedUp,
  };
}

const toBase64Url = (bytes: Uint8Array) => Buffer.from(bytes).toString('base64url');
const fromBase64Url = (text: string) => new Uint8Array(Buffer.from(text, 'base64url'));

export class SecurityService {
  readonly #deps: SecurityServiceDeps;
  readonly #rpId: string;
  readonly #origin: string;
  readonly #issuer: string;

  constructor(deps: SecurityServiceDeps) {
    this.#deps = deps;
    const url = new URL(deps.siteUrl);
    this.#rpId = url.hostname;
    this.#origin = url.origin;
    this.#issuer = deps.issuer ?? 'SOTF Mods';
  }

  async #self(ctx: Ctx): Promise<User> {
    const actor = ctx.actor;
    if (!actor) throw errors.unauthenticated();
    const found = await findUserById(ctx.db, actor.userId);
    if (!found) throw errors.unauthenticated();
    return found;
  }

  async #notify(tx: Executor, ctx: Ctx, target: User, change: SecurityChange): Promise<void> {
    if (!target.emailVerifiedAt) return;
    const locale = localeOf(target, ctx.locale);
    const now = ctx.clock.now();
    await queueEmail(tx, ctx.jobs, {
      userId: target.id,
      to: target.email,
      template: 'auth.security_change',
      locale,
      payload: {
        displayName: displayNameOf(target),
        change,
        changedAt: now.toISOString(),
        securityUrl: siteLink(this.#deps.siteUrl, locale, '/settings/security'),
        resetUrl: siteLink(this.#deps.siteUrl, locale, '/forgot-password'),
      },
    });
  }

  async #limit(name: string, key: string, max: number, window: string): Promise<void> {
    await this.#deps.auth.deps.limits?.consume(name, key, { max, window });
  }

  // ------------------------------------------------------------------------------------------
  // Overview
  // ------------------------------------------------------------------------------------------

  async overview(ctx: Ctx): Promise<SecurityOverviewDTO> {
    const target = await this.#self(ctx);
    const [totp] = await ctx.db.select().from(userTotp).where(eq(userTotp.userId, target.id));
    const enabled = Boolean(totp?.confirmedAt);
    const [remaining] = enabled
      ? await ctx.db
          .select({ n: count() })
          .from(userRecoveryCode)
          .where(and(eq(userRecoveryCode.userId, target.id), isNull(userRecoveryCode.usedAt)))
      : [{ n: 0 }];
    const passkeys = await ctx.db
      .select()
      .from(userPasskey)
      .where(eq(userPasskey.userId, target.id))
      .orderBy(asc(userPasskey.createdAt));
    const staff = target.role === 'moderator' || target.role === 'admin';
    return {
      totp: {
        enabled,
        enabledAt: totp?.confirmedAt ? totp.confirmedAt.toISOString() : null,
        recoveryCodesRemaining: Number(remaining?.n ?? 0),
      },
      passkeys: passkeys.map(toPasskeyDTO),
      twoFactorEnabled: enabled,
      staffPrompt: staff && !enabled && passkeys.length === 0,
    };
  }

  // ------------------------------------------------------------------------------------------
  // TOTP
  // ------------------------------------------------------------------------------------------

  async setupTotp(ctx: Ctx, password: string): Promise<{ secret: string; otpauthUrl: string }> {
    const target = await this.#deps.auth.confirmPassword(ctx, password);
    const now = ctx.clock.now();
    const secret = generateTotpSecret();
    const stored = encryptSecret(this.#deps.appSecret, secret);
    await withTx(ctx.db, async (tx) => {
      const [existing] = await tx.select().from(userTotp).where(eq(userTotp.userId, target.id)).for('update');
      if (existing?.confirmedAt) throw errors.conflict('Two-factor authentication is already on');
      if (existing) {
        await tx
          .update(userTotp)
          .set({ secret: stored, createdAt: now, lastUsedStep: null })
          .where(eq(userTotp.userId, target.id));
      } else {
        await tx.insert(userTotp).values({ userId: target.id, secret: stored, createdAt: now });
      }
    });
    return { secret, otpauthUrl: otpauthUrl({ secret, issuer: this.#issuer, account: target.email }) };
  }

  async #freshRecoveryCodes(tx: Executor, userId: number, now: Date): Promise<RecoveryCodesDTO> {
    await tx.delete(userRecoveryCode).where(eq(userRecoveryCode.userId, userId));
    const codes = Array.from({ length: RECOVERY_CODE_COUNT }, () => newRecoveryCode());
    await tx.insert(userRecoveryCode).values(
      codes.map((code) => ({
        userId,
        codeHash: hashRecoveryCode(this.#deps.appSecret, code),
        createdAt: now,
      })),
    );
    return { codes, generatedAt: now.toISOString() };
  }

  async enableTotp(ctx: Ctx, code: string): Promise<RecoveryCodesDTO> {
    const target = await this.#self(ctx);
    await this.#limit('totp-enable', `user:${target.id}`, 10, '15 minutes');
    const now = ctx.clock.now();
    return withTx(ctx.db, async (tx) => {
      const [row] = await tx.select().from(userTotp).where(eq(userTotp.userId, target.id)).for('update');
      if (!row) throw errors.conflict('Start the setup first');
      if (row.confirmedAt) throw errors.conflict('Two-factor authentication is already on');
      const step = verifyTotp(decryptSecret(this.#deps.appSecret, row.secret), code, now, null);
      if (step === null) throw invalidCode();
      await tx.update(userTotp).set({ confirmedAt: now, lastUsedStep: step }).where(eq(userTotp.userId, target.id));
      const codes = await this.#freshRecoveryCodes(tx, target.id, now);
      await this.#deps.auth.recordEvent(tx, ctx, 'two_factor_enable', true, target.id);
      await this.#notify(tx, ctx, target, 'totp_enabled');
      return codes;
    });
  }

  /**
   * Checks a TOTP or recovery code and spends it (a TOTP step and a recovery code work once).
   * False when it does not match; never throws for a wrong code.
   */
  async #spendCode(tx: Executor, userId: number, code: string, now: Date): Promise<boolean> {
    if (looksLikeRecoveryCode(code)) {
      const used = await tx
        .update(userRecoveryCode)
        .set({ usedAt: now })
        .where(
          and(
            eq(userRecoveryCode.userId, userId),
            eq(userRecoveryCode.codeHash, hashRecoveryCode(this.#deps.appSecret, code)),
            isNull(userRecoveryCode.usedAt),
          ),
        )
        .returning({ id: userRecoveryCode.id });
      return used.length > 0;
    }
    const [row] = await tx.select().from(userTotp).where(eq(userTotp.userId, userId));
    if (!row?.confirmedAt) return false;
    const step = verifyTotp(decryptSecret(this.#deps.appSecret, row.secret), code, now, row.lastUsedStep);
    if (step === null) return false;
    const claimed = await tx
      .update(userTotp)
      .set({ lastUsedStep: step })
      .where(and(eq(userTotp.userId, userId), or(isNull(userTotp.lastUsedStep), lt(userTotp.lastUsedStep, step))))
      .returning({ userId: userTotp.userId });
    return claimed.length > 0;
  }

  async disableTotp(ctx: Ctx, input: { password: string; code: string }): Promise<void> {
    const target = await this.#deps.auth.confirmPassword(ctx, input.password);
    await this.#limit('totp-code', `user:${target.id}`, 10, '15 minutes');
    const now = ctx.clock.now();
    const ok = await withTx(ctx.db, async (tx) => {
      const [row] = await tx.select().from(userTotp).where(eq(userTotp.userId, target.id)).for('update');
      if (!row?.confirmedAt) throw errors.conflict('Two-factor authentication is not on');
      if (!(await this.#spendCode(tx, target.id, input.code, now))) return false;
      await tx.delete(userTotp).where(eq(userTotp.userId, target.id));
      await tx.delete(userRecoveryCode).where(eq(userRecoveryCode.userId, target.id));
      await this.#deps.auth.recordEvent(tx, ctx, 'two_factor_disable', true, target.id);
      await this.#notify(tx, ctx, target, 'totp_disabled');
      return true;
    });
    if (!ok) throw invalidCode();
  }

  async regenerateRecoveryCodes(ctx: Ctx, input: { password: string; code: string }): Promise<RecoveryCodesDTO> {
    const target = await this.#deps.auth.confirmPassword(ctx, input.password);
    await this.#limit('totp-code', `user:${target.id}`, 10, '15 minutes');
    const now = ctx.clock.now();
    const result = await withTx(ctx.db, async (tx) => {
      const [row] = await tx.select().from(userTotp).where(eq(userTotp.userId, target.id)).for('update');
      if (!row?.confirmedAt) throw errors.conflict('Two-factor authentication is not on');
      if (!(await this.#spendCode(tx, target.id, input.code, now))) return null;
      const codes = await this.#freshRecoveryCodes(tx, target.id, now);
      await this.#deps.auth.recordEvent(tx, ctx, 'recovery_codes_regenerate', true, target.id);
      await this.#notify(tx, ctx, target, 'recovery_codes_regenerated');
      return codes;
    });
    if (!result) throw invalidCode();
    return result;
  }

  // ------------------------------------------------------------------------------------------
  // Sign-in second step
  // ------------------------------------------------------------------------------------------

  async #signInTarget(ctx: Ctx, userId: number | null): Promise<User> {
    const found = userId === null ? null : await findUserById(ctx.db, userId);
    if (!found) throw new DomainError('GONE', undefined, 'This sign-in step expired; start again');
    if (found.bannedAt) {
      await this.#deps.auth.recordEvent(ctx.db, ctx, 'login_2fa', false, found.id);
      throw new DomainError('SUSPENDED', undefined, 'This account is banned');
    }
    return found;
  }

  async verifyTwoFactor(ctx: Ctx, input: { challengeId: string; code: string }): Promise<AuthOutcome> {
    const now = ctx.clock.now();
    const challenge = await loadChallenge(ctx.db, input.challengeId, ['login_2fa'], now);
    const target = await this.#signInTarget(ctx, challenge.userId);
    await this.#limit('login-2fa', `user:${target.id}`, 20, '15 minutes');
    const remember = challenge.payload.remember === true;

    const outcome = await withTx(ctx.db, async (tx) => {
      if (!(await this.#spendCode(tx, target.id, input.code, now))) return null;
      if (!(await useChallenge(tx, challenge.id, now))) return null;
      return this.#deps.auth.completeSignIn(tx, ctx, target, {
        passwordHash: target.password,
        remember,
        method: 'login_2fa',
      });
    });
    if (!outcome) {
      // Committed outside the transaction so the failure stays counted.
      await recordChallengeFailure(ctx.db, challenge.id);
      await this.#deps.auth.recordEvent(ctx.db, ctx, 'login_2fa', false, target.id);
      throw invalidCode();
    }
    return outcome;
  }

  // ------------------------------------------------------------------------------------------
  // Passkeys
  // ------------------------------------------------------------------------------------------

  async passkeyRegistrationOptions(ctx: Ctx, password: string): Promise<PasskeyOptionsDTO> {
    const target = await this.#deps.auth.confirmPassword(ctx, password);
    const existing = await ctx.db
      .select({ credentialId: userPasskey.credentialId, transports: userPasskey.transports })
      .from(userPasskey)
      .where(eq(userPasskey.userId, target.id));
    const options = await generateRegistrationOptions({
      rpName: this.#issuer,
      rpID: this.#rpId,
      userName: target.email,
      userDisplayName: displayNameOf(target),
      userID: new TextEncoder().encode(String(target.id)),
      timeout: 5 * 60 * 1000,
      attestationType: 'none',
      excludeCredentials: existing.map((row) => ({ id: row.credentialId, transports: row.transports })),
      authenticatorSelection: { residentKey: 'required', userVerification: 'required' },
    });
    const created = await createChallenge(ctx.db, {
      kind: 'passkey_register',
      userId: target.id,
      challenge: options.challenge,
      now: ctx.clock.now(),
    });
    return { challengeId: created.id, options: options as unknown as Record<string, unknown> };
  }

  async registerPasskey(
    ctx: Ctx,
    input: { challengeId: string; response: Record<string, unknown>; name?: string | undefined },
  ): Promise<PasskeyDTO> {
    const target = await this.#self(ctx);
    const now = ctx.clock.now();
    const challenge = await loadChallenge(ctx.db, input.challengeId, ['passkey_register'], now);
    if (challenge.userId !== target.id || !challenge.challenge) throw errors.notFound('Challenge');

    let verified: Awaited<ReturnType<typeof verifyRegistrationResponse>> | null = null;
    try {
      verified = await verifyRegistrationResponse({
        response: input.response as unknown as Parameters<typeof verifyRegistrationResponse>[0]['response'],
        expectedChallenge: challenge.challenge,
        expectedOrigin: this.#origin,
        expectedRPID: this.#rpId,
        requireUserVerification: true,
      });
    } catch (error) {
      ctx.log.info({ userId: target.id, err: (error as Error).message }, 'passkey registration rejected');
    }
    if (!verified?.verified) {
      await recordChallengeFailure(ctx.db, challenge.id);
      throw new DomainError('INVALID_CREDENTIALS', undefined, 'The passkey could not be verified');
    }
    const info = verified.registrationInfo;
    const name = (input.name?.trim() || 'Passkey').slice(0, PASSKEY_NAME_MAX);

    const row = await withTx(ctx.db, async (tx) => {
      if (!(await useChallenge(tx, challenge.id, now))) throw errors.notFound('Challenge');
      const [dup] = await tx
        .select({ id: userPasskey.id })
        .from(userPasskey)
        .where(eq(userPasskey.credentialId, info.credential.id));
      if (dup) throw errors.conflict('This passkey is already registered');
      const [inserted] = await tx
        .insert(userPasskey)
        .values({
          userId: target.id,
          credentialId: info.credential.id,
          publicKey: toBase64Url(info.credential.publicKey),
          counter: info.credential.counter,
          transports: info.credential.transports ?? [],
          deviceType: info.credentialDeviceType,
          backedUp: info.credentialBackedUp,
          name,
          createdAt: now,
        })
        .returning();
      if (!inserted) throw errors.conflict('Could not save the passkey');
      await this.#deps.auth.recordEvent(tx, ctx, 'passkey_add', true, target.id);
      await this.#notify(tx, ctx, target, 'passkey_added');
      return inserted;
    });
    return toPasskeyDTO(row);
  }

  async renamePasskey(ctx: Ctx, id: string, name: string): Promise<PasskeyDTO> {
    const target = await this.#self(ctx);
    const [row] = await ctx.db
      .update(userPasskey)
      .set({ name: name.trim().slice(0, PASSKEY_NAME_MAX) })
      .where(and(eq(userPasskey.id, id), eq(userPasskey.userId, target.id)))
      .returning();
    if (!row) throw errors.notFound('Passkey');
    return toPasskeyDTO(row);
  }

  async removePasskey(ctx: Ctx, id: string, password: string): Promise<void> {
    const target = await this.#deps.auth.confirmPassword(ctx, password);
    await withTx(ctx.db, async (tx) => {
      const removed = await tx
        .delete(userPasskey)
        .where(and(eq(userPasskey.id, id), eq(userPasskey.userId, target.id)))
        .returning({ id: userPasskey.id });
      if (removed.length === 0) throw errors.notFound('Passkey');
      await this.#deps.auth.recordEvent(tx, ctx, 'passkey_remove', true, target.id);
      await this.#notify(tx, ctx, target, 'passkey_removed');
    });
  }

  /**
   * Options for signing in with a passkey. With `challengeId` (the `twoFactor` challenge of a
   * password sign-in) only that account's passkeys are offered; without it the browser picks a
   * discoverable credential.
   */
  async passkeyLoginOptions(ctx: Ctx, input: { challengeId?: string | undefined }): Promise<PasskeyOptionsDTO> {
    const now = ctx.clock.now();
    let userId: number | null = null;
    let payload: Record<string, string | boolean> = {};
    let allow: Array<{ id: string; transports: string[] }> | undefined;
    if (input.challengeId) {
      const parent = await loadChallenge(ctx.db, input.challengeId, ['login_2fa'], now);
      userId = parent.userId;
      payload = { parent: parent.id, remember: parent.payload.remember === true };
      if (userId !== null) {
        allow = (
          await ctx.db
            .select({ credentialId: userPasskey.credentialId, transports: userPasskey.transports })
            .from(userPasskey)
            .where(eq(userPasskey.userId, userId))
        ).map((row) => ({ id: row.credentialId, transports: row.transports }));
      }
    }
    const options = await generateAuthenticationOptions({
      rpID: this.#rpId,
      timeout: 5 * 60 * 1000,
      userVerification: 'required',
      ...(allow ? { allowCredentials: allow } : {}),
    });
    const created = await createChallenge(ctx.db, {
      kind: 'passkey_login',
      userId,
      challenge: options.challenge,
      payload,
      now,
    });
    return { challengeId: created.id, options: options as unknown as Record<string, unknown> };
  }

  async passkeyLoginVerify(
    ctx: Ctx,
    input: { challengeId: string; response: Record<string, unknown>; remember: boolean },
  ): Promise<AuthOutcome> {
    const now = ctx.clock.now();
    const challenge = await loadChallenge(ctx.db, input.challengeId, ['passkey_login'], now);
    if (!challenge.challenge) throw errors.notFound('Challenge');
    const credentialId = typeof input.response.id === 'string' ? input.response.id : '';
    const [passkey] = credentialId
      ? await ctx.db.select().from(userPasskey).where(eq(userPasskey.credentialId, credentialId))
      : [];

    const fail = async (): Promise<never> => {
      await recordChallengeFailure(ctx.db, challenge.id);
      await this.#deps.auth.recordEvent(ctx.db, ctx, 'login_passkey', false, passkey?.userId ?? challenge.userId);
      throw new DomainError('INVALID_CREDENTIALS', undefined, 'The passkey could not be verified');
    };
    if (!passkey || (challenge.userId !== null && challenge.userId !== passkey.userId)) return fail();

    let verified: Awaited<ReturnType<typeof verifyAuthenticationResponse>> | null = null;
    try {
      verified = await verifyAuthenticationResponse({
        response: input.response as unknown as Parameters<typeof verifyAuthenticationResponse>[0]['response'],
        expectedChallenge: challenge.challenge,
        expectedOrigin: this.#origin,
        expectedRPID: this.#rpId,
        requireUserVerification: true,
        credential: {
          id: passkey.credentialId,
          publicKey: fromBase64Url(passkey.publicKey),
          counter: passkey.counter,
          transports: passkey.transports as never,
        },
      });
    } catch (error) {
      ctx.log.info({ userId: passkey.userId, err: (error as Error).message }, 'passkey sign-in rejected');
    }
    if (!verified?.verified) return fail();

    const target = await this.#signInTarget(ctx, passkey.userId);
    await this.#limit('login-2fa', `user:${target.id}`, 20, '15 minutes');
    const parentId = typeof challenge.payload.parent === 'string' ? challenge.payload.parent : null;
    const remember = parentId ? challenge.payload.remember === true : input.remember;
    const { newCounter, credentialDeviceType, credentialBackedUp } = verified.authenticationInfo;

    return withTx(ctx.db, async (tx) => {
      if (!(await useChallenge(tx, challenge.id, now))) throw errors.notFound('Challenge');
      if (parentId && !(await useChallenge(tx, parentId, now))) {
        throw new DomainError('GONE', undefined, 'This sign-in step expired; start again');
      }
      await tx
        .update(userPasskey)
        .set({
          counter: newCounter,
          lastUsedAt: now,
          deviceType: credentialDeviceType,
          backedUp: credentialBackedUp,
        })
        .where(eq(userPasskey.id, passkey.id));
      return this.#deps.auth.completeSignIn(tx, ctx, target, {
        passwordHash: target.password,
        remember,
        method: 'login_passkey',
      });
    });
  }
}
