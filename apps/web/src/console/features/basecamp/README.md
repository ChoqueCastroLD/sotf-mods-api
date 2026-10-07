# Basecamp (console, WP-80)

The creator area of PLAN §7.5 and research/03 §6.9 on the WP-40/WP-52 backend (`/api/v2/studio/*`).
Publishing (new mod, new build, new version, drafts) is `features/upload` (WP-74).

| Route | Screen | What |
|---|---|---|
| `/dashboard?range=&attention=&asort=&apage=&dismissed=` | `OverviewScreen` | Key figures strip (`KpiStrip`: downloads today / 7 d / 30 d, followers, to answer, waiting for review), downloads chart with release/patch markers, «Needs attention» (`AttentionPanel`: tabs by kind with counts, sort, server pages, dismiss), recent activity (`ActivityPanel`), busiest mods |
| `/dashboard/mods?status=&category=&q=&sort=&page=&size=` | `ModsScreen` | Every mod and build in any status; the server searches, filters, sorts and paginates (`GET /studio/mods`); table from `md` with sortable headings, cards on phones |
| `/dashboard/mods/$modId?tab=` | `editor/ModEditorScreen` | Listing, media, versions, compatibility, status, with the quality score and preflight rows |
| `/dashboard/analytics?mod=&range=&from=&to=` | `AnalyticsScreen` | Downloads (total/unique), views and conversion, followers, by version, by channel, referrers (grouped), visitor language, ratings, 7 d / 30 d / 90 d / all / custom date range, CSV of the same range |
| `/dashboard/inbox?type=&state=&mod=&sort=&page=&size=` | `InboxScreen` | Comments, bug reports and reviews with inline answers; type tabs with counts, waiting / everything, one mod, order, server pages |

## How it works

- **Data** (`api.ts`): every creator key lives under `['studio', 'mods', …]`, the prefix the console
  stream invalidates on `mod.updated`, so summary, table, editor and charts refresh by themselves.
  Only `import type` from `@sotf/contracts/*` (no Zod in these chunks); mirrored constants
  (`RANGES`, `INBOX_KINDS`, `CHANNELS`, `LIMITS`, tier thresholds) are checked against the types.
- **Charts** (`charts/`): `Charts.tsx` is the only module importing Recharts; screens use
  `charts/lazy.tsx`, so Recharts is a chunk of its own (prefetched when idle on the summary and the
  analytics screen). `charts/figures.tsx` wraps every chart in `ChartFigure` (title, legend with ≥ 2
  series, «View as table») and applies `chartTheme`: thin marks, hairline grid, round ticks, never two
  Y axes, release markers as hairlines with a mono label, game patches dashed in Solafite.
- **Needs attention** (`AttentionPanel.tsx`, `GET /studio/attention`): one row per kind and mod; the
  server groups (counts per kind), sorts (urgency, items, name) and paginates. Dismissed rows are
  saved on the account (`settings.dismissedAttention`, keys `kind:modId:count`, so a row returns when
  its count changes) and the server leaves them out; «Show dismissed» lists them to restore.
- **Recent activity** (`ActivityPanel.tsx`): the latest notifications about my mods arrive over SSE
  (the shell's `notification` event refetches `['notifications', 'list', …]`); a new one also
  refreshes the summary, the attention list and the inbox.
- **Pagination**: `components/ListPager.tsx` (numbered pages, «1–10 of 32», optional page size);
  filters and the page live in the route's search params, the API paginates (`page`, `pageSize`).
- **Editor** (`editor/`): the listing and compatibility forms send only the changed fields
  (`PATCH /studio/mods/:id`); media are reordered, described, removed or added without re-uploading
  the existing ones (`PUT /studio/mods/:id/media` with media ids parsed from `…/media/{uuid}/…`;
  legacy images not adopted yet stay locked in place); versions can be yanked with a reason or
  un-yanked and show the VirusTotal report and the rejection reason; the status tab runs the
  transitions the API allows (unlist, publish again, archive with a successor, resubmit, request
  removal). Panels stay mounted across tabs and leaving with unsaved edits asks first. The field
  components (Markdown editor, tag picker, support links, cover cropper, uploads) are the wizard's.
- **Inbox**: comment → reply in the thread; bug → reply or mark resolved in a version; review →
  public author reply. Field reports are no longer listed (the compatibility reports UI is gone).

## Messages

`packages/i18n/messages/basecamp/<locale>.json` (13 locales), read for the active locale only through
`i18n.ts` (`bt('basecamp_…')`), like the wizard: Paraglide's per-message functions would carry every
locale into the route chunks. Route loaders call `loadBasecampMessages()`; screens call
`useBasecampMessages()` so a locale switch suspends until the new catalogue arrives. The editor also
loads the wizard's `upload` catalogue (shared field components). Badge and tier names come from the
`profile` namespace (`components/profile/i18n.ts`).
