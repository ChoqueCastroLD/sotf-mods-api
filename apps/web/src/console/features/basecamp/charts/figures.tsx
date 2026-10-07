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

/**
 * Daily (or weekly) downloads of each version as stacked bars (`seriesByVersion`: ≤ 8 versions +
 * «other», buckets without downloads omitted → zero-filled on the buckets of `series`).
 */
/** The chart theme has 8 colour slots: the 7 busiest versions get one, the rest share «other». */
export const VERSION_SERIES_MAX = 8;

/** «v1.2.3» for one mod; the label already names the mod when all my mods are shown («Name 1.2.3»). */
export function versionLabel(version: string, otherLabel: string): string {
  if (version === 'other') return otherLabel;
  return /\s/.test(version) ? version : `v${version}`;
}

export function versionSeries(
  analytics: Pick<Analytics, 'series' | 'seriesByVersion'>,
  otherLabel: string,
): { data: Array<{ day: string } & Record<string, number | string>>; series: SeriesSpec[] } {
  const totals = new Map<string, number>();
  for (const entry of analytics.seriesByVersion ?? [])
    totals.set(entry.version, (totals.get(entry.version) ?? 0) + entry.downloads);
  const named = [...totals.keys()]
    .filter((version) => version !== 'other')
    .sort((a, b) => (totals.get(b) ?? 0) - (totals.get(a) ?? 0));
  const needsOther = totals.has('other') || named.length > VERSION_SERIES_MAX;
  const kept = named.slice(0, needsOther ? VERSION_SERIES_MAX - 1 : VERSION_SERIES_MAX);
  const versions = needsOther ? [...kept, 'other'] : kept;
  const slotOf = (version: string) => (kept.includes(version) ? version : 'other');
  const keyOf = (version: string) => `v${versions.indexOf(slotOf(version))}`;
  const byDay = new Map<string, Record<string, number>>();
  for (const entry of analytics.seriesByVersion ?? []) {
    const row = byDay.get(entry.day) ?? {};
    row[keyOf(entry.version)] = (row[keyOf(entry.version)] ?? 0) + entry.downloads;
    byDay.set(entry.day, row);
  }
  const days = analytics.series.length > 0 ? analytics.series.map((row) => row.day) : [...byDay.keys()].sort();
  const data = days.map((day) => {
    const row: { day: string } & Record<string, number | string> = { day };
    const values = byDay.get(day) ?? {};
    for (const version of versions) row[keyOf(version)] = values[keyOf(version)] ?? 0;
    return row;
  });
  const series = versions.map((version) => ({
    key: keyOf(version),
    label: versionLabel(version, otherLabel),
  }));
  return { data, series };
}

export function VersionSeriesFigure({
  analytics,
  range,
  className,
}: {
  analytics: Analytics;
  range: AnalyticsRange;
  className?: string;
}) {
  const title = bt('basecamp_analytics_versions_daily');
  const { data, series } = versionSeries(analytics, bt('basecamp_analytics_other_versions'));
  if (series.length === 0) return null;
  const rows = data.map(({ day, ...values }) => ({ label: dayLabel(day, true), ...values }));
  return (
    <ChartFigure
      title={title}
      series={series}
      rows={rows}
      rowHeader={analytics.granularity === 'day' ? bt('basecamp_chart_day') : bt('basecamp_chart_week')}
      height={240}
      {...(className ? { className } : {})}
    >
      <TimeSeriesChart
        data={data}
        series={series}
        kind="bar"
        title={title}
        height={240}
        formatDay={(day) => dayLabel(day, range === 'all')}
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
