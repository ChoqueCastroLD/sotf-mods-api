/**
 * «Versions» tab of the mod editor (PLAN §7.5 «retirar versiones», «ver el informe de seguridad y
 * el motivo de rechazo»): every version in any status with its channel, date, size, downloads,
 * security report (VirusTotal) and changelog; edit the changelog (its Markdown source comes with the
 * owner view), yank with a reason (the download URL keeps working with a warning) and undo a yank.
 * «New version» opens the wizard.
 */
import { formatBytes } from '@sotf/i18n/format';
import { Badge } from '@sotf/ui/badge';
import { Button, buttonClasses } from '@sotf/ui/button';
import { Dialog } from '@sotf/ui/dialog';
import { ProseLocator } from '@sotf/ui/domain';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ExternalLink, Pencil, Plus, ShieldCheck, Undo2, XCircle } from 'lucide-react';
import { useState } from 'react';
import { activeLocale } from '../../../lib/messages.ts';
import { notify } from '../../../lib/notify.ts';
import { basecampApi, LIMITS, type StudioMod, storeVersion, type Version } from '../api.ts';
import { date, number } from '../format.ts';
import { bt } from '../i18n.ts';
import { scanVerdictLabel, scanVerdictVariant, versionStatusLabel, versionStatusVariant } from '../labels.ts';
import { reportFailure } from '../shared.tsx';

function YankDialog({
  version,
  open,
  onOpenChange,
  onYank,
}: {
  version: Version;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onYank: (reason: string) => Promise<void>;
}) {
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const [touched, setTouched] = useState(false);
  const length = reason.trim().length;
  const invalid = length < LIMITS.yankReasonMin || length > LIMITS.yankReasonMax;
  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) {
          setReason('');
          setTouched(false);
        }
      }}
      title={bt('basecamp_versions_yank_title', { version: version.version })}
      description={bt('basecamp_versions_yank_text')}
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            {bt('basecamp_cancel')}
          </Button>
          <Button
            variant="danger"
            loading={busy}
            onClick={async () => {
              setTouched(true);
              if (invalid) return;
              setBusy(true);
              try {
                await onYank(reason.trim());
                onOpenChange(false);
                setReason('');
              } finally {
                setBusy(false);
              }
            }}
          >
            {bt('basecamp_versions_yank_confirm')}
          </Button>
        </>
      }
    >
      <Field
        label={bt('basecamp_versions_yank_reason')}
        description={bt('basecamp_counter', { count: number(length), max: number(LIMITS.yankReasonMax) })}
        error={touched && invalid ? bt('basecamp_versions_yank_reason_error', { min: LIMITS.yankReasonMin }) : null}
      >
        <Textarea
          value={reason}
          maxLength={LIMITS.yankReasonMax}
          minRows={3}
          maxRows={6}
          placeholder={bt('basecamp_versions_yank_placeholder')}
          onChange={(event) => setReason(event.currentTarget.value)}
        />
      </Field>
    </Dialog>
  );
}

function ChangelogDialog({
  version,
  open,
  onOpenChange,
  onSave,
}: {
  version: Version;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (changelogMd: string) => Promise<void>;
}) {
  const [text, setText] = useState(version.changelogMd ?? '');
  const [busy, setBusy] = useState(false);
  const length = text.length;
  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) setText(version.changelogMd ?? '');
      }}
      title={bt('basecamp_versions_changelog_title', { version: version.version })}
      description={bt('basecamp_versions_changelog_text')}
      size="lg"
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            {bt('basecamp_cancel')}
          </Button>
          <Button
            loading={busy}
            disabled={length > LIMITS.changelogMax || text.trim() === (version.changelogMd ?? '').trim()}
            onClick={async () => {
              setBusy(true);
              try {
                await onSave(text.trim());
                onOpenChange(false);
              } catch {
                // Reported by the caller; the text stays for another try.
              } finally {
                setBusy(false);
              }
            }}
          >
            {bt('basecamp_versions_changelog_save')}
          </Button>
        </>
      }
    >
      <Field
        label={bt('basecamp_versions_changelog')}
        description={bt('basecamp_counter', { count: number(length), max: number(LIMITS.changelogMax) })}
      >
        <Textarea
          value={text}
          maxLength={LIMITS.changelogMax}
          minRows={8}
          maxRows={20}
          className="font-mono text-sm"
          onChange={(event) => setText(event.currentTarget.value)}
        />
      </Field>
    </Dialog>
  );
}

