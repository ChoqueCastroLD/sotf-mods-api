import { useState } from 'react';
import { FilterChips, type FilterState, SortMenu, type ViewMode, ViewToggle } from '../../src/domain/index.ts';
import { DemoI18n, DemoRow } from './demo-kit.tsx';

export const title = 'Filters · FilterChips (Alt+click excludes), SortMenu, ViewToggle';

const CATEGORIES = [
  { value: 'quality-of-life', label: 'Quality of Life', count: 64 },
  { value: 'gameplay', label: 'Gameplay', count: 41 },
  { value: 'building', label: 'Building', count: 27 },
  { value: 'model-swap', label: 'Model Swap', count: 18 },
  { value: 'library', label: 'Library', count: 12 },
];

const SORTS = [
  { value: 'downloads', label: 'Most downloaded' },
  { value: 'recent', label: 'Recently updated' },
  { value: 'rating', label: 'Top rated' },
  { value: 'trending', label: 'Trending' },
] as const;

export default function FiltersDemo() {
  const [states, setStates] = useState<Record<string, FilterState>>({ gameplay: 'include', 'model-swap': 'exclude' });
  const [sort, setSort] = useState<(typeof SORTS)[number]['value']>('downloads');
  const [view, setView] = useState<ViewMode>('grid');
  return (
    <DemoI18n>
      <div className="flex flex-col gap-6">
        <DemoRow label="Callback mode">
          <FilterChips
            label="Category"
            options={CATEGORIES.map((option) => ({ ...option, state: states[option.value] }))}
            onChange={(value, next) => setStates((current) => ({ ...current, [value]: next }))}
            onClear={() => setStates({})}
          />
          <div className="flex flex-wrap items-center gap-3">
            <SortMenu value={sort} options={SORTS} onValueChange={setSort} align="start" />
            <ViewToggle value={view} onValueChange={setView} />
          </div>
        </DemoRow>
        <DemoRow label="Link mode (server-rendered Explore)">
          <FilterChips
            label="Platform"
            clearHref="#"
            options={[
              { value: 'client', label: 'Client', count: 180, state: 'include', href: '#', excludeHref: '#' },
              { value: 'server', label: 'Server', count: 22, href: '#', excludeHref: '#' },
            ]}
          />
          <div className="flex flex-wrap items-center gap-3">
            <SortMenu
              value="recent"
              options={SORTS.map((option) => ({ ...option, href: `?sort=${option.value}` }))}
              align="start"
            />
            <ViewToggle value="list" hrefs={{ grid: '#grid', list: '#list', compact: '#compact' }} />
          </div>
        </DemoRow>
      </div>
    </DemoI18n>
  );
}
