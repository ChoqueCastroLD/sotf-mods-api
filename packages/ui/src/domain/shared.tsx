/**
 * Building blocks shared by the domain cards (research/03 §5.2):
 *
 * - `cardClasses`: the card surface. Hover lifts 2 px and strengthens the border (transform and
 *   colour only, none under reduced motion); a keyboard focus on the card link rings the whole
 *   card.
 * - `CardLink`: the title link, stretched over the card with a pseudo-element, so the whole card
 *   is clickable without nesting links. Other controls inside a card must be `relative z-10`
 *   (`cardControlClasses`).
 * - `Cover`: a responsive image (fixed ratio, lazy, dominant colour behind it) or the brand's
 *   generative cover (`coverSvg` of @sotf/brand, deterministic per slug).
 */
import { bannerSvg } from '@sotf/brand/banner';
import { chartSlots } from '@sotf/brand/colors';
import { coverSvg } from '@sotf/brand/cover';
import { hashSeed } from '@sotf/brand/random';
import type { AnchorHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { cn } from '../cn.ts';
import type { CategoryRefDTO, ImageDTO } from './contracts.ts';

export const cardClasses =
  'group/card relative isolate rounded-lg border border-border bg-surface text-fg shadow-xs inset-shadow-highlight ' +
  'transition-[translate,border-color] duration-(--dur-fast) ease-out hover:border-border-strong ' +
  'motion-safe:hover:-translate-y-0.5 has-[[data-card-link]:focus-visible]:outline-2 ' +
  'has-[[data-card-link]:focus-visible]:outline-offset-2 has-[[data-card-link]:focus-visible]:outline-focus';

/** Controls placed inside a card sit above the stretched link. */
export const cardControlClasses = 'relative z-10';

export interface CardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export function CardLink({ className, children, ...rest }: CardLinkProps) {
  return (
    <a
      data-card-link=""
      className={cn(
        'text-fg outline-none after:absolute after:inset-0 after:z-0 after:rounded-[inherit] after:content-[""] hover:text-primary',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

/** Fixed chart slot per v2 category (research/03 §4.5); other slugs hash into the 8 slots. */
const CATEGORY_SLOT: Readonly<Record<string, number>> = {
  'quality-of-life': 1,
  gameplay: 2,
  building: 3,
  companions: 4,
  'weapons-gear': 5,
  'vehicles-movement': 6,
  'model-swap': 7,
  'ui-hud': 8,
  'menus-sandbox': 2,
  'multiplayer-servers': 3,
  library: 7,
  misc: 4,
};

/** Accent hex of a category (Night chart slot), used by generative covers. */
export function categoryAccent(slug: string | null | undefined): string {
  const slots = chartSlots.night;
  if (!slug) return slots[0] as string;
  const slot = CATEGORY_SLOT[slug] ?? (hashSeed(`category:${slug}`) % slots.length) + 1;
  return slots[slot - 1] as string;
}

/** SVG → compact `data:` URI (quotes, `#`, `<`, `>` and `%` escaped). */
export function svgDataUri(svg: string): string {
  const body = svg
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/\s+/g, ' ');
  return `data:image/svg+xml,${body}`;
}

const MEMO_LIMIT = 256;
const memo = new Map<string, string>();

function memoized(key: string, make: () => string): string {
  let value = memo.get(key);
  if (value === undefined) {
    value = make();
    if (memo.size >= MEMO_LIMIT) memo.delete(memo.keys().next().value as string);
    memo.set(key, value);
  }
  return value;
}

/** Generative cover (`data:` URI) of a mod without image. Deterministic, memoised. */
export function generativeCoverUri(slug: string, name: string, color: string): string {
  return memoized(`cover|${slug}|${name}|${color}`, () =>
    svgDataUri(coverSvg(slug, color, initialsOf(name), { width: 480 })),
  );
}

/** Generative banner (`data:` URI) of a user, 4:1. */
export function generativeBannerUri(userId: number | string): string {
  return memoized(`banner|${userId}`, () => svgDataUri(bannerSvg(userId, null, { width: 640, height: 160 })));
}

/** Up to 2 initials from the words of a name («Axel's Mod Menu» → «AM»). */
export function initialsOf(name: string): string {
  const words = name
    .replace(/['’]s\b/g, '')
    .split(/[\s\-_.:]+/)
    .filter((word) => /[\p{L}\p{N}]/u.test(word));
  const letters = words.slice(0, 2).map((word) => Array.from(word.replace(/^[^\p{L}\p{N}]+/u, ''))[0] ?? '');
  return letters.join('') || '?';
}

export interface CoverProps {
  image: ImageDTO | null;
  /** Seed of the generative fallback (the slug). */
  seed: string;
  /** Name whose initials the fallback shows. */
  name: string;
  category?: CategoryRefDTO | null;
  /** `sizes` of the responsive image. */
  sizes?: string;
  /** The LCP image of a page: eager + high priority. */
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** Decorative cover (the card's title names it): `alt=""`, fixed geometry, never shifts layout. */
export function Cover({ image, seed, name, category, sizes, priority = false, className, style }: CoverProps) {
  const common = {
    decoding: 'async' as const,
    loading: priority ? ('eager' as const) : ('lazy' as const),
    fetchPriority: priority ? ('high' as const) : undefined,
    className: cn('block size-full object-cover', className),
  };
  if (image) {
    return (
      <img
        alt=""
        src={image.url}
        srcSet={image.srcset ?? undefined}
        sizes={image.srcset ? sizes : undefined}
        width={image.width ?? undefined}
        height={image.height ?? undefined}
        style={{ backgroundColor: image.dominantColor ?? undefined, ...style }}
        {...common}
      />
    );
  }
  return (
    <img
      alt=""
      src={generativeCoverUri(seed, name, categoryAccent(category?.slug))}
      width={480}
      height={270}
      style={style}
      {...common}
    />
  );
}

/**
 * Skeleton block without a default height (the primitive `Skeleton` defaults to `h-4`, which
 * would fight the `size-*`/`h-*` of card geometries). Same shimmer and Day tint.
 */
export function Placeholder({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'skeleton block [--color-raised:light-dark(var(--color-night-100),var(--color-night-900))]',
        className,
      )}
    />
  );
}
