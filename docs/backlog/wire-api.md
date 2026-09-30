# Backlog wire-api (integration pass of the API, core, contracts and emails packages)

Area: `apps/api/**`, `packages/{core,contracts,emails}/**`. What was resolved is marked in the source
backlogs (`[x] resolved by wire-api` / `[partial] wire-api`). Below: what other areas must do to use
it, and what is still open in this area. One line per item: what · where · why.

## For other areas (the API/core side is ready)

- **Worker handlers of the new queues** · `apps/worker/src/jobs/**` (wire-data) · the queues and schedules exist in `JOB_PAYLOADS`/`JOB_SCHEDULES` and `QUEUE_OVERRIDES` (singleton), the worker only schedules queues it handles: `ops.alerts` → `runOpsAlerts(ctx, { schema: env.PGBOSS_SCHEMA, kelvinSeek: <env defaults as in apps/api/src/modules/admin>, siteUrl: env.PUBLIC_SITE_URL })` (`@sotf/core/ops/index`); `security.rescan` → `rescanStaleScans(ctx, { schema })` (`@sotf/core/security-scan/index`); `compat.reconcile` → `reconcileCompat(ctx)` (`@sotf/core/compat/index`); `markdown.rerender` → `rerenderStaleMarkdown(ctx, { config, storage }, { batchSize })` from `@sotf/core/publishing/rerender` (not the barrel: it loads sharp), re-enqueue while `remaining`.
- **Legacy mentions trigger** · `apps/worker/src/jobs/digests/index.ts` (wire-data) · `legacy.mentions` now has its own `*/10` schedule (post-cut-over only, `POST_CUTOVER_QUEUES`): the enqueue from the 10-minute digest run can go.
- **`db:invariants` result** · `tooling/migration/src/invariants.ts` (wire-data) · after each run insert a `"MigrationRun"` row `name = 'invariants'`, `notes = { ok: boolean, failed: [ids] }`; `ops.alerts` reads the latest one (red, or no green run for 26 h).
- **Comment thread lock UI** · Ranger item view / mod actions (wire-web-console) and the comments island (wire-web-public) · `POST /api/v2/ranger/mods/:id/comments-lock { locked, reason }` (`CommentsLockDTO`); `GET /me/social-state` returns `commentsLocked` so the composer can say the thread is locked (new comments answer 403).
- **Convert a legacy description** · Basecamp mod editor (wire-web-console) · `StudioModDTO.descriptionFormat` (`legacy` | `markdown`); `PATCH /studio/mods/:id { descriptionFormat: 'markdown' }` converts (no way back); show the `description_raw_html` preflight warning next to the editor.
- **Operations readout** · `/ranger/admin` (wire-web-console) · `OpsDTO.http` (`last5m`/`lastHour`: total, 404, 410, 4xx, 5xx) and `OpsDTO.alerts` (active alerts, same rules as the emails).
- [x] resolved by final-web-discovery: **Category share card** · category hubs (wire-web-public) · `CategoryDTO.ogImage` (null until `og.render` of the category ran) for `og:image`; `og-default` otherwise.
- [x] resolved by final-web-discovery: **One read for the multiplayer hub** · `apps/web/src/content/best/hubs.ts` (wire-web-public) · `GET /mods?multiplayer=host_only&multiplayer=all_players…` (OR) replaces the merged reads.
- **Queue assignment table** · wire-web-console · assignment and escalation now live in `"ModerationAssignment"` (same endpoints and DTOs as before).
- **Session country** · Settings › Security (wire-web-console) · `SessionDTO.country` is filled for sessions created behind Cloudflare.

## Still open in this area (needs a coordinated contract change, a column or a decision)

- **New signal types** · `packages/contracts/src/notifications.ts` + `packages/core/src/notifications/**` + worker subscriber, together with `apps/web/src/console/features/settings/NotificationsScreen.tsx` (`DEFAULTS`, `COPY`), `apps/web/src/islands/signals/describe.ts` and i18n · `compat.prompt` (WP-50, «Did it work?» 24 h after a signed-in download), `review.update_prompt` (WP-41, new major version) and `kit.added_my_mod` (WP-80): adding a `NotificationType` breaks the exhaustive web records, so the contract, core and web changes must land in one merge.
- **Milestone share card** · `OG_ENTITY_TYPES` + a key column/route for milestones (WP-60/WP-61) · a card without a stored key or a page that references it would be unreachable.
- **Live download events** · `packages/contracts/src/events.ts` (WP-80) · polling `GET /mods/:id/live` stays; an SSE event per download needs a throttled design (downloads are the hottest write path).
- **Kit follows** · T1-24 (PLAN §7.13) · no kit follow feature exists yet (`Kit.followersCount` is unused), so there is no `kit.followed` event to emit.
- **Search page titles and FAQ templates as i18n namespaces** · `packages/core/src/search/pages.ts` with a `search` namespace (WP-33/WP-72) · the keys must exist in `packages/i18n` first.
