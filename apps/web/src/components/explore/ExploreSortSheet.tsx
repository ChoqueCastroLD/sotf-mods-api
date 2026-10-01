/**
 * Sort as an action sheet (mobile, below `md`): every option is a link to the sorted listing
 * (the script follows it in place and closes the sheet), the current one is ticked, and a last
 * row reverses the order. Server-rendered and never hydrated; without JavaScript the sheet opens
 * through `:target`.
 */
import { m } from '@sotf/i18n/messages';
import { Icon } from '@sotf/ui/icons';
import { ArrowDownUp, Check, X } from 'lucide-react';
import type { ExploreModel } from './model.ts';

export interface ExploreSortSheetProps {
  model: ExploreModel;
}

export default function ExploreSortSheet({ model }: ExploreSortSheetProps) {
  const reversed = model.state.order === 'asc';
  const row =
    'flex min-h-14 w-full items-center gap-3 rounded-xl px-3 text-start text-base text-fg active:bg-fg/8 ' +
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-focus';
  return (
    <aside
      id="explore-sort"
      data-explore-sheet="sort"
      data-explore-intercept=""
      aria-labelledby="explore-sort-title"
      className="explore-sheet explore-sheet-actions"
    >
      <div data-sheet-handle="" className="explore-sheet-handle md:hidden">
        <span />
      </div>
      <div data-sheet-drag="" className="flex items-center justify-between gap-2 px-4 pb-1">
        <h2 id="explore-sort-title" className="font-display-caps text-display-xs text-fg">
          {m.explore_sort_title()}
        </h2>
        <a
          href="#explore-results"
          data-explore-sheet-close=""
          className="inline-flex size-11 items-center justify-center rounded-md text-fg-muted hover:bg-fg/8 hover:text-fg"
        >
          <Icon icon={X} size={20} />
          <span className="sr-only">{m.explore_sort_close()}</span>
        </a>
      </div>
      <ul className="overflow-y-auto overscroll-contain px-2 pb-2">
        {model.sortOptions.map((option) => {
          const selected = option.value === model.sortValue;
          return (
            <li key={option.value}>
              <a
                href={option.href ?? '#'}
                rel="nofollow"
                aria-current={selected ? 'true' : undefined}
                className={`${row} ${selected ? 'bg-primary/10 font-semibold' : ''}`}
              >
                <span className="flex-1">{option.label}</span>
                {selected ? <Icon icon={Check} size={20} className="text-primary" /> : null}
              </a>
            </li>
          );
        })}
        <li className="mt-1 border-t border-border pt-1">
          <a href={model.reverseOrderHref} rel="nofollow" aria-current={reversed ? 'true' : undefined} className={row}>
            <Icon icon={ArrowDownUp} size={20} className="text-fg-muted" />
            <span className="flex-1">{m.explore_order_reverse()}</span>
            {reversed ? <Icon icon={Check} size={20} className="text-primary" /> : null}
          </a>
        </li>
      </ul>
    </aside>
  );
}
