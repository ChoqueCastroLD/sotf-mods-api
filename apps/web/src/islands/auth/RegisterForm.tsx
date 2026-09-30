/**
 * Sign-up island (`/register`, research/03 §6.13, T0-13).
 *
 * Display name (optional, Unicode 2–32), handle (ASCII, immutable in T0), email, password with the
 * strength meter, terms and an invisible Turnstile. Inline validation on blur, an error summary
 * linking to every invalid field on submit, API field problems (taken email/handle, reserved
 * handle, breached password) mapped back onto their fields.
 *
 * On success the API has already signed the user in (session cookie) and queued the verification
 * email: the island switches to «Day 1 on the island» with the 3 onboarding cards (Welcome.tsx).
 */
import { type Locale, localizePath } from '@sotf/i18n';
import { Button } from '@sotf/ui/button';
import { Checkbox } from '@sotf/ui/checkbox';
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { PasswordField } from '@sotf/ui/password-field';
import { type FormEvent, useEffect, useRef, useState } from 'react';
import { authApi } from './api.ts';
import { useLang, useT } from './i18n.tsx';
import { NEXT_PARAM, withNext } from './next.ts';
import {
  AuthIsland,
  type AuthIslandProps,
  ErrorSummary,
  FormAlert,
  type FormFailure,
  type SummaryItem,
  TurnstileSlot,
  useCountdown,
  useFocusOnChange,
} from './shared.tsx';
import { useTurnstile } from './turnstile.ts';
import {
  checkDisplayName,
  checkEmail,
  checkHandle,
  checkNewPassword,
  type FieldErrors,
  HANDLE_MAX,
  issuesToFieldErrors,
  normalizeHandle,
  withFieldError,
} from './validation.ts';
import Welcome from './Welcome.tsx';

export interface RegisterFormProps extends AuthIslandProps {
  locale: Locale;
  turnstileSiteKey?: string | undefined;
}

type RegisterField = 'displayName' | 'handle' | 'email' | 'password' | 'acceptTerms';

const IDS: Record<RegisterField, string> = {
  displayName: 'register-display-name',
  handle: 'register-handle',
  email: 'register-email',
  password: 'register-password',
  acceptTerms: 'register-terms',
};

const ORDER: readonly RegisterField[] = ['displayName', 'handle', 'email', 'password', 'acceptTerms'];

export default function RegisterForm({ messages, lang, ...props }: RegisterFormProps) {
  return (
    <AuthIsland messages={messages} lang={lang}>
      <RegisterFormBody {...props} />
    </AuthIsland>
  );
}

