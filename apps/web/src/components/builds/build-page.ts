/**
 * Vanilla behaviour of the build page (PLAN §2.5: public pages ship no framework runtime).
 *
 * - Follow ♥ (Backpack): the cached HTML is the guest version; with the `sotf_li` hint the state
 *   is read from `/api/v2/me/follows/lookup`. Toggling is optimistic, reverts on failure and offers
 *   «Undo» for a few seconds; guests (or an expired session) go to the sign-in page with `?next=`.
 * - Copy link / GUID / folder path with a spoken confirmation (`role="status"` region).
 * - Download clicks are recorded (`download_click`); the link itself does the download.
 * - Gallery: the numbered ticks follow the visible picture and scroll the strip (not the page).
 * - Reviews and comments: the WP-70 islands (`islands/comments/social.ts`).
 */
import {
  builds_copy_failed,
  builds_follow_error,
  builds_followed,
  builds_unfollowed,
  common_action_follow,
  common_action_following,
  common_followers_count,
} from '@sotf/i18n/messages';
import { initSocialIslands } from '../../islands/comments/social.ts';
import { hasSignedInHint } from '../../scripts/account-hint.ts';
import { track } from '../../scripts/beacon.ts';
import { whenSession } from '../../scripts/mod/session.ts';

const TOAST_MS = 6000;

interface FollowState {
  following: boolean;
  followers: number;
}

function reducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// -----------------------------------------------------------------------------------------------
// Status line (toast + undo)
// -----------------------------------------------------------------------------------------------

interface Toast {
  show(message: string, undo?: () => void): void;
}

function createToast(root: HTMLElement): Toast {
  const text = root.querySelector<HTMLElement>('[data-build-toast-text]');
  const undoButton = root.querySelector<HTMLButtonElement>('[data-build-undo]');
  let timer: number | undefined;
  let undoAction: (() => void) | undefined;
  undoButton?.addEventListener('click', () => {
    const action = undoAction;
    undoAction = undefined;
    if (undoButton) undoButton.hidden = true;
    if (text) text.textContent = '';
    delete root.dataset.open;
    window.clearTimeout(timer);
    action?.();
  });
  return {
    show(message, undo) {
      window.clearTimeout(timer);
      if (text) text.textContent = message;
      root.dataset.open = '';
      undoAction = undo;
      if (undoButton) undoButton.hidden = !undo;
      timer = window.setTimeout(() => {
        delete root.dataset.open;
        if (text) text.textContent = '';
        if (undoButton) undoButton.hidden = true;
        undoAction = undefined;
      }, TOAST_MS);
    },
  };
}

// -----------------------------------------------------------------------------------------------
// Follow
// -----------------------------------------------------------------------------------------------

async function readFollowState(modId: number): Promise<boolean | null> {
  try {
    const response = await fetch(`/api/v2/me/follows/lookup?mod=${modId}`, {
      credentials: 'same-origin',
      headers: { accept: 'application/json' },
    });
    if (!response.ok) return null;
    const body = (await response.json()) as { mods?: unknown };
    return Array.isArray(body.mods) && body.mods.includes(modId);
  } catch {
    return null;
  }
}

async function writeFollow(modId: number, follow: boolean): Promise<FollowState | 'unauthenticated'> {
  const response = await fetch(`/api/v2/mods/${modId}/follow`, {
    method: follow ? 'PUT' : 'DELETE',
    credentials: 'same-origin',
    // The API's CSRF rule requires a JSON content type on every mutation.
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify(follow ? { notify: true } : {}),
  });
  if (response.status === 401) return 'unauthenticated';
  if (!response.ok) throw new Error(`follow: ${response.status}`);
  return (await response.json()) as FollowState;
}

