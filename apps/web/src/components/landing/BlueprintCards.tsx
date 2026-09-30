/**
 * Blueprints strip (research/03 §6.1, §6.6): the trending builds on the cyanotype band; a
 * scroll-snap carousel on phones, 2 then 4 columns above.
 */
import { BuildCard } from '@sotf/ui/domain';
import type { ModCardDTO } from './data.ts';
import { DomainScope, type DomainScopeProps } from './domain.tsx';

export interface BlueprintCardsProps {
  scope: DomainScopeProps;
  builds: readonly ModCardDTO[];
  label: string;
}

export default function BlueprintCards({ scope, builds, label }: BlueprintCardsProps) {
  return (
    <DomainScope scope={scope}>
      <ul
        aria-label={label}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2 [scrollbar-width:thin] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
      >
        {builds.map((build) => (
          <li key={build.id} className="w-[78%] max-w-80 shrink-0 snap-start sm:w-auto sm:max-w-none">
            <BuildCard build={build} headingLevel={3} className="h-full" />
          </li>
        ))}
      </ul>
    </DomainScope>
  );
}
