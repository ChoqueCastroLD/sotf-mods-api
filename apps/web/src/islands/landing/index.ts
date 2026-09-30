/**
 * Landing script (T0-05): small vanilla modules, no framework (the landing budget is ≤ 15 KB of
 * JS, shared with `lib/client/boot.ts`).
 *
 * - relative times of the cached HTML («2 h ago»);
 * - count-up of the hero stats (decorative, reduced-motion aware);
 * - hero search → Cmd+K (`sotf:cmdk-open`);
 * - live pulse polling (readout + pins);
 * - the personal block, as a lazy chunk, only with the `sotf_li` hint cookie.
 */
import { hasSignedInHint } from '../../scripts/account-hint.ts';
import { initCountUp } from './count-up.ts';
import { initHall } from './hall.ts';
import { initPulse } from './pulse.ts';
import { relativize } from './relative-time.ts';
import { initHeroSearch } from './search.ts';
import { initPicks } from './tabs.ts';

function safely(task: () => unknown): void {
  try {
    const result = task();
    if (result instanceof Promise) result.catch(() => {});
  } catch {
    // A landing enhancement must never break the page.
  }
}

let started = false;

export function initLanding(doc: Document = document): void {
  if (started) return;
  started = true;
  safely(() => relativize(doc));
  safely(() => initHeroSearch(doc));
  safely(() => initCountUp(doc));
  safely(() => initPulse(doc));
  safely(() => initPicks(doc));
  safely(() => initHall(doc));
  if (hasSignedInHint(doc.cookie)) {
    safely(() => import('./personal.ts').then(({ initPersonal }) => initPersonal(doc)));
  }
}
