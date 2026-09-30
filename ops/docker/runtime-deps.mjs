// Production dependency layout of the images (ops/docker/*.Dockerfile, PLAN §11.1).
//
//   node runtime-deps.mjs merge <from node_modules> <into node_modules>
//   node <app>/runtime-deps.mjs prune <file|dir>...
//   node <app>/runtime-deps.mjs check <file|dir>... [--load <module>...]
//
// `prune` and `check` must run from a copy of this file placed in the app directory (next to its
// package.json and node_modules): `import.meta.resolve` resolves from the script's own location.
//
// merge  Merges a pnpm node_modules tree into another. Both come from `pnpm deploy` of the same
//        lockfile, so an entry with the same path (`.pnpm/<name>@<version>…`, a top-level link, a
//        scope directory) has the same content in both: existing entries are kept, missing ones are
//        copied, directories are merged recursively and symlinks are copied verbatim.
// prune  Keeps only what the bundles can load: the packages imported by the JavaScript files given
//        (directories are scanned recursively) and everything reachable from them through pnpm's
//        sibling links (dependencies, optional platform binaries, peers). Unreachable `.pnpm`
//        entries (e.g. dependencies of the bundled workspace packages), dangling links, `.bin`,
//        type declarations, TypeScript sources, source maps, docs and changelogs of dependencies
//        and React's development builds (the images run with NODE_ENV=production) go.
// check  Every static bare import resolves, no `@sotf/*` import is left (workspace packages are
//        TypeScript sources and must be bundled), the `--load` modules load (native addons on
//        musl), and the app directory ships no TypeScript sources, `.env` files, dumps or keys.
import {
  cpSync,
  existsSync,
  lstatSync,
  readdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  statSync,
  unlinkSync,
} from 'node:fs';
import { builtinModules } from 'node:module';
import { basename, dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SELF = fileURLToPath(import.meta.url);
const ROOT = dirname(SELF);
const BUILTINS = new Set([...builtinModules, ...builtinModules.map((m) => `node:${m}`)]);
const JS_FILE = /\.(?:m?js|cjs)$/;
const out = (line) => process.stdout.write(`${line}\n`);
const err = (line) => process.stderr.write(`${line}\n`);

function lexists(path) {
  try {
    lstatSync(path);
    return true;
  } catch {
    return false;
  }
}

// ── merge ────────────────────────────────────────────────────────────────────────────────────
function merge(from, into) {
  for (const name of readdirSync(from)) {
    const source = join(from, name);
    const target = join(into, name);
    if (!lexists(target)) cpSync(source, target, { recursive: true, verbatimSymlinks: true });
    else if (lstatSync(source).isDirectory() && lstatSync(target).isDirectory()) merge(source, target);
  }
}

// ── import scanning ──────────────────────────────────────────────────────────────────────────
const STATIC_PATTERNS = [
  /\bimport\s+(?:[\w*${}\s,]+?\s+from\s+)?["']([^"'\n]+)["']/g,
  /\bexport\s+(?:\*(?:\s+as\s+\w+)?|\{[^}]*\})\s+from\s+["']([^"'\n]+)["']/g,
  /\bimport\(\s*["']([^"'\n]+)["']\s*\)/g,
];
const REQUIRE_PATTERN = /\brequire(?:\.resolve)?\(\s*["']([^"'\n]+)["']\s*\)/g;

function jsFiles(target, out = []) {
  const path = resolve(ROOT, target);
  if (!existsSync(path)) throw new Error(`not found: ${target}`);
  if (statSync(path).isDirectory()) {
    for (const name of readdirSync(path)) {
      if (name === 'node_modules') continue;
      jsFiles(join(path, name), out);
    }
  } else if (JS_FILE.test(path)) out.push(path);
  return out;
}

