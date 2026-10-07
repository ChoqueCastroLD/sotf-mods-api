/**
 * Server-only React blocks of the profile (no hydration): card grids and written reviews, drawn
 * with the `@sotf/ui/domain` components inside a `DomainI18nProvider` that follows the page
 * language (`profileDomainI18n`).
 */
import { type Locale, localizePath } from '@sotf/i18n';
import { BuildCard, type DomainI18n, DomainI18nProvider, ModCard, modDownloadHref, ReviewCard } from '@sotf/ui/domain';
import type { ReactNode } from 'react';
import type { ModCardDTO, UserReviewDTO } from './data.ts';

function Scope({ i18n, children }: { i18n: DomainI18n; children?: ReactNode }) {
  return <DomainI18nProvider value={i18n}>{children}</DomainI18nProvider>;
}

function localizedCard<T extends { canonicalPath: string }>(card: T, locale: Locale): T {
  return { ...card, canonicalPath: localizePath(card.canonicalPath, locale) };
}

export interface CardGridProps {
  i18n: DomainI18n;
  locale: Locale;
  label: string;
  /** The first card is the LCP candidate. */
  priorityFirst?: boolean;
}

/** Pinned mods (at most three) fill one row; the full list is denser. */
const GRID_PINNED = 'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3';
const GRID = 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';

function Cards({
  mods,
  locale,
  priorityFirst,
}: {
  mods: readonly ModCardDTO[];
  locale: Locale;
  priorityFirst: boolean;
}) {
  return mods.map((mod, index) => {
    const card = localizedCard(mod, locale);
    const priority = priorityFirst && index < 2;
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
  });
}

/** Pinned mods (up to 3) above the Mods tab. */
export function PinnedMods({ i18n, locale, label, mods }: CardGridProps & { mods: readonly ModCardDTO[] }) {
  return (
    <Scope i18n={i18n}>
      <ul className={GRID_PINNED} aria-label={label}>
        <Cards mods={mods} locale={locale} priorityFirst />
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
        <Cards mods={items} locale={locale} priorityFirst={priorityFirst} />
      </ul>
    </Scope>
  );
}

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
            <p className="text-sm text-fg-muted">
              <a
                href={localizePath(review.mod.canonicalPath, locale)}
                className="rounded-xs font-semibold text-link underline-offset-3 hover:underline"
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
