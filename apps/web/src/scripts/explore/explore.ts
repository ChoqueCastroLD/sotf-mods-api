/**
 * Explore enhancement (PLAN T0-06, research/03 §6.2). The page already works without
 * JavaScript (links + GET form); this module makes it feel instant:
 *
 * - filters apply on change (text filter debounced) and every listing link (tabs, chips, sort,
 *   view, pagination, active filters) is followed in place: the server-rendered HTML of the new
 *   URL is fetched and its `[data-explore-root]` replaces the current one inside a View
 *   Transition (none under reduced motion); `history.pushState` keeps real URLs, `popstate`
 *   restores them;
 * - «Load more» appends the next page's items and moves the URL with `history.replaceState`;
 * - on screens below `lg` the filter rail is a modal bottom sheet (focus trap, Escape, backdrop);
 * - loading skeletons only after 300 ms, `aria-busy`, a polite live region with the result
 *   count, offline and failure messages; focus returns to the control that triggered the change.
 *
 * - members whose account has the 18+ opt-in (`settings.nsfwOptIn`, T0-30) get `?nsfw=1` applied
 *   in place: the listing HTML is shared and anonymous, so the choice is made here (read once per
 *   browser session from `GET /api/v2/me`; guests never pay for the request).
 *
 * Any unexpected response falls back to a normal navigation, so the worst case is a reload.
 */

import { accountSettings } from '../account-settings.ts';
import { track } from '../beacon.ts';

const ROOT = '[data-explore-root]';
const SKELETON_DELAY_MS = 300;
const TEXT_DEBOUNCE_MS = 350;
const SHEET_QUERY = '(width < 48rem)';
/** Pages that load by themselves while the visitor scrolls (mobile); then the button takes over. */
const AUTO_LOAD_PAGES = 3;
const AUTO_LOAD_MARGIN = '900px 0px';
const PENDING_SKELETONS = 4;

type SheetKind = 'filters' | 'sort';

interface Messages {
  loading: string;
  offline: string;
  failed: string;
}

let bound = false;
let controller: AbortController | null = null;
let textTimer: ReturnType<typeof setTimeout> | undefined;
let backdrop: HTMLElement | null = null;
let sheetReturnFocus: HTMLElement | null = null;
let openKind: SheetKind | null = null;
let sentinelObserver: IntersectionObserver | null = null;
let autoLoaded = 0;
let loadingMore = false;
/** Path + query of the listing on screen (popstate ignores hash-only changes). */
let shownUrl = '';

function rootOf(doc: Document): HTMLElement | null {
  return doc.querySelector<HTMLElement>(ROOT);
}

function messagesOf(root: HTMLElement | null): Messages {
  const raw = root?.querySelector<HTMLElement>('[data-explore-messages]')?.dataset.exploreMessages;
  try {
    return { loading: '', offline: '', failed: '', ...(raw ? (JSON.parse(raw) as Partial<Messages>) : {}) };
  } catch {
    return { loading: '', offline: '', failed: '' };
  }
}

function announce(root: HTMLElement | null, text: string): void {
  const status = root?.querySelector<HTMLElement>('[data-explore-status]');
  if (!status) return;
  status.textContent = '';
  // A new text node on the next frame is announced even when the text repeats.
  requestAnimationFrame(() => {
    status.textContent = text;
  });
}

