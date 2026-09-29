/**
 * Progressive enhancement for server-rendered (non-hydrated) primitives on public pages
 * (PLAN §2.5: interactions there are vanilla TS). One call wires every instance in `root`:
 *
 *   import { enhance } from '@sotf/ui/enhance';
 *   enhance(); // theme toggles, language/disclosure menus, dismissible banners, live dots
 *
 * Idempotent per element; returns a cleanup function. React components do the same work when
 * hydrated, so calling it on a page with islands is harmless.
 */
import { rememberDismissal } from './dismissals.ts';
import { bindThemeToggles } from './theme.ts';

/** Closes open `details[data-disclosure]` on Escape (focus back to summary) and outside clicks. */
export function bindDisclosures(root: Document | HTMLElement = document): () => void {
  const doc = root instanceof Document ? root : root.ownerDocument;
  const openOnes = () => [...root.querySelectorAll<HTMLDetailsElement>('details[data-disclosure][open]')];
  const onKey = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') return;
    for (const details of openOnes()) {
      if (!details.contains(doc.activeElement)) continue;
      details.open = false;
      details.querySelector('summary')?.focus();
    }
  };
  const onPointer = (event: PointerEvent) => {
    for (const details of openOnes()) {
      if (event.target instanceof Node && !details.contains(event.target)) details.open = false;
    }
  };
  doc.addEventListener('keydown', onKey);
  doc.addEventListener('pointerdown', onPointer);
  return () => {
    doc.removeEventListener('keydown', onKey);
    doc.removeEventListener('pointerdown', onPointer);
  };
}

/** Dismiss buttons of server-rendered `Banner`s (persisted when the banner has an id). */
export function bindBanners(root: Document | HTMLElement = document): () => void {
  const onClick = (event: Event) => {
    const button = event.target instanceof Element ? event.target.closest('[data-banner-dismiss]') : null;
    if (!button) return;
    const banner = button.closest<HTMLElement>('[data-banner-id], [data-banner]') ?? button.parentElement;
    if (!banner) return;
    const id = banner.dataset.bannerId;
    if (id) rememberDismissal(id);
    banner.hidden = true;
  };
  root.addEventListener('click', onClick);
  return () => root.removeEventListener('click', onClick);
}

/** Marks elements with `data-offscreen` while they are outside the viewport. */
export function observeOffscreen(elements: Iterable<Element>): () => void {
  if (typeof IntersectionObserver === 'undefined') return () => {};
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.removeAttribute('data-offscreen');
      else entry.target.setAttribute('data-offscreen', '');
    }
  });
  for (const element of elements) observer.observe(element);
  return () => observer.disconnect();
}

/** Pauses the `LiveDot` ping while it is off-screen. */
export function bindLiveDots(root: Document | HTMLElement = document): () => void {
  return observeOffscreen(root.querySelectorAll('[data-live-dot]'));
}

export function enhance(root: Document | HTMLElement = document): () => void {
  const cleanups = [bindThemeToggles(root), bindDisclosures(root), bindBanners(root), bindLiveDots(root)];
  return () => {
    for (const cleanup of cleanups) cleanup();
  };
}
