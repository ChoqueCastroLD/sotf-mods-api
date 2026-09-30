/**
 * Settings → Your data (T0-14 GDPR): export my data (a ZIP of JSON files prepared in the
 * background; the download link, valid 24 h, is shown here and emailed) and delete my account
 * (password + 14-day grace period; mods are archived or kept published without attribution;
 * comments and reviews are anonymized). A scheduled deletion can be cancelled until it runs.
 *
 * The id of the last export is remembered in this browser so its progress survives a reload.
 */
import { isApiError } from '@sotf/contracts/client';
import { m } from '@sotf/i18n/messages';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { PasswordField } from '@sotf/ui/password-field';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Archive, Download, FileArchive, Trash2, Undo2 } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { useMe } from '../../hooks/use-me.ts';
import { notify } from '../../lib/notify.ts';
import { storage } from '../../lib/storage.ts';
import { type DataExport, exportQuery, patchMe, refreshMe, settingsApi, settingsKeys } from './api.ts';
import { failureDescription, failureDetail } from './errors.ts';
import { localDate, localDateTime } from './format.ts';
import { SettingsCard, SettingsPage } from './layout.tsx';

const EXPORT_KEY = 'sotf_settings_last_export';

type DeletionMode = 'archive_mods' | 'keep_mods_anonymous';

export function DataScreen() {
  return (
    <SettingsPage section="data">
      <ExportCard />
      <DeletionCard />
    </SettingsPage>
  );
}

