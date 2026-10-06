/**
 * ChartTheme (research/03 §5.9): the Locator style for Recharts 3 in the console, as plain props
 * objects (no Recharts import here, so the UI package stays chart-free):
 *
 *   <CartesianGrid {...chartTheme.grid} />
 *   <XAxis {...chartTheme.xAxis} dataKey="day" />  <YAxis {...chartTheme.yAxis} ticks={niceTicks(max)} />
 *   <Line {...chartTheme.line} stroke={seriesColor(0)} />  <Bar {...chartTheme.bar} fill={seriesColor(1)} />
 *   <Tooltip {...chartTheme.tooltip} />
 *   <ReferenceLine {...chartTheme.releaseMarker} x={day} label={{ ...chartTheme.markerLabel, value: 'v2.4.1' }} />
 *
 * Rules: thin marks (2 px lines, 10 % areas, bars ≤ 24 px with 4 px rounded ends and 2 px of
 * surface between segments), hairline grid, axes in `fg-subtle` 12 px tabular figures, text never
 * in the series colour, the 8 validated slots in fixed order (never cycled), never two Y axes,
 * release markers as hairlines and game patches in Solafite. `ChartFigure` adds the title, the
 * legend (≥ 2 series) and the mandatory «View as table».
 */
import type { CSSProperties, ReactNode } from 'react';
import { cn } from '../cn.ts';
import { formatCount, useDomainI18n } from './i18n.ts';

/** The 8 chart slots, in their validated order. */
export const CHART_SERIES = [
  'var(--color-chart-1)',
  'var(--color-chart-2)',
  'var(--color-chart-3)',
  'var(--color-chart-4)',
  'var(--color-chart-5)',
  'var(--color-chart-6)',
  'var(--color-chart-7)',
  'var(--color-chart-8)',
] as const;

/** Colour of series `index`. Throws past 8: more series need grouping, not recycled colours. */
export function seriesColor(index: number): string {
  const color = CHART_SERIES[index];
  if (color === undefined) throw new RangeError(`chart series ${index} has no slot (max ${CHART_SERIES.length})`);
  return color;
}

const AXIS_TICK = {
  fill: 'var(--color-fg-subtle)',
  fontSize: 12,
  fontFamily: 'var(--font-sans)',
  style: { fontVariantNumeric: 'tabular-nums' } satisfies CSSProperties,
};

const MARKER_LABEL = {
  position: 'insideTopLeft' as const,
  fill: 'var(--color-fg-muted)',
  fontSize: 11,
  fontFamily: 'var(--font-mono)',
};

export const chartTheme = {
  grid: { stroke: 'var(--color-chart-grid)', strokeWidth: 1, vertical: false },
  xAxis: { tick: AXIS_TICK, axisLine: false, tickLine: false, tickMargin: 8, minTickGap: 24 },
  yAxis: { tick: AXIS_TICK, axisLine: false, tickLine: false, tickMargin: 8, width: 48, allowDecimals: false },
  line: {
    type: 'monotone' as const,
    strokeWidth: 2,
    dot: false,
    activeDot: { r: 4, strokeWidth: 2, stroke: 'var(--color-surface)' },
    isAnimationActive: false,
  },
  area: { type: 'monotone' as const, strokeWidth: 2, fillOpacity: 0.1, isAnimationActive: false },
  bar: {
    maxBarSize: 24,
    radius: [4, 4, 0, 0] as [number, number, number, number],
    stroke: 'var(--color-surface)',
    strokeWidth: 2,
    isAnimationActive: false,
  },
  tooltip: {
    cursor: { stroke: 'var(--color-border-strong)', strokeWidth: 1 },
    contentStyle: {
      background: 'var(--color-overlay)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      color: 'var(--color-fg)',
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
    } satisfies CSSProperties,
    labelStyle: {
      color: 'var(--color-fg-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
    } satisfies CSSProperties,
    itemStyle: { color: 'var(--color-fg)' } satisfies CSSProperties,
  },
  legend: {
    iconType: 'plainline' as const,
    wrapperStyle: { color: 'var(--color-fg-muted)', fontSize: 12 } satisfies CSSProperties,
  },
  releaseMarker: { stroke: 'var(--color-border-strong)', strokeWidth: 1, ifOverflow: 'extendDomain' as const },
  patchMarker: {
    stroke: 'var(--color-featured)',
    strokeWidth: 1,
    strokeDasharray: '4 3',
    ifOverflow: 'extendDomain' as const,
  },
  markerLabel: MARKER_LABEL,
} as const;

/** Round ticks from 0 to ≥ `max` (0 / 1 000 / 2 000 …): 1, 2, 2.5 or 5 × 10ⁿ steps. */
export function niceTicks(max: number, count = 4): number[] {
  if (!Number.isFinite(max) || max <= 0) return [0, 1];
  const raw = max / count;
  const magnitude = 10 ** Math.floor(Math.log10(raw));
  const step = ([1, 2, 2.5, 5, 10].find((factor) => factor * magnitude >= raw) ?? 10) * magnitude;
  const ticks: number[] = [];
  for (let value = 0; value < max + step; value += step) {
    ticks.push(Math.round(value * 1e6) / 1e6);
    if (value >= max) break;
  }
  return ticks;
}

export interface ChartSeries {
  key: string;
  label: string;
}

export interface ChartFigureProps {
  title: ReactNode;
  /** Series shown in the chart (legend when ≥ 2; the table columns). */
  series: readonly ChartSeries[];
  /** Rows of the «View as table» alternative. */
  rows: ReadonlyArray<{ label: string } & Record<string, number | string | null>>;
  /** Header of the first column (e.g. «Day»). */
  rowHeader: string;
  /** The chart itself (a Recharts `ResponsiveContainer`, or a static SVG). */
  children: ReactNode;
  /** Chart height in px (reserved before the chart renders). Default 240. */
  height?: number;
  className?: string;
}

export function ChartFigure({ title, series, rows, rowHeader, children, height = 240, className }: ChartFigureProps) {
  const { t, locale } = useDomainI18n();
  return (
    <figure className={cn('flex flex-col gap-3', className)}>
      <figcaption className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-semibold text-fg">{title}</span>
        {series.length >= 2 ? (
          <ul className="flex flex-wrap gap-3 text-xs text-fg-muted">
            {series.map((entry, index) => (
              <li key={entry.key} className="inline-flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="h-0.5 w-3 rounded-full"
                  style={{ background: seriesColor(index) }}
                />
                {entry.label}
              </li>
            ))}
          </ul>
        ) : null}
      </figcaption>
      <div style={{ minHeight: height }}>{children}</div>
      <details className="text-sm">
        <summary className="cursor-pointer text-fg-muted hover:text-fg">{t('ui_domain_chart_view_table')}</summary>
        <div className="mt-2 max-h-80 overflow-auto rounded-md border border-border">
          <table className="w-full border-collapse text-xs tabular-nums">
            <thead className="sticky top-0 bg-sunken">
              <tr>
                <th scope="col" className="px-3 py-1.5 text-start readout">
                  {rowHeader}
                </th>
                {series.map((entry) => (
                  <th key={entry.key} scope="col" className="px-3 py-1.5 text-end readout">
                    {entry.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <th scope="row" className="px-3 py-1 text-start font-normal text-fg-muted">
                    {row.label}
                  </th>
                  {series.map((entry) => {
                    const value = row[entry.key];
                    return (
                      <td key={entry.key} className="px-3 py-1 text-end">
                        {typeof value === 'number' ? formatCount(locale, value) : (value ?? '-')}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
  );
}
