/**
 * «My mods» (PLAN §7.5): status, version, downloads in 7 days, rating, open field reports and
 * actions. A table from `md` up; a list of cards on phones (research/03 §6.9).
 */
import { Badge } from '@sotf/ui/badge';
import { buttonClasses } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Menu } from '@sotf/ui/menu';
import { Link, useNavigate, useRouter } from '@tanstack/react-router';
import { ChartLine, ExternalLink, MoreHorizontal, Pencil, Plus, Star } from 'lucide-react';
import { SwipeRow } from '../../components/SwipeRow.tsx';
import type { ModRow } from './api.ts';
import { compact, number, publicHref, rating } from './format.ts';
import { bt } from './i18n.ts';
import { ModThumb, StatusBadge } from './shared.tsx';

/** Kinds that take new versions from the wizard (builds are republished as a whole). */
export function takesVersions(row: Pick<ModRow, 'mod'>): boolean {
  return row.mod.kind !== 'build';
}

/** Whether the public page answers (published or unlisted). */
export function hasPublicPage(row: Pick<ModRow, 'mod'>): boolean {
  return row.mod.status === 'published' || row.mod.status === 'unlisted';
}

function kindLabel(kind: ModRow['mod']['kind']): string {
  switch (kind) {
    case 'mod':
      return bt('basecamp_kind_mod');
    case 'library':
      return bt('basecamp_kind_library');
    case 'build':
      return bt('basecamp_kind_build');
  }
}

function RowMenu({ row }: { row: ModRow }) {
  const router = useRouter();
  const id = String(row.mod.id);
  return (
    <Menu
      trigger={
        <button
          type="button"
          className={buttonClasses({ variant: 'icon', size: 'sm' })}
          aria-label={bt('basecamp_mods_more_actions', { name: row.mod.name })}
        >
          <Icon icon={MoreHorizontal} size={18} />
        </button>
      }
      align="end"
      items={[
        {
          label: bt('basecamp_mods_action_analytics'),
          icon: <Icon icon={ChartLine} size={16} />,
          onSelect: () => void router.navigate({ to: '/dashboard/analytics', search: { mod: row.mod.id } }),
        },
        ...(hasPublicPage(row)
          ? [
              {
                type: 'link' as const,
                label: bt('basecamp_mods_action_view'),
                icon: <Icon icon={ExternalLink} size={16} />,
                href: publicHref(row.mod.canonicalPath),
              },
            ]
          : []),
        {
          label: bt('basecamp_mods_action_settings'),
          onSelect: () =>
            void router.navigate({ to: '/dashboard/mods/$modId', params: { modId: id }, search: { tab: 'settings' } }),
        },
      ]}
    />
  );
}

function RatingCell({ row }: { row: ModRow }) {
  if (row.mod.ratingAvg === null || row.mod.ratingCount === 0) {
    return <span className="text-fg-subtle">{bt('basecamp_mods_no_rating')}</span>;
  }
  return (
    <span className="inline-flex items-center gap-1">
      <Icon icon={Star} size={14} className="text-featured" />
      <span className="sr-only">{bt('basecamp_mods_rating_sr', { rating: rating(row.mod.ratingAvg) })}</span>
      <span aria-hidden="true">{rating(row.mod.ratingAvg)}</span>
      <span className="text-fg-subtle">({number(row.mod.ratingCount)})</span>
    </span>
  );
}

function ReportsCell({ row }: { row: ModRow }) {
  const open = row.openCompatReports;
  const unanswered = row.unansweredComments + row.unansweredReviews;
  if (open === 0 && unanswered === 0) return <span className="text-fg-subtle">{bt('basecamp_mods_reports_none')}</span>;
  return (
    <span className="flex flex-wrap gap-1">
      {open > 0 ? (
        <Badge variant="danger" size="sm">
          {bt('basecamp_mods_reports_open', { count: open })}
        </Badge>
      ) : null}
      {unanswered > 0 ? (
        <Badge variant="signal" size="sm">
          {bt('basecamp_mods_unanswered', { count: unanswered })}
        </Badge>
      ) : null}
    </span>
  );
}

function PrimaryActions({ row, compactLayout = false }: { row: ModRow; compactLayout?: boolean }) {
  const id = String(row.mod.id);
  return (
    <span className="flex flex-wrap items-center justify-end gap-1">
      <Link
        to="/dashboard/mods/$modId"
        params={{ modId: id }}
        className={buttonClasses({ variant: 'secondary', size: 'sm' })}
        aria-label={bt('basecamp_mods_edit_named', { name: row.mod.name })}
      >
        <Icon icon={Pencil} size={14} />
        {compactLayout ? null : bt('basecamp_mods_edit')}
      </Link>
      {takesVersions(row) && row.mod.status !== 'removed' ? (
        <Link
          to="/dashboard/mods/$modId/new-version"
          params={{ modId: id }}
          className={buttonClasses({ variant: 'ghost', size: 'sm' })}
          aria-label={bt('basecamp_mods_new_version_named', { name: row.mod.name })}
        >
          <Icon icon={Plus} size={14} />
          {compactLayout ? null : bt('basecamp_mods_new_version')}
        </Link>
      ) : null}
      <RowMenu row={row} />
    </span>
  );
}

