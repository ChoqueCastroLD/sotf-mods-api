# Trending (`@sotf/core/trending/index`, WP-52)

`trendingScore = uniqueDownloads7d × clamp((d7 + 10) / (prev7 + 10), 0.5, 3)` (PLAN §7.2).

- `recomputeTrending(exec, today)`: one set-based `UPDATE "Mod" SET "trendingScore"` for every
  mod from `ModVersionDownloadDaily` (last 14 UTC days); only changed rows are written, the legacy
  `updatedAt` is untouched.
- Legacy version-days (B1 history, no unique tracking) contribute their raw downloads so the
  ranking is meaningful from the first day after the cut-over.
- `runTrending(ctx)`: the `stats.trending` job (hourly at :15), evicts `stats`, `list:mods`,
  `list:builds` and `home` from the API LRUs when something changed.
- Consumers: `GET /mods?sort=trending` (catalog snapshot), Mod of the Week (WP-60).
