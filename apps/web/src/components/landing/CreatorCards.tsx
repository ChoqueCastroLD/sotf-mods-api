/** Creator spotlight (research/03 §6.1): up to three `CreatorCard`s (Fortress/Landmark tiers first). */
import { CreatorCard } from '@sotf/ui/domain';
import type { Creator } from './data.ts';
import { DomainScope, type DomainScopeProps } from './domain.tsx';

export interface CreatorCardsProps {
  scope: DomainScopeProps;
  creators: readonly Creator[];
}

export default function CreatorCards({ scope, creators }: CreatorCardsProps) {
  return (
    <DomainScope scope={scope}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {creators.map((creator) => (
          <li key={creator.user.id}>
            <CreatorCard creator={creator} headingLevel={3} className="h-full" />
          </li>
        ))}
      </ul>
    </DomainScope>
  );
}
