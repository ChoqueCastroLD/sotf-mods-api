-- sotf:no-transaction
--
-- Full-text search (PLAN §7.9).
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "Mod_searchVector_idx" ON "Mod" USING gin ("searchVector");
