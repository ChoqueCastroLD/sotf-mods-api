# ops/docker

Production images of SOTF Mods v2 (PLAN §11.1). The build context is always the repository root.

| Image | Dockerfile / target | Contents | Budget | Measured (2026-09-30) |
|---|---|---|---|---|
| `sotf-node` | `node.Dockerfile` (default `runtime`) | `@sotf/api` + `@sotf/worker` bundles (`dist/server.js`, `worker.js`, `migrate.js`, `backfill.js`, `migrations/*.sql`) + pruned production `node_modules` | ≤ 230 MB | 230 MB |
| `sotf-web` | `web.Dockerfile` | Astro build (`dist/server/entry.mjs`, `dist/client`) + pruned production `node_modules` | ≤ 180 MB | 176 MB |
| `sotf-tools` | `node.Dockerfile --target tools` | pruned workspace of `@sotf/migration-tools` (TypeScript run by Node) + `psql`/`pg_dump` | job image, no budget | 515 MB |

```bash
docker build -f ops/docker/node.Dockerfile -t sotf-node --build-arg GIT_SHA=$(git rev-parse HEAD) .
docker build -f ops/docker/node.Dockerfile --target tools -t sotf-tools .
docker build -f ops/docker/web.Dockerfile  -t sotf-web  --build-arg GIT_SHA=$(git rev-parse HEAD) .
ops/docker/inspect-image.sh sotf-node 230 && ops/docker/inspect-image.sh sotf-web 180
```

## How they are built

1. `turbo prune <apps> --docker`: package manifests + pruned lockfile first (the `pnpm fetch` +
   `pnpm install --offline --frozen-lockfile` layer only changes with the lockfile), then sources.
2. `turbo run build` (tsdown bundles for api/worker with workspace packages inlined; `astro build`).
3. `pnpm deploy --prod` of each app; for `sotf-node` the two trees are merged
   (`runtime-deps.mjs merge`). Workspace packages are removed (they are bundled TypeScript).
4. `runtime-deps.mjs prune` keeps only the packages the bundles import and what pnpm links from
   them, and drops type declarations, TypeScript files, source maps and docs. React development
   builds become one-line re-exports of their production twin: deleting them broke Node's
   named-export detection of React's CommonJS entry and both images crashed at start-up
   (`'react' does not provide an export named 'createElement'`). `runtime-deps.mjs check` fails
   the build if a bundle import does not resolve or lacks a named binding the bundle imports, an
   `@sotf/*` import is left, a native addon (sharp, @node-rs/*) does not load on musl, or the app
   directory contains TypeScript, `.env` files, dumps or keys (tests:
   `tooling/scripts/test/runtime-deps.test.ts`).
5. Runtime: plain `alpine:3.23` + the `node` binary of `node:24.17.0-alpine3.23` + `tini`,
   `USER node` (uid 1000), `TZ=UTC`, `NODE_ENV=production`. npm, corepack, yarn and headers are
   not shipped. No `HEALTHCHECK` (Coolify checks `/healthz` with busybox `wget`).

`<name>.Dockerfile.dockerignore` (BuildKit) keeps `.git`, `node_modules`, build outputs, `.env*`,
dumps, keys, docs and the other `ops/` files out of the context.

## Running

`sotf-node` picks its process from `SOTF_ROLE` (`node-entrypoint.sh`): `api` (default), `worker`,
`migrate`, `migrate-task` (Coolify deployment gate), `idle`. An explicit command wins:
`docker run sotf-node node dist/backfill.js B15 --wait`. `sotf-tools` runs `node <args>`
(`docker run sotf-tools src/cli/backfill.ts --list`); without arguments `SOTF_ROLE=help|idle`.
Set `NODE_OPTIONS=--max-old-space-size=<75 % of the memory limit>` per app (templates in
`ops/coolify/env/`). SIGTERM reaches Node through tini; `close-with-grace` drains within 30 s.