/** Bare specifiers of the files: `static` (must resolve) and `optional` (require() calls). */
function scan(targets) {
  const staticSpecs = new Set();
  const optionalSpecs = new Set();
  for (const file of targets.flatMap((t) => jsFiles(t))) {
    // Block comments hold JSDoc `import('…')` types that are not runtime imports.
    const source = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    const add = (set, spec) => {
      if (spec.startsWith('.') || spec.startsWith('/') || spec.includes(':') || BUILTINS.has(spec)) return;
      if (spec.includes('${') || /\s/.test(spec)) return;
      set.add(spec);
    };
    for (const pattern of STATIC_PATTERNS) for (const m of source.matchAll(pattern)) add(staticSpecs, m[1]);
    for (const m of source.matchAll(REQUIRE_PATTERN)) add(optionalSpecs, m[1]);
  }
  for (const spec of staticSpecs) optionalSpecs.delete(spec);
  return { staticSpecs, optionalSpecs };
}

const packageOf = (spec) => (spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0]);

/**
 * React's CommonJS entry points pick `cjs/*.production.js` when NODE_ENV=production, which the
 * images set; the development builds are never loaded.
 */
const REACT_PACKAGES = new Set(['react', 'react-dom', 'scheduler', 'react-is', 'use-sync-external-store']);
function isReactDevelopmentBuild(path, name) {
  if (!name.endsWith('.development.js')) return false;
  const parts = path.split(sep);
  const cjs = parts.lastIndexOf('cjs');
  if (cjs < 1) return false;
  const pkg = parts[cjs - 1];
  return REACT_PACKAGES.has(pkg) && parts[cjs - 2] === 'node_modules';
}

// ── prune ────────────────────────────────────────────────────────────────────────────────────
function prune(targets) {
  const nodeModules = join(ROOT, 'node_modules');
  const store = join(nodeModules, '.pnpm');
  const { staticSpecs, optionalSpecs } = scan(targets);
  const roots = new Set([...staticSpecs, ...optionalSpecs].map(packageOf));
  const keptStore = new Set();
  const visited = new Set();

  const visit = (linkPath) => {
    if (!lexists(linkPath)) return;
    let real;
    try {
      real = realpathSync(linkPath);
    } catch {
      return;
    }
    if (visited.has(real)) return;
    visited.add(real);
    const inStore = relative(store, real);
    if (inStore.startsWith('..')) return;
    const entry = inStore.split(sep)[0];
    keptStore.add(entry);
    // pnpm layout: .pnpm/<entry>/node_modules/<name> is the package, its siblings its dependencies.
    const siblingsDir = join(store, entry, 'node_modules');
    for (const name of readdirSync(siblingsDir)) {
      if (name.startsWith('@')) {
        for (const scoped of readdirSync(join(siblingsDir, name))) visit(join(siblingsDir, name, scoped));
      } else visit(join(siblingsDir, name));
    }
  };

  for (const pkg of roots) visit(join(nodeModules, pkg));

  // Top-level entries that no bundle imports.
  for (const name of readdirSync(nodeModules)) {
    if (name === '.pnpm') continue;
    const path = join(nodeModules, name);
    if (name.startsWith('@') && lstatSync(path).isDirectory()) {
      for (const scoped of readdirSync(path))
        if (!roots.has(`${name}/${scoped}`)) rmSync(join(path, scoped), { recursive: true, force: true });
      if (readdirSync(path).length === 0) rmSync(path, { recursive: true, force: true });
    } else if (!roots.has(name)) rmSync(path, { recursive: true, force: true });
  }
  // Unreachable store entries.
  for (const name of readdirSync(store)) {
    if (name === 'node_modules') continue;
    if (!keptStore.has(name)) rmSync(join(store, name), { recursive: true, force: true });
  }
  // Dangling links (hoisted `.pnpm/node_modules` and siblings of removed packages), `.bin`,
  // build-time-only files.
  const clean = (dir) => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      const stat = lstatSync(path);
      if (stat.isSymbolicLink()) {
        if (!existsSync(path)) unlinkSync(path);
      } else if (stat.isDirectory()) {
        if (name === '.bin') rmSync(path, { recursive: true, force: true });
        else clean(path);
      } else if (
        /\.(?:d\.[mc]?ts|[mc]?ts|tsx|map|flow|md|markdown)$/i.test(name) ||
        isReactDevelopmentBuild(path, name) ||
        /^(?:CHANGELOG|HISTORY|CHANGES)(?:\.|$)/i.test(name) ||
        name === 'tsconfig.json' ||
        name === '.modules.yaml' ||
        name === 'lock.yaml' ||
        name.startsWith('.pnpm-workspace-state')
      ) {
        unlinkSync(path);
      }
    }
  };
  clean(nodeModules);
  out(`pruned node_modules: ${roots.size} imported package(s), ${keptStore.size} store entr(ies) kept`);
}

