/**
 * `/dashboard/analytics` — analytics of all my mods or one (WP-80, PLAN §7.5 «Analíticas por mod»).
 * `?mod=` picks the mod, `?range=` the range (7d · 30d · 90d · all).
 */
import { createFileRoute } from '@tanstack/react-router';
import { AnalyticsScreen } from '../../features/basecamp/AnalyticsScreen.tsx';
import { modsQuery } from '../../features/basecamp/api.ts';
import { bt, loadBasecampMessages } from '../../features/basecamp/i18n.ts';
import { type AnalyticsRange, isRange } from '../../features/basecamp/search.ts';

interface AnalyticsSearch {
  mod?: number;
  range?: AnalyticsRange;
}

function modOf(value: unknown): number | undefined {
  const id =
    typeof value === 'number'
      ? value
      : typeof value === 'string' && /^\d{1,10}$/.test(value)
        ? Number(value)
        : Number.NaN;
  return Number.isSafeInteger(id) && id > 0 ? id : undefined;
}

export const Route = createFileRoute('/dashboard/analytics')({
  validateSearch: (search: Record<string, unknown>): AnalyticsSearch => {
    const mod = modOf(search.mod);
    return {
      ...(mod ? { mod } : {}),
      ...(isRange(search.range) && search.range !== '30d' ? { range: search.range } : {}),
    };
  },
  loader: async ({ context }) => {
    await Promise.all([loadBasecampMessages(), context.queryClient.ensureQueryData(modsQuery)]);
  },
  staticData: { title: () => bt('basecamp_analytics_title') },
  component: AnalyticsRoute,
});

function AnalyticsRoute() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <AnalyticsScreen
      modId={search.mod ?? null}
      range={search.range ?? '30d'}
      onChange={(next) =>
        void navigate({
          search: (current) => {
            const mod = next.modId === undefined ? current.mod : (next.modId ?? undefined);
            const range = next.range ?? current.range ?? '30d';
            return { ...(mod ? { mod } : {}), ...(range !== '30d' ? { range } : {}) };
          },
          replace: true,
          resetScroll: false,
        })
      }
    />
  );
}
