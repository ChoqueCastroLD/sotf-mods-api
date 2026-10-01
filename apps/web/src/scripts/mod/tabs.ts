/**
 * The tab bar of the entity pages on phones is a segmented control inside a horizontal scroller:
 *
 * - the current segment is scrolled to the middle on load (the scroller only, never the page);
 * - swiping the page content sideways goes to the neighbouring page tab (Overview · Versions ·
 *   Reviews), like swiping between tabs in a native app. It only reacts to a clearly horizontal,
 *   quick swipe that did not start on something that scrolls or edits by itself (carousels,
 *   code blocks, tables, fields, the lightbox) nor at the very screen edges (system back gesture).
 *   Reduced motion changes nothing: a swipe is a navigation, not an animation.
 */

const PHONE = '(max-width: 47.99rem)';
const MIN_DISTANCE = 84;
const MAX_VERTICAL = 56;
const MAX_DURATION = 650;
const EDGE = 28;

function scrollsSideways(element: Element | null, boundary: Element): boolean {
  for (let node = element; node && node !== boundary; node = node.parentElement) {
    if (node.matches('[data-carousel], [data-no-tab-swipe], pre, table, input, textarea, select, canvas, dialog, [contenteditable], [role="slider"]')) {
      return true;
    }
    if (node instanceof HTMLElement && node.scrollWidth > node.clientWidth + 4) {
      const overflow = getComputedStyle(node).overflowX;
      if (overflow === 'auto' || overflow === 'scroll') return true;
    }
  }
  return false;
}

export function initTabs(root: HTMLElement, win: Window = window): void {
  const nav = root.querySelector<HTMLElement>('[data-mod-tabs]');
  if (!nav) return;
  const scroller = nav.querySelector<HTMLElement>('ul');
  const current = nav.querySelector<HTMLElement>('[aria-current="page"]');
  if (scroller && current && win.matchMedia(PHONE).matches) {
    const left = current.offsetLeft - (scroller.clientWidth - current.offsetWidth) / 2;
    scroller.scrollTo({ left: Math.max(0, left), behavior: 'auto' });
  }

  const pages = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[data-tab-page]'));
  const index = pages.findIndex((link) => link.getAttribute('aria-current') === 'page');
  if (index === -1 || pages.length < 2) return;
  const content = nav.parentElement;
  if (!content) return;

  let start: { x: number; y: number; t: number } | null = null;
  content.addEventListener(
    'touchstart',
    (event) => {
      start = null;
      if (event.touches.length !== 1 || !win.matchMedia(PHONE).matches) return;
      const touch = event.touches[0];
      if (!touch) return;
      if (touch.clientX < EDGE || touch.clientX > win.innerWidth - EDGE) return;
      if (scrollsSideways(event.target as Element, content)) return;
      start = { x: touch.clientX, y: touch.clientY, t: event.timeStamp };
    },
    { passive: true },
  );
  content.addEventListener(
    'touchend',
    (event) => {
      const begin = start;
      start = null;
      const touch = event.changedTouches[0];
      if (!begin || !touch || win.getSelection()?.toString()) return;
      const dx = touch.clientX - begin.x;
      const dy = touch.clientY - begin.y;
      if (Math.abs(dx) < MIN_DISTANCE || Math.abs(dy) > MAX_VERTICAL || Math.abs(dx) < Math.abs(dy) * 2.2) return;
      if (event.timeStamp - begin.t > MAX_DURATION) return;
      const rtl = win.document.documentElement.dir === 'rtl';
      // Dragging to the left reveals the next page (previous in right-to-left scripts).
      const step = (dx < 0) !== rtl ? 1 : -1;
      const next = pages[index + step];
      if (next) win.location.assign(next.href);
    },
    { passive: true },
  );
}
