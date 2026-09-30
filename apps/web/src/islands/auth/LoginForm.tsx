/**
 * Sign-in island (`/login`, research/03 §6.13, T0-13).
 *
 * - Email **or** handle + password; legacy (Bun) passwords keep working, the API rehashes them.
 * - One generic error for every failure (the API answers `INVALID_CREDENTIALS` in constant time).
 * - Rate limits show the wait and count it down; the button is disabled meanwhile.
 * - Turnstile only after `TURNSTILE_REQUIRED` (3 recent failures): the widget appears, the user
 *   completes it and signs in again.
 * - `?next=` goes through the allowlist; legacy `?registered` / `?reset` flags become toasts.
 * - «Continue with Discord» (T1-01) exists only when the server says the provider is configured
 *   (`GET /auth/providers`); `?oauth_error=` from the callback becomes a toast.
 * - A visitor who is already signed in (hint cookie → `/me/summary`) is offered to continue.
 */
import { type Locale, localizePath } from '@sotf/i18n';
import { Button, ButtonLink } from '@sotf/ui/button';
import { Checkbox } from '@sotf/ui/checkbox';
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { PasswordField } from '@sotf/ui/password-field';
import { type FormEvent, useEffect, useRef, useState } from 'react';
import { hasSignedInHint } from '../../scripts/account-hint.ts';
import { type AuthProviders, authApi, type MeSummary } from './api.ts';
import { flagToasts, stripUrlParams } from './flags.ts';
import { useLang, useT } from './i18n.tsx';
import { NEXT_PARAM, safeNext, withNext } from './next.ts';
import {
  AuthIsland,
  type AuthIslandProps,
  FormAlert,
  type FormFailure,
  TurnstileSlot,
  useCountdown,
  useFocusOnChange,
  useNotify,
} from './shared.tsx';
import { useTurnstile } from './turnstile.ts';
import { checkCurrentPassword, checkIdentifier, type FieldErrors, withFieldError } from './validation.ts';

export interface LoginFormProps extends AuthIslandProps {
  locale: Locale;
  turnstileSiteKey?: string | undefined;
}

const OAUTH_ERRORS = {
  cancelled: 'oauth_error_cancelled',
  failed: 'oauth_error_failed',
  email_unverified: 'oauth_error_email_unverified',
  email_missing: 'oauth_error_email_missing',
  banned: 'oauth_error_banned',
  already_linked: 'oauth_error_already_linked',
  unavailable: 'oauth_error_unavailable',
} as const;

function oauthErrorKey(code: string): (typeof OAUTH_ERRORS)[keyof typeof OAUTH_ERRORS] {
  return OAUTH_ERRORS[code as keyof typeof OAUTH_ERRORS] ?? 'oauth_error_failed';
}

type LoginField = 'identifier' | 'password';

const IDS: Record<LoginField, string> = { identifier: 'login-identifier', password: 'login-password' };

export default function LoginForm({ messages, lang, ...props }: LoginFormProps) {
  return (
    <AuthIsland messages={messages} lang={lang}>
      <LoginFormBody {...props} />
    </AuthIsland>
  );
}

