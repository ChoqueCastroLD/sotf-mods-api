# Referencia de variables de entorno por app

Fuente de verdad: los esquemas Zod (`packages/core/src/kernel/env.ts`, `apps/api/src/env.ts`,
`apps/worker/src/env.ts`, `apps/web/src/lib/env.ts`). Cada app los valida al arrancar y sale con un
mensaje claro si falta algo. Plantillas listas para pegar en Coolify (*Developer view*):
[`../coolify/env/`](../coolify/env/). **Nunca** valores reales en el repositorio (PLAN §9.4).

Leyenda: **R** requerida · **O** opcional · secreto = márcalo con el candado en Coolify.

## Variables eliminadas (no las copies de las apps legacy)

Se retiran con la pasada del host de ficheros legacy (subdominio `files`) a R2 (PLAN §2.8, §11.4). `pnpm check:forbidden`
falla si reaparecen en el código, y las apps v2 las ignoran:

| Variable legacy | Sustituida por |
|---|---|
| `SIMPLEFILE_SERVER_DOMAIN`, `FILE_DOWNLOAD_ENDPOINT` (y cualquier `FILE_UPLOAD_*`/`FILES_*`) | subidas presignadas y descargas por redirección a R2 (`R2_*`) |
| `R2_BUCKET_NAME`, `R2_CUSTOM_DOMAIN` | `R2_BUCKET`, `R2_PUBLIC_BASE_URL` (`https://r2.sotf-mods.com`) |
| `JWT_SECRET` | `APP_SECRET` (HMAC; sesiones opacas en BD) |
| `GPT_API_KEY` | `OPENAI_API_KEY` |
| `BASE_URL`, `PUBLIC_BASE_URL`, `PUBLIC_API_URL` | `PUBLIC_SITE_URL`, `INTERNAL_API_URL` |
| `PORT`/`HOST` compartidos | uno por app (puertos en las tablas de abajo) |

El subdominio legacy `files` desaparece: ninguna app lo usa ni lo admite en CSP; el registro DNS
se borra en T+7 (`ops/cloudflare/README.md` §1).

## Comunes a api, worker y web

| Variable | Req. | Valor producción | Notas |
|---|---|---|---|
| `NODE_ENV` | R | `production` | |
| `TZ` | R | `UTC` | cualquier otro valor aborta api/worker |
| `LOG_LEVEL` | O | `info` | `fatal…silent` |
| `SITE_ENV` | R | `production` | `staging` (beta), `preflight` (next): distinto de `production` => `noindex` + banner |
| `PUBLIC_SITE_URL` | R | `https://sotf-mods.com` | origen sin ruta; https en producción |
| `INTERNAL_SECRET` | R (secreto) | `openssl rand -base64 48` | el **mismo** en web, api y worker del entorno; ≥ 32 car. |
| `SENTRY_DSN` | O | vacío | |
| `SOURCE_COMMIT` | automática | | la inyecta Coolify; api/worker la copian a `GIT_SHA`; la web la lee |

## `sotf-v2-api` (`SOTF_ROLE=api`, puerto 3001, `/healthz`)

| Variable | Req. | Notas |
|---|---|---|
| `SOTF_ROLE` | O | `api` (valor por defecto de `api.Dockerfile`) |
| `PORT` / `HOST` | O | `3001` / `0.0.0.0` (por defecto en la imagen) |
| `DATABASE_URL` | R (secreto) | rol `sotf_v2_app` de `ops/sql/roles.sql` |
| `DB_POOL_MAX` | O | 10 |
| `APP_SECRET` | R (secreto) | HMAC de sesiones / `ipHash` / `chatHash`; igual en api y worker; rotarlo cierra todas las sesiones |
| `PGBOSS_SCHEMA` | O | `pgboss` |
| `LEGACY_COEXIST` | O | `true` hasta D3 del corte, después `false` |
| `LEGACY_SNAKE_ALIASES` | O | `false` |
| `LEGACY_SUNSET_AT` | O | fecha ISO del `Sunset` de las rutas legacy; vacío = T0 + 12 meses |
| `ARGON2_CONCURRENCY` | O | 2 |
| `CSRF_TRUSTED_ORIGINS` | O | orígenes extra (coma) durante preflight/corte; vacío en producción |
| `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY` | R (secretos) | token R2 *Object Read & Write* |
| `R2_BUCKET`, `R2_PRIVATE_BUCKET` | O | `sotf-mods`, `sotf-mods-private` (staging: `sotf-mods-staging`) |
| `R2_PUBLIC_BASE_URL` | O | `https://r2.sotf-mods.com` |
| `R2_ENDPOINT`, `R2_PUBLIC_ENDPOINT` | O | solo emuladores locales/e2e; **vacías** en producción |
| `TURNSTILE_SECRET_KEY` | R (secreto) | staging: clave de prueba de Cloudflare |
| `OPENAI_API_KEY` | O (secreto) | KelvinSeek; sin ella el chat responde «no disponible» |
| `KELVINSEEK_MODEL`, `KELVINSEEK_DAILY_BUDGET_USD` | O | `gpt-4o-mini`, `3` |
| `NODE_OPTIONS` | O | `--max-old-space-size=384` (75 % de 512 MB) |

