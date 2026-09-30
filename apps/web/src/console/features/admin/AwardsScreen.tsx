/**
 * `/ranger/admin/awards` (PLAN §7.2 «Mod of the Week… El admin puede sustituirlo», «Staff pick es
 * manual»): every award, newest first, with the ones running today highlighted. «Give an award»
 * creates one; an award of the same kind and period replaces the existing one (that is how the
 * automatic Mod of the Week is overridden). Awards can be withdrawn (confirmed). Kit staff picks
 * are switched below (`KitPicksPanel`).
 */
import { localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog, Dialog, DialogClose } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { ExternalLink, Plus, Trash2, Trophy } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { type Award, adminApi, adminKeys, awardsQuery } from './api.ts';
import { ADMIN_LIMITS, AWARD_KINDS, type AwardKind } from './constants.ts';
import { KitPicksPanel } from './KitPicksPanel.tsx';
import { ModSearchField, type PickedMod } from './ModSearchField.tsx';
import {
  AdminHeader,
  addDays,
  formatDay,
  locale,
  reportFailure,
  TableScroller,
  tdClasses,
  thClasses,
  todayIso,
} from './shared.tsx';

export function awardKindLabel(kind: AwardKind): string {
  switch (kind) {
    case 'mod_of_week':
      return m.admin_awards_kind_mod_of_week();
    case 'staff_pick':
      return m.admin_awards_kind_staff_pick();
    case 'build_of_month':
      return m.admin_awards_kind_build_of_month();
    default:
      return m.admin_awards_kind_mod_of_month();
  }
}

/** Default period of a new award of `kind` (UTC calendar). */
export function defaultPeriod(kind: AwardKind, today: string = todayIso()): { start: string; end: string } {
  const date = new Date(`${today}T00:00:00Z`);
  if (kind === 'mod_of_week') {
    const weekday = (date.getUTCDay() + 6) % 7; // Monday = 0
    const start = addDays(today, -weekday);
    return { start, end: addDays(start, 6) };
  }
  if (kind === 'staff_pick') return { start: today, end: addDays(today, 30) };
  const start = `${today.slice(0, 7)}-01`;
  const next = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 1));
  return { start, end: addDays(next.toISOString().slice(0, 10), -1) };
}

type KindFilter = AwardKind | 'all';

