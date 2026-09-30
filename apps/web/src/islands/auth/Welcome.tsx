/**
 * «Day 1 on the island» (research/03 §6.13): shown right after sign-up. The account is signed in
 * but unverified, so the page says where the verification link went (and can send it again), then
 * offers the three onboarding cards: language, theme and following popular mods.
 *
 * Language and theme are saved to the account (`PATCH /me/settings`) and applied at once; the
 * «Continue» button goes to the allowed `?next=` destination in the chosen language.
 */
import { LOCALE_INFO, LOCALES, type Locale, localizePath } from '@sotf/i18n';
import { Button, ButtonLink } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { onThemeChange } from '@sotf/ui/theme';
import { ThemeToggle } from '@sotf/ui/theme-toggle';
import { Compass, Languages, MailCheck, SunMoon } from 'lucide-react';
import { type ReactNode, useEffect, useId, useRef, useState } from 'react';
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

function Card({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <li className="grid content-start gap-3 rounded-lg border border-border bg-surface p-4">
      <h3 className="flex items-center gap-2 text-base font-semibold text-fg">
        <span className="flex text-signal">{icon}</span>
        {title}
      </h3>
      {children}
    </li>
  );
}

export default function Welcome({ locale, email, next }: WelcomeProps) {
  const t = useT();
  const notify = useNotify();
  const [chosenLocale, setChosenLocale] = useState<Locale>(locale);
  const [resend, setResend] = useState<ResendState>('idle');
  const [retryIn, startRetry] = useCountdown();
  const languageId = useId();
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  // The form was replaced: move focus to the new heading so the change is announced.
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  // The theme toggle applies the theme locally; remember it on the account too.
  useEffect(
    () =>
      onThemeChange((theme) => {
        void authApi.updateSettings({ theme });
      }),
    [],
  );

  async function saveLocale(value: Locale) {
    setChosenLocale(value);
    const result = await authApi.updateSettings({ locale: value });
    if (!result.ok) {
      const text = failureText(t, result);
      notify('error', text.title, text.detail);
    }
  }

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

  const destination = safeNext(next, chosenLocale);

  return (
    <section className="grid gap-6" aria-labelledby="welcome-heading" data-auth-welcome>
      <div className="grid gap-3">
        <p className="readout text-signal">{t('common_day_on_island', { day: 1 })}</p>
        <h2
          id="welcome-heading"
          ref={headingRef}
          className="font-display-caps text-display-xs text-fg outline-none"
          tabIndex={-1}
        >
          {t('common_welcome')}
        </h2>
        <div className="flex gap-3 rounded-md border border-signal/40 bg-signal-soft p-3 text-sm text-fg">
          <Icon icon={MailCheck} size={18} className="mt-0.5 shrink-0 text-signal" />
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

      <div className="grid gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-fg-muted">{t('auth_onboarding_heading')}</h3>
        <ul className="grid gap-3">
          <Card icon={<Icon icon={Languages} size={18} />} title={t('common_language_label')}>
            <p className="text-sm text-fg-muted">{t('auth_onboarding_language_text')}</p>
            <label htmlFor={languageId} className="sr-only">
              {t('common_language_label')}
            </label>
            <select
              id={languageId}
              value={chosenLocale}
              onChange={(event) => void saveLocale(event.target.value as Locale)}
              className="h-10 w-full rounded-md border border-border-strong bg-sunken px-3 text-base text-fg md:text-sm"
            >
              {LOCALES.map((code) => (
                <option key={code} value={code} lang={code}>
                  {LOCALE_INFO[code].endonym}
                </option>
              ))}
            </select>
          </Card>
          <Card icon={<Icon icon={SunMoon} size={18} />} title={t('common_theme_label')}>
            <p className="text-sm text-fg-muted">{t('auth_onboarding_theme_text')}</p>
            <ThemeToggle showLabels />
          </Card>
          <Card icon={<Icon icon={Compass} size={18} />} title={t('auth_onboarding_follow_title')}>
            <p className="text-sm text-fg-muted">{t('auth_onboarding_follow_text')}</p>
            <a
              href={`${localizePath('/mods', chosenLocale)}?sort=downloads`}
              className="text-sm font-semibold text-link underline underline-offset-3"
            >
              {t('auth_onboarding_follow_cta')}
            </a>
          </Card>
        </ul>
      </div>

      <ButtonLink href={destination} size="lg" block data-welcome-continue>
        {t('common_action_continue')}
      </ButtonLink>
    </section>
  );
}
