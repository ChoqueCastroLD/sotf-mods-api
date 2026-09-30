# syntax=docker/dockerfile:1.7
# GENERATED from node.Dockerfile by ops/docker/sync-dockerfiles.sh. Do not edit: change node.Dockerfile and re-run.
#
# Node image of SOTF Mods v2: `sotf-node` = @sotf/api + @sotf/worker (PLAN §11.1).
#
#   docker build -f ops/docker/node.Dockerfile -t sotf-node .                 # runtime (default)
#   docker build -f ops/docker/node.Dockerfile --target tools -t sotf-tools . # operator CLIs
#
# One image, one variable per Coolify app (PLAN §11.3; ops/docker/node-entrypoint.sh):
#   SOTF_ROLE=api           node dist/server.js   (port 3001, GET /healthz)          [default]
#   SOTF_ROLE=worker        node dist/worker.js   (health on 3002)
#   SOTF_ROLE=migrate       node dist/migrate.js up, then exit (MIGRATIONS_DATABASE_URL, owner)
#   SOTF_ROLE=migrate-task  the same, then a 200 /healthz on 3003 (Coolify deployment gate)
#   SOTF_ROLE=idle          stays up for a Coolify terminal (node dist/backfill.js …)
# An explicit command always wins: `docker run sotf-node node dist/backfill.js B15 --apply --wait`.
#
# Stages: prune (turbo prune --docker) → deps (pnpm fetch + offline install, cached by the lockfile
# alone) → build (turbo build of both apps) → deploy (pnpm deploy --prod of each app, merged into a
# single production node_modules without the workspace TypeScript sources, which are bundled) →
# runtime (node:24-alpine + tini, USER node, TZ=UTC, NODE_ENV=production).
#
# The default target is `runtime` (last stage). The `tools` target is a separate job image with the pruned workspace of @sotf/migration-tools
# (TypeScript run by Node's type stripping): backfills with `--confirm`, invariants,
# verify-snapshot, admin:grant, the R2 passes. It is never deployed as a service.
#
# Coolify builds from Git with one of the thin variants of this file (same stages, other defaults;
# ops/docker/sync-dockerfiles.sh regenerates them, CI checks they are in sync):
#   api.Dockerfile     SOTF_ROLE=api     PORT=3001  (default of this file)
#   worker.Dockerfile  SOTF_ROLE=worker  PORT=3002
# The image carries a HEALTHCHECK (busybox wget on /healthz of $PORT); a Coolify health check
# configured on the app takes precedence over it. For SOTF_ROLE=idle set the Coolify health check
# off (nothing listens).
# The build context is the repository root; node.Dockerfile.dockerignore keeps .env files, dumps,
# node_modules and build outputs out of it.

ARG NODE_IMAGE=node:24.17.0-alpine3.23
ARG ALPINE_IMAGE=alpine:3.23
ARG TURBO_VERSION=2.11.5

# ── base: Node + pnpm (version from package.json#packageManager, through corepack) ─────────────
FROM ${NODE_IMAGE} AS base
ENV PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH \
    TZ=UTC \
    CI=1 \
    COREPACK_ENABLE_DOWNLOAD_PROMPT=0 \
    TURBO_TELEMETRY_DISABLED=1 \
    DO_NOT_TRACK=1
RUN corepack enable pnpm
WORKDIR /repo

# ── prune: the sub-workspace of the apps (package.json files + pruned lockfile, then sources) ──
FROM base AS prune
ARG TURBO_VERSION
COPY . .
RUN npm exec --yes "turbo@${TURBO_VERSION}" -- prune @sotf/api @sotf/worker --docker --out-dir /prune/node \
 && npm exec --yes "turbo@${TURBO_VERSION}" -- prune @sotf/migration-tools --docker --out-dir /prune/tools

