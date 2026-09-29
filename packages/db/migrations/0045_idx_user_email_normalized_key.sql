-- sotf:no-transaction
-- sotf:precondition: NOT EXISTS (SELECT 1 FROM "User" WHERE "emailNormalized" IS NULL) AND NOT EXISTS (SELECT 1 FROM "User" GROUP BY "emailNormalized" HAVING count(*) > 1)
--
-- Case-insensitive login and uniqueness. Deferred until backfill B6 has filled every row and no
-- collision is left (PLAN §6.5, §6.9 B6: collisions are resolved by hand with the owner).
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS "User_emailNormalized_key" ON "User"("emailNormalized") WHERE "emailNormalized" IS NOT NULL;
