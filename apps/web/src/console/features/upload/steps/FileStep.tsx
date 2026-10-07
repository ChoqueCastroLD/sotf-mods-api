/**
 * Step ① «File» (PLAN §7.5, research/03 §6.8): drag & drop, in-browser inspection (manifest,
 * files, errors and warnings **before** uploading), then a direct upload to R2 with real progress,
 * retry and resume, followed by the server inspection.
 */
import type { UploadDTO } from '@sotf/contracts/uploads';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { RadarSpinner } from '@sotf/ui/spinner';
import { useQuery } from '@tanstack/react-query';
import { CircleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import { api } from '../../../lib/api.ts';
import { Callout } from '../components/Callout.tsx';
import { Dropzone, ProgressBar } from '../components/Dropzone.tsx';
import {
  BuildSummary,
  type BuildView,
  EntryList,
  ManifestSummary,
  type ManifestView,
  ProblemList,
} from '../components/FileSummary.tsx';
import { ut } from '../i18n.ts';
import { blockLabel, failureLabel } from '../labels.ts';
import { bytes, percent } from '../lib/format.ts';
import type { LocalReport } from '../lib/inspect.ts';
import { loadPreview } from '../lib/preview-cache.ts';
import type { FileUpload } from '../lib/use-file-upload.ts';
import { StepHeader } from './StepHeader.tsx';

export interface FileStepProps {
  fileKind: 'zip' | 'build';
  upload: FileUpload;
  maxBytes: number;
  /** New version: the mod the file must belong to. */
  target?: { name: string; manifestId: string; latestVersion: string | null } | null;
  /** «Next» was pressed without a file: say so under the drop area. */
  missing?: boolean;
  headingId: string;
}

function manifestFromReport(report: LocalReport | null): ManifestView | null {
  return report?.kind === 'zip' && report.manifest ? report.manifest : null;
}

function buildFromReport(report: LocalReport | null): BuildView | null {
  if (report?.kind !== 'build' || !report.blueprint) return null;
  const bp = report.blueprint;
  return {
    guid: bp.guid,
    name: bp.name,
    author: bp.author,
    elements: bp.numberOfElements,
    structures: bp.structuresCount,
    buildShareVersion: bp.buildShareVersion,
    sizeClass: bp.sizeClass,
    thumbnail: bp.thumbnailBase64 ? `data:image/png;base64,${bp.thumbnailBase64}` : null,
  };
}

function buildFromUpload(upload: UploadDTO | null, thumbnail: string | null): BuildView | null {
  const meta = upload?.inspection?.buildMeta;
  if (!meta) return null;
  return {
    guid: meta.guid,
    name: null,
    author: meta.blueprintAuthor,
    elements: meta.elements,
    structures: meta.structures,
    buildShareVersion: meta.buildshareVersion,
    sizeClass: meta.sizeClass,
    thumbnail,
  };
}

export function FileStep({ fileKind, upload, maxBytes, target, missing = false, headingId }: FileStepProps) {
  const { state } = upload;
  const { report, phase } = state;
  const server = state.upload;
  const [storedThumb, setStoredThumb] = useState<string | null>(null);

  useEffect(() => {
    if (fileKind !== 'build' || !server || report) return;
    let alive = true;
    void loadPreview(server.id).then((url) => {
      if (alive) setStoredThumb(url);
    });
    return () => {
      alive = false;
    };
  }, [fileKind, server, report]);

  const manifest: ManifestView | null = manifestFromReport(report) ?? server?.inspection?.manifest ?? null;
  const build = buildFromReport(report) ?? buildFromUpload(server, storedThumb);
  const localProblems = report?.problems ?? [];
  const serverFlags = server?.inspection?.flags ?? [];
  const issues = report?.kind === 'zip' ? report.manifestIssues : report?.kind === 'build' ? report.issues : [];
  const entries =
    report?.kind === 'zip'
      ? report.entries
      : (server?.inspection?.entries ?? []).map((entry) => ({ path: entry.path, size: entry.size }));
  const entriesTotal = report?.kind === 'zip' ? report.entriesTotal : (server?.inspection?.entriesTotal ?? 0);
  const uncompressed =
    report?.kind === 'zip' ? report.uncompressedBytes : (server?.inspection?.uncompressedBytes ?? null);
  const busy = phase === 'reading' || phase === 'uploading' || phase === 'finishing';
  const accept = fileKind === 'build' ? '.json,application/json' : '.zip,application/zip';
  const hasFile = phase !== 'idle';

  const serverStatus = server?.inspection?.status ?? null;
  const filename = state.file?.name ?? server?.filename ?? null;
  const size = state.file?.size ?? server?.size ?? 0;

  return (
    <div className="flex flex-col gap-5">
      <StepHeader
        id={headingId}
        title={fileKind === 'build' ? ut('upload_file_title_build') : ut('upload_file_title_mod')}
        description={
          target
            ? ut('upload_file_intro_version', {
                name: target.name,
                manifestId: target.manifestId,
                version: target.latestVersion ?? '-',
              })
            : fileKind === 'build'
              ? ut('upload_file_intro_build')
              : ut('upload_file_intro_mod')
        }
      />

      {!hasFile || phase === 'blocked' || phase === 'error' || phase === 'rejected' ? (
        <Dropzone
          id="upload-file"
          accept={accept}
          disabled={busy}
          title={
            hasFile
              ? ut('upload_drop_replace')
              : fileKind === 'build'
                ? ut('upload_drop_title_build')
                : ut('upload_drop_title_mod')
          }
          hint={ut('upload_drop_hint', { max: bytes(maxBytes), type: fileKind === 'build' ? '.json' : '.zip' })}
          buttonLabel={ut('upload_drop_button')}
          onFiles={([file]) => {
            if (file) void upload.select(file);
          }}
          compact={hasFile}
        />
      ) : null}
      {missing && phase === 'idle' ? (
        <p role="alert" className="flex items-center gap-1.5 text-sm text-danger">
          <Icon icon={CircleAlert} size={16} />
          {fileKind === 'build' ? ut('upload_error_file_required_build') : ut('upload_error_file_required')}
        </p>
      ) : null}

      {filename ? (
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="min-w-0 break-all font-medium text-fg">{filename}</span>
          <span className="readout text-fg-muted">{bytes(size)}</span>
        </div>
      ) : null}

      <div aria-live="polite" className="flex flex-col gap-3">
        {phase === 'reading' ? (
          <p className="flex items-center gap-2 text-sm text-fg-muted">
            <RadarSpinner size={18} />
            {fileKind === 'build' ? ut('upload_reading_build') : ut('upload_reading_zip')}
          </p>
        ) : null}

        {phase === 'uploading' || phase === 'finishing' ? (
          <div className="flex flex-col gap-2">
            <ProgressBar
              label={ut('upload_progress_label')}
              value={state.loaded}
              max={state.total}
              valueText={
                phase === 'finishing'
                  ? ut('upload_progress_finishing')
                  : ut('upload_progress_value', {
                      percent: percent(state.total > 0 ? state.loaded / state.total : 0),
                      loaded: bytes(state.loaded),
                      total: bytes(state.total),
                    })
              }
            />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-fg-muted">{ut('upload_progress_direct')}</p>
              <Button variant="ghost" size="sm" onClick={upload.cancel}>
                {ut('upload_cancel')}
              </Button>
            </div>
          </div>
        ) : null}

        {phase === 'inspecting' ? (
          <Callout tone="info" title={ut('upload_inspecting_title')}>
            <span className="inline-flex items-center gap-2">
              <RadarSpinner size={16} />
              {ut('upload_inspecting_detail')}
            </span>
          </Callout>
        ) : null}

        {phase === 'ready' && serverStatus === 'flagged' ? (
          <Callout tone="warning" title={ut('upload_flagged_title')}>
            {ut('upload_flagged_detail')}
          </Callout>
        ) : null}
        {phase === 'ready' && serverStatus !== 'flagged' ? (
          <Callout tone="success" title={ut('upload_ready_title')}>
            {ut('upload_ready_detail')}
          </Callout>
        ) : null}

        {phase === 'rejected' ? (
          <Callout tone="danger" title={ut('upload_rejected_title')}>
            {server?.status === 'expired' ? ut('upload_expired_detail') : ut('upload_rejected_detail')}
          </Callout>
        ) : null}

        {phase === 'blocked' && state.block ? (
          <Callout tone="danger" title={ut('upload_blocked_title')}>
            {blockLabel(state.block, bytes)}
          </Callout>
        ) : null}

        {phase === 'error' && state.error ? (
          <Callout
            tone="danger"
            title={ut('upload_error_title')}
            action={
              <>
                {state.error.resumable || state.error.failure === 'network' ? (
                  <Button variant="primary" size="sm" onClick={upload.retry}>
                    {state.error.resumable ? ut('upload_resume') : ut('upload_retry')}
                  </Button>
                ) : null}
                <Button variant="ghost" size="sm" onClick={upload.cancel}>
                  {ut('upload_choose_other')}
                </Button>
              </>
            }
          >
            {failureLabel(state.error.failure)}
            {state.error.reference ? (
              <span className="readout mt-1 block">{ut('upload_reference', { ref: state.error.reference })}</span>
            ) : null}
          </Callout>
        ) : null}
      </div>

      {manifest && fileKind === 'zip' ? (
        <ManifestSummary manifest={manifest} path={report?.kind === 'zip' ? report.manifestPath : null} />
      ) : null}
      {build ? <BuildSummary build={build} /> : null}

      <ProblemList
        problems={phase === 'ready' || phase === 'rejected' || phase === 'inspecting' ? serverFlags : localProblems}
        issues={issues}
      />
      {fileKind === 'zip' ? <EntryList entries={entries} total={entriesTotal} uncompressed={uncompressed} /> : null}

      {phase === 'ready' || phase === 'inspecting' ? (
        <div>
          <Dropzone
            accept={accept}
            title={ut('upload_drop_replace')}
            hint={ut('upload_drop_hint', { max: bytes(maxBytes), type: fileKind === 'build' ? '.json' : '.zip' })}
            buttonLabel={ut('upload_drop_button')}
            onFiles={([file]) => {
              if (file) void upload.select(file);
            }}
            compact
          />
        </div>
      ) : null}
    </div>
  );
}

/** Loads the upload of a resumed draft and hands it to the file hook. */
export function useAdoptUpload(uploadId: string | undefined, adopt: FileUpload['adopt'], active: boolean): void {
  const { data } = useQuery({
    queryKey: ['studio', 'uploads', uploadId ?? 'none', 'adopt'],
    queryFn: ({ signal }) => api.uploads.get({ params: { id: uploadId ?? '' } }, { signal }),
    enabled: Boolean(uploadId) && active,
    staleTime: Number.POSITIVE_INFINITY,
    retry: 1,
  });
  useEffect(() => {
    if (data && active) adopt(data);
  }, [data, active, adopt]);
}
