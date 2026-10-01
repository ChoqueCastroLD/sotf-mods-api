/**
 * Page chrome behaviour (research/03 §5.4). A passive, rAF-throttled scroll listener writes
 * `<html data-scroll-dir="up|down">`; CSS slides the phone top bar and the tab bar away while
 * scrolling down and brings them back on the first upward flick (transform only, no layout).
 *
 * - Near the top of the page and at the very bottom (where iOS rubber-bands) the chrome stays;
 * - small jitters under {@link SCROLL_THRESHOLD_PX} are ignored;
 * - taps on the tab bar (and anything marked `data-haptic`) give a tiny vibration where the
 *   platform has one (`haptics.ts`).
 */
import { haptic } from './haptics.ts';

export const SCROLL_THRESHOLD_PX = 12;
/** Below this scroll offset the chrome never hides. */
export const HIDE_AFTER_PX = 64;

export type ScrollDir = 'up' | 'down';

/** Pure decision, exported for tests. `null` means «keep what it was». */
export function nextScrollDir(input: { y: number; last: number; viewport: number; height: number }): ScrollDir | null {
  const { y, last, viewport, height } = input;
  if (y < 0) return null; // iOS top rubber band
  if (y + viewport >= height - 2) return 'up'; // bottom: leave the chrome reachable
  if (Math.abs(y - last) < SCROLL_THRESHOLD_PX) return null;
  return y > last && y > HIDE_AFTER_PX ? 'down' : 'up';
}

export function initChrome(win: Window = window): () => void {
  const doc = win.document;
  const root = doc.documentElement;
  let last = win.scrollY;
  let scheduled = false;
  const update = () => {
    scheduled = false;
    const y = win.scrollY;
    const next = nextScrollDir({ y, last, viewport: win.innerHeight, height: root.scrollHeight });
    if (next === null) return;
    if (root.dataset.scrollDir !== next) root.dataset.scrollDir = next;
    last = y;
  };
  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    win.requestAnimationFrame(update);
  };
  win.addEventListener('scroll', onScroll, { passive: true });

  const onPointerDown = (event: PointerEvent) => {
    if (event.pointerType !== 'touch') return;
    if ((event.target as Element | null)?.closest('[data-tab-bar] a, [data-haptic]'))
      haptic('tick', win.navigator, win);
  };
  doc.addEventListener('pointerdown', onPointerDown, { passive: true });

  // Back/forward restores the page mid-scroll: start from the truth, with the chrome showing.
  const onShow = () => {
    last = win.scrollY;
    delete root.dataset.scrollDir;
  };
  win.addEventListener('pageshow', onShow);
  return () => {
    win.removeEventListener('scroll', onScroll);
    doc.removeEventListener('pointerdown', onPointerDown);
    win.removeEventListener('pageshow', onShow);
  };
}
