#!/usr/bin/env bash
# Inspects a built image (PLAN §11.1, WP-90 acceptance): size budget and forbidden content.
#
#   ops/docker/inspect-image.sh <image> <max MB> [app dir, default /app]
#
# Fails when the image is larger than the budget (web ≤ 180 MB, node ≤ 230 MB), runs as root, or
# contains `.env` files, database dumps or keys anywhere, or TypeScript sources / tests in the app
# directory outside node_modules. Read-only: the container runs with no network.
set -Eeuo pipefail

IMAGE="${1:?usage: inspect-image.sh <image> <max MB> [app dir]}"
MAX_MB="${2:?usage: inspect-image.sh <image> <max MB> [app dir]}"
APP_DIR="${3:-/app}"
status=0

bytes="$(docker image inspect --format '{{.Size}}' "$IMAGE")"
mb=$(((bytes + 999999) / 1000000))
if ((mb > MAX_MB)); then
  echo "✘ $IMAGE is $mb MB (budget $MAX_MB MB)"
  status=1
else
  echo "✔ $IMAGE is $mb MB (budget $MAX_MB MB)"
fi

user="$(docker image inspect --format '{{.Config.User}}' "$IMAGE")"
if [[ -z "$user" || "$user" == root || "$user" == 0 ]]; then
  echo "✘ $IMAGE runs as root"
  status=1
else
  echo "✔ runs as $user"
fi

found="$(docker run --rm --network none --entrypoint /bin/sh "$IMAGE" -c "
  find / -xdev \( -path /proc -o -path /sys -o -path /dev \) -prune -o -type f \
    \( -name '.env' -o -name '.env.*' -o -name '*.dump' -o -name '*.dmp' -o -name '*.sql.gz' \
       -o -name '*.backup' -o -name '*.pem' -o -name '*.key' -o -name 'id_rsa*' \) -print 2>/dev/null
  if [ -d '$APP_DIR' ]; then
    find '$APP_DIR' -path '$APP_DIR/node_modules' -prune -o -type f \
      \( -name '*.ts' -o -name '*.tsx' -o -name '*.test.*' -o -name '*.spec.*' \) ! -name '*.d.ts' -print
  fi
" | grep -v '^/usr/share/ca-certificates\|^/etc/ssl' || true)"
if [[ -n "$found" ]]; then
  echo "✘ forbidden files in $IMAGE:"
  printf '%s\n' "$found" | sed 's/^/    /' | head -n 50
  status=1
else
  echo "✔ no .env, dumps, keys or TypeScript sources"
fi

docker history --no-trunc --format '{{.Size}}\t{{.CreatedBy}}' "$IMAGE" | head -n 12 | cut -c1-160
exit "$status"
