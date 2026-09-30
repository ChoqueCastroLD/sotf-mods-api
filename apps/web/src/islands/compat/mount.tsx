/**
 * Lazy chunk of the field-report island: React + the island, rendered into its mount point.
 */
import { createRoot } from 'react-dom/client';
import { loadSocialMessages } from '../comments/lib/messages.ts';
import { FieldReportIsland, type FieldReportIslandProps } from './FieldReportIsland.tsx';

export async function mountFieldReport(element: HTMLElement, props: FieldReportIslandProps): Promise<void> {
  if (element.dataset.hydrated !== undefined) return;
  element.dataset.hydrated = '';
  // The page locale's catalogue first; offline, the server-rendered content stays.
  if (!(await loadSocialMessages())) {
    delete element.dataset.hydrated;
    return;
  }
  element.replaceChildren();
  createRoot(element).render(<FieldReportIsland {...props} />);
}
