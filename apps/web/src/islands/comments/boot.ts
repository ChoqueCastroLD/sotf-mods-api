/**
 * Loader of the comments island (tiny, part of the page script): waits until the comments
 * section is near the viewport — or loads at once for a `#comment-{id}` / `#comments` link — then
 * imports React and the island (lazy chunk). Guests get sort, «Load more» and full threads;
 * members also get the editor and actions. Never throws (progressive enhancement: the
 * server-rendered comments stay).
 */

import { commentHash, intData, loginHrefOf, siblingHref, turnstileSiteKey, whenNear } from './lib/mount-point.ts';
import type { MeSummary } from './lib/session.ts';

export async function bootComments(root: ParentNode, session: Promise<MeSummary | null>): Promise<void> {
  const mount = root.querySelector<HTMLElement>('[data-island="comments"]');
  if (!mount || mount.dataset.hydrated !== undefined) return;
  const modId = intData(mount, 'modId');
  const modAuthorId = intData(mount, 'modAuthorId');
  if (!modId || !modAuthorId) return;
  const section = mount.closest('section') ?? mount;
  const focusId = commentHash();
  if (focusId === null && location.hash !== '#comments') await whenNear(section);
  const loginHref = loginHrefOf(mount, '[data-comment-guest-hint]');
  const [summary, { mountComments }] = await Promise.all([session, import('./mount.tsx')]);
  await mountComments(mount, {
    modId,
    modAuthorId,
    session: summary,
    loginHref,
    verifyHref: siblingHref(loginHref, '/verify-email'),
    turnstileSiteKey: turnstileSiteKey(mount),
    focusId,
    onTakeOver: () => {
      // The island now renders the list: drop the server-rendered copy (and its duplicate ids).
      for (const child of Array.from(section.children)) {
        if (child !== mount && !child.matches('h2, h3')) child.remove();
      }
    },
  });
}
