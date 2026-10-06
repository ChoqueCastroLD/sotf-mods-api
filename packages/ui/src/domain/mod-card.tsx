/**
 * ModCard (research/03 §5.2) in five variants, all rendered from a `ModCardDTO`:
 *
 * - `list` (the catalogue, `/` and `/mods`): a plain row separated by a hairline, like the old
 *   site's horizontal card but lighter: 16:9 thumbnail · name + latest version · short description ·
 *   author (avatar, name, «Trusted») · icon row (comments, followers, downloads, last update,
 *   category link). Below ~34 rem of its own width it becomes a compact row (thumbnail, name,
 *   author, downloads). Its texts come from the `labels` prop (the page's `explore` namespace).
 * - `grid` (default): 16:9 cover (lazy) · up to 2 badges top-left · an action slot top-right
 *   (favourite) · title (1 line) · author + category · description (2 lines) · downloads,
 *   rating, version and compatibility. The card is container-query aware: below 260 px of
 *   its own width it becomes the `compact` layout (40 px thumbnail · title · downloads).
 * - `row`: 48 px icon · title + 1-line description · stat columns · direct download.
 * - `compact`: 40 px thumbnail · title · downloads (sidebars, «related», «required by»).
 * - `feature`: two columns, large cover + notched FEATURED tag + creator quote + call to action.
 *
 * The title is the card's link and covers the whole card (pseudo-element), so links never
 * nest; the author link and the action slot sit above it. The cover carries
 * `view-transition-name: mod-cover-{id}` so it morphs into the mod header (PLAN §3.7).
 */
import { ArrowRight, Clock, Download, MessageSquare, Star, Tag, Users } from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';
import { Badge } from '../badge.tsx';
import { buttonClasses } from '../button.tsx';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import type { ModCardDTO } from './contracts.ts';
import {
  type DomainMessageKey,
  formatCompact,
  formatCount,
  formatDate,
  formatRating,
  formatRelative,
  SLOT,
  useDomainI18n,
  useProfileHref,
  withSlot,
} from './i18n.ts';
import { CardLink, Cover, cardClasses, cardControlClasses, Placeholder } from './shared.tsx';
import { TrustedMark } from './stamps.tsx';

export const MOD_CARD_VARIANTS = ['grid', 'row', 'compact', 'feature', 'list'] as const;
export type ModCardVariant = (typeof MOD_CARD_VARIANTS)[number];

/** Width (px) of a grid card below which it switches to the compact layout. */
export const MOD_CARD_COMPACT_BELOW = 260;

/** Public stars need this many reviews (contracts `REVIEW_RULES.publicStarsMinReviews`). */
export const RATING_MIN_REVIEWS = 3;

/** «Updated» badge window. */
export const UPDATED_WINDOW_DAYS = 7;

export interface ModCardProps {
  mod: ModCardDTO;
  variant?: ModCardVariant;
  /** Heading level of the title. Default 3. */
  headingLevel?: 2 | 3 | 4;
  /** Slot above the link: the favourite toggle (grid, feature: top-right; row: end). */
  action?: ReactNode;
  /** Show the «New» badge (first published recently; decided by the caller). */
  isNew?: boolean;
  /**
   * Reference instant for the «Updated» badge (`lastReleasedAt` within 7 days). Omit to never
   * show it (cached HTML must not depend on the render time unless the caller decides so).
   */
  now?: string | number | Date;
  /** Kept for callers written before compatibility left the cards; ignored. */
  currentBuild?: string | null;
  /** Direct download (row). Default: the latest version's download route; `null` hides it. */
  downloadHref?: string | null;
  /** Feature: the creator's quote. */
  quote?: string | null;
  /** The page's LCP image (above the fold): eager + high priority. */
  priority?: boolean;
  /** Name the cover for cross-document view transitions. Default true (grid, feature). */
  viewTransition?: boolean;
  /**
   * Grid only: what the card becomes below 260 px of its own width. `row` (default) is the
   * 40 px thumbnail row of sidebars; `tile` keeps the cover (4:3) with a two-line title, the
   * author and the downloads, for two-column mobile grids.
   */
  narrow?: 'row' | 'tile';
  /** `list` only: the texts of the row (the web page builds them from its message catalogue). */
  labels?: ModCardListLabels;
  className?: string;
}

