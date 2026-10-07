/**
 * Vanilla behaviour of the profile (PLAN §2.5: public pages ship no
 * framework runtime).
 *
 * - Follow a creator (T0-16): the cached HTML is the guest version (a GET form to the sign-in page
 *   with `?next=`). With the `sotf_li` hint the session and the follow state of every creator on the
 *   page are read once (`/api/v2/me/follows/lookup?user=…`); toggling is optimistic, reverts on
 *   failure and offers «Undo». Your own profile hides «Follow» and reveals «Edit profile».
 * - Share: the native share sheet where available, the clipboard otherwise.
 */
import {
  common_action_follow,
  common_action_following,
  profile_follow_done,
  profile_follow_error,
  profile_follow_own,
  profile_follow_verify_email,
  profile_link_copy_failed,
  profile_unfollowed,
} from '@sotf/i18n/messages';
import { pageToast, type PageToast as Toast } from '../../lib/client/toast.ts';
import { hasSignedInHint } from '../../scripts/account-hint.ts';
import { track } from '../../scripts/beacon.ts';
import { whenSession } from '../../scripts/mod/session.ts';

// -----------------------------------------------------------------------------------------------
// Status line (toast + undo)
// -----------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------
// Follow
// -----------------------------------------------------------------------------------------------

interface FollowTarget {
  button: HTMLButtonElement;
  id: number;
  handle: string;
  following: boolean;
  busy: boolean;
}

type WriteResult =
  | { ok: true; following: boolean; followers: number }
  | { ok: false; status: number; code: string | null };

async function writeFollow(handle: string, follow: boolean): Promise<WriteResult> {
  try {
    const response = await fetch(`/api/v2/users/${encodeURIComponent(handle)}/follow`, {
      method: follow ? 'PUT' : 'DELETE',
      credentials: 'same-origin',
      // The API's CSRF rule requires a JSON content type on every mutation.
      headers: { accept: 'application/json', 'content-type': 'application/json' },
      body: JSON.stringify(follow ? { notify: true } : {}),
    });
    if (!response.ok) {
      let code: string | null = null;
      try {
        const problem = (await response.json()) as { code?: unknown };
        code = typeof problem.code === 'string' ? problem.code : null;
      } catch {
        code = null;
      }
      return { ok: false, status: response.status, code };
    }
    const body = (await response.json()) as { following?: unknown; followers?: unknown };
    return {
      ok: true,
      following: body.following === true,
      followers: typeof body.followers === 'number' ? body.followers : Number.NaN,
    };
  } catch {
    return { ok: false, status: 0, code: null };
  }
}

async function readFollowed(ids: readonly number[]): Promise<Set<number> | null> {
  if (ids.length === 0) return new Set();
  const query = new URLSearchParams();
  for (const id of ids.slice(0, 100)) query.append('user', String(id));
  try {
    const response = await fetch(`/api/v2/me/follows/lookup?${query.toString()}`, {
      credentials: 'same-origin',
      headers: { accept: 'application/json' },
    });
    if (!response.ok) return null;
    const body = (await response.json()) as { users?: unknown };
    return new Set(Array.isArray(body.users) ? body.users.filter((id): id is number => typeof id === 'number') : []);
  } catch {
    return null;
  }
}

function formatCount(value: number): string {
  const lang = document.documentElement.lang || 'en';
  return new Intl.NumberFormat(lang, { notation: 'compact', maximumFractionDigits: 1 }).format(value);
}

function paint(target: FollowTarget): void {
  target.button.setAttribute('aria-pressed', String(target.following));
  const label = target.button.querySelector<HTMLElement>('[data-follow-label]');
  if (label) label.textContent = target.following ? common_action_following() : common_action_follow();
}

/** Follower count of the profile header (only the profile's own button carries `data-followers`). */
function paintFollowers(target: FollowTarget, followers: number): void {
  if (!target.button.hasAttribute('data-followers')) return;
  target.button.dataset.followers = String(followers);
  for (const element of document.querySelectorAll<HTMLElement>('[data-follow-count]')) {
    element.dataset.followers = String(followers);
    element.textContent = formatCount(followers);
    element.parentElement?.setAttribute(
      'title',
      new Intl.NumberFormat(document.documentElement.lang || 'en').format(followers),
    );
  }
}

