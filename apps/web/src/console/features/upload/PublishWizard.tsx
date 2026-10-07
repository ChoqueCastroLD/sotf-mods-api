/**
 * The publishing wizard (PLAN §7.5, research/03 §6.8): new mod (6 steps), new build (file → details
 * → media → review) and new version (file → release → review). One component drives the three
 * flows: the draft data, autosave, the file upload, step navigation and the submission.
 *
 * Steps stay mounted once visited (hidden when not current), so an image upload or the Markdown
 * editor survives moving between steps.
 */
import { isApiError } from '@sotf/contracts/client';
import type { StudioModDTO, SubmitResultDTO } from '@sotf/contracts/studio';
import { maxUploadBytes, UPLOAD_LIMITS } from '@sotf/contracts/uploads';
import { changeWhere, normalizeWhere } from '@sotf/contracts/where';
import { buttonClasses } from '@sotf/ui/button';
import { Skeleton } from '@sotf/ui/skeleton';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { hasPermission, useMe } from '../../hooks/use-me.ts';
import { api } from '../../lib/api.ts';
import { problemText } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { queryKeys } from '../../lib/query-keys.ts';
import { Callout } from './components/Callout.tsx';
import { SubmitSuccess } from './components/SubmitSuccess.tsx';
import { WizardFooter, WizardSteps } from './components/WizardChrome.tsx';
import { ut } from './i18n.ts';
import type { LocalReport } from './lib/inspect.ts';
import { savePreview } from './lib/preview-cache.ts';
import { draftQuery, uploadKeys } from './lib/queries.ts';
import { checkNextVersion } from './lib/semver.ts';
import { useAutosave } from './lib/use-autosave.ts';
import { type BlockReason, useFileUpload } from './lib/use-file-upload.ts';
import { isHttpUrl, isLoaderVersion } from './lib/validate.ts';
import {
  fieldTarget,
  listingPath,
  STEP_NUMBER,
  STEPS,
  type StepId,
  slugify,
  stepFromNumber,
  stepProblems,
  type WizardMode,
} from './lib/wizard.ts';
import { FileStep, useAdoptUpload } from './steps/FileStep.tsx';
import type { DraftData, DraftDTO } from './types.ts';

// Steps after the file are separate chunks (the route chunk stays within budget); they are
// prefetched while the browser is idle, so moving to the next step does not wait.
const loadDetails = () => import('./steps/DetailsStep.tsx');
const loadCompat = () => import('./steps/CompatStep.tsx');
const loadMedia = () => import('./steps/MediaStep.tsx');
const loadRelease = () => import('./steps/ReleaseStep.tsx');
const loadReview = () => import('./steps/ReviewStep.tsx');
const DetailsStep = lazy(() => loadDetails().then((mod) => ({ default: mod.DetailsStep })));
const CompatStep = lazy(() => loadCompat().then((mod) => ({ default: mod.CompatStep })));
const MediaStep = lazy(() => loadMedia().then((mod) => ({ default: mod.MediaStep })));
const ReleaseStep = lazy(() => loadRelease().then((mod) => ({ default: mod.ReleaseStep })));
const ReviewStep = lazy(() => loadReview().then((mod) => ({ default: mod.ReviewStep })));
const STEP_LOADERS: Readonly<Record<StepId, (() => Promise<unknown>) | null>> = {
  file: null,
  details: loadDetails,
  compat: loadCompat,
  media: loadMedia,
  release: loadRelease,
  review: loadReview,
};

function StepSkeleton() {
  return (
    <div className="flex flex-col gap-4" aria-hidden="true">
      <Skeleton className="h-8 w-56" />
      <Skeleton className="h-40 w-full rounded-lg" />
      <Skeleton className="h-40 w-full rounded-lg" />
    </div>
  );
}

export interface PublishWizardProps {
  mode: WizardMode;
  /** The draft being resumed. */
  initial: DraftDTO | null;
  /** New version: the owner view of the mod. */
  target?: StudioModDTO | null;
  /** The draft was created (the route puts its id in the URL). */
  onDraftCreated?: (id: string) => void;
  /** The draft was submitted. */
  onSubmitted?: () => void;
}

const FOCUSABLE =
  'input:not([type=hidden]):not([disabled]), textarea, select, button:not([disabled]), [tabindex="0"], [contenteditable=true]';

function focusAnchor(anchor: string): void {
  const element = document.getElementById(anchor);
  if (!element) return;
  element.scrollIntoView({
    block: 'center',
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  });
  const target = element.matches(FOCUSABLE) ? element : (element.querySelector<HTMLElement>(FOCUSABLE) ?? element);
  target.focus({ preventScroll: true });
}

