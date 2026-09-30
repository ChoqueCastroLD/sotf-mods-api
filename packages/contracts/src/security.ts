/**
 * Account security (T1-02 TOTP two-factor + recovery codes, T1-26 passkeys; PLAN §7.1, §9):
 * the second step of a sign-in, passkey sign-in, and Settings → Security management.
 *
 * - Optional for everyone; moderators and admins are prompted (`SecurityOverviewDTO.staffPrompt`)
 *   but never locked out.
 * - A passkey is a password-less sign-in (user verification required). The password sign-in only
 *   asks for a second step when the authenticator app is on; then a passkey is one way to answer.
 * - WebAuthn payloads (`options`, `response`) are the JSON forms of @simplewebauthn; the browser
 *   passes them through untouched.
 * - Managing factors needs the current password (and the current TOTP/recovery code to remove or
 *   regenerate). Recovery codes are shown once.
 */
import { z } from 'zod';
import { AuthResultDTO } from './auth.ts';
import { cache } from './cache.ts';
import { CurrentPassword, IsoDateTime, Uuid } from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

/** A TOTP code (6 digits) or a recovery code (`xxxxx-xxxxx`), as typed by the user. */
export const SecondFactorCode = z.string().trim().min(6).max(32);

/** WebAuthn JSON passed through between the browser and @simplewebauthn/server. */
const WebAuthnJson = z.record(z.string(), z.unknown());

export const PASSKEY_NAME_MAX = 40;
export const PasskeyName = z.string().trim().min(1).max(PASSKEY_NAME_MAX);
export const RECOVERY_CODE_COUNT = 10;

export const PasskeyDTO = dto(
  'PasskeyDTO',
  z.object({
    id: Uuid,
    name: z.string(),
    createdAt: IsoDateTime,
    lastUsedAt: IsoDateTime.nullable(),
    deviceType: z.enum(['singleDevice', 'multiDevice']).describe("`multiDevice` = synced across the user's devices"),
    backedUp: z.boolean(),
  }),
  {
    description: 'A registered passkey.',
    examples: [
      {
        id: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
        name: 'Laptop',
        createdAt: '2026-09-20T10:00:00.000Z',
        lastUsedAt: null,
        deviceType: 'multiDevice',
        backedUp: true,
      },
    ],
  },
);
export type PasskeyDTO = z.infer<typeof PasskeyDTO>;

export const SecurityOverviewDTO = dto(
  'SecurityOverviewDTO',
  z.object({
    totp: z.object({
      enabled: z.boolean(),
      enabledAt: IsoDateTime.nullable(),
      recoveryCodesRemaining: z.number().int().min(0),
    }),
    passkeys: z.array(PasskeyDTO),
    twoFactorEnabled: z
      .boolean()
      .describe('True when the authenticator app is on: the password sign-in then asks for a second step'),
    staffPrompt: z
      .boolean()
      .describe(
        'Moderator or admin without an authenticator app or passkey: the UI asks them to set one up (never enforced)',
      ),
  }),
  {
    description: 'Two-factor and passkey state of the signed-in user.',
    examples: [
      {
        totp: { enabled: true, enabledAt: '2026-09-20T10:00:00.000Z', recoveryCodesRemaining: 8 },
        passkeys: [exampleOf(PasskeyDTO)],
        twoFactorEnabled: true,
        staffPrompt: false,
      },
    ],
  },
);
export type SecurityOverviewDTO = z.infer<typeof SecurityOverviewDTO>;

export const TotpSetupBody = dto('TotpSetupBody', z.strictObject({ password: CurrentPassword }), {
  description: 'Start the authenticator-app setup (confirms the password).',
  examples: [{ password: 'correct horse battery staple' }],
});

export const TotpSetupDTO = dto(
  'TotpSetupDTO',
  z.object({
    secret: z.string().describe('Base32 secret for manual entry'),
    otpauthUrl: z.string().describe('`otpauth://totp/…` URI (render it as a QR code)'),
  }),
  {
    description: 'The pending TOTP secret. It becomes active only after `security.enableTotp`.',
    examples: [
      {
        secret: 'JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP',
        otpauthUrl: 'otpauth://totp/SOTF%20Mods:imaxel?secret=JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP&issuer=SOTF%20Mods',
      },
    ],
  },
);

export const TotpEnableBody = dto('TotpEnableBody', z.strictObject({ code: SecondFactorCode }), {
  description: 'Confirm the authenticator app with its first code.',
  examples: [{ code: '123456' }],
});

export const RecoveryCodesDTO = dto(
  'RecoveryCodesDTO',
  z.object({
    codes: z.array(z.string()).length(RECOVERY_CODE_COUNT).describe('Single-use codes, shown only once'),
    generatedAt: IsoDateTime,
  }),
  {
    description: 'Fresh recovery codes (they replace any previous set).',
    examples: [
      {
        codes: [
          'k3m9q-x7d2a',
          'p4w8z-c5n1b',
          'h6t2v-j9r3e',
          'f8y5u-m2s7g',
          'a1c4x-q6l0d',
          'b7n3k-w9e5t',
          'z2j8h-r4v1p',
          'd5g0s-y3u6m',
          'e9q2f-t7c4n',
          'x1l6b-k8a3w',
        ],
        generatedAt: '2026-09-20T10:00:00.000Z',
      },
    ],
  },
);
export type RecoveryCodesDTO = z.infer<typeof RecoveryCodesDTO>;

