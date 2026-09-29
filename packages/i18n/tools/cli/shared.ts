/** Helpers shared by the `@sotf/i18n` command-line tools. */
import { fileURLToPath } from 'node:url';
import type { Diagnostic } from '../catalog.ts';
import { loadCatalog } from '../catalog.ts';
import { formatDiagnostic, type ValidatedCatalog, validateCatalog } from '../validate.ts';

/** Absolute path of packages/i18n. */
export const PACKAGE_ROOT = fileURLToPath(new URL('../../', import.meta.url));

const useColor = process.stdout.isTTY === true && process.env.NO_COLOR === undefined;
const paint = (code: number) => (text: string) => (useColor ? `\u001b[${code}m${text}\u001b[0m` : text);
export const color = { red: paint(31), green: paint(32), yellow: paint(33), dim: paint(2), bold: paint(1) };

export function printDiagnostics(diagnostics: readonly Diagnostic[], out: NodeJS.WriteStream = process.stderr): void {
  for (const diagnostic of diagnostics) {
    const line = formatDiagnostic(diagnostic);
    out.write(`${diagnostic.level === 'error' ? color.red(line) : color.yellow(line)}\n`);
  }
}

/** Loads and validates the catalog under the package root. */
export function loadValidated(root = PACKAGE_ROOT): ValidatedCatalog {
  return validateCatalog(loadCatalog(root));
}

export function errorCount(diagnostics: readonly Diagnostic[]): number {
  return diagnostics.filter((diagnostic) => diagnostic.level === 'error').length;
}

/** Runs an async CLI entry point, printing unexpected errors without a stack for known ones. */
export function main(entry: () => Promise<number>): void {
  entry().then(
    (code) => {
      process.exitCode = code;
    },
    (error: unknown) => {
      process.stderr.write(
        `${color.red('error')} ${error instanceof Error ? (error.stack ?? error.message) : String(error)}\n`,
      );
      process.exitCode = 1;
    },
  );
}
