-- sotf:no-transaction
--
-- KelvinSeek conversation history.
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "KelvinGPTMessages_chatId_createdAt_idx" ON "KelvinGPTMessages"("chatId", "createdAt");
