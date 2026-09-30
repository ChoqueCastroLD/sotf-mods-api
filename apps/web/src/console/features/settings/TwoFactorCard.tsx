/**
 * Settings → Security: two-step verification with an authenticator app (T1-02). Setup confirms the
 * password, shows the QR code and the key, asks for the first code and then shows the recovery
 * codes once. Regenerating the codes and turning it off need the password plus a current code.
 */
import { isApiError } from '@sotf/contracts/client';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { PasswordField } from '@sotf/ui/password-field';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { type SecurityOverview, settingsApi, settingsKeys } from './api.ts';
import { failureDetail } from './errors.ts';
import { SettingsCard } from './layout.tsx';

type Mode =
  | { kind: 'idle' }
  | { kind: 'password' }
  | { kind: 'scan'; secret: string; otpauthUrl: string }
  | { kind: 'codes'; codes: string[] }
  | { kind: 'regenerate' }
  | { kind: 'disable' };

export function TwoFactorCard({ overview }: { overview: SecurityOverview }) {
  const queryClient = useQueryClient();
  const [mode, setMode] = useState<Mode>({ kind: 'idle' });
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [errors, setErrors] = useState<{ password?: string; code?: string; form?: string }>({});
  const [busy, setBusy] = useState(false);
  const enabled = overview.totp.enabled;

  const refresh = () => queryClient.invalidateQueries({ queryKey: settingsKeys.security });
  const reset = (next: Mode = { kind: 'idle' }) => {
    setMode(next);
    setPassword('');
    setCode('');
    setErrors({});
  };

  /** Shared error mapping: wrong password / wrong code / anything else. */
  const fail = (failure: unknown, passwordInvolved: boolean) => {
    if (isApiError(failure) && failure.code === 'INVALID_CREDENTIALS') {
      // The password is checked first; a wrong code is reported on the code field.
      setErrors(
        passwordInvolved
          ? { password: m.settings_password_wrong(), code: undefined }
          : { code: m.settings_2fa_code_wrong() },
      );
    } else {
      setErrors({ form: failureDetail(failure) });
    }
  };

  const run = async (action: () => Promise<void>) => {
    setBusy(true);
    try {
      await action();
    } finally {
      setBusy(false);
    }
  };

  const startSetup = () =>
    run(async () => {
      if (!password) return setErrors({ password: m.settings_password_required() });
      try {
        const setup = await settingsApi.setupTotp(password);
        setErrors({});
        setMode({ kind: 'scan', secret: setup.secret, otpauthUrl: setup.otpauthUrl });
        setPassword('');
      } catch (failure) {
        fail(failure, true);
      }
    });

  const enable = () =>
    run(async () => {
      if (!code.trim()) return setErrors({ code: m.settings_2fa_code_required() });
      try {
        const result = await settingsApi.enableTotp(code.trim());
        await refresh();
        notify.success(m.settings_2fa_enabled_toast());
        reset({ kind: 'codes', codes: result.codes });
      } catch (failure) {
        fail(failure, false);
      }
    });

  const regenerate = () =>
    run(async () => {
      if (!password) return setErrors({ password: m.settings_password_required() });
      if (!code.trim()) return setErrors({ code: m.settings_2fa_code_required() });
      try {
        const result = await settingsApi.regenerateRecoveryCodes(password, code.trim());
        await refresh();
        reset({ kind: 'codes', codes: result.codes });
      } catch (failure) {
        fail(failure, !isCodeError(failure));
      }
    });

  const disable = () =>
    run(async () => {
      if (!password) return setErrors({ password: m.settings_password_required() });
      if (!code.trim()) return setErrors({ code: m.settings_2fa_code_required() });
      try {
        await settingsApi.disableTotp(password, code.trim());
        await refresh();
        notify.success(m.settings_2fa_disabled_toast());
        reset();
      } catch (failure) {
        fail(failure, !isCodeError(failure));
      }
    });

  return (
    <SettingsCard id="security-2fa" title={m.settings_2fa_title()} description={m.settings_2fa_text()}>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant={enabled ? 'success' : 'neutral'} size="sm">
          {enabled ? m.settings_2fa_status_on() : m.settings_2fa_status_off()}
        </Badge>
        {enabled ? (
          <span className="text-sm text-fg-muted">
            {m.settings_2fa_recovery_left({ count: overview.totp.recoveryCodesRemaining })}
          </span>
        ) : null}
      </div>

      {mode.kind === 'idle' ? (
        <div className="flex flex-wrap gap-2">
          {enabled ? (
            <>
              <Button variant="secondary" onClick={() => reset({ kind: 'regenerate' })}>
                {m.settings_2fa_regenerate()}
              </Button>
              <Button variant="danger" onClick={() => reset({ kind: 'disable' })}>
                {m.settings_2fa_disable()}
              </Button>
            </>
          ) : (
            <Button onClick={() => reset({ kind: 'password' })}>{m.settings_2fa_setup()}</Button>
          )}
        </div>
      ) : null}

      {mode.kind === 'password' ? (
        <Step
          onSubmit={startSetup}
          busy={busy}
          submitLabel={m.settings_2fa_continue()}
          onCancel={() => reset()}
          form={errors.form}
        >
          <PasswordField
            label={m.settings_password_current()}
            autoComplete="current-password"
            value={password}
            onValueChange={setPassword}
            error={errors.password}
          />
        </Step>
      ) : null}

      {mode.kind === 'scan' ? (
        <Step
          onSubmit={enable}
          busy={busy}
          submitLabel={m.settings_2fa_enable()}
          onCancel={() => reset()}
          form={errors.form}
        >
          <p className="text-sm text-fg-muted">{m.settings_2fa_scan()}</p>
          <QrCode value={mode.otpauthUrl} />
          <div className="grid gap-0.5">
            <span className="text-sm text-fg-muted">{m.settings_2fa_secret()}</span>
            <code className="font-mono text-sm tracking-wider break-all text-fg select-all">{mode.secret}</code>
          </div>
          <Field label={m.settings_2fa_code()} error={errors.code}>
            <Input
              value={code}
              onValueChange={setCode}
              autoComplete="one-time-code"
              inputMode="numeric"
              maxLength={12}
              spellCheck={false}
            />
          </Field>
        </Step>
      ) : null}

      {mode.kind === 'regenerate' || mode.kind === 'disable' ? (
        <Step
          onSubmit={mode.kind === 'regenerate' ? regenerate : disable}
          busy={busy}
          submitLabel={mode.kind === 'regenerate' ? m.settings_2fa_regenerate() : m.settings_2fa_disable()}
          danger={mode.kind === 'disable'}
          onCancel={() => reset()}
          form={errors.form}
        >
          <PasswordField
            label={m.settings_password_current()}
            autoComplete="current-password"
            value={password}
            onValueChange={setPassword}
            error={errors.password}
          />
          <Field label={m.settings_2fa_code_or_recovery()} error={errors.code}>
            <Input
              value={code}
              onValueChange={setCode}
              autoComplete="one-time-code"
              maxLength={32}
              spellCheck={false}
            />
          </Field>
        </Step>
      ) : null}

      {mode.kind === 'codes' ? <RecoveryCodes codes={mode.codes} onDone={() => reset()} /> : null}
    </SettingsCard>
  );
}

