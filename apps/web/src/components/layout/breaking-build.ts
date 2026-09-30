/**
 * The current game build when it is a breaking one released recently (PLAN §7.10: «Build
 * `isBreaking` nueva → banner global → `/patch-radar`»). Read by `SiteBanners.astro` on every
 * public page, so the list of game builds is memoized for a minute and fetched with a short
 * budget: a slow or unavailable API simply means no banner.
 */
import type { GameBuildDTO } from '@sotf/contracts/compat';
import { optional, serverApi } from '../../lib/api.ts';

/** The banner shows for this many days after the breaking build's release. */
export const BREAKING_BANNER_DAYS = 14;
const MEMO_MS = 60_000;
const BUDGET_MS = 400;
const DAY_MS = 86_400_000;

let memo: { at: number; builds: readonly GameBuildDTO[] } | null = null;
let inflight: Promise<readonly GameBuildDTO[] | null> | null = null;

async function gameBuilds(now: number): Promise<readonly GameBuildDTO[] | null> {
  if (memo && now - memo.at < MEMO_MS) return memo.builds;
  inflight ??= optional(
    (signal) =>
      serverApi()
        .compat.gameBuilds(undefined, { signal })
        .then((list) => list.items),
    BUDGET_MS,
  ).finally(() => {
    inflight = null;
  });
  const builds = await inflight;
  // A failure keeps the previous answer (stale is fine for a banner) and retries after MEMO_MS.
  memo = { at: now, builds: builds ?? memo?.builds ?? [] };
  return memo.builds;
}

/** Pure rule (exported for tests): the current breaking build within the window, or null. */
export function breakingFrom(builds: readonly GameBuildDTO[], now: number): GameBuildDTO | null {
  const current = builds.find((build) => build.isCurrent);
  if (!current?.isBreaking) return null;
  const released = Date.parse(current.releasedAt);
  if (Number.isNaN(released)) return null;
  const age = now - released;
  return age >= 0 && age <= BREAKING_BANNER_DAYS * DAY_MS ? current : null;
}

export async function breakingBuild(now: number = Date.now()): Promise<GameBuildDTO | null> {
  const builds = await gameBuilds(now);
  return builds ? breakingFrom(builds, now) : null;
}
