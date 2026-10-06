/**
 * Settings → Privacy (T0-14, T0-15): whether downloads are recorded in your history and the links to your
 * data. Saves with `PATCH /me/settings`. The profile no longer has optional sections, so the old
 * visibility switches (`PATCH /me/privacy`) are not shown.
 */
import { localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Icon } from '@sotf/ui/icons';
import { Switch } from '@sotf/ui/switch';
import { useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useMe } from '../../hooks/use-me.ts';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { patchMe, settingsApi } from './api.ts';
import { failureDescription } from './errors.ts';
import { SettingsCard, SettingsPage } from './layout.tsx';

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
