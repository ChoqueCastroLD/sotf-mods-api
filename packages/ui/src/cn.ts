/**
 * `cn()`: joins class names (strings, arrays and `{ class: condition }` maps), skipping falsy
 * values. A dependency-free equivalent of `clsx` (≈ 200 B).
 *
 * It does **not** resolve Tailwind conflicts (no tailwind-merge: ≈ 7 KB br would blow the 3 KB
 * budget of a `Button`). Components expose variants and sizes instead of expecting overrides, so
 * a `className` passed by a caller should add layout (margin, width, grid placement), not fight
 * the component's own colour or size utilities.
 */
export type ClassValue = string | number | bigint | boolean | null | undefined | ClassDictionary | ClassValue[];

export type ClassDictionary = Record<string, unknown>;

function append(out: string[], value: ClassValue): void {
  if (!value) return;
  if (typeof value === 'string') {
    out.push(value);
  } else if (typeof value === 'number' || typeof value === 'bigint') {
    out.push(String(value));
  } else if (Array.isArray(value)) {
    for (const item of value) append(out, item);
  } else if (typeof value === 'object') {
    for (const key of Object.keys(value)) {
      if (value[key]) out.push(key);
    }
  }
}

export function cn(...values: ClassValue[]): string {
  const out: string[] = [];
  for (const value of values) append(out, value);
  return out.join(' ');
}
