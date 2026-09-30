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
const optionClasses =
  'flex min-h-9 cursor-pointer items-center gap-2.5 rounded-sm px-1 text-sm text-fg hover:bg-fg/6 ' +
  'has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 has-[:focus-visible]:outline-focus';
const inputClasses = 'size-4 shrink-0 accent-(--color-primary) focus-visible:outline-none';

export default function ExploreFilters({ model, i18n, total }: ExploreFiltersProps) {
  const { state } = model;
  return (
    <DomainI18nProvider value={i18n}>
      <form
        method="get"
        action={model.formAction}
        data-explore-form=""
        className="flex flex-col gap-6"
        aria-label={m.explore_filters_title()}
      >
        {model.hidden.map(([name, value]) => (
          <input key={`${name}:${value}`} type="hidden" name={name} value={value} />
        ))}

        <search className="flex flex-col gap-2">
          <label htmlFor="explore-q" className={legendClasses}>
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
              className="h-11 w-full rounded-md border border-border-strong bg-surface ps-9 pe-3 text-sm text-fg placeholder:text-fg-subtle"
            />
          </div>
        </search>

        {model.categoryChips.length > 0 ? (
          <FilterChips label={m.explore_facet_category()} options={model.categoryChips} />
        ) : null}

        {model.tagChips.length > 0 ? (
          <div className="flex flex-col gap-2">
            <FilterChips label={m.explore_facet_tags()} options={model.tagChips} />
            {model.moreTagChips.length > 0 ? (
              <details className="group">
                <summary className="inline-flex min-h-9 cursor-pointer list-none items-center gap-1 rounded-sm text-sm text-link underline-offset-3 hover:underline [&::-webkit-details-marker]:hidden">
                  {m.explore_tags_more({ count: model.moreTagChips.length })}
                  <Icon icon={ChevronDown} size={16} className="transition-transform group-open:rotate-180" />
                </summary>
                <FilterChips label={m.explore_facet_tags_more()} options={model.moreTagChips} className="mt-3" />
              </details>
            ) : null}
          </div>
        ) : null}

        {model.choices.map((group) => (
          <fieldset key={group.name} className="flex flex-col">
            <legend className={legendClasses}>{group.legend}</legend>
            {group.options.map((option) => (
              <label key={option.value || 'any'} className={optionClasses}>
                <input
                  type="radio"
                  name={group.name}
                  value={option.value}
                  defaultChecked={option.checked}
                  className={inputClasses}
                />
                <span className="flex-1">{option.label}</span>
                {option.count !== null ? (
                  <span className="font-mono text-2xs text-fg-subtle tabular-nums">{option.count}</span>
                ) : null}
              </label>
            ))}
          </fieldset>
        ))}

        <fieldset className="flex flex-col">
          <legend className={legendClasses}>{m.explore_facet_more()}</legend>
          {model.toggles.map((toggle) => (
            <label key={toggle.name} className={optionClasses}>
              <input
                type="checkbox"
                name={toggle.name}
                value={toggle.value}
                defaultChecked={toggle.checked}
                className={inputClasses}
              />
              <span className="flex-1">{toggle.label}</span>
            </label>
          ))}
        </fieldset>

        <div className="sticky bottom-0 -mx-1 flex flex-col gap-2 bg-bg/95 px-1 py-3 backdrop-blur-sm lg:static lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <button type="submit" data-explore-apply="" className={buttonClasses({ variant: 'primary', size: 'md' })}>
            <span data-explore-apply-label="">
              {total === null ? m.explore_filters_apply() : m.explore_filters_show_results({ count: total })}
            </span>
          </button>
          {model.activeCount > 0 ? (
            <a
              href={model.clearHref}
              rel="nofollow"
              data-explore-nav=""
              className="self-center text-sm text-link underline underline-offset-3"
            >
              {m.explore_clear_all()}
            </a>
          ) : null}
        </div>
      </form>
    </DomainI18nProvider>
  );
}
