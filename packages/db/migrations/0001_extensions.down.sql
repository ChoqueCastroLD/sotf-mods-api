-- The extensions are left installed on purpose: they may pre-date v2 and nothing legacy depends
-- on them being absent. Only the v2 wrapper function is removed.
DROP FUNCTION IF EXISTS public.sotf_unaccent(text);