# ── deps: every dependency of the pruned workspace; this layer only changes with the lockfile ──
FROM base AS deps
COPY --from=prune /prune/node/json/ ./
COPY --from=prune /prune/node/pnpm-lock.yaml /prune/node/pnpm-workspace.yaml ./
COPY .npmrc ./
RUN --mount=type=cache,id=sotf-pnpm-store,target=/pnpm/store \
    pnpm fetch \
 && pnpm install --offline --frozen-lockfile

# ── build: tsdown bundles (workspace packages inlined, npm dependencies external) ───────────────
FROM deps AS build
ARG TURBO_VERSION
COPY --from=prune /prune/node/full/ ./
COPY tsconfig.base.json ./
RUN pnpm exec turbo run build --filter=@sotf/api... --filter=@sotf/worker... --env-mode=loose \
 && test -f apps/api/dist/server.js \
 && test -f apps/api/dist/migrate.js \
 && test -f apps/api/dist/backfill.js \
 && test -f apps/worker/dist/worker.js \
 && ls apps/api/dist/migrations/*.sql > /dev/null

# ── deploy: production node_modules of both apps, merged and pruned into /out/app ───────────────
FROM build AS deploy
COPY ops/docker/runtime-deps.mjs /opt/runtime-deps.mjs
RUN --mount=type=cache,id=sotf-pnpm-store,target=/pnpm/store \
    pnpm --filter @sotf/api deploy --prod /out/api \
 && pnpm --filter @sotf/worker deploy --prod /out/worker
# Both deployments come from the same lockfile, so their union is the node_modules of both apps.
# Workspace packages (@sotf/*) are bundled into dist/: their TypeScript copies are removed, then
# everything the bundles cannot reach is pruned (runtime-deps.mjs).
RUN set -eu; \
    mkdir -p /out/app/dist; \
    cp -a /out/api/node_modules /out/app/node_modules; \
    node /opt/runtime-deps.mjs merge /out/worker/node_modules /out/app/node_modules; \
    rm -rf /out/app/node_modules/@sotf /out/app/node_modules/.pnpm/@sotf+* \
           /out/app/node_modules/.pnpm/node_modules/@sotf; \
    cp -a apps/api/dist/. /out/app/dist/; \
    cp -a apps/worker/dist/. /out/app/dist/; \
    node -e "const p=require('./apps/api/package.json'); require('node:fs').writeFileSync('/out/app/package.json', JSON.stringify({name:'sotf-node', private:true, type:p.type, version:p.version}, null, 2)+'\\n')"; \
    cp /opt/runtime-deps.mjs /out/app/runtime-deps.mjs; \
    node /out/app/runtime-deps.mjs prune dist; \
    node /out/app/runtime-deps.mjs check dist --load sharp @node-rs/argon2 @node-rs/bcrypt pg pg-boss fastify; \
    rm /out/app/runtime-deps.mjs; \
    rm -rf /out/api /out/worker

# ── tools: operator CLIs of @sotf/migration-tools (job image, never a service) ──────────────────
FROM base AS tools-deps
COPY --from=prune /prune/tools/json/ ./
COPY --from=prune /prune/tools/pnpm-lock.yaml /prune/tools/pnpm-workspace.yaml ./
COPY .npmrc ./
RUN --mount=type=cache,id=sotf-pnpm-store,target=/pnpm/store \
    pnpm fetch \
 && pnpm install --offline --frozen-lockfile

FROM tools-deps AS tools-build
COPY --from=prune /prune/tools/full/ ./
COPY tsconfig.base.json ./
# Node refuses to strip types under node_modules, but workspace packages are symlinks to
# /repo/packages/*, so their sources resolve outside it. Fail the build if that ever changes.
RUN node tooling/migration/src/cli/backfill.ts --help > /dev/null \
 && rm -rf tooling/migration/test tooling/migration/rehearsal /root/.npm /root/.cache

FROM ${NODE_IMAGE} AS tools
ARG GIT_SHA=dev
LABEL org.opencontainers.image.title="sotf-tools" \
      org.opencontainers.image.description="SOTF Mods v2 operator CLIs (backfills, invariants, admin:grant, R2 passes)" \
      org.opencontainers.image.source="https://github.com/ChoqueCastroLD/sotf-mods-api" \
      org.opencontainers.image.revision="${GIT_SHA}"
RUN apk add --no-cache tini postgresql16-client
ENV NODE_ENV=production \
    TZ=UTC \
    GIT_SHA=${GIT_SHA} \
    SOTF_NO_DOTENV=1
WORKDIR /repo/tooling/migration
COPY --from=tools-build --chown=root:root /repo/ /repo/
COPY --chmod=0755 ops/docker/tools-entrypoint.sh /usr/local/bin/sotf-tools
# The CLIs write their reports to out/ (tooling/migration/out); give the node user that directory.
RUN mkdir -p /repo/tooling/migration/out && chown node:node /repo/tooling/migration/out
USER node
# `docker run sotf-tools src/cli/backfill.ts --list` runs `node src/cli/backfill.ts --list`;
# without arguments SOTF_ROLE decides (help | idle). See ops/docker/tools-entrypoint.sh.
ENTRYPOINT ["/sbin/tini", "--", "/usr/local/bin/sotf-tools"]
CMD []

# ── runtime: api + worker + migrate + backfill ────────────────────────────────────────────────
# Plain Alpine (same release as the Node image, for musl and libstdc++) plus the node binary: npm,
# npx, corepack, yarn and the C headers of the official image never reach production.
FROM ${ALPINE_IMAGE} AS runtime
ARG GIT_SHA=dev
ARG BUILD_DATE=unknown
# Coolify passes the commit it builds as SOURCE_COMMIT; GIT_SHA (CI) wins when both are set.
ARG SOURCE_COMMIT=
# @role-defaults (rewritten by ops/docker/sync-dockerfiles.sh for the api/worker variants)
ARG SOTF_ROLE=api
ARG APP_PORT=3001
# @end-role-defaults
LABEL org.opencontainers.image.title="sotf-node" \
      org.opencontainers.image.description="SOTF Mods v2 API, worker, migrate and backfill tasks" \
      org.opencontainers.image.source="https://github.com/ChoqueCastroLD/sotf-mods-api" \
      org.opencontainers.image.revision="${GIT_SHA}" \
      org.opencontainers.image.created="${BUILD_DATE}" \
      org.opencontainers.image.licenses="UNLICENSED"
# tini reaps zombies and forwards SIGTERM, so close-with-grace can drain within Coolify's 30 s.
# tzdata is not needed (TZ=UTC); wget for Coolify's health check comes with busybox.
RUN apk add --no-cache libstdc++ libgcc tini \
 && addgroup -g 1000 node \
 && adduser -u 1000 -G node -s /sbin/nologin -D -H node
COPY --from=base /usr/local/bin/node /usr/local/bin/node
ENV NODE_ENV=production \
    TZ=UTC \
    GIT_SHA=${GIT_SHA} \
    SOURCE_COMMIT=${SOURCE_COMMIT} \
    SOTF_ROLE=${SOTF_ROLE} \
    HOST=0.0.0.0 \
    PORT=${APP_PORT}
WORKDIR /app
COPY --from=deploy --chown=root:root /out/app/ ./
COPY --chmod=0755 ops/docker/node-entrypoint.sh /usr/local/bin/sotf-entrypoint
USER node
EXPOSE 3001 3002 3003
HEALTHCHECK --interval=15s --timeout=5s --start-period=40s --retries=5 \
  CMD wget -q -O /dev/null "http://127.0.0.1:${PORT}/healthz" || exit 1
# No command: SOTF_ROLE (api | worker | migrate | migrate-task | idle) picks the process, and an
# explicit command (`docker run sotf-node node dist/backfill.js B15`) always wins.
ENTRYPOINT ["/sbin/tini", "--", "/usr/local/bin/sotf-entrypoint"]
CMD []
