# Rotación de secretos

PLAN §9.4. Los secretos solo viven en Coolify (variables de cada app, marcadas como secretas) y en
los entornos de GitHub. Nunca en el repositorio, en logs ni en documentos; `pnpm check:forbidden`
rechaza patrones de claves conocidos en CI.

Generación de secretos propios: `openssl rand -base64 48` (las apps rechazan < 32 caracteres).
Staging y producción usan valores **distintos**.

## 1. Inventario

| Secreto | Dónde se usa | Quién lo emite |
|---|---|---|
| `APP_SECRET` | api, worker (mismo valor) | Propio |
| `INTERNAL_SECRET` | web, api, worker (mismo valor por entorno) | Propio |
| `DATABASE_URL` (rol `sotf_v2_app`) | api, worker | `ops/sql/roles.sql` |
| `MIGRATIONS_DATABASE_URL` (*owner*) | `sotf-v2-migrate`, `sotf-v2-tools` | Coolify (`sotf-mods-db`) |
| Contraseña de `sotf_legacy_app` | apps legacy (desde B2) | `ops/sql/roles.sql` |
| `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` | api, worker, tools | Cloudflare R2 |
| `CF_API_TOKEN` (solo *Cache Purge*) | worker (la web pide la purga tras desplegar a la api, que la encola) | Cloudflare |
| `TURNSTILE_SECRET_KEY` | api | Cloudflare Turnstile |
| `RESEND_API_KEY` | worker | Resend |
| `OPENAI_API_KEY` | api, worker | OpenAI |
| `VIRUSTOTAL_API_KEY` | worker | VirusTotal |
| `INDEXNOW_KEY` | web, worker | Propio (público por diseño: se sirve como `/<clave>.txt`) |
| `SENTRY_DSN`, `PUBLIC_SENTRY_DSN_CONSOLE` | todas (opcional) | Sentry (semipúblicos) |
| `COOLIFY_TOKEN` (permiso `deploy`) | GitHub → entornos `staging`/`production` | Coolify |
| Token de la API de Coolify para diagnósticos | tu máquina | Coolify |
| Token classic `read:packages` de GHCR | servidor de Coolify (`docker login ghcr.io`) | GitHub |

## 2. Calendario

| Secreto | Cuándo | Motivo |
|---|---|---|
| Token de la API de Coolify | **Ya** | Se compartió en un chat. Revocarlo y crear uno nuevo de solo lectura para diagnósticos |
| Contraseña de *owner* de la base | T+1 (con la legacy parada) | Compartida en el pasado |
| Claves R2 | T+1 | Token nuevo acotado a `sotf-mods`, `sotf-mods-private` y `sotf-mods-staging` |
| `RESEND_API_KEY`, clave de OpenAI heredada de la legacy (→ `OPENAI_API_KEY`) | T+1 | Compartidas en el pasado |
| Secreto de firma de tokens de la legacy | T+30 | Se elimina con la ventana de marcha atrás (la v2 no lo usa) |
| `APP_SECRET`, `INTERNAL_SECRET` | Al crear cada entorno | Nuevos, uno por entorno |
| Token GHCR `read:packages` | Antes de caducar (1 año) | Caducidad |
| Cualquier secreto | Inmediatamente si aparece en un log, un chat, un ticket o un commit | Exposición |

## 3. Procedimientos

Regla general: **crear el nuevo → ponerlo en Coolify → redesplegar → comprobar → revocar el
viejo.** Nunca al revés. Tras cambiar variables, redespliega con *Redeploy* (Coolify hace
*rolling update*); `ops/runbooks/deploy/smoke.sh production` al final.

### 3.1 `INTERNAL_SECRET`

Lo comparten web, api y worker; durante el *rolling update* conviven contenedores con el valor
viejo y el nuevo, y las llamadas internas entre ellos (resolución de descargas web → api,
invalidación de caché worker → web) pueden fallar unos segundos.

