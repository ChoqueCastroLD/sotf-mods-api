# Analytics (`@sotf/core/analytics/index`, WP-52)

First-party, cookieless measurement (PLAN §7.1, §8.8, §9.3).

- **Beacon** (`recordBeacon`, `POST /api/v2/e`): batches of ≤ 20 product events from the web
  script. Stored in `AnalyticsEvent` with `visitorHash = HMAC(ip + UA, daily salt)` (32 hex, changes
  every UTC day), coarse device class, `CF-IPCountry`, the page locale and, for `page_view`, the
  normalised referrer **domain** (`referrer.ts`: `direct`, `internal`, Google, Discord, YouTube,
  GitHub, AI assistants — chatgpt.com, perplexity.ai, copilot, gemini, claude.ai — or the bare
  host). Paths lose their query string and fragment.
- **Dropped silently** (always 204): `Sec-GPC: 1` or `DNT: 1`, declared bots and empty
  User-Agents, IPs over the soft `beacon` bucket.
- **RUM** (`recordVitals`, `POST /api/v2/e/vitals`): one `web_vital` row per metric with
  `{metric, value, rating, template, navigationType, attribution}`; `getRumReport(ctx, '7d'|'28d')`
  returns `RumDTO` (p75 per template for all countries, and per country with ≥ 20 samples) for
  `GET /admin/rum` (WP-51).
- **Server events** (`recordServerEvent`): `mod_unfollow` from the `follow.mod_deleted` domain
  event (idempotent on the event id); feeds `ModStatsDaily.unfollows`.
- **Live visitors** (`countLiveVisitors`): distinct visitor hashes with a page view in the last
  5 minutes, cached 15 s, for `GET /live/pulse`.
- **Retention** (`pruneAnalyticsEvents`, daily `cleanup.analytics`): 90 days.
