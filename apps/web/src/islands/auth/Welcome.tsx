/**
 * Welcome (research/03 §6.13): shown right after sign-up. The account is signed in but
 * unverified, so the page says where the verification link went (and can send it again) and
 * offers «Continue», which goes to the allowed `?next=` destination in the page language.
 */
import type { Locale } from '@sotf/i18n';
import { Button, ButtonLink } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { MailCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { authApi } from './api.ts';
import { useT } from './i18n.tsx';
import { safeNext } from './next.ts';
import { failureText, useCountdown, useNotify } from './shared.tsx';

export interface WelcomeProps {
  locale: Locale;
  email: string;
  next: string | null;
}

type ResendState = 'idle' | 'sending' | 'sent';

export default function Welcome({ locale, email, next }: WelcomeProps) {
  const t = useT();
  const notify = useNotify();
  const [resend, setResend] = useState<ResendState>('idle');
  const [retryIn, startRetry] = useCountdown();
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  // The form was replaced: move focus to the new heading so the change is announced.
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  async function onResend() {
    if (resend === 'sending' || retryIn > 0) return;
    setResend('sending');
    const result = await authApi.resendVerification();
    if (result.ok) {
      setResend('sent');
      notify('success', t('auth_welcome_resent'));
      return;
    }
    if (result.kind === 'problem' && result.problem.code === 'CONFLICT') {
      // Already verified (e.g. from the email in another tab): nothing left to send.
      setResend('sent');
      notify('success', t('auth_verify_already'));
      return;
    }
    setResend('idle');
    if (result.kind === 'problem' && result.problem.code === 'RATE_LIMITED') {
      startRetry(result.problem.retryAfter ?? 60);
    }
    const text = failureText(t, result);
    notify('error', text.title, text.detail);
  }

  const destination = safeNext(next, locale);

  return (
    <section className="grid gap-6" aria-labelledby="welcome-heading" data-auth-welcome>
      <div className="grid gap-3">
        <h2 id="welcome-heading" ref={headingRef} className="text-2xl font-bold text-fg outline-none" tabIndex={-1}>
          {t('common_welcome')}
        </h2>
        <div className="flex gap-3 border-y border-border py-3 text-sm text-fg">
          <Icon icon={MailCheck} size={18} className="mt-0.5 shrink-0 text-fg-muted" />
          <div className="grid gap-2">
            <p>{t('auth_welcome_verify', { email })}</p>
            <div>
              <Button
                variant="link"
                onClick={onResend}
                loading={resend === 'sending'}
                disabled={resend === 'sent' || retryIn > 0}
              >
                {resend === 'sent'
                  ? t('auth_welcome_resent')
                  : retryIn > 0
                    ? t('auth_rate_limited_submit', { seconds: retryIn })
                    : t('auth_welcome_resend')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ButtonLink href={destination} size="lg" block data-welcome-continue>
        {t('common_action_continue')}
      </ButtonLink>
    </section>
  );
}
