/**
 * Console-side pieces that echo the public jam pages: the season painting of a jam as a small
 * thumbnail, the four-pip stage tracker and an empty state with the backpack painting. The art
 * is chosen by `jamArtName` (the same rule as the public hero), so a jam looks the same in the
 * console as on the site.
 */
import type { JamPhase, JamSummaryDTO } from '@sotf/contracts/jams';
import { m } from '@sotf/i18n/messages';
import { Icon } from '@sotf/ui/icons';
import { Check } from 'lucide-react';
import type { ReactNode } from 'react';
import { ART_FOCUS, JAM_STAGES, jamArtName, stageLabel, stageStates } from '../../../components/jams/phase.ts';

type ArtJam = Pick<
  JamSummaryDTO,
  'slug' | 'title' | 'theme' | 'announceAt' | 'submissionsOpenAt' | 'votingOpenAt' | 'phase'
>;

export function JamArtThumb({ jam, className = '' }: { jam: ArtJam; className?: string }) {
  const name = jamArtName(jam);
  return (
    <picture className={`block shrink-0 overflow-hidden rounded-md bg-night-975 ring-1 ring-border ${className}`}>
      <source type="image/avif" srcSet={`/art/jams/${name}-640.avif`} />
      <img
        src={`/art/jams/${name}-640.webp`}
        alt=""
        width={640}
        height={272}
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
        style={{ objectPosition: ART_FOCUS[name] }}
      />
    </picture>
  );
}

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

/** Empty state with the backpack painting (no jams yet / nothing open). */
export function JamEmpty({ title, text, action }: { title: string; text: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-xl border border-dashed border-border-strong/60 bg-surface p-6 text-center sm:flex-row sm:p-8 sm:text-start">
      <picture className="shrink-0">
        <source type="image/avif" srcSet="/art/jams/empty-480.avif" />
        <img
          src="/art/jams/empty-480.webp"
          alt=""
          width={480}
          height={480}
          loading="lazy"
          decoding="async"
          className="size-32 rounded-xl object-cover sm:size-40"
        />
      </picture>
      <div className="grid max-w-prose gap-2">
        <p className="font-display-caps text-3xl leading-none text-fg">{title}</p>
        <p className="text-sm text-fg-muted">{text}</p>
        {action ? <div className="mt-1">{action}</div> : null}
      </div>
    </div>
  );
}
