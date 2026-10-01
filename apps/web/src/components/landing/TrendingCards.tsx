/**
 * «Trending this week» (research/03 §6.1): a 4-column grid on desktop, 2 on tablet and a
 * scroll-snap carousel on phones. Server-rendered `ModCard`s, no hydration.
 */
import { ModCard } from '@sotf/ui/domain';
import type { ModCardDTO } from './data.ts';
import { DomainScope, type DomainScopeProps } from './domain.tsx';

export interface TrendingCardsProps {
  scope: DomainScopeProps;
  mods: readonly ModCardDTO[];
  currentBuild: string | null;
  label: string;
}

export default function TrendingCards({ scope, mods, currentBuild, label }: TrendingCardsProps) {
  return (
    <DomainScope scope={scope}>
      <ul
        aria-label={label}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
      >
        {mods.map((mod) => (
          <li key={mod.id} className="w-[78%] max-w-80 shrink-0 snap-start sm:w-auto sm:max-w-none">
            <ModCard mod={mod} currentBuild={currentBuild} headingLevel={3} className="h-full" />
          </li>
        ))}
      </ul>
    </DomainScope>
  );
}
