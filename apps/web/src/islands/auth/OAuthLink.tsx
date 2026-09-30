/**
 * «Link your Discord account» island (`/oauth/link#ticket=`, T1-01). The Discord callback found an
 * account with the same verified email and sent the browser here with a single-use ticket in the
 * URL fragment (never sent to servers or logs). The user proves ownership with the account
 * password; the API then links Discord and signs in.
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
import { isPlausibleToken } from './token.ts';
import { checkCurrentPassword } from './validation.ts';

export interface OAuthLinkProps extends AuthIslandProps {
  locale: Locale;
}

const PASSWORD_ID = 'oauth-link-password';
const DEAD_LINK = new Set(['GONE', 'NOT_FOUND']);

export default function OAuthLink({ messages, lang, ...props }: OAuthLinkProps) {
  return (
    <AuthIsland messages={messages} lang={lang}>
      <OAuthLinkBody {...props} />
    </AuthIsland>
  );
}

function OAuthLinkBody({ locale }: Omit<OAuthLinkProps, keyof AuthIslandProps>) {
  const t = useT();
  // undefined = not read yet, null = no usable ticket.
  const [ticket, setTicket] = useState<string | null | undefined>(undefined);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [failure, setFailure] = useState<FormFailure | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [retryIn, startRetry] = useCountdown();
  const alertRef = useRef<HTMLDivElement | null>(null);
  useFocusOnChange(failure, alertRef);

  useEffect(() => {
    const value = new URLSearchParams(window.location.hash.replace(/^#/, '')).get('ticket');
    setTicket(isPlausibleToken(value) ? value : null);
    // Keep the secret out of the address bar and the history.
    if (window.location.hash) window.history.replaceState(window.history.state, '', window.location.pathname);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ticket || submitting || retryIn > 0) return;
    const message = checkCurrentPassword(t, password);
    setError(message);
    if (message) {
      document.getElementById(PASSWORD_ID)?.focus();
      return;
    }
    setSubmitting(true);
    setFailure(null);
    const result = await authApi.confirmOAuthLink({ ticket, password });
    if (result.ok) {
      window.location.assign(localizePath('/', locale));
      return;
    }
    setSubmitting(false);
    if (result.kind === 'problem') {
      const { problem } = result;
      if (DEAD_LINK.has(problem.code)) {
        setTicket(null);
        return;
      }
      if (problem.code === 'RATE_LIMITED') startRetry(problem.retryAfter ?? 60);
      if (problem.code === 'VALIDATION_FAILED') {
        setError(t('auth_error_invalid_value'));
        return;
      }
    }
    setFailure(result);
  }

  if (ticket === null) {
    return (
      <section className="grid gap-4" data-auth-dead-link>
        <h2 className="font-display-caps text-display-xs text-fg">{t('oauth_link_invalid_heading')}</h2>
        <p className="text-fg-muted">{t('oauth_link_invalid_text')}</p>
        <div>
          <ButtonLink href={localizePath('/login', locale)} size="lg">
            {t('auth_back_to_sign_in')}
          </ButtonLink>
        </div>
      </section>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="grid gap-5"
      data-auth-form="oauth-link"
      aria-busy={ticket === undefined}
    >
      <p className="text-fg-muted">{t('oauth_link_text')}</p>
      <FormAlert failure={failure} retryIn={retryIn} alertRef={alertRef} />
      <PasswordField
        id={PASSWORD_ID}
        label={t('oauth_link_password')}
        value={password}
        onValueChange={setPassword}
        error={error}
        autoComplete="current-password"
        enterKeyHint="go"
        maxLength={1024}
        required
        disabled={ticket === undefined}
      />
      <Button type="submit" size="lg" block loading={submitting} disabled={ticket === undefined || retryIn > 0} glow>
        {retryIn > 0 ? t('auth_rate_limited_submit', { seconds: retryIn }) : t('oauth_link_submit')}
      </Button>
    </form>
  );
}
