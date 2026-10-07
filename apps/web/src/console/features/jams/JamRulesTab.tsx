/**
 * Rules tab: who can enter and who can vote, how results are published, and the voting
 * categories. New categories are named in plain words; their key is derived. Categories are
 * locked once voting has started. The weight column only shows with more than one category.
 */
import { JAM_ENTRY_KINDS, JAM_RULES } from '@sotf/contracts/jams';
import { m } from '@sotf/i18n/messages';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Switch } from '@sotf/ui/switch';
import { Plus, Trash2 } from 'lucide-react';
import { categoryKey, LIMITS, type NumberField, rowName } from './form.ts';
import type { TabProps } from './JamEditorScreen.tsx';

function kindLabel(kind: (typeof JAM_ENTRY_KINDS)[number]): string {
  return kind === 'mod'
    ? m.jams_editor_kind_mod()
    : kind === 'build'
      ? m.jams_editor_kind_build()
      : m.jams_editor_kind_any();
}

const FIELDS: Array<{
  id: NumberField;
  form: 'maxEntries' | 'maxCoAuthors' | 'minAge' | 'minActivity' | 'minVotes';
  label: () => string;
  hint: () => string;
}> = [
  {
    id: 'maxEntries',
    form: 'maxEntries',
    label: () => m.jams_editor_max_entries(),
    hint: () => m.jams_editor_max_entries_hint(),
  },
  {
    id: 'maxCoAuthors',
    form: 'maxCoAuthors',
    label: () => m.jams_editor_max_coauthors(),
    hint: () => m.jams_editor_max_coauthors_hint(),
  },
  { id: 'minAge', form: 'minAge', label: () => m.jams_editor_min_age(), hint: () => m.jams_editor_min_age_hint() },
  {
    id: 'minActivity',
    form: 'minActivity',
    label: () => m.jams_editor_min_activity(),
    hint: () => m.jams_editor_min_activity_hint(),
  },
  {
    id: 'minVotes',
    form: 'minVotes',
    label: () => m.jams_editor_min_votes(),
    hint: () => m.jams_editor_min_votes_hint(),
  },
];

export function JamRulesTab({ form, update, errors, categoriesLocked }: TabProps & { categoriesLocked: boolean }) {
  const setRow = (index: number, patch: Partial<(typeof form.categories)[number]>) =>
    update({ categories: form.categories.map((row, at) => (at === index ? { ...row, ...patch } : row)) });
  const single = form.categories.length <= 1;

  return (
    <div className="grid max-w-3xl gap-8">
      <section aria-labelledby="jam-entry-rules" className="grid gap-4">
        <h2 id="jam-entry-rules" className="text-base font-semibold text-fg">
          {m.jams_editor_rules_title()}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Select<(typeof JAM_ENTRY_KINDS)[number]>
            label={m.jams_editor_kinds()}
            value={form.entryKinds}
            onValueChange={(next) => next && update({ entryKinds: next })}
            options={JAM_ENTRY_KINDS.map((value) => ({ value, label: kindLabel(value) }))}
          />
          {FIELDS.map((field) => (
            <Field key={field.id} label={field.label()} description={field.hint()} error={errors.numbers[field.id]}>
              <Input
                type="number"
                inputMode="numeric"
                min={LIMITS[field.id].min}
                max={LIMITS[field.id].max}
                value={form[field.form]}
                onChange={(event) => update({ [field.form]: event.currentTarget.value })}
              />
            </Field>
          ))}
        </div>
        <Switch
          label={m.jams_editor_auto_publish()}
          description={m.jams_editor_auto_publish_hint()}
          checked={form.autoPublish}
          onCheckedChange={(autoPublish) => update({ autoPublish })}
        />
      </section>

      <section aria-labelledby="jam-categories" className="grid gap-4">
        <div className="grid gap-1">
          <h2 id="jam-categories" className="text-base font-semibold text-fg">
            {m.jams_editor_categories_title()}
          </h2>
          <p className="max-w-prose text-sm text-fg-muted">{m.jams_editor_categories_description()}</p>
        </div>
        {categoriesLocked ? <Banner tone="info" title={m.jams_editor_categories_locked()} /> : null}
        <ul className="grid gap-3">
          {form.categories.map((category, index) => (
            <li
              key={index}
              className={
                single
                  ? 'grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start'
                  : 'grid gap-3 sm:grid-cols-[minmax(0,1fr)_6rem_auto] sm:items-start'
              }
            >
              <Field label={m.jams_editor_category_name()} error={errors.categories[index]}>
                <Input
                  value={category.label}
                  maxLength={JAM_RULES.labelMax}
                  disabled={categoriesLocked}
                  placeholder={category.fresh ? m.jams_editor_category_placeholder() : rowName(category)}
                  onChange={(event) => {
                    const label = event.currentTarget.value;
                    if (!category.fresh) return setRow(index, { label });
                    const taken = new Set(form.categories.filter((_, at) => at !== index).map((row) => row.key));
                    setRow(index, { label, key: categoryKey(label, taken) });
                  }}
                />
              </Field>
              {single ? null : (
                <Field label={m.jams_editor_category_weight()}>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={10}
                    value={String(category.weight)}
                    disabled={categoriesLocked}
                    onChange={(event) =>
                      setRow(index, { weight: Math.min(10, Math.max(1, Number(event.currentTarget.value) || 1)) })
                    }
                  />
                </Field>
              )}
              <Button
                type="button"
                variant="ghost"
                className="sm:mt-6"
                aria-label={m.jams_editor_category_remove()}
                disabled={categoriesLocked || form.categories.length <= 1}
                icon={<Icon icon={Trash2} size={18} />}
                onClick={() => update({ categories: form.categories.filter((_, at) => at !== index) })}
              />
            </li>
          ))}
        </ul>
        <div>
          <Button
            type="button"
            variant="secondary"
            disabled={categoriesLocked || form.categories.length >= JAM_RULES.categoriesMax}
            icon={<Icon icon={Plus} size={18} />}
            onClick={() =>
              update({
                categories: [
                  ...form.categories,
                  {
                    key: categoryKey('', new Set(form.categories.map((row) => row.key))),
                    label: '',
                    weight: 1,
                    fresh: true,
                  },
                ],
              })
            }
          >
            {m.jams_editor_category_add()}
          </Button>
        </div>
      </section>
    </div>
  );
}
