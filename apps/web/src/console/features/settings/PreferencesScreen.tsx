/**
 * Settings → Preferences (research/03 §6.11, T0-30): language and number format, theme (Night ·
 * Day · System), density, reduced-motion override, keyboard shortcuts, «Did it work?» prompts and
 * the NSFW opt-in (confirming you are an adult; off by default). Every card saves on its own
 * (`PATCH /me/settings`); language, theme, density and motion apply at once in this browser.
 */
import { isLocale, LOCALE_INFO, LOCALES, type Locale, negotiateLocale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Checkbox } from '@sotf/ui/checkbox';
import { Dialog } from '@sotf/ui/dialog';
import { Icon } from '@sotf/ui/icons';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { Select } from '@sotf/ui/select';
import { Switch } from '@sotf/ui/switch';
import { useQueryClient } from '@tanstack/react-query';
import { Eye, EyeOff, Laptop, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useConsoleLocale } from '../../hooks/use-console-locale.ts';
import { type Me, useMe } from '../../hooks/use-me.ts';
import { notify } from '../../lib/notify.ts';
import { patchMe, type SettingsUpdate, settingsApi } from './api.ts';
import { applyDisplayPreferences } from './display.ts';
import { failureDescription } from './errors.ts';
import { localDate } from './format.ts';
import { SettingsCard, SettingsPage } from './layout.tsx';

type Settings = Me['settings'];
const BROWSER = 'browser';

function useSaveSettings() {
  const queryClient = useQueryClient();
  return async (body: SettingsUpdate, success: string): Promise<Settings | null> => {
    try {
      const settings = await settingsApi.updateSettings(body);
      patchMe(queryClient, (me) => ({ ...me, settings }));
      applyDisplayPreferences(settings);
      notify.success(success);
      return settings;
    } catch (failure) {
      notify.error(m.settings_save_failed(), { description: failureDescription(failure) });
      return null;
    }
  };
}

export function PreferencesScreen() {
  const me = useMe();
  return (
    <SettingsPage section="preferences">
      <LanguageCard key={`lang-${me.settings.locale}-${me.settings.numberFormat}`} settings={me.settings} />
      <AppearanceCard
        key={`look-${me.settings.theme}-${me.settings.density}-${String(me.settings.reducedMotion)}`}
        settings={me.settings}
      />
      <BehaviourCard key={`behaviour-${me.settings.keyboardShortcuts}`} settings={me.settings} />
      <NsfwCard settings={me.settings} />
    </SettingsPage>
  );
}

function LanguageCard({ settings }: { settings: Settings }) {
  const save = useSaveSettings();
  const { setLocale } = useConsoleLocale();
  const [locale, setLocaleValue] = useState<string>(settings.locale ?? BROWSER);
  const [numberFormat, setNumberFormat] = useState(settings.numberFormat);
  const [saving, setSaving] = useState(false);
  const dirty = locale !== (settings.locale ?? BROWSER) || numberFormat !== settings.numberFormat;

  const submit = async () => {
    setSaving(true);
    const chosen: Locale | null = isLocale(locale) ? locale : null;
    const saved = await save({ locale: chosen, numberFormat }, m.settings_language_saved());
    setSaving(false);
    if (saved) setLocale(chosen ?? negotiateLocale(navigator.languages) ?? 'en');
  };

  return (
    <SettingsCard
      id="preferences-language"
      title={m.settings_language_title()}
      description={m.settings_language_text()}
      onSubmit={submit}
      dirty={dirty}
      saving={saving}
      onReset={() => {
        setLocaleValue(settings.locale ?? BROWSER);
        setNumberFormat(settings.numberFormat);
      }}
    >
      <Select
        label={m.settings_language_label()}
        value={locale}
        onValueChange={(value) => value && setLocaleValue(value)}
        options={[
          { value: BROWSER, label: m.settings_language_browser() },
          ...LOCALES.map((code) => ({
            value: code,
            label: (
              <span lang={LOCALE_INFO[code].tag}>
                {LOCALE_INFO[code].endonym}
                <span className="text-fg-muted"> · {LOCALE_INFO[code].englishName}</span>
              </span>
            ),
            textValue: LOCALE_INFO[code].endonym,
          })),
        ]}
      />
      <RadioCardGroup<Settings['numberFormat']>
        legend={m.settings_number_format()}
        value={numberFormat}
        onValueChange={setNumberFormat}
        columns={2}
        options={[
          { value: 'compact', title: m.settings_number_compact(), description: m.settings_number_compact_hint() },
          { value: 'full', title: m.settings_number_full(), description: m.settings_number_full_hint() },
        ]}
      />
    </SettingsCard>
  );
}

type Motion = 'system' | 'reduce' | 'full';

