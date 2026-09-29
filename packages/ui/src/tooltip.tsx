/**
 * Tooltip (research/03 §5.6): 300 ms delay, never the only carrier of information (icon buttons
 * keep their `aria-label`; the tooltip repeats it visually). Shown on hover and keyboard focus.
 */
import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import type { ReactElement, ReactNode } from 'react';
import { cn } from './cn.ts';
import { popoverPositionerClasses } from './surfaces.ts';

export const TOOLTIP_DELAY_MS = 300;

export interface TooltipProps {
  /** Tooltip text. */
  content: ReactNode;
  /** The trigger element (must be focusable, e.g. a `Button`). */
  children: ReactElement;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  delay?: number;
  className?: string;
}

/** Groups tooltips so moving between triggers skips the delay. Wrap the app (or a toolbar). */
export function TooltipProvider({ children, delay = TOOLTIP_DELAY_MS }: { children: ReactNode; delay?: number }) {
  return <BaseTooltip.Provider delay={delay}>{children}</BaseTooltip.Provider>;
}

export function Tooltip({ content, children, side = 'top', align = 'center', delay, className }: TooltipProps) {
  return (
    <BaseTooltip.Root>
      <BaseTooltip.Trigger render={children} delay={delay ?? TOOLTIP_DELAY_MS} />
      <BaseTooltip.Portal>
        <BaseTooltip.Positioner side={side} align={align} sideOffset={6} className={popoverPositionerClasses}>
          <BaseTooltip.Popup
            className={cn(
              'max-w-64 rounded-sm bg-fg px-2 py-1 text-xs font-medium text-fg-inverse shadow-md',
              'origin-(--transform-origin) transition-[scale,opacity] duration-(--dur-fast) ease-out',
              'data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:opacity-0 data-ending-style:duration-(--dur-instant)',
              'data-instant:transition-none',
              className,
            )}
          >
            {content}
          </BaseTooltip.Popup>
        </BaseTooltip.Positioner>
      </BaseTooltip.Portal>
    </BaseTooltip.Root>
  );
}
