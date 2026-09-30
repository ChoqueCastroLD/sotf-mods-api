/**
 * `/ranger/admin/performance` — real-user Core Web Vitals (p75 per template and country, WP-83).
 * `?range=7d|28d`. The screen lives in `features/admin/PerformanceScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { type RumRange, rumQuery } from '../../../features/admin/api.ts';
import { PerformanceScreen } from '../../../features/admin/PerformanceScreen.tsx';
import { AdminRouteError } from '../../../features/admin/shared.tsx';

export const Route = createFileRoute('/ranger/admin/performance')({
  staticData: { title: () => m.admin_rum_title() },
  validateSearch: (search: Record<string, unknown>): { range?: RumRange } =>
    search.range === '7d' ? { range: '7d' } : {},
  loaderDeps: ({ search }) => ({ range: search.range ?? '28d' }),
  loader: ({ context, deps }) => context.queryClient.ensureQueryData(rumQuery(deps.range)),
  errorComponent: AdminRouteError,
  component: PerformanceRoute,
});

function PerformanceRoute() {
  const search = Route.useSearch();
  return <PerformanceScreen range={search.range ?? '28d'} />;
}