function ExportCard() {
  const queryClient = useQueryClient();
  const [exportId, setExportId] = useState<string | null>(() => storage.get(EXPORT_KEY));
  const [requesting, setRequesting] = useState(false);
  const status = useQuery({ ...exportQuery(exportId ?? ''), enabled: exportId !== null, retry: false });
  const current: DataExport | undefined = status.data;
  const inProgress = current?.status === 'queued' || current?.status === 'running';

  const request = async () => {
    setRequesting(true);
    try {
      const created = await settingsApi.requestExport();
      storage.set(EXPORT_KEY, created.id);
      queryClient.setQueryData(settingsKeys.export(created.id), created);
      setExportId(created.id);
      notify.success(m.settings_export_requested());
    } catch (failure) {
      notify.error(
        isApiError(failure) && failure.code === 'RATE_LIMITED'
          ? m.settings_export_rate_limited()
          : m.settings_export_failed(),
        { description: failureDescription(failure) },
      );
    } finally {
      setRequesting(false);
    }
  };

  // A stale id (expired, from another account): forget it.
  const stale = exportId !== null && status.isError && isApiError(status.error) && status.error.status === 404;
  useEffect(() => {
    if (!stale) return;
    storage.remove(EXPORT_KEY);
    setExportId(null);
  }, [stale]);

  return (
    <SettingsCard id="data-export" title={m.settings_export_title()} description={m.settings_export_text()}>
      {current ? (
        <div role="status" aria-live="polite" className="grid gap-2 rounded-md border border-border p-3">
          <p className="flex items-center gap-2 text-sm font-semibold text-fg">
            <Icon icon={FileArchive} size={16} />
            {current.status === 'ready'
              ? m.settings_export_ready()
              : current.status === 'failed'
                ? m.settings_export_status_failed()
                : current.status === 'expired'
                  ? m.settings_export_expired()
                  : m.settings_export_preparing()}
          </p>
          <p className="text-xs text-fg-muted">
            {m.settings_export_requested_at({ date: localDateTime(current.createdAt) })}
            {current.expiresAt && current.status === 'ready'
              ? ` · ${m.settings_export_expires({ date: localDateTime(current.expiresAt) })}`
              : ''}
          </p>
          {inProgress ? (
            <div className="h-1.5 overflow-hidden rounded-full bg-fg/10">
              <div className="h-full w-1/3 animate-pulse rounded-full bg-signal motion-reduce:animate-none" />
            </div>
          ) : null}
          {current.status === 'ready' && current.downloadUrl ? (
            <a
              href={current.downloadUrl}
              rel="noopener"
              className="inline-flex h-10 items-center gap-2 justify-self-start rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg hover:bg-primary/90"
            >
              <Icon icon={Download} size={16} />
              {m.settings_export_download()}
            </a>
          ) : null}
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant={current?.status === 'ready' ? 'secondary' : 'primary'}
          icon={<Icon icon={Archive} size={16} />}
          loading={requesting}
          disabled={inProgress}
          onClick={() => void request()}
        >
          {current ? m.settings_export_again() : m.settings_export_request()}
        </Button>
        <p className="text-xs text-fg-muted">{m.settings_export_email_note()}</p>
      </div>
    </SettingsCard>
  );
}

function DeletionCard() {
  const me = useMe();
  const queryClient = useQueryClient();
  const formId = useId();
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<DeletionMode>('archive_mods');
  const [confirmText, setConfirmText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const scheduled = me.user.deletionScheduledAt;
  const handle = me.user.handle;

  const close = () => {
    setOpen(false);
    setPassword('');
    setConfirmText('');
    setError(null);
  };

  const submit = async () => {
    if (confirmText.trim().toLowerCase() !== handle.toLowerCase()) {
      setError(m.settings_delete_type_handle({ handle }));
      return;
    }
    if (!password) {
      setError(m.settings_password_required());
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const result = await settingsApi.requestDeletion(password, mode);
      patchMe(queryClient, (current) => ({
        ...current,
        user: { ...current.user, deletionScheduledAt: result.executeAfter },
      }));
      close();
      notify.success(m.settings_delete_scheduled_toast({ date: localDate(result.executeAfter) }));
    } catch (failure) {
      if (isApiError(failure) && failure.code === 'INVALID_CREDENTIALS') setError(m.settings_password_wrong());
      else if (isApiError(failure) && failure.code === 'CONFLICT') {
        void refreshMe(queryClient);
        setError(m.settings_delete_already());
      } else setError(failureDetail(failure));
    } finally {
      setSaving(false);
    }
  };

  const cancel = async () => {
    setCancelling(true);
    try {
      await settingsApi.cancelDeletion();
      patchMe(queryClient, (current) => ({ ...current, user: { ...current.user, deletionScheduledAt: null } }));
      notify.success(m.settings_delete_cancelled());
    } catch (failure) {
      notify.error(m.settings_delete_cancel_failed(), { description: failureDescription(failure) });
      void refreshMe(queryClient);
    } finally {
      setCancelling(false);
    }
  };

  return (
    <SettingsCard
      id="data-delete"
      tone="danger"
      title={m.settings_delete_title()}
      description={m.settings_delete_text()}
    >
      {scheduled ? (
        <Banner
          tone="danger"
          title={m.settings_delete_scheduled_title({ date: localDate(scheduled) })}
          action={
            <Button
              variant="secondary"
              size="sm"
              icon={<Icon icon={Undo2} size={16} />}
              loading={cancelling}
              onClick={() => void cancel()}
            >
              {m.settings_delete_cancel()}
            </Button>
          }
        >
          {m.settings_delete_scheduled_text()}
        </Banner>
      ) : (
        <>
          <ul className="grid list-disc gap-1 ps-5 text-sm text-fg-muted">
            <li>{m.settings_delete_point_grace()}</li>
            <li>{m.settings_delete_point_content()}</li>
            <li>{m.settings_delete_point_mods()}</li>
            <li>{m.settings_delete_point_export()}</li>
          </ul>
          <Button
            variant="danger"
            className="justify-self-start"
            icon={<Icon icon={Trash2} size={16} />}
            onClick={() => setOpen(true)}
          >
            {m.settings_delete_open()}
          </Button>
        </>
      )}
      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (!next) close();
        }}
        title={m.settings_delete_dialog_title()}
        description={m.settings_delete_dialog_text()}
        footer={
          <>
            <Button variant="ghost" onClick={close}>
              {m.settings_cancel()}
            </Button>
            <Button variant="danger" type="submit" form={formId} loading={saving}>
              {m.settings_delete_confirm()}
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
          <RadioCardGroup<DeletionMode>
            legend={m.settings_delete_mods_legend()}
            value={mode}
            onValueChange={setMode}
            options={[
              {
                value: 'archive_mods',
                title: m.settings_delete_mode_archive(),
                description: m.settings_delete_mode_archive_hint(),
              },
              {
                value: 'keep_mods_anonymous',
                title: m.settings_delete_mode_keep(),
                description: m.settings_delete_mode_keep_hint(),
              },
            ]}
          />
          <Field label={m.settings_delete_type_label({ handle })}>
            <Input
              value={confirmText}
              autoComplete="off"
              spellCheck={false}
              onChange={(event) => setConfirmText(event.currentTarget.value)}
            />
          </Field>
          <PasswordField
            label={m.settings_password_current()}
            autoComplete="current-password"
            value={password}
            onValueChange={setPassword}
          />
          {error ? (
            <p role="alert" className="text-sm text-danger">
              {error}
            </p>
          ) : null}
        </form>
      </Dialog>
    </SettingsCard>
  );
}