## `sotf-v2-worker` (`SOTF_ROLE=worker`, puerto 3002, `/healthz`)

| Variable | Req. | Notas |
|---|---|---|
| `SOTF_ROLE` | O | `worker` (por defecto de `worker.Dockerfile`) |
| `PORT` / `HOST` | O | `3002` / `0.0.0.0` |
| `DATABASE_URL`, `DB_POOL_MAX`(5), `APP_SECRET`, `PGBOSS_SCHEMA`, `LEGACY_COEXIST`, `LEGACY_SNAKE_ALIASES` | | como en la api |
| `WEB_INTERNAL_URL` | R en producción | `http://<uuid de sotf-v2-web>:4321` (invalidación de caché `/_internal/cache/invalidate`) |
| `R2_*` | R | como en la api (sin `R2_PUBLIC_ENDPOINT`) |
| `EMAIL_TRANSPORT` | R | `resend` (producción) · `allowlist` (staging) · `mailpit` (solo local) |
| `EMAIL_FROM` | O | `SOTF Mods <noreply@sotf-mods.com>` |
| `EMAIL_ALLOWLIST` | O | destinatarios permitidos con `allowlist` |
| `RESEND_API_KEY` | R con `resend` (secreto) | dominio `sotf-mods.com` verificado (SPF/DKIM) |
| `SMTP_URL` | O | solo `mailpit` |
| `CF_ZONE_ID`, `CF_API_TOKEN` | O (secreto) | purga de caché (*Zone → Cache Purge*); vacío = solo TTL |
| `INDEXNOW_KEY` | O | el mismo valor que en la web |
| `VIRUSTOTAL_API_KEY` | O (secreto) | |
| `OPENAI_API_KEY`, `KELVINSEEK_MODEL`, `KELVINSEEK_DAILY_BUDGET_USD` | O | como en la api |
| `WORKER_CONCURRENCY` | O | 2 |
| `NODE_OPTIONS` | O | `--max-old-space-size=576` (75 % de 768 MB) |

## `sotf-v2-web` (puerto 4321, `/healthz`)

| Variable | Req. | Notas |
|---|---|---|
| `PORT` / `HOST` | O | `4321` / `0.0.0.0` |
| `INTERNAL_API_URL` | R | `http://<uuid de sotf-v2-api>:3001` |
| `INTERNAL_SECRET` | R si `SITE_ENV` ≠ `development` | |
| `R2_PUBLIC_BASE_URL` | O | `https://r2.sotf-mods.com` |
| `R2_ENDPOINT` | O | solo emuladores; su origen entra en `connect-src` |
| `PUBLIC_TURNSTILE_SITE_KEY` | R | clave pública del widget |
| `PUBLIC_ADSENSE_CLIENT` | O | `ca-pub-…`; vacío en staging |
| `PUBLIC_ADSENSE_SLOT_HOME`, `_FEED`, `_MOD_SIDEBAR` | O | ids numéricos; vacío = el hueco no se pinta |
| `CSP_MODE` | O | `enforce` \| `report-only`; vacío = por `SITE_ENV` (staging report-only) |
| `INDEXNOW_KEY` | O | sirve `/<key>.txt` |
| `SENTRY_DSN`, `PUBLIC_SENTRY_DSN_CONSOLE` | O | |
| `RELEASE_SHA` | O | prevalece sobre `SOURCE_COMMIT` |
| `NODE_OPTIONS` | O | `--max-old-space-size=288` |

La web **no** lee secretos de BD ni de R2 privado.

## `sotf-v2-migrate` (`SOTF_ROLE=migrate-task`, puerto 3003)

`SOTF_ROLE=migrate-task`, `PORT=3003`, `MIGRATIONS_DATABASE_URL` (credenciales de *owner*, secreto),
`NODE_ENV`, `TZ`, `LOG_LEVEL`. Plantilla: [`../coolify/env/migrate.env.example`](../coolify/env/migrate.env.example).

## Tareas de operador (`sotf-tools`, parada salvo uso)

[`../coolify/env/tools.env.example`](../coolify/env/tools.env.example): `DATABASE_URL` /
`MIGRATIONS_DATABASE_URL` de *owner*, `SOTF_NO_DOTENV=1`. Se para al terminar.

## Desarrollo local

[`.env.example`](../../.env.example) en la raíz (`pnpm env:init` lo copia a `.env` y genera
`APP_SECRET` e `INTERNAL_SECRET`). Sin `PORT` compartido: los scripts `dev` fijan web 47321, api
47301 y worker 47302.
