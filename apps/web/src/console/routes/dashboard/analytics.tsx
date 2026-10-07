/**
 * `/dashboard/analytics`: analytics of all my mods or one (WP-80, PLAN §7.5). `?mod=` picks the mod,
 * `?range=` the range (7d · 30d · 90d · all · custom) and, for `custom`, `?from=` and `?to=` (UTC
 * days). The date range is also what the CSV export covers.
 */
import { createFileRoute } from '@tanstack/react-router';
import { AnalyticsScreen } from '../../features/basecamp/AnalyticsScreen.tsx';
import { modsQuery } from '../../features/basecamp/api.ts';
import { bt, loadBasecampMessages } from '../../features/basecamp/i18n.ts';
import { type AnalyticsRange, isRange } from '../../features/basecamp/search.ts';

interface AnalyticsSearch {
  mod?: number;
  range?: AnalyticsRange | 'custom';
  from?: string;
  to?: string;
}

const DAY = /^\d{4}-\d{2}-\d{2}$/;

function modOf(value: unknown): number | undefined {
  const id =
    typeof value === 'number'
      ? value
      : typeof value === 'string' && /^\d{1,10}$/.test(value)
        ? Number(value)
        : Number.NaN;
  return Number.isSafeInteger(id) && id > 0 ? id : undefined;
}

function dayOf(value: unknown): string | undefined {
  return typeof value === 'string' && DAY.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`))
    ? value
    : undefined;
}

function utcToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function shift(day: string, days: number): string {
  return new Date(Date.parse(`${day}T00:00:00Z`) + days * 86_400_000).toISOString().slice(0, 10);
}

export const Route = createFileRoute('/dashboard/analytics')({
  validateSearch: (search: Record<string, unknown>): AnalyticsSearch => {
    const mod = modOf(search.mod);
    const from = dayOf(search.from);
    const to = dayOf(search.to);
    const custom = search.range === 'custom' || (from !== undefined && to !== undefined);
    return {
      ...(mod ? { mod } : {}),
      ...(custom
        ? { range: 'custom' as const, ...(from ? { from } : {}), ...(to ? { to } : {}) }
        : isRange(search.range) && search.range !== '30d'
          ? { range: search.range }
          : {}),
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
  const to = search.to ?? utcToday();
  const from = search.from ?? shift(to, -29);
  return (
    <AnalyticsScreen
      modId={search.mod ?? null}
      range={search.range ?? '30d'}
      custom={{ from, to }}
      onChange={(next) =>
        void navigate({
          search: (current) => {
            const mod = next.modId === undefined ? current.mod : (next.modId ?? undefined);
            const range = next.range ?? current.range ?? '30d';
            if (range === 'custom') {
              const base = {
                from: current.from ?? shift(current.to ?? utcToday(), -29),
                to: current.to ?? utcToday(),
              };
              const days = next.custom ?? base;
              return { ...(mod ? { mod } : {}), range: 'custom' as const, from: days.from, to: days.to };
            }
            return { ...(mod ? { mod } : {}), ...(range !== '30d' ? { range } : {}) };
          },
          replace: true,
          resetScroll: false,
        })
      }
    />
  );
}
