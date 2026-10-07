/**
 * `/dashboard/analytics` — analytics of all my mods or one (PLAN §7.5 «Analíticas por mod»):
 * daily downloads (zero-filled) total and unique with release and patch markers, views and the
 * view → download conversion, downloads by version (≤ 8 + «Other»: stacked daily bars and totals) and by channel (web, RedManager,
 * client), referrers grouped (Google, Discord, YouTube, GitHub, AI assistants, internal, direct),
 * visitor language and country, followers gained, ratings over time and CSV export.
 * The whole legacy history since 2023 is included in «All». Every chart has «View as table».
 */
import { buttonClasses } from '@sotf/ui/button';
import { StatTile } from '@sotf/ui/domain';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ChartLine, Download, Pencil } from 'lucide-react';
import { useEffect, useId } from 'react';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { activeLocale } from '../../lib/messages.ts';
import {
  type Analytics,
  type AnalyticsRange,
  analyticsCsvHref,
  analyticsQuery,
  CHANNELS,
  type CustomRange,
  modsQuery,
  spanDays,
} from './api.ts';
import { CategoryFigure, RatingsFigure, SeriesFigure, VersionSeriesFigure, versionLabel } from './charts/figures.tsx';
import { prefetchCharts } from './charts/lazy.tsx';
import { number, percent } from './format.ts';
import { bt, useBasecampMessages } from './i18n.ts';
import {
  channelLabel,
  countryName,
  languageName,
  REFERRER_GROUPS,
  referrerGroup,
  referrerGroupLabel,
} from './labels.ts';
import { Panel, PanelError, PanelSkeleton, RangeSwitch, ScreenHeader } from './shared.tsx';

/** Referrers grouped by source, biggest first (every group, zeros dropped). */
export function referrerRows(analytics: Analytics): Array<{ label: string; value: number }> {
  const totals = new Map<string, number>();
  for (const entry of analytics.referrers) {
    const group = referrerGroup(entry.domain);
    totals.set(group, (totals.get(group) ?? 0) + entry.visits);
  }
  return REFERRER_GROUPS.filter((group) => (totals.get(group) ?? 0) > 0)
    .map((group) => ({ label: referrerGroupLabel(group), value: totals.get(group) ?? 0 }))
    .sort((a, b) => b.value - a.value);
}

function versionRows(analytics: Analytics): Array<{ label: string; value: number }> {
  return analytics.byVersion.map((entry) => ({
    label: versionLabel(entry.version, bt('basecamp_analytics_other_versions')),
    value: entry.downloads,
  }));
}

function channelRows(analytics: Analytics): Array<{ label: string; value: number }> {
  return CHANNELS.filter((channel) => (analytics.byChannel[channel] ?? 0) > 0).map((channel) => ({
    label: channelLabel(channel),
    value: analytics.byChannel[channel] ?? 0,
  }));
}

function localeRows(analytics: Analytics): Array<{ label: string; value: number }> {
  const display = activeLocale();
  return [...analytics.locales]
    .sort((a, b) => b.visits - a.visits)
    .map((entry) => ({ label: languageName(entry.locale, display), value: entry.visits }));
}

function countryRows(analytics: Analytics): Array<{ label: string; value: number }> {
  const display = activeLocale();
  return [...analytics.countries]
    .sort((a, b) => b.visits - a.visits)
    .map((entry) => ({ label: countryName(entry.country, display), value: entry.visits }));
}

function Totals({ analytics }: { analytics: Analytics }) {
  const { totals } = analytics;
  return (
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <li>
        <StatTile label={bt('basecamp_analytics_downloads')} value={totals.downloads} className="h-full" />
      </li>
      <li>
        <StatTile label={bt('basecamp_analytics_unique')} value={totals.uniqueDownloads} className="h-full" />
      </li>
      <li>
        <StatTile label={bt('basecamp_analytics_views')} value={totals.views} className="h-full" />
      </li>
      <li>
        <StatTile
          label={bt('basecamp_analytics_conversion')}
          value={totals.conversion === null ? 0 : Math.round(totals.conversion * 1000) / 10}
          display={totals.conversion === null ? '-' : percent(totals.conversion, 1)}
          className="h-full"
        />
      </li>
    </ul>
  );
}

