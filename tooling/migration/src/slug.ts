/**
 * Strict URL slugs for v2 (backfill B3, PLAN §4.6): `[a-z0-9-]` only, transliterated, dashes
 * collapsed and trimmed. `regi's-modding-library` → `regis-modding-library`,
 * `immersivecompanioninjuries(beta)` → `immersivecompanioninjuries-beta`,
 * `dynamic_survival_matrix` → `dynamic-survival-matrix`, `virginia-wardrobe-18+` →
 * `virginia-wardrobe-18`.
 */

const SPECIAL: Readonly<Record<string, string>> = {
  ß: 'ss',
  æ: 'ae',
  œ: 'oe',
  ø: 'o',
  đ: 'd',
  ð: 'd',
  þ: 'th',
  ł: 'l',
  ı: 'i',
  ŋ: 'n',
  ħ: 'h',
};

/** Maximum length of a canonical slug (the legacy name limit is shorter; this is a safety net). */
export const MAX_SLUG_LENGTH = 96;

export function canonicalSlug(value: string): string {
  const lower = value.normalize('NFKD').toLowerCase();
  let out = '';
  for (const ch of lower) {
    if (/\p{M}/u.test(ch)) continue; // combining marks left by NFKD (é → e)
    if (/[a-z0-9]/.test(ch)) out += ch;
    else if (SPECIAL[ch]) out += SPECIAL[ch];
    else if (ch === "'" || ch === '’' || ch === '`')
      continue; // apostrophes join words
    else out += '-';
  }
  return out.replace(/-+/g, '-').replace(/^-|-$/g, '').slice(0, MAX_SLUG_LENGTH).replace(/-$/, '');
}

/**
 * Canonical slugs for the mods of one owner, deterministic: mods whose legacy slug is already
 * canonical keep it; the others take their canonical form, or `-2`, `-3`… when that collides with
 * a slug already taken by the same owner. Mods are processed in id order.
 */
export function assignCanonicalSlugs(
  mods: ReadonlyArray<{ id: number; slug: string; name: string }>,
  taken: Iterable<string> = [],
): Map<number, string> {
  const used = new Set([...taken].map((s) => s.toLowerCase()));
  const result = new Map<number, string>();
  const ordered = [...mods].sort((a, b) => a.id - b.id);
  for (const m of ordered) {
    if (canonicalSlug(m.slug) === m.slug && !used.has(m.slug)) {
      used.add(m.slug);
      result.set(m.id, m.slug);
    }
  }
  for (const m of ordered) {
    if (result.has(m.id)) continue;
    const base = canonicalSlug(m.slug) || canonicalSlug(m.name) || `mod-${m.id}`;
    let candidate = base;
    for (let n = 2; used.has(candidate); n += 1) candidate = `${base}-${n}`;
    used.add(candidate);
    result.set(m.id, candidate);
  }
  return result;
}
