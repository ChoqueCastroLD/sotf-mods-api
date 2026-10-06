/**
 * One entry for the two social islands of the mod pages (WP-70): comments and reviews. Call it from the page script with the session promise:
 *
 *   import { initSocialIslands } from '../../islands/comments/social.ts';
 *   initSocialIslands(root, whenSession());
 *
 * The loaders are small; React and each island are separate lazy chunks fetched only when their
 * section approaches the viewport (and, for reviews, only for members).
 * Never throws: the server-rendered content stays usable if anything fails.
 */
import { bootReviews } from '../reviews/boot.ts';
import { bootComments } from './boot.ts';
import { initLiveCounts } from './lib/live-count.ts';
import type { MeSummary } from './lib/session.ts';

export function initSocialIslands(root: ParentNode, session: Promise<MeSummary | null>): void {
  try {
    initLiveCounts(root);
  } catch {
    // Progressive enhancement only.
  }
  for (const boot of [bootComments, bootReviews]) {
    try {
      void boot(root, session).catch(() => {});
    } catch {
      // Progressive enhancement only.
    }
  }
}
