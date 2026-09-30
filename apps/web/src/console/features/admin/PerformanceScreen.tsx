/**
 * `/ranger/admin/performance` (PLAN §7.4 «panel RUM (p75 por plantilla y país)», §8): real-user
 * Core Web Vitals collected by the site beacon, p75 per page template, for all countries together
 * or one country, over 7 or 28 days. Each value is rated with the Core Web Vitals thresholds
 * (good, needs improvement, poor) in text and colour; columns sort; low-sample rows are marked.
 */
import { formatNumber, toIntlLocale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { cn } from '@sotf/ui/cn';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Select } from '@sotf/ui/select';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ArrowDown, ArrowUp, Gauge } from 'lucide-react';
import { Fragment, useMemo, useState } from 'react';
import { type RumRange, type RumRow, rumQuery } from './api.ts';
import { AdminHeader, formatCount, locale, Panel, TableScroller, tdClasses, thClasses } from './shared.tsx';

type Metric = 'lcpP75' | 'inpP75' | 'clsP75' | 'fcpP75' | 'ttfbP75';
type SortKey = 'template' | 'samples' | Metric;

/** Core Web Vitals thresholds: [good ≤, needs improvement ≤]. */
const THRESHOLDS: Record<Metric, readonly [number, number]> = {
  lcpP75: [2500, 4000],
  inpP75: [200, 500],
  clsP75: [0.1, 0.25],
  fcpP75: [1800, 3000],
  ttfbP75: [800, 1800],
};
const METRICS: readonly Metric[] = ['lcpP75', 'inpP75', 'clsP75', 'fcpP75', 'ttfbP75'];
const METRIC_LABELS: Record<Metric, string> = {
  lcpP75: 'LCP',
  inpP75: 'INP',
  clsP75: 'CLS',
  fcpP75: 'FCP',
  ttfbP75: 'TTFB',
};
/** Below this many samples a p75 is noisy. */
const LOW_SAMPLES = 50;
const ALL_COUNTRIES = '__all';

type Rating = 'good' | 'improve' | 'poor';

function ratingOf(metric: Metric, value: number): Rating {
  const [good, improve] = THRESHOLDS[metric];
  return value <= good ? 'good' : value <= improve ? 'improve' : 'poor';
}

function ratingLabel(rating: Rating): string {
  return rating === 'good'
    ? m.admin_rum_rating_good()
    : rating === 'improve'
      ? m.admin_rum_rating_improve()
      : m.admin_rum_rating_poor();
}

function formatMetric(metric: Metric, value: number): string {
  const code = locale();
  if (metric === 'clsP75') return formatNumber(code, value, { maximumFractionDigits: 3, minimumFractionDigits: 2 });
  if ((metric === 'lcpP75' || metric === 'fcpP75') && value >= 1000)
    return formatNumber(code, value / 1000, { style: 'unit', unit: 'second', maximumFractionDigits: 2 });
  return formatNumber(code, Math.round(value), { style: 'unit', unit: 'millisecond' });
}

function countryName(code: string | null): string {
  if (!code) return m.admin_rum_all_countries();
  try {
    return new Intl.DisplayNames([toIntlLocale(locale())], { type: 'region' }).of(code.toUpperCase()) ?? code;
  } catch {
    return code;
  }
}

