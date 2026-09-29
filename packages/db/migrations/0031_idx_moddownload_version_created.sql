-- sotf:no-transaction
--
-- Per-version download series and rollups over the raw table.
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "ModDownload_modVersionId_createdAt_idx" ON "ModDownload"("modVersionId", "createdAt");
