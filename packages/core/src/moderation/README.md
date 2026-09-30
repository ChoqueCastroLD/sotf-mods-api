# Ranger Station, reports, sanctions, audit and admin (WP-51)

Backend of PLAN §7.4 (T0-21, T0-28), endpoints of §5.2 "Moderación y administración". Import each
domain by path (`@sotf/core/moderation/index`, `…/reports/index`, `…/sanctions/index`,
`…/audit/index`, `…/security-scan/index`, `…/admin/index`, `…/announcements/index`,
`…/settings/index`).

| Domain | What |
|---|---|
| `moderation/guard.ts` | `assertStaff(ctx, action)`: account re-read, `assertCan`, session < 12 h (`REAUTH_REQUIRED`); `assertOutranks` (staff act only below their role, never on themselves) |
| `moderation/lanes.ts` | lanes `new_mods`, `versions`, `post_review`, `builds`, `reports`, `comments` sorted by risk then age; counts; `publishLaneCounts` → SSE `moderation.queue` |
| `moderation/item.ts` | item view: inspection, file diff (added/removed/changed with size and CRC), manifest diff, scan, description, changelog, gallery, author history, allowed actions |
| `moderation/decisions.ts` | decisions on mods and versions (`MOD_STATUS_TRANSITIONS` of the contracts), held files published from `quarantine/`, tombstones on removal, author signals |
| `moderation/content.ts` | hide/unhide comments and reviews (wraps the comments/reviews domains + audit) |
| `reports/` | `POST /reports`, auto-hide (≥ 3 reporters with trust ≥ 1), resolve/dismiss (closes every open report of the target, restores what reports hid) |
| `sanctions/` | user search and card, sanctions (suspend, ban, comment/upload mute), roles, verified creator flag, revoke sessions |
| `audit/` | `recordAudit(tx, ctx, entry)` (the shared utility, inside the write's transaction) and the audit feed |
| `security-scan/` | VirusTotal client (streamed uploads), quota throttle (4/min, 500/day, ledger in `AnalyticsEvent` kind `virustotal_call`), the `security.scan` job and the ranger override |
| `admin/` | categories, tags, bulk recategorisation (keyword rules), awards, KelvinSeek usage, RUM |
| `announcements/` | public active banner + admin CRUD |
| `settings/` | `SiteSetting` read/write validated by `SITE_SETTING_SCHEMAS`, moderation reason templates |

## Lanes

- `new_mods`: `Mod.status = 'pending'` (legacy unapproved mods included, untouched — PLAN §14.1).
- `versions`: held versions (`pending`) of listed mods (flagged files, security holds, report holds).
- `post_review`: versions published without a human look in the last 30 days (publisher not
  staff) with no `version.post_review_approve|approve|reject|remove` audit entry. SLA 72 h.
- `builds`: the same for builds (pending build mods, held and post-review build versions).
- `reports`: open reports. `comments`: comments held as `pending`.

The "reviewed" state of the post-review lanes is the audit log itself: approving an active version
writes `version.post_review_approve`.

## Security scan policy

0 detections → `clean`; 1–2 → `suspicious` (held unless the author is a verified creator or
staff); ≥ 3 → `malicious` (held for everyone). No API key → `unknown` (held for non-verified
authors). Holding = `active` → `pending` with `SCAN_HOLD_REASON`; a ranger's `false_positive`
override releases a scan hold, `malicious` pulls the version. Builds are not scanned.

## Audit

`AuditLog` is insert-only for the application role (`ops/sql/roles.sql`). Action names are
dotted verbs (`mod.approve`, `version.post_review_approve`, `report.auto_hide`, `sanction.create`,
`user.role`, `setting.update`, `category.retire`, `award.replace`, `scan.override`…).
