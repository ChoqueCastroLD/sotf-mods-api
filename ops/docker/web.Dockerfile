# syntax=docker/dockerfile:1.7
#
# Web image of SOTF Mods v2: `sotf-web` = @sotf/web, Astro 7 SSR on the Node standalone adapter
# (PLAN §11.1).
#
#   docker build -f ops/docker/web.Dockerfile -t sotf-web .
#   node dist/server/entry.mjs   (port 4321, GET /healthz; the console SPA and the islands are
#                                 static assets in dist/client, served by the same process)
#
# Stages: prune (turbo prune --docker) → deps (pnpm fetch + offline install, cached by the lockfile
# alone) → build (turbo build: @sotf/ui CSS, then astro build) → deploy (pnpm deploy --prod,
# workspace sources removed, pruned to what dist/server imports) → runtime (Alpine + the node
# binary + tini, USER node, TZ=UTC, NODE_ENV=production).
#
# The image carries a HEALTHCHECK (busybox wget on /healthz); a Coolify health check configured on
# the app takes precedence over it.
# Target size: ≤ 180 MB. The build context is the repository root; web.Dockerfile.dockerignore keeps
# .env files, dumps, node_modules and build outputs out of it.

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
    ASTRO_TELEMETRY_DISABLED=1 \
    DO_NOT_TRACK=1
RUN corepack enable pnpm
WORKDIR /repo

# ── prune ─────────────────────────────────────────────────────────────────────────────────────
FROM base AS prune
ARG TURBO_VERSION
COPY . .
RUN npm exec --yes "turbo@${TURBO_VERSION}" -- prune @sotf/web --docker --out-dir /prune/web

# ── deps ──────────────────────────────────────────────────────────────────────────────────────
FROM base AS deps
COPY --from=prune /prune/web/json/ ./
COPY --from=prune /prune/web/pnpm-lock.yaml /prune/web/pnpm-workspace.yaml ./
COPY .npmrc ./
RUN --mount=type=cache,id=sotf-pnpm-store,target=/pnpm/store \
    pnpm fetch \
 && pnpm install --offline --frozen-lockfile

# ── build ─────────────────────────────────────────────────────────────────────────────────────
# The build is environment independent: the server reads PUBLIC_SITE_URL, SITE_ENV, the AdSense and
# Turnstile keys… at start-up (src/lib/env.ts), so one image serves staging, preflight and
# production.
FROM deps AS build
COPY --from=prune /prune/web/full/ ./
COPY tsconfig.base.json ./
RUN NODE_ENV=production pnpm exec turbo run build --filter=@sotf/web... --env-mode=loose \
 && test -f apps/web/dist/server/entry.mjs \
 && test -d apps/web/dist/client

# ── deploy: production node_modules of the web, pruned to what the server bundle imports ───────
FROM build AS deploy
COPY ops/docker/runtime-deps.mjs /opt/runtime-deps.mjs
RUN --mount=type=cache,id=sotf-pnpm-store,target=/pnpm/store \
    pnpm --filter @sotf/web deploy --prod /out/web
RUN set -eu; \
    mkdir -p /out/app; \
    cp -a /out/web/node_modules /out/app/node_modules; \
    rm -rf /out/app/node_modules/@sotf /out/app/node_modules/.pnpm/@sotf+* \
           /out/app/node_modules/.pnpm/node_modules/@sotf; \
    cp -a apps/web/dist /out/app/dist; \
    # Source maps of the client bundles are not published (they would expose the sources).
    find /out/app/dist/client -type f -name '*.map' -delete; \
    node -e "const p=require('./apps/web/package.json'); require('node:fs').writeFileSync('/out/app/package.json', JSON.stringify({name:'sotf-web', private:true, type:p.type, version:p.version}, null, 2)+'\\n')"; \
    cp /opt/runtime-deps.mjs /out/app/runtime-deps.mjs; \
    node /out/app/runtime-deps.mjs prune dist/server; \
    node /out/app/runtime-deps.mjs check dist/server; \
    rm /out/app/runtime-deps.mjs; \
    rm -rf /out/web

# ── runtime ───────────────────────────────────────────────────────────────────────────────────
# Plain Alpine (same release as the Node image, for musl and libstdc++) plus the node binary: npm,
# npx, corepack, yarn and the C headers of the official image never reach production.
FROM ${ALPINE_IMAGE} AS runtime
ARG GIT_SHA=
ARG BUILD_DATE=unknown
# Coolify passes the commit it builds as SOURCE_COMMIT (read by the web for /healthz and the purge).
ARG SOURCE_COMMIT=
LABEL org.opencontainers.image.title="sotf-web" \
      org.opencontainers.image.description="SOTF Mods v2 web (Astro SSR, islands and console)" \
      org.opencontainers.image.source="https://github.com/ChoqueCastroLD/sotf-mods-api" \
      org.opencontainers.image.revision="${GIT_SHA}" \
      org.opencontainers.image.created="${BUILD_DATE}" \
      org.opencontainers.image.licenses="UNLICENSED"
RUN apk add --no-cache libstdc++ libgcc tini \
 && addgroup -g 1000 node \
 && adduser -u 1000 -G node -s /sbin/nologin -D -H node
COPY --from=base /usr/local/bin/node /usr/local/bin/node
# RELEASE_SHA (the git sha, set by CI) names the post-deploy `html` purge and shows in /healthz;
# empty => a per-boot id (src/lib/server/deploy-purge.ts).
ENV NODE_ENV=production \
    TZ=UTC \
    RELEASE_SHA=${GIT_SHA} \
    SOURCE_COMMIT=${SOURCE_COMMIT} \
    HOST=0.0.0.0 \
    PORT=4321
WORKDIR /app
COPY --from=deploy --chown=root:root /out/app/ ./
# Persistent volume for hashed assets of previous builds (ASSET_ARCHIVE_DIR, asset-archive.ts);
# created here so a fresh named volume inherits the node user's ownership.
RUN mkdir -p /data/assets && chown node:node /data/assets
USER node
EXPOSE 4321
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s --retries=5 \
  CMD wget -q -O /dev/null "http://127.0.0.1:${PORT}/healthz" || exit 1
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "--enable-source-maps", "dist/server/entry.mjs"]
