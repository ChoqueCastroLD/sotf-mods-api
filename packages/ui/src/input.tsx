/**
 * Text input on Base UI `Input` (integrates with `Field`: id, label, description, validity).
 * 16 px text on touch-first viewports so iOS never zooms on focus.
 */
import { Input as BaseInput } from '@base-ui/react/input';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from './cn.ts';
import { controlClasses } from './field.tsx';

export type InputSize = 'sm' | 'md' | 'lg';

const HEIGHT: Record<InputSize, string> = { sm: 'h-8', md: 'h-10', lg: 'h-12' };

export interface InputProps extends Omit<ComponentProps<typeof BaseInput>, 'size' | 'className'> {
  size?: InputSize;
  /** Decorative leading icon (e.g. a search glass). */
  icon?: ReactNode;
  /** Trailing element inside the control (unit, button). */
  end?: ReactNode;
  className?: string;
}

export function Input({ size = 'md', icon, end, className, ...rest }: InputProps) {
  const control = (
    <BaseInput
      className={cn(controlClasses, HEIGHT[size], 'px-3', icon && 'ps-9', end && 'pe-10', !icon && !end && className)}
      {...rest}
    />
  );
  if (!icon && !end) return control;
  return (
    <div className={cn('relative flex items-center', className)}>
      {icon ? (
        <span className="pointer-events-none absolute start-3 flex text-fg-subtle" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {control}
      {end ? <span className="absolute end-1 flex items-center">{end}</span> : null}
    </div>
  );
}
