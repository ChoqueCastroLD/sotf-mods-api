/**
 * Vanilla behaviour of the build page (PLAN §2.5: public pages ship no framework runtime).
 *
 * - Follow: the cached HTML is the guest version; with the `sotf_li` hint the state
 *   is read from `/api/v2/me/follows/lookup`. Toggling is optimistic, reverts on failure and offers
 *   «Undo» for a few seconds; guests (or an expired session) go to the sign-in page with `?next=`.
 * - Copy link / GUID / folder path with a spoken confirmation (`role="status"` region).
 * - Download clicks are recorded (`download_click`); the link itself does the download.
 * - Gallery: the numbered ticks follow the visible picture and scroll the strip (not the page).
 * - Reviews and comments: the WP-70 islands (`islands/comments/social.ts`).
 * - «Report»: the mod page's report dialog (`scripts/mod/{dialogs,report}.ts`).
 */
import {
  builds_copy_failed,
  builds_follow_error,
  builds_followed,
  builds_link_copied,
  builds_unfollowed,
  common_action_follow,
  common_action_following,
  common_downloads_compact,
  common_followers_count,
} from '@sotf/i18n/messages';
import { initSocialIslands } from '../../islands/comments/social.ts';
import { pageToast, type PageToast as Toast } from '../../lib/client/toast.ts';
import { hasSignedInHint } from '../../scripts/account-hint.ts';
import { track } from '../../scripts/beacon.ts';
import { initCarousels } from '../../scripts/mod/carousel.ts';
import { DIALOG_OPEN_EVENT, type DialogOpenDetail, initDialogs } from '../../scripts/mod/dialogs.ts';
import { initFolds } from '../../scripts/mod/fold.ts';
import { initGallery as initLightboxGallery } from '../../scripts/mod/gallery.ts';
import { compactFormat, startLiveCounters } from '../../scripts/mod/live.ts';
import { initSectionNav } from '../../scripts/mod/section-nav.ts';
import { whenSession } from '../../scripts/mod/session.ts';
import { initSheetSections } from '../../scripts/mod/sheets.ts';
import { initVersions } from '../../scripts/mod/versions.ts';

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
  // Header button and the sticky bar of phones: same contract, always painted together.
  const buttons = Array.from(document.querySelectorAll<HTMLElement>('[data-follow]'));
  const button = buttons[0];
  if (!button) return;
  const modId = Number(button.dataset.modId);
  if (!Number.isInteger(modId) || modId <= 0) return;
  const count = document.querySelector<HTMLElement>('[data-follow-count]');
  const loginHref = button.dataset.login ?? '/login';
  let following = false;
  const initialFollowers = Number(count?.dataset.followers);
  let followers: number | null = Number.isFinite(initialFollowers) ? initialFollowers : null;
  let busy = false;

  const paint = () => {
    for (const item of buttons) {
      item.setAttribute('aria-pressed', String(following));
      const label = item.querySelector<HTMLElement>('[data-follow-label]');
      if (label) label.textContent = following ? common_action_following() : common_action_follow();
    }
    if (count && followers !== null) {
      count.textContent = common_followers_count({ count: followers });
      count.dataset.followers = String(followers);
    }
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
    // The live counters may have refreshed the figure since the page was rendered.
    const fresh = Number(count?.dataset.followers);
    if (Number.isFinite(fresh)) followers = fresh;
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
      toast.show(builds_follow_error(), undefined, 'error');
    } finally {
      busy = false;
    }
  };

  // The header button submits its GET form to the sign-in page, the bar's is a link to it: guests
  // (and no-JS visitors) keep that.
  for (const item of buttons) {
    item.addEventListener('click', (event) => {
      if (!hasSignedInHint()) return;
      event.preventDefault();
      void toggle(!following, true);
    });
  }
}

// -----------------------------------------------------------------------------------------------
// Live counters
// -----------------------------------------------------------------------------------------------

function initLive(modId: number): void {
  const lang = document.documentElement.lang || 'en';
  const compact = compactFormat(lang);
  const full = new Intl.NumberFormat(lang);
  startLiveCounters(modId, (live) => {
    for (const element of document.querySelectorAll<HTMLElement>('[data-live="downloads-stat"]')) {
      element.textContent = common_downloads_compact({
        count: live.downloads,
        display: compact.format(live.downloads),
      });
      const item = element.closest<HTMLElement>('[data-live-downloads]');
      if (item) item.title = full.format(live.downloads);
    }
    for (const element of document.querySelectorAll<HTMLElement>('[data-live="downloads-full"]'))
      element.textContent = full.format(live.downloads);
    const count = document.querySelector<HTMLElement>('[data-follow-count]');
    if (count) {
      count.textContent = common_followers_count({ count: live.followers });
      count.dataset.followers = String(live.followers);
    }
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
      toast.show(ok ? (button.dataset.copied ?? '') : builds_copy_failed(), undefined, ok ? 'success' : 'error');
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
  const toast = pageToast();
  initFollow(toast);
  initCopy(toast);
  if (Number.isInteger(modId) && modId > 0) {
    initDownloads(modId);
    initLive(modId);
  }
  initGallery();
  initReport();
  initShareAction(toast);
  // Phones: native-feeling gallery, sheets for comments/reviews/versions, collapsible sections.
  safely(() => initCarousels(root));
  safely(() => initLightboxGallery(document.body, null));
  safely(() => initSheetSections(document.body));
  safely(() => initVersions(document.body));
  safely(() => initFolds(root));
  safely(() => initSectionNav(document));
  // The sheets must hold their sections before the islands look for their mount points.
  initSocial();
}

function safely(task: () => unknown): void {
  try {
    task();
  } catch {
    // Progressive enhancement only.
  }
}

/** «Share» of the sheet: the system share sheet where there is one, else the link is copied. */
function initShareAction(toast: Toast): void {
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-share-action]')) {
    button.addEventListener('click', async () => {
      const title = document.querySelector('h1')?.textContent?.trim() ?? document.title;
      const url = canonicalHref();
      button.closest('dialog')?.close();
      if (typeof navigator.share === 'function') {
        await navigator.share({ title, url }).catch(() => {});
        return;
      }
      const copied = await copyText(url);
      toast.show(copied ? builds_link_copied() : builds_copy_failed(), undefined, copied ? 'success' : 'error');
    });
  }
}

/** «Report» opens the shared report dialog; its form is bound lazily on the first opening. */
function initReport(): void {
  try {
    initDialogs(document.body, document);
    document.addEventListener(DIALOG_OPEN_EVENT, (event) => {
      const { id, dialog } = (event as CustomEvent<DialogOpenDetail>).detail;
      if (id !== 'report-dialog') return;
      void whenSession().then((summary) =>
        import('../../scripts/mod/report.ts').then(({ bindReport }) => bindReport(dialog, summary)),
      );
    });
  } catch {
    // Progressive enhancement only: the button stays hidden without JavaScript.
  }
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
