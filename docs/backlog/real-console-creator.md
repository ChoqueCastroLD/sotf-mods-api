# real-console-creator

Audit of `apps/web/src/console` (Basecamp, publish wizard, drafts, shell): no "coming soon", TODO, mock data, dead links or off feature flags; every `disabled` is a legitimate state (dirty/busy/limit). The remaining items need API/core/contracts changes outside this area:

- `packages/contracts/src/studio.ts` + `packages/core/src/stats/creator-analytics.ts` + `apps/api/src/modules/studio-analytics`: add `countries: [{ country, visits }]` to the analytics DTO (PLAN 7.5, T1). `ModStatsDaily."byCountry"` is already filled by `rollup.ts`; aggregate it like `byLocale` (jsonb_each_text, `MAX_COUNTRIES = 20`). Then in `apps/web/src/console/features/basecamp/AnalyticsScreen.tsx` add a Countries `CategoryFigure` next to Locales, plus `basecamp_analytics_countries_*` keys in `packages/i18n/messages/basecamp/*.json` (13 locales).
- `apps/api/src/modules/events` + `packages/core/src/analytics/live.ts`: SSE events for downloads and kit follows scoped to the mod owner (T1-24, throttled per user, e.g. 1 push per mod per 5 s). Then replace the 60 s polling in `apps/web/src/console/features/basecamp/LivePanel.tsx` (`useDownloadPulses`) with the stream event and add the "kits that added your mod" entries.
- `packages/core` compat prompt: emit `compat.prompt` per later downloader (not only at build publication) so `GET /me/compat-prompts` is not the only path.
