-- sotf:no-transaction
--
-- Comments of a profile.
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "Comment_userId_idx" ON "Comment"("userId");
