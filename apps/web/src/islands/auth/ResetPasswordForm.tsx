/**
 * «Choose a new password» island (`/reset-password?token=`, T0-13, PLAN §4.6). Accepts v2 tokens
 * and, for 24 h after the cut-over, the legacy `PasswordResetToken`s (the API decides). Saving
 * revokes every session, so the user is sent to `/login?reset=1` (the legacy flag, shown as a toast).
 */
import { type Locale, localizePath } from '@sotf/i18n';
import { Button, ButtonLink } from '@sotf/ui/button';
import { PasswordField } from '@sotf/ui/password-field';
import { type FormEvent, useEffect, useRef, useState } from 'react';
import { authApi } from './api.ts';
import { useT } from './i18n.tsx';
import {
  AuthIsland,
  type AuthIslandProps,
  FormAlert,
  type FormFailure,
  useCountdown,
  useFocusOnChange,
} from './shared.tsx';
import { forgetEmailToken, takeEmailToken } from './token.ts';
import { checkNewPassword, issuesToFieldErrors } from './validation.ts';

export interface ResetPasswordFormProps extends AuthIslandProps {
  locale: Locale;
}

const PASSWORD_ID = 'reset-password';

/** Codes that mean the link cannot be used any more. */
const DEAD_LINK = new Set(['GONE', 'NOT_FOUND']);

export default function ResetPasswordForm({ messages, lang, ...props }: ResetPasswordFormProps) {
  return (
    <AuthIsland messages={messages} lang={lang}>
      <ResetPasswordBody {...props} />
    </AuthIsland>
  );
}

function ResetPasswordBody({ locale }: Omit<ResetPasswordFormProps, keyof AuthIslandProps>) {
  const t = useT();
  // undefined = not read yet (SSR and first client render), null = no usable token.
  const [token, setToken] = useState<string | null | undefined>(undefined);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [failure, setFailure] = useState<FormFailure | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [retryIn, startRetry] = useCountdown();
  const alertRef = useRef<HTMLDivElement | null>(null);
  const deadRef = useRef<HTMLHeadingElement | null>(null);
  useFocusOnChange(failure, alertRef);
  useFocusOnChange(token === null, deadRef);

  useEffect(() => {
    setToken(takeEmailToken());
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token || submitting || retryIn > 0) return;
    const message = checkNewPassword(t, password);
    setError(message);
    if (message) {
      document.getElementById(PASSWORD_ID)?.focus();
      return;
    }
    setSubmitting(true);
    setFailure(null);
    const result = await authApi.resetPassword({ token, password });
    if (result.ok) {
      forgetEmailToken();
      window.location.assign(`${localizePath('/login', locale)}?reset=1`);
      return;
    }
    setSubmitting(false);
    if (result.kind === 'problem') {
      const { problem } = result;
      if (DEAD_LINK.has(problem.code) || problem.errors.some((issue) => issue.path === 'token')) {
        forgetEmailToken();
        setToken(null);
        return;
      }
      if (problem.code === 'RATE_LIMITED') startRetry(problem.retryAfter ?? 60);
      if (problem.code === 'VALIDATION_FAILED') {
        const mapped = issuesToFieldErrors(t, problem.errors, { password });
        if (mapped.password) {
          setError(mapped.password);
          document.getElementById(PASSWORD_ID)?.focus();
          return;
        }
      }
    }
    setFailure(result);
  }

  if (token === null) {
    return (
      <section className="grid gap-4" data-auth-dead-link>
        <h2 ref={deadRef} tabIndex={-1} className="font-display-caps text-display-xs text-fg outline-none">
          {t('auth_reset_invalid_heading')}
        </h2>
        <p className="text-fg-muted">{t('auth_reset_invalid_text')}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={localizePath('/forgot-password', locale)} size="lg">
            {t('auth_reset_request_new')}
          </ButtonLink>
          <ButtonLink href={localizePath('/login', locale)} variant="outline" size="lg">
            {t('auth_back_to_sign_in')}
          </ButtonLink>
        </div>
      </section>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5" data-auth-form="reset" aria-busy={token === undefined}>
      <FormAlert failure={failure} retryIn={retryIn} alertRef={alertRef} />
      <PasswordField
        id={PASSWORD_ID}
        label={t('auth_field_new_password')}
        description={t('auth_field_new_password_hint')}
        value={password}
        onValueChange={setPassword}
        onBlur={() => password && setError(checkNewPassword(t, password))}
        error={error}
        meter
        autoComplete="new-password"
        maxLength={256}
        required
        disabled={token === undefined}
      />
      <Button type="submit" size="lg" block loading={submitting} disabled={token === undefined || retryIn > 0} glow>
        {retryIn > 0 ? t('auth_rate_limited_submit', { seconds: retryIn }) : t('auth_reset_submit')}
      </Button>
    </form>
  );
}
