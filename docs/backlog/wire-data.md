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
- **API dev port** · `apps/api/src/env.ts` (wire-api) · the worker defaults to 47302 without `PORT` unless `NODE_ENV=production`; the API should do the same with 47301 (README «puertos» note can then go).
- **Catalog entry** · `pnpm-workspace.yaml` (integrator) · `@sentry/core: 11.1.0` was added next to the other `@sentry/*` pins (pnpm `catalogMode: prefer` writes it there); covered by the existing `minimumReleaseAgeExclude`.

## Still open in this area (needs a contract, a decision or a person)

- **New queues and schedules** · `packages/contracts/src/jobs.ts` (contracts owner) then `apps/worker` · `markdown.rerender` (RENDER_VERSION bump, WP-14/WP-40), `compat.reconcile` (nightly, WP-50), `security.rescan` of `staleScans` (WP-51), an alerts job for PLAN §10.3 (WP-A4) and optionally a `legacy.mentions` schedule (WP-43): every worker queue must exist in `JOB_PAYLOADS`/`JOB_SCHEDULES` first.
- **«Update your review» on a major version** · contracts (notification type) + `packages/core/src/notifications` + worker subscriber (WP-41) · needs a notification type.
- **Account motion override** · `packages/ui/src/tokens.css` · `data-motion="full"` cannot undo the literal `prefers-reduced-motion` rule of section 1 (`!important`); only a change of the research block (section 1) would allow it.
- **Legacy decisions of B15** · owner (WP-84) · whether to scan the ≈ 612 legacy files with VirusTotal gradually, and whether a missing object should become `file_missing`.
- **i18n** · native-speaker review (WP-13/WP-94), Scout copy (T1), `.generated/` size watch, FAQ templates and search page titles as namespaces (need the web/core consumers to move first).
- **Baseline from a real dump** · `packages/db` · PLAN §14.5: there will be no dump; the live-catalog guard stays the safety net.
