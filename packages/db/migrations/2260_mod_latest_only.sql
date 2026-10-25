-- "Latest version only" (2260): an opt-in per mod. When true, only the latest version can be
-- downloaded; older versions stay listed (changelog history) but their downloads answer 410.
ALTER TABLE "Mod" ADD COLUMN "latestVersionOnly" boolean NOT NULL DEFAULT false;
