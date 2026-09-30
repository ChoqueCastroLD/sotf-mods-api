# Despliegue en Coolify desde Git (paso a paso)

Para el dueño del sitio. Ningún agente toca Coolify ni hace `push`: el orquestador publica la rama
`v2` **solo cuando lo apruebes** (PLAN §14.4). Este documento construye las apps **desde el
repositorio** (Coolify compila los Dockerfiles). La alternativa con imágenes precompiladas en GHCR
y despliegue por CI está en [`../coolify/README.md`](../coolify/README.md); elige **una**.

Referencias: variables por app en [`ENV.md`](ENV.md) y plantillas en
[`../coolify/env/`](../coolify/env/); Cloudflare en [`../cloudflare/README.md`](../cloudflare/README.md);
corte en [`../runbooks/cutover/README.md`](../runbooks/cutover/README.md); PLAN §6.13, §11.3, §14.

## 0. Resumen

Repositorio `ChoqueCastroLD/sotf-mods-api`, rama **`v2`** (en el corte pasa a `main`). Contexto de
compilación (*Base Directory*) siempre `/`, la raíz del monorepo.

| App | Dockerfile | Puerto | Health | Memoria | Dominios (staging → producción) |
|---|---|---|---|---|---|
| `sotf-v2-web` | `/ops/docker/web.Dockerfile` | 4321 | `GET /healthz` | 384 MB | `https://beta.sotf-mods.com` → `https://sotf-mods.com` |
| `sotf-v2-api` | `/ops/docker/api.Dockerfile` | 3001 | `GET /healthz` | 512 MB | `https://beta.sotf-mods.com/api` → `https://sotf-mods.com/api,https://api.sotf-mods.com` |
| `sotf-v2-worker` | `/ops/docker/worker.Dockerfile` | 3002 | `GET /healthz` | 768 MB | ninguno |
| `sotf-v2-migrate` | `/ops/docker/api.Dockerfile` (`SOTF_ROLE=migrate-task`) | 3003 | `GET /healthz` | 512 MB | ninguno |
| `sotf-v2-tools` (parada salvo uso) | `/ops/docker/node.Dockerfile`, *Build target* `tools` (`SOTF_ROLE=idle`) | - | ninguno | 512 MB | ninguno |
| BD staging `sotf-v2-staging-db` | `postgres:16-alpine` | 5432 | nativo | - | sin puerto público |

Las imágenes son multi-etapa, corren como usuario `node` (uid 1000, no root), usan `tini` y llevan
`HEALTHCHECK` (`wget` de busybox sobre `/healthz`). `api.Dockerfile` y `worker.Dockerfile` se
generan desde `node.Dockerfile` (`ops/docker/sync-dockerfiles.sh`, CI comprueba que están al día).

## 1. Preparación (una vez)

1. **Repositorio**: el orquestador publica el monorepo en la rama `v2` de
   `ChoqueCastroLD/sotf-mods-api` cuando lo apruebes. `ChoqueCastroLD/sotf-mods-frontend` queda
   congelado como legacy (marcha atrás).
2. **Coolify → Sources**: conecta GitHub con una *GitHub App* o una *Deploy Key* de **solo lectura**
   sobre `ChoqueCastroLD/sotf-mods-api` (*Keys & Tokens* → *Private Keys* si usas deploy key).
3. **Proyecto**: *Projects* → **+ Add** → `sotf-mods-v2`; entornos `production` (por defecto) y
   `staging`. No se toca el proyecto legacy ni otros proyectos del servidor.
4. **Red**: *Destination* el mismo servidor y la red `coolify` de `sotf-mods-db` (host interno
   `ukg0ks4`). Comprueba en `sotf-mods-db` → *General* → *Network*.
5. **Sin backups** (§14.5): no programes backups. La marcha atrás es volver a apuntar los dominios
   a las apps legacy (el esquema solo se amplió).

## 2. Base de datos de staging

Entorno `staging` → **+ New** → *Database* → PostgreSQL 16 (`postgres:16-alpine`), nombre
`sotf-v2-staging-db`, base `sotf_staging`. **No** marques *Make it publicly available*. Carga el
seed y `ops/sql/roles.sql` según [`../runbooks/deploy/06-staging.md`](../runbooks/deploy/06-staging.md)
y [`../coolify/README.md`](../coolify/README.md) §4. Producción usa la BD existente `sotf-mods-db`.

## 3. Crear cada app (repetir por entorno)

Entorno → **+ New** → *Private Repository (with GitHub App)* / *(with Deploy Key)* →
repositorio `ChoqueCastroLD/sotf-mods-api`, rama `v2`.

### 3.1 Ajustes comunes (pestaña *General*)

