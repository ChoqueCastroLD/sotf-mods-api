# SOTF Mods v2

El hogar del modding de *Sons of the Forest* ([sotf-mods.com](https://sotf-mods.com)),
reconstruido: Astro 7 + React 19 en la web, Fastify 5 + pg-boss en el servidor, PostgreSQL 16 y
Cloudflare R2. Comparte la base de datos de producción con la versión legacy, ampliada solo con
migraciones aditivas, y mantiene byte a byte la API que usan RedManager y los mods.

| Quiero… | Leer |
|---|---|
| Arrancar el proyecto en local | [Arranque rápido](#arranque-rápido) y [`docs/developers/local-environment.md`](docs/developers/local-environment.md) |
| Entender cómo está hecho | [`docs/developers/architecture.md`](docs/developers/architecture.md) y [`docs/adr/`](docs/adr/README.md) |
| Contribuir | [`docs/developers/contributing.md`](docs/developers/contributing.md) |
| Desplegar u operar producción | [`docs/operations/`](docs/operations/README.md) (despliegue, backups, marcha atrás, rotación de secretos, vigilancia) |
| Saber qué se decidió y por qué | [`docs/plan/PLAN.md`](docs/plan/PLAN.md) (fuente única de verdad; §14 prevalece) |
| Ver pendientes | [`docs/backlog/`](docs/backlog/) |

## Requisitos

- Node.js **24.17** (`.nvmrc`) con corepack: `corepack enable pnpm` activa pnpm **12.6**
  (versión fijada en `package.json#packageManager`).
- Docker con Compose v2 (infraestructura local, dump del seed y tests de integración).

## Arranque rápido

Cinco comandos, desde la raíz del repositorio:

```bash
pnpm install
node -e "const fs=require('node:fs'),c=require('node:crypto');fs.writeFileSync('.env',fs.readFileSync('.env.example','utf8').replace(/^(APP_SECRET|INTERNAL_SECRET)=$/gm,(_,k)=>k+'='+c.randomBytes(48).toString('base64url')))"
pnpm infra:up
pnpm db:seed:dev --small
pnpm dev
```

1. Instala las dependencias (versiones exactas del catálogo).
2. Crea `.env` a partir de `.env.example` con `APP_SECRET` e `INTERNAL_SECRET` locales aleatorios
   (equivale a `cp .env.example .env` y rellenar ambos con `openssl rand -base64 48`; sobrescribe
   un `.env` existente). La api, el worker y los scripts `db:*` cargan este `.env` solos.
3. Levanta PostgreSQL 16, SeaweedFS (S3) y Mailpit (proyecto Compose `sotfv2`) y crea los buckets.
4. Construye la base de desarrollo: snapshot público + datos sintéticos → migraciones → backfills
   → verificación. Todas las cuentas usan la contraseña `sotf-dev-2026!` (`<slug>@example.test`).
5. Arranca web, api y worker en modo desarrollo.

Abre **http://127.0.0.1:47321**. Los emails de desarrollo se ven en http://127.0.0.1:47080.

> **Aviso (estado a 2026-09-30, ver [`docs/backlog/WP-A4.md`](docs/backlog/WP-A4.md))**: los
> scripts `dev` de la api y el worker aún no fijan sus puertos de desarrollo, así que `pnpm dev`
> los arranca en 3001 y 3002; la landing se sirve igual, pero sus secciones con datos muestran el
> estado de error y las islas no encuentran `/api` (la web de desarrollo no hace de proxy). Hasta
> que se corrija, para tener el stack completo arranca cada app en su terminal:
>
> ```bash
> PORT=47301 pnpm --filter @sotf/api dev
> PORT=47302 pnpm --filter @sotf/worker dev
> pnpm --filter @sotf/web dev
> ```

Más detalle, cuentas de admin locales y problemas frecuentes:
[`docs/developers/local-environment.md`](docs/developers/local-environment.md).

## Estructura

```
apps/       web (Astro SSR + consola SPA) · api (Fastify) · worker (pg-boss)
packages/   contracts · db · core · ui · brand · i18n · markdown · emails · config
tooling/    scripts (andamiaje) · migration (seed, backfills) · legacy-contract · load
ops/        compose · docker · sql · coolify · cloudflare · runbooks · legacy-hotfix
docs/       plan · adr · developers · operations · backlog
```

Los paquetes internos no se compilan: exportan `./src/index.ts` y las apps los empaquetan
(PLAN §2.4). Convenciones de TypeScript en PLAN §2.6 (`strict`, `noUncheckedIndexedAccess`,
`erasableSyntaxOnly`, imports relativos con extensión `.ts`).

| App | Desarrollo | Producción (Coolify) | README |
|---|---|---|---|
| `@sotf/web` | `127.0.0.1:47321` | `sotf-mods.com` (:4321) | [`apps/web/README.md`](apps/web/README.md) |
| `@sotf/api` | `127.0.0.1:47301` | `sotf-mods.com/api`, `api.sotf-mods.com` (:3001) | [`apps/api/README.md`](apps/api/README.md) |
| `@sotf/worker` | health `127.0.0.1:47302` | interno (:3002) | [`apps/worker/README.md`](apps/worker/README.md) |

## Scripts raíz

| Script | Qué hace |
|---|---|
| `pnpm lint` / `lint:fix` / `format` | Biome (TS, TSX, JSON, CSS, `.astro`) |
| `pnpm typecheck` · `test` · `test:int` · `build` | Turborepo sobre todo el workspace (`test:int` = `*.int.test.ts` con Testcontainers) |
| `pnpm verify` | Puerta de la *Definition of Done*: lint, `check:forbidden`, registros generados al día, mapa de propiedad al día, `check:ownership`, `i18n:check` y typecheck + test + build de lo afectado frente a `main` (`--all` para todo) |
| `pnpm ci:local` | Las mismas etapas que `.github/workflows/ci.yml` (`--quick` omite e2e, LHCI e imágenes) |
| `pnpm check:forbidden` | Falla ante referencias legacy eliminadas (host de ficheros legacy, variables de entorno retiradas, sufijo de vista previa) o cualquier cosa con pinta de secreto |
| `pnpm check:ownership [WP-ID]` | Falla si la rama toca rutas que no son del WP (el id se deduce de la rama `wp/WP-XX`) |
| `pnpm gen` | Regenera los ficheros generados (`*.gen.ts`, `.generated/`, árbol de rutas de la consola); nunca se editan a mano |
| `pnpm gen:ownership` | Regenera `tooling/scripts/ownership.json` desde PLAN §12.3 |
| `pnpm infra:up` / `infra:down` / `infra:reset` / `infra:status` | Infraestructura local (proyecto Compose `sotfv2`) |
| `pnpm dev` | Apps en modo desarrollo |
| `pnpm db:migrate` · `db:guard` · `db:baseline` | Migraciones SQL, guarda de superconjunto y baseline legacy (`packages/db`) |
| `pnpm db:seed:dev` · `db:reset:dev` | Base de desarrollo (`tooling/migration`) |
| `pnpm db:backfill` · `db:invariants` · `db:verify-snapshot` · `db:revert-fix` · `admin:grant` | Backfills, verificaciones, reversión de fixes auditados y roles (`tooling/migration`) |
| `pnpm i18n:check` / `i18n:pseudo` | Catálogo completo en los 13 locales |
| `pnpm e2e` · `contract:legacy` · `lhci` · `load` | Verificación extendida |

Las tareas raíz que implementa un paquete concreto se delegan en su script homónimo
(`tooling/scripts/delegate.ts`); si el paquete aún no existe, fallan indicando qué WP lo entrega.
Los scripts `db:*` y `admin:grant` usan `MIGRATIONS_DATABASE_URL` o `DATABASE_URL` del entorno o
del `.env` raíz, y por defecto la base local (`127.0.0.1:47432`); se niegan a escribir en una
base no local sin `--confirm <base>`.

## Infraestructura local (PLAN §11.2)

| Servicio | Puerto (solo 127.0.0.1) | Credenciales locales |
|---|---|---|
| PostgreSQL 16 | 47432 | `postgres://sotf:sotf@127.0.0.1:47432/sotf` |
| SeaweedFS (API S3) | 47333 | `sotf-dev-access-key` / `sotf-dev-secret-key`; `sotf-mods` con lectura anónima |
| Mailpit | SMTP 47025 · UI 47080 | sin autenticación |

Nunca se usan los puertos 80, 443, 3000, 3199, 3310, 4007, 5455, 6001, 6002, 6767, 8000, 8080,
13000–13004 ni 55432 (otros proyectos del host), ni se tocan contenedores ajenos.

## Cómo trabaja un WP (resumen de PLAN §12.1)

```bash
git -C /root/sotf-mods/sotf-mods-v2 worktree add /root/sotf-mods/sotf-v2-wt/<WP-ID> -b wp/<WP-ID> main
pnpm install && pnpm gen
# ... implementar solo en las rutas propias (tooling/scripts/ownership.json) ...
pnpm verify && pnpm test:int
```

- Lo que haga falta fuera de las rutas propias va a `docs/backlog/<WP-ID>.md` (una línea por
  ítem: qué, dónde y por qué).
- Dependencias nuevas: versión exacta en el `package.json` del paquete + nota en el backlog.
- Commits convencionales. Nadie empuja a GitHub; el integrador fusiona por orden de id.
- Producción es de solo lectura para los agentes (PLAN §12.1, «Datos»).

Guía completa: [`docs/developers/contributing.md`](docs/developers/contributing.md).
