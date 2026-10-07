/**
 * Empty state for screens where the emptiness is the whole screen (no mods yet, no notifications,
 * a clear queue, no jams): a centered title, one line and the action over a faint, faded `Motif`
 * (the programmatic pine pattern, no pictures). The pattern is a decorative absolutely positioned
 * layer, so nothing shifts and nothing is downloaded. `EmptyState` of `@sotf/ui` remains the plain
 * version for panels.
 */

import { cn } from '@sotf/ui/cn';
import { Motif } from '@sotf/ui/motif';
import type { ReactNode } from 'react';

/** Picks the motif seed (each screen keeps its own arrangement of trees). */
export type ConsoleArt = 'camp' | 'cabin' | 'trophy';

export interface ArtStateProps {
  art: ConsoleArt;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  headingLevel?: 2 | 3;
  className?: string;
}

export function ArtState({ art, title, description, action, headingLevel = 2, className }: ArtStateProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden rounded-xl',
        className,
      )}
    >
      <Motif seed={`console-${art}`} fade="edges" />
      <div className="relative grid justify-items-center gap-2 px-6 pt-14 pb-10 text-center">
        <Heading className="font-display-caps text-display-xs text-fg">{title}</Heading>
        {description ? <p className="max-w-sm text-sm text-fg-muted">{description}</p> : null}
        {action ? <div className="mt-2 flex flex-wrap justify-center gap-2">{action}</div> : null}
      </div>
    </section>
  );
}
