/**
 * `/moderation/admin/traffic` — the owner's dashboard (only ShokoCC; the API answers 403 to anyone
 * else): page views and visitors per day, downloads, SotF Mods Manager activity and growth, with
 * the breakdowns of the period (page type, referrer, country, device, language, signed in or not,
 * download channel, events), the top pages and the top mods. Every figure compares with the period
 * just before. Data comes from the hourly `SiteTrafficDaily` rollup.
 */
import { m } from '@sotf/i18n/messages';
import { cn } from '@sotf/ui/cn';
import { ChartFigure } from '@sotf/ui/domain';
import { Select } from '@sotf/ui/select';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { CategoryFigure } from '../basecamp/charts/figures.tsx';
import { type SeriesSpec, TimeSeriesChart } from '../basecamp/charts/lazy.tsx';
import { dayLabel, number } from '../basecamp/format.ts';
import { type Traffic, type TrafficRange, trafficQuery } from './api.ts';
import { AdminHeader, formatCount, Panel, TableScroller, tdClasses, thClasses } from './shared.tsx';

type Day = Traffic['days'][number];
type Totals = Traffic['totals'];

const RANGES: readonly TrafficRange[] = ['7d', '30d', '90d', '365d'];

function delta(now: number, before: number): { text: string; tone: 'up' | 'down' | 'flat' } {
  if (before === 0) return { text: now > 0 ? '+∞' : '0%', tone: now > 0 ? 'up' : 'flat' };
  const change = ((now - before) / before) * 100;
  const rounded = Math.round(change * 10) / 10;
  return { text: `${rounded > 0 ? '+' : ''}${rounded}%`, tone: rounded > 0 ? 'up' : rounded < 0 ? 'down' : 'flat' };
}

function Kpi({ label, value, before, hint }: { label: string; value: number; before: number; hint?: string }) {
  const change = delta(value, before);
  return (
    <div className="grid gap-1 rounded-lg border border-border bg-surface p-3">
      <span className="text-xs text-fg-muted">{label}</span>
      <span className="text-2xl font-bold text-fg tabular-nums">{formatCount(value)}</span>
      <span className="flex flex-wrap items-baseline gap-x-2 text-xs">
        <span
          className={cn(
            'font-semibold tabular-nums',
            change.tone === 'up' ? 'text-success' : change.tone === 'down' ? 'text-danger' : 'text-fg-muted',
          )}
        >
          {change.text}
        </span>
        <span className="text-fg-subtle">{hint ?? m.admin_traffic_vs_previous({ value: formatCount(before) })}</span>
      </span>
    </div>
  );
}

function Series({
  title,
  days,
  series,
  kind,
  withYear,
}: {
  title: string;
  days: readonly Day[];
  series: ReadonlyArray<{ key: keyof Day; label: string }>;
  kind: 'area' | 'line' | 'bar';
  withYear: boolean;
}) {
  const specs: SeriesSpec[] = series.map((s) => ({ key: String(s.key), label: s.label }));
  const data = days.map((d) => {
    const row: { day: string } & Record<string, number | string> = { day: d.day };
    for (const s of series) row[String(s.key)] = d[s.key];
    return row;
  });
  const rows = days.map((d) => {
    const row: { label: string } & Record<string, number | string | null> = { label: dayLabel(d.day, true) };
    for (const s of series) row[String(s.key)] = d[s.key];
    return row;
  });
  return (
    <ChartFigure title={title} series={specs} rows={rows} rowHeader={m.admin_traffic_day()} height={240}>
      <TimeSeriesChart
        data={data}
        series={specs}
        kind={kind}
        title={title}
        height={240}
        formatDay={(day) => dayLabel(day, withYear)}
        formatDayLong={(day) => dayLabel(day, true)}
        formatValue={number}
      />
    </ChartFigure>
  );
}

