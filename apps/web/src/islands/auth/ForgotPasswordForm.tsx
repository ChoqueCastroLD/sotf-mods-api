/**
 * «Forgot password» island (`/forgot-password`, T0-13, PLAN §9.1). The API always answers 202, so
 * the confirmation is neutral: it never tells whether an account exists for the address.
 * Turnstile (invisible) protects the endpoint; limits (3/hour per address and per IP) show the
 * wait like every auth form.
 */
import { type Locale, localizePath } from '@sotf/i18n';
import { Button, ButtonLink } from '@sotf/ui/button';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { MailCheck } from 'lucide-react';
import { type FormEvent, useRef, useState } from 'react';
import { authApi } from './api.ts';
import { useLang, useT } from './i18n.tsx';
import {
  AuthIsland,
  type AuthIslandProps,
  FormAlert,
  type FormFailure,
  TurnstileSlot,
  useCountdown,
  useFocusOnChange,
} from './shared.tsx';
import { useTurnstile } from './turnstile.ts';
import { checkEmail, issuesToFieldErrors } from './validation.ts';

export interface ForgotPasswordFormProps extends AuthIslandProps {
  locale: Locale;
  turnstileSiteKey?: string | undefined;
}

const EMAIL_ID = 'forgot-email';

export default function ForgotPasswordForm({ messages, lang, ...props }: ForgotPasswordFormProps) {
  return (
    <AuthIsland messages={messages} lang={lang}>
      <ForgotPasswordBody {...props} />
    </AuthIsland>
  );
}

function ForgotPasswordBody({ locale, turnstileSiteKey }: Omit<ForgotPasswordFormProps, keyof AuthIslandProps>) {
  const t = useT();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [failure, setFailure] = useState<FormFailure | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [retryIn, startRetry] = useCountdown();
  const alertRef = useRef<HTMLDivElement | null>(null);
  const sentRef = useRef<HTMLHeadingElement | null>(null);
  const turnstile = useTurnstile({ siteKey: turnstileSiteKey, action: 'forgot', language: useLang() });
  useFocusOnChange(failure, alertRef);
  useFocusOnChange(sentTo, sentRef);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting || retryIn > 0) return;
    const message = checkEmail(t, email);
    setError(message);
    if (message) {
      document.getElementById(EMAIL_ID)?.focus();
      return;
    }
    setSubmitting(true);
    setFailure(null);
    let turnstileToken: string;
    try {
      turnstileToken = await turnstile.getToken();
    } catch {
      setSubmitting(false);
      setFailure({ ok: false, kind: 'turnstile' });
      return;
    }
    const address = email.trim();
    const result = await authApi.forgotPassword({ email: address, turnstileToken });
    turnstile.reset();
    setSubmitting(false);
    if (result.ok) {
      setSentTo(address);
      return;
    }
    if (result.kind === 'problem') {
      if (result.problem.code === 'RATE_LIMITED') startRetry(result.problem.retryAfter ?? 60);
      if (result.problem.code === 'VALIDATION_FAILED') {
        const mapped = issuesToFieldErrors(t, result.problem.errors, { email });
        if (mapped.email) {
          setError(mapped.email);
          return;
        }
      }
    }
    setFailure(result);
  }

  if (sentTo) {
    return (
      <section className="grid gap-4" data-auth-sent>
        <h2
          ref={sentRef}
          tabIndex={-1}
          className="flex items-center gap-2 font-display-caps text-display-xs text-fg outline-none"
        >
          <Icon icon={MailCheck} size={24} className="text-signal" />
          {t('auth_forgot_sent_heading')}
        </h2>
        <p className="text-fg">{t('auth_forgot_sent_text', { email: sentTo })}</p>
        <p className="text-sm text-fg-muted">{t('auth_forgot_sent_spam')}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={localizePath('/login', locale)} size="lg">
            {t('auth_back_to_sign_in')}
          </ButtonLink>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              setSentTo(null);
              setEmail('');
            }}
          >
            {t('auth_forgot_try_again')}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onFocusCapture={turnstile.prepare}
      onPointerDownCapture={turnstile.prepare}
      className="grid gap-5"
      data-auth-form="forgot"
    >
      <FormAlert failure={failure} retryIn={retryIn} alertRef={alertRef} />
      <Field label={t('auth_field_email')} error={error} name="email">
        <Input
          id={EMAIL_ID}
          type="email"
          inputMode="email"
          value={email}
          onValueChange={setEmail}
          onBlur={() => email && setError(checkEmail(t, email))}
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          maxLength={254}
          required
        />
      </Field>
      <TurnstileSlot containerRef={turnstile.containerRef} />
      <Button type="submit" size="lg" block loading={submitting} disabled={retryIn > 0} glow>
        {retryIn > 0 ? t('auth_rate_limited_submit', { seconds: retryIn }) : t('auth_forgot_submit')}
      </Button>
      <p className="text-center text-sm">
        <a href={localizePath('/login', locale)} className="text-link underline-offset-3 hover:underline">
          {t('auth_back_to_sign_in')}
        </a>
      </p>
    </form>
  );
}
