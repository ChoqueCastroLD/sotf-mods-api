# ops/compose

Infraestructura de contenedores para desarrollo y CI (PLAN §11.2).

| Fichero | Proyecto | Uso | Dueño |
|---|---|---|---|
| `dev.yml` | `sotfv2` | Desarrollo local: `pnpm infra:up`, `infra:down`, `infra:reset`, `infra:status` | WP-00 |
| `e2e.yml` | `sotfv2-e2e` (puertos 475xx) | e2e con las imágenes construidas | WP-90 |

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
