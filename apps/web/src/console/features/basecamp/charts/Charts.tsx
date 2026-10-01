/**
 * Recharts charts of Basecamp in the Locator style (`chartTheme` of `@sotf/ui/domain`,
 * research/03 §5.9): thin marks, hairline grid, round ticks, tooltip on `overlay`, never two Y axes,
 * release markers as hairlines with a mono label and game patches in Solafite.
 *
 * This module is the only one that imports Recharts: screens load it through `./lazy.tsx`, so
 * Recharts ships as its own chunk, fetched when the first chart mounts. Titles, legends and the
 * «View as table» alternative live outside (in `ChartFigure`), so they render before the chunk.
 */
import { BELOW_MD_QUERY, useMediaQuery } from '@sotf/ui';
import { chartTheme, niceTicks, seriesColor } from '@sotf/ui/domain';
import type { ReactNode } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export interface ChartMarker {
  /** ISO day the marker belongs to (snapped to the bucket that contains it). */
  day: string;
  label: string;
  kind: 'release' | 'patch';
}

export interface SeriesSpec {
  key: string;
  label: string;
}

export interface TimeSeriesChartProps {
  /** Rows with a `day` (ISO) and one number per series. */
  data: ReadonlyArray<{ day: string } & Record<string, number | string | null>>;
  series: readonly SeriesSpec[];
  /** `area` for one series (line + 10 % fill), `line` for several, `bar` for counts per bucket. */
  kind: 'area' | 'line' | 'bar';
  markers?: readonly ChartMarker[];
  /** Accessible name of the chart surface. */
  title: string;
  height?: number;
  /** Formats the axis ticks of the X axis (a day). */
  formatDay: (day: string) => string;
  /** Formats the tooltip title (a day). */
  formatDayLong: (day: string) => string;
  formatValue: (value: number) => string;
  /** Fixed Y domain (ratings 1–5); round ticks from 0 otherwise. */
  yDomain?: [number, number];
  yTicks?: number[];
}

/** Snaps each marker to the last bucket starting on or before its day; merges markers of a bucket. */
export function snapMarkers(days: readonly string[], markers: readonly ChartMarker[]): ChartMarker[] {
  if (days.length === 0) return [];
  const first = days[0] as string;
  const last = days[days.length - 1] as string;
  const merged = new Map<string, ChartMarker>();
  for (const marker of markers) {
    if (marker.day < first) continue;
    // A marker after the last bucket start still belongs to the last bucket (weeks, months).
    let bucket = last;
    for (const day of days) {
      if (day > marker.day) break;
      bucket = day;
    }
    if (marker.day > last && days.length > 1) {
      const span = Date.parse(`${last}T00:00:00Z`) - Date.parse(`${days[days.length - 2]}T00:00:00Z`);
      if (Date.parse(`${marker.day}T00:00:00Z`) >= Date.parse(`${last}T00:00:00Z`) + span) continue;
    }
    const key = `${marker.kind}:${bucket}`;
    const existing = merged.get(key);
    merged.set(
      key,
      existing
        ? { ...existing, label: `${existing.label} · ${marker.label}` }
        : { day: bucket, label: marker.label, kind: marker.kind },
    );
  }
  return [...merged.values()];
}

function maxOf(data: TimeSeriesChartProps['data'], series: readonly SeriesSpec[]): number {
  let max = 0;
  for (const row of data) {
    for (const entry of series) {
      const value = row[entry.key];
      if (typeof value === 'number' && value > max) max = value;
    }
  }
  return max;
}

/** Phones draw the marker as a hairline only: its name is in the legend and in the tapped tooltip. */
function markerLines(markers: readonly ChartMarker[], labels: boolean): ReactNode[] {
  return markers.map((marker) => (
    <ReferenceLine
      key={`${marker.kind}:${marker.day}`}
      x={marker.day}
      {...(marker.kind === 'release' ? chartTheme.releaseMarker : chartTheme.patchMarker)}
      {...(labels
        ? {
            label: {
              ...chartTheme.markerLabel,
              value: marker.label,
              ...(marker.kind === 'patch'
                ? { fill: 'var(--color-featured)', position: 'insideTopRight' as const }
                : {}),
            },
          }
        : {})}
    />
  ));
}

