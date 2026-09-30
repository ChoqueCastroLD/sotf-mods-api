/**
 * `/basecamp/analytics` — analytics of all my mods or one (PLAN §7.5 «Analíticas por mod»):
 * daily downloads (zero-filled) total and unique with release and patch markers, views and the
 * view → download conversion, downloads by version (≤ 8 + «Other»: stacked daily bars and totals) and by channel (web, RedManager,
 * client), referrers grouped (Google, Discord, YouTube, GitHub, AI assistants, internal, direct),
 * visitor language and country, followers gained, ratings over time, compatibility by build and CSV export.
 * The whole legacy history since 2023 is included in «All». Every chart has «View as table».
 */
import { buttonClasses } from '@sotf/ui/button';
import { StatTile } from '@sotf/ui/domain';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Select } from '@sotf/ui/select';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ChartLine, Download, Pencil } from 'lucide-react';
import { useEffect } from 'react';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { activeLocale } from '../../lib/messages.ts';
import { type Analytics, type AnalyticsRange, analyticsCsvHref, analyticsQuery, CHANNELS, modsQuery } from './api.ts';
import { CompatReports } from './CompatReports.tsx';
import { CategoryFigure, RatingsFigure, SeriesFigure, VersionSeriesFigure } from './charts/figures.tsx';
import { prefetchCharts } from './charts/lazy.tsx';
import { number, percent } from './format.ts';
import { bt, useBasecampMessages } from './i18n.ts';
import { channelLabel, countryName, languageName, REFERRER_GROUPS, referrerGroup, referrerGroupLabel } from './labels.ts';
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
    label: entry.version === 'other' ? bt('basecamp_analytics_other_versions') : `v${entry.version}`,
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
          display={totals.conversion === null ? '—' : percent(totals.conversion, 1)}
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

export function AnalyticsScreen({
  modId,
  range,
  onChange,
}: {
  modId: number | null;
  range: AnalyticsRange;
  onChange: (next: { modId?: number | null; range?: AnalyticsRange }) => void;
}) {
  useBasecampMessages();
  const { data: mods } = useSuspenseQuery(modsQuery);
  const analytics = useQuery(analyticsQuery(modId, range));
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
      readout={bt('basecamp_readout')}
      title={bt('basecamp_analytics_title')}
      description={bt('basecamp_analytics_intro')}
      actions={
        <a
          href={analyticsCsvHref(modId, range)}
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
        <div className="flex flex-wrap items-end gap-3">
          <Select
            label={bt('basecamp_analytics_mod')}
            options={modOptions}
            value={modId ? String(modId) : 'all'}
            onValueChange={(value) => onChange({ modId: value && value !== 'all' ? Number(value) : null })}
            className="min-w-56"
          />
          <RangeSwitch value={range} onChange={(next) => onChange({ range: next })} />
          {selected ? (
            <Link
              to="/basecamp/mods/$modId"
              params={{ modId: String(selected.mod.id) }}
              className={buttonClasses({ variant: 'ghost', size: 'sm' })}
            >
              <Icon icon={Pencil} size={16} />
              {bt('basecamp_mods_edit')}
            </Link>
          ) : null}
        </div>
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
                range={range}
                series={[
                  { key: 'downloads', label: bt('basecamp_series_downloads') },
                  { key: 'uniqueDownloads', label: bt('basecamp_series_unique') },
                ]}
                kind="line"
                withMarkers
                height={280}
              />
            </Panel>

            <div className="grid gap-6 xl:grid-cols-2">
              <Panel title={bt('basecamp_analytics_views_title')}>
                <SeriesFigure
                  title={bt('basecamp_analytics_views_chart')}
                  analytics={analytics.data}
                  range={range}
                  series={[{ key: 'views', label: bt('basecamp_series_views') }]}
                  kind="area"
                />
              </Panel>
              <Panel title={bt('basecamp_analytics_follows_title')}>
                <SeriesFigure
                  title={bt('basecamp_analytics_follows_chart')}
                  analytics={analytics.data}
                  range={range}
                  series={[{ key: 'follows', label: bt('basecamp_series_follows') }]}
                  kind="bar"
                />
              </Panel>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <Panel title={bt('basecamp_analytics_versions_title')}>
                <div className="grid gap-6">
                  <VersionSeriesFigure analytics={analytics.data} range={range} />
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

            <div className="grid gap-6 xl:grid-cols-2">
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
              <RatingsFigure analytics={analytics.data} range={range} />
            </Panel>

            <Panel title={bt('basecamp_analytics_compat_title')}>
              {selected ? (
                <CompatReports modId={selected.mod.id} />
              ) : (
                <p className="text-sm text-fg-muted">{bt('basecamp_analytics_compat_pick')}</p>
              )}
            </Panel>
          </div>
        )}
      </div>
    </DomainI18nBridge>
  );
}
