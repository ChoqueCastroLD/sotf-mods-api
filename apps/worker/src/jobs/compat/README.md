# Compatibility jobs (WP-50)

- `compat.aggregate` — weighted aggregate of one version × build (`@sotf/core/compat`), emits
  `compat.aggregate_changed`, syncs `Mod.compatStatus` / `Mod.possiblyOutdated`. Enqueued by the
  field-report writes and by `setAuthorTestedBuilds` (publishing), debounced 30 s per payload.
- `compat.uptime-probe` — every 5 minutes (`*/5 * * * *`): `runUptimeProbe` of `@sotf/core/compat` samples the web
  (`/healthz`), the API (`/api/v2/game-builds`), the media bucket (HEAD) and the database, inserts one
  `CompatUptimeSample` per component and deletes samples older than 100 days. Read by `GET /compat/uptime`
  and the uptime series of `/patch-radar`. No credentials.
- `compat.mod-status` — subscriber of `version.published`, `version.status_changed` and
  `mod.status_changed`: recomputes the mod-level status when the latest version changes.

Registry writes (new current / breaking build) recompute every mod synchronously in the admin
transaction (`refreshModsCompat(tx, now, 'all')`), so no job is needed for them.

Nightly reconciliation (`compat.reconcile` queue, `reconcileCompat` of `@sotf/core`): report weights follow the reporters' `trustLevel` /
`verifiedCreator`, and reports of banned or deleted accounts stop counting, but none of those
changes emits an event. At 03:20 UTC, after `accounts.trust-level` (03:15), the worker schedules
`compat.aggregate` for every version whose stored aggregate no longer matches (weight or count
drift) and refreshes `Mod.compatStatus` / `Mod.possiblyOutdated` of every mod (time-dependent).
