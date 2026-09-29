/**
 * Generates tooling/scripts/ownership.json from PLAN §12.3 ("Rutas" of every work package) plus the
 * hand-written corrections in ownership.overrides.json (PLAN §12.1: "WP-00 genera ownership.json a
 * partir de este §12").
 *
 *   node tooling/scripts/gen-ownership.ts            # regenerate
 *   node tooling/scripts/gen-ownership.ts --check    # fail if ownership.json is stale
 *   node tooling/scripts/gen-ownership.ts --report   # also print within-wave overlaps
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { color, fail, parseArgs } from './lib/cli.ts';
import { expandBraces, isGlob, matchAny, normalizePath, staticPrefix } from './lib/glob.ts';
import { type OwnershipFile, SHARED_PATTERNS, type WpOwnership } from './lib/ownership.ts';
import { repoPath } from './lib/repo.ts';

export const PLAN_PATH = 'docs/plan/PLAN.md';
export const OWNERSHIP_PATH = 'tooling/scripts/ownership.json';
export const OVERRIDES_PATH = 'tooling/scripts/ownership.overrides.json';

/** Files that live at the repository root when they appear without a directory. */
const ROOT_FILES = new Set([
  'package.json',
  'pnpm-workspace.yaml',
  'pnpm-lock.yaml',
  'turbo.json',
  'biome.json',
  'tsconfig.base.json',
  '.gitignore',
  '.editorconfig',
  '.nvmrc',
  '.npmrc',
  'README.md',
  '.env.example',
]);

const KNOWN_ROOTS = ['apps/', 'packages/', 'tooling/', 'ops/', 'docs/', 'e2e/', '.github/'];

export interface ParsedWp {
  id: string;
  title: string;
  wave: string;
  include: string[];
  exclude: string[];
  /** Stub files created by this WP whose ownership passes to another WP: path -> WP id. */
  stubs: Record<string, string>;
}

export interface Override {
  reason: string;
  /** Replaces the parsed include list entirely. */
  include?: string[];
  addInclude?: string[];
  dropInclude?: string[];
  addExclude?: string[];
  dropExclude?: string[];
  /**
   * For every directory prefix listed, exclude the include patterns of *other* WPs that fall under
   * it (e.g. WP-20 owns apps/api/** except the domain modules owned by later WPs).
   */
  excludeOwnedByOthers?: string[];
}

export type Overrides = Record<string, Override>;

/** Extracts the §12.3 section of the plan. */
export function extractWorkPackagesSection(plan: string): string {
  const start = plan.indexOf('\n### 12.3');
  if (start === -1) throw new Error('PLAN.md: section "### 12.3" not found');
  const end = plan.indexOf('\n### 12.4', start + 1);
  return plan.slice(start, end === -1 ? undefined : end);
}

/** Parses every "**WP-XX · Title**" block and its "- **Rutas**" bullet. */
export function parsePlan(plan: string): ParsedWp[] {
  const section = extractWorkPackagesSection(plan);
  const lines = section.split('\n');
  const wps: ParsedWp[] = [];
  let wave = '';
  let current: ParsedWp | null = null;
  let inRoutes = false;
  for (const line of lines) {
    const waveMatch = /^####\s+(W\d+)\b/.exec(line);
    if (waveMatch) {
      wave = waveMatch[1] ?? '';
      inRoutes = false;
      continue;
    }
    const wpMatch = /^\*\*(WP-[0-9A-Z]{2}) · (.+?)\*\*/.exec(line);
    if (wpMatch) {
      current = {
        id: wpMatch[1] ?? '',
        title: (wpMatch[2] ?? '').trim(),
        wave,
        include: [],
        exclude: [],
        stubs: {},
      };
      wps.push(current);
      inRoutes = false;
      continue;
    }
    if (!current) continue;
    if (/^- \*\*Rutas\*\*/.test(line)) {
      inRoutes = true;
      parseRouteLine(line.replace(/^- \*\*Rutas\*\*:?/, ''), current);
      continue;
    }
    if (inRoutes) {
      if (/^\s{2,}- /.test(line)) {
        parseRouteLine(line, current);
        continue;
      }
      inRoutes = false;
    }
  }
  for (const wp of wps) {
    wp.include = unique(wp.include);
    wp.exclude = unique(wp.exclude);
  }
  return wps;
}

function unique(values: string[]): string[] {
  return [...new Set(values)];
}

