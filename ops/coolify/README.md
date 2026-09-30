# Runbook · Coolify: proyecto `sotf-mods-v2`

Para el dueño del sitio (lo aplica **U**; ningún agente toca Coolify). Referencias: PLAN §11.3
(topología), §11.4 (variables), §10.2 (CI/CD), §6.13 (corte) y §14 (decisiones: sin backups,
repositorio `ChoqueCastroLD/sotf-mods-api` rama `v2`).

Instancia: Coolify 4 en `https://coolify.sotf-mods.com`. **No se modifica nada del proyecto
legacy «Sons of the forest Mods»** (`sotf-mods-api`, `sotf-mods-frontend`, `sotf-mods-db`) ni de
los otros proyectos del servidor, salvo lo que diga el runbook de corte (§6.13 B2, D2).

Resumen de lo que se crea:

| Entorno | App | Imagen (GHCR) | `SOTF_ROLE` | Dominios | Puerto | Health | Memoria |
|---|---|---|---|---|---|---|---|
| staging | `sotf-v2-web` | `sotf-web:staging` | — | `https://beta.sotf-mods.com` | 4321 | `GET /healthz` | 384 MB |
| staging | `sotf-v2-api` | `sotf-node:staging` | `api` | `https://beta.sotf-mods.com/api` | 3001 | `GET /healthz` | 512 MB |
| staging | `sotf-v2-worker` | `sotf-node:staging` | `worker` | — | 3002 | `GET /healthz` | 768 MB |
| staging | `sotf-v2-migrate` | `sotf-node:staging` | `migrate-task` | — | 3003 | `GET /healthz` | 512 MB |
| staging | `sotf-v2-staging-db` | `postgres:16-alpine` | — | **sin puerto público** | 5432 | nativo | — |
| production | `sotf-v2-web` | `sotf-web:production` | — | `https://next.sotf-mods.com` → (D2) `https://sotf-mods.com` | 4321 | `GET /healthz` | 384 MB |
| production | `sotf-v2-api` | `sotf-node:production` | `api` | `https://next.sotf-mods.com/api` → (D2) `https://sotf-mods.com/api,https://api.sotf-mods.com` | 3001 | `GET /healthz` | 512 MB |
| production | `sotf-v2-worker` | `sotf-node:production` | `worker` | — | 3002 | `GET /healthz` | 768 MB |
| production | `sotf-v2-migrate` | `sotf-node:production` | `migrate-task` | — | 3003 | `GET /healthz` | 512 MB |
| production | `sotf-v2-tools` (parada salvo uso) | `sotf-tools:production` | `idle` | — | — | ninguno | 512 MB |
| production | BD existente `sotf-mods-db` (`ukg0ks4`, proyecto legacy) | — | — | — | — | — | — |

Plantillas de variables de cada app: [`env/`](env/) (placeholders, **nunca** valores reales en el
repositorio).

---

## 1. Requisitos previos (una vez)

1. Repositorio: el monorepo se publica como rama `v2` de `ChoqueCastroLD/sotf-mods-api` (§14.4).
   El push lo hace el orquestador **solo** cuando lo apruebes.
2. GitHub → Settings → Actions → General → *Workflow permissions*: «Read repository contents and
   packages permissions» (los workflows piden `packages: write` solo en los jobs de imágenes).
3. El primer push a `v2` ejecuta `release.yml`, que publica `ghcr.io/choquecastrold/sotf-node`,
   `sotf-tools` y `sotf-web` con las etiquetas `sha-<sha>` y `staging`. Los paquetes GHCR nacen
   **privados**; déjalos así.

## 2. Acceso de Coolify a GHCR (una vez)

1. GitHub → Settings → Developer settings → Personal access tokens → *Fine-grained* no sirve para
   GHCR: crea un token **classic** con **solo** `read:packages`, caducidad 1 año, nombre
   `coolify-ghcr-pull`.
2. En el servidor de Coolify (terminal del servidor en Coolify → *Servers* → tu servidor →
   *Terminal*, o SSH):

   ```bash
   docker login ghcr.io -u ChoqueCastroLD   # pega el token cuando lo pida (no queda en el historial)
   ```

   Coolify usa las credenciales de Docker del servidor para descargar imágenes privadas.
3. Anota en tu gestor de contraseñas la fecha de caducidad del token.

## 3. Proyecto y entornos

1. Coolify → *Projects* → **+ Add** → nombre `sotf-mods-v2`, descripción «SOTF Mods v2».
2. Dentro del proyecto, el entorno `production` existe por defecto; **+ Add environment** →
   `staging`.
3. *Destination*: el mismo servidor y la **misma red Docker** que `sotf-mods-db` (la predefinida
   `coolify`), para que el host interno `ukg0ks4` resuelva desde las apps v2. Compruébalo en
   `sotf-mods-db` → *General* → *Network*.

## 4. Base de datos de staging

