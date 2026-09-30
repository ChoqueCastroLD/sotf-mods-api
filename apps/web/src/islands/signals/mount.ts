/**
 * Entry of the Signals bell on public pages (PLAN §2.5, §7.3). Vanilla and tiny: it waits for the
 * signed-in summary (`scripts/mod/session.ts`, which follows the header's `sotf:account` event)
 * and only then downloads the React island (`render.tsx`) and the page-locale messages. Guests
 * never pay for more than this module.
 *
 * The bell sits in the header's account slot (`[data-account-slot]`, `HeaderAccount.astro`),
 * right before the avatar button. Call `initSignalsBell()` once per page from the client boot
 * (`lib/client/boot.ts`, docs/backlog/WP-81.md).
 */
import { whenSession } from '../../scripts/mod/session.ts';

export const BELL_HOST_ATTRIBUTE = 'data-signals-bell';

let started = false;

/** Creates (once) the host element of the bell inside the header account slot. */
export function bellHost(doc: Document = document): HTMLElement | null {
  const existing = doc.querySelector<HTMLElement>(`[${BELL_HOST_ATTRIBUTE}]`);
  if (existing) return existing;
  const slot = doc.querySelector<HTMLElement>('[data-account-slot]');
  if (!slot) return null;
  const host = doc.createElement('span');
  host.setAttribute(BELL_HOST_ATTRIBUTE, '');
  host.className = 'inline-flex';
  const user = slot.querySelector('[data-account-user]');
  if (user) slot.insertBefore(host, user);
  else slot.prepend(host);
  return host;
}

export function initSignalsBell(): void {
  if (started) return;
  started = true;
  void whenSession().then(async (summary) => {
    if (!summary) return;
    const host = bellHost();
    if (!host) return;
    try {
      const { renderBell } = await import('./render.tsx');
      await renderBell(host, summary.unreadNotifications);
    } catch (error) {
      // The account menu still lists Signals with its count: the bell is an enhancement.
      console.error('[signals] bell unavailable', error);
    }
  });
}
