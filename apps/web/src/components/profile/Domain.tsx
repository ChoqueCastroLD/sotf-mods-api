/**
 * Server-only React blocks of the profile, creators and achievements pages (no hydration): the
 * identity stamps, card grids, written reviews, the field notebook and the creators grid, drawn
 * with the `@sotf/ui/domain` components inside a `DomainI18nProvider` that follows the page
 * language (`profileDomainI18n`).
 */
import type { CreatorTierKey, SurvivorRankKey } from '@sotf/contracts/common';
import { BADGES } from '@sotf/contracts/gamification';
import { type Locale, localizePath } from '@sotf/i18n';
import { buttonClasses } from '@sotf/ui/button';
import {
  BadgeStamp,
  BuildCard,
  CreatorCard,
  type DomainI18n,
  DomainI18nProvider,
  KitCard,
  ModCard,
  modDownloadHref,
  RankStamp,
  ReviewCard,
  TierStamp,
} from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { UserCheck, UserPlus } from 'lucide-react';
import type { ReactNode } from 'react';
import type { BadgeCatalog, CreatorCardDTO, KitCardDTO, ModCardDTO, UserBadges, UserReviewDTO } from './data.ts';

function Scope({ i18n, children }: { i18n: DomainI18n; children?: ReactNode }) {
  return <DomainI18nProvider value={i18n}>{children}</DomainI18nProvider>;
}

function localizedCard<T extends { canonicalPath: string }>(card: T, locale: Locale): T {
  return { ...card, canonicalPath: localizePath(card.canonicalPath, locale) };
}

// -----------------------------------------------------------------------------------------------
// Identity stamps
// -----------------------------------------------------------------------------------------------

export interface IdentityStampsProps {
  i18n: DomainI18n;
  rank: SurvivorRankKey | null;
  tier: CreatorTierKey | null;
  /** Localised label of the Ranger stamp (moderators and admins), or null. */
  ranger: string | null;
}

/** Rank, tier and Ranger stamps of the profile header (research/03 §6.4). */
export function IdentityStamps({ i18n, rank, tier, ranger }: IdentityStampsProps) {
  if (!rank && !tier && !ranger) return null;
  return (
    <Scope i18n={i18n}>
      <ul className="flex flex-wrap items-center gap-3">
        {rank ? (
          <li>
            <RankStamp rank={rank} size="sm" />
          </li>
        ) : null}
        {tier ? (
          <li>
            <TierStamp tier={tier} size="sm" />
          </li>
        ) : null}
        {ranger ? (
          <li>
            <BadgeStamp name={ranger} icon="binoculars" size="sm" />
          </li>
        ) : null}
      </ul>
    </Scope>
  );
}

// -----------------------------------------------------------------------------------------------
// Card grids
// -----------------------------------------------------------------------------------------------

export interface CardGridProps {
  i18n: DomainI18n;
  locale: Locale;
  label: string;
  /** The first card is the LCP candidate. */
  priorityFirst?: boolean;
}

const GRID = 'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3';

/** Pinned mods (up to 3) above the Mods tab. */
export function PinnedMods({ i18n, locale, label, mods }: CardGridProps & { mods: readonly ModCardDTO[] }) {
  return (
    <Scope i18n={i18n}>
      <ul className={GRID} aria-label={label}>
        {mods.map((mod, index) => (
          <li key={mod.id} className="min-w-0">
            {mod.kind === 'build' ? (
              <BuildCard
                build={localizedCard(mod, locale)}
                headingLevel={3}
                priority={index === 0}
                className="h-full"
              />
            ) : (
              <ModCard
                mod={localizedCard(mod, locale)}
                variant="grid"
                headingLevel={3}
                priority={index === 0}
                downloadHref={modDownloadHref(mod)}
                className="h-full"
              />
            )}
          </li>
        ))}
      </ul>
    </Scope>
  );
}

/** Mods, libraries or builds of the user. */
export function ModGrid({
  i18n,
  locale,
  label,
  items,
  priorityFirst = false,
}: CardGridProps & { items: readonly ModCardDTO[] }) {
  return (
    <Scope i18n={i18n}>
      <ul className={GRID} aria-label={label}>
        {items.map((mod, index) => {
          const card = localizedCard(mod, locale);
          const priority = priorityFirst && index === 0;
          return (
            <li key={mod.id} className="min-w-0">
              {mod.kind === 'build' ? (
                <BuildCard build={card} headingLevel={3} priority={priority} className="h-full" />
              ) : (
                <ModCard
                  mod={card}
                  variant="grid"
                  headingLevel={3}
                  priority={priority}
                  downloadHref={modDownloadHref(mod)}
                  className="h-full"
                />
              )}
            </li>
          );
        })}
      </ul>
    </Scope>
  );
}

export function KitGrid({ i18n, locale, label, items }: CardGridProps & { items: readonly KitCardDTO[] }) {
  return (
    <Scope i18n={i18n}>
      <ul className={GRID} aria-label={label}>
        {items.map((kit) => (
          <li key={kit.id} className="min-w-0">
            <KitCard kit={localizedCard(kit, locale)} headingLevel={3} className="h-full" />
          </li>
        ))}
      </ul>
    </Scope>
  );
}