Entorno `staging` → **+ New** → *Database* → PostgreSQL → imagen `postgres:16-alpine`,
nombre `sotf-v2-staging-db`, base `sotf_staging`, usuario `sotf_staging` (contraseña generada por
Coolify). **No** marques *Make it publicly available*. Sin backups programados (§14.5). El
contenido se carga con el seed ([`../runbooks/deploy/06-staging.md`](../runbooks/deploy/06-staging.md)).

Después de cargar el seed ejecuta `ops/sql/roles.sql` contra ella (crea `sotf_v2_app`, con el
que corren api y worker); ver [`../sql/README.md`](../sql/README.md). Copia el fichero al servidor
(`/tmp/roles.sql`) y, en la terminal del servidor, usa un contenedor efímero `postgres:16-alpine`
en la red de Coolify (la BD no tiene puerto público):

```bash
docker run --rm -it --network coolify -v /tmp/roles.sql:/roles.sql:ro postgres:16-alpine \
  psql "postgres://sotf_staging:<contraseña>@<host interno de sotf-v2-staging-db>:5432/sotf_staging" \
  -v ON_ERROR_STOP=1 -v v2_password='<contraseña nueva de sotf_v2_app>' \
  -v legacy_password='<otra contraseña aleatoria; el rol legacy no se usa en staging>' -f /roles.sql
```

El script debe terminar con `roles.sql: complete`.

## 5. Aplicaciones (repetir en `staging` y en `production`)

Para cada app: entorno → **+ New** → *Docker Image*.

### 5.1 Ajustes comunes

| Campo | Valor |
|---|---|
| *Docker Image* | `ghcr.io/choquecastrold/sotf-node` (api, worker, migrate) o `ghcr.io/choquecastrold/sotf-web` (web) |
| *Docker Image Tag* | `staging` en staging · `production` en producción (las mueve CI; no uses `latest`) |
| *Ports Exposes* | el de la tabla (4321, 3001, 3002 o 3003) |
| *Ports Mappings* | **vacío** (sin puertos al host: Coolify solo hace *rolling update* así) |
| *Container name* | el que genera Coolify (no lo fijes: impediría el *rolling update*) |
| *Resource limits* → *Memory* | la de la tabla; *Swap* 0 |
| *Health check* | *Enabled* · método `GET` · esquema `http` · host `localhost` · puerto el de la tabla · path `/healthz` · código `200` · intervalo 10 s · timeout 5 s · reintentos 5 · *start period* 30 s (**300 s** en `sotf-v2-migrate`) |
| *Restart policy* | `unless-stopped` (por defecto) |
| *Custom Docker Options* | `--init` no hace falta (la imagen ya usa `tini`); déjalo vacío |
| *Pre/Post-deployment command* | vacío (las migraciones son la app `sotf-v2-migrate`) |
| *Auto deploy* | **desactivado** (despliega CI por webhook) |

La imagen elige el proceso con `SOTF_ROLE` ([`../docker/node-entrypoint.sh`](../docker/node-entrypoint.sh)),
así que **no hace falta** sobrescribir el comando de arranque. La web no lo necesita.

### 5.2 `sotf-v2-web`

- Dominios: staging `https://beta.sotf-mods.com` · producción `https://next.sotf-mods.com`
  (preflight C1) y en el corte D2 `https://sotf-mods.com`.
- Variables: [`env/web.env.example`](env/web.env.example).
- `INTERNAL_API_URL`: `http://<nombre del contenedor de sotf-v2-api>:3001`. El nombre es el
  *uuid* de la app que muestra Coolify (*General* → *Container name*); con *rolling update* el
  alias de red del *uuid* apunta siempre al contenedor sano.

### 5.3 `sotf-v2-api`

- Dominios: staging `https://beta.sotf-mods.com/api` · producción `https://next.sotf-mods.com/api`
  y en el corte `https://sotf-mods.com/api,https://api.sotf-mods.com`.
- *Advanced* → **Strip Prefixes: desactivado** (la API espera recibir `/api/...` completo).
- Variables: [`env/api.env.example`](env/api.env.example).
- Validación del `/api` en el mismo origen: [`../runbooks/deploy/02-same-origin-api.md`](../runbooks/deploy/02-same-origin-api.md)
  (obligatoria en staging antes de seguir).

### 5.4 `sotf-v2-worker`

- Sin dominio. *Ports Exposes* 3002 (solo para el health check interno).
- Variables: [`env/worker.env.example`](env/worker.env.example). `WEB_INTERNAL_URL` =
  `http://<contenedor de sotf-v2-web>:4321`.

### 5.5 `sotf-v2-migrate` (tarea de migraciones)

- Misma imagen que la API, `SOTF_ROLE=migrate-task`, puerto 3003, sin dominio.
- Al desplegarse ejecuta `node dist/migrate.js up` (guarda de superconjunto → migraciones
  aditivas → pg-boss → guarda) con `MIGRATIONS_DATABASE_URL` (credenciales de *owner*) y **solo
  entonces** responde `200` en `/healthz`. Si falla, el proceso sale con código 1, el despliegue
  queda *unhealthy* y CI se detiene antes de desplegar api/worker/web.
