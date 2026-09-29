ALTER TABLE "ModReview"
  DROP CONSTRAINT IF EXISTS "ModReview_status_check",
  DROP CONSTRAINT IF EXISTS "ModReview_modVersionId_fkey";

ALTER TABLE "ModReview"
  DROP COLUMN IF EXISTS "bodyMd",
  DROP COLUMN IF EXISTS "bodyHtml",
  DROP COLUMN IF EXISTS "status",
  DROP COLUMN IF EXISTS "modVersionId",
  DROP COLUMN IF EXISTS "isVerifiedDownload",
  DROP COLUMN IF EXISTS "helpfulCount",
  DROP COLUMN IF EXISTS "unhelpfulCount",
  DROP COLUMN IF EXISTS "authorReplyMd",
  DROP COLUMN IF EXISTS "authorReplyHtml",
  DROP COLUMN IF EXISTS "authorRepliedAt",
  DROP COLUMN IF EXISTS "editedAt",
  DROP COLUMN IF EXISTS "deletedAt";
