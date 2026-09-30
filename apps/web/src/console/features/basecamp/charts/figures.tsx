/**
 * Chart figures of Basecamp: `ChartFigure` (title, legend with ≥ 2 series, «View as table») around
 * the lazily loaded Recharts charts. The table is the accessible alternative of every chart and is
 * available before the chart chunk arrives.
 */
import { ChartFigure } from '@sotf/ui/domain';
import type { Analytics, AnalyticsRange } from '../api.ts';
import { dayLabel, decimal, number } from '../format.ts';
import { bt } from '../i18n.ts';
import { CategoryBarChart, type ChartMarker, type SeriesSpec, TimeSeriesChart } from './lazy.tsx';

/** Release and game patch markers of an analytics answer. */
export function markersOf(analytics: Analytics): ChartMarker[] {
  return [
    ...analytics.markers.versions.map(
      (marker): ChartMarker => ({ day: marker.day, label: `v${marker.version}`, kind: 'release' }),
    ),
    ...analytics.markers.gameBuilds.map(
      (marker): ChartMarker => ({
        day: marker.day,
        label: bt('basecamp_chart_patch', { label: marker.label }),
        kind: 'patch',
      }),
    ),
  ];
}

type SeriesRow = Analytics['series'][number];
type SeriesKey = Exclude<keyof SeriesRow, 'day'>;

export interface SeriesFigureProps {
  title: string;
  analytics: Analytics;
  range: AnalyticsRange;
  series: ReadonlyArray<{ key: SeriesKey; label: string }>;
  kind: 'area' | 'line' | 'bar';
  withMarkers?: boolean;
  height?: number;
  className?: string;
}

/** A time series of the analytics answer (downloads, unique downloads, views, follows). */
export function SeriesFigure({
  title,
  analytics,
  range,
  series,
  kind,
  withMarkers = false,
  height = 240,
  className,
}: SeriesFigureProps) {
  const withYear = range === 'all';
  const data = analytics.series.map((row) => {
    const entry: Record<string, number | string> = { day: row.day };
    for (const spec of series) entry[spec.key] = row[spec.key];
    return entry as { day: string } & Record<string, number | string>;
  });
  const rows = analytics.series.map((row) => {
    const entry: { label: string } & Record<string, number | string | null> = { label: dayLabel(row.day, true) };
    for (const spec of series) entry[spec.key] = row[spec.key];
    return entry;
  });
  const specs: SeriesSpec[] = series.map((spec) => ({ key: spec.key, label: spec.label }));
  return (
    <ChartFigure
      title={title}
      series={specs}
      rows={rows}
      rowHeader={analytics.granularity === 'day' ? bt('basecamp_chart_day') : bt('basecamp_chart_week')}
      height={height}
      {...(className ? { className } : {})}
    >
      <TimeSeriesChart
        data={data}
        series={specs}
        kind={kind}
        markers={withMarkers ? markersOf(analytics) : []}
        title={title}
        height={height}
        formatDay={(day) => dayLabel(day, withYear)}
        formatDayLong={(day) =>
          analytics.granularity === 'day'
            ? dayLabel(day, true)
            : bt('basecamp_chart_week_of', { date: dayLabel(day, true) })
        }
        formatValue={number}
      />
    </ChartFigure>
  );
}

/** Average rating over time (1–5, its own chart: never two Y axes). */
export function RatingsFigure({
  analytics,
  range,
  className,
}: {
  analytics: Analytics;
  range: AnalyticsRange;
  className?: string;
}) {
  const title = bt('basecamp_analytics_ratings_title');
  const label = bt('basecamp_analytics_ratings_average');
  const data = analytics.ratings.map((row) => ({ day: row.day, average: row.average }));
  const rows = analytics.ratings.map((row) => ({
    label: dayLabel(row.day, true),
    average: row.average === null ? null : Math.round(row.average * 10) / 10,
  }));
  const hasAny = analytics.ratings.some((row) => row.count > 0);
  return (
    <ChartFigure
      title={title}
      series={[{ key: 'average', label }]}
      rows={rows}
      rowHeader={analytics.granularity === 'day' ? bt('basecamp_chart_day') : bt('basecamp_chart_week')}
      height={200}
      {...(className ? { className } : {})}
    >
      {hasAny ? (
        <TimeSeriesChart
          data={data}
          series={[{ key: 'average', label }]}
          kind="line"
          title={title}
          height={200}
          formatDay={(day) => dayLabel(day, range === 'all')}
          formatDayLong={(day) => dayLabel(day, true)}
          formatValue={(value) => decimal(value)}
          yDomain={[1, 5]}
          yTicks={[1, 2, 3, 4, 5]}
        />
      ) : (
        <p className="grid h-[200px] place-items-center text-sm text-fg-muted">{bt('basecamp_analytics_no_ratings')}</p>
      )}
    </ChartFigure>
  );
}

export interface CategoryFigureProps {
  title: string;
  rowHeader: string;
  valueLabel: string;
  rows: ReadonlyArray<{ label: string; value: number }>;
  colorIndex?: number;
  className?: string;
}

/** Horizontal bars with their table (versions, channels, referrers, languages). */
export function CategoryFigure({ title, rowHeader, valueLabel, rows, colorIndex, className }: CategoryFigureProps) {
  const height = Math.max(96, rows.length * 32 + 40);
  return (
    <ChartFigure
      title={title}
      series={[{ key: 'value', label: valueLabel }]}
      rows={rows.map((row) => ({ label: row.label, value: row.value }))}
      rowHeader={rowHeader}
      height={rows.length > 0 ? height : 64}
      {...(className ? { className } : {})}
    >
      {rows.length > 0 ? (
        <CategoryBarChart
          data={rows}
          title={title}
          valueLabel={valueLabel}
          formatValue={number}
          {...(colorIndex !== undefined ? { colorIndex } : {})}
        />
      ) : (
        <p className="grid h-16 place-items-center text-sm text-fg-muted">{bt('basecamp_analytics_no_data')}</p>
      )}
    </ChartFigure>
  );
}
