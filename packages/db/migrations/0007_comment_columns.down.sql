ALTER TABLE "Comment"
  DROP CONSTRAINT IF EXISTS "Comment_status_check",
  DROP CONSTRAINT IF EXISTS "Comment_deletedById_fkey",
  DROP CONSTRAINT IF EXISTS "Comment_pinnedById_fkey",
  DROP CONSTRAINT IF EXISTS "Comment_modVersionId_fkey",
  DROP CONSTRAINT IF EXISTS "Comment_bugResolvedInVersionId_fkey";

ALTER TABLE "Comment"
  DROP COLUMN IF EXISTS "bodyMd",
  DROP COLUMN IF EXISTS "bodyHtml",
  DROP COLUMN IF EXISTS "status",
  DROP COLUMN IF EXISTS "hiddenReason",
  DROP COLUMN IF EXISTS "editedAt",
  DROP COLUMN IF EXISTS "deletedAt",
  DROP COLUMN IF EXISTS "pinnedAt",
  DROP COLUMN IF EXISTS "deletedById",
  DROP COLUMN IF EXISTS "pinnedById",
  DROP COLUMN IF EXISTS "isBugReport",
  DROP COLUMN IF EXISTS "isSolution",
  DROP COLUMN IF EXISTS "modVersionId",
  DROP COLUMN IF EXISTS "bugResolvedInVersionId",
  DROP COLUMN IF EXISTS "reactionsCount",
  DROP COLUMN IF EXISTS "repliesCount",
  DROP COLUMN IF EXISTS "ipHash";
