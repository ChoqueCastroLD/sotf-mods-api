/**
 * Public download chart of a mod: Recharts area chart in the Locator chart theme inside a
 * `ChartFigure` (title and the mandatory «View as table»), with a 30 days / 1 year / all time
 * range switch. Data: `GET /api/v2/mods/:id/stats/public?range=` (edge cached 900 s).
 */
import { ChartFigure, chartTheme, niceTicks, seriesColor } from '@sotf/ui/domain';
import { useEffect, useMemo, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { formatNumber, pageLang, SocialI18n } from '../comments/lib/i18n.tsx';

export interface StatsChartProps {
  modId: number;
  labels: Record<string, string>;
}

type Range = '30d' | '1y' | 'all';

interface Stats {
  range: Range;
  granularity: 'day' | 'week';
  series: { day: string; downloads: number }[];
}

const RANGES: Range[] = ['30d', '1y', 'all'];
const HEIGHT = 220;

function dayLabel(iso: string, withYear: boolean): string {
  const date = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat(pageLang(), {
    day: 'numeric',
    month: 'short',
    ...(withYear ? { year: 'numeric' } : {}),
    timeZone: 'UTC',
  }).format(date);
}

export function StatsChart({ modId, labels }: StatsChartProps) {
  const [range, setRange] = useState<Range>('30d');
  const [stats, setStats] = useState<Stats | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setFailed(false);
    fetch(`/api/v2/mods/${modId}/stats/public?range=${range}`, {
      signal: controller.signal,
      headers: { accept: 'application/json' },
      credentials: 'same-origin',
    })
      .then((response) => (response.ok ? (response.json() as Promise<Stats>) : Promise.reject(new Error('stats'))))
      .then(setStats)
      .catch((error: unknown) => {
        if ((error as { name?: string }).name !== 'AbortError') setFailed(true);
      });
    return () => controller.abort();
  }, [modId, range]);

  const withYear = range !== '30d';
  const data = useMemo(() => stats?.series ?? [], [stats]);
  const rows = useMemo(
    () => data.map((point) => ({ label: dayLabel(point.day, withYear), downloads: point.downloads })),
    [data, withYear],
  );
  const max = Math.max(0, ...data.map((point) => point.downloads));
  const series = [{ key: 'downloads', label: labels.series ?? '' }];

  return (
    <SocialI18n>
      <div className="grid gap-3">
        {/* biome-ignore lint/a11y/useSemanticElements: a group of toggle buttons; <fieldset> would add unwanted chrome */}
        <div role="group" aria-label={labels.rangeLabel} className="flex flex-wrap gap-1.5">
          {RANGES.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={range === value}
              onClick={() => setRange(value)}
              className="inline-flex min-h-11 items-center rounded-md border border-border-strong px-3 text-xs font-semibold text-fg-muted aria-pressed:border-primary aria-pressed:text-primary md:min-h-8"
            >
              {labels[value === '30d' ? 'range30d' : value === '1y' ? 'range1y' : 'rangeAll']}
            </button>
          ))}
        </div>
        {failed ? (
          <p role="alert" className="text-sm text-fg-muted">
            {labels.error}
          </p>
        ) : stats === null ? (
          <p className="text-sm text-fg-muted">{labels.loading}</p>
        ) : max === 0 ? (
          <p className="text-sm text-fg-muted">{labels.empty}</p>
        ) : (
          <ChartFigure
            title={labels.title ?? ''}
            series={series}
            rows={rows}
            rowHeader={(stats.granularity === 'day' ? labels.rowDay : labels.rowWeek) ?? ''}
            height={HEIGHT}
          >
            <ResponsiveContainer width="100%" height={HEIGHT}>
              <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }} accessibilityLayer={false}>
                <CartesianGrid {...chartTheme.grid} />
                <XAxis
                  {...chartTheme.xAxis}
                  dataKey="day"
                  tickFormatter={(value: string) => dayLabel(value, withYear)}
                />
                <YAxis
                  {...chartTheme.yAxis}
                  ticks={niceTicks(max)}
                  tickFormatter={(value: number) => formatNumber(value)}
                />
                <Tooltip
                  {...chartTheme.tooltip}
                  labelFormatter={(value: unknown) => dayLabel(String(value), withYear)}
                  formatter={(value: unknown) => [formatNumber(Number(value)), labels.series ?? '']}
                />
                <Area
                  {...chartTheme.area}
                  dataKey="downloads"
                  stroke={seriesColor(0)}
                  fill={seriesColor(0)}
                  name={labels.series ?? ''}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartFigure>
        )}
      </div>
    </SocialI18n>
  );
}
