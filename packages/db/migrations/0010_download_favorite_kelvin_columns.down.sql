ALTER TABLE "KelvinGPTMessages" DROP COLUMN IF EXISTS "isHashed";

ALTER TABLE "ModFavorite" DROP COLUMN IF EXISTS "notify";

ALTER TABLE "ModDownload"
  DROP CONSTRAINT IF EXISTS "ModDownload_source_check",
  DROP CONSTRAINT IF EXISTS "ModDownload_userId_fkey";

ALTER TABLE "ModDownload"
  DROP COLUMN IF EXISTS "ipHash",
  DROP COLUMN IF EXISTS "country",
  DROP COLUMN IF EXISTS "source",
  DROP COLUMN IF EXISTS "userId",
  DROP COLUMN IF EXISTS "isUnique";
