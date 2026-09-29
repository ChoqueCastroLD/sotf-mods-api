/**
 * Checkbox (PLAN §3.9) with its label (the whole row is the target, ≥ 24 px). Supports the
 * indeterminate state for "select all" rows.
 */
import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { Field as BaseField } from '@base-ui/react/field';
import { Check, Minus } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from './cn.ts';
import { FieldError } from './field.tsx';
import { Icon } from './icons.tsx';

export interface CheckboxProps {
  label: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  name?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export function Checkbox({
  label,
  description,
  error,
  checked,
  defaultChecked,
  indeterminate,
  onCheckedChange,
  name,
  value,
  required,
  disabled,
  className,
}: CheckboxProps) {
  const invalid = Boolean(error);
  return (
    <BaseField.Root
      name={name}
      disabled={disabled}
      invalid={invalid || undefined}
      className={cn('flex flex-col gap-1', className)}
    >
      <BaseField.Label className="flex min-h-6 cursor-pointer items-start gap-2.5 text-sm text-fg data-disabled:cursor-not-allowed data-disabled:opacity-55">
        <BaseCheckbox.Root
          checked={checked}
          defaultChecked={defaultChecked}
          indeterminate={indeterminate}
          onCheckedChange={(next) => onCheckedChange?.(next)}
          value={value}
          required={required}
          className={cn(
            'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border border-border-strong bg-sunken text-primary-fg',
            'transition-[background-color,border-color] duration-(--dur-fast)',
            'data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary',
            'data-invalid:border-danger',
          )}
        >
          <BaseCheckbox.Indicator
            className="flex data-unchecked:hidden"
            render={(props, state) => (
              <span {...props}>
                <Icon icon={state.indeterminate ? Minus : Check} size={14} strokeWidth={3} />
              </span>
            )}
          />
        </BaseCheckbox.Root>
        <span className="pt-px">{label}</span>
      </BaseField.Label>
      {description ? (
        <BaseField.Description className="ps-7.5 text-xs text-fg-muted">{description}</BaseField.Description>
      ) : null}
      <FieldError className="ps-7.5">{invalid ? error : null}</FieldError>
    </BaseField.Root>
  );
}