/** Texts of the `list` variant (the page's language; plain strings so the ui package stays catalogue-free). */
export interface ModCardListLabels {
  /** Badge of verified creators. */
  trusted: string;
  /** Badge of `pending` mods in the unapproved view. */
  pendingApproval: string;
  comments: (count: number) => string;
  followers: (count: number) => string;
  downloads: (count: number) => string;
  /** «Updated 3 days ago». */
  updated: (when: string) => string;
  /** Accessible name of the category link. */
  category: (name: string) => string;
}

const STATUS_KEY: Partial<Record<ModCardDTO['status'], DomainMessageKey>> = {
  pending: 'ui_domain_status_pending',
  unlisted: 'ui_domain_status_unlisted',
  archived: 'ui_domain_status_archived',
  rejected: 'ui_domain_status_rejected',
  removed: 'ui_domain_status_removed',
};

/** Default direct-download route of the latest version (`…/download/:version`, 302 to R2). */
export function modDownloadHref(mod: Pick<ModCardDTO, 'canonicalPath' | 'latestVersion'>): string | null {
  return mod.latestVersion ? `${mod.canonicalPath}/download/${encodeURIComponent(mod.latestVersion)}` : null;
}

function isRecent(iso: string, now: ModCardProps['now']): boolean {
  if (now === undefined) return false;
  const reference = now instanceof Date ? now.getTime() : typeof now === 'number' ? now : Date.parse(now);
  const age = reference - Date.parse(iso);
  return age >= 0 && age < UPDATED_WINDOW_DAYS * 86_400_000;
}

function useBadges(mod: ModCardDTO, isNew: boolean, now: ModCardProps['now']): ReactNode[] {
  const { t } = useDomainI18n();
  const badges: ReactNode[] = [];
  const status = STATUS_KEY[mod.status];
  if (status) {
    badges.push(
      <Badge
        key="status"
        variant={mod.status === 'rejected' || mod.status === 'removed' ? 'danger' : 'warning'}
        size="sm"
      >
        {t(status)}
      </Badge>,
    );
  }
  if (mod.nsfw) {
    badges.push(
      <Badge key="nsfw" variant="danger" size="sm">
        {t('ui_domain_badge_nsfw')}
      </Badge>,
    );
  }
  if (isNew) {
    badges.push(
      <Badge key="new" variant="signal" size="sm">
        {t('ui_domain_badge_new')}
      </Badge>,
    );
  } else if (isRecent(mod.lastReleasedAt, now)) {
    badges.push(
      <Badge key="updated" variant="signal" size="sm">
        {t('ui_domain_badge_updated')}
      </Badge>,
    );
  }
  return badges.slice(0, 2);
}

function Downloads({ value, className }: { value: number; className?: string }) {
  const { t, locale } = useDomainI18n();
  const display = formatCompact(locale, value);
  return (
    <span className={cn('inline-flex items-center gap-1 tabular-nums', className)} title={formatCount(locale, value)}>
      <Icon icon={Download} size={14} className="text-fg-subtle" />
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{t('ui_domain_downloads_count', { count: value, display })}</span>
    </span>
  );
}

function Rating({ mod, className }: { mod: ModCardDTO; className?: string }) {
  const { t, locale } = useDomainI18n();
  if (mod.ratingAvg === null || mod.ratingCount < RATING_MIN_REVIEWS) return null;
  const rating = formatRating(locale, mod.ratingAvg);
  return (
    <span className={cn('inline-flex items-center gap-1 tabular-nums', className)}>
      <Icon icon={Star} size={14} className="fill-current text-featured" />
      <span aria-hidden="true">{rating}</span>
      <span className="sr-only">{t('ui_domain_rating_summary', { rating, count: mod.ratingCount })}</span>
    </span>
  );
}

