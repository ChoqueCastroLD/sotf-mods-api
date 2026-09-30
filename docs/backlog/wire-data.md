# Backlog wire-data (integration pass of the data, worker, i18n, markdown, ui and brand packages)

Area: `apps/worker/**`, `packages/{db,i18n,markdown,ui,brand}/**`, `tooling/migration/**`. What was
resolved is marked in the source backlogs (`[x] resolved by wire-data` / `[partial] wire-data`).
Below: what other areas must do to use it, and what is still open in this area. One line per
item: what · where · why.

## For other areas (the data side is ready)

- **Session country** · `packages/core/src/auth` `createSession` + `SessionDTO` (wire-api) · write `ctx.country` into `"Session"."country"` (migration 2000, Drizzle `session.country`) and expose it.
- **Thread lock** · `packages/core/src/comments`, ranger endpoints, contracts (wire-api) · `"Mod"."commentsLockedAt"` (migration 2001, `mod.commentsLockedAt`): refuse new comments/replies with `FORBIDDEN` while set; `POST /ranger/mods/:id/lock|unlock` (+ `AuditLog`).
- **Description format** · `packages/core/src/publishing` (wire-api) · `"Mod"."descriptionFormat"` (migration 2002): `legacy` → render with `legacyHtml`, `markdown` → `full`, NULL → today's inference (`isLegacyAuthored`); B9 writes `legacy`. Keep `legacy` on edits until the author converts; warn with `hasRawHtml`.
- **Category OG key** · `packages/core/src/og` + contracts (wire-api) · `og.render` of a category can store its key in `"Category"."ogImageKey"` (migration 2003) and the hub DTO expose it.
- **Queue assignment and escalation** · contracts + `apps/api/src/modules/ranger` + `packages/core/src/moderation` (wire-api), `ItemView` shortcut `e` (wire-web-console) · table `"ModerationAssignment"` (migration 2004, Drizzle `moderationAssignment`): PK `(targetType, targetId)` with `targetType` ∈ `mod|version|comment|report`, `assigneeId`/`assignedAt`, `escalatedAt`/`escalatedById`/`escalationReason`; keep `"Report"."assignedToId"` in sync for reports and fill `QueueItemDTO.assignee` from it.
- **Table policy** · `packages/core/src/security/policy.ts` `TABLE_POLICIES` (wire-api) · classify the new table `ModerationAssignment` (staff-only, writers `staff`) and the new columns (`Session.country` is private) so `reviewTablePolicies()` stays clean.
- **AuditLog is immutable for every role** · runbooks / any script (all) · migration 2005 refuses `UPDATE`, `DELETE` and `TRUNCATE` on `"AuditLog"` even as the owner; a deliberate purge must drop `trg_audit_log_immutable`/`trg_audit_log_no_truncate` first.
- **Known tombstones** · `packages/core/src/resolve/paths.ts` (wire-api) · `/mods/aedev/gyrocopter` is now a `"Tombstone"` row (migration 2006); `KNOWN_TOMBSTONES` can shrink to a fallback or go.
- **Markdown in the browser** · `apps/web/src/console/features/upload/**`, comment composer (wire-web-console / wire-web-public) · import `@sotf/markdown/lite` for `full`/`lite` previews (72 KB gz instead of 135 KB); `legacyHtml` throws there.
- **Localised profile links** · `configureDomainI18n` / `DomainI18nProvider` in `apps/web` and the console (web areas) · pass `href: (path) => localizePath(path, getLocale())` so the domain cards link to `/es/profile/…`.
- **New copy to use** · web areas · `unsubscribe_*` in `pages/unsubscribe.astro`, `mod_faq_title` in `ModFaq.astro`, `signals_badge_name_<key>` in `islands/signals/describe.ts`, `console_nav_inbox`/`console_nav_drafts` in `console/lib/navigation.ts`.
- **Sentry in the API** · `apps/api` (wire-api) · the worker reports with `@sentry/core` (`apps/worker/src/sentry.ts`); `@sentry/node` was avoided on purpose: it pulls OpenTelemetry, which makes pnpm resolve a second `drizzle-orm` instance (optional peer) and breaks the Drizzle types across packages.
- **Catalog entry** · `pnpm-workspace.yaml` (integrator) · `@sentry/core: 11.1.0` was added next to the other `@sentry/*` pins (pnpm `catalogMode: prefer` writes it there); covered by the existing `minimumReleaseAgeExclude`.

- **Worker variables** · `ops/coolify/env/worker.env.example`, root `.env.example` (wire-infra) · the worker now reads `KELVINSEEK_DAILY_BUDGET_USD` (default 3, same value as the API: the alert fires at 80 %) and `ALERT_INTERVAL_SECONDS` (default 300, `0` disables the admin alerts); both have safe defaults.
- **Monitoring runbook** · `docs/operations/monitoring.md` (wire-infra) · dead letters and the KelvinSeek budget now alert by email (`apps/worker/README.md`); the 5xx rate, `db:invariants` and the backup age stay manual checks.
- **Remaining alerts** · `apps/api` (wire-api) + worker · 5xx > 1 % in 5 min needs the API to persist per-minute status counts (e.g. an `AnalyticsEvent` kind or a small table) that `src/alerts.ts` can read; `db:invariants` nightly needs the invariant SQL shipped with the worker image.

## Still open in this area (needs a contract, a decision or a person)

- **Optional `legacy.mentions` schedule** (WP-43) and **notification emails through `email.send`** (WP-30/WP-43) · both work today by the WP-43 decisions (digest trigger, `deliverNotificationEmail`); changing them needs contracts/core edits.
- **Re-render on a `RENDER_VERSION` bump** (WP-14/WP-40) · see «Queues still needed».

- **Queues still needed** · `packages/contracts/src/jobs.ts` (contracts owner) then `apps/worker` · `markdown.rerender` for a `RENDER_VERSION` bump (WP-14/WP-40: needs a core function that re-renders `descriptionHtml` keeping the replicated description images and the persisted `descriptionFormat`; `RENDER_VERSION` is still 1, so nothing is stale today) and, optionally, a `legacy.mentions` schedule (WP-43; the digest trigger works meanwhile). The compat reconciliation (WP-50), the lost-scan sweep (WP-51) and the alerts (WP-A4) no longer need a queue: they run in the worker (`jobs/compat/reconcile.ts`, `src/sweeps.ts`, `src/alerts.ts`).
- **«Update your review» on a major version** · contracts (notification type) + `packages/core/src/notifications` + worker subscriber (WP-41) · needs a notification type.
- [x] resolved by final-shared-ui-i18n (`data-motion="full"` uses `revert-layer` in `tokens.css`; duplicate block removed) · **Account motion override** · `packages/ui/src/tokens.css` · `data-motion="full"` cannot undo the literal `prefers-reduced-motion` rule of section 1 (`!important`); only a change of the research block (section 1) would allow it.
- **Legacy decisions of B15** · owner (WP-84) · whether to scan the ≈ 612 legacy files with VirusTotal gradually, and whether a missing object should become `file_missing`.
- **i18n** · native-speaker review (WP-13/WP-94), Scout copy (T1), `.generated/` size watch, FAQ templates (WP-61) and search page titles (WP-33/WP-72) as namespaces: the consumers live in `packages/core` (`seo/faq.ts`, `search/pages.ts`) and must move to the catalog first, or the messages would be dead copy.
- **Baseline from a real dump** · `packages/db` · PLAN §14.5: there will be no dump; the live-catalog guard stays the safety net.
