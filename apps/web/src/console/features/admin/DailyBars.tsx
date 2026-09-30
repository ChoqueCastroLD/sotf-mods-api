/**
 * Small daily bar chart of the admin dashboards (KelvinSeek usage): one bar per day, an optional
 * dashed limit line (the daily budget), hairline grid and round ticks. Pure CSS, no chart library
 * in the chunk. Decorative for assistive technology: `ChartFigure` around it carries the title
 * and the «View as table» alternative with the same numbers.
 */
import { niceTicks, seriesColor } from '@sotf/ui/domain';

export interface DailyBarsProps {
  days: ReadonlyArray<{ day: string; value: number }>;
  /** Dashed reference line (e.g. the daily budget). */
  limit?: number | null;
  formatValue: (value: number) => string;
  formatDay: (day: string) => string;
  height?: number;
  series?: number;
}

export function DailyBars({ days, limit, formatValue, formatDay, height = 200, series = 0 }: DailyBarsProps) {
  const peak = Math.max(0, ...days.map((entry) => entry.value), limit ?? 0);
  const ticks = niceTicks(peak || 1, 4);
  const top = ticks[ticks.length - 1] ?? 1;
  const pct = (value: number) => `${Math.min(100, (value / top) * 100)}%`;
  const labelEvery = Math.max(1, Math.ceil(days.length / 8));
  return (
    <div aria-hidden="true" className="flex gap-2" style={{ height }}>
      <div className="relative w-14 shrink-0 text-end text-2xs text-fg-subtle tabular-nums">
        {ticks.map((tick) => (
          <span key={tick} className="absolute end-0 translate-y-1/2" style={{ bottom: pct(tick) }}>
            {formatValue(tick)}
          </span>
        ))}
      </div>
      <div className="relative flex min-w-0 flex-1 flex-col">
        <div className="relative flex-1">
          {ticks.map((tick) => (
            <span
              key={tick}
              className="absolute inset-x-0 border-t border-(--color-chart-grid)"
              style={{ bottom: pct(tick) }}
            />
          ))}
          {limit ? (
            <span
              className="absolute inset-x-0 z-10 border-t-2 border-dashed border-warning"
              style={{ bottom: pct(limit) }}
            />
          ) : null}
          <div className="absolute inset-0 flex items-end gap-px">
            {days.map((entry) => (
              <span
                key={entry.day}
                title={`${formatDay(entry.day)}: ${formatValue(entry.value)}`}
                className="min-w-0 flex-1 rounded-t-xs"
                style={{
                  height: pct(entry.value),
                  maxWidth: 24,
                  background: limit && entry.value > limit ? 'var(--color-danger)' : seriesColor(series),
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-px pt-1 text-2xs text-fg-subtle">
          {days.map((entry, index) => (
            <span key={entry.day} className="min-w-0 flex-1 truncate text-center" style={{ maxWidth: 24 }}>
              {index % labelEvery === 0 ? formatDay(entry.day) : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