// ── check ────────────────────────────────────────────────────────────────────────────────────
async function check(targets, toLoad) {
  const problems = [];
  const warnings = [];
  const { staticSpecs, optionalSpecs } = scan(targets);
  const resolves = (spec) => {
    try {
      import.meta.resolve(spec);
      return true;
    } catch {
      // CJS packages without an "import" condition for the subpath: the package must exist.
      return existsSync(join(ROOT, 'node_modules', packageOf(spec), 'package.json'));
    }
  };
  for (const spec of [...staticSpecs].sort()) {
    if (spec.startsWith('@sotf/')) problems.push(`workspace import left in a bundle: ${spec}`);
    else if (!resolves(spec)) problems.push(`cannot resolve "${spec}"`);
  }
  for (const spec of [...optionalSpecs].sort()) {
    if (spec.startsWith('@sotf/')) problems.push(`workspace require left in a bundle: ${spec}`);
    else if (!resolves(spec)) warnings.push(`optional require("${spec}") does not resolve`);
  }
  for (const name of toLoad) {
    try {
      await import(import.meta.resolve(name));
    } catch (error) {
      problems.push(`cannot load ${name}: ${error.message}`);
    }
  }
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      if (name === 'node_modules' || path === SELF) continue;
      if (lstatSync(path).isDirectory()) {
        walk(path);
        continue;
      }
      const rel = relative(ROOT, path);
      if (/\.(?:[mc]?ts|tsx)$/.test(name) && !/\.d\.[mc]?ts$/.test(name))
        problems.push(`TypeScript source shipped: ${rel}`);
      if (/^\.env(?:\.|$)/.test(name)) problems.push(`env file shipped: ${rel}`);
      if (/\.(?:dump|dmp|backup|sql\.gz|pem|key)$/.test(name)) problems.push(`dump or key shipped: ${rel}`);
    }
  };
  walk(ROOT);
  for (const warning of warnings) err(`warning: ${warning}`);
  if (problems.length > 0) {
    err(`runtime check failed for ${ROOT}:\n  - ${problems.join('\n  - ')}`);
    process.exit(1);
  }
  out(`runtime check ok: ${staticSpecs.size} static import(s) resolve from ${ROOT}`);
}

// ── main ─────────────────────────────────────────────────────────────────────────────────────
const [command, ...rest] = process.argv.slice(2);
const loadAt = rest.indexOf('--load');
const targets = loadAt === -1 ? rest : rest.slice(0, loadAt);
const toLoad = loadAt === -1 ? [] : rest.slice(loadAt + 1);
if (command === 'merge' && targets.length === 2) merge(resolve(targets[0]), resolve(targets[1]));
else if (command === 'prune' && targets.length > 0) prune(targets);
else if (command === 'check' && targets.length > 0) await check(targets, toLoad);
else {
  err(`usage: ${basename(SELF)} merge <from> <into> | prune <file|dir>... | check <file|dir>... [--load <module>...]`);
  process.exit(2);
}
