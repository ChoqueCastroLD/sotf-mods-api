/**
 * Combobox (PLAN §3.9, research/03 §5.7): a searchable select on Base UI `Combobox`. Typing
 * filters the options (locale-aware, accent-insensitive matching by Base UI), arrow keys move,
 * Enter selects, Escape closes. The hidden input submits the option `value`.
 */
import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { Field as BaseField } from '@base-ui/react/field';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import { type ReactNode, useMemo } from 'react';
import { cn } from './cn.ts';
import { controlClasses, FieldError, labelClasses, OptionalHint } from './field.tsx';
import { Icon } from './icons.tsx';
import { useUiTranslate } from './labels.ts';
import { dropdownPositionerClasses, listItemClasses, listPanelClasses } from './surfaces.ts';

export interface ComboboxOption<Value extends string = string> {
  value: Value;
  /** Text used for display and filtering. */
  label: string;
  /** Secondary line (e.g. the author of a mod). */
  hint?: string;
  disabled?: boolean;
}

export interface ComboboxProps<Value extends string = string> {
  label: ReactNode;
  options: readonly ComboboxOption<Value>[];
  value?: Value | null;
  defaultValue?: Value | null;
  onValueChange?: (value: Value | null) => void;
  placeholder?: string;
  /** Text when nothing matches. Default: the localized «No matches…». */
  emptyText?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  optional?: boolean;
  hideLabel?: boolean;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  /** Locale used to compare while filtering (defaults to the document language). */
  locale?: Intl.LocalesArgument;
  className?: string;
}

export function Combobox<Value extends string = string>({
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder,
  emptyText,
  description,
  error,
  optional,
  hideLabel,
  name,
  required,
  disabled,
  locale,
  className,
}: ComboboxProps<Value>) {
  const t = useUiTranslate();
  const invalid = Boolean(error);
  const byValue = useMemo(() => new Map(options.map((option) => [option.value, option])), [options]);
  const toOption = (candidate: Value | null | undefined) =>
    candidate === null || candidate === undefined ? candidate : (byValue.get(candidate) ?? null);

  return (
    <BaseField.Root
      name={name}
      disabled={disabled}
      invalid={invalid || undefined}
      className={cn('flex flex-col gap-1.5', className)}
    >
      <BaseCombobox.Root<ComboboxOption<Value>>
        items={options}
        value={toOption(value)}
        defaultValue={toOption(defaultValue)}
        onValueChange={(next) => onValueChange?.(next ? next.value : null)}
        itemToStringLabel={(option) => option.label}
        itemToStringValue={(option) => option.value}
        isItemEqualToValue={(a, b) => a.value === b.value}
        required={required}
        locale={locale}
      >
        <BaseField.Label className={cn(labelClasses, hideLabel && 'sr-only')}>
          {label}
          {optional ? <OptionalHint /> : null}
        </BaseField.Label>
        <BaseCombobox.InputGroup className="relative flex items-center">
          <BaseCombobox.Input placeholder={placeholder} className={cn(controlClasses, 'h-10 ps-3 pe-18')} />
          <div className="absolute end-1 flex items-center gap-0.5">
            <BaseCombobox.Clear
              aria-label={t('ui_clear')}
              className="flex size-8 items-center justify-center rounded-sm text-fg-subtle hover:bg-fg/8 hover:text-fg"
            >
              <Icon icon={X} size={16} />
            </BaseCombobox.Clear>
            <BaseCombobox.Trigger
              aria-label={t('ui_show_options')}
              className="flex size-8 items-center justify-center rounded-sm text-fg-subtle hover:bg-fg/8 hover:text-fg"
            >
              <Icon icon={ChevronsUpDown} size={16} />
            </BaseCombobox.Trigger>
          </div>
        </BaseCombobox.InputGroup>
        <BaseCombobox.Portal>
          <BaseCombobox.Positioner className={dropdownPositionerClasses} sideOffset={4}>
            <BaseCombobox.Popup className={cn(listPanelClasses, 'empty:hidden')}>
              <BaseCombobox.Empty className="px-3 py-2 text-sm text-fg-muted empty:hidden">
                {emptyText ?? t('ui_no_results')}
              </BaseCombobox.Empty>
              <BaseCombobox.List>
                {(option: ComboboxOption<Value>) => (
                  <BaseCombobox.Item
                    key={option.value}
                    value={option}
                    disabled={option.disabled}
                    className={cn(listItemClasses, 'ps-8')}
                  >
                    <BaseCombobox.ItemIndicator className="absolute start-2 flex text-primary">
                      <Icon icon={Check} size={16} />
                    </BaseCombobox.ItemIndicator>
                    <span className="flex min-w-0 flex-col">
                      <span className="truncate">{option.label}</span>
                      {option.hint ? <span className="truncate text-xs text-fg-subtle">{option.hint}</span> : null}
                    </span>
                  </BaseCombobox.Item>
                )}
              </BaseCombobox.List>
            </BaseCombobox.Popup>
          </BaseCombobox.Positioner>
        </BaseCombobox.Portal>
      </BaseCombobox.Root>
      {description ? (
        <BaseField.Description className="text-xs text-fg-muted">{description}</BaseField.Description>
      ) : null}
      <FieldError>{invalid ? error : null}</FieldError>
    </BaseField.Root>
  );
}
