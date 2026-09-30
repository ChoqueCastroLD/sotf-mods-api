/**
 * Loaders of the request board islands (tiny, part of the page script). Guests (and crawlers) keep
 * the server-rendered page and download nothing; signed-in members get the interactive parts.
 * Never throws: a failed request leaves the server-rendered content in place.
 */

import { get } from '../comments/lib/api.ts';
import { intData, loginHrefOf, siblingHref } from '../comments/lib/mount-point.ts';
import type { MeSummary } from '../comments/lib/session.ts';
import type { CursorPage, MyRequestVotesDTO, RequestCommentDTO, RequestDTO } from './types.ts';

export const COMMENTS_PAGE_SIZE = 50;

/** `/requests/:id`: vote, status actions, edit, report and the comment thread. */
export async function bootRequestPage(root: ParentNode, session: Promise<MeSummary | null>): Promise<void> {
  const mount = root.querySelector<HTMLElement>('[data-island="request"]');
  if (!mount || mount.dataset.hydrated !== undefined) return;
  const id = intData(mount, 'requestId');
  if (!id) return;
  const summary = await session;
  if (!summary) return;
  const loginHref = loginHrefOf(mount, '[data-request-guest-hint]');
  const [request, comments, votes, { mountRequestPage }] = await Promise.all([
    get<RequestDTO>(`/api/v2/requests/${id}`),
    get<CursorPage<RequestCommentDTO>>(`/api/v2/requests/${id}/comments?limit=${COMMENTS_PAGE_SIZE}`),
    get<MyRequestVotesDTO>('/api/v2/me/request-votes'),
    import('./mount.tsx'),
  ]);
  if (!request.ok || !comments.ok) return;
  await mountRequestPage(mount, {
    request: request.data,
    comments: comments.data,
    voted: votes.ok ? votes.data.requestIds.includes(id) : false,
    session: summary,
    loginHref,
    verifyHref: siblingHref(loginHref, '/verify-email'),
    listHref: siblingHref(loginHref, '/requests'),
  });
}

/** `/requests/new`: the form that posts a request. */
export async function bootNewRequest(root: ParentNode, session: Promise<MeSummary | null>): Promise<void> {
  const mount = root.querySelector<HTMLElement>('[data-island="request-new"]');
  if (!mount || mount.dataset.hydrated !== undefined) return;
  const summary = await session;
  if (!summary) return;
  const loginHref = loginHrefOf(mount, '[data-request-guest-hint]');
  const { mountNewRequest } = await import('./mount.tsx');
  await mountNewRequest(mount, {
    session: summary,
    verifyHref: siblingHref(loginHref, '/verify-email'),
    listHref: siblingHref(loginHref, '/requests'),
  });
}