function whereOf(data: DraftData) {
  return {
    platform: data.platform ?? null,
    multiplayerRole: data.multiplayerRole ?? null,
    dedicatedServer: data.dedicatedServer ?? null,
    safeToRemove: data.safeToRemove ?? null,
  };
}

/** A resumed draft may hold answers that contradict each other (older saves): make them coherent. */
function coherent(data: DraftData): DraftData {
  if (data.platform === undefined && data.multiplayerRole === undefined && data.dedicatedServer === undefined) {
    return data;
  }
  const where = normalizeWhere(whereOf(data));
  return {
    ...data,
    platform: where.platform,
    multiplayerRole: where.multiplayerRole,
    dedicatedServer: where.dedicatedServer,
  };
}

/** Fields prefilled from the file when the creator has not typed them yet. */
function prefill(data: DraftData, report: LocalReport | null, mode: WizardMode): DraftData {
  if (!report || mode === 'version') return data;
  const next: DraftData = { ...data };
  if (report.kind === 'zip' && report.manifest) {
    const manifest = report.manifest;
    if (!next.name && manifest.name && manifest.name.trim().length >= 2) next.name = manifest.name.trim().slice(0, 80);
    if (!next.shortDescription && manifest.description) {
      next.shortDescription = manifest.description.replace(/\s+/g, ' ').trim().slice(0, 200);
    }
    if (!next.platform && manifest.platform) {
      Object.assign(next, changeWhere(whereOf(next), { platform: manifest.platform }).answers);
    }
    if (!next.loaderMin && manifest.loaderVersion && isLoaderVersion(manifest.loaderVersion)) {
      next.loaderMin = manifest.loaderVersion.trim();
    }
    next.version = { ...(next.version ?? {}), version: manifest.version };
  }
  if (report.kind === 'build' && report.blueprint) {
    const bp = report.blueprint;
    if (!next.name && bp.name.trim().length >= 2) next.name = bp.name.trim().slice(0, 80);
    if (!next.shortDescription && bp.description) {
      next.shortDescription = bp.description.replace(/\s+/g, ' ').trim().slice(0, 200);
    }
  }
  return next;
}

