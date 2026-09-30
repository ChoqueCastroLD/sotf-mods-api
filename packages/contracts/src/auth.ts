/**
 * Authentication (PLAN §5.2 "Cuenta y autenticación", §6.10, T0-13). Implemented by WP-30.
 *
 * Sessions are opaque: cookie `__Host-sotf_sid` (HttpOnly, Secure, SameSite=Lax, Path=/) plus the
 * non-sensitive hint cookie `sotf_li=1`. Login errors are always `INVALID_CREDENTIALS`.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import {
  CurrentPassword,
  DisplayName,
  Email,
  EntityId,
  Handle,
  HandleInput,
  HttpUrl,
  IsoDateTime,
  Locale,
  NewPassword,
  Role,
  Uuid,
} from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

/** Session cookie name (`__Host-` prefix: Secure, Path=/, no Domain). */
export const SESSION_COOKIE = '__Host-sotf_sid';
/** Non-sensitive "logged in" hint readable by JS (avoids calling /me for guests). */
export const LOGGED_IN_HINT_COOKIE = 'sotf_li';
/** Sliding expiry, renewal threshold and absolute maximum of a session (days). */
export const SESSION_TTL_DAYS = 30;
export const SESSION_RENEW_BELOW_DAYS = 15;
export const SESSION_ABSOLUTE_DAYS = 90;
/** Session length without "remember me" (hours). */
export const SESSION_SHORT_TTL_HOURS = 24;

/** Cloudflare Turnstile response token. */
export const TurnstileToken = z.string().min(1).max(4096);

/** Single-use token from an email link (base64url, or a legacy reset token during 24 h). */
export const EmailToken = z.string().min(16).max(512);

/** Trust level 0–3 recomputed nightly (T0-22). */
export const TrustLevel = z.number().int().min(0).max(3);

export const SelfUserDTO = dto(
  'SelfUserDTO',
  z.object({
    id: EntityId,
    handle: Handle,
    displayName: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    role: Role,
    verifiedCreator: z.boolean(),
    avatarUrl: HttpUrl.nullable(),
    locale: Locale.nullable().describe('Preferred UI locale (settings); null = browser'),
    trustLevel: TrustLevel,
    createdAt: IsoDateTime.describe('Account creation, the origin of "Day N on the island"'),
    suspendedUntil: IsoDateTime.nullable(),
    deletionScheduledAt: IsoDateTime.nullable().describe('Set while an account deletion is in its 14-day grace period'),
  }),
  {
    description: 'The signed-in user (private).',
    examples: [
      {
        id: 12,
        handle: 'imaxel',
        displayName: 'ImAxel',
        email: 'imaxel@example.test',
        emailVerified: true,
        role: 'user',
        verifiedCreator: true,
        avatarUrl: null,
        locale: 'es',
        trustLevel: 3,
        createdAt: '2023-09-22T06:13:49.867Z',
        suspendedUntil: null,
        deletionScheduledAt: null,
      },
    ],
  },
);
export type SelfUserDTO = z.infer<typeof SelfUserDTO>;

export const AuthResultDTO = dto('AuthResultDTO', z.object({ user: SelfUserDTO }), {
  description: 'Result of a successful register or login (the session cookie is set).',
  examples: [
    {
      user: {
        id: 4021,
        handle: 'new-survivor',
        displayName: 'New Survivor',
        email: 'new@example.test',
        emailVerified: false,
        role: 'user',
        verifiedCreator: false,
        avatarUrl: null,
        locale: 'en',
        trustLevel: 0,
        createdAt: '2026-10-02T10:00:00.000Z',
        suspendedUntil: null,
        deletionScheduledAt: null,
      },
    },
  ],
});
export type AuthResultDTO = z.infer<typeof AuthResultDTO>;

/** Second factors a sign-in can be completed with. */
export const SECOND_FACTORS = ['totp', 'recovery', 'passkey'] as const;
export const SecondFactor = z.enum(SECOND_FACTORS);
export type SecondFactor = z.infer<typeof SecondFactor>;

export const TwoFactorRequiredDTO = dto(
  'TwoFactorRequiredDTO',
  z.object({
    twoFactor: z.object({
      challengeId: Uuid.describe('Single-use challenge (5 min) to send with the second factor'),
      methods: z.array(SecondFactor).min(1).describe('What the account can answer with'),
      expiresAt: IsoDateTime,
    }),
  }),
  {
    description:
      'The password was right but the account has two-factor authentication: no session yet. Complete it with `auth.verifyTwoFactor` or the passkey endpoints.',
    examples: [
      {
        twoFactor: {
          challengeId: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
          methods: ['totp', 'recovery', 'passkey'],
          expiresAt: '2026-10-02T10:05:00.000Z',
        },
      },
    ],
  },
);
export type TwoFactorRequiredDTO = z.infer<typeof TwoFactorRequiredDTO>;

export const LoginResultDTO = dto('LoginResultDTO', z.union([AuthResultDTO, TwoFactorRequiredDTO]), {
  description: 'Either the signed-in user (session cookie set) or a second-factor challenge (no session yet).',
  examples: [exampleOf(AuthResultDTO)],
});
export type LoginResultDTO = z.infer<typeof LoginResultDTO>;

