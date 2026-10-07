/**
 * `/moderation/admin/settings` (PLAN §7.4 «ajustes: límites, feature flags»): the site settings that
 * are not integrations — feature flags, rate-limit overrides, ads (AdSense client and slots) and
 * the moderation reason templates used by Ranger Station (`SiteSetting.moderationTemplates`,
 * i18n). Each panel saves on its own; leaving with unsaved panels asks first.
 */

import { RATE_LIMITS, type RateLimitBucket } from '@sotf/contracts/endpoint';
import { LOCALE_INFO, type Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Switch } from '@sotf/ui/switch';
import { Textarea } from '@sotf/ui/textarea';
import { Flag, Plus, ScrollText, Trash2 } from 'lucide-react';
import { type FormEvent, useCallback, useEffect, useId, useState } from 'react';
import { ADMIN_LIMITS, MODERATION_ACTIONS, type ModerationAction } from './constants.ts';
import {
  asArray,
  asBoolean,
  asNumber,
  asRecord,
  asString,
  rowId,
  SettingFooter,
  useSettingDraft,
} from './setting-draft.tsx';
import { AdminHeader, compactTexts, formatCount, LocalizedFields, type LocalizedTexts, Panel } from './shared.tsx';
import { UnsavedGuard } from './UnsavedGuard.tsx';

type DirtyReporter = (key: string, dirty: boolean) => void;

export function SettingsScreen() {
  const [dirty, setDirty] = useState<Record<string, boolean>>({});
  const report = useCallback<DirtyReporter>(
    (key, value) => setDirty((previous) => (previous[key] === value ? previous : { ...previous, [key]: value })),
    [],
  );
  return (
    <div className="grid gap-6">
      <UnsavedGuard dirty={Object.values(dirty).some(Boolean)} />
      <AdminHeader title={m.admin_settings_title()} description={m.admin_settings_description()} />
      <FeatureFlagsPanel onDirty={report} />
      <LimitsPanel onDirty={report} />
      <AdsPanel onDirty={report} />
      <TemplatesPanel onDirty={report} />
    </div>
  );
}

function useReportDirty(key: string, dirty: boolean, onDirty: DirtyReporter) {
  useEffect(() => onDirty(key, dirty), [key, dirty, onDirty]);
}

// -----------------------------------------------------------------------------------------------
// Feature flags
// -----------------------------------------------------------------------------------------------

interface FlagRow {
  id: string;
  key: string;
  enabled: boolean;
}

const normalizeFlags = (value: unknown): FlagRow[] =>
  Object.entries(asRecord(value))
    .map(([key, enabled]) => ({ id: rowId(), key, enabled: enabled === true }))
    .sort((a, b) => a.key.localeCompare(b.key));
const serializeFlags = (rows: FlagRow[]) => Object.fromEntries(rows.map((row) => [row.key.trim(), row.enabled]));

