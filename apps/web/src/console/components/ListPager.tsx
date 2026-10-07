/**
 * Numbered pager for the lists of the console (my mods, needs attention, inbox, notifications):
 * «1–10 of 32», an optional page size, previous / next and the page numbers. State lives in the
 * URL of the screen (`onPage` navigates); the buttons keep their place while the next page loads
 * (`busy` dims the summary, the list itself keeps the old rows until the new ones arrive).
 */

import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { paginationRange } from '@sotf/ui/pagination-range';
import { Select } from '@sotf/ui/select';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { t } from '../lib/messages.ts';

export interface ListPagerProps {
  page: number;
  totalPages: number;
  total: number;
  pageSize: number;
  onPage: (page: number) => void;
  /** Offered sizes; omit to hide the selector. */
  pageSizes?: readonly number[];
  onPageSize?: (size: number) => void;
  busy?: boolean;
  className?: string;
}

const pageButton =
  'inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 text-sm font-medium tabular-nums transition-[background-color,color,scale] duration-(--dur-fast) motion-safe:active:scale-95 disabled:pointer-events-none disabled:opacity-40 max-md:h-11 max-md:min-w-11';

export function ListPager({
  page,
  totalPages,
  total,
  pageSize,
  onPage,
  pageSizes,
  onPageSize,
  busy = false,
  className,
}: ListPagerProps) {
  if (total === 0) return null;
  const current = Math.min(Math.max(1, page), Math.max(1, totalPages));
  const from = (current - 1) * pageSize + 1;
  const to = Math.min(total, current * pageSize);
  const single = totalPages <= 1;
  // A selector with a single size is noise: it only appears when there is something to choose.
  const sizes = pageSizes && onPageSize && total > Math.min(...pageSizes) ? pageSizes : null;

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-border pt-4 max-md:justify-center',
        className,
      )}
    >
      <p
        aria-live="polite"
        className={cn('text-sm text-fg-muted tabular-nums transition-opacity', busy && 'opacity-60')}
      >
        {t('console_pager_range', { from, to, total })}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {sizes ? (
          <Select<string>
            label={t('console_pager_page_size')}
            hideLabel
            size="sm"
            className="w-36"
            options={sizes.map((size) => ({
              value: String(size),
              label: t('console_pager_per_page', { count: size }),
            }))}
            value={String(pageSize)}
            onValueChange={(value) => value && onPageSize?.(Number(value))}
          />
        ) : null}
        {single ? null : (
          <nav aria-label={t('ui_pagination')}>
            <ul className="flex items-center gap-1">
              <li>
                <button
                  type="button"
                  disabled={current <= 1}
                  onClick={() => onPage(current - 1)}
                  aria-label={t('ui_previous_page')}
                  className={cn(pageButton, 'text-fg hover:bg-fg/8')}
                >
                  <Icon icon={ChevronLeft} size={16} className="rtl:rotate-180" />
                </button>
              </li>
              <li className="md:hidden">
                <span className="px-2 text-sm text-fg-muted tabular-nums">
                  {t('console_pager_of', { page: current, pages: totalPages })}
                </span>
              </li>
              {paginationRange(current, totalPages, 1).map((token) =>
                typeof token === 'number' ? (
                  <li key={token} className="max-md:hidden">
                    <button
                      type="button"
                      onClick={() => onPage(token)}
                      aria-label={t('ui_page_number', { page: token })}
                      aria-current={token === current ? 'page' : undefined}
                      className={cn(
                        pageButton,
                        token === current ? 'bg-primary text-primary-fg' : 'text-fg hover:bg-fg/8',
                      )}
                    >
                      {token}
                    </button>
                  </li>
                ) : (
                  <li key={token} aria-hidden="true" className="px-1 text-fg-subtle max-md:hidden">
                    …
                  </li>
                ),
              )}
              <li>
                <button
                  type="button"
                  disabled={current >= totalPages}
                  onClick={() => onPage(current + 1)}
                  aria-label={t('ui_next_page')}
                  className={cn(pageButton, 'text-fg hover:bg-fg/8')}
                >
                  <Icon icon={ChevronRight} size={16} className="rtl:rotate-180" />
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
