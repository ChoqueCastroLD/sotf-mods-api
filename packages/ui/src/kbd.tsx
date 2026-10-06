import type { ComponentProps } from 'react';
import { cn } from './cn.ts';

/** Keyboard key (`⌘K`, `/`, `Esc`): a small outlined label. */
export function Kbd({ className, ...rest }: ComponentProps<'kbd'>) {
  return (
    <kbd
      className={cn(
        'inline-flex h-5 min-w-5 items-center justify-center rounded-xs border border-border-strong bg-sunken px-1',
        'text-2xs leading-none text-fg-muted shadow-[inset_0_-1px_0_var(--color-border)]',
        className,
      )}
      {...rest}
    />
  );
}
