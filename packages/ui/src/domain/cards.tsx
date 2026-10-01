/**
 * BuildCard, KitCard and CreatorCard (research/03 §5.2). Same card rules as `ModCard`: the
 * title link covers the card, other controls sit above it, hover lifts 2 px.
 *
 * - `BuildCard`: blueprint frame (grid texture + corner marks) with a dimension line («cota»)
 *   giving the number of pieces, and the BuildShare version.
 * - `KitCard`: «knolling» — up to 6 mod thumbnails laid out on a dashed mat with slight
 *   rotations — or the kit's own cover; name, curator, «12 mods · 48 MB» and compatibility.
 * - `CreatorCard`: the survivor's generative terrain banner, avatar, name + tier stamp, stats and
 *   a follow slot.
 */
import { EyeOff, Link2, Lock } from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';
import { Avatar } from '../avatar.tsx';
import { Badge } from '../badge.tsx';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import { CompatBadge } from './compat.tsx';
import type { CompatStatus, CreatorCardDTO, KitCardDTO, ModCardDTO } from './contracts.ts';
import { formatBytes, formatCompact, formatCount, SLOT, useDomainI18n, useProfileHref, withSlot } from './i18n.ts';
import { displayName, OriginalName } from './mod-card.tsx';
import { CardLink, Cover, cardClasses, cardControlClasses, generativeBannerUri, Placeholder } from './shared.tsx';
import { TierStamp, TrustedMark } from './stamps.tsx';

type HeadingLevel = 2 | 3 | 4;

function AuthorLink({ handle, name }: { handle: string; name: string }) {
  const profileHref = useProfileHref();
  return (
    <a
      key="author"
      href={profileHref(handle)}
      className={cn(cardControlClasses, 'rounded-xs text-fg hover:text-primary hover:underline')}
    >
      {name}
    </a>
  );
}

// -------------------------------------------------------------------------------------------
// BuildCard
// -------------------------------------------------------------------------------------------

export interface BuildCardProps {
  /** A `ModCardDTO` of kind `build`. */
  build: ModCardDTO;
  /** Pieces in the blueprint (`NumberOfElements`); omit when unknown. */
  pieces?: number | null;
  /** BuildShare version the blueprint was saved with. */
  buildShareVersion?: string | null;
  headingLevel?: HeadingLevel;
  action?: ReactNode;
  priority?: boolean;
  /** Below 260 px of its own width, tighten the frame and the text (two-column mobile grids). */
  tight?: boolean;
  className?: string;
}

/** Corner marks of the plan frame. */
function CornerMarks() {
  const corner = 'absolute size-3 border-blueprint';
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-1.5">
      <span className={cn(corner, 'start-0 top-0 border-s-2 border-t-2')} />
      <span className={cn(corner, 'end-0 top-0 border-e-2 border-t-2')} />
      <span className={cn(corner, 'start-0 bottom-0 border-s-2 border-b-2')} />
      <span className={cn(corner, 'end-0 bottom-0 border-e-2 border-b-2')} />
    </span>
  );
}

/** Dimension line: |←— 1,248 pieces —→| in blueprint ink. */
function DimensionLine({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-2 font-mono text-2xs text-blueprint">
      <span aria-hidden="true" className="flex flex-1 items-center">
        <span className="h-2.5 w-px bg-current" />
        <span className="h-px flex-1 bg-current" />
      </span>
      <span className="shrink-0 tabular-nums">{children}</span>
      <span aria-hidden="true" className="flex flex-1 items-center">
        <span className="h-px flex-1 bg-current" />
        <span className="h-2.5 w-px bg-current" />
      </span>
    </span>
  );
}