/** Classifies the backticked tokens of one "Rutas" line into include/exclude patterns. */
function parseRouteLine(line: string, wp: ParsedWp): void {
  const tokenRe = /`([^`]+)`|\bsalvo\b|\(→ (WP-[0-9A-Z]{2})\)/g;
  let excluding = false;
  let lastInclude: string | null = wp.include.at(-1) ?? null;
  let lastToken: string | null = null;
  let sinceLastAnnotation: string[] = [];
  for (const match of line.matchAll(tokenRe)) {
    if (match[0] === 'salvo') {
      excluding = true;
      continue;
    }
    if (match[2]) {
      // `a` + `b` (→ WP-XX): stubs created here whose ownership passes to WP-XX (PLAN §12.1).
      for (const stub of sinceLastAnnotation) wp.stubs[stub] = match[2];
      sinceLastAnnotation = [];
      continue;
    }
    const raw = (match[1] ?? '').replace(/,\s+/g, ',').trim();
    if (/\s/.test(raw)) continue; // commands such as `git clone ...`
    if (raw.startsWith('/tmp') || raw.startsWith('/root') || raw.startsWith('/@')) continue;
    if (/^\.[a-z]+$/.test(raw)) continue; // file-extension notes such as `.md`
    const hasLeadingSlash = raw.startsWith('/');
    const token = normalizePath(raw);
    if (!token) continue;

    if (excluding) {
      if (!lastInclude) continue;
      const base = staticPrefix(lastInclude);
      const lastSegment = token.split('/').at(-1) ?? '';
      const isDir = token.endsWith('/') || (!isGlob(lastSegment) && !lastSegment.includes('.'));
      const rel = isDir && !token.endsWith('/') ? `${token}/` : token;
      const resolved = KNOWN_ROOTS.some((r) => rel.startsWith(r)) ? rel : `${base}${rel}`;
      wp.exclude.push(resolved.endsWith('/') ? `${resolved}**` : resolved);
      continue;
    }

    let resolved: string;
    if (!token.includes('/')) {
      if (hasLeadingSlash || ROOT_FILES.has(token)) resolved = token;
      else if (lastToken) resolved = `${dirOf(lastToken)}${token}`;
      else resolved = token;
    } else if (KNOWN_ROOTS.some((r) => token.startsWith(r))) {
      resolved = token;
    } else if (lastInclude) {
      resolved = `${packageRoot(lastInclude)}${token}`;
    } else {
      resolved = token;
    }
    if (resolved.endsWith('/')) resolved = `${resolved}**`;
    wp.include.push(resolved);
    sinceLastAnnotation.push(resolved);
    lastInclude = resolved;
    lastToken = resolved;
  }
}

function dirOf(path: string): string {
  const idx = path.lastIndexOf('/');
  return idx === -1 ? '' : path.slice(0, idx + 1);
}

/** `apps/web/src/x/**` -> `apps/web/`. */
function packageRoot(path: string): string {
  const parts = path.split('/');
  return parts.length >= 2 ? `${parts[0]}/${parts[1]}/` : '';
}

/** Applies overrides and returns the final ownership document. */
export function buildOwnership(parsed: ParsedWp[], overrides: Overrides): OwnershipFile {
  const byId = new Map(parsed.map((wp) => [wp.id, { ...wp, include: [...wp.include], exclude: [...wp.exclude] }]));
  for (const id of Object.keys(overrides)) {
    if (!byId.has(id)) throw new Error(`${OVERRIDES_PATH}: unknown work package ${id}`);
  }
  // Pass 1: include/exclude edits.
  for (const [id, override] of Object.entries(overrides)) {
    const wp = byId.get(id);
    if (!wp) continue;
    if (override.include) wp.include = [...override.include];
    for (const p of override.dropInclude ?? []) {
      if (!wp.include.includes(p)) throw new Error(`${OVERRIDES_PATH}: ${id} dropInclude "${p}" not found`);
      wp.include = wp.include.filter((x) => x !== p);
    }
    wp.include.push(...(override.addInclude ?? []));
    for (const p of override.dropExclude ?? []) {
      if (!wp.exclude.includes(p)) throw new Error(`${OVERRIDES_PATH}: ${id} dropExclude "${p}" not found`);
      wp.exclude = wp.exclude.filter((x) => x !== p);
    }
    wp.exclude.push(...(override.addExclude ?? []));
  }
  // Pass 2: derived exclusions (need everybody's final include lists).
  for (const [id, override] of Object.entries(overrides)) {
    const wp = byId.get(id);
    if (!wp || !override.excludeOwnedByOthers) continue;
    for (const prefix of override.excludeOwnedByOthers) {
      const dir = normalizePath(prefix);
      for (const other of byId.values()) {
        if (other.id === id) continue;
        for (const pattern of other.include) {
          // A stub another WP creates for this one is ours to implement, never excluded.
          if (other.stubs[pattern] === id) continue;
          for (const alt of expandBraces(pattern)) {
            if (alt.startsWith(dir) && alt.length > dir.length) wp.exclude.push(alt);
          }
        }
      }
    }
  }
  const wps: Record<string, WpOwnership> = {};
  for (const wp of byId.values()) {
    wps[wp.id] = {
      title: wp.title,
      wave: wp.wave,
      include: unique(wp.include),
      exclude: unique(wp.exclude).sort(),
      ...(Object.keys(wp.stubs).length ? { stubs: wp.stubs } : {}),
    };
  }
  return {
    $comment:
      'Generated by `pnpm gen:ownership` from docs/plan/PLAN.md §12.3 and tooling/scripts/ownership.overrides.json. Do not edit by hand.',
    shared: [...SHARED_PATTERNS],
    wps,
  };
}

