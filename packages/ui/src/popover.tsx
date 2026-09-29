/**
 * Popover (PLAN §3.9): non-modal floating panel anchored to a trigger (filters, share, account
 * menu content). Focus moves into the panel; Escape and outside clicks close it.
 */
import { Popover as BasePopover } from '@base-ui/react/popover';
import type { ReactElement, ReactNode } from 'react';
import { cn } from './cn.ts';
import { floatingPanelClasses, popoverPositionerClasses } from './surfaces.ts';

export interface PopoverProps {
  trigger: ReactElement;
  /** Heading of the panel (announced as its name). */
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  className?: string;
}

export function Popover({
  trigger,
  title,
  description,
  children,
  open,
  defaultOpen,
  onOpenChange,
  side = 'bottom',
  align = 'center',
  className,
}: PopoverProps) {
  return (
    <BasePopover.Root open={open} defaultOpen={defaultOpen} onOpenChange={(next) => onOpenChange?.(next)}>
      <BasePopover.Trigger render={trigger} />
      <BasePopover.Portal>
        <BasePopover.Positioner
          side={side}
          align={align}
          sideOffset={8}
          collisionPadding={8}
          className={popoverPositionerClasses}
        >
          <BasePopover.Popup
            className={cn(
              floatingPanelClasses,
              'flex w-max max-w-[min(22rem,calc(100vw-1rem))] flex-col gap-2 p-4',
              className,
            )}
          >
            {title ? <BasePopover.Title className="text-sm font-semibold text-fg">{title}</BasePopover.Title> : null}
            {description ? (
              <BasePopover.Description className="text-sm text-fg-muted">{description}</BasePopover.Description>
            ) : null}
            {children}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}

/** Closes the enclosing `Popover` (render it as a `Button`). */
export function PopoverClose({ render, children }: { render: ReactElement; children?: ReactNode }) {
  return <BasePopover.Close render={render}>{children}</BasePopover.Close>;
}
