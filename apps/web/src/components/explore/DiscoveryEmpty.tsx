/**
 * Empty state of the discovery pages (explore, search, kits, requests): a painterly forest
 * clearing (backpack and a GPS unit) above the title, one line of copy and the actions. The art is
 * decorative (`alt=""`), has intrinsic dimensions (no layout shift) and ships as AVIF + WebP in
 * two sizes (`public/art/discovery-empty-*`).
 */
import type { ReactNode } from 'react';

export interface DiscoveryEmptyProps {
  title: string;
  text?: string | undefined;
  /** Actions and extra content under the copy. */
  children?: ReactNode;
  headingLevel?: 2 | 3;
  /** Show the art (default). Off for in-section «nothing here» notes. */
  art?: boolean;
}

export function EmptyArt({ className = '' }: { className?: string }) {
  return (
    <picture>
      <source
        type="image/avif"
        srcSet="/art/discovery-empty-480.avif 480w, /art/discovery-empty-960.avif 960w"
        sizes="(min-width: 36rem) 32rem, 100vw"
      />
      <source
        type="image/webp"
        srcSet="/art/discovery-empty-480.webp 480w, /art/discovery-empty-960.webp 960w"
        sizes="(min-width: 36rem) 32rem, 100vw"
      />
      <img
        src="/art/discovery-empty-960.webp"
        alt=""
        width={960}
        height={600}
        loading="lazy"
        decoding="async"
        className={`block h-auto w-full ${className}`}
      />
    </picture>
  );
}

export function DiscoveryEmpty({ title, text, children, headingLevel = 3, art = true }: DiscoveryEmptyProps) {
  const Heading = `h${headingLevel}` as const;
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-3 py-2 text-center md:py-6">
      {art ? (
        <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-sunken">
          <EmptyArt />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/80 to-transparent"
          />
        </div>
      ) : null}
      <Heading className="mt-1 font-display-caps text-display-xs text-balance text-fg">{title}</Heading>
      {text ? <p className="max-w-prose text-sm text-pretty text-fg-muted md:text-base">{text}</p> : null}
      {children ? <div className="mt-1 flex w-full flex-col items-center gap-3">{children}</div> : null}
    </div>
  );
}
