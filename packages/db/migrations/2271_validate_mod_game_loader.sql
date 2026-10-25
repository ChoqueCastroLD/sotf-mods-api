-- Validates the CHECK constraints added NOT VALID by 2270 (the defaults made every row valid).
ALTER TABLE "Mod" VALIDATE CONSTRAINT "Mod_game_check";
ALTER TABLE "Mod" VALIDATE CONSTRAINT "Mod_modLoader_check";
