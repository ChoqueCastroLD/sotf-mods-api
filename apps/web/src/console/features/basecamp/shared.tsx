/**
 * Pieces shared by the Basecamp screens: headings, the mod thumbnail, status badges, the range
 * switch, panel errors and failure toasts.
 */
import { isApiError } from '@sotf/contracts/client';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Skeleton } from '@sotf/ui/skeleton';
import { Package } from 'lucide-react';
import { type ReactNode, useId } from 'react';
import { problemText } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { type AnalyticsRange, type ModStatus, RANGES } from './api.ts';
import { bt } from './i18n.ts';
import { modStatusLabel, modStatusVariant, rangeLabel } from './labels.ts';

/** Screen heading of the area (readout + h1 + description + actions). */
export function ScreenHeader({
  readout,
  title,
  description,
  actions,
  keepReadout = false,
}: {
  keepReadout?: boolean;
  readout: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4">
      <div className="grid min-w-0 gap-1">
        <p className={cn('readout text-signal', !keepReadout && 'max-md:hidden')}>{readout}</p>
        <h1 className="font-display-caps text-display-xs text-fg break-words">{title}</h1>
        {description ? <p className="max-w-prose text-sm text-fg-muted max-md:line-clamp-2">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  );
}

/** A titled panel (h2) of a dashboard. */
export function Panel({
  title,
  actions,
  children,
  className,
  headingId,
}: {
  title: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  headingId?: string;
}) {
  const generated = useId();
  const id = headingId ?? generated;
  return (
    <section
      aria-labelledby={id}
      className={cn('grid gap-3 rounded-lg border border-border bg-surface p-4', className)}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id={id} className="readout text-fg">
          {title}
        </h2>
        {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
      </div>
      {children}
    </section>
  );
}

export function ModThumb({ url, className }: { url: string | null | undefined; className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex aspect-video shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border bg-sunken text-fg-subtle',
        className,
      )}
    >
      {url ? (
        <img src={url} alt="" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
      ) : (
        <Icon icon={Package} size={18} />
      )}
    </span>
  );
}

export function StatusBadge({ status }: { status: ModStatus }) {
  return (
    <Badge variant={modStatusVariant(status)} size="sm">
      {modStatusLabel(status)}
    </Badge>
  );
}

/** 7 d · 30 d · 90 d · All, as a radio group of buttons. */
export function RangeSwitch({
  value,
  onChange,
  label,
  className,
}: {
  value: AnalyticsRange;
  onChange: (range: AnalyticsRange) => void;
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label ?? bt('basecamp_range_label')}
      className={cn('flex rounded-lg border border-border bg-sunken p-0.5 md:inline-flex md:rounded-md', className)}
    >
      {RANGES.map((range) => {
        const checked = range === value;
        return (
          // biome-ignore lint/a11y/useSemanticElements: a segmented control of buttons (radio semantics, roving by click).
          <button
            key={range}
            type="button"
            role="radio"
            aria-checked={checked}
            onClick={() => onChange(range)}
            onKeyDown={(event) => {
              const index = RANGES.indexOf(range);
              let next: AnalyticsRange | undefined;
              if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = RANGES[(index + 1) % RANGES.length];
              if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                next = RANGES[(index - 1 + RANGES.length) % RANGES.length];
              }
              if (!next) return;
              event.preventDefault();
              onChange(next);
              const group = event.currentTarget.parentElement;
              requestAnimationFrame(() => {
                group?.querySelector<HTMLButtonElement>(`[data-range="${next}"]`)?.focus();
              });
            }}
            data-range={range}
            tabIndex={checked ? 0 : -1}
            className={cn(
              'inline-flex h-10 min-w-11 flex-1 items-center justify-center rounded-md px-2.5 text-sm font-medium tabular-nums transition-colors md:h-8 md:flex-none md:rounded-sm md:text-xs',
              'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus',
              checked ? 'bg-surface text-fg shadow-sm' : 'text-fg-muted hover:text-fg',
            )}
          >
            {rangeLabel(range)}
          </button>
        );
      })}
    </div>
  );
}

/** Inline error of a panel (not the whole screen) with retry and the request reference. */
export function PanelError({ error, onRetry, className }: { error: unknown; onRetry: () => void; className?: string }) {
  const reference = isApiError(error) ? error.problem.requestId : '';
  return (
    <div
      role="alert"
      className={cn('grid justify-items-start gap-2 rounded-lg border border-danger/40 bg-surface p-4', className)}
    >
      <p className="font-medium text-fg">{bt('basecamp_panel_error_title')}</p>
      <p className="text-sm text-fg-muted">{bt('basecamp_panel_error_text')}</p>
      {reference ? (
        <p className="font-mono text-2xs text-fg-subtle">{bt('basecamp_reference', { reference })}</p>
      ) : null}
      <Button variant="secondary" size="sm" onClick={onRetry}>
        {bt('basecamp_retry')}
      </Button>
    </div>
  );
}

/** Skeleton rows while a panel loads (same geometry as the content). */
export function PanelSkeleton({ rows = 3, className }: { rows?: number; className?: string }) {
  return (
    <div className={cn('grid gap-2', className)} aria-hidden="true">
      {Array.from({ length: rows }, (_, index) => (
        <Skeleton key={index} className="h-12 w-full" />
      ))}
    </div>
  );
}

/** Description of a failed request, for a toast. */
export function failureText(error: unknown): string {
  if (isApiError(error) && error.status === 409) return bt('basecamp_conflict_detail');
  return problemText(isApiError(error) ? error.code : null).detail;
}

/** Toast for a failed Basecamp action. */
export function reportFailure(error: unknown, title: string): void {
  notify.error(title, { description: failureText(error) });
}

/** Determinate progress (`role="progressbar"` with a readable value text). */
export function Meter({
  value,
  max,
  label,
  valueText,
  className,
}: {
  value: number;
  max: number;
  label: string;
  valueText: string;
  className?: string;
}) {
  const ratio = max > 0 ? Math.min(1, Math.max(0, value / max)) : 0;
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(ratio * 100)}
        aria-valuetext={valueText}
        className="h-2 flex-1 overflow-hidden rounded-full bg-fg/10"
      >
        <div className="h-full rounded-full bg-primary" style={{ width: `${ratio * 100}%` }} />
      </div>
      <span className="readout shrink-0 tabular-nums text-fg-muted">{valueText}</span>
    </div>
  );
}
