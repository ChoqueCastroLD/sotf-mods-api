/**
 * StatTile (research/03 §5.2): mono readout label + display figure + delta with an arrow icon
 * and text («Up 12 % in 7 days», never colour alone) + optional sparkline.
 *
 * `Sparkline` is plain SVG generated on the server (0 JS, research/03 §5.9): 2 px line, 10 %
 * area, chart slot 1 (a single series is named by its title, no legend).
 */
import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import { formatCompact, formatCount, formatShare, useDomainI18n } from './i18n.ts';

export interface SparklineProps {
  values: readonly number[];
  /** Rendered height in px (width follows the container). Default 32. */
  height?: number;
  /** Accessible summary; omit when the numbers are shown next to it (decorative). */
  label?: string;
  className?: string;
}

const VIEW_WIDTH = 100;

/** Points of a sparkline in a 100 × `height` box (exposed for tests and static charts). */
export function sparklinePoints(values: readonly number[], height: number): Array<[number, number]> {
  if (values.length === 0) return [];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const pad = 2;
  const step = values.length > 1 ? VIEW_WIDTH / (values.length - 1) : 0;
  return values.map((value, index) => [
    Math.round(index * step * 100) / 100,
    Math.round((height - pad - ((value - min) / span) * (height - pad * 2)) * 100) / 100,
  ]);
}

export function Sparkline({ values, height = 32, label, className }: SparklineProps) {
  const points = sparklinePoints(values.length === 1 ? [values[0] as number, values[0] as number] : values, height);
  if (points.length === 0) return null;
  const line = points.map(([x, y]) => `${x},${y}`).join(' ');
  const area = `0,${height} ${line} ${VIEW_WIDTH},${height}`;
  return (
    <svg
      viewBox={`0 0 ${VIEW_WIDTH} ${height}`}
      preserveAspectRatio="none"
      height={height}
      className={cn('block w-full overflow-visible text-(--color-chart-1)', className)}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      <polygon points={area} fill="currentColor" fillOpacity={0.1} />
      <polyline
        points={line}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export interface StatDelta {
  /** Relative change as a fraction (0.12 = +12 %). */
  change: number;
  /** Period of the comparison in days. */
  days: number;
}

export interface StatTileProps {
  /** Readout label («DOWNLOADS»; the tile uppercases it). */
  label: ReactNode;
  value: number;
  /** `compact` (1.98M, default) or `count` (1,982,114). */
  format?: 'compact' | 'count';
  /** Override the formatted figure (e.g. a rating «4.6»). */
  display?: string;
  delta?: StatDelta | null;
  sparkline?: readonly number[];
  /** `display` sizes the figure for heroes; `default` for dashboards and profiles. */
  size?: 'default' | 'display';
  className?: string;
}

export function StatTile({
  label,
  value,
  format = 'compact',
  display,
  delta,
  sparkline,
  size = 'default',
  className,
}: StatTileProps) {
  const { t, locale } = useDomainI18n();
  const figure = display ?? (format === 'compact' ? formatCompact(locale, value) : formatCount(locale, value));
  const exact = formatCount(locale, value);
  let deltaNode: ReactNode = null;
  if (delta) {
    const percent = formatShare(locale, Math.abs(delta.change));
    const direction = delta.change > 0.0005 ? 'up' : delta.change < -0.0005 ? 'down' : 'flat';
    const text =
      direction === 'up'
        ? t('ui_domain_stat_delta_up', { percent, days: delta.days })
        : direction === 'down'
          ? t('ui_domain_stat_delta_down', { percent, days: delta.days })
          : t('ui_domain_stat_delta_flat', { days: delta.days });
    const icon = direction === 'up' ? ArrowUpRight : direction === 'down' ? ArrowDownRight : Minus;
    deltaNode = (
      <p
        data-delta={direction}
        className={cn(
          'flex items-center gap-1 text-xs font-medium',
          direction === 'up' ? 'text-success' : direction === 'down' ? 'text-danger' : 'text-fg-muted',
        )}
      >
        <Icon icon={icon} size={14} />
        {text}
      </p>
    );
  }
  return (
    <div
      className={cn('flex min-w-0 flex-col gap-1.5 rounded-lg border border-border bg-surface p-4 md:p-5', className)}
    >
      <p className="readout">{label}</p>
      <p
        className={cn(
          'font-display-caps leading-none tabular-nums text-fg',
          size === 'display' ? 'text-display-md' : 'text-display-xs',
        )}
        title={figure === exact ? undefined : exact}
      >
        {figure === exact || display ? (
          figure
        ) : (
          <>
            <span aria-hidden="true">{figure}</span>
            <span className="sr-only">{exact}</span>
          </>
        )}
      </p>
      {deltaNode}
      {sparkline && sparkline.length > 1 ? <Sparkline values={sparkline} className="mt-1" /> : null}
    </div>
  );
}
