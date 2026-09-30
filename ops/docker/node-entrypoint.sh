#!/bin/sh
# Entry point of the sotf-node image (PLAN §11.1, §11.3). Runs under tini.
#
#   docker run sotf-node                       → SOTF_ROLE (default api)
#   docker run sotf-node node dist/x.js …      → that command, verbatim
#
# SOTF_ROLE picks the process when no command is given, so every Coolify app can use the same
# image by setting one environment variable (no start-command override needed):
#
#   api            node dist/server.js        (PORT, default 3001; GET /healthz, /readyz)
#   worker         node dist/worker.js        (health server on PORT, default 3002)
#   migrate        node dist/migrate.js up    then exit (exit code = result)
#   migrate-task   node dist/migrate.js up, then answer GET /healthz with 200 on PORT (default
#                  3003) until stopped: a Coolify app whose rolling deployment only turns healthy
#                  once the migrations succeeded (failure => exit 1 => failed deployment). CI polls
#                  that deployment before deploying api/worker/web (.github/workflows/release.yml).
#   idle           stay up doing nothing (to open a Coolify terminal and run
#                  `node dist/backfill.js B15 --apply --wait` or `node dist/migrate.js status`)
set -eu

if [ "$#" -gt 0 ]; then
  exec "$@"
fi

NODE="node --enable-source-maps"

case "${SOTF_ROLE:-api}" in
  api)
    exec $NODE dist/server.js
    ;;
  worker)
    exec $NODE dist/worker.js
    ;;
  migrate)
    exec $NODE dist/migrate.js up
    ;;
  migrate-task)
    $NODE dist/migrate.js up
    echo "migrations applied; serving the task health check on :${PORT:-3003}/healthz"
    exec node -e '
      const http = require("node:http");
      const sha = process.env.GIT_SHA || "dev";
      const server = http.createServer((req, res) => {
        const ok = req.url === "/healthz" || req.url === "/readyz";
        res.writeHead(ok ? 200 : 404, { "content-type": "application/json", "cache-control": "no-store" });
        res.end(ok ? JSON.stringify({ status: "ok", service: "migrate", version: sha }) : "{}");
      });
      server.listen(Number(process.env.PORT || 3003), process.env.HOST || "0.0.0.0");
      for (const signal of ["SIGTERM", "SIGINT"]) process.on(signal, () => server.close(() => process.exit(0)));
    '
    ;;
  idle)
    exec tail -f /dev/null
    ;;
  *)
    echo "unknown SOTF_ROLE \"${SOTF_ROLE}\" (api, worker, migrate, migrate-task, idle)" >&2
    exit 64
    ;;
esac
