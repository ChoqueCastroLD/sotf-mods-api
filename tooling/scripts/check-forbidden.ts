/**
 * `pnpm check:forbidden`: fails when the repository contains legacy references that v2 removed
 * (the legacy file host, legacy env variables, the legacy image-preview URL suffix) or anything that looks like a
 * secret (PLAN §2.8, §9.4). Rules live in forbidden-rules.ts.
 *
 *   node tooling/scripts/check-forbidden.ts [--root <dir>] [--json]
 *
 * Scanned files: `git ls-files --cached --others --exclude-standard` (tracked + new, not ignored)
 * when <dir> is a git work tree; otherwise a recursive walk that skips node_modules, dist and
 * dot-directories other than .github. Binary files are skipped.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { FORBIDDEN_FILES, type ForbiddenRule, GLOBAL_IGNORES, RULES } from './forbidden-rules.ts';
import { color, flagString, parseArgs } from './lib/cli.ts';
import { matchAny, matchGlob } from './lib/glob.ts';
import { gitMaybe, isGitRepo, REPO_ROOT } from './lib/repo.ts';

export interface Finding {
  file: string;
  line: number;
  rule: string;
  description: string;
  excerpt: string;
}

const PRAGMA = /check-forbidden-allow:\s*([a-z0-9-]+)\s+\S+/g;
const WALK_SKIP = new Set(['node_modules', 'dist', 'coverage', '.turbo', '.astro', '.git']);
const MAX_FILE_BYTES = 5 * 1024 * 1024;

/** Lists candidate files relative to `root`. */
export function listFiles(root: string): string[] {
  if (isGitRepo(root)) {
    const out = gitMaybe(['ls-files', '--cached', '--others', '--exclude-standard', '-z'], root) ?? '';
    // `--cached` still lists files deleted in the working tree; drop them.
    return [...new Set(out.split('\0').filter(Boolean))].filter((f) => isFile(join(root, f))).sort();
  }
  const files: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (WALK_SKIP.has(entry.name)) continue;
      if (entry.name.startsWith('.') && entry.isDirectory() && entry.name !== '.github') continue;
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile()) files.push(relative(root, full).replaceAll('\\', '/'));
    }
  };
  walk(root);
  return files.sort();
}

function isFile(path: string): boolean {
  try {
    return statSync(path).isFile();
  } catch {
    return false;
  }
}

function isBinary(buffer: Buffer): boolean {
  const sample = buffer.subarray(0, 8000);
  return sample.includes(0);
}

function ruleApplies(rule: ForbiddenRule, file: string): boolean {
  if (rule.only && !matchAny(file, rule.only)) return false;
  if (rule.allow?.some((a) => matchGlob(file, a.glob))) return false;
  return true;
}

function lineAllows(line: string, previous: string | undefined, ruleId: string): boolean {
  for (const text of [line, previous ?? '']) {
    for (const match of text.matchAll(PRAGMA)) if (match[1] === ruleId) return true;
  }
  return false;
}

/** Scans one file's text and returns its findings. */
export function scanText(file: string, text: string, rules: readonly ForbiddenRule[] = RULES): Finding[] {
  const applicable = rules.filter((r) => ruleApplies(r, file));
  if (applicable.length === 0) return [];
  const findings: Finding[] = [];
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? '';
    for (const rule of applicable) {
      const hit = rule.pattern ? rule.pattern.test(line) : (rule.test?.(line) ?? false);
      if (!hit) continue;
      // `// check-forbidden-allow: <rule> <reason>` on the same or the previous line.
      if (lineAllows(line, lines[i - 1], rule.id)) continue;
      findings.push({
        file,
        line: i + 1,
        rule: rule.id,
        description: rule.description,
        excerpt: line.trim().slice(0, 160),
      });
    }
  }
  return findings;
}

/** Scans a directory tree. */
export function scan(root: string): Finding[] {
  const findings: Finding[] = [];
  for (const file of listFiles(root)) {
    if (GLOBAL_IGNORES.some((g) => matchGlob(file, g.glob))) continue;
    for (const forbidden of FORBIDDEN_FILES) {
      if (matchGlob(file, forbidden.glob) && !(forbidden.except && matchAny(file, forbidden.except))) {
        findings.push({ file, line: 0, rule: 'forbidden-file', description: forbidden.reason, excerpt: '' });
      }
    }
    const full = join(root, file);
    if (statSync(full).size > MAX_FILE_BYTES) continue;
    const buffer = readFileSync(full);
    if (isBinary(buffer)) continue;
    findings.push(...scanText(file, buffer.toString('utf8')));
  }
  return findings;
}

function main(): void {
  const { flags } = parseArgs(process.argv.slice(2));
  const root = resolve(flagString(flags, 'root') ?? REPO_ROOT);
  const findings = scan(root);
  if (flags.has('json')) {
    process.stdout.write(`${JSON.stringify(findings, null, 2)}\n`);
  }
  if (findings.length === 0) {
    if (!flags.has('json')) process.stdout.write(`${color.green('ok')} check:forbidden: no forbidden content\n`);
    return;
  }
  if (!flags.has('json')) {
    process.stderr.write(`${color.red('error')} check:forbidden: ${findings.length} finding(s)\n`);
    for (const f of findings) {
      const where = f.line > 0 ? `${f.file}:${f.line}` : f.file;
      process.stderr.write(`  ${color.bold(where)} ${color.yellow(`[${f.rule}]`)} ${f.description}\n`);
      if (f.excerpt) process.stderr.write(`    ${color.dim(f.excerpt)}\n`);
    }
    process.stderr.write(
      '\nRemove the content, or (only when justified) add `check-forbidden-allow: <rule> <reason>` on that line.\n',
    );
  }
  process.exit(1);
}

if (import.meta.main) main();
