/**
 * `/ranger/admin/taxonomy` (PLAN §7.4 «Admin»: categories and tags). Categories are never deleted:
 * «Retire» hides one once no live mod uses it (the API answers 409 otherwise, and the screen points
 * at the bulk recategorisation); its slug keeps resolving through `legacySlugs` of its successor.
 * Tags can be deleted (they are detached from their mods).
 *
 * The admin reads return every stored field (`retiredAt`, `hubIntro`, tag description and order),
 * so the forms edit what is stored instead of replacing it with defaults.
 */
import { isApiError } from '@sotf/contracts/client';
import { LOCALES, type Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog, Dialog, DialogClose } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Menu } from '@sotf/ui/menu';
import { Select } from '@sotf/ui/select';
import { Tabs } from '@sotf/ui/tabs';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { Archive, MoreHorizontal, Pencil, Plus, Shuffle, Tags, Trash2 } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { adminApi, adminKeys, type Category, categoriesQuery, type Tag, tagsQuery } from './api.ts';
import { ADMIN_LIMITS } from './constants.ts';
import {
  AdminHeader,
  compactTexts,
  formatCount,
  LocalizedFields,
  type LocalizedTexts,
  reportFailure,
  slugify,
  TableScroller,
  tdClasses,
  thClasses,
} from './shared.tsx';

type AdminCategory = Category;
type AdminTag = Tag;
type TabValue = 'categories' | 'tags';

export function TaxonomyScreen() {
  const [tab, setTab] = useState<TabValue>('categories');
  const { data: categories } = useSuspenseQuery(categoriesQuery);
  const { data: tags } = useSuspenseQuery(tagsQuery);
  return (
    <div className="grid gap-6">
      <AdminHeader title={m.admin_taxonomy_title()} description={m.admin_taxonomy_description()} />
      <Tabs<TabValue>
        label={m.admin_taxonomy_title()}
        value={tab}
        onValueChange={setTab}
        tabs={[
          {
            value: 'categories',
            label: m.admin_tax_tab_categories(),
            badge: formatCount(categories.length),
            content: <CategoriesPanel />,
          },
          { value: 'tags', label: m.admin_tax_tab_tags(), badge: formatCount(tags.length), content: <TagsPanel /> },
        ]}
      />
    </div>
  );
}

// -----------------------------------------------------------------------------------------------
// Categories
// -----------------------------------------------------------------------------------------------

function isRetired(category: AdminCategory): boolean {
  return category.retiredAt !== null;
}

