/**
 * Read-only panels of the item view (research/03 §6.10): automated checks and the security scan,
 * the file diff against the previous version, the manifest diff, rendered description and
 * changelog, media and the author's history.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { cn } from '@sotf/ui/cn';
import { ProseLocator } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { Link } from '@tanstack/react-router';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle2,
  CircleDashed,
  ExternalLink,
  FileMinus,
  FilePen,
  FilePlus,
  ShieldCheck,
  ShieldQuestion,
  ShieldX,
} from 'lucide-react';
import type { ReactNode } from 'react';
import type { FileDiff, InspectionFlag, QueueItemDetail, ScanSummary } from './api.ts';
import { flagLabel, scanVerdictLabel } from './labels.ts';
import { bytes, dateTime, number } from './shared.tsx';

type Inspection = NonNullable<QueueItemDetail['inspection']>;

/** Extensions PLAN §7.4 marks for review, and the executable code every new DLL brings. */
const FLAGGED_EXTENSIONS = new Set(['exe', 'bat', 'cmd', 'ps1', 'vbs', 'scr', 'msi', 'lnk']);

function extensionOf(path: string): string {
  const name = path.slice(path.lastIndexOf('/') + 1);
  const dot = name.lastIndexOf('.');
  return dot > 0 ? name.slice(dot + 1).toLowerCase() : '';
}

/** Why a path deserves attention: an executable/script, or new native code. */
export function pathConcern(path: string, added: boolean): 'flagged' | 'code' | null {
  const extension = extensionOf(path);
  if (FLAGGED_EXTENSIONS.has(extension)) return 'flagged';
  if (added && extension === 'dll') return 'code';
  return null;
}

// -----------------------------------------------------------------------------------------------
// Checks
// -----------------------------------------------------------------------------------------------

function FlagRow({ flag }: { flag: InspectionFlag }) {
  const error = flag.severity === 'error';
  return (
    <li className="flex gap-2 text-sm">
      <Icon
        icon={error ? AlertOctagon : AlertTriangle}
        size={16}
        className={cn('mt-0.5 shrink-0', error ? 'text-danger' : 'text-warning')}
      />
      <span className="min-w-0">
        <span className="font-medium text-fg">{flagLabel(flag.code)}</span>
        <span className="sr-only"> ({error ? m.ranger_severity_error() : m.ranger_severity_warning()})</span>
        {flag.path ? <span className="ms-2 break-all font-mono text-2xs text-fg-muted">{flag.path}</span> : null}
        {flag.detail ? <span className="block text-xs text-fg-muted">{flag.detail}</span> : null}
      </span>
    </li>
  );
}

function scanIcon(verdict: ScanSummary['verdict']) {
  switch (verdict) {
    case 'clean':
    case 'false_positive':
      return { icon: ShieldCheck, tone: 'text-success' };
    case 'malicious':
      return { icon: ShieldX, tone: 'text-danger' };
    case 'suspicious':
      return { icon: AlertTriangle, tone: 'text-warning' };
    default:
      return { icon: ShieldQuestion, tone: 'text-fg-muted' };
  }
}

export function ScanLine({ scan, action }: { scan: ScanSummary | null; action?: ReactNode }) {
  if (!scan) {
    return (
      <p className="flex items-center gap-2 text-sm text-fg-muted">
        <Icon icon={CircleDashed} size={16} />
        {m.ranger_scan_none()}
      </p>
    );
  }
  const { icon, tone } = scanIcon(scan.verdict);
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span className="flex items-center gap-2 font-medium text-fg">
        <Icon icon={icon} size={16} className={tone} />
        {scanVerdictLabel(scan.verdict)}
      </span>
      {scan.total !== null && scan.positives !== null ? (
        <span className="text-fg-muted">{m.ranger_scan_engines({ positives: scan.positives, total: scan.total })}</span>
      ) : null}
      {scan.scannedAt ? <span className="text-xs text-fg-muted">{dateTime(scan.scannedAt)}</span> : null}
      {scan.permalink ? (
        <a
          href={scan.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-link hover:underline"
        >
          {m.ranger_scan_report_link()}
          <Icon icon={ExternalLink} size={12} />
          <span className="sr-only">{m.ranger_new_tab()}</span>
        </a>
      ) : null}
      {action}
    </div>
  );
}

