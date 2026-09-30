# Auth pages and header account (WP-44)

Pages: `/login`, `/register`, `/forgot-password`, `/reset-password?token=`, `/verify-email?token=`
and `/logout` (`apps/web/src/pages/*.astro`), all inside `components/account/AuthShell.astro`
(topographic art panel, 120 px strip on mobile, `noindex`, no ads). Each form is a React island
calling the same-origin API (`/api/v2/auth/*`, `api.ts`, no Zod in the browser).

- **Text**: `messages.server.ts` renders only the keys an island needs (`message-keys.ts`) in the
  request locale; `i18n.tsx` interpolates them on the client. Namespace `auth` in
  `packages/i18n/messages/auth/<locale>.json` (13 locales, EN is the source).
- **`?next=`**: every post-auth navigation goes through `next.ts` (`safeNext`): relative internal
  paths of known sections only; console sections are never kept after sign-out.
- **Legacy flags**: `/login?registered`, `?reset` (plus `?verified`, `?expired`) become toasts and
  are stripped from the address bar (`flags.ts`).
- **Turnstile**: invisible (`interaction-only`), script loaded on first interaction (`turnstile.ts`);
  on login only after `TURNSTILE_REQUIRED`. Without `PUBLIC_TURNSTILE_SITE_KEY` the forms send a
  placeholder token that the API accepts only outside production.
- **Errors**: one generic sign-in error, rate-limit countdown, error summary + field errors mapped
  from the API issue codes (`validation.ts`), focus moved to the alert.
- **Email tokens** leave the URL immediately and live in `history.state` (`token.ts`).
- **Header** (`components/account/HeaderAccount.astro` + `account-menu.ts`): guest HTML for
  everyone; the `sotf_li` hint triggers `/me/summary` and fills the popover menu (profile,
  Basecamp, Backpack, Signals unread, Ranger Station for staff, verify reminder, sign-out form).
- **Sign-out** (`components/account/logout.ts`): `POST /logout` or same-origin `GET` revokes the
  session through the API and clears the cookies with a 303; cross-site `GET` asks to confirm.
