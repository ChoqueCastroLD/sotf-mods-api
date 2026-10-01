/**
 * Native-style grouped lists (iOS «inset grouped» / Android settings): a small caption, a rounded
 * group of full-width rows with leading icons, a value or badge and a trailing chevron. Used for
 * the settings index, the admin index and anywhere a phone needs «list → detail» navigation.
 */

import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Link, type LinkProps } from '@tanstack/react-router';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export function ListGroup({
  title,
  footer,
  children,
  className,
}: {
  title?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('grid gap-2', className)}>
      {title ? <h2 className="readout px-4">{title}</h2> : null}
      <ul className="grid divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
        {children}
      </ul>
      {footer ? <p className="px-4 text-xs text-fg-subtle">{footer}</p> : null}
    </section>
  );
}

export type IconTone = 'primary' | 'signal' | 'success' | 'warning' | 'danger' | 'featured' | 'neutral';

const ICON_TONES: Record<IconTone, string> = {
  primary: 'bg-primary-soft text-primary',
  signal: 'bg-signal-soft text-signal',
  success: 'bg-success-soft text-success',
  warning: 'bg-warning-soft text-warning',
  danger: 'bg-danger-soft text-danger',
  featured: 'bg-featured-soft text-featured',
  neutral: 'bg-fg/8 text-fg-muted',
};

export function RowIcon({ icon, tone = 'neutral' }: { icon: LucideIcon; tone?: IconTone }) {
  return (
    <span className={cn('flex size-9 shrink-0 items-center justify-center rounded-lg', ICON_TONES[tone])}>
      <Icon icon={icon} size={18} />
    </span>
  );
}

interface RowBodyProps {
  icon?: LucideIcon;
  tone?: IconTone;
  title: ReactNode;
  hint?: ReactNode;
  value?: ReactNode;
  chevron?: boolean;
}

function RowBody({ icon, tone, title, hint, value, chevron = true }: RowBodyProps) {
  return (
    <>
      {icon ? <RowIcon icon={icon} {...(tone ? { tone } : {})} /> : null}
      <span className="grid min-w-0 flex-1">
        <span className="truncate font-medium text-fg">{title}</span>
        {hint ? <span className="truncate text-sm text-fg-muted">{hint}</span> : null}
      </span>
      {value ? <span className="shrink-0 text-sm text-fg-muted tabular-nums">{value}</span> : null}
      {chevron ? <Icon icon={ChevronRight} size={18} className="shrink-0 text-fg-subtle rtl:rotate-180" /> : null}
    </>
  );
}

const ROW_CLASSES =
  'flex min-h-14 w-full items-center gap-3 px-4 py-2.5 text-start transition-colors active:bg-fg/8 hover:bg-fg/5 focus-visible:bg-fg/5 focus-visible:outline-offset-[-2px]';

export function ListLink({ to, search, ...body }: RowBodyProps & { to: string; search?: Record<string, unknown> }) {
  return (
    <li>
      <Link to={to as LinkProps['to']} {...(search ? { search: search as never } : {})} className={ROW_CLASSES}>
        <RowBody {...body} />
      </Link>
    </li>
  );
}

export function ListAnchor({ href, ...body }: RowBodyProps & { href: string }) {
  return (
    <li>
      <a href={href} className={ROW_CLASSES}>
        <RowBody {...body} />
      </a>
    </li>
  );
}

export function ListButton({ onClick, ...body }: RowBodyProps & { onClick: () => void }) {
  return (
    <li>
      <button type="button" onClick={onClick} className={ROW_CLASSES}>
        <RowBody {...body} />
      </button>
    </li>
  );
}