export function TimeSeriesChart({
  data,
  series,
  kind,
  markers = [],
  title,
  height = 240,
  formatDay,
  formatDayLong,
  formatValue,
  yDomain,
  yTicks,
}: TimeSeriesChartProps) {
  const narrow = useMediaQuery(BELOW_MD_QUERY);
  const rows = data as Array<{ day: string } & Record<string, number | string | null>>;
  const ticks = yTicks ?? niceTicks(maxOf(data, series));
  const domain: [number, number] = yDomain ?? [0, ticks[ticks.length - 1] ?? 1];
  const snapped = snapMarkers(
    data.map((row) => row.day),
    markers,
  );
  const common = {
    data: rows,
    title,
    margin: { top: narrow ? 8 : 16, right: narrow ? 8 : 12, bottom: 0, left: 0 },
  };
  const markerNames = (day: string) =>
    snapped
      .filter((marker) => marker.day === day)
      .map((marker) => marker.label)
      .join(' · ');
  const axes = [
    <CartesianGrid key="grid" {...chartTheme.grid} />,
    <XAxis
      key="x"
      {...chartTheme.xAxis}
      dataKey="day"
      minTickGap={narrow ? 36 : chartTheme.xAxis.minTickGap}
      tickFormatter={(value: string) => formatDay(String(value))}
    />,
    <YAxis
      key="y"
      {...chartTheme.yAxis}
      width={narrow ? 44 : chartTheme.yAxis.width}
      domain={domain}
      ticks={ticks}
      allowDecimals={Boolean(yDomain)}
      tickFormatter={(value: number) => formatValue(Number(value))}
    />,
    <Tooltip
      key="tooltip"
      {...chartTheme.tooltip}
      {...(kind === 'bar' ? { cursor: { fill: 'var(--color-fg)', fillOpacity: 0.05 } } : {})}
      labelFormatter={(label: unknown) => {
        const extra = markerNames(String(label));
        return extra ? `${formatDayLong(String(label))} · ${extra}` : formatDayLong(String(label));
      }}
      formatter={(value: unknown, name: unknown) => [
        typeof value === 'number' ? formatValue(value) : String(value ?? '—'),
        series.find((entry) => entry.key === name)?.label ?? String(name),
      ]}
    />,
    ...markerLines(snapped, !narrow),
  ];

  let chart: ReactNode;
  if (kind === 'bar') {
    chart = (
      <BarChart {...common}>
        {axes}
        {series.map((entry, index) => (
          <Bar
            key={entry.key}
            dataKey={entry.key}
            name={entry.key}
            {...chartTheme.bar}
            fill={seriesColor(index)}
            {...(series.length > 1 ? { stackId: 'stack' } : {})}
          />
        ))}
      </BarChart>
    );
  } else if (kind === 'area') {
    chart = (
      <AreaChart {...common}>
        {axes}
        {series.map((entry, index) => (
          <Area
            key={entry.key}
            dataKey={entry.key}
            name={entry.key}
            {...chartTheme.area}
            stroke={seriesColor(index)}
            fill={seriesColor(index)}
            activeDot={chartTheme.line.activeDot}
          />
        ))}
      </AreaChart>
    );
  } else {
    chart = (
      <LineChart {...common}>
        {axes}
        {series.map((entry, index) => (
          <Line
            key={entry.key}
            dataKey={entry.key}
            name={entry.key}
            {...chartTheme.line}
            stroke={seriesColor(index)}
            connectNulls
          />
        ))}
      </LineChart>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      {chart}
    </ResponsiveContainer>
  );
}

export interface CategoryBarChartProps {
  data: ReadonlyArray<{ label: string; value: number }>;
  /** Accessible name of the chart surface. */
  title: string;
  /** Name of the value in the tooltip («Downloads»). */
  valueLabel: string;
  formatValue: (value: number) => string;
  /** Slot of the series colour (0–7). */
  colorIndex?: number;
}

/** Horizontal bars, one per category (versions, channels, referrers, languages). */
export function CategoryBarChart({ data, title, valueLabel, formatValue, colorIndex = 0 }: CategoryBarChartProps) {
  const narrow = useMediaQuery(BELOW_MD_QUERY);
  const rows = data.map((entry) => ({ label: entry.label, value: entry.value }));
  const ticks = niceTicks(Math.max(0, ...rows.map((row) => row.value)));
  const height = Math.max(96, rows.length * 32 + 40);
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={rows} layout="vertical" title={title} margin={{ top: 4, right: 16, bottom: 0, left: 0 }}>
        <CartesianGrid {...chartTheme.grid} vertical horizontal={false} />
        <XAxis
          {...chartTheme.xAxis}
          type="number"
          domain={[0, ticks[ticks.length - 1] ?? 1]}
          ticks={ticks}
          tickFormatter={(value: number) => formatValue(Number(value))}
        />
        <YAxis
          {...chartTheme.yAxis}
          type="category"
          dataKey="label"
          width={narrow ? 84 : 120}
          interval={0}
          tickFormatter={(value: string) => (narrow && value.length > 12 ? `${value.slice(0, 11)}…` : value)}
        />
        <Tooltip
          {...chartTheme.tooltip}
          cursor={{ fill: 'var(--color-fg)', fillOpacity: 0.05 }}
          formatter={(value: unknown) => [
            typeof value === 'number' ? formatValue(value) : String(value ?? '—'),
            valueLabel,
          ]}
        />
        <Bar dataKey="value" name="value" {...chartTheme.bar} radius={[0, 4, 4, 0]} fill={seriesColor(colorIndex)} />
      </BarChart>
    </ResponsiveContainer>
  );
}
