/**
 * BuildCard. Same card rules as `ModCard`: the title link covers the card, other controls sit
 * above it, hover lifts 2 px.
 *
 * - `BuildCard`: the build's picture with the number of pieces and the BuildShare version as plain text.
 */
import type { ReactNode } from 'react';
import { cn } from '../cn.ts';
import type { ModCardDTO } from './contracts.ts';
import { formatCompact, formatCount, SLOT, useDomainI18n, useProfileHref, withSlot } from './i18n.ts';
import { displayName, OriginalName } from './mod-card.tsx';
import { CardLink, Cover, cardClasses, cardControlClasses, Placeholder } from './shared.tsx';
import { TrustedMark } from './stamps.tsx';

type HeadingLevel = 2 | 3 | 4;

function AuthorLink({ handle, name, className }: { handle: string; name: string; className?: string }) {
  const profileHref = useProfileHref();
  return (
    <a
      key="author"
      href={profileHref(handle)}
      className={cn(cardControlClasses, 'rounded-xs text-fg hover:text-primary hover:underline', className)}
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
          'bp-card flex h-full flex-col overflow-hidden',
          tight && '@max-[260px]/build:text-xs',
        )}
      >
        <div className="bp-cover aspect-cover overflow-hidden bg-raised">
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
        {action ? <div className={cn('absolute z-10 end-2 top-2')}>{action}</div> : null}
        <div
          className={cn(
            'flex min-w-0 flex-1 flex-col gap-1 p-3',
            tight && '@max-[260px]/build:gap-0.5 @max-[260px]/build:p-2',
          )}
        >
          <Heading
            className={cn(
              'truncate text-base font-semibold',
              tight &&
                '@max-[260px]/build:[&>a]:line-clamp-2 @max-[260px]/build:[&>a]:block @max-[260px]/build:[&>a]:min-h-6 @max-[260px]/build:text-sm @max-[260px]/build:leading-snug @max-[260px]/build:whitespace-normal @max-[260px]/build:text-pretty',
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
            <span className="bp-mono tabular-nums" title={formatCount(locale, build.downloads)}>
              {t('ui_domain_downloads_count', { count: build.downloads, display })}
            </span>
            {typeof pieces === 'number' ? (
              <span className={cn('tabular-nums', tight && '@max-[260px]/build:hidden')}>
                {t('ui_domain_build_pieces', { count: pieces })}
              </span>
            ) : null}
            {buildShareVersion ? (
              <span className={cn('font-mono text-2xs', tight && '@max-[260px]/build:hidden')}>
                {t('ui_domain_build_buildshare', { version: buildShareVersion })}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

// -------------------------------------------------------------------------------------------
// Skeleton
// -------------------------------------------------------------------------------------------

export function BuildCardSkeleton({ className }: { className?: string }) {
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
