#!/usr/bin/env bash
# `pnpm ci:local`: runs locally the same stages as .github/workflows/ci.yml (PLAN §10.2).
#
#   pnpm ci:local            all stages
#   pnpm ci:local --quick    skip the heavy stages (e2e, LHCI, docker images)
#   pnpm ci:local --no-install   reuse the current node_modules
#
# Stages whose owning work package has not landed yet are skipped with a notice
# (SOTF_OPTIONAL_TASKS=1, the local equivalent of `--if-present`).
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/../.."

QUICK=0
INSTALL=1
for arg in "$@"; do
  case "$arg" in
    --quick) QUICK=1 ;;
    --no-install) INSTALL=0 ;;
    -h | --help)
      sed -n '2,9p' "$0" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *)
      echo "unknown option: $arg" >&2
      exit 2
      ;;
  esac
done

export TZ=UTC
export CI=1
export TURBO_TELEMETRY_DISABLED=1
export SOTF_OPTIONAL_TASKS=1

declare -a SUMMARY=()
STARTED=$(date +%s)

stage() {
  local name="$1"
  shift
  local t0
  t0=$(date +%s)
  printf '\n\033[36m▶ %s\033[0m\n' "$name"
  if "$@"; then
    SUMMARY+=("✔ ${name} ($(($(date +%s) - t0))s)")
  else
    local status=$?
    SUMMARY+=("✘ ${name} ($(($(date +%s) - t0))s)")
    print_summary
    printf '\n\033[31mci:local failed at "%s" (exit %s)\033[0m\n' "$name" "$status" >&2
    exit "$status"
  fi
}

skip() {
  SUMMARY+=("- $1 (skipped: $2)")
  printf '\n\033[33m- %s skipped: %s\033[0m\n' "$1" "$2"
}

print_summary() {
  printf '\n\033[1mci:local summary\033[0m\n'
  for line in "${SUMMARY[@]}"; do printf '  %s\n' "$line"; done
}

# Stage 10 of ci.yml: the e2e stack is built from the working tree (images, seed and migrations
# take minutes, hence the long wait), then the e2e suite and the legacy contract run against it.
e2e_stage() {
  local compose=(docker compose -p sotfv2-e2e -f ops/compose/e2e.yml)
  local status=0
  "${compose[@]}" up --build --detach --wait --wait-timeout 600 || status=$?
  if [[ $status -eq 0 ]]; then
    SOTF_E2E_BASE_URL=http://127.0.0.1:47521 \
      SOTF_E2E_API_URL=http://127.0.0.1:47501 \
      SOTF_E2E_MAILPIT_URL=http://127.0.0.1:47580 \
      pnpm e2e || status=$?
  fi
  if [[ $status -eq 0 ]]; then
    pnpm contract:legacy --base-url http://127.0.0.1:47501 --web-url http://127.0.0.1:47521 \
      --mode shape --dotnet on || status=$?
  fi
  if [[ $status -ne 0 ]]; then
    "${compose[@]}" logs --no-color --timestamps >e2e-stack.log 2>&1 || true
    echo "stack logs: e2e-stack.log" >&2
  fi
  "${compose[@]}" down --volumes --remove-orphans
  return "$status"
}

# Stage 12 of ci.yml: the three image targets, the inspection budgets (MB) and /healthz.
docker_stage() {
  local sha
  sha=$(git rev-parse HEAD 2>/dev/null || echo dev)
  docker build --file ops/docker/node.Dockerfile --target runtime --build-arg "GIT_SHA=${sha}" \
    --tag sotfv2-ci/sotf-node:local .
  docker build --file ops/docker/node.Dockerfile --target tools --tag sotfv2-ci/sotf-tools:local .
  docker build --file ops/docker/web.Dockerfile --build-arg "GIT_SHA=${sha}" \
    --tag sotfv2-ci/sotf-web:local .
  ops/docker/inspect-image.sh sotfv2-ci/sotf-node:local 230
  ops/docker/inspect-image.sh sotfv2-ci/sotf-web:local 180
  healthz_stage
}

