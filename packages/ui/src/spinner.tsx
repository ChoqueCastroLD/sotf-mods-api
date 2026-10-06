import type { SVGProps } from 'react';
import { cn } from './cn.ts';

export interface RadarSpinnerProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  /** Rendered size in px. Default 16. */
  size?: number;
  /** Accessible name. Omit when the busy state is announced elsewhere (e.g. `aria-busy`). */
  label?: string;
}

/**
 * The loading indicator: a ring with a turning arc. Under `prefers-reduced-motion` the arc stops
 * (tokens.css shortens every animation to 1 ms). The name is historical.
 */
export function RadarSpinner({ size = 16, label, className, ...rest }: RadarSpinnerProps) {
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true as const };
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: named by aria-label when `label` is set, aria-hidden otherwise
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      focusable="false"
      className={cn('shrink-0', className)}
      {...a11y}
      {...rest}
    >
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.75" />
      <g className="origin-center animate-sweep">
        <path d="M8 1.75A6.25 6.25 0 0 1 14.25 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </g>
    </svg>
  );
}
