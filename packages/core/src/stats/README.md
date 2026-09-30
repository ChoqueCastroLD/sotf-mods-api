# Statistics (`@sotf/core/stats/index`, WP-52)

Aggregates and creator analytics (PLAN §6.4 "Estadísticas y analítica", §6.8, §7.5, T0-20).

## Jobs

- **`stats.rollup`** (`runStatsRollup`, hourly at :05). Recomputes from the raw rows — never
  increments — so every run is idempotent:
  - `ModStatsDaily` of the rolled-up hour's day and of today: downloads, unique downloads and
    `bySource` (channel) from `ModVersionDownloadDaily`; views, unique views (daily visitor
    hashes), `byReferrer`, `byLocale`, `byCountry` from the `page_view` events of mod/build pages;
    follows (`ModFavorite.createdAt`), unfollows (`mod_unfollow` server events), visible comments,
    reviews and field reports created that day. Days older than 85 days keep their event-derived
    columns (the raw events are purged at 90 days).
  - `ModStats` (followers = distinct users: reconciles the ±1 moves of the follows service),
    `UserStats` (followers/following reconciled from `UserFollow`; tier and rank are WP-60's) and
    `SiteStat` (legacy definitions, same as B11 and `/api/stats`).
  - One transaction; evicts the `stats` tag from the API LRUs.
- **`legacy.counters`** (`runLegacyCounters`, every 30 min, only when `LEGACY_COEXIST=false`):
  the legacy cron formulas for `Mod.downloads`, `lastWeekDownloads`, `favoritesCount` and
  `commentsCount`, in one set-based `UPDATE` that writes only changed rows and never touches
  `updatedAt`.

## Creator endpoints (Basecamp)

- `getStudioOverview`: KPIs (downloads 7 d / 30 d, followers, rating, works share on the current
  build, views 7 d) with previous value and sparkline; "needs attention"; "My mods" rows with the
  listing quality score; next milestone and next creator tier. `compatWorksShare` with
  `previous: null` and an empty sparkline means "no field reports yet".
- `getCreatorAnalytics`: zero-filled series by day/week/month, versions (top 8 + `other`),
  channels, referrers, visitor locales, ratings, version and game-build markers, totals and
  conversion (site downloads ÷ views). Live download data with the full legacy history (B1).
- `getCreatorAnalyticsCsv`: RFC 4180 + BOM, formula-injection safe (`csv.ts`); download rows per
  bucket/mod/version/channel plus view rows per bucket/mod (empty version and channel).
- `getCreatorInbox`: comments, bug reports, reviews and broken/partial field reports from others on
  my mods with `open`/`answered`/`resolved` state, cursor-paginated.

Scope: a creator sees their own mods; a single `modId` is also readable by moderators (403
otherwise, 404 when it does not exist).
