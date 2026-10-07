/**
 * Overview tab: where the jam is in its life, the one next step, what is still missing before a
 * draft can be announced, and the manual controls (set the phase by hand, resume the schedule,
 * delete a draft). Acting on the phase needs a saved form, so the buttons wait for it.
 */
import { JAM_PHASES, type JamPhase } from '@sotf/contracts/jams';
import { formatRelativeTime } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { toast } from '@sotf/ui/toast';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { Check, Circle, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { activeLocale } from '../../lib/messages.ts';
import { formatInstant, reportFailure } from '../admin/shared.tsx';
import { type AdminJam, jamKeys, jamsAdminApi } from './api.ts';
import { type ReadinessItem, readiness } from './form.ts';
import type { TabProps } from './JamEditorScreen.tsx';
import { jamPhaseLabel } from './phase.ts';
import { FIELD_PHASE, nextScheduled } from './schedule.ts';

/** Date field that starts each phase, for the pipeline. */
const PHASE_FIELD = Object.fromEntries(Object.entries(FIELD_PHASE).map(([field, phase]) => [phase, field])) as Partial<
  Record<JamPhase, keyof typeof FIELD_PHASE>
>;

interface NextStep {
  phase: AdminJam['phase'];
  label: string;
  text: string;
  /** A draft only becomes public; every other change locks the schedule. */
  locks: boolean;
}

function nextStep(phase: AdminJam['phase']): NextStep | null {
  switch (phase) {
    case 'draft':
      return {
        phase: 'announced',
        label: m.jams_editor_action_announce(),
        text: m.jams_editor_announce_text(),
        locks: false,
      };
    case 'announced':
      return {
        phase: 'submissions',
        label: m.jams_editor_action_open_submissions(),
        text: m.jams_editor_force_text(),
        locks: true,
      };
    case 'submissions':
      return {
        phase: 'submissions_closed',
        label: m.jams_editor_action_close_submissions(),
        text: m.jams_editor_force_text(),
        locks: true,
      };
    case 'submissions_closed':
      return {
        phase: 'voting',
        label: m.jams_editor_action_open_voting(),
        text: m.jams_editor_force_text(),
        locks: true,
      };
    case 'voting':
      return {
        phase: 'results',
        label: m.jams_editor_action_close_voting(),
        text: m.jams_editor_force_text(),
        locks: true,
      };
    case 'results':
      return {
        phase: 'archived',
        label: m.jams_editor_action_archive(),
        text: m.jams_editor_force_text(),
        locks: true,
      };
    default:
      return null;
  }
}

function readinessLabel(id: ReadinessItem['id']): string {
  switch (id) {
    case 'title':
      return m.jams_editor_check_title();
    case 'tagline':
      return m.jams_editor_check_tagline();
    case 'description':
      return m.jams_editor_check_description();
    case 'theme':
      return m.jams_editor_check_theme();
    case 'schedule':
      return m.jams_editor_check_schedule();
    case 'categories':
      return m.jams_editor_check_categories();
  }
}

export function JamOverviewTab({ jam, form, dirty, goTo }: TabProps) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [target, setTarget] = useState<AdminJam['phase'] | null>(null);
  const [pick, setPick] = useState<AdminJam['phase'] | null>(null);
  const [reason, setReason] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [resuming, setResuming] = useState(false);

  const refresh = () => queryClient.invalidateQueries({ queryKey: jamKeys.all });
  const run = async (action: () => Promise<unknown>, success: string, failure: string) => {
    try {
      await action();
      await refresh();
      toast.success(success);
    } catch (error) {
      reportFailure(error, failure);
      throw error;
    }
  };

  const step = nextStep(jam.phase);
  const checks = readiness(form);
  const missing = checks.filter((item) => item.required && !item.done);
  const draft = jam.phase === 'draft';
  const blockedByForm = dirty;
  const upcoming = nextScheduled(jam.phase, form.dates, new Date());
  const currentIndex = JAM_PHASES.indexOf(jam.phase);

  return (
    <div className="grid gap-8">
      {jam.phaseLocked ? (
        <Banner tone="warning" title={m.jams_editor_locked_title()}>
          <span className="grid justify-items-start gap-2">
            {m.jams_editor_locked_text()}
            <Button
              size="sm"
              variant="secondary"
              loading={resuming}
              disabled={blockedByForm}
              onClick={() => {
                setResuming(true);
                void run(() => jamsAdminApi.resume(jam.id), m.jams_editor_resumed(), m.jams_editor_resume_failed())
                  .catch(() => undefined)
                  .finally(() => setResuming(false));
              }}
            >
              {m.jams_editor_resume()}
            </Button>
          </span>
        </Banner>
      ) : null}

      <div className="grid items-start gap-8 lg:grid-cols-2">
        <section aria-labelledby="jam-phases" className="grid gap-3">
          <h2 id="jam-phases" className="text-base font-semibold text-fg">
            {m.jams_editor_phase_title()}
          </h2>
          <p className="max-w-prose text-sm text-fg-muted">{m.jams_editor_phase_description()}</p>
          <ol className="grid max-w-xl">
            {JAM_PHASES.map((phase, index) => {
              const done = index < currentIndex;
              const current = index === currentIndex;
              const field = PHASE_FIELD[phase];
              const iso = field ? form.dates[field] : '';
              return (
                <li
                  key={phase}
                  aria-current={current ? 'step' : undefined}
                  className="relative grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-3 pb-3 last:pb-0"
                >
                  {index < JAM_PHASES.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute start-[0.6875rem] top-6 bottom-0 w-px',
                        done ? 'bg-primary' : 'bg-border',
                      )}
                    />
                  ) : null}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'z-10 mt-0.5 grid size-5.5 place-items-center rounded-full border text-primary-fg',
                      done && 'border-primary bg-primary',
                      current && 'border-primary bg-bg ring-4 ring-primary/20',
                      !done && !current && 'border-border-strong bg-bg',
                    )}
                  >
                    {done ? (
                      <Icon icon={Check} size={12} strokeWidth={3} />
                    ) : current ? (
                      <Icon icon={Circle} size={8} className="fill-primary text-primary" />
                    ) : null}
                  </span>
                  <span className="grid gap-0.5">
                    <span
                      className={cn(
                        'flex flex-wrap items-center gap-2 text-sm',
                        current ? 'font-semibold text-fg' : 'text-fg-muted',
                      )}
                    >
                      {jamPhaseLabel(phase)}
                      {current ? (
                        <Badge variant="neutral" size="sm">
                          {m.jams_stage_current()}
                        </Badge>
                      ) : null}
                    </span>
                    {field ? (
                      <span className="text-xs text-fg-subtle tabular-nums">
                        {iso ? formatInstant(new Date(iso).toISOString()) : m.jams_schedule_tba()}
                      </span>
                    ) : null}
                  </span>
                </li>
              );
            })}
          </ol>
          {upcoming && !jam.phaseLocked ? (
            <p className="text-sm text-fg-muted">
              {m.jams_editor_next_auto({
                phase: jamPhaseLabel(upcoming.phase),
                date: formatInstant(upcoming.iso),
                relative: formatRelativeTime(activeLocale(), upcoming.iso),
              })}
            </p>
          ) : null}
        </section>

        {draft ? (
          <section aria-labelledby="jam-ready" className="grid gap-3">
            <h2 id="jam-ready" className="text-base font-semibold text-fg">
              {missing.length === 0 ? m.jams_editor_ready_done() : m.jams_editor_ready_title()}
            </h2>
            <ul className="grid max-w-xl divide-y divide-border border-y border-border">
              {checks.map((item) => (
                <li key={item.id} className="flex items-center gap-3 py-2 text-sm">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'grid size-5 shrink-0 place-items-center rounded-full border',
                      item.done ? 'border-primary bg-primary text-primary-fg' : 'border-border-strong',
                    )}
                  >
                    {item.done ? <Icon icon={Check} size={12} strokeWidth={3} /> : null}
                  </span>
                  <span className={cn('min-w-0 flex-1', item.done ? 'text-fg-muted' : 'text-fg')}>
                    {readinessLabel(item.id)}
                    {item.done ? <span className="sr-only"> ({m.jams_stage_done()})</span> : null}
                    {!item.required && !item.done ? (
                      <span className="ms-2 text-xs text-fg-subtle">{m.jams_editor_optional()}</span>
                    ) : null}
                  </span>
                  {item.done ? null : (
                    <Button variant="link" size="sm" onClick={() => goTo(item.tab)}>
                      {m.jams_editor_fix()}
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      {step ? (
        <section aria-labelledby="jam-next" className="grid max-w-xl gap-2">
          <h2 id="jam-next" className="text-base font-semibold text-fg">
            {m.jams_editor_next_step()}
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant={draft ? 'primary' : 'secondary'}
              disabled={blockedByForm || (draft && missing.length > 0)}
              onClick={() => {
                setReason('');
                setTarget(step.phase);
              }}
            >
              {step.label}
            </Button>
            {blockedByForm ? (
              <p className="text-sm text-fg-muted">{m.jams_editor_save_first()}</p>
            ) : draft && missing.length > 0 ? (
              <p className="text-sm text-fg-muted">{m.jams_editor_fill_required()}</p>
            ) : null}
          </div>
        </section>
      ) : null}

      <section aria-labelledby="jam-manual" className="grid max-w-xl gap-3 border-t border-border pt-6">
        <h2 id="jam-manual" className="text-base font-semibold text-fg">
          {m.jams_editor_advanced()}
        </h2>
        <div className="grid gap-3 sm:grid-cols-[minmax(0,16rem)_auto] sm:items-end">
          <Select<AdminJam['phase']>
            label={m.jams_editor_force_phase()}
            value={pick}
            onValueChange={setPick}
            options={JAM_PHASES.filter((phase) => phase !== jam.phase).map((phase) => ({
              value: phase,
              label: jamPhaseLabel(phase),
            }))}
          />
          <Button
            variant="secondary"
            disabled={pick === null || blockedByForm}
            onClick={() => {
              setReason('');
              setTarget(pick);
            }}
          >
            {m.jams_editor_force_apply()}
          </Button>
        </div>
        {draft ? (
          <div>
            <Button variant="danger" icon={<Icon icon={Trash2} size={18} />} onClick={() => setDeleting(true)}>
              {m.jams_editor_delete()}
            </Button>
          </div>
        ) : null}
      </section>

      <ConfirmDialog
        open={target !== null}
        onOpenChange={(open) => {
          if (!open) setTarget(null);
        }}
        title={m.jams_editor_force_title({ phase: target ? jamPhaseLabel(target) : '' })}
        description={target === 'announced' && draft ? m.jams_editor_announce_text() : m.jams_editor_force_text()}
        confirmLabel={m.jams_editor_force_apply()}
        onConfirm={async () => {
          if (!target) return;
          await run(
            () => jamsAdminApi.setPhase(jam.id, target, reason.trim() || undefined),
            m.jams_editor_forced({ phase: jamPhaseLabel(target) }),
            m.jams_editor_force_failed(),
          );
          setTarget(null);
          setPick(null);
        }}
      >
        <Field label={m.jams_editor_reason()} optional>
          <Input value={reason} maxLength={300} onChange={(event) => setReason(event.currentTarget.value)} />
        </Field>
      </ConfirmDialog>

      <ConfirmDialog
        open={deleting}
        onOpenChange={setDeleting}
        title={m.jams_editor_delete_title({ title: jam.title })}
        description={m.jams_editor_delete_text()}
        confirmLabel={m.jams_editor_delete()}
        tone="danger"
        onConfirm={async () => {
          try {
            await jamsAdminApi.remove(jam.id);
          } catch (error) {
            reportFailure(error, m.jams_editor_delete_failed());
            throw error;
          }
          // Mark everything stale without refetching: this jam's own query would answer 404 now.
          await queryClient.invalidateQueries({ queryKey: jamKeys.all, refetchType: 'none' });
          toast.success(m.jams_editor_deleted());
          void navigate({ to: '/moderation/jams' });
        }}
      />
    </div>
  );
}
