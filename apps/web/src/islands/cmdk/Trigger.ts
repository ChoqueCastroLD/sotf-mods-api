/**
 * Cmd+K trigger (PLAN §7.1 T0-07, §7.9): the only part of the palette that ships with every page
 * (it is imported by `lib/client/boot.ts`, a few hundred bytes). The palette itself — React,
 * cmdk, MiniSearch, its messages — is a separate chunk that is **never** downloaded on page load:
 *
 * - it is preloaded on intent: pointer over / focus on the header search, pointer down on the
 *   mobile «Search» tab or the header search icon, pointer over the landing hero field;
 * - it opens with `⌘K` / `Ctrl+K` (toggle), `/` outside text fields, focus on the header search
 *   field (with what was typed), a click on the «Search» tab / header icon (full screen below
 *   md) and the landing hero's cancelable `sotf:cmdk-open` event.
 *
 * Without JavaScript, or if the chunk cannot load (offline, deploy skew), everything falls back to
 * the real `/search` GET form and links.
 */

import { resumePending } from './pending.ts';

export const SEARCH_INPUT_SELECTOR = '[data-cmdk-input]';
export const CMDK_OPEN_EVENT = 'sotf:cmdk-open';

type Source = 'shortcut' | 'header' | 'tab-bar' | 'landing-hero' | 'link';
type PaletteModule = typeof import('./mount.tsx');

let loader: Promise<PaletteModule> | null = null;
let returning = false;

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName);
}

/** Whether a key event should open the palette. */
export function isPaletteShortcut(
  event: Pick<KeyboardEvent, 'key' | 'metaKey' | 'ctrlKey' | 'altKey' | 'target'>,
): boolean {
  if (event.altKey) return false;
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') return true;
  return event.key === '/' && !event.metaKey && !event.ctrlKey && !isTypingTarget(event.target);
}

/**
 * Called by the palette right before it gives focus back to a search field, so that focus does
 * not reopen it.
 */
export function markReturningFocus(): void {
  returning = true;
  setTimeout(() => {
    returning = false;
  }, 0);
}

/** Starts downloading the palette chunk (idempotent). */
export function preloadPalette(): Promise<PaletteModule> {
  if (!loader) {
    loader = import('./mount.tsx');
    loader.catch(() => {
      loader = null;
    });
  }
  return loader;
}

function searchPath(doc: Document): string {
  const form = doc.querySelector<HTMLFormElement>('form[data-header-search]');
  return form?.getAttribute('action') ?? '/search';
}

/** Fallback when the palette cannot load: the header field, else the search page. */
function fallback(doc: Document, query: string): void {
  const input = doc.querySelector<HTMLInputElement>(SEARCH_INPUT_SELECTOR);
  if (input && input.offsetParent !== null) {
    returning = true;
    input.focus();
    returning = false;
    input.select();
    return;
  }
  const url = new URL(searchPath(doc), doc.baseURI);
  if (query) url.searchParams.set('q', query);
  doc.defaultView?.location.assign(url.href);
}

function openPalette(
  doc: Document,
  source: Source,
  query: () => string,
  returnFocus: HTMLElement | null,
  mode: 'open' | 'toggle' = 'open',
): void {
  preloadPalette().then(
    (palette) => {
      const request = { query: query(), source, returnFocus, beforeFocusReturn: markReturningFocus };
      if (mode === 'toggle') palette.toggle(request);
      else palette.open(request);
    },
    () => fallback(doc, query()),
  );
}

function isPlainClick(event: MouseEvent): boolean {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

/** A link to the search page inside the header or the mobile tab bar. */
function searchLink(target: EventTarget | null, doc: Document): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null;
  const link = target.closest<HTMLAnchorElement>('a[href]');
  if (!link?.closest('[data-site-header], [data-tab-bar]')) return null;
  try {
    const url = new URL(link.href, doc.baseURI);
    const search = new URL(searchPath(doc), doc.baseURI);
    return url.origin === search.origin && url.pathname === search.pathname && !url.search ? link : null;
  } catch {
    return null;
  }
}

/** Binds the shortcuts and the entry points; returns a cleanup function. */
export function bindCmdkTrigger(doc: Document = document): () => void {
  const win = doc.defaultView;
  if (!win) return () => {};
  const headerInput = () => doc.querySelector<HTMLInputElement>(SEARCH_INPUT_SELECTOR);
  resumePending(doc);

  const onKey = (event: KeyboardEvent) => {
    if (event.defaultPrevented || event.isComposing || !isPaletteShortcut(event)) return;
    event.preventDefault();
    openPalette(doc, 'shortcut', () => '', null, 'toggle');
  };

  const onFocusIn = (event: FocusEvent) => {
    const input = headerInput();
    if (!input || event.target !== input || returning) return;
    openPalette(doc, 'header', () => input.value, input);
  };

  const onIntent = (event: Event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.closest('form[data-header-search], form[data-landing-search]') || searchLink(target, doc) !== null) {
      void preloadPalette().catch(() => {});
    }
  };

  const onClick = (event: MouseEvent) => {
    if (event.defaultPrevented || !isPlainClick(event)) return;
    const link = searchLink(event.target, doc);
    if (!link) return;
    event.preventDefault();
    openPalette(doc, link.closest('[data-tab-bar]') ? 'tab-bar' : 'link', () => '', link);
  };

  const onHero = (event: Event) => {
    if (returning) return;
    event.preventDefault();
    const detail = (event as CustomEvent<{ query?: unknown }>).detail;
    const query = typeof detail?.query === 'string' ? detail.query : '';
    const field = doc.querySelector<HTMLElement>('[data-landing-search-input]');
    openPalette(doc, 'landing-hero', () => query, field);
  };

  // The header field shows «Ctrl K»; Apple platforms get «⌘ K».
  const platform = win.navigator.platform ?? '';
  if (/mac|iphone|ipad|ipod/i.test(platform)) {
    for (const key of doc.querySelectorAll('[data-kbd-mod]')) key.textContent = '⌘';
  }

  // With JavaScript the header field, the header search icon and the «Search» tab open a dialog:
  // announce it (without JavaScript they stay a plain form and links, so nothing is set in HTML).
  const announced: Element[] = [];
  const input = headerInput();
  if (input) announced.push(input);
  for (const link of doc.querySelectorAll<HTMLAnchorElement>('[data-site-header] a[href], [data-tab-bar] a[href]')) {
    if (searchLink(link, doc) === link) announced.push(link);
  }
  for (const element of announced) {
    if (!element.hasAttribute('aria-haspopup')) element.setAttribute('aria-haspopup', 'dialog');
  }

  doc.addEventListener('keydown', onKey);
  doc.addEventListener('focusin', onFocusIn);
  doc.addEventListener('pointerover', onIntent, { passive: true });
  doc.addEventListener('pointerdown', onIntent, { passive: true });
  doc.addEventListener('click', onClick);
  win.addEventListener(CMDK_OPEN_EVENT, onHero);
  return () => {
    for (const element of announced) element.removeAttribute('aria-haspopup');
    doc.removeEventListener('keydown', onKey);
    doc.removeEventListener('focusin', onFocusIn);
    doc.removeEventListener('pointerover', onIntent);
    doc.removeEventListener('pointerdown', onIntent);
    doc.removeEventListener('click', onClick);
    win.removeEventListener(CMDK_OPEN_EVENT, onHero);
  };
}
