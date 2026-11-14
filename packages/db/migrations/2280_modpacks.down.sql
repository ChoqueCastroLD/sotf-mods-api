ALTER TABLE "Kit"
  DROP CONSTRAINT IF EXISTS "Kit_approvalStatus_check",
  DROP CONSTRAINT IF EXISTS "Kit_downloads_check",
  DROP COLUMN IF EXISTS "downloads",
  DROP COLUMN IF EXISTS "approvalStatus";