function initFollow(toast: Toast): void {
  const button = document.querySelector<HTMLButtonElement>('[data-follow]');
  if (!button) return;
  const modId = Number(button.dataset.modId);
  if (!Number.isInteger(modId) || modId <= 0) return;
  const label = button.querySelector<HTMLElement>('[data-follow-label]');
  const count = document.querySelector<HTMLElement>('[data-follow-count]');
  const loginHref = button.dataset.login ?? '/login';
  let following = false;
  const initialFollowers = Number(count?.dataset.followers);
  let followers: number | null = Number.isFinite(initialFollowers) ? initialFollowers : null;
  let busy = false;

  const paint = () => {
    button.setAttribute('aria-pressed', String(following));
    if (label) label.textContent = following ? common_action_following() : common_action_follow();
    if (count && followers !== null) count.textContent = common_followers_count({ count: followers });
  };

  if (hasSignedInHint()) {
    void readFollowState(modId).then((state) => {
      if (state === null || busy) return;
      following = state;
      paint();
    });
  }

  const toggle = async (next: boolean, withUndo: boolean) => {
    if (busy) return;
    busy = true;
    const previous = { following, followers };
    following = next;
    if (followers !== null) followers = Math.max(0, followers + (next ? 1 : -1));
    paint();
    try {
      const result = await writeFollow(modId, next);
      if (result === 'unauthenticated') {
        following = previous.following;
        followers = previous.followers;
        paint();
        window.location.assign(loginHref);
        return;
      }
      following = result.following;
      followers = result.followers;
      paint();
      if (next) track('follow', { entityType: 'build', entityId: modId });
      if (withUndo) {
        toast.show(next ? builds_followed() : builds_unfollowed(), () => void toggle(!next, false));
      }
    } catch {
      following = previous.following;
      followers = previous.followers;
      paint();
      toast.show(builds_follow_error());
    } finally {
      busy = false;
    }
  };

  // The button submits its GET form to the sign-in page: guests (and no-JS visitors) keep that.
  button.addEventListener('click', (event) => {
    if (!hasSignedInHint()) return;
    event.preventDefault();
    void toggle(!following, true);
  });
}

// -----------------------------------------------------------------------------------------------
// Copy
// -----------------------------------------------------------------------------------------------

async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

function canonicalHref(): string {
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  return canonical?.href || `${location.origin}${location.pathname}`;
}

function initCopy(toast: Toast): void {
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-copy-link], [data-copy-text]')) {
    button.addEventListener('click', async () => {
      const value = button.hasAttribute('data-copy-link') ? canonicalHref() : (button.dataset.copyText ?? '');
      if (!value) return;
      const ok = await copyText(value);
      toast.show(ok ? (button.dataset.copied ?? '') : builds_copy_failed());
    });
  }
}

// -----------------------------------------------------------------------------------------------
// Downloads
// -----------------------------------------------------------------------------------------------

function initDownloads(modId: number): void {
  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[data-download]') : null;
    if (!link) return;
    track('download_click', {
      entityType: 'build',
      entityId: modId,
      props: { version: link.dataset.download ?? '' },
    });
  });
}

// -----------------------------------------------------------------------------------------------
// Gallery
// -----------------------------------------------------------------------------------------------

function initGallery(): void {
  const track = document.querySelector<HTMLElement>('[data-gallery-track]');
  if (!track) return;
  const slides = [...track.children] as HTMLElement[];
  const ticks = [...document.querySelectorAll<HTMLAnchorElement>('[data-gallery-tick]')];
  if (slides.length < 2 || ticks.length === 0) return;

  const setCurrent = (index: number) => {
    ticks.forEach((tick, i) => {
      if (i === index) tick.setAttribute('aria-current', 'true');
      else tick.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          setCurrent(slides.indexOf(entry.target as HTMLElement));
        }
      }
    },
    { root: track, threshold: [0.6] },
  );
  for (const slide of slides) observer.observe(slide);

  ticks.forEach((tick, index) => {
    tick.addEventListener('click', (event) => {
      event.preventDefault();
      const slide = slides[index];
      if (!slide) return;
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: reducedMotion() ? 'auto' : 'smooth' });
      setCurrent(index);
    });
  });
}

// -----------------------------------------------------------------------------------------------

export function initBuildPage(): void {
  const root = document.querySelector<HTMLElement>('[data-build-page]');
  if (!root) return;
  const modId = Number(root.dataset.modId);
  const toastRoot = document.querySelector<HTMLElement>('[data-build-toast]');
  const toast = toastRoot ? createToast(toastRoot) : { show: () => {} };
  initFollow(toast);
  initCopy(toast);
  if (Number.isInteger(modId) && modId > 0) initDownloads(modId);
  initGallery();
  initSocial();
}

/**
 * Reviews and comments islands of WP-70 (same mount points as the mod page): guests keep the
 * server-rendered lists and download nothing but the tiny loaders; members also get rid of the
 * sign-in hints.
 */
function initSocial(): void {
  try {
    const session = whenSession();
    initSocialIslands(document, session);
    void session.then((summary) => {
      if (!summary) return;
      for (const hint of document.querySelectorAll<HTMLElement>(
        '[data-review-guest-hint], [data-comment-guest-hint]',
      )) {
        hint.hidden = true;
      }
    });
  } catch {
    // Progressive enhancement only: the server-rendered reviews and comments stay.
  }
}