function LoginFormBody({ locale, turnstileSiteKey }: Omit<LoginFormProps, keyof AuthIslandProps>) {
  const t = useT();
  const notify = useNotify();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<FieldErrors<LoginField>>({});
  const [failure, setFailure] = useState<FormFailure | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [needsTurnstile, setNeedsTurnstile] = useState(false);
  const [next, setNext] = useState<string | null>(null);
  const [providers, setProviders] = useState<AuthProviders | null>(null);
  const [signedIn, setSignedIn] = useState<MeSummary | null>(null);
  const [retryIn, startRetry] = useCountdown();
  const alertRef = useRef<HTMLDivElement | null>(null);
  const turnstile = useTurnstile({
    siteKey: turnstileSiteKey,
    action: 'login',
    language: useLang(),
    enabled: needsTurnstile,
  });
  useFocusOnChange(failure, alertRef);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setNext(params.get(NEXT_PARAM));
    for (const flag of flagToasts(params)) notify(flag.kind, t(flag.messageKey));
    const oauthError = params.get('oauth_error');
    if (oauthError) notify('error', t('oauth_error_title'), t(oauthErrorKey(oauthError)));
    stripUrlParams(['oauth_error']);
    const providersRequest = new AbortController();
    authApi.providers({ signal: providersRequest.signal }).then((result) => {
      if (result.ok) setProviders(result.data);
    });
    if (!hasSignedInHint(document.cookie)) return () => providersRequest.abort();
    const controller = new AbortController();
    authApi.summary({ signal: controller.signal }).then((result) => {
      if (result.ok) setSignedIn(result.data);
    });
    return () => {
      providersRequest.abort();
      controller.abort();
    };
  }, []);

  const { prepare } = turnstile;
  useEffect(() => {
    if (needsTurnstile) prepare();
  }, [needsTurnstile, prepare]);

  const destination = safeNext(next, locale);
  const discordHref = `/api/v2/auth/oauth/discord/start?${new URLSearchParams({
    intent: 'login',
    locale,
    ...(destination !== localizePath('/', locale) ? { next: destination } : {}),
  })}`;

  function validate(): FieldErrors<LoginField> {
    const found: FieldErrors<LoginField> = {};
    const identifierError = checkIdentifier(t, identifier);
    const passwordError = checkCurrentPassword(t, password);
    if (identifierError) found.identifier = identifierError;
    if (passwordError) found.password = passwordError;
    return found;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting || retryIn > 0) return;
    const found = validate();
    setErrors(found);
    const firstInvalid = (Object.keys(IDS) as LoginField[]).find((field) => found[field]);
    if (firstInvalid) {
      document.getElementById(IDS[firstInvalid])?.focus();
      return;
    }
    setSubmitting(true);
    setFailure(null);
    let turnstileToken: string | undefined;
    if (needsTurnstile) {
      try {
        turnstileToken = await turnstile.getToken();
      } catch {
        setSubmitting(false);
        setFailure({ ok: false, kind: 'turnstile' });
        return;
      }
    }
    const result = await authApi.login({
      identifier: identifier.trim(),
      password,
      remember,
      ...(turnstileToken ? { turnstileToken } : {}),
    });
    if (needsTurnstile) turnstile.reset();
    if (result.ok) {
      // Full navigation: the header, caches and islands start from the new session.
      window.location.assign(destination);
      return;
    }
    setSubmitting(false);
    if (result.kind === 'problem') {
      const { problem } = result;
      if (problem.code === 'RATE_LIMITED') startRetry(problem.retryAfter ?? 60);
      if (problem.code === 'TURNSTILE_REQUIRED') setNeedsTurnstile(true);
      if (problem.code === 'VALIDATION_FAILED') {
        // Only length limits can fail here; the form shows them on the fields.
        const found: FieldErrors<LoginField> = {};
        for (const issue of problem.errors) {
          if (issue.path === 'identifier')
            found.identifier = checkIdentifier(t, identifier) ?? t('auth_error_invalid_value');
          if (issue.path === 'password')
            found.password = checkCurrentPassword(t, password) ?? t('auth_error_invalid_value');
        }
        setErrors(found);
      }
    }
    setFailure(result);
  }

  if (signedIn) {
    return (
      <div className="grid gap-4" data-auth-signed-in>
        <h2 className="font-display-caps text-display-xs text-fg">{t('auth_login_already_heading')}</h2>
        <p className="text-fg-muted">
          {t('auth_login_already_text', { name: signedIn.displayName, handle: signedIn.handle })}
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={destination} size="lg">
            {t('common_action_continue')}
          </ButtonLink>
          <form method="post" action="/logout">
            <input type="hidden" name="next" value={localizePath('/login', locale)} />
            <Button type="submit" variant="outline" size="lg">
              {t('auth_login_already_sign_out')}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  const failureDetail =
    failure?.kind === 'problem' && failure.problem.code === 'TURNSTILE_REQUIRED'
      ? turnstileSiteKey
        ? t('auth_login_turnstile_hint')
        : undefined
      : undefined;

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onFocusCapture={() => needsTurnstile && turnstile.prepare()}
      className="grid gap-5"
      aria-describedby={failure ? 'login-alert' : undefined}
      data-auth-form="login"
    >
      <div id="login-alert">
        <FormAlert
          failure={failure}
          retryIn={retryIn}
          alertRef={alertRef}
          {...(failureDetail ? { detail: failureDetail } : {})}
        />
      </div>
      <Field label={t('auth_field_identifier')} error={errors.identifier} name="identifier">
        <Input
          id={IDS.identifier}
          value={identifier}
          onValueChange={(value) => setIdentifier(value)}
          onBlur={() => {
            if (identifier)
              setErrors((current) => withFieldError(current, 'identifier', checkIdentifier(t, identifier)));
          }}
          autoComplete="username"
          autoCapitalize="none"
          spellCheck={false}
          enterKeyHint="next"
          maxLength={254}
          required
        />
      </Field>
      <div className="grid gap-1.5">
        <PasswordField
          id={IDS.password}
          label={t('auth_field_password')}
          value={password}
          onValueChange={setPassword}
          error={errors.password}
          autoComplete="current-password"
          enterKeyHint="go"
          maxLength={1024}
          required
        />
        <a
          href={localizePath('/forgot-password', locale)}
          className="justify-self-end text-sm text-link underline-offset-3 hover:underline"
        >
          {t('auth_login_forgot')}
        </a>
      </div>
      <Checkbox label={t('auth_field_remember')} checked={remember} onCheckedChange={setRemember} name="remember" />
      <TurnstileSlot containerRef={turnstile.containerRef} />
      <Button type="submit" size="lg" block loading={submitting} disabled={retryIn > 0} glow>
        {retryIn > 0 ? t('auth_rate_limited_submit', { seconds: retryIn }) : t('auth_login_submit')}
      </Button>
      {providers?.discord ? (
        <div className="grid gap-4" data-auth-oauth="discord">
          <p className="flex items-center gap-3 text-xs text-fg-subtle before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
            {t('oauth_divider')}
          </p>
          <ButtonLink href={discordHref} variant="outline" size="lg" block>
            {t('oauth_discord_continue')}
          </ButtonLink>
        </div>
      ) : null}
      <p className="text-center text-sm text-fg-muted">
        {t('auth_login_new_here')}{' '}
        <a
          href={withNext(localizePath('/register', locale), next, locale)}
          className="font-semibold text-link underline-offset-3 hover:underline"
        >
          {t('auth_login_create_account')}
        </a>
      </p>
      <p className="text-center text-xs text-fg-subtle">{t('auth_login_legacy_note')}</p>
    </form>
  );
}