/** A wrong password and a wrong code are both `INVALID_CREDENTIALS`; the code one names its field. */
function isCodeError(failure: unknown): boolean {
  return isApiError(failure) && failure.problem.errors?.some((issue) => issue.path === 'code') === true;
}

function Step({
  children,
  onSubmit,
  onCancel,
  busy,
  submitLabel,
  danger = false,
  form,
}: {
  children: React.ReactNode;
  onSubmit: () => void | Promise<void>;
  onCancel: () => void;
  busy: boolean;
  submitLabel: string;
  danger?: boolean;
  form?: string | undefined;
}) {
  return (
    <form
      noValidate
      className="grid gap-4 rounded-md border border-border p-4"
      onSubmit={(event) => {
        event.preventDefault();
        void onSubmit();
      }}
    >
      {children}
      {form ? (
        <p role="alert" className="text-sm text-danger">
          {form}
        </p>
      ) : null}
      <div className="flex flex-wrap justify-end gap-2">
        <Button variant="ghost" onClick={onCancel} disabled={busy}>
          {m.settings_2fa_cancel()}
        </Button>
        <Button type="submit" variant={danger ? 'danger' : 'primary'} loading={busy}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

/** QR code of the `otpauth://` URI, drawn by `qrcode` loaded on demand. */
function QrCode({ value }: { value: string }) {
  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    void import('qrcode').then(async (qr) => {
      const url = await qr.toDataURL(value, { margin: 2, width: 192, errorCorrectionLevel: 'M' });
      if (!cancelled) setSrc(url);
    });
    return () => {
      cancelled = true;
    };
  }, [value]);
  if (!src) return <div className="size-48 animate-pulse rounded-md bg-fg/8" aria-hidden="true" />;
  return <img src={src} width={192} height={192} alt={m.settings_2fa_qr_alt()} className="rounded-md bg-white" />;
}

function RecoveryCodes({ codes, onDone }: { codes: string[]; onDone: () => void }) {
  const text = codes.join('\n');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      notify.success(m.settings_2fa_codes_copied());
    } catch {
      notify.error(m.settings_2fa_failed());
    }
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([`${text}\n`], { type: 'text/plain' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sotf-mods-recovery-codes.txt';
    link.click();
    URL.revokeObjectURL(url);
  };
  return (
    <section
      className="grid gap-4 rounded-md border border-warning/50 bg-warning-soft p-4"
      aria-labelledby="codes-title"
    >
      <div className="grid gap-1">
        <h3 id="codes-title" className="font-semibold text-fg">
          {m.settings_2fa_codes_title()}
        </h3>
        <p className="text-sm text-fg-muted">{m.settings_2fa_codes_text()}</p>
      </div>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-sm text-fg">
        {codes.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" size="sm" onClick={() => void copy()}>
          {m.settings_2fa_codes_copy()}
        </Button>
        <Button variant="secondary" size="sm" onClick={download}>
          {m.settings_2fa_codes_download()}
        </Button>
        <Button size="sm" onClick={onDone}>
          {m.settings_2fa_codes_done()}
        </Button>
      </div>
    </section>
  );
}