# The images start and answer /healthz (ports 476xx, as in ci.yml; containers removed afterwards).
healthz_stage() {
  local secret status=0 url
  secret="ci-only-$(openssl rand -hex 24)"
  docker rm -f sotfv2-ci-web sotfv2-ci-api sotfv2-ci-worker >/dev/null 2>&1 || true
  docker run -d --name sotfv2-ci-web -p 127.0.0.1:47621:4321 \
    -e PUBLIC_SITE_URL=http://127.0.0.1:47621 -e SITE_ENV=development \
    -e INTERNAL_API_URL=http://127.0.0.1:9 sotfv2-ci/sotf-web:local >/dev/null
  docker run -d --name sotfv2-ci-api -p 127.0.0.1:47601:3001 \
    -e PUBLIC_SITE_URL=http://127.0.0.1:47621 -e SITE_ENV=development \
    -e INTERNAL_SECRET="$secret" -e APP_SECRET="$secret" \
    -e DATABASE_URL=postgres://nobody:nothing@127.0.0.1:9/none sotfv2-ci/sotf-node:local >/dev/null
  # Without a database the worker's health server never turns ready (by design): it only has to
  # stay up, which proves its bundle links (React for the e-mails) and starts.
  docker run -d --name sotfv2-ci-worker -e SOTF_ROLE=worker \
    -e PUBLIC_SITE_URL=http://127.0.0.1:47621 -e SITE_ENV=development \
    -e INTERNAL_SECRET="$secret" -e APP_SECRET="$secret" \
    -e DATABASE_URL=postgres://nobody:nothing@127.0.0.1:9/none sotfv2-ci/sotf-node:local >/dev/null
  for url in http://127.0.0.1:47621/healthz http://127.0.0.1:47601/healthz; do
    local ok=0
    for _ in $(seq 1 30); do
      if curl --silent --fail "$url" >/dev/null; then
        ok=1
        break
      fi
      sleep 2
    done
    if [[ $ok -eq 0 ]]; then
      echo "$url did not answer 200" >&2
      docker logs sotfv2-ci-web >&2 || true
      docker logs sotfv2-ci-api >&2 || true
      status=1
      break
    fi
  done
  if [[ $status -eq 0 && "$(docker inspect -f '{{.State.Running}}' sotfv2-ci-worker)" != "true" ]]; then
    echo "the worker exited at start-up" >&2
    docker logs sotfv2-ci-worker >&2 || true
    status=1
  fi
  docker rm -f sotfv2-ci-web sotfv2-ci-api sotfv2-ci-worker >/dev/null 2>&1 || true
  return "$status"
}

# Stage 1b of ci.yml (needs Docker for the pinned linters).
linters_stage() {
  docker run --rm -v "$PWD:/repo" -w /repo rhysd/actionlint:1.7.7 -color
  docker run --rm -v "$PWD:/repo" -w /repo koalaman/shellcheck:v0.10.0 -x \
    ops/docker/*.sh ops/coolify/*.sh ops/runbooks/deploy/*.sh tooling/scripts/*.sh
}

has_docker() {
  docker version --format '{{.Server.Version}}' >/dev/null 2>&1
}

if [[ $INSTALL -eq 1 ]]; then
  stage "install (frozen lockfile)" pnpm install --frozen-lockfile
fi
stage "1 biome ci" pnpm exec biome ci .
if has_docker; then
  stage "1b actionlint and shellcheck" linters_stage
else
  skip "1b actionlint and shellcheck" "Docker is not available"
fi
stage "2 dockerfile variants in sync" ops/docker/sync-dockerfiles.sh --check
stage "2 check:forbidden" pnpm check:forbidden
stage "2 secrets-scan" node tooling/scripts/secrets-scan.ts
stage "2b generated files and ownership map" bash -c 'node tooling/scripts/gen.ts --check && node tooling/scripts/gen-ownership.ts --check'
stage "2c check:ownership (wp/* branches)" node tooling/scripts/check-ownership.ts --optional
stage "3 i18n:check" pnpm i18n:check
stage "3b brand assets are fresh" pnpm --filter @sotf/brand check:assets
stage "4 typecheck" pnpm exec turbo run typecheck --output-logs=errors-only
stage "5 unit tests" pnpm exec turbo run test --output-logs=errors-only
stage "6 integration tests" pnpm exec turbo run test:int --output-logs=errors-only
stage "7 db:guard" pnpm db:guard
stage "8 contract:legacy" pnpm contract:legacy
stage "9 build" pnpm exec turbo run build --output-logs=errors-only

if [[ $QUICK -eq 1 ]]; then
  skip "10 e2e" "--quick"
  skip "11 lhci" "--quick"
  skip "12 docker images" "--quick"
else
  if [[ -f ops/compose/e2e.yml ]]; then
    stage "10 e2e" e2e_stage
  else
    skip "10 e2e" "ops/compose/e2e.yml not delivered yet (WP-90)"
  fi
  stage "11 lhci" pnpm lhci
  stage "12 docker images" docker_stage
fi

print_summary
printf '\n\033[32mci:local passed in %ss\033[0m\n' "$(($(date +%s) - STARTED))"