/** The name to show: the visitor's translation when the web attached one, else the original. */
export function displayName(card: { name: string; localized?: { name: string | null } | undefined }): string {
  return card.localized?.name || card.name;
}

/** The short description to show (translated when available). */
export function displayShortDescription(card: {
  shortDescription: string;
  localized?: { shortDescription: string | null } | undefined;
}): string {
  return card.localized?.shortDescription || card.shortDescription;
}

/**
 * The original title, small and grey, under a translated one. Renders nothing when the card is not
 * translated (or the translation equals the original).
 */
export function OriginalName({
  card,
  className,
}: {
  card: { name: string; localized?: { name: string | null } | undefined };
  className?: string;
}) {
  const shown = displayName(card);
  if (shown === card.name) return null;
  return (
    <p translate="no" className={cn('truncate text-xs text-fg-subtle', className)} data-original-name="">
      {card.name}
    </p>
  );
}

function Byline({ mod, className, tile = false }: { mod: ModCardDTO; className?: string; tile?: boolean }) {
  const { t, taxonomy } = useDomainI18n();
  const profileHref = useProfileHref();
  const category = mod.category ? (taxonomy?.(mod.category.nameKey, mod.category.name) ?? mod.category.name) : null;
  return (
    <p className={cn('flex min-w-0 items-center gap-1 text-xs text-fg-muted', className)}>
      <span className="truncate">
        {withSlot(
          t('ui_domain_by_author', { author: SLOT }),
          <a
            key="author"
            href={profileHref(mod.userHandle)}
            className={cn(cardControlClasses, 'rounded-xs text-fg hover:text-primary hover:underline')}
          >
            {mod.userDisplayName}
          </a>,
        )}
      </span>
      {mod.verifiedCreator ? <TrustedMark size={14} className={cardControlClasses} /> : null}
      {category ? (
        <>
          <span aria-hidden="true" {...(tile ? { 'data-byline-extra': '' } : {})}>
            ·
          </span>
          <span className="truncate" {...(tile ? { 'data-byline-extra': '' } : {})}>
            {category}
          </span>
        </>
      ) : null}
    </p>
  );
}

function coverStyle(mod: ModCardDTO, enabled: boolean): CSSProperties | undefined {
  return enabled ? { viewTransitionName: `mod-cover-${mod.id}` } : undefined;
}

// Container-query classes of the grid card (literal strings so Tailwind generates them).
const CQ = {
  card: '@max-[260px]/card:flex-row @max-[260px]/card:items-center @max-[260px]/card:gap-3 @max-[260px]/card:p-2',
  cover:
    '@max-[260px]/card:aspect-square @max-[260px]/card:size-10 @max-[260px]/card:shrink-0 @max-[260px]/card:rounded-sm',
  body: '@max-[260px]/card:gap-0 @max-[260px]/card:p-0',
  hide: '@max-[260px]/card:hidden',
  footer: '@max-[260px]/card:pt-0',
} as const;

/** `narrow="tile"`: the same container query keeps the cover and tightens the text. */
const CQ_TILE = {
  card: '',
  cover: '@max-[260px]/card:aspect-[4/3]',
  body: '@max-[260px]/card:gap-1 @max-[260px]/card:p-2.5',
  hide: '@max-[260px]/card:hidden',
  footer: '@max-[260px]/card:pt-1',
} as const;

