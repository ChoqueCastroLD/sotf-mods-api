/**
 * `/ranger/jams/$jamId` — the jam editor: phase control, details, schedule, rules, categories
 * and entry moderation. Jam texts (title, rules…) are single-language; only the chrome is
 * translated.
 */
import { JAM_ACCENTS, JAM_ENTRY_KINDS, JAM_RULES } from '@sotf/contracts/jams';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Switch } from '@sotf/ui/switch';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { getRouteApi, useNavigate } from '@tanstack/react-router';
import { ArrowLeft, ExternalLink, Plus, Trash2 } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { formatInstant, fromLocalInput, Panel, reportFailure, toLocalInput } from '../admin/shared.tsx';
import { type AdminJam, adminJamQuery, jamKeys, jamsAdminApi, type UpdateJamInput } from './api.ts';
import { JamArtThumb, StagePips } from './JamArtThumb.tsx';
import { JamEntriesPanel } from './JamEntriesPanel.tsx';
import { categoryName, JAM_PHASES, jamPhaseLabel, jamPhaseVariant } from './phase.ts';

const route = getRouteApi('/ranger/jams/$jamId');

const DATE_FIELDS = [
  'announceAt',
  'submissionsOpenAt',
  'submissionsCloseAt',
  'votingOpenAt',
  'votingCloseAt',
  'archiveAt',
] as const;
type DateField = (typeof DATE_FIELDS)[number];

function dateLabel(field: DateField): string {
  switch (field) {
    case 'announceAt':
      return m.jams_timeline_announce();
    case 'submissionsOpenAt':
      return m.jams_timeline_submissions_open();
    case 'submissionsCloseAt':
      return m.jams_timeline_submissions_close();
    case 'votingOpenAt':
      return m.jams_timeline_voting_open();
    case 'votingCloseAt':
      return m.jams_timeline_voting_close();
    case 'archiveAt':
      return m.jams_timeline_archive();
  }
}

function kindLabel(kind: (typeof JAM_ENTRY_KINDS)[number]): string {
  return kind === 'mod'
    ? m.jams_editor_kind_mod()
    : kind === 'build'
      ? m.jams_editor_kind_build()
      : m.jams_editor_kind_any();
}

function accentLabel(accent: (typeof JAM_ACCENTS)[number]): string {
  switch (accent) {
    case 'signal':
      return m.jams_editor_accent_signal();
    case 'forest':
      return m.jams_editor_accent_forest();
    case 'ember':
      return m.jams_editor_accent_ember();
    case 'ocean':
      return m.jams_editor_accent_ocean();
    case 'violet':
      return m.jams_editor_accent_violet();
  }
}

export function JamEditorScreen() {
  const { jamId } = route.useParams();
  const id = Number(jamId);
  const { data: jam } = useSuspenseQuery(adminJamQuery(id));

  return (
    <div className="grid gap-6">
      <header className="relative isolate overflow-hidden rounded-xl border border-border bg-night-975 text-night-50">
        <JamArtThumb jam={jam} className="absolute inset-0 -z-20 size-full rounded-none ring-0" />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-night-975 via-night-975/80 to-night-975/30"
          aria-hidden="true"
        />
        <div className="flex flex-wrap items-end justify-between gap-4 p-5 pt-14 md:p-8 md:pt-20">
          <div className="grid gap-2">
            <a href="/ranger/jams" className="inline-flex items-center gap-1 text-sm text-night-200 hover:text-primary">
              <Icon icon={ArrowLeft} size={16} />
              {m.jams_editor_back()}
            </a>
            <h1 className="font-display-caps text-display-sm text-night-50">{jam.title}</h1>
            <p className="flex flex-wrap items-center gap-3 text-sm text-night-200">
              <Badge variant={jamPhaseVariant(jam.phase)} size="sm">
                {jamPhaseLabel(jam.phase)}
              </Badge>
              <StagePips phase={jam.phase} />
              <span className="font-mono text-xs">/jams/{jam.slug}</span>
            </p>
          </div>
          {jam.phase !== 'draft' ? (
            <a
              href={`/jams/${jam.slug}`}
              className="inline-flex items-center gap-1 rounded-md border border-white/25 bg-night-975/60 px-3 py-2 text-sm font-semibold text-night-50 backdrop-blur-sm hover:bg-night-975/80"
              target="_blank"
              rel="noreferrer"
            >
              {m.jams_editor_view_public()}
              <Icon icon={ExternalLink} size={16} />
            </a>
          ) : null}
        </div>
      </header>

      <PhasePanel jam={jam} />
      <DetailsForm key={jam.updatedAt} jam={jam} />
      <JamEntriesPanel jamId={jam.id} />
    </div>
  );
}

