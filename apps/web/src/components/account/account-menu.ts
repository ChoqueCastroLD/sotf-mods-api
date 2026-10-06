/**
 * Account menu of the header (vanilla, public pages: PLAN §8.2 JS ≤ 15 KB). Fills the menu rendered
 * by `HeaderAccount.astro` from the `sotf:account` event of `scripts/account-hint.ts`:
 * name and handle, the profile link, the unread notification count, Moderation for moderators and admins,
 * and the «verify your email» reminder with a resend button. The native `popover` gives Esc,
 * light dismiss and focus return; the sign-out form keeps the page to come back to.
 */
import type { MeSummary } from '../../scripts/account-hint.ts';
import { ACCOUNT_EVENT } from '../../scripts/account-hint.ts';

const STAFF_ROLES: ReadonlySet<string> = new Set(['moderator', 'admin']);

function setText(root: ParentNode, selector: string, text: string): void {
  const node = root.querySelector(selector);
  if (node) node.textContent = text;
}

function show(node: Element | null, visible: boolean): void {
  if (node instanceof HTMLElement) node.hidden = !visible;
}

/** Paints the menu for a signed-in user (exported for tests). */
export function fillAccountMenu(menu: HTMLElement, summary: MeSummary): void {
  setText(menu, '[data-menu-name]', summary.displayName || summary.handle);
  setText(menu, '[data-menu-handle]', `@${summary.handle}`);
  const profile = menu.querySelector<HTMLAnchorElement>('[data-menu-profile]');
  const base = menu.dataset.profileBase ?? '/profile';
  if (profile) profile.href = `${base}/${encodeURIComponent(summary.handle)}`;
  const unread = summary.unreadNotifications;
  const badge = menu.querySelector('[data-menu-unread]');
  setText(menu, '[data-menu-unread-count]', unread > 99 ? '99+' : String(unread));
  show(badge, unread > 0);
  // The phone tab bar carries the same count on its Notifications tab.
  const tabBadge = menu.ownerDocument.querySelector('[data-tab-unread]');
  if (tabBadge) tabBadge.textContent = unread > 99 ? '99+' : String(unread);
  show(tabBadge, unread > 0);
  show(menu.querySelector('[data-menu-moderation]'), STAFF_ROLES.has(summary.role));
  show(menu.querySelector('[data-menu-unverified]'), !summary.emailVerified);
}

/** Resends the verification email from the menu reminder. */
export async function resendVerification(button: HTMLButtonElement, fetchImpl: typeof fetch = fetch): Promise<void> {
  const status = button.parentElement?.querySelector('[data-menu-resend-status]');
  button.disabled = true;
  let label = button.dataset.labelFailed ?? '';
  let done = false;
  try {
    const response = await fetchImpl('/api/v2/auth/email/resend', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { accept: 'application/json', 'content-type': 'application/json' },
      body: '{}',
    });
    if (response.ok) {
      label = button.dataset.labelSent ?? '';
      done = true;
    } else if (response.status === 409) {
      label = button.dataset.labelVerified ?? '';
      done = true;
    }
  } catch {
    // Network failure: keep the button usable.
  }
  if (status) status.textContent = label;
  button.disabled = done;
}

let initialized = false;

export function initAccountMenu(doc: Document = document): void {
  if (initialized) return;
  const menu = doc.querySelector<HTMLElement>('[data-account-menu]');
  if (!menu) return;
  initialized = true;
  window.addEventListener(ACCOUNT_EVENT, (event) => {
    const summary = (event as CustomEvent<MeSummary>).detail;
    if (summary) fillAccountMenu(menu, summary);
  });
  menu.querySelector<HTMLButtonElement>('[data-menu-resend]')?.addEventListener('click', (event) => {
    void resendVerification(event.currentTarget as HTMLButtonElement);
  });
  // The sign-out form returns to the page the user is on right now (with its locale prefix).
  menu.querySelector<HTMLFormElement>('[data-menu-logout]')?.addEventListener('submit', (event) => {
    const form = event.currentTarget as HTMLFormElement;
    const next = form.elements.namedItem('next');
    if (next instanceof HTMLInputElement) next.value = `${location.pathname}${location.search}`;
  });
}

/** Test hook. */
export function resetAccountMenuForTests(): void {
  initialized = false;
}