function GridCard(props: ModCardProps & { Heading: 'h2' | 'h3' | 'h4' }) {
  const {
    mod,
    action,
    isNew = false,
    now,
    priority,
    viewTransition = true,
    narrow = 'row',
    className,
    Heading,
  } = props;
  const { t } = useDomainI18n();
  const badges = useBadges(mod, isNew, now);
  const tile = narrow === 'tile';
  const CQ_ = tile ? CQ_TILE : CQ;
  return (
    <article data-variant="grid" data-mod-id={mod.id} className={cn('@container/card', className)}>
      <div className={cn(cardClasses, 'flex h-full flex-col overflow-hidden', CQ_.card)}>
        <div
          className={cn('relative aspect-cover overflow-hidden rounded-t-[inherit] bg-raised', CQ_.cover)}
          style={coverStyle(mod, viewTransition)}
        >
          <Cover
            image={mod.thumbnail}
            seed={mod.slug}
            name={displayName(mod)}
            category={mod.category}
            sizes={
              tile
                ? '(min-width: 80rem) 20rem, (min-width: 64rem) 16rem, (min-width: 40rem) 33vw, 50vw'
                : '(min-width: 80rem) 20rem, (min-width: 48rem) 33vw, 100vw'
            }
            priority={priority}
            className="transition-transform duration-(--dur-slow) ease-out motion-safe:group-hover/card:scale-[1.03]"
          />
          {badges.length > 0 ? (
            <div
              className={cn(
                'pointer-events-none absolute start-2 top-2 flex max-w-[calc(100%-3.5rem)] gap-1',
                tile
                  ? '@max-[260px]/card:start-1.5 @max-[260px]/card:top-1.5 @max-[260px]/card:[&>*:nth-child(n+2)]:hidden'
                  : CQ.hide,
              )}
            >
              {badges}
            </div>
          ) : null}
        </div>
        {action ? (
          <div
            className={cn(
              'absolute z-10 end-2 top-2',
              tile ? '@max-[260px]/card:end-1 @max-[260px]/card:top-1' : CQ.hide,
            )}
          >
            {action}
          </div>
        ) : null}
        <div className={cn('flex min-w-0 flex-1 flex-col gap-1.5 p-4', CQ_.body)}>
          <Heading
            className={cn(
              'truncate text-base font-semibold',
              tile &&
                '@max-[260px]/card:[&>a]:line-clamp-2 @max-[260px]/card:[&>a]:block @max-[260px]/card:[&>a]:min-h-6 @max-[260px]/card:text-sm @max-[260px]/card:leading-snug @max-[260px]/card:whitespace-normal @max-[260px]/card:text-pretty',
            )}
          >
            <CardLink href={mod.canonicalPath}>{displayName(mod)}</CardLink>
          </Heading>
          <OriginalName card={mod} className={CQ.hide} />
          <Byline
            tile={tile}
            mod={mod}
            className={tile ? '@max-[260px]/card:text-2xs @max-[260px]/card:[&_[data-byline-extra]]:hidden' : CQ.hide}
          />
          <p className={cn('line-clamp-2 text-sm text-fg-muted', CQ.hide)}>{displayShortDescription(mod)}</p>
          <div
            className={cn('mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-xs text-fg-muted', CQ_.footer)}
          >
            <Downloads value={mod.downloads} />
            <Rating mod={mod} className={tile ? undefined : CQ.hide} />
            {mod.latestVersion ? (
              <span className={cn('font-mono text-2xs', CQ.hide)}>
                {t('ui_domain_version_label', { version: mod.latestVersion })}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function RowCard(props: ModCardProps & { Heading: 'h2' | 'h3' | 'h4' }) {
  const { mod, action, isNew = false, now, className, Heading } = props;
  const { t } = useDomainI18n();
  const badges = useBadges(mod, isNew, now);
  const download = props.downloadHref === undefined ? modDownloadHref(mod) : props.downloadHref;
  return (
    <article data-variant="row" data-mod-id={mod.id} className={cn('@container/row', className)}>
      <div className={cn(cardClasses, 'flex items-center gap-3 p-3 @min-[36rem]/row:gap-4')}>
        <div className="size-12 shrink-0 overflow-hidden rounded-md bg-raised">
          <Cover image={mod.thumbnail} seed={mod.slug} name={displayName(mod)} category={mod.category} sizes="48px" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <div className="flex min-w-0 items-center gap-2">
            <Heading className="truncate text-sm font-semibold">
              <CardLink href={mod.canonicalPath}>{displayName(mod)}</CardLink>
            </Heading>
            {badges.length > 0 ? <span className="hidden gap-1 @min-[28rem]/row:flex">{badges}</span> : null}
          </div>
          <OriginalName card={mod} className="text-2xs" />
          <p className="line-clamp-1 text-xs text-fg-muted">{displayShortDescription(mod)}</p>
          <Byline mod={mod} className="@min-[36rem]/row:hidden" />
        </div>
        <div className="hidden shrink-0 items-center gap-5 text-xs text-fg-muted @min-[36rem]/row:flex">
          <Downloads value={mod.downloads} className="w-16" />
          <Rating mod={mod} className="w-10" />
          {mod.latestVersion ? (
            <span className="w-16 truncate font-mono text-2xs">
              {t('ui_domain_version_label', { version: mod.latestVersion })}
            </span>
          ) : null}
        </div>
        {download ? (
          <a
            href={download}
            rel="nofollow"
            className={buttonClasses({ variant: 'secondary', size: 'sm', className: cardControlClasses })}
          >
            <Icon icon={Download} size={16} />
            <span className="hidden @min-[28rem]/row:inline">{t('ui_domain_download')}</span>
            <span className="sr-only">{displayName(mod)}</span>
          </a>
        ) : null}
        {action ? <div className={cardControlClasses}>{action}</div> : null}
      </div>
    </article>
  );
}

function CompactCard(props: ModCardProps & { Heading: 'h2' | 'h3' | 'h4' }) {
  const { mod, className, Heading } = props;
  return (
    <article data-variant="compact" data-mod-id={mod.id} className={className}>
      <div className={cn(cardClasses, 'flex items-center gap-3 p-2')}>
        <div className="size-10 shrink-0 overflow-hidden rounded-sm bg-raised">
          <Cover image={mod.thumbnail} seed={mod.slug} name={displayName(mod)} category={mod.category} sizes="40px" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <Heading className="truncate text-sm font-semibold">
            <CardLink href={mod.canonicalPath}>{displayName(mod)}</CardLink>
          </Heading>
          <OriginalName card={mod} className="text-2xs" />
          <Downloads value={mod.downloads} className="text-xs text-fg-muted" />
        </div>
      </div>
    </article>
  );
}

function FeatureCard(props: ModCardProps & { Heading: 'h2' | 'h3' | 'h4' }) {
  const { mod, action, quote, priority, viewTransition = true, className, Heading } = props;
  const { t } = useDomainI18n();
  return (
    <article data-variant="feature" data-mod-id={mod.id} className={cn('@container/feature', className)}>
      <div className={cn(cardClasses, 'grid overflow-hidden @min-[40rem]/feature:grid-cols-2')}>
        <div className="relative aspect-cover overflow-hidden bg-raised" style={coverStyle(mod, viewTransition)}>
          <Cover
            image={mod.thumbnail}
            seed={mod.slug}
            name={displayName(mod)}
            category={mod.category}
            sizes="(min-width: 64rem) 40rem, 100vw"
            priority={priority}
            className="transition-transform duration-(--dur-slow) ease-out motion-safe:group-hover/card:scale-[1.03]"
          />
        </div>
        {action ? <div className={cn('absolute z-10 end-3 top-3')}>{action}</div> : null}
        <div className="flex min-w-0 flex-col gap-3 p-5 @min-[40rem]/feature:p-8">
          <Badge variant="featured" className="self-start">
            {t('ui_domain_badge_featured')}
          </Badge>
          <Heading className="font-display-caps text-display-sm text-balance">
            <CardLink href={mod.canonicalPath}>{displayName(mod)}</CardLink>
          </Heading>
          <OriginalName card={mod} className="-mt-2 text-sm" />
          <Byline mod={mod} />
          {quote ? (
            <blockquote className="border-s-2 border-primary ps-3 text-base text-fg">
              <p className="line-clamp-4">“{quote}”</p>
            </blockquote>
          ) : (
            <p className="line-clamp-3 text-sm text-fg-muted">{displayShortDescription(mod)}</p>
          )}
          <div className="flex flex-wrap items-center gap-3 text-xs text-fg-muted">
            <Downloads value={mod.downloads} />
            <Rating mod={mod} />
          </div>
          <span
            aria-hidden="true"
            className={buttonClasses({ variant: 'primary', size: 'md', className: 'mt-2 self-start' })}
          >
            {t('ui_domain_feature_cta')}
            <Icon icon={ArrowRight} size={16} />
          </span>
        </div>
      </div>
    </article>
  );
}

/** Small pill of the catalogue row: «Trusted» (old site's `badge-primary`, softer). */
function TrustedPill({ label }: { label: string }) {
  return (
    <span className="inline-flex h-4.5 shrink-0 items-center rounded-full border border-primary/40 bg-primary/12 px-1.5 text-2xs leading-none font-semibold text-fg">
      {label}
    </span>
  );
}

function Avatar({ mod }: { mod: ModCardDTO }) {
  if (mod.userAvatarUrl) {
    return (
      <img
        src={mod.userAvatarUrl}
        alt=""
        width={20}
        height={20}
        loading="lazy"
        decoding="async"
        className="size-5 shrink-0 rounded-full bg-raised object-cover"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-raised text-[0.625rem] font-semibold text-fg-muted uppercase"
    >
      {Array.from(mod.userDisplayName.trim())[0] ?? '?'}
    </span>
  );
}

function ListStat({
  icon,
  value,
  label,
  className,
}: {
  icon: typeof Download;
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <span title={label} className={cn('inline-flex items-center gap-1 tabular-nums', className)}>
      <Icon icon={icon} size={14} className="text-fg-subtle" />
      <span aria-hidden="true">{value}</span>
      <span className="sr-only">{label}</span>
    </span>
  );
}

const PLAIN_LABELS: ModCardListLabels = {
  trusted: 'Trusted',
  pendingApproval: 'Pending approval',
  comments: (count) => `${count} comments`,
  followers: (count) => `${count} followers`,
  downloads: (count) => `${count} downloads`,
  updated: (when) => `Updated ${when}`,
  category: (name) => `Category: ${name}`,
};

function ListCard(props: ModCardProps & { Heading: 'h2' | 'h3' | 'h4' }) {
  const { mod, now, priority, viewTransition = true, labels = PLAIN_LABELS, action, className, Heading } = props;
  const { t, locale, taxonomy, href } = useDomainI18n();
  const profileHref = useProfileHref();
  const local = (path: string) => (href ? href(path) : path);
  const category = mod.category ? (taxonomy?.(mod.category.nameKey, mod.category.name) ?? mod.category.name) : null;
  const reference =
    now === undefined ? null : now instanceof Date ? now.getTime() : typeof now === 'number' ? now : Date.parse(now);
  const updated =
    reference === null ? formatDate(locale, mod.lastReleasedAt) : formatRelative(locale, mod.lastReleasedAt, reference);
  const pending = mod.status === 'pending';
  const comments = mod.commentsCount;
  return (
    <article
      data-variant="list"
      data-mod-id={mod.id}
      className={cn(
        '@container/list group/card relative isolate flex gap-3 rounded-lg px-2 py-3 transition-colors duration-(--dur-fast) hover:bg-fg/4 @min-[34rem]/list:gap-4 @min-[34rem]/list:px-3 @min-[34rem]/list:py-4',
        'has-[[data-card-link]:focus-visible]:outline-2 has-[[data-card-link]:focus-visible]:outline-offset-[-2px] has-[[data-card-link]:focus-visible]:outline-focus',
        className,
      )}
    >
      <div
        className="relative aspect-video w-24 shrink-0 self-start overflow-hidden rounded-md bg-raised @min-[34rem]/list:w-56 @min-[34rem]/list:self-center"
        style={coverStyle(mod, viewTransition)}
      >
        <Cover
          image={mod.thumbnail}
          seed={mod.slug}
          name={displayName(mod)}
          category={mod.category}
          sizes="(min-width: 34rem) 224px, 96px"
          priority={priority}
          className={cn(
            'transition-transform duration-(--dur-slow) ease-out motion-safe:group-hover/card:scale-[1.04]',
            mod.nsfw && 'scale-105 blur-md group-hover/card:blur-none',
          )}
        />
        {mod.nsfw ? (
          <Badge variant="danger" size="sm" className="absolute start-1.5 top-1.5">
            {t('ui_domain_badge_nsfw')}
          </Badge>
        ) : null}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1 @min-[34rem]/list:gap-2">
        <div className="flex min-w-0 items-baseline gap-2">
          <Heading className="min-w-0 truncate text-base font-bold @min-[34rem]/list:text-xl">
            <CardLink href={mod.canonicalPath}>{displayName(mod)}</CardLink>
          </Heading>
          {mod.latestVersion ? (
            <span className="shrink-0 font-mono text-xs text-fg-subtle">{mod.latestVersion}</span>
          ) : null}
          {pending ? (
            <Badge variant="warning" size="sm" className="shrink-0 self-center">
              {labels.pendingApproval}
            </Badge>
          ) : null}
          {action ? <span className={cn(cardControlClasses, 'ms-auto')}>{action}</span> : null}
        </div>
        <OriginalName card={mod} />
        <p className="line-clamp-2 hidden text-sm text-fg-muted @min-[34rem]/list:block">
          {displayShortDescription(mod)}
        </p>
        <div className="mt-auto flex min-w-0 flex-wrap items-center justify-between gap-x-4 gap-y-1.5 text-xs text-fg-muted">
          <a
            href={profileHref(mod.userHandle)}
            className={cn(cardControlClasses, 'inline-flex min-w-0 items-center gap-1.5 rounded-xs hover:text-fg')}
          >
            <Avatar mod={mod} />
            <span className="truncate text-sm text-fg @max-[34rem]/list:text-xs @max-[34rem]/list:text-fg-muted">
              {mod.userDisplayName}
            </span>
            {mod.verifiedCreator ? <TrustedPill label={labels.trusted} /> : null}
          </a>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {comments !== undefined ? (
              <ListStat
                icon={MessageSquare}
                value={formatCompact(locale, comments)}
                label={labels.comments(comments)}
                className="@max-[34rem]/list:hidden"
              />
            ) : null}
            <ListStat
              icon={Users}
              value={formatCompact(locale, mod.followers)}
              label={labels.followers(mod.followers)}
              className="@max-[34rem]/list:hidden"
            />
            <ListStat
              icon={Download}
              value={formatCompact(locale, mod.downloads)}
              label={labels.downloads(mod.downloads)}
            />
            <ListStat
              icon={Clock}
              value={updated}
              label={labels.updated(updated)}
              className="@max-[34rem]/list:hidden"
            />
            {category && mod.category ? (
              <a
                href={local(`/categories/${encodeURIComponent(mod.category.slug)}`)}
                title={labels.category(category)}
                className={cn(
                  cardControlClasses,
                  'inline-flex items-center gap-1 rounded-xs hover:text-fg hover:underline @max-[34rem]/list:hidden',
                )}
              >
                <Icon icon={Tag} size={14} className="text-fg-subtle" />
                <span>{category}</span>
                <span className="sr-only">{labels.category(category)}</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ModCard({ variant = 'grid', headingLevel = 3, ...props }: ModCardProps) {
  const Heading = `h${headingLevel}` as const;
  switch (variant) {
    case 'row':
      return <RowCard {...props} Heading={Heading} />;
    case 'compact':
      return <CompactCard {...props} Heading={Heading} />;
    case 'feature':
      return <FeatureCard {...props} Heading={Heading} />;
    case 'list':
      return <ListCard {...props} Heading={Heading} />;
    default:
      return <GridCard {...props} Heading={Heading} />;
  }
}

export interface ModCardSkeletonProps {
  variant?: ModCardVariant;
  /** Grid only: geometry of the card below 260 px (see `ModCardProps.narrow`). */
  narrow?: 'row' | 'tile';
  className?: string;
}

/** Placeholder with the geometry of each variant (wrap lists in `SkeletonGroup`). */
export function ModCardSkeleton({ variant = 'grid', narrow = 'row', className }: ModCardSkeletonProps) {
  const surface = 'rounded-lg border border-border bg-surface';
  if (variant === 'row') {
    return (
      <div aria-hidden="true" className={cn(surface, 'flex items-center gap-3 p-3', className)}>
        <Placeholder className="size-12 shrink-0 rounded-md" />
        <span className="flex flex-1 flex-col gap-2">
          <Placeholder className="h-4 w-2/5" />
          <Placeholder className="h-3 w-4/5" />
        </span>
        <Placeholder className="h-8 w-24 shrink-0 rounded-md" />
      </div>
    );
  }
  if (variant === 'list') {
    return (
      <div
        aria-hidden="true"
        className={cn(
          '@container/list flex gap-3 px-2 py-3 @min-[34rem]/list:gap-4 @min-[34rem]/list:px-3 @min-[34rem]/list:py-4',
          className,
        )}
      >
        <Placeholder className="aspect-video h-auto w-24 shrink-0 rounded-md @min-[34rem]/list:w-56" />
        <span className="flex flex-1 flex-col gap-2">
          <Placeholder className="h-5 w-2/5" />
          <Placeholder className="hidden h-3 w-4/5 @min-[34rem]/list:block" />
          <Placeholder className="hidden h-3 w-3/5 @min-[34rem]/list:block" />
          <Placeholder className="mt-auto h-4 w-1/3" />
        </span>
      </div>
    );
  }
  if (variant === 'compact') {
    return (
      <div aria-hidden="true" className={cn(surface, 'flex items-center gap-3 p-2', className)}>
        <Placeholder className="size-10 shrink-0 rounded-sm" />
        <span className="flex flex-1 flex-col gap-1.5">
          <Placeholder className="h-3.5 w-3/5" />
          <Placeholder className="h-3 w-1/4" />
        </span>
      </div>
    );
  }
  if (variant === 'feature') {
    return (
      <div aria-hidden="true" className={cn('@container/feature', className)}>
        <div className={cn(surface, 'grid overflow-hidden @min-[40rem]/feature:grid-cols-2')}>
          <Placeholder className="aspect-cover h-auto w-full rounded-none" />
          <span className="flex flex-col gap-3 p-5 @min-[40rem]/feature:p-8">
            <Placeholder className="h-6 w-24" />
            <Placeholder className="h-9 w-4/5" />
            <Placeholder className="h-3 w-2/5" />
            <Placeholder className="h-12 w-full" />
            <Placeholder className="h-10 w-36 rounded-md" />
          </span>
        </div>
      </div>
    );
  }
  const CQ_ = narrow === 'tile' ? CQ_TILE : CQ;
  return (
    <div aria-hidden="true" className={cn('@container/card', className)}>
      <div className={cn(surface, 'flex h-full flex-col overflow-hidden', CQ_.card)}>
        <Placeholder className={cn('aspect-cover h-auto w-full rounded-none', CQ_.cover)} />
        <span className={cn('flex flex-col gap-2 p-4', CQ_.body)}>
          <Placeholder className="h-4 w-3/5" />
          <Placeholder className={cn('h-3 w-2/5', narrow === 'tile' ? undefined : CQ.hide)} />
          <Placeholder className={cn('h-3 w-full', CQ.hide)} />
          <Placeholder className={cn('h-3 w-4/5', CQ.hide)} />
          <Placeholder className="mt-1 h-3 w-1/3" />
        </span>
      </div>
    </div>
  );
}
