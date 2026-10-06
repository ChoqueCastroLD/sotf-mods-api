# Signals bell island (WP-81)

The header bell for signed-in visitors of the public pages (PLAN §7.3, research/03 §6.12).

- `mount.ts` — tiny vanilla entry: waits for the session (`scripts/mod/session.ts`), creates the
  host in the header account slot and lazy-loads `render.tsx`. Guests never download React for it.
  Call `initSignalsBell()` from `lib/client/boot.ts` (docs/backlog/WP-81.md).
- `Bell.tsx` — live unread badge over SSE (`StreamClient` of the console, 60 s polling fallback,
  bfcache-safe), a panel with the 8 latest signals on ≥ md (a link to `/notifications` on phones),
  «Mark all as read», keep-alive «mark read» on open and the `notification_open` event.
- `describe.ts` + `SignalRow.tsx` — how a signal reads (sentence per type, glyph, tone, link,
  «Download» of a new version); shared with the console `/notifications` screen.
- `i18n.ts` — the `signals` namespace for one locale as a JSON chunk; `client.ts` — the three calls.