export const RegisterBody = dto(
  'RegisterBody',
  z.strictObject({
    email: Email,
    handle: HandleInput,
    password: NewPassword,
    displayName: DisplayName.optional(),
    locale: Locale,
    acceptTerms: z.literal(true),
    turnstileToken: TurnstileToken,
  }),
  {
    description: 'New account. Handles are ASCII `[a-z0-9-]` 3–24 and immutable in T0.',
    examples: [
      {
        email: 'new@example.test',
        handle: 'new-survivor',
        password: 'kelvin-carries-logs-2026',
        displayName: 'New Survivor',
        locale: 'en',
        acceptTerms: true,
        turnstileToken: 'XXXX.DUMMY.TOKEN.XXXX',
      },
    ],
  },
);

export const LoginBody = dto(
  'LoginBody',
  z.strictObject({
    identifier: z.string().trim().min(1).max(254).describe('Email or handle'),
    password: CurrentPassword,
    remember: z.boolean().default(false),
    turnstileToken: TurnstileToken.optional().describe('Required after 3 failed attempts'),
  }),
  {
    description: 'Login by email or handle with the existing password (argon2id or bcrypt hashes).',
    examples: [{ identifier: 'imaxel', password: 'correct horse battery staple', remember: true }],
  },
);

export const ForgotPasswordBody = dto(
  'ForgotPasswordBody',
  z.strictObject({ email: Email, turnstileToken: TurnstileToken }),
  {
    description: 'Request a reset link. Always answers 202 (no account enumeration).',
    examples: [{ email: 'imaxel@example.test', turnstileToken: 'XXXX.DUMMY.TOKEN.XXXX' }],
  },
);

export const ResetPasswordBody = dto(
  'ResetPasswordBody',
  z.strictObject({ token: EmailToken, password: NewPassword }),
  {
    description: 'Consume a reset token (1 h, single use). Revokes every session.',
    examples: [{ token: 'q1w2e3r4t5y6u7i8o9p0a1s2d3f4g5h6j7k8l9z0x1c', password: 'a-brand-new-passphrase' }],
  },
);

export const VerifyEmailBody = dto('VerifyEmailBody', z.strictObject({ token: EmailToken }), {
  description: 'Consume an email verification token.',
  examples: [{ token: 'v1e2r3i4f5y6t7o8k9e0n1a2b3c4d5e6f7g8h9i0j1k' }],
});

const base = `${API_V2_PREFIX}/auth`;

export const authEndpoints = {
  register: defineEndpoint({
    id: 'auth.register',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/register`,
    summary: 'Create an account',
    description: 'Creates an unverified account, sets the session cookie and sends the verification email.',
    auth: 'public',
    requires: ['turnstile'],
    body: RegisterBody,
    status: 201,
    response: AuthResultDTO,
    errors: ['CONFLICT', 'TURNSTILE_REQUIRED'],
    cache: cache.noStore,
    rateLimit: 'register',
  }),
  login: defineEndpoint({
    id: 'auth.login',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/login`,
    summary: 'Sign in',
    description:
      'Constant-time login by email or handle. Any failure is `INVALID_CREDENTIALS`. Accounts with two-factor authentication answer a `twoFactor` challenge instead of a session.',
    auth: 'public',
    requires: ['turnstile_after_failures'],
    body: LoginBody,
    response: LoginResultDTO,
    errors: ['INVALID_CREDENTIALS', 'TURNSTILE_REQUIRED', 'SUSPENDED'],
    cache: cache.noStore,
    rateLimit: 'login',
  }),
  logout: defineEndpoint({
    id: 'auth.logout',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/logout`,
    summary: 'Sign out',
    description: 'Revokes the current session and clears both cookies.',
    auth: 'session',
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
  }),
  forgotPassword: defineEndpoint({
    id: 'auth.forgotPassword',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/password/forgot`,
    summary: 'Request a password reset email',
    auth: 'public',
    requires: ['turnstile'],
    body: ForgotPasswordBody,
    status: 202,
    responseKind: 'empty',
    errors: ['TURNSTILE_REQUIRED'],
    cache: cache.noStore,
    rateLimit: 'passwordForgot',
  }),
  resetPassword: defineEndpoint({
    id: 'auth.resetPassword',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/password/reset`,
    summary: 'Reset the password with an emailed token',
    auth: 'public',
    body: ResetPasswordBody,
    responseKind: 'empty',
    errors: ['GONE', 'NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'passwordForgot',
  }),
  verifyEmail: defineEndpoint({
    id: 'auth.verifyEmail',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/email/verify`,
    summary: 'Verify the email address',
    auth: 'public',
    body: VerifyEmailBody,
    responseKind: 'empty',
    errors: ['GONE', 'NOT_FOUND'],
    cache: cache.noStore,
  }),
  resendVerification: defineEndpoint({
    id: 'auth.resendVerification',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/email/resend`,
    summary: 'Send the verification email again',
    auth: 'session',
    status: 202,
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'emailResend',
  }),
} as const;
