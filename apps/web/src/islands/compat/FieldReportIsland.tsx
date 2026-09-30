/**
 * Field report island (WP-70, PLAN §7.10, research/03 §5.8), mounted on
 * `#field-report[data-island="field-report"]` of the mod page for signed-in visitors.
 *
 * - «Report compatibility»: a 2-step modal. Step 1 «Your setup»: version, game build and mode
 *   (singleplayer, host, client, dedicated). Step 2 «Result»: works / partial / broken, an
 *   optional note (500) and other mods installed (1 000). One report per version × build × mode:
 *   sending again updates it (`POST /api/v2/compat-reports`).
 * - «Did it work?»: when the API lists a pending prompt for this mod (a version downloaded while
 *   signed in, `GET /api/v2/me/compat-prompts`), a callout offers the three answers in one click
 *   (they open the modal with version, build and result filled in; only the mode is left);
 *   «Not now» hides it for that version.
 * - Your last report for the mod is remembered on this device, with «Edit» and «Delete» (undo).
 * - `#field-report` in the URL (the page's «Did it work? Report» toast) opens the modal.
 */
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { CircleAlert, CircleCheck, CircleX } from 'lucide-react';
import { type FormEvent, useCallback, useEffect, useId, useRef, useState } from 'react';
import { pageEntity, track } from '../../scripts/beacon.ts';
import { api, type Failure, failureText, get } from '../comments/lib/api.ts';
import { SocialI18n } from '../comments/lib/i18n.tsx';
import { myFieldReport, type RememberedFieldReport, rememberFieldReport } from '../comments/lib/local.ts';
import { t } from '../comments/lib/messages.ts';
import type { MeSummary } from '../comments/lib/session.ts';
import { deferWithUndo, FailureNote, LiveRegion, Modal, notify } from '../comments/lib/ui.tsx';

export type CompatMode = 'singleplayer' | 'host' | 'client' | 'dedicated';
export type CompatResult = 'works' | 'partial' | 'broken';

const MODES: readonly CompatMode[] = ['singleplayer', 'host', 'client', 'dedicated'];
const RESULTS: readonly CompatResult[] = ['works', 'partial', 'broken'];
/** `COMPAT_RULES.noteMaxLength` of @sotf/contracts; other mods: 1 000. */
const NOTE_MAX = 500;
const OTHER_MODS_MAX = 1000;

interface GameBuild {
  id: number;
  label: string;
  isCurrent: boolean;
  isBreaking: boolean;
}

interface VersionOption {
  id: number;
  version: string;
}

interface CompatPrompt {
  mod: { id: number };
  modVersionId: number;
  version: string;
  gameBuild: { id: number; label: string };
  downloadedAt: string;
}

interface CompatReport {
  id: number;
  modVersionId: number;
  gameBuildId: number;
  mode: CompatMode;
  result: CompatResult;
}

export interface FieldReportIslandProps {
  modId: number;
  /** Latest version (default of step 1). */
  versionId: number | null;
  /** Current game build (default of step 1). */
  gameBuildId: number | null;
  session: MeSummary;
  verifyHref: string;
}

export function modeLabel(mode: CompatMode): string {
  switch (mode) {
    case 'singleplayer':
      return t('social_compat_mode_singleplayer');
    case 'host':
      return t('social_compat_mode_host');
    case 'client':
      return t('social_compat_mode_client');
    default:
      return t('social_compat_mode_dedicated');
  }
}

function modeHint(mode: CompatMode): string {
  switch (mode) {
    case 'singleplayer':
      return t('social_compat_mode_singleplayer_hint');
    case 'host':
      return t('social_compat_mode_host_hint');
    case 'client':
      return t('social_compat_mode_client_hint');
    default:
      return t('social_compat_mode_dedicated_hint');
  }
}

export function resultLabel(result: CompatResult): string {
  switch (result) {
    case 'works':
      return t('social_compat_result_works');
    case 'partial':
      return t('social_compat_result_partial');
    default:
      return t('social_compat_result_broken');
  }
}

function resultHint(result: CompatResult): string {
  switch (result) {
    case 'works':
      return t('social_compat_result_works_hint');
    case 'partial':
      return t('social_compat_result_partial_hint');
    default:
      return t('social_compat_result_broken_hint');
  }
}

const RESULT_ICON = { works: CircleCheck, partial: CircleAlert, broken: CircleX } as const;
const RESULT_TONE = {
  works: 'text-success has-[:checked]:border-success has-[:checked]:bg-success-soft',
  partial: 'text-warning has-[:checked]:border-warning has-[:checked]:bg-warning-soft',
  broken: 'text-danger has-[:checked]:border-danger has-[:checked]:bg-danger-soft',
} as const;

