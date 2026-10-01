# Console SPA (`apps/web/src/console`)

`<ConsoleApp client:only="react">` is mounted by the user-free Astro shells in
`src/pages/{basecamp,me,ranger,settings}/[...path].astro` and `src/pages/signals.astro` (PLAN §2.5, §4.3).

- `ConsoleApp.tsx` — providers: error boundary → locale → `@sotf/ui` labels → TanStack Query → Router, lazy toasts.
- `router.ts` — file routes in `routes/` (tree in `routeTree.gen.ts`, regenerate with `pnpm gen`), `defaultPreload: 'intent'`, `autoCodeSplitting`.
- `routes/__root.tsx` — session guard (`lib/guard.ts`: no `sotf_li` hint or 401 → `/login?next=`), shell layout.
- `routes/<area>.tsx` — area layouts; screens go in `routes/<area>/` and the area shows its EmptyState until one matches.
- `layout/` — sidebar per area (icons on tablets), bottom tab bar and section strip on phones, top bar, live status, shortcuts dialog, route announcer.
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

Phones — the native feel (< 768 px):

- `layout/TabBar.tsx` — the areas as bottom tabs (Signals carries the unread count). `layout/SectionStrip.tsx`
  — the area's places as snap-scrolling pills under the top bar (replaces the old hamburger menu).
  `lib/navigation.ts` decides what is a *pushed* screen (`isPushedRoute`: editors, the wizard, detail
  screens, an open queue item `?item=`): those hide the tabs and the strip, show a Back arrow in
  the top bar and own their sticky action bar. `--tabbar-h` (set on the shell wrapper) lets floating
  things (`components/Fab.tsx`, toasts) clear the tabs.
- `components/SwipeRow.tsx` — touch-only swipe actions (start/end, RTL aware, no motion under
  `prefers-reduced-motion`). A swipe is a shortcut: every action also exists as a real control
  (Signals: mark read · Ranger queue: take / escalate · Inbox: reply / resolve · My mods: new
  version · Drafts: delete — destructive ones still ask).
- `components/native-list.tsx` — grouped lists with chevrons (Settings index, Admin index at
  `/ranger/admin` on phones; larger screens redirect to the first admin screen).
- `components/PullToRefresh.tsx` — drag down at the top refetches the active queries.
- `components/ArtState.tsx` — empty states and the Basecamp header backdrop with the concept art
  (`public/art/console-*`, AVIF + WebP at 480/960 px, lazy, fixed dimensions, decorative).
- The wizard shows a segmented progress bar and a sticky Back/Next bar; image pickers add
  «Take a photo» (`capture`) on touch screens; text fields that hold identifiers use
  `autoCapitalize="none"`, `autoComplete="off"` and proper `inputMode`s.
- A screen heading identical to the top bar title is hidden below `md` (`useDuplicateHeading`).
