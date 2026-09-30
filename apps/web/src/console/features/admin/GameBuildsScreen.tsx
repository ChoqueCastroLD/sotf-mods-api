/**
 * `/ranger/admin/game-builds` (PLAN §7.10 «Registro»): the game builds (patches) that field reports,
 * CompatBadges and the Patch Radar refer to. Register, edit, mark as current (exactly one) or
 * breaking, delete a build nobody reported on. A new `isBreaking` build starts the global banner,
 * the `patch.breaking_build` signal to creators and the Patch Day Hero window, so the form says so
 * before saving.
 */
import { isApiError } from '@sotf/contracts/client';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog, Dialog, DialogClose } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Menu } from '@sotf/ui/menu';
import { Switch } from '@sotf/ui/switch';
import { Textarea } from '@sotf/ui/textarea';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { Flag, Gamepad2, MoreHorizontal, Pencil, Plus, Star, Trash2, Zap } from 'lucide-react';
import { type FormEvent, useId, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { adminApi, adminKeys, type GameBuild, gameBuildsQuery } from './api.ts';
import { ADMIN_LIMITS } from './constants.ts';
import {
  AdminHeader,
  formatDay,
  htmlToText,
  reportFailure,
  TableScroller,
  tdClasses,
  thClasses,
  todayIso,
} from './shared.tsx';

export function GameBuildsScreen() {
  const queryClient = useQueryClient();
  const { data: builds } = useSuspenseQuery(gameBuildsQuery);
  const [editing, setEditing] = useState<GameBuild | 'new' | null>(null);
  const [deleting, setDeleting] = useState<GameBuild | null>(null);
  const current = builds.find((build) => build.isCurrent) ?? null;

  const refresh = () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: adminKeys.gameBuilds }),
      queryClient.invalidateQueries({ queryKey: adminKeys.ecosystem }),
    ]);

  const makeCurrent = useMutation({
    mutationFn: (build: GameBuild) => adminApi.updateGameBuild(build.id, { isCurrent: true }),
    onSuccess: async (build) => {
      await refresh();
      notify.success(m.admin_builds_current_done({ label: build.label }));
    },
    onError: (error) => reportFailure(error, m.admin_builds_save_failed()),
  });

  const remove = async (build: GameBuild) => {
    try {
      await adminApi.deleteGameBuild(build.id);
      await refresh();
      notify.success(m.admin_builds_deleted({ label: build.label }));
    } catch (error) {
      if (isApiError(error) && error.code === 'CONFLICT') {
        notify.error(m.admin_builds_delete_failed(), { description: m.admin_builds_delete_conflict() });
      } else reportFailure(error, m.admin_builds_delete_failed());
      throw error;
    }
  };

  return (
    <div className="grid gap-6">
      <AdminHeader
        title={m.admin_builds_title()}
        description={m.admin_builds_description()}
        actions={
          <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setEditing('new')}>
            {m.admin_builds_add()}
          </Button>
        }
      />

      {builds.length > 0 && !current ? (
        <Banner tone="warning" title={m.admin_builds_no_current_title()}>
          {m.admin_builds_no_current_text()}
        </Banner>
      ) : null}

      {builds.length === 0 ? (
        <EmptyState
          icon={<Icon icon={Gamepad2} size={32} />}
          title={m.admin_builds_empty_title()}
          description={m.admin_builds_empty_text()}
          action={
            <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setEditing('new')}>
              {m.admin_builds_add()}
            </Button>
          }
        />
      ) : (
        <TableScroller label={m.admin_builds_table_label()}>
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">{m.admin_builds_table_label()}</caption>
            <thead className="bg-sunken">
              <tr>
                <th scope="col" className={thClasses}>
                  {m.admin_builds_col_label()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_builds_col_released()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_builds_col_steam()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_builds_col_notes()}
                </th>
                <th scope="col" className={thClasses}>
                  <span className="sr-only">{m.admin_col_actions()}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {builds.map((build) => {
                const notes = htmlToText(build.notesHtml);
                return (
                  <tr key={build.id} className="border-t border-border">
                    <th scope="row" className={`${tdClasses} text-start font-semibold text-fg`}>
                      <span className="flex flex-wrap items-center gap-2">
                        {build.label}
                        {build.isCurrent ? (
                          <Badge variant="success" size="sm" icon={<Icon icon={Star} size={12} />}>
                            {m.admin_builds_current()}
                          </Badge>
                        ) : null}
                        {build.isBreaking ? (
                          <Badge variant="warning" size="sm" icon={<Icon icon={Zap} size={12} />}>
                            {m.admin_builds_breaking()}
                          </Badge>
                        ) : null}
                      </span>
                    </th>
                    <td className={`${tdClasses} whitespace-nowrap text-fg-muted`}>
                      <time dateTime={build.releasedAt}>{formatDay(build.releasedAt)}</time>
                    </td>
                    <td className={`${tdClasses} font-mono text-xs text-fg-muted`}>{build.steamBuildId ?? '—'}</td>
                    <td className={`${tdClasses} max-w-80 text-fg-muted`}>
                      <span className="line-clamp-2">{notes || '—'}</span>
                    </td>
                    <td className={`${tdClasses} text-end`}>
                      <Menu
                        align="end"
                        trigger={
                          <Button variant="icon" size="sm" aria-label={m.admin_actions_for({ name: build.label })}>
                            <Icon icon={MoreHorizontal} size={18} />
                          </Button>
                        }
                        items={[
                          {
                            type: 'item',
                            label: m.admin_action_edit(),
                            icon: <Icon icon={Pencil} size={16} />,
                            onSelect: () => setEditing(build),
                          },
                          ...(build.isCurrent
                            ? []
                            : [
                                {
                                  type: 'item' as const,
                                  label: m.admin_builds_make_current(),
                                  icon: <Icon icon={Flag} size={16} />,
                                  onSelect: () => makeCurrent.mutate(build),
                                },
                              ]),
                          { type: 'separator' },
                          {
                            type: 'item',
                            label: m.admin_action_delete(),
                            icon: <Icon icon={Trash2} size={16} />,
                            danger: true,
                            onSelect: () => setDeleting(build),
                          },
                        ]}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableScroller>
      )}

      <GameBuildDialog
        build={editing}
        hasCurrent={current !== null}
        onClose={() => setEditing(null)}
        onSaved={refresh}
      />
      <ConfirmDialog
        open={deleting !== null}
        onOpenChange={(open) => {
          if (!open) setDeleting(null);
        }}
        title={m.admin_builds_delete_title({ label: deleting?.label ?? '' })}
        description={m.admin_builds_delete_text()}
        confirmLabel={m.admin_action_delete()}
        tone="danger"
        onConfirm={() => (deleting ? remove(deleting) : undefined)}
      />
    </div>
  );
}

interface BuildValues {
  label: string;
  steamBuildId: string;
  releasedAt: string;
  isBreaking: boolean;
  isCurrent: boolean;
  notes: string;
  clearNotes: boolean;
}

function valuesOf(build: GameBuild | 'new', hasCurrent: boolean): BuildValues {
  if (build === 'new') {
    return {
      label: '',
      steamBuildId: '',
      releasedAt: todayIso(),
      isBreaking: false,
      isCurrent: !hasCurrent,
      notes: '',
      clearNotes: false,
    };
  }
  return {
    label: build.label,
    steamBuildId: build.steamBuildId ?? '',
    releasedAt: build.releasedAt,
    isBreaking: build.isBreaking,
    isCurrent: build.isCurrent,
    notes: '',
    clearNotes: false,
  };
}

interface GameBuildDialogProps {
  build: GameBuild | 'new' | null;
  hasCurrent: boolean;
  onClose: () => void;
  onSaved: () => Promise<unknown>;
}

function GameBuildDialog({ build, hasCurrent, onClose, onSaved }: GameBuildDialogProps) {
  return (
    <Dialog
      open={build !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      title={
        build === 'new' || build === null ? m.admin_builds_add() : m.admin_builds_edit_title({ label: build.label })
      }
      description={m.admin_builds_form_description()}
      size="md"
      sheetOnMobile
    >
      {build !== null ? (
        <GameBuildForm
          key={build === 'new' ? 'new' : build.id}
          build={build}
          hasCurrent={hasCurrent}
          onDone={onClose}
          onSaved={onSaved}
        />
      ) : null}
    </Dialog>
  );
}

function GameBuildForm({
  build,
  hasCurrent,
  onDone,
  onSaved,
}: {
  build: GameBuild | 'new';
  hasCurrent: boolean;
  onDone: () => void;
  onSaved: () => Promise<unknown>;
}) {
  const formId = useId();
  const [values, setValues] = useState<BuildValues>(() => valuesOf(build, hasCurrent));
  const [errors, setErrors] = useState<Partial<Record<'label' | 'steamBuildId' | 'releasedAt', string>>>({});
  const [saving, setSaving] = useState(false);
  const isNew = build === 'new';
  const existingNotes = isNew ? '' : htmlToText(build.notesHtml);
  const set = <K extends keyof BuildValues>(key: K, value: BuildValues[K]) =>
    setValues((previous) => ({ ...previous, [key]: value }));
  const breakingNow = values.isBreaking && (isNew || !build.isBreaking);

  const validate = () => {
    const next: typeof errors = {};
    if (!values.label.trim()) next.label = m.admin_error_required();
    if (values.steamBuildId.trim() && !ADMIN_LIMITS.steamBuildId.test(values.steamBuildId.trim()))
      next.steamBuildId = m.admin_builds_error_steam();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(values.releasedAt)) next.releasedAt = m.admin_error_date();
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (saving || !validate()) return;
    setSaving(true);
    const steam = values.steamBuildId.trim();
    const notes = values.notes.trim();
    try {
      if (isNew) {
        await adminApi.createGameBuild({
          label: values.label.trim(),
          ...(steam ? { steamBuildId: steam } : {}),
          releasedAt: values.releasedAt,
          isBreaking: values.isBreaking,
          isCurrent: values.isCurrent,
          ...(notes ? { notesMd: notes } : {}),
        });
      } else {
        await adminApi.updateGameBuild(build.id, {
          label: values.label.trim(),
          steamBuildId: steam || null,
          releasedAt: values.releasedAt,
          isBreaking: values.isBreaking,
          ...(values.isCurrent !== build.isCurrent ? { isCurrent: values.isCurrent } : {}),
          ...(notes ? { notesMd: notes } : values.clearNotes ? { notesMd: null } : {}),
        });
      }
      await onSaved();
      notify.success(m.admin_builds_saved({ label: values.label.trim() }));
      onDone();
    } catch (error) {
      reportFailure(error, m.admin_builds_save_failed());
    } finally {
      setSaving(false);
    }
  };

  return (
    <form id={formId} noValidate onSubmit={(event) => void submit(event)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={m.admin_builds_field_label()}
          description={m.admin_builds_field_label_hint()}
          error={errors.label}
        >
          <Input
            value={values.label}
            maxLength={ADMIN_LIMITS.buildLabelMax}
            required
            autoFocus
            onChange={(event) => set('label', event.currentTarget.value)}
          />
        </Field>
        <Field label={m.admin_builds_field_released()} error={errors.releasedAt}>
          <Input
            type="date"
            value={values.releasedAt}
            required
            onChange={(event) => set('releasedAt', event.currentTarget.value)}
          />
        </Field>
      </div>
      <Field
        label={m.admin_builds_field_steam()}
        description={m.admin_builds_field_steam_hint()}
        error={errors.steamBuildId}
        optional
      >
        <Input
          inputMode="numeric"
          value={values.steamBuildId}
          maxLength={12}
          onChange={(event) => set('steamBuildId', event.currentTarget.value)}
        />
      </Field>
      <Switch
        label={m.admin_builds_field_current()}
        description={m.admin_builds_field_current_hint()}
        checked={values.isCurrent}
        disabled={!isNew && build.isCurrent}
        onCheckedChange={(checked) => set('isCurrent', checked)}
      />
      <Switch
        label={m.admin_builds_field_breaking()}
        description={m.admin_builds_field_breaking_hint()}
        checked={values.isBreaking}
        onCheckedChange={(checked) => set('isBreaking', checked)}
      />
      {breakingNow ? (
        <Banner tone="warning" title={m.admin_builds_breaking_warning_title()}>
          {m.admin_builds_breaking_warning_text()}
        </Banner>
      ) : null}
      <Field
        label={m.admin_builds_field_notes()}
        description={isNew ? m.admin_markdown_hint() : m.admin_builds_field_notes_edit_hint()}
        optional
      >
        <Textarea
          value={values.notes}
          maxLength={ADMIN_LIMITS.buildNotesMax}
          minRows={3}
          placeholder={existingNotes || undefined}
          onChange={(event) => set('notes', event.currentTarget.value)}
        />
      </Field>
      {!isNew && existingNotes && !values.notes.trim() ? (
        <Switch
          label={m.admin_builds_clear_notes()}
          checked={values.clearNotes}
          onCheckedChange={(checked) => set('clearNotes', checked)}
        />
      ) : null}
      <div className="flex flex-wrap justify-end gap-2">
        <DialogClose render={<Button variant="secondary" disabled={saving} />}>{m.admin_action_cancel()}</DialogClose>
        <Button type="submit" loading={saving}>
          {isNew ? m.admin_builds_add() : m.admin_action_save()}
        </Button>
      </div>
    </form>
  );
}
