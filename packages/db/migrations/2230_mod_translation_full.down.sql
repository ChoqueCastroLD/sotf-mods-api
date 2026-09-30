DELETE FROM "ModTranslation" WHERE "shortDescription" IS NULL;
UPDATE "ModTranslation" SET "sourceHash" = '' WHERE "sourceHash" IS NULL;

ALTER TABLE "ModTranslation"
  DROP CONSTRAINT IF EXISTS "ModTranslation_description_check",
  DROP CONSTRAINT IF EXISTS "ModTranslation_name_check",
  DROP CONSTRAINT IF EXISTS "ModTranslation_descriptionSource_check",
  DROP CONSTRAINT IF EXISTS "ModTranslation_nameSource_check",
  ALTER COLUMN "sourceHash" SET NOT NULL,
  ALTER COLUMN "shortDescription" SET NOT NULL,
  DROP COLUMN IF EXISTS "descriptionHash",
  DROP COLUMN IF EXISTS "descriptionSource",
  DROP COLUMN IF EXISTS "description",
  DROP COLUMN IF EXISTS "nameHash",
  DROP COLUMN IF EXISTS "nameSource",
  DROP COLUMN IF EXISTS "name";
