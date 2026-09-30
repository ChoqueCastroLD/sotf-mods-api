# Backlog real-api-content

Implemented in this branch (API and core):

- Live download totals over SSE: `DownloadCounter.onFlushed` publishes `mod.live` on `mod:{id}` after each committed flush; public stream `GET /api/v2/mods/:id/live/stream` (initial frame + live frames, `retry: 10000`).
- Compat prompt for later downloaders: signed-in downloads after the current build was released create the `compat.prompt` signal (same dedupe key as the build-publication one).
- SVG badges (T1-09): `GET /api/v2/mods/:id/badge/:kind` (`downloads|version|rating|followers|compat`).
- Public stats sparkline data already served by `GET /mods/:id/stats/public`.

## Outside this area

- [ ] **Mod page live counter** · `apps/web/src/**` (mod page island) · open `EventSource(/api/v2/mods/:id/live/stream)` and update the download count on `mod.live`; fall back to polling `GET /mods/:id/live` if the stream fails.
- [ ] **Public stats sparkline** · `apps/web/src/**` mod page + `packages/ui` `ChartFigure` (Recharts) · consume `GET /mods/:id/stats/public`.
- [ ] **Badges UI** · `apps/web/src/**` mod page share/embed dialog + i18n (13 locales) · show Markdown/HTML snippets for `/api/v2/mods/:id/badge/<kind>`.
- [ ] **Kit follows live + build page `+ Kit` popover and live counts** · `apps/api/src/modules/kits/**`, `apps/web/src/**` · publish kit follow events on a channel and subscribe on build pages.
- [ ] **SSE client** · `apps/web/src/console/lib/stream.ts` · the `SseEventDTO` union gained `mod.live`; ignore or handle it.
- [ ] **`data-motion="full"` override** · `packages/ui/src/tokens.css` · remove the `!important` reduced-motion rule.
- [ ] **Scout copy in cmdk** · `apps/web/src/**`, `packages/i18n/messages/**`.
