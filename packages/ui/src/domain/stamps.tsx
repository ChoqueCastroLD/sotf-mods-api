/**
 * Identity marks (research/03 §5.3, PLAN §7.2): ink stamps rotated −4° with the rank or tier name.
 *
 * - `RankStamp`: Survivor rank (help XP). Ink: Flare.
 * - `TierStamp`: Creator tier (lifetime downloads) with its Field-kit icon. Spotlight tiers
 *   (Fortress, Landmark) use Solafite, reserved for the exceptional.
 * - `BadgeStamp`: a badge of the field notebook. Locked badges are dashed and muted, say
 *   «Locked» in text and may show their progress.
 * - `TrustedMark`: `badge-check` in Signal with an accessible name (and a native tooltip, so it
 *   works on non-hydrated pages).
 *
 * `animate` plays the `stamp` motion once (only on the unlock moment; reduced motion skips it).
 */
import { CREATOR_TIER_ICONS, type FieldKitIconName, isFieldKitIcon } from '@sotf/brand/field-kit';
import {
  Award,
  BadgeCheck,
  Binoculars,
  BookOpenCheck,
  Bug,
  Cross,
  HandHelping,
  Languages,
  LibraryBig,
  Lock,
  type LucideIcon,
  Map as MapIcon,
  Megaphone,
  MessageSquareQuote,
  MoonStar,
  PlaneLanding,
  Radar,
  ShieldCheck,
  Star,
  Trophy,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '../cn.ts';
import { FieldKitIcon, Icon } from '../icons.tsx';
import type { CreatorTierKey, SurvivorRankKey } from './contracts.ts';
import { type DomainMessageKey, formatCount, useDomainI18n } from './i18n.ts';

const RANK_KEY: Record<SurvivorRankKey, DomainMessageKey> = {
  castaway: 'ui_domain_rank_castaway',
  scavenger: 'ui_domain_rank_scavenger',
  forager: 'ui_domain_rank_forager',
  trapper: 'ui_domain_rank_trapper',
  builder: 'ui_domain_rank_builder',
  pathfinder: 'ui_domain_rank_pathfinder',
  veteran: 'ui_domain_rank_veteran',
  legend: 'ui_domain_rank_legend',
};

const TIER_KEY: Record<CreatorTierKey, DomainMessageKey> = {
  campfire: 'ui_domain_tier_campfire',
  'lean-to': 'ui_domain_tier_lean_to',
  cabin: 'ui_domain_tier_cabin',
  treehouse: 'ui_domain_tier_treehouse',
  fortress: 'ui_domain_tier_fortress',
  landmark: 'ui_domain_tier_landmark',
};

/** Tiers with the Solafite spotlight (PLAN §7.2). */
export const SPOTLIGHT_TIERS: ReadonlySet<CreatorTierKey> = new Set(['fortress', 'landmark']);

const STAMP_BASE =
  'inline-flex max-w-full items-center gap-1.5 rounded-sm border-2 font-display-caps tracking-wide whitespace-nowrap ' +
  '-rotate-4 select-none';

const STAMP_SIZE = { sm: 'h-6 px-1.5 text-xs', md: 'h-8 px-2 text-sm', lg: 'h-10 px-3 text-base' } as const;

export type StampSize = keyof typeof STAMP_SIZE;

function iconSize(size: StampSize): number {
  return size === 'sm' ? 14 : size === 'md' ? 16 : 20;
}

export interface RankStampProps {
  rank: SurvivorRankKey;
  size?: StampSize;
  animate?: boolean;
  className?: string;
}

export function RankStamp({ rank, size = 'md', animate = false, className }: RankStampProps) {
  const { t } = useDomainI18n();
  return (
    <span
      data-rank={rank}
      className={cn(
        STAMP_BASE,
        STAMP_SIZE[size],
        'border-primary/70 text-primary',
        animate && 'animate-stamp',
        className,
      )}
    >
      <span className="sr-only">{t('ui_domain_rank_label')}: </span>
      {t(RANK_KEY[rank])}
    </span>
  );
}

export interface TierStampProps {
  tier: CreatorTierKey;
  size?: StampSize;
  animate?: boolean;
  /** Field-kit icon rendering (`sprite` needs `/brand/field-kit.svg` on the page). */
  iconMode?: 'sprite' | 'inline';
  className?: string;
}

export function TierStamp({ tier, size = 'md', animate = false, iconMode = 'sprite', className }: TierStampProps) {
  const { t } = useDomainI18n();
  const spotlight = SPOTLIGHT_TIERS.has(tier);
  return (
    <span
      data-tier={tier}
      className={cn(
        STAMP_BASE,
        STAMP_SIZE[size],
        spotlight ? 'border-featured/80 text-featured' : 'border-border-strong text-fg-muted',
        animate && 'animate-stamp',
        className,
      )}
    >
      <FieldKitIcon name={CREATOR_TIER_ICONS[tier]} size={iconSize(size)} mode={iconMode} />
      <span className="sr-only">{t('ui_domain_tier_label')}: </span>
      {t(TIER_KEY[tier])}
    </span>
  );
}

/** Lucide icons of the badge catalogue (`BADGES[].icon` in contracts); Field-kit names pass through. */
const BADGE_LUCIDE: Readonly<Record<string, LucideIcon>> = {
  'plane-landing': PlaneLanding,
  'library-big': LibraryBig,
  'shield-check': ShieldCheck,
  star: Star,
  'book-open-check': BookOpenCheck,
  radar: Radar,
  cross: Cross,
  bug: Bug,
  'message-square-quote': MessageSquareQuote,
  megaphone: Megaphone,
  'hand-helping': HandHelping,
  map: MapIcon,
  trophy: Trophy,
  'badge-check': BadgeCheck,
  binoculars: Binoculars,
  languages: Languages,
  'moon-star': MoonStar,
};

function BadgeGlyph({ icon, size, iconMode }: { icon: string; size: number; iconMode: 'sprite' | 'inline' }) {
  if (isFieldKitIcon(icon)) return <FieldKitIcon name={icon as FieldKitIconName} size={size} mode={iconMode} />;
  return <Icon icon={BADGE_LUCIDE[icon] ?? Award} size={size} />;
}

export interface BadgeStampProps {
  /** Localised badge name (namespace `badges`: `badges_<key>_name`). */
  name: ReactNode;
  /** Icon of the badge catalogue (`BadgeDTO.icon`). */
  icon: string;
  /** Not earned yet: dashed, muted, «Locked». */
  locked?: boolean;
  /** Progress towards a locked badge. */
  progress?: { current: number; target: number } | null;
  /** Earned several times (repeatable badges). */
  count?: number;
  size?: StampSize;
  animate?: boolean;
  iconMode?: 'sprite' | 'inline';
  className?: string;
}

export function BadgeStamp({
  name,
  icon,
  locked = false,
  progress,
  count,
  size = 'md',
  animate = false,
  iconMode = 'sprite',
  className,
}: BadgeStampProps) {
  const { t, locale } = useDomainI18n();
  return (
    <span
      className={cn('inline-flex max-w-full flex-col items-start gap-1', className)}
      data-locked={locked || undefined}
    >
      <span
        className={cn(
          STAMP_BASE,
          STAMP_SIZE[size],
          locked ? 'border-dashed border-border-strong text-fg-subtle' : 'border-fg/70 text-fg',
          animate && !locked && 'animate-stamp',
        )}
      >
        {locked ? (
          <Icon icon={Lock} size={iconSize(size)} />
        ) : (
          <BadgeGlyph icon={icon} size={iconSize(size)} iconMode={iconMode} />
        )}
        <span className="truncate">{name}</span>
        {count && count > 1 ? (
          <span className="font-mono text-2xs tracking-normal">{t('ui_domain_badge_times', { count })}</span>
        ) : null}
        {locked ? <span className="sr-only">({t('ui_domain_badge_locked')})</span> : null}
      </span>
      {locked && progress ? (
        <span className="readout tabular-nums">
          {t('ui_domain_badge_progress', {
            current: formatCount(locale, progress.current),
            target: formatCount(locale, progress.target),
          })}
        </span>
      ) : null}
    </span>
  );
}

export interface TrustedMarkProps {
  /** Show the label next to the icon (profiles); icon only in cards and bylines. */
  withLabel?: boolean;
  size?: number;
  className?: string;
}

export function TrustedMark({ withLabel = false, size = 16, className }: TrustedMarkProps) {
  const { t } = useDomainI18n();
  const label = t('ui_domain_trusted_creator');
  if (withLabel) {
    return (
      <span className={cn('inline-flex items-center gap-1 text-xs font-medium text-signal', className)}>
        <Icon icon={BadgeCheck} size={size} />
        {label}
      </span>
    );
  }
  return (
    <span role="img" aria-label={label} title={label} className={cn('inline-flex shrink-0 text-signal', className)}>
      <Icon icon={BadgeCheck} size={size} />
    </span>
  );
}
