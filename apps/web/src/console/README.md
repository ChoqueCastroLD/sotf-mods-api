# Console SPA (`apps/web/src/console`)

`<ConsoleApp client:only="react">` is mounted by the user-free Astro shells in
`src/pages/{basecamp,me,ranger,settings}/[...path].astro` and `src/pages/signals.astro` (PLAN §2.5, §4.3).

- `ConsoleApp.tsx` — providers: error boundary → locale → `@sotf/ui` labels → TanStack Query → Router, lazy toasts.
- `router.ts` — file routes in `routes/` (tree in `routeTree.gen.ts`, regenerate with `pnpm gen`), `defaultPreload: 'intent'`, `autoCodeSplitting`.
- `routes/__root.tsx` — session guard (`lib/guard.ts`: no `sotf_li` hint or 401 → `/login?next=`), shell layout.
- `routes/<area>.tsx` — area layouts; screens go in `routes/<area>/` and the area shows its EmptyState until one matches.
- `layout/` — sidebar per area (icons on tablets, menu on phones), top bar, live status, shortcuts dialog, route announcer.
- `hooks/` — `useMe`, `useStream` (SSE → cache updates/`invalidateQueries`, polling fallback, bfcache-safe), shortcuts, sidebar, online.
- `lib/` — HTTP client and errors, query client (401 → login), chunk-error reload, toasts (`notify`), i18n catalogs, storage.

Messages live in `packages/i18n/messages/console/<locale>.json` (13 locales).

Shell wiring (WP-A3):

- `ConsoleApp.tsx` sets `zod` to `jitless` once (no `new Function` probe → no CSP `eval` reports) and
  preloads the `ui-domain` catalogue of the active locale (`lib/domain-messages.ts`).
- `components/DomainI18nBridge.tsx` gives `@sotf/ui/domain` components the localized `ui-domain`
  texts, the console locale for `Intl` and the browser time zone; screens with domain components wrap
  themselves in it (it suspends into the route's pending state until the catalogue chunk arrives).
- `layout/ConsoleLayout.tsx` applies the account's display preferences (theme, density, motion) once
  `/me` loads, so they follow the user on every device.