1. Genera el valor nuevo.
2. Cámbialo en `sotf-v2-api`, `sotf-v2-worker` y `sotf-v2-web` del mismo entorno.
3. Redespliega **api**, luego **web**, luego **worker**, seguidos, en horas valle.
4. Comprueba un HEAD de descarga (`smoke.sh` lo hace) y que no haya 401 en `/internal/*` en los logs.

### 3.2 `APP_SECRET`

Las sesiones **no** dependen de él (se guardan como hash SHA-256 del token), así que nadie pierde
la sesión. Sí deriva de él:

- el `ipHash` de descargas y límites: ese día, una misma IP puede contar una descarga única más;
- el `chatHash` de KelvinSeek: se pierde la continuidad del historial por chat;
- los enlaces de baja de emails ya enviados: dejan de ser válidos (responden «no encontrado»; el
  usuario puede darse de baja desde los ajustes de notificaciones).

Pasos: genera, cámbialo en api y worker a la vez y redespliega ambos. Rótalo solo si se expone.

### 3.3 Contraseñas de la base

- **`sotf_v2_app`**: vuelve a ejecutar `ops/sql/roles.sql` con `-v v2_password=<nueva>` (idempotente),
  actualiza `DATABASE_URL` en api y worker y redespliega. Las conexiones abiertas siguen vivas
  hasta que el contenedor viejo se para.
- **`sotf_legacy_app`**: igual con `-v legacy_password=<nueva>` y el `DATABASE_URL` de las apps
  legacy (solo si siguen en uso).
- **Owner** (T+1): Coolify → `sotf-mods-db` → cambia la contraseña; actualiza
  `MIGRATIONS_DATABASE_URL` en `sotf-v2-migrate` y `sotf-v2-tools`. Ninguna app en marcha usa el
  owner, así que no hay corte.
- Si la base registra sentencias (`log_statement`), `CREATE/ALTER ROLE … PASSWORD` aparece en el
  log del servidor: vuelve a rotar después de desactivarlo.

### 3.4 Claves R2

1. Cloudflare → R2 → *Manage API tokens* → nuevo token *Object Read & Write* acotado a
   `sotf-mods`, `sotf-mods-private` y `sotf-mods-staging`.
2. Actualiza `R2_ACCESS_KEY_ID`/`R2_SECRET_ACCESS_KEY` en api, worker y tools (y en las apps
   legacy mientras existan) y redespliega.
3. Prueba una subida en staging (Basecamp → nueva versión) y un HEAD de descarga.
4. Revoca el token antiguo.

### 3.5 Proveedores (Resend, OpenAI, VirusTotal, Turnstile, Cloudflare)

Crea la clave nueva en el panel del proveedor, cámbiala en las apps de la tabla del §1,
redespliega, comprueba (un email en Mailpit/allowlist en staging o en producción, una consulta a
KelvinSeek, o la purga que sigue a un despliegue en los logs del worker, cola `cdn.purge`) y revoca la vieja. `CF_API_TOKEN` debe
tener solo *Zone → Cache Purge* sobre `sotf-mods.com`.

### 3.6 Tokens de despliegue

- `COOLIFY_TOKEN`: Coolify → *Keys & Tokens* → nuevo token con permiso `deploy` → GitHub →
  *Settings → Environments* → `staging` y `production` → secreto `COOLIFY_TOKEN` → revoca el
  viejo. Comprueba con *Actions → release → Run workflow*.
- GHCR: nuevo token classic `read:packages` → `docker login ghcr.io -u ChoqueCastroLD` en el
  servidor de Coolify → revoca el viejo.

## 4. Si un secreto se filtra

1. Rótalo según el §3 **de inmediato**, aunque sea fuera de horas valle.
2. Si estaba en un commit: rotar es suficiente (reescribir la historia no revoca nada); añade el
   patrón a `tooling/scripts/forbidden-rules.ts` si no lo detectaba.
3. Revisa los logs del proveedor (uso de la clave) y de Coolify en la ventana de exposición.
