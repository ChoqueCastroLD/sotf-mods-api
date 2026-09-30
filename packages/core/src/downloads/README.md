# Downloads (`@sotf/core/downloads/index`, WP-31)

Direct downloads and honest counting (PLAN §2.8 "Descarga", T0-02, T0-17).

- **Resolution** (`resolveDownload`, cached up to 60 s per target in the `downloads.resolve` LRU,
  invalidated by `mod:{id}`): by slug (the canonical resolver of `../resolve`, no intermediate 301),
  by manifest `mod_id` (legacy alias) or by version id. `latest`/`undefined` → the `isLatest`
  version. Mod `removed` or a tombstoned path → 410; `rejected` → 404; unknown → 404; version
  `file_missing` or with no R2 key → 410; `rejected`, or `pending` without passed checks → 404.
  Location = `R2_PUBLIC_BASE_URL/<key encoded per segment>`; keys missing `storageKey` are derived
  from the legacy `downloadUrl`.
- **What counts** (`countDecision`): GET only, no `Range` or `bytes=0-`, no prefetch
  (`Sec-Purpose`/`Purpose`), no declared bot (`isbot`; an empty UA counts; RedManager,
  UpdatesChecker and RedLoader always count), not over 60/min per IP (the platform's soft
  `downloads` bucket: the 302 is still sent).
- **Channel** (`downloadSource`): `redmanager` (UA), `client` (no UA: mod managers and the in-game
  checker, like the legacy `ip='undefined'` rows), `web` (site route) or `api` (aliases).
- **User**: the session of the v2 alias, or for the site route the session cookie the web forwards
  (resolved in the internal endpoint), links the download to "My downloads".
- **Buffer** (`DownloadCounter`): events flushed every 2 s and on shutdown in one transaction —
  `DownloadUnique` (`ON CONFLICT DO NOTHING` decides `isUnique`), one multi-row `INSERT` into
  `ModDownload` (`ip` = ipHash, daily salt; never the IP in clear), `ModVersionDownloadDaily` upsert,
  `ModVersion.downloadsCount/uniqueDownloadsCount` and `Mod.downloads` with raw SQL (legacy
  `updatedAt` untouched). Failed flushes keep the events (bounded) and retry.
- **My downloads** (`getDownloadHistory`, `clearDownloadHistory`): one row per mod (last version
  vs current, `hasUpdate`, compatibility on the current build, count). `settings.downloadHistory =
  false` stops recording the user id. Clearing sets `ModDownload.userId` to NULL (the downloads keep
  counting). Cards come from `cards.ts` until the catalog's card builder exists.
- **Retention** (`pruneDownloadUnique`, daily `cleanup.download-unique`): today and yesterday only.

Tests: `classify.test.ts` (unit); `apps/api/src/modules/downloads/*.int.test.ts` (encoding,
counting rules, aggregates, 404/410, history, the web route over HTTP, SIGTERM flush);
`pnpm load downloads` (p95 budget, see `tooling/load/downloads.ts`).
