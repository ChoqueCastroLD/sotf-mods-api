/**
 * Explore filters (research/03 §5.4).
 *
 * - `FilterChips`: tri-state chips (off → include → off; exclude). Click includes; Alt/Option +
 *   click excludes; an explicit «Exclude» control per chip keeps exclusion reachable by keyboard
 *   and touch. State is icon + text (✓ included, ⊘ excluded + struck through), never colour alone.
 * - `SortMenu`: the sort order in a disclosure (links on server-rendered pages, buttons in the
 *   console).
 * - `ViewToggle`: grid / list / compact.
 *
 * Every control works in two modes: **links** (`href`s built by the page: real URLs, crawlable,
 * no JavaScript) or **callbacks** (`onChange`, console and islands).
 */
import { Ban, Check, LayoutGrid, List, type LucideIcon, Rows3, X } from 'lucide-react';
import type { MouseEvent, ReactNode } from 'react';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import { DisclosureMenu, disclosureItemClasses } from './disclosure.tsx';
import { formatCompact, useDomainI18n } from './i18n.ts';

export type FilterState = 'off' | 'include' | 'exclude';

export interface FilterChipOption {
  value: string;
  label: string;
  /** Matching results (facet count). */
  count?: number;
  icon?: ReactNode;
  state?: FilterState;
  /** Link mode: URL after clicking the chip (toggle include). */
  href?: string;
  /** Link mode: URL that excludes this value (or removes the exclusion). */
  excludeHref?: string;
}

export interface FilterChipsProps {
  /** Group name («Category», «Tags»). */
  label: string;
  options: readonly FilterChipOption[];
  /** Callback mode. */
  onChange?: (value: string, next: FilterState) => void;
  /** Offer exclusion (default true). */
  allowExclude?: boolean;
  /** «Clear» (link mode). */
  clearHref?: string;
  /** «Clear» (callback mode). */
  onClear?: () => void;
  className?: string;
}

const CHIP_BASE =
  'inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-sm transition-colors duration-(--dur-fast) ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

const CHIP_STATE: Record<FilterState, string> = {
  off: 'border-border-strong bg-transparent text-fg hover:bg-fg/6',
  include: 'border-primary bg-primary/12 text-fg',
  exclude: 'border-danger bg-danger-soft text-fg [&_[data-chip-label]]:line-through',
};

/** Next state when the chip itself is activated (Alt/Option excludes). */
export function nextFilterState(current: FilterState, exclude: boolean): FilterState {
  if (exclude) return current === 'exclude' ? 'off' : 'exclude';
  return current === 'include' ? 'off' : 'include';
}

export function FilterChips({
  label,
  options,
  onChange,
  allowExclude = true,
  clearHref,
  onClear,
  className,
}: FilterChipsProps) {
  const { t, locale } = useDomainI18n();
  const active = options.some((option) => (option.state ?? 'off') !== 'off');
  return (
    <fieldset className={cn('flex min-w-0 flex-col gap-2', className)}>
      <legend className="mb-2 text-xs font-medium text-fg-muted">{label}</legend>
      <ul className="flex flex-wrap gap-2">
        {options.map((option) => {
          const state = option.state ?? 'off';
          const stateText =
            state === 'include'
              ? t('ui_domain_filter_included')
              : state === 'exclude'
                ? t('ui_domain_filter_excluded')
                : null;
          const content = (
            <>
              {state === 'include' ? (
                <Icon icon={Check} size={14} className="text-primary" />
              ) : state === 'exclude' ? (
                <Icon icon={Ban} size={14} className="text-danger" />
              ) : option.icon ? (
                <span className="flex [&_svg]:size-3.5" aria-hidden="true">
                  {option.icon}
                </span>
              ) : null}
              <span data-chip-label="">{option.label}</span>
              {typeof option.count === 'number' ? (
                <span className="font-mono text-2xs text-fg-subtle tabular-nums">
                  {formatCompact(locale, option.count)}
                </span>
              ) : null}
              {stateText ? <span className="sr-only">({stateText})</span> : null}
            </>
          );
          const onChipClick = onChange
            ? (event: MouseEvent<HTMLButtonElement>) =>
                onChange(option.value, nextFilterState(state, event.altKey && allowExclude))
            : undefined;
          const excludeLabel =
            state === 'exclude'
              ? t('ui_domain_filter_unexclude', { label: option.label })
              : t('ui_domain_filter_exclude', { label: option.label });
          const excludeClasses =
            'inline-flex size-8 items-center justify-center rounded-full text-fg-subtle hover:bg-fg/8 hover:text-danger ' +
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus aria-pressed:text-danger';
          return (
            <li key={option.value} className="flex items-center" data-filter-state={state}>
              {option.href ? (
                <a
                  href={option.href}
                  rel="nofollow"
                  className={cn(CHIP_BASE, CHIP_STATE[state])}
                  aria-current={state === 'include' ? 'true' : undefined}
                >
                  {content}
                </a>
              ) : (
                <button
                  type="button"
                  aria-pressed={state === 'off' ? 'false' : 'true'}
                  onClick={onChipClick}
                  className={cn(CHIP_BASE, CHIP_STATE[state])}
                >
                  {content}
                </button>
              )}
              {allowExclude && (option.excludeHref || onChange) ? (
                option.excludeHref ? (
                  <a href={option.excludeHref} rel="nofollow" className={excludeClasses} title={excludeLabel}>
                    <Icon icon={state === 'exclude' ? X : Ban} size={14} />
                    <span className="sr-only">{excludeLabel}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    aria-pressed={state === 'exclude'}
                    onClick={() => onChange?.(option.value, state === 'exclude' ? 'off' : 'exclude')}
                    className={excludeClasses}
                    title={excludeLabel}
                  >
                    <Icon icon={state === 'exclude' ? X : Ban} size={14} />
                    <span className="sr-only">{excludeLabel}</span>
                  </button>
                )
              ) : null}
            </li>
          );
        })}
      </ul>
      {active && (clearHref || onClear) ? (
        clearHref ? (
          <a href={clearHref} rel="nofollow" className="self-start text-sm text-link underline underline-offset-3">
            {t('ui_domain_filter_clear')}
          </a>
        ) : (
          <button
            type="button"
            onClick={onClear}
            className="self-start rounded-xs text-sm text-link underline underline-offset-3"
          >
            {t('ui_domain_filter_clear')}
          </button>
        )
      ) : null}
    </fieldset>
  );
}

