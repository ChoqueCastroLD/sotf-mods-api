/**
 * VersionTable (research/03 §5.8): version (mono) · date · size · game build · RedLoader ·
 * downloads · field reports ✔/✖ · download. Rows keep the API order (semver, newest first;
 * builds by date) — the table never re-sorts alphabetically like the legacy site.
 *
 * Yanked versions and missing files show why and offer no download. On narrow screens the table
 * scrolls horizontally inside its own region with the version column pinned.
 */
import { CircleCheck, CircleX, Download } from 'lucide-react';
import { Badge } from '../badge.tsx';
import { buttonClasses } from '../button.tsx';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import type { VersionDTO } from './contracts.ts';
import { formatBytes, formatCompact, formatCount, formatDate, formatDateTime, useDomainI18n } from './i18n.ts';

export interface VersionTableProps {
  versions: readonly VersionDTO[];
  /** Accessible caption (visually hidden). Default «Versions». */
  caption?: string;
  /** Versions published after this instant get «New since your last download». */
  lastDownloadedAt?: string | null;
  className?: string;
}

function currentCompat(version: VersionDTO) {
  return version.compat.find((aggregate) => aggregate.gameBuild.isCurrent) ?? version.compat[0] ?? null;
}

export function VersionTable({ versions, caption, lastDownloadedAt, className }: VersionTableProps) {
  const { t, locale, timeZone } = useDomainI18n();
  if (versions.length === 0) {
    return <p className={cn('text-sm text-fg-muted', className)}>{t('ui_domain_versions_empty')}</p>;
  }
  const th = 'px-3 py-2 text-start font-normal readout whitespace-nowrap';
  const td = 'px-3 py-2.5 align-middle whitespace-nowrap';
  return (
    <section
      aria-label={caption ?? t('ui_domain_versions_caption')}
      // biome-ignore lint/a11y/noNoninteractiveTabindex: a scrollable region must be reachable by keyboard (WCAG 2.1.1)
      tabIndex={0}
      className={cn('overflow-x-auto rounded-lg border border-border', className)}
    >
      <table className="w-full border-collapse text-sm tabular-nums">
        <caption className="sr-only">{caption ?? t('ui_domain_versions_caption')}</caption>
        <thead className="bg-sunken">
          <tr>
            <th scope="col" className={cn(th, 'sticky start-0 bg-sunken')}>
              {t('ui_domain_versions_col_version')}
            </th>
            <th scope="col" className={th}>
              {t('ui_domain_versions_col_date')}
            </th>
            <th scope="col" className={th}>
              {t('ui_domain_versions_col_size')}
            </th>
            <th scope="col" className={th}>
              {t('ui_domain_versions_col_game')}
            </th>
            <th scope="col" className={th}>
              {t('ui_domain_versions_col_loader')}
            </th>
            <th scope="col" className={cn(th, 'text-end')}>
              {t('ui_domain_versions_col_downloads')}
            </th>
            <th scope="col" className={th}>
              {t('ui_domain_versions_col_reports')}
            </th>
            <th scope="col" className={th}>
              <span className="sr-only">{t('ui_domain_versions_col_download')}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {versions.map((version) => {
            const compat = currentCompat(version);
            const isNew = lastDownloadedAt ? Date.parse(version.publishedAt) > Date.parse(lastDownloadedAt) : false;
            const downloadable = version.status === 'active' || version.status === 'pending';
            return (
              <tr
                key={version.id}
                data-status={version.status}
                className={cn('border-t border-border', isNew && 'bg-signal-soft/40')}
              >
                <th scope="row" className={cn(td, 'sticky start-0 bg-surface text-start font-normal')}>
                  <span className="flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-sm text-fg">{version.version}</span>
                    {version.isLatest ? (
                      <Badge variant="signal" size="sm">
                        {t('ui_domain_version_latest')}
                      </Badge>
                    ) : null}
                    {version.channel === 'beta' ? (
                      <Badge variant="warning" size="sm">
                        {t('ui_domain_version_beta')}
                      </Badge>
                    ) : null}
                    {version.status === 'yanked' ? (
                      <Badge
                        variant="danger"
                        size="sm"
                        icon={<Icon icon={CircleX} size={12} />}
                        title={version.statusReason ?? undefined}
                      >
                        {t('ui_domain_version_yanked')}
                      </Badge>
                    ) : null}
                    {isNew ? (
                      <Badge variant="signal" size="sm">
                        {t('ui_domain_version_new_since')}
                      </Badge>
                    ) : null}
                  </span>
                </th>
                <td className={cn(td, 'text-fg-muted')}>
                  <time dateTime={version.publishedAt} title={formatDateTime(locale, version.publishedAt, timeZone)}>
                    {formatDate(locale, version.publishedAt, timeZone)}
                  </time>
                </td>
                <td className={cn(td, 'text-fg-muted')}>
                  {version.fileSize === null ? '—' : formatBytes(locale, version.fileSize)}
                </td>
                <td className={cn(td, 'font-mono text-xs')}>{version.gameVersionDeclared ?? '—'}</td>
                <td className={cn(td, 'font-mono text-xs')}>
                  {version.loaderVersionDeclared
                    ? t('ui_domain_version_min', { version: version.loaderVersionDeclared })
                    : '—'}
                </td>
                <td className={cn(td, 'text-end')} title={formatCount(locale, version.downloadsCount)}>
                  {formatCompact(locale, version.downloadsCount)}
                </td>
                <td className={td}>
                  {compat ? (
                    <span
                      className="inline-flex items-center gap-2"
                      title={t('ui_domain_reports_title_on', { build: compat.gameBuild.label })}
                    >
                      <span className="inline-flex items-center gap-0.5">
                        <Icon icon={CircleCheck} size={14} className="text-success" />
                        <span className="sr-only">{t('ui_domain_compat_works')}:</span>
                        {formatCount(locale, compat.works)}
                      </span>
                      <span className="inline-flex items-center gap-0.5">
                        <Icon icon={CircleX} size={14} className="text-danger" />
                        <span className="sr-only">{t('ui_domain_compat_broken')}:</span>
                        {formatCount(locale, compat.broken)}
                      </span>
                    </span>
                  ) : (
                    <span className="text-fg-subtle">—</span>
                  )}
                </td>
                <td className={cn(td, 'text-end')}>
                  {downloadable ? (
                    <a
                      href={version.downloadPath}
                      rel="nofollow"
                      className={buttonClasses({ variant: 'secondary', size: 'sm' })}
                    >
                      <Icon icon={Download} size={16} />
                      <span>
                        {t('ui_domain_download')}
                        <span className="sr-only"> {version.version}</span>
                      </span>
                    </a>
                  ) : (
                    <span className="text-xs text-fg-muted">
                      {version.status === 'yanked'
                        ? (version.statusReason ?? t('ui_domain_version_yanked'))
                        : t('ui_domain_version_unavailable')}
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