function AppearanceCard({ settings }: { settings: Settings }) {
  const save = useSaveSettings();
  const initialMotion: Motion = settings.reducedMotion === null ? 'system' : settings.reducedMotion ? 'reduce' : 'full';
  const [theme, setTheme] = useState(settings.theme);
  const [density, setDensity] = useState(settings.density);
  const [motion, setMotion] = useState<Motion>(initialMotion);
  const [saving, setSaving] = useState(false);
  const dirty = theme !== settings.theme || density !== settings.density || motion !== initialMotion;

  const submit = async () => {
    setSaving(true);
    await save(
      { theme, density, reducedMotion: motion === 'system' ? null : motion === 'reduce' },
      m.settings_appearance_saved(),
    );
    setSaving(false);
  };

  return (
    <SettingsCard
      id="preferences-appearance"
      title={m.settings_appearance_title()}
      description={m.settings_appearance_text()}
      onSubmit={submit}
      dirty={dirty}
      saving={saving}
      onReset={() => {
        setTheme(settings.theme);
        setDensity(settings.density);
        setMotion(initialMotion);
      }}
    >
      <RadioCardGroup<Settings['theme']>
        legend={m.settings_theme()}
        value={theme}
        onValueChange={setTheme}
        columns={3}
        options={[
          { value: 'dark', title: m.settings_theme_night(), icon: <Icon icon={Moon} size={18} /> },
          { value: 'light', title: m.settings_theme_day(), icon: <Icon icon={Sun} size={18} /> },
          { value: 'system', title: m.settings_theme_system(), icon: <Icon icon={Laptop} size={18} /> },
        ]}
      />
      <RadioCardGroup<Settings['density']>
        legend={m.settings_density()}
        value={density}
        onValueChange={setDensity}
        columns={2}
        options={[
          {
            value: 'comfortable',
            title: m.settings_density_comfortable(),
            description: m.settings_density_comfortable_hint(),
          },
          { value: 'compact', title: m.settings_density_compact(), description: m.settings_density_compact_hint() },
        ]}
      />
      <RadioCardGroup<Motion>
        legend={m.settings_motion()}
        value={motion}
        onValueChange={setMotion}
        columns={3}
        options={[
          { value: 'system', title: m.settings_motion_system(), description: m.settings_motion_system_hint() },
          { value: 'reduce', title: m.settings_motion_reduce(), description: m.settings_motion_reduce_hint() },
          { value: 'full', title: m.settings_motion_full(), description: m.settings_motion_full_hint() },
        ]}
      />
    </SettingsCard>
  );
}

function BehaviourCard({ settings }: { settings: Settings }) {
  const save = useSaveSettings();
  const [shortcuts, setShortcuts] = useState(settings.keyboardShortcuts);
  const [saving, setSaving] = useState(false);
  const dirty = shortcuts !== settings.keyboardShortcuts;

  const submit = async () => {
    setSaving(true);
    await save({ keyboardShortcuts: shortcuts }, m.settings_behaviour_saved());
    setSaving(false);
  };

  return (
    <SettingsCard
      id="preferences-behaviour"
      title={m.settings_behaviour_title()}
      onSubmit={submit}
      dirty={dirty}
      saving={saving}
      onReset={() => {
        setShortcuts(settings.keyboardShortcuts);
      }}
    >
      <Switch
        label={m.settings_shortcuts()}
        description={m.settings_shortcuts_hint()}
        checked={shortcuts}
        onCheckedChange={setShortcuts}
      />
    </SettingsCard>
  );
}

function NsfwCard({ settings }: { settings: Settings }) {
  const save = useSaveSettings();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [adult, setAdult] = useState(false);
  const [saving, setSaving] = useState(false);

  const turnOff = async () => {
    setSaving(true);
    await save({ nsfwOptIn: false }, m.settings_nsfw_off_saved());
    setSaving(false);
  };

  const turnOn = async () => {
    if (!adult) return;
    setSaving(true);
    const saved = await save({ nsfwOptIn: true, confirmAdult: true }, m.settings_nsfw_on_saved());
    setSaving(false);
    if (saved) {
      setConfirmOpen(false);
      setAdult(false);
    }
  };

  return (
    <SettingsCard id="preferences-nsfw" title={m.settings_nsfw_title()} description={m.settings_nsfw_text()}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {settings.nsfwOptIn ? (
            <Badge variant="warning" icon={<Icon icon={Eye} size={12} />}>
              {m.settings_nsfw_status_on()}
            </Badge>
          ) : (
            <Badge variant="neutral" icon={<Icon icon={EyeOff} size={12} />}>
              {m.settings_nsfw_status_off()}
            </Badge>
          )}
          {settings.nsfwOptIn && settings.nsfwConfirmedAt ? (
            <span className="text-xs text-fg-muted">
              {m.settings_nsfw_confirmed_on({ date: localDate(settings.nsfwConfirmedAt) })}
            </span>
          ) : null}
        </div>
        {settings.nsfwOptIn ? (
          <Button variant="secondary" loading={saving} onClick={() => void turnOff()}>
            {m.settings_nsfw_hide()}
          </Button>
        ) : (
          <Button variant="secondary" onClick={() => setConfirmOpen(true)}>
            {m.settings_nsfw_show()}
          </Button>
        )}
      </div>
      <Dialog
        open={confirmOpen}
        onOpenChange={(open) => {
          setConfirmOpen(open);
          if (!open) setAdult(false);
        }}
        title={m.settings_nsfw_confirm_title()}
        description={m.settings_nsfw_confirm_text()}
        footer={
          <>
            <Button variant="ghost" onClick={() => setConfirmOpen(false)}>
              {m.settings_cancel()}
            </Button>
            <Button loading={saving} disabled={!adult} onClick={() => void turnOn()}>
              {m.settings_nsfw_confirm()}
            </Button>
          </>
        }
      >
        <Checkbox label={m.settings_nsfw_adult()} checked={adult} onCheckedChange={setAdult} />
      </Dialog>
    </SettingsCard>
  );
}
