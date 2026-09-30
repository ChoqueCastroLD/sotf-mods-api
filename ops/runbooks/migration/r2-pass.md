# Runbook · Pasada R2 (B15), correcciones por manifest (B4M, B8), metadatos R2 (B17) y sugerencias de categoría

Para el dueño del sitio. Todo lo de aquí es **idempotente** (se puede repetir sin efecto) y
**por defecto es un ensayo** (`dry run`): no se escribe nada hasta añadir `--apply`. Referencias:
PLAN §6.9 (B8, B15, B17), §2.8 y §14; research/02 §3.2 y §4.1; detalles técnicos en
[`tooling/migration/backfills-r2/README.md`](../../../tooling/migration/backfills-r2/README.md).

> Recordatorio §14.5: no hay backup. Por eso cada paso solo escribe columnas o claves nuevas, o
> guarda el valor anterior (`DataFixAudit` para B8/B4M y los manifiestos «before» para B17), y
> tiene su marcha atrás documentada al final.

## 0. Qué hace cada paso

| Paso | Qué cambia | ¿Toca algo legacy? | Dónde corre |
|---|---|---|---|
| **B15** | Por cada versión: tamaño, SHA-256, manifest, inspección (`VersionInspection`), versión de juego/loader y plataforma declaradas, `logColor` del mod; `buildMeta` y miniatura de las builds; variantes AVIF/WebP de todas las imágenes legacy; imágenes OG de todas las entidades | **No**. Los objetos originales solo se leen; se crean claves nuevas `media/…` y `og/…` | Worker (job `backfill.run`) |
| **B4M** | Mods con `type` NULL (o puesto a `Mod` por B4) cuyo manifest dice `Library` → `Library` | **Sí**, `Mod.type`, auditado (`B4M`) | Tooling |
| **B8** | Restaura `Mod.shortDescription` desde el manifest solo si el sanitizador legacy explica exactamente la pérdida (≈ 3 mods: `mojaosada`, `stashvehicles`, `removemaxobjectcap`) | **Sí**, `Mod.shortDescription`, auditado (`B8`) | Tooling |
| **B17** | `Content-Type` (`application/zip`, `application/json`; imágenes por *sniffing*) y `Content-Disposition: attachment; filename="<Nombre> <versión>.zip"` de los objetos legacy en R2 | Metadatos de objetos R2 (los bytes y el ETag no cambian). **Necesita tu aprobación** | Tooling (tu máquina) |
| Sugerencias | CSV con la categoría nueva sugerida para cada mod (reglas + LLM opcional) | No escribe nada | Tooling |

Orden: B1–B14 (`pnpm db:backfill --all`) → **B15** → **B4M + B8** → **B17** (cuando lo apruebes) →
sugerencias → importar el CSV en Ranger Station.

## 1. Ensayo local (obligatorio antes de producción)

Con el entorno local (`pnpm infra:up`: PostgreSQL en 47432 y SeaweedFS en 47333) y el `.env` de
`.env.example`:

```bash
pnpm infra:up
pnpm db:seed:dev --small                                   # seed + B1–B14
pnpm --filter @sotf/migration-tools r2:sample --dry-run    # ver qué 20 objetos se copiarían
pnpm --filter @sotf/migration-tools r2:sample              # GET de solo lectura de r2.sotf-mods.com → SeaweedFS local
pnpm --filter @sotf/worker dev                             # en otra terminal: el worker
pnpm --filter @sotf/api backfill B15 --wait                # ensayo: solo HEAD y conteos
pnpm --filter @sotf/api backfill B15 --apply --wait        # pasada real (local)
pnpm --filter @sotf/api backfill B15 --apply --wait        # 2.ª vez: debe dar 0 inspecciones nuevas
pnpm --filter @sotf/migration-tools r2:manifest-fixes      # ensayo B4M + B8
pnpm --filter @sotf/migration-tools r2:manifest-fixes --apply
pnpm --filter @sotf/migration-tools r2:b17                 # ensayo: manifiesto «before» en tooling/migration/out/
pnpm --filter @sotf/migration-tools r2:b17 --apply         # reescribe metadatos en SeaweedFS
pnpm --filter @sotf/migration-tools r2:b17                 # 2.ª vez: todo «already correct», 0 «to update»
```

Qué comprobar en el ensayo:

- En el resumen de B15 (`MigrationRun` `backfill:B15`), `versions.errors` vacío y
  `missingObjects` = las versiones cuyo objeto no se copió (en local es normal: solo hay ≈ 20).
- `tooling/migration/out/r2-metadata-after-*.json`: todas las entradas `updated` con
  `etagIntact: true` y `headersApplied: true`; el comando termina con «ETags intact».
- `curl -sI "http://127.0.0.1:47333/sotf-mods/<clave codificada>"` muestra el
  `Content-Disposition` nuevo (con `filename*=UTF-8''…`) en las claves con espacio, apóstrofo y
  paréntesis.

## 2. Producción

### 2.1 Requisitos

- La migración aditiva y B1–B14 ya aplicadas (§6.13).
- El worker v2 desplegado con las variables `R2_*` (token de lectura y escritura acotado a
  `sotf-mods`, `sotf-mods-private` y `sotf-mods-staging`, §11.6).
