/**
 * `/moderation/admin/announcements` (PLAN §7.4 «anuncios», T0-31): the global banner under the site
 * header. Each announcement has a level (info, warning, patch), a message per locale (English
 * required; missing locales fall back to it), an optional link, a time window (browser time zone
 * in the form, stored as UTC instants) and whether visitors can dismiss it. The form previews the
 * banner as it will look.
 */
import { LOCALE_INFO } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Badge, type BadgeVariant } from '@sotf/ui/badge';
import { Banner, type BannerTone } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog, Dialog, DialogClose } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Menu } from '@sotf/ui/menu';
import { Select } from '@sotf/ui/select';
import { Switch } from '@sotf/ui/switch';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { Copy, Link2, Megaphone, MoreHorizontal, Pencil, Plus, Square, Trash2 } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { type Announcement, type AnnouncementInput, adminApi, adminKeys, announcementsQuery } from './api.ts';
import { ADMIN_LIMITS, ANNOUNCEMENT_LEVELS, type AnnouncementLevel } from './constants.ts';
import {
  AdminHeader,
  compactTexts,
  formatInstant,
  fromLocalInput,
  LocalizedFields,
  type LocalizedTexts,
  reportFailure,
  toLocalInput,
} from './shared.tsx';

const MESSAGE_MAX = 300;

export function levelLabel(level: AnnouncementLevel): string {
  switch (level) {
    case 'warning':
      return m.admin_ann_level_warning();
    case 'patch':
      return m.admin_ann_level_patch();
    default:
      return m.admin_ann_level_info();
  }
}

const LEVEL_TONE: Record<AnnouncementLevel, BannerTone> = { info: 'info', warning: 'warning', patch: 'signal' };
const LEVEL_BADGE: Record<AnnouncementLevel, BadgeVariant> = { info: 'neutral', warning: 'warning', patch: 'signal' };

type Phase = 'scheduled' | 'live' | 'ended';

function phaseOf(announcement: Pick<Announcement, 'startsAt' | 'endsAt'>, now = Date.now()): Phase {
  if (Date.parse(announcement.startsAt) > now) return 'scheduled';
  if (announcement.endsAt && Date.parse(announcement.endsAt) <= now) return 'ended';
  return 'live';
}

const PHASE_ORDER: Record<Phase, number> = { live: 0, scheduled: 1, ended: 2 };

function inputOf(announcement: Announcement): AnnouncementInput {
  return {
    level: announcement.level,
    messages: announcement.messages,
    href: announcement.href,
    startsAt: announcement.startsAt,
    endsAt: announcement.endsAt,
    dismissible: announcement.dismissible,
  };
}