function CategoriesPanel() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: categories } = useSuspenseQuery(categoriesQuery);
  const [editing, setEditing] = useState<AdminCategory | 'new' | null>(null);
  const [retiring, setRetiring] = useState<AdminCategory | null>(null);

  const refresh = () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: adminKeys.categories }),
      queryClient.invalidateQueries({ queryKey: adminKeys.recategorize }),
    ]);

  const retire = async (category: AdminCategory) => {
    try {
      await adminApi.retireCategory(category.id);
      await refresh();
      notify.success(m.admin_tax_retired({ name: category.name }));
    } catch (error) {
      if (isApiError(error) && error.code === 'CONFLICT') {
        notify.error(m.admin_tax_retire_failed(), {
          description: m.admin_tax_retire_conflict(),
          action: {
            label: m.admin_recat_title(),
            onClick: () => void navigate({ to: '/ranger/admin/recategorize' }),
          },
        });
      } else reportFailure(error, m.admin_tax_retire_failed());
      throw error;
    }
  };

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="max-w-prose text-sm text-fg-muted">{m.admin_tax_categories_hint()}</p>
        <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setEditing('new')}>
          {m.admin_tax_add_category()}
        </Button>
      </div>
      {categories.length === 0 ? (
        <EmptyState
          icon={<Icon icon={Tags} size={32} />}
          title={m.admin_tax_categories_empty()}
          description={m.admin_tax_categories_empty_text()}
        />
      ) : (
        <TableScroller label={m.admin_tax_tab_categories()}>
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">{m.admin_tax_tab_categories()}</caption>
            <thead className="bg-sunken">
              <tr>
                <th scope="col" className={thClasses}>
                  {m.admin_tax_col_name()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_tax_col_slug()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_tax_col_kind()}
                </th>
                <th scope="col" className={`${thClasses} text-end`}>
                  {m.admin_tax_col_order()}
                </th>
                <th scope="col" className={`${thClasses} text-end`}>
                  {m.admin_tax_col_count()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_tax_col_legacy()}
                </th>
                <th scope="col" className={thClasses}>
                  <span className="sr-only">{m.admin_col_actions()}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                const retired = isRetired(category);
                return (
                  <tr key={category.id} className="border-t border-border">
                    <th scope="row" className={`${tdClasses} text-start font-semibold text-fg`}>
                      <span className="flex flex-wrap items-center gap-2">
                        {category.name}
                        {retired ? (
                          <Badge variant="neutral" size="sm" icon={<Icon icon={Archive} size={12} />}>
                            {m.admin_tax_retired_badge()}
                          </Badge>
                        ) : null}
                      </span>
                    </th>
                    <td className={`${tdClasses} font-mono text-xs text-fg-muted`}>{category.slug}</td>
                    <td className={`${tdClasses} text-fg-muted`}>
                      {category.kind === 'build' ? m.admin_tax_kind_build() : m.admin_tax_kind_mod()}
                    </td>
                    <td className={`${tdClasses} text-end tabular-nums text-fg-muted`}>{category.sortOrder}</td>
                    <td className={`${tdClasses} text-end tabular-nums`}>{formatCount(category.count)}</td>
                    <td className={`${tdClasses} font-mono text-xs text-fg-muted`}>
                      {category.legacySlugs.length > 0 ? category.legacySlugs.join(', ') : '—'}
                    </td>
                    <td className={`${tdClasses} text-end`}>
                      <Menu
                        align="end"
                        trigger={
                          <Button variant="icon" size="sm" aria-label={m.admin_actions_for({ name: category.name })}>
                            <Icon icon={MoreHorizontal} size={18} />
                          </Button>
                        }
                        items={[
                          {
                            type: 'item',
                            label: m.admin_action_edit(),
                            icon: <Icon icon={Pencil} size={16} />,
                            onSelect: () => setEditing(category),
                          },
                          ...(retired
                            ? []
                            : [
                                {
                                  type: 'item' as const,
                                  label: m.admin_tax_recategorize_mods(),
                                  icon: <Icon icon={Shuffle} size={16} />,
                                  onSelect: () =>
                                    void navigate({
                                      to: '/ranger/admin/recategorize',
                                      search: { from: category.slug },
                                    }),
                                },
                                { type: 'separator' as const },
                                {
                                  type: 'item' as const,
                                  label: m.admin_tax_retire(),
                                  icon: <Icon icon={Archive} size={16} />,
                                  danger: true,
                                  onSelect: () => setRetiring(category),
                                },
                              ]),
                        ]}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableScroller>
      )}

      <Dialog
        open={editing !== null}
        onOpenChange={(open) => {
          if (!open) setEditing(null);
        }}
        title={
          editing === 'new' || editing === null
            ? m.admin_tax_add_category()
            : m.admin_tax_edit_category({ name: editing.name })
        }
        size="lg"
        sheetOnMobile
      >
        {editing !== null ? (
          <CategoryForm
            key={editing === 'new' ? 'new' : editing.id}
            category={editing}
            onDone={() => setEditing(null)}
            onSaved={refresh}
          />
        ) : null}
      </Dialog>
      <ConfirmDialog
        open={retiring !== null}
        onOpenChange={(open) => {
          if (!open) setRetiring(null);
        }}
        title={m.admin_tax_retire_title({ name: retiring?.name ?? '' })}
        description={m.admin_tax_retire_text({ count: retiring?.count ?? 0 })}
        confirmLabel={m.admin_tax_retire()}
        tone="danger"
        onConfirm={() => (retiring ? retire(retiring) : undefined)}
      />
    </div>
  );
}

interface CategoryValues {
  name: string;
  slug: string;
  slugTouched: boolean;
  kind: 'mod' | 'build';
  icon: string;
  sortOrder: string;
  legacySlugs: string;
  names: LocalizedTexts;
  hubIntro: LocalizedTexts;
}

