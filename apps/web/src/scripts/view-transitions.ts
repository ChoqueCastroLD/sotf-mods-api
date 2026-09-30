/**
 * Cross-document View Transitions (PLAN §3.7, §8.8). The CSS opt-in (`@view-transition
 * { navigation: auto }`, reduced-motion aware) lives in the tokens; this script only names the
 * morphing element on both sides, so the card cover of a listing becomes the mod header cover:
 *
 * - on the old page (`pageswap`): the element `[data-vt-cover][data-vt-href="<target path>"]`
 *   gets `view-transition-name: mod-cover`;
 * - on the new page (`pagereveal`): `[data-vt-cover-target]` gets the same name when the
 *   navigation came from another page of the site; names are cleared once the transition ends.
 *
 * It also recovers from deploy skew: when a lazily imported chunk of the previous build is gone
 * (`vite:preloadError`), the page reloads once (PLAN §2.7).
 */

export const TRANSITION_NAME = 'mod-cover';
const RELOAD_KEY = 'sotf-preload-reload';

interface ViewTransitionLike {
  finished: Promise<unknown>;
}

interface PageSwapEvent extends Event {
  viewTransition: ViewTransitionLike | null;
  activation: { entry: { url: string } | null } | null;
}

interface PageRevealEvent extends Event {
  viewTransition: ViewTransitionLike | null;
}

function cssPath(url: string, base: string): string | null {
  try {
    const target = new URL(url, base);
    return target.origin === new URL(base).origin ? target.pathname : null;
  } catch {
    return null;
  }
}

function clearAfter(transition: ViewTransitionLike, element: HTMLElement): void {
  void transition.finished.finally(() => {
    element.style.viewTransitionName = '';
  });
}

export function initViewTransitions(win: Window = window): void {
  const doc = win.document;

  win.addEventListener('pageswap', (event) => {
    const swap = event as PageSwapEvent;
    if (!swap.viewTransition || !swap.activation?.entry) return;
    const path = cssPath(swap.activation.entry.url, doc.baseURI);
    if (!path) return;
    for (const element of doc.querySelectorAll<HTMLElement>('[data-vt-cover][data-vt-href]')) {
      if (element.dataset.vtHref === path) {
        element.style.viewTransitionName = TRANSITION_NAME;
        clearAfter(swap.viewTransition, element);
        break;
      }
    }
  });

  win.addEventListener('pagereveal', (event) => {
    const reveal = event as PageRevealEvent;
    if (!reveal.viewTransition) return;
    const target = doc.querySelector<HTMLElement>('[data-vt-cover-target]');
    if (!target) return;
    target.style.viewTransitionName = TRANSITION_NAME;
    clearAfter(reveal.viewTransition, target);
  });

  win.addEventListener('vite:preloadError', (event) => {
    let reloaded = false;
    try {
      reloaded = win.sessionStorage.getItem(RELOAD_KEY) === win.location.href;
      win.sessionStorage.setItem(RELOAD_KEY, win.location.href);
    } catch {
      reloaded = false;
    }
    if (reloaded) return;
    event.preventDefault();
    win.location.reload();
  });
}
