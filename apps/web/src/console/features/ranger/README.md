# Ranger Station (console, WP-82)

Moderation UI of PLAN §7.4 and research/03 §6.10 on the WP-51 backend (`/api/v2/ranger/*`).

| Route | Screen | What |
|---|---|---|
| `/moderation?lane=&item=` | `QueueScreen` | Lanes new mods, versions, post-review, builds, reports with live counts and SLA; list + item view |
| `/moderation/comments?item=` | `QueueScreen` (comments lane) | Held comments: publish or hide with a reason |
| `/moderation/reports?status=` | `ReportsScreen` | Reports: resolve (optionally hiding the content) or dismiss |
| `/moderation/users?q=&page=` | `UsersScreen` | User search |
| `/moderation/users/$userId` | `UserScreen` | Account, activity, sanctions (create/revoke), verified creator flag, role (admins), sign out everywhere |
| `/moderation/audit?actor=&action=&target=` | `AuditScreen` | Immutable audit log with filters and before/after |

- **Item view** (`ItemView`, `ItemPanels`): automated checks + security scan (VirusTotal link, verdict
  override when the API exposes the scan id), tabs files diff · manifest diff · description ·
  media · changelog · author history, decision bar.
- **Shortcuts** (listed in the `?` dialog): `j`/`k` next/previous item, `a` approve (resolve on
  reports), `c` request changes, `r` reject (dismiss on reports). Off while a dialog is open or
  when the user disabled shortcuts.
- **Reasons**: `reject`, `request_changes` and `remove` need a template of that action and/or a
  note (`DecisionDialog`). Built-in templates are translated in `ranger_template_*`; admins read the
  saved `SiteSetting.moderationTemplates` (custom wording per locale).
- **Live**: every query is keyed under `['moderation', …]`; the console stream invalidates that
  prefix on `moderation.queue` events, so lanes, counts and open items refresh by themselves.
- **Re-authentication**: a `REAUTH_REQUIRED` answer (session older than 12 h) shows «Confirm it's
  you» (`ReauthPanel` / toast action) which signs out and returns here after signing in.
- **Phones**: triage only (list → item with approve/reject); the diffs need `md`+. List and item
  sit side by side from `lg`.
- Only `import type` from `@sotf/contracts/*` (no Zod in the route chunks); enum labels come from
  one switch per enum in `labels.ts`.

Messages: `packages/i18n/messages/ranger/<locale>.json` (13 locales).
