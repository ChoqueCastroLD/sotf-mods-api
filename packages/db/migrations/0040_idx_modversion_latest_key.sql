-- sotf:no-transaction
-- sotf:precondition: NOT EXISTS (SELECT 1 FROM "ModVersion" WHERE "isLatest" AND "modId" IS NOT NULL GROUP BY "modId" HAVING count(*) > 1)
--
-- At most one latest version per mod. Deferred while a mod has two latest versions.
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS "ModVersion_modId_latest_key" ON "ModVersion"("modId") WHERE "isLatest";