export const TotpDisableBody = dto(
  'TotpDisableBody',
  z.strictObject({ password: CurrentPassword, code: SecondFactorCode }),
  {
    description: 'Turn the authenticator app off (password plus a current TOTP or recovery code).',
    examples: [{ password: 'correct horse battery staple', code: '123456' }],
  },
);

export const RegenerateRecoveryBody = dto(
  'RegenerateRecoveryBody',
  z.strictObject({ password: CurrentPassword, code: SecondFactorCode }),
  {
    description: 'Replace the recovery codes (password plus a current TOTP or recovery code).',
    examples: [{ password: 'correct horse battery staple', code: '123456' }],
  },
);

export const PasskeyRegistrationOptionsBody = dto(
  'PasskeyRegistrationOptionsBody',
  z.strictObject({ password: CurrentPassword }),
  {
    description: 'Start registering a passkey (confirms the password).',
    examples: [{ password: 'correct horse battery staple' }],
  },
);

export const PasskeyOptionsDTO = dto(
  'PasskeyOptionsDTO',
  z.object({
    challengeId: Uuid,
    options: WebAuthnJson.describe('`PublicKeyCredentialCreationOptionsJSON` or `…RequestOptionsJSON`'),
  }),
  {
    description: 'WebAuthn ceremony options plus the single-use challenge id to send back with the result.',
    examples: [
      {
        challengeId: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
        options: { challenge: 'Zm9v', rpId: 'sotf-mods.com', timeout: 300000, userVerification: 'preferred' },
      },
    ],
  },
);
export type PasskeyOptionsDTO = z.infer<typeof PasskeyOptionsDTO>;

export const PasskeyRegisterBody = dto(
  'PasskeyRegisterBody',
  z.strictObject({
    challengeId: Uuid,
    response: WebAuthnJson.describe('`RegistrationResponseJSON` from `navigator.credentials.create()`'),
    name: PasskeyName.optional(),
  }),
  {
    description: 'Finish registering a passkey.',
    examples: [
      {
        challengeId: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
        response: { id: 'AAAA', type: 'public-key' },
        name: 'Laptop',
      },
    ],
  },
);

export const PasskeyRenameBody = dto('PasskeyRenameBody', z.strictObject({ name: PasskeyName }), {
  description: 'Rename a passkey.',
  examples: [{ name: 'Phone' }],
});

export const PasskeyRemoveBody = dto('PasskeyRemoveBody', z.strictObject({ password: CurrentPassword }), {
  description: 'Remove a passkey (confirms the password).',
  examples: [{ password: 'correct horse battery staple' }],
});

