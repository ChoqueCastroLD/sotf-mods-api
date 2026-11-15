-- Modpack config files (2283): one validated zip of mod settings per modpack (paths relative to the
-- game folder, text config files only), stored content-addressed in the public bucket and linked
-- from the .sotfprofile so SotF Mods Manager can unpack it. All NULL while a modpack has none.
ALTER TABLE "Kit"
  ADD COLUMN "configKey" text,
  ADD COLUMN "configSha256" text,
  ADD COLUMN "configBytes" integer,
  ADD COLUMN "configFiles" jsonb,
  ADD COLUMN "configUpdatedAt" timestamp(3) with time zone;
