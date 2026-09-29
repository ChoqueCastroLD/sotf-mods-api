/**
 * Page chrome behaviour: the mobile tab bar hides while scrolling down and comes back when
 * scrolling up (research/03 §5.4). A passive, rAF-throttled listener writes
 * `<html data-scroll-dir="up|down">`; CSS does the rest (transform only).
 */

export const SCROLL_THRESHOLD_PX = 12;

export function initChrome(win: Window = window): () => void {
  const root = win.document.documentElement;
  let last = win.scrollY;
  let scheduled = false;
  const update = () => {
    scheduled = false;
    const y = win.scrollY;
    if (Math.abs(y - last) < SCROLL_THRESHOLD_PX) return;
    root.dataset.scrollDir = y > last && y > 64 ? 'down' : 'up';
    last = y;
  };
  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    win.requestAnimationFrame(update);
  };
  win.addEventListener('scroll', onScroll, { passive: true });
  return () => win.removeEventListener('scroll', onScroll);
}
