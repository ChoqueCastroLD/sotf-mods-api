/**
 * Empty state with concept art (the «Locator» island illustrations): a wide, softly faded picture
 * above the message. Used only where the emptiness is the whole screen (no mods yet, no signals,
 * a clear queue, no jams) — the art earns its bytes by making the first minute feel designed.
 * AVIF/WebP derivatives of `/art/console-*` (480 and 960 px wide), lazy, with fixed dimensions so
 * nothing shifts; the picture is decorative (`alt=""`). `EmptyState` of `@sotf/ui` remains the
 * plain version for panels.
 */

import { cn } from '@sotf/ui/cn';
import type { ReactNode } from 'react';

export type ConsoleArt = 'camp' | 'cabin' | 'trophy';

const SRC: Record<ConsoleArt, string> = {
  camp: '/art/console-camp',
  cabin: '/art/console-cabin',
  trophy: '/art/console-trophy',
};

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
  const base = SRC[art];
  return (
    <section
      className={cn(
        'overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--inset-shadow-highlight)]',
        className,
      )}
    >
      <div className="relative aspect-[2/1] max-h-64 w-full overflow-hidden bg-sunken">
        <picture>
          <source
            type="image/avif"
            srcSet={`${base}-480.avif 480w, ${base}-960.avif 960w`}
            sizes="(min-width: 48rem) 40rem, 100vw"
          />
          <source
            type="image/webp"
            srcSet={`${base}-480.webp 480w, ${base}-960.webp 960w`}
            sizes="(min-width: 48rem) 40rem, 100vw"
          />
          <img
            src={`${base}-960.webp`}
            alt=""
            width={960}
            height={480}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </picture>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-surface via-surface/70 to-transparent"
        />
      </div>
      <div className="-mt-8 grid justify-items-center gap-2 px-6 pt-0 pb-7 text-center">
        <Heading className="relative font-display-caps text-display-xs text-fg">{title}</Heading>
        {description ? <p className="relative max-w-sm text-sm text-fg-muted">{description}</p> : null}
        {action ? <div className="relative mt-2 flex flex-wrap justify-center gap-2">{action}</div> : null}
      </div>
    </section>
  );
}