function pickTexts(value: Partial<Record<string, string>> | undefined): LocalizedTexts {
  const out: LocalizedTexts = {};
  if (!value) return out;
  for (const code of LOCALES) {
    const text = value[code];
    if (typeof text === 'string') out[code] = text;
  }
  return out;
}

function categoryValues(category: AdminCategory | 'new'): CategoryValues {
  if (category === 'new') {
    return {
      name: '',
      slug: '',
      slugTouched: false,
      kind: 'mod',
      icon: '',
      sortOrder: '0',
      legacySlugs: '',
      names: {},
      hubIntro: {},
    };
  }
  return {
    name: category.names.en ?? category.name,
    slug: category.slug,
    slugTouched: true,
    kind: category.kind,
    icon: category.icon ?? '',
    sortOrder: String(category.sortOrder),
    legacySlugs: category.legacySlugs.join(', '),
    names: pickTexts(category.names),
    hubIntro: pickTexts(category.hubIntro),
  };
}

const CATEGORY_SLUG = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

function splitList(value: string): string[] {
  return [
    ...new Set(
      value
        .split(/[\s,;]+/)
        .map((entry) => entry.trim().toLowerCase())
        .filter(Boolean),
    ),
  ];
}

function CategoryForm({
  category,
  onDone,
  onSaved,
}: {
  category: AdminCategory | 'new';
  onDone: () => void;
  onSaved: () => Promise<unknown>;
}) {
  const [values, setValues] = useState<CategoryValues>(() => categoryValues(category));
  const [errors, setErrors] = useState<Partial<Record<'name' | 'slug' | 'sortOrder' | 'legacySlugs', string>>>({});
  const [saving, setSaving] = useState(false);
  const isNew = category === 'new';
  const set = <K extends keyof CategoryValues>(key: K, value: CategoryValues[K]) =>
    setValues((previous) => ({ ...previous, [key]: value }));

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (saving) return;
    const next: typeof errors = {};
    const legacy = splitList(values.legacySlugs);
    if (!values.name.trim()) next.name = m.admin_error_required();
    if (!CATEGORY_SLUG.test(values.slug) || values.slug.length > ADMIN_LIMITS.categorySlugMax)
      next.slug = m.admin_error_slug();
    if (!/^-?\d{1,6}$/.test(values.sortOrder.trim())) next.sortOrder = m.admin_error_integer();
    if (legacy.length > ADMIN_LIMITS.legacySlugsMax)
      next.legacySlugs = m.admin_tax_error_legacy({ max: ADMIN_LIMITS.legacySlugsMax });
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSaving(true);
    const names = compactTexts({ ...values.names, en: values.name });
    const body = {
      slug: values.slug,
      kind: values.kind,
      name: values.name.trim(),
      names,
      icon: values.icon.trim() || null,
      sortOrder: Number(values.sortOrder.trim()),
      legacySlugs: legacy,
      hubIntro: compactTexts(values.hubIntro),
    };
    try {
      const saved = isNew ? await adminApi.createCategory(body) : await adminApi.updateCategory(category.id, body);
      await onSaved();
      notify.success(m.admin_tax_category_saved({ name: saved.name }));
      onDone();
    } catch (error) {
      reportFailure(error, m.admin_tax_save_failed());
    } finally {
      setSaving(false);
    }
  };

  return (
    <form noValidate onSubmit={(event) => void submit(event)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={m.admin_tax_field_name()} description={m.admin_tax_field_name_hint()} error={errors.name}>
          <Input
            value={values.name}
            maxLength={ADMIN_LIMITS.categoryNameMax}
            autoFocus
            onChange={(event) => {
              const name = event.currentTarget.value;
              setValues((previous) => ({
                ...previous,
                name,
                ...(previous.slugTouched ? {} : { slug: slugify(name) }),
              }));
            }}
          />
        </Field>
        <Field label={m.admin_tax_field_slug()} description={m.admin_tax_field_slug_hint()} error={errors.slug}>
          <Input
            value={values.slug}
            maxLength={ADMIN_LIMITS.categorySlugMax}
            spellCheck={false}
            autoComplete="off"
            className="font-mono"
            onChange={(event) =>
              setValues((previous) => ({
                ...previous,
                slug: event.currentTarget.value.toLowerCase(),
                slugTouched: true,
              }))
            }
          />
        </Field>
        <Select<'mod' | 'build'>
          label={m.admin_tax_field_kind()}
          value={values.kind}
          disabled={!isNew}
          description={isNew ? undefined : m.admin_tax_field_kind_locked()}
          options={[
            { value: 'mod', label: m.admin_tax_kind_mod() },
            { value: 'build', label: m.admin_tax_kind_build() },
          ]}
          onValueChange={(next) => next && set('kind', next)}
        />
        <Field label={m.admin_tax_field_icon()} description={m.admin_tax_field_icon_hint()} optional>
          <Input
            value={values.icon}
            maxLength={ADMIN_LIMITS.iconMax}
            spellCheck={false}
            autoComplete="off"
            className="font-mono"
            placeholder="wand-sparkles"
            onChange={(event) => set('icon', event.currentTarget.value)}
          />
        </Field>
        <Field label={m.admin_tax_field_order()} description={m.admin_tax_field_order_hint()} error={errors.sortOrder}>
          <Input
            inputMode="numeric"
            value={values.sortOrder}
            onChange={(event) => set('sortOrder', event.currentTarget.value)}
          />
        </Field>
        <Field
          label={m.admin_tax_field_legacy()}
          description={m.admin_tax_field_legacy_hint()}
          error={errors.legacySlugs}
          optional
        >
          <Input
            value={values.legacySlugs}
            spellCheck={false}
            autoComplete="off"
            className="font-mono"
            placeholder="qol, misc"
            onChange={(event) => set('legacySlugs', event.currentTarget.value)}
          />
        </Field>
      </div>
      <LocalizedFields
        label={m.admin_tax_field_names()}
        values={values.names}
        maxLength={ADMIN_LIMITS.categoryNameMax}
        onChange={(names) => set('names', names)}
      />
      <LocalizedFields
        label={m.admin_tax_field_hub_intro()}
        values={values.hubIntro}
        maxLength={ADMIN_LIMITS.hubIntroMax}
        multiline
        exclude={[] as Locale[]}
        onChange={(hubIntro) => set('hubIntro', hubIntro)}
      />
      <div className="flex flex-wrap justify-end gap-2">
        <DialogClose render={<Button variant="secondary" disabled={saving} />}>{m.admin_action_cancel()}</DialogClose>
        <Button type="submit" loading={saving}>
          {isNew ? m.admin_tax_add_category() : m.admin_action_save()}
        </Button>
      </div>
    </form>
  );
}

