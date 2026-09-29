-- sotf:no-transaction
--
-- Case-insensitive profile URLs (/profile/:handle).
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "User_lower_slug_idx" ON "User"(lower("slug"));
