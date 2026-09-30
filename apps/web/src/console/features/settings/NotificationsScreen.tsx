/**
 * Settings → Notifications (PLAN §7.3): the type × channel matrix. Per signal type: in the app
 * (on/off) and email (instantly, daily digest, weekly digest or off). Rows are grouped by what they
 * are about; «Save» sends only the rows that changed (`PUT /notification-preferences`), «Restore
 * defaults» brings back the defaults of §7.3. Removal notices of your mods are always emailed.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Select } from '@sotf/ui/select';
import { Switch } from '@sotf/ui/switch';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { RotateCcw } from 'lucide-react';
import { useMemo, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import {
  type EmailFrequency,
  type NotificationPreferenceDTO,
  type NotificationType,
  preferencesQuery,
  settingsApi,
  settingsKeys,
} from './api.ts';
import { failureDescription } from './errors.ts';
import { SettingsCard, SettingsPage } from './layout.tsx';

type Row = Pick<NotificationPreferenceDTO, 'type' | 'inApp' | 'email' | 'inAppAvailable'>;

/** `NOTIFICATION_DEFAULTS` of `@sotf/contracts/notifications` (mirrored: no Zod in the chunk). */
const DEFAULTS: Readonly<Record<NotificationType, { inApp: boolean; email: EmailFrequency }>> = {
  'mod.version_published': { inApp: true, email: 'daily' },
  'creator.mod_published': { inApp: true, email: 'weekly' },
  'comment.on_my_mod': { inApp: true, email: 'instant' },
  'comment.reply': { inApp: true, email: 'instant' },
  'comment.mention': { inApp: true, email: 'instant' },
  'review.on_my_mod': { inApp: true, email: 'daily' },
  'review.reply': { inApp: true, email: 'instant' },
  'compat.broken_on_my_mod': { inApp: true, email: 'instant' },
  'compat.acknowledged': { inApp: true, email: 'off' },
  'compat.prompt': { inApp: true, email: 'off' },
  'review.update_prompt': { inApp: true, email: 'off' },
  'kit.added_my_mod': { inApp: true, email: 'off' },
  'kit.updated_followed': { inApp: true, email: 'off' },
  'kit.comment': { inApp: true, email: 'off' },
  'kit.comment_reply': { inApp: true, email: 'off' },
  'coauthor.invited': { inApp: true, email: 'instant' },
  'request.comment': { inApp: true, email: 'off' },
  'request.adopted': { inApp: true, email: 'off' },
  'request.fulfilled': { inApp: true, email: 'instant' },
  'patch.breaking_build': { inApp: true, email: 'instant' },
  'mod.status_changed': { inApp: true, email: 'instant' },
  'milestone.reached': { inApp: true, email: 'off' },
  'badge.awarded': { inApp: true, email: 'off' },
  'award.won': { inApp: true, email: 'off' },
  'jam.phase': { inApp: true, email: 'daily' },
  'report.resolved': { inApp: true, email: 'off' },
  'system.announcement': { inApp: true, email: 'off' },
  'creator.weekly_report': { inApp: false, email: 'weekly' },
};

const GROUPS: readonly { id: string; title: () => string; types: readonly NotificationType[] }[] = [
  {
    id: 'follows',
    title: () => m.settings_notif_group_follows(),
    types: ['mod.version_published', 'creator.mod_published', 'kit.updated_followed', 'patch.breaking_build'],
  },
  {
    id: 'conversations',
    title: () => m.settings_notif_group_conversations(),
    types: [
      'comment.reply',
      'comment.mention',
      'review.reply',
      'kit.comment_reply',
      'request.comment',
      'request.adopted',
      'request.fulfilled',
    ],
  },
  {
    id: 'my-mods',
    title: () => m.settings_notif_group_my_mods(),
    types: [
      'comment.on_my_mod',
      'review.on_my_mod',
      'compat.broken_on_my_mod',
      'kit.added_my_mod',
      'kit.comment',
      'coauthor.invited',
      'mod.status_changed',
      'creator.weekly_report',
    ],
  },
  {
    id: 'community',
    title: () => m.settings_notif_group_community(),
    types: [
      'compat.acknowledged',
      'compat.prompt',
      'review.update_prompt',
      'report.resolved',
      'milestone.reached',
      'badge.awarded',
      'award.won',
      'jam.phase',
      'system.announcement',
    ],
  },
];

