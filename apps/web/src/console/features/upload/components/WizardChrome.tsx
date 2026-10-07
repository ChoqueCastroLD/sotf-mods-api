/**
 * Chrome of the wizard: the «manual tabs» step bar (every step reachable — the review tells what is
 * missing), the autosave status and the sticky footer (Save draft, Back, Next). On phones the bar
 * collapses to «Step 2 of 6 · Details» and each step fills the screen.
 */
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { RadarSpinner } from '@sotf/ui/spinner';
import { ArrowLeft, ArrowRight, Check, CircleAlert, CloudOff, Save } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import { ut } from '../i18n.ts';
import { STEP_HINTS, STEP_LABELS } from '../labels.ts';
import { relative } from '../lib/format.ts';
import type { AutosaveStatus } from '../lib/use-autosave.ts';
import type { StepId } from '../lib/wizard.ts';

export interface WizardStepsProps {
  steps: readonly StepId[];
  current: StepId;
  /** Steps with a blocking problem (preflight errors). */
  attention: ReadonlySet<StepId>;
  onSelect: (step: StepId) => void;
  /** Build flow: the file step names a .json instead of a .zip. */
  isBuild?: boolean;
}

export function WizardSteps({ steps, current, attention, onSelect, isBuild = false }: WizardStepsProps) {
  const index = steps.indexOf(current);
  return (
    <nav aria-label={ut('upload_steps_label')}>
      {/* Phones: «Step 2 of 6 · Details» over a segmented progress bar (each segment is a button). */}
      <div className="md:hidden">
        <p className="flex items-baseline gap-2 text-sm font-semibold text-fg">
          <span className="readout">{ut('upload_step_of', { current: index + 1, total: steps.length })}</span>
          <span className="truncate">{STEP_LABELS[current]()}</span>
        </p>
        <ol className="mt-1 flex gap-1.5">
          {steps.map((step, i) => {
            const flagged = attention.has(step) && i !== index;
            return (
              <li key={step} className="min-w-0 flex-1">
                <button
                  type="button"
                  onClick={() => onSelect(step)}
                  aria-label={STEP_LABELS[step]()}
                  aria-current={i === index ? 'step' : undefined}
                  className="group flex h-8 w-full items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-focus"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'h-1.5 w-full rounded-full transition-colors duration-(--dur-base)',
                      flagged
                        ? 'bg-warning'
                        : i < index
                          ? 'bg-success'
                          : i === index
                            ? 'bg-primary shadow-[0_0_10px_var(--glow-color)]'
                            : 'bg-fg/14',
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ol>
      </div>
      <ol className="flex gap-1 max-md:hidden">
        {steps.map((step, i) => {
          const state = i < index ? 'complete' : i === index ? 'current' : 'upcoming';
          const flagged = attention.has(step) && state !== 'current';
          return (
            <li key={step} className="min-w-0 md:flex-1">
              <button
                type="button"
                onClick={() => onSelect(step)}
                aria-current={state === 'current' ? 'step' : undefined}
                className={cn(
                  'flex h-full w-full min-w-0 items-center gap-2.5 rounded-t-md border-b-2 px-3 py-2 text-start text-fg-muted',
                  'hover:bg-fg/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
                  'max-md:justify-center max-md:px-0',
                  state === 'current' && 'border-primary bg-raised text-fg',
                  state === 'complete' && 'border-success text-fg',
                  state === 'upcoming' && 'border-border',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold tabular-nums',
                    state === 'complete' && !flagged && 'border-success bg-success text-fg-inverse',
                    state === 'current' && 'border-primary bg-primary text-primary-fg',
                    state === 'upcoming' && !flagged && 'border-border-strong text-fg-muted',
                    flagged && 'border-warning bg-warning-soft text-fg',
                  )}
                >
                  {flagged ? (
                    <Icon icon={CircleAlert} size={14} />
                  ) : state === 'complete' ? (
                    <Icon icon={Check} size={14} strokeWidth={3} />
                  ) : (
                    i + 1
                  )}
                </span>
                <span className="flex min-w-0 flex-col max-md:sr-only">
                  <span className="truncate text-sm font-medium">{STEP_LABELS[step]()}</span>
                  <span className="line-clamp-2 text-xs text-fg-muted max-lg:hidden">
                    {step === 'file' && isBuild ? ut('upload_step_file_hint_build') : STEP_HINTS[step]()}
                  </span>
                </span>
                {flagged ? <span className="sr-only">({ut('upload_step_needs_attention')})</span> : null}
                {state === 'complete' && !flagged ? <span className="sr-only">({ut('upload_step_done')})</span> : null}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** «Autosaved 3 s ago» and friends (a polite live region). */
export function AutosaveIndicator({ status, dirty }: { status: AutosaveStatus; dirty: boolean }) {
  const [, setTick] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setTick((n) => n + 1), 15_000);
    return () => clearInterval(timer);
  }, []);

  let content: ReactNode;
  switch (status.state) {
    case 'saving':
      content = (
        <>
          <RadarSpinner size={14} /> {ut('upload_autosave_saving')}
        </>
      );
      break;
    case 'error':
      content = (
        <>
          <Icon icon={CircleAlert} size={14} className="text-danger" />
          {status.errorCode === 'CONFLICT' ? ut('upload_autosave_limit') : ut('upload_autosave_error')}
        </>
      );
      break;
    case 'offline':
      content = (
        <>
          <Icon icon={CloudOff} size={14} className="text-warning" /> {ut('upload_autosave_offline')}
        </>
      );
      break;
    case 'pending':
      content = ut('upload_autosave_pending');
      break;
    case 'saved':
      content =
        status.savedAt !== null && !dirty ? (
          <>
            <Icon icon={Check} size={14} className="text-success" />
            {ut('upload_autosave_saved', { when: relative(status.savedAt) })}
          </>
        ) : (
          ut('upload_autosave_pending')
        );
      break;
    default:
      content = ut('upload_autosave_idle');
  }
  return (
    <p role="status" className="flex min-w-0 items-center gap-1.5 text-xs text-fg-muted">
      {content}
    </p>
  );
}

export interface WizardFooterProps {
  status: AutosaveStatus;
  dirty: boolean;
  canSave: boolean;
  onSave: () => void;
  onBack: (() => void) | null;
  onNext: (() => void) | null;
  nextLabel?: string;
}

export function WizardFooter({ status, dirty, canSave, onSave, onBack, onNext, nextLabel }: WizardFooterProps) {
  return (
    <div className="sticky bottom-0 z-10 -mx-4 mt-6 border-t border-border bg-bg/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur supports-[backdrop-filter]:bg-bg/85 sm:-mx-6 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3 max-sm:w-full max-sm:justify-between">
          <AutosaveIndicator status={status} dirty={dirty} />
          <Button
            variant="ghost"
            size="sm"
            icon={<Icon icon={Save} size={14} />}
            onClick={onSave}
            disabled={!canSave || status.state === 'saving'}
          >
            <span className="max-sm:sr-only">{ut('upload_save_draft')}</span>
          </Button>
        </div>
        <div className="flex gap-2 max-sm:w-full max-sm:[&>*]:flex-1">
          {onBack ? (
            <Button
              variant="outline"
              icon={<Icon icon={ArrowLeft} size={16} className="rtl:rotate-180" />}
              onClick={onBack}
              className="max-sm:h-12 max-sm:flex-none! max-sm:px-5"
            >
              {ut('upload_back')}
            </Button>
          ) : null}
          {onNext ? (
            <Button
              iconEnd={<Icon icon={ArrowRight} size={16} className="rtl:rotate-180" />}
              onClick={onNext}
              className="max-sm:h-12"
            >
              {nextLabel ?? ut('upload_next')}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
