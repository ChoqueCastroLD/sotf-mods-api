/**
 * Filter rail of Explore (research/03 §6.2), server-rendered and never hydrated.
 *
 * It is a plain GET form: radios and checkboxes submit with «Apply» without JavaScript; the
 * category and tag chips are links that include or exclude a value (`FilterChips` link mode,
 * `rel=nofollow`). The client script (`scripts/explore`) applies every change instantly and
 * swaps the results in place.
 */
import { m } from '@sotf/i18n/messages';
import { buttonClasses } from '@sotf/ui/button';
import { type DomainI18n, DomainI18nProvider, FilterChips } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { ChevronDown, Search } from 'lucide-react';
import type { ExploreModel } from './model.ts';

export interface ExploreFiltersProps {
  model: ExploreModel;
  i18n: DomainI18n;
  /** Result count under the current filters (the «Show N results» button). */
  total: number | null;
}

const legendClasses = 'readout mb-2';
/** Radio options: rows on the rail (md+), pills in the mobile sheet (the radio is visually hidden). */
const choiceClasses =
  'relative flex min-h-9 cursor-pointer items-center gap-2.5 rounded-sm px-1 text-sm text-fg hover:bg-fg/6 ' +
  'has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 has-[:focus-visible]:outline-focus ' +
  'max-md:h-10 max-md:gap-1.5 max-md:rounded-full max-md:border max-md:border-border-strong max-md:px-3.5 max-md:hover:bg-transparent ' +
  'max-md:has-[:checked]:border-primary max-md:has-[:checked]:bg-primary/12 max-md:has-[:checked]:font-semibold ' +
  'max-md:has-[:checked]:before:text-primary max-md:has-[:checked]:before:content-["✓"] max-md:active:bg-fg/8';
const choiceInputClasses = 'size-4 shrink-0 accent-(--color-primary) focus-visible:outline-none max-md:sr-only';
/** Toggles: checkbox rows on the rail, switch rows (48 px) in the mobile sheet. */
const toggleClasses =
  'flex min-h-9 cursor-pointer items-center gap-2.5 rounded-sm px-1 text-sm text-fg hover:bg-fg/6 ' +
  'has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 has-[:focus-visible]:outline-focus ' +
  'max-md:min-h-12 max-md:gap-3 max-md:text-base max-md:flex-row-reverse max-md:justify-between';
const toggleInputClasses = 'explore-toggle size-4 shrink-0 accent-(--color-primary) focus-visible:outline-none';

export default function ExploreFilters({ model, i18n, total }: ExploreFiltersProps) {
  const { state } = model;
  return (
    <DomainI18nProvider value={i18n}>
      <form
        method="get"
        action={model.formAction}
        data-explore-form=""
        className="flex min-h-0 flex-1 flex-col"
        aria-label={m.explore_filters_title()}
      >
        {model.hidden.map(([name, value]) => (
          <input key={`${name}:${value}`} type="hidden" name={name} value={value} />
        ))}

        <div
          data-explore-sheet-body=""
          className="flex flex-col gap-6 overflow-y-auto overscroll-contain px-4 pb-6 md:overflow-visible md:px-0 md:pb-0"
        >
          <search className="flex flex-col gap-2">
            <label htmlFor="explore-q" className={`${legendClasses} max-md:sr-only`}>
              {m.explore_filter_search_label()}
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 start-3 flex items-center text-fg-subtle">
                <Icon icon={Search} size={16} />
              </span>
              <input
                id="explore-q"
                name="q"
                type="search"
                maxLength={100}
                defaultValue={state.q}
                enterKeyHint="search"
                autoComplete="off"
                placeholder={m.explore_filter_search_placeholder()}
                className="h-12 w-full rounded-xl border border-border-strong bg-sunken ps-10 pe-3 text-base text-fg placeholder:text-fg-subtle md:h-11 md:rounded-md md:bg-surface md:ps-9 md:text-sm"
              />
            </div>
          </search>

          {model.categoryChips.length > 0 ? (
            <FilterChips
              label={m.explore_facet_category()}
              options={model.categoryChips}
              className="max-md:[&_li>a:first-child]:h-10 max-md:[&_li>a:first-child]:px-4 max-md:[&_li>a:last-child:not(:first-child)]:size-10 max-md:[&_li[data-filter-state=off]>a:last-child:not(:first-child)]:hidden"
            />
          ) : null}

          {model.tagChips.length > 0 ? (
            <div className="flex flex-col gap-2">
              <FilterChips
                label={m.explore_facet_tags()}
                options={model.tagChips}
                className="max-md:[&_li>a:first-child]:h-10 max-md:[&_li>a:first-child]:px-4 max-md:[&_li>a:last-child:not(:first-child)]:size-10 max-md:[&_li[data-filter-state=off]>a:last-child:not(:first-child)]:hidden"
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
                    className="mt-3 max-md:[&_li>a:first-child]:h-10 max-md:[&_li>a:first-child]:px-4 max-md:[&_li>a:last-child:not(:first-child)]:size-10 max-md:[&_li[data-filter-state=off]>a:last-child:not(:first-child)]:hidden"
                  />
                </details>
              ) : null}
            </div>
          ) : null}

          {model.choices.map((group) => (
            <fieldset key={group.name} className="flex flex-col">
              <legend className={legendClasses}>{group.legend}</legend>
              <div className="flex flex-col max-md:flex-row max-md:flex-wrap max-md:gap-2">
                {group.options.map((option) => (
                  <label key={option.value || 'any'} className={choiceClasses}>
                    <input
                      type="radio"
                      name={group.name}
                      value={option.value}
                      defaultChecked={option.checked}
                      className={choiceInputClasses}
                    />
                    <span className="flex-1 max-md:flex-none">{option.label}</span>
                    {option.count !== null ? (
                      <span className="font-mono text-2xs text-fg-subtle tabular-nums">{option.count}</span>
                    ) : null}
                  </label>
                ))}
              </div>
            </fieldset>
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
          className="mt-6 flex items-center gap-3 border-t border-border bg-surface px-4 py-3 max-md:flex-row-reverse md:mt-6 md:flex-col md:items-stretch md:gap-2 md:border-0 md:bg-transparent md:p-0"
        >
          <button
            type="submit"
            data-explore-apply=""
            className={`${buttonClasses({ variant: 'primary', size: 'md' })} max-md:h-12 max-md:flex-1 max-md:text-base`}
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
              className="inline-flex min-h-11 items-center self-center text-sm font-medium text-link underline underline-offset-3 max-md:px-2"
            >
              {m.explore_clear_all()}
            </a>
          ) : null}
        </div>
      </form>
    </DomainI18nProvider>
  );
}