// -------------------------------------------------------------------------------------------
// SortMenu
// -------------------------------------------------------------------------------------------

export interface SortOption<Value extends string = string> {
  value: Value;
  label: string;
  /** Link mode. */
  href?: string;
}

export interface SortMenuProps<Value extends string = string> {
  options: readonly SortOption<Value>[];
  value: Value;
  /** Callback mode. */
  onValueChange?: (value: Value) => void;
  align?: 'start' | 'end';
  className?: string;
}

export function SortMenu<Value extends string = string>({
  options,
  value,
  onValueChange,
  align = 'end',
  className,
}: SortMenuProps<Value>) {
  const { t } = useDomainI18n();
  const current = options.find((option) => option.value === value) ?? options[0];
  return (
    <DisclosureMenu
      align={align}
      className={className}
      summaryClassName="flex h-10 items-center gap-1.5 rounded-md border border-border-strong px-3 text-sm text-fg hover:bg-fg/6"
      summary={
        <>
          <span className="text-fg-muted">{t('ui_domain_sort_label')}</span>
          <span className="font-medium">{current?.label}</span>
        </>
      }
      panelClassName="w-56"
    >
      <ul>
        {options.map((option) => {
          const selected = option.value === current?.value;
          const inner = (
            <>
              <span className="flex w-4 text-primary">{selected ? <Icon icon={Check} size={16} /> : null}</span>
              {option.label}
            </>
          );
          return (
            <li key={option.value}>
              {option.href ? (
                <a href={option.href} aria-current={selected ? 'true' : undefined} className={disclosureItemClasses}>
                  {inner}
                </a>
              ) : (
                <button
                  type="button"
                  aria-current={selected ? 'true' : undefined}
                  onClick={(event) => {
                    onValueChange?.(option.value);
                    const details = event.currentTarget.closest('details');
                    if (details) details.open = false;
                  }}
                  className={disclosureItemClasses}
                >
                  {inner}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </DisclosureMenu>
  );
}

// -------------------------------------------------------------------------------------------
// ViewToggle
// -------------------------------------------------------------------------------------------

export const VIEW_MODES = ['grid', 'list', 'compact'] as const;
export type ViewMode = (typeof VIEW_MODES)[number];

const VIEW_ICON: Record<ViewMode, LucideIcon> = { grid: LayoutGrid, list: List, compact: Rows3 };

export interface ViewToggleProps {
  value: ViewMode;
  /** Link mode: URL per mode. */
  hrefs?: Partial<Record<ViewMode, string>>;
  /** Callback mode. */
  onValueChange?: (value: ViewMode) => void;
  modes?: readonly ViewMode[];
  className?: string;
}

export function ViewToggle({ value, hrefs, onValueChange, modes = VIEW_MODES, className }: ViewToggleProps) {
  const { t } = useDomainI18n();
  const labels: Record<ViewMode, string> = {
    grid: t('ui_domain_view_grid'),
    list: t('ui_domain_view_list'),
    compact: t('ui_domain_view_compact'),
  };
  const item =
    'inline-flex size-9 items-center justify-center rounded-sm text-fg-muted transition-colors duration-(--dur-fast) ' +
    'hover:bg-fg/8 hover:text-fg aria-pressed:bg-raised aria-pressed:text-fg aria-[current=true]:bg-raised aria-[current=true]:text-fg ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';
  return (
    <fieldset className={cn('inline-flex gap-0.5 rounded-md border border-border-strong p-0.5', className)}>
      <legend className="sr-only">{t('ui_domain_view_label')}</legend>
      {modes.map((mode) => {
        const selected = mode === value;
        const href = hrefs?.[mode];
        return href ? (
          <a key={mode} href={href} aria-current={selected ? 'true' : undefined} title={labels[mode]} className={item}>
            <Icon icon={VIEW_ICON[mode]} size={18} />
            <span className="sr-only">{labels[mode]}</span>
          </a>
        ) : (
          <button
            key={mode}
            type="button"
            aria-pressed={selected}
            title={labels[mode]}
            onClick={() => onValueChange?.(mode)}
            className={item}
          >
            <Icon icon={VIEW_ICON[mode]} size={18} />
            <span className="sr-only">{labels[mode]}</span>
          </button>
        );
      })}
    </fieldset>
  );
}