const COPY: Readonly<Record<NotificationType, { title: () => string; hint: () => string }>> = {
  'mod.version_published': { title: () => m.settings_notif_version(), hint: () => m.settings_notif_version_hint() },
  'creator.mod_published': { title: () => m.settings_notif_creator(), hint: () => m.settings_notif_creator_hint() },
  'patch.breaking_build': { title: () => m.settings_notif_patch(), hint: () => m.settings_notif_patch_hint() },
  'comment.reply': { title: () => m.settings_notif_reply(), hint: () => m.settings_notif_reply_hint() },
  'comment.mention': { title: () => m.settings_notif_mention(), hint: () => m.settings_notif_mention_hint() },
  'review.reply': { title: () => m.settings_notif_review_reply(), hint: () => m.settings_notif_review_reply_hint() },
  'comment.on_my_mod': { title: () => m.settings_notif_comment(), hint: () => m.settings_notif_comment_hint() },
  'review.on_my_mod': { title: () => m.settings_notif_review(), hint: () => m.settings_notif_review_hint() },
  'compat.broken_on_my_mod': { title: () => m.settings_notif_broken(), hint: () => m.settings_notif_broken_hint() },
  'mod.status_changed': { title: () => m.settings_notif_status(), hint: () => m.settings_notif_status_hint() },
  'creator.weekly_report': { title: () => m.settings_notif_weekly(), hint: () => m.settings_notif_weekly_hint() },
  'compat.acknowledged': { title: () => m.settings_notif_ack(), hint: () => m.settings_notif_ack_hint() },
  'compat.prompt': {
    title: () => m.settings_notif_compat_prompt(),
    hint: () => m.settings_notif_compat_prompt_hint(),
  },
  'review.update_prompt': {
    title: () => m.settings_notif_review_update(),
    hint: () => m.settings_notif_review_update_hint(),
  },
  'kit.added_my_mod': { title: () => m.settings_notif_kit_added(), hint: () => m.settings_notif_kit_added_hint() },
  'kit.updated_followed': {
    title: () => m.settings_notif_kit_updated(),
    hint: () => m.settings_notif_kit_updated_hint(),
  },
  'kit.comment': { title: () => m.settings_notif_kit_comment(), hint: () => m.settings_notif_kit_comment_hint() },
  'kit.comment_reply': {
    title: () => m.settings_notif_kit_reply(),
    hint: () => m.settings_notif_kit_reply_hint(),
  },
  'coauthor.invited': { title: () => m.settings_notif_coauthor(), hint: () => m.settings_notif_coauthor_hint() },
  'request.comment': {
    title: () => m.settings_notif_request_comment(),
    hint: () => m.settings_notif_request_comment_hint(),
  },
  'request.adopted': {
    title: () => m.settings_notif_request_adopted(),
    hint: () => m.settings_notif_request_adopted_hint(),
  },
  'request.fulfilled': {
    title: () => m.settings_notif_request_fulfilled(),
    hint: () => m.settings_notif_request_fulfilled_hint(),
  },
  'report.resolved': { title: () => m.settings_notif_report(), hint: () => m.settings_notif_report_hint() },
  'milestone.reached': { title: () => m.settings_notif_milestone(), hint: () => m.settings_notif_milestone_hint() },
  'badge.awarded': { title: () => m.settings_notif_badge(), hint: () => m.settings_notif_badge_hint() },
  'award.won': { title: () => m.settings_notif_award(), hint: () => m.settings_notif_award_hint() },
  'jam.phase': { title: () => m.settings_notif_jam(), hint: () => m.settings_notif_jam_hint() },
  'system.announcement': {
    title: () => m.settings_notif_announcement(),
    hint: () => m.settings_notif_announcement_hint(),
  },
};

function frequencyLabel(value: EmailFrequency): string {
  switch (value) {
    case 'instant':
      return m.settings_email_instant();
    case 'daily':
      return m.settings_email_daily();
    case 'weekly':
      return m.settings_email_weekly();
    default:
      return m.settings_email_off();
  }
}

const FREQUENCIES: readonly EmailFrequency[] = ['instant', 'daily', 'weekly', 'off'];

function toRows(items: readonly NotificationPreferenceDTO[]): Map<NotificationType, Row> {
  return new Map(items.map((item) => [item.type, { ...item }]));
}