export function ChecksPanel({
  inspection,
  flags,
  scan,
  scanAction,
}: {
  inspection: Inspection | null;
  flags: readonly InspectionFlag[];
  scan: ScanSummary | null;
  scanAction?: ReactNode;
}) {
  const all = inspection ? inspection.flags : flags;
  return (
    <section aria-labelledby="ranger-checks" className="grid gap-3 rounded-lg border border-border bg-surface p-4">
      <h3 id="ranger-checks" className="text-sm font-semibold text-fg">
        {m.ranger_checks_title()}
      </h3>
      {inspection ? (
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-fg">
          <li className="flex items-center gap-1.5">
            <Icon
              icon={
                inspection.status === 'passed'
                  ? CheckCircle2
                  : inspection.status === 'pending'
                    ? CircleDashed
                    : AlertTriangle
              }
              size={16}
              className={
                inspection.status === 'passed'
                  ? 'text-success'
                  : inspection.status === 'failed'
                    ? 'text-danger'
                    : 'text-warning'
              }
            />
            {inspection.status === 'passed'
              ? m.ranger_checks_passed()
              : inspection.status === 'pending'
                ? m.ranger_checks_pending()
                : inspection.status === 'failed'
                  ? m.ranger_checks_failed()
                  : m.ranger_checks_flagged()}
          </li>
          {inspection.uncompressedBytes !== null ? (
            <li>{m.ranger_checks_size({ size: bytes(inspection.uncompressedBytes) })}</li>
          ) : null}
          {inspection.entriesTotal > 0 ? <li>{m.ranger_checks_files({ count: inspection.entriesTotal })}</li> : null}
          {inspection.ratio !== null ? (
            <li>{m.ranger_checks_ratio({ ratio: number(Math.round(inspection.ratio * 10) / 10) })}</li>
          ) : null}
          {inspection.manifest ? <li>{m.ranger_checks_manifest_ok()}</li> : null}
        </ul>
      ) : (
        <p className="text-sm text-fg-muted">{m.ranger_checks_none()}</p>
      )}
      {all.length > 0 ? (
        <ul className="grid gap-2">
          {all.map((flag, index) => (
            <FlagRow key={`${flag.code}-${flag.path ?? ''}-${index}`} flag={flag} />
          ))}
        </ul>
      ) : inspection ? (
        <p className="flex items-center gap-2 text-sm text-fg-muted">
          <Icon icon={CheckCircle2} size={16} className="text-success" />
          {m.ranger_checks_no_flags()}
        </p>
      ) : null}
      <div className="border-t border-border pt-3">
        <ScanLine scan={scan} action={scanAction} />
      </div>
      {inspection?.sha256 ? (
        <p className="break-all font-mono text-2xs text-fg-subtle">
          {m.ranger_checks_sha256({ hash: inspection.sha256 })}
        </p>
      ) : null}
    </section>
  );
}

// -----------------------------------------------------------------------------------------------
// File diff
// -----------------------------------------------------------------------------------------------

function ConcernBadge({ concern }: { concern: 'flagged' | 'code' | null }) {
  if (concern === 'flagged') {
    return (
      <Badge variant="danger" size="sm">
        {m.ranger_diff_flagged()}
      </Badge>
    );
  }
  if (concern === 'code') {
    return (
      <Badge variant="warning" size="sm">
        {m.ranger_diff_new_code()}
      </Badge>
    );
  }
  return null;
}

