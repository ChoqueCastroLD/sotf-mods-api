# Entorno local

PLAN §11.2 y §6.12. El arranque rápido está en el [README](../../README.md#arranque-rápido); aquí
está el detalle.

## 1. Requisitos

- **Node.js 24.17** (`.nvmrc`). Con nvm/fnm: `nvm use`.
- **pnpm 12.6** vía corepack: `corepack enable pnpm` (la versión la fija `packageManager`).
- **Docker** con Compose v2 (infraestructura local, `pg_dump` del seed y tests de integración con
  Testcontainers).
- Linux o macOS. En Windows, WSL2.

## 2. Paso a paso

```bash
pnpm install                # 1. dependencias (versiones exactas del catálogo)
pnpm env:init               # 2. .env con secretos locales aleatorios (ver §3)
pnpm infra:up               # 3. postgres, S3 (SeaweedFS) y Mailpit, healthy
pnpm db:seed:dev --small    # 4. base de desarrollo migrada y con datos (~15 s)
pnpm dev                    # 5. web 47321, api 47301, worker 47302
```

Abre `http://127.0.0.1:47321`.

## 3. El fichero `.env`

- El paso 2 (`pnpm env:init`) copia `.env.example` a `.env` y genera `APP_SECRET` e
  `INTERNAL_SECRET` (≥ 32 caracteres; la api y el worker no arrancan sin ellos). Equivale a
  `cp .env.example .env` y rellenar ambos con `openssl rand -base64 48`. Si ya tienes un `.env`,
  solo rellena esos dos secretos cuando están vacíos; `pnpm env:init --force` lo regenera.
- Lo cargan la api, el worker y los scripts `db:*` (`process.loadEnvFile`, sin sobrescribir
  variables ya definidas; nunca con `NODE_ENV=production`; `SOTF_NO_DOTENV=1` lo desactiva).
- Los valores de `.env.example` apuntan a la infraestructura local; las credenciales locales son
  desechables. Turnstile usa las claves de prueba oficiales («siempre pasa»).
- `.env` está ignorado por git y `pnpm check:forbidden` falla si se versiona.
- La web valida su entorno con valores por defecto de desarrollo (no necesita `.env`).

## 4. Infraestructura (`ops/compose/dev.yml`, proyecto `sotfv2`)

| Servicio | Dirección | Credenciales |
|---|---|---|
| PostgreSQL 16 | `127.0.0.1:47432` | `postgres://sotf:sotf@127.0.0.1:47432/sotf` |
| SeaweedFS (API S3, emula R2) | `http://127.0.0.1:47333` | `sotf-dev-access-key` / `sotf-dev-secret-key`; buckets `sotf-mods` (lectura anónima) y `sotf-mods-private` |
| Mailpit | SMTP `127.0.0.1:47025`, UI `http://127.0.0.1:47080` | ninguna |

- `pnpm infra:status` · `pnpm infra:down` (conserva volúmenes) · `pnpm infra:reset` (los borra).
- Todo escucha solo en `127.0.0.1`. **No uses** los puertos 80, 443, 3000, 3199, 3310, 4007, 5455,
  6001, 6002, 6767, 8000, 8080, 13000–13004 ni 55432 (otros proyectos del host) y no pares
  contenedores ajenos.

## 5. Datos de desarrollo

`pnpm db:seed:dev` construye la base como en producción: baseline legacy → filas legacy
(snapshot del API público del 2026-09-29 + datos sintéticos deterministas con las rarezas
conocidas) → migraciones → backfills B1–B14 → verificación → `tooling/migration/out/dev-seed.dump`.

| Opción | Efecto |
|---|---|
| `--small` | 10 000 descargas en lugar de ~2 M (segundos en vez de minutos) |
| `--reset` | Borra y recrea la base antes (igual que `pnpm db:reset:dev`) |
| `--no-dump` | No genera el dump |
| `--no-pgboss` | No instala el esquema de pg-boss |

- La base debe estar vacía: para repetir, `pnpm db:seed:dev --small --reset`.
- **Cuentas**: todas tienen la contraseña `sotf-dev-2026!` y el email `<slug>@example.test`. Los
  usuarios `isTrusted` del snapshot son moderadores (B7).
- **Admin local**: regístrate en `/register` (el email de verificación llega a Mailpit) o usa una
  cuenta del seed, y después `pnpm admin:grant --email <email> --role admin`.
- Detalle del dataset y de los backfills: [`tooling/migration/README.md`](../../tooling/migration/README.md).

## 6. Scripts habituales

| Script | Qué hace |
|---|---|
| `pnpm dev` | Las tres apps en modo desarrollo (Turborepo; recarga al guardar) |
| `pnpm --filter @sotf/web dev` | Solo una app |
| `pnpm gen` | Regenera los ficheros generados (`*.gen.ts`, `.generated/`, árbol de rutas); **nunca** se editan a mano |
| `pnpm lint` / `pnpm lint:fix` | Biome |
| `pnpm typecheck` · `pnpm build` | Turborepo sobre el workspace |
| `pnpm verify` | La puerta de la *Definition of Done* (ver [contributing.md](contributing.md)) |
| `pnpm db:migrate` · `pnpm db:guard` | Migraciones y guarda de superconjunto sobre la base local |
| `pnpm db:invariants` · `pnpm db:verify-snapshot` | Verificaciones de datos |
| `pnpm i18n:check` | Catálogo completo en los 13 idiomas |

La tabla completa de scripts raíz está en el [README](../../README.md#scripts-raíz).

## 7. Problemas frecuentes

| Síntoma | Causa y arreglo |
|---|---|
| `invalid environment for @sotf/api: APP_SECRET …` | Falta `.env` o los secretos están vacíos (§3) |
| La landing carga pero sus secciones muestran «no se pudo cargar» | La api no está en `127.0.0.1:47301` (la web la llama por `INTERNAL_API_URL`). Comprueba `curl 127.0.0.1:47301/healthz`; el script `dev` de la api fija `PORT=47301` salvo que exportes otro `PORT` |
| `EADDRINUSE` al arrancar | Otro proceso usa el puerto: `ss -ltnp \| grep 4732` y páralo si es tuyo |
| `db:seed:dev` se niega: la base no está vacía | `pnpm db:seed:dev --small --reset` |
| `db:migrate` aborta con drift de la guarda | La base local tiene cambios a mano: `pnpm db:reset:dev` y vuelve a sembrar |
| Errores de tipos en ficheros `*.gen.ts` o rutas de la consola | `pnpm gen` |
| `pnpm install` rechaza una versión «demasiado nueva» | `minimumReleaseAge` (24 h) de `pnpm-workspace.yaml`: espera o fija otra versión (ADR-0002) |
| Los emails no llegan | Míralos en Mailpit (`http://127.0.0.1:47080`); el worker debe estar en marcha |
| Subidas a S3 fallan en el navegador | El presign apunta a `R2_ENDPOINT` (`127.0.0.1:47333`); comprueba `pnpm infra:status` |
