# Compatibility jobs (WP-50)

- `compat.aggregate` — weighted aggregate of one version × build (`@sotf/core/compat`), emits
  `compat.aggregate_changed`, syncs `Mod.compatStatus` / `Mod.possiblyOutdated`. Enqueued by the
  field-report writes and by `setAuthorTestedBuilds` (publishing), debounced 30 s per payload.
- `compat.mod-status` — subscriber of `version.published`, `version.status_changed` and
  `mod.status_changed`: recomputes the mod-level status when the latest version changes.

Registry writes (new current / breaking build) recompute every mod synchronously in the admin
transaction (`refreshModsCompat(tx, now, 'all')`), so no job is needed for them.
