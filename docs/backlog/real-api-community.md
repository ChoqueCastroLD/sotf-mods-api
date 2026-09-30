# Backlog real-api-community

Audit of the api-community area (comments, reviews, follows, kits, compat, reports, ranger, admin, awards, badges, announcements, studio-analytics and their core/contracts folders): no "coming soon", TODO/FIXME, stub, mock data, 501 route or always-off flag exists in the area paths (only test fakes). The three new signal types (`compat.prompt`, `review.update_prompt`, `kit.added_my_mod`) are already declared in `packages/contracts/src/notifications.ts`. The items below need edits outside the area and are NOT implemented by this worker.

- [ ] **Live download counts / kit follows over SSE (T1-16, T1-24)** · `packages/contracts/src/events.ts` (new `mod.live` event on `mod:{id}` with throttled counters), `apps/api/src/modules/stream/**` (authorise anonymous-safe `mod:{id}` subscription, throttle 1 event/5 s per mod), `apps/worker/src/jobs/notifications/**` (publish on download rollup), `apps/web/src/islands/**` (mod page counter) · the hub and the web clients are owned by other areas.
- [ ] **Kit follows and kit comments (T1-24)** · `packages/db/**` (new `KitFollow` table + migration), then `packages/core/src/kits` and `apps/api/src/modules/kits` (area) · needs the schema first.
- [ ] **compat prompt for later downloaders** · `apps/api/src/modules/downloads/**` / `packages/core/src/downloads/**` · on the first download of a build by a logged-in user, call the compat prompt producer (`getCompatPrompts` in `packages/core/src/compat`) and emit `compat.prompt`.
- [ ] **Public stats sparkline on the mod page (Recharts `ChartFigure`)** · `apps/web/src/**` (mod page) · the data already exists in `GET` public stats of the stats module.
- [ ] **Build pages `+ Kit` popover and live counts** · `apps/web/src/**` · consumes `GET /me/kits` and the SSE `mod.live` event above.
- [ ] **`data-motion="full"` override** · `packages/ui/src/tokens.css` · remove the `!important` on the reduced-motion rule so the explicit user setting wins.
- [ ] **Immediate lane counts on submission** · `packages/core/src/publishing/submit.ts` · call `publishLaneCounts(tx, now, ['new_mods','versions'])`.
- [ ] **Milestone share card** · `packages/contracts/src/jobs.ts` (`OG_ENTITY_TYPES`) + `packages/core/src/og`.
