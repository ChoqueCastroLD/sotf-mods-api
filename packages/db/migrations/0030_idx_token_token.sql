-- sotf:no-transaction
--
-- Speeds up the legacy auth lookup (a sequential scan of "Token" on every request) while both apps coexist.
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "Token_token_idx" ON "Token"("token");
