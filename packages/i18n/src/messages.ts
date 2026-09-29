/**
 * Every UI message, compiled by Paraglide (one module per message, so bundlers keep only the
 * messages a page or island actually calls).
 *
 *   import { m } from '@sotf/i18n/messages';
 *   m.common_action_save();                          // current locale (see ./runtime.ts)
 *   m.common_mods_count({ count: 3 });               // ICU plural
 *   m.errors_not_found_title({}, { locale: 'es' });  // explicit locale
 *
 * Named imports work too: `import { common_action_save } from '@sotf/i18n/messages'`.
 * Messages are generated from `messages/<namespace>/<locale>.json` by `pnpm gen`.
 */
import './runtime.ts';

export * from '../.generated/paraglide/messages/_index.js';
export * as m from '../.generated/paraglide/messages/_index.js';
