-- sotf:no-transaction
--
-- Root comments of a mod, newest first.
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "Comment_modId_root_createdAt_idx" ON "Comment"("modId", "createdAt" DESC) WHERE "replyId" IS NULL;
