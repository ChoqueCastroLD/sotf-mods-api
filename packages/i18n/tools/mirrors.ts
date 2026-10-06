/**
 * Mirrored messages (error of `pnpm i18n:check`): some namespaces copy a few `common_*` texts so a
 * lazily loaded island ships only its own catalog (the Cmd+K palette, WP-72: size budget). The
 * copy must stay identical to its source in every locale, so a change to `common` (or a native
 * review) cannot leave the palette with the old wording.
 */
import { LOCALES } from '../src/locales.ts';
import type { Catalog, Diagnostic, Namespace } from './catalog.ts';

/** Mirror key → source key. */
export const MIRRORED_MESSAGES: Readonly<Record<string, string>> = {
  cmdk_term_mods: 'common_term_mods',
  cmdk_term_builds: 'common_term_builds',
  cmdk_mods_count: 'common_mods_count',
  cmdk_downloads: 'common_downloads_compact',
  cmdk_offline: 'common_state_offline',
  cmdk_retry: 'common_action_retry',
  cmdk_close: 'common_action_close',
};

function namespaceOf(catalog: Catalog, key: string): Namespace | undefined {
  return catalog.namespaces.find((namespace) => key.startsWith(`${namespace.prefix}_`));
}

/** Errors for mirrors that differ from (or lost) their source. */
export function mirrorDiagnostics(
  catalog: Catalog,
  mirrors: Readonly<Record<string, string>> = MIRRORED_MESSAGES,
): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  for (const [mirror, source] of Object.entries(mirrors)) {
    const mirrorNs = namespaceOf(catalog, mirror);
    const sourceNs = namespaceOf(catalog, source);
    if (!mirrorNs || !sourceNs) continue;
    for (const locale of LOCALES) {
      const mirrorFile = mirrorNs.files.get(locale);
      const sourceFile = sourceNs.files.get(locale);
      if (!mirrorFile || !sourceFile) continue;
      const copy = mirrorFile.messages.get(mirror);
      const original = sourceFile.messages.get(source);
      if (copy === undefined && original === undefined) continue;
      if (copy === undefined || original === undefined) {
        diagnostics.push({
          level: 'error',
          file: mirrorFile.file,
          key: mirror,
          message: `Mirror of ${source}: ${copy === undefined ? 'the mirror' : 'the source'} is missing`,
        });
      } else if (copy !== original) {
        diagnostics.push({
          level: 'error',
          file: mirrorFile.file,
          key: mirror,
          message: `Mirror of ${source} differs: expected ${JSON.stringify(original)}`,
        });
      }
    }
  }
  return diagnostics;
}
