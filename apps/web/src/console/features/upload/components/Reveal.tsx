/**
 * Shows or hides a block of a form with a height and opacity transition (no layout jump). The
 * children stay mounted, so their state survives; a hidden block is `inert` (not focusable, not
 * read by assistive technology). Reduced motion removes the transition.
 */
import { cn } from '@sotf/ui/cn';
import type { ReactNode } from 'react';

/**
 * `spaced` puts the gap of a form column (1 rem) inside the animated block, so a hidden block
 * leaves no empty gap behind.
 */
export function Reveal({
  show,
  children,
  className,
  spaced = true,
}: {
  show: boolean;
  children: ReactNode;
  className?: string;
  spaced?: boolean;
}) {
  return (
    <div
      aria-hidden={show ? undefined : true}
      inert={!show}
      className={cn(
        'grid transition-[grid-template-rows,opacity] duration-(--dur-base) ease-out motion-reduce:transition-none',
        show ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        className,
      )}
    >
      <div className="-mx-1 min-h-0 overflow-hidden px-1">
        <div className={cn(spaced ? 'pt-4' : 'pt-0.5', 'pb-1')}>{children}</div>
      </div>
    </div>
  );
}
