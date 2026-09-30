# `@sotf/core/compat` — Compatibility and Patch Radar (WP-50, PLAN §7.10)

| File | What |
|---|---|
| `rules.ts` | Pure rules: reporter weights (author 2, verified creator 1.5, trust level 0 → 0.5, else 1), weighted aggregate (`< 3` weighted → `untested`, `≥ 70 %` works → `works`, `≥ 50 %` broken → `broken`, else `mixed`), "possibly outdated", build ordering. |
| `aggregate.ts` | `aggregateCompat` (the `compat.aggregate` job), `refreshModsCompat` / `refreshModCompat` (`Mod.compatStatus`, `Mod.possiblyOutdated`, `Mod.compatUpdatedAt`), `setAuthorTestedBuilds` (publishing flow). |
| `registry.ts` | Game builds, loader releases and ecosystem: public reads + admin writes (👑, session < 12 h, `AuditLog`). |
| `reports.ts` | Field reports: create-or-update, edit, delete, author acknowledgement ("fixed in vX"). |
| `read.ts` | `GET /mods/:id/compat`, `GET /patch-radar`, `GET /me/compat-prompts`. |
| `shared.ts` | DTO mappers, user refs, admin guard, audit row. |

## Rules worth knowing

- **One vote per person.** A user may file one report per mode; their weight is split evenly
  between their reports for a version × build. Counts shown in the UI are raw report counts.
- **Author declaration.** "Tested on build X" (`ModVersionCompat.authorTested`, set by
  `setAuthorTestedBuilds` when publishing) counts as a "works" vote of weight 2 unless the author
  also filed reports for that build (which then replace it).
- **Weights are live.** The aggregate recomputes each reporter's weight from their current flags and
  writes it back to `CompatReport.weight`. Hidden reports (`status <> 'visible'`) and deleted or
  banned reporters are ignored.
- **Mod status.** `Mod.compatStatus` = status of the latest public version on the current build.
  `possiblyOutdated` = the latest version is older than the latest `isBreaking` build and has no
  positive signal (a "works" report or the author's declaration) on that build or a later one.
  BuildShare builds are never outdated. Only v2 columns are written (raw SQL, legacy `updatedAt`
  untouched).
- **Registry writes** recompute every mod in the same transaction and purge `compat`, `home`,
  `list:mods` and the changed mods. A build created as (or flipped to) `isBreaking` emits
  `game_build.created` (creator signals are deduplicated per build).
- **Events.** `compat.report_created` (first report only), `compat.report_acknowledged`,
  `compat.aggregate_changed` (status moved), `game_build.created`.
- **Prompts.** "Did it work?" lists versions downloaded with the session since the current build
  was released (≤ 30 days), not yet reported on the current build, excluding own mods; disabled by
  `User.settings.compatPrompts = false`.
