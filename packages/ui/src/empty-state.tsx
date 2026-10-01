/**
 * EmptyState (research/03 §5.6): a line illustration inside a contour ring, a display title, one
 * line of brand microcopy («Your backpack is empty…») and one call to action.
 */
import type { ReactNode } from 'react';
import { cn } from './cn.ts';

export interface EmptyStateProps {
  /** Line icon (Lucide `Icon` or `FieldKitIcon`, ~32 px). */
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  /** Heading level of the title. Default 2. */
  headingLevel?: 2 | 3 | 4;
  className?: string;
  /**
   * Painted forest scene (`/art/empty-state-*`, ~8 KB AVIF) above the text: for page-level empty
   * states where the whole area is empty. Lazy-loaded, fixed aspect ratio (no layout shift). The
   * `icon` is not drawn when the art is on; panels and small lists keep the line icon.
   */
  art?: boolean;
}

/** `<picture>` of the empty-state art, square source shown as a wide crop that fades into the card. */
function EmptyArt() {
  return (
    <picture className="block w-full">
      <source
        type="image/avif"
        srcSet="/art/empty-state-320.avif 320w, /art/empty-state-640.avif 640w"
        sizes="(min-width: 40rem) 28rem, 100vw"
      />
      <source
        type="image/webp"
        srcSet="/art/empty-state-320.webp 320w, /art/empty-state-640.webp 640w"
        sizes="(min-width: 40rem) 28rem, 100vw"
      />
      <img
        src="/art/empty-state-640.webp"
        alt=""
        width={640}
        height={640}
        loading="lazy"
        decoding="async"
        className="aspect-[16/10] w-full bg-raised object-cover object-[50%_72%] mask-[linear-gradient(to_bottom,black_55%,transparent)]"
      />
    </picture>
  );
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  headingLevel = 2,
  className,
  art = false,
}: EmptyStateProps) {
  const Heading = `h${headingLevel}` as const;
  if (art) {
    return (
      <div
        className={cn(
          'mx-auto flex w-full max-w-xl flex-col items-center overflow-hidden rounded-2xl border border-border bg-surface text-center',
          className,
        )}
      >
        <EmptyArt />
        <div className="-mt-10 flex flex-col items-center gap-3 px-6 pb-8">
          <Heading className="font-display-caps text-display-xs text-fg">{title}</Heading>
          {description ? <p className="max-w-prose text-sm text-fg-muted">{description}</p> : null}
          {action ? <div className="mt-2 flex flex-wrap justify-center gap-2">{action}</div> : null}
        </div>
      </div>
    );
  }
  return (
    <div className={cn('flex flex-col items-center gap-3 px-4 py-12 text-center', className)}>
      {icon ? (
        <div className="relative mb-2 flex size-20 items-center justify-center text-fg-muted" aria-hidden="true">
          <svg
            viewBox="0 0 80 80"
            className="absolute inset-0 size-full text-border-strong"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M40 4c20 0 36 15 36 35S61 76 41 76 4 61 4 41 20 4 40 4Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 5"
              pathLength={1000}
              className="animate-draw [--path-length:1000]"
            />
            <path
              d="M40 16c13 0 24 10 24 23S53 64 40 64 16 53 16 40 27 16 40 16Z"
              stroke="currentColor"
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
          </svg>
          <span className="relative flex [&_svg]:size-8">{icon}</span>
        </div>
      ) : null}
      <Heading className="font-display-caps text-display-xs text-fg">{title}</Heading>
      {description ? <p className="max-w-prose text-sm text-fg-muted">{description}</p> : null}
      {action ? <div className="mt-2 flex flex-wrap justify-center gap-2">{action}</div> : null}
    </div>
  );
}