export function PerformanceScreen({ range }: { range: RumRange }) {
  const { data } = useSuspenseQuery(rumQuery(range));
  const [sort, setSort] = useState<{ key: SortKey; desc: boolean }>({ key: 'samples', desc: true });
  const hasAggregate = data.rows.some((row) => row.country === null);
  const countries = useMemo(
    () =>
      [...new Set(data.rows.map((row) => row.country).filter((code): code is string => code !== null))].sort((a, b) =>
        countryName(a).localeCompare(countryName(b)),
      ),
    [data.rows],
  );
  // «All countries» needs the aggregate rows (country null); without them the first country opens.
  const [picked, setCountry] = useState<string | null>(null);
  const country = picked ?? (hasAggregate ? ALL_COUNTRIES : (countries[0] ?? ALL_COUNTRIES));
  const rows = useMemo(() => {
    const wanted = country === ALL_COUNTRIES ? null : country;
    const list = data.rows.filter((row) => row.country === wanted);
    const direction = sort.desc ? -1 : 1;
    return [...list].sort((a, b) => {
      if (sort.key === 'template') return a.template.localeCompare(b.template) * direction;
      const left = sort.key === 'samples' ? a.samples : a[sort.key];
      const right = sort.key === 'samples' ? b.samples : b[sort.key];
      if (left === null) return 1;
      if (right === null) return -1;
      return (left - right) * direction;
    });
  }, [data.rows, country, sort]);
  const totalSamples = rows.reduce((sum, row) => sum + row.samples, 0);
  const poor = METRICS.map((metric) => ({
    metric,
    count: rows.filter((row) => row[metric] !== null && ratingOf(metric, row[metric] as number) === 'poor').length,
  })).filter((entry) => entry.count > 0);

  const sortBy = (key: SortKey) =>
    setSort((previous) => (previous.key === key ? { key, desc: !previous.desc } : { key, desc: key !== 'template' }));

  const header = (key: SortKey, label: string, end = true) => {
    const active = sort.key === key;
    return (
      <th
        scope="col"
        className={cn(thClasses, end && 'text-end')}
        aria-sort={active ? (sort.desc ? 'descending' : 'ascending') : undefined}
      >
        <button
          type="button"
          className={cn('inline-flex min-h-8 items-center gap-1 hover:text-fg', end && 'flex-row-reverse')}
          onClick={() => sortBy(key)}
        >
          {label}
          {active ? <Icon icon={sort.desc ? ArrowDown : ArrowUp} size={12} /> : null}
        </button>
      </th>
    );
  };

  return (
    <div className="grid gap-6">
      <AdminHeader
        title={m.admin_rum_title()}
        description={m.admin_rum_description()}
        actions={
          <nav aria-label={m.admin_range_label()} className="flex rounded-md border border-border p-0.5">
            {(['7d', '28d'] as const).map((value) => (
              <Link
                key={value}
                to="/ranger/admin/performance"
                search={value === '28d' ? {} : { range: value }}
                aria-current={value === range ? 'page' : undefined}
                className="inline-flex min-h-9 items-center rounded-sm px-3 text-sm font-medium text-fg-muted hover:text-fg aria-[current=page]:bg-primary/12 aria-[current=page]:text-fg"
              >
                {m.admin_range_days({ count: value === '7d' ? 7 : 28 })}
              </Link>
            ))}
          </nav>
        }
      />

      {data.rows.length === 0 ? (
        <EmptyState
          icon={<Icon icon={Gauge} size={32} />}
          title={m.admin_rum_empty_title()}
          description={m.admin_rum_empty_text()}
        />
      ) : (
        <Panel
          title={m.admin_rum_table_title()}
          description={m.admin_rum_summary({ templates: rows.length, samples: formatCount(totalSamples) })}
          actions={
            <Select<string>
              label={m.admin_rum_country()}
              size="sm"
              value={country}
              onValueChange={(next) => setCountry(next ?? ALL_COUNTRIES)}
              options={[
                ...(hasAggregate ? [{ value: ALL_COUNTRIES, label: m.admin_rum_all_countries() }] : []),
                ...countries.map((code) => ({ value: code, label: `${countryName(code)} (${code})` })),
              ]}
              className="min-w-56"
            />
          }
        >
          {poor.length > 0 ? (
            <p className="text-sm text-danger">
              {m.admin_rum_poor_summary({
                list: poor.map((entry) => `${METRIC_LABELS[entry.metric]} (${formatCount(entry.count)})`).join(', '),
              })}
            </p>
          ) : null}
          {rows.length === 0 ? (
            <p className="text-sm text-fg-muted">{m.admin_rum_no_rows()}</p>
          ) : (
            <TableScroller label={m.admin_rum_table_title()}>
              <table className="w-full border-collapse text-sm tabular-nums">
                <caption className="sr-only">{m.admin_rum_table_title()}</caption>
                <thead className="bg-sunken">
                  <tr>
                    {header('template', m.admin_rum_col_template(), false)}
                    {header('samples', m.admin_rum_col_samples())}
                    {METRICS.map((metric) => (
                      <Fragment key={metric}>{header(metric, METRIC_LABELS[metric])}</Fragment>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <RumRowView key={`${row.template}:${row.country ?? ''}`} row={row} />
                  ))}
                </tbody>
              </table>
            </TableScroller>
          )}
          <p className="text-xs text-fg-muted">{m.admin_rum_legend({ samples: LOW_SAMPLES })}</p>
        </Panel>
      )}
    </div>
  );
}

const RATING_CLASSES: Record<Rating, string> = {
  good: 'text-success',
  improve: 'text-warning',
  poor: 'text-danger font-semibold',
};

function RumRowView({ row }: { row: RumRow }) {
  const low = row.samples < LOW_SAMPLES;
  return (
    <tr className={cn('border-t border-border', low && 'text-fg-muted')}>
      <th scope="row" className={`${tdClasses} text-start font-mono text-xs font-medium`}>
        {row.template}
      </th>
      <td className={`${tdClasses} text-end`}>
        {formatCount(row.samples)}
        {low ? <span className="ms-1 text-2xs text-warning">{m.admin_rum_low_samples()}</span> : null}
      </td>
      {METRICS.map((metric) => {
        const value = row[metric];
        if (value === null)
          return (
            <td key={metric} className={`${tdClasses} text-end text-fg-subtle`}>
              —
            </td>
          );
        const rating = ratingOf(metric, value);
        return (
          <td key={metric} className={cn(tdClasses, 'text-end whitespace-nowrap', RATING_CLASSES[rating])}>
            <span className="inline-flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className={cn(
                  'size-2 rounded-full',
                  rating === 'good' ? 'bg-success' : rating === 'improve' ? 'bg-warning' : 'bg-danger',
                )}
              />
              {formatMetric(metric, value)}
              <span className="sr-only">({ratingLabel(rating)})</span>
            </span>
          </td>
        );
      })}
    </tr>
  );
}
