/**
 * Form fields (PLAN §3.9, research/03 §5.7) on Base UI `Field`: the label, description and error
 * are wired to the control automatically (`for`, `aria-describedby`, `aria-invalid`).
 *
 * Validation messages appear under the control with an icon, never as colour alone. Pass
 * `error` from your form library (TanStack Form) or let native constraint validation drive it.
 */
import { Field as BaseField } from '@base-ui/react/field';
import { CircleAlert } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from './cn.ts';
import { Icon } from './icons.tsx';
import { useUiTranslate } from './labels.ts';

/** Shared look of text-like controls (Input, Textarea, Select and Combobox triggers). */
export const controlClasses =
  'w-full min-w-0 rounded-md border border-border-strong bg-sunken text-fg text-base md:text-sm ' +
  'placeholder:text-fg-subtle transition-[border-color,background-color,box-shadow] duration-(--dur-fast) ' +
  'shadow-[inset_0_1px_2px_rgb(0_0_0/0.18)] hover:border-fg-subtle ' +
  'focus-visible:border-focus focus-visible:shadow-[0_0_0_3px_var(--focus-halo)] focus-visible:outline-none ' +
  'data-invalid:border-danger aria-invalid:border-danger ' +
  'disabled:cursor-not-allowed disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:opacity-50 ' +
  'read-only:bg-surface';

export const labelClasses = 'text-sm font-medium text-fg';

export interface FieldProps {
  /** Visible label (required: placeholders are not labels). */
  label: ReactNode;
  /** Help text under the control. */
  description?: ReactNode;
  /** Error message; marks the control invalid while present. */
  error?: ReactNode;
  /** Shows the localized «Optional» hint next to the label (fields are required by default in copy). */
  optional?: boolean;
  /** Visually hides the label (it stays available to assistive technology). */
  hideLabel?: boolean;
  name?: string;
  disabled?: boolean;
  className?: string;
  /** The control: `Input`, `Textarea`, `PasswordField`, … */
  children: ReactNode;
}

export function Field({
  label,
  description,
  error,
  optional,
  hideLabel,
  name,
  disabled,
  className,
  children,
}: FieldProps) {
  const invalid = error !== undefined && error !== null && error !== false && error !== '';
  return (
    <BaseField.Root
      name={name}
      disabled={disabled}
      invalid={invalid || undefined}
      className={cn('flex flex-col gap-1.5', className)}
    >
      <BaseField.Label className={cn(labelClasses, hideLabel && 'sr-only')}>
        {label}
        {optional ? <OptionalHint /> : null}
      </BaseField.Label>
      {children}
      {description ? (
        <BaseField.Description className="text-xs text-fg-muted">{description}</BaseField.Description>
      ) : null}
      <FieldError>{invalid ? error : null}</FieldError>
    </BaseField.Root>
  );
}

export interface FieldErrorProps {
  /** Message to show; when empty, native validity messages are shown if the control is invalid. */
  children?: ReactNode;
  className?: string;
}

/** Error line of a `Field` (icon + text). Rendered only while the field is invalid. */
export function FieldError({ children, className }: FieldErrorProps) {
  return (
    <BaseField.Error
      match={children ? true : undefined}
      className={cn('flex items-start gap-1.5 text-xs font-medium text-danger', className)}
    >
      <Icon icon={CircleAlert} size={14} className="mt-px" />
      <span>{children || <BaseField.Validity>{(state) => state.error}</BaseField.Validity>}</span>
    </BaseField.Error>
  );
}

/** The localized «(Optional)» hint shown after a label. */
export function OptionalHint() {
  const t = useUiTranslate();
  return <span className="ms-1.5 font-normal text-fg-subtle">({t('ui_optional')})</span>;
}
