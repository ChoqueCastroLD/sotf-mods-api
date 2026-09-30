/**
 * Lazy chunk of the public stats chart: React + Recharts, rendered into the panel's chart slot.
 */
import { createRoot } from 'react-dom/client';
import { loadSocialMessages } from '../comments/lib/messages.ts';
import { StatsChart, type StatsChartProps } from './StatsChart.tsx';

export async function mountStats(element: HTMLElement, props: StatsChartProps): Promise<void> {
  // The page locale's catalogue first (the «View as table» label of ChartFigure).
  await loadSocialMessages();
  element.replaceChildren();
  createRoot(element).render(<StatsChart {...props} />);
}