export function NotificationsScreen() {
  const queryClient = useQueryClient();
  const { data } = useSuspenseQuery(preferencesQuery);
  const saved = useMemo(() => toRows(data), [data]);
  const [rows, setRows] = useState(() => toRows(data));
  const [saving, setSaving] = useState(false);

  const changed = useMemo(
    () =>
      [...rows.values()].filter((row) => {
        const before = saved.get(row.type);
        return !before || before.inApp !== row.inApp || before.email !== row.email;
      }),
    [rows, saved],
  );
  const isDefault = [...rows.values()].every(
    (row) => row.email === DEFAULTS[row.type].email && (!row.inAppAvailable || row.inApp === DEFAULTS[row.type].inApp),
  );

  const set = (type: NotificationType, patch: Partial<Row>) =>
    setRows((current) => {
      const next = new Map(current);
      const row = next.get(type);
      if (row) next.set(type, { ...row, ...patch });
      return next;
    });

  const restoreDefaults = () =>
    setRows((current) => {
      const next = new Map(current);
      for (const [type, row] of next) {
        next.set(type, {
          ...row,
          email: DEFAULTS[type].email,
          inApp: row.inAppAvailable ? DEFAULTS[type].inApp : row.inApp,
        });
      }
      return next;
    });

  const submit = async () => {
    if (changed.length === 0) return;
    setSaving(true);
    try {
      const result = await settingsApi.updatePreferences(
        changed.map((row) => ({ type: row.type, inApp: row.inApp, email: row.email })),
      );
      queryClient.setQueryData(settingsKeys.preferences, result.items);
      setRows(toRows(result.items));
      notify.success(m.settings_notif_saved());
    } catch (failure) {
      notify.error(m.settings_save_failed(), { description: failureDescription(failure) });
    } finally {
      setSaving(false);
    }
  };

  return (
    <SettingsPage section="notifications">
      <SettingsCard
        id="notifications-matrix"
        title={m.settings_notif_matrix_title()}
        description={m.settings_notif_matrix_text()}
        onSubmit={submit}
        dirty={changed.length > 0}
        saving={saving}
        onReset={() => setRows(toRows(data))}
      >
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            icon={<Icon icon={RotateCcw} size={16} />}
            disabled={isDefault}
            onClick={restoreDefaults}
          >
            {m.settings_notif_defaults()}
          </Button>
        </div>
        {GROUPS.map((group) => {
          const groupRows = group.types.map((type) => rows.get(type)).filter((row): row is Row => row !== undefined);
          if (groupRows.length === 0) return null;
          return (
            <table key={group.id} className="w-full border-collapse text-sm">
              <caption className="pb-2 text-start text-base font-semibold text-fg">{group.title()}</caption>
              <thead className="sr-only md:not-sr-only">
                <tr className="border-b border-border text-xs text-fg-muted">
                  <th scope="col" className="py-2 text-start font-medium">
                    {m.settings_notif_col_signal()}
                  </th>
                  <th scope="col" className="w-28 py-2 text-start font-medium">
                    {m.settings_notif_col_app()}
                  </th>
                  <th scope="col" className="w-44 py-2 text-start font-medium">
                    {m.settings_notif_col_email()}
                  </th>
                </tr>
              </thead>
              <tbody>
                {groupRows.map((row) => {
                  const copy = COPY[row.type];
                  const title = copy.title();
                  return (
                    <tr
                      key={row.type}
                      className="grid grid-cols-2 gap-x-4 gap-y-2 border-b border-border py-3 last:border-b-0 md:table-row"
                    >
                      <th scope="row" className="col-span-2 text-start font-normal md:py-3 md:pe-4">
                        <span className="block font-semibold text-fg">{title}</span>
                        <span className="block text-xs text-fg-muted">{copy.hint()}</span>
                        {row.type === 'mod.status_changed' ? (
                          <span className="mt-1 block text-xs text-fg-subtle">{m.settings_notif_removal_note()}</span>
                        ) : null}
                      </th>
                      <td className="md:py-3">
                        {row.inAppAvailable ? (
                          <Switch
                            label={
                              <>
                                <span className="md:sr-only">{m.settings_notif_col_app()}</span>
                                <span className="sr-only"> · {title}</span>
                              </>
                            }
                            checked={row.inApp}
                            onCheckedChange={(checked) => set(row.type, { inApp: checked })}
                          />
                        ) : (
                          <span className="text-xs text-fg-subtle">{m.settings_notif_email_only()}</span>
                        )}
                      </td>
                      <td className="md:py-3">
                        <Select<EmailFrequency>
                          label={`${m.settings_notif_col_email()} · ${title}`}
                          hideLabel
                          size="sm"
                          value={row.email}
                          onValueChange={(value) => value && set(row.type, { email: value })}
                          options={FREQUENCIES.map((value) => ({ value, label: frequencyLabel(value) }))}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })}
      </SettingsCard>
    </SettingsPage>
  );
}
