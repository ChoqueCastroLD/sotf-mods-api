/**
 * DownloadSplitButton (research/03 §5.1), presentational: the main part is a real link to the
 * download route of the recommended version («Download v2.4.1 · 1.2 MB»); the split part is a
 * disclosure with the other versions (stable, beta, older) with date and compatibility.
 *
 * Counting (`sendBeacon`), the «Downloaded ✓» transition and the 24 h «Did it work?» prompt are
 * the page's job (WP-62): it passes `state="done"` and the component shows the confirmation and
 * the install hint. Download links carry `rel="nofollow"` (they are 302s to R2).
 */
import { Check, Download } from 'lucide-react';
import type { MouseEvent } from 'react';
import { Badge } from '../badge.tsx';
import { buttonClasses } from '../button.tsx';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import { CompatBadge } from './compat.tsx';
import type { CompatStatus, VersionChannel, VersionDTO } from './contracts.ts';
import { DisclosureMenu, disclosureItemClasses } from './disclosure.tsx';
import { formatBytes, formatDate, useDomainI18n } from './i18n.ts';

export interface DownloadOption {
  version: string;
  href: string;
  publishedAt?: string | null;
  /** Bytes. */
  size?: number | null;
  channel?: VersionChannel;
  /** Compatibility on the current build. */
  compat?: CompatStatus | null;
}

/** Option of a published version. */
export function downloadOptionOf(version: VersionDTO): DownloadOption {
  const current = version.compat.find((aggregate) => aggregate.gameBuild.isCurrent);
  return {
    version: version.version,
    href: version.downloadPath,
    publishedAt: version.publishedAt,
    size: version.fileSize,
    channel: version.channel,
    compat: current?.status ?? null,
  };
}

export interface DownloadSplitButtonProps {
  primary: DownloadOption;
  others?: readonly DownloadOption[];
  /** Link at the end of the menu (the versions tab). */
  allVersionsHref?: string;
  /** `done` after the download started (set by the page). */
  state?: 'idle' | 'done';
  /** Called before the browser follows the link (count ping, state change). */
  onDownload?: (option: DownloadOption, event: MouseEvent<HTMLAnchorElement>) => void;
  /** Flare glow: only when this is the page's main call to action. */
  glow?: boolean;
  size?: 'md' | 'lg';
  className?: string;
}

export function DownloadSplitButton({
  primary,
  others = [],
  allVersionsHref,
  state = 'idle',
  onDownload,
  glow = false,
  size = 'lg',
  className,
}: DownloadSplitButtonProps) {
  const { t, locale, timeZone } = useDomainI18n();
  const label =
    typeof primary.size === 'number'
      ? t('ui_domain_download_version_size', { version: primary.version, size: formatBytes(locale, primary.size) })
      : t('ui_domain_download_version', { version: primary.version });
  const done = state === 'done';
  const hasMenu = others.length > 0 || Boolean(allVersionsHref);
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex items-stretch">
        <a
          href={primary.href}
          rel="nofollow"
          data-download={primary.version}
          onClick={onDownload ? (event) => onDownload(primary, event) : undefined}
          className={buttonClasses({
            variant: 'primary',
            size,
            glow: glow && !done,
            className: cn('min-w-0 flex-1', hasMenu && 'rounded-e-none'),
          })}
        >
          <Icon icon={done ? Check : Download} size={18} />
          <span className="truncate">{done ? t('ui_domain_download_done_label') : label}</span>
        </a>
        {hasMenu ? (
          <DisclosureMenu
            align="end"
            hideChevron={false}
            className="flex"
            summaryClassName={buttonClasses({
              variant: 'primary',
              size,
              className: 'rounded-s-none border-s border-primary-fg/25 px-2.5',
            })}
            summary={<span className="sr-only">{t('ui_domain_download_other_versions')}</span>}
            panelClassName="w-72"
          >
            <p className="px-2.5 pt-1.5 pb-1 readout">{t('ui_domain_download_other_versions')}</p>
            <ul>
              {others.map((option) => (
                <li key={option.version}>
                  <a
                    href={option.href}
                    rel="nofollow"
                    data-download={option.version}
                    onClick={onDownload ? (event) => onDownload(option, event) : undefined}
                    className={disclosureItemClasses}
                  >
                    <Icon icon={Download} size={16} className="text-fg-subtle" />
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="flex items-center gap-1.5">
                        <span className="font-mono text-sm">{option.version}</span>
                        {option.channel === 'beta' ? (
                          <Badge variant="warning" size="sm">
                            {t('ui_domain_version_beta')}
                          </Badge>
                        ) : null}
                      </span>
                      {option.publishedAt || typeof option.size === 'number' ? (
                        <span className="text-xs text-fg-muted">
                          {[
                            option.publishedAt ? formatDate(locale, option.publishedAt, timeZone) : null,
                            typeof option.size === 'number' ? formatBytes(locale, option.size) : null,
                          ]
                            .filter(Boolean)
                            .join(' · ')}
                        </span>
                      ) : null}
                    </span>
                    {option.compat ? <CompatBadge status={option.compat} short size="sm" /> : null}
                  </a>
                </li>
              ))}
            </ul>
            {allVersionsHref ? (
              <a href={allVersionsHref} className={cn(disclosureItemClasses, 'mt-1 border-t border-border text-link')}>
                {t('ui_domain_download_all_versions')}
              </a>
            ) : null}
          </DisclosureMenu>
        ) : null}
      </div>
      {done ? (
        <p role="status" className="text-sm text-fg-muted">
          {t('ui_domain_download_done_hint')}
        </p>
      ) : null}
    </div>
  );
}