// -----------------------------------------------------------------------------------------------
// Reviews written
// -----------------------------------------------------------------------------------------------

export interface WrittenReviewsProps {
  i18n: DomainI18n;
  locale: Locale;
  reviews: readonly UserReviewDTO[];
  /** «Review of {mod}» (the link text above each review). */
  reviewOf: (name: string) => string;
}

export function WrittenReviews({ i18n, locale, reviews, reviewOf }: WrittenReviewsProps) {
  return (
    <Scope i18n={i18n}>
      <ul className="grid gap-5">
        {reviews.map((review) => (
          <li key={review.id} id={`review-${review.id}`} className="grid gap-2">
            <p className="readout text-fg-muted">
              <a
                href={localizePath(review.mod.canonicalPath, locale)}
                className="rounded-xs text-link underline-offset-3 hover:underline"
              >
                {reviewOf(review.mod.name)}
              </a>
            </p>
            <ReviewCard review={review} headingLevel={3} />
          </li>
        ))}
      </ul>
    </Scope>
  );
}

// -----------------------------------------------------------------------------------------------
// Field notebook (Badges tab)
// -----------------------------------------------------------------------------------------------

type CatalogEntry = { key: string; group: string; icon: string; isSecret: boolean; isRepeatable: boolean };

/** Catalog entries: the API's when available, the contract's T0 list otherwise. */
function catalogEntries(catalog: BadgeCatalog | null): CatalogEntry[] {
  if (catalog && catalog.badges.length > 0) return catalog.badges;
  return BADGES.map((badge) => ({
    key: badge.key,
    group: badge.group,
    icon: badge.icon,
    isSecret: badge.secret,
    isRepeatable: badge.repeatable,
  }));
}

export interface NotebookGroup {
  group: string;
  earned: Array<{ key: string; icon: string; count: number; lastAwardedAt: string; isFeatured: boolean }>;
  locked: Array<{ key: string; icon: string; progress: { current: number; target: number } | null }>;
}

/**
 * Groups the notebook by catalog group, in catalog order. Repeatable badges collapse into one
 * stamp with a count; secret badges only appear once earned (the API already hides them).
 */
export function notebookGroups(badges: UserBadges, catalog: BadgeCatalog | null): NotebookGroup[] {
  const entries = catalogEntries(catalog);
  const byKey = new Map(entries.map((entry) => [entry.key, entry]));
  const groups = new Map<string, NotebookGroup>();
  const groupOf = (name: string): NotebookGroup => {
    let group = groups.get(name);
    if (!group) {
      group = { group: name, earned: [], locked: [] };
      groups.set(name, group);
    }
    return group;
  };
  // Catalog order first, so the notebook reads the same for everyone.
  for (const entry of entries) groupOf(entry.group);

  const earned = new Map<string, NotebookGroup['earned'][number]>();
  for (const badge of badges.earned) {
    const entry = byKey.get(badge.key);
    const current = earned.get(badge.key);
    if (current) {
      current.count += 1;
      if (badge.awardedAt > current.lastAwardedAt) current.lastAwardedAt = badge.awardedAt;
      current.isFeatured ||= badge.isFeatured;
      continue;
    }
    const item = {
      key: badge.key,
      icon: entry?.icon ?? 'award',
      count: 1,
      lastAwardedAt: badge.awardedAt,
      isFeatured: badge.isFeatured,
    };
    earned.set(badge.key, item);
    groupOf(entry?.group ?? 'roles').earned.push(item);
  }
  for (const badge of badges.locked) {
    if (earned.has(badge.key)) continue;
    const entry = byKey.get(badge.key);
    if (entry?.isSecret) continue;
    groupOf(entry?.group ?? 'roles').locked.push({
      key: badge.key,
      icon: entry?.icon ?? 'award',
      progress: badge.progress,
    });
  }
  return [...groups.values()].filter((group) => group.earned.length + group.locked.length > 0);
}

export interface BadgeNotebookProps {
  i18n: DomainI18n;
  groups: readonly NotebookGroup[];
  groupName: (group: string) => string;
  badgeName: (key: string) => string;
  badgeHint: (key: string) => string;
  /** «Earned {date}» of an earned stamp. */
  earnedOn: (iso: string) => string;
  featuredLabel: string;
}

