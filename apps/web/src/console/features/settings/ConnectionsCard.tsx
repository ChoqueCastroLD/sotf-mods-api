/**
 * Settings → Security → Connected accounts (T1-01): the Discord account linked to this user. The
 * card is absent when the server has no Discord credentials and nothing is linked. Linking starts
 * the OAuth round trip (`/api/v2/auth/oauth/discord/start?intent=link`); the callback lands back
 * here with `?linked=discord` or `?oauth_error=`. Unlinking asks for the password.
 */
import { isApiError } from '@sotf/contracts/client';
import { OAUTH_ERRORS, type OAuthError } from '@sotf/contracts/oauth';
import { m } from '@sotf/i18n/messages';
import { Button, ButtonLink } from '@sotf/ui/button';
import { Dialog } from '@sotf/ui/dialog';
import { PasswordField } from '@sotf/ui/password-field';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useId, useState } from 'react';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { connectionsQuery, settingsApi, settingsKeys } from './api.ts';
import { failureDetail } from './errors.ts';
import { localDate } from './format.ts';
import { SettingsCard } from './layout.tsx';

const ERROR_TEXT: Record<OAuthError, () => string> = {
  cancelled: () => m.oauth_error_cancelled(),
  failed: () => m.oauth_error_failed(),
  email_unverified: () => m.oauth_error_email_unverified(),
  email_missing: () => m.oauth_error_email_missing(),
  banned: () => m.oauth_error_banned(),
  already_linked: () => m.oauth_error_already_linked(),
  unavailable: () => m.oauth_error_unavailable(),
};

export function ConnectionsCard() {
  const queryClient = useQueryClient();
  const { data } = useSuspenseQuery(connectionsQuery);
  const formId = useId();
  const [unlinking, setUnlinking] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // The callback reports its result in the address; show it once and clean the URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const failure = params.get('oauth_error');
    const linked = params.get('linked');
    if (!failure && !linked) return;
    if (linked === 'discord') notify.success(m.oauth_linked_toast());
    if (failure) {
      const known = (OAUTH_ERRORS as readonly string[]).includes(failure) ? (failure as OAuthError) : 'failed';
      notify.error(m.oauth_error_title(), { description: ERROR_TEXT[known]() });
    }
    params.delete('oauth_error');
    params.delete('linked');
    const query = params.toString();
    window.history.replaceState(window.history.state, '', `${window.location.pathname}${query ? `?${query}` : ''}`);
    void queryClient.invalidateQueries({ queryKey: settingsKeys.connections, exact: true });
  }, [queryClient]);

  const discord = data.items.find((item) => item.provider === 'discord');
  if (!discord && !data.available.discord) return null;

  const close = () => {
    setUnlinking(false);
    setPassword('');
    setError(null);
  };

  const submit = async () => {
    if (!password) {
      setError(m.settings_password_required());
      return;
    }
    setSaving(true);
    setError(null);
    try {
      await settingsApi.unlinkConnection('discord', password);
      queryClient.setQueryData<typeof data>(settingsKeys.connections, (current) =>
        current ? { ...current, items: current.items.filter((item) => item.provider !== 'discord') } : current,
      );
      close();
      notify.success(m.oauth_unlinked_toast());
    } catch (failure) {
      if (isApiError(failure) && failure.code === 'INVALID_CREDENTIALS') setError(m.settings_password_wrong());
      else setError(failureDetail(failure));
    } finally {
      setSaving(false);
    }
  };

  const start = `/api/v2/auth/oauth/discord/start?${new URLSearchParams({
    intent: 'link',
    next: '/settings/security',
    locale: activeLocale(),
  })}`;

  return (
    <SettingsCard
      id="security-connections"
      title={m.oauth_connections_title()}
      description={m.oauth_connections_text()}
    >
      <div className="flex flex-wrap items-center gap-3 rounded-md border border-border p-3">
        <div className="grid min-w-0 flex-1 gap-0.5">
          <p className="font-semibold text-fg">Discord</p>
          <p className="text-xs text-fg-muted">
            {discord
              ? m.oauth_connected_as({ username: discord.username, date: localDate(discord.linkedAt) })
              : m.oauth_not_connected()}
          </p>
        </div>
        {discord ? (
          <Button variant="secondary" size="sm" onClick={() => setUnlinking(true)}>
            {m.oauth_unlink_action()}
          </Button>
        ) : (
          <ButtonLink href={start} size="sm">
            {m.oauth_link_action()}
          </ButtonLink>
        )}
      </div>
      <Dialog
        open={unlinking}
        onOpenChange={(next) => {
          if (!next) close();
        }}
        title={m.oauth_unlink_title()}
        description={m.oauth_unlink_text()}
        footer={
          <>
            <Button variant="ghost" onClick={close}>
              {m.settings_cancel()}
            </Button>
            <Button variant="danger" type="submit" form={formId} loading={saving}>
              {m.oauth_unlink_action()}
            </Button>
          </>
        }
      >
        <form
          id={formId}
          className="grid gap-4"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            void submit();
          }}
        >
          <PasswordField
            label={m.settings_password_current()}
            autoComplete="current-password"
            value={password}
            onValueChange={setPassword}
            error={error}
          />
        </form>
      </Dialog>
    </SettingsCard>
  );
}
