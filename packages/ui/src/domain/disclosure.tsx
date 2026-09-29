/**
 * A dropdown built on `<details data-disclosure>` (the WAI disclosure pattern): it opens and its
 * links work without JavaScript on server-rendered pages; `enhance()` of `@sotf/ui/enhance` (or
 * hydration, through the effect below) adds «Escape closes and returns focus» and «click outside
 * closes». Used by `DownloadSplitButton` and `SortMenu`.
 */
import { ChevronDown } from 'lucide-react';
import { type KeyboardEvent, type ReactNode, useEffect, useRef } from 'react';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import { floatingPanelClasses } from '../surfaces.ts';

export interface DisclosureMenuProps {
  /** Content of the `<summary>` (the chevron is added). */
  summary: ReactNode;
  summaryClassName?: string;
  /** Hide the chevron (the summary brings its own icon). */
  hideChevron?: boolean;
  children: ReactNode;
  align?: 'start' | 'end';
  placement?: 'top' | 'bottom';
  panelClassName?: string;
  className?: string;
}

export function DisclosureMenu({
  summary,
  summaryClassName,
  hideChevron = false,
  children,
  align = 'start',
  placement = 'bottom',
  panelClassName,
  className,
}: DisclosureMenuProps) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const details = ref.current;
    if (!details) return;
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !details.contains(event.target)) details.open = false;
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, []);

  const onKeyDown = (event: KeyboardEvent<HTMLDetailsElement>) => {
    if (event.key === 'Escape' && event.currentTarget.open) {
      event.currentTarget.open = false;
      event.currentTarget.querySelector('summary')?.focus();
    }
  };

  return (
    <details ref={ref} data-disclosure="" className={cn('group/disclosure relative', className)} onKeyDown={onKeyDown}>
      <summary className={cn('cursor-pointer list-none [&::-webkit-details-marker]:hidden', summaryClassName)}>
        {summary}
        {hideChevron ? null : (
          <Icon
            icon={ChevronDown}
            size={16}
            className="transition-transform duration-(--dur-fast) group-open/disclosure:rotate-180"
          />
        )}
      </summary>
      <div
        className={cn(
          floatingPanelClasses,
          'absolute z-(--z-dropdown) max-h-[min(24rem,70dvh)] min-w-full overflow-y-auto p-1',
          align === 'end' ? 'end-0' : 'start-0',
          placement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2',
          panelClassName,
        )}
      >
        {children}
      </div>
    </details>
  );
}

/** Class list of an item inside a `DisclosureMenu` (link or button). */
export const disclosureItemClasses =
  'flex min-h-9 w-full items-center gap-2 rounded-sm px-2.5 py-1.5 text-start text-sm text-fg hover:bg-fg/8 ' +
  'aria-[current=true]:font-semibold';
