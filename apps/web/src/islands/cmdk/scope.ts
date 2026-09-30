/**
 * Scopes of the palette (PLAN §7.9, research/03 §5.5): typed as prefixes — `mods:`, `builds:`,
 * `kits:`, `@creator`, `>` for actions, `ask:` / `?` for Scout (only offered when the API says it is available) — or picked with `Tab` / the chips. A typed prefix is
 * consumed into the scope chip, so the input only keeps the words.
 */

export const SCOPES = ['all', 'mods', 'builds', 'kits', 'creators', 'actions', 'scout'] as const;
export type Scope = (typeof SCOPES)[number];

export interface ParsedQuery {
  /** Scope introduced by a prefix, or `null` when the text has none. */
  scope: Scope | null;
  /** Text without the prefix. */
  text: string;
}

const WORD_PREFIXES: ReadonlyArray<readonly [RegExp, Scope]> = [
  [/^\s*(?:mods?|libs?|libraries):\s*/i, 'mods'],
  [/^\s*(?:builds?|blueprints?):\s*/i, 'builds'],
  [/^\s*kits?:\s*/i, 'kits'],
  [/^\s*(?:creators?|users?):\s*/i, 'creators'],
  [/^\s*(?:actions?|commands?):\s*/i, 'actions'],
  [/^\s*(?:ask|scout):\s*/i, 'scout'],
];

/** Detects a scope prefix at the start of the typed text. */
export function parseQuery(raw: string): ParsedQuery {
  for (const [pattern, scope] of WORD_PREFIXES) {
    const found = pattern.exec(raw);
    if (found) return { scope, text: raw.slice(found[0].length) };
  }
  const trimmed = raw.trimStart();
  if (trimmed.startsWith('>')) return { scope: 'actions', text: trimmed.slice(1).trimStart() };
  if (trimmed.startsWith('?')) return { scope: 'scout', text: trimmed.slice(1).trimStart() };
  if (trimmed.startsWith('@')) return { scope: 'creators', text: trimmed.slice(1) };
  return { scope: null, text: raw };
}

/** Next scope for `Tab` (`step` = 1) or `Shift+Tab` (`step` = -1). */
export function cycleScope(scope: Scope, step: 1 | -1, scopes: readonly Scope[] = SCOPES): Scope {
  const index = scopes.indexOf(scope);
  return scopes[(index + step + scopes.length) % scopes.length] ?? 'all';
}
