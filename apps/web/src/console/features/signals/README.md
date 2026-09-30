# Signals (`/signals`, WP-81)

`SignalsScreen` lists every signal (`GET /notifications`, cursor pages) grouped by day, with the
filters of PLAN §4.3 (`?filter=mentions|updates|my_mods|ranger`), «Mark all as read», per-row
«Mark as read» and a link to the notification settings. Keys live under `['notifications', 'list',
filter]`, so the shell's SSE `notification` event refetches them; marking read updates the shared
unread count (`setUnreadCount`).

Rows and sentences are shared with the header bell: `islands/signals/SignalRow.tsx` and
`islands/signals/describe.ts`, with the `signals` namespace loaded for one locale
(`islands/signals/i18n.ts`, `signalsMessagesQuery`).
