-- Kill switch of the v2 sync triggers (PLAN §6.6). Drops every trigger of
-- migrations/0020_functions_triggers.sql WITHOUT touching data: legacy writes then behave exactly
-- as before v2 (only the v2 columns stop being kept in sync). The trigger functions stay, so
-- ops/sql/kill-switch-restore.sql can recreate the triggers later.
--
--   psql "$OWNER_DATABASE_URL" -v ON_ERROR_STOP=1 -f ops/sql/kill-switch.sql
--
-- Run by the owner (the user), never by an agent against production. Idempotent.

BEGIN;
SET LOCAL lock_timeout = '3s';

DROP TRIGGER IF EXISTS "trg_user_email_normalized" ON "User";
DROP TRIGGER IF EXISTS "trg_mod_status_sync" ON "Mod";
DROP TRIGGER IF EXISTS "trg_comment_status_sync" ON "Comment";
DROP TRIGGER IF EXISTS "trg_review_status_sync" ON "ModReview";
DROP TRIGGER IF EXISTS "trg_modversion_semver" ON "ModVersion";

COMMIT;
