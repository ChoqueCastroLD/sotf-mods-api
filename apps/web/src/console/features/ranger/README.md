# Ranger Station (console, WP-82)

Moderation UI of PLAN §7.4 and research/03 §6.10 on the WP-51 backend (`/api/v2/ranger/*`).

| Route | Screen | What |
|---|---|---|
| `/moderation?lane=&item=&page=&sort=&risk=&age=&assignee=&escalated=&author=&q=` | `QueueScreen` | Lanes new mods, versions, post-review, builds, reports with live counts and SLA; server-side filters, sort (oldest first by default) and pages; list + item view; bulk take, release, mark reviewed (post-review) and publish (comments) |
| `/moderation/comments?item=` | `QueueScreen` (comments lane) | Held comments: publish or hide with a reason |
| `/moderation/reports?status=&reason=&targetType=&q=&sort=&page=` | `ReportsScreen` | Reports: filters, sort, pages; resolve (optionally hiding the content) or dismiss |
| `/moderation/users?q=&role=&status=&verified=&sort=&page=&size=` | `UsersScreen` | User search with filters, sort and pages |
| `/moderation/users/$userId` | `UserScreen` | Account, activity, sanctions (create/revoke), verified creator flag, role (admins), sign out everywhere |
| `/moderation/audit?actor=&action=&target=&q=&from=&to=&sort=&page=&size=` | `AuditScreen` | Immutable audit log: filters, date range, sort, pages, before/after |

- **Item view** (`ItemView`, `ItemPanels`): automated checks + security scan (VirusTotal link, verdict
  override when the API exposes the scan id), tabs files diff · manifest diff · description ·
  media · changelog · author history, decision bar.
- **Shortcuts** (listed in the `?` dialog): `j`/`k` next/previous item (across pages), `x` select the open item, `a` approve (resolve on
  reports), `c` request changes, `r` reject (dismiss on reports). Off while a dialog is open or
  when the user disabled shortcuts.
- **Reasons**: `reject`, `request_changes` and `remove` need a template of that action and/or a
  note (`DecisionDialog`). Built-in templates are translated in `ranger_template_*`; admins read the
  saved `SiteSetting.moderationTemplates` (custom wording per locale).
- **Live**: every query is keyed under `['moderation', …]`; the console stream invalidates that
  prefix on `moderation.queue` events, so lanes, counts and open items refresh by themselves.
- **Sessions**: a valid session is enough, there is no re-authentication for moderation or admin
  actions (the API only re-reads the account's role and suspension).
- **Phones**: triage only (list → item with approve/reject); the diffs need `md`+. List and item
  sit side by side from `lg`.
- Only `import type` from `@sotf/contracts/*` (no Zod in the route chunks); enum labels come from
  one switch per enum in `labels.ts`.

Messages: `packages/i18n/messages/ranger/<locale>.json` (13 locales).

- **List controls** (`controls.tsx`): `FilterBar`, `FilterSelect`, `SortSelect`, `SearchField`, `PageNav` and `useListSearch` (merges into the URL, resets the page on a filter change). Admin and jam screens use them too. Search params are parsed in `search.ts` (no Zod in route chunks).