function FeatureFlagsPanel({ onDirty }: { onDirty: DirtyReporter }) {
  const state = useSettingDraft('featureFlags', normalizeFlags, serializeFlags, m.admin_flags_saved());
  const [newKey, setNewKey] = useState('');
  const [newError, setNewError] = useState<string | undefined>();
  useReportDirty('featureFlags', state.dirty, onDirty);
  const keys = state.draft.map((row) => row.key.trim());
  const invalid = state.draft.some((row) => !ADMIN_LIMITS.flagKey.test(row.key.trim()));

  const add = () => {
    const key = newKey.trim();
    if (!ADMIN_LIMITS.flagKey.test(key)) return setNewError(m.admin_flags_error_key());
    if (keys.includes(key)) return setNewError(m.admin_error_duplicate());
    state.setDraft((rows) => [...rows, { id: rowId(), key, enabled: false }]);
    setNewKey('');
    setNewError(undefined);
  };

  return (
    <Panel title={m.admin_flags_title()} description={m.admin_flags_description()}>
      <form
        noValidate
        className="grid gap-4"
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          if (!invalid) void state.save();
        }}
      >
        {state.draft.length === 0 ? (
          <EmptyState icon={<Icon icon={Flag} size={28} />} title={m.admin_flags_empty()} />
        ) : (
          <ul className="grid gap-2">
            {state.draft.map((row) => (
              <li key={row.id} className="flex items-center gap-3 rounded-md border border-border bg-raised px-3 py-2">
                <Switch
                  className="flex-1"
                  label={<span className="font-mono text-sm">{row.key}</span>}
                  checked={row.enabled}
                  onCheckedChange={(enabled) =>
                    state.setDraft((rows) => rows.map((entry) => (entry.id === row.id ? { ...entry, enabled } : entry)))
                  }
                />
                <Button
                  variant="icon"
                  size="sm"
                  aria-label={m.admin_remove_named({ name: row.key })}
                  onClick={() => state.setDraft((rows) => rows.filter((entry) => entry.id !== row.id))}
                >
                  <Icon icon={Trash2} size={16} />
                </Button>
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap items-end gap-2">
          <Field
            label={m.admin_flags_new()}
            description={m.admin_flags_new_hint()}
            error={newError}
            className="min-w-60 flex-1"
          >
            <Input
              value={newKey}
              maxLength={60}
              spellCheck={false}
              autoComplete="off"
              className="font-mono"
              placeholder="explore.newFilters"
              onChange={(event) => setNewKey(event.currentTarget.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  add();
                }
              }}
            />
          </Field>
          <Button variant="secondary" icon={<Icon icon={Plus} size={16} />} onClick={add}>
            {m.admin_action_add()}
          </Button>
        </div>
        <SettingFooter state={state} disabled={invalid} />
      </form>
    </Panel>
  );
}

// -----------------------------------------------------------------------------------------------
// Rate limits
// -----------------------------------------------------------------------------------------------

interface LimitRow {
  id: string;
  bucket: string;
  max: string;
  windowSeconds: string;
}

const normalizeLimits = (value: unknown): LimitRow[] =>
  Object.entries(asRecord(value))
    .map(([bucket, raw]) => {
      const entry = asRecord(raw);
      return {
        id: rowId(),
        bucket,
        max: String(asNumber(entry.max, 1)),
        windowSeconds: String(asNumber(entry.windowSeconds, 60)),
      };
    })
    .sort((a, b) => a.bucket.localeCompare(b.bucket));
const serializeLimits = (rows: LimitRow[]) =>
  Object.fromEntries(
    rows.map((row) => [row.bucket.trim(), { max: Number(row.max), windowSeconds: Number(row.windowSeconds) }]),
  );

const BUCKETS = Object.keys(RATE_LIMITS) as RateLimitBucket[];

function defaultOf(bucket: string): string | null {
  if (!(bucket in RATE_LIMITS)) return null;
  const limit = RATE_LIMITS[bucket as RateLimitBucket];
  const [amount = '1', unit = 'minute'] = limit.window.split(' ');
  const unitSeconds = unit.startsWith('day')
    ? 86_400
    : unit.startsWith('hour')
      ? 3600
      : unit.startsWith('second')
        ? 1
        : 60;
  return m.admin_limits_default({ max: limit.max, seconds: Number(amount) * unitSeconds });
}

const positiveInt = (value: string) => /^\d{1,9}$/.test(value.trim()) && Number(value) > 0;

function LimitsPanel({ onDirty }: { onDirty: DirtyReporter }) {
  const listId = useId();
  const state = useSettingDraft('limits', normalizeLimits, serializeLimits, m.admin_limits_saved());
  useReportDirty('limits', state.dirty, onDirty);
  const buckets = state.draft.map((row) => row.bucket.trim());
  const rowError = (row: LimitRow): string | undefined => {
    if (!row.bucket.trim()) return m.admin_error_required();
    if (buckets.filter((bucket) => bucket === row.bucket.trim()).length > 1) return m.admin_error_duplicate();
    if (!positiveInt(row.max) || !positiveInt(row.windowSeconds)) return m.admin_limits_error_number();
    return undefined;
  };
  const invalid = state.draft.some((row) => rowError(row) !== undefined);
  const update = (id: string, patch: Partial<LimitRow>) =>
    state.setDraft((rows) => rows.map((row) => (row.id === id ? { ...row, ...patch } : row)));

  return (
    <Panel title={m.admin_limits_title()} description={m.admin_limits_description()}>
      <form
        noValidate
        className="grid gap-4"
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          if (!invalid) void state.save();
        }}
      >
        <datalist id={listId}>
          {BUCKETS.map((bucket) => (
            <option key={bucket} value={bucket} />
          ))}
        </datalist>
        {state.draft.length === 0 ? (
          <p className="text-sm text-fg-muted">{m.admin_limits_empty()}</p>
        ) : (
          <ul className="grid gap-3">
            {state.draft.map((row) => {
              const error = rowError(row);
              const fallback = defaultOf(row.bucket.trim());
              return (
                <li key={row.id} className="grid gap-2 rounded-md border border-border bg-raised p-3">
                  <div className="grid items-end gap-3 sm:grid-cols-[2fr_1fr_1fr_auto]">
                    <Field label={m.admin_limits_bucket()} description={fallback ?? undefined}>
                      <Input
                        list={listId}
                        value={row.bucket}
                        maxLength={60}
                        spellCheck={false}
                        className="font-mono"
                        onChange={(event) => update(row.id, { bucket: event.currentTarget.value })}
                      />
                    </Field>
                    <Field label={m.admin_limits_max()}>
                      <Input
                        inputMode="numeric"
                        value={row.max}
                        onChange={(event) => update(row.id, { max: event.currentTarget.value })}
                      />
                    </Field>
                    <Field label={m.admin_limits_window()}>
                      <Input
                        inputMode="numeric"
                        value={row.windowSeconds}
                        onChange={(event) => update(row.id, { windowSeconds: event.currentTarget.value })}
                      />
                    </Field>
                    <Button
                      variant="icon"
                      aria-label={m.admin_remove_named({ name: row.bucket || m.admin_limits_bucket() })}
                      onClick={() => state.setDraft((rows) => rows.filter((entry) => entry.id !== row.id))}
                    >
                      <Icon icon={Trash2} size={16} />
                    </Button>
                  </div>
                  {error ? (
                    <p role="alert" className="text-xs font-medium text-danger">
                      {error}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
        <div>
          <Button
            variant="secondary"
            icon={<Icon icon={Plus} size={16} />}
            onClick={() =>
              state.setDraft((rows) => [...rows, { id: rowId(), bucket: '', max: '10', windowSeconds: '60' }])
            }
          >
            {m.admin_limits_add()}
          </Button>
        </div>
        <SettingFooter state={state} disabled={invalid} />
      </form>
    </Panel>
  );
}

// -----------------------------------------------------------------------------------------------
// Ads
// -----------------------------------------------------------------------------------------------

interface AdsDraft {
  enabled: boolean;
  clientId: string;
  slots: Array<{ id: string; name: string; slot: string }>;
}

const normalizeAds = (value: unknown): AdsDraft => {
  const record = asRecord(value);
  return {
    enabled: asBoolean(record.enabled, false),
    clientId: asString(record.clientId),
    slots: Object.entries(asRecord(record.slots)).map(([name, slot]) => ({ id: rowId(), name, slot: asString(slot) })),
  };
};
const serializeAds = (draft: AdsDraft) => ({
  enabled: draft.enabled,
  clientId: draft.clientId.trim() || null,
  slots: Object.fromEntries(draft.slots.map((row) => [row.name.trim(), row.slot.trim()])),
});

function AdsPanel({ onDirty }: { onDirty: DirtyReporter }) {
  const state = useSettingDraft('ads', normalizeAds, serializeAds, m.admin_ads_saved());
  useReportDirty('ads', state.dirty, onDirty);
  const { draft } = state;
  const clientError =
    draft.clientId.trim() && !ADMIN_LIMITS.adsClientId.test(draft.clientId.trim())
      ? m.admin_ads_error_client()
      : draft.enabled && !draft.clientId.trim()
        ? m.admin_ads_error_client_required()
        : undefined;
  const names = draft.slots.map((row) => row.name.trim());
  const slotError = (row: AdsDraft['slots'][number]) => {
    if (!row.name.trim()) return m.admin_error_required();
    if (names.filter((name) => name === row.name.trim()).length > 1) return m.admin_error_duplicate();
    if (!ADMIN_LIMITS.adsSlotId.test(row.slot.trim())) return m.admin_ads_error_slot();
    return undefined;
  };
  const invalid = clientError !== undefined || draft.slots.some((row) => slotError(row) !== undefined);
  const updateSlot = (id: string, patch: Partial<AdsDraft['slots'][number]>) =>
    state.setDraft((previous) => ({
      ...previous,
      slots: previous.slots.map((row) => (row.id === id ? { ...row, ...patch } : row)),
    }));

  return (
    <Panel title={m.admin_ads_title()} description={m.admin_ads_description()}>
      <form
        noValidate
        className="grid gap-4"
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          if (!invalid) void state.save();
        }}
      >
        <Switch
          label={m.admin_ads_enabled()}
          description={m.admin_ads_enabled_hint()}
          checked={draft.enabled}
          onCheckedChange={(enabled) => state.setDraft((previous) => ({ ...previous, enabled }))}
        />
        <Field label={m.admin_ads_client()} description={m.admin_ads_client_hint()} error={clientError} optional>
          <Input
            value={draft.clientId}
            spellCheck={false}
            autoComplete="off"
            className="font-mono"
            placeholder="ca-pub-0000000000000000"
            onChange={(event) => {
              const clientId = event.currentTarget.value;
              state.setDraft((previous) => ({ ...previous, clientId }));
            }}
          />
        </Field>
        <fieldset className="grid gap-3">
          <legend className="mb-2 text-sm font-medium text-fg">{m.admin_ads_slots()}</legend>
          {draft.slots.length === 0 ? <p className="text-sm text-fg-muted">{m.admin_ads_slots_empty()}</p> : null}
          {draft.slots.map((row) => {
            const error = slotError(row);
            return (
              <div key={row.id} className="grid gap-1">
                <div className="grid items-end gap-3 sm:grid-cols-[1fr_1fr_auto]">
                  <Field label={m.admin_ads_slot_name()}>
                    <Input
                      value={row.name}
                      maxLength={60}
                      spellCheck={false}
                      placeholder="mod-sidebar"
                      onChange={(event) => updateSlot(row.id, { name: event.currentTarget.value })}
                    />
                  </Field>
                  <Field label={m.admin_ads_slot_id()}>
                    <Input
                      inputMode="numeric"
                      value={row.slot}
                      className="font-mono"
                      onChange={(event) => updateSlot(row.id, { slot: event.currentTarget.value })}
                    />
                  </Field>
                  <Button
                    variant="icon"
                    aria-label={m.admin_remove_named({ name: row.name || m.admin_ads_slot_name() })}
                    onClick={() =>
                      state.setDraft((previous) => ({
                        ...previous,
                        slots: previous.slots.filter((entry) => entry.id !== row.id),
                      }))
                    }
                  >
                    <Icon icon={Trash2} size={16} />
                  </Button>
                </div>
                {error ? (
                  <p role="alert" className="text-xs font-medium text-danger">
                    {error}
                  </p>
                ) : null}
              </div>
            );
          })}
          <div>
            <Button
              variant="secondary"
              icon={<Icon icon={Plus} size={16} />}
              onClick={() =>
                state.setDraft((previous) => ({
                  ...previous,
                  slots: [...previous.slots, { id: rowId(), name: '', slot: '' }],
                }))
              }
            >
              {m.admin_ads_add_slot()}
            </Button>
          </div>
        </fieldset>
        <SettingFooter state={state} disabled={invalid} />
      </form>
    </Panel>
  );
}

// -----------------------------------------------------------------------------------------------
// Moderation templates
// -----------------------------------------------------------------------------------------------

interface TemplateRow {
  id: string;
  key: string;
  action: ModerationAction;
  english: string;
  messages: LocalizedTexts;
}

const TEMPLATE_MESSAGE_MAX = 2000;

function isAction(value: unknown): value is ModerationAction {
  return typeof value === 'string' && (MODERATION_ACTIONS as readonly string[]).includes(value);
}

const normalizeTemplates = (value: unknown): TemplateRow[] =>
  asArray(value).map((raw) => {
    const entry = asRecord(raw);
    const messages = asRecord(entry.messages);
    const texts: LocalizedTexts = {};
    for (const [code, text] of Object.entries(messages)) {
      if (code !== 'en' && code in LOCALE_INFO && typeof text === 'string') texts[code as Locale] = text;
    }
    return {
      id: rowId(),
      key: asString(entry.key),
      action: isAction(entry.action) ? entry.action : 'reject',
      english: asString(messages.en),
      messages: texts,
    };
  });
const serializeTemplates = (rows: TemplateRow[]) =>
  rows.map((row) => ({
    key: row.key.trim(),
    action: row.action,
    messages: compactTexts({ ...row.messages, en: row.english }),
  }));

export function moderationActionLabel(action: ModerationAction): string {
  switch (action) {
    case 'approve':
      return m.admin_tpl_action_approve();
    case 'reject':
      return m.admin_tpl_action_reject();
    case 'request_changes':
      return m.admin_tpl_action_request_changes();
    case 'unlist':
      return m.admin_tpl_action_unlist();
    case 'remove':
      return m.admin_tpl_action_remove();
    default:
      return m.admin_tpl_action_restore();
  }
}

function TemplatesPanel({ onDirty }: { onDirty: DirtyReporter }) {
  const state = useSettingDraft('moderationTemplates', normalizeTemplates, serializeTemplates, m.admin_tpl_saved());
  const [filter, setFilter] = useState<ModerationAction | 'all'>('all');
  useReportDirty('moderationTemplates', state.dirty, onDirty);
  const keys = state.draft.map((row) => row.key.trim());
  const rowError = (row: TemplateRow): string | undefined => {
    if (!ADMIN_LIMITS.templateKey.test(row.key.trim())) return m.admin_tpl_error_key();
    if (keys.filter((key) => key === row.key.trim()).length > 1) return m.admin_error_duplicate();
    if (!row.english.trim()) return m.admin_tpl_error_message();
    return undefined;
  };
  const invalid = state.draft.some((row) => rowError(row) !== undefined);
  const visible = filter === 'all' ? state.draft : state.draft.filter((row) => row.action === filter);
  const update = (id: string, patch: Partial<TemplateRow>) =>
    state.setDraft((rows) => rows.map((row) => (row.id === id ? { ...row, ...patch } : row)));

  return (
    <Panel
      title={m.admin_tpl_title()}
      description={m.admin_tpl_description()}
      actions={
        <Button
          variant="secondary"
          size="sm"
          icon={<Icon icon={Plus} size={16} />}
          disabled={state.draft.length >= ADMIN_LIMITS.templatesMax}
          onClick={() => {
            state.setDraft((rows) => [
              ...rows,
              { id: rowId(), key: '', action: filter === 'all' ? 'reject' : filter, english: '', messages: {} },
            ]);
          }}
        >
          {m.admin_tpl_add()}
        </Button>
      }
    >
      <form
        noValidate
        className="grid grid-cols-[minmax(0,1fr)] gap-4"
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          if (!invalid) void state.save();
        }}
      >
        <Select<ModerationAction | 'all'>
          label={m.admin_tpl_filter()}
          value={filter}
          className="max-w-xs"
          onValueChange={(next) => setFilter(next ?? 'all')}
          options={[
            { value: 'all', label: m.admin_tpl_filter_all({ count: state.draft.length }) },
            ...MODERATION_ACTIONS.map((action) => ({
              value: action,
              label: `${moderationActionLabel(action)} (${formatCount(state.draft.filter((row) => row.action === action).length)})`,
            })),
          ]}
        />
        {invalid ? (
          <Banner tone="danger" title={m.admin_tpl_invalid_title()}>
            {m.admin_tpl_invalid_text()}
          </Banner>
        ) : null}
        {visible.length === 0 ? (
          <EmptyState icon={<Icon icon={ScrollText} size={28} />} title={m.admin_tpl_empty()} />
        ) : (
          <ul className="grid grid-cols-[minmax(0,1fr)] gap-2">
            {visible.map((row) => {
              const error = rowError(row);
              return (
                <li key={row.id}>
                  <details
                    className="group rounded-md border border-border bg-raised"
                    open={row.key === '' || undefined}
                  >
                    <summary className="flex min-h-11 cursor-pointer flex-wrap items-center gap-2 px-3 py-2 text-sm">
                      <span className="font-mono font-medium text-fg">{row.key || m.admin_tpl_untitled()}</span>
                      <span className="text-xs text-fg-muted">· {moderationActionLabel(row.action)}</span>
                      <span className="min-w-0 flex-1 truncate text-xs text-fg-muted">{row.english}</span>
                      {error ? <span className="text-xs font-medium text-danger">{error}</span> : null}
                    </summary>
                    <div className="grid gap-3 border-t border-border p-3">
                      <div className="grid gap-3 sm:grid-cols-2">
                        <Field label={m.admin_tpl_key()} description={m.admin_tpl_key_hint()}>
                          <Input
                            value={row.key}
                            maxLength={60}
                            spellCheck={false}
                            className="font-mono"
                            onChange={(event) => update(row.id, { key: event.currentTarget.value })}
                          />
                        </Field>
                        <Select<ModerationAction>
                          label={m.admin_tpl_action()}
                          value={row.action}
                          onValueChange={(next) => next && update(row.id, { action: next })}
                          options={MODERATION_ACTIONS.map((action) => ({
                            value: action,
                            label: moderationActionLabel(action),
                          }))}
                        />
                      </div>
                      <Field label={m.admin_tpl_message({ language: LOCALE_INFO.en.endonym })}>
                        <Textarea
                          lang="en"
                          value={row.english}
                          maxLength={TEMPLATE_MESSAGE_MAX}
                          minRows={2}
                          onChange={(event) => update(row.id, { english: event.currentTarget.value })}
                        />
                      </Field>
                      <LocalizedFields
                        label={m.admin_tpl_translations()}
                        values={row.messages}
                        maxLength={TEMPLATE_MESSAGE_MAX}
                        multiline
                        onChange={(messages) => update(row.id, { messages })}
                      />
                      <div>
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={<Icon icon={Trash2} size={16} />}
                          onClick={() => state.setDraft((rows) => rows.filter((entry) => entry.id !== row.id))}
                        >
                          {m.admin_tpl_remove()}
                        </Button>
                      </div>
                    </div>
                  </details>
                </li>
              );
            })}
          </ul>
        )}
        <SettingFooter state={state} disabled={invalid} />
      </form>
    </Panel>
  );
}
