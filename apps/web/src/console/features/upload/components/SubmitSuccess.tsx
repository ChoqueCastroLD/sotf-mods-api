/**
 * After «Send to the Ranger Station»: queued for review (first publication, flagged file) or live
 * right away (verified creators, builds, new versions that passed the checks).
 */
import type { SubmitResultDTO } from '@sotf/contracts/studio';
import { buttonClasses } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Link } from '@tanstack/react-router';
import { Binoculars, PartyPopper } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ut } from '../i18n.ts';
import type { WizardMode } from '../lib/wizard.ts';

export function SubmitSuccess({ result, mode, name }: { result: SubmitResultDTO; mode: WizardMode; name: string }) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => heading.current?.focus(), []);
  const live = result.status === 'published';
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 py-10 text-center">
      <span
        className="flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary"
        aria-hidden="true"
      >
        <Icon icon={live ? PartyPopper : Binoculars} size={32} />
      </span>
      <h1 ref={heading} tabIndex={-1} className="font-display-caps text-2xl text-fg outline-none sm:text-3xl">
        {live ? ut('upload_success_live_title') : ut('upload_success_queued_title')}
      </h1>
      <p className="max-w-prose text-sm text-fg-muted">
        {live
          ? mode === 'version'
            ? ut('upload_success_live_version', { name })
            : ut('upload_success_live_detail', { name })
          : mode === 'version'
            ? ut('upload_success_queued_version', { name })
            : ut('upload_success_queued_detail', { name })}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <a href={result.canonicalPath} className={buttonClasses({ variant: 'primary' })}>
          {live ? ut('upload_success_view') : ut('upload_success_preview')}
        </a>
        <Link to="/dashboard" className={buttonClasses({ variant: 'secondary' })}>
          {ut('upload_success_basecamp')}
        </Link>
        <Link to="/dashboard/new" className={buttonClasses({ variant: 'ghost' })}>
          {ut('upload_success_another')}
        </Link>
      </div>
    </div>
  );
}
