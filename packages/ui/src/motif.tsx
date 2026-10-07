/**
 * Motif (React): the deterministic background pattern of `motif-svg.ts` as a decorative layer.
 * Place it inside a `relative` (and usually `overflow-hidden`) box, before the content; it is
 * absolutely positioned, ignores pointer events, is hidden from assistive technology and never
 * takes space, so it cannot shift the layout. Static: it has no animation to reduce.
 *
 *   <section className="relative isolate overflow-hidden ...">
 *     <Motif seed="empty-mods" fade="bottom" />
 *     ...content...
 *   </section>
 *
 * Astro: `components/layout/Motif.astro`. Plain CSS: put `class="motif"` on any absolutely
 * positioned element and set `style={motifVars({ seed })}`.
 */
import type { CSSProperties } from 'react';
import { cn } from './cn.ts';
import { type MotifDensity, type MotifFade, type MotifTone, motifVars } from './motif-svg.ts';

export { motifLayers, motifStyle, motifUrl, motifVars } from './motif-svg.ts';
export type { MotifDensity, MotifFade, MotifOptions, MotifTone } from './motif-svg.ts';

export interface MotifProps {
  seed?: string | number;
  density?: MotifDensity;
  tone?: MotifTone;
  fade?: MotifFade;
  /** Tile edge in px (default 360). Larger tiles repeat less often. */
  size?: number;
  className?: string;
}

export function Motif({ seed, density, tone = 'neutral', fade = 'none', size, className }: MotifProps) {
  return (
    <span
      aria-hidden="true"
      data-motif=""
      data-tone={tone}
      data-fade={fade}
      className={cn('motif', className)}
      style={motifVars({ seed, density, size }) as CSSProperties}
    />
  );
}
