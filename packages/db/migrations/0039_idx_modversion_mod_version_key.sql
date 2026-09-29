-- sotf:no-transaction
-- sotf:precondition: NOT EXISTS (SELECT 1 FROM "ModVersion" WHERE "modId" IS NOT NULL GROUP BY "modId", "version" HAVING count(*) > 1)
--
-- Version integrity. Deferred while duplicated (modId, version) pairs exist (profile query Q-P6).
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS "ModVersion_modId_version_key" ON "ModVersion"("modId", "version");
