/**
 * Settings → Account (T0-13): the sign-in email (verification state, resend, change with password:
 * the new address confirms, the old one is warned) and the password (current + new ≥ 10 characters,
 * checked against leaked-password lists by the API; other sessions are signed out by default).
 */
import { isApiError } from '@sotf/contracts/client';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { Checkbox } from '@sotf/ui/checkbox';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { PasswordField } from '@sotf/ui/password-field';
import { useQueryClient } from '@tanstack/react-query';
import { BadgeCheck, MailWarning } from 'lucide-react';
import { useState } from 'react';
import { useMe } from '../../hooks/use-me.ts';
import { notify } from '../../lib/notify.ts';
import { refreshMe, settingsApi } from './api.ts';
import { failureDescription, failureDetail } from './errors.ts';
import { localDate } from './format.ts';
import { SettingsCard, SettingsPage } from './layout.tsx';

/** `NewPassword` of `@sotf/contracts/common` (≥ 10 characters). */
const PASSWORD_MIN = 10;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AccountScreen() {
  const me = useMe();
  const days = Math.max(1, Math.floor((Date.now() - Date.parse(me.user.createdAt)) / 86_400_000) + 1);
  return (
    <SettingsPage section="account">
      <SettingsCard id="account-overview" title={m.settings_account_overview_title()}>
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          <div className="grid gap-0.5">
            <dt className="text-fg-muted">{m.settings_handle()}</dt>
            <dd className="font-mono text-fg">@{me.user.handle}</dd>
          </div>
          <div className="grid gap-0.5">
            <dt className="text-fg-muted">{m.settings_member_since()}</dt>
            <dd className="text-fg">
              {localDate(me.user.createdAt)} · {m.settings_day_on_island({ day: days })}
            </dd>
          </div>
        </dl>
      </SettingsCard>
      <EmailCard />
      <PasswordCard />
    </SettingsPage>
  );
}

function EmailCard() {
  const me = useMe();
  const queryClient = useQueryClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({});
  const [saving, setSaving] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [resending, setResending] = useState(false);

  const submit = async () => {
    const next = email.trim();
    const found: typeof errors = {};
    if (!EMAIL_PATTERN.test(next)) found.email = m.settings_email_invalid();
    else if (next.toLowerCase() === me.user.email.toLowerCase()) found.email = m.settings_email_same();
    if (!password) found.password = m.settings_password_required();
    setErrors(found);
    if (found.email || found.password) return;
    setSaving(true);
    try {
      await settingsApi.changeEmail(next, password);
      setSentTo(next);
      setEmail('');
      setPassword('');
      notify.success(m.settings_email_sent_toast());
    } catch (failure) {
      if (isApiError(failure) && failure.code === 'INVALID_CREDENTIALS')
        setErrors({ password: m.settings_password_wrong() });
      else if (isApiError(failure) && failure.code === 'CONFLICT') setErrors({ email: m.settings_email_taken() });
      else setErrors({ form: failureDetail(failure) });
    } finally {
      setSaving(false);
    }
  };

  const resend = async () => {
    setResending(true);
    try {
      await settingsApi.resendVerification();
      notify.success(m.settings_verify_resent({ email: me.user.email }));
    } catch (failure) {
      if (isApiError(failure) && failure.code === 'CONFLICT') {
        void refreshMe(queryClient);
        notify.info(m.settings_verify_already());
      } else {
        notify.error(m.settings_verify_resend_failed(), { description: failureDescription(failure) });
      }
    } finally {
      setResending(false);
    }
  };

  return (
    <SettingsCard
      id="account-email"
      title={m.settings_email_title()}
      description={m.settings_email_text()}
      onSubmit={submit}
      dirty={email.trim() !== '' && password !== ''}
      saving={saving}
      submitLabel={m.settings_email_submit()}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-semibold break-all text-fg">{me.user.email}</span>
        {me.user.emailVerified ? (
          <Badge variant="success" size="sm" icon={<Icon icon={BadgeCheck} size={12} />}>
            {m.settings_email_verified()}
          </Badge>
        ) : (
          <Badge variant="warning" size="sm" icon={<Icon icon={MailWarning} size={12} />}>
            {m.settings_email_unverified()}
          </Badge>
        )}
      </div>
      {!me.user.emailVerified ? (
        <Banner
          tone="warning"
          title={m.settings_verify_title()}
          action={
            <Button size="sm" variant="secondary" loading={resending} onClick={() => void resend()}>
              {m.settings_verify_resend()}
            </Button>
          }
        >
          {m.settings_verify_text()}
        </Banner>
      ) : null}
      {sentTo ? (
        <Banner tone="signal" title={m.settings_email_sent_title()} dismissible onDismiss={() => setSentTo(null)}>
          {m.settings_email_sent_text({ email: sentTo })}
        </Banner>
      ) : null}
      <Field label={m.settings_email_new()} error={errors.email}>
        <Input
          type="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
      </Field>
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
    </SettingsCard>
  );
}

function PasswordCard() {
  const queryClient = useQueryClient();
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [revokeOthers, setRevokeOthers] = useState(true);
  const [errors, setErrors] = useState<{ current?: string; next?: string; confirm?: string; form?: string }>({});
  const [saving, setSaving] = useState(false);

  const submit = async () => {
    const found: typeof errors = {};
    if (!current) found.current = m.settings_password_required();
    if (next.length < PASSWORD_MIN) found.next = m.settings_password_short({ min: PASSWORD_MIN });
    else if (next === current) found.next = m.settings_password_same();
    if (confirm !== next) found.confirm = m.settings_password_mismatch();
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setSaving(true);
    try {
      await settingsApi.changePassword(current, next, revokeOthers);
      setCurrent('');
      setNext('');
      setConfirm('');
      void queryClient.invalidateQueries({ queryKey: ['settings', 'sessions'] });
      notify.success(revokeOthers ? m.settings_password_changed_revoked() : m.settings_password_changed());
    } catch (failure) {
      if (isApiError(failure) && failure.code === 'INVALID_CREDENTIALS')
        setErrors({ current: m.settings_password_wrong() });
      else if (isApiError(failure) && failure.code === 'VALIDATION_FAILED')
        setErrors({ next: m.settings_password_rejected() });
      else setErrors({ form: failureDetail(failure) });
    } finally {
      setSaving(false);
    }
  };

  return (
    <SettingsCard
      id="account-password"
      title={m.settings_password_title()}
      description={m.settings_password_text({ min: PASSWORD_MIN })}
      onSubmit={submit}
      dirty={current !== '' && next !== ''}
      saving={saving}
      submitLabel={m.settings_password_submit()}
    >
      <PasswordField
        label={m.settings_password_current()}
        autoComplete="current-password"
        value={current}
        onValueChange={setCurrent}
        error={errors.current}
      />
      <PasswordField
        label={m.settings_password_new()}
        autoComplete="new-password"
        value={next}
        onValueChange={setNext}
        meter
        minLength={PASSWORD_MIN}
        error={errors.next}
      />
      <PasswordField
        label={m.settings_password_confirm()}
        autoComplete="new-password"
        value={confirm}
        onValueChange={setConfirm}
        error={errors.confirm}
      />
      <Checkbox
        label={m.settings_password_revoke()}
        description={m.settings_password_revoke_hint()}
        checked={revokeOthers}
        onCheckedChange={setRevokeOthers}
      />
      {errors.form ? (
        <p role="alert" className="text-sm text-danger">
          {errors.form}
        </p>
      ) : null}
    </SettingsCard>
  );
}
