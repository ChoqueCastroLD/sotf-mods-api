/**
 * Badge. Soft badges use tint pairs of one scale: dark `{hue}-950` background / `{hue}-200` text /
 * `{hue}-800` border, light `{hue}-100` / `{hue}-800` / `{hue}-200` (at least 7:1, see
 * test/contrast.test.ts). Status badges must carry an icon + text (colour is never the only
 * signal). `signal` and `blueprint` are neutral grays; `featured` is a plain neutral label.
 */
import type { ComponentProps, ReactNode } from 'react';
import { cn } from './cn.ts';

export const BADGE_VARIANTS = [
  'neutral',
  'signal',
  'success',
  'warning',
  'danger',
  'featured',
  'blueprint',
  'outline-mono',
] as const;
export type BadgeVariant = (typeof BADGE_VARIANTS)[number];

// Literal class strings (Tailwind scans source text, so every generated class must appear here).
const VARIANT: Record<BadgeVariant, string> = {
  neutral: 'border border-border bg-fg/6 text-fg-muted',
  signal:
    'border bg-[light-dark(var(--color-signal-100),var(--color-signal-950))] text-[light-dark(var(--color-signal-800),var(--color-signal-200))] border-[light-dark(var(--color-signal-200),var(--color-signal-800))]',
  success:
    'border bg-[light-dark(var(--color-lichen-100),var(--color-lichen-950))] text-[light-dark(var(--color-lichen-800),var(--color-lichen-200))] border-[light-dark(var(--color-lichen-200),var(--color-lichen-800))]',
  warning:
    'border bg-[light-dark(var(--color-solafite-100),var(--color-solafite-950))] text-[light-dark(var(--color-solafite-800),var(--color-solafite-200))] border-[light-dark(var(--color-solafite-200),var(--color-solafite-800))]',
  danger:
    'border bg-[light-dark(var(--color-blood-100),var(--color-blood-950))] text-[light-dark(var(--color-blood-800),var(--color-blood-200))] border-[light-dark(var(--color-blood-200),var(--color-blood-800))]',
  featured: 'bg-featured text-fg-inverse',
  blueprint:
    'border bg-[light-dark(var(--color-blueprint-100),var(--color-blueprint-950))] text-[light-dark(var(--color-blueprint-800),var(--color-blueprint-200))] border-[light-dark(var(--color-blueprint-200),var(--color-blueprint-800))]',
  'outline-mono': 'border border-border-strong text-fg-muted',
};

/** Hue of each soft variant (used by the contrast test). */
export const BADGE_SOFT_HUES = {
  signal: 'signal',
  success: 'lichen',
  warning: 'solafite',
  danger: 'blood',
  blueprint: 'blueprint',
} as const satisfies Partial<Record<BadgeVariant, string>>;

export interface BadgeProps extends ComponentProps<'span'> {
  variant?: BadgeVariant;
  /** Decorative leading icon (required in spirit for status variants). */
  icon?: ReactNode;
  size?: 'sm' | 'md';
}

export function Badge({ variant = 'neutral', icon, size = 'md', className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex max-w-full shrink-0 items-center gap-1 rounded-sm font-medium whitespace-nowrap',
        size === 'sm' ? 'h-5 px-1.5 text-2xs' : 'h-6 px-2 text-xs',
        VARIANT[variant],
        className,
      )}
      {...rest}
    >
      {icon ? (
        <span className="flex [&_svg]:size-3.5" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className="truncate">{children}</span>
    </span>
  );
}