- Queda arrancada (≈ 40 MB) sirviendo solo ese health check; puedes pararla entre despliegues:
  CI la vuelve a desplegar en cada release.
- Variables: [`env/migrate.env.example`](env/migrate.env.example).
- Tras una migración que añade tablas de solo inserción, vuelve a ejecutar `ops/sql/roles.sql`
  (ver [`../sql/README.md`](../sql/README.md)).

### 5.6 `sotf-v2-tools` (solo producción, parada salvo uso)

- Imagen `ghcr.io/choquecastrold/sotf-tools`, etiqueta `production`, `SOTF_ROLE=idle`, sin
  dominio, **sin health check**.
- Sirve para abrir la *Terminal* de Coolify y ejecutar los CLIs del operador (backfills con
  `--confirm`, invariantes, `verify-snapshot`, `admin:grant`, pasadas R2) dentro de la red de la
  BD, sin túneles SSH. Guía: [`../runbooks/deploy/05-migrations-and-backfills.md`](../runbooks/deploy/05-migrations-and-backfills.md).
- Arráncala, úsala y **párala** (*Stop*) al terminar: tiene credenciales de *owner*.
- Variables: [`env/tools.env.example`](env/tools.env.example).

## 6. Variables y secretos

- Coolify → app → *Environment Variables* → *Developer view* → pega la plantilla y sustituye
  cada `<…>`. Marca como **Is Literal** los valores con `$` y como secretos (candado) los
  `*_SECRET`, `*_KEY`, `*_TOKEN`, contraseñas y URLs con contraseña.
- Genera cada secreto con `openssl rand -base64 48` (≥ 32 caracteres; las apps no arrancan con
  menos). `INTERNAL_SECRET` debe ser **el mismo** en web, api y worker del mismo entorno;
  `APP_SECRET` el mismo en api y worker. Staging y producción usan secretos **distintos**.
- Las apps validan su entorno con Zod al arrancar y, si falta algo, el contenedor sale con un
  mensaje claro (visible en *Logs*).
- `GIT_SHA` / `RELEASE_SHA` vienen en la imagen (CI); no los definas.
- Variables legacy eliminadas (§11.4): no las copies de las apps legacy.

## 7. GitHub Actions: entornos, variables y token

1. Coolify → *Keys & Tokens* → *API tokens* → **+ Create** → nombre `github-actions-deploy`,
   permiso **solo `deploy`**. Copia el token.
2. GitHub → Settings → Environments:
   - `staging`: sin revisores.
   - `production`: *Required reviewers* = tú; *Deployment branches and tags* → solo etiquetas
     `v*`.
3. En cada entorno, *Environment secrets* → `COOLIFY_TOKEN` = el token del paso 1.
4. *Environment variables*:

   | Variable | staging | production |
   |---|---|---|
   | `COOLIFY_URL` | `https://coolify.sotf-mods.com` | `https://coolify.sotf-mods.com` |
   | `COOLIFY_STAGING_MIGRATE_UUID` | uuid de `sotf-v2-migrate` (staging) | — |
   | `COOLIFY_STAGING_APP_UUIDS` | `<uuid api>,<uuid worker>,<uuid web>` (staging) | — |
   | `COOLIFY_PRODUCTION_MIGRATE_UUID` | — | uuid de `sotf-v2-migrate` (producción) |
   | `COOLIFY_PRODUCTION_APP_UUIDS` | — | `<uuid api>,<uuid worker>,<uuid web>` (producción) |

   El *uuid* es el segmento de la URL de la app en Coolify (`…/application/<uuid>`).
5. Flujo resultante: push a `v2`/`main` → `release.yml` (imágenes → migrate → api/worker/web →
   smoke) en staging; etiqueta `v*` → `deploy.yml` (aprobación → retag → migrate → despliegue →
   smoke) en producción. Detalle y marcha atrás: [`../runbooks/deploy/04-release-and-rollback.md`](../runbooks/deploy/04-release-and-rollback.md).

`ops/coolify/coolify-deploy.sh` (lo usa CI) solo llama al webhook de despliegue
(`GET /api/v1/deploy?uuid=…`) y lee el estado (`GET /api/v1/deployments/<id>`); no crea ni edita
recursos.

## 8. Comprobaciones finales

- [ ] Las cuatro apps de staging muestran *Running (healthy)*.
- [ ] `02-same-origin-api.md` en verde en `beta.sotf-mods.com`.
- [ ] `ops/runbooks/deploy/smoke.sh staging` en verde.
- [ ] Ninguna app v2 publica puertos al host (*Ports Mappings* vacío).
- [ ] `sotf-v2-staging-db` sin puerto público; ninguna variable de producción en staging.
- [ ] `sotf-v2-tools` parada.
