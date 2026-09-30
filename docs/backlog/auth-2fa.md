# Slice auth-2fa (T1-02, T1-26)

TOTP 2FA with recovery codes, WebAuthn passkeys, new-login alert email, console Settings > Security.

## Integrator notes

- Migrations 2120-2123 (additive): user_totp, user_passkey, auth_challenge, user_login_signal.
- New dependency pins (pnpm catalog): `@simplewebauthn/server` 14.0.3 (core), `@simplewebauthn/browser` 14.0.0, `qrcode` 1.5.4, `@types/qrcode` 1.5.6 (web).
- rpID is the hostname of `PUBLIC_SITE_URL`; TOTP secrets are AES-256-GCM encrypted with an HKDF key derived from `APP_SECRET`.
- Policy: 2FA is optional. A passkey alone signs in without a password (user verification required); with TOTP on, a passkey is an alternative second factor. Moderators/admins without TOTP or passkeys get a prompt, never a lockout.
- Login returns `{ twoFactor }` (no cookies) when a second factor is needed; a wrong code is `INVALID_CREDENTIALS` with `errors[{path:'code'}]`.
- Cleanup job now also deletes expired `auth_challenge` rows.
- Known, unrelated: `notifications/registry.test.ts` fails on main; `check:forbidden` flags docs/RELEASE-READINESS.md:9; `pnpm gen` refreshed stale i18n generated files.
- Not done: API integration tests for security endpoints; staff prompt banner in the console shell (only on the Security screen).
