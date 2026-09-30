/**
 * `/basecamp` — the creator summary (WP-80, PLAN §7.5 «Resumen»). `?range=` (7d · 30d · 90d · all)
 * is the range of the downloads chart. The screen lives in `features/basecamp`.
 */
import { createFileRoute } from '@tanstack/react-router';
import { type AnalyticsRange, isRange, overviewQuery } from '../../features/basecamp/api.ts';
import { bt, loadBasecampMessages } from '../../features/basecamp/i18n.ts';
import { OverviewScreen } from '../../features/basecamp/OverviewScreen.tsx';

interface OverviewSearch {
  range?: AnalyticsRange;
}

export const Route = createFileRoute('/basecamp/')({
  validateSearch: (search: Record<string, unknown>): OverviewSearch =>
    isRange(search.range) && search.range !== '30d' ? { range: search.range } : {},
  loader: async ({ context }) => {
    await Promise.all([loadBasecampMessages(), context.queryClient.ensureQueryData(overviewQuery)]);
  },
  staticData: { title: () => bt('basecamp_overview_title') },
  component: OverviewRoute,
});

function OverviewRoute() {
  const { range } = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <OverviewScreen
      range={range ?? '30d'}
      onRange={(next) =>
        void navigate({ search: next === '30d' ? {} : { range: next }, replace: true, resetScroll: false })
      }
    />
  );
}
