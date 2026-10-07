/**
 * Follow ♥ (T0-16) for the mod and its creator, vanilla, optimistic with undo (PLAN §1.2).
 *
 * The cached HTML renders both as links to sign-in. For signed-in visitors the script asks
 * `GET /api/v2/me/follows/lookup` once, turns the links into toggle buttons (`aria-pressed`) and
 * sends `PUT`/`DELETE /api/v2/mods/:id/follow` or `/users/:handle/follow`; a failure reverts the
 * state and explains why. The follower count follows the server's answer.
 */
import type { MeSummary } from '../account-hint.ts';
import { pageEntity, track } from '../beacon.ts';
import { type ApiFailure, apiCall } from './api.ts';
import { plural } from './data.ts';
import { toast } from './toast.ts';
import type { ModPageData } from './types.ts';

interface FollowState {
  following: boolean;
  notify?: boolean;
  followers?: number;
}

type Target =
  | { kind: 'mod'; element: HTMLAnchorElement; id: number }
  | { kind: 'user'; element: HTMLAnchorElement; id: number; handle: string };

export function failureMessage(data: ModPageData, reason: ApiFailure): string {
  const messages = data.messages;
  switch (reason) {
    case 'unauthenticated':
      return messages.signInRequired;
    case 'email':
      return messages.verifyEmail;
    case 'rate':
      return messages.rateLimited;
    case 'offline':
      return messages.offline;
    default:
      return messages.error;
  }
}

function paint(element: Element, target: Target, data: ModPageData, following: boolean): void {
  // `aria-pressed` is only valid on buttons: the link becomes one once it is a toggle.
  if (element.localName === 'a') element.setAttribute('role', 'button');
  element.setAttribute('aria-pressed', following ? 'true' : 'false');
  const label = element.querySelector('[data-follow-label]');
  if (label) {
    const messages = data.messages;
    label.textContent =
      target.kind === 'mod'
        ? following
          ? messages.following
          : messages.follow
        : following
          ? messages.creatorFollowing
          : messages.creatorFollow;
  }
}

function setPressed(target: Target, data: ModPageData, following: boolean): void {
  // The mod has several follow buttons (header, sticky bar on phones): they always agree.
  if (target.kind === 'mod') {
    for (const element of target.element.ownerDocument.querySelectorAll('a[data-follow][data-mod-id]')) {
      paint(element, target, data, following);
    }
    return;
  }
  paint(target.element, target, data, following);
}

export function setFollowers(doc: Document, data: ModPageData, count: number): void {
  for (const element of doc.querySelectorAll<HTMLElement>('a[data-follow][data-mod-id]'))
    element.dataset.followers = String(count);
  const lang = doc.documentElement.lang || 'en';
  for (const element of doc.querySelectorAll<HTMLElement>('[data-follow-count-text]')) {
    element.textContent = plural(data.messages.followers, count, lang);
  }
}

function path(target: Target): string {
  return target.kind === 'mod'
    ? `/api/v2/mods/${target.id}/follow`
    : `/api/v2/users/${encodeURIComponent(target.handle)}/follow`;
}

async function send(target: Target, follow: boolean): Promise<ReturnType<typeof apiCall<FollowState>>> {
  return follow
    ? apiCall<FollowState>('PUT', path(target), { notify: true })
    : apiCall<FollowState>('DELETE', path(target));
}

function upgrade(target: Target, data: ModPageData, following: boolean, doc: Document): void {
  const { element } = target;
  element.setAttribute('role', 'button');
  setPressed(target, data, following);
  let busy = false;
  let followers = Number(element.dataset.followers ?? Number.NaN);

  const apply = async (follow: boolean, offerUndo: boolean): Promise<void> => {
    busy = true;
    // Live counters may have refreshed the figure since the page was rendered.
    const fresh = Number(element.dataset.followers);
    if (target.kind === 'mod' && Number.isFinite(fresh)) followers = fresh;
    element.setAttribute('aria-busy', 'true');
    setPressed(target, data, follow);
    if (target.kind === 'mod' && Number.isFinite(followers))
      setFollowers(doc, data, Math.max(0, followers + (follow ? 1 : -1)));
    const result = await send(target, follow);
    busy = false;
    element.removeAttribute('aria-busy');
    if (!result.ok) {
      setPressed(target, data, !follow);
      if (target.kind === 'mod' && Number.isFinite(followers)) setFollowers(doc, data, followers);
      toast(failureMessage(data, result.reason), undefined, 'error');
      return;
    }
    if (target.kind === 'mod') {
      const next = result.data?.followers;
      if (typeof next === 'number') {
        followers = next;
        element.dataset.followers = String(next);
        setFollowers(doc, data, next);
      } else if (Number.isFinite(followers)) {
        followers = Math.max(0, followers + (follow ? 1 : -1));
      }
      if (follow) track('follow', { ...pageEntity(), props: { target: 'mod' } });
    } else if (follow) {
      track('follow', { entityType: 'user', entityId: target.id, props: { target: 'user' } });
    }
    if (!offerUndo) return;
    const messages = data.messages;
    const text =
      target.kind === 'mod'
        ? follow
          ? messages.followed
          : messages.unfollowed
        : follow
          ? messages.creatorFollowed
          : messages.creatorUnfollowed;
    toast(text, { label: messages.undo, onClick: () => void apply(!follow, false) }, 'success');
  };

  element.addEventListener('click', (event) => {
    event.preventDefault();
    if (busy) return;
    void apply(element.getAttribute('aria-pressed') !== 'true', true);
  });
  // A link with role=button also answers to Space.
  element.addEventListener('keydown', (event) => {
    if (event.key !== ' ' || !(event instanceof KeyboardEvent)) return;
    event.preventDefault();
    element.click();
  });
}

export async function initFollow(
  root: HTMLElement,
  data: ModPageData,
  session: MeSummary | null,
  doc: Document = document,
): Promise<void> {
  if (!session) return;
  const targets: Target[] = [];
  for (const element of root.querySelectorAll<HTMLAnchorElement>('a[data-follow][data-mod-id]')) {
    const id = Number(element.dataset.modId);
    if (Number.isInteger(id) && id > 0) targets.push({ kind: 'mod', element, id });
  }
  for (const element of root.querySelectorAll<HTMLAnchorElement>('a[data-follow-user][data-follow-user-id]')) {
    const id = Number(element.dataset.followUserId);
    const handle = element.dataset.followUser ?? '';
    // Following yourself makes no sense: hide the button on your own mods.
    if (id === session.id) {
      element.hidden = true;
      continue;
    }
    if (Number.isInteger(id) && id > 0 && handle) targets.push({ kind: 'user', element, id, handle });
  }
  if (targets.length === 0) return;
  const query = new URLSearchParams();
  for (const target of targets) query.append(target.kind === 'mod' ? 'mod' : 'user', String(target.id));
  const lookup = await apiCall<{ mods: number[]; users: number[] }>(
    'GET',
    `/api/v2/me/follows/lookup?${query.toString()}`,
  );
  const mods = new Set(lookup.ok ? lookup.data.mods : []);
  const users = new Set(lookup.ok ? lookup.data.users : []);
  for (const target of targets) {
    upgrade(target, data, target.kind === 'mod' ? mods.has(target.id) : users.has(target.id), doc);
  }
}
