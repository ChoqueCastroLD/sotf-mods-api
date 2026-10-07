/**
 * Filter rail of Explore (research/03 §6.2), server-rendered and never hydrated.
 *
 * It is a plain GET form: selects and checkboxes submit with «Apply» without JavaScript; the
 * category and tag chips are links that include or exclude a value (`FilterChips` link mode,
 * `rel=nofollow`). The client script (`scripts/explore`) applies every change instantly and
 * swaps the results in place.
 */
import { m } from '@sotf/i18n/messages';
import { buttonClasses } from '@sotf/ui/button';
import { type DomainI18n, DomainI18nProvider, FilterChips } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { ChevronDown } from 'lucide-react';
import type { ExploreModel } from './model.ts';

export interface ExploreFiltersProps {
  model: ExploreModel;
  i18n: DomainI18n;
  /** Result count under the current filters (the «Show N results» button). */
  total: number | null;
}

/** Id of the filter form: the search box and the page size select outside the rail belong to it. */
export const FORM_ID = 'explore-form';

const legendClasses = 'text-xs font-medium text-fg-muted';
/** Select of a facet (multiplayer, platform, updated, rating, downloads). */
const selectClasses =
  'h-9 w-full appearance-none rounded-md border border-border-strong bg-sunken ps-3 pe-9 text-sm text-fg transition-colors ' +
  'hover:border-fg-subtle focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus max-lg:h-11 max-lg:text-base';
/** Toggles: checkbox rows on the rail, switch rows (48 px) in the mobile sheet. */
const toggleClasses =
  'flex min-h-8 cursor-pointer items-center gap-2.5 rounded-sm px-1 text-sm text-fg hover:bg-fg/6 ' +
  'has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 has-[:focus-visible]:outline-focus ' +
  'max-lg:min-h-12 max-lg:gap-3 max-lg:text-base max-lg:flex-row-reverse max-lg:justify-between';
const toggleInputClasses = 'explore-toggle size-4 shrink-0 accent-(--color-primary) focus-visible:outline-none';

export default function ExploreFilters({ model, i18n, total }: ExploreFiltersProps) {
  return (
    <DomainI18nProvider value={i18n}>
      <form
        method="get"
        action={model.formAction}
        id={FORM_ID}
        data-explore-form=""
        className="flex min-h-0 flex-1 flex-col"
        aria-label={m.explore_filters_title()}
      >
        {model.hidden.map(([name, value]) => (
          <input key={`${name}:${value}`} type="hidden" name={name} value={value} />
        ))}

        <div
          data-explore-sheet-body=""
          className="flex flex-col gap-4 overflow-y-auto overscroll-contain lg:gap-5 px-4 pb-6 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {model.categoryChips.length > 0 ? (
            <FilterChips
              label={m.explore_facet_category()}
              options={model.categoryChips}
              className="max-lg:[&_li>a:first-child]:h-10 max-lg:[&_li>a:first-child]:px-4 max-lg:[&_li>a:last-child:not(:first-child)]:size-10 max-lg:[&_li[data-filter-state=off]>a:last-child:not(:first-child)]:hidden"
            />
          ) : null}

          {model.tagChips.length > 0 ? (
            <div className="flex flex-col gap-2">
              <FilterChips
                label={m.explore_facet_tags()}
                options={model.tagChips}
                className="max-lg:[&_li>a:first-child]:h-10 max-lg:[&_li>a:first-child]:px-4 max-lg:[&_li>a:last-child:not(:first-child)]:size-10 max-lg:[&_li[data-filter-state=off]>a:last-child:not(:first-child)]:hidden"
              />
              {model.moreTagChips.length > 0 ? (
                <details className="group">
                  <summary className="inline-flex min-h-9 cursor-pointer list-none items-center gap-1 rounded-sm text-sm text-link underline-offset-3 hover:underline [&::-webkit-details-marker]:hidden">
                    {m.explore_tags_more({ count: model.moreTagChips.length })}
                    <Icon icon={ChevronDown} size={16} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <FilterChips
                    label={m.explore_facet_tags_more()}
                    options={model.moreTagChips}
                    className="mt-3 max-lg:[&_li>a:first-child]:h-10 max-lg:[&_li>a:first-child]:px-4 max-lg:[&_li>a:last-child:not(:first-child)]:size-10 max-lg:[&_li[data-filter-state=off]>a:last-child:not(:first-child)]:hidden"
                  />
                </details>
              ) : null}
            </div>
          ) : null}

          {model.choices.map((group) => (
            <div key={group.name} className="flex flex-col gap-1">
              <label htmlFor={`explore-${group.name}`} className={legendClasses}>
                {group.legend}
              </label>
              <span className="relative block">
                <select
                  id={`explore-${group.name}`}
                  name={group.name}
                  defaultValue={group.options.find((option) => option.checked)?.value ?? ''}
                  className={selectClasses}
                >
                  {group.options.map((option) => (
                    <option key={option.value || 'any'} value={option.value}>
                      {option.count !== null ? `${option.label} (${option.count})` : option.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-fg-subtle">
                  <Icon icon={ChevronDown} size={16} />
                </span>
              </span>
            </div>
          ))}

          <fieldset className="flex flex-col">
            <legend className={legendClasses}>{m.explore_facet_more()}</legend>
            {model.toggles.map((toggle) => (
              <label key={toggle.name} className={toggleClasses}>
                <input
                  type="checkbox"
                  name={toggle.name}
                  value={toggle.value}
                  defaultChecked={toggle.checked}
                  className={toggleInputClasses}
                />
                <span className="flex-1">{toggle.label}</span>
              </label>
            ))}
          </fieldset>
        </div>

        <div
          data-explore-sheet-footer=""
          className="mt-6 flex items-center gap-3 border-t border-border bg-surface px-4 py-3 max-lg:flex-row-reverse lg:mt-6 lg:flex-col lg:items-stretch lg:gap-2 lg:border-0 lg:bg-transparent lg:p-0"
        >
          <button
            type="submit"
            data-explore-apply=""
            className={`${buttonClasses({ variant: 'primary', size: 'md' })} max-lg:h-12 max-lg:flex-1 max-lg:text-base`}
          >
            <span data-explore-apply-label="">
              {total === null ? m.explore_filters_apply() : m.explore_filters_show_results({ count: total })}
            </span>
          </button>
          {model.activeCount > 0 ? (
            <a
              href={model.clearHref}
              rel="nofollow"
              data-explore-nav=""
              className="inline-flex min-h-11 items-center self-center text-sm font-medium text-link underline underline-offset-3 max-lg:px-2"
            >
              {m.explore_clear_all()}
            </a>
          ) : null}
        </div>
      </form>
    </DomainI18nProvider>
  );
}
