# Realtime notices (WP-43)

Import from `@sotf/core/realtime/index`. Publishers of the SSE events of PLAN §5.3, always inside
the writer's transaction (`NOTIFY events` is delivered on commit):

- `publishNotificationNotice` → `notification` on `user:{id}` (SSE id `<notificationId>.<groupCount>`);
- `publishModUpdated` → `mod.updated` on the owner's channel (`modUpdatedNoticeFor(event)` maps events);
- `publishModerationQueue` → `moderation.queue` on `moderation` (for the moderation services).

The hub, the stream route and `Last-Event-ID` replay live in `apps/api/src/plugins/sse.ts` (WP-20).