| Campo | Valor |
|---|---|
| *Build Pack* | **Dockerfile** |
| *Base Directory* | `/` |
| *Dockerfile Location* | el de la tabla del §0 (p. ej. `/ops/docker/api.Dockerfile`) |
| *Ports Exposes* | el de la tabla (4321, 3001, 3002, 3003) |
| *Ports Mappings* | **vacío** (ningún puerto al host; así funciona el *rolling update*) |
| *Container Name* | el que genera Coolify (no lo fijes) |
| *Domains* | los de la tabla, con `https://` (Coolify emite el certificado; Cloudflare en *Full (strict)*) |
| *Strip Prefixes* (solo api) | **desactivado**: la api espera `/api/...` completo |
| *Auto Deploy* | desactivado en producción; en staging puedes activarlo (webhook de GitHub) |
| *Watch Paths* (opcional) | api/worker: `apps/api/**,apps/worker/**,packages/**,ops/docker/**,pnpm-lock.yaml` · web: `apps/web/**,packages/**,ops/docker/web.Dockerfile,pnpm-lock.yaml` |
| *Pre/Post-deployment command* | vacío (las migraciones son la app `sotf-v2-migrate`) |
| *Resource limits* | memoria de la tabla, *Swap* 0 |

*Health check* (pestaña *Health Checks*, sustituye al de la imagen; es opcional porque la imagen ya
trae uno): activado · `GET` · `http` · host `localhost` · puerto el de la tabla · path `/healthz` ·
código `200` · intervalo 10 s · timeout 5 s · reintentos 5 · *start period* 30 s (**300 s** en
`sotf-v2-migrate`).

Coolify inyecta `SOURCE_COMMIT` (build y ejecución); la imagen lo usa como versión en `/healthz`,
los logs y la purga posterior al despliegue. No definas `GIT_SHA`.

### 3.2 Variables (pestaña *Environment Variables* → *Developer view*)

Pega la plantilla de la app ([`../coolify/env/`](../coolify/env/)) y sustituye cada `<...>`; el
significado de cada variable está en [`ENV.md`](ENV.md). Reglas:

- Secretos (`*_SECRET`, `*_KEY`, `*_TOKEN`, contraseñas, URLs con contraseña): candado activado y
  **sin** *Build Variable* (no hacen falta en la compilación). Genera con `openssl rand -base64 48`.
- `INTERNAL_SECRET` igual en web, api y worker **del mismo entorno**; `APP_SECRET` igual en api y
  worker. Staging y producción usan secretos **distintos**.
- No copies variables de las apps legacy (`FILE_*`, `SIMPLEFILE_*`, `JWT_SECRET`, `GPT_API_KEY`,
  `BASE_URL`…): ver «Variables eliminadas» en `ENV.md`.
- `INTERNAL_API_URL` y `WEB_INTERNAL_URL` usan el *uuid* de la app de destino como nombre de host
  (*General* → *Container Name*; con *rolling update* el alias apunta siempre al contenedor sano).

### 3.3 Cada app

- **`sotf-v2-web`**: `SITE_ENV=staging` (beta) / `production`; `PUBLIC_ADSENSE_CLIENT` solo en
  producción.
- **`sotf-v2-api`**: `SOTF_ROLE=api`. Tras el primer despliegue, valida el mismo origen con
  [`../runbooks/deploy/02-same-origin-api.md`](../runbooks/deploy/02-same-origin-api.md).
- **`sotf-v2-worker`**: `SOTF_ROLE=worker`. Sin dominio.
- **`sotf-v2-migrate`**: Dockerfile de la api con `SOTF_ROLE=migrate-task` y `PORT=3003`. Al
  desplegarse aplica las migraciones (guarda de superconjunto → migraciones aditivas → pg-boss →
  guarda) con `MIGRATIONS_DATABASE_URL` (*owner*) y solo entonces responde 200; si falla sale con
  código 1 y el despliegue queda *unhealthy*. **Despliégala siempre antes que api/worker/web** y
  espera a que esté *healthy*. Después de una migración que añade tablas ejecuta de nuevo
  `ops/sql/roles.sql` ([`../sql/README.md`](../sql/README.md)).
- **`sotf-v2-tools`** (solo producción): *Build target* `tools`, `SOTF_ROLE=idle`, sin health
  check. Sirve para la *Terminal* de Coolify (backfills, invariantes, `admin:grant`, pasadas R2).
  Arráncala, úsala y **párala**: tiene credenciales de *owner*.

## 4. Orden de despliegue de cada release

