/**
 * Email verification island (`/verify-email?token=`, T0-13). The same page confirms a new account
 * and a changed address (`POST /auth/email/verify` accepts both token kinds).
 *
 * The link is confirmed automatically when the page opens (the token is single use and only
 * reaches the owner of the mailbox). Expired or used links offer a new one: directly when the
 * visitor is signed in (`POST /auth/email/resend`), otherwise after signing in.
 */
import { type Locale, localizePath } from '@sotf/i18n';
import { Button, ButtonLink } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { RadarSpinner } from '@sotf/ui/spinner';
import { CircleCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { hasSignedInHint } from '../../scripts/account-hint.ts';
import { authApi } from './api.ts';
import { useT } from './i18n.tsx';
import {
  AuthIsland,
  type AuthIslandProps,
  FormAlert,
  type FormFailure,
  failureText,
  useCountdown,
  useFocusOnChange,
  useNotify,
} from './shared.tsx';
import { forgetEmailToken, takeEmailToken } from './token.ts';

export interface VerifyEmailProps extends AuthIslandProps {
  locale: Locale;
}

type State = 'checking' | 'verified' | 'invalid' | 'failed';

const DEAD_LINK = new Set(['GONE', 'NOT_FOUND', 'VALIDATION_FAILED']);

export default function VerifyEmail({ messages, lang, ...props }: VerifyEmailProps) {
  return (
    <AuthIsland messages={messages} lang={lang}>
      <VerifyEmailBody {...props} />
    </AuthIsland>
  );
}

function VerifyEmailBody({ locale }: Omit<VerifyEmailProps, keyof AuthIslandProps>) {
  const t = useT();
  const notify = useNotify();
  const [state, setState] = useState<State>('checking');
  const [failure, setFailure] = useState<FormFailure | null>(null);
  const [signedIn, setSignedIn] = useState(false);
  const [resending, setResending] = useState(false);
  const [resent, setResent] = useState(false);
  const [retryIn, startRetry] = useCountdown();
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const tokenRef = useRef<string | null>(null);
  useFocusOnChange(state, headingRef);

  async function verify(token: string) {
    setState('checking');
    setFailure(null);
    const result = await authApi.verifyEmail({ token });
    if (result.ok) {
      forgetEmailToken();
      setState('verified');
      return;
    }
    if (result.kind === 'problem' && DEAD_LINK.has(result.problem.code)) {
      forgetEmailToken();
      setState('invalid');
      return;
    }
    if (result.kind === 'problem' && result.problem.code === 'CONFLICT') {
      // Already verified (e.g. in another tab): the address is confirmed, nothing left to do.
      forgetEmailToken();
      setResent(true);
      setState('verified');
      notify('info', t('auth_verify_already'));
      return;
    }
    if (result.kind === 'problem' && result.problem.code === 'RATE_LIMITED') {
      startRetry(result.problem.retryAfter ?? 60);
    }
    setFailure(result);
    setState('failed');
  }

  useEffect(() => {
    setSignedIn(hasSignedInHint(document.cookie));
    const token = takeEmailToken();
    tokenRef.current = token;
    if (token) void verify(token);
    else setState('invalid');
  }, []);

  async function onResend() {
    if (resending || retryIn > 0) return;
    setResending(true);
    const result = await authApi.resendVerification();
    setResending(false);
    if (result.ok) {
      setResent(true);
      notify('success', t('auth_welcome_resent'));
      return;
    }
    if (result.kind === 'problem' && result.problem.code === 'RATE_LIMITED') {
      startRetry(result.problem.retryAfter ?? 60);
    }
    if (result.kind === 'problem' && result.problem.code === 'UNAUTHENTICATED') {
      setSignedIn(false);
    }
    const text = failureText(t, result, retryIn);
    notify('error', text.title, text.detail);
  }

  if (state === 'checking') {
    return (
      <p className="flex items-center gap-3 text-fg-muted" role="status" data-auth-verify="checking">
        <RadarSpinner size={20} className="text-signal" />
        {t('auth_verify_checking')}
      </p>
    );
  }

  if (state === 'verified') {
    return (
      <section className="grid gap-4" data-auth-verify="verified">
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="flex items-center gap-2 font-display-caps text-display-xs text-fg outline-none"
        >
          <Icon icon={CircleCheck} size={24} className="text-success" />
          {t('auth_verify_done_heading')}
        </h2>
        <p className="text-fg-muted">{t('auth_verify_done_text')}</p>
        <div>
          <ButtonLink
            href={signedIn ? localizePath('/', locale) : `${localizePath('/login', locale)}?verified=1`}
            size="lg"
          >
            {signedIn ? t('common_action_continue') : t('common_account_sign_in')}
          </ButtonLink>
        </div>
      </section>
    );
  }

  if (state === 'failed') {
    return (
      <section className="grid gap-4" data-auth-verify="failed">
        <h2 ref={headingRef} tabIndex={-1} className="font-display-caps text-display-xs text-fg outline-none">
          {t('auth_verify_heading')}
        </h2>
        <FormAlert failure={failure} retryIn={retryIn} />
        <div>
          <Button
            size="lg"
            disabled={retryIn > 0}
            onClick={() => {
              if (tokenRef.current) void verify(tokenRef.current);
            }}
          >
            {retryIn > 0 ? t('auth_rate_limited_submit', { seconds: retryIn }) : t('common_action_retry')}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="grid gap-4" data-auth-verify="invalid">
      <h2 ref={headingRef} tabIndex={-1} className="font-display-caps text-display-xs text-fg outline-none">
        {t('auth_verify_invalid_heading')}
      </h2>
      <p className="text-fg-muted">{t('auth_verify_invalid_text')}</p>
      <div className="flex flex-wrap gap-3">
        {signedIn ? (
          <Button size="lg" onClick={onResend} loading={resending} disabled={resent || retryIn > 0}>
            {resent
              ? t('auth_welcome_resent')
              : retryIn > 0
                ? t('auth_rate_limited_submit', { seconds: retryIn })
                : t('auth_verify_resend')}
          </Button>
        ) : (
          <ButtonLink href={localizePath('/login', locale)} size="lg">
            {t('auth_verify_sign_in_to_resend')}
          </ButtonLink>
        )}
      </div>
    </section>
  );
}