function RegisterFormBody({ locale, turnstileSiteKey }: Omit<RegisterFormProps, keyof AuthIslandProps>) {
  const t = useT();
  const [displayName, setDisplayName] = useState('');
  const [handle, setHandle] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<FieldErrors<RegisterField>>({});
  const [summary, setSummary] = useState<SummaryItem[]>([]);
  const [failure, setFailure] = useState<FormFailure | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [next, setNext] = useState<string | null>(null);
  const [created, setCreated] = useState<{ email: string; displayName: string } | null>(null);
  const [retryIn, startRetry] = useCountdown();
  const alertRef = useRef<HTMLDivElement | null>(null);
  const summaryRef = useRef<HTMLDivElement | null>(null);
  const turnstile = useTurnstile({ siteKey: turnstileSiteKey, action: 'register', language: useLang() });
  useFocusOnChange(failure, alertRef);

  useEffect(() => {
    setNext(new URLSearchParams(window.location.search).get(NEXT_PARAM));
  }, []);

  const labels: Record<RegisterField, string> = {
    displayName: t('auth_field_display_name'),
    handle: t('auth_field_handle'),
    email: t('auth_field_email'),
    password: t('auth_field_new_password'),
    acceptTerms: t('auth_field_terms'),
  };

  const values = { displayName, handle, email, password, acceptTerms: acceptTerms ? 'true' : '' };

  function check(field: RegisterField): string | null {
    switch (field) {
      case 'displayName':
        return checkDisplayName(t, displayName);
      case 'handle':
        return checkHandle(t, handle);
      case 'email':
        return checkEmail(t, email);
      case 'password':
        return checkNewPassword(t, password);
      case 'acceptTerms':
        return acceptTerms ? null : t('auth_error_terms');
    }
  }

  /** Blur validation: only fields the user has typed into (no errors while tabbing through). */
  function onBlurField(field: RegisterField, value: string) {
    if (value === '') return;
    setErrors((current) => withFieldError(current, field, check(field)));
  }

  function showErrors(found: FieldErrors<RegisterField>) {
    setErrors(found);
    const items = ORDER.filter((field) => found[field]).map((field) => ({
      id: IDS[field],
      label: labels[field],
      message: found[field] ?? '',
    }));
    setSummary(items);
    if (items.length > 0) requestAnimationFrame(() => summaryRef.current?.focus());
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting || retryIn > 0) return;
    const found: FieldErrors<RegisterField> = {};
    for (const field of ORDER) {
      const message = check(field);
      if (message) found[field] = message;
    }
    showErrors(found);
    if (Object.keys(found).length > 0) return;

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
    const name = displayName.normalize('NFC').trim();
    const result = await authApi.register({
      email: email.trim(),
      handle: normalizeHandle(handle),
      password,
      ...(name ? { displayName: name } : {}),
      locale,
      acceptTerms: true,
      turnstileToken,
    });
    turnstile.reset();
    setSubmitting(false);
    if (result.ok) {
      setCreated({ email: result.data.user.email, displayName: result.data.user.displayName });
      window.scrollTo({ top: 0 });
      return;
    }
    if (result.kind === 'problem') {
      const { problem } = result;
      if (problem.code === 'RATE_LIMITED') startRetry(problem.retryAfter ?? 60);
      if ((problem.code === 'VALIDATION_FAILED' || problem.code === 'CONFLICT') && problem.errors.length > 0) {
        const mapped = issuesToFieldErrors(t, problem.errors, values);
        if (Object.keys(mapped).length > 0) {
          showErrors(mapped);
          return;
        }
      }
    }
    setFailure(result);
  }

  if (created) return <Welcome locale={locale} email={created.email} next={next} />;

  const profileBase = `sotf-mods.com${localizePath('/profile', locale)}/`;
  const shownHandle = normalizeHandle(handle) || t('auth_field_handle_placeholder');

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onFocusCapture={turnstile.prepare}
      onPointerDownCapture={turnstile.prepare}
      className="grid gap-5"
      data-auth-form="register"
    >
      <ErrorSummary items={summary} summaryRef={summaryRef} />
      <FormAlert failure={failure} retryIn={retryIn} alertRef={alertRef} />
      <Field
        label={labels.displayName}
        description={t('auth_field_display_name_hint')}
        error={errors.displayName}
        name="displayName"
        optional
      >
        <Input
          id={IDS.displayName}
          value={displayName}
          onValueChange={setDisplayName}
          onBlur={() => onBlurField('displayName', displayName)}
          autoComplete="nickname"
          maxLength={64}
        />
      </Field>
      <Field
        label={labels.handle}
        description={t('auth_field_handle_hint', { url: `${profileBase}${shownHandle}` })}
        error={errors.handle}
        name="handle"
      >
        <Input
          id={IDS.handle}
          value={handle}
          onValueChange={(value) => setHandle(value.toLowerCase())}
          onBlur={() => onBlurField('handle', handle)}
          autoComplete="username"
          autoCapitalize="none"
          spellCheck={false}
          maxLength={HANDLE_MAX}
          pattern="[a-z0-9\-]*"
          required
        />
      </Field>
      <Field label={labels.email} description={t('auth_field_email_hint')} error={errors.email} name="email">
        <Input
          id={IDS.email}
          type="email"
          inputMode="email"
          value={email}
          onValueChange={setEmail}
          onBlur={() => onBlurField('email', email)}
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          maxLength={254}
          required
        />
      </Field>
      <PasswordField
        id={IDS.password}
        label={labels.password}
        description={t('auth_field_new_password_hint')}
        value={password}
        onValueChange={setPassword}
        onBlur={() => onBlurField('password', password)}
        error={errors.password}
        meter
        autoComplete="new-password"
        maxLength={256}
        required
      />
      <div className="grid gap-1">
        <Checkbox
          label={labels.acceptTerms}
          checked={acceptTerms}
          onCheckedChange={(checked) => {
            setAcceptTerms(checked);
            if (checked) setErrors((current) => withFieldError(current, 'acceptTerms', null));
          }}
          error={errors.acceptTerms}
          name="acceptTerms"
          required
        />
        <p className="flex gap-3 ps-7.5 text-xs">
          <a
            href={localizePath('/terms', locale)}
            target="_blank"
            rel="noopener"
            className="text-link underline underline-offset-3"
          >
            {t('common_footer_terms')}
            <span className="sr-only"> {t('common_new_tab')}</span>
          </a>
          <a
            href={localizePath('/privacy', locale)}
            target="_blank"
            rel="noopener"
            className="text-link underline underline-offset-3"
          >
            {t('common_footer_privacy')}
            <span className="sr-only"> {t('common_new_tab')}</span>
          </a>
        </p>
      </div>
      <TurnstileSlot containerRef={turnstile.containerRef} />
      <Button type="submit" size="lg" block loading={submitting} disabled={retryIn > 0} glow>
        {retryIn > 0 ? t('auth_rate_limited_submit', { seconds: retryIn }) : t('auth_register_submit')}
      </Button>
      <p className="text-center text-sm text-fg-muted">
        {t('auth_register_have_account')}{' '}
        <a
          href={withNext(localizePath('/login', locale), next, locale)}
          className="font-semibold text-link underline-offset-3 hover:underline"
        >
          {t('common_account_sign_in')}
        </a>
      </p>
    </form>
  );
}
