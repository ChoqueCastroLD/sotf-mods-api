import { useState } from 'react';
import { BadgeStamp, RankStamp, TierStamp, TrustedMark } from '../../src/domain/index.ts';
import { Button } from '../../src/index.ts';
import { DemoI18n, DemoRow } from './demo-kit.tsx';

export const title = 'Identity · RankStamp, TierStamp, BadgeStamp, TrustedMark';

const RANKS = ['castaway', 'scavenger', 'forager', 'trapper', 'builder', 'pathfinder', 'veteran', 'legend'] as const;
const TIERS = ['campfire', 'lean-to', 'cabin', 'treehouse', 'fortress', 'landmark'] as const;

export default function IdentityDemo() {
  const [replay, setReplay] = useState(0);
  return (
    <DemoI18n>
      <div className="flex flex-col gap-6">
        <DemoRow label="RankStamp">
          <div className="flex flex-wrap gap-4">
            {RANKS.map((rank) => (
              <RankStamp key={rank} rank={rank} />
            ))}
          </div>
        </DemoRow>
        <DemoRow label="TierStamp (Fortress and Landmark: Solafite spotlight)">
          <div className="flex flex-wrap gap-4">
            {TIERS.map((tier) => (
              <TierStamp key={tier} tier={tier} />
            ))}
          </div>
        </DemoRow>
        <DemoRow label="BadgeStamp · earned, repeatable, locked with progress">
          <div className="flex flex-wrap items-start gap-4">
            <BadgeStamp name="Crash landing" icon="plane-landing" />
            <BadgeStamp name="Original survivor 2023" icon="contour-pin" />
            <BadgeStamp name="Mod of the Week" icon="trophy" count={3} />
            <BadgeStamp name="Field medic" icon="cross" locked progress={{ current: 4, target: 10 }} />
            <BadgeStamp name="Night owl" icon="moon-star" locked />
          </div>
        </DemoRow>
        <DemoRow label="Unlock moment (stamp motion; none under reduced motion)">
          <div className="flex items-center gap-4">
            <BadgeStamp key={replay} name="Bug hunter" icon="bug" size="lg" animate />
            <Button variant="secondary" size="sm" onClick={() => setReplay((value) => value + 1)}>
              Replay
            </Button>
          </div>
        </DemoRow>
        <DemoRow label="TrustedMark">
          <div className="flex items-center gap-4">
            <TrustedMark />
            <TrustedMark withLabel />
          </div>
        </DemoRow>
      </div>
    </DemoI18n>
  );
}
