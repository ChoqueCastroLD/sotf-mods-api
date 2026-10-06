/**
 * What the wizard learned from the file (PLAN §7.5 step 1): manifest id, version, type, platform,
 * dependencies (resolved against the site), `logColor`, and the list of files with their errors
 * and warnings — from the in-browser inspection, or from the server's once the file is uploaded.
 */
import { Badge } from '@sotf/ui/badge';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { useQueries } from '@tanstack/react-query';
import { CircleAlert, CircleCheck, FileArchive, TriangleAlert } from 'lucide-react';
import type { ReactNode } from 'react';
import { ut } from '../i18n.ts';
import { flagLabel, issueLabel } from '../labels.ts';
import { bytes, number } from '../lib/format.ts';
import { manifestQuery } from '../lib/queries.ts';

export interface ManifestView {
  id: string;
  name?: string | undefined;
  author?: string | undefined;
  version: string;
  type: 'Mod' | 'Library';
  platform?: string | undefined;
  dependencies: readonly string[];
  logColor?: string | undefined;
  gameVersion?: string | undefined;
  loaderVersion?: string | undefined;
}

export interface BuildView {
  guid: string;
  name: string | null;
  author: string | null;
  elements: number;
  structures: number | null;
  buildShareVersion: string;
  sizeClass: string;
  /** Data URL of the embedded thumbnail. */
  thumbnail: string | null;
}

export interface EntryView {
  path: string;
  size: number;
  status?: 'allowed' | 'flagged' | 'not_allowed' | 'unsafe';
}

export interface ProblemView {
  code: string;
  severity: 'error' | 'warning';
  path: string | null;
  detail: string | null;
}

export interface IssueView {
  code: string;
  severity: 'error' | 'warning';
  field: string;
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-0.5">
      <dt className="text-xs text-fg-muted">{label}</dt>
      <dd className="min-w-0 truncate text-sm font-medium text-fg">{children}</dd>
    </div>
  );
}

