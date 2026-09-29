import { useUiTranslate } from './labels.ts';

export interface SkipLinkProps {
  /** Id of the main landmark. Default `main`. */
  target?: string;
  label?: string;
}

/** First focusable element of every page: jumps past the header to the main content. */
export function SkipLink({ target = 'main', label }: SkipLinkProps) {
  const t = useUiTranslate();
  return (
    <a
      href={`#${target}`}
      className="sr-only rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-fg focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-(--z-skip)"
    >
      {label ?? t('ui_skip_to_content')}
    </a>
  );
}