/** A concrete example path for a pattern (used to detect overlaps between WPs). */
export function samplePaths(pattern: string): string[] {
  return expandBraces(pattern).map((alt) => {
    let p = alt.replace(/\*\*/g, '__any__').replace(/\*/g, '__x__').replace(/\?/g, 'x');
    if (p.endsWith('/__any__')) p = `${p.slice(0, -'__any__'.length)}__sample__.ts`;
    return p.replaceAll('__any__', 'deep/path').replaceAll('__x__', 'sample');
  });
}

export interface Overlap {
  wave: string;
  path: string;
  owners: string[];
}

/** Finds sample paths owned by more than one WP of the same wave (PLAN §12.1: must be disjoint). */
export function findWaveOverlaps(file: OwnershipFile): Overlap[] {
  const overlaps: Overlap[] = [];
  const seen = new Set<string>();
  const entries = Object.entries(file.wps);
  for (const [, wp] of entries) {
    for (const pattern of wp.include) {
      for (const path of samplePaths(pattern)) {
        if (matchAny(path, wp.exclude)) continue;
        const owners = entries
          .filter(([, other]) => other.wave === wp.wave)
          .filter(([, other]) => matchAny(path, other.include) && !matchAny(path, other.exclude))
          .map(([otherId]) => otherId);
        if (owners.length > 1) {
          const key = `${wp.wave}|${owners.join(',')}|${path}`;
          if (!seen.has(key)) {
            seen.add(key);
            overlaps.push({ wave: wp.wave, path, owners });
          }
        }
      }
    }
  }
  return overlaps;
}

export function serialize(file: OwnershipFile): string {
  return `${JSON.stringify(file, null, 2)}\n`;
}

export function generate(planText: string, overrides: Overrides): OwnershipFile {
  return buildOwnership(parsePlan(planText), overrides);
}

function main(): void {
  const { flags } = parseArgs(process.argv.slice(2));
  const plan = readFileSync(repoPath(PLAN_PATH), 'utf8');
  const overrides = JSON.parse(readFileSync(repoPath(OVERRIDES_PATH), 'utf8')) as Overrides & {
    $comment?: unknown;
  };
  delete overrides.$comment;
  const output = serialize(generate(plan, overrides as Overrides));
  const target = repoPath(OWNERSHIP_PATH);
  if (flags.has('check')) {
    let existing = '';
    try {
      existing = readFileSync(target, 'utf8');
    } catch {
      // Missing file is reported below.
    }
    if (existing !== output) {
      fail(`${OWNERSHIP_PATH} is out of date with ${PLAN_PATH} §12.3. Run \`pnpm gen:ownership\`.`);
    }
    process.stdout.write(`${color.green('ok')} ${OWNERSHIP_PATH} is in sync with ${PLAN_PATH}\n`);
  } else {
    writeFileSync(target, output);
    const count = Object.keys(JSON.parse(output).wps).length;
    process.stdout.write(`${color.green('wrote')} ${OWNERSHIP_PATH} (${count} work packages)\n`);
  }
  if (flags.has('report')) {
    const overlaps = findWaveOverlaps(JSON.parse(output) as OwnershipFile);
    for (const o of overlaps) {
      process.stdout.write(`${color.yellow('overlap')} ${o.wave} ${o.owners.join(' & ')}: ${o.path}\n`);
    }
    if (overlaps.length === 0) process.stdout.write(`${color.green('ok')} no within-wave overlaps\n`);
  }
}

if (import.meta.main) main();
