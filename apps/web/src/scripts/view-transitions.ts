/**
 * Cross-document View Transitions (PLAN §3.7, §8.8). The CSS opt-in (`@view-transition
 * { navigation: auto }`, reduced-motion aware) lives in the tokens; this script only names the
 * morphing element on both sides, so the card cover of a listing becomes the mod header cover:
 *
 * One naming scheme, the one of `ModCard` (`@sotf/ui/domain`): the card cover carries
 * `view-transition-name: mod-cover-{id}` inline, so listings need no script. The mod header marks
 * its cover with `data-vt-cover-target="{id}"`:
 *
 * - on the new page (`pagereveal`): the header cover gets `mod-cover-{id}` and morphs from the
 *   card that was clicked;
 * - on the old page (`pageswap`): the header cover gets the same name, so going back to a listing
 *   morphs it into the card; any other element marked `[data-vt-cover][data-vt-href="<target
 *   path>"]` (custom tiles) is named after its `data-vt-cover` id the same way.
 *
 * Names set by this script are cleared once the transition ends. Back navigations also get the
 * `back` transition type, so touch devices slide the page in from the left (`global.css`).
 *
 * It also recovers from deploy skew: when a lazily imported chunk of the previous build is gone
 * (`vite:preloadError`), the page reloads once (PLAN §2.7).
 */

export const TRANSITION_NAME = 'mod-cover';

/** `mod-cover-{id}` (same as `ModCard`), or the generic name when the id is missing. */
export function coverTransitionName(id: string | undefined): string {
  return id && /^\d{1,12}$/.test(id) ? `${TRANSITION_NAME}-${id}` : TRANSITION_NAME;
}
const RELOAD_KEY = 'sotf-preload-reload';

interface ViewTransitionLike {
  finished: Promise<unknown>;
  /** Transition types (Chromium 125+, Safari 18.2+): `:active-view-transition-type(back)` in CSS. */
  types?: Set<string>;
}

interface NavigationActivationLike {
  navigationType?: string;
  from?: { index: number } | null;
  entry?: { index: number } | null;
}

/** Back navigations (history traverse to an earlier entry) slide the other way on touch devices. */
export function isBackNavigation(activation: NavigationActivationLike | null | undefined): boolean {
  if (activation?.navigationType !== 'traverse') return false;
  if (!activation.from || !activation.entry) return false;
  return activation.entry.index < activation.from.index;
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
        element.style.viewTransitionName = coverTransitionName(element.dataset.vtCover);
        clearAfter(swap.viewTransition, element);
        return;
      }
    }
    const header = doc.querySelector<HTMLElement>('[data-vt-cover-target]');
    if (header?.dataset.vtCoverTarget) {
      header.style.viewTransitionName = coverTransitionName(header.dataset.vtCoverTarget);
      clearAfter(swap.viewTransition, header);
    }
  });

  win.addEventListener('pagereveal', (event) => {
    const reveal = event as PageRevealEvent;
    if (!reveal.viewTransition) return;
    const navigation = (win as Window & { navigation?: { activation?: NavigationActivationLike | null } }).navigation;
    if (isBackNavigation(navigation?.activation)) reveal.viewTransition.types?.add('back');
    const target = doc.querySelector<HTMLElement>('[data-vt-cover-target]');
    if (!target) return;
    target.style.viewTransitionName = coverTransitionName(target.dataset.vtCoverTarget);
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
