/**
 * RadioCard (research/03 §5.7): a radio group whose options are cards with an icon, a title and
 * a description (platform, multiplayer role…). Arrow keys move the selection (roving focus).
 */
import { Field as BaseField } from '@base-ui/react/field';
import { Fieldset } from '@base-ui/react/fieldset';
import { Radio } from '@base-ui/react/radio';
import { RadioGroup } from '@base-ui/react/radio-group';
import type { ReactNode } from 'react';
import { cn } from './cn.ts';
import { FieldError, labelClasses, OptionalHint } from './field.tsx';

export interface RadioCardOption<Value extends string = string> {
  value: Value;
  title: ReactNode;
  description?: ReactNode;
  /** Decorative icon (Lucide/Field kit element). */
  icon?: ReactNode;
  disabled?: boolean;
}

export interface RadioCardGroupProps<Value extends string = string> {
  legend: ReactNode;
  options: readonly RadioCardOption<Value>[];
  value?: Value | null;
  defaultValue?: Value | null;
  onValueChange?: (value: Value) => void;
  description?: ReactNode;
  error?: ReactNode;
  optional?: boolean;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  /** Number of columns from the `sm` breakpoint up (1 on narrow screens). Default 2. */
  columns?: 1 | 2 | 3;
  className?: string;
}

const COLUMNS = { 1: '', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3' } as const;

export function RadioCardGroup<Value extends string = string>({
  legend,
  options,
  value,
  defaultValue,
  onValueChange,
  description,
  error,
  optional,
  name,
  required,
  disabled,
  columns = 2,
  className,
}: RadioCardGroupProps<Value>) {
  const invalid = Boolean(error);
  return (
    <BaseField.Root name={name} disabled={disabled} invalid={invalid || undefined} className={className}>
      <Fieldset.Root
        render={
          <RadioGroup
            value={value}
            defaultValue={defaultValue}
            onValueChange={(next) => onValueChange?.(next as Value)}
            required={required}
          />
        }
        className="flex flex-col gap-2"
      >
        <Fieldset.Legend className={labelClasses}>
          {legend}
          {optional ? <OptionalHint /> : null}
        </Fieldset.Legend>
        {description ? <p className="text-xs text-fg-muted">{description}</p> : null}
        <div className={cn('grid grid-cols-1 gap-2', COLUMNS[columns])}>
          {options.map((option) => (
            <BaseField.Item key={option.value} disabled={option.disabled}>
              <BaseField.Label
                className={cn(
                  'group flex h-full cursor-pointer items-start gap-3 rounded-lg border border-border-strong bg-raised p-3 text-start',
                  'transition-[border-color,background-color] duration-(--dur-fast) hover:bg-[color-mix(in_oklab,var(--color-raised),var(--color-fg)_4%)]',
                  'has-data-checked:border-primary has-data-checked:bg-primary-soft has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-focus',
                  'data-disabled:cursor-not-allowed data-disabled:opacity-55',
                )}
              >
                <Radio.Root
                  value={option.value}
                  className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full border border-border-strong bg-sunken outline-none data-checked:border-primary"
                >
                  <Radio.Indicator className="size-2 rounded-full bg-primary data-unchecked:hidden" />
                </Radio.Root>
                {option.icon ? (
                  <span className="flex text-fg-muted group-has-data-checked:text-primary" aria-hidden="true">
                    {option.icon}
                  </span>
                ) : null}
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-sm font-medium text-fg">{option.title}</span>
                  {option.description ? <span className="text-xs text-fg-muted">{option.description}</span> : null}
                </span>
              </BaseField.Label>
            </BaseField.Item>
          ))}
        </div>
      </Fieldset.Root>
      <FieldError>{invalid ? error : null}</FieldError>
    </BaseField.Root>
  );
}
