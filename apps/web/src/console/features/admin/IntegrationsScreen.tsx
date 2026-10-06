/**
 * `/moderation/admin/integrations` (PLAN §7.4 «ajustes: webhooks de Discord»): the Discord channels the
 * site announces to (new mods, new versions, Mod of the Week, 10 k milestones), up to 10. Webhook
 * URLs are credentials: they are masked until revealed and never logged. Beta (`beta.sotf-mods.com`)
 * events are left out unless a hook opts in.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Checkbox } from '@sotf/ui/checkbox';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Switch } from '@sotf/ui/switch';
import { Eye, EyeOff, Plus, Trash2, Webhook } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { ADMIN_LIMITS, DISCORD_EVENTS, type DiscordEvent } from './constants.ts';
import {
  asArray,
  asBoolean,
  asRecord,
  asString,
  rowId,
  SettingFooter,
  useSettingDraft,
  useUnsavedGuard,
} from './setting-draft.tsx';
import { AdminHeader, Panel } from './shared.tsx';

interface HookRow {
  id: string;
  name: string;
  url: string;
  events: DiscordEvent[];
  excludeBeta: boolean;
}

function isEvent(value: unknown): value is DiscordEvent {
  return typeof value === 'string' && (DISCORD_EVENTS as readonly string[]).includes(value);
}

const normalizeHooks = (value: unknown): HookRow[] =>
  asArray(value).map((raw) => {
    const entry = asRecord(raw);
    return {
      id: rowId(),
      name: asString(entry.name),
      url: asString(entry.url),
      events: asArray(entry.events).filter(isEvent),
      excludeBeta: asBoolean(entry.excludeBeta, true),
    };
  });
const serializeHooks = (rows: HookRow[]) =>
  rows.map((row) => ({
    name: row.name.trim(),
    url: row.url.trim(),
    events: DISCORD_EVENTS.filter((event) => row.events.includes(event)),
    excludeBeta: row.excludeBeta,
  }));

export function discordEventLabel(event: DiscordEvent): string {
  switch (event) {
    case 'mod.published':
      return m.admin_hooks_event_mod_published();
    default:
      return m.admin_hooks_event_version_published();
  }
}

type HookErrors = Partial<Record<'name' | 'url' | 'events', string>>;

export function IntegrationsScreen() {
  const state = useSettingDraft('discordWebhooks', normalizeHooks, serializeHooks, m.admin_hooks_saved());
  const [revealed, setRevealed] = useState<ReadonlySet<string>>(new Set());
  useUnsavedGuard(state.dirty);

  const names = state.draft.map((row) => row.name.trim());
  const errorsOf = (row: HookRow): HookErrors => {
    const errors: HookErrors = {};
    if (!row.name.trim()) errors.name = m.admin_error_required();
    else if (names.filter((name) => name === row.name.trim()).length > 1) errors.name = m.admin_error_duplicate();
    if (!ADMIN_LIMITS.webhookUrl.test(row.url.trim())) errors.url = m.admin_hooks_error_url();
    if (row.events.length === 0) errors.events = m.admin_hooks_error_events();
    return errors;
  };
  const invalid = state.draft.some((row) => Object.keys(errorsOf(row)).length > 0);
  const update = (id: string, patch: Partial<HookRow>) =>
    state.setDraft((rows) => rows.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  const add = () => {
    const id = rowId();
    state.setDraft((rows) => [...rows, { id, name: '', url: '', events: [...DISCORD_EVENTS], excludeBeta: true }]);
    setRevealed((previous) => new Set(previous).add(id));
  };
  const full = state.draft.length >= ADMIN_LIMITS.webhooksMax;

  return (
    <div className="grid gap-6">
      <AdminHeader
        title={m.admin_integrations_title()}
        description={m.admin_integrations_description()}
        actions={
          <Button icon={<Icon icon={Plus} size={18} />} disabled={full} onClick={add}>
            {m.admin_hooks_add()}
          </Button>
        }
      />
      <Panel title={m.admin_hooks_title()} description={m.admin_hooks_description({ max: ADMIN_LIMITS.webhooksMax })}>
        <form
          noValidate
          className="grid gap-4"
          onSubmit={(event: FormEvent) => {
            event.preventDefault();
            if (!invalid) void state.save();
          }}
        >
          {state.draft.length === 0 ? (
            <EmptyState
              icon={<Icon icon={Webhook} size={28} />}
              title={m.admin_hooks_empty_title()}
              description={m.admin_hooks_empty_text()}
              action={
                <Button icon={<Icon icon={Plus} size={18} />} onClick={add}>
                  {m.admin_hooks_add()}
                </Button>
              }
            />
          ) : (
            <ul className="grid gap-3">
              {state.draft.map((row) => {
                const errors = errorsOf(row);
                const shown = revealed.has(row.id);
                return (
                  <li key={row.id}>
                    <fieldset className="grid gap-3 rounded-md border border-border bg-raised p-3">
                      <legend className="px-1 text-sm font-semibold text-fg">
                        {row.name.trim() || m.admin_hooks_untitled()}
                      </legend>
                      <div className="grid gap-3 md:grid-cols-[1fr_2fr]">
                        <Field label={m.admin_hooks_name()} error={errors.name}>
                          <Input
                            value={row.name}
                            maxLength={ADMIN_LIMITS.webhookNameMax}
                            placeholder="#mod-releases"
                            onChange={(event) => update(row.id, { name: event.currentTarget.value })}
                          />
                        </Field>
                        <Field label={m.admin_hooks_url()} description={m.admin_hooks_url_hint()} error={errors.url}>
                          <Input
                            type={shown ? 'url' : 'password'}
                            value={row.url}
                            spellCheck={false}
                            autoComplete="off"
                            className="font-mono"
                            placeholder="https://discord.com/api/webhooks/…"
                            onChange={(event) => update(row.id, { url: event.currentTarget.value })}
                            end={
                              <button
                                type="button"
                                className="inline-flex size-8 items-center justify-center rounded-md text-fg-muted hover:bg-fg/8 hover:text-fg"
                                aria-label={shown ? m.admin_hooks_hide_url() : m.admin_hooks_show_url()}
                                aria-pressed={shown}
                                onClick={() =>
                                  setRevealed((previous) => {
                                    const next = new Set(previous);
                                    if (next.has(row.id)) next.delete(row.id);
                                    else next.add(row.id);
                                    return next;
                                  })
                                }
                              >
                                <Icon icon={shown ? EyeOff : Eye} size={16} />
                              </button>
                            }
                          />
                        </Field>
                      </div>
                      <fieldset className="grid gap-2">
                        <legend className="mb-1 text-sm font-medium text-fg">{m.admin_hooks_events()}</legend>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {DISCORD_EVENTS.map((event) => (
                            <Checkbox
                              key={event}
                              label={discordEventLabel(event)}
                              checked={row.events.includes(event)}
                              onCheckedChange={(checked) =>
                                update(row.id, {
                                  events: checked
                                    ? [...row.events, event]
                                    : row.events.filter((entry) => entry !== event),
                                })
                              }
                            />
                          ))}
                        </div>
                        {errors.events ? (
                          <p role="alert" className="text-xs font-medium text-danger">
                            {errors.events}
                          </p>
                        ) : null}
                      </fieldset>
                      <Switch
                        label={m.admin_hooks_exclude_beta()}
                        description={m.admin_hooks_exclude_beta_hint()}
                        checked={row.excludeBeta}
                        onCheckedChange={(excludeBeta) => update(row.id, { excludeBeta })}
                      />
                      <div>
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={<Icon icon={Trash2} size={16} />}
                          onClick={() => state.setDraft((rows) => rows.filter((entry) => entry.id !== row.id))}
                        >
                          {m.admin_hooks_remove()}
                        </Button>
                      </div>
                    </fieldset>
                  </li>
                );
              })}
            </ul>
          )}
          <SettingFooter state={state} disabled={invalid} />
        </form>
      </Panel>
    </div>
  );
}
