/**
 * `/dashboard`: the creator summary. Key figures (downloads today, 7 and 30 days, followers, what
 * waits for an answer and for review), the downloads chart, «Needs attention» (grouped, sorted,
 * paginated, dismissable), recent activity and the busiest mods. The chart range and the attention
 * filters live in the URL.
 *
 * Phones: the figures are a swipeable strip, «Needs attention» comes before the chart and the mods
 * table is a list.
 */
import { buttonClasses } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ChartLine, PackagePlus, Plus } from 'lucide-react';
import { useEffect } from 'react';
import { ArtState } from '../../components/ArtState.tsx';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { ActivityPanel } from './ActivityPanel.tsx';
import { AttentionPanel, type AttentionState } from './AttentionPanel.tsx';
import { type AnalyticsRange, analyticsQuery, overviewQuery } from './api.ts';
import { SeriesFigure } from './charts/figures.tsx';
import { prefetchCharts } from './charts/lazy.tsx';
import { number } from './format.ts';
import { bt, useBasecampMessages } from './i18n.ts';
import { KpiStrip } from './KpiStrip.tsx';
import { ModsTable } from './ModsTable.tsx';
import { Panel, PanelError, PanelSkeleton, RangeSwitch, ScreenHeader } from './shared.tsx';

/** Mods listed on the dashboard (the rest is on «My mods»). */
const TOP_MODS = 5;

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
          <RangeSwitch value={range} onChange={(next) => next !== 'custom' && onRange(next)} />
          <Link
            to="/dashboard/analytics"
            search={{ range }}
            className={buttonClasses({ variant: 'ghost', size: 'sm' })}
          >
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
  attention,
  onAttention,
}: {
  range: AnalyticsRange;
  onRange: (range: AnalyticsRange) => void;
  attention: AttentionState;
  onAttention: (next: Partial<AttentionState>) => void;
}) {
  useBasecampMessages();
  const { data } = useSuspenseQuery(overviewQuery);

  useEffect(() => {
    if (data.mods.length === 0) return;
    const idle = window.requestIdleCallback ?? ((callback: () => void) => window.setTimeout(callback, 1));
    idle(() => prefetchCharts());
  }, [data.mods.length]);

  const header = (
    <ScreenHeader
      title={bt('basecamp_overview_title')}
      description={bt('basecamp_overview_intro')}
      actions={
        <>
          {data.mods.length > 0 ? (
            <Link to="/dashboard/new" className={buttonClasses({ variant: 'secondary', size: 'sm' })}>
              <Icon icon={PackagePlus} size={16} />
              {bt('basecamp_action_new_version')}
            </Link>
          ) : null}
          <Link
            to="/dashboard/new/mod"
            className={`${buttonClasses({ variant: 'primary', size: 'sm' })} max-md:hidden`}
          >
            <Icon icon={Plus} size={16} />
            {bt('basecamp_action_new_mod')}
          </Link>
        </>
      }
    />
  );

  if (data.mods.length === 0) {
    return (
      <div className="grid gap-6">
        {header}
        <ArtState
          art="cabin"
          title={bt('basecamp_empty_title')}
          description={bt('basecamp_empty_text')}
          action={
            <Link to="/dashboard/new" className={buttonClasses({ variant: 'primary' })}>
              <Icon icon={Plus} size={18} />
              {bt('basecamp_empty_action')}
            </Link>
          }
        />
      </div>
    );
  }

  const top = [...data.mods]
    .filter((row) => row.mod.status !== 'removed')
    .sort((a, b) => b.downloads7d - a.downloads7d || b.mod.downloads - a.mod.downloads)
    .slice(0, TOP_MODS);

  return (
    <DomainI18nBridge>
      <div className="flex flex-col gap-6">
        {header}
        <section aria-label={bt('basecamp_kpis_label')}>
          <KpiStrip overview={data} />
        </section>

        {/* Phones put «Needs attention» before the chart; wider screens put the chart first. */}
        <div className="order-2 grid items-start gap-6 lg:order-3 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <Panel title={bt('basecamp_attention_title')}>
            <AttentionPanel state={attention} onState={onAttention} />
          </Panel>
          <Panel title={bt('basecamp_activity_title')}>
            <ActivityPanel />
          </Panel>
        </div>

        <DownloadsPanel range={range} onRange={onRange} className="order-3 lg:order-2" />

        <Panel
          className="order-4"
          title={bt('basecamp_mods_top_title')}
          actions={
            <Link to="/dashboard/mods" className="text-sm text-link hover:underline">
              {bt('basecamp_mods_all')}
            </Link>
          }
        >
          <ModsTable rows={top} caption={bt('basecamp_mods_top_title')} />
        </Panel>
      </div>
    </DomainI18nBridge>
  );
}
