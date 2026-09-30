# ops/compose

Infraestructura de contenedores para desarrollo y CI (PLAN §11.2).

| Fichero | Proyecto | Uso | Dueño |
|---|---|---|---|
| `dev.yml` | `sotfv2` | Desarrollo local: `pnpm infra:up`, `infra:down`, `infra:reset`, `infra:status` | WP-00 |
| `e2e.yml` | `sotfv2-e2e` (puertos 475xx) | e2e con las imágenes construidas (etapa 10 de CI y `pnpm ci:local`) | WP-90 |

`dev.yml`:

| Servicio | Imagen | Puerto del host | Healthcheck |
|---|---|---|---|
| `postgres` | `postgres:16-alpine` | `127.0.0.1:47432` | `pg_isready` |
| `seaweedfs` | `chrislusf/seaweedfs:4.48` (API S3) | `127.0.0.1:47333` | `GET /healthz` de la pasarela S3 |
| `mailpit` | `axllent/mailpit:v1.31.3` | SMTP `127.0.0.1:47025`, UI `127.0.0.1:47080` | `mailpit readyz` |

- Todo escucha solo en `127.0.0.1` y usa puertos verificados como libres en el host compartido.
- `pnpm infra:up` espera a que los tres servicios estén *healthy* y crea los buckets
  `sotf-mods` (lectura anónima, como `r2.sotf-mods.com`) y `sotf-mods-private` con `weed shell`.
- `infra:down` elimina contenedores y red y conserva los volúmenes; `infra:reset` borra también
  los volúmenes (`sotfv2_pgdata`, `sotfv2_s3data`).
- Las credenciales son valores locales desechables, iguales a los de `.env.example`.

`e2e.yml` (todo en `127.0.0.1`; arranque:
`docker compose -p sotfv2-e2e -f ops/compose/e2e.yml up --build --detach --wait --wait-timeout 600`):

| Servicio | Imagen | Puerto del host | Papel |
|---|---|---|---|
| `postgres` | `postgres:16-alpine` | `47532` | Base del stack |
| `seaweedfs` | `chrislusf/seaweedfs:4.48` (API S3) | `47533` | R2 emulado |
| `buckets` | `chrislusf/seaweedfs:4.48` | — | *One-shot*: crea `sotf-mods` y `sotf-mods-private` y termina con 0 |
| `mailpit` | `axllent/mailpit:v1.31.3` | SMTP `47525`, UI/API `47580` | Emails de los flujos e2e |
| `seed` | `sotf-tools` (`node.Dockerfile`, *target* `tools`) | — | *One-shot*: `db:seed:dev --small` (contraseña `sotf-dev-2026!`, emails `@example.test`) |
| `migrate` | `sotf-node` | — | *One-shot*: `node dist/migrate.js` (no-op tras el seed; prueba la tarea de producción) |
| `api` | `sotf-node` | `47501` (→ 3001) | API, también servida por `edge` en `/api` |
| `worker` | `sotf-node` | health `47502` (→ 3002) | Jobs |
| `web` | `sotf-web` (`web.Dockerfile`) | — (solo a través de `edge`) | Astro SSR |
| `edge` | Caddy | `47521` | Mismo origen que Coolify: `/api/*` → api, el resto → web |

- Variables de las pruebas: `SOTF_E2E_BASE_URL=http://127.0.0.1:47521`,
  `SOTF_E2E_API_URL=http://127.0.0.1:47501`, `SOTF_E2E_MAILPIT_URL=http://127.0.0.1:47580`.
- `SOTF_NODE_IMAGE`, `SOTF_TOOLS_IMAGE` y `SOTF_WEB_IMAGE` reutilizan imágenes ya construidas
  (`--no-build`, como hace CI).
- `seed`, `migrate` y `buckets` terminan con 0 a propósito: `--wait` los acepta (los demás
  servicios dependen de ellos con `service_completed_successfully`; comprobado con Compose v2,
  el stack queda listo en ≈ 45 s con las imágenes ya construidas).