export function AnnouncementsScreen() {
  const queryClient = useQueryClient();
  const { data: announcements } = useSuspenseQuery(announcementsQuery);
  const [editing, setEditing] = useState<Announcement | 'new' | { copyOf: Announcement } | null>(null);
  const [deleting, setDeleting] = useState<Announcement | null>(null);
  const sorted = [...announcements].sort(
    (a, b) => PHASE_ORDER[phaseOf(a)] - PHASE_ORDER[phaseOf(b)] || b.startsAt.localeCompare(a.startsAt),
  );

  const refresh = () => queryClient.invalidateQueries({ queryKey: adminKeys.announcements });

  const endNow = async (announcement: Announcement) => {
    try {
      await adminApi.updateAnnouncement(announcement.id, {
        ...inputOf(announcement),
        endsAt: new Date().toISOString(),
      });
      await refresh();
      notify.success(m.admin_ann_ended());
    } catch (error) {
      reportFailure(error, m.admin_ann_save_failed());
    }
  };

  const remove = async (announcement: Announcement) => {
    try {
      await adminApi.deleteAnnouncement(announcement.id);
      await refresh();
      notify.success(m.admin_ann_deleted());
    } catch (error) {
      reportFailure(error, m.admin_ann_delete_failed());
      throw error;
    }
  };

  return (
    <div className="grid gap-6">
      <AdminHeader
        title={m.admin_ann_title()}
        description={m.admin_ann_description()}
        actions={
          <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setEditing('new')}>
            {m.admin_ann_add()}
          </Button>
        }
      />

      {sorted.length === 0 ? (
        <EmptyState
          icon={<Icon icon={Megaphone} size={32} />}
          title={m.admin_ann_empty_title()}
          description={m.admin_ann_empty_text()}
          action={
            <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setEditing('new')}>
              {m.admin_ann_add()}
            </Button>
          }
        />
      ) : (
        <ul className="grid gap-3">
          {sorted.map((announcement) => {
            const phase = phaseOf(announcement);
            const translations = Object.keys(compactTexts(announcement.messages)).filter(
              (code) => code !== 'en',
            ).length;
            return (
              <li key={announcement.id} className="grid gap-3 rounded-lg border border-border bg-surface p-4">
                <div className="flex flex-wrap items-start gap-3">
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <Badge variant={LEVEL_BADGE[announcement.level]} size="sm">
                      {levelLabel(announcement.level)}
                    </Badge>
                    <Badge
                      variant={phase === 'live' ? 'success' : phase === 'scheduled' ? 'blueprint' : 'neutral'}
                      size="sm"
                    >
                      {phase === 'live'
                        ? m.admin_ann_phase_live()
                        : phase === 'scheduled'
                          ? m.admin_ann_phase_scheduled()
                          : m.admin_ann_phase_ended()}
                    </Badge>
                    <span className="text-xs text-fg-muted">
                      {announcement.endsAt
                        ? m.admin_period({
                            start: formatInstant(announcement.startsAt),
                            end: formatInstant(announcement.endsAt),
                          })
                        : m.admin_ann_from({ start: formatInstant(announcement.startsAt) })}
                    </span>
                  </div>
                  <Menu
                    align="end"
                    trigger={
                      <Button
                        variant="icon"
                        size="sm"
                        aria-label={m.admin_actions_for({ name: announcement.messages.en ?? '' })}
                      >
                        <Icon icon={MoreHorizontal} size={18} />
                      </Button>
                    }
                    items={[
                      {
                        type: 'item',
                        label: m.admin_action_edit(),
                        icon: <Icon icon={Pencil} size={16} />,
                        onSelect: () => setEditing(announcement),
                      },
                      {
                        type: 'item',
                        label: m.admin_ann_duplicate(),
                        icon: <Icon icon={Copy} size={16} />,
                        onSelect: () => setEditing({ copyOf: announcement }),
                      },
                      ...(phase !== 'ended'
                        ? [
                            {
                              type: 'item' as const,
                              label: m.admin_ann_end_now(),
                              icon: <Icon icon={Square} size={16} />,
                              onSelect: () => void endNow(announcement),
                            },
                          ]
                        : []),
                      { type: 'separator' },
                      {
                        type: 'item',
                        label: m.admin_action_delete(),
                        icon: <Icon icon={Trash2} size={16} />,
                        danger: true,
                        onSelect: () => setDeleting(announcement),
                      },
                    ]}
                  />
                </div>
                <p className="text-sm text-fg">{announcement.messages.en}</p>
                <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-fg-muted">
                  <span>{m.admin_ann_translations({ count: translations })}</span>
                  {announcement.href ? (
                    <span className="inline-flex items-center gap-1 font-mono">
                      <Icon icon={Link2} size={12} />
                      {announcement.href}
                    </span>
                  ) : null}
                  <span>{announcement.dismissible ? m.admin_ann_dismissible() : m.admin_ann_not_dismissible()}</span>
                </p>
              </li>
            );
          })}
        </ul>
      )}

      <Dialog
        open={editing !== null}
        onOpenChange={(open) => {
          if (!open) setEditing(null);
        }}
        title={editing !== null && editing !== 'new' && !('copyOf' in editing) ? m.admin_ann_edit() : m.admin_ann_add()}
        size="lg"
        sheetOnMobile
      >
        {editing !== null ? (
          <AnnouncementForm
            key={editing === 'new' ? 'new' : 'copyOf' in editing ? `copy-${editing.copyOf.id}` : editing.id}
            announcement={editing === 'new' ? null : 'copyOf' in editing ? null : editing}
            template={editing !== 'new' && 'copyOf' in editing ? editing.copyOf : null}
            onDone={() => setEditing(null)}
            onSaved={refresh}
          />
        ) : null}
      </Dialog>
      <ConfirmDialog
        open={deleting !== null}
        onOpenChange={(open) => {
          if (!open) setDeleting(null);
        }}
        title={m.admin_ann_delete_title()}
        description={m.admin_ann_delete_text()}
        confirmLabel={m.admin_action_delete()}
        tone="danger"
        onConfirm={() => (deleting ? remove(deleting) : undefined)}
      />
    </div>
  );
}

interface AnnouncementValues {
  level: AnnouncementLevel;
  english: string;
  messages: LocalizedTexts;
  href: string;
  startsAt: string;
  endsAt: string;
  dismissible: boolean;
}

function valuesOf(source: Announcement | null): AnnouncementValues {
  if (!source) {
    return {
      level: 'info',
      english: '',
      messages: {},
      href: '',
      startsAt: toLocalInput(new Date().toISOString()),
      endsAt: '',
      dismissible: true,
    };
  }
  const { en, ...others } = source.messages;
  return {
    level: source.level,
    english: en ?? '',
    messages: others,
    href: source.href ?? '',
    startsAt: toLocalInput(source.startsAt),
    endsAt: toLocalInput(source.endsAt),
    dismissible: source.dismissible,
  };
}

