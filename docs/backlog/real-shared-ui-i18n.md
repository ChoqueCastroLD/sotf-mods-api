# real-shared-ui-i18n backlog (changes outside the area)

Area audit: no "coming soon"/TODO/mock/disabled-feature strings remain in packages/ui, i18n, markdown, brand. `data-motion="full"` already lifts the OS reduction via `revert-layer` (tokens.css). `ChartFigure`/`chartTheme`/`Sparkline` exist in `@sotf/ui/domain`. New i18n keys added in all 13 locales; wire them:

- apps/web mod page (`mod_stats_title`, `mod_stats_series`, `mod_stats_day`, `mod_stats_empty`): public 30-day downloads chart using Recharts + `ChartFigure` + `chartTheme`, fed by a public per-day stats endpoint (packages/core/api content owner).
- apps/web build pages (`builds_kit_popover_title|empty|create`, `builds_kit_added`, `builds_kit_already`): "+ Kit" popover (ui `Popover`) replacing the `/me/kits?add=<id>` link; live title counts via SSE (api/core owner).
- apps/api + packages/core: SSE for live download events and kit follows; `compat.prompt` emission for later downloaders (worker/core).
- Scout copy in cmdk: Scout does not exist; no UI is shown (nothing to add in i18n until the feature lands).