function reducedMotion(win: Window): boolean {
  return win.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function revealLoadMore(root: ParentNode): void {
  for (const button of root.querySelectorAll<HTMLButtonElement>('[data-explore-more]')) button.hidden = false;
}

function sameOriginUrl(win: Window, raw: string): URL | null {
  try {
    const url = new URL(raw, win.location.href);
    return url.origin === win.location.origin ? url : null;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------------------------
// Focus keys: find «the same control» in the replaced markup.
// ---------------------------------------------------------------------------------------------

function focusKeyOf(element: Element | null): string | null {
  if (!(element instanceof HTMLElement) || !element.closest(ROOT)) return null;
  if (element instanceof HTMLInputElement) {
    return element.type === 'search' || element.type === 'text'
      ? `text|${element.name}`
      : `input|${element.name}|${element.value}`;
  }
  const chip = element.closest('li[data-filter-state]');
  if (chip) {
    const label = chip.querySelector('[data-chip-label]')?.textContent ?? '';
    const primary = chip.querySelector('a, button');
    return `chip|${chip.closest('fieldset')?.querySelector('legend')?.textContent ?? ''}|${label}|${element === primary ? 'main' : 'exclude'}`;
  }
  const opener = element.closest<HTMLElement>('[data-explore-sheet-open]');
  if (opener) return `sheet-open|${opener.dataset.exploreSheetOpen ?? 'filters'}`;
  if (element.closest('details[data-disclosure]')) return 'sort';
  const title = element.getAttribute('title');
  if (title) return `title|${title}`;
  return null;
}

function findByFocusKey(root: HTMLElement, key: string): HTMLElement | null {
  const [kind, a = '', b = '', c = ''] = key.split('|');
  if (kind === 'text') return root.querySelector<HTMLElement>(`input[name="${CSS.escape(a)}"]`);
  if (kind === 'input') {
    return root.querySelector<HTMLElement>(`input[name="${CSS.escape(a)}"][value="${CSS.escape(b)}"]`);
  }
  if (kind === 'chip') {
    for (const chip of root.querySelectorAll<HTMLElement>('li[data-filter-state]')) {
      const legend = chip.closest('fieldset')?.querySelector('legend')?.textContent ?? '';
      if (legend !== a || (chip.querySelector('[data-chip-label]')?.textContent ?? '') !== b) continue;
      const controls = chip.querySelectorAll<HTMLElement>('a, button');
      return (c === 'main' ? controls[0] : controls[1]) ?? controls[0] ?? null;
    }
    return null;
  }
  if (kind === 'sheet-open') return root.querySelector<HTMLElement>(`[data-explore-sheet-open="${CSS.escape(a)}"]`);
  if (kind === 'sort') return root.querySelector<HTMLElement>('details[data-disclosure] > summary');
  if (kind === 'title') return root.querySelector<HTMLElement>(`[title="${CSS.escape(a)}"]`);
  return null;
}

// ---------------------------------------------------------------------------------------------
// Mobile bottom sheet
// ---------------------------------------------------------------------------------------------

function sheetOf(root: ParentNode | null, kind: SheetKind | null = openKind): HTMLElement | null {
  if (!root) return null;
  if (kind) return root.querySelector<HTMLElement>(`[data-explore-sheet="${kind}"]`);
  return root.querySelector<HTMLElement>('[data-explore-sheet][data-open]');
}

function isSheetMode(win: Window): boolean {
  return win.matchMedia(SHEET_QUERY).matches;
}

function focusables(container: HTMLElement): HTMLElement[] {
  return [
    ...container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), summary, [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((element) => element.offsetParent !== null || element === document.activeElement);
}

function openSheet(win: Window, kind: SheetKind, opener?: HTMLElement | null, restored = false): void {
  const doc = win.document;
  const sheet = sheetOf(rootOf(doc), kind);
  if (!sheet || !isSheetMode(win)) return;
  sheetReturnFocus = opener ?? (doc.activeElement instanceof HTMLElement ? doc.activeElement : null);
  openKind = kind;
  sheet.dataset.open = '';
  if (restored) sheet.dataset.restored = '';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  for (const openButton of doc.querySelectorAll(`[data-explore-sheet-open="${kind}"]`)) {
    openButton.setAttribute('aria-expanded', 'true');
  }
  if (!backdrop) {
    backdrop = doc.createElement('div');
    backdrop.setAttribute('aria-hidden', 'true');
    backdrop.setAttribute('data-explore-backdrop', '');
    backdrop.className = 'fixed inset-0 z-50 bg-black/60 md:hidden';
    backdrop.addEventListener('click', () => closeSheet(win));
    doc.body.append(backdrop);
  }
  doc.documentElement.style.overflow = 'hidden';
  if (!restored) {
    (sheet.querySelector<HTMLElement>('[data-explore-sheet-close]') ?? focusables(sheet)[0])?.focus({
      preventScroll: true,
    });
  }
}

function closeSheet(win: Window, restoreFocus = true): void {
  const doc = win.document;
  const sheet = sheetOf(rootOf(doc));
  const kind = openKind;
  if (sheet) {
    delete sheet.dataset.open;
    delete sheet.dataset.restored;
    delete sheet.dataset.dragging;
    delete sheet.dataset.closing;
    sheet.style.transform = '';
    sheet.removeAttribute('role');
    sheet.removeAttribute('aria-modal');
  }
  openKind = null;
  for (const openButton of doc.querySelectorAll('[data-explore-sheet-open]')) {
    openButton.setAttribute('aria-expanded', 'false');
  }
  backdrop?.remove();
  backdrop = null;
  doc.documentElement.style.overflow = '';
  if (restoreFocus) {
    const target =
      sheetReturnFocus && doc.contains(sheetReturnFocus)
        ? sheetReturnFocus
        : doc.querySelector<HTMLElement>(`[data-explore-sheet-open="${kind ?? 'filters'}"]`);
    target?.focus({ preventScroll: true });
  }
  sheetReturnFocus = null;
  if (win.location.hash === '#explore-filters' || win.location.hash === '#explore-sort') {
    win.history.replaceState(win.history.state, '', win.location.pathname + win.location.search);
  }
}

function sheetIsOpen(doc: Document): boolean {
  return openKind !== null && (sheetOf(rootOf(doc))?.hasAttribute('data-open') ?? false);
}

/** Swipe down on the handle or the title row dismisses the sheet (a short slide, then close). */
function bindSheetDrag(win: Window): void {
  const doc = win.document;
  let drag: { sheet: HTMLElement; startY: number; lastY: number; lastT: number; velocity: number; id: number } | null =
    null;
  doc.addEventListener('pointerdown', (event) => {
    if (!sheetIsOpen(doc) || event.button !== 0) return;
    const target = event.target instanceof Element ? event.target : null;
    const grip = target?.closest('[data-sheet-handle], [data-sheet-drag]');
    const sheet = grip?.closest<HTMLElement>('[data-explore-sheet]');
    if (!grip || !sheet || target?.closest('a, button')) return;
    drag = {
      sheet,
      startY: event.clientY,
      lastY: event.clientY,
      lastT: event.timeStamp,
      velocity: 0,
      id: event.pointerId,
    };
    sheet.dataset.dragging = '';
    try {
      grip.setPointerCapture(event.pointerId);
    } catch {
      // Capture is a nicety; the move listener below works without it.
    }
  });
  doc.addEventListener('pointermove', (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const dy = Math.max(0, event.clientY - drag.startY);
    const dt = Math.max(1, event.timeStamp - drag.lastT);
    drag.velocity = (event.clientY - drag.lastY) / dt;
    drag.lastY = event.clientY;
    drag.lastT = event.timeStamp;
    drag.sheet.style.transform = `translateY(${dy}px)`;
    if (backdrop) backdrop.style.opacity = String(Math.max(0, 1 - dy / 400));
  });
  const finish = (event: PointerEvent) => {
    if (!drag || event.pointerId !== drag.id) return;
    const { sheet, startY, velocity } = drag;
    drag = null;
    const dy = Math.max(0, event.clientY - startY);
    delete sheet.dataset.dragging;
    if (event.type === 'pointercancel' || (dy < 90 && velocity < 0.6)) {
      sheet.style.transform = '';
      if (backdrop) backdrop.style.opacity = '';
      return;
    }
    if (reducedMotion(win)) {
      closeSheet(win);
      return;
    }
    sheet.dataset.closing = '';
    sheet.style.transform = '';
    if (backdrop) backdrop.style.opacity = '0';
    setTimeout(() => closeSheet(win), 190);
  };
  doc.addEventListener('pointerup', finish);
  doc.addEventListener('pointercancel', finish);
}

// ---------------------------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------------------------

async function fetchDocument(win: Window, url: URL, signal: AbortSignal): Promise<{ doc: Document; url: URL } | null> {
  const response = await win.fetch(url.href, {
    credentials: 'same-origin',
    headers: { accept: 'text/html' },
    signal,
  });
  if (!(response.headers.get('content-type') ?? '').includes('text/html')) return null;
  const html = await response.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const finalUrl = sameOriginUrl(win, response.url || url.href) ?? url;
  return { doc, url: finalUrl };
}

interface NavigateOptions {
  push: boolean;
  focusKey?: string | null;
  /** Close the mobile sheet after applying (the «Show N results» button). */
  closeSheet?: boolean;
  /** Analytics: this navigation applied a filter. */
  filter?: boolean;
  /** Background refresh (not asked by the visitor): focus stays put and nothing is announced. */
  quiet?: boolean;
}

/** In-feed units of a swapped-in listing (guests; `scripts/ads.ts` skips members and filled units). */
function fillAds(root: Element): void {
  if (!root.querySelector('ins.adsbygoogle[data-ad-slot]')) return;
  void import('../ads.ts').then(({ initAds }) => initAds(root.ownerDocument)).catch(() => {});
}

async function navigate(win: Window, target: URL, options: NavigateOptions): Promise<void> {
  const doc = win.document;
  const current = rootOf(doc);
  // Another listing (tab to /builds, chip to a category hub…) has its own breadcrumbs, JSON-LD
  // and head: a real (cross-document, view-transitioned) navigation keeps them right.
  if (!current || target.pathname !== win.location.pathname) {
    win.location.assign(target.href);
    return;
  }
  const messages = messagesOf(current);
  if (!win.navigator.onLine) {
    announce(current, messages.offline);
    return;
  }
  controller?.abort();
  const own = new AbortController();
  controller = own;
  const results = current.querySelector<HTMLElement>('#explore-results');
  results?.setAttribute('aria-busy', 'true');
  if (!options.quiet) announce(current, messages.loading);
  const skeletonTimer = setTimeout(() => {
    const list = current.querySelector<HTMLElement>('[data-explore-list]');
    const template = current.querySelector<HTMLTemplateElement>('template[data-explore-skeleton]');
    if (list && template) list.replaceChildren(template.content.cloneNode(true));
  }, SKELETON_DELAY_MS);

  let fetched: { doc: Document; url: URL } | null = null;
  try {
    fetched = await fetchDocument(win, target, own.signal);
  } catch (error) {
    clearTimeout(skeletonTimer);
    if (own.signal.aborted) return;
    results?.removeAttribute('aria-busy');
    void error;
    announce(current, win.navigator.onLine ? messages.failed : messages.offline);
    if (win.navigator.onLine) win.location.assign(target.href);
    return;
  }
  clearTimeout(skeletonTimer);
  if (own.signal.aborted) return;
  const incoming = fetched ? rootOf(fetched.doc) : null;
  if (!fetched || !incoming || fetched.url.pathname !== win.location.pathname) {
    // Redirected elsewhere (a single category becomes its hub): navigate for real.
    win.location.assign(fetched?.url.href ?? target.href);
    return;
  }

  const wasSheetOpen = sheetIsOpen(doc);
  const wasKind = openKind;
  const sheetScroll = sheetOf(current)?.querySelector<HTMLElement>('[data-explore-sheet-body]')?.scrollTop ?? 0;
  const typed =
    doc.activeElement instanceof HTMLInputElement && doc.activeElement.type === 'search'
      ? {
          name: doc.activeElement.name,
          value: doc.activeElement.value,
          start: doc.activeElement.selectionStart,
          end: doc.activeElement.selectionEnd,
        }
      : null;
  const next = doc.importNode(incoming, true);
  const title = fetched.doc.title;
  const finalUrl = fetched.url;

  const apply = () => {
    current.replaceWith(next);
    if (title) doc.title = title;
    syncHead(doc, fetched.doc);
    revealLoadMore(next);
    fillAds(next);
  };
  const transition = !reducedMotion(win) && typeof doc.startViewTransition === 'function';
  if (transition) {
    try {
      await doc.startViewTransition(apply).updateCallbackDone;
    } catch {
      if (!doc.contains(next)) apply();
    }
  } else {
    apply();
  }

  shownUrl = finalUrl.pathname + finalUrl.search;
  if (options.push) win.history.pushState({ explore: true }, '', shownUrl);
  else if (win.location.pathname + win.location.search !== shownUrl)
    win.history.replaceState({ explore: true }, '', shownUrl);

  // Keep the typing going when the text filter triggered the swap.
  if (typed) {
    const input = next.querySelector<HTMLInputElement>(`input[name="${CSS.escape(typed.name)}"]`);
    if (input) {
      input.value = typed.value;
      input.focus();
      input.setSelectionRange(typed.start, typed.end);
    }
  }

  autoLoaded = 0;
  observeSentinel(win);
  if (wasSheetOpen && wasKind === 'filters' && !options.closeSheet && isSheetMode(win)) {
    openSheet(win, 'filters', null, true);
    const body = sheetOf(next, 'filters')?.querySelector<HTMLElement>('[data-explore-sheet-body]');
    if (body) body.scrollTop = sheetScroll;
  } else if (wasSheetOpen) {
    closeSheet(win, false);
  }
  if (!typed && !options.quiet) {
    const focusTarget =
      (options.focusKey && !options.closeSheet ? findByFocusKey(next, options.focusKey) : null) ??
      (options.closeSheet || !options.focusKey ? next.querySelector<HTMLElement>('#explore-results') : null);
    focusTarget?.focus({ preventScroll: !options.closeSheet });
    if (options.closeSheet) next.querySelector('#explore-results')?.scrollIntoView({ block: 'start' });
  }

  const count = next.querySelector('[data-explore-count]')?.textContent?.trim() ?? '';
  if (!options.quiet) announce(next, count);
  if (options.filter) {
    track('filter_apply', { props: { query: clip(finalUrl.search, 200), count: resultCount(next) } });
  }
}

function clip(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) : value;
}

function resultCount(root: HTMLElement): number {
  return root.querySelectorAll('[data-explore-item]').length;
}

/** Canonical, robots and hreflang of the new page (so a later share/copy uses them). */
function syncHead(doc: Document, from: Document): void {
  for (const selector of ['link[rel="canonical"]', 'meta[name="robots"]', 'meta[name="description"]']) {
    const incoming = from.head.querySelector(selector);
    const existing = doc.head.querySelector(selector);
    if (incoming && existing) existing.replaceWith(doc.importNode(incoming, true));
  }
}

/** URL of the GET form's current values (empty values dropped, page reset). */
function formUrl(win: Window, form: HTMLFormElement): URL | null {
  const action = sameOriginUrl(win, form.getAttribute('action') ?? win.location.pathname);
  if (!action) return null;
  const params = new URLSearchParams();
  for (const [name, value] of new FormData(form)) {
    if (typeof value !== 'string') continue;
    const trimmed = value.trim();
    if (trimmed !== '') params.append(name, trimmed);
  }
  action.search = params.toString();
  return action;
}

// ---------------------------------------------------------------------------------------------
// Load more
// ---------------------------------------------------------------------------------------------

/** Placeholder cards (the page's skeleton template) at the end of the list while a page loads. */
function addPending(root: HTMLElement, list: Element): void {
  const template = root.querySelector<HTMLTemplateElement>('template[data-explore-skeleton]');
  const cells = template ? [...template.content.querySelectorAll('li')].slice(0, PENDING_SKELETONS) : [];
  for (const cell of cells) {
    const clone = cell.cloneNode(true) as HTMLElement;
    clone.setAttribute('data-explore-pending', '');
    list.append(clone);
  }
}

function clearPending(root: ParentNode): void {
  for (const cell of root.querySelectorAll('[data-explore-pending]')) cell.remove();
}

async function loadMore(win: Window, button: HTMLButtonElement, automatic = false): Promise<void> {
  const doc = win.document;
  const root = rootOf(doc);
  const target = sameOriginUrl(win, button.dataset.nextHref ?? '');
  if (!root || !target || loadingMore) return;
  const messages = messagesOf(root);
  if (!win.navigator.onLine) {
    announce(root, messages.offline);
    return;
  }
  loadingMore = true;
  button.disabled = true;
  button.setAttribute('aria-busy', 'true');
  const pendingList = root.querySelector('[data-explore-items]');
  if (pendingList) addPending(root, pendingList);
  let fetched: { doc: Document; url: URL } | null = null;
  try {
    fetched = await fetchDocument(win, target, new AbortController().signal);
  } catch {
    fetched = null;
  }
  loadingMore = false;
  clearPending(root);
  if (automatic) autoLoaded += 1;
  const incoming = fetched ? rootOf(fetched.doc) : null;
  const list = root.querySelector('[data-explore-items]');
  const newItems = incoming ? [...incoming.querySelectorAll('[data-explore-items] > [data-explore-item]')] : [];
  if (!fetched || !incoming || !list || newItems.length === 0) {
    button.disabled = false;
    button.removeAttribute('aria-busy');
    if (automatic) autoLoaded = AUTO_LOAD_PAGES;
    if (!fetched || !incoming) {
      announce(root, win.navigator.onLine ? messages.failed : messages.offline);
      if (win.navigator.onLine && !automatic) win.location.assign(target.href);
    }
    return;
  }
  const known = new Set(
    [...list.querySelectorAll<HTMLElement>('[data-explore-item] [data-mod-id]')].map((card) => card.dataset.modId),
  );
  const appended: Element[] = [];
  for (const item of newItems) {
    const id = item.querySelector<HTMLElement>('[data-mod-id]')?.dataset.modId;
    if (id && known.has(id)) continue;
    const node = doc.importNode(item, true);
    list.append(node);
    appended.push(node);
  }
  const pager = root.querySelector('[data-explore-pager]');
  const nextPager = incoming.querySelector('[data-explore-pager]');
  if (pager && nextPager) {
    const imported = doc.importNode(nextPager, true);
    pager.replaceWith(imported);
    revealLoadMore(imported);
  } else if (pager) {
    pager.querySelector('[data-explore-more]')?.remove();
  }
  win.history.replaceState({ explore: true }, '', fetched.url.pathname + fetched.url.search);
  // A visitor who tapped the button lands on the first new card; an automatic load must not
  // steal focus or move the page.
  if (!automatic) appended[0]?.querySelector<HTMLElement>('h2 a, h3 a, h4 a, a')?.focus({ preventScroll: true });
  shownUrl = fetched.url.pathname + fetched.url.search;
  fillAds(root);
  observeSentinel(win);
  const pageText = root.querySelector('[data-explore-page-indicator]')?.textContent?.trim();
  if (pageText) announce(root, pageText);
}

// ---------------------------------------------------------------------------------------------
// Infinite feel (mobile): the next page loads before the visitor reaches the end of the list
// ---------------------------------------------------------------------------------------------

/** (Re)observes the sentinel of the current pager; the first `AUTO_LOAD_PAGES` pages are automatic. */
function observeSentinel(win: Window): void {
  sentinelObserver?.disconnect();
  sentinelObserver = null;
  const doc = win.document;
  const sentinel = rootOf(doc)?.querySelector<HTMLElement>('[data-explore-sentinel]');
  if (!sentinel || !isSheetMode(win) || autoLoaded >= AUTO_LOAD_PAGES || typeof IntersectionObserver === 'undefined')
    return;
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      const button = rootOf(doc)?.querySelector<HTMLButtonElement>('[data-explore-more]');
      if (!button || button.disabled || loadingMore) return;
      observer.disconnect();
      void loadMore(win, button, true);
    },
    { rootMargin: AUTO_LOAD_MARGIN },
  );
  observer.observe(sentinel);
  sentinelObserver = observer;
}

// ---------------------------------------------------------------------------------------------
// Wiring
// ---------------------------------------------------------------------------------------------

function isListingLink(win: Window, anchor: HTMLAnchorElement): URL | null {
  if (!anchor.closest('[data-explore-intercept]')) return null;
  if (anchor.target && anchor.target !== '_self') return null;
  if (anchor.hasAttribute('download')) return null;
  const url = sameOriginUrl(win, anchor.getAttribute('href') ?? '');
  if (!url) return null;
  // In-page anchors (sheet open/close) are handled separately.
  if (url.pathname === win.location.pathname && url.search === win.location.search && url.hash) return null;
  return url;
}

export function initExplore(win: Window = window): void {
  const doc = win.document;
  if (!rootOf(doc)) return;
  revealLoadMore(doc);
  doc.documentElement.setAttribute('data-explore-js', '');
  if (bound) return;
  bound = true;
  bindSheetDrag(win);
  observeSentinel(win);

  // Opened through `#explore-filters` / `#explore-sort` (no-JS link shared or reloaded): use the modal sheet.
  if (isSheetMode(win)) {
    if (win.location.hash === '#explore-filters') openSheet(win, 'filters', null);
    else if (win.location.hash === '#explore-sort') openSheet(win, 'sort', null);
  }
  doc.addEventListener('click', (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    const target = event.target instanceof Element ? event.target : null;
    if (!target?.closest(ROOT)) return;

    const more = target.closest<HTMLButtonElement>('[data-explore-more]');
    if (more) {
      event.preventDefault();
      void loadMore(win, more);
      return;
    }
    const opener = target.closest<HTMLElement>('[data-explore-sheet-open]');
    if (opener && isSheetMode(win)) {
      event.preventDefault();
      openSheet(win, opener.dataset.exploreSheetOpen === 'sort' ? 'sort' : 'filters', opener);
      return;
    }
    if (target.closest('[data-explore-sheet-close]')) {
      event.preventDefault();
      closeSheet(win);
      return;
    }
    const anchor = target.closest<HTMLAnchorElement>('a[href]');
    if (!anchor) return;
    const url = isListingLink(win, anchor);
    if (!url) return;
    event.preventDefault();
    const details = anchor.closest('details');
    if (details?.hasAttribute('data-disclosure')) details.open = false;
    const inPager = Boolean(anchor.closest('[data-explore-pager]'));
    void navigate(win, url, {
      push: true,
      focusKey: inPager ? null : focusKeyOf(anchor),
      filter: !inPager,
      // The sort sheet is an action sheet: picking an option applies it and closes it.
      closeSheet: openKind === 'sort' && Boolean(anchor.closest('[data-explore-sheet="sort"]')),
    });
  });

  doc.addEventListener('change', (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) return;
    const form = input.closest<HTMLFormElement>('form[data-explore-form]');
    if (!form || input.type === 'search' || input.type === 'text') return;
    const url = formUrl(win, form);
    if (url) void navigate(win, url, { push: true, focusKey: focusKeyOf(input), filter: true });
  });

  doc.addEventListener('input', (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || input.type !== 'search') return;
    const form = input.closest<HTMLFormElement>('form[data-explore-form]');
    if (!form) return;
    clearTimeout(textTimer);
    textTimer = setTimeout(() => {
      const url = formUrl(win, form);
      if (url && url.search !== win.location.search)
        void navigate(win, url, { push: false, focusKey: 'text|q', filter: true });
    }, TEXT_DEBOUNCE_MS);
  });

  doc.addEventListener('submit', (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches('[data-explore-form]')) return;
    event.preventDefault();
    clearTimeout(textTimer);
    const url = formUrl(win, form);
    if (!url) return;
    const sheetOpen = sheetIsOpen(doc);
    if (url.pathname === win.location.pathname && url.search === win.location.search) {
      if (sheetOpen) {
        closeSheet(win, false);
        rootOf(doc)?.querySelector<HTMLElement>('#explore-results')?.focus();
      }
      return;
    }
    void navigate(win, url, { push: true, closeSheet: sheetOpen, filter: true });
  });

  doc.addEventListener('keydown', (event) => {
    if (!sheetIsOpen(doc)) return;
    const sheet = sheetOf(rootOf(doc));
    if (!sheet) return;
    if (event.key === 'Escape') {
      // An open disclosure inside the sheet closes first (handled by `enhance`).
      if (doc.activeElement?.closest('details[data-disclosure][open]')) return;
      event.preventDefault();
      closeSheet(win);
      return;
    }
    if (event.key !== 'Tab') return;
    const items = focusables(sheet);
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && (doc.activeElement === first || !sheet.contains(doc.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (doc.activeElement === last || !sheet.contains(doc.activeElement))) {
      event.preventDefault();
      first.focus();
    }
  });

  win.matchMedia(SHEET_QUERY).addEventListener('change', (event) => {
    if (!event.matches && sheetIsOpen(doc)) closeSheet(win, false);
  });

  shownUrl = win.location.pathname + win.location.search;
  void applyNsfwOptIn(win).catch(() => {});
  win.addEventListener('popstate', () => {
    if (!rootOf(doc)) return;
    if (win.location.pathname + win.location.search === shownUrl) {
      if (win.location.hash !== '#explore-filters' && win.location.hash !== '#explore-sort' && sheetIsOpen(doc)) {
        closeSheet(win, false);
      }
      return;
    }
    const url = sameOriginUrl(win, win.location.href);
    if (url) void navigate(win, url, { push: false, focusKey: null });
  });
}

// ---------------------------------------------------------------------------------------------
// 18+ opt-in of the account
// ---------------------------------------------------------------------------------------------

/** Reloads the listing in place with `?nsfw=1` for opted-in members (the URL keeps the choice). */
async function applyNsfwOptIn(win: Window): Promise<void> {
  const start = win.location.pathname + win.location.search;
  if (new URLSearchParams(win.location.search).get('nsfw') === '1') return;
  if ((await accountSettings(win))?.nsfwOptIn !== true) return;
  // The visitor moved on meanwhile: the next listing they open is handled by its own page load.
  if (win.location.pathname + win.location.search !== start || !rootOf(win.document)) return;
  const url = sameOriginUrl(win, win.location.href);
  if (!url) return;
  url.searchParams.set('nsfw', '1');
  await navigate(win, url, { push: false, focusKey: null, quiet: true });
}
