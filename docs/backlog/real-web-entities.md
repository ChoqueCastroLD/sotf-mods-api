# Backlog of real-web-entities

Done in this pass (apps/web, typecheck + build green):
- Live counters on mod and build pages: `scripts/mod/live.ts` polls `GET /api/v2/mods/:id/live` (edge 30 s) and updates downloads and followers in place (visibility-aware, 60 s).
- Build pages: `+ Kit` popover (reuses `scripts/mod/kit-add.ts`), live download and follower counts.
- Mod page: public stats panel (`components/mod/StatsPanel.astro`: SSR SVG sparkline from `GET /mods/:id/stats/public`) plus a lazy Recharts `ChartFigure` island (`islands/stats/**`, 30 days / 1 year / all time, table view).
- Mod page: server-rendered dependency graph (T1-05, `components/mod/DependencyGraph.astro`).
- i18n: `mod_stats_*` and `mod_graph_*` in all 13 locales.

Cross-area work still needed:
- `apps/api/src/modules/site` + `packages/contracts/src/events.ts`: a public SSE stream for a mod page (`GET /api/v2/mods/:id/live/stream`, channel `mod:{id}`, event with `{ downloads, followers }`, throttled to one frame per 5 s, no auth) so `scripts/mod/live.ts` can use EventSource and keep polling as fallback. Today SSE only exists for signed-in users (`/api/v2/stream`).
- `packages/ui/src/tokens.css`: let `data-motion="full"` lift the OS reduced-motion rule (currently `!important`).
- `apps/worker` + `packages/core` (compat): emit the `compat.prompt` signal per later downloader (24 h after their download), not only at build publication. The web side already shows it (`GET /me/compat-prompts` callout for members, local toast for guests).
- T1 items with no backend yet (need endpoints first, then web in apps/web/src/components/mod and kits): known issues and author FAQ per mod (T1-14), public version diff (T1-17), follow Kits and kit comments (T1-24), automatic translation of `shortDescription` (T1-25), co-authors on the mod page (T1-12), recommendations (T1-15), 3D build viewer data (T1-06: needs the `ProfileID` blueprint geometry parsed by the worker).
- `packages/i18n/messages/basecamp/*.json` (`basecamp_analytics_legacy_note`: "Countries arrive in a later update") belongs to the console owner; T1-21 analytics by country.
