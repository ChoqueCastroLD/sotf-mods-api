/**
 * Settings → Security (T0-13, T1-02, T1-26): two-step verification, passkeys and the active
 * sessions (device and browser, country, when it started, last activity) with «Sign out» per
 * session and «Sign out everywhere else». Signing out the current session ends at the login page.
 * Moderators and admins without a second factor see a banner (a prompt, never enforced).
 */
import { toHtmlLang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { Icon } from '@sotf/ui/icons';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { LogOut, Monitor, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { redirectToLogin } from '../../lib/auth.ts';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { type Session, securityQuery, sessionsQuery, settingsApi, settingsKeys } from './api.ts';
import { ConnectionsCard } from './ConnectionsCard.tsx';
import { failureDescription } from './errors.ts';
import { localDateTime, relativeTime } from './format.ts';
import { SettingsCard, SettingsPage } from './layout.tsx';
import { PasskeysCard } from './PasskeysCard.tsx';
import { TwoFactorCard } from './TwoFactorCard.tsx';

const MOBILE = /android|iphone|ipad|ios|mobile/i;

function countryName(code: string | null): string | null {
  if (!code) return null;
  try {
    return new Intl.DisplayNames([toHtmlLang(activeLocale())], { type: 'region' }).of(code) ?? code;
  } catch {
    return code;
  }
}

export function SecurityScreen() {
  const queryClient = useQueryClient();
  const { data: sessions } = useSuspenseQuery(sessionsQuery);
  const { data: security } = useSuspenseQuery(securityQuery);
  const [confirm, setConfirm] = useState<Session | 'others' | null>(null);
  const others = sessions.filter((session) => !session.current);
  const ordered = [...sessions].sort((a, b) =>
    a.current === b.current ? Date.parse(b.lastSeenAt) - Date.parse(a.lastSeenAt) : a.current ? -1 : 1,
  );

  const revoke = async (target: Session | 'others') => {
    try {
      if (target === 'others') {
        await settingsApi.revokeOthers();
        queryClient.setQueryData<Session[]>(settingsKeys.sessions, (list) =>
          list?.filter((session) => session.current),
        );
        notify.success(m.settings_sessions_revoked_others());
        return;
      }
      await settingsApi.revokeSession(target.id);
      if (target.current) {
        redirectToLogin();
        return;
      }
      queryClient.setQueryData<Session[]>(settingsKeys.sessions, (list) =>
        list?.filter((session) => session.id !== target.id),
      );
      notify.success(
        m.settings_sessions_revoked({ device: target.deviceLabel ?? m.settings_sessions_unknown_device() }),
      );
    } catch (failure) {
      notify.error(m.settings_sessions_failed(), { description: failureDescription(failure) });
      throw failure;
    }
  };

  return (
    <SettingsPage section="security">
      {security.staffPrompt ? (
        <Banner tone="warning" title={m.settings_2fa_staff_title()}>
          {m.settings_2fa_staff_text()}
        </Banner>
      ) : null}
      <TwoFactorCard overview={security} />
      <PasskeysCard overview={security} />
      <SettingsCard id="security-sessions" title={m.settings_sessions_title()} description={m.settings_sessions_text()}>
        <ul className="grid divide-y divide-border rounded-md border border-border">
          {ordered.map((session) => {
            const device = session.deviceLabel ?? m.settings_sessions_unknown_device();
            const country = countryName(session.country);
            return (
              <li key={session.id} className="flex flex-wrap items-center gap-3 p-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-fg/8 text-fg-muted"
                >
                  <Icon icon={MOBILE.test(device) ? Smartphone : Monitor} size={18} />
                </span>
                <div className="grid min-w-0 flex-1 gap-0.5">
                  <p className="flex flex-wrap items-center gap-2 font-semibold text-fg">
                    {device}
                    {session.current ? (
                      <Badge variant="success" size="sm">
                        {m.settings_sessions_this_device()}
                      </Badge>
                    ) : null}
                  </p>
                  <p className="text-xs text-fg-muted">
                    {[
                      country,
                      m.settings_sessions_started({ date: localDateTime(session.createdAt) }),
                      session.current
                        ? m.settings_sessions_active_now()
                        : m.settings_sessions_last_seen({ when: relativeTime(session.lastSeenAt) }),
                    ]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                </div>
                <Button
                  variant={session.current ? 'ghost' : 'secondary'}
                  size="sm"
                  icon={<Icon icon={LogOut} size={16} />}
                  onClick={() => setConfirm(session)}
                >
                  {session.current ? m.settings_sessions_sign_out_here() : m.settings_sessions_sign_out()}
                  <span className="sr-only"> · {device}</span>
                </Button>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-fg-muted">{m.settings_sessions_count({ count: sessions.length })}</p>
          <Button
            variant="danger"
            size="sm"
            icon={<Icon icon={LogOut} size={16} />}
            disabled={others.length === 0}
            onClick={() => setConfirm('others')}
          >
            {m.settings_sessions_sign_out_others()}
          </Button>
        </div>
      </SettingsCard>
      <ConnectionsCard />
      <SettingsCard id="security-tips" title={m.settings_security_tips_title()}>
        <ul className="grid list-disc gap-1 ps-5 text-sm text-fg-muted">
          <li>{m.settings_security_tip_password()}</li>
          <li>{m.settings_security_tip_sessions()}</li>
          <li>{m.settings_security_tip_email()}</li>
        </ul>
      </SettingsCard>
      <ConfirmDialog
        open={confirm !== null}
        onOpenChange={(open) => {
          if (!open) setConfirm(null);
        }}
        title={
          confirm === 'others'
            ? m.settings_sessions_confirm_others_title()
            : confirm?.current
              ? m.settings_sessions_confirm_current_title()
              : m.settings_sessions_confirm_title()
        }
        description={
          confirm === 'others'
            ? m.settings_sessions_confirm_others_text({ count: others.length })
            : confirm?.current
              ? m.settings_sessions_confirm_current_text()
              : m.settings_sessions_confirm_text({
                  device: confirm?.deviceLabel ?? m.settings_sessions_unknown_device(),
                })
        }
        confirmLabel={confirm === 'others' ? m.settings_sessions_sign_out_others() : m.settings_sessions_sign_out()}
        tone="danger"
        onConfirm={() => (confirm ? revoke(confirm) : undefined)}
      />
    </SettingsPage>
  );
}
