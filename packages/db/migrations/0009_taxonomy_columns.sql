-- New columns on "Category" and "Tag" (PLAN §6.3, T0-06). Translations live in "i18n"
-- ({ "<locale>": { "name": "...", "description": "..." } }); "legacySlugs" lets old slugs such as
-- `qol` resolve to the category that replaced them.

ALTER TABLE "Category"
  ADD COLUMN "icon" text,
  ADD COLUMN "sortOrder" integer NOT NULL DEFAULT 0,
  ADD COLUMN "i18n" jsonb NOT NULL DEFAULT '{}',
  ADD COLUMN "legacySlugs" text[] NOT NULL DEFAULT '{}',
  ADD COLUMN "retiredAt" timestamp(3),
  ADD COLUMN "hubIntro" jsonb NOT NULL DEFAULT '{}';

ALTER TABLE "Tag"
  ADD COLUMN "group" text,
  ADD COLUMN "i18n" jsonb NOT NULL DEFAULT '{}',
  ADD COLUMN "isCurated" boolean NOT NULL DEFAULT true,
  ADD COLUMN "sortOrder" integer NOT NULL DEFAULT 0;
