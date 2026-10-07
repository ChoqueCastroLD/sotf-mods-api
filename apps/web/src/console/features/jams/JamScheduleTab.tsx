/**
 * Schedule tab: six moments in the browser's time zone. Dates must not go back in time (checked
 * as you type), the archive date appears once voting has a closing date, and «Fill in a standard
 * schedule» proposes a usual jam from a start date. Phases follow these dates by themselves unless
 * staff forced one.
 */
import { formatRelativeTime } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { toast } from '@sotf/ui/toast';
import { CalendarClock } from 'lucide-react';
import { useState } from 'react';
import { browserTimeZone } from '../../lib/i18n.ts';
import { activeLocale } from '../../lib/messages.ts';
import { formatInstant } from '../admin/shared.tsx';
import { dateLabel } from './form.ts';
import type { TabProps } from './JamEditorScreen.tsx';
import { DATE_FIELDS, standardSchedule, suggestedStart, timeline, toInputValue } from './schedule.ts';

export function JamScheduleTab({ form, update, errors }: TabProps) {
  const [filling, setFilling] = useState(false);
  const [start, setStart] = useState('');
  const hasDates = DATE_FIELDS.some((field) => form.dates[field]);
  const ordered = timeline(form.dates);

  return (
    <div className="grid max-w-3xl gap-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="max-w-prose text-sm text-fg-muted">
          {m.jams_editor_schedule_description()} {m.jams_editor_schedule_zone({ zone: browserTimeZone() })}
        </p>
        <Button
          variant="secondary"
          size="sm"
          icon={<Icon icon={CalendarClock} size={16} />}
          onClick={() => {
            setStart(toInputValue(suggestedStart(new Date())));
            setFilling(true);
          }}
        >
          {m.jams_editor_schedule_fill()}
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {DATE_FIELDS.filter((field) => field !== 'archiveAt' || form.dates.votingCloseAt).map((field) => (
          <Field key={field} label={dateLabel(field)} error={errors.dates[field]} optional>
            <Input
              type="datetime-local"
              value={form.dates[field]}
              onChange={(event) => {
                const value = event.currentTarget.value;
                update({ dates: { ...form.dates, [field]: value } });
              }}
            />
          </Field>
        ))}
      </div>

      {ordered.length > 0 ? (
        <section aria-labelledby="jam-timeline" className="grid gap-2">
          <h2 id="jam-timeline" className="text-sm font-semibold text-fg">
            {m.jams_schedule_title()}
          </h2>
          <ol className="grid max-w-xl divide-y divide-border border-y border-border text-sm">
            {ordered.map((entry) => (
              <li key={entry.field} className="flex flex-wrap items-baseline justify-between gap-x-4 py-2">
                <span className="text-fg">{dateLabel(entry.field)}</span>
                <span className="text-fg-muted tabular-nums">
                  {formatInstant(entry.iso)}
                  <span className="ms-2 text-xs text-fg-subtle">{formatRelativeTime(activeLocale(), entry.iso)}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <ConfirmDialog
        open={filling}
        onOpenChange={setFilling}
        title={m.jams_editor_schedule_fill_title()}
        description={hasDates ? m.jams_editor_schedule_fill_replace() : m.jams_editor_schedule_fill_text()}
        confirmLabel={m.jams_editor_schedule_fill_apply()}
        onConfirm={() => {
          const date = new Date(start);
          if (Number.isNaN(date.getTime())) return;
          update({ dates: standardSchedule(date) });
          setFilling(false);
          toast.success(m.jams_editor_schedule_filled());
        }}
      >
        <Field label={m.jams_editor_schedule_start()}>
          <Input type="datetime-local" value={start} onChange={(event) => setStart(event.currentTarget.value)} />
        </Field>
      </ConfirmDialog>
    </div>
  );
}
