-- Full translation of a mod listing (extends 2180): besides the short description, the mod NAME and
-- the full DESCRIPTION (Markdown) are translated into the 12 non-English locales. Every field has
-- its own provenance ("...Source": 'machine' | 'author') and its own hash of the original it was
-- made from ("...Hash"), so an edit of one field retranslates only that field and an author's text
-- for one field is never overwritten by the job. The pre-existing "source"/"sourceHash" columns keep
-- describing "shortDescription". A row may now hold any subset of the three fields (the others are
-- NULL: not translated yet, or empty in the original).

ALTER TABLE "ModTranslation"
  ADD COLUMN "name" text,
  ADD COLUMN "nameSource" text,
  ADD COLUMN "nameHash" text,
  ADD COLUMN "description" text,
  ADD COLUMN "descriptionSource" text,
  ADD COLUMN "descriptionHash" text,
  ALTER COLUMN "shortDescription" DROP NOT NULL,
  ALTER COLUMN "sourceHash" DROP NOT NULL,
  ADD CONSTRAINT "ModTranslation_nameSource_check" CHECK ("nameSource" IS NULL OR "nameSource" IN ('machine', 'author')),
  ADD CONSTRAINT "ModTranslation_descriptionSource_check" CHECK ("descriptionSource" IS NULL OR "descriptionSource" IN ('machine', 'author')),
  ADD CONSTRAINT "ModTranslation_name_check" CHECK ("name" IS NULL OR length("name") BETWEEN 1 AND 300),
  ADD CONSTRAINT "ModTranslation_description_check" CHECK ("description" IS NULL OR length("description") BETWEEN 1 AND 200000);