1. `sotf-v2-migrate` (esperar *healthy*).
2. `sotf-v2-api` y `sotf-v2-worker`.
3. `sotf-v2-web`.
4. `ops/runbooks/deploy/smoke.sh staging` (o `production`; solo GET/HEAD).

Marcha atrás de una release: *Deployments* → la anterior → **Rollback** (las migraciones son
aditivas, el esquema antiguo sigue valiendo). Detalle en
[`../runbooks/deploy/04-release-and-rollback.md`](../runbooks/deploy/04-release-and-rollback.md).

## 5. Staging: `beta.sotf-mods.com`

1. DNS (Cloudflare, *Proxied*): `beta` → servidor de Coolify.
2. BD de staging con el seed, `SITE_ENV=staging` en web/api/worker (banner + `noindex`),
   `EMAIL_TRANSPORT=allowlist`, Turnstile con claves de prueba, `R2_BUCKET=sotf-mods-staging`.
3. Despliegue en el orden del §4 y `smoke.sh staging`.
4. Observa una semana la CSP en modo `report-only`; después `CSP_MODE=enforce`.

## 6. Producción y corte

1. **Preflight** en `next.sotf-mods.com` (`SITE_ENV=preflight`, BD real con el esquema ampliado por
   las migraciones aditivas; `CSRF_TRUSTED_ORIGINS=https://next.sotf-mods.com`). Las fases A-F están
   en PLAN §6.13 y [`../runbooks/cutover/README.md`](../runbooks/cutover/README.md).
2. **Cutover (D2)**: en las apps v2 de producción cambia los dominios a
   web `https://sotf-mods.com` y api `https://sotf-mods.com/api,https://api.sotf-mods.com`, y
   `SITE_ENV=production`; quita esos dominios de las apps legacy. Después
   `LEGACY_COEXIST=false` en api y worker (solo con la legacy parada, D3).
3. **Admin**: desde `sotf-v2-tools`,
   `node src/cli/admin-grant.ts --email luis.choque.castro@outlook.com --role admin` (equivale a
   `pnpm admin:grant`; si el email no existe, regístralo y verifícalo antes).
4. **Cloudflare** (D5): *Purge Everything* y activar la regla `r2-immutable`; ver §7.
5. **Marcha atrás**: volver a apuntar los dominios a las apps legacy (siguen funcionando); no hay
   restauración de backup.

## 7. Cloudflare: caché

Todo el detalle (DNS, SSL, reglas) está en [`../cloudflare/README.md`](../cloudflare/README.md).
Resumen de las reglas de caché (*Caching → Cache Rules*, en este orden):

| Regla | Expresión | Ajuste |
|---|---|---|
| `sotf-cache-origin` | `http.host in {"sotf-mods.com" "api.sotf-mods.com" "beta.sotf-mods.com"}` | Elegible; *Edge TTL*: respetar `Cache-Control` del origen, sin él no cachear; *Browser TTL*: respetar el origen; *serve stale while revalidating* |
| `r2-immutable` (**crear desactivada, activar en D5**) | `http.host eq "r2.sotf-mods.com"` | Elegible; *Edge TTL* 1 año ignorando el origen; *Browser TTL* 1 año |
| `sotf-bypass` | descargas (`/mods/*/*/download/*`, `/api/mods/*/download/*`), `/api/v2/auth`, `/me`, `/stream`, `/e`, `/uploads`, `/api/kelvinseek`, `/_internal` | *Bypass cache* |

- `r2.sotf-mods.com` es el dominio personalizado del bucket `sotf-mods` (R2 → *Settings* →
  *Custom Domains*); los objetos son inmutables (nombre con hash), por eso 1 año. El worker
  reescribe metadatos de `Content-Disposition` en R2 (ADR-0014), no hace falta regla de cabeceras.
- El subdominio legacy `files` **ya no existe en v2**: borra el registro DNS en T+7 si Analytics confirma
  0 tráfico.
- El token de purga (*Zone → Cache Purge*) va a `CF_API_TOKEN` + `CF_ZONE_ID` del worker.
- Comprobación (GET/HEAD): `ops/runbooks/deploy/smoke.sh production`;
  `SMOKE_EXPECT_IMMUTABLE=1 ops/runbooks/deploy/smoke-r2.sh https://sotf-mods.com`.

## 8. Lista final

- [ ] Las apps de staging en *Running (healthy)*; `02-same-origin-api.md` y `smoke.sh staging` en verde.
- [ ] Ninguna app v2 publica puertos al host; la BD de staging sin puerto público.
- [ ] Ninguna variable de producción en staging y viceversa; ningún secreto en el repositorio.
- [ ] `sotf-v2-tools` parada.
- [ ] Reglas de Cloudflare creadas (`r2-immutable` desactivada hasta D5).