function Referrers({ analytics }: { analytics: Analytics }) {
  const rows = referrerRows(analytics);
  const domains = [...analytics.referrers].sort((a, b) => b.visits - a.visits).slice(0, 15);
  return (
    <div className="grid gap-4">
      <CategoryFigure
        title={bt('basecamp_analytics_referrers')}
        rowHeader={bt('basecamp_analytics_source')}
        valueLabel={bt('basecamp_analytics_visits')}
        rows={rows}
        colorIndex={2}
      />
      {domains.length > 0 ? (
        <details className="text-sm">
          <summary className="cursor-pointer text-fg-muted hover:text-fg">{bt('basecamp_analytics_domains')}</summary>
          <div className="mt-2 max-h-80 overflow-auto rounded-md border border-border">
            <table className="w-full border-collapse text-xs tabular-nums">
              <thead className="sticky top-0 bg-sunken">
                <tr>
                  <th scope="col" className="px-3 py-1.5 text-start readout">
                    {bt('basecamp_analytics_domain')}
                  </th>
                  <th scope="col" className="px-3 py-1.5 text-start readout">
                    {bt('basecamp_analytics_source')}
                  </th>
                  <th scope="col" className="px-3 py-1.5 text-end readout">
                    {bt('basecamp_analytics_visits')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {domains.map((entry) => (
                  <tr key={entry.domain || '(direct)'} className="border-t border-border">
                    <th scope="row" className="px-3 py-1 text-start font-normal text-fg-muted">
                      {entry.domain || bt('basecamp_referrer_direct')}
                    </th>
                    <td className="px-3 py-1">{referrerGroupLabel(referrerGroup(entry.domain))}</td>
                    <td className="px-3 py-1 text-end">{number(entry.visits)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      ) : null}
    </div>
  );
}

/** Today as a UTC day (`YYYY-MM-DD`), the last day the statistics cover. */
function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function addDays(day: string, days: number): string {
  return new Date(Date.parse(`${day}T00:00:00Z`) + days * 86_400_000).toISOString().slice(0, 10);
}

/** Start and end dates of a custom range. Invalid pairs are not sent to the server. */
function CustomRangeFields({ value, onChange }: { value: CustomRange; onChange: (next: CustomRange) => void }) {
  const fromId = useId();
  const toId = useId();
  const max = today();
  const valid = value.from <= value.to && value.to <= max && spanDays(value) <= 1100;
  return (
    <div className="flex flex-wrap items-end gap-3">
      <div className="grid gap-1">
        <label htmlFor={fromId} className="text-sm font-medium text-fg">
          {bt('basecamp_range_from')}
        </label>
        <Input
          id={fromId}
          type="date"
          value={value.from}
          max={value.to}
          onChange={(event) => event.currentTarget.value && onChange({ ...value, from: event.currentTarget.value })}
          className="w-44"
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor={toId} className="text-sm font-medium text-fg">
          {bt('basecamp_range_to')}
        </label>
        <Input
          id={toId}
          type="date"
          value={value.to}
          min={value.from}
          max={max}
          onChange={(event) => event.currentTarget.value && onChange({ ...value, to: event.currentTarget.value })}
          className="w-44"
        />
      </div>
      {valid ? null : (
        <p role="alert" className="pb-2 text-sm text-danger">
          {bt('basecamp_range_invalid')}
        </p>
      )}
    </div>
  );
}

export function AnalyticsScreen({
  modId,
  range,
  custom,
  onChange,
}: {
  modId: number | null;
  range: AnalyticsRange | 'custom';
  /** Start and end of the custom range (always set; used when `range` is «custom»). */
  custom: CustomRange;
  onChange: (next: { modId?: number | null; range?: AnalyticsRange | 'custom'; custom?: CustomRange }) => void;
}) {
  useBasecampMessages();
  const { data: mods } = useSuspenseQuery(modsQuery);
  const isCustom = range === 'custom';
  const validCustom = custom.from <= custom.to && custom.to <= today() && spanDays(custom) <= 1100;
  // An invalid pair keeps showing the last valid data instead of querying the server with it.
  const activeCustom = isCustom && validCustom ? custom : null;
  const apiRange: AnalyticsRange = isCustom ? '30d' : range;
  const analytics = useQuery({
    ...analyticsQuery(modId, apiRange, activeCustom),
    enabled: !isCustom || validCustom,
  });
  // Labels of the charts: a long custom range shows years like «All».
  const chartRange: AnalyticsRange = isCustom ? (spanDays(custom) > 300 ? 'all' : '30d') : range;
  const selected = modId ? (mods.items.find((row) => row.mod.id === modId) ?? null) : null;

  useEffect(() => {
    prefetchCharts();
  }, []);

  const modOptions = [
    { value: 'all', label: bt('basecamp_analytics_all_mods') },
    ...mods.items.map((row) => ({ value: String(row.mod.id), label: row.mod.name })),
  ];

  const header = (
    <ScreenHeader
      title={bt('basecamp_analytics_title')}
      description={bt('basecamp_analytics_intro')}
      actions={
        <a
          href={analyticsCsvHref(modId, apiRange, activeCustom)}
          download
          className={buttonClasses({ variant: 'secondary', size: 'sm' })}
        >
          <Icon icon={Download} size={16} />
          {bt('basecamp_analytics_csv')}
        </a>
      }
    />
  );

  if (mods.items.length === 0) {
    return (
      <div className="grid gap-6">
        {header}
        <EmptyState
          icon={<Icon icon={ChartLine} size={32} />}
          title={bt('basecamp_analytics_empty_title')}
          description={bt('basecamp_analytics_empty_text')}
        />
      </div>
    );
  }

  return (
    <DomainI18nBridge>
      <div className="grid gap-6">
        {header}
        <div className="grid gap-3 md:flex md:flex-wrap md:items-end">
          <Select
            label={bt('basecamp_analytics_mod')}
            options={modOptions}
            value={modId ? String(modId) : 'all'}
            onValueChange={(value) => onChange({ modId: value && value !== 'all' ? Number(value) : null })}
            className="md:min-w-56"
          />
          <RangeSwitch
            value={range}
            allowCustom
            onChange={(next) =>
              onChange(
                next === 'custom'
                  ? { range: next, custom: { from: addDays(today(), -29), to: today() } }
                  : { range: next },
              )
            }
          />
          {selected ? (
            <Link
              to="/dashboard/mods/$modId"
              params={{ modId: String(selected.mod.id) }}
              className={buttonClasses({ variant: 'ghost', size: 'sm' })}
            >
              <Icon icon={Pencil} size={16} />
              {bt('basecamp_mods_edit')}
            </Link>
          ) : null}
        </div>
        {isCustom ? <CustomRangeFields value={custom} onChange={(next) => onChange({ custom: next })} /> : null}
        {range === 'all' ? <p className="text-xs text-fg-muted">{bt('basecamp_analytics_legacy_note')}</p> : null}

        {analytics.isPending ? (
          <PanelSkeleton rows={4} className="[&>*]:h-48" />
        ) : analytics.isError ? (
          <PanelError error={analytics.error} onRetry={() => void analytics.refetch()} />
        ) : (
          <div className="grid gap-6" aria-busy={analytics.isFetching}>
            <section aria-label={bt('basecamp_analytics_totals')}>
              <Totals analytics={analytics.data} />
            </section>

            <Panel title={bt('basecamp_analytics_downloads_title')}>
              <SeriesFigure
                title={bt('basecamp_analytics_downloads_chart')}
                analytics={analytics.data}
                range={chartRange}
                series={[
                  { key: 'downloads', label: bt('basecamp_series_downloads') },
                  { key: 'uniqueDownloads', label: bt('basecamp_series_unique') },
                ]}
                kind="line"
                withMarkers
                height={280}
              />
            </Panel>

            <div className="grid items-start gap-6 xl:grid-cols-2">
              <Panel title={bt('basecamp_analytics_views_title')}>
                <SeriesFigure
                  title={bt('basecamp_analytics_views_chart')}
                  analytics={analytics.data}
                  range={chartRange}
                  series={[{ key: 'views', label: bt('basecamp_series_views') }]}
                  kind="area"
                />
              </Panel>
              <Panel title={bt('basecamp_analytics_follows_title')}>
                <SeriesFigure
                  title={bt('basecamp_analytics_follows_chart')}
                  analytics={analytics.data}
                  range={chartRange}
                  series={[{ key: 'follows', label: bt('basecamp_series_follows') }]}
                  kind="bar"
                />
              </Panel>
            </div>

            <div className="grid items-start gap-6 xl:grid-cols-2">
              <Panel title={bt('basecamp_analytics_versions_title')}>
                <div className="grid gap-6">
                  <VersionSeriesFigure analytics={analytics.data} range={chartRange} />
                  <CategoryFigure
                    title={bt('basecamp_analytics_versions_chart')}
                    rowHeader={bt('basecamp_analytics_version')}
                    valueLabel={bt('basecamp_series_downloads')}
                    rows={versionRows(analytics.data)}
                  />
                </div>
              </Panel>
              <Panel title={bt('basecamp_analytics_channels_title')}>
                <CategoryFigure
                  title={bt('basecamp_analytics_channels_chart')}
                  rowHeader={bt('basecamp_analytics_channel')}
                  valueLabel={bt('basecamp_series_downloads')}
                  rows={channelRows(analytics.data)}
                  colorIndex={1}
                />
              </Panel>
            </div>

            <div className="grid items-start gap-6 xl:grid-cols-2">
              <Panel title={bt('basecamp_analytics_referrers_title')}>
                <Referrers analytics={analytics.data} />
              </Panel>
              <Panel title={bt('basecamp_analytics_locales_title')}>
                <CategoryFigure
                  title={bt('basecamp_analytics_locales_chart')}
                  rowHeader={bt('basecamp_analytics_language')}
                  valueLabel={bt('basecamp_analytics_visits')}
                  rows={localeRows(analytics.data)}
                  colorIndex={3}
                />
              </Panel>
            </div>

            <Panel title={bt('basecamp_analytics_countries_title')}>
              <CategoryFigure
                title={bt('basecamp_analytics_countries_chart')}
                rowHeader={bt('basecamp_analytics_country')}
                valueLabel={bt('basecamp_analytics_visits')}
                rows={countryRows(analytics.data)}
                colorIndex={4}
              />
            </Panel>

            <Panel title={bt('basecamp_analytics_ratings_title')}>
              <RatingsFigure analytics={analytics.data} range={chartRange} />
            </Panel>
          </div>
        )}
      </div>
    </DomainI18nBridge>
  );
}
