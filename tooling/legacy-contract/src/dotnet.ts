/**
 * Driver of the .NET UpdatesChecker checker (`dotnet/`): builds the image
 * (`mcr.microsoft.com/dotnet/sdk:10.0` + Newtonsoft.Json) and runs it without network over a
 * directory of JSON bodies. One result per file.
 */
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { Capture } from './context.ts';
import { PACKAGE_DIR } from './fixtures.ts';
import { SuiteRecorder } from './report.ts';

export const DOTNET_DIR = join(PACKAGE_DIR, 'dotnet');
export const DOTNET_IMAGE = 'sotfv2-legacy-contract-dotnet:local';

export interface DotnetResult {
  file: string;
  ok: boolean;
  mods?: number;
  error?: string;
}

export function dockerAvailable(): boolean {
  const out = spawnSync('docker', ['version', '--format', '{{.Server.Version}}'], { encoding: 'utf8' });
  return out.status === 0;
}

/** Builds (or refreshes from cache) the checker image. Throws with Docker's output on failure. */
export function buildDotnetChecker(): void {
  const out = spawnSync('docker', ['build', '--quiet', '--tag', DOTNET_IMAGE, DOTNET_DIR], { encoding: 'utf8' });
  if (out.status !== 0) throw new Error(`docker build of the .NET checker failed:\n${out.stderr || out.stdout}`);
}

/** Runs the checker over every `*.json` of `dir` (mounted read-only, no network). */
export function runDotnetCheckerOnDir(dir: string): DotnetResult[] {
  const out = spawnSync(
    'docker',
    ['run', '--rm', '--network', 'none', '-v', `${dir}:/data:ro`, DOTNET_IMAGE, '/data'],
    {
      encoding: 'utf8',
      maxBuffer: 16 * 1024 * 1024,
    },
  );
  if (out.status !== 0 && out.status !== 1) throw new Error(`.NET checker exited with ${out.status}: ${out.stderr}`);
  const results = out.stdout
    .split('\n')
    .filter((line) => line.trim().startsWith('{'))
    .map((line) => JSON.parse(line) as DotnetResult);
  if (results.length === 0) throw new Error(`.NET checker printed no result: ${out.stderr}`);
  return results;
}

/** Writes the bodies to a temporary directory and checks them. */
export function runDotnetChecker(bodies: Capture[]): DotnetResult[] {
  const dir = mkdtempSync(join(tmpdir(), 'sotfv2-legacy-contract-'));
  try {
    for (const [i, capture] of bodies.entries()) {
      writeFileSync(
        join(dir, `${String(i).padStart(3, '0')}-${capture.name.replace(/[^\w.-]/g, '_')}.json`),
        capture.body,
      );
    }
    return runDotnetCheckerOnDir(dir);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

/** Suite `dotnet`: the bodies captured from UpdatesChecker routes through the real DTO. */
export function runDotnetSuite(captures: Capture[], mode: 'auto' | 'on' | 'off'): SuiteRecorder {
  const rec = new SuiteRecorder('dotnet');
  if (mode === 'off') {
    rec.skip('UpdatesChecker DTO (.NET + Newtonsoft)', 'disabled with --dotnet off');
    return rec;
  }
  if (captures.length === 0) {
    rec.skip('UpdatesChecker DTO (.NET + Newtonsoft)', 'no UpdatesChecker body was captured');
    return rec;
  }
  if (!dockerAvailable()) {
    if (mode === 'auto') {
      rec.skip(
        'UpdatesChecker DTO (.NET + Newtonsoft)',
        'Docker is not available (use --dotnet on to make it mandatory)',
      );
    } else {
      rec.results.push({
        suite: 'dotnet',
        name: 'UpdatesChecker DTO (.NET + Newtonsoft)',
        status: 'fail',
        message: 'Docker is not available',
        durationMs: 0,
      });
    }
    return rec;
  }
  const t0 = performance.now();
  try {
    buildDotnetChecker();
    const results = runDotnetChecker(captures);
    const ms = Math.round(performance.now() - t0);
    for (const r of results) {
      rec.results.push({
        suite: 'dotnet',
        name: `Newtonsoft DeserializeObject<Root> · ${r.file}`,
        status: r.ok ? 'pass' : 'fail',
        ...(r.ok ? { message: `${r.mods} mod(s)` } : { message: r.error ?? 'failed' }),
        durationMs: ms,
      });
    }
  } catch (error) {
    rec.results.push({
      suite: 'dotnet',
      name: 'UpdatesChecker DTO (.NET + Newtonsoft)',
      status: 'fail',
      message: error instanceof Error ? error.message : String(error),
      durationMs: Math.round(performance.now() - t0),
    });
  }
  return rec;
}
