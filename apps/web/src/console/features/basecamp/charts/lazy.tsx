/**
 * Lazy entry points of the charts: Recharts is a chunk of its own (PLAN §8.2 — the Basecamp
 * routes stay within budget), fetched when the first chart mounts and prefetched when the
 * browser is idle on screens that show one. While it loads, a skeleton of the same height holds
 * the space (no layout shift); the «View as table» alternative is already there.
 */
import { Skeleton } from '@sotf/ui/skeleton';
import { lazy, Suspense } from 'react';
import type { CategoryBarChartProps, TimeSeriesChartProps } from './Charts.tsx';

export type { CategoryBarChartProps, ChartMarker, SeriesSpec, TimeSeriesChartProps } from './Charts.tsx';

const load = () => import('./Charts.tsx');

/** Starts fetching the chart chunk (idle prefetch). */
export function prefetchCharts(): void {
  void load().catch(() => {
    // The real render retries and shows the route error if the chunk is gone.
  });
}

const LazyTimeSeries = lazy(() => load().then((module) => ({ default: module.TimeSeriesChart })));
const LazyCategoryBars = lazy(() => load().then((module) => ({ default: module.CategoryBarChart })));

export function TimeSeriesChart(props: TimeSeriesChartProps) {
  return (
    <Suspense fallback={<Skeleton className="w-full" style={{ height: props.height ?? 240 }} />}>
      <LazyTimeSeries {...props} />
    </Suspense>
  );
}

export function CategoryBarChart(props: CategoryBarChartProps) {
  const height = Math.max(96, props.data.length * 32 + 40);
  return (
    <Suspense fallback={<Skeleton className="w-full" style={{ height }} />}>
      <LazyCategoryBars {...props} />
    </Suspense>
  );
}