- Para los comandos de tooling (B4M, B8, B17, sugerencias): tu máquina con el repo, `pnpm install`,
  y un túnel a la base de datos de producción (p. ej. `ssh -L 55432:<host-db>:5432 …`) con
  `MIGRATIONS_DATABASE_URL=postgres://…@127.0.0.1:55432/<db>`. B17 y las sugerencias solo **leen**
  la BD (la conexión se abre en modo *read-only*).

### 2.2 B15 (sin aprobación: no toca nada legacy)

En Coolify, terminal de la app **api** (o una tarea programada de una vez):

```bash
node dist/backfill.js B15 --wait            # ensayo: HEAD de los ≈ 612 ficheros y conteos
node dist/backfill.js B15 --apply --wait    # pasada real (≈ 1,4 GB leídos en streaming; 20–40 min)
```

- Si el job se corta (reinicio, expiración de 6 h), vuelve a lanzarlo: continúa donde se quedó.
- Revisa el resultado (`output` del job o la fila `MigrationRun` `backfill:B15`):
  `versions.inspected`, `versions.failed` (inspecciones fallidas: quedan para moderación, las
  versiones legacy aprobadas siguen `passed`), `versions.missingObjects` (debería estar vacío salvo
  la versión ya marcada `file_missing`), `media.failed/missing` y `og.enqueued`.
- Las imágenes OG las renderiza después el job `og.render` en segundo plano.

### 2.3 B4M y B8 (auditados)

```bash
pnpm --filter @sotf/migration-tools r2:manifest-fixes --confirm <db>            # ensayo (muestra cada cambio)
pnpm --filter @sotf/migration-tools r2:manifest-fixes --apply --confirm <db>
```

El ensayo lista cada mod que cambiaría (`B8 mod N: "antes" → "después"`, `B4M mod N: NULL → Library`).
Revísalo antes de `--apply`.

### 2.4 B17 (necesita tu aprobación)

```bash
export R2_ACCOUNT_ID=… R2_ACCESS_KEY_ID=… R2_SECRET_ACCESS_KEY=… R2_BUCKET=sotf-mods
pnpm --filter @sotf/migration-tools r2:b17                                    # ensayo: solo HEAD → out/r2-metadata-before-<fecha>.json
```

1. Revisa el manifiesto «before»: `update` = objetos que cambiarán (con `desired`), `ok` = ya
   correctos, `missing` = no existen (debería ser 0), `skipped` = multipart o imagen no reconocida.
2. **Guarda ese fichero** fuera del repo: es la marcha atrás.
3. Prueba primero con pocos objetos y luego todo:

```bash
pnpm --filter @sotf/migration-tools r2:b17 --apply --confirm-bucket sotf-mods --limit 5
pnpm --filter @sotf/migration-tools r2:b17 --apply --confirm-bucket sotf-mods
```

4. El comando termina con código 0 solo si todos los ETag siguen iguales y las cabeceras quedaron
   bien (`out/r2-metadata-after-<fecha>.json`). Comprueba un par con
   `curl -sI "https://r2.sotf-mods.com/<clave codificada>"` (HEAD de un objeto de R2, no de la
   ruta de descarga del sitio, así que no cuenta descargas). Si Cloudflare tenía esos objetos en
   caché, verás los metadatos nuevos cuando caduque o tras purgar esas URLs.
5. Opcional: `--cache-control immutable` añade `Cache-Control: public, max-age=31536000, immutable`
   a los objetos reescritos (las claves legacy nunca cambian de contenido).

### 2.5 Sugerencias de categoría

```bash
pnpm --filter @sotf/migration-tools r2:suggest-categories                     # solo reglas
OPENAI_API_KEY=… pnpm --filter @sotf/migration-tools r2:suggest-categories --llm --max-llm-calls 150
```

Genera `tooling/migration/out/category-suggestions-<fecha>.csv`. Ábrelo, corrige lo que quieras y
súbelo en **Ranger Station → Admin → Recategorize** (importar CSV). Nada cambia hasta que confirmes
allí. Coste orientativo con `gpt-4o-mini`: céntimos para ≈ 230 mods.

## 3. Marcha atrás

- **B15**: no hace falta; solo añadió datos nuevos. Si se quisiera repetir una versión:
  `DELETE FROM "VersionInspection" WHERE "modVersionId" = <id>;` y relanzar B15.
- **B8 / B4M**: `pnpm db:revert-fix B8 --confirm <db>` y `pnpm db:revert-fix B4M --confirm <db>`
  (fila a fila; si alguien editó el campo después, esa fila se informa como conflicto y no se toca).
  Si también hay que deshacer B4, primero B4M y después B4.
- **B17**: con el manifiesto «before» guardado:

```bash
pnpm --filter @sotf/migration-tools r2:b17 --revert out/r2-metadata-before-<fecha>.json                        # ensayo
pnpm --filter @sotf/migration-tools r2:b17 --revert out/r2-metadata-before-<fecha>.json --apply --confirm-bucket sotf-mods
```

## 4. Qué no hace nada de esto

- No renombra ni borra ninguna clave legacy de R2, ni sube bytes nuevos a claves existentes.
- No rechaza, oculta ni borra mods sin aprobar (§14.1): B15 solo pone su `checksStatus`.
- No envía notificaciones.
