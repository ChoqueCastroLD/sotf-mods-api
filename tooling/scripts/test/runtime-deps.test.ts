/**
 * `ops/docker/runtime-deps.mjs` (image dependency layout): React's development builds are stubbed,
 * not deleted, and `check` fails when a bundle imports a binding its dependency does not provide.
 * Regression: the pruned web and worker images crashed at start-up with
 * `SyntaxError: The requested module 'react' does not provide an export named 'createElement'`.
 */
import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { repoPath } from '../lib/repo.ts';
import { tempDir, writeFiles } from './helpers.ts';

let cleanup: (() => void) | undefined;
afterEach(() => cleanup?.());

const REACT_ENTRY = `'use strict';
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
`;

/** A pnpm-shaped app: dist/server.mjs imports React's named exports; one unused package. */
function makeApp(): string {
  const tmp = tempDir('sotf-runtime-deps-');
  cleanup = tmp.cleanup;
  const app = tmp.dir;
  const react = 'node_modules/.pnpm/react@19.3.0/node_modules/react';
  writeFiles(app, {
    'package.json': JSON.stringify({ name: 'app', private: true, type: 'module' }),
    'dist/server.mjs':
      'import React, { createElement, memo } from "react";\nexport default [React, createElement, memo];\n',
    [`${react}/package.json`]: JSON.stringify({ name: 'react', version: '19.3.0', main: 'index.js' }),
    [`${react}/index.js`]: REACT_ENTRY,
    [`${react}/cjs/react.production.js`]:
      "'use strict';\nexports.createElement = () => 'prod';\nexports.memo = (x) => x;\n",
    [`${react}/cjs/react.development.js`]: `'use strict';\n/* ${'x'.repeat(5000)} */\nexports.createElement = () => 'dev';\nexports.memo = (x) => x;\n`,
    'node_modules/.pnpm/unused@1.0.0/node_modules/unused/package.json': JSON.stringify({ name: 'unused' }),
  });
  symlinkSync('.pnpm/react@19.3.0/node_modules/react', join(app, 'node_modules/react'));
  symlinkSync('.pnpm/unused@1.0.0/node_modules/unused', join(app, 'node_modules/unused'));
  copyFileSync(repoPath('ops/docker/runtime-deps.mjs'), join(app, 'runtime-deps.mjs'));
  return app;
}

const run = (app: string, ...args: string[]) =>
  spawnSync(process.execPath, [join(app, 'runtime-deps.mjs'), ...args], {
    cwd: app,
    encoding: 'utf8',
    env: { ...process.env, NODE_ENV: 'production' },
  });

describe('runtime-deps.mjs', () => {
  it('stubs React development builds so named imports keep working after prune', () => {
    const app = makeApp();
    expect(run(app, 'prune', 'dist').status).toBe(0);
    const dev = join(app, 'node_modules/.pnpm/react@19.3.0/node_modules/react/cjs/react.development.js');
    expect(readFileSync(dev, 'utf8')).toBe("'use strict';\nmodule.exports = require('./react.production.js');\n");
    expect(existsSync(join(app, 'node_modules/unused'))).toBe(false);
    const checked = run(app, 'check', 'dist');
    expect(checked.stderr).toBe('');
    expect(checked.status).toBe(0);
    const started = spawnSync(process.execPath, ['--input-type=module', '-e', 'await import("./dist/server.mjs")'], {
      cwd: app,
      encoding: 'utf8',
      env: { ...process.env, NODE_ENV: 'production' },
    });
    expect(started.stderr).toBe('');
    expect(started.status).toBe(0);
  });

  it('fails the check when a bundle imports a binding the package does not provide', () => {
    const app = makeApp();
    // What the old prune did: delete the development build.
    rmSync(join(app, 'node_modules/.pnpm/react@19.3.0/node_modules/react/cjs/react.development.js'));
    const checked = run(app, 'check', 'dist');
    expect(checked.status).toBe(1);
    expect(checked.stderr).toContain('"react" does not provide "createElement", "memo"');
  });

  it('reports a missing named export of an ESM dependency', () => {
    const app = makeApp();
    const esm = 'node_modules/.pnpm/esm-dep@1.0.0/node_modules/esm-dep';
    writeFiles(app, {
      [`${esm}/package.json`]: JSON.stringify({ name: 'esm-dep', type: 'module', exports: './index.js' }),
      [`${esm}/index.js`]: 'export const present = 1;\n',
      'dist/other.mjs': 'import { present, absent as renamed } from "esm-dep";\nexport { present, renamed };\n',
    });
    mkdirSync(join(app, 'node_modules'), { recursive: true });
    symlinkSync('.pnpm/esm-dep@1.0.0/node_modules/esm-dep', join(app, 'node_modules/esm-dep'));
    const checked = run(app, 'check', 'dist');
    expect(checked.status).toBe(1);
    expect(checked.stderr).toContain('"esm-dep" does not provide "absent"');
    expect(checked.stderr).not.toContain('"present"');
  });
});
