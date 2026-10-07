/**
 * "Where it works" rules of a listing: platform, multiplayer role, dedicated server and
 * "removable without breaking saves". One pure module shared by the publishing wizard, the mod
 * editor and the API, so the stored combination is always coherent.
 *
 * - **Platform = Server**: the mod runs on the host or dedicated server only. Players do not need
 *   it, so "single player only", "client side" and "everyone needs it" make no sense, and the
 *   dedicated server answer is implied (yes).
 * - **Platform = Client**: the mod runs in the player's game, never on a dedicated server (implied
 *   no).
 * - **Single player only** and **client side**: nothing runs on a server, so the dedicated server
 *   answer is implied (no).
 * - Anything else (Universal, or no platform yet): the dedicated server question is open.
 *
 * Precedence: platform first, then the multiplayer role, then the dedicated server.
 */
import { type DEDICATED_SERVER, MULTIPLAYER_ROLES, type PLATFORMS, type SAFE_TO_REMOVE } from './common.ts';

export type WherePlatform = (typeof PLATFORMS)[number];
export type WhereRole = (typeof MULTIPLAYER_ROLES)[number];
export type WhereDedicated = (typeof DEDICATED_SERVER)[number];
export type WhereSafeToRemove = (typeof SAFE_TO_REMOVE)[number];

export interface WhereAnswers {
  platform: WherePlatform | null;
  multiplayerRole: WhereRole | null;
  dedicatedServer: WhereDedicated | null;
  safeToRemove: WhereSafeToRemove | null;
}

/** Multiplayer roles that make sense for `platform` (all of them when no platform is chosen). */
export function allowedRoles(platform: WherePlatform | null | undefined): readonly WhereRole[] {
  if (platform === 'Server') return ['host_only', 'unknown'];
  return MULTIPLAYER_ROLES;
}

/**
 * The dedicated server answer implied by the other answers, or `null` when the question is open.
 * `reason` tells which answer implies it (for the explanatory note in the forms).
 */
export function impliedDedicated(
  platform: WherePlatform | null | undefined,
  role: WhereRole | null | undefined,
): { value: WhereDedicated; reason: 'server' | 'client' | 'singleplayer' | 'client_side' } | null {
  if (platform === 'Server') return { value: 'yes', reason: 'server' };
  if (platform === 'Client') return { value: 'no', reason: 'client' };
  if (role === 'singleplayer_only') return { value: 'no', reason: 'singleplayer' };
  if (role === 'client_side') return { value: 'no', reason: 'client_side' };
  return null;
}

/**
 * Makes a combination of answers coherent. Contradicting answers are replaced (the platform wins
 * over the multiplayer role); implied answers are filled in; open answers stay as given.
 */
export function normalizeWhere<T extends Partial<WhereAnswers>>(input: T): T {
  const out: T = { ...input };
  const platform = out.platform ?? null;
  if (platform === 'Server' && (out.multiplayerRole == null || !allowedRoles(platform).includes(out.multiplayerRole))) {
    out.multiplayerRole = 'host_only' as T['multiplayerRole'];
  }
  const implied = impliedDedicated(platform, out.multiplayerRole ?? null);
  if (implied) out.dedicatedServer = implied.value as T['dedicatedServer'];
  return out;
}

/** Whether the three "where it works" fields are among the given keys (a partial update). */
export function touchesWhere(keys: Iterable<string>): boolean {
  const set = new Set(keys);
  return set.has('platform') || set.has('multiplayerRole') || set.has('dedicatedServer');
}

/**
 * Applies one change of the creator to the answers and keeps them coherent: implied answers are
 * filled in, a multiplayer answer the new platform rules out is replaced (`roleReplaced`, so the
 * form can say so), and a dedicated server answer that was implied and no longer is goes back to
 * unanswered instead of staying as if the creator had chosen it. The same goes for «Host only»
 * when it came from the Server platform and the creator leaves that platform.
 */
export function changeWhere(
  current: WhereAnswers,
  patch: Partial<WhereAnswers>,
): { answers: WhereAnswers; roleReplaced: boolean } {
  const merged: WhereAnswers = { ...current, ...patch };
  const before = impliedDedicated(current.platform, current.multiplayerRole);
  const answers = normalizeWhere(merged);
  const roleReplaced = merged.multiplayerRole !== null && answers.multiplayerRole !== merged.multiplayerRole;
  // «Host only» was implied by the Server platform: do not keep it as the creator's own answer.
  if (
    current.platform === 'Server' &&
    answers.platform !== 'Server' &&
    patch.multiplayerRole === undefined &&
    answers.multiplayerRole === 'host_only'
  ) {
    answers.multiplayerRole = null;
  }
  if (!impliedDedicated(answers.platform, answers.multiplayerRole) && before && patch.dedicatedServer === undefined) {
    answers.dedicatedServer = null;
  }
  return { answers, roleReplaced };
}
