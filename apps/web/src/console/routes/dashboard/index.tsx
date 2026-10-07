/**
 * `/dashboard`: the creator summary (WP-80, PLAN §7.5). `?range=` (7d · 30d · 90d · all) is the
 * range of the downloads chart; `?attention=`, `?asort=`, `?apage=` and `?dismissed=1` are the
 * filters of «Needs attention». The screen lives in `features/basecamp`.
 */
import { createFileRoute } from '@tanstack/react-router';
import type { AttentionState } from '../../features/basecamp/AttentionPanel.tsx';
import { overviewQuery } from '../../features/basecamp/api.ts';
import { bt, loadBasecampMessages } from '../../features/basecamp/i18n.ts';
import { OverviewScreen } from '../../features/basecamp/OverviewScreen.tsx';
import {
  type AnalyticsRange,
  ATTENTION_KINDS,
  ATTENTION_SORTS,
  type AttentionKind,
  type AttentionSort,
  isRange,
} from '../../features/basecamp/search.ts';

interface OverviewSearch {
  range?: AnalyticsRange;
  attention?: AttentionKind;
  asort?: Exclude<AttentionSort, 'urgency'>;
  apage?: number;
  dismissed?: 1;
}

function oneOf<T extends string>(values: readonly T[], value: unknown): value is T {
  return typeof value === 'string' && (values as readonly string[]).includes(value);
}

function pageOf(value: unknown): number | undefined {
  const page = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
  return Number.isSafeInteger(page) && page > 1 && page < 10_000 ? page : undefined;
}

export const Route = createFileRoute('/dashboard/')({
  validateSearch: (search: Record<string, unknown>): OverviewSearch => ({
    ...(isRange(search.range) && search.range !== '30d' ? { range: search.range } : {}),
    ...(oneOf(ATTENTION_KINDS, search.attention) ? { attention: search.attention } : {}),
    ...(oneOf(ATTENTION_SORTS, search.asort) && search.asort !== 'urgency' ? { asort: search.asort } : {}),
    ...(pageOf(search.apage) ? { apage: pageOf(search.apage) as number } : {}),
    ...(search.dismissed === 1 || search.dismissed === '1' ? { dismissed: 1 as const } : {}),
  }),
  loader: async ({ context }) => {
    await Promise.all([loadBasecampMessages(), context.queryClient.ensureQueryData(overviewQuery)]);
  },
  staticData: { title: () => bt('basecamp_overview_title') },
  component: OverviewRoute,
});

function OverviewRoute() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const attention: AttentionState = {
    kind: search.attention ?? null,
    sort: search.asort ?? 'urgency',
    page: search.apage ?? 1,
    dismissed: search.dismissed === 1,
  };
  return (
    <OverviewScreen
      range={search.range ?? '30d'}
      onRange={(next) =>
        void navigate({
          search: (current) => ({ ...current, range: next === '30d' ? undefined : next }),
          replace: true,
          resetScroll: false,
        })
      }
      attention={attention}
      onAttention={(next) =>
        void navigate({
          search: (current) => {
            const merged = { ...attention, ...next };
            return {
              ...(current.range ? { range: current.range } : {}),
              ...(merged.kind ? { attention: merged.kind } : {}),
              ...(merged.sort !== 'urgency' ? { asort: merged.sort } : {}),
              ...(merged.page > 1 ? { apage: merged.page } : {}),
              ...(merged.dismissed ? { dismissed: 1 as const } : {}),
            };
          },
          replace: true,
          resetScroll: false,
        })
      }
    />
  );
}
