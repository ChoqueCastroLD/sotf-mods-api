/**
 * Cmd+K trigger — STUB created by WP-22, owned and completed by WP-72 (command palette).
 *
 * Today it gives the public pages the keyboard entry points of PLAN §7.9 without shipping the
 * palette: ⌘K / Ctrl+K and `/` focus the header search field (a real GET form to `/search`), or
 * go to the search page where the field is hidden (< lg). WP-72 replaces `openPalette` with the
 * `import()` of the palette island (preloaded on `pointerenter`/idle on desktop).
 */

export const SEARCH_INPUT_SELECTOR = '[data-cmdk-input]';

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

function openPalette(doc: Document, searchHref: string): void {
  const input = doc.querySelector<HTMLInputElement>(SEARCH_INPUT_SELECTOR);
  if (input && input.offsetParent !== null) {
    input.focus();
    input.select();
    return;
  }
  doc.defaultView?.location.assign(searchHref);
}

/** Binds the global shortcuts; returns a cleanup function. */
export function bindCmdkTrigger(doc: Document = document): () => void {
  const onKey = (event: KeyboardEvent) => {
    if (event.defaultPrevented || !isPaletteShortcut(event)) return;
    event.preventDefault();
    const form = doc.querySelector<HTMLFormElement>('form[data-header-search]');
    openPalette(doc, form?.getAttribute('action') ?? '/search');
  };
  doc.addEventListener('keydown', onKey);
  return () => doc.removeEventListener('keydown', onKey);
}
