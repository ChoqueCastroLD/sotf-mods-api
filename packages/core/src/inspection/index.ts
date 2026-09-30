/**
 * Automatic checks of published files (WP-40, PLAN §7.4): Range-based zip reader, zip checks,
 * mod-relative checks and the `inspection.run` job body. See ../publishing/README.md.
 */
export * from './checks.ts';
export * from './reader.ts';
export * from './run.ts';
export * from './zip.ts';
