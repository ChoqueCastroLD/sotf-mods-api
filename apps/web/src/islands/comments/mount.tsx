/**
 * Lazy chunk of the comments island: React + the island, rendered into its mount point.
 */
import { createRoot } from 'react-dom/client';
import { CommentsIsland, type CommentsIslandProps } from './CommentsIsland.tsx';
import { loadSocialMessages } from './lib/messages.ts';

export async function mountComments(element: HTMLElement, props: CommentsIslandProps): Promise<void> {
  if (element.dataset.hydrated !== undefined) return;
  element.dataset.hydrated = '';
  // The page locale's catalogue first; offline, the server-rendered content stays.
  if (!(await loadSocialMessages())) {
    delete element.dataset.hydrated;
    return;
  }
  element.replaceChildren();
  createRoot(element).render(<CommentsIsland {...props} />);
}
