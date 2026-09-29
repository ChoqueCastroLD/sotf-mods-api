-- sotf:no-transaction
--
-- Typo-tolerant name search and Cmd+K.
-- One CONCURRENTLY statement per file (PLAN §6.1 rule 8, §6.5); a failed build leaves an INVALID
-- index that the runner drops and rebuilds on the next run.

CREATE INDEX CONCURRENTLY IF NOT EXISTS "Mod_name_trgm_idx" ON "Mod" USING gin (lower(public.sotf_unaccent("name")) public.gin_trgm_ops);
