/**
 * Legacy columns derived from v2 listing fields (PLAN §6.8): the legacy site and its API keep
 * reading `modSide`, `isMultiplayerCompatible`, `requiresAllPlayers`, `imageUrl` and the build
 * columns, so every v2 write keeps them coherent.
 *
 * - `platform` → `modSide`: Client → `client`, Server → `server`, Universal → `both` (the legacy
 *   publish form offered exactly these three values).
 * - `multiplayerRole` → `isMultiplayerCompatible` (any multiplayer role) and `requiresAllPlayers`
 *   (`all_players`). `unknown`/null leave both false, as the legacy default.
 */
import type { BlueprintSummary } from '@sotf/contracts/manifest';
import type { NewMod } from '@sotf/db';

export type PlatformValue = 'Client' | 'Server' | 'Universal';
export type MultiplayerRoleValue = 'singleplayer_only' | 'client_side' | 'host_only' | 'all_players' | 'unknown';

const MOD_SIDE: Record<PlatformValue, string> = { Client: 'client', Server: 'server', Universal: 'both' };

export function legacyModSide(platform: PlatformValue | null | undefined): string | null {
  return platform ? MOD_SIDE[platform] : null;
}

export function legacyMultiplayer(role: MultiplayerRoleValue | null | undefined): {
  isMultiplayerCompatible: boolean;
  requiresAllPlayers: boolean;
} {
  return {
    isMultiplayerCompatible: role === 'client_side' || role === 'host_only' || role === 'all_players',
    requiresAllPlayers: role === 'all_players',
  };
}

/** Legacy build columns of `"Mod"` from a blueprint. */
export function legacyBuildColumns(
  meta: Pick<BlueprintSummary, 'guid' | 'buildShareVersion' | 'numberOfElements'> | null,
): Pick<NewMod, 'buildGuid' | 'buildShareVersion' | 'numberOfElements'> {
  if (!meta) return {};
  return { buildGuid: meta.guid, buildShareVersion: meta.buildShareVersion, numberOfElements: meta.numberOfElements };
}