function DependencyChips({ ids }: { ids: readonly string[] }) {
  const results = useQueries({ queries: ids.map((id) => manifestQuery(id)) });
  if (ids.length === 0) return <span className="text-fg-muted">{ut('upload_manifest_no_dependencies')}</span>;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={ut('upload_manifest_dependencies')}>
      {ids.map((id, index) => {
        const result = results[index];
        const mod = result?.data ?? null;
        const missing = result?.isSuccess && mod === null;
        return (
          <li key={id}>
            {mod ? (
              <a
                href={mod.canonicalPath}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 rounded-sm border border-border bg-raised px-2 py-0.5 text-xs font-medium text-fg hover:bg-fg/6"
              >
                <Icon icon={CircleCheck} size={12} className="text-success" />
                {mod.name}
                <span className="readout text-fg-subtle">{id}</span>
              </a>
            ) : (
              <span
                className={cn(
                  'inline-flex items-center gap-1 rounded-sm border px-2 py-0.5 text-xs font-medium',
                  missing ? 'border-warning/50 bg-warning-soft text-fg' : 'border-border bg-raised text-fg-muted',
                )}
              >
                {missing ? <Icon icon={TriangleAlert} size={12} className="text-warning" /> : null}
                <span className="readout">{id}</span>
                {missing ? <span className="sr-only">({ut('upload_manifest_dependency_missing')})</span> : null}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function ManifestSummary({ manifest, path }: { manifest: ManifestView; path?: string | null }) {
  return (
    <section
      aria-labelledby="upload-manifest-heading"
      className="flex flex-col gap-3 rounded-lg border border-border bg-raised p-4"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Icon icon={FileArchive} size={18} className="text-fg-muted" />
        <h3 id="upload-manifest-heading" className="text-sm font-semibold text-fg">
          {ut('upload_manifest_found')}
        </h3>
        {path ? <span className="readout text-fg-subtle">{path}</span> : null}
      </div>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
        <Fact label={ut('upload_manifest_name')}>{manifest.name ?? '-'}</Fact>
        <Fact label={ut('upload_manifest_id')}>
          <span className="readout text-fg">{manifest.id}</span>
        </Fact>
        <Fact label={ut('upload_manifest_version')}>
          <span className="readout text-fg">v{manifest.version.replace(/^v/, '')}</span>
        </Fact>
        <Fact label={ut('upload_manifest_type')}>
          {manifest.type === 'Library' ? ut('upload_manifest_type_library') : ut('upload_manifest_type_mod')}
        </Fact>
        <Fact label={ut('upload_manifest_platform')}>{manifest.platform ?? '-'}</Fact>
        <Fact label={ut('upload_manifest_author')}>{manifest.author ?? '-'}</Fact>
        <Fact label={ut('upload_manifest_game_version')}>{manifest.gameVersion ?? '-'}</Fact>
        <Fact label={ut('upload_manifest_loader_version')}>{manifest.loaderVersion ?? '-'}</Fact>
        <Fact label={ut('upload_manifest_log_color')}>
          {manifest.logColor ? (
            <span className="inline-flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="inline-block size-3.5 rounded-xs border border-border-strong"
                style={{ backgroundColor: manifest.logColor }}
              />
              <span className="readout text-fg">{manifest.logColor}</span>
            </span>
          ) : (
            '-'
          )}
        </Fact>
      </dl>
      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-fg-muted">{ut('upload_manifest_dependencies')}</p>
        <DependencyChips ids={manifest.dependencies} />
      </div>
    </section>
  );
}

export function BuildSummary({ build }: { build: BuildView }) {
  return (
    <section
      aria-labelledby="upload-build-heading"
      className="flex flex-col gap-4 rounded-lg border border-border bg-raised p-4 sm:flex-row"
    >
      <div className="aspect-video w-full shrink-0 overflow-hidden rounded-md border border-border bg-sunken sm:w-64">
        {build.thumbnail ? (
          <img
            src={build.thumbnail}
            alt={ut('upload_build_thumbnail_alt', { name: build.name ?? build.guid })}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center p-3 text-center text-xs text-fg-muted">
            {ut('upload_build_no_thumbnail')}
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <h3 id="upload-build-heading" className="text-sm font-semibold text-fg">
          {build.name ?? ut('upload_build_detected')}
        </h3>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
          <Fact label={ut('upload_build_elements')}>{number(build.elements)}</Fact>
          <Fact label={ut('upload_build_size_class')}>{build.sizeClass}</Fact>
          <Fact label={ut('upload_build_structures')}>
            {build.structures === null ? '-' : number(build.structures)}
          </Fact>
          <Fact label={ut('upload_build_buildshare_version')}>
            <span className="readout text-fg">{build.buildShareVersion}</span>
          </Fact>
          <Fact label={ut('upload_manifest_author')}>{build.author ?? '-'}</Fact>
          <Fact label={ut('upload_build_guid')}>
            <span className="readout text-fg">{build.guid}</span>
          </Fact>
        </dl>
      </div>
    </section>
  );
}

/** Errors and warnings of the file (inspection flags and manifest issues). */
export function ProblemList({
  problems,
  issues = [],
}: {
  problems: readonly ProblemView[];
  issues?: readonly IssueView[];
}) {
  if (problems.length === 0 && issues.length === 0) return null;
  const rows = [
    ...problems.map((p) => ({
      key: `${p.code}:${p.path ?? ''}`,
      severity: p.severity,
      text: flagLabel(p.code),
      path: p.path,
      detail: p.detail,
    })),
    ...issues.map((i) => ({
      key: `issue:${i.code}:${i.field}`,
      severity: i.severity,
      text: issueLabel(i.code, i.field),
      path: null,
      detail: null,
    })),
  ].sort((a, b) => (a.severity === b.severity ? 0 : a.severity === 'error' ? -1 : 1));
  return (
    <ul className="flex flex-col gap-1.5" aria-label={ut('upload_problems_label')}>
      {rows.map((row) => (
        <li key={row.key} className="flex items-start gap-2 text-sm">
          <Icon
            icon={row.severity === 'error' ? CircleAlert : TriangleAlert}
            size={16}
            className={cn('mt-0.5 shrink-0', row.severity === 'error' ? 'text-danger' : 'text-warning')}
          />
          <span className="min-w-0">
            <span className="sr-only">
              {row.severity === 'error' ? ut('upload_severity_error') : ut('upload_severity_warning')}:{' '}
            </span>
            <span className="text-fg">{row.text}</span>
            {row.path ? <span className="readout ms-2 break-all text-fg-subtle">{row.path}</span> : null}
            {row.detail ? <span className="block text-xs text-fg-muted">{row.detail}</span> : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

const STATUS_BADGE = {
  allowed: null,
  flagged: 'warning',
  not_allowed: 'warning',
  unsafe: 'danger',
} as const;

/** The files inside the zip (collapsed by default: mods have a handful, some have hundreds). */
export function EntryList({
  entries,
  total,
  uncompressed,
}: {
  entries: readonly EntryView[];
  total: number;
  uncompressed: number | null;
}) {
  if (entries.length === 0) return null;
  return (
    <details className="group rounded-lg border border-border bg-raised">
      <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-fg">
        <span>{ut('upload_entries_title', { count: total })}</span>
        {uncompressed !== null ? <span className="readout text-fg-muted">{bytes(uncompressed)}</span> : null}
      </summary>
      <ul className="max-h-80 overflow-auto border-t border-border px-4 py-2">
        {entries.map((entry) => {
          const status = entry.status ? STATUS_BADGE[entry.status] : null;
          return (
            <li key={entry.path} className="flex items-center justify-between gap-3 py-1 text-sm">
              <span className="readout min-w-0 break-all text-fg">{entry.path}</span>
              <span className="flex shrink-0 items-center gap-2">
                {status && entry.status ? (
                  <Badge variant={status} size="sm">
                    {entry.status === 'unsafe'
                      ? ut('upload_entry_unsafe')
                      : entry.status === 'flagged'
                        ? ut('upload_entry_flagged')
                        : ut('upload_entry_not_allowed')}
                  </Badge>
                ) : null}
                <span className="readout text-fg-muted">{entry.path.endsWith('/') ? '' : bytes(entry.size)}</span>
              </span>
            </li>
          );
        })}
        {total > entries.length ? (
          <li className="py-1 text-xs text-fg-muted">{ut('upload_entries_more', { count: total - entries.length })}</li>
        ) : null}
      </ul>
    </details>
  );
}
