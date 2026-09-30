/**
 * `secrets-scan`: looks for credentials in the repository **and in its git history** (PLAN §9.4:
 * "ningún secreto va en el repositorio, los logs o los documentos"; WP-93).
 *
 *   node tooling/scripts/secrets-scan.ts                # working tree (tracked + new files)
 *   node tooling/scripts/secrets-scan.ts --staged       # lines added in the index (pre-commit)
 *   node tooling/scripts/secrets-scan.ts --history      # every line ever added, on every ref
 *   node tooling/scripts/secrets-scan.ts --history --rev=main..HEAD   # a commit range only
 *   options: --root=<dir>  --json
 *
 * `pnpm check:forbidden` already blocks the known key formats in the working tree. This scanner
 * adds what a tree scan cannot see and what a pattern alone misses:
 *
 * - **history**: a secret committed and later deleted is still published with the repository
 *   (the v2 monorepo becomes the `v2` branch of a public GitHub repo, PLAN §14.4), so every added
 *   line of every commit is scanned, plus env/key files that ever existed;
 * - **more providers**: Google API keys, Discord webhooks and bot tokens, Stripe, npm, Sentry auth
 *   tokens, Telegram bot tokens and JWTs, on top of the `secret-*` rules of `forbidden-rules.ts`;
 * - **high-entropy assignments** in any file: a quoted value of ≥ 20 characters assigned to a
 *   name that says secret/token/password/key, with Shannon entropy ≥ 3.5 bits per character and
 *   not an obvious placeholder.
 *
 * Findings are printed **redacted** (first 4 characters + length): the output itself must never
 * become a leak (CI logs are public). A line is exempted with a trailing
 * `secrets-scan-allow: <rule> <reason>` (or `check-forbidden-allow:`) comment; the reason is
 * mandatory. Exit code 1 when anything is found. A secret found in history must be **rotated**
 * (PLAN §9.4); rewriting history is not enough once it was pushed.
 */
import { spawn } from 'node:child_process';
import { readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createInterface } from 'node:readline';
import { listFiles } from './check-forbidden.ts';
import {
  FORBIDDEN_FILES,
  type ForbiddenRule,
  GLOBAL_IGNORES,
  hasRemoteDatabaseCredential,
  RULES,
} from './forbidden-rules.ts';
import { color, flagString, parseArgs } from './lib/cli.ts';
import { matchAny, matchGlob } from './lib/glob.ts';
import { isGitRepo, REPO_ROOT } from './lib/repo.ts';

export interface SecretFinding {
  /** Commit sha for history findings, null for the working tree / index. */
  commit: string | null;
  file: string;
  line: number;
  rule: string;
  description: string;
  /** Redacted match: first 4 characters, an ellipsis and the length. */
  redacted: string;
}

export interface SecretRule {
  id: string;
  description: string;
  /** Global regex; the whole match (or group 1 when present) is the secret. */
  pattern: RegExp;
  /** Extra check of the captured secret (entropy, placeholders). */
  accept?: (secret: string, line: string) => boolean;
  allow?: ReadonlyArray<{ glob: string; reason: string }>;
}

