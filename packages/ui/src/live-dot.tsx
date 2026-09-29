/**
 * LiveDot (research/03 §5.3): a Signal dot with the `ping-locator` pulse. The only infinite
 * animation allowed in the viewport; it pauses while off-screen (IntersectionObserver, here or
 * via `enhance()` on non-hydrated pages) and stops under `prefers-reduced-motion`.
 */
import { useEffect, useRef } from 'react';
import { cn } from './cn.ts';
import { observeOffscreen } from './enhance.ts';
import { useUiTranslate } from './labels.ts';

export interface LiveDotProps {
  /** Visible label next to the dot. Omit for a dot whose meaning is given by nearby text. */
  label?: string;
  /** Accessible-only label when there is no visible one. Default: the localized «Live». */
  srLabel?: string;
  className?: string;
}

export function LiveDot({ label, srLabel, className }: LiveDotProps) {
  const t = useUiTranslate();
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => (ref.current ? observeOffscreen([ref.current]) : undefined), []);
  return (
    <span
      ref={ref}
      data-live-dot=""
      className={cn('inline-flex items-center gap-2 data-offscreen:ping-paused', className)}
    >
      <span className="relative inline-flex size-2.5" aria-hidden="true">
        <span className="absolute inset-0 rounded-full bg-signal opacity-60 animate-ping-locator" />
        <span className="relative size-2.5 rounded-full bg-signal" />
      </span>
      {label ? (
        <span className="text-sm text-fg">{label}</span>
      ) : (
        <span className="sr-only">{srLabel ?? t('ui_live')}</span>
      )}
    </span>
  );
}
