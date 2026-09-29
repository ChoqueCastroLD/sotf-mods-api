-- Sync triggers between legacy and v2 columns (PLAN §6.6). They never RAISE and never touch
-- another row: they only fill NEW. ops/sql/kill-switch.sql drops them without touching data.
-- Timestamps written into legacy timestamp(3) columns are UTC wall-clock values, like Prisma's.

-- "User"."emailNormalized" = lower(trim(email)); login and uniqueness use it (PLAN §6.10).
CREATE FUNCTION public.sotf_user_email_normalized() RETURNS trigger
  LANGUAGE plpgsql
  AS $$
BEGIN
  NEW."emailNormalized" := lower(btrim(NEW."email"));
  RETURN NEW;
END;
$$;

CREATE TRIGGER "trg_user_email_normalized"
  BEFORE INSERT OR UPDATE OF "email" ON "User"
  FOR EACH ROW EXECUTE FUNCTION public.sotf_user_email_normalized();

-- "Mod"."status" <-> legacy "isApproved" (PLAN §6.6, §6.8).
--   INSERT: legacy INSERTs never name "status", so it arrives with its default 'pending' and the
--           legacy flag decides (approved -> 'published'). Otherwise the status drives the flag.
--   UPDATE: a status change (v2) drives "isApproved"; a flag change alone (legacy approve or
--           unapprove) moves the status to 'published' or 'pending'.
-- "statusChangedAt" is stamped on every transition (unless the writer set it) and "publishedAt"
-- the first time a mod becomes 'published'.
CREATE FUNCTION public.sotf_mod_status_sync() RETURNS trigger
  LANGUAGE plpgsql
  AS $$
DECLARE
  changed boolean := false;
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW."status" = 'pending' AND NEW."isApproved" THEN
      NEW."status" := 'published';
    ELSE
      NEW."isApproved" := (NEW."status" = 'published');
    END IF;
    changed := true;
  ELSIF NEW."status" IS DISTINCT FROM OLD."status" THEN
    NEW."isApproved" := (NEW."status" = 'published');
    changed := true;
  ELSIF NEW."isApproved" IS DISTINCT FROM OLD."isApproved" THEN
    NEW."status" := CASE WHEN NEW."isApproved" THEN 'published' ELSE 'pending' END;
    changed := NEW."status" IS DISTINCT FROM OLD."status";
  END IF;

  IF changed THEN
    IF TG_OP = 'INSERT' THEN
      NEW."statusChangedAt" := coalesce(NEW."statusChangedAt", now() AT TIME ZONE 'UTC');
    ELSIF NEW."statusChangedAt" IS NOT DISTINCT FROM OLD."statusChangedAt" THEN
      NEW."statusChangedAt" := now() AT TIME ZONE 'UTC';
    END IF;
    IF NEW."status" = 'published' AND NEW."publishedAt" IS NULL THEN
      NEW."publishedAt" := NEW."statusChangedAt";
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER "trg_mod_status_sync"
  BEFORE INSERT OR UPDATE OF "status", "isApproved" ON "Mod"
  FOR EACH ROW EXECUTE FUNCTION public.sotf_mod_status_sync();

-- "Comment"."status" <-> legacy "isHidden": hidden = status IN ('hidden', 'deleted', 'pending').
CREATE FUNCTION public.sotf_comment_status_sync() RETURNS trigger
  LANGUAGE plpgsql
  AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW."status" = 'visible' AND NEW."isHidden" THEN
      NEW."status" := 'hidden';
    ELSE
      NEW."isHidden" := NEW."status" IN ('hidden', 'deleted', 'pending');
    END IF;
  ELSIF NEW."status" IS DISTINCT FROM OLD."status" THEN
    NEW."isHidden" := NEW."status" IN ('hidden', 'deleted', 'pending');
  ELSIF NEW."isHidden" IS DISTINCT FROM OLD."isHidden" THEN
    NEW."status" := CASE WHEN NEW."isHidden" THEN 'hidden' ELSE 'visible' END;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER "trg_comment_status_sync"
  BEFORE INSERT OR UPDATE OF "status", "isHidden" ON "Comment"
  FOR EACH ROW EXECUTE FUNCTION public.sotf_comment_status_sync();

-- "ModReview"."status" <-> legacy "isHidden": hidden = status <> 'visible'. The legacy column
-- defaults to true, so an INSERT that names neither column yields a hidden review, as before.
CREATE FUNCTION public.sotf_review_status_sync() RETURNS trigger
  LANGUAGE plpgsql
  AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW."status" = 'visible' AND NEW."isHidden" THEN
      NEW."status" := 'hidden';
    ELSE
      NEW."isHidden" := NEW."status" <> 'visible';
    END IF;
  ELSIF NEW."status" IS DISTINCT FROM OLD."status" THEN
    NEW."isHidden" := NEW."status" <> 'visible';
  ELSIF NEW."isHidden" IS DISTINCT FROM OLD."isHidden" THEN
    NEW."status" := CASE WHEN NEW."isHidden" THEN 'hidden' ELSE 'visible' END;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER "trg_review_status_sync"
  BEFORE INSERT OR UPDATE OF "status", "isHidden" ON "ModReview"
  FOR EACH ROW EXECUTE FUNCTION public.sotf_review_status_sync();

-- "ModVersion" semver columns from "version" (T0-04). Builds (UUIDv7 versions) and anything that
-- does not start with MAJOR.MINOR.PATCH stay NULL. Components are capped at 9 digits so the
-- integer cast can never fail.
CREATE FUNCTION public.sotf_modversion_semver() RETURNS trigger
  LANGUAGE plpgsql
  AS $$
DECLARE
  m text[];
BEGIN
  m := regexp_match(NEW."version", '^v?([0-9]{1,9})\.([0-9]{1,9})\.([0-9]{1,9})(?:-([0-9A-Za-z.-]+))?');
  IF m IS NULL THEN
    NEW."semverMajor" := NULL;
    NEW."semverMinor" := NULL;
    NEW."semverPatch" := NULL;
    NEW."semverPre" := NULL;
  ELSE
    NEW."semverMajor" := m[1]::integer;
    NEW."semverMinor" := m[2]::integer;
    NEW."semverPatch" := m[3]::integer;
    NEW."semverPre" := m[4];
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER "trg_modversion_semver"
  BEFORE INSERT OR UPDATE OF "version" ON "ModVersion"
  FOR EACH ROW EXECUTE FUNCTION public.sotf_modversion_semver();