// -----------------------------------------------------------------------------------------------
// Tags
// -----------------------------------------------------------------------------------------------

function TagsPanel() {
  const queryClient = useQueryClient();
  const { data: tags } = useSuspenseQuery(tagsQuery);
  const [editing, setEditing] = useState<AdminTag | 'new' | null>(null);
  const [deleting, setDeleting] = useState<AdminTag | null>(null);
  const [filter, setFilter] = useState('');

  const refresh = () => queryClient.invalidateQueries({ queryKey: adminKeys.tags });
  const needle = filter.trim().toLowerCase();
  const visible = needle
    ? tags.filter(
        (tag) =>
          tag.slug.includes(needle) ||
          tag.name.toLowerCase().includes(needle) ||
          (tag.group ?? '').toLowerCase().includes(needle),
      )
    : tags;

  const remove = async (tag: AdminTag) => {
    try {
      await adminApi.deleteTag(tag.id);
      await refresh();
      notify.success(m.admin_tax_tag_deleted({ name: tag.name }));
    } catch (error) {
      reportFailure(error, m.admin_tax_tag_delete_failed());
      throw error;
    }
  };

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <Field label={m.admin_tax_filter_tags()} className="w-full max-w-xs">
          <Input type="search" value={filter} onChange={(event) => setFilter(event.currentTarget.value)} />
        </Field>
        <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setEditing('new')}>
          {m.admin_tax_add_tag()}
        </Button>
      </div>
      <p className="sr-only" aria-live="polite">
        {m.admin_results({ count: visible.length })}
      </p>
      {visible.length === 0 ? (
        <EmptyState
          icon={<Icon icon={Tags} size={32} />}
          title={tags.length === 0 ? m.admin_tax_tags_empty() : m.admin_no_matches()}
          description={tags.length === 0 ? m.admin_tax_tags_empty_text() : undefined}
        />
      ) : (
        <TableScroller label={m.admin_tax_tab_tags()}>
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">{m.admin_tax_tab_tags()}</caption>
            <thead className="bg-sunken">
              <tr>
                <th scope="col" className={thClasses}>
                  {m.admin_tax_col_name()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_tax_col_slug()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_tax_col_group()}
                </th>
                <th scope="col" className={`${thClasses} text-end`}>
                  {m.admin_tax_col_count()}
                </th>
                <th scope="col" className={thClasses}>
                  <span className="sr-only">{m.admin_col_actions()}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {visible.map((tag) => (
                <tr key={tag.id} className="border-t border-border">
                  <th scope="row" className={`${tdClasses} text-start font-semibold text-fg`}>
                    <span className="flex flex-wrap items-center gap-2">
                      {tag.name}
                      {tag.isCurated ? null : (
                        <Badge variant="neutral" size="sm">
                          {m.admin_tax_tag_free()}
                        </Badge>
                      )}
                    </span>
                  </th>
                  <td className={`${tdClasses} font-mono text-xs text-fg-muted`}>{tag.slug}</td>
                  <td className={`${tdClasses} text-fg-muted`}>{tag.group ?? '—'}</td>
                  <td className={`${tdClasses} text-end tabular-nums`}>{formatCount(tag.count)}</td>
                  <td className={`${tdClasses} text-end`}>
                    <Menu
                      align="end"
                      trigger={
                        <Button variant="icon" size="sm" aria-label={m.admin_actions_for({ name: tag.name })}>
                          <Icon icon={MoreHorizontal} size={18} />
                        </Button>
                      }
                      items={[
                        {
                          type: 'item',
                          label: m.admin_action_edit(),
                          icon: <Icon icon={Pencil} size={16} />,
                          onSelect: () => setEditing(tag),
                        },
                        { type: 'separator' },
                        {
                          type: 'item',
                          label: m.admin_action_delete(),
                          icon: <Icon icon={Trash2} size={16} />,
                          danger: true,
                          onSelect: () => setDeleting(tag),
                        },
                      ]}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroller>
      )}

      <Dialog
        open={editing !== null}
        onOpenChange={(open) => {
          if (!open) setEditing(null);
        }}
        title={
          editing === 'new' || editing === null ? m.admin_tax_add_tag() : m.admin_tax_edit_tag({ name: editing.name })
        }
        size="lg"
        sheetOnMobile
      >
        {editing !== null ? (
          <TagForm
            key={editing === 'new' ? 'new' : editing.id}
            tag={editing}
            onDone={() => setEditing(null)}
            onSaved={refresh}
          />
        ) : null}
      </Dialog>
      <ConfirmDialog
        open={deleting !== null}
        onOpenChange={(open) => {
          if (!open) setDeleting(null);
        }}
        title={m.admin_tax_tag_delete_title({ name: deleting?.name ?? '' })}
        description={m.admin_tax_tag_delete_text({ count: deleting?.count ?? 0 })}
        confirmLabel={m.admin_action_delete()}
        tone="danger"
        onConfirm={() => (deleting ? remove(deleting) : undefined)}
      />
    </div>
  );
}

interface TagValues {
  name: string;
  slug: string;
  slugTouched: boolean;
  group: string;
  description: string;
  sortOrder: string;
  names: LocalizedTexts;
}

function tagValues(tag: AdminTag | 'new'): TagValues {
  if (tag === 'new') {
    return { name: '', slug: '', slugTouched: false, group: '', description: '', sortOrder: '0', names: {} };
  }
  return {
    name: tag.names.en ?? tag.name,
    slug: tag.slug,
    slugTouched: true,
    group: tag.group ?? '',
    description: tag.description,
    sortOrder: String(tag.sortOrder),
    names: pickTexts(tag.names),
  };
}

function TagForm({
  tag,
  onDone,
  onSaved,
}: {
  tag: AdminTag | 'new';
  onDone: () => void;
  onSaved: () => Promise<unknown>;
}) {
  const [values, setValues] = useState<TagValues>(() => tagValues(tag));
  const [errors, setErrors] = useState<Partial<Record<'name' | 'slug' | 'sortOrder', string>>>({});
  const [saving, setSaving] = useState(false);
  const isNew = tag === 'new';
  const extrasUnknown = !isNew && (tag.description === undefined || tag.sortOrder === undefined);
  const set = <K extends keyof TagValues>(key: K, value: TagValues[K]) =>
    setValues((previous) => ({ ...previous, [key]: value }));

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (saving) return;
    const next: typeof errors = {};
    if (!values.name.trim()) next.name = m.admin_error_required();
    if (!ADMIN_LIMITS.tagSlug.test(values.slug) || values.slug.length > ADMIN_LIMITS.tagSlugMax)
      next.slug = m.admin_error_slug();
    if (!/^-?\d{1,6}$/.test(values.sortOrder.trim())) next.sortOrder = m.admin_error_integer();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSaving(true);
    const body = {
      slug: values.slug,
      name: values.name.trim(),
      names: compactTexts({ ...values.names, en: values.name }),
      group: values.group.trim() || null,
      description: values.description.trim(),
      sortOrder: Number(values.sortOrder.trim()),
    };
    try {
      const saved = isNew ? await adminApi.createTag(body) : await adminApi.updateTag(tag.id, body);
      await onSaved();
      notify.success(m.admin_tax_tag_saved({ name: saved.name }));
      onDone();
    } catch (error) {
      reportFailure(error, m.admin_tax_save_failed());
    } finally {
      setSaving(false);
    }
  };

  return (
    <form noValidate onSubmit={(event) => void submit(event)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={m.admin_tax_field_name()} description={m.admin_tax_field_name_hint()} error={errors.name}>
          <Input
            value={values.name}
            maxLength={ADMIN_LIMITS.tagNameMax}
            autoFocus
            onChange={(event) => {
              const name = event.currentTarget.value;
              setValues((previous) => ({
                ...previous,
                name,
                ...(previous.slugTouched ? {} : { slug: slugify(name) }),
              }));
            }}
          />
        </Field>
        <Field label={m.admin_tax_field_slug()} description={m.admin_tax_field_slug_hint()} error={errors.slug}>
          <Input
            value={values.slug}
            maxLength={ADMIN_LIMITS.tagSlugMax}
            spellCheck={false}
            autoComplete="off"
            className="font-mono"
            onChange={(event) =>
              setValues((previous) => ({
                ...previous,
                slug: event.currentTarget.value.toLowerCase(),
                slugTouched: true,
              }))
            }
          />
        </Field>
        <Field label={m.admin_tax_field_group()} description={m.admin_tax_field_group_hint()} optional>
          <Input
            value={values.group}
            maxLength={ADMIN_LIMITS.tagGroupMax}
            spellCheck={false}
            placeholder="gameplay"
            onChange={(event) => set('group', event.currentTarget.value)}
          />
        </Field>
        <Field label={m.admin_tax_field_order()} description={m.admin_tax_field_order_hint()} error={errors.sortOrder}>
          <Input
            inputMode="numeric"
            value={values.sortOrder}
            onChange={(event) => set('sortOrder', event.currentTarget.value)}
          />
        </Field>
      </div>
      <Field label={m.admin_tax_field_description()} optional>
        <Textarea
          value={values.description}
          maxLength={ADMIN_LIMITS.tagDescriptionMax}
          minRows={2}
          onChange={(event) => set('description', event.currentTarget.value)}
        />
      </Field>
      <LocalizedFields
        label={m.admin_tax_field_names()}
        values={values.names}
        maxLength={ADMIN_LIMITS.tagNameMax}
        onChange={(names) => set('names', names)}
      />
      {extrasUnknown ? (
        <Banner tone="warning" title={m.admin_tax_tag_extras_unknown_title()}>
          {m.admin_tax_tag_extras_unknown_text()}
        </Banner>
      ) : null}
      <div className="flex flex-wrap justify-end gap-2">
        <DialogClose render={<Button variant="secondary" disabled={saving} />}>{m.admin_action_cancel()}</DialogClose>
        <Button type="submit" loading={saving}>
          {isNew ? m.admin_tax_add_tag() : m.admin_action_save()}
        </Button>
      </div>
    </form>
  );
}
