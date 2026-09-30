/** Mod of the Week (research/03 §6.1, PLAN §7.2): the `feature` variant of `ModCard`. */
import { ModCard } from '@sotf/ui/domain';
import type { ModCardDTO } from './data.ts';
import { DomainScope, type DomainScopeProps } from './domain.tsx';

export interface ModOfWeekCardProps {
  scope: DomainScopeProps;
  mod: ModCardDTO;
  reason: string | null;
  currentBuild: string | null;
}

export default function ModOfWeekCard({ scope, mod, reason, currentBuild }: ModOfWeekCardProps) {
  return (
    <DomainScope scope={scope}>
      <ModCard
        mod={mod}
        variant="feature"
        quote={reason}
        currentBuild={currentBuild}
        headingLevel={3}
        viewTransition={false}
      />
    </DomainScope>
  );
}