/** «Field guide pages»: a grid of stamps per group, locked ones dashed with a hint. */
export function BadgeNotebook({
  i18n,
  groups,
  groupName,
  badgeName,
  badgeHint,
  earnedOn,
  featuredLabel,
}: BadgeNotebookProps) {
  return (
    <Scope i18n={i18n}>
      <div className="grid gap-8">
        {groups.map((group) => (
          <section
            key={group.group}
            aria-labelledby={`badge-group-${group.group}`}
            className="grid gap-4 rounded-lg border border-border bg-surface p-4 md:p-6"
          >
            <h3 id={`badge-group-${group.group}`} className="readout text-fg-muted">
              {groupName(group.group)}
            </h3>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.earned.map((badge) => (
                <li key={badge.key} className="grid content-start gap-1.5" data-badge={badge.key}>
                  <BadgeStamp name={badgeName(badge.key)} icon={badge.icon} count={badge.count} />
                  <p className="text-xs text-fg-muted">
                    {earnedOn(badge.lastAwardedAt)}
                    {badge.isFeatured ? (
                      <span className="ms-2 font-medium text-featured">· {featuredLabel}</span>
                    ) : null}
                  </p>
                  {badgeHint(badge.key) ? <p className="text-sm text-fg-muted">{badgeHint(badge.key)}</p> : null}
                </li>
              ))}
              {group.locked.map((badge) => (
                <li key={badge.key} className="grid content-start gap-1.5" data-badge={badge.key} data-locked="">
                  <BadgeStamp name={badgeName(badge.key)} icon={badge.icon} locked progress={badge.progress} />
                  {badgeHint(badge.key) ? <p className="text-sm text-fg-subtle">{badgeHint(badge.key)}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Scope>
  );
}

/** Featured badges strip (header of the Badges tab). */
export function FeaturedBadges({
  i18n,
  badges,
  badgeName,
  label,
}: {
  i18n: DomainI18n;
  badges: ReadonlyArray<{ key: string; icon: string }>;
  badgeName: (key: string) => string;
  label: string;
}) {
  if (badges.length === 0) return null;
  return (
    <Scope i18n={i18n}>
      <ul className="flex flex-wrap items-center gap-3" aria-label={label}>
        {badges.map((badge) => (
          <li key={badge.key}>
            <BadgeStamp name={badgeName(badge.key)} icon={badge.icon} size="sm" />
          </li>
        ))}
      </ul>
    </Scope>
  );
}

// -----------------------------------------------------------------------------------------------
// Achievements catalog
// -----------------------------------------------------------------------------------------------

export interface CatalogStampProps {
  i18n: DomainI18n;
  name: string;
  icon: string;
  locked?: boolean;
}

/** A single stamp (achievements page: the catalog shows every badge as earned ink). */
export function CatalogStamp({ i18n, name, icon, locked = false }: CatalogStampProps) {
  return (
    <Scope i18n={i18n}>
      <BadgeStamp name={name} icon={icon} locked={locked} />
    </Scope>
  );
}

export function RankStampBlock({ i18n, rank }: { i18n: DomainI18n; rank: SurvivorRankKey }) {
  return (
    <Scope i18n={i18n}>
      <RankStamp rank={rank} size="sm" />
    </Scope>
  );
}

export function TierStampBlock({ i18n, tier }: { i18n: DomainI18n; tier: CreatorTierKey }) {
  return (
    <Scope i18n={i18n}>
      <TierStamp tier={tier} size="sm" />
    </Scope>
  );
}

// -----------------------------------------------------------------------------------------------
// Creators directory
// -----------------------------------------------------------------------------------------------

export interface CreatorFollowLabels {
  /** Sign-in page (the no-JS and guest fallback of the follow button). */
  loginAction: string;
  /** `next` of the sign-in page (this page). */
  next: string;
  follow: string;
  /** «Follow {name}» for the accessible name. */
  followName: (name: string) => string;
}

/** Follow control of a creator card: a GET form to sign-in that `profile-page.ts` upgrades. */
function CreatorFollow({ creator, labels }: { creator: CreatorCardDTO; labels: CreatorFollowLabels }) {
  const name = creator.user.displayName || creator.user.handle;
  return (
    <form method="get" action={labels.loginAction} className="contents">
      <input type="hidden" name="next" value={labels.next} />
      <button
        type="submit"
        aria-pressed="false"
        data-follow-user={creator.user.handle}
        data-follow-user-id={creator.user.id}
        aria-label={labels.followName(name)}
        className={buttonClasses({
          variant: 'secondary',
          size: 'sm',
          className: 'group/follow max-md:h-11 aria-pressed:border-primary/60 aria-pressed:text-primary',
        })}
      >
        <Icon icon={UserPlus} size={16} className="group-aria-pressed/follow:hidden" />
        <Icon icon={UserCheck} size={16} className="hidden group-aria-pressed/follow:inline" />
        <span data-follow-label>{labels.follow}</span>
      </button>
    </form>
  );
}

export interface CreatorGridProps {
  i18n: DomainI18n;
  creators: readonly CreatorCardDTO[];
  label: string;
  follow: CreatorFollowLabels;
  /** The first cards are above the fold. */
  headingLevel?: 2 | 3;
}

export function CreatorGrid({ i18n, creators, label, follow, headingLevel = 2 }: CreatorGridProps) {
  return (
    <Scope i18n={i18n}>
      <ul
        className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 2xl:grid-cols-4"
        aria-label={label}
      >
        {creators.map((creator) => (
          <li key={creator.user.id} className="min-w-0">
            <CreatorCard
              creator={creator}
              headingLevel={headingLevel}
              action={<CreatorFollow creator={creator} labels={follow} />}
              className="h-full"
            />
          </li>
        ))}
      </ul>
    </Scope>
  );
}
