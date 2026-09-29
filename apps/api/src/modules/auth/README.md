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