const PLACEHOLDER =
  /(?:example|changeme|change-me|change_me|placeholder|dummy|sample|your[-_]|xxxx|\*\*\*|<[^>]*>|\$\{|test|fake|mock|redacted|not-a-real|lorem)/i;

/** Shannon entropy in bits per character. */
export function entropy(value: string): number {
  if (value.length === 0) return 0;
  const counts = new Map<string, number>();
  for (const char of value) counts.set(char, (counts.get(char) ?? 0) + 1);
  let bits = 0;
  for (const count of counts.values()) {
    const p = count / value.length;
    bits -= p * Math.log2(p);
  }
  return bits;
}

/**
 * Whether a candidate looks like a generated credential rather than documentation: placeholders,
 * repeated characters, human phrases (`kelvin-carries-logs-2026`, `turnstile-not-configured`),
 * keyboard walks used in API examples (`q1w2e3r4…`) and file paths are not secrets.
 */
export function looksReal(secret: string): boolean {
  if (PLACEHOLDER.test(secret) || /^(.)\1+$/.test(secret)) return false;
  if (/^\.{0,2}\//.test(secret) || /\.(?:[cm]?[jt]sx?|json|css|md|html|svg|png|webp)$/i.test(secret)) return false;
  const parts = secret.split(/[-_.:]+/).filter(Boolean);
  const words = parts.filter((part) => /^[a-z]{2,}$/i.test(part)).length;
  if (parts.length >= 3 && words >= parts.length - 1) return false;
  if (/^(?:[a-z]\d){6,}[a-z]?$/i.test(secret)) return false;
  return true;
}

/** Legacy fixtures captured from production contain public, expired JWT-shaped values. */
const FIXTURE_ALLOW = [
  { glob: 'tooling/legacy-contract/fixtures/**', reason: 'golden responses captured from the public legacy API' },
];

/**
 * The entropy heuristic is not applied to tests and fixtures (they are full of throwaway values);
 * the provider-specific rules still are, so a real key pasted into a test is caught.
 */
const TEST_ALLOW = [
  ...FIXTURE_ALLOW,
  { glob: '**/*.{test,spec}.{ts,tsx,js,mjs}', reason: 'unit/integration tests use throwaway credentials' },
  { glob: '**/{test,tests,__tests__,fixtures,testing}/**', reason: 'test helpers and fixtures' },
];

/** Rules of this scanner (the `secret-*` rules of forbidden-rules.ts are added by `allRules`). */
export const EXTRA_RULES: readonly SecretRule[] = [
  {
    id: 'secret-database-url',
    description: 'database URL with real credentials for a non-local host (PLAN §9.4)',
    pattern: /\bpostgres(?:ql)?:\/\/[^\s'"`]+/g,
    // Reserved documentation hosts (RFC 2606/6761: `.invalid`, `.example`, `example.com`…) are fakes.
    accept: (url) =>
      hasRemoteDatabaseCredential(url) &&
      !/@[^/:?]*(?:\.invalid|\.example|\.test|\.localhost|\bexample\.(?:com|org|net))(?:[:/?]|$)/i.test(url),
  },
  {
    id: 'secret-google-api-key',
    description: 'Google API key',
    pattern: /\bAIza[0-9A-Za-z_-]{35}\b/g,
  },
  {
    id: 'secret-discord-webhook',
    description: 'Discord webhook URL (anyone holding it can post as the site)',
    pattern: /https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/api\/webhooks\/\d{17,20}\/([\w-]{60,})/g,
  },
  {
    id: 'secret-discord-bot-token',
    description: 'Discord bot token',
    pattern: /\b([MNO][A-Za-z\d_-]{23,25}\.[A-Za-z\d_-]{6}\.[A-Za-z\d_-]{27,38})\b/g,
  },
  {
    id: 'secret-stripe-key',
    description: 'Stripe live key',
    pattern: /\b((?:sk|rk)_live_[0-9A-Za-z]{24,})\b/g,
  },
  {
    id: 'secret-npm-token',
    description: 'npm access token',
    pattern: /\b(npm_[A-Za-z0-9]{36})\b/g,
  },
  {
    id: 'secret-sentry-token',
    description: 'Sentry auth token',
    pattern: /\b(sntr[ysu]_[A-Za-z0-9+/=_-]{40,})/g,
  },
  {
    id: 'secret-telegram-token',
    description: 'Telegram bot token',
    pattern: /\b(\d{8,10}:AA[A-Za-z0-9_-]{33})\b/g,
  },
  {
    id: 'secret-jwt',
    description: 'JSON Web Token (legacy sessions were signed JWTs; v2 has none)',
    pattern: /\b(eyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{16,})\b/g,
    allow: FIXTURE_ALLOW,
  },
  {
    id: 'secret-high-entropy-assignment',
    description: 'high-entropy value assigned to a secret-looking name',
    pattern:
      /\b[\w.-]*(?:secret|token|passw(?:or)?d|pwd|api[_-]?key|access[_-]?key|private[_-]?key|auth[_-]?key|client[_-]?secret|webhook)[\w.-]*["']?\s*[:=]\s*["'`]([A-Za-z0-9+/_=.:-]{20,})["'`]/gi,
    accept: (secret) => looksReal(secret) && entropy(secret) >= 3.5,
    allow: TEST_ALLOW,
  },
];

/** `secret-*` rules of check:forbidden, adapted to this scanner. */
function forbiddenSecretRules(): SecretRule[] {
  return RULES.filter((rule): rule is ForbiddenRule & { pattern: RegExp } => {
    return rule.id.startsWith('secret-') && rule.pattern !== undefined && !rule.only;
  }).map((rule) => ({
    id: rule.id,
    description: rule.description,
    pattern: new RegExp(
      rule.pattern.source,
      rule.pattern.flags.includes('g') ? rule.pattern.flags : `${rule.pattern.flags}g`,
    ),
    allow: rule.allow,
  }));
}

export function allRules(): SecretRule[] {
  const extra = new Set(EXTRA_RULES.map((rule) => rule.id));
  return [...forbiddenSecretRules().filter((rule) => !extra.has(rule.id)), ...EXTRA_RULES];
}

const PRAGMA = /(?:secrets-scan-allow|check-forbidden-allow):\s*([a-z0-9-]+)\s+\S+/g;

function allowedByPragma(line: string, previous: string | undefined, ruleId: string): boolean {
  for (const text of [line, previous ?? '']) {
    for (const match of text.matchAll(PRAGMA)) if (match[1] === ruleId) return true;
  }
  return false;
}

export function redact(secret: string): string {
  return `${secret.slice(0, 4)}… (${secret.length} chars)`;
}

function ignoredPath(file: string): boolean {
  return GLOBAL_IGNORES.some((g) => matchGlob(file, g.glob)) || file === 'tooling/scripts/secrets-scan.ts';
}

/** Scans one line; `previous` is the line above (for the allow pragma). */
export function scanLine(
  file: string,
  line: string,
  previous: string | undefined,
  rules: readonly SecretRule[],
): Array<Pick<SecretFinding, 'rule' | 'description' | 'redacted'>> {
  const out: Array<Pick<SecretFinding, 'rule' | 'description' | 'redacted'>> = [];
  if (line.length > 4000) return out; // minified bundles and data blobs
  for (const rule of rules) {
    if (rule.allow?.some((a) => matchGlob(file, a.glob))) continue;
    rule.pattern.lastIndex = 0;
    for (const match of line.matchAll(rule.pattern)) {
      const secret = match[1] ?? match[0];
      if (rule.accept && !rule.accept(secret, line)) continue;
      if (allowedByPragma(line, previous, rule.id)) continue;
      out.push({ rule: rule.id, description: rule.description, redacted: redact(secret) });
      break;
    }
  }
  return out;
}

function forbiddenFileRule(file: string): string | null {
  for (const forbidden of FORBIDDEN_FILES) {
    if (matchGlob(file, forbidden.glob) && !(forbidden.except && matchAny(file, forbidden.except))) {
      return forbidden.reason;
    }
  }
  return null;
}

// ── Working tree ───────────────────────────────────────────────────────────────────────────────

const MAX_FILE_BYTES = 5 * 1024 * 1024;

export function scanWorkingTree(root: string, rules: readonly SecretRule[] = allRules()): SecretFinding[] {
  const findings: SecretFinding[] = [];
  for (const file of listFiles(root)) {
    if (ignoredPath(file)) continue;
    const reason = forbiddenFileRule(file);
    if (reason) {
      findings.push({ commit: null, file, line: 0, rule: 'forbidden-file', description: reason, redacted: '' });
    }
    const full = join(root, file);
    if (statSync(full).size > MAX_FILE_BYTES) continue;
    const buffer = readFileSync(full);
    if (buffer.subarray(0, 8000).includes(0)) continue;
    const lines = buffer.toString('utf8').split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      for (const hit of scanLine(file, lines[i] ?? '', lines[i - 1], rules)) {
        findings.push({ commit: null, file, line: i + 1, ...hit });
      }
    }
  }
  return findings;
}

// ── Diffs (index or history) ───────────────────────────────────────────────────────────────────

/**
 * Streams a unified diff (`git log -p` / `git diff`) and scans the added lines. Commit headers are
 * lines `\0commit <sha>` (custom `--format`), file headers `+++ b/<path>`, hunks `@@ … +start,n @@`.
 */
export async function scanDiff(
  args: readonly string[],
  cwd: string,
  rules: readonly SecretRule[] = allRules(),
): Promise<SecretFinding[]> {
  const findings: SecretFinding[] = [];
  const seen = new Set<string>();
  const child = spawn('git', args, { cwd, stdio: ['ignore', 'pipe', 'inherit'] });
  const lines = createInterface({ input: child.stdout, crlfDelay: Number.POSITIVE_INFINITY });
  let commit: string | null = null;
  let file: string | null = null;
  let lineNo = 0;
  let previous: string | undefined;

  const push = (finding: SecretFinding) => {
    // The same secret in the same file is reported once (its first commit is enough to rotate).
    const key = `${finding.file}|${finding.rule}|${finding.redacted}`;
    if (seen.has(key)) return;
    seen.add(key);
    findings.push(finding);
  };

  for await (const raw of lines) {
    if (raw.startsWith('\0commit ')) {
      commit = raw.slice(8).trim();
      file = null;
      continue;
    }
    if (raw.startsWith('+++ ')) {
      const path = raw.slice(4).trim();
      file = path === '/dev/null' ? null : path.replace(/^b\//, '');
      if (file && !ignoredPath(file)) {
        const reason = forbiddenFileRule(file);
        if (reason) push({ commit, file, line: 0, rule: 'forbidden-file', description: reason, redacted: '' });
      }
      continue;
    }
    if (raw.startsWith('@@')) {
      const match = /\+(\d+)/.exec(raw);
      lineNo = match ? Number(match[1]) : 0;
      previous = undefined;
      continue;
    }
    if (!file || ignoredPath(file)) continue;
    if (raw.startsWith('+')) {
      const line = raw.slice(1);
      for (const hit of scanLine(file, line, previous, rules)) push({ commit, file, line: lineNo, ...hit });
      previous = line;
      lineNo += 1;
    } else if (raw.startsWith(' ')) {
      previous = raw.slice(1);
      lineNo += 1;
    }
  }
  const code: number = await new Promise((done) => {
    if (child.exitCode !== null) done(child.exitCode);
    else child.on('close', (status) => done(status ?? 1));
  });
  if (code !== 0) throw new Error(`git ${args.join(' ')} exited with ${code}`);
  return findings;
}

export function historyArgs(rev: string | undefined): string[] {
  return [
    'log',
    ...(rev ? [rev] : ['--all']),
    '-p',
    '-U0',
    '--no-color',
    '--no-ext-diff',
    '--no-renames',
    '--diff-filter=AM',
    '--format=%x00commit %H',
  ];
}

export const STAGED_ARGS = [
  'diff',
  '--cached',
  '-U0',
  '--no-color',
  '--no-ext-diff',
  '--no-renames',
  '--diff-filter=AM',
];

// ── CLI ────────────────────────────────────────────────────────────────────────────────────────

function print(findings: readonly SecretFinding[], scope: string): void {
  if (findings.length === 0) {
    process.stdout.write(`${color.green('ok')} secrets-scan (${scope}): no secrets found\n`);
    return;
  }
  process.stderr.write(`${color.red('error')} secrets-scan (${scope}): ${findings.length} finding(s)\n`);
  for (const f of findings) {
    const where = `${f.commit ? `${f.commit.slice(0, 12)} ` : ''}${f.line > 0 ? `${f.file}:${f.line}` : f.file}`;
    process.stderr.write(`  ${color.bold(where)} ${color.yellow(`[${f.rule}]`)} ${f.description}`);
    process.stderr.write(f.redacted ? ` ${color.dim(f.redacted)}\n` : '\n');
  }
  process.stderr.write(
    '\nRemove the value and ROTATE it (PLAN §9.4). A false positive may be exempted with\n' +
      '`secrets-scan-allow: <rule> <reason>` on the same line.\n',
  );
}

async function main(): Promise<void> {
  const { flags } = parseArgs(process.argv.slice(2));
  const root = resolve(flagString(flags, 'root') ?? REPO_ROOT);
  let findings: SecretFinding[];
  let scope: string;
  if (flags.has('history') || flags.has('staged')) {
    if (!isGitRepo(root)) throw new Error(`${root} is not a git work tree`);
    const rev = flagString(flags, 'rev');
    scope = flags.has('staged') ? 'index' : `history ${rev ?? '--all'}`;
    findings = await scanDiff(flags.has('staged') ? STAGED_ARGS : historyArgs(rev), root);
  } else {
    scope = 'working tree';
    findings = scanWorkingTree(root);
  }
  if (flags.has('json')) process.stdout.write(`${JSON.stringify(findings, null, 2)}\n`);
  else print(findings, scope);
  if (findings.length > 0) process.exit(1);
}

if (import.meta.main) {
  main().catch((error: unknown) => {
    process.stderr.write(`${color.red('error')} ${error instanceof Error ? error.message : String(error)}\n`);
    process.exit(2);
  });
}