function promptDismissKey(modId: number, versionId: number): string {
  return `sotf:compat-prompt-dismissed:${modId}:${versionId}`;
}

function dismissed(modId: number, versionId: number): boolean {
  try {
    return localStorage.getItem(promptDismissKey(modId, versionId)) !== null;
  } catch {
    return false;
  }
}

interface FormState {
  versionId: number | null;
  gameBuildId: number | null;
  mode: CompatMode | null;
  result: CompatResult | null;
  note: string;
  otherMods: string;
}

function ReportModal({
  open,
  onClose,
  initial,
  startStep,
  modId,
  onSaved,
}: {
  open: boolean;
  onClose: () => void;
  initial: FormState;
  startStep: 1 | 2;
  modId: number;
  onSaved: (report: CompatReport, labels: { version: string; build: string }) => void;
}) {
  const id = useId();
  const [step, setStep] = useState<1 | 2>(startStep);
  const [form, setForm] = useState<FormState>(initial);
  const [versions, setVersions] = useState<VersionOption[] | null>(null);
  const [builds, setBuilds] = useState<GameBuild[] | null>(null);
  const [loadFailure, setLoadFailure] = useState<Failure | null>(null);
  const [failure, setFailure] = useState<Failure | null>(null);
  const [missing, setMissing] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const stepHeading = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!open) return;
    setStep(startStep);
    setForm(initial);
    setFailure(null);
    setMissing(null);
  }, [open, startStep, initial]);

  const loadOptions = useCallback(async () => {
    setLoadFailure(null);
    const [versionList, buildList] = await Promise.all([
      get<{ items: Array<VersionOption & { status: string }> }>(`/api/v2/mods/${modId}/versions`),
      get<{ items: GameBuild[] }>('/api/v2/game-builds'),
    ]);
    if (!versionList.ok) {
      setLoadFailure(versionList);
      return;
    }
    if (!buildList.ok) {
      setLoadFailure(buildList);
      return;
    }
    const available = versionList.data.items.filter((item) => item.status === 'active' || item.status === 'yanked');
    const usable = available.length > 0 ? available : versionList.data.items;
    setVersions(usable.map((item) => ({ id: item.id, version: item.version })));
    setBuilds(buildList.data.items);
    setForm((current) => ({
      ...current,
      versionId: current.versionId ?? usable[0]?.id ?? null,
      gameBuildId:
        current.gameBuildId ??
        buildList.data.items.find((build) => build.isCurrent)?.id ??
        buildList.data.items[0]?.id ??
        null,
    }));
  }, [modId]);

  useEffect(() => {
    if (open && (!versions || !builds)) void loadOptions();
  }, [open, versions, builds, loadOptions]);

  useEffect(() => {
    if (open) stepHeading.current?.focus();
  }, [open, step]);

  const next = (event: FormEvent) => {
    event.preventDefault();
    if (!form.versionId || !form.gameBuildId) {
      setMissing(t('social_compat_missing_setup'));
      return;
    }
    if (!form.mode) {
      setMissing(t('social_compat_missing_mode'));
      return;
    }
    setMissing(null);
    setStep(2);
  };

  const submit = async (event?: FormEvent) => {
    event?.preventDefault();
    if (!form.result) {
      setMissing(t('social_compat_missing_result'));
      return;
    }
    if (!form.versionId || !form.gameBuildId || !form.mode) {
      setStep(1);
      return;
    }
    setMissing(null);
    setFailure(null);
    setBusy(true);
    const note = form.note.trim();
    const otherMods = form.otherMods.trim();
    const result = await api<CompatReport>('POST', '/api/v2/compat-reports', {
      modVersionId: form.versionId,
      gameBuildId: form.gameBuildId,
      mode: form.mode,
      result: form.result,
      ...(note ? { note: note.slice(0, NOTE_MAX) } : {}),
      ...(otherMods ? { otherMods: otherMods.slice(0, OTHER_MODS_MAX) } : {}),
    });
    setBusy(false);
    if (!result.ok) {
      setFailure(result);
      return;
    }
    onSaved(result.data, {
      version: versions?.find((item) => item.id === form.versionId)?.version ?? '',
      build: builds?.find((item) => item.id === form.gameBuildId)?.label ?? '',
    });
  };

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setMissing(null);
  };

  const stepTitle = step === 1 ? t('social_compat_step_setup') : t('social_compat_step_result');

  return (
    <Modal open={open} onClose={onClose} title={t('social_compat_title')} description={t('social_compat_intro')}>
      <ol className="flex gap-2 text-xs" aria-label={t('social_compat_steps')}>
        {[1, 2].map((value) => (
          <li
            key={value}
            aria-current={step === value ? 'step' : undefined}
            className="flex-1 border-t-2 border-border pt-1 text-fg-muted aria-[current=step]:border-primary aria-[current=step]:font-semibold aria-[current=step]:text-fg"
          >
            {value === 1 ? t('social_compat_step_setup') : t('social_compat_step_result')}
          </li>
        ))}
      </ol>
      <h3 ref={stepHeading} tabIndex={-1} className="text-base font-semibold outline-none">
        {t('social_compat_step_of', { step, total: 2, title: stepTitle })}
      </h3>
      {loadFailure ? <FailureNote failure={loadFailure} onRetry={() => void loadOptions()} /> : null}

      {step === 1 ? (
        <form className="grid gap-4" onSubmit={next} noValidate>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="grid gap-1">
              <label htmlFor={`${id}-version`} className="text-sm font-semibold">
                {t('social_compat_version')}
              </label>
              <select
                id={`${id}-version`}
                value={form.versionId ?? ''}
                disabled={!versions}
                onChange={(event) => set('versionId', Number(event.target.value) || null)}
                className="min-h-11 rounded-md border border-border-strong bg-sunken px-2 text-sm"
              >
                {!versions ? <option value="">{t('social_loading')}</option> : null}
                {versions?.map((version) => (
                  <option key={version.id} value={version.id}>
                    {version.version}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-1">
              <label htmlFor={`${id}-build`} className="text-sm font-semibold">
                {t('social_compat_build')}
              </label>
              <select
                id={`${id}-build`}
                value={form.gameBuildId ?? ''}
                disabled={!builds}
                onChange={(event) => set('gameBuildId', Number(event.target.value) || null)}
                className="min-h-11 rounded-md border border-border-strong bg-sunken px-2 text-sm"
              >
                {!builds ? <option value="">{t('social_loading')}</option> : null}
                {builds?.map((build) => (
                  <option key={build.id} value={build.id}>
                    {build.isCurrent ? t('social_compat_build_current', { label: build.label }) : build.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <fieldset className="grid gap-2">
            <legend className="mb-1 text-sm font-semibold">{t('social_compat_mode')}</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {MODES.map((mode) => (
                <label
                  key={mode}
                  className="flex min-h-11 cursor-pointer items-start gap-3 rounded-md border border-border p-3 hover:border-border-strong has-[:checked]:border-primary has-[:checked]:bg-primary-soft has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-focus"
                >
                  <input
                    type="radio"
                    name={`${id}-mode`}
                    value={mode}
                    checked={form.mode === mode}
                    onChange={() => set('mode', mode)}
                    className="mt-0.5 size-4 accent-primary"
                  />
                  <span className="grid gap-0.5">
                    <span className="text-sm font-semibold">{modeLabel(mode)}</span>
                    <span className="text-xs text-fg-muted">{modeHint(mode)}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          {missing ? (
            <p className="text-sm text-danger" role="alert">
              {missing}
            </p>
          ) : null}
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={onClose}>
              {t('social_action_cancel')}
            </Button>
            <Button type="submit">{t('social_action_continue')}</Button>
          </div>
        </form>
      ) : (
        <form className="grid gap-4" onSubmit={(event) => void submit(event)} noValidate aria-busy={busy || undefined}>
          <fieldset className="grid gap-2">
            <legend className="mb-1 text-sm font-semibold">{t('social_compat_result')}</legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {RESULTS.map((result) => (
                <label
                  key={result}
                  className={`flex min-h-11 cursor-pointer flex-col gap-1 rounded-md border border-border p-3 hover:border-border-strong has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-focus ${RESULT_TONE[result]}`}
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`${id}-result`}
                      value={result}
                      checked={form.result === result}
                      onChange={() => set('result', result)}
                      className="size-4 accent-primary"
                    />
                    <Icon icon={RESULT_ICON[result]} size={18} />
                    <span className="text-sm font-semibold text-fg">{resultLabel(result)}</span>
                  </span>
                  <span className="text-xs text-fg-muted">{resultHint(result)}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="grid gap-1">
            <label htmlFor={`${id}-note`} className="text-sm font-semibold">
              {t('social_compat_note')} <span className="font-normal text-fg-muted">{t('social_optional')}</span>
            </label>
            <textarea
              id={`${id}-note`}
              value={form.note}
              maxLength={NOTE_MAX}
              rows={3}
              onChange={(event) => set('note', event.target.value)}
              aria-describedby={`${id}-note-count`}
              placeholder={t('social_compat_note_placeholder')}
              className="min-h-20 rounded-md border border-border-strong bg-sunken px-3 py-2 text-sm"
            />
            <p id={`${id}-note-count`} className="text-end text-xs text-fg-muted tabular-nums">
              {t('social_editor_counter', { count: String(form.note.length), max: String(NOTE_MAX) })}
            </p>
          </div>
          <div className="grid gap-1">
            <label htmlFor={`${id}-others`} className="text-sm font-semibold">
              {t('social_compat_other_mods')} <span className="font-normal text-fg-muted">{t('social_optional')}</span>
            </label>
            <input
              id={`${id}-others`}
              type="text"
              value={form.otherMods}
              maxLength={OTHER_MODS_MAX}
              onChange={(event) => set('otherMods', event.target.value)}
              placeholder={t('social_compat_other_mods_placeholder')}
              className="min-h-11 rounded-md border border-border-strong bg-sunken px-3 text-sm"
            />
          </div>
          {missing ? (
            <p className="text-sm text-danger" role="alert">
              {missing}
            </p>
          ) : null}
          {failure ? <FailureNote failure={failure} onRetry={() => void submit()} /> : null}
          <div className="flex flex-wrap justify-between gap-2">
            <Button variant="ghost" onClick={() => setStep(1)} disabled={busy}>
              {t('social_action_back')}
            </Button>
            <Button type="submit" loading={busy}>
              {t('social_compat_submit')}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}

export function FieldReportIsland({ modId, versionId, gameBuildId, session, verifyHref }: FieldReportIslandProps) {
  const [open, setOpen] = useState(false);
  const [startStep, setStartStep] = useState<1 | 2>(1);
  const [initial, setInitial] = useState<FormState>({
    versionId,
    gameBuildId,
    mode: null,
    result: null,
    note: '',
    otherMods: '',
  });
  const [prompt, setPrompt] = useState<CompatPrompt | null>(null);
  const [mine, setMine] = useState<RememberedFieldReport | null>(() => myFieldReport(session.id, modId));
  const [announcement, setAnnouncement] = useState('');
  const openButton = useRef<HTMLButtonElement | null>(null);

  const announce = (message: string) => {
    setAnnouncement('');
    window.setTimeout(() => setAnnouncement(message), 50);
  };

  const openWith = useCallback(
    (state: Partial<FormState>, step: 1 | 2) => {
      setInitial({ versionId, gameBuildId, mode: null, result: null, note: '', otherMods: '', ...state });
      setStartStep(step);
      setOpen(true);
    },
    [versionId, gameBuildId],
  );

  // Pending «Did it work?» for this mod.
  useEffect(() => {
    if (!session.emailVerified) return;
    let cancelled = false;
    void get<{ items: CompatPrompt[] }>('/api/v2/me/compat-prompts').then((result) => {
      if (cancelled || !result.ok) return;
      const found = result.data.items.find((item) => item.mod.id === modId && !dismissed(modId, item.modVersionId));
      if (!found) return;
      setPrompt(found);
      track('compat_prompt_shown', { ...pageEntity(), props: { version: found.version, source: 'island' } });
    });
    return () => {
      cancelled = true;
    };
  }, [session.emailVerified, modId]);

  // `#field-report` (the page's toast, shared links) opens the modal.
  useEffect(() => {
    if (!session.emailVerified) return;
    const check = () => {
      if (location.hash === '#field-report') openWith({}, 1);
    };
    check();
    window.addEventListener('hashchange', check);
    return () => window.removeEventListener('hashchange', check);
  }, [session.emailVerified, openWith]);

  const close = () => {
    setOpen(false);
    if (location.hash === '#field-report') history.replaceState(history.state, '', location.pathname + location.search);
    window.setTimeout(() => openButton.current?.focus(), 0);
  };

  const answerPrompt = (result: CompatResult) => {
    if (!prompt) return;
    track('compat_prompt_answered', { ...pageEntity(), props: { version: prompt.version, result } });
    openWith({ versionId: prompt.modVersionId, gameBuildId: prompt.gameBuild.id, result }, 1);
  };

  const dismissPrompt = () => {
    if (!prompt) return;
    try {
      localStorage.setItem(promptDismissKey(modId, prompt.modVersionId), '1');
    } catch {
      // Private mode: it will be offered again next visit.
    }
    setPrompt(null);
  };

  const onSaved = (report: CompatReport, labels: { version: string; build: string }) => {
    const remembered: RememberedFieldReport = {
      id: report.id,
      modVersionId: report.modVersionId,
      gameBuildId: report.gameBuildId,
      mode: report.mode,
      result: report.result,
      at: new Date().toISOString(),
      ...labels,
    };
    rememberFieldReport(session.id, modId, remembered);
    setMine(remembered);
    if (prompt && prompt.modVersionId === report.modVersionId) setPrompt(null);
    setOpen(false);
    const message = t('social_compat_thanks');
    announce(message);
    notify(message);
    window.setTimeout(() => openButton.current?.focus(), 0);
  };

  const deleteMine = () => {
    if (!mine) return;
    const before = mine;
    rememberFieldReport(session.id, modId, null);
    setMine(null);
    const restore = () => {
      rememberFieldReport(session.id, modId, before);
      setMine(before);
    };
    deferWithUndo(
      t('social_compat_deleted'),
      () => {
        void api('DELETE', `/api/v2/compat-reports/${before.id}`).then((result) => {
          if (!result.ok && !(result.kind === 'problem' && result.problem.code === 'NOT_FOUND')) {
            restore();
            notify(failureText(result));
          }
        });
      },
      restore,
    );
  };

  if (!session.emailVerified) {
    return (
      <SocialI18n>
        <p className="font-semibold">{t('social_compat_heading')}</p>
        <p className="text-fg-muted">
          {t('social_verify_to_report')}{' '}
          <a href={verifyHref} className="font-semibold text-link underline underline-offset-3">
            {t('social_verify_action')}
          </a>
        </p>
      </SocialI18n>
    );
  }

  const mineLabels = mine;

  return (
    <SocialI18n>
      <p className="font-semibold">{t('social_compat_heading')}</p>
      {prompt ? (
        <section
          className="grid gap-2 rounded-md border border-signal/50 bg-signal-soft p-3"
          aria-label={t('social_compat_prompt_label')}
        >
          <p className="text-sm font-semibold">
            {t('social_compat_prompt', { version: prompt.version, build: prompt.gameBuild.label })}
          </p>
          <div className="flex flex-wrap gap-2">
            {RESULTS.map((result) => (
              <Button
                key={result}
                variant="secondary"
                size="sm"
                icon={<Icon icon={RESULT_ICON[result]} size={14} />}
                onClick={() => answerPrompt(result)}
              >
                {resultLabel(result)}
              </Button>
            ))}
            <Button variant="ghost" size="sm" onClick={dismissPrompt}>
              {t('social_compat_prompt_later')}
            </Button>
          </div>
        </section>
      ) : (
        <p className="text-fg-muted">{t('social_compat_text')}</p>
      )}
      {mineLabels ? (
        <p className="flex flex-wrap items-center gap-2 text-sm">
          <span>
            {t('social_compat_yours', {
              result: resultLabel(mineLabels.result as CompatResult),
              mode: modeLabel(mineLabels.mode as CompatMode),
              version: mineLabels.version ?? '',
              build: mineLabels.build ?? '',
            })}
          </span>
          <button
            type="button"
            onClick={() =>
              openWith(
                {
                  versionId: mineLabels.modVersionId,
                  gameBuildId: mineLabels.gameBuildId,
                  mode: mineLabels.mode as CompatMode,
                  result: mineLabels.result as CompatResult,
                },
                2,
              )
            }
            className="inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-3 md:min-h-8"
          >
            {t('social_action_edit')}
          </button>
          <button
            type="button"
            onClick={deleteMine}
            className="inline-flex min-h-11 items-center font-semibold text-danger underline underline-offset-3 md:min-h-8"
          >
            {t('social_action_delete')}
          </button>
        </p>
      ) : null}
      <Button
        ref={openButton}
        variant="secondary"
        size="sm"
        className="justify-self-start"
        onClick={() => openWith({}, 1)}
      >
        {mine ? t('social_compat_report_another') : t('social_compat_open')}
      </Button>
      <ReportModal
        open={open}
        onClose={close}
        initial={initial}
        startStep={startStep}
        modId={modId}
        onSaved={onSaved}
      />
      <LiveRegion message={announcement} />
    </SocialI18n>
  );
}
