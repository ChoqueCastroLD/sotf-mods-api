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
}

export function EmptyState({ icon, title, description, action, headingLevel = 2, className }: EmptyStateProps) {
  const Heading = `h${headingLevel}` as const;
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
