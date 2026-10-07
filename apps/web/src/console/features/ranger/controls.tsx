/**
 * List controls shared by the moderation, admin and jam screens: the filter bar (search, selects,
 * sort, «Clear filters», collapsed behind a «Filters» button on phones) and the page navigator
 * («31–60 of 120», previous/next, numbered pages, optional page size). They hold no data: the
 * screens keep page, sort and filters in the URL and pass them in.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { paginationRange } from '@sotf/ui/pagination-range';
import { Select } from '@sotf/ui/select';
import { useNavigate } from '@tanstack/react-router';
import { ChevronLeft, ChevronRight, ListFilter, Search, X } from 'lucide-react';
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { number } from './shared.tsx';

// -----------------------------------------------------------------------------------------------
// URL state
// -----------------------------------------------------------------------------------------------

/**
 * Returns `patch(next)`: merges `next` into the search params of `to` (`undefined` removes a key)
 * and drops the page when anything else changes, so a new filter starts at page 1. Filter changes
 * replace the history entry, page changes push one (Back returns to the previous page).
 */
export function useListSearch(to: string) {
  const navigate = useNavigate();
  return useCallback(
    (next: Record<string, unknown>) => {
      const pageOnly = 'page' in next;
      void navigate({
        to,
        replace: !pageOnly,
        search: (previous: Record<string, unknown>) => {
          const merged: Record<string, unknown> = { ...previous, ...(pageOnly ? {} : { page: undefined }), ...next };
          return Object.fromEntries(Object.entries(merged).filter(([, value]) => value !== undefined));
        },
      } as never);
    },
    [navigate, to],
  );
}

// -----------------------------------------------------------------------------------------------
// Filter bar
// -----------------------------------------------------------------------------------------------

const ALL = '__all__';

export interface FilterOption<Value extends string = string> {
  value: Value;
  label: string;
}

export interface FilterSelectProps<Value extends string = string> {
  label: string;
  /** What «no filter» says («Any risk»). */
  allLabel: string;
  value: Value | undefined;
  options: readonly FilterOption<Value>[];
  onChange: (value: Value | undefined) => void;
  className?: string;
}

/** A select whose first option removes the filter. */
export function FilterSelect<Value extends string = string>({
  label,
  allLabel,
  value,
  options,
  onChange,
  className,
}: FilterSelectProps<Value>) {
  return (
    <Select<string>
      label={label}
      hideLabel
      size="sm"
      value={value ?? ALL}
      onValueChange={(next) => onChange(next === null || next === ALL ? undefined : (next as Value))}
      options={[{ value: ALL, label: allLabel }, ...options]}
      className={cn('w-full md:w-44', className)}
    />
  );
}

export interface SortSelectProps<Value extends string = string> {
  value: Value;
  options: readonly FilterOption<Value>[];
  onChange: (value: Value) => void;
  className?: string;
}

export function SortSelect<Value extends string = string>({
  value,
  options,
  onChange,
  className,
}: SortSelectProps<Value>) {
  return (
    <Select<Value>
      label={m.ranger_sort()}
      hideLabel
      size="sm"
      value={value}
      onValueChange={(next) => next && onChange(next)}
      options={options}
      className={cn('w-full md:ml-auto md:w-48', className)}
    />
  );
}

export interface SearchFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onCommit: (value: string) => void;
  maxLength?: number;
  /** Values that fail this are not committed and the box is marked invalid (`hint` explains). */
  isValid?: (value: string) => boolean;
  hint?: string;
  className?: string;
}

/** Search box: commits after a short pause, on Enter, and when cleared. */
export function SearchField({
  label,
  placeholder,
  value,
  onCommit,
  maxLength = 100,
  isValid,
  hint,
  className,
}: SearchFieldProps) {
  const [draft, setDraft] = useState(value);
  const committed = useRef(value);
  useEffect(() => {
    setDraft(value);
    committed.current = value;
  }, [value]);
  const invalid = Boolean(isValid && draft.trim() !== '' && !isValid(draft.trim()));
  useEffect(() => {
    const next = draft.trim();
    if (next === committed.current || (isValid && next !== '' && !isValid(next))) return;
    const timer = window.setTimeout(() => {
      committed.current = next;
      onCommit(next);
    }, 400);
    return () => window.clearTimeout(timer);
  }, [draft, onCommit, isValid]);
  return (
    <search className={cn('min-w-0', className)}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const next = draft.trim();
          if (isValid && next !== '' && !isValid(next)) return;
          committed.current = next;
          onCommit(next);
        }}
      >
        <Input
          type="search"
          size="sm"
          aria-label={label}
          aria-invalid={invalid || undefined}
          {...(invalid && hint ? { title: hint } : {})}
          value={draft}
          maxLength={maxLength}
          placeholder={placeholder ?? label}
          autoComplete="off"
          enterKeyHint="search"
          icon={<Icon icon={Search} size={16} />}
          onChange={(event) => setDraft(event.target.value)}
          {...(draft
            ? {
                end: (
                  <Button
                    type="button"
                    variant="icon"
                    size="sm"
                    aria-label={m.ranger_filters_clear_search()}
                    onClick={() => {
                      setDraft('');
                      committed.current = '';
                      onCommit('');
                    }}
                  >
                    <Icon icon={X} size={14} />
                  </Button>
                ),
              }
            : {})}
        />
      </form>
    </search>
  );
}

