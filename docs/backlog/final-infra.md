# final-infra backlog

One line per item: what · where · why.

- **Remove `minimumReleaseAgeExclude`** · `pnpm-workspace.yaml` (final-infra) · time-gated: every exception is still younger than 24 h until 2026-09-30T20:00Z (the Docker builds run `pnpm fetch` with the policy, so removing them earlier breaks the install). After that time delete the block, run `pnpm install --lockfile-only` and rebuild the images.
- **`e2e/`, `tooling/lhci/` and `tooling/shadow/` packages** · `e2e/**`, `tooling/lhci/**` (WP-91/WP-92) · not on this branch: `pnpm e2e` and `pnpm lhci` delegate to them and stay skipped by `SOTF_OPTIONAL_TASKS=1` in CI until they land; `tooling/lhci/lighthouserc.staging.json` is what `nightly.yml` looks for.
- **Extract-zip advisories** · `pnpm-workspace.yaml` (`auditConfig.ignoreGhsas`) · GHSA-jmr9-qjv8-65gv and GHSA-7pqw-9j4j-h8q3 have no patched release and come only through `@lhci/cli > lighthouse > puppeteer-core` (devDependency of apps/web, never in an image); `showdown` (moderate, test oracle of `@sotf/markdown`) is also unpatched. Drop the ignore when `@lhci/cli` ships a fixed chain.
- **Coolify UI step, not automatable** · `ops/deploy/COOLIFY.md` · the apps, domains and variables are created by the owner in the Coolify UI; nothing was applied.
