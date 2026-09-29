/**
 * Builds `.generated/` (PLAN §2.6, §7.11): merges every namespace into one inlang message file per
 * locale (`.generated/<locale>.json`) and compiles them with Paraglide JS 2 into tree-shakeable,
 * typed message modules (`.generated/paraglide/`).
 *
 * The inlang project is loaded **in memory** with the message-format plugin provided from
 * node_modules: the build never downloads plugins from a CDN and never writes into
 * `project.inlang/`. `project.inlang/settings.json` stays the declarative project file (and is
 * checked against `src/locales.ts`).
 *
 * Output is deterministic, committed, and verified by `pnpm i18n:check` and CI stage 2b.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { compileProject } from '@inlang/paraglide-js';
import plugin from '@inlang/plugin-message-format';
import { loadProjectInMemory, newProject, type ProjectSettings } from '@inlang/sdk';
import { DEFAULT_LOCALE, LOCALES, type Locale } from '../src/locales.ts';
import type { IcuNode } from './icu.ts';
import { type InlangMessage, toInlangMessage } from './inlang.ts';

export const GENERATED_DIR = '.generated';
export const PARAGLIDE_DIR = 'paraglide';
export const PLUGIN_KEY = 'plugin.inlang.messageFormat';
export const MESSAGE_FORMAT_SCHEMA = 'https://inlang.com/schema/inlang-message-format';

/**
 * Paraglide compiler options (see the README "Runtime" section):
 * - `globalVariable` → client-side `setLocale()` wins (console SPA);
 * - `custom-html` → islands follow `<html lang>` of the SSR page (registered in src/runtime.ts);
 * - `baseLocale` → English. On the server, src/server.ts replaces `getLocale()` with the
 *   per-request AsyncLocalStorage value.
 */
export const COMPILER_OPTIONS = {
  strategy: ['globalVariable', 'custom-html', 'baseLocale'],
  outputStructure: 'message-modules',
  emitTsDeclarations: true,
  emitGitIgnore: false,
  emitPrettierIgnore: false,
  emitReadme: false,
  includeEslintDisableComment: true,
} as const;

const GENERATED_README = `# Generated: do not edit

Everything in this directory is produced by \`pnpm gen\` (packages/i18n/tools/cli/gen.ts) from
\`packages/i18n/messages/<namespace>/<locale>.json\`:

- \`<locale>.json\`: all namespaces merged, converted from ICU to the inlang message format.
- \`paraglide/\`: Paraglide JS 2 output (one module per message, with type declarations).

Edit the source messages and run \`pnpm gen\`. On merge conflicts, take either side and regenerate.
`;

/** Messages to build, per locale (every locale must have the same keys). */
export type ParsedMessages = ReadonlyMap<Locale, ReadonlyMap<string, readonly IcuNode[]>>;

export function readProjectSettings(root: string): ProjectSettings {
  const path = join(root, 'project.inlang', 'settings.json');
  const settings = JSON.parse(readFileSync(path, 'utf8')) as ProjectSettings;
  const locales = settings.locales as readonly string[];
  if (settings.baseLocale !== DEFAULT_LOCALE || locales.join() !== LOCALES.join()) {
    throw new Error(
      `project.inlang/settings.json must declare baseLocale "${DEFAULT_LOCALE}" and locales ${JSON.stringify(LOCALES)} (src/locales.ts)`,
    );
  }
  if ((settings.modules ?? []).length > 0) {
    throw new Error('project.inlang/settings.json must not load plugin modules (the build provides them)');
  }
  return settings;
}

/** Merged inlang JSON per locale, keys sorted for stable diffs. */
export function mergeMessages(messages: ParsedMessages): Map<Locale, string> {
  const merged = new Map<Locale, string>();
  for (const locale of LOCALES) {
    const entries = messages.get(locale);
    if (!entries) throw new Error(`No messages for locale ${locale}`);
    const out: Record<string, InlangMessage | string> = { $schema: MESSAGE_FORMAT_SCHEMA };
    for (const key of [...entries.keys()].sort()) {
      out[key] = toInlangMessage(entries.get(key) as IcuNode[]);
    }
    merged.set(locale, `${JSON.stringify(out, null, 2)}\n`);
  }
  return merged;
}

/**
 * Produces every file of `.generated/` in memory: path (relative to `.generated/`) → content.
 */
export async function buildGenerated(
  root: string,
  messages: ParsedMessages,
  options: { emitTsDeclarations?: boolean } = {},
): Promise<Map<string, string>> {
  const settings = readProjectSettings(root);
  const merged = mergeMessages(messages);
  const files = new Map<string, string>([['README.md', GENERATED_README]]);
  for (const [locale, json] of merged) files.set(`${locale}.json`, json);

  const project = await loadProjectInMemory({
    blob: await newProject({ settings }),
    providePlugins: [plugin],
  });
  try {
    const encoder = new TextEncoder();
    await project.importFiles({
      pluginKey: PLUGIN_KEY,
      files: [...merged].map(([locale, json]) => ({ locale, content: encoder.encode(json) })),
    });
    const errors = await project.errors.get();
    if (errors.length > 0) {
      const summary = errors.map((error) => error.message).join('; ');
      throw new AggregateError(errors, `The inlang project reported ${errors.length} error(s): ${summary}`);
    }
    const output = await compileProject({
      project,
      compilerOptions: {
        ...COMPILER_OPTIONS,
        strategy: [...COMPILER_OPTIONS.strategy],
        emitTsDeclarations: options.emitTsDeclarations ?? COMPILER_OPTIONS.emitTsDeclarations,
      },
    });
    for (const [path, content] of Object.entries(output)) {
      files.set(`${PARAGLIDE_DIR}/${path}`, content.endsWith('\n') ? content : `${content}\n`);
    }
  } finally {
    await project.close();
  }
  return new Map([...files].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));
}

function listFiles(dir: string, base = dir): string[] {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full, base));
    else out.push(relative(base, full).replaceAll('\\', '/'));
  }
  return out.sort();
}

/** Paths (relative to `.generated/`) that are missing, different or extra on disk. */
export function diffGenerated(root: string, files: ReadonlyMap<string, string>): string[] {
  const dir = join(root, GENERATED_DIR);
  const stale: string[] = [];
  const onDisk = new Set(listFiles(dir));
  for (const [path, content] of files) {
    if (!onDisk.has(path)) stale.push(`${path} (missing)`);
    else if (readFileSync(join(dir, path), 'utf8') !== content) stale.push(`${path} (outdated)`);
    onDisk.delete(path);
  }
  for (const path of onDisk) stale.push(`${path} (unexpected)`);
  return stale;
}

/** Makes `.generated/` match `files` exactly; returns how many files changed. */
export function writeGenerated(root: string, files: ReadonlyMap<string, string>): number {
  const dir = join(root, GENERATED_DIR);
  let changed = 0;
  const wanted = new Set(files.keys());
  for (const path of listFiles(dir)) {
    if (!wanted.has(path)) {
      rmSync(join(dir, path));
      changed += 1;
    }
  }
  for (const [path, content] of files) {
    const full = join(dir, path);
    if (existsSync(full) && readFileSync(full, 'utf8') === content) continue;
    mkdirSync(dirname(full), { recursive: true });
    writeFileSync(full, content);
    changed += 1;
  }
  removeEmptyDirs(dir);
  return changed;
}

function removeEmptyDirs(dir: string): boolean {
  if (!existsSync(dir)) return true;
  let empty = true;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && removeEmptyDirs(join(dir, entry.name))) {
      rmSync(join(dir, entry.name), { recursive: true });
    } else empty = false;
  }
  return empty;
}
