-- Extensions and the immutable unaccent wrapper used by search (PLAN §6.6, §7.9).
-- pg_trgm and unaccent are trusted extensions in PostgreSQL 16: the database owner can create them.

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;

CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;

-- unaccent() is only STABLE (it reads a dictionary); pinning the dictionary makes the result
-- depend on the input alone, so the wrapper can be IMMUTABLE and used in the generated
-- "Mod"."searchVector" column and in expression indexes. The SQL-standard body binds its
-- dependencies at creation time, so it survives dump/restore regardless of search_path.
CREATE FUNCTION public.sotf_unaccent(text) RETURNS text
  LANGUAGE sql IMMUTABLE PARALLEL SAFE STRICT
  RETURN public.unaccent('public.unaccent'::regdictionary, $1);
