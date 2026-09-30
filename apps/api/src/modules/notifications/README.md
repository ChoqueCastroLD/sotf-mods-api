# Notifications API (WP-43)

`GET /api/v2/notifications` (cursor feed, filters `all|mentions|updates|my_mods|ranger`),
`GET /api/v2/notifications/unread-count`, `POST /api/v2/notifications/read` (`{ids}` or `{all:true}`),
`GET|PUT /api/v2/notification-preferences`. The one-click unsubscribe lives in `../unsubscribe/`.
Services: `@sotf/core/notifications/index`. Realtime: the SSE hub (`plugins/sse.ts`).
