/**
 * EmptyState: an icon, a title, one plain line of explanation and one call to action. No artwork.
 */
import type { ReactNode } from 'react';
import { cn } from './cn.ts';

export interface EmptyStateProps {
  /** Line icon (Lucide `Icon`, ~32 px). */
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  /** Heading level of the title. Default 2. */
  headingLevel?: 2 | 3 | 4;
  className?: string;
  /** Kept for compatibility: the illustration was removed, the state renders the same without it. */
  art?: boolean;
}

export function EmptyState({ icon, title, description, action, headingLevel = 2, className }: EmptyStateProps) {
  const Heading = `h${headingLevel}` as const;
  return (
    <div className={cn('flex flex-col items-center gap-3 px-4 py-12 text-center', className)}>
      {icon ? (
        <div
          className="mb-1 flex size-14 items-center justify-center rounded-full border border-border bg-raised text-fg-muted [&_svg]:size-6"
          aria-hidden="true"
        >
          {icon}
        </div>
      ) : null}
      <Heading className="text-lg font-bold text-fg">{title}</Heading>
      {description ? <p className="max-w-prose text-sm text-fg-muted">{description}</p> : null}
      {action ? <div className="mt-2 flex flex-wrap justify-center gap-2">{action}</div> : null}
    </div>
  );
}
