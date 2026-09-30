/**
 * `/basecamp/badges` — progress towards the next badges (PLAN §7.2, §7.5 «Insignias»): the Creator
 * tier with the downloads still needed, the next download milestone of a mod, the badges earned and
 * the locked ones with their progress and how to earn them (secret badges stay hidden until earned).
 */
import { BadgeStamp } from '@sotf/ui/domain';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { Award, Mountain } from 'lucide-react';
import { badgeGroupName, badgeHint, badgeName, tierName } from '../../../components/profile/i18n.ts';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { useMe } from '../../hooks/use-me.ts';
import { badgeCatalogQuery, overviewQuery, type UserBadges, userBadgesQuery } from './api.ts';
import { date, number, percent } from './format.ts';
import { bt, useBasecampMessages } from './i18n.ts';
import { Milestones, TIER_THRESHOLDS } from './Milestones.tsx';
import { Meter, Panel, PanelError, PanelSkeleton, ScreenHeader } from './shared.tsx';

type CatalogBadge = { key: string; group: string; icon: string; isSecret: boolean; earnedShare: number };

function currentTier(downloads: number): keyof typeof TIER_THRESHOLDS | null {
  let tier: keyof typeof TIER_THRESHOLDS | null = null;
  for (const [key, threshold] of Object.entries(TIER_THRESHOLDS) as Array<[keyof typeof TIER_THRESHOLDS, number]>) {
    if (downloads >= threshold) tier = key;
  }
  return tier;
}

function BadgeLists({ badges, catalog }: { badges: UserBadges; catalog: readonly CatalogBadge[] }) {
  const byKey = new Map(catalog.map((badge) => [badge.key, badge]));
  const earnedCount = new Map<string, number>();
  for (const badge of badges.earned) earnedCount.set(badge.key, (earnedCount.get(badge.key) ?? 0) + 1);
  const earned = [...new Map(badges.earned.map((badge) => [badge.key, badge])).values()].sort((a, b) =>
    b.awardedAt.localeCompare(a.awardedAt),
  );
  // Closest to unlocking first; badges without a measurable progress last.
  const locked = [...badges.locked].sort((a, b) => {
    const ra = a.progress ? a.progress.current / a.progress.target : -1;
    const rb = b.progress ? b.progress.current / b.progress.target : -1;
    return rb - ra;
  });

  return (
    <div className="grid gap-6">
      <Panel title={bt('basecamp_badges_next_title', { count: locked.length })}>
        {locked.length === 0 ? (
          <p className="text-sm text-fg-muted">{bt('basecamp_badges_all_earned')}</p>
        ) : (
          <ul className="grid gap-3 md:grid-cols-2">
            {locked.map((badge) => {
              const info = byKey.get(badge.key);
              return (
                <li key={badge.key} className="grid gap-2 rounded-md border border-dashed border-border-strong p-3">
                  <BadgeStamp name={badgeName(badge.key)} icon={info?.icon ?? 'award'} locked iconMode="inline" />
                  <p className="text-sm text-fg-muted">{badgeHint(badge.key)}</p>
                  {badge.progress ? (
                    <Meter
                      value={badge.progress.current}
                      max={badge.progress.target}
                      label={bt('basecamp_badges_progress_label', { name: badgeName(badge.key) })}
                      valueText={bt('basecamp_badges_progress', {
                        current: number(badge.progress.current),
                        target: number(badge.progress.target),
                      })}
                    />
                  ) : null}
                  <p className="text-xs text-fg-subtle">
                    {info ? badgeGroupName(info.group) : null}
                    {info && info.earnedShare > 0
                      ? ` · ${bt('basecamp_badges_share', { share: percent(info.earnedShare, 1) })}`
                      : null}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </Panel>

      <Panel title={bt('basecamp_badges_earned_title', { count: earned.length })}>
        {earned.length === 0 ? (
          <EmptyState
            headingLevel={3}
            icon={<Icon icon={Award} size={28} />}
            title={bt('basecamp_badges_none_title')}
            description={bt('basecamp_badges_none_text')}
            className="py-6"
          />
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {earned.map((badge) => {
              const info = byKey.get(badge.key);
              const count = earnedCount.get(badge.key) ?? 1;
              return (
                <li key={badge.key} className="grid gap-1.5 rounded-md border border-border p-3">
                  <BadgeStamp
                    name={badgeName(badge.key)}
                    icon={info?.icon ?? 'award'}
                    iconMode="inline"
                    {...(count > 1 ? { count } : {})}
                  />
                  <p className="text-xs text-fg-muted">{badgeHint(badge.key)}</p>
                  <p className="text-xs text-fg-subtle">
                    {bt('basecamp_badges_earned_on', { date: date(badge.awardedAt) })}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </Panel>
    </div>
  );
}

export function BadgesScreen() {
  useBasecampMessages();
  const me = useMe();
  const { data: overview } = useSuspenseQuery(overviewQuery);
  const badges = useQuery(userBadgesQuery(me.user.handle));
  const catalog = useQuery(badgeCatalogQuery);

  const lifetime = overview.mods.reduce((sum, row) => sum + row.mod.downloads, 0);
  const tier = currentTier(lifetime);

  return (
    <DomainI18nBridge>
      <div className="grid gap-6">
        <ScreenHeader
          readout={bt('basecamp_readout')}
          title={bt('basecamp_badges_title')}
          description={bt('basecamp_badges_intro')}
        />

        <Panel title={bt('basecamp_badges_tier_title')}>
          <div className="grid gap-4">
            <p className="flex flex-wrap items-center gap-2 text-sm text-fg">
              <Icon icon={Mountain} size={18} className="text-featured" />
              {tier
                ? bt('basecamp_badges_tier_current', { tier: tierName(tier), downloads: number(lifetime) })
                : bt('basecamp_badges_tier_none', { downloads: number(lifetime) })}
            </p>
            {overview.nextTier ? (
              <Milestones milestone={overview.nextMilestone} tier={overview.nextTier} lifetimeDownloads={lifetime} />
            ) : (
              <p className="text-sm text-fg-muted">{bt('basecamp_badges_tier_top')}</p>
            )}
          </div>
        </Panel>

        {badges.isPending || catalog.isPending ? (
          <PanelSkeleton rows={4} className="[&>*]:h-24" />
        ) : badges.isError ? (
          <PanelError error={badges.error} onRetry={() => void badges.refetch()} />
        ) : (
          <BadgeLists badges={badges.data} catalog={catalog.data?.badges ?? []} />
        )}
      </div>
    </DomainI18nBridge>
  );
}
