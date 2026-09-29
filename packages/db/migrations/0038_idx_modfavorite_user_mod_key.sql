-- sotf:no-transaction
-- sotf:precondition: NOT EXISTS (SELECT 1 FROM "ModFavorite" WHERE "userId" IS NOT NULL AND "modId" IS NOT NULL GROUP BY "userId", "modId" HAVING count(*) > 1)
--
-- One follow per user and mod. Deferred until backfill B5 has archived the duplicates.
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS "ModFavorite_userId_modId_key" ON "ModFavorite"("userId", "modId");
