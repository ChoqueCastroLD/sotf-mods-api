/**
 * Rules enforced by `pnpm check:forbidden` (PLAN §2.8 "Limpieza total", §9.4 and §11.4).
 *
 * Every rule has an id, a description shown on failure and either a `pattern` (tested per line)
 * or a `test` function. `allow` lists repository paths (globs) where the rule does not apply,
 * each with the reason. A single line can be exempted with a trailing comment
 * `check-forbidden-allow: <rule-id> <reason>` (the reason is mandatory).
 */

export interface ForbiddenRule {
  id: string;
  description: string;
  /** Tested against every line of every scanned text file. */
  pattern?: RegExp;
  /** Custom per-line test (used when a regex alone would be too noisy). */
  test?: (line: string) => boolean;
  /** Only scan files matching these globs (default: all scanned files). */
  only?: readonly string[];
  /** Paths where this rule is not enforced, with the justification. */
  allow?: ReadonlyArray<{ glob: string; reason: string }>;
}

/** Paths never scanned by any rule. */
export const GLOBAL_IGNORES: ReadonlyArray<{ glob: string; reason: string }> = [
  { glob: 'docs/plan/**', reason: 'the plan and research describe the legacy system verbatim' },
  { glob: 'pnpm-lock.yaml', reason: 'machine-generated integrity hashes' },
  { glob: 'tooling/scripts/forbidden-rules.ts', reason: 'defines the patterns themselves' },
  { glob: 'tooling/scripts/test/check-forbidden.test.ts', reason: 'seeds forbidden content on purpose' },
];

/** Legacy data captured from production: contains the legacy host by definition. */
const LEGACY_DATA_ALLOW = [
  { glob: 'tooling/legacy-contract/fixtures/**', reason: 'golden fixtures captured from the legacy API' },
  { glob: 'tooling/migration/snapshot/**', reason: 'public API snapshot of legacy data' },
  { glob: 'tooling/migration/legacy/**', reason: 'copy of the legacy Prisma schema' },
  { glob: 'ops/sql/audit-files-host.sql', reason: 'audit that searches the data for the legacy host' },
  { glob: 'ops/legacy-hotfix/**', reason: 'patches that remove the legacy references from the old repos' },
  { glob: 'docs/backlog/**', reason: 'backlog items describe the legacy references they deal with' },
];

/** Legacy environment variables that v2 must never define or read (PLAN §2.8 point 5). */
const LEGACY_ENV_ALLOW = [
  { glob: 'ops/legacy-hotfix/**', reason: 'patches remove these reads from the legacy repos' },
  { glob: 'ops/runbooks/**', reason: 'runbooks tell the operator which legacy variables to delete' },
  { glob: 'ops/coolify/**', reason: 'Coolify runbooks list the legacy variables to delete' },
  { glob: 'docs/backlog/**', reason: 'backlog items name the legacy variables they deal with' },
];

const PLACEHOLDER_PASSWORDS = new Set([
  'password',
  'changeme',
  'change-me',
  'secret',
  'postgres',
  'sotf',
  'sotf_dev',
  'test',
  'user',
  'pass',
]);
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '::1', '[::1]', 'postgres', 'db', 'host.docker.internal']);

