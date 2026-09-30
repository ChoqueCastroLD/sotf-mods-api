/**
 * Ad placements of the public site (PLAN §8.5). Pure helpers shared by the server components that
 * render `AdSlot`; the client side lives in `scripts/ads.ts`.
 */
import type { AdSlots, WebEnv } from './env.ts';

export type AdPlacement = keyof AdSlots;

export interface AdUnit {
  /** Publisher id (`ca-pub-…`). */
  client: string;
  /** Ad unit id. */
  slot: string;
}

/** The unit of a placement, or null when ads are off (no publisher id) or the unit is not configured. */
export function adUnitFor(env: Pick<WebEnv, 'adsenseClient' | 'adSlots'>, placement: AdPlacement): AdUnit | null {
  const client = env.adsenseClient;
  const slot = env.adSlots[placement];
  return client && slot ? { client, slot } : null;
}

/** Positions of the in-feed units in an Explore grid: after the 6th and the 18th card (PLAN §8.5). */
export const FEED_AD_AFTER = [6, 18] as const;

/** Whether an in-feed unit follows the card at `position` (1-based) on a list of `count` cards. */
export function feedAdAfter(position: number, count: number): boolean {
  // Never after the last card: the unit would end the list and sit next to the pager.
  return (FEED_AD_AFTER as readonly number[]).includes(position) && position < count;
}