export function AwardsScreen() {
  const queryClient = useQueryClient();
  const { data: awards } = useSuspenseQuery(awardsQuery);
  const [filter, setFilter] = useState<KindFilter>('all');
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState<Award | null>(null);
  const today = todayIso();
  const visible = filter === 'all' ? awards : awards.filter((award) => award.kind === filter);

  const refresh = () => queryClient.invalidateQueries({ queryKey: adminKeys.awards });

  const remove = async (award: Award) => {
    try {
      await adminApi.deleteAward(award.id);
      await refresh();
      notify.success(m.admin_awards_deleted({ name: award.mod.name }));
    } catch (error) {
      reportFailure(error, m.admin_awards_delete_failed());
      throw error;
    }
  };

  return (
    <div className="grid gap-6">
      <AdminHeader
        title={m.admin_awards_title()}
        description={m.admin_awards_description()}
        actions={
          <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setCreating(true)}>
            {m.admin_awards_add()}
          </Button>
        }
      />

      <Select<KindFilter>
        label={m.admin_awards_filter()}
        value={filter}
        className="max-w-xs"
        onValueChange={(next) => setFilter(next ?? 'all')}
        options={[
          { value: 'all', label: m.admin_awards_filter_all() },
          ...AWARD_KINDS.map((kind) => ({ value: kind, label: awardKindLabel(kind) })),
        ]}
      />

      {visible.length === 0 ? (
        <EmptyState
          icon={<Icon icon={Trophy} size={32} />}
          title={m.admin_awards_empty_title()}
          description={m.admin_awards_empty_text()}
        />
      ) : (
        <TableScroller label={m.admin_awards_table_label()}>
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">{m.admin_awards_table_label()}</caption>
            <thead className="bg-sunken">
              <tr>
                <th scope="col" className={thClasses}>
                  {m.admin_awards_col_mod()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_awards_col_kind()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_awards_col_period()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_awards_col_reason()}
                </th>
                <th scope="col" className={thClasses}>
                  <span className="sr-only">{m.admin_col_actions()}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {visible.map((award) => {
                const running = award.periodStart <= today && today <= award.periodEnd;
                const upcoming = award.periodStart > today;
                return (
                  <tr key={award.id} className="border-t border-border">
                    <th scope="row" className={`${tdClasses} min-w-56 text-start font-normal`}>
                      <span className="flex items-center gap-3">
                        <span className="size-10 shrink-0 overflow-hidden rounded-sm bg-sunken">
                          {award.mod.thumbnail ? (
                            <img
                              src={award.mod.thumbnail.url}
                              alt=""
                              loading="lazy"
                              className="size-full object-cover"
                            />
                          ) : null}
                        </span>
                        <span className="grid min-w-0">
                          <a
                            href={localizePath(award.mod.canonicalPath, locale())}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 truncate font-semibold text-fg hover:text-link"
                          >
                            {award.mod.name}
                            <Icon icon={ExternalLink} size={12} className="text-fg-subtle" />
                          </a>
                          <span className="truncate text-xs text-fg-muted">@{award.mod.userHandle}</span>
                        </span>
                      </span>
                    </th>
                    <td className={`${tdClasses} whitespace-nowrap`}>
                      <span className="flex flex-wrap items-center gap-2">
                        {awardKindLabel(award.kind)}
                        {running ? (
                          <Badge variant="success" size="sm">
                            {m.admin_awards_running()}
                          </Badge>
                        ) : upcoming ? (
                          <Badge variant="signal" size="sm">
                            {m.admin_awards_upcoming()}
                          </Badge>
                        ) : null}
                      </span>
                    </td>
                    <td className={`${tdClasses} whitespace-nowrap text-fg-muted`}>
                      {m.admin_period({ start: formatDay(award.periodStart), end: formatDay(award.periodEnd) })}
                    </td>
                    <td className={`${tdClasses} max-w-80 text-fg-muted`}>
                      <span className="line-clamp-2">{award.reason ?? m.admin_awards_automatic()}</span>
                    </td>
                    <td className={`${tdClasses} text-end`}>
                      <Button
                        variant="icon"
                        size="sm"
                        aria-label={m.admin_awards_delete_for({
                          name: award.mod.name,
                          kind: awardKindLabel(award.kind),
                        })}
                        onClick={() => setDeleting(award)}
                      >
                        <Icon icon={Trash2} size={16} />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableScroller>
      )}

      <Dialog
        open={creating}
        onOpenChange={setCreating}
        title={m.admin_awards_add()}
        description={m.admin_awards_form_description()}
        size="md"
        sheetOnMobile
      >
        {creating ? <AwardForm onDone={() => setCreating(false)} onSaved={refresh} /> : null}
      </Dialog>
      <ConfirmDialog
        open={deleting !== null}
        onOpenChange={(open) => {
          if (!open) setDeleting(null);
        }}
        title={m.admin_awards_delete_title({
          name: deleting?.mod.name ?? '',
          kind: deleting ? awardKindLabel(deleting.kind) : '',
        })}
        description={m.admin_awards_delete_text()}
        confirmLabel={m.admin_awards_delete()}
        tone="danger"
        onConfirm={() => (deleting ? remove(deleting) : undefined)}
      />
      <KitPicksPanel />
    </div>
  );
}

function AwardForm({ onDone, onSaved }: { onDone: () => void; onSaved: () => Promise<unknown> }) {
  const [kind, setKind] = useState<AwardKind>('staff_pick');
  const [mod, setMod] = useState<PickedMod | null>(null);
  const [period, setPeriod] = useState(() => defaultPeriod('staff_pick'));
  const [reason, setReason] = useState('');
  const [errors, setErrors] = useState<{ mod?: string; start?: string; end?: string }>({});
  const [saving, setSaving] = useState(false);
  const needsBuild = kind === 'build_of_month';

  const changeKind = (next: AwardKind) => {
    const wasBuild = kind === 'build_of_month';
    setKind(next);
    setPeriod(defaultPeriod(next));
    if (wasBuild !== (next === 'build_of_month')) setMod(null);
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (saving) return;
    const next: typeof errors = {};
    if (!mod) next.mod = needsBuild ? m.admin_awards_error_build() : m.admin_awards_error_mod();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(period.start)) next.start = m.admin_error_date();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(period.end)) next.end = m.admin_error_date();
    else if (period.end < period.start) next.end = m.admin_error_period();
    setErrors(next);
    if (Object.keys(next).length > 0 || !mod) return;
    setSaving(true);
    try {
      await adminApi.createAward({
        kind,
        modId: mod.id,
        periodStart: period.start,
        periodEnd: period.end,
        ...(reason.trim() ? { reason: reason.trim() } : {}),
      });
      await onSaved();
      notify.success(m.admin_awards_saved({ name: mod.name, kind: awardKindLabel(kind) }));
      onDone();
    } catch (error) {
      reportFailure(error, m.admin_awards_save_failed());
    } finally {
      setSaving(false);
    }
  };

  return (
    <form noValidate onSubmit={(event) => void submit(event)} className="grid gap-4">
      <Select<AwardKind>
        label={m.admin_awards_field_kind()}
        value={kind}
        onValueChange={(next) => next && changeKind(next)}
        options={AWARD_KINDS.map((value) => ({ value, label: awardKindLabel(value) }))}
      />
      {kind === 'mod_of_week' ? (
        <Banner tone="info" title={m.admin_awards_override_title()}>
          {m.admin_awards_override_text()}
        </Banner>
      ) : null}
      <ModSearchField
        label={needsBuild ? m.admin_awards_field_build() : m.admin_awards_field_mod()}
        types={needsBuild ? 'build' : 'mod'}
        value={mod}
        onChange={setMod}
        error={errors.mod}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={m.admin_awards_field_start()} error={errors.start}>
          <Input
            type="date"
            value={period.start}
            onChange={(event) => {
              const start = event.currentTarget.value;
              setPeriod((previous) => ({ ...previous, start }));
            }}
          />
        </Field>
        <Field label={m.admin_awards_field_end()} error={errors.end}>
          <Input
            type="date"
            value={period.end}
            min={period.start}
            onChange={(event) => {
              const end = event.currentTarget.value;
              setPeriod((previous) => ({ ...previous, end }));
            }}
          />
        </Field>
      </div>
      <Field label={m.admin_awards_field_reason()} description={m.admin_awards_field_reason_hint()} optional>
        <Textarea
          value={reason}
          maxLength={ADMIN_LIMITS.awardReasonMax}
          minRows={2}
          onChange={(event) => setReason(event.currentTarget.value)}
        />
      </Field>
      <div className="flex flex-wrap justify-end gap-2">
        <DialogClose render={<Button variant="secondary" disabled={saving} />}>{m.admin_action_cancel()}</DialogClose>
        <Button type="submit" loading={saving}>
          {m.admin_awards_add()}
        </Button>
      </div>
    </form>
  );
}