/** Postgres URL with a real-looking password pointing at a non-local host. */
export function hasRemoteDatabaseCredential(line: string): boolean {
  const re = /\bpostgres(?:ql)?:\/\/([^\s:/@'"`]+):([^\s@'"`]+)@([^\s/:'"`?]+)/g;
  for (const match of line.matchAll(re)) {
    const password = match[2] ?? '';
    const host = (match[3] ?? '').toLowerCase();
    if (LOCAL_HOSTS.has(host)) continue;
    if (/^(\$\{[^}]*\}|\$[A-Z_]+|<[^>]*>|\*+|x+|\.\.\.)$/i.test(password)) continue;
    if (PLACEHOLDER_PASSWORDS.has(password.toLowerCase())) continue;
    return true;
  }
  return false;
}

export const RULES: readonly ForbiddenRule[] = [
  {
    id: 'legacy-files-host',
    description: 'the legacy file host is gone in v2: downloads 302 to R2_PUBLIC_BASE_URL (PLAN §2.8)',
    pattern: /files\.sotf-mods\.com/i,
    allow: LEGACY_DATA_ALLOW,
  },
  {
    id: 'legacy-env-file-upload',
    description: 'FILE_UPLOAD_* is a legacy variable; v2 uploads use presigned R2 URLs (PLAN §2.8, §11.4)',
    pattern: /\bFILE_UPLOAD_[A-Z_]*/,
    allow: LEGACY_ENV_ALLOW,
  },
  {
    id: 'legacy-env-file-preview',
    description: 'FILE_PREVIEW_* is a legacy variable (PLAN §2.8, §11.4)',
    pattern: /\bFILE_PREVIEW_[A-Z_]*/,
    allow: LEGACY_ENV_ALLOW,
  },
  {
    id: 'legacy-env-file-download',
    description: 'FILE_DOWNLOAD_ENDPOINT is replaced by R2_PUBLIC_BASE_URL (PLAN §2.8, §11.4)',
    pattern: /\bFILE_DOWNLOAD_ENDPOINT\b/,
    allow: LEGACY_ENV_ALLOW,
  },
  {
    id: 'legacy-env-kelvingpt',
    description: 'KELVINGPT_API* is a legacy variable (PLAN §2.8, §11.4)',
    pattern: /\bKELVINGPT_API[A-Z_]*/,
    allow: LEGACY_ENV_ALLOW,
  },
  {
    id: 'legacy-env-jwt',
    description: 'v2 has no JWTs: sessions are opaque cookies signed with APP_SECRET (PLAN §6.10, §9.4)',
    pattern: /\bJWT_SECRET\b/,
    allow: LEGACY_ENV_ALLOW,
  },
  {
    id: 'legacy-env-urls',
    description:
      'BASE_URL, PUBLIC_BASE_URL, API_URL, PUBLIC_API_URL, GPT_API_KEY, R2_CUSTOM_DOMAIN and R2_BUCKET_NAME ' +
      'are legacy variables; v2 uses PUBLIC_SITE_URL, INTERNAL_API_URL, ' +
      'R2_PUBLIC_BASE_URL and R2_BUCKET (PLAN §2.8 point 5, §11.4)',
    // Whole identifiers only (R2_PUBLIC_BASE_URL and INTERNAL_API_URL do not match: `_` is a word
    // character). Vite/Astro's built-in `import.meta.env.BASE_URL` is not a deployment variable.
    pattern:
      /(?<!meta\.env\.)\b(?:PUBLIC_)?BASE_URL\b|\b(?:PUBLIC_)?API_URL\b|\bGPT_API_KEY\b|\bR2_CUSTOM_DOMAIN\b|\bR2_BUCKET_NAME\b/,
    allow: LEGACY_ENV_ALLOW,
  },
  {
    id: 'legacy-preview-suffix',
    description:
      'the legacy "<image url>/preview" suffix is gone; media variants live in R2 (PLAN §2.8). ' +
      'Routes such as /api/v2/markdown/preview are fine because they are not a bare suffix.',
    // A string literal that is exactly "/preview", or a template/concatenation ending in "}/preview".
    pattern: /(?:['"`]\/preview\b|\}\/preview\b)/,
    allow: [
      { glob: 'ops/legacy-hotfix/**', reason: 'patches remove the suffix from the legacy frontend' },
      { glob: 'docs/backlog/**', reason: 'backlog items describe the legacy suffix they deal with' },
    ],
  },
  {
    id: 'secret-openai-key',
    description: 'looks like an OpenAI API key; secrets never go in the repository (PLAN §9.4)',
    pattern: /\bsk-(?:proj-|svcacct-|admin-)?[A-Za-z0-9_-]{20,}/,
  },
  {
    id: 'secret-resend-key',
    description: 'looks like a Resend API key (PLAN §9.4)',
    pattern: /\bre_[A-Za-z0-9]{8}_[A-Za-z0-9]{16,}/,
  },
  {
    id: 'secret-aws-access-key',
    description: 'looks like an AWS/R2 access key id (PLAN §9.4)',
    pattern: /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/,
  },
  {
    id: 'secret-github-token',
    description: 'looks like a GitHub token (PLAN §9.4)',
    pattern: /\b(?:gh[pousr]_[A-Za-z0-9]{36,}|github_pat_[A-Za-z0-9_]{40,})/,
  },
  {
    id: 'secret-private-key',
    description: 'private key material (PLAN §9.4)',
    pattern: /-----BEGIN (?:[A-Z]+ )?PRIVATE KEY-----/,
  },
  {
    id: 'secret-api-token',
    description: 'looks like a Coolify/Laravel Sanctum API token ("<id>|<40+ chars>") (PLAN §9.4)',
    pattern: /\b\d{1,6}\|[A-Za-z0-9]{40,}\b/,
  },
  {
    id: 'secret-slack-token',
    description: 'looks like a Slack token (PLAN §9.4)',
    pattern: /\bxox[abprs]-[A-Za-z0-9-]{10,}/,
  },
  {
    id: 'secret-database-url',
    description: 'database URL with real credentials for a non-local host (PLAN §9.4)',
    test: hasRemoteDatabaseCredential,
  },
  {
    id: 'secret-assignment',
    description:
      'a secret-looking value is assigned in a config file; commit placeholders only (.env.example) (PLAN §9.4)',
    pattern:
      /\b[A-Z0-9_]*(?:SECRET|TOKEN|PASSWORD|API_KEY|ACCESS_KEY|PRIVATE_KEY)[A-Z0-9_]*\s*[:=]\s*['"]?(?![$<{])[A-Za-z0-9+/_=.-]{24,}/,
    only: ['**/.env*', '**/*.env', '**/*.{yml,yaml,toml,ini,properties}'],
  },
];

/** Tracked files that must never exist (real env files, dumps). */
export const FORBIDDEN_FILES: ReadonlyArray<{ glob: string; reason: string; except?: readonly string[] }> = [
  {
    glob: '**/.env{,.*}',
    reason: 'environment files hold secrets; only .env.example may be committed',
    except: ['**/.env.example'],
  },
  { glob: '**/*.{pem,key,p12,pfx}', reason: 'key material' },
  { glob: '**/*.{dump,sql.gz,backup}', reason: 'database dumps never go in the repository' },
];
