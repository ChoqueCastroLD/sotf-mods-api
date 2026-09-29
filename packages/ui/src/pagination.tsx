/**
 * Pagination (PLAN §3.9, research/03 §5.4): real URLs (`?page=2`) that work without JavaScript
 * and are crawlable, plus an optional progressive «Load more» button above them that appends the
 * next page in place (the links stay as the fallback and for deep links).
 */
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button, buttonClasses } from './button.tsx';
import { cn } from './cn.ts';
import { Icon } from './icons.tsx';
import { useUiTranslate } from './labels.ts';
import { paginationRange } from './pagination-range.ts';

export interface PaginationProps {
  /** Current page, 1-based. */
  page: number;
  totalPages: number;
  /** URL of a page (keep the other query parameters). */
  hrefFor: (page: number) => string;
  /** Pages shown on each side of the current one. Default 1. */
  siblings?: number;
  /** Progressive enhancement: appends the next page. Hidden on the last page. */
  onLoadMore?: () => void;
  loadingMore?: boolean;
  /** Label of the load-more button. Default: the localized «Load more». */
  loadMoreLabel?: ReactNode;
  className?: string;
}

const pageLink =
  'inline-flex h-10 min-w-10 items-center justify-center rounded-md px-2 text-sm font-medium tabular-nums text-fg transition-colors duration-(--dur-fast) hover:bg-fg/8';

export function Pagination({
  page,
  totalPages,
  hrefFor,
  siblings = 1,
  onLoadMore,
  loadingMore = false,
  loadMoreLabel,
  className,
}: PaginationProps) {
  const t = useUiTranslate();
  if (totalPages <= 1) return null;
  const current = Math.min(Math.max(1, page), totalPages);
  const hasPrevious = current > 1;
  const hasNext = current < totalPages;

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      {onLoadMore && hasNext ? (
        <Button variant="secondary" loading={loadingMore} onClick={onLoadMore}>
          {loadMoreLabel ?? t('ui_load_more')}
        </Button>
      ) : null}
      <nav aria-label={t('ui_pagination')}>
        <ul className="flex flex-wrap items-center justify-center gap-1">
          <li>
            {hasPrevious ? (
              <a href={hrefFor(current - 1)} rel="prev" className={buttonClasses({ variant: 'ghost', size: 'md' })}>
                <Icon icon={ChevronLeft} size={16} className="rtl:rotate-180" />
                {t('ui_previous_page')}
              </a>
            ) : (
              <span aria-disabled="true" className={buttonClasses({ variant: 'ghost', size: 'md' })}>
                <Icon icon={ChevronLeft} size={16} className="rtl:rotate-180" />
                {t('ui_previous_page')}
              </span>
            )}
          </li>
          {paginationRange(current, totalPages, siblings).map((token) =>
            typeof token === 'number' ? (
              <li key={token} className="max-sm:hidden">
                {token === current ? (
                  <a
                    href={hrefFor(token)}
                    aria-current="page"
                    aria-label={t('ui_page_number', { page: token })}
                    className={cn(pageLink, 'bg-primary text-primary-fg hover:bg-primary-hover')}
                  >
                    {token}
                  </a>
                ) : (
                  <a href={hrefFor(token)} aria-label={t('ui_page_number', { page: token })} className={pageLink}>
                    {token}
                  </a>
                )}
              </li>
            ) : (
              <li key={token} className="max-sm:hidden">
                <span className="inline-flex h-10 min-w-8 items-center justify-center text-fg-subtle">
                  <span aria-hidden="true">…</span>
                  <span className="sr-only">{t('ui_more_pages')}</span>
                </span>
              </li>
            ),
          )}
          <li className="sm:hidden">
            <span className="px-2 text-sm tabular-nums text-fg-muted" aria-current="page">
              {t('ui_page_number', { page: current })} / {totalPages}
            </span>
          </li>
          <li>
            {hasNext ? (
              <a href={hrefFor(current + 1)} rel="next" className={buttonClasses({ variant: 'ghost', size: 'md' })}>
                {t('ui_next_page')}
                <Icon icon={ChevronRight} size={16} className="rtl:rotate-180" />
              </a>
            ) : (
              <span aria-disabled="true" className={buttonClasses({ variant: 'ghost', size: 'md' })}>
                {t('ui_next_page')}
                <Icon icon={ChevronRight} size={16} className="rtl:rotate-180" />
              </span>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