export function PublishWizard({ mode, initial, target = null, onDraftCreated, onSubmitted }: PublishWizardProps) {
  const me = useMe();
  const queryClient = useQueryClient();
  const isBuild = mode === 'build' || (mode === 'version' && target?.mod.kind === 'build');
  const listingKind = isBuild ? 'build' : 'mod';
  const steps = STEPS[mode];

  const [data, setData] = useState<DraftData>(() => (initial ? coherent(initial.data) : { step: 1 }));
  const step = stepFromNumber(mode, data.step);
  const [visited, setVisited] = useState<ReadonlySet<StepId>>(() => new Set([step]));
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<{ text: string; reference: string | null } | null>(null);
  const [result, setResult] = useState<SubmitResultDTO | null>(null);
  const pendingFocus = useRef<string | null>(null);
  // Steps where the creator pressed «Next» with required answers missing: their errors show inline.
  const [attempted, setAttempted] = useState<ReadonlySet<StepId>>(new Set());

  useEffect(() => {
    const prefetch = () => {
      for (const id of steps) STEP_LOADERS[id]?.().catch(() => {});
    };
    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(prefetch, { timeout: 4_000 });
      return () => window.cancelIdleCallback(handle);
    }
    const timer = setTimeout(prefetch, 1_500);
    return () => clearTimeout(timer);
  }, [steps]);

  const update = useCallback((fn: (d: DraftData) => DraftData) => setData(fn), []);

  const autosave = useAutosave({
    kind: mode,
    modId: target?.mod.id,
    initial,
    data,
    onCreated: (draft) => onDraftCreated?.(draft.id),
  });

  // Live server view of the draft (preflight, score). Polled while the file or images are processed.
  const [polling, setPolling] = useState(false);
  const live = useQuery({
    ...draftQuery(autosave.draftId ?? 'none'),
    enabled: autosave.draftId !== null && result === null,
    refetchInterval: polling ? 3_000 : false,
  });
  const server = live.data ?? autosave.draft;
  useEffect(() => {
    const codes = new Set(server?.preflight.map((row) => row.code) ?? []);
    setPolling(codes.has('file_inspecting') || codes.has('media_processing'));
  }, [server]);

  // ----- File --------------------------------------------------------------------------------
  const purpose = isBuild ? 'build_file' : 'mod_file';
  const limits = UPLOAD_LIMITS[purpose];
  const maxBytes = maxUploadBytes(purpose, me.user.verifiedCreator);
  const existingVersions = useMemo(() => target?.versions.map((v) => v.version) ?? [], [target]);

  const precheck = useCallback(
    (report: LocalReport): BlockReason | null => {
      if (mode !== 'version' || !target || report.kind !== 'zip' || !report.manifest) return null;
      const manifest = report.manifest;
      if (manifest.id !== target.mod.manifestId) {
        return { code: 'manifest_id_mismatch', expected: target.mod.manifestId, found: manifest.id };
      }
      const check = checkNextVersion(manifest.version, existingVersions);
      if (check.ok) return null;
      if (check.reason === 'not_semver') return { code: 'version_not_semver', version: manifest.version };
      if (check.reason === 'exists') return { code: 'version_exists', version: manifest.version };
      return { code: 'version_not_greater', version: manifest.version, previous: check.previous ?? '-' };
    },
    [mode, target, existingVersions],
  );

  const flushSoon = useRef(false);
  const fileUpload = useFileUpload({
    purpose,
    extensions: limits.extensions,
    contentTypes: limits.contentTypes,
    maxBytes,
    precheck,
    onUploaded: (upload, report) => {
      if (report?.kind === 'build' && report.blueprint?.thumbnailBase64) {
        void savePreview(upload.id, `data:image/png;base64,${report.blueprint.thumbnailBase64}`);
      }
      setData((d) => prefill({ ...d, fileUploadId: upload.id }, report, mode));
      flushSoon.current = true;
    },
    onInspected: () => {
      const id = autosave.draftId;
      if (id) void queryClient.invalidateQueries({ queryKey: uploadKeys.draft(id) });
    },
  });

  // Save right after the file was attached (the preflight then follows the inspection).
  useEffect(() => {
    if (!flushSoon.current) return;
    flushSoon.current = false;
    autosave.flush().catch(() => {});
  }, [data.fileUploadId, autosave]);

  // Resumed draft: show its uploaded file.
  const adoptOnce = useRef(Boolean(initial?.data.fileUploadId));
  useAdoptUpload(initial?.data.fileUploadId, fileUpload.adopt, adoptOnce.current && fileUpload.state.phase === 'idle');
  useEffect(() => {
    if (fileUpload.state.phase !== 'idle') adoptOnce.current = false;
  }, [fileUpload.state.phase]);

  // Leaving while bytes are in flight loses the upload: ask first.
  useEffect(() => {
    const phase = fileUpload.state.phase;
    if (phase !== 'uploading' && phase !== 'finishing' && phase !== 'reading') return;
    const onBeforeUnload = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [fileUpload.state.phase]);

  const report = fileUpload.state.report;
  const manifest =
    (report?.kind === 'zip' ? report.manifest : null) ?? fileUpload.state.upload?.inspection?.manifest ?? null;
  const fileVersion = manifest?.version ?? data.version?.version ?? null;
  const versionCheck = !isBuild && fileVersion ? checkNextVersion(fileVersion, existingVersions) : null;
  const manifestId = target?.mod.manifestId ?? manifest?.id ?? null;

  // ----- Navigation ----------------------------------------------------------------------------
  const goTo = useCallback((next: StepId, anchor?: string) => {
    setData((d) => ({ ...d, step: STEP_NUMBER[next] }));
    setVisited((set) => (set.has(next) ? set : new Set(set).add(next)));
    pendingFocus.current = anchor ?? `upload-step-${next}`;
    flushOnStep.current = true;
  }, []);

  // «Autosave on step change»: once the new step is in the state, save it.
  const flushOnStep = useRef(false);
  const flushNow = autosave.flush;
  useEffect(() => {
    if (!flushOnStep.current) return;
    flushOnStep.current = false;
    flushNow().catch(() => {});
  }, [step, flushNow]);

  useEffect(() => {
    const anchor = pendingFocus.current;
    if (!anchor) return;
    pendingFocus.current = null;
    // The step may still be loading its chunk: try for up to ~2 s of frames.
    let frames = 0;
    let handle = 0;
    const attempt = () => {
      if (!document.getElementById(anchor)) {
        if (frames++ < 120) handle = requestAnimationFrame(attempt);
        return;
      }
      if (anchor.startsWith('upload-step-')) {
        window.scrollTo({ top: 0 });
        document.getElementById(anchor)?.focus();
      } else {
        focusAnchor(anchor);
      }
    };
    handle = requestAnimationFrame(attempt);
    return () => cancelAnimationFrame(handle);
  }, [step]);

  const index = steps.indexOf(step);
  const previous = index > 0 ? steps[index - 1] : null;
  const next = index < steps.length - 1 ? steps[index + 1] : null;

  const problems = useMemo(() => stepProblems(step, mode, data, { isHttpUrl, isLoaderVersion }), [step, mode, data]);
  const failedFields = useMemo(
    () => (attempted.has(step) ? new Set<string>(problems.map((problem) => problem.field)) : new Set<string>()),
    [attempted, step, problems],
  );
  const tryNext = () => {
    const first = problems[0];
    if (!next) return;
    if (!first) {
      goTo(next);
      return;
    }
    setAttempted((set) => new Set(set).add(step));
    // The errors render on the next frame; then move to the first one.
    requestAnimationFrame(() => requestAnimationFrame(() => focusAnchor(first.anchor)));
  };

  const attention = useMemo(() => {
    const set = new Set<StepId>();
    for (const row of server?.preflight ?? []) {
      if (row.severity !== 'error') continue;
      const where = fieldTarget(mode, row.field);
      // A step the creator has not opened yet is not «needing attention», it is just next.
      if (where && where.step !== step && visited.has(where.step)) set.add(where.step);
    }
    return set;
  }, [server, mode, step, visited]);

  // ----- Submit ------------------------------------------------------------------------------
  const busy =
    polling ||
    autosave.status.state === 'saving' ||
    ['reading', 'uploading', 'finishing', 'inspecting'].includes(fileUpload.state.phase);

  const submit = async () => {
    setSubmitError(null);
    setSubmitting(true);
    try {
      const saved = await autosave.flush();
      const id = saved?.id ?? autosave.draftId;
      if (!id) throw new Error('no draft');
      const done = await api.studio.submitDraft({ params: { id } });
      queryClient.removeQueries({ queryKey: uploadKeys.draft(id), exact: true });
      void queryClient.invalidateQueries({ queryKey: uploadKeys.drafts, exact: true });
      void queryClient.invalidateQueries({ queryKey: queryKeys.studioMods });
      setResult(done);
      onSubmitted?.();
      notify.success(done.status === 'published' ? ut('upload_success_live_title') : ut('upload_success_queued_title'));
      window.scrollTo({ top: 0 });
    } catch (error) {
      const code = isApiError(error) ? error.code : null;
      const text = problemText(code);
      setSubmitError({
        text:
          isApiError(error) && error.problem.detail && code !== 'INTERNAL'
            ? `${text.title} ${error.problem.detail}`
            : text.detail,
        reference: isApiError(error) ? error.problem.requestId || null : null,
      });
      const id = autosave.draftId;
      if (id) void queryClient.invalidateQueries({ queryKey: uploadKeys.draft(id) });
    } finally {
      setSubmitting(false);
    }
  };

  if (result) {
    return <SubmitSuccess result={result} mode={mode} name={data.name ?? target?.mod.name ?? manifest?.name ?? ''} />;
  }

  const handle = me.user.handle;
  const title =
    mode === 'version'
      ? ut('upload_title_version', { name: target?.mod.name ?? '' })
      : mode === 'build'
        ? ut('upload_title_build')
        : ut('upload_title_mod');

  const canPublish = hasPermission(me, 'mod.publish');
  const slug = data.slug ?? slugify(data.name ?? '');
  const summary = (
    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div className="flex min-w-0 flex-col gap-0.5">
        <dt className="text-xs text-fg-muted">{ut('upload_summary_name')}</dt>
        <dd className="truncate text-sm font-medium text-fg">
          {data.name ?? target?.mod.name ?? manifest?.name ?? '-'}
        </dd>
      </div>
      <div className="flex min-w-0 flex-col gap-0.5">
        <dt className="text-xs text-fg-muted">{ut('upload_summary_address')}</dt>
        <dd className="readout truncate text-fg">
          {mode === 'version' && target ? target.mod.canonicalPath : listingPath(listingKind, handle, slug || '…')}
        </dd>
      </div>
      <div className="flex min-w-0 flex-col gap-0.5">
        <dt className="text-xs text-fg-muted">{ut('upload_summary_version')}</dt>
        <dd className="readout truncate text-fg">
          {isBuild ? ut('upload_summary_version_build') : fileVersion ? `v${fileVersion.replace(/^v/, '')}` : '-'}
          {data.version?.channel === 'beta' ? ` · ${ut('upload_channel_beta')}` : ''}
        </dd>
      </div>
    </dl>
  );

  const headingId = (id: StepId) => `upload-step-${id}`;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h1 className="font-display-caps text-2xl text-fg max-md:sr-only sm:text-3xl">{title}</h1>
          <Link to="/dashboard/drafts" className={`${buttonClasses({ variant: 'ghost', size: 'sm' })} max-md:hidden`}>
            {ut('upload_my_drafts')}
          </Link>
        </div>
        <WizardSteps steps={steps} current={step} attention={attention} isBuild={isBuild} onSelect={(s) => goTo(s)} />
      </header>

      {me.flags.mustVerifyEmail ? (
        <Callout tone="warning" title={ut('upload_verify_email_title')}>
          {ut('upload_verify_email_detail')}
        </Callout>
      ) : !canPublish ? (
        <Callout tone="danger" title={ut('upload_no_permission_title')}>
          {ut('upload_no_permission_detail')}
        </Callout>
      ) : null}
      {autosave.status.state === 'error' && autosave.status.errorCode === 'CONFLICT' && !autosave.draftId ? (
        <Callout
          tone="danger"
          title={ut('upload_draft_limit_title')}
          action={
            <Link to="/dashboard/drafts" className={buttonClasses({ variant: 'secondary', size: 'sm' })}>
              {ut('upload_my_drafts')}
            </Link>
          }
        >
          {ut('upload_draft_limit_detail')}
        </Callout>
      ) : null}

      <div className="flex flex-col">
        {steps.map((id) =>
          visited.has(id) ? (
            <section key={id} hidden={id !== step} aria-labelledby={headingId(id)} className="flex flex-col">
              <Suspense fallback={<StepSkeleton />}>
                {id === 'file' ? (
                  <FileStep
                    fileKind={isBuild ? 'build' : 'zip'}
                    upload={fileUpload}
                    maxBytes={maxBytes}
                    target={
                      mode === 'version' && target
                        ? {
                            name: target.mod.name,
                            manifestId: target.mod.manifestId,
                            latestVersion: target.mod.latestVersion?.version ?? null,
                          }
                        : null
                    }
                    headingId={headingId(id)}
                    missing={failedFields.has('file') && !data.fileUploadId}
                  />
                ) : null}
                {id === 'details' ? (
                  <DetailsStep
                    kind={listingKind}
                    data={data}
                    update={update}
                    preflight={server?.preflight ?? []}
                    handle={handle}
                    failed={failedFields}
                    headingId={headingId(id)}
                  />
                ) : null}
                {id === 'compat' ? (
                  <CompatStep
                    data={data}
                    update={update}
                    manifestId={manifestId}
                    manifestDependencies={manifest?.dependencies ?? []}
                    failed={failedFields}
                    headingId={headingId(id)}
                  />
                ) : null}
                {id === 'media' ? (
                  <MediaStep kind={listingKind} data={data} update={update} headingId={headingId(id)} />
                ) : null}
                {id === 'release' ? (
                  <ReleaseStep
                    mode={mode === 'version' ? 'version' : 'mod'}
                    isBuild={isBuild}
                    data={data}
                    update={update}
                    fileVersion={fileVersion}
                    check={mode === 'version' ? versionCheck : null}
                    headingId={headingId(id)}
                  />
                ) : null}
                {id === 'review' ? (
                  <ReviewStep
                    mode={mode}
                    isBuild={isBuild}
                    preflight={server ? server.preflight : null}
                    qualityScore={server?.qualityScore ?? null}
                    busy={busy || autosave.dirty}
                    submitting={submitting}
                    submitError={
                      submitError ? (
                        <>
                          {submitError.text}
                          {submitError.reference ? (
                            <span className="readout mt-1 block">
                              {ut('upload_reference', { ref: submitError.reference })}
                            </span>
                          ) : null}
                        </>
                      ) : null
                    }
                    summary={summary}
                    onGoTo={goTo}
                    onSubmit={() => void submit()}
                    headingId={headingId(id)}
                  />
                ) : null}
              </Suspense>
            </section>
          ) : null,
        )}
      </div>

      <WizardFooter
        status={autosave.status}
        dirty={autosave.dirty}
        canSave={autosave.dirty}
        onSave={() => {
          autosave
            .flush()
            .then((saved) => {
              if (saved) notify.success(ut('upload_saved_toast'));
            })
            .catch(() => notify.error(ut('upload_autosave_error')));
        }}
        onBack={previous ? () => goTo(previous) : null}
        onNext={next ? tryNext : null}
      />
    </div>
  );
}
