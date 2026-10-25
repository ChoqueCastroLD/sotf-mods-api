-- Games and mod loaders (2270): mods for The Forest next to Sons of the Forest. Every existing mod is
-- Sons of the Forest + RedLoader: the column defaults fill them (that is the backfill).
ALTER TABLE "Mod"
  ADD COLUMN "game" text NOT NULL DEFAULT 'sotf',
  ADD COLUMN "modLoader" text NOT NULL DEFAULT 'redloader';
ALTER TABLE "Mod"
  ADD CONSTRAINT "Mod_game_check" CHECK ("game" IN ('sotf', 'the-forest')) NOT VALID,
  ADD CONSTRAINT "Mod_modLoader_check" CHECK ("modLoader" IN ('redloader', 'bepinex', 'melonloader', 'modapi', 'other')) NOT VALID;
