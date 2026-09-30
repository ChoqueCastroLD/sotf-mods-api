/**
 * Settings → Privacy (T0-14, T0-15): what others see of you — public activity (heatmap and feed),
 * survivor rank and XP, leaderboards and kits on the profile — and whether downloads are recorded
 * in your history. Saves with `PATCH /me/privacy` and `PATCH /me/settings`.
 */
import { localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Icon } from '@sotf/ui/icons';
import { Switch } from '@sotf/ui/switch';
import { useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { type Me, useMe } from '../../hooks/use-me.ts';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { patchMe, settingsApi } from './api.ts';
import { failureDescription } from './errors.ts';
import { SettingsCard, SettingsPage } from './layout.tsx';

type Privacy = Me['privacy'];

export function PrivacyScreen() {
  const me = useMe();
  return (
    <SettingsPage section="privacy">
      <a
        href={localizePath(`/profile/${me.user.handle}`, activeLocale())}
        className="inline-flex items-center gap-1.5 justify-self-start text-sm font-semibold text-link"
      >
        <Icon icon={ExternalLink} size={16} />
        {m.settings_profile_view_public()}
      </a>
      <VisibilityCard key={JSON.stringify(me.privacy)} privacy={me.privacy} />
      <HistoryCard key={String(me.settings.downloadHistory)} enabled={me.settings.downloadHistory} />
      <SettingsCard
        id="privacy-data"
        title={m.settings_privacy_data_title()}
        description={m.settings_privacy_data_text()}
      >
        <div className="flex flex-wrap gap-3 text-sm">
          <Link to="/settings/data" className="font-semibold text-link">
            {m.settings_privacy_data_link()}
          </Link>
          <a href={localizePath('/privacy', activeLocale())} className="font-semibold text-link">
            {m.settings_privacy_policy_link()}
          </a>
        </div>
      </SettingsCard>
    </SettingsPage>
  );
}

function VisibilityCard({ privacy }: { privacy: Privacy }) {
  const queryClient = useQueryClient();
  const [values, setValues] = useState<Privacy>(privacy);
  const [saving, setSaving] = useState(false);
  const dirty = (Object.keys(privacy) as (keyof Privacy)[]).some((key) => values[key] !== privacy[key]);

  const submit = async () => {
    setSaving(true);
    try {
      const next = await settingsApi.updatePrivacy(values);
      patchMe(queryClient, (me) => ({ ...me, privacy: next }));
      notify.success(m.settings_privacy_saved());
    } catch (failure) {
      notify.error(m.settings_save_failed(), { description: failureDescription(failure) });
    } finally {
      setSaving(false);
    }
  };

  // The switches say what is *shown*; the API stores what is hidden.
  const toggle = (key: keyof Privacy) => (shown: boolean) => setValues((current) => ({ ...current, [key]: !shown }));

  return (
    <SettingsCard
      id="privacy-visibility"
      title={m.settings_visibility_title()}
      description={m.settings_visibility_text()}
      onSubmit={submit}
      dirty={dirty}
      saving={saving}
      onReset={() => setValues(privacy)}
    >
      <Switch
        label={m.settings_show_activity()}
        description={m.settings_show_activity_hint()}
        checked={!values.hideActivity}
        onCheckedChange={toggle('hideActivity')}
      />
      <Switch
        label={m.settings_show_rank()}
        description={m.settings_show_rank_hint()}
        checked={!values.hideRank}
        onCheckedChange={toggle('hideRank')}
      />
      <Switch
        label={m.settings_show_leaderboards()}
        description={m.settings_show_leaderboards_hint()}
        checked={!values.hideFromLeaderboards}
        onCheckedChange={toggle('hideFromLeaderboards')}
      />
      <Switch
        label={m.settings_show_kits()}
        description={m.settings_show_kits_hint()}
        checked={!values.hideKits}
        onCheckedChange={toggle('hideKits')}
      />
    </SettingsCard>
  );
}

function HistoryCard({ enabled }: { enabled: boolean }) {
  const queryClient = useQueryClient();
  const [value, setValue] = useState(enabled);
  const [saving, setSaving] = useState(false);

  const submit = async () => {
    setSaving(true);
    try {
      const settings = await settingsApi.updateSettings({ downloadHistory: value });
      patchMe(queryClient, (me) => ({ ...me, settings }));
      void queryClient.invalidateQueries({ queryKey: ['me', 'downloads'] });
      notify.success(value ? m.settings_history_on_saved() : m.settings_history_off_saved());
    } catch (failure) {
      notify.error(m.settings_save_failed(), { description: failureDescription(failure) });
    } finally {
      setSaving(false);
    }
  };

  return (
    <SettingsCard
      id="privacy-history"
      title={m.settings_history_title()}
      description={m.settings_history_text()}
      onSubmit={submit}
      dirty={value !== enabled}
      saving={saving}
      onReset={() => setValue(enabled)}
    >
      <Switch label={m.settings_history_switch()} checked={value} onCheckedChange={setValue} />
      <Link to="/me/downloads" className="justify-self-start text-sm font-semibold text-link">
        {m.settings_history_link()}
      </Link>
    </SettingsCard>
  );
}
