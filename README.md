# SOTF Mods v2

El hogar del modding de *Sons of the Forest* (sotf-mods.com), reconstruido: Astro 7 + React 19 en
la web, Fastify 5 + pg-boss en el servidor, PostgreSQL 16 y Cloudflare R2.

- **Plan maestro (fuente única de verdad)**: [`docs/plan/PLAN.md`](docs/plan/PLAN.md)
- **Decisiones de arquitectura**: [`docs/adr/`](docs/adr/README.md)
- **Pendientes por paquete de trabajo**: [`docs/backlog/`](docs/backlog/)

## Requisitos

- Node.js **24.17** (`.nvmrc`) con corepack: `corepack enable pnpm` activa pnpm **12.6**
  (versión fijada en `package.json#packageManager`).
- Docker con Compose v2 (infraestructura local y tests de integración).

## Arranque

```bash
corepack enable pnpm
pnpm install            # lockfile congelado en CI; versiones exactas del catálogo
cp .env.example .env    # valores locales; los secretos reales solo viven en Coolify
pnpm infra:up           # postgres, seaweedfs (S3) y mailpit, healthy y con los buckets creados
pnpm verify             # lint, checks, typecheck, tests y build de lo afectado
```

La web (`pnpm dev`) y los datos de desarrollo (`pnpm db:seed:dev`) llegan con WP-22, WP-10 y
WP-14 (ver el plan, §12.3).

## Estructura

```
apps/       web (Astro SSR + consola SPA) · api (Fastify) · worker (pg-boss)
packages/   contracts · db · core · ui · brand · i18n · markdown · emails · config
tooling/    scripts (este andamiaje) · migration · legacy-contract · lhci · load · shadow
ops/        compose · docker · sql · coolify · cloudflare · runbooks · legacy-hotfix
e2e/        Playwright
docs/       plan · adr · backlog
```

Los paquetes internos no se compilan: exportan `./src/index.ts` y las apps los empaquetan
(PLAN §2.4). Convenciones de TypeScript en PLAN §2.6 (`strict`, `noUncheckedIndexedAccess`,
`erasableSyntaxOnly`, imports relativos con extensión `.ts`).

## Scripts raíz (PLAN §12.1)

| Script | Qué hace |
|---|---|
| `pnpm lint` / `lint:fix` / `format` | Biome (TS, TSX, JSON, CSS, `.astro`) |
| `pnpm typecheck` · `test` · `test:int` · `build` | Turborepo sobre todo el workspace (`test:int` = `*.int.test.ts` con Testcontainers) |
| `pnpm verify` | Puerta de la *Definition of Done*: lint, `check:forbidden`, registros generados al día, mapa de propiedad al día, `check:ownership`, `i18n:check` y typecheck + test + build de lo afectado frente a `main` (`--all` para todo) |
| `pnpm ci:local` | Las mismas etapas que `.github/workflows/ci.yml` (`--quick` omite e2e, LHCI e imágenes) |
| `pnpm check:forbidden` | Falla ante referencias legacy eliminadas (host de ficheros legacy, variables de entorno retiradas, sufijo de vista previa) o cualquier cosa con pinta de secreto |
| `pnpm check:ownership [WP-ID]` | Falla si la rama toca rutas que no son del WP (el id se deduce de la rama `wp/WP-XX`) |
| `pnpm gen` | Regenera los ficheros generados (`*.gen.ts`, `.generated/`); nunca se editan a mano |
| `pnpm gen:ownership` | Regenera `tooling/scripts/ownership.json` desde PLAN §12.3 |
| `pnpm infra:up` / `infra:down` / `infra:reset` / `infra:status` | Infraestructura local (proyecto Compose `sotfv2`) |
| `pnpm dev` | Apps en modo desarrollo (web 47321, api 47301, worker 47302) |
| `pnpm db:*`, `pnpm admin:grant` | Migraciones, guarda, seed, backfills e invariantes (WP-10 y WP-14) |
| `pnpm i18n:check` / `i18n:pseudo` | Catálogo completo en los 13 locales (WP-13) |
| `pnpm e2e` · `contract:legacy` · `lhci` · `load` | Verificación extendida (WP-91, WP-24, WP-92) |

Las tareas que implementa un WP posterior se delegan en el script homónimo de su paquete
(`tooling/scripts/delegate.ts`); mientras no exista, fallan indicando qué WP lo entrega.

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
