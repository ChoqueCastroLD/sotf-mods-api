/**
 * Lazy chunk of the reviews island: React + the island, rendered into its mount point.
 */
import { createRoot } from 'react-dom/client';
import { loadSocialMessages } from '../comments/lib/messages.ts';
import { ReviewsIsland, type ReviewsIslandProps } from './ReviewsIsland.tsx';

export async function mountReviews(element: HTMLElement, props: ReviewsIslandProps): Promise<void> {
  if (element.dataset.hydrated !== undefined) return;
  element.dataset.hydrated = '';
  // The page locale's catalogue first; offline, the server-rendered content stays.
  if (!(await loadSocialMessages())) {
    delete element.dataset.hydrated;
    return;
  }
  element.replaceChildren();
  createRoot(element).render(<ReviewsIsland {...props} />);
}