// -----------------------------------------------------------------------------------------------
// Phase control
// -----------------------------------------------------------------------------------------------

function PhasePanel({ jam }: { jam: AdminJam }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [pick, setPick] = useState<AdminJam['phase'] | null>(null);
  const [target, setTarget] = useState<AdminJam['phase'] | null>(null);
  const [reason, setReason] = useState('');
  const [deleting, setDeleting] = useState(false);

  const refresh = async () => {
    await queryClient.invalidateQueries({ queryKey: jamKeys.all });
  };

  const run = async (action: () => Promise<unknown>, success: string, failure: string) => {
    try {
      await action();
      await refresh();
      notify.success(success);
    } catch (error) {
      reportFailure(error, failure);
      throw error;
    }
  };

  return (
    <Panel title={m.jams_editor_phase_title()} description={m.jams_editor_phase_description()}>
      {jam.phaseLocked ? (
        <Banner tone="warning" title={m.jams_editor_locked_title()}>
          {m.jams_editor_locked_text()}
        </Banner>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-[minmax(0,16rem)_auto] sm:items-end">
        <Select<AdminJam['phase']>
          label={m.jams_editor_force_phase()}
          value={pick}
          onValueChange={setPick}
          options={JAM_PHASES.filter((phase) => phase !== jam.phase).map((phase) => ({
            value: phase,
            label: jamPhaseLabel(phase),
          }))}
        />
        <Button
          variant="secondary"
          disabled={pick === null}
          onClick={() => {
            setReason('');
            setTarget(pick);
          }}
        >
          {m.jams_editor_force_apply()}
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {jam.phaseLocked ? (
          <Button
            variant="secondary"
            onClick={() =>
              void run(() => jamsAdminApi.resume(jam.id), m.jams_editor_resumed(), m.jams_editor_resume_failed()).catch(
                () => undefined,
              )
            }
          >
            {m.jams_editor_resume()}
          </Button>
        ) : null}
        {(jam.phase === 'voting' || jam.phase === 'results' || jam.phase === 'archived') && (
          <Button
            variant="secondary"
            onClick={() =>
              void run(
                () => jamsAdminApi.publishResults(jam.id),
                m.jams_editor_results_done(),
                m.jams_editor_results_failed(),
              ).catch(() => undefined)
            }
          >
            {jam.resultsComputedAt ? m.jams_editor_results_recompute() : m.jams_editor_results_publish()}
          </Button>
        )}
        {jam.phase === 'draft' ? (
          <Button variant="danger" icon={<Icon icon={Trash2} size={18} />} onClick={() => setDeleting(true)}>
            {m.jams_editor_delete()}
          </Button>
        ) : null}
      </div>
      {jam.resultsComputedAt ? (
        <p className="text-xs text-fg-muted">
          {m.jams_editor_results_at({ date: formatInstant(jam.resultsComputedAt) })}
        </p>
      ) : null}

      <ConfirmDialog
        open={target !== null}
        onOpenChange={(open) => {
          if (!open) setTarget(null);
        }}
        title={m.jams_editor_force_title({ phase: target ? jamPhaseLabel(target) : '' })}
        description={m.jams_editor_force_text()}
        confirmLabel={m.jams_editor_force_apply()}
        onConfirm={async () => {
          if (!target) return;
          await run(
            () => jamsAdminApi.setPhase(jam.id, target, reason.trim() || undefined),
            m.jams_editor_forced({ phase: jamPhaseLabel(target) }),
            m.jams_editor_force_failed(),
          );
          setTarget(null);
          setPick(null);
        }}
      >
        <Field label={m.jams_editor_reason()} optional>
          <Input value={reason} maxLength={300} onChange={(event) => setReason(event.currentTarget.value)} />
        </Field>
      </ConfirmDialog>

      <ConfirmDialog
        open={deleting}
        onOpenChange={setDeleting}
        title={m.jams_editor_delete_title({ title: jam.title })}
        description={m.jams_editor_delete_text()}
        confirmLabel={m.jams_editor_delete()}
        tone="danger"
        onConfirm={async () => {
          try {
            await jamsAdminApi.remove(jam.id);
          } catch (error) {
            reportFailure(error, m.jams_editor_delete_failed());
            throw error;
          }
          await queryClient.invalidateQueries({ queryKey: jamKeys.all });
          notify.success(m.jams_editor_deleted());
          void navigate({ to: '/ranger/jams' });
        }}
      />
    </Panel>
  );
}

// -----------------------------------------------------------------------------------------------
// Details, schedule, rules, categories
// -----------------------------------------------------------------------------------------------

interface CategoryRow {
  key: string;
  label: string;
  weight: number;
}

function DetailsForm({ jam }: { jam: AdminJam }) {
  const queryClient = useQueryClient();
  const votingStarted = jam.phase === 'voting' || jam.phase === 'results' || jam.phase === 'archived';
  const [title, setTitle] = useState(jam.title);
  const [tagline, setTagline] = useState(jam.tagline);
  const [theme, setTheme] = useState(jam.theme);
  const [themeHidden, setThemeHidden] = useState(jam.themeHidden);
  const [descriptionMd, setDescriptionMd] = useState(jam.descriptionMd);
  const [rulesMd, setRulesMd] = useState(jam.rulesMd);
  const [prizesMd, setPrizesMd] = useState(jam.prizesMd);
  const [bannerUrl, setBannerUrl] = useState(jam.bannerUrl ?? '');
  const [accent, setAccent] = useState(jam.accent);
  const [entryKinds, setEntryKinds] = useState(jam.entryKinds);
  const [dates, setDates] = useState<Record<DateField, string>>(
    () =>
      Object.fromEntries(DATE_FIELDS.map((field) => [field, toLocalInput(jam[field])])) as Record<DateField, string>,
  );
  const [maxEntries, setMaxEntries] = useState(String(jam.maxEntriesPerUser));
  const [maxCoAuthors, setMaxCoAuthors] = useState(String(jam.maxCoAuthors));
  const [minAge, setMinAge] = useState(String(jam.minVoterAgeDays));
  const [minActivity, setMinActivity] = useState(String(jam.minVoterActivity));
  const [minVotes, setMinVotes] = useState(String(jam.minVotes));
  const [autoPublish, setAutoPublish] = useState(jam.autoPublishResults);
  const [categories, setCategories] = useState<CategoryRow[]>(() =>
    jam.categories.map((category) => ({ key: category.key, label: category.label ?? '', weight: category.weight })),
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const number = (value: string, min: number, max: number): number | null => {
    const parsed = Number(value);
    return Number.isInteger(parsed) && parsed >= min && parsed <= max ? parsed : null;
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (saving) return;
    const entries = number(maxEntries, 1, 5);
    const coAuthors = number(maxCoAuthors, 0, 10);
    const age = number(minAge, 0, 365);
    const activity = number(minActivity, 0, 100);
    const votes = number(minVotes, 1, 1000);
    if (title.trim().length < 3) return setError(m.jams_admin_error_title());
    if (entries === null || coAuthors === null || age === null || activity === null || votes === null)
      return setError(m.jams_editor_error_numbers());
    if (bannerUrl.trim() && !/^https:\/\//i.test(bannerUrl.trim())) return setError(m.jams_editor_error_banner());
    const keys = categories.map((category) => category.key.trim().toLowerCase());
    if (
      keys.some((key) => !/^[a-z][a-z0-9-]{1,30}$/.test(key)) ||
      new Set(keys).size !== keys.length ||
      keys.length < 1
    )
      return setError(m.jams_editor_error_categories());
    setError(null);

    const body: UpdateJamInput = {
      title: title.trim(),
      tagline: tagline.trim(),
      theme: theme.trim(),
      themeHidden,
      descriptionMd,
      rulesMd,
      prizesMd,
      bannerUrl: bannerUrl.trim() || null,
      accent,
      entryKinds,
      maxEntriesPerUser: entries,
      maxCoAuthors: coAuthors,
      minVoterAgeDays: age,
      minVoterActivity: activity,
      minVotes: votes,
      autoPublishResults: autoPublish,
      ...Object.fromEntries(DATE_FIELDS.map((field) => [field, fromLocalInput(dates[field])])),
      ...(votingStarted
        ? {}
        : {
            categories: categories.map((category) => ({
              key: category.key.trim().toLowerCase(),
              label: category.label.trim() || null,
              weight: category.weight,
            })),
          }),
    };
    setSaving(true);
    try {
      await jamsAdminApi.update(jam.id, body);
      await queryClient.invalidateQueries({ queryKey: jamKeys.all });
      notify.success(m.jams_editor_saved());
    } catch (failure) {
      reportFailure(failure, m.jams_editor_save_failed());
    } finally {
      setSaving(false);
    }
  };

  return (
    <form noValidate onSubmit={(event) => void submit(event)} className="grid gap-6">
      <Panel title={m.jams_editor_details_title()}>
        <Field label={m.jams_admin_field_title()}>
          <Input
            value={title}
            maxLength={JAM_RULES.titleMax}
            onChange={(event) => setTitle(event.currentTarget.value)}
          />
        </Field>
        <Field label={m.jams_editor_tagline()}>
          <Input
            value={tagline}
            maxLength={JAM_RULES.taglineMax}
            onChange={(event) => setTagline(event.currentTarget.value)}
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={m.jams_editor_theme()} description={m.jams_editor_theme_hint()}>
            <Input
              value={theme}
              maxLength={JAM_RULES.themeMax}
              onChange={(event) => setTheme(event.currentTarget.value)}
            />
          </Field>
          <Switch label={m.jams_editor_theme_hidden()} checked={themeHidden} onCheckedChange={setThemeHidden} />
        </div>
        <Field label={m.jams_editor_description()} description={m.jams_editor_markdown_hint()}>
          <Textarea
            value={descriptionMd}
            minRows={4}
            maxLength={JAM_RULES.mdMax}
            onChange={(event) => setDescriptionMd(event.currentTarget.value)}
          />
        </Field>
        <Field label={m.jams_editor_rules()} description={m.jams_editor_markdown_hint()}>
          <Textarea
            value={rulesMd}
            minRows={4}
            maxLength={JAM_RULES.mdMax}
            onChange={(event) => setRulesMd(event.currentTarget.value)}
          />
        </Field>
        <Field label={m.jams_editor_prizes()} description={m.jams_editor_markdown_hint()}>
          <Textarea
            value={prizesMd}
            minRows={3}
            maxLength={JAM_RULES.mdMax}
            onChange={(event) => setPrizesMd(event.currentTarget.value)}
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={m.jams_editor_banner()} description={m.jams_editor_banner_hint()} optional>
            <Input
              type="url"
              inputMode="url"
              value={bannerUrl}
              onChange={(event) => setBannerUrl(event.currentTarget.value)}
            />
          </Field>
          <Select<(typeof JAM_ACCENTS)[number]>
            label={m.jams_editor_accent()}
            value={accent}
            onValueChange={(next) => next && setAccent(next)}
            options={JAM_ACCENTS.map((value) => ({ value, label: accentLabel(value) }))}
          />
        </div>
      </Panel>

      <Panel title={m.jams_editor_schedule_title()} description={m.jams_editor_schedule_description()}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DATE_FIELDS.map((field) => (
            <Field key={field} label={dateLabel(field)} optional>
              <Input
                type="datetime-local"
                value={dates[field]}
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  setDates((previous) => ({ ...previous, [field]: value }));
                }}
              />
            </Field>
          ))}
        </div>
      </Panel>

      <Panel title={m.jams_editor_rules_title()}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Select<(typeof JAM_ENTRY_KINDS)[number]>
            label={m.jams_editor_kinds()}
            value={entryKinds}
            onValueChange={(next) => next && setEntryKinds(next)}
            options={JAM_ENTRY_KINDS.map((value) => ({ value, label: kindLabel(value) }))}
          />
          <NumberField
            label={m.jams_editor_max_entries()}
            value={maxEntries}
            onChange={setMaxEntries}
            min={1}
            max={5}
          />
          <NumberField
            label={m.jams_editor_max_coauthors()}
            value={maxCoAuthors}
            onChange={setMaxCoAuthors}
            min={0}
            max={10}
          />
          <NumberField label={m.jams_editor_min_age()} value={minAge} onChange={setMinAge} min={0} max={365} />
          <NumberField
            label={m.jams_editor_min_activity()}
            value={minActivity}
            onChange={setMinActivity}
            min={0}
            max={100}
          />
          <NumberField label={m.jams_editor_min_votes()} value={minVotes} onChange={setMinVotes} min={1} max={1000} />
        </div>
        <Switch
          label={m.jams_editor_auto_publish()}
          description={m.jams_editor_auto_publish_hint()}
          checked={autoPublish}
          onCheckedChange={setAutoPublish}
        />
      </Panel>

      <Panel title={m.jams_editor_categories_title()} description={m.jams_editor_categories_description()}>
        {votingStarted ? <Banner tone="info" title={m.jams_editor_categories_locked()} /> : null}
        <ul className="grid gap-3">
          {categories.map((category, index) => (
            <li key={index} className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_6rem_auto] sm:items-end">
              <Field label={m.jams_editor_category_key()}>
                <Input
                  value={category.key}
                  disabled={votingStarted}
                  className="font-mono"
                  autoCapitalize="none"
                  autoComplete="off"
                  spellCheck={false}
                  onChange={(event) => {
                    const key = event.currentTarget.value;
                    setCategories((rows) => rows.map((row, at) => (at === index ? { ...row, key } : row)));
                  }}
                />
              </Field>
              <Field
                label={m.jams_editor_category_label()}
                description={categoryName({ key: category.key, label: null })}
                optional
              >
                <Input
                  value={category.label}
                  maxLength={JAM_RULES.labelMax}
                  disabled={votingStarted}
                  onChange={(event) => {
                    const label = event.currentTarget.value;
                    setCategories((rows) => rows.map((row, at) => (at === index ? { ...row, label } : row)));
                  }}
                />
              </Field>
              <Field label={m.jams_editor_category_weight()}>
                <Input
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={10}
                  value={String(category.weight)}
                  disabled={votingStarted}
                  onChange={(event) => {
                    const weight = Math.min(10, Math.max(1, Number(event.currentTarget.value) || 1));
                    setCategories((rows) => rows.map((row, at) => (at === index ? { ...row, weight } : row)));
                  }}
                />
              </Field>
              <Button
                type="button"
                variant="ghost"
                aria-label={m.jams_editor_category_remove()}
                disabled={votingStarted || categories.length <= 1}
                icon={<Icon icon={Trash2} size={18} />}
                onClick={() => setCategories((rows) => rows.filter((_, at) => at !== index))}
              />
            </li>
          ))}
        </ul>
        <div>
          <Button
            type="button"
            variant="secondary"
            disabled={votingStarted || categories.length >= JAM_RULES.categoriesMax}
            icon={<Icon icon={Plus} size={18} />}
            onClick={() => setCategories((rows) => [...rows, { key: '', label: '', weight: 1 }])}
          >
            {m.jams_editor_category_add()}
          </Button>
        </div>
      </Panel>

      {error ? (
        <p role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : null}
      <div className="flex justify-end">
        <Button type="submit" loading={saving}>
          {m.jams_editor_save()}
        </Button>
      </div>
    </form>
  );
}

function NumberField({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  min: number;
  max: number;
}) {
  return (
    <Field label={label}>
      <Input
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </Field>
  );
}