export function FileDiffPanel({ diff, inspection }: { diff: FileDiff | null; inspection: Inspection | null }) {
  if (!diff) {
    if (!inspection || inspection.entries.length === 0) {
      return <p className="text-sm text-fg-muted">{m.ranger_diff_unavailable()}</p>;
    }
    // First version (nothing to compare with): the file list itself.
    return (
      <div className="grid gap-2">
        <p className="text-sm text-fg-muted">{m.ranger_diff_first_version({ count: inspection.entriesTotal })}</p>
        <ul className="grid gap-1 font-mono text-xs">
          {inspection.entries.map((entry) => (
            <li key={entry.path} className="flex flex-wrap items-center gap-2">
              <span className="break-all text-fg">{entry.path}</span>
              <span className="text-fg-muted tabular-nums">{bytes(entry.size)}</span>
              <ConcernBadge concern={pathConcern(entry.path, true)} />
            </li>
          ))}
        </ul>
        {inspection.entriesTotal > inspection.entries.length ? (
          <p className="text-xs text-fg-subtle">
            {m.ranger_diff_truncated({ shown: inspection.entries.length, total: inspection.entriesTotal })}
          </p>
        ) : null}
      </div>
    );
  }
  const empty = diff.added.length === 0 && diff.removed.length === 0 && diff.changed.length === 0;
  if (empty) return <p className="text-sm text-fg-muted">{m.ranger_diff_identical()}</p>;
  return (
    <div className="grid gap-4">
      <p className="text-sm text-fg-muted">
        {m.ranger_diff_summary({
          added: diff.added.length,
          removed: diff.removed.length,
          changed: diff.changed.length,
        })}
      </p>
      <ul className="grid gap-1 font-mono text-xs">
        {diff.added.map((entry) => (
          <li key={`a-${entry.path}`} className="flex flex-wrap items-center gap-2">
            <Icon icon={FilePlus} size={14} className="text-success" />
            <span className="sr-only">{m.ranger_diff_added()}</span>
            <span className="break-all text-fg">{entry.path}</span>
            <span className="text-fg-muted tabular-nums">{bytes(entry.size)}</span>
            <ConcernBadge concern={pathConcern(entry.path, true)} />
          </li>
        ))}
        {diff.changed.map((entry) => (
          <li key={`c-${entry.path}`} className="flex flex-wrap items-center gap-2">
            <Icon icon={FilePen} size={14} className="text-warning" />
            <span className="sr-only">{m.ranger_diff_changed()}</span>
            <span className="break-all text-fg">{entry.path}</span>
            <span className="text-fg-muted tabular-nums">
              {bytes(entry.sizeBefore)} → {bytes(entry.sizeAfter)}
            </span>
            {entry.crcChanged ? <span className="text-fg-muted">{m.ranger_diff_content_changed()}</span> : null}
            <ConcernBadge concern={pathConcern(entry.path, false)} />
          </li>
        ))}
        {diff.removed.map((entry) => (
          <li key={`r-${entry.path}`} className="flex flex-wrap items-center gap-2">
            <Icon icon={FileMinus} size={14} className="text-danger" />
            <span className="sr-only">{m.ranger_diff_removed()}</span>
            <span className="break-all text-fg-muted line-through">{entry.path}</span>
            <span className="text-fg-muted tabular-nums">{bytes(entry.size)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// -----------------------------------------------------------------------------------------------
// Manifest diff
// -----------------------------------------------------------------------------------------------

function show(value: unknown): string {
  if (value === undefined || value === null) return '-';
  if (typeof value === 'string') return value;
  try {
    return JSON.stringify(value, null, 1);
  } catch {
    return String(value);
  }
}

export function ManifestDiffPanel({ diff }: { diff: QueueItemDetail['manifestDiff'] }) {
  if (diff.length === 0) return <p className="text-sm text-fg-muted">{m.ranger_manifest_identical()}</p>;
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full min-w-[32rem] text-left text-sm">
        <caption className="sr-only">{m.ranger_tab_manifest()}</caption>
        <thead className="text-xs text-fg-muted">
          <tr>
            <th scope="col" className="py-1 pe-3 font-medium">
              {m.ranger_manifest_field()}
            </th>
            <th scope="col" className="py-1 pe-3 font-medium">
              {m.ranger_manifest_before()}
            </th>
            <th scope="col" className="py-1 font-medium">
              {m.ranger_manifest_after()}
            </th>
          </tr>
        </thead>
        <tbody className="font-mono text-xs">
          {diff.map((row) => (
            <tr key={row.field} className="border-t border-border align-top">
              <th scope="row" className="py-1.5 pe-3 font-medium text-fg">
                {row.field}
              </th>
              <td className="py-1.5 pe-3 whitespace-pre-wrap break-all text-danger">{show(row.before)}</td>
              <td className="py-1.5 whitespace-pre-wrap break-all text-success">{show(row.after)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// -----------------------------------------------------------------------------------------------
// Content, media, author
// -----------------------------------------------------------------------------------------------

export function HtmlPanel({ html, empty }: { html: string | null; empty: string }) {
  if (!html) return <p className="text-sm text-fg-muted">{empty}</p>;
  return (
    <div className="rounded-lg border border-border bg-bg p-4">
      <ProseLocator html={html} size="sm" />
    </div>
  );
}

export function MediaPanel({ media }: { media: QueueItemDetail['media'] }) {
  if (media.length === 0) return <p className="text-sm text-fg-muted">{m.ranger_media_none()}</p>;
  return (
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3">
      {media.map((image, index) => (
        <li key={`${image.url}-${index}`}>
          <a href={image.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md">
            <img
              src={image.url}
              {...(image.srcset ? { srcSet: image.srcset, sizes: '(min-width: 64rem) 20vw, 45vw' } : {})}
              alt={image.alt ?? m.ranger_media_alt({ index: index + 1 })}
              width={image.width ?? undefined}
              height={image.height ?? undefined}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full bg-sunken object-cover"
              style={image.dominantColor ? { backgroundColor: image.dominantColor } : undefined}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function AuthorHistoryPanel({
  history,
  authorId,
}: {
  history: QueueItemDetail['authorHistory'];
  authorId: number | null;
}) {
  const facts = [
    { label: m.ranger_history_account_age(), value: m.ranger_history_days({ count: history.accountAgeDays }) },
    { label: m.ranger_history_published(), value: number(history.modsPublished) },
    { label: m.ranger_history_rejected(), value: number(history.modsRejected) },
    { label: m.ranger_history_sanctions(), value: number(history.activeSanctions) },
    { label: m.ranger_history_trust(), value: m.ranger_trust_level({ level: history.trustLevel }) },
  ];
  return (
    <div className="grid gap-3">
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {facts.map((fact) => (
          <div key={fact.label} className="rounded-md border border-border bg-surface p-3">
            <dt className="text-xs text-fg-muted">{fact.label}</dt>
            <dd className="font-display text-lg text-fg tabular-nums">{fact.value}</dd>
          </div>
        ))}
      </dl>
      {history.activeSanctions > 0 || history.modsRejected > 0 ? (
        <p className="flex items-center gap-2 text-sm text-warning">
          <Icon icon={AlertTriangle} size={16} />
          {m.ranger_history_attention()}
        </p>
      ) : null}
      {authorId !== null ? (
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            to="/moderation/users/$userId"
            params={{ userId: String(authorId) }}
            className="text-link hover:underline"
          >
            {m.ranger_history_open_user()}
          </Link>
          <Link to="/moderation/audit" search={{ target: `user:${authorId}` }} className="text-link hover:underline">
            {m.ranger_history_open_audit()}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
