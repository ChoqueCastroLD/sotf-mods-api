/**
 * `@sotf/ui` labels inside the console (docs/backlog/WP-12.md): the primitives' `ui_*` messages
 * from the shell catalogue of the active locale (`lib/messages.ts`), English as the last resort.
 */
import { englishUiTranslate, type UiTranslate } from '@sotf/ui/labels';
import { tDynamic } from './messages.ts';

export const uiTranslate: UiTranslate = (key, params) => tDynamic(key, params) ?? englishUiTranslate(key, params);

/** Browser time zone (per-user UI may show local dates; public HTML stays UTC). */
export function browserTimeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch {
    return 'UTC';
  }
}
