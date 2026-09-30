/**
 * The file of a publication (mod zip or BuildShare JSON) through its whole life in the wizard:
 * size/type check → in-browser inspection (fflate, lazily loaded) → optional flow check (new
 * version: same manifest id, greater semver) → direct upload with progress, retry and resume →
 * server inspection polling.
 *
 * A file that fails the local checks is **never uploaded**: the creator sees why first.
 */
import type { UploadDTO, UploadPurpose } from '@sotf/contracts/uploads';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { LocalReport } from './inspect.ts';
import { contentTypeFor, isAbort, runUpload, UploadError, type UploadSession, waitForUpload } from './uploader.ts';

export type FilePhase =
  | 'idle'
  | 'reading'
  | 'blocked'
  | 'uploading'
  | 'finishing'
  | 'inspecting'
  | 'ready'
  | 'rejected'
  | 'error';

/** Why a file cannot be uploaded (shown before any byte leaves the browser). */
export type BlockReason =
  | { code: 'wrong_type' }
  | { code: 'too_large'; maxBytes: number }
  | { code: 'empty' }
  | { code: 'unreadable' }
  | { code: 'local_problems' }
  | { code: 'manifest_id_mismatch'; expected: string; found: string }
  | { code: 'version_not_semver'; version: string }
  | { code: 'version_exists'; version: string }
  | { code: 'version_not_greater'; version: string; previous: string };

export interface FileUploadState {
  phase: FilePhase;
  file: File | null;
  report: LocalReport | null;
  block: BlockReason | null;
  loaded: number;
  total: number;
  upload: UploadDTO | null;
  error: UploadError | null;
}

export interface FileUploadOptions {
  purpose: Extract<UploadPurpose, 'mod_file' | 'build_file'>;
  extensions: readonly string[];
  contentTypes: readonly string[];
  maxBytes: number;
  /** Flow-specific check of the local report (new version); null = fine. */
  precheck?: (report: LocalReport) => BlockReason | null;
  /** The upload exists server-side (store its id in the draft). */
  onUploaded: (upload: UploadDTO, report: LocalReport | null) => void;
  /** The server inspection finished (refresh the draft's preflight). */
  onInspected?: (upload: UploadDTO) => void;
}

const INITIAL: FileUploadState = {
  phase: 'idle',
  file: null,
  report: null,
  block: null,
  loaded: 0,
  total: 0,
  upload: null,
  error: null,
};

function phaseOf(upload: UploadDTO): FilePhase {
  if (upload.status === 'ready') return 'ready';
  if (upload.status === 'rejected' || upload.status === 'expired') return 'rejected';
  return 'inspecting';
}

export interface FileUpload {
  state: FileUploadState;
  select: (file: File) => Promise<void>;
  retry: () => void;
  cancel: () => void;
  reset: () => void;
  /** Shows (and follows) an upload made earlier (a resumed draft). */
  adopt: (upload: UploadDTO) => void;
}

export function useFileUpload(options: FileUploadOptions): FileUpload {
  const [state, setState] = useState<FileUploadState>(INITIAL);
  const optionsRef = useRef(options);
  optionsRef.current = options;
  const controller = useRef<AbortController | null>(null);
  const session = useRef<UploadSession | null>(null);
  const stateRef = useRef(state);
  stateRef.current = state;

  const patch = useCallback((next: Partial<FileUploadState>) => setState((s) => ({ ...s, ...next })), []);

  useEffect(() => () => controller.current?.abort(), []);

  const follow = useCallback(
    async (upload: UploadDTO, signal: AbortSignal) => {
      patch({ upload, phase: phaseOf(upload) });
      if (phaseOf(upload) !== 'inspecting') {
        optionsRef.current.onInspected?.(upload);
        return;
      }
      try {
        const done = await waitForUpload(upload.id, signal, (next) => patch({ upload: next, phase: phaseOf(next) }));
        patch({ upload: done, phase: phaseOf(done) });
        optionsRef.current.onInspected?.(done);
      } catch (error) {
        if (isAbort(error)) return;
        // The inspection keeps running server-side; the review step polls the draft.
      }
    },
    [patch],
  );

  const start = useCallback(
    async (file: File, report: LocalReport | null) => {
      controller.current?.abort();
      const abort = new AbortController();
      controller.current = abort;
      const { purpose, contentTypes } = optionsRef.current;
      patch({ phase: 'uploading', loaded: 0, total: file.size, error: null });
      try {
        const upload = await runUpload({
          file,
          filename: file.name,
          purpose,
          contentType: contentTypeFor(file, contentTypes),
          sha256: report?.sha256 ?? null,
          signal: abort.signal,
          session: session.current,
          onSession: (next) => {
            session.current = next;
          },
          onProgress: (loaded, total) => {
            setState((s) => ({ ...s, loaded, total, phase: loaded >= total ? 'finishing' : 'uploading' }));
          },
        });
        session.current = null;
        optionsRef.current.onUploaded(upload, report);
        await follow(upload, abort.signal);
      } catch (error) {
        if (isAbort(error)) return;
        const failure =
          error instanceof UploadError
            ? error
            : new UploadError('network', error instanceof Error ? error.message : 'error', { resumable: true });
        if (!failure.resumable || failure.failure === 'expired') session.current = null;
        patch({ phase: 'error', error: failure });
      }
    },
    [follow, patch],
  );

  const select = useCallback(
    async (file: File) => {
      controller.current?.abort();
      session.current = null;
      const { extensions, maxBytes, purpose, precheck } = optionsRef.current;
      const ext = file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase();
      const base = { ...INITIAL, file, total: file.size };
      if (!extensions.includes(ext)) return setState({ ...base, phase: 'blocked', block: { code: 'wrong_type' } });
      if (file.size === 0) return setState({ ...base, phase: 'blocked', block: { code: 'empty' } });
      if (file.size > maxBytes) {
        return setState({ ...base, phase: 'blocked', block: { code: 'too_large', maxBytes } });
      }
      setState({ ...base, phase: 'reading' });
      let report: LocalReport;
      try {
        const inspect = await import('./inspect.ts');
        report = purpose === 'build_file' ? await inspect.inspectBuild(file) : await inspect.inspectZip(file);
        if (inspect.hasBlockingProblems(report)) {
          return setState({ ...base, report, phase: 'blocked', block: { code: 'local_problems' } });
        }
      } catch {
        return setState({ ...base, phase: 'blocked', block: { code: 'unreadable' } });
      }
      const blocked = precheck?.(report) ?? null;
      if (blocked) return setState({ ...base, report, phase: 'blocked', block: blocked });
      setState({ ...base, report });
      await start(file, report);
    },
    [start],
  );

  const retry = useCallback(() => {
    const { file, report, upload } = stateRef.current;
    if (upload && stateRef.current.phase !== 'error') return;
    if (file) void start(file, report);
  }, [start]);

  const cancel = useCallback(() => {
    controller.current?.abort();
    controller.current = null;
    session.current = null;
    setState(INITIAL);
  }, []);

  const adopt = useCallback(
    (upload: UploadDTO) => {
      controller.current?.abort();
      const abort = new AbortController();
      controller.current = abort;
      setState({ ...INITIAL, upload, total: upload.size, loaded: upload.size, phase: phaseOf(upload) });
      void follow(upload, abort.signal);
    },
    [follow],
  );

  return { state, select, retry, cancel, reset: cancel, adopt };
}
