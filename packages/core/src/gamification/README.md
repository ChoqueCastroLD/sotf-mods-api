# Gamification domain (read side only)

The Classic redesign (docs/plan/CLASSIC.md) removed achievements, badges, XP, levels, streaks,
milestones and awards as features. This folder keeps only what other code still reads; nothing here
awards anything.

| Module | What |
|---|---|
| `catalog.ts` | Stored badge catalog (code to `"Badge"` rows), `badgeIds`. Kept so the read endpoints keep working. |
| `queries.ts` | `GET /badges`, `GET /users/:handle/badges` and `gamificationRefs` (tier/rank stored on `UserStats`, embedded in `UserRefDTO`). |
| `awards.ts` | `GET /awards/current` over the stored `"Award"` rows. |
| `onboarding.ts` | `GET/PATCH /me/onboarding` state; completion emits nothing and awards nothing. |

Removed with the feature (data stays in the database, nothing was dropped): the XP engine and its
event consumer (`gamification.xp`), the nightly evaluation (`gamification.evaluate`), download
milestones (`milestones.check`), the Mod of the Week job (`awards.mod-of-week`), badge awarding,
creator tier refresh, backfill B16, the admin writes for awards and manual badges (410), and the
Discord, signal and email side effects of awards, milestones and badges.

"Mods of the week" in the catalogue is a plain ranking by downloads of the week and does not use awards.
Notification types of these features are hidden by `notifications/visibility.ts`.
