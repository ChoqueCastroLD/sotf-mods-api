/**
 * Settings → Creator (research/03 §6.11 «CREATOR»): creator status (verified mark, spotlight tier),
 * support links (Ko-fi, Patreon… from the profile links, shown on the profile and next to each
 * mod), the default license for new mods and reply templates for comments and reviews.
 *
 * The license default and the templates have no server field yet (docs/backlog/WP-81.md): they
 * are kept in this browser under `CREATOR_DEFAULTS_KEY` (read by the publishing wizard) and the
 * card says so.
 */
import { localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { TierStamp } from '@sotf/ui/domain';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Textarea } from '@sotf/ui/textarea';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { BadgeCheck, Copy, ExternalLink, Plus, Trash2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { useMe } from '../../hooks/use-me.ts';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { storage } from '../../lib/storage.ts';
import { profileQuery } from './api.ts';
import { SettingsCard, SettingsPage } from './layout.tsx';

/** `localStorage` key of the creator defaults (shared with the publishing wizard). */
export const CREATOR_DEFAULTS_KEY = 'sotf_creator_defaults';

/** `MOD_LICENSES` of `@sotf/contracts/common` (mirrored: no Zod in the chunk). */
const LICENSES = ['all-rights-reserved', 'reupload-with-credit', 'mit', 'gpl-3.0', 'cc-by-4.0', 'other'] as const;
type License = (typeof LICENSES)[number];
const NONE = 'none';

const TEMPLATE_LIMITS = { max: 10, nameMax: 40, textMax: 1000 } as const;

export interface ReplyTemplate {
  id: string;
  name: string;
  text: string;
}

export interface CreatorDefaults {
  license: License | null;
  templates: ReplyTemplate[];
}

function isLicense(value: unknown): value is License {
  return typeof value === 'string' && (LICENSES as readonly string[]).includes(value);
}

/** Reads the creator defaults of this browser (tolerates missing or malformed data). */
export function readCreatorDefaults(): CreatorDefaults {
  try {
    const raw = JSON.parse(storage.get(CREATOR_DEFAULTS_KEY) ?? '{}') as Partial<CreatorDefaults>;
    const templates = Array.isArray(raw.templates)
      ? raw.templates
          .filter(
            (entry): entry is ReplyTemplate =>
              !!entry &&
              typeof entry.id === 'string' &&
              typeof entry.name === 'string' &&
              typeof entry.text === 'string',
          )
          .slice(0, TEMPLATE_LIMITS.max)
      : [];
    return { license: isLicense(raw.license) ? raw.license : null, templates };
  } catch {
    return { license: null, templates: [] };
  }
}

function writeCreatorDefaults(defaults: CreatorDefaults): void {
  storage.set(CREATOR_DEFAULTS_KEY, JSON.stringify(defaults));
}

function licenseLabel(license: License): string {
  switch (license) {
    case 'all-rights-reserved':
      return m.mod_license_all_rights_reserved();
    case 'reupload-with-credit':
      return m.mod_license_reupload_with_credit();
    case 'mit':
      return 'MIT';
    case 'gpl-3.0':
      return 'GPL-3.0';
    case 'cc-by-4.0':
      return 'CC BY 4.0';
    default:
      return m.mod_license_other();
  }
}

function newId(): string {
  return typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
}

export function CreatorScreen() {
  const me = useMe();
  const profile = useQuery(profileQuery(me.user.handle));
  const supportLinks = (profile.data?.links ?? []).filter((link) => link.kind === 'kofi' || link.kind === 'patreon');
  const tier = profile.data?.creatorTier ?? null;

  return (
    <SettingsPage section="creator">
      <SettingsCard id="creator-status" title={m.settings_creator_status_title()}>
        <div className="flex flex-wrap items-center gap-2">
          {me.user.verifiedCreator ? (
            <Badge variant="success" icon={<Icon icon={BadgeCheck} size={12} />}>
              {m.settings_creator_verified()}
            </Badge>
          ) : (
            <Badge variant="neutral">{m.settings_creator_not_verified()}</Badge>
          )}
          {tier ? (
            <DomainI18nBridge>
              <TierStamp tier={tier} size="sm" iconMode="inline" />
            </DomainI18nBridge>
          ) : null}
        </div>
        <p className="text-sm text-fg-muted">
          {me.user.verifiedCreator ? m.settings_creator_verified_text() : m.settings_creator_not_verified_text()}
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link to="/basecamp" className="font-semibold text-link">
            {m.settings_creator_basecamp()}
          </Link>
          <a href="/basecamp/badges" className="font-semibold text-link">
            {m.settings_creator_badges()}
          </a>
        </div>
      </SettingsCard>

      <SettingsCard id="creator-support" title={m.settings_support_title()} description={m.settings_support_text()}>
        {supportLinks.length > 0 ? (
          <ul className="grid gap-2">
            {supportLinks.map((link) => (
              <li key={`${link.kind}-${link.url}`}>
                <a
                  href={link.url}
                  rel="noopener noreferrer me"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold break-all text-link"
                >
                  <Icon icon={ExternalLink} size={14} />
                  {link.label ?? (link.kind === 'kofi' ? 'Ko-fi' : 'Patreon')} · {link.url}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-fg-muted">{m.settings_support_empty()}</p>
        )}
        <Link
          to="/settings/profile"
          hash="profile-links"
          className="justify-self-start text-sm font-semibold text-link"
        >
          {m.settings_support_edit()}
        </Link>
      </SettingsCard>

      <DefaultsCard />

      <p className="text-xs text-fg-muted">
        {m.settings_creator_policy()}{' '}
        <a href={localizePath('/content-policy', activeLocale())} className="font-semibold text-link">
          {m.settings_creator_policy_link()}
        </a>
      </p>
    </SettingsPage>
  );
}

function DefaultsCard() {
  const [saved, setSaved] = useState<CreatorDefaults>(() => readCreatorDefaults());
  const [license, setLicense] = useState<string>(saved.license ?? NONE);
  const [templates, setTemplates] = useState<ReplyTemplate[]>(saved.templates);
  const [submitted, setSubmitted] = useState(false);
  const firstNew = useRef<string | null>(null);

  const dirty =
    license !== (saved.license ?? NONE) ||
    JSON.stringify(templates.map((t) => [t.name.trim(), t.text.trim()])) !==
      JSON.stringify(saved.templates.map((t) => [t.name, t.text]));
  const invalid = templates.map((t) => ({
    name: t.name.trim() === '' || t.name.trim().length > TEMPLATE_LIMITS.nameMax,
    text: t.text.trim() === '' || t.text.length > TEMPLATE_LIMITS.textMax,
  }));

  const submit = () => {
    setSubmitted(true);
    if (invalid.some((entry) => entry.name || entry.text)) return;
    const next: CreatorDefaults = {
      license: isLicense(license) ? license : null,
      templates: templates.map((t) => ({ id: t.id, name: t.name.trim(), text: t.text.trim() })),
    };
    writeCreatorDefaults(next);
    setSaved(next);
    setTemplates(next.templates);
    setSubmitted(false);
    notify.success(m.settings_defaults_saved());
  };

  const copy = async (template: ReplyTemplate) => {
    try {
      await navigator.clipboard.writeText(template.text);
      notify.success(m.settings_template_copied({ name: template.name }));
    } catch {
      notify.error(m.settings_template_copy_failed());
    }
  };

  const update = (id: string, patch: Partial<ReplyTemplate>) =>
    setTemplates((list) => list.map((entry) => (entry.id === id ? { ...entry, ...patch } : entry)));

  return (
    <SettingsCard
      id="creator-defaults"
      title={m.settings_defaults_title()}
      description={m.settings_defaults_text()}
      onSubmit={submit}
      dirty={dirty}
      onReset={() => {
        setLicense(saved.license ?? NONE);
        setTemplates(saved.templates);
        setSubmitted(false);
      }}
    >
      <Select
        label={m.settings_default_license()}
        description={m.settings_default_license_hint()}
        value={license}
        onValueChange={(value) => value && setLicense(value)}
        options={[
          { value: NONE, label: m.settings_default_license_none() },
          ...LICENSES.map((value) => ({ value, label: licenseLabel(value) })),
        ]}
      />
      <fieldset className="grid gap-3">
        <legend className="mb-1 text-sm font-semibold text-fg">{m.settings_templates_title()}</legend>
        <p className="text-sm text-fg-muted">{m.settings_templates_text({ max: TEMPLATE_LIMITS.max })}</p>
        {templates.length === 0 ? <p className="text-sm text-fg-muted">{m.settings_templates_empty()}</p> : null}
        <ul className="grid gap-3">
          {templates.map((template, index) => (
            <li key={template.id} className="grid gap-2 rounded-md border border-border p-3">
              <Field
                label={m.settings_template_name()}
                error={
                  submitted && invalid[index]?.name
                    ? m.settings_template_name_error({ max: TEMPLATE_LIMITS.nameMax })
                    : undefined
                }
              >
                <Input
                  value={template.name}
                  maxLength={TEMPLATE_LIMITS.nameMax}
                  autoFocus={firstNew.current === template.id}
                  onChange={(event) => update(template.id, { name: event.currentTarget.value })}
                />
              </Field>
              <Field
                label={m.settings_template_text()}
                error={
                  submitted && invalid[index]?.text
                    ? m.settings_template_text_error({ max: TEMPLATE_LIMITS.textMax })
                    : undefined
                }
              >
                <Textarea
                  value={template.text}
                  maxLength={TEMPLATE_LIMITS.textMax}
                  minRows={3}
                  maxRows={10}
                  onChange={(event) => update(template.id, { text: event.currentTarget.value })}
                />
              </Field>
              <div className="flex flex-wrap justify-end gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon icon={Copy} size={16} />}
                  disabled={!template.text.trim()}
                  onClick={() => void copy(template)}
                >
                  {m.settings_template_copy()}
                  <span className="sr-only"> · {template.name}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon icon={Trash2} size={16} />}
                  onClick={() => setTemplates((list) => list.filter((entry) => entry.id !== template.id))}
                >
                  {m.settings_template_delete()}
                  <span className="sr-only"> · {template.name}</span>
                </Button>
              </div>
            </li>
          ))}
        </ul>
        {templates.length < TEMPLATE_LIMITS.max ? (
          <Button
            variant="secondary"
            size="sm"
            className="justify-self-start"
            icon={<Icon icon={Plus} size={16} />}
            onClick={() => {
              const id = newId();
              firstNew.current = id;
              setTemplates((list) => [...list, { id, name: '', text: '' }]);
            }}
          >
            {m.settings_template_add()}
          </Button>
        ) : null}
      </fieldset>
      <p className="text-xs text-fg-subtle">{m.settings_defaults_local_note()}</p>
    </SettingsCard>
  );
}
