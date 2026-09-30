# Account modules (WP-30)

- `auth/` provides the platform's **session resolver** (cookie `__Host-sotf_sid` →
  `resolveSession`) and `/api/v2/auth/*` (register, login, logout, password forgot/reset, email
  verify/resend). Cookies: `cookies.ts`.
- `me/`: `/api/v2/me`, `/me/summary`, `/me/home`, `PATCH /me/settings`, `PATCH /me/privacy`,
  `/me/sessions` (list, revoke one, revoke the others).
- `account/`: `POST /me/email`, `POST /me/password`, `POST /me/export`, `GET /me/exports/:id`,
  `POST /me/delete`, `POST /me/delete/cancel`.

The three share `services.ts` (one `AuthService` + export storage per process). Tests inject fakes
with `createAccountModules({ hibp, turnstile, storage })`. Acceptance:
`pnpm --filter @sotf/api test:int -- auth` (PostgreSQL + Mailpit through Testcontainers).

## Personal access tokens and Discord (T1-08, T1-01)

- **Tokens** (`modules/tokens`): `sotfm_pat_…` secrets, stored as SHA-256, created with the account
  password, at most 20 active per account. `Authorization: Bearer` wins over the cookie in the
  session resolver (`module.ts`); the token acts as its owner with the role capped to `user` and is
  limited by its scopes (`read`, `mods:write`, `social:write`, see `@sotf/core/auth/pat.ts`). Tokens
  never reach auth, tokens, moderation, admin, internal, sessions or data-export endpoints.
- **Discord** (`modules/oauth`): inactive unless `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET` are
  set (`GET /auth/providers` tells the web; start/callback answer 404 otherwise). Authorization code
  flow with PKCE; the round trip state is a signed cookie (`state.ts`). The redirect URI to register
  in the Discord app is `${PUBLIC_SITE_URL}/api/v2/auth/oauth/discord/callback`. A verified email
  matching an existing account needs the account password (`/oauth/link`) before linking.
- The worker's `cleanup.sessions` job purges old link tickets and dead tokens.
