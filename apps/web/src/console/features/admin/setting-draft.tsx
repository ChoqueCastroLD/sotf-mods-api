/**
 * Editing one `SiteSetting` (PLAN §7.4 «ajustes»): the stored value (or its default) normalised
 * into a typed draft, dirty tracking, save (`PUT /admin/settings/:key`, validated again by the
 * API against `SITE_SETTING_SCHEMAS`) and reset, plus the footer every settings form shares
 * («Last changed …», Discard, Save). Leaving the page with unsaved edits asks first.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { adminApi, settingQuery, storeSetting } from './api.ts';
import type { SiteSettingKey } from './constants.ts';
import { formatInstant, reportFailure } from './shared.tsx';

export interface SettingDraft<T> {
  draft: T;
  setDraft: (update: T | ((previous: T) => T)) => void;
  dirty: boolean;
  saving: boolean;
  updatedAt: string | null;
  save: (value?: T) => Promise<boolean>;
  reset: () => void;
}

/**
 * `normalize` turns the stored value into the draft shape (tolerating anything); `serialize` turns
 * the draft into the value sent to the API.
 */
export function useSettingDraft<T>(
  key: SiteSettingKey,
  normalize: (value: unknown) => T,
  serialize: (draft: T) => unknown,
  savedMessage: string,
): SettingDraft<T> {
  const queryClient = useQueryClient();
  const { data: setting } = useSuspenseQuery(settingQuery(key));
  const stored = useMemo(() => normalize(setting.value), [setting.value, normalize]);
  const [draft, setDraftState] = useState<T>(stored);
  const [saving, setSaving] = useState(false);
  const storedJson = JSON.stringify(serialize(stored));
  const dirty = JSON.stringify(serialize(draft)) !== storedJson;
  const lastStored = useRef(storedJson);

  // A newer stored value (another tab saved) replaces the draft when it is untouched.
  useEffect(() => {
    if (lastStored.current === storedJson) return;
    lastStored.current = storedJson;
    if (!saving) setDraftState(stored);
  }, [storedJson, stored, saving]);

  const save = async (value: T = draft): Promise<boolean> => {
    if (saving) return false;
    setSaving(true);
    try {
      const saved = storeSetting(queryClient, await adminApi.putSetting(key, serialize(value)));
      const next = normalize(saved.value);
      lastStored.current = JSON.stringify(serialize(next));
      setDraftState(next);
      notify.success(savedMessage);
      return true;
    } catch (error) {
      reportFailure(error, m.admin_settings_save_failed());
      return false;
    } finally {
      setSaving(false);
    }
  };

  return {
    draft,
    setDraft: (update) =>
      setDraftState((previous) => (typeof update === 'function' ? (update as (p: T) => T)(previous) : update)),
    dirty,
    saving,
    updatedAt: setting.updatedAt,
    save,
    reset: () => setDraftState(stored),
  };
}

export function SettingFooter<T>({ state, disabled }: { state: SettingDraft<T>; disabled?: boolean }) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-2 border-t border-border pt-4">
      <p className="me-auto text-xs text-fg-muted" aria-live="polite">
        {state.dirty
          ? m.admin_settings_unsaved()
          : state.updatedAt
            ? m.admin_settings_updated({ when: formatInstant(state.updatedAt) })
            : m.admin_settings_default()}
      </p>
      <Button variant="ghost" disabled={!state.dirty || state.saving} onClick={state.reset}>
        {m.admin_action_discard()}
      </Button>
      <Button type="submit" loading={state.saving} disabled={!state.dirty || disabled}>
        {m.admin_action_save()}
      </Button>
    </div>
  );
}

// -----------------------------------------------------------------------------------------------
// Tolerant readers of stored values
// -----------------------------------------------------------------------------------------------

export function asRecord(value: unknown): Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

export function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

export function asString(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}

export function asNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

export function asBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

/** Stable local ids for list rows being edited (React keys). */
let nextRowId = 0;
export function rowId(): string {
  nextRowId += 1;
  return `row-${nextRowId}`;
}
