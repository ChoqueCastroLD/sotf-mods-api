/**
 * «Day 1 on the island» checklist (T0-33, WP-60 backend; shown in the «You» area by WP-81): five
 * first steps with their progress, each with the link that completes it. Every step can also be
 * ticked (or unticked) by hand from the checklist, optimistically; the server keeps ticking the
 * ones it sees happen.
 * Completing it awards `survived-day-one`; «Hide» dismisses it for good. Renders nothing once
 * completed or dismissed.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Check, Circle, X } from 'lucide-react';
import { useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { queryKeys } from '../../lib/query-keys.ts';
import { failureDescription } from '../settings/errors.ts';
import { meApi, meKeys, type Onboarding, onboardingQuery } from './api.ts';
import { publicHref } from './shared.tsx';

type StepKey = Onboarding['steps'][number]['key'];

interface StepCopy {
  title: () => string;
  hint: () => string;
  action: () => string;
  /** Console screen (client navigation) or public page (full navigation). */
  to: { console: 'downloads' | 'new-kit' } | { site: string };
}

const STEPS: Record<StepKey, StepCopy> = {
  install_redloader: {
    title: () => m.me_onboarding_install_title(),
    hint: () => m.me_onboarding_install_hint(),
    action: () => m.me_onboarding_install_action(),
    to: { site: '/install' },
  },
  first_download: {
    title: () => m.me_onboarding_download_title(),
    hint: () => m.me_onboarding_download_hint(),
    action: () => m.me_onboarding_download_action(),
    to: { site: '/mods' },
  },
  follow_mod: {
    title: () => m.me_onboarding_follow_title(),
    hint: () => m.me_onboarding_follow_hint(),
    action: () => m.me_onboarding_follow_action(),
    to: { site: '/mods' },
  },
  compat_report: {
    title: () => m.me_onboarding_report_title(),
    hint: () => m.me_onboarding_report_hint(),
    action: () => m.me_onboarding_report_action(),
    to: { console: 'downloads' },
  },
  create_kit: {
    title: () => m.me_onboarding_kit_title(),
    hint: () => m.me_onboarding_kit_hint(),
    action: () => m.me_onboarding_kit_action(),
    to: { console: 'new-kit' },
  },
};

const actionClasses =
  'inline-flex h-9 items-center rounded-md border border-border-strong px-3 text-sm font-semibold text-fg hover:bg-fg/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

export function OnboardingChecklist() {
  const queryClient = useQueryClient();
  const { data } = useQuery(onboardingQuery);
  const [busy, setBusy] = useState<'dismiss' | null>(null);

  if (!data || data.completed || data.dismissed) return null;

  const done = data.steps.filter((step) => step.done).length;
  const total = data.steps.length;

  const update = async () => {
    setBusy('dismiss');
    try {
      const next = await meApi.updateOnboarding({ dismissed: true });
      queryClient.setQueryData(meKeys.onboarding, next);
      void queryClient.invalidateQueries({ queryKey: queryKeys.me, exact: true });
    } catch (failure) {
      notify.error(m.me_onboarding_failed(), { description: failureDescription(failure) });
    } finally {
      setBusy(null);
    }
  };

  /** Ticks/unticks a step right away and reconciles with the server answer (rolls back on failure). */
  const toggle = async (key: StepKey, done: boolean) => {
    const previous = queryClient.getQueryData<Onboarding>(meKeys.onboarding);
    queryClient.setQueryData<Onboarding>(meKeys.onboarding, (current) =>
      current
        ? {
            ...current,
            steps: current.steps.map((step) =>
              step.key === key ? { ...step, done, doneAt: done ? new Date().toISOString() : null } : step,
            ),
          }
        : current,
    );
    try {
      const next = await meApi.updateOnboarding(done ? { markDone: [key] } : { markUndone: [key] });
      queryClient.setQueryData(meKeys.onboarding, next);
      if (next.completed) {
        void queryClient.invalidateQueries({ queryKey: queryKeys.me, exact: true });
        notify.success(m.me_onboarding_completed());
      }
    } catch (failure) {
      queryClient.setQueryData(meKeys.onboarding, previous);
      notify.error(m.me_onboarding_failed(), { description: failureDescription(failure) });
    }
  };

  return (
    <section
      aria-labelledby="onboarding-title"
      className="grid gap-4 rounded-lg border border-signal/40 bg-signal-soft p-4 md:p-5"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="grid gap-1">
          <p className="readout text-signal">{m.me_onboarding_readout()}</p>
          <h2 id="onboarding-title" className="font-display-caps text-xl text-fg">
            {m.me_onboarding_title()}
          </h2>
          <p className="text-sm text-fg-muted">{m.me_onboarding_text()}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          icon={<Icon icon={X} size={16} />}
          loading={busy === 'dismiss'}
          onClick={() => void update()}
        >
          {m.me_onboarding_dismiss()}
        </Button>
      </div>
      <div className="grid gap-1">
        <div className="flex justify-between text-xs text-fg-muted">
          <span id="onboarding-progress-label">{m.me_onboarding_progress({ done, total })}</span>
        </div>
        <div
          role="progressbar"
          aria-labelledby="onboarding-progress-label"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={done}
          className="h-2 overflow-hidden rounded-full bg-fg/10"
        >
          <div
            className="h-full rounded-full bg-signal transition-[width] duration-500 motion-reduce:transition-none"
            style={{ width: `${total ? (done / total) * 100 : 0}%` }}
          />
        </div>
      </div>
      <ol className="grid gap-2">
        {data.steps.map((step) => {
          const copy = STEPS[step.key];
          return (
            <li
              key={step.key}
              className={cn(
                'flex flex-wrap items-center gap-3 rounded-md border border-border bg-surface px-3 py-3',
                step.done && 'opacity-80',
              )}
            >
              <button
                type="button"
                aria-pressed={step.done}
                aria-label={m.me_onboarding_mark_done({ step: copy.title() })}
                onClick={() => void toggle(step.key, !step.done)}
                className={cn(
                  'flex size-9 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
                  step.done
                    ? 'bg-success text-bg'
                    : 'border border-dashed border-border-strong text-fg-subtle hover:bg-fg/8',
                )}
              >
                <Icon icon={step.done ? Check : Circle} size={step.done ? 16 : 10} />
              </button>
              <div className="grid min-w-0 flex-1 gap-0.5">
                <p className={cn('text-sm font-semibold', step.done ? 'text-fg-muted line-through' : 'text-fg')}>
                  <span className="sr-only">
                    {step.done ? m.me_onboarding_step_done() : m.me_onboarding_step_todo()}{' '}
                  </span>
                  {copy.title()}
                </p>
                <p className="text-xs text-fg-muted">{copy.hint()}</p>
              </div>
              {step.done ? null : (
                <div className="flex flex-wrap gap-2">
                  {'console' in copy.to ? (
                    copy.to.console === 'downloads' ? (
                      <Link to="/me/downloads" className={actionClasses}>
                        {copy.action()}
                      </Link>
                    ) : (
                      <Link to="/me/kits" search={{ new: true }} className={actionClasses}>
                        {copy.action()}
                      </Link>
                    )
                  ) : (
                    <a href={publicHref(copy.to.site)} className={actionClasses}>
                      {copy.action()}
                    </a>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
