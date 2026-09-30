-- sotf:no-transaction
--
-- Signals still waiting for their e-mail: the 10-minute digest scans them by "createdAt"
-- (WP-43 backlog). Partial, so it stays small as "Notification" grows.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "Notification_unemailed_idx" ON "Notification"("createdAt") WHERE "emailedAt" IS NULL;
