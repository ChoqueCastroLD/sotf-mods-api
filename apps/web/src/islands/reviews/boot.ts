/**
 * Loader of the reviews island (tiny, part of the page script). Signed-in visitors only: guests
 * keep the server-rendered reviews and the sign-in hint and download nothing. On the overview it
 * waits until the reviews section is near the viewport; on `/reviews` it loads at once.
 */

import { intData, siblingHref, whenNear } from '../comments/lib/mount-point.ts';
import type { MeSummary } from '../comments/lib/session.ts';
import type { ReviewSort } from './types.ts';

const SORTS: readonly ReviewSort[] = ['helpful', 'new', 'critical'];
/** Page sizes of the server-rendered lists (components/mod/data.ts). */
const OVERVIEW_LIMIT = 3;
const PAGE_LIMIT = 20;

function listContainer(ssrList: Element | null, fallback: (container: HTMLElement) => void): HTMLElement {
  const container = document.createElement('div');
  container.dataset.reviewListIsland = '';
  if (ssrList) ssrList.after(container);
  else fallback(container);
  return container;
}

export async function bootReviews(root: ParentNode, session: Promise<MeSummary | null>): Promise<void> {
  const overview = root.querySelector<HTMLElement>('[data-island="reviews"]');
  const page = root.querySelector<HTMLElement>('[data-island="reviews-write"]');
  const mount = page ?? overview;
  if (!mount || mount.dataset.hydrated !== undefined) return;
  const modId = intData(mount, 'modId');
  const modAuthorId = intData(mount, 'modAuthorId');
  if (!modId || !modAuthorId) return;
  const summary = await session;
  if (!summary) return;
  const section = mount.closest('section') ?? mount;
  const startWriting = location.hash === '#write-review';
  if (!page && !startWriting) await whenNear(section);

  const loginLink = document.querySelector<HTMLAnchorElement>('a[href*="/login?next="]');
  const verifyHref = siblingHref(loginLink?.getAttribute('href') ?? '/login', '/verify-email');
  const creatorName = mount.dataset.modAuthorName || undefined;

  let ssrList: Element | null;
  let listTarget: HTMLElement;
  let list: { sort: ReviewSort; cursor: string | null; limit: number };
  let reviewsHref: string | null = null;
  if (page) {
    ssrList = document.querySelector('ul[data-review-list]');
    const params = new URLSearchParams(location.search);
    const sort = SORTS.find((value) => value === params.get('sort')) ?? 'helpful';
    const cursor = params.get('cursor');
    list = { sort, cursor: cursor && /^[A-Za-z0-9_-]{1,200}$/.test(cursor) ? cursor : null, limit: PAGE_LIMIT };
    listTarget = listContainer(ssrList, (container) => mount.after(container));
  } else {
    // Mod overview: the list is a direct child; build pages: next to the histogram, marked.
    ssrList = section.querySelector(':scope > ul, ul[data-review-list]');
    list = { sort: 'helpful', cursor: null, limit: OVERVIEW_LIMIT };
    listTarget = listContainer(ssrList, (container) => mount.before(container));
    const link = mount.querySelector<HTMLAnchorElement>('a[data-review-write]');
    reviewsHref = link ? (link.getAttribute('href') ?? '').replace(/#.*$/, '') || null : null;
  }

  const { mountReviews } = await import('./mount.tsx');
  await mountReviews(mount, {
    mode: page ? 'page' : 'overview',
    modId,
    modAuthorId,
    creatorName,
    session: summary,
    verifyHref,
    listTarget,
    list,
    reviewsHref,
    startWriting,
    onTakeOver: () => {
      ssrList?.remove();
      ssrList = null;
    },
  });
}
