/**
 * Hero search → Cmd+K (T0-05 «El buscador del hero abre Cmd+K»).
 *
 * The field is a real GET form to `/search` (works without JavaScript and before the palette
 * loads). On focus it dispatches the cancelable `sotf:cmdk-open` event on `window` with the
 * typed query; the command palette (WP-72) listens, calls `preventDefault()` and takes over, and
 * the hero field steps aside. Nobody listening = the plain form keeps working.
 */

export const CMDK_OPEN_EVENT = 'sotf:cmdk-open';

export interface CmdkOpenDetail {
  source: 'landing-hero';
  query: string;
}

function isApple(nav: Navigator): boolean {
  const platform =
    (nav as Navigator & { userAgentData?: { platform?: string } }).userAgentData?.platform ?? nav.platform ?? '';
  return /mac|iphone|ipad|ipod/i.test(platform);
}

export function initHeroSearch(doc: Document = document): void {
  const form = doc.querySelector<HTMLFormElement>('form[data-landing-search]');
  const input = form?.querySelector<HTMLInputElement>('[data-landing-search-input]');
  const win = doc.defaultView;
  if (!form || !input || !win) return;

  // Show ⌘ K instead of Ctrl K on Apple devices (the shortcut handler accepts both).
  const firstKey = form.querySelector('kbd');
  if (firstKey && isApple(win.navigator)) firstKey.textContent = '⌘';

  const open = (): boolean => {
    const event = new CustomEvent<CmdkOpenDetail>(CMDK_OPEN_EVENT, {
      cancelable: true,
      detail: { source: 'landing-hero', query: input.value.trim() },
    });
    return !win.dispatchEvent(event);
  };

  input.addEventListener('focus', () => {
    if (open()) input.blur();
  });
}
