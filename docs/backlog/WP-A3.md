# Backlog WP-A3 (console polish)

Resolved here (console-owned items of earlier backlogs): Inbox and Drafts in the Basecamp sidebar (WP-80, WP-74); display preferences applied when `/me` loads (WP-81); `z.config({ jitless: true })` in the console bootstrap (WP-93); the `ui-domain` catalogue wired into `DomainI18nBridge`, loaded per locale and preloaded by the shell (WP-25, WP-71, WP-80, WP-94); error state with retry for «New version of a mod» in `/basecamp/new` (it showed the empty copy on failure). Static audit of the console (hard-coded copy, `Intl` without locale, buttons without `type`, icon buttons without label, tables without horizontal scroll, `useQuery` without error state): no other defects found.

Still open (outside `apps/web/src/console/**`):

- **Shell labels for Inbox/Drafts** · `packages/i18n/messages/console/**` (i18n owner) · add `console_nav_inbox` and `console_nav_drafts` so `lib/navigation.ts` can use the per-locale shell catalogue instead of the two Paraglide messages `m.basecamp_action_inbox` / `m.basecamp_action_drafts` it uses now (≈ 1 KB in the shell chunk). · **[x] resolved by wire-data**: `console_nav_inbox`, `console_nav_drafts` (13 locales).
- **`GET /api/v2/me/kits/:id`** · `packages/contracts/src/kits.ts` + `apps/api` (WP-42 owner, docs/backlog/WP-71.md) · still missing; `features/kits/api.ts` `fetchOwnKit` keeps its `PATCH {}` fallback until it ships.
- **`GET /ranger/templates`** and **`ScanSummaryDTO.id`** · `packages/contracts` + `apps/api` (docs/backlog/WP-51.md) · still missing; the console keeps `BUILT_IN_TEMPLATES` / the site setting and cannot offer scan overrides from the summary.
- **Featured badges chooser** · needs `PATCH /me/badges/featured` (docs/backlog/WP-64.md) before `routes/settings/**` can offer it.
- **Taxonomy names in console domain components** · `DomainI18nBridge` has no `taxonomy` resolver (categories stay in English inside console cards); needs a localized taxonomy source for the SPA (API field or a `taxonomy` catalogue).
- **Top-bar Signals panel** (optional, docs/backlog/WP-81.md) · not done; the bell links to `/signals`.
- **Not run (dev-only mode)** · `pnpm verify` and `pnpm e2e --grep @console` (acceptance of WP-A3), responsive checks at 360/768/1024/1440 px in a real browser; only `typecheck` and `build` of `@sotf/web` were run.