export function BuildCard({
  build,
  pieces,
  buildShareVersion,
  headingLevel = 3,
  action,
  priority,
  tight = false,
  className,
}: BuildCardProps) {
  const { t, locale } = useDomainI18n();
  const Heading = `h${headingLevel}` as const;
  const display = formatCompact(locale, build.downloads);
  return (
    <article
      data-variant="build"
      data-mod-id={build.id}
      className={tight ? cn('@container/build', className) : className}
    >
      <div
        className={cn(
          cardClasses,
          'flex h-full flex-col gap-3 p-3',
          tight && '@max-[260px]/build:gap-2 @max-[260px]/build:p-1.5',
        )}
      >
        <div
          className={cn(
            'texture-blueprint relative rounded-md border border-blueprint/40 p-3',
            tight && '@max-[260px]/build:p-1.5',
          )}
        >
          {tight ? (
            <span className="@max-[260px]/build:hidden">
              <CornerMarks />
            </span>
          ) : (
            <CornerMarks />
          )}
          <div className="aspect-cover overflow-hidden rounded-xs bg-raised">
            <Cover
              image={build.thumbnail}
              seed={build.slug}
              name={displayName(build)}
              category={build.category}
              sizes={
                tight
                  ? '(min-width: 80rem) 20rem, (min-width: 64rem) 16rem, (min-width: 40rem) 33vw, 50vw'
                  : '(min-width: 80rem) 20rem, (min-width: 48rem) 33vw, 100vw'
              }
              priority={priority}
              className="transition-transform duration-(--dur-slow) ease-out motion-safe:group-hover/card:scale-[1.03]"
            />
          </div>
          {typeof pieces === 'number' ? (
            <div className={cn('mt-2', tight && '@max-[260px]/build:hidden')}>
              <DimensionLine>{t('ui_domain_build_pieces', { count: pieces })}</DimensionLine>
            </div>
          ) : null}
        </div>
        {action ? <div className={cn('absolute z-10 end-5 top-5')}>{action}</div> : null}
        <div
          className={cn(
            'flex min-w-0 flex-1 flex-col gap-1 px-1',
            tight && '@max-[260px]/build:px-0.5 @max-[260px]/build:pb-1',
          )}
        >
          <Heading
            className={cn(
              'truncate text-base font-semibold',
              tight &&
                '@max-[260px]/build:line-clamp-2 @max-[260px]/build:text-sm @max-[260px]/build:leading-snug @max-[260px]/build:whitespace-normal @max-[260px]/build:text-pretty',
            )}
          >
            <CardLink href={build.canonicalPath}>{displayName(build)}</CardLink>
          </Heading>
          <OriginalName card={build} className={cn(tight && '@max-[260px]/build:hidden')} />
          <p
            className={cn(
              'flex min-w-0 items-center gap-1 truncate text-xs text-fg-muted',
              tight && '@max-[260px]/build:text-2xs',
            )}
          >
            <span className="truncate">
              {withSlot(
                t('ui_domain_by_author', { author: SLOT }),
                <AuthorLink handle={build.userHandle} name={build.userDisplayName} />,
              )}
            </span>
            {build.verifiedCreator ? <TrustedMark size={14} className={cardControlClasses} /> : null}
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs text-fg-muted">
            <span className="tabular-nums" title={formatCount(locale, build.downloads)}>
              {t('ui_domain_downloads_count', { count: build.downloads, display })}
            </span>
            {buildShareVersion ? (
              <Badge variant="blueprint" size="sm">
                {t('ui_domain_build_buildshare', { version: buildShareVersion })}
              </Badge>
            ) : null}
            {build.isFeatured ? (
              <Badge variant="featured" size="sm">
                {t('ui_domain_badge_featured')}
              </Badge>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

// -------------------------------------------------------------------------------------------
// KitCard
// -------------------------------------------------------------------------------------------

/** Deterministic knolling rotations (degrees) for the 6 slots. */
const KNOLL_ROTATION = [-2, 1.5, -1, 2, -1.5, 1] as const;

export interface KitCardProps {
  kit: KitCardDTO;
  /** Total download size of the kit's latest versions, in bytes. */
  totalSize?: number | null;
  /** Worst compatibility status among the kit's mods on the current build. */
  compat?: CompatStatus | null;
  currentBuild?: string | null;
  headingLevel?: HeadingLevel;
  action?: ReactNode;
  className?: string;
}

function Knolling({ kit }: { kit: KitCardDTO }) {
  const slots = kit.previewThumbnails.slice(0, 6);
  return (
    <div
      aria-hidden="true"
      className="grid aspect-cover grid-cols-3 grid-rows-2 place-items-center gap-3 rounded-md border border-dashed border-border-strong bg-sunken p-4"
    >
      {Array.from({ length: 6 }, (_, index) => {
        const src = slots[index];
        const style: CSSProperties = { rotate: `${KNOLL_ROTATION[index]}deg` };
        return (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: fixed knolling slots
            key={index}
            style={style}
            className={cn(
              'block aspect-square w-full max-w-16 overflow-hidden rounded-sm',
              src ? 'bg-raised shadow-sm' : 'border border-dashed border-border',
            )}
          >
            {src ? (
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                width={96}
                height={96}
                className="size-full object-cover"
              />
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

export function KitCard({ kit, totalSize, compat, currentBuild, headingLevel = 3, action, className }: KitCardProps) {
  const { t, locale } = useDomainI18n();
  const Heading = `h${headingLevel}` as const;
  const facts = [t('ui_domain_kit_mods', { count: kit.itemsCount })];
  if (typeof totalSize === 'number') facts.push(formatBytes(locale, totalSize));
  return (
    <article data-variant="kit" data-kit-id={kit.id} className={className}>
      <div className={cn(cardClasses, 'flex h-full flex-col gap-3 p-3')}>
        {kit.cover ? (
          <div className="aspect-cover overflow-hidden rounded-md bg-raised">
            <Cover image={kit.cover} seed={kit.slug} name={kit.name} sizes="(min-width: 48rem) 33vw, 100vw" />
          </div>
        ) : (
          <Knolling kit={kit} />
        )}
        {action ? <div className={cn('absolute z-10 end-5 top-5')}>{action}</div> : null}
        <div className="flex min-w-0 flex-1 flex-col gap-1 px-1">
          <div className="flex min-w-0 items-center gap-2">
            <Heading className="truncate text-base font-semibold">
              <CardLink href={kit.canonicalPath}>{kit.name}</CardLink>
            </Heading>
            {kit.visibility !== 'public' ? (
              <Badge
                variant="outline-mono"
                size="sm"
                icon={<Icon icon={kit.visibility === 'private' ? Lock : EyeOff} size={12} />}
              >
                {t(kit.visibility === 'private' ? 'ui_domain_visibility_private' : 'ui_domain_visibility_unlisted')}
              </Badge>
            ) : null}
          </div>
          <p className="truncate text-xs text-fg-muted">
            {withSlot(
              t('ui_domain_curated_by', { author: SLOT }),
              <AuthorLink handle={kit.owner.handle} name={kit.owner.displayName} />,
            )}
          </p>
          <p className="text-xs text-fg-muted tabular-nums">{facts.join(' · ')}</p>
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
            {kit.isStaffPick ? (
              <Badge variant="featured" size="sm">
                {t('ui_domain_award_staff_pick')}
              </Badge>
            ) : null}
            {compat ? <CompatBadge status={compat} build={currentBuild} short size="sm" /> : null}
            <span className="ms-auto inline-flex items-center gap-1 font-mono text-2xs text-fg-subtle">
              <Icon icon={Link2} size={12} />
              {kit.code}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

// -------------------------------------------------------------------------------------------
// CreatorCard
// -------------------------------------------------------------------------------------------

export interface CreatorCardProps {
  creator: CreatorCardDTO;
  /** Follow button slot (above the card link). */
  action?: ReactNode;
  headingLevel?: HeadingLevel;
  /** Field-kit icon rendering of the tier stamp. */
  iconMode?: 'sprite' | 'inline';
  className?: string;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-w-0 flex-col">
      <dt className="readout truncate">{label}</dt>
      <dd className="font-display-caps text-xl leading-tight tabular-nums text-fg @max-[23rem]/creator:text-base">
        {value}
      </dd>
    </div>
  );
}

/**
 * Below 23 rem of its own width (a phone's single column) the card becomes a row: avatar, name,
 * handle and the three stats, with the follow slot at the end, and drops the banner and top mod.
 */
export function CreatorCard({ creator, action, headingLevel = 3, iconMode, className }: CreatorCardProps) {
  const { t, locale } = useDomainI18n();
  const profileHref = useProfileHref();
  const Heading = `h${headingLevel}` as const;
  const { user } = creator;
  return (
    <article data-variant="creator" data-user-id={user.id} className={cn('@container/creator', className)}>
      <div className={cn(cardClasses, 'flex h-full flex-col overflow-hidden')}>
        <div className="aspect-banner overflow-hidden bg-raised @max-[23rem]/creator:hidden">
          <img
            src={generativeBannerUri(user.id)}
            alt=""
            width={640}
            height={160}
            className="block size-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 px-4 pb-4 @max-[23rem]/creator:grid @max-[23rem]/creator:flex-none @max-[23rem]/creator:grid-cols-[auto_minmax(0,1fr)_auto] @max-[23rem]/creator:gap-x-3 @max-[23rem]/creator:gap-y-1.5 @max-[23rem]/creator:p-3">
          <div className="-mt-8 flex items-end justify-between gap-2 @max-[23rem]/creator:contents">
            <Avatar
              name={user.displayName}
              id={user.id}
              src={user.avatarUrl}
              size={64}
              className="rounded-full ring-4 ring-surface @max-[23rem]/creator:col-start-1 @max-[23rem]/creator:row-span-2 @max-[23rem]/creator:row-start-1 @max-[23rem]/creator:self-center @max-[23rem]/creator:ring-0"
            />
            {action ? (
              <div
                className={cn(
                  cardControlClasses,
                  '@max-[23rem]/creator:col-start-3 @max-[23rem]/creator:row-span-2 @max-[23rem]/creator:row-start-1 @max-[23rem]/creator:self-center',
                )}
              >
                {action}
              </div>
            ) : null}
          </div>
          <div className="flex min-w-0 flex-col gap-1.5 @max-[23rem]/creator:col-start-2 @max-[23rem]/creator:row-start-1 @max-[23rem]/creator:gap-0.5">
            <div className="flex min-w-0 items-center gap-1.5">
              <Heading className="truncate text-base font-semibold">
                <CardLink href={profileHref(user.handle)}>{user.displayName}</CardLink>
              </Heading>
              {user.verifiedCreator ? <TrustedMark size={16} className={cardControlClasses} /> : null}
            </div>
            <p className="truncate font-mono text-2xs text-fg-subtle">@{user.handle}</p>
            {user.creatorTier ? (
              <TierStamp
                tier={user.creatorTier}
                size="sm"
                iconMode={iconMode}
                className="self-start @max-[23rem]/creator:hidden"
              />
            ) : null}
          </div>
          <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-border pt-3 @max-[23rem]/creator:col-start-2 @max-[23rem]/creator:row-start-2 @max-[23rem]/creator:mt-0 @max-[23rem]/creator:border-t-0 @max-[23rem]/creator:pt-0">
            <Stat
              label={t('ui_domain_stat_mods')}
              value={formatCount(locale, creator.modsCount + creator.buildsCount)}
            />
            <Stat label={t('ui_domain_stat_downloads')} value={formatCompact(locale, creator.downloadsTotal)} />
            <Stat label={t('ui_domain_stat_followers')} value={formatCompact(locale, creator.followersCount)} />
          </dl>
          {creator.topMod ? (
            <p className="truncate text-xs text-fg-muted @max-[23rem]/creator:hidden">
              {withSlot(
                t('ui_domain_creator_top_mod', { mod: SLOT }),
                <a
                  key="top"
                  href={creator.topMod.canonicalPath}
                  className={cn(cardControlClasses, 'rounded-xs text-fg hover:text-primary hover:underline')}
                >
                  {creator.topMod.name}
                </a>,
              )}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

// -------------------------------------------------------------------------------------------
// Skeletons
// -------------------------------------------------------------------------------------------

export function KitCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('flex flex-col gap-3 rounded-lg border border-border bg-surface p-3', className)}
    >
      <Placeholder className="aspect-cover h-auto w-full rounded-md" />
      <span className="flex flex-col gap-2 px-1">
        <Placeholder className="h-4 w-3/5" />
        <Placeholder className="h-3 w-2/5" />
        <Placeholder className="h-3 w-1/3" />
      </span>
    </div>
  );
}

export const BuildCardSkeleton = KitCardSkeleton;

export function CreatorCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('flex flex-col overflow-hidden rounded-lg border border-border bg-surface', className)}
    >
      <Placeholder className="aspect-banner h-auto w-full rounded-none" />
      <span className="flex flex-col gap-3 px-4 pb-4">
        <Placeholder className="-mt-8 size-16 rounded-full" />
        <Placeholder className="h-4 w-1/2" />
        <Placeholder className="h-3 w-1/3" />
        <Placeholder className="h-10 w-full" />
      </span>
    </div>
  );
}