function AnnouncementForm({
  announcement,
  template,
  onDone,
  onSaved,
}: {
  announcement: Announcement | null;
  template: Announcement | null;
  onDone: () => void;
  onSaved: () => Promise<unknown>;
}) {
  const [values, setValues] = useState<AnnouncementValues>(() => {
    const base = valuesOf(announcement ?? template);
    // A copy starts now (the original's window is usually over).
    return template ? { ...base, startsAt: toLocalInput(new Date().toISOString()), endsAt: '' } : base;
  });
  const [errors, setErrors] = useState<Partial<Record<'english' | 'href' | 'startsAt' | 'endsAt', string>>>({});
  const [saving, setSaving] = useState(false);
  const set = <K extends keyof AnnouncementValues>(key: K, value: AnnouncementValues[K]) =>
    setValues((previous) => ({ ...previous, [key]: value }));

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (saving) return;
    const next: typeof errors = {};
    const startsAt = fromLocalInput(values.startsAt);
    const endsAt = values.endsAt ? fromLocalInput(values.endsAt) : null;
    const href = values.href.trim();
    if (!values.english.trim()) next.english = m.admin_error_required();
    if (href && !(href.startsWith('/') && !href.startsWith('//')) && !/^https:\/\/\S+$/i.test(href))
      next.href = m.admin_ann_error_href();
    if (!startsAt) next.startsAt = m.admin_error_date();
    if (values.endsAt && !endsAt) next.endsAt = m.admin_error_date();
    else if (startsAt && endsAt && endsAt <= startsAt) next.endsAt = m.admin_error_period();
    setErrors(next);
    if (Object.keys(next).length > 0 || !startsAt) return;
    setSaving(true);
    const body: AnnouncementInput = {
      level: values.level,
      messages: compactTexts({ ...values.messages, en: values.english }),
      href: href || null,
      startsAt,
      endsAt,
      dismissible: values.dismissible,
    };
    try {
      if (announcement) await adminApi.updateAnnouncement(announcement.id, body);
      else await adminApi.createAnnouncement(body);
      await onSaved();
      notify.success(m.admin_ann_saved());
      onDone();
    } catch (error) {
      reportFailure(error, m.admin_ann_save_failed());
    } finally {
      setSaving(false);
    }
  };

  return (
    <form noValidate onSubmit={(event) => void submit(event)} className="grid gap-4">
      <div className="grid gap-2">
        <p className="text-xs font-medium text-fg-muted">{m.admin_ann_preview()}</p>
        <Banner
          tone={LEVEL_TONE[values.level]}
          dismissible={values.dismissible}
          onDismiss={() => undefined}
          action={
            values.href.trim() ? (
              <span className="text-sm font-medium text-link underline">{m.admin_ann_preview_link()}</span>
            ) : undefined
          }
        >
          {values.english.trim() || m.admin_ann_preview_empty()}
        </Banner>
      </div>
      <Select<AnnouncementLevel>
        label={m.admin_ann_field_level()}
        value={values.level}
        onValueChange={(next) => next && set('level', next)}
        options={ANNOUNCEMENT_LEVELS.map((level) => ({ value: level, label: levelLabel(level) }))}
      />
      <Field
        label={m.admin_ann_field_message({ language: LOCALE_INFO.en.endonym })}
        description={m.admin_ann_field_message_hint()}
        error={errors.english}
      >
        <Textarea
          lang="en"
          value={values.english}
          maxLength={MESSAGE_MAX}
          minRows={2}
          autoFocus
          onChange={(event) => set('english', event.currentTarget.value)}
        />
      </Field>
      <LocalizedFields
        label={m.admin_ann_field_translations()}
        values={values.messages}
        maxLength={MESSAGE_MAX}
        multiline
        onChange={(messages) => set('messages', messages)}
      />
      <Field label={m.admin_ann_field_href()} description={m.admin_ann_field_href_hint()} error={errors.href} optional>
        <Input
          value={values.href}
          maxLength={ADMIN_LIMITS.announcementHrefMax}
          placeholder="/install"
          spellCheck={false}
          onChange={(event) => set('href', event.currentTarget.value)}
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={m.admin_ann_field_starts()} description={m.admin_ann_field_timezone()} error={errors.startsAt}>
          <Input
            type="datetime-local"
            value={values.startsAt}
            onChange={(event) => set('startsAt', event.currentTarget.value)}
          />
        </Field>
        <Field
          label={m.admin_ann_field_ends()}
          description={m.admin_ann_field_ends_hint()}
          error={errors.endsAt}
          optional
        >
          <Input
            type="datetime-local"
            value={values.endsAt}
            min={values.startsAt || undefined}
            onChange={(event) => set('endsAt', event.currentTarget.value)}
          />
        </Field>
      </div>
      <Switch
        label={m.admin_ann_field_dismissible()}
        description={m.admin_ann_field_dismissible_hint()}
        checked={values.dismissible}
        onCheckedChange={(checked) => set('dismissible', checked)}
      />
      <div className="flex flex-wrap justify-end gap-2">
        <DialogClose render={<Button variant="secondary" disabled={saving} />}>{m.admin_action_cancel()}</DialogClose>
        <Button type="submit" loading={saving}>
          {announcement ? m.admin_action_save() : m.admin_ann_add()}
        </Button>
      </div>
    </form>
  );
}