export interface FilterBarProps {
  /** The search box (always visible). */
  search?: ReactNode;
  /** Selects and other filters (behind «Filters» on phones). */
  children?: ReactNode;
  /** Sort control, last in the row. */
  sort?: ReactNode;
  /** Filters in force; shows «Clear filters» and the count on the phone button. */
  activeCount?: number;
  onClear?: () => void;
  className?: string;
}

export function FilterBar({ search, children, sort, activeCount = 0, onClear, className }: FilterBarProps) {
  const [open, setOpen] = useState(false);
  const hasMore = Boolean(children) || Boolean(sort);
  const clear =
    activeCount > 0 && onClear ? (
      <Button variant="ghost" size="sm" onClick={onClear} className="max-md:col-span-2">
        {m.ranger_filters_clear()}
      </Button>
    ) : null;
  return (
    <div className={cn('grid gap-2', className)}>
      <div className="flex flex-wrap items-center gap-2">
        {search ? <div className="min-w-0 flex-1 md:w-80 md:flex-none">{search}</div> : null}
        {hasMore ? (
          <Button
            variant="secondary"
            size="sm"
            className="md:hidden"
            aria-expanded={open}
            icon={<Icon icon={ListFilter} size={16} />}
            onClick={() => setOpen((value) => !value)}
          >
            {m.ranger_filters()}
            {activeCount > 0 ? (
              <Badge variant="neutral" size="sm">
                {activeCount}
              </Badge>
            ) : null}
          </Button>
        ) : null}
        <div className="hidden flex-wrap items-center gap-2 md:contents">
          {children}
          {sort}
          {clear}
        </div>
      </div>
      {open ? (
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {children}
          {sort}
          {clear}
        </div>
      ) : null}
    </div>
  );
}

// -----------------------------------------------------------------------------------------------
// Page navigator
// -----------------------------------------------------------------------------------------------

export interface PageNavProps {
  page: number;
  totalPages: number;
  total: number;
  pageSize: number;
  onPage: (page: number) => void;
  /** Page sizes to offer (omit for a fixed size). */
  sizes?: readonly number[];
  onPageSize?: (size: number) => void;
  /** Narrow columns: previous, «Page 2 of 5», next. */
  compact?: boolean;
  className?: string;
}

/** «31–60 of 120» with previous/next and numbered pages. Renders nothing for an empty list. */
export function PageNav({
  page,
  totalPages,
  total,
  pageSize,
  onPage,
  sizes,
  onPageSize,
  compact = false,
  className,
}: PageNavProps) {
  if (total === 0) return null;
  const current = Math.min(Math.max(1, page), Math.max(1, totalPages));
  const from = (current - 1) * pageSize + 1;
  const to = Math.min(total, current * pageSize);
  const tokens = compact ? [] : paginationRange(current, totalPages);
  return (
    <nav
      aria-label={m.ranger_pagination()}
      className={cn('flex flex-wrap items-center justify-between gap-x-4 gap-y-2', className)}
    >
      <p className="text-sm tabular-nums text-fg-muted" aria-live="polite">
        {m.ranger_page_range({ from: number(from), to: number(to), total: number(total) })}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {sizes && onPageSize ? (
          <Select<string>
            label={m.ranger_page_size()}
            hideLabel
            size="sm"
            value={String(pageSize)}
            onValueChange={(next) => next && onPageSize(Number(next))}
            options={sizes.map((size) => ({ value: String(size), label: m.ranger_page_size_option({ count: size }) }))}
            className="w-36"
          />
        ) : null}
        {totalPages > 1 ? (
          <ul className="flex items-center gap-1">
            <li>
              <Button
                variant="ghost"
                size="sm"
                disabled={current <= 1}
                icon={<Icon icon={ChevronLeft} size={16} className="rtl:rotate-180" />}
                aria-label={m.ranger_previous()}
                onClick={() => onPage(current - 1)}
              >
                {compact ? null : <span className="max-lg:sr-only">{m.ranger_previous()}</span>}
              </Button>
            </li>
            {compact ? (
              <li className="px-1 text-sm tabular-nums text-fg-muted">
                {m.ranger_page_of({ page: current, total: totalPages })}
              </li>
            ) : (
              tokens.map((token, index) =>
                typeof token === 'number' ? (
                  <li key={token}>
                    <Button
                      variant={token === current ? 'secondary' : 'ghost'}
                      size="sm"
                      aria-current={token === current ? 'page' : undefined}
                      aria-label={m.ranger_page_n({ page: token })}
                      className="min-w-8 px-2 tabular-nums"
                      onClick={() => token !== current && onPage(token)}
                    >
                      {token}
                    </Button>
                  </li>
                ) : (
                  <li key={`${token}-${index}`} aria-hidden="true" className="px-1 text-fg-subtle">
                    …
                  </li>
                ),
              )
            )}
            <li>
              <Button
                variant="ghost"
                size="sm"
                disabled={current >= totalPages}
                icon={<Icon icon={ChevronRight} size={16} className="rtl:rotate-180" />}
                aria-label={m.ranger_next()}
                onClick={() => onPage(current + 1)}
              >
                {compact ? null : <span className="max-lg:sr-only">{m.ranger_next()}</span>}
              </Button>
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
}
