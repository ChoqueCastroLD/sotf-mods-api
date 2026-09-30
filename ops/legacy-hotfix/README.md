# Hotfix legacy (WP-02)

Serie de parches para la aplicación legacy que está hoy en producción (`sotf-mods-api` y `sotf-mods-frontend`). Arregla ya lo peor sin esperar a la v2:

- las descargas pasan a ser un **302 directo a R2** (ningún servidor vuelve a cargar ficheros en memoria);
- desaparece toda referencia al servidor de ficheros retirado `files.sotf-mods.com`;
- se cierra el **XSS almacenado** en todo lo que pinta contenido de usuarios: markdown, changelogs, comentarios, tarjetas de mod y avisos (el alcance exacto está en [Fuera de alcance](#fuera-de-alcance)).

> **Antes de desplegar el API** hay que crear una regla en Cloudflare para que los builds `.json` se sigan descargando en vez de abrirse en una pestaña. Ver [paso 0 del despliegue](#despliegue-en-coolify-lo-haces-tú).

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
   - Solo cuentan los `GET` sin `Range` o con exactamente `Range: bytes=0-`. `HEAD`, las sondas como `bytes=0-0` y las reanudaciones reciben el 302, pero no cuentan. Si falla la escritura en la BD, la descarga **no** se bloquea.
   - Versión inexistente → **404** con el sobre legacy de siempre (`{"status":false,"error":"NOT_FOUND",…}`).
   - Versión cuya URL guardada no está en el dominio de R2 (la única es CompanionWardrobe 0.0.3, en `files.sotf-mods.com`) → **410 Gone** (`{"status":false,"error":"GONE",…}`).
2. **`refactor(config)`**: las URLs de ficheros nuevos se construyen con `R2_PUBLIC_BASE_URL` (si no existe, se sigue leyendo `FILE_DOWNLOAD_ENDPOINT`, así que el despliegue no exige tocar variables). El formato guardado en la BD no cambia. `.env.example` y el README dejan de listar las variables que ningún código lee y documentan las que sí se leen.
3. **`fix(moderation)`**: `GET /api/mods/:mod_id/unapprove` responde `"Mod unapproved."` (antes decía `"Mod approved."`).

### Lo que el 302 cambia para quien descarga

Antes, el API devolvía el fichero con `Content-Disposition: attachment; filename="<Nombre> <versión>.<ext>"`. Ahora el navegador lo recibe directamente de R2, y **R2 no envía `Content-Disposition`** (comprobado con `HEAD`: el build `MountianHouse` responde `content-type: application/json`, 3,8 MB, sin `content-disposition`). Consecuencias:

| Qué | Antes | Después, sin la regla de Cloudflare | Después, con la regla (paso 0) |
|---|---|---|---|
| Build `.json` (botón *Download* con `target="_blank"`) | se descarga | **se abre como texto en una pestaña nueva** | se descarga |
| Nombre del fichero guardado por el navegador | `Regi's Modding Library 1.0.0.zip` | `1766549349465_Regi's Modding Library.zip` (clave de R2 con prefijo de *timestamp*) | igual que sin la regla |
| RedManager, `curl -L`, clientes HTTP | siguen el 302 | sin cambios | sin cambios |

- La regla del paso 0 (`Content-Disposition: attachment` para `.json` y `.zip` en `r2.sotf-mods.com`) es **obligatoria**: sin ella, los builds dejan de descargarse desde la web.
- El nombre con prefijo es un cambio cosmético que se acepta en el hotfix. Lo corrige la v2 al reescribir los metadatos de los objetos en R2 (`Content-Disposition` con `filename`, paso B17 de la migración, WP-84). Si lo quieres antes, la alternativa es un Cloudflare Snippet o Worker que ponga `filename` a partir de un parámetro `?dl=` (research/01 §6.3); no forma parte de este hotfix.

### Frontend (`sotf-mods-frontend`)

1. **`fix(downloads)`**: `/mods/:user/:slug/download/:version` llama al API con `redirect: "manual"` (por `API_URL` si existe; si no, por `PUBLIC_API_URL`) y **reenvía el 302 tal cual**. Codifica los segmentos (slugs con apóstrofo), envía la IP real (`CF-Connecting-IP` o primer `X-Forwarded-For`) y el user agent (recortado a 512 caracteres, lo que guarda el API, para no provocar un 414/431), reenvía `HEAD` como `HEAD` y mantiene el código real de los errores (404/410) en lugar de un 200 con JSON que RedManager guardaba como `.zip`.
   - Los errores siguen siendo JSON para herramientas (RedManager, `curl`). Si la petición acepta `text/html` (un navegador que sigue un enlace muerto), responde una página HTML mínima con el mismo código (404 o 410), el motivo y un enlace de vuelta a la página del mod.
2. **`fix(assets)`**:
   - El `og:image` y el `twitter:image` por defecto pasan a `https://sotf-mods.com/static/images/hd_thumbnail.png` (2560×1440, lo sirve la propia app).
   - El placeholder de `upload-build.js` pasa a `/static/images/thumbnail.png`.
   - `lazyLoadImages` ya no pide `<url>/preview` (ruta del servidor retirado que da 404 en R2) ni vuelve a descargar cada imagen como blob: asigna la URL de R2 con `loading="lazy"`.
3. **`fix(security)`**:
   - `markdownToHTML()` devuelve HTML saneado con **DOMPurify** (ya lo carga el layout). Además quita `<style>`, controles de formulario y atributos `style`. Todos los `innerHTML` de markdown (descripciones de mods y builds, vistas previas de subida y edición) pasan por ahí. Si DOMPurify no carga, falla cerrado: muestra el markdown como texto escapado.
   - El changelog de los builds usa `| escape` en lugar de `| safe`.
   - Los comentarios se construyen con nodos DOM (`static/scripts/comments.js`): mensaje, nombres y URLs van por `textContent` o por atributos validados (solo `http(s)`), nunca concatenados en HTML, y sin `onclick` en línea.
   - Las **tarjetas de mod** que se pintan en el navegador (`profile.js`, `featured.js` y la vista previa de `upload-build.js`) escapan cada campo (nombre, descripción corta, versión, autor, categoría, URL de imagen y slugs) con `escapeHTML`, que ahora exporta `shared.js`. Era el hueco más grave: el perfil lista también los mods **no aprobados** y la API solo limita la longitud de `shortDescription`, así que cualquier cuenta nueva podía ejecutar script en el navegador de quien abriera su perfil, moderadores incluidos, y leer su `localStorage.token`.
   - `showError`, `showSuccess` y los avisos de `upload.js` muestran el mensaje como texto.

#### Fuera de alcance

Tras la serie, **ningún dato de usuario llega a `innerHTML` sin sanear o escapar** en los scripts del frontend (inventario hecho con `grep` de `innerHTML`, `outerHTML` e `insertAdjacentHTML`). Las plantillas Nunjucks ya escapaban por defecto (`autoescape: true`) y la única excepción (`| safe` del changelog) desaparece. Quedan fuera, y los resuelve la v2:

- El token de sesión sigue en `localStorage` y no hay `Content-Security-Policy`: cualquier XSS futuro seguiría pudiendo leerlo.
- El API sigue guardando el texto de usuario tal cual (se escapa al pintarlo, no al guardarlo).
- Los scripts de terceros que carga el layout (CDN) no se tocan.

## Cómo aplicarlos

> Hay ficheros legacy con finales de línea CRLF. **Usa siempre `git am --keep-cr`**: sin esa opción, `git am` quita los `\r` y los parches no aplican. [`apply.sh`](apply.sh) lo hace por ti.

Con el script (recomendado):

```bash
cd /ruta/a/sotf-mods-api && git switch main && git pull
/root/sotf-mods/sotf-mods-v2/ops/legacy-hotfix/apply.sh api .

cd /ruta/a/sotf-mods-frontend && git switch main && git pull
/root/sotf-mods/sotf-mods-v2/ops/legacy-hotfix/apply.sh frontend .
```

`apply.sh <api|frontend> <repo> [rama]`:

- se niega a seguir si el árbol no está limpio o si la base (`e0606b6` en el API, `e8ba2dc` en el frontend) no está en la historia;
- crea la rama (por defecto `hotfix/legacy-downloads-xss`) y aplica la serie con `git am --keep-cr`;
- si algo falla, aborta el `git am`, vuelve a la rama anterior y borra la rama nueva;
- no empuja nada.

A mano, es lo mismo:

```bash
cd /ruta/a/sotf-mods-api
git switch main && git pull            # debe contener e0606b6 sin cambios en esos ficheros
git switch -c hotfix/legacy-downloads-xss
git am --keep-cr /root/sotf-mods/sotf-mods-v2/ops/legacy-hotfix/patches/api/*.patch
# frontend: igual, con patches/frontend/*.patch (base e8ba2dc)
```

Si `git am` se detiene: `git am --abort` deja el repositorio como estaba.

Antes de desplegar puedes repetir la verificación local completa (ver [Verificación local](#verificación-local)).

## Despliegue en Coolify (lo haces tú)

**Orden: regla de Cloudflare, después el API y por último el frontend.**

- Con el API nuevo y el frontend viejo, todo sigue funcionando: el proxy viejo sigue el 302 y descarga desde R2, y la cuenta la hace el API.
- Con el frontend nuevo y el API viejo, también: el proxy reenvía en streaming la respuesta 200 del API viejo. Aun así, es mejor seguir el orden.

0. **Obligatorio antes del API: regla de Cloudflare para `r2.sotf-mods.com`.** En el panel de Cloudflare, zona `sotf-mods.com` → *Rules* → *Transform Rules* → *Modify Response Header* → *Create rule*:
   - Nombre: `R2 downloads as attachment`.
   - *Custom filter expression*:

     ```
     (http.host eq "r2.sotf-mods.com" and http.request.uri.path.extension in {"json" "zip"})
     ```

   - Acción: *Set static*, cabecera `Content-Disposition`, valor `attachment`.
   - Despliega la regla. Las imágenes (`png`, `jpg`, `webp`, …) no se ven afectadas y siguen mostrándose en línea. `fetch()` desde JavaScript ignora esa cabecera, así que nada que lea esos ficheros por código cambia.
   - Compruébalo antes de seguir (es un `HEAD`, no descarga nada):

     ```bash
     curl -sI "https://r2.sotf-mods.com/1767669047850_1762781085856_mountianhouse_019a6df0-c08d-7000-a463-e838a2879469.json" \
       | grep -i '^content-disposition'
     #   content-disposition: attachment
     ```

   La regla se puede crear ya, con el legacy actual: solo añade una cabecera a los `.json` y `.zip` servidos por R2, que en la web siempre se descargan como adjunto.
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

# 4) Los builds .json y los .zip llegan como adjunto (regla del paso 0)
curl -sI "https://r2.sotf-mods.com/1767669047850_1762781085856_mountianhouse_019a6df0-c08d-7000-a463-e838a2879469.json" \
  | grep -iE '^(HTTP|content-disposition)'
#   HTTP/2 200
#   content-disposition: attachment
curl -sI "https://r2.sotf-mods.com/1766549349465_Regi's%20Modding%20Library.zip" | grep -i '^content-disposition'
#   content-disposition: attachment

# 5) Versión inexistente → 404 real; fichero en el host retirado → 410
curl -s -o /dev/null -w '%{http_code}\n' -I "https://sotf-mods.com/mods/regitoxic/regi%27s-modding-library/download/9.9.9"   # 404
curl -s -o /dev/null -w '%{http_code}\n' -I "https://api.sotf-mods.com/api/mods/CompanionWardrobe/download/0.0.3"          # 410
#    Un navegador recibe una página HTML (no JSON) con el mismo código:
curl -sI -H 'Accept: text/html' "https://sotf-mods.com/mods/regitoxic/regi%27s-modding-library/download/9.9.9" \
  | grep -iE '^(HTTP|content-type)'
#   HTTP/2 404
#   content-type: text/html; charset=utf-8

# 6) Ya no queda ninguna referencia al host retirado en el HTML
curl -s https://sotf-mods.com/mods | grep -c 'files.sotf-mods.com'   # 0
```

En la BD (solo lectura), las descargas nuevas guardan una IP real:

```sql
SELECT ip, "userAgent", "createdAt" FROM "ModDownload" ORDER BY id DESC LIMIT 5;
```

Comprobación manual en el navegador:

- Abre la página de un mod y confirma que la descripción, el historial de versiones y los comentarios se ven igual que antes.
- Abre un perfil y la página de RedLoader (mods destacados): las tarjetas se ven igual que antes.
- En la página de un build, pulsa *Download*: el `.json` se descarga (no se abre como texto).

## Marcha atrás

Cada parche es un commit independiente:

```bash
git revert --no-edit <sha>                  # un parche concreto
git revert --no-edit <sha-primero>^..HEAD   # toda la serie (en cada repo)
```

Después se empuja y se vuelve a desplegar en Coolify. También puedes redesplegar el commit anterior desde el historial de despliegues de Coolify. Las variables borradas no hacen falta para volver atrás, salvo `FILE_DOWNLOAD_ENDPOINT`: si la borraste, vuelve a crearla con `https://r2.sotf-mods.com` antes de redesplegar el código antiguo.

La regla de Cloudflare del paso 0 puede quedarse tras una marcha atrás: con el legacy antiguo no tiene efecto visible.

La serie no toca el esquema de la BD ni los datos (solo inserta filas `ModDownload` e incrementa `Mod.downloads`, igual que antes).

## Verificación local

```bash
ops/legacy-hotfix/verify.sh          # KEEP_WORKDIR=1 conserva el directorio temporal; VERIFY_R2_HEAD=1 añade un HEAD a R2
```

El script:

1. Clona los repos legacy en `/tmp/sotf-legacy-hotfix/verify.*` (los originales no se tocan) y aplica los parches con `apply.sh` (`git am --keep-cr`).
2. Ejecuta `bun build src/index.ts --target=bun` en ambos (bun 1.4 vía `npx`).
3. Hace las comprobaciones estáticas: 0 apariciones de `files.sotf-mods.com`, sin `| safe`, sin `/preview` y sin variables sobrantes.
4. Ejecuta los tests de XSS en jsdom ([`verify/xss`](verify/xss/)) con el mismo DOMPurify 3.0.5 y showdown 2.1.0 que carga el sitio: markdown, comentarios, tarjetas de mod de `profile.js` (con un mod no aprobado malicioso), `featured.js` y `upload-build.js`, y los avisos.
5. Levanta un Postgres 16 desechable (proyecto compose `sotfv2-hotfix`, puerto 27440, fuera del rango efímero del kernel; `HOTFIX_PG_PORT`/`HOTFIX_API_PORT`/`HOTFIX_FRONTEND_PORT` los cambian), aplica `prisma@6.19.0 db push`, siembra [`verify/seed.sql`](verify/seed.sql) (claves reales con espacios, apóstrofo y `+`) y arranca el API (27441) y el frontend (27442). Después comprueba:
   - el 302 y su `Location` exacto;
   - la fila `ModDownload` con la IP real (por `?ip=`, `CF-Connecting-IP` y `X-Forwarded-For`);
   - el 302 a través del frontend;
   - que `HEAD`, `Range: bytes=100-` y `bytes=0-0` no cuentan y `bytes=0-` sí;
   - que un User-Agent de 8000 caracteres a través del frontend sigue dando el 302 y se guarda recortado a 512;
   - el 404 y el 410 (JSON para herramientas y página HTML para navegadores);
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
