/**
 * Header account hint (PLAN §2.5, §5.1, §8.5). Public HTML is the guest version for everyone;
 * the API sets the non-sensitive cookie `sotf_li=1` at sign-in. Only when it is present does the
 * page call `/api/v2/me/summary` and upgrade the header slot — guests never pay for a request.
 *
 * `<html data-signed-in>` / `<html data-guest>` tell the other scripts (ads are guests-only) and
 * CSS what to do; `sotf:account` (on `window`) carries the summary to islands (Signals bell).
 */
import type { MeSummaryDTO as MeSummarySchema } from '@sotf/contracts/me';
import type { z } from 'zod';

export type MeSummary = z.output<typeof MeSummarySchema>;

export const ACCOUNT_EVENT = 'sotf:account';
const HINT = /(?:^|;\s*)sotf_li=1(?:;|$)/;

export function hasSignedInHint(cookie: string = document.cookie): boolean {
  return HINT.test(cookie);
}

/** Two-letter initials: first letters of the first two words, or the first two of a single word. */
export function initialsOf(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  const letters =
    words.length > 1
      ? words.slice(0, 2).map((word) => Array.from(word)[0] ?? '')
      : Array.from(words[0] ?? '').slice(0, 2);
  return letters.join('').toUpperCase();
}

function paint(doc: Document, summary: MeSummary): void {
  const slot = doc.querySelector<HTMLElement>('[data-account-slot]');
  if (!slot) return;
  const guest = slot.querySelector<HTMLElement>('[data-account-guest]');
  const user = slot.querySelector<HTMLAnchorElement>('[data-account-user]');
  if (!user) return;
  const label = `${summary.displayName} (@${summary.handle})`;
  const name = user.querySelector('[data-account-name]');
  if (name) name.textContent = label;
  user.title = label;
  const initials = user.querySelector('[data-account-initials]');
  if (summary.avatarUrl) {
    const img = doc.createElement('img');
    img.src = summary.avatarUrl;
    img.alt = '';
    img.width = 40;
    img.height = 40;
    img.decoding = 'async';
    img.className = 'size-10 object-cover';
    initials?.replaceWith(img);
  } else if (initials) {
    initials.textContent = initialsOf(summary.displayName || summary.handle);
  }
  user.hidden = false;
  if (guest) guest.hidden = true;
}

/** Resolves the signed-in summary, or `null` for guests (and stale hints). */
export async function initAccountHint(doc: Document = document): Promise<MeSummary | null> {
  const root = doc.documentElement;
  if (!hasSignedInHint(doc.cookie)) {
    root.dataset.guest = '';
    return null;
  }
  root.dataset.signedIn = '';
  try {
    const response = await fetch('/api/v2/me/summary', {
      credentials: 'same-origin',
      headers: { accept: 'application/json' },
    });
    if (!response.ok) {
      // Expired session with a leftover hint: behave as a guest for this view.
      delete root.dataset.signedIn;
      root.dataset.guest = '';
      return null;
    }
    const summary = (await response.json()) as MeSummary;
    paint(doc, summary);
    window.dispatchEvent(new CustomEvent<MeSummary>(ACCOUNT_EVENT, { detail: summary }));
    return summary;
  } catch {
    // Offline or API down: keep the guest markup; nothing else depends on it.
    return null;
  }
}
