/**
 * Settings → Security: passkeys (T1-26). Adding one confirms the password, asks the browser to
 * create the credential (`@simplewebauthn/browser`, loaded on demand) and stores it; a passkey
 * signs in without a password and can answer the second step. Removing one confirms the password.
 */
import { isApiError } from '@sotf/contracts/client';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { PasswordField } from '@sotf/ui/password-field';
import { useQueryClient } from '@tanstack/react-query';
import { KeyRound } from 'lucide-react';
import { useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { type Passkey, type SecurityOverview, settingsApi, settingsKeys } from './api.ts';
import { failureDetail } from './errors.ts';
import { localDate, relativeTime } from './format.ts';
import { SettingsCard } from './layout.tsx';

type Panel = { kind: 'add' } | { kind: 'rename'; passkey: Passkey } | { kind: 'remove'; passkey: Passkey } | null;

const supported = () => typeof window !== 'undefined' && typeof window.PublicKeyCredential === 'function';

export function PasskeysCard({ overview }: { overview: SecurityOverview }) {
  const queryClient = useQueryClient();
  const [panel, setPanel] = useState<Panel>(null);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState<{ password?: string; name?: string; form?: string }>({});
  const [busy, setBusy] = useState(false);

  const refresh = () => queryClient.invalidateQueries({ queryKey: settingsKeys.security });
  const close = () => {
    setPanel(null);
    setPassword('');
    setName('');
    setErrors({});
  };
  const open = (next: Panel) => {
    close();
    setPanel(next);
    if (next?.kind === 'rename') setName(next.passkey.name);
  };
  const fail = (failure: unknown) => {
    if (isApiError(failure) && failure.code === 'INVALID_CREDENTIALS') {
      setErrors({ password: m.settings_password_wrong() });
    } else {
      setErrors({ form: failureDetail(failure) });
    }
  };

  const submit = async () => {
    if (!panel) return;
    if (panel.kind !== 'rename' && !password) return setErrors({ password: m.settings_password_required() });
    if (panel.kind === 'rename' && !name.trim()) return setErrors({ name: m.settings_password_required() });
    setBusy(true);
    try {
      if (panel.kind === 'add') {
        const started = await settingsApi.passkeyRegistrationOptions(password);
        let credential: Record<string, unknown>;
        try {
          const { startRegistration } = await import('@simplewebauthn/browser');
          credential = (await startRegistration({
            optionsJSON: started.options as unknown as Parameters<typeof startRegistration>[0]['optionsJSON'],
          })) as unknown as Record<string, unknown>;
        } catch {
          setErrors({ form: m.settings_passkeys_cancelled() });
          return;
        }
        await settingsApi.registerPasskey(started.challengeId, credential, name.trim() || undefined);
        await refresh();
        notify.success(m.settings_passkeys_added_toast());
        close();
      } else if (panel.kind === 'rename') {
        await settingsApi.renamePasskey(panel.passkey.id, name.trim());
        await refresh();
        close();
      } else {
        await settingsApi.removePasskey(panel.passkey.id, password);
        await refresh();
        notify.success(m.settings_passkeys_removed_toast());
        close();
      }
    } catch (failure) {
      fail(failure);
    } finally {
      setBusy(false);
    }
  };

  return (
    <SettingsCard id="security-passkeys" title={m.settings_passkeys_title()} description={m.settings_passkeys_text()}>
      {overview.passkeys.length === 0 ? (
        <p className="text-sm text-fg-muted">{m.settings_passkeys_empty()}</p>
      ) : (
        <ul className="grid divide-y divide-border rounded-md border border-border">
          {overview.passkeys.map((passkey) => (
            <li key={passkey.id} className="flex flex-wrap items-center gap-3 p-3">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-fg/8 text-fg-muted"
              >
                <Icon icon={KeyRound} size={18} />
              </span>
              <div className="grid min-w-0 flex-1 gap-0.5">
                <p className="flex flex-wrap items-center gap-2 font-semibold text-fg">
                  {passkey.name}
                  {passkey.deviceType === 'multiDevice' ? (
                    <Badge size="sm">{m.settings_passkeys_synced()}</Badge>
                  ) : null}
                </p>
                <p className="text-xs text-fg-muted">
                  {[
                    m.settings_passkeys_created({ date: localDate(passkey.createdAt) }),
                    passkey.lastUsedAt
                      ? m.settings_passkeys_last_used({ when: relativeTime(passkey.lastUsedAt) })
                      : m.settings_passkeys_never(),
                  ].join(' · ')}
                </p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => open({ kind: 'rename', passkey })}>
                {m.settings_passkeys_rename()}
                <span className="sr-only"> · {passkey.name}</span>
              </Button>
              <Button variant="secondary" size="sm" onClick={() => open({ kind: 'remove', passkey })}>
                {m.settings_passkeys_remove()}
                <span className="sr-only"> · {passkey.name}</span>
              </Button>
            </li>
          ))}
        </ul>
      )}

      {panel === null ? (
        supported() ? (
          <div>
            <Button variant="secondary" onClick={() => open({ kind: 'add' })}>
              {m.settings_passkeys_add()}
            </Button>
          </div>
        ) : (
          <p className="text-sm text-fg-muted">{m.settings_passkeys_unsupported()}</p>
        )
      ) : (
        <form
          noValidate
          className="grid gap-4 rounded-md border border-border p-4"
          onSubmit={(event) => {
            event.preventDefault();
            void submit();
          }}
        >
          {panel.kind === 'remove' ? (
            <p className="text-sm text-fg-muted">{m.settings_passkeys_remove_text({ name: panel.passkey.name })}</p>
          ) : null}
          {panel.kind === 'add' || panel.kind === 'rename' ? (
            <Field label={m.settings_passkeys_name()} error={errors.name}>
              <Input value={name} onValueChange={setName} maxLength={40} autoComplete="off" />
            </Field>
          ) : null}
          {panel.kind !== 'rename' ? (
            <PasswordField
              label={m.settings_password_current()}
              autoComplete="current-password"
              value={password}
              onValueChange={setPassword}
              error={errors.password}
            />
          ) : null}
          {errors.form ? (
            <p role="alert" className="text-sm text-danger">
              {errors.form}
            </p>
          ) : null}
          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="ghost" onClick={close} disabled={busy}>
              {m.settings_2fa_cancel()}
            </Button>
            <Button type="submit" variant={panel.kind === 'remove' ? 'danger' : 'primary'} loading={busy}>
              {panel.kind === 'add'
                ? m.settings_passkeys_add()
                : panel.kind === 'rename'
                  ? m.settings_passkeys_save()
                  : m.settings_passkeys_remove()}
            </Button>
          </div>
        </form>
      )}
    </SettingsCard>
  );
}
