/**
 * Completions of the operator being typed (`cat:` → the categories, `by:ax` → users starting
 * with «ax», `sort:` → the four orders…). They are ordinary rows of the list, so the arrows and
 * Enter complete them; the palette then writes `op:value ` into the field.
 */
import type { PaletteIndex } from './engine.ts';
import { t } from './i18n.ts';
import { MP_VALUES, type Operator, type OperatorToken, SORTS, TYPE_VALUES } from './operators.ts';
import { fold } from './text.ts';
import type { SuggestionItem } from './types.ts';

const MAX = 8;

function label(op: Operator, value: string): string {
  switch (op) {
    case 'sort':
      return t(
        value === 'downloads'
          ? 'cmdk_sort_downloads'
          : value === 'new'
            ? 'cmdk_sort_new'
            : value === 'updated'
              ? 'cmdk_sort_updated'
              : 'cmdk_sort_rating',
      );
    case 'type':
      return t(value === 'mod' ? 'cmdk_kind_mod' : value === 'library' ? 'cmdk_kind_library' : 'cmdk_kind_build');
    default:
      return t(value === 'yes' ? 'cmdk_mp_yes' : 'cmdk_mp_no');
  }
}

export function operatorLabel(op: Operator): string {
  switch (op) {
    case 'by':
      return t('cmdk_op_by');
    case 'cat':
      return t('cmdk_op_cat');
    case 'sort':
      return t('cmdk_op_sort');
    case 'type':
      return t('cmdk_op_type');
    default:
      return t('cmdk_op_mp');
  }
}

export function buildSuggestions(pending: OperatorToken | null, index: PaletteIndex | null): SuggestionItem[] {
  if (!pending) return [];
  const typed = fold(pending.value);
  const make = (
    value: string,
    title: string,
    detail: string | null,
    thumb: string | null = null,
    avatar = false,
  ): SuggestionItem => ({
    key: `suggest:${pending.op}:${value}`,
    type: 'suggestion',
    operator: pending.op,
    value,
    title,
    detail,
    thumb,
    avatar,
  });
  const out: SuggestionItem[] = [];

  if (pending.op === 'cat') {
    for (const [slug, name] of index?.categoryList() ?? []) {
      if (typed && !fold(slug).startsWith(typed) && !fold(name).includes(typed)) continue;
      out.push(make(slug, name, `cat:${slug}`));
    }
  } else if (pending.op === 'by') {
    for (const user of index?.top('user', 400) ?? []) {
      const handle = user.handle ?? '';
      if (typed && !fold(handle).startsWith(typed) && !fold(user.title).startsWith(typed)) continue;
      out.push(
        make(handle, user.title, `@${handle} · ${t('cmdk_mods_count', { count: user.count ?? 0 })}`, user.thumb, true),
      );
    }
  } else {
    const values: readonly string[] = pending.op === 'sort' ? SORTS : pending.op === 'type' ? TYPE_VALUES : MP_VALUES;
    for (const value of values) {
      const title = label(pending.op, value);
      if (typed && !value.startsWith(typed) && !fold(title).startsWith(typed)) continue;
      out.push(make(value, title, `${pending.op}:${value}`));
    }
  }
  return out.slice(0, MAX);
}
