/**
 * Lazy chunk of the request board islands: React + the island, rendered into its mount point.
 */
import { createRoot } from 'react-dom/client';
import { loadExtraMessages, loadSocialMessages } from '../comments/lib/messages.ts';
import { NewRequestIsland, type NewRequestIslandProps } from './NewRequestIsland.tsx';
import { RequestIsland, type RequestIslandProps } from './RequestIsland.tsx';

async function ready(element: HTMLElement): Promise<boolean> {
  if (element.dataset.hydrated !== undefined) return false;
  element.dataset.hydrated = '';
  // The page locale's catalogues first; offline, the server-rendered content stays.
  if (!(await loadSocialMessages()) || !(await loadExtraMessages('requests'))) {
    delete element.dataset.hydrated;
    return false;
  }
  return true;
}

export async function mountRequestPage(element: HTMLElement, props: RequestIslandProps): Promise<void> {
  if (!(await ready(element))) return;
  element.replaceChildren();
  createRoot(element).render(<RequestIsland {...props} />);
}

export async function mountNewRequest(element: HTMLElement, props: NewRequestIslandProps): Promise<void> {
  if (!(await ready(element))) return;
  element.replaceChildren();
  createRoot(element).render(<NewRequestIsland {...props} />);
}
