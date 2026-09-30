/**
 * Settings → Access tokens (T1-08): personal access tokens for scripts and tools. Creating one
 * asks for the account password and shows the secret once; revoking is immediate.
 */

import { isApiError } from '@sotf/contracts/client';
import { PAT_EXPIRY_DAYS, PAT_SCOPES, type PatScope } from '@sotf/contracts/tokens';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Checkbox } from '@sotf/ui/checkbox';
import { ConfirmDialog, Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { PasswordField } from '@sotf/ui/password-field';
import { Select } from '@sotf/ui/select';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { Check, Copy, Plus, Trash2 } from 'lucide-react';
import { useId, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { type AccessToken, settingsApi, settingsKeys, tokensQuery } from './api.ts';
import { failureDescription, failureDetail } from './errors.ts';
import { localDate, relativeTime } from './format.ts';
import { SettingsCard, SettingsPage } from './layout.tsx';

const SCOPE_TEXT: Record<PatScope, { label: () => string; hint: () => string }> = {
  read: { label: () => m.tokens_scope_read(), hint: () => m.tokens_scope_read_hint() },
  'mods:write': { label: () => m.tokens_scope_mods_write(), hint: () => m.tokens_scope_mods_write_hint() },
  'social:write': { label: () => m.tokens_scope_social_write(), hint: () => m.tokens_scope_social_write_hint() },
};

const NEVER = 'never';
type Expiry = `${(typeof PAT_EXPIRY_DAYS)[number]}` | typeof NEVER;

export function TokensScreen() {
  const queryClient = useQueryClient();
  const { data } = useSuspenseQuery(tokensQuery);
  const [creating, setCreating] = useState(false);
  const [secret, setSecret] = useState<string | null>(null);
  const [revoking, setRevoking] = useState<AccessToken | null>(null);
  const full = data.items.length >= data.max;

  const revoke = async (token: AccessToken) => {
    try {
      await settingsApi.revokeToken(token.id);
      queryClient.setQueryData<typeof data>(settingsKeys.tokens, (current) =>
        current ? { ...current, items: current.items.filter((item) => item.id !== token.id) } : current,
      );
      notify.success(m.tokens_revoked_toast({ name: token.name }));
    } catch (failure) {
      notify.error(m.tokens_revoke_failed(), { description: failureDescription(failure) });
      throw failure;
    }
  };

  return (
    <SettingsPage section="tokens">
      <SettingsCard id="tokens-list" title={m.tokens_list_title()} description={m.tokens_intro()}>
        <code className="block overflow-x-auto rounded-md border border-border bg-sunken px-3 py-2 text-sm text-fg">
          Authorization: Bearer sotfm_pat_…
        </code>
        {data.items.length === 0 ? (
          <p className="text-sm text-fg-muted">{m.tokens_empty()}</p>
        ) : (
          <ul className="grid divide-y divide-border rounded-md border border-border">
            {data.items.map((token) => (
              <li key={token.id} className="flex flex-wrap items-center gap-3 p-3">
                <div className="grid min-w-0 flex-1 gap-1">
                  <p className="flex flex-wrap items-center gap-2 font-semibold text-fg">
                    <span className="break-all">{token.name}</span>
                    <span className="font-mono text-xs font-normal text-fg-muted">{token.prefix}…</span>
                  </p>
                  <p className="flex flex-wrap gap-1.5">
                    {token.scopes.map((scope) => (
                      <Badge key={scope} variant="neutral" size="sm">
                        {SCOPE_TEXT[scope].label()}
                      </Badge>
                    ))}
                  </p>
                  <p className="text-xs text-fg-muted">
                    {[
                      m.tokens_meta_created({ date: localDate(token.createdAt) }),
                      token.lastUsedAt
                        ? m.tokens_meta_last_used({ when: relativeTime(token.lastUsedAt) })
                        : m.tokens_meta_never_used(),
                      token.expiresAt
                        ? m.tokens_meta_expires({ date: localDate(token.expiresAt) })
                        : m.tokens_meta_no_expiry(),
                    ].join(' · ')}
                  </p>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<Icon icon={Trash2} size={16} />}
                  onClick={() => setRevoking(token)}
                >
                  {m.tokens_revoke()}
                  <span className="sr-only"> · {token.name}</span>
                </Button>
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-fg-muted">
            {full
              ? m.tokens_limit_reached({ max: data.max })
              : m.tokens_count({ count: data.items.length, max: data.max })}
          </p>
          <Button icon={<Icon icon={Plus} size={16} />} disabled={full} onClick={() => setCreating(true)}>
            {m.tokens_create_action()}
          </Button>
        </div>
      </SettingsCard>
      <CreateDialog
        open={creating}
        onClose={() => setCreating(false)}
        onCreated={(token, item) => {
          queryClient.setQueryData<typeof data>(settingsKeys.tokens, (current) =>
            current ? { ...current, items: [item, ...current.items] } : current,
          );
          setCreating(false);
          setSecret(token);
        }}
      />
      <SecretDialog secret={secret} onClose={() => setSecret(null)} />
      <ConfirmDialog
        open={revoking !== null}
        onOpenChange={(open) => {
          if (!open) setRevoking(null);
        }}
        title={m.tokens_revoke_title()}
        description={m.tokens_revoke_text({ name: revoking?.name ?? '' })}
        confirmLabel={m.tokens_revoke()}
        tone="danger"
        onConfirm={() => (revoking ? revoke(revoking) : undefined)}
      />
    </SettingsPage>
  );
}

function CreateDialog({
  open,
  onClose,
  onCreated,
}: {
  open: boolean;
  onClose: () => void;
  onCreated: (secret: string, item: AccessToken) => void;
}) {
  const formId = useId();
  const [name, setName] = useState('');
  const [scopes, setScopes] = useState<PatScope[]>(['read']);
  const [expiry, setExpiry] = useState<Expiry>('90');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; scopes?: string; password?: string; form?: string }>({});
  const [saving, setSaving] = useState(false);

  const reset = () => {
    setName('');
    setScopes(['read']);
    setExpiry('90');
    setPassword('');
    setErrors({});
  };
  const close = () => {
    reset();
    onClose();
  };

  const submit = async () => {
    const found: typeof errors = {};
    if (!name.trim()) found.name = m.tokens_error_name();
    if (scopes.length === 0) found.scopes = m.tokens_error_scopes();
    if (!password) found.password = m.settings_password_required();
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setSaving(true);
    try {
      const created = await settingsApi.createToken({
        name: name.trim(),
        scopes: PAT_SCOPES.filter((scope) => scopes.includes(scope)),
        expiresInDays: expiry === NEVER ? null : Number(expiry),
        password,
      });
      reset();
      notify.success(m.tokens_created_toast());
      onCreated(created.token, created.item);
    } catch (failure) {
      if (isApiError(failure) && failure.code === 'INVALID_CREDENTIALS') {
        setErrors({ password: m.settings_password_wrong() });
      } else setErrors({ form: failureDetail(failure) });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
      title={m.tokens_dialog_title()}
      description={m.tokens_dialog_text()}
      footer={
        <>
          <Button variant="ghost" onClick={close}>
            {m.settings_cancel()}
          </Button>
          <Button type="submit" form={formId} loading={saving}>
            {m.tokens_create_submit()}
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
        <Field label={m.tokens_field_name()} description={m.tokens_field_name_hint()} error={errors.name}>
          <Input value={name} maxLength={64} autoComplete="off" onValueChange={setName} />
        </Field>
        <fieldset className="grid gap-2">
          <legend className="mb-1 text-sm font-semibold text-fg">{m.tokens_scopes_legend()}</legend>
          {PAT_SCOPES.map((scope) => (
            <Checkbox
              key={scope}
              label={SCOPE_TEXT[scope].label()}
              description={SCOPE_TEXT[scope].hint()}
              checked={scopes.includes(scope)}
              onCheckedChange={(on) =>
                setScopes((current) => (on ? [...current, scope] : current.filter((s) => s !== scope)))
              }
            />
          ))}
          {errors.scopes ? (
            <p role="alert" className="text-sm text-danger">
              {errors.scopes}
            </p>
          ) : null}
        </fieldset>
        <Select<Expiry>
          label={m.tokens_field_expiry()}
          value={expiry}
          onValueChange={(value) => value && setExpiry(value)}
          options={[
            ...PAT_EXPIRY_DAYS.map((days) => ({
              value: `${days}` as Expiry,
              label: m.tokens_expiry_days({ days }),
            })),
            { value: NEVER, label: m.tokens_expiry_never() },
          ]}
        />
        <PasswordField
          label={m.settings_password_current()}
          autoComplete="current-password"
          value={password}
          onValueChange={setPassword}
          error={errors.password}
        />
        {errors.form ? (
          <p role="alert" className="text-sm text-danger">
            {errors.form}
          </p>
        ) : null}
      </form>
    </Dialog>
  );
}

function SecretDialog({ secret, onClose }: { secret: string | null; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const close = () => {
    setCopied(false);
    onClose();
  };
  const copy = async () => {
    if (!secret) return;
    try {
      await navigator.clipboard.writeText(secret);
      setCopied(true);
    } catch {
      document.getElementById('tokens-secret')?.focus();
    }
  };
  return (
    <Dialog
      open={secret !== null}
      onOpenChange={(next) => {
        if (!next) close();
      }}
      title={m.tokens_secret_title()}
      description={m.tokens_secret_text()}
      disablePointerDismissal
      footer={
        <>
          <Button
            variant="secondary"
            icon={<Icon icon={copied ? Check : Copy} size={16} />}
            onClick={() => void copy()}
          >
            {copied ? m.tokens_secret_copied() : m.tokens_secret_copy()}
          </Button>
          <Button onClick={close}>{m.tokens_secret_done()}</Button>
        </>
      }
    >
      <input
        id="tokens-secret"
        readOnly
        value={secret ?? ''}
        aria-label={m.tokens_secret_title()}
        onFocus={(event) => event.currentTarget.select()}
        className="w-full rounded-md border border-border bg-sunken px-3 py-2 font-mono text-sm text-fg"
      />
    </Dialog>
  );
}
