/**
 * Select (PLAN §3.9) on Base UI `Select`: a listbox with typeahead, full keyboard support and a
 * hidden native input for forms. Use `Combobox` when the list needs searching (> ~12 options).
 */
import { Field as BaseField } from '@base-ui/react/field';
import { Select as BaseSelect } from '@base-ui/react/select';
import { Check, ChevronsUpDown } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from './cn.ts';
import { controlClasses, FieldError, labelClasses, OptionalHint } from './field.tsx';
import { Icon } from './icons.tsx';
import { useUiTranslate } from './labels.ts';
import { dropdownPositionerClasses, listItemClasses, listPanelClasses } from './surfaces.ts';

export interface SelectOption<Value extends string = string> {
  value: Value;
  label: ReactNode;
  /** Plain-text label used for typeahead when `label` is not a string. */
  textValue?: string;
  disabled?: boolean;
}

export interface SelectProps<Value extends string = string> {
  label: ReactNode;
  options: readonly SelectOption<Value>[];
  value?: Value | null;
  defaultValue?: Value | null;
  onValueChange?: (value: Value | null) => void;
  /** Text shown while nothing is selected. Default: the localized «Choose…». */
  placeholder?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  optional?: boolean;
  hideLabel?: boolean;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const HEIGHT = { sm: 'h-8', md: 'h-10', lg: 'h-12' } as const;

export function Select<Value extends string = string>({
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder,
  description,
  error,
  optional,
  hideLabel,
  name,
  required,
  disabled,
  size = 'md',
  className,
}: SelectProps<Value>) {
  const t = useUiTranslate();
  const invalid = Boolean(error);
  const items = options.map((option) => ({ value: option.value, label: option.label }));
  return (
    <BaseField.Root
      name={name}
      disabled={disabled}
      invalid={invalid || undefined}
      className={cn('flex flex-col gap-1.5', className)}
    >
      <BaseSelect.Root<Value>
        items={items}
        value={value}
        defaultValue={defaultValue}
        onValueChange={(next) => onValueChange?.(next)}
        required={required}
        itemToStringLabel={(itemValue) => {
          const option = options.find((candidate) => candidate.value === itemValue);
          if (!option) return String(itemValue);
          return option.textValue ?? (typeof option.label === 'string' ? option.label : String(option.value));
        }}
      >
        <BaseSelect.Label className={cn(labelClasses, hideLabel && 'sr-only')}>
          {label}
          {optional ? <OptionalHint /> : null}
        </BaseSelect.Label>
        <BaseSelect.Trigger
          className={cn(
            controlClasses,
            HEIGHT[size],
            'flex cursor-default items-center justify-between gap-2 ps-3 pe-2 text-start data-popup-open:border-focus',
          )}
        >
          <BaseSelect.Value
            className="truncate data-placeholder:text-fg-subtle"
            placeholder={placeholder ?? t('ui_choose')}
          />
          <BaseSelect.Icon className="flex text-fg-subtle">
            <Icon icon={ChevronsUpDown} size={16} />
          </BaseSelect.Icon>
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner className={dropdownPositionerClasses} sideOffset={4} alignItemWithTrigger={false}>
            <BaseSelect.Popup className={listPanelClasses}>
              <BaseSelect.List>
                {options.map((option) => (
                  <BaseSelect.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={cn(listItemClasses, 'ps-8')}
                  >
                    <BaseSelect.ItemIndicator className="absolute start-2 flex text-primary">
                      <Icon icon={Check} size={16} />
                    </BaseSelect.ItemIndicator>
                    <BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>
                  </BaseSelect.Item>
                ))}
              </BaseSelect.List>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
      {description ? (
        <BaseField.Description className="text-xs text-fg-muted">{description}</BaseField.Description>
      ) : null}
      <FieldError>{invalid ? error : null}</FieldError>
    </BaseField.Root>
  );
}
