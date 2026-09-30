/**
 * «Next milestone» of the summary (PLAN §7.2, §7.5): the per-mod download milestone closest to being
 * reached and the next Creator tier, each with a progress bar.
 */
import type { CreatorTierKey } from '@sotf/contracts/common';
import { Icon } from '@sotf/ui/icons';
import { Link } from '@tanstack/react-router';
import { Flag, Mountain } from 'lucide-react';
import { tierName } from '../../../components/profile/i18n.ts';
import type { Overview } from './api.ts';
import { compact, number } from './format.ts';
import { bt } from './i18n.ts';
import { Meter } from './shared.tsx';

/** `CREATOR_TIERS` of the contracts (lifetime downloads), kept Zod-free. */
export const TIER_THRESHOLDS: Readonly<Record<CreatorTierKey, number>> = {
  campfire: 1_000,
  'lean-to': 10_000,
  cabin: 50_000,
  treehouse: 100_000,
  fortress: 500_000,
  landmark: 1_000_000,
};

/** Threshold of the tier below `next` (0 below the first tier). */
function previousThreshold(next: number): number {
  let previous = 0;
  for (const value of Object.values(TIER_THRESHOLDS)) if (value < next && value > previous) previous = value;
  return previous;
}

function isTierKey(key: string): key is CreatorTierKey {
  return Object.hasOwn(TIER_THRESHOLDS, key);
}

export function Milestones({
  milestone,
  tier,
  lifetimeDownloads,
}: {
  milestone: Overview['nextMilestone'];
  tier: Overview['nextTier'];
  lifetimeDownloads: number;
}) {
  if (!milestone && !tier) {
    return <p className="text-sm text-fg-muted">{bt('basecamp_milestone_none')}</p>;
  }
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {tier && isTierKey(tier.key) ? (
        <div className="grid gap-2">
          <p className="flex items-center gap-2 text-sm text-fg">
            <Icon icon={Mountain} size={16} className="text-featured" />
            {bt('basecamp_milestone_tier', {
              tier: tierName(tier.key),
              threshold: compact(TIER_THRESHOLDS[tier.key]),
            })}
          </p>
          {(() => {
            const target = lifetimeDownloads + tier.downloadsNeeded;
            const floor = previousThreshold(target);
            return (
              <Meter
                value={Math.max(0, lifetimeDownloads - floor)}
                max={Math.max(1, target - floor)}
                label={bt('basecamp_milestone_tier_label', { tier: tierName(tier.key) })}
                valueText={bt('basecamp_milestone_to_go', {
                  count: tier.downloadsNeeded,
                  display: number(tier.downloadsNeeded),
                })}
              />
            );
          })()}
          <Link to="/basecamp/badges" className="text-xs text-link hover:underline">
            {bt('basecamp_milestone_badges_link')}
          </Link>
        </div>
      ) : null}
      {milestone ? (
        <div className="grid gap-2">
          <p className="flex items-center gap-2 text-sm text-fg">
            <Icon icon={Flag} size={16} className="text-signal" />
            {bt('basecamp_milestone_mod', { name: milestone.mod.name, threshold: compact(milestone.threshold) })}
          </p>
          <Meter
            value={milestone.current}
            max={milestone.threshold}
            label={bt('basecamp_milestone_mod_label', { name: milestone.mod.name })}
            valueText={bt('basecamp_milestone_progress', {
              current: number(milestone.current),
              threshold: number(milestone.threshold),
            })}
          />
        </div>
      ) : null}
    </div>
  );
}
