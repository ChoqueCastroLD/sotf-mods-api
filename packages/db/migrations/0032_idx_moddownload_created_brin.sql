-- sotf:no-transaction
--
-- Append-only ~2M rows: a BRIN index covers time-range scans for a few KB.
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "ModDownload_createdAt_brin" ON "ModDownload" USING brin ("createdAt");
