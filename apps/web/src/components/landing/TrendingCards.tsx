/**
 * «Trending this week» (research/03 §6.1): a 4-column grid on desktop, 2 on tablet and a compact
 * row list on phones (thumbnail, name, author, download: the catalogue reads at a glance instead of
 * one card per screen). Server-rendered `ModCard`s, no hydration; the hidden variant is
 * `display: none`, so its lazy images are not fetched.
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
      <ul aria-label={label} className="grid gap-2 sm:hidden">
        {mods.map((mod) => (
          <li key={mod.id}>
            <ModCard mod={mod} variant="row" currentBuild={currentBuild} headingLevel={3} />
          </li>
        ))}
      </ul>
      <ul aria-label={label} className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {mods.map((mod) => (
          <li key={mod.id}>
            <ModCard mod={mod} currentBuild={currentBuild} headingLevel={3} className="h-full" />
          </li>
        ))}
      </ul>
    </DomainScope>
  );
}