function currentFollowers(target: FollowTarget): number | null {
  const value = Number(target.button.dataset.followers);
  return Number.isFinite(value) && target.button.hasAttribute('data-followers') ? value : null;
}

async function toggle(target: FollowTarget, next: boolean, toast: Toast, withUndo: boolean): Promise<void> {
  if (target.busy) return;
  target.busy = true;
  target.button.setAttribute('aria-busy', 'true');
  const previous = target.following;
  const previousFollowers = currentFollowers(target);
  target.following = next;
  paint(target);
  if (previousFollowers !== null) paintFollowers(target, Math.max(0, previousFollowers + (next ? 1 : -1)));

  const result = await writeFollow(target.handle, next);
  target.busy = false;
  target.button.removeAttribute('aria-busy');
  if (!result.ok) {
    target.following = previous;
    paint(target);
    if (previousFollowers !== null) paintFollowers(target, previousFollowers);
    if (result.status === 401) {
      // Expired session: the form's own submission goes to the sign-in page.
      target.button.form?.submit();
      return;
    }
    toast.show(
      result.code === 'EMAIL_NOT_VERIFIED'
        ? profile_follow_verify_email()
        : result.status === 403
          ? profile_follow_own()
          : profile_follow_error(),
      undefined,
      'error',
    );
    return;
  }
  target.following = result.following;
  paint(target);
  if (Number.isFinite(result.followers)) paintFollowers(target, result.followers);
  if (next) track('follow', { entityType: 'user', entityId: target.id, props: { target: 'user' } });
  if (withUndo) {
    toast.show(next ? profile_follow_done() : profile_unfollowed(), () => void toggle(target, !next, toast, false));
  }
}

async function initFollow(toast: Toast): Promise<void> {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('button[data-follow-user][data-follow-user-id]')];
  const targets: FollowTarget[] = [];
  for (const button of buttons) {
    const id = Number(button.dataset.followUserId);
    const handle = button.dataset.followUser ?? '';
    if (!Number.isInteger(id) || id <= 0 || !handle) continue;
    targets.push({ button, id, handle, following: false, busy: false });
  }
  if (targets.length === 0 || !hasSignedInHint()) return;

  const session = await whenSession();
  if (!session) return;
  const others: FollowTarget[] = [];
  for (const target of targets) {
    if (target.id === session.id) {
      // Your own profile or card: no «Follow», but «Edit profile» on the profile page.
      target.button.closest('form')?.setAttribute('hidden', '');
      target.button.hidden = true;
      for (const edit of document.querySelectorAll<HTMLElement>('[data-profile-edit]')) edit.hidden = false;
      continue;
    }
    others.push(target);
  }
  for (const target of others) {
    target.button.addEventListener('click', (event) => {
      event.preventDefault();
      void toggle(target, !target.following, toast, true);
    });
  }
  const followed = await readFollowed(others.map((target) => target.id));
  if (!followed) return;
  for (const target of others) {
    if (target.busy) continue;
    target.following = followed.has(target.id);
    paint(target);
  }
}

// -----------------------------------------------------------------------------------------------
// Share
// -----------------------------------------------------------------------------------------------

function canonicalHref(): string {
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  return canonical?.href || `${location.origin}${location.pathname}`;
}

function initShare(toast: Toast): void {
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-profile-share]')) {
    button.addEventListener('click', async () => {
      const url = canonicalHref();
      const title = button.dataset.shareTitle ?? document.title;
      if (typeof navigator.share === 'function' && window.matchMedia('(pointer: coarse)').matches) {
        try {
          await navigator.share({ title, url });
          return;
        } catch (error) {
          // The user closed the sheet: nothing to report.
          if (error instanceof DOMException && error.name === 'AbortError') return;
        }
      }
      try {
        await navigator.clipboard.writeText(url);
        toast.show(button.dataset.copied ?? '', undefined, 'success');
      } catch {
        toast.show(profile_link_copy_failed(), undefined, 'error');
      }
    });
  }
}

// -----------------------------------------------------------------------------------------------

export function initProfilePage(): void {
  const toast = pageToast();
  void initFollow(toast);
  initShare(toast);
}