export const VerifyTwoFactorBody = dto(
  'VerifyTwoFactorBody',
  z.strictObject({ challengeId: Uuid, code: SecondFactorCode }),
  {
    description: 'Second step of a sign-in: the authenticator-app code or a recovery code.',
    examples: [{ challengeId: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d', code: '123456' }],
  },
);

export const PasskeyLoginOptionsBody = dto(
  'PasskeyLoginOptionsBody',
  z.strictObject({
    challengeId: Uuid.optional().describe(
      'The `twoFactor` challenge of a password sign-in (second step); omit to sign in with a passkey alone',
    ),
  }),
  {
    description: 'Start a passkey sign-in (alone, or as the second step of a password sign-in).',
    examples: [{}],
  },
);

export const PasskeyLoginVerifyBody = dto(
  'PasskeyLoginVerifyBody',
  z.strictObject({
    challengeId: Uuid,
    response: WebAuthnJson.describe('`AuthenticationResponseJSON` from `navigator.credentials.get()`'),
    remember: z
      .boolean()
      .default(false)
      .describe('Ignored when continuing a password sign-in (it keeps its own choice)'),
  }),
  {
    description: 'Finish a passkey sign-in; sets the session cookie.',
    examples: [
      {
        challengeId: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
        response: { id: 'AAAA', type: 'public-key' },
        remember: true,
      },
    ],
  },
);

const authBase = `${API_V2_PREFIX}/auth`;
const base = `${API_V2_PREFIX}/me/security`;

export const securityEndpoints = {
  verifyTwoFactor: defineEndpoint({
    id: 'security.verifyTwoFactor',
    owner: 'WP-T1a',
    method: 'POST',
    path: `${authBase}/2fa/verify`,
    summary: 'Finish a sign-in with a TOTP or recovery code',
    description:
      'Consumes the `twoFactor` challenge of `auth.login`. A wrong code is `INVALID_CREDENTIALS` (5 tries per challenge); an expired or used challenge is `GONE`.',
    auth: 'public',
    body: VerifyTwoFactorBody,
    response: AuthResultDTO,
    errors: ['INVALID_CREDENTIALS', 'GONE', 'NOT_FOUND', 'SUSPENDED'],
    cache: cache.noStore,
    rateLimit: 'login',
  }),
  passkeyLoginOptions: defineEndpoint({
    id: 'security.passkeyLoginOptions',
    owner: 'WP-T1a',
    method: 'POST',
    path: `${authBase}/passkey/options`,
    summary: 'Start a passkey sign-in',
    auth: 'public',
    body: PasskeyLoginOptionsBody,
    response: PasskeyOptionsDTO,
    errors: ['GONE', 'NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'login',
  }),
  passkeyLoginVerify: defineEndpoint({
    id: 'security.passkeyLoginVerify',
    owner: 'WP-T1a',
    method: 'POST',
    path: `${authBase}/passkey/verify`,
    summary: 'Finish a passkey sign-in',
    auth: 'public',
    body: PasskeyLoginVerifyBody,
    response: AuthResultDTO,
    errors: ['INVALID_CREDENTIALS', 'GONE', 'NOT_FOUND', 'SUSPENDED'],
    cache: cache.noStore,
    rateLimit: 'login',
  }),
  overview: defineEndpoint({
    id: 'security.overview',
    owner: 'WP-T1a',
    method: 'GET',
    path: base,
    summary: 'Two-factor and passkey state',
    auth: 'session',
    response: SecurityOverviewDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  setupTotp: defineEndpoint({
    id: 'security.setupTotp',
    owner: 'WP-T1a',
    method: 'POST',
    path: `${base}/totp/setup`,
    summary: 'Start the authenticator-app setup',
    auth: 'session',
    requires: ['password_confirmation'],
    body: TotpSetupBody,
    response: TotpSetupDTO,
    errors: ['UNAUTHENTICATED', 'INVALID_CREDENTIALS', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'securityWrite',
  }),
  enableTotp: defineEndpoint({
    id: 'security.enableTotp',
    owner: 'WP-T1a',
    method: 'POST',
    path: `${base}/totp/enable`,
    summary: 'Confirm the authenticator app and get the recovery codes',
    auth: 'session',
    body: TotpEnableBody,
    response: RecoveryCodesDTO,
    errors: ['UNAUTHENTICATED', 'INVALID_CREDENTIALS', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'securityWrite',
  }),
  disableTotp: defineEndpoint({
    id: 'security.disableTotp',
    owner: 'WP-T1a',
    method: 'POST',
    path: `${base}/totp/disable`,
    summary: 'Turn the authenticator app off',
    auth: 'session',
    requires: ['password_confirmation'],
    body: TotpDisableBody,
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED', 'INVALID_CREDENTIALS', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'securityWrite',
  }),
  regenerateRecoveryCodes: defineEndpoint({
    id: 'security.regenerateRecoveryCodes',
    owner: 'WP-T1a',
    method: 'POST',
    path: `${base}/recovery-codes`,
    summary: 'Replace the recovery codes',
    auth: 'session',
    requires: ['password_confirmation'],
    body: RegenerateRecoveryBody,
    response: RecoveryCodesDTO,
    errors: ['UNAUTHENTICATED', 'INVALID_CREDENTIALS', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'securityWrite',
  }),
  passkeyRegistrationOptions: defineEndpoint({
    id: 'security.passkeyRegistrationOptions',
    owner: 'WP-T1a',
    method: 'POST',
    path: `${base}/passkeys/options`,
    summary: 'Start registering a passkey',
    auth: 'session',
    requires: ['password_confirmation'],
    body: PasskeyRegistrationOptionsBody,
    response: PasskeyOptionsDTO,
    errors: ['UNAUTHENTICATED', 'INVALID_CREDENTIALS'],
    cache: cache.noStore,
    rateLimit: 'securityWrite',
  }),
  registerPasskey: defineEndpoint({
    id: 'security.registerPasskey',
    owner: 'WP-T1a',
    method: 'POST',
    path: `${base}/passkeys`,
    summary: 'Finish registering a passkey',
    auth: 'session',
    body: PasskeyRegisterBody,
    response: PasskeyDTO,
    status: 201,
    errors: ['UNAUTHENTICATED', 'INVALID_CREDENTIALS', 'GONE', 'NOT_FOUND', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'securityWrite',
  }),
  renamePasskey: defineEndpoint({
    id: 'security.renamePasskey',
    owner: 'WP-T1a',
    method: 'PATCH',
    path: `${base}/passkeys/:id`,
    summary: 'Rename a passkey',
    auth: 'session',
    params: z.object({ id: Uuid }),
    body: PasskeyRenameBody,
    response: PasskeyDTO,
    errors: ['UNAUTHENTICATED', 'NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'securityWrite',
  }),
  removePasskey: defineEndpoint({
    id: 'security.removePasskey',
    owner: 'WP-T1a',
    method: 'POST',
    path: `${base}/passkeys/:id/remove`,
    summary: 'Remove a passkey',
    auth: 'session',
    requires: ['password_confirmation'],
    params: z.object({ id: Uuid }),
    body: PasskeyRemoveBody,
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED', 'INVALID_CREDENTIALS', 'NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'securityWrite',
  }),
} as const;
