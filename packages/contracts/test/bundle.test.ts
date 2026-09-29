/**
 * The typed client must stay light for islands (PLAN §2.5, §8.2): its runtime import graph may not
 * reach Zod or any schema module. Type-only imports (`import type`) are erased and allowed.
 */
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { PACKAGE_DIR } from '../scripts/gen-legacy.ts';
import { generateRoutesModule, ROUTES_FILE } from '../scripts/gen-routes.ts';

/** Runtime (non `import type`) specifiers of a module, including re-exports. */
function runtimeImports(file: string): string[] {
  const source = readFileSync(file, 'utf8');
  const specifiers: string[] = [];
  const re = /^\s*(import|export)\s+(?!type\s)([^'";]*?\sfrom\s+)?['"]([^'"]+)['"]/gm;
  for (const match of source.matchAll(re)) {
    const clause = match[2] ?? '';
    // `export { a } from` and `import { a } from` are runtime; `export type {}` excluded by the regex.
    if (match[1] === 'export' && !clause) continue;
    specifiers.push(match[3] ?? '');
  }
  return specifiers;
}

function runtimeGraph(entry: string): Set<string> {
  const seen = new Set<string>();
  const visit = (file: string) => {
    if (seen.has(file)) return;
    seen.add(file);
    for (const spec of runtimeImports(file)) {
      if (spec.startsWith('.')) visit(resolve(dirname(file), spec));
      else seen.add(spec);
    }
  };
  visit(entry);
  return seen;
}

describe('client bundle', () => {
  it('does not reach zod or schema modules at runtime', () => {
    const graph = [...runtimeGraph(join(PACKAGE_DIR, 'src', 'client.ts'))].map((f) => f.replace(`${PACKAGE_DIR}/`, ''));
    expect(graph).not.toContain('zod');
    expect(graph.sort()).toEqual(['src/client.ts', 'src/endpoint.ts', 'src/error-codes.ts', 'src/routes.gen.ts']);
  });

  it('keeps src/routes.gen.ts in sync with the contracts', () => {
    expect(generateRoutesModule()).toBe(readFileSync(ROUTES_FILE, 'utf8'));
  });
});
