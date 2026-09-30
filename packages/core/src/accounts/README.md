# Accounts (WP-30)

Import from `@sotf/core/accounts/index`.

| File | What |
|---|---|
| `me.ts` | `GET /me` (`permissions` from `can()`), `/me/summary`, `/me/home` (base: updates count, «Day 1» checklist from real activity; card providers optional), settings and privacy with defaults |
| `export.ts` · `export-storage.ts` | Data export: one per 24 h, ZIP of JSON files (no secrets) in the private bucket, presigned link emailed (24 h), expiry sweep |
| `deletion.ts` | Deletion with a 14-day grace period; the sweep anonymizes the account (comments/reviews stay as «Deleted survivor»), deletes personal data and archives or keeps the mods |
| `trust-level.ts` | Nightly `trustLevel` 0–3 (T0-22) |
| `cleanup.ts` | Retention: sessions (+30 d), tokens, `AuthEvent` (90 d), final outbox rows (90 d), exports |

Jobs live in `apps/worker/src/jobs/accounts` (`account.export`, `account.delete`,
`accounts.trust-level`, `cleanup.sessions`) and `apps/worker/src/jobs/email` (`email.send`).
