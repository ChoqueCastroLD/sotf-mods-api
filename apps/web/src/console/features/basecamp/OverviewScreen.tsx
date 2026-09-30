/**
 * `/basecamp` — the creator summary (PLAN §7.5 «Resumen», research/03 §6.9): greeting and «Day N»,
 * KPIs with sparklines and deltas, the downloads chart with release and patch markers, «Needs
 * attention», «Live», «My mods» and the next milestone or tier.
 *
 * Phones: KPIs in two columns, «Needs attention» before the chart, the table as cards.
 */
import { buttonClasses } from '@sotf/ui/button';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ChartLine, Inbox, PackagePlus, Plus, Tent } from 'lucide-react';
import { useEffect } from 'react';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { useMe } from '../../hooks/use-me.ts';
import { type AnalyticsRange, analyticsQuery, overviewQuery } from './api.ts';
import { SeriesFigure } from './charts/figures.tsx';
import { prefetchCharts } from './charts/lazy.tsx';
import { dayNumber, number, partOfDay } from './format.ts';
import { bt, useBasecampMessages } from './i18n.ts';
import { KpiGrid } from './KpiGrid.tsx';
import { LivePanel } from './LivePanel.tsx';
import { Milestones } from './Milestones.tsx';
import { ModsTable } from './ModsTable.tsx';
import { NeedsAttention } from './NeedsAttention.tsx';
import { Panel, PanelError, PanelSkeleton, RangeSwitch, ScreenHeader } from './shared.tsx';

function greeting(name: string): string {
  switch (partOfDay()) {
    case 'morning':
      return bt('basecamp_greeting_morning', { name });
    case 'afternoon':
      return bt('basecamp_greeting_afternoon', { name });
    case 'evening':
      return bt('basecamp_greeting_evening', { name });
    case 'night':
      return bt('basecamp_greeting_night', { name });
  }
}

function DownloadsPanel({
  range,
  onRange,
  className,
}: {
  range: AnalyticsRange;
  onRange: (range: AnalyticsRange) => void;
  className?: string;
}) {
  const analytics = useQuery(analyticsQuery(null, range));
  return (
    <Panel
      title={bt('basecamp_downloads_title')}
      {...(className ? { className } : {})}
      actions={
        <>
          <RangeSwitch value={range} onChange={onRange} />
          <Link to="/basecamp/analytics" search={{ range }} className={buttonClasses({ variant: 'ghost', size: 'sm' })}>
            <Icon icon={ChartLine} size={16} />
            {bt('basecamp_downloads_more')}
          </Link>
        </>
      }
    >
      {analytics.isPending ? (
        <PanelSkeleton rows={1} className="[&>*]:h-60" />
      ) : analytics.isError ? (
        <PanelError error={analytics.error} onRetry={() => void analytics.refetch()} />
      ) : (
        <>
          <SeriesFigure
            title={bt('basecamp_downloads_chart_title', { total: number(analytics.data.totals.downloads) })}
            analytics={analytics.data}
            range={range}
            series={[{ key: 'downloads', label: bt('basecamp_series_downloads') }]}
            kind="area"
            withMarkers
          />
          <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-fg-muted">
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="h-3 w-px bg-border-strong" />
              {bt('basecamp_chart_release_legend')}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="h-3 w-px border-s border-dashed border-featured" />
              {bt('basecamp_chart_patch_legend')}
            </span>
          </p>
        </>
      )}
    </Panel>
  );
}

export function OverviewScreen({
  range,
  onRange,
}: {
  range: AnalyticsRange;
  onRange: (range: AnalyticsRange) => void;
}) {
  useBasecampMessages();
  const me = useMe();
  const { data } = useSuspenseQuery(overviewQuery);

  useEffect(() => {
    if (data.mods.length === 0) return;
    const idle = window.requestIdleCallback ?? ((callback: () => void) => window.setTimeout(callback, 1));
    idle(() => prefetchCharts());
  }, [data.mods.length]);

  const name = me.user.displayName || me.user.handle;
  const lifetimeDownloads = data.mods.reduce((sum, row) => sum + row.mod.downloads, 0);

  const header = (
    <ScreenHeader
      readout={bt('basecamp_day', { day: number(dayNumber(me.user.createdAt)) })}
      title={greeting(name)}
      actions={
        <>
          <Link to="/basecamp/new/mod" className={buttonClasses({ variant: 'primary', size: 'sm' })}>
            <Icon icon={Plus} size={16} />
            {bt('basecamp_action_new_mod')}
          </Link>
          {data.mods.length > 0 ? (
            <Link to="/basecamp/new" className={buttonClasses({ variant: 'secondary', size: 'sm' })}>
              <Icon icon={PackagePlus} size={16} />
              {bt('basecamp_action_new_version')}
            </Link>
          ) : null}
          <Link to="/basecamp/inbox" className={buttonClasses({ variant: 'ghost', size: 'sm' })}>
            <Icon icon={Inbox} size={16} />
            {bt('basecamp_action_inbox')}
          </Link>
        </>
      }
    />
  );

  if (data.mods.length === 0) {
    return (
      <div className="grid gap-6">
        {header}
        <EmptyState
          icon={<Icon icon={Tent} size={32} />}
          title={bt('basecamp_empty_title')}
          description={bt('basecamp_empty_text')}
          action={
            <Link to="/basecamp/new" className={buttonClasses({ variant: 'primary' })}>
              <Icon icon={Plus} size={18} />
              {bt('basecamp_empty_action')}
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <DomainI18nBridge>
      <div className="flex flex-col gap-6">
        {header}
        <section aria-label={bt('basecamp_kpis_label')}>
          <KpiGrid kpis={data.kpis} />
        </section>

        {/* Phones put «Needs attention» before the chart; wider screens follow the wireframe. */}
        <div className="order-2 grid gap-6 lg:order-3 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <Panel title={bt('basecamp_attention_title')}>
            <NeedsAttention items={data.needsAttention} />
          </Panel>
          <Panel title={bt('basecamp_live_title')}>
            <LivePanel mods={data.mods} />
          </Panel>
        </div>

        <DownloadsPanel range={range} onRange={onRange} className="order-3 lg:order-2" />

        <Panel
          className="order-4"
          title={bt('basecamp_mods_title')}
          actions={
            <Link to="/basecamp/mods" className="text-sm text-link hover:underline">
              {bt('basecamp_mods_all')}
            </Link>
          }
        >
          <ModsTable rows={data.mods} caption={bt('basecamp_mods_title')} />
        </Panel>

        <Panel title={bt('basecamp_milestone_title')} className="order-5">
          <Milestones milestone={data.nextMilestone} tier={data.nextTier} lifetimeDownloads={lifetimeDownloads} />
        </Panel>
      </div>
    </DomainI18nBridge>
  );
}
