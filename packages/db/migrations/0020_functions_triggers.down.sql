DROP TRIGGER IF EXISTS "trg_modversion_semver" ON "ModVersion";
DROP TRIGGER IF EXISTS "trg_review_status_sync" ON "ModReview";
DROP TRIGGER IF EXISTS "trg_comment_status_sync" ON "Comment";
DROP TRIGGER IF EXISTS "trg_mod_status_sync" ON "Mod";
DROP TRIGGER IF EXISTS "trg_user_email_normalized" ON "User";

DROP FUNCTION IF EXISTS public.sotf_modversion_semver();
DROP FUNCTION IF EXISTS public.sotf_review_status_sync();
DROP FUNCTION IF EXISTS public.sotf_comment_status_sync();
DROP FUNCTION IF EXISTS public.sotf_mod_status_sync();
DROP FUNCTION IF EXISTS public.sotf_user_email_normalized();
