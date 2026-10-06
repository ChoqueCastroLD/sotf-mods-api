# Signals (WP-43)

Import from `@sotf/core/notifications/index`. PLAN §7.3, §5.3, §6.9 (B18).

| File | What |
|---|---|
| `rules.ts` | `planForEvent(db, event)`: domain event → drafts (who, type, target, `groupKey`, data), retractions (deleted/hidden comments and reviews) and the announcement broadcast |
| `service.ts` | `applyNotificationPlan` / `createNotifications` / `writeNotificationDrafts(tx, …)`: preferences, grouping (unread, 7 days), idempotency (`data.keys`), SSE notice on commit, instant-email flush (`notifications.digest {10m}` per 30-second window, deterministic job id) |
| `preferences.ts` | type × channel matrix with the defaults of `NOTIFICATION_DEFAULTS` (rows equal to the defaults are deleted); `forcedEmail` (a removed mod is always mailed) |
| `queries.ts` | `/notifications` cursor feed with filters, unread count, mark as read |
| `digest.ts` | `sendSignalEmails(deps, 'instant' \| 'daily' \| 'weekly')`: pending signals (`emailedAt IS NULL`) → one "EmailOutbox" row per user, delivered after commit |
| `email.ts` | `notify.*` templates and payload schemas, `deliverNotificationEmail` (same claim/retry semantics as `email.send`, `Idempotency-Key: outbox-<id>`, RFC 8058 headers), `retryPendingNotificationEmails` |
| `unsubscribe.ts` | signed one-click tokens (`type:<type>` or `cadence:<cadence>`), `applyUnsubscribeToken` |
| `legacy-mentions.ts` | B18: `PendingMention` → signals, deleted in the same transaction (only with `LEGACY_COEXIST=false`) |
| `creator-weekly.ts` | Monday report: downloads (with trend), followers, comments, reviews and highlights of the previous week |

Rules: never notify the actor; deleted/banned accounts get nothing; notification emails need a
verified address (except B18 legacy rows, as the legacy cron did); NSFW content only reaches users
who opted in. Row data never holds translated text: emails and the web render it per locale.