function Breakdown({
  title,
  rows,
  limit = 12,
  colorIndex,
}: {
  title: string;
  rows: Traffic['breakdowns'][string] | undefined;
  limit?: number;
  colorIndex?: number;
}) {
  const top = (rows ?? []).slice(0, limit).map((row) => ({ label: row.key, value: row.views }));
  return (
    <CategoryFigure
      title={title}
      rowHeader={title}
      valueLabel={m.admin_traffic_views()}
      rows={top}
      {...(colorIndex !== undefined ? { colorIndex } : {})}
    />
  );
}

function share(part: number, whole: number): string {
  return whole > 0 ? `${Math.round((part / whole) * 1000) / 10}%` : '0%';
}

export function TrafficScreen({ range }: { range: TrafficRange }) {
  const { data } = useSuspenseQuery(trafficQuery(range));
  const navigate = useNavigate();
  const t: Totals = data.totals;
  const p: Totals = data.previous;
  const span = data.days.length;
  const withYear = range === '365d';
  const memberViews = data.days.reduce((sum, d) => sum + d.memberViews, 0);
  const avgActive = span > 0 ? Math.round(t.managerActive / span) : 0;
  const avgActiveBefore = span > 0 ? Math.round(p.managerActive / span) : 0;

  return (
    <div className="grid gap-6">
      <AdminHeader
        title={m.admin_traffic_title()}
        description={m.admin_traffic_description()}
        actions={
          <Select<TrafficRange>
            label={m.admin_traffic_range()}
            size="sm"
            value={range}
            onValueChange={(next) => {
              if (next)
                void navigate({ to: '/moderation/admin/traffic', search: next === '30d' ? {} : { range: next } });
            }}
            options={RANGES.map((value) => ({
              value,
              label: m.admin_traffic_range_days({ days: Number.parseInt(value, 10) }),
            }))}
          />
        }
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        <Kpi label={m.admin_traffic_views()} value={t.views} before={p.views} />
        <Kpi label={m.admin_traffic_visitors()} value={t.visitors} before={p.visitors} />
        <Kpi label={m.admin_traffic_downloads()} value={t.downloads} before={p.downloads} />
        <Kpi
          label={m.admin_traffic_manager_daily()}
          value={avgActive}
          before={avgActiveBefore}
          hint={m.admin_traffic_vs_previous({ value: formatCount(avgActiveBefore) })}
        />
        <Kpi label={m.admin_traffic_manager_downloads()} value={t.managerDownloads} before={p.managerDownloads} />
        <Kpi label={m.admin_traffic_members()} value={t.members} before={p.members} />
      </div>
      <p className="text-xs text-fg-muted">
        {m.admin_traffic_summary({
          members: share(memberViews, t.views),
          perVisitor: t.visitors > 0 ? (Math.round((t.views / t.visitors) * 10) / 10).toString() : '0',
          clicks: formatCount(t.managerClicks),
        })}
      </p>

      <Panel title={m.admin_traffic_visits_title()}>
        <Series
          title={m.admin_traffic_visits_title()}
          days={data.days}
          kind="area"
          withYear={withYear}
          series={[
            { key: 'views', label: m.admin_traffic_views() },
            { key: 'visitors', label: m.admin_traffic_visitors() },
            { key: 'memberViews', label: m.admin_traffic_member_views() },
          ]}
        />
      </Panel>

      <Panel title={m.admin_traffic_downloads_title()}>
        <Series
          title={m.admin_traffic_downloads_title()}
          days={data.days}
          kind="bar"
          withYear={withYear}
          series={[
            { key: 'downloads', label: m.admin_traffic_downloads() },
            { key: 'managerDownloads', label: m.admin_traffic_manager_downloads() },
          ]}
        />
      </Panel>

      <Panel title={m.admin_traffic_manager_title()} description={m.admin_traffic_manager_description()}>
        <Series
          title={m.admin_traffic_manager_title()}
          days={data.days}
          kind="line"
          withYear={withYear}
          series={[
            { key: 'managerActive', label: m.admin_traffic_manager_daily() },
            { key: 'managerClicks', label: m.admin_traffic_manager_clicks() },
          ]}
        />
        <Breakdown title={m.admin_traffic_manager_versions()} rows={data.breakdowns.manager_version} colorIndex={2} />
      </Panel>

      <Panel title={m.admin_traffic_growth_title()}>
        <Series
          title={m.admin_traffic_growth_title()}
          days={data.days}
          kind="bar"
          withYear={withYear}
          series={[
            { key: 'members', label: m.admin_traffic_members() },
            { key: 'mods', label: m.admin_traffic_new_mods() },
            { key: 'versions', label: m.admin_traffic_new_versions() },
          ]}
        />
      </Panel>

      <Panel title={m.admin_traffic_breakdowns_title()} description={m.admin_traffic_breakdowns_description()}>
        <div className="grid gap-6 lg:grid-cols-2">
          <Breakdown title={m.admin_traffic_by_type()} rows={data.breakdowns.type} />
          <Breakdown title={m.admin_traffic_by_referrer()} rows={data.breakdowns.referrer} colorIndex={1} />
          <Breakdown title={m.admin_traffic_by_country()} rows={data.breakdowns.country} colorIndex={2} />
          <Breakdown title={m.admin_traffic_by_locale()} rows={data.breakdowns.locale} colorIndex={3} />
          <Breakdown title={m.admin_traffic_by_device()} rows={data.breakdowns.device} colorIndex={4} />
          <Breakdown title={m.admin_traffic_by_auth()} rows={data.breakdowns.auth} colorIndex={5} />
          <Breakdown
            title={m.admin_traffic_by_channel()}
            rows={data.breakdowns.downloads?.filter((r) => r.key !== 'all')}
            colorIndex={6}
          />
          <Breakdown title={m.admin_traffic_by_event()} rows={data.breakdowns.event} colorIndex={7} />
        </div>
      </Panel>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title={m.admin_traffic_top_pages()}>
          <TableScroller label={m.admin_traffic_top_pages()}>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className={thClasses}>{m.admin_traffic_page()}</th>
                  <th className={cn(thClasses, 'text-end')}>{m.admin_traffic_views()}</th>
                  <th className={cn(thClasses, 'text-end')}>{m.admin_traffic_visitors()}</th>
                </tr>
              </thead>
              <tbody>
                {(data.breakdowns.page ?? []).slice(0, 25).map((row) => (
                  <tr key={row.key}>
                    <td className={cn(tdClasses, 'max-w-80 truncate')}>
                      <a href={row.key} className="text-fg hover:text-link">
                        {row.key}
                      </a>
                    </td>
                    <td className={cn(tdClasses, 'text-end tabular-nums')}>{formatCount(row.views)}</td>
                    <td className={cn(tdClasses, 'text-end tabular-nums')}>{formatCount(row.visitors)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroller>
        </Panel>
        <Panel title={m.admin_traffic_top_mods()}>
          <TableScroller label={m.admin_traffic_top_mods()}>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className={thClasses}>{m.admin_traffic_mod()}</th>
                  <th className={cn(thClasses, 'text-end')}>{m.admin_traffic_downloads()}</th>
                  <th className={cn(thClasses, 'text-end')}>{m.admin_traffic_views()}</th>
                </tr>
              </thead>
              <tbody>
                {data.topMods.map((mod) => (
                  <tr key={mod.id}>
                    <td className={cn(tdClasses, 'max-w-80 truncate')}>
                      <a href={mod.path} className="font-medium text-fg hover:text-link">
                        {mod.name}
                      </a>
                    </td>
                    <td className={cn(tdClasses, 'text-end tabular-nums')}>{formatCount(mod.downloads)}</td>
                    <td className={cn(tdClasses, 'text-end tabular-nums')}>{formatCount(mod.views)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroller>
        </Panel>
      </div>
    </div>
  );
}
