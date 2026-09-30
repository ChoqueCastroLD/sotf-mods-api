/**
 * One entry for the three social islands of the mod pages (WP-70): comments, reviews and the
 * field report. Call it from the page script with the session promise:
 *
 *   import { initSocialIslands } from '../../islands/comments/social.ts';
 *   initSocialIslands(root, whenSession());
 *
 * The loaders are small; React and each island are separate lazy chunks fetched only when their
 * section approaches the viewport (and, for reviews and field reports, only for members).
 * Never throws: the server-rendered content stays usable if anything fails.
 */
import { bootFieldReport } from '../compat/boot.ts';
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
  for (const boot of [bootComments, bootReviews, bootFieldReport]) {
    try {
      void boot(root, session).catch(() => {});
    } catch {
      // Progressive enhancement only.
    }
  }
}
