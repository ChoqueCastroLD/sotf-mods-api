# Gamification domain (WP-60)

PLAN §7.2 (and T0-23, T0-33). Served by `apps/api/src/modules/{badges,awards,onboarding}` and run by
`apps/worker/src/jobs/gamification`; the UI is WP-64 (`/achievements`, profiles) and WP-81
(Basecamp, signals). Import from `@sotf/core/gamification/index`.

| Module | What |
|---|---|
| `catalog.ts` | Badge catalog sync (code → `"Badge"`, retired keys keep their rows), criteria, `badgeIds`. |
| `xp.ts` | XP engine: `grantXp` (unique per reference, daily caps per UTC day, per-user advisory lock), `revokeXp`, restorations, `User.xp` + `UserStats.survivorRank` recomputed from the rows. |
| `abuse.ts` | No votes or Field reports between accounts that shared an `ipHash` in the last 24 h (sessions and the auth log). |
| `consumers.ts` | Domain-event consumer: every XP rule of §7.2, onboarding steps, then the per-user badge evaluation. |
| `badges.ts` | One set-based SQL rule per badge (per user, nightly and B16), awarding (featured while < 6), reconciliation of state badges (roles, awards), manual `translator`. |
| `tiers.ts` | Creator tier from lifetime downloads (daily series with the legacy history, or the legacy counter, whichever is larger). |
| `milestones.ts` | Download milestones with retroactive `reachedAt`; one celebration (`milestone.reached`) per mod and run. |
| `awards.ts` | Mod of the Week (formula and filters of §7.2) and `GET /awards/current`. Admin awards are WP-51 (`core/admin/awards.ts`). |
| `onboarding.ts` | «Day 1» checklist: derived steps, self-reported RedLoader step, dismissal, completion event, browser time zone. |
| `evaluate.ts` | Per-user evaluation and the nightly reconciliation (consensus after 72 h, kit followers, patch-day releases, pending onboardings, every badge, tiers, ranks). |
| `queries.ts` | `GET /badges`, `GET /users/:handle/badges` (field notebook with progress) and `gamificationRefs` (tier/rank for `UserRefDTO`). |
| `jobs.ts` | Entry points of `gamification.evaluate`, `milestones.check` and `awards.mod-of-week`. |
| `b16.ts` | Backfill B16 (retroactive XP, silent badges and milestones, tiers, first Mod of the Week, one welcome signal per user). |

Rules worth knowing:

- **Nothing is announced before the launch.** Until B16 has run (a finished `"MigrationRun"`
  `backfill:B16`), badge awards and milestones are recorded silently; B16 itself is silent and sends
  one «Welcome to v2: you earned N badges» signal per user (`badge.awarded`, `data.welcome = true`,
  `data.badgeCount`). The start of the first B16 run is the launch instant of the
  `original-survivor-<year>` badges.
- **XP is auditable and reversible**: `XpEvent` rows are never deleted; revocation sets
  `revokedAt` (review shortened/hidden/deleted, vote withdrawn, comment unmarked/hidden) and the
  same reference is restored when the reason comes back (it already counted in its day's cap).
  No XP for actions on your own content; downloads never give XP.
- **Caps** count every row of the kind created on the action's UTC day (revoked ones too).
- **Badges are permanent** except `verified-creator`, `ranger`, `mod-of-the-week` and
  `staff-pick`, which follow the current role/award rows (reconciled per user and nightly).
- **Night owl** uses the IANA zone the client sends in the `Sotf-Time-Zone` header of
  `GET/PATCH /me/onboarding` (stored in `User.onboarding.timeZone`; UTC otherwise).
- **B16** is idempotent (every write is `ON CONFLICT DO NOTHING` or state-checked); `dryRun`
  rolls the whole transaction back and returns the counts. Run it after B1/B11.
