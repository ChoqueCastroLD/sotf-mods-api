/**
 * Games and mod loaders (owner decision 2026-10): the site hosts mods for Sons of the Forest and
 * for The Forest (the first game). Every mod declares its game and the mod loader it is made for.
 *
 * - Existing mods are Sons of the Forest + RedLoader (the column defaults, migration 2270).
 * - Only `sotf` + `redloader` uploads go through the RedLoader checks (zip with a `manifest.json`,
 *   allowed extensions, manifest id and semver rules). Every other combination is a free upload:
 *   any file, security checks only (archive bombs, path traversal, executables held for review,
 *   the virus scan), and the creator types the version number.
 * - RedManager and the legacy API only ever see `sotf` + `redloader` mods.
 */
import { z } from 'zod';

export const MOD_GAMES = ['sotf', 'the-forest'] as const;
export const ModGame = z.enum(MOD_GAMES);
export type ModGame = z.infer<typeof ModGame>;

export const MOD_LOADERS = ['redloader', 'bepinex', 'melonloader', 'modapi', 'other'] as const;
export const ModLoader = z.enum(MOD_LOADERS);
export type ModLoader = z.infer<typeof ModLoader>;

/** Loaders offered per game (the wizard's choices). */
export const LOADERS_BY_GAME: Readonly<Record<ModGame, readonly ModLoader[]>> = {
  sotf: ['redloader', 'bepinex', 'melonloader', 'other'],
  'the-forest': ['modapi', 'bepinex', 'melonloader', 'other'],
};

/** Upload checks profile: `redloader` = the RedLoader rules; `free` = security checks only. */
export const UPLOAD_PROFILES = ['redloader', 'free'] as const;
export const UploadProfile = z.enum(UPLOAD_PROFILES);
export type UploadProfile = z.infer<typeof UploadProfile>;

export function uploadProfileOf(game: ModGame, loader: ModLoader): UploadProfile {
  return game === 'sotf' && loader === 'redloader' ? 'redloader' : 'free';
}

/** Display names (game titles are not translated). */
export const GAME_NAMES: Readonly<Record<ModGame, string>> = {
  sotf: 'Sons of the Forest',
  'the-forest': 'The Forest',
};
export const LOADER_NAMES: Readonly<Record<Exclude<ModLoader, 'other'>, string>> = {
  redloader: 'RedLoader',
  bepinex: 'BepInEx',
  melonloader: 'MelonLoader',
  modapi: 'ModAPI',
};

/** Version typed by the creator for free uploads (no manifest): short, no spaces. */
export const FreeVersion = z
  .string()
  .trim()
  .min(1)
  .max(40)
  .regex(/^[0-9A-Za-z][0-9A-Za-z._+-]*$/, 'Use letters, numbers, dots and dashes (e.g. 1.0.0)');
