/**
 * PasswordField (PLAN §3.9): show/hide toggle + strength meter (research/03 §5.7). The meter is
 * text + bar (never colour alone) and announces changes politely.
 */
import { Field as BaseField } from '@base-ui/react/field';
import { Input as BaseInput } from '@base-ui/react/input';
import { Eye, EyeOff } from 'lucide-react';
import { type ComponentProps, type ReactNode, useState } from 'react';
import { cn } from './cn.ts';
import { controlClasses, FieldError, labelClasses, OptionalHint } from './field.tsx';
import { Icon } from './icons.tsx';
import { type UiMessageKey, useUiTranslate } from './labels.ts';
import { DEFAULT_MIN_PASSWORD_LENGTH, type PasswordScore, passwordStrength } from './password-strength.ts';

export interface PasswordFieldProps
  extends Omit<ComponentProps<typeof BaseInput>, 'type' | 'className' | 'value' | 'defaultValue' | 'onChange'> {
  label: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Show the strength meter (sign-up, password change). Off for sign-in. */
  meter?: boolean;
  minLength?: number;
  description?: ReactNode;
  error?: ReactNode;
  optional?: boolean;
  /** `new-password` when `meter` is on, `current-password` otherwise. */
  autoComplete?: string;
  className?: string;
}

const LEVEL_KEYS: Record<PasswordScore, UiMessageKey> = {
  0: 'ui_password_strength_0',
  1: 'ui_password_strength_1',
  2: 'ui_password_strength_2',
  3: 'ui_password_strength_3',
  4: 'ui_password_strength_4',
};

const BAR_COLOR: Record<PasswordScore, string> = {
  0: 'bg-danger',
  1: 'bg-danger',
  2: 'bg-warning',
  3: 'bg-success',
  4: 'bg-success',
};

export function PasswordField({
  label,
  value,
  defaultValue,
  onValueChange,
  meter = false,
  minLength = DEFAULT_MIN_PASSWORD_LENGTH,
  description,
  error,
  optional,
  autoComplete,
  name,
  disabled,
  className,
  ...rest
}: PasswordFieldProps) {
  const t = useUiTranslate();
  const [visible, setVisible] = useState(false);
  const [internal, setInternal] = useState(defaultValue ?? '');
  const current = value ?? internal;
  const strength = passwordStrength(current, minLength);
  const invalid = Boolean(error);
  const level = t(LEVEL_KEYS[strength.score]);

  return (
    <BaseField.Root
      name={name}
      disabled={disabled}
      invalid={invalid || undefined}
      className={cn('flex flex-col gap-1.5', className)}
    >
      <BaseField.Label className={labelClasses}>
        {label}
        {optional ? <OptionalHint /> : null}
      </BaseField.Label>
      <div className="relative flex items-center">
        <BaseInput
          type={visible ? 'text' : 'password'}
          value={current}
          onValueChange={(next) => {
            if (value === undefined) setInternal(next);
            onValueChange?.(next);
          }}
          autoComplete={autoComplete ?? (meter ? 'new-password' : 'current-password')}
          minLength={meter ? minLength : undefined}
          spellCheck={false}
          autoCapitalize="off"
          className={cn(controlClasses, 'h-10 ps-3 pe-11')}
          {...rest}
        />
        <button
          type="button"
          className="absolute end-1 flex size-8 items-center justify-center rounded-sm text-fg-subtle hover:bg-fg/8 hover:text-fg"
          aria-label={visible ? t('ui_hide_password') : t('ui_show_password')}
          aria-pressed={visible}
          onClick={() => setVisible((shown) => !shown)}
          disabled={disabled}
        >
          <Icon icon={visible ? EyeOff : Eye} size={16} />
        </button>
      </div>
      {meter && current.length > 0 ? (
        <div className="flex items-center gap-3">
          <div className="grid h-1 flex-1 grid-cols-4 gap-1" aria-hidden="true">
            {[1, 2, 3, 4].map((step) => (
              <span
                key={step}
                className={cn(
                  'rounded-full transition-colors duration-(--dur-fast)',
                  Math.max(strength.score, 1) >= step ? BAR_COLOR[strength.score] : 'bg-border',
                )}
              />
            ))}
          </div>
          <p className="text-xs text-fg-muted" aria-live="polite">
            {t('ui_password_strength', { level })}
          </p>
        </div>
      ) : null}
      {description ? (
        <BaseField.Description className="text-xs text-fg-muted">{description}</BaseField.Description>
      ) : null}
      <FieldError>{invalid ? error : null}</FieldError>
    </BaseField.Root>
  );
}
