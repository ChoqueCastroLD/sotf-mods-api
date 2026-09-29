# Hotfix legacy (WP-02)

Serie de parches para la aplicación legacy que está hoy en producción (`sotf-mods-api` y `sotf-mods-frontend`). Arregla ya lo peor sin esperar a la v2:

- las descargas pasan a ser un **302 directo a R2** (ningún servidor vuelve a cargar ficheros en memoria);
- desaparece toda referencia al servidor de ficheros retirado `files.sotf-mods.com`;
- se cierra el **XSS almacenado** (markdown, changelogs y comentarios).

Los parches **no se han aplicado ni empujado** a ningún repositorio. Aplicarlos, empujarlos y desplegarlos es decisión tuya (ver [cómo aplicarlos](#cómo-aplicarlos)).

| Repositorio | Base | Parches |
|---|---|---|
| `sotf-mods-api` | `e0606b6` | [`patches/api/`](patches/api/) (3) |
| `sotf-mods-frontend` | `e8ba2dc` | [`patches/frontend/`](patches/frontend/) (3) |

## Qué cambia

### API (`sotf-mods-api`)

1. **`fix(downloads)`**: `GET /api/mods/:mod_id/download/:version` y `GET /api/mods/slug/:userSlug/:mod_slug/download/:version`
   - Ya no hacen `fetch` + `blob` del fichero. Registran la descarga y responden **`302 Found`** con `Location: <R2_PUBLIC_BASE_URL>/<clave>`, donde cada segmento de la clave va codificado con `encodeURIComponent` (espacio → `%20`, nunca `+`). Ejemplo real: `https://r2.sotf-mods.com/1766549349465_Regi's%20Modding%20Library.zip`.
   - Cabeceras: `Cache-Control: no-store, private`, `X-Robots-Tag: noindex, nofollow`, `Referrer-Policy: no-referrer`.
   - La fila `ModDownload` guarda la **IP real** (`?ip=` del frontend → `CF-Connecting-IP` → primer salto de `X-Forwarded-For`; solo IPs válidas) y el user agent (`?agent=` → cabecera). Nunca vuelve a guardar el texto `"undefined"`: si no se conoce, queda vacío. `Mod.downloads` sube en la misma transacción.
   - Solo cuentan los `GET`. `HEAD` y las peticiones `Range` que reanudan a partir de un byte distinto de 0 reciben el 302, pero no cuentan. Si falla la escritura en la BD, la descarga **no** se bloquea.
   - Versión inexistente → **404** con el sobre legacy de siempre (`{"status":false,"error":"NOT_FOUND",…}`).
   - Versión cuya URL guardada no está en el dominio de R2 (la única es CompanionWardrobe 0.0.3, en `files.sotf-mods.com`) → **410 Gone** (`{"status":false,"error":"GONE",…}`).
2. **`refactor(config)`**: las URLs de ficheros nuevos se construyen con `R2_PUBLIC_BASE_URL` (si no existe, se sigue leyendo `FILE_DOWNLOAD_ENDPOINT`, así que el despliegue no exige tocar variables). El formato guardado en la BD no cambia. `.env.example` y el README dejan de listar las variables que ningún código lee y documentan las que sí se leen.
3. **`fix(moderation)`**: `GET /api/mods/:mod_id/unapprove` responde `"Mod unapproved."` (antes decía `"Mod approved."`).

### Frontend (`sotf-mods-frontend`)

1. **`fix(downloads)`**: `/mods/:user/:slug/download/:version` llama al API con `redirect: "manual"` (por `API_URL` si existe; si no, por `PUBLIC_API_URL`) y **reenvía el 302 tal cual**. Codifica los segmentos (slugs con apóstrofo), envía la IP real (`CF-Connecting-IP` o primer `X-Forwarded-For`) y el user agent, reenvía `HEAD` como `HEAD` y mantiene el código real de los errores (404/410) en lugar de un 200 con JSON que RedManager guardaba como `.zip`.
2. **`fix(assets)`**:
   - El `og:image` y el `twitter:image` por defecto pasan a `https://sotf-mods.com/static/images/hd_thumbnail.png` (2560×1440, lo sirve la propia app).
   - El placeholder de `upload-build.js` pasa a `/static/images/thumbnail.png`.
   - `lazyLoadImages` ya no pide `<url>/preview` (ruta del servidor retirado que da 404 en R2) ni vuelve a descargar cada imagen como blob: asigna la URL de R2 con `loading="lazy"`.
3. **`fix(security)`**:
   - `markdownToHTML()` devuelve HTML saneado con **DOMPurify** (ya lo carga el layout). Además quita `<style>`, controles de formulario y atributos `style`. Todos los `innerHTML` de markdown (descripciones de mods y builds, vistas previas de subida y edición) pasan por ahí. Si DOMPurify no carga, falla cerrado: muestra el markdown como texto escapado.
   - El changelog de los builds usa `| escape` en lugar de `| safe`.
   - Los comentarios se construyen con nodos DOM (`static/scripts/comments.js`): mensaje, nombres y URLs van por `textContent` o por atributos validados (solo `http(s)`), nunca concatenados en HTML, y sin `onclick` en línea.

## Cómo aplicarlos

> Hay ficheros legacy con finales de línea CRLF. **Usa siempre `git am --keep-cr`**: sin esa opción, `git am` quita los `\r` y los parches no aplican.

```bash
# API
cd /ruta/a/sotf-mods-api
git switch main && git pull            # debe estar en e0606b6 (o contenerlo sin cambios en esos ficheros)
git switch -c hotfix/legacy-downloads-xss
git am --keep-cr /root/sotf-mods/sotf-mods-v2/ops/legacy-hotfix/patches/api/*.patch

# Frontend
cd /ruta/a/sotf-mods-frontend
git switch main && git pull            # debe estar en e8ba2dc
git switch -c hotfix/legacy-downloads-xss
git am --keep-cr /root/sotf-mods/sotf-mods-v2/ops/legacy-hotfix/patches/frontend/*.patch
```

Si `git am` se detiene: `git am --abort` deja el repositorio como estaba.

Antes de desplegar puedes repetir la verificación local completa (ver [Verificación local](#verificación-local)).

## Despliegue en Coolify (lo haces tú)

**Orden: primero el API y después el frontend.**

- Con el API nuevo y el frontend viejo, todo sigue funcionando: el proxy viejo sigue el 302 y descarga desde R2, y la cuenta la hace el API.
- Con el frontend nuevo y el API viejo, también: el proxy reenvía en streaming la respuesta 200 del API viejo. Aun así, es mejor seguir el orden.

1. Empuja la rama del API a GitHub, fusiónala en la rama que despliega Coolify y despliega la app del API.
2. En las variables de entorno del API:
   - **Añade** `R2_PUBLIC_BASE_URL=https://r2.sotf-mods.com`. Es opcional si `FILE_DOWNLOAD_ENDPOINT` ya vale eso.
   - **Borra** las 5 variables sobrantes, que ningún código lee: `FILE_UPLOAD_ENDPOINT`, `FILE_UPLOAD_TOKEN`, `FILE_PREVIEW_ENDPOINT`, `KELVINGPT_API` y `KELVINGPT_API_AUTHORITY`.
   - Cuando exista `R2_PUBLIC_BASE_URL`, también puedes borrar `FILE_DOWNLOAD_ENDPOINT`.
   - **No borres** `JWT_SECRET`: el legacy sigue firmando tokens con ella. `GPT_API_KEY`, `R2_*`, `RESEND_API_KEY`, `EMAIL_FROM`, `BASE_URL` y `DATABASE_URL` tampoco se tocan.
3. Empuja y despliega el frontend. Variable opcional: `API_URL` = URL interna del API en la red de Coolify (evita la vuelta por Cloudflare en cada descarga). Si no la pones, se usa `PUBLIC_API_URL`, como hasta ahora.
4. Opcional en Cloudflare: una regla *Cache Bypass* para `sotf-mods.com/mods/*/download/*`. La respuesta ya lleva `no-store`, así que no es imprescindible.

## Verificación tras el despliegue

`curl -I` envía `HEAD`, que **no cuenta** como descarga:

```bash
# 1) API: 302 con la clave codificada y no-store
curl -sI "https://api.sotf-mods.com/api/mods/Regi_s_Modding_Library/download/1.0.0" \
  | grep -iE '^(HTTP|location|cache-control)'
#   HTTP/2 302
#   location: https://r2.sotf-mods.com/1766549349465_Regi's%20Modding%20Library.zip
#   cache-control: no-store, private

# 2) Frontend (la ruta que usa RedManager): el mismo 302
curl -sI "https://sotf-mods.com/mods/regitoxic/regi%27s-modding-library/download/1.0.0" \
  | grep -iE '^(HTTP|location|cache-control)'

# 3) El destino existe en R2
curl -sI "https://r2.sotf-mods.com/1766549349465_Regi's%20Modding%20Library.zip" | head -1   # HTTP/2 200

# 4) Versión inexistente → 404 real; fichero en el host retirado → 410
curl -s -o /dev/null -w '%{http_code}\n' -I "https://sotf-mods.com/mods/regitoxic/regi%27s-modding-library/download/9.9.9"   # 404
curl -s -o /dev/null -w '%{http_code}\n' -I "https://api.sotf-mods.com/api/mods/CompanionWardrobe/download/0.0.3"          # 410

# 5) Ya no queda ninguna referencia al host retirado en el HTML
curl -s https://sotf-mods.com/mods | grep -c 'files.sotf-mods.com'   # 0
```

En la BD (solo lectura), las descargas nuevas guardan una IP real:

```sql
SELECT ip, "userAgent", "createdAt" FROM "ModDownload" ORDER BY id DESC LIMIT 5;
```

Comprobación manual del XSS: abre la página de un mod y confirma que la descripción, el historial de versiones y los comentarios se ven igual que antes.

## Marcha atrás

Cada parche es un commit independiente:

```bash
git revert --no-edit <sha>                  # un parche concreto
git revert --no-edit <sha-primero>^..HEAD   # toda la serie (en cada repo)
```

Después se empuja y se vuelve a desplegar en Coolify. También puedes redesplegar el commit anterior desde el historial de despliegues de Coolify. Las variables borradas no hacen falta para volver atrás, salvo `FILE_DOWNLOAD_ENDPOINT`: si la borraste, vuelve a crearla con `https://r2.sotf-mods.com` antes de redesplegar el código antiguo.

La serie no toca el esquema de la BD ni los datos (solo inserta filas `ModDownload` e incrementa `Mod.downloads`, igual que antes).

## Verificación local

```bash
ops/legacy-hotfix/verify.sh          # KEEP_WORKDIR=1 conserva el directorio temporal; VERIFY_R2_HEAD=1 añade un HEAD a R2
```

El script:

1. Clona los repos legacy en `/tmp/sotf-legacy-hotfix/verify.*` (los originales no se tocan) y aplica los parches con `git am --keep-cr`.
2. Ejecuta `bun build src/index.ts --target=bun` en ambos (bun 1.4 vía `npx`).
3. Hace las comprobaciones estáticas: 0 apariciones de `files.sotf-mods.com`, sin `| safe`, sin `/preview` y sin variables sobrantes.
4. Ejecuta los tests de XSS en jsdom ([`verify/xss`](verify/xss/)) con el mismo DOMPurify 3.0.5 y showdown 2.1.0 que carga el sitio.
5. Levanta un Postgres 16 desechable (proyecto compose `sotfv2-hotfix`, puerto 47440), aplica `prisma@6.19.0 db push`, siembra [`verify/seed.sql`](verify/seed.sql) (claves reales con espacios, apóstrofo y `+`) y arranca el API (47441) y el frontend (47442). Después comprueba:
   - el 302 y su `Location` exacto;
   - la fila `ModDownload` con la IP real (por `?ip=`, `CF-Connecting-IP` y `X-Forwarded-For`);
   - el 302 a través del frontend;
   - que `HEAD` y `Range` no cuentan;
   - el 404 y el 410;
   - el mensaje de `unapprove`;
   - el changelog escapado;
   - el `og:image` por defecto.
6. Confirma que `sotf-mods-api` y `sotf-mods-frontend` siguen en `e0606b6` y `e8ba2dc` sin cambios.

Al terminar, lo borra todo: procesos, contenedor y directorio temporal.

Necesita `git`, `docker` (compose v2), Node ≥ 24 con `npx`, `curl` y acceso al registro de npm.

## Regenerar los parches

Los parches se generaron con `git format-patch --no-signature <base>..HEAD` desde clones de trabajo en `/tmp/sotf-legacy-hotfix/{api,frontend}`. Para cambiar uno:

1. Aplica la serie en un clon.
2. Modifica el commit.
3. Vuelve a generar los parches.
4. Ejecuta `verify.sh`.

`patches/.gitattributes` marca los `.patch` como binarios para git (`-text`), de modo que los CRLF se conservan byte a byte.
