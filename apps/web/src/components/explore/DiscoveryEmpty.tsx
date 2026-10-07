/**
 * Empty state of the discovery pages (explore, search, requests): the title, one line of copy and the
 * actions over a faint, faded `Motif` (programmatic pine pattern, no pictures). The pattern is an
 * absolutely positioned decorative layer, so it takes no space and cannot shift the layout.
 */
import { Motif } from '@sotf/ui/motif';
import type { ReactNode } from 'react';

export interface DiscoveryEmptyProps {
  title: string;
  text?: string | undefined;
  /** Actions and extra content under the copy. */
  children?: ReactNode;
  headingLevel?: 2 | 3;
  /** Show the pattern (default). Off for in-section «nothing here» notes. */
  art?: boolean;
}

export function DiscoveryEmpty({ title, text, children, headingLevel = 3, art = true }: DiscoveryEmptyProps) {
  const Heading = `h${headingLevel}` as const;
  return (
    <div
      className={`relative isolate mx-auto flex w-full max-w-lg flex-col items-center gap-3 overflow-hidden text-center ${art ? 'rounded-xl px-6 pt-16 pb-10' : 'py-2 md:py-6'}`}
    >
      {art ? <Motif seed="discovery-empty" fade="edges" /> : null}
      <Heading className="relative text-xl font-bold text-balance text-fg">{title}</Heading>
      {text ? <p className="relative max-w-prose text-sm text-pretty text-fg-muted md:text-base">{text}</p> : null}
      {children ? <div className="relative mt-1 flex w-full flex-col items-center gap-3">{children}</div> : null}
    </div>
  );
}