function ScanReport({ scan }: { scan: Version['scan'] }) {
  if (!scan) return <span className="text-xs text-fg-subtle">{bt('basecamp_versions_scan_none')}</span>;
  return (
    <span className="flex flex-wrap items-center gap-2 text-xs">
      <Badge variant={scanVerdictVariant(scan.verdict)} size="sm" icon={<Icon icon={ShieldCheck} size={12} />}>
        {scanVerdictLabel(scan.verdict)}
      </Badge>
      {scan.positives !== null && scan.total !== null ? (
        <span className="text-fg-muted tabular-nums">
          {bt('basecamp_versions_scan_detections', { positives: number(scan.positives), total: number(scan.total) })}
        </span>
      ) : null}
      {scan.permalink ? (
        <a
          href={scan.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-link hover:underline"
        >
          {bt('basecamp_versions_scan_report')}
          <Icon icon={ExternalLink} size={12} />
          <span className="sr-only">{bt('basecamp_new_tab')}</span>
        </a>
      ) : null}
    </span>
  );
}

function VersionCard({ modId, version, lang }: { modId: number; version: Version; lang: string | null }) {
  const queryClient = useQueryClient();
  const [yanking, setYanking] = useState(false);
  const [editing, setEditing] = useState(false);
  const [busy, setBusy] = useState(false);
  const locale = activeLocale();

  const yank = async (reason: string) => {
    try {
      const updated = await basecampApi.yank(modId, version.id, reason);
      storeVersion(queryClient, modId, updated);
      notify.success(bt('basecamp_versions_yanked', { version: version.version }));
    } catch (error) {
      reportFailure(error, bt('basecamp_versions_yank_failed'));
      throw error;
    }
  };

  const saveChangelog = async (changelogMd: string) => {
    try {
      const updated = await basecampApi.editChangelog(modId, version.id, changelogMd);
      storeVersion(queryClient, modId, updated);
      notify.success(bt('basecamp_versions_changelog_saved', { version: version.version }));
    } catch (error) {
      reportFailure(error, bt('basecamp_versions_changelog_failed'));
      throw error;
    }
  };

  const unyank = async () => {
    setBusy(true);
    try {
      const updated = await basecampApi.unyank(modId, version.id);
      storeVersion(queryClient, modId, updated);
      notify.success(bt('basecamp_versions_unyanked', { version: version.version }));
    } catch (error) {
      reportFailure(error, bt('basecamp_versions_unyank_failed'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <li className="grid gap-3 rounded-lg border border-border bg-surface p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="grid gap-1">
          <p className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-base font-semibold text-fg">v{version.version}</span>
            <Badge variant={versionStatusVariant(version.status)} size="sm">
              {versionStatusLabel(version.status)}
            </Badge>
            {version.channel === 'beta' ? (
              <Badge variant="blueprint" size="sm">
                {bt('basecamp_versions_beta')}
              </Badge>
            ) : null}
            {version.isLatest ? (
              <Badge variant="signal" size="sm">
                {bt('basecamp_versions_latest')}
              </Badge>
            ) : null}
          </p>
          <p className="text-xs text-fg-muted">
            {bt('basecamp_versions_meta', {
              date: date(version.publishedAt),
              downloads: number(version.downloadsCount),
              size: version.fileSize === null ? '—' : formatBytes(locale, version.fileSize),
            })}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {version.status !== 'rejected' && version.changelogMd !== undefined ? (
            <Button variant="ghost" size="sm" icon={<Icon icon={Pencil} size={16} />} onClick={() => setEditing(true)}>
              {bt('basecamp_versions_changelog_edit')}
            </Button>
          ) : null}
          {version.status === 'yanked' ? (
            <Button
              variant="secondary"
              size="sm"
              loading={busy}
              icon={<Icon icon={Undo2} size={16} />}
              onClick={() => void unyank()}
            >
              {bt('basecamp_versions_unyank')}
            </Button>
          ) : version.status === 'active' ? (
            <Button variant="ghost" size="sm" icon={<Icon icon={XCircle} size={16} />} onClick={() => setYanking(true)}>
              {bt('basecamp_versions_yank')}
            </Button>
          ) : null}
        </div>
      </div>

      {version.statusReason && (version.status === 'rejected' || version.status === 'yanked') ? (
        <p className="rounded-md border border-warning/40 bg-warning-soft px-3 py-2 text-sm text-fg">
          {version.status === 'rejected'
            ? bt('basecamp_versions_rejected_reason', { reason: version.statusReason })
            : bt('basecamp_versions_yanked_reason', { reason: version.statusReason })}
        </p>
      ) : null}

      <div className="grid gap-1">
        <p className="readout">{bt('basecamp_versions_security')}</p>
        <ScanReport scan={version.scan} />
      </div>

      {version.testedGameBuilds.length > 0 ? (
        <p className="text-xs text-fg-muted">
          {bt('basecamp_versions_tested', { builds: version.testedGameBuilds.map((build) => build.label).join(', ') })}
        </p>
      ) : null}

      {version.changelogHtml ? (
        <details className="text-sm">
          <summary className="cursor-pointer text-fg-muted hover:text-fg">{bt('basecamp_versions_changelog')}</summary>
          <ProseLocator html={version.changelogHtml} size="sm" className="mt-2" {...(lang ? { lang } : {})} />
        </details>
      ) : null}

      <YankDialog version={version} open={yanking} onOpenChange={setYanking} onYank={yank} />
      {editing ? <ChangelogDialog version={version} open onOpenChange={setEditing} onSave={saveChangelog} /> : null}
    </li>
  );
}

export function VersionsTab({ studio }: { studio: StudioMod }) {
  const versions = [...studio.versions].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const canRelease = studio.mod.kind !== 'build' && studio.mod.status !== 'removed';
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="max-w-prose text-sm text-fg-muted">{bt('basecamp_versions_intro')}</p>
        {canRelease ? (
          <Link
            to="/basecamp/mods/$modId/new-version"
            params={{ modId: String(studio.mod.id) }}
            className={buttonClasses({ variant: 'primary', size: 'sm' })}
          >
            <Icon icon={Plus} size={16} />
            {bt('basecamp_mods_new_version')}
          </Link>
        ) : null}
      </div>
      {versions.length === 0 ? (
        <p className="text-sm text-fg-muted">{bt('basecamp_versions_empty')}</p>
      ) : (
        <ul className="grid gap-3">
          {versions.map((version) => (
            <VersionCard key={version.id} modId={studio.mod.id} version={version} lang={studio.mod.contentLang} />
          ))}
        </ul>
      )}
    </div>
  );
}
