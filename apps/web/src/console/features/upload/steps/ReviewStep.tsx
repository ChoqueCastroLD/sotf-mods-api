/**
 * Step ⑥ «Review» (PLAN §7.5): the preflight (✔ or ⚠ with a link to each field), the listing
 * quality score in % (gallery ≥ 3, description ≥ 300, source, platform, tags and licence) and
 * «Send to the Ranger Station». The rows come from the API (recomputed on every autosave), so the
 * review always matches what the submission will check.
 */
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { RadarSpinner } from '@sotf/ui/spinner';
import { CircleAlert, CircleCheck, Send, TriangleAlert } from 'lucide-react';
import type { ReactNode } from 'react';
import { Callout } from '../components/Callout.tsx';
import { ut } from '../i18n.ts';
import { preflightLabel } from '../labels.ts';
import { percent } from '../lib/format.ts';
import { fieldTarget, type StepId, type WizardMode } from '../lib/wizard.ts';
import type { PreflightItemDTO } from '../types.ts';
import { StepHeader } from './StepHeader.tsx';

export interface ReviewStepProps {
  mode: WizardMode;
  isBuild: boolean;
  preflight: readonly PreflightItemDTO[] | null;
  qualityScore: number | null;
  /** Something is still being checked (file inspection, image processing, unsaved changes). */
  busy: boolean;
  submitting: boolean;
  submitError: ReactNode;
  summary: ReactNode;
  onGoTo: (step: StepId, anchor: string) => void;
  onSubmit: () => void;
  headingId: string;
}

const QUALITY_CRITERIA: ReadonlyArray<{ ok: string; missing: string; label: () => string; buildsSkip?: boolean }> = [
  { ok: 'gallery_ok', missing: 'gallery_below_3', label: () => ut('upload_quality_gallery') },
  { ok: 'description_ok', missing: 'description_short', label: () => ut('upload_quality_description') },
  { ok: 'source_ok', missing: 'source_missing', label: () => ut('upload_quality_source'), buildsSkip: true },
  { ok: 'platform_ok', missing: 'platform_missing', label: () => ut('upload_quality_platform'), buildsSkip: true },
  { ok: 'tags_ok', missing: 'tags_missing', label: () => ut('upload_quality_tags') },
  { ok: 'license_ok', missing: 'license_missing', label: () => ut('upload_quality_license') },
];

const SEVERITY_ICON = {
  error: { icon: CircleAlert, className: 'text-danger' },
  warning: { icon: TriangleAlert, className: 'text-warning' },
  ok: { icon: CircleCheck, className: 'text-success' },
} as const;

function QualityMeter({
  score,
  preflight,
  isBuild,
}: {
  score: number;
  preflight: readonly PreflightItemDTO[];
  isBuild: boolean;
}) {
  const codes = new Set(preflight.map((row) => row.code));
  const tone = score >= 80 ? 'bg-success' : score >= 50 ? 'bg-warning' : 'bg-danger';
  return (
    <section
      aria-labelledby="upload-quality-title"
      className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h3 id="upload-quality-title" className="text-base font-semibold text-fg">
          {ut('upload_quality_title')}
        </h3>
        <span className="font-display-caps text-3xl text-fg tabular-nums">{percent(score / 100)}</span>
      </div>
      {/* biome-ignore lint/a11y/useSemanticElements: styled track; the native <meter> cannot take the token colours */}
      <div
        role="meter"
        aria-labelledby="upload-quality-title"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={score}
        aria-valuetext={percent(score / 100)}
        className="h-2 overflow-hidden rounded-full bg-fg/10"
      >
        <div className={cn('h-full rounded-full', tone)} style={{ width: `${score}%` }} />
      </div>
      <p className="text-xs text-fg-muted">{ut('upload_quality_hint')}</p>
      <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {QUALITY_CRITERIA.filter((c) => !(isBuild && c.buildsSkip)).map((criterion) => {
          const met = codes.has(criterion.ok) && !codes.has(criterion.missing);
          return (
            <li key={criterion.ok} className="flex items-center gap-2 text-sm">
              <Icon
                icon={met ? CircleCheck : TriangleAlert}
                size={16}
                className={met ? 'text-success' : 'text-warning'}
              />
              <span className={met ? 'text-fg' : 'text-fg-muted'}>{criterion.label()}</span>
              <span className="sr-only">({met ? ut('upload_quality_met') : ut('upload_quality_missing')})</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function ReviewStep({
  mode,
  isBuild,
  preflight,
  qualityScore,
  busy,
  submitting,
  submitError,
  summary,
  onGoTo,
  onSubmit,
  headingId,
}: ReviewStepProps) {
  const rows = preflight ?? [];
  const errors = rows.filter((row) => row.severity === 'error');
  const blocked = errors.length > 0;

  return (
    <div className="flex flex-col gap-5">
      <StepHeader id={headingId} title={ut('upload_review_title')} description={ut('upload_review_intro')} />

      {summary}

      <section
        aria-labelledby="upload-preflight-title"
        className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 id="upload-preflight-title" className="text-base font-semibold text-fg">
            {ut('upload_preflight_title')}
          </h3>
          {busy ? (
            <span className="flex items-center gap-2 text-xs text-fg-muted" aria-live="polite">
              <RadarSpinner size={14} /> {ut('upload_preflight_refreshing')}
            </span>
          ) : null}
        </div>
        {preflight === null ? (
          <p className="text-sm text-fg-muted">{ut('upload_preflight_waiting')}</p>
        ) : (
          <ul className="flex flex-col divide-y divide-border">
            {rows.map((row) => {
              const target = fieldTarget(mode, row.field);
              const icon = SEVERITY_ICON[row.severity];
              return (
                <li key={`${row.field}:${row.code}`} className="flex flex-wrap items-center justify-between gap-2 py-2">
                  <span className="flex min-w-0 items-start gap-2 text-sm">
                    <Icon icon={icon.icon} size={16} className={cn('mt-0.5 shrink-0', icon.className)} />
                    <span className="sr-only">
                      {row.severity === 'error'
                        ? ut('upload_severity_error')
                        : row.severity === 'warning'
                          ? ut('upload_severity_warning')
                          : ut('upload_severity_ok')}
                      :
                    </span>
                    <span className={row.severity === 'ok' ? 'text-fg-muted' : 'text-fg'}>
                      {preflightLabel(row.code)}
                    </span>
                  </span>
                  {target && row.severity !== 'ok' ? (
                    <Button variant="link" size="sm" onClick={() => onGoTo(target.step, target.anchor)}>
                      {ut('upload_preflight_fix')}
                    </Button>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {mode !== 'version' && qualityScore !== null && preflight ? (
        <QualityMeter score={qualityScore} preflight={rows} isBuild={isBuild} />
      ) : null}

      {submitError ? (
        <Callout tone="danger" title={ut('upload_submit_failed')}>
          {submitError}
        </Callout>
      ) : null}

      <div className="flex flex-col gap-2 rounded-lg border border-border bg-raised p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-fg-muted">
          {blocked
            ? ut('upload_submit_blocked', { count: errors.length })
            : mode === 'version'
              ? ut('upload_submit_ready_version')
              : ut('upload_submit_ready')}
        </p>
        <Button
          size="lg"
          glow={!blocked}
          icon={<Icon icon={Send} size={18} />}
          loading={submitting}
          disabled={blocked || busy || preflight === null}
          onClick={onSubmit}
        >
          {mode === 'version' ? ut('upload_submit_version') : ut('upload_submit')}
        </Button>
      </div>
    </div>
  );
}
