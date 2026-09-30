/** Featured Kit (research/03 §6.1): the staff-picked Kit with its «knolling» mat. */
import { KitCard } from '@sotf/ui/domain';
import type { KitCardDTO } from './data.ts';
import { DomainScope, type DomainScopeProps } from './domain.tsx';

export interface FeaturedKitCardProps {
  scope: DomainScopeProps;
  kit: KitCardDTO;
  currentBuild: string | null;
}

export default function FeaturedKitCard({ scope, kit, currentBuild }: FeaturedKitCardProps) {
  return (
    <DomainScope scope={scope}>
      <KitCard kit={kit} currentBuild={currentBuild} headingLevel={3} />
    </DomainScope>
  );
}
