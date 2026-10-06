# Basecamp (console, WP-80)

The creator area of PLAN §7.5 and research/03 §6.9 on the WP-40/WP-52 backend (`/api/v2/studio/*`).
Publishing (new mod, new build, new version, drafts) is `features/upload` (WP-74).

| Route | Screen | What |
|---|---|---|
| `/dashboard?range=` | `OverviewScreen` | Greeting + «Day N», KPIs (sparkline + delta), downloads chart with release/patch markers, «Needs attention», «Live», «My mods», next milestone and tier |
| `/dashboard/mods?status=&q=&sort=` | `ModsScreen` | Every mod and build in any status; filter, search, sort; table from `md`, cards on phones |
| `/dashboard/mods/$modId?tab=` | `editor/ModEditorScreen` | Listing, media, versions, compatibility, status — with the quality score and preflight rows |
| `/dashboard/analytics?mod=&range=` | `AnalyticsScreen` | Downloads (total/unique), views and conversion, followers, by version, by channel, referrers (grouped), visitor language, ratings, compatibility by build, CSV |
| `/dashboard/inbox?type=&state=` | `InboxScreen` | Comments, bug reports, reviews and field reports with inline answers |
| `/dashboard/badges` | `BadgesScreen` | Creator tier, next milestone, locked badges with progress, earned badges |

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
- **Live** (`LivePanel.tsx`): signals about my mods arrive over SSE (the shell's `notification` event
  refetches `['notifications', 'list', 'my_mods']`); downloads have no stream event, so the live
  counters of the five busiest published mods are polled every minute while the tab is visible and
  each increase becomes a «● 2 downloads · Auto Pickup» entry. A new signal also refreshes the
  summary and the inbox.
- **Editor** (`editor/`): the listing and compatibility forms send only the changed fields
  (`PATCH /studio/mods/:id`); media are reordered, described, removed or added without re-uploading
  the existing ones (`PUT /studio/mods/:id/media` with media ids parsed from `…/media/{uuid}/…`;
  legacy images not adopted yet stay locked in place); versions can be yanked with a reason or
  un-yanked and show the VirusTotal report and the rejection reason; the status tab runs the
  transitions the API allows (unlist, publish again, archive with a successor, resubmit, request
  removal). Panels stay mounted across tabs and leaving with unsaved edits asks first. The field
  components (Markdown editor, tag picker, support links, cover cropper, uploads) are the wizard's.
- **Inbox**: comment → reply in the thread; bug → reply or mark resolved in a version; review →
  public author reply; field report → acknowledge or mark fixed in a version.

## Messages

`packages/i18n/messages/basecamp/<locale>.json` (13 locales), read for the active locale only through
`i18n.ts` (`bt('basecamp_…')`), like the wizard: Paraglide's per-message functions would carry every
locale into the route chunks. Route loaders call `loadBasecampMessages()`; screens call
`useBasecampMessages()` so a locale switch suspends until the new catalogue arrives. The editor also
loads the wizard's `upload` catalogue (shared field components). Badge and tier names come from the
`profile` namespace (`components/profile/i18n.ts`).
