/**
 * `/moderation/admin/traffic` — the owner's traffic dashboard (only ShokoCC). `?range=7d|90d|365d`
 * (30 days by default). The screen lives in `features/admin/TrafficScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { type TrafficRange, trafficQuery } from '../../../features/admin/api.ts';
import { AdminRouteError } from '../../../features/admin/shared.tsx';
import { TrafficScreen } from '../../../features/admin/TrafficScreen.tsx';

const RANGES: readonly TrafficRange[] = ['7d', '30d', '90d', '365d'];

export const Route = createFileRoute('/moderation/admin/traffic')({
  staticData: { title: () => m.admin_traffic_title() },
  validateSearch: (search: Record<string, unknown>): { range?: TrafficRange } =>
    RANGES.includes(search.range as TrafficRange) && search.range !== '30d'
      ? { range: search.range as TrafficRange }
      : {},
  loaderDeps: ({ search }) => ({ range: search.range ?? '30d' }),
  loader: ({ context, deps }) => context.queryClient.ensureQueryData(trafficQuery(deps.range)),
  errorComponent: AdminRouteError,
  component: TrafficRoute,
});

function TrafficRoute() {
  const search = Route.useSearch();
  return <TrafficScreen range={search.range ?? '30d'} />;
}
