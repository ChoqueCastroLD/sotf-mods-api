-- sotf:no-transaction
--
-- Server events by kind over a time range: the RUM report (`web_vital`), live visitors
-- (`page_view`, last 5 min), the legacy usage report (`legacy_call`) and the VirusTotal quota
-- ledger (`virustotal_call`) (WP-52 backlog). The BRIN on "ts" alone scans every kind.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "AnalyticsEvent_kind_ts_idx" ON "AnalyticsEvent"("kind", "ts");
