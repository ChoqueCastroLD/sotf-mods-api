/**
 * Sort menu and order toggle of an Explore listing (link mode: real URLs, no hydration), rendered
 * in one `DomainI18nProvider` tree so the domain controls speak the page locale. Below `lg` the
 * sort lives in the toolbar's sheet pill instead.
 */
import { m } from '@sotf/i18n/messages';
import { cn } from '@sotf/ui/cn';
import { type DomainI18n, DomainI18nProvider, SortMenu } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { ArrowDownUp } from 'lucide-react';
import type { ExploreModel } from './model.ts';
import { defaultOrderOf } from './state.ts';

export interface ExploreToolbarProps {
  model: ExploreModel;
  i18n: DomainI18n;
}

export default function ExploreToolbar({ model, i18n }: ExploreToolbarProps) {
  const reversed = model.state.order !== defaultOrderOf(model.state.sort);
  return (
    <DomainI18nProvider value={i18n}>
      <div className="ms-auto flex items-center gap-2 max-lg:hidden">
        <SortMenu options={model.sortOptions} value={model.sortValue} />
        <a
          href={model.reverseOrderHref}
          rel="nofollow"
          aria-current={reversed ? 'true' : undefined}
          title={m.explore_order_reverse()}
          className={cn(
            'inline-flex size-10 items-center justify-center rounded-md border border-border-strong text-fg-muted transition-colors hover:bg-fg/6 hover:text-fg',
            reversed && 'bg-raised text-fg',
          )}
        >
          <Icon icon={ArrowDownUp} size={16} />
          <span className="sr-only">{m.explore_order_reverse()}</span>
        </a>
      </div>
    </DomainI18nProvider>
  );
}
