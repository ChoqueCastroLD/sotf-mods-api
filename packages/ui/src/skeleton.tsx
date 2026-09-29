/**
 * Skeletons (research/03 §5.2, §5.6): same geometry as the content they stand for, shimmer that
 * stops under reduced motion, and they only appear if loading takes longer than 300 ms
 * (`SkeletonGroup`), so fast responses never flash a placeholder.
 */
import type { ComponentProps, CSSProperties, ReactNode } from 'react';
import { cn } from './cn.ts';
import { useUiTranslate } from './labels.ts';

export function Skeleton({ className, ...rest }: ComponentProps<'span'>) {
  // The shimmer paints `raised`; in Day that is white and vanishes on cards, so tint it one step.
  return (
    <span
      aria-hidden="true"
      className={cn(
        'skeleton block h-4 [--color-raised:light-dark(var(--color-night-100),var(--color-night-900))]',
        className,
      )}
      {...rest}
    />
  );
}

export interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

/** Paragraph placeholder: full-width lines and a shorter last one. */
export function SkeletonText({ lines = 3, className }: SkeletonTextProps) {
  return (
    <span className={cn('flex flex-col gap-2', className)} aria-hidden="true">
      {Array.from({ length: lines }, (_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: placeholder lines are positional
        <Skeleton key={index} className={index === lines - 1 && lines > 1 ? 'w-3/5' : 'w-full'} />
      ))}
    </span>
  );
}

export interface SkeletonGroupProps {
  children: ReactNode;
  /** Delay before the placeholders appear. Default 300 ms. */
  delayMs?: number;
  /** Announced to screen readers while loading. Default: the localized «Checking the map…». */
  label?: string;
  /** Layout of the placeholders (applied to the element that wraps `children`). */
  className?: string;
}

/** Loading region: announces the busy state and reveals its skeletons after `delayMs`. */
export function SkeletonGroup({ children, delayMs = 300, label, className }: SkeletonGroupProps) {
  const t = useUiTranslate();
  const style = { '--skeleton-delay': `${delayMs}ms` } as CSSProperties;
  return (
    <div role="status" aria-busy="true">
      <span className="sr-only">{label ?? t('ui_loading')}</span>
      <div className={cn('opacity-0 animate-skeleton-in', className)} style={style}>
        {children}
      </div>
    </div>
  );
}
