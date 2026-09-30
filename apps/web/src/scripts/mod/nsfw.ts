/**
 * Adult-content interstitial (T0-30). The gate is lifted when the visitor confirms (remembered
 * for this browser session), or right away when they already confirmed this session, or when
 * their account has the NSFW opt-in (`GET /api/v2/me` → `settings.nsfwOptIn`).
 */
import type { MeSummary } from '../account-hint.ts';
import { apiCall } from './api.ts';

const ACK_KEY = 'sotf:nsfw-ack';

function session(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function reveal(root: HTMLElement, focus: boolean): void {
  const gate = root.querySelector<HTMLElement>('[data-nsfw-gate]');
  const content = root.querySelector<HTMLElement>('[data-nsfw-content]');
  if (!gate || !content) return;
  gate.remove();
  content.hidden = false;
  if (focus) root.querySelector<HTMLElement>('h1')?.focus({ preventScroll: false });
}

export function initNsfwGate(root: HTMLElement, signedIn: Promise<MeSummary | null>): void {
  const gate = root.querySelector<HTMLElement>('[data-nsfw-gate]');
  if (!gate) return;
  if (session()?.getItem(ACK_KEY) === '1') {
    reveal(root, false);
    return;
  }
  gate.querySelector('[data-nsfw-reveal]')?.addEventListener('click', (event) => {
    event.preventDefault();
    session()?.setItem(ACK_KEY, '1');
    const heading = root.querySelector<HTMLElement>('h1');
    if (heading) heading.tabIndex = -1;
    reveal(root, true);
  });
  void signedIn.then(async (summary) => {
    if (!summary || !root.querySelector('[data-nsfw-gate]')) return;
    const me = await apiCall<{ settings?: { nsfwOptIn?: boolean } }>('GET', '/api/v2/me');
    if (me.ok && me.data.settings?.nsfwOptIn === true) reveal(root, false);
  });
}
