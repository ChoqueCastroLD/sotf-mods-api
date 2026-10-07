/**
 * Horizontal scrollers (tab strips, chip rows): the styling lives in `global.css` (no native
 * scrollbar, edge fade, snap). This script does the two things CSS cannot:
 *
 * - brings the current item (`aria-current`, `aria-selected`, `data-active`) into view when the
 *   page loads, so the selected status tab is not hidden off-screen;
 * - in browsers without scroll-driven animations, marks which edges have more content
 *   (`data-scroll-start`, `data-scroll-end`) so the fade still follows the scroll position.
 */
const SELECTOR =
  ':is(ul, ol, nav, fieldset, [role="tablist"])[class*="overflow-x-auto"]:not([data-scrollbar], [class*="scrollbar-width:thin"], [class*="snap-mandatory"]), [data-hscroll]';
const CURRENT = '[aria-current]:not([aria-current="false"]), [aria-selected="true"], [data-active]';

function revealCurrent(scroller: HTMLElement): void {
  if (scroller.scrollWidth <= scroller.clientWidth + 1) return;
  const current = scroller.querySelector<HTMLElement>(CURRENT);
  if (!current) return;
  const box = scroller.getBoundingClientRect();
  const item = current.getBoundingClientRect();
  const margin = 24;
  if (item.left >= box.left + margin && item.right <= box.right - margin) return;
  // Centre it by scrolling the strip only (scrollIntoView would also move the page).
  scroller.scrollTo({
    left: scroller.scrollLeft + (item.left + item.width / 2 - (box.left + box.width / 2)),
    behavior: 'instant',
  });
}

function track(scroller: HTMLElement): void {
  const update = () => {
    const max = scroller.scrollWidth - scroller.clientWidth;
    const position = Math.abs(scroller.scrollLeft);
    scroller.toggleAttribute('data-scroll-start', position > 1);
    scroller.toggleAttribute('data-scroll-end', max > 1 && position < max - 1);
  };
  update();
  scroller.addEventListener('scroll', update, { passive: true });
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(scroller);
}

export function initScrollers(root: ParentNode = document): void {
  const native = typeof CSS !== 'undefined' && CSS.supports('animation-timeline: scroll()');
  for (const scroller of root.querySelectorAll<HTMLElement>(SELECTOR)) {
    revealCurrent(scroller);
    if (!native) track(scroller);
  }
}
