-- sotf:no-transaction
--
-- Followers of a mod (Backpack, version signals).
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "ModFavorite_modId_idx" ON "ModFavorite"("modId");
