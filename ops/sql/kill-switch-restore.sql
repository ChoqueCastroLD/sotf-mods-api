-- Recreates the v2 sync triggers dropped by ops/sql/kill-switch.sql (same definitions as
-- migrations/0020_functions_triggers.sql; a test keeps them identical). Rows written while the
-- triggers were off are NOT re-synced: run the status backfill (B12) afterwards if needed.
--
--   psql "$OWNER_DATABASE_URL" -v ON_ERROR_STOP=1 -f ops/sql/kill-switch-restore.sql

BEGIN;
SET LOCAL lock_timeout = '3s';

DROP TRIGGER IF EXISTS "trg_user_email_normalized" ON "User";
CREATE TRIGGER "trg_user_email_normalized"
  BEFORE INSERT OR UPDATE OF "email" ON "User"
  FOR EACH ROW EXECUTE FUNCTION public.sotf_user_email_normalized();

DROP TRIGGER IF EXISTS "trg_mod_status_sync" ON "Mod";
CREATE TRIGGER "trg_mod_status_sync"
  BEFORE INSERT OR UPDATE OF "status", "isApproved" ON "Mod"
  FOR EACH ROW EXECUTE FUNCTION public.sotf_mod_status_sync();

DROP TRIGGER IF EXISTS "trg_comment_status_sync" ON "Comment";
CREATE TRIGGER "trg_comment_status_sync"
  BEFORE INSERT OR UPDATE OF "status", "isHidden" ON "Comment"
  FOR EACH ROW EXECUTE FUNCTION public.sotf_comment_status_sync();

DROP TRIGGER IF EXISTS "trg_review_status_sync" ON "ModReview";
CREATE TRIGGER "trg_review_status_sync"
  BEFORE INSERT OR UPDATE OF "status", "isHidden" ON "ModReview"
  FOR EACH ROW EXECUTE FUNCTION public.sotf_review_status_sync();

DROP TRIGGER IF EXISTS "trg_modversion_semver" ON "ModVersion";
CREATE TRIGGER "trg_modversion_semver"
  BEFORE INSERT OR UPDATE OF "version" ON "ModVersion"
  FOR EACH ROW EXECUTE FUNCTION public.sotf_modversion_semver();

COMMIT;
