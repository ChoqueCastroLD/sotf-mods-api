/**
 * Sort menu, order toggle and view switch of an Explore listing (link mode: real URLs, no
 * hydration), rendered in one `DomainI18nProvider` tree so the domain controls speak the page
 * locale.
 */
import { m } from '@sotf/i18n/messages';
import { cn } from '@sotf/ui/cn';
import { type DomainI18n, DomainI18nProvider, SortMenu, ViewToggle } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { ArrowDownUp, LayoutGrid, List, type LucideIcon, Rows3 } from 'lucide-react';
import type { ExploreModel } from './model.ts';
import type { ExploreView } from './state.ts';

export interface ExploreToolbarProps {
  model: ExploreModel;
  i18n: DomainI18n;
}

const NEXT_VIEW: Record<ExploreView, ExploreView> = { grid: 'list', list: 'compact', compact: 'grid' };
const VIEW_ICON: Record<ExploreView, LucideIcon> = { grid: LayoutGrid, list: List, compact: Rows3 };

function viewLabel(view: ExploreView): string {
  return view === 'grid' ? m.explore_view_grid() : view === 'list' ? m.explore_view_list() : m.explore_view_compact();
}

export default function ExploreToolbar({ model, i18n }: ExploreToolbarProps) {
  const reversed = model.state.order === 'asc';
  return (
    <DomainI18nProvider value={i18n}>
      <div className="ms-auto flex items-center gap-2 md:flex-wrap">
        <SortMenu options={model.sortOptions} value={model.sortValue} className="max-md:hidden" />
        <a
          href={model.reverseOrderHref}
          rel="nofollow"
          aria-current={reversed ? 'true' : undefined}
          title={m.explore_order_reverse()}
          className={cn(
            'inline-flex size-10 items-center justify-center rounded-md border border-border-strong text-fg-muted hover:bg-fg/6 hover:text-fg max-md:hidden',
            reversed && 'bg-raised text-fg',
          )}
        >
          <Icon icon={ArrowDownUp} size={16} />
          <span className="sr-only">{m.explore_order_reverse()}</span>
        </a>
        <ViewToggle value={model.state.view} hrefs={model.viewHrefs} className="max-md:hidden" />
        {/* Mobile: one button that switches to the next view (its icon is the view you get). */}
        <a
          href={model.viewHrefs[NEXT_VIEW[model.state.view]]}
          rel="nofollow"
          data-explore-view-cycle=""
          data-mobile-only=""
          className="explore-pill size-10 justify-center !px-0"
        >
          <Icon icon={VIEW_ICON[NEXT_VIEW[model.state.view]]} size={18} />
          <span className="sr-only">
            {m.explore_view_label()}: {viewLabel(NEXT_VIEW[model.state.view])}
          </span>
        </a>
      </div>
    </DomainI18nProvider>
  );
}
