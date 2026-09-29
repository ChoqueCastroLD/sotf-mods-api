/**
 * Switch (PLAN §3.9): an on/off setting that applies immediately. Label on the left of the
 * track, whole row clickable, 44 px tall row on touch-first viewports.
 */
import { Field as BaseField } from '@base-ui/react/field';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import type { ReactNode } from 'react';
import { cn } from './cn.ts';

export interface SwitchProps {
  label: ReactNode;
  description?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
}

export function Switch({
  label,
  description,
  checked,
  defaultChecked,
  onCheckedChange,
  name,
  value,
  disabled,
  className,
}: SwitchProps) {
  return (
    <BaseField.Root name={name} disabled={disabled} className={cn('flex flex-col gap-1', className)}>
      <BaseField.Label className="flex min-h-11 cursor-pointer items-center justify-between gap-4 text-sm font-medium text-fg md:min-h-8 data-disabled:cursor-not-allowed data-disabled:opacity-55">
        <span>{label}</span>
        <BaseSwitch.Root
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={(next) => onCheckedChange?.(next)}
          value={value}
          className={cn(
            'relative inline-flex h-6 w-10 shrink-0 items-center rounded-full border border-border-strong bg-sunken p-0.5',
            'transition-[background-color,border-color] duration-(--dur-fast) ease-out',
            'data-checked:border-primary data-checked:bg-primary',
          )}
        >
          <BaseSwitch.Thumb
            className={cn(
              'block size-4.5 rounded-full bg-fg-muted shadow-sm transition-[translate,background-color] duration-(--dur-fast) ease-(--ease-spring)',
              'data-checked:translate-x-4 data-checked:bg-primary-fg rtl:data-checked:-translate-x-4',
            )}
          />
        </BaseSwitch.Root>
      </BaseField.Label>
      {description ? (
        <BaseField.Description className="text-xs text-fg-muted">{description}</BaseField.Description>
      ) : null}
    </BaseField.Root>
  );
}
