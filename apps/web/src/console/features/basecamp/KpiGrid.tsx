/**
 * KPIs of the summary (PLAN §7.5): downloads 7 and 30 days, followers, rating, field reports
 * («works» share on the current build) and views, each with its sparkline and the change against
 * the previous period (arrow icon + text, never colour alone).
 */
import { StatTile } from '@sotf/ui/domain';
import type { Kpi, KpiKey, Overview } from './api.ts';
import { changeOf, percent, rating } from './format.ts';
import { kpiLabel } from './labels.ts';

const ORDER: readonly KpiKey[] = ['downloads7d', 'downloads30d', 'followers', 'rating', 'compatWorksShare', 'views7d'];

/** Days of the comparison period of each KPI (`core/stats/studio-overview.ts`). */
const PERIOD_DAYS: Readonly<Record<KpiKey, number>> = {
  downloads7d: 7,
  downloads30d: 30,
  followers: 7,
  rating: 30,
  compatWorksShare: 7,
  views7d: 7,
};

/** A KPI without data yet (no reviews, no field reports): shown as «—». */
function isEmpty(key: KpiKey, kpi: Kpi): boolean {
  if (key === 'rating') return kpi.value <= 0;
  if (key === 'compatWorksShare') return kpi.previous === null && kpi.sparkline.length === 0 && kpi.value === 0;
  return false;
}

function display(key: KpiKey, kpi: Kpi): string | undefined {
  if (isEmpty(key, kpi)) return '-';
  if (key === 'rating') return rating(kpi.value);
  if (key === 'compatWorksShare') return percent(kpi.value);
  return undefined;
}

export function KpiGrid({ kpis }: { kpis: Overview['kpis'] }) {
  return (
    // Phones: a swipeable strip (the first two tiles are in view, the rest peek in); wider: a grid.
    <ul className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 2xl:grid-cols-6 [&::-webkit-scrollbar]:hidden">
      {ORDER.map((key) => {
        const kpi = kpis[key];
        const empty = isEmpty(key, kpi);
        const change = empty ? null : changeOf(kpi.value, kpi.previous);
        const shown = display(key, kpi);
        return (
          <li key={key} className="w-[9.75rem] min-w-0 shrink-0 snap-start md:w-auto">
            <StatTile
              label={kpiLabel(key)}
              value={key === 'compatWorksShare' ? Math.round(kpi.value * 100) : kpi.value}
              {...(shown !== undefined ? { display: shown } : {})}
              delta={change === null ? null : { change, days: PERIOD_DAYS[key] }}
              {...(kpi.sparkline.length > 1 ? { sparkline: kpi.sparkline } : {})}
              className="h-full"
            />
          </li>
        );
      })}
    </ul>
  );
}