export function ModsTable({ rows, caption }: { rows: readonly ModRow[]; caption: string }) {
  const navigate = useNavigate();
  return (
    <>
      {/* Phones: cards. */}
      <ul className="grid gap-2 md:hidden" aria-label={caption}>
        {rows.map((row, index) => (
          <li key={row.mod.id} className="overflow-hidden rounded-xl border border-border bg-surface">
            <SwipeRow
              peekKey={index === 0 ? 'basecamp-mods' : undefined}
              start={
                takesVersions(row) && row.mod.status !== 'removed'
                  ? {
                      label: bt('basecamp_mods_new_version'),
                      icon: <Plus size={20} aria-hidden="true" />,
                      tone: 'primary',
                      onTrigger: () =>
                        void navigate({
                          to: '/dashboard/mods/$modId/new-version',
                          params: { modId: String(row.mod.id) },
                        }),
                    }
                  : undefined
              }
            >
              <div className="relative grid gap-3 p-3">
                <div className="flex min-w-0 items-start gap-3">
                  <ModThumb url={row.mod.thumbnail?.url} className="w-20" />
                  <div className="grid min-w-0 gap-1">
                    <Link
                      to="/dashboard/mods/$modId"
                      params={{ modId: String(row.mod.id) }}
                      className="truncate font-semibold text-fg after:absolute after:inset-0 after:content-[''] hover:text-link"
                    >
                      {row.mod.name}
                    </Link>
                    <span className="flex flex-wrap items-center gap-2 text-xs text-fg-muted">
                      <StatusBadge status={row.mod.status} />
                      {row.mod.latestVersion ? <span className="font-mono">v{row.mod.latestVersion}</span> : null}
                    </span>
                  </div>
                </div>
                <dl className="grid grid-cols-3 gap-2 text-xs">
                  <div className="grid gap-0.5">
                    <dt className="readout">{bt('basecamp_mods_col_downloads')}</dt>
                    <dd className="tabular-nums text-fg">{compact(row.downloads7d)}</dd>
                  </div>
                  <div className="grid gap-0.5">
                    <dt className="readout">{bt('basecamp_mods_col_rating')}</dt>
                    <dd>
                      <RatingCell row={row} />
                    </dd>
                  </div>
                  <div className="grid gap-0.5">
                    <dt className="readout">{bt('basecamp_mods_col_reports')}</dt>
                    <dd>
                      <ReportsCell row={row} />
                    </dd>
                  </div>
                </dl>
                {row.statusReason && row.mod.status === 'rejected' ? (
                  <p className="text-xs text-warning">{bt('basecamp_mods_reason', { reason: row.statusReason })}</p>
                ) : null}
                <div className="relative">
                  <PrimaryActions row={row} />
                </div>
              </div>
            </SwipeRow>
          </li>
        ))}
      </ul>

      {/* Tablets and desktops: table. */}
      <div className="hidden overflow-x-auto rounded-lg border border-border md:block">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-sunken">
            <tr>
              <th scope="col" className="px-3 py-2 text-start readout">
                {bt('basecamp_mods_col_mod')}
              </th>
              <th scope="col" className="px-3 py-2 text-start readout">
                {bt('basecamp_mods_col_status')}
              </th>
              <th scope="col" className="px-3 py-2 text-start readout">
                {bt('basecamp_mods_col_version')}
              </th>
              <th scope="col" className="px-3 py-2 text-end readout">
                {bt('basecamp_mods_col_downloads')}
              </th>
              <th scope="col" className="px-3 py-2 text-start readout">
                {bt('basecamp_mods_col_rating')}
              </th>
              <th scope="col" className="px-3 py-2 text-start readout">
                {bt('basecamp_mods_col_reports')}
              </th>
              <th scope="col" className="px-3 py-2 text-end readout">
                <span className="sr-only">{bt('basecamp_mods_col_actions')}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.mod.id} className="border-t border-border align-middle">
                <th scope="row" className="px-3 py-2 text-start font-normal">
                  <span className="flex min-w-0 items-center gap-3">
                    <ModThumb url={row.mod.thumbnail?.url} className="w-16" />
                    <span className="grid min-w-0">
                      <Link
                        to="/dashboard/mods/$modId"
                        params={{ modId: String(row.mod.id) }}
                        className="max-w-64 truncate font-semibold text-fg hover:text-link"
                      >
                        {row.mod.name}
                      </Link>
                      <span className="text-xs text-fg-subtle">{kindLabel(row.mod.kind)}</span>
                    </span>
                  </span>
                </th>
                <td className="px-3 py-2">
                  <span className="grid justify-items-start gap-1">
                    <StatusBadge status={row.mod.status} />
                    {row.statusReason && row.mod.status === 'rejected' ? (
                      <span className="max-w-48 truncate text-xs text-warning" title={row.statusReason}>
                        {row.statusReason}
                      </span>
                    ) : null}
                  </span>
                </td>
                <td className="px-3 py-2 font-mono text-xs text-fg-muted">
                  {row.mod.latestVersion ? `v${row.mod.latestVersion}` : '-'}
                </td>
                <td className={cn('px-3 py-2 text-end tabular-nums', row.downloads7d === 0 && 'text-fg-subtle')}>
                  {number(row.downloads7d)}
                </td>
                <td className="px-3 py-2 text-xs">
                  <RatingCell row={row} />
                </td>
                <td className="px-3 py-2">
                  <ReportsCell row={row} />
                </td>
                <td className="px-3 py-2">
                  <span className="hidden lg:block">
                    <PrimaryActions row={row} />
                  </span>
                  <span className="lg:hidden">
                    <PrimaryActions row={row} compactLayout />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
