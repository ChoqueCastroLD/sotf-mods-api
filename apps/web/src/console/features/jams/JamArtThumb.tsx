/**
 * Console-side pieces that echo the public jam pages: the four-pip stage tracker and a plain
 * empty state.
 */
import type { JamPhase } from '@sotf/contracts/jams';
import { m } from '@sotf/i18n/messages';
import { Icon } from '@sotf/ui/icons';
import { Check } from 'lucide-react';
import type { ReactNode } from 'react';
import { JAM_STAGES, stageLabel, stageStates } from '../../../components/jams/phase.ts';

/** Four pips (announce, build, vote, results): done filled, current ringed. Text for assistive tech. */
export function StagePips({ phase }: { phase: JamPhase }) {
  const states = stageStates(phase);
  return (
    <ol className="flex items-center gap-1" aria-label={m.jams_schedule_title()}>
      {JAM_STAGES.map((stage, index) => {
        const state = states[index] ?? 'upcoming';
        return (
          <li key={stage} className="flex items-center gap-1">
            <span
              className={`grid size-4 place-items-center rounded-full text-primary-fg ${
                state === 'done'
                  ? 'bg-primary'
                  : state === 'current'
                    ? 'bg-sunken ring-2 ring-primary'
                    : 'bg-sunken ring-1 ring-border-strong'
              }`}
              title={stageLabel(stage)}
            >
              {state === 'done' ? <Icon icon={Check} size={10} strokeWidth={3} /> : null}
              <span className="sr-only">
                {stageLabel(stage)}:{' '}
                {state === 'done'
                  ? m.jams_stage_done()
                  : state === 'current'
                    ? m.jams_stage_current()
                    : m.jams_stage_next()}
              </span>
            </span>
            {index < JAM_STAGES.length - 1 ? (
              <span
                className={`h-0.5 w-3 rounded-full ${state === 'done' ? 'bg-primary' : 'bg-border-strong/60'}`}
                aria-hidden="true"
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

/** Plain empty state (no jams yet / nothing open). */
export function JamEmpty({ title, text, action }: { title: string; text: string; action?: ReactNode }) {
  return (
    <div className="grid max-w-prose gap-2 border-y border-border py-8">
      <p className="text-lg font-bold text-fg">{title}</p>
      <p className="text-sm text-fg-muted">{text}</p>
      {action ? <div className="mt-1">{action}</div> : null}
    </div>
  );
}
