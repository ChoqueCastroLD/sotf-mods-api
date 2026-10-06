# 01 — Contrato de compatibilidad hacia atrás (legacy → v2)

> **Nota (2026-10-06):** [CLASSIC.md](../CLASSIC.md) prevalece sobre este documento en la identidad «Locator», la landing y la gamificación (logros, insignias, XP, hitos, premios, kits, Patch Radar, mapa de la isla). Donde discrepen, manda CLASSIC.md. Este texto se conserva como histórico y no se reescribe.

> Track de investigación: **BACKWARD-COMPATIBILITY CONTRACT**
> Fecha: 2026-09-29 · Estado: investigación completada (solo lectura; nada se modificó en producción ni en los repos legacy)
> Fixtures reales capturados: [`fixtures/01-compat/`](./fixtures/01-compat/) (38 respuestas JSON de producción + `INDEX.tsv` con status/content-type + cabeceras CORS)

---

## 0. Resumen ejecutivo (TL;DR)

1. **Hay consumidores externos reales y activos** que v2 NO puede romper:
   - **RedManager 1.1.10** (instalador oficial de RedLoader, Tauri; ~123 k descargas del release): lista mods vía `GET api.sotf-mods.com/api/mods?...`, lee `GET /api/mods/:mod_id` y **descarga vía la URL del frontend** `https://sotf-mods.com/mods/:userSlug/:slug/download/:latestVersion`. Hace `fetch` desde un WebView → **necesita CORS**.
   - **UpdatesChecker** (mod in-game de imaxel, 18,6 k descargas): `GET /api/mods?limit={n}&modIds={csv}` y `GET /api/mods?&page={n}`, deserializa con **Newtonsoft tipado** (DTO extraído del DLL, §1.2) → cualquier cambio de tipo o `null` en un campo numérico/bool **rompe** el mod.
   - **KelvinSeek** (mod in-game de ShokoCC, 9,9 k descargas): `GET /api/kelvinseek/prompt?chat_id=&text=&context=` → **texto plano** `comando|respuesta`, y `GET /api/kelvinseek/clear?chat_id=`.
   - **Enlaces a páginas de mods** incrustados en `manifest.json` de mods publicados (campo `url` de RedLoader), en emails ya enviados, en el sitio de tutoriales de ImAxel (45 enlaces), en SOTFEdit, en READMEs de GitHub y en el índice de Google.
2. **No existe ningún cliente externo que guarde Bearer tokens.** Solo el frontend legacy autentica. → v2 puede **revocar todos los tokens legacy** en el corte (forzar re-login) con impacto mínimo; las **contraseñas sí deben seguir funcionando**: hay hashes **argon2id (Bun)** y, muy probablemente, **bcrypt `$2b$10$`** de usuarios de 2023 (backend original `sotf-mods-backend`).
3. **Endpoints a mantener byte-compatibles (Tier 1)**: `GET /api/mods`, `GET /api/mods/:mod_id`, `GET /api/mods/:mod_id/check`, `GET /api/kelvinseek/prompt`, `GET /api/kelvinseek/clear` (en `api.sotf-mods.com`) y la ruta **`GET sotf-mods.com/mods/:userSlug/:modSlug/download/:version`** (compatible en comportamiento: pasa a **302 → R2**).
4. **Todos los endpoints autenticados/mutantes** (auth, publish, upload, release, details, favorite, approve/unapprove, avatar, POST comments, presigned-url) **solo los usa el frontend legacy** → se retiran en el corte (410 con sobre JSON legacy).
5. **URLs públicas**: recomiendo **conservar las mismas formas canónicas** (`/mods/:user/:slug`, `/builds/:user/:slug`, `/profile/:user`, `/loader`, `/privacy`) y solo emitir 301 para duplicados/variantes. Los slugs son **globalmente únicos** (verificado en los 257), lo que permite un **resolver tolerante** que ya repararía 3 de 19 URLs de manifests que hoy están rotas (cambio de dueño, cambio de slug, mayúsculas).
6. **Descargas**: la ruta de descarga debe responder **302 (nunca 301)** a `https://r2.sotf-mods.com/<key codificada por segmento con encodeURIComponent>` contando la descarga de forma asíncrona. Verificado en R2: `%20`, `'`/`%27`, `+`/`%2B` y `()` funcionan; **`+` como espacio NO**. Hay **1 archivo irrecuperable** (CompanionWardrobe 0.0.3 aún apunta a `files.sotf-mods.com`, muerto).
7. **Quick wins opcionales (“revivir” clientes rotos)**: proxy de `sotf-mods.com/api/*` → API (RedManager ≤ 1.1.6 y mods de 2023), alias snake_case en la lista (RedManager ≤ 1.1.9), resolver de descarga tolerante a `undefined` (RedManager ≤ 1.1.9). El instalador `sotfmodsoneclick` está roto desde feb-2025 → retirarlo.

---

## 1. Consumidores externos identificados

Método: lectura del código legacy + historial git (137 commits API, 87 frontend, repo original `ChoqueCastroLD/sotf-mods-backend` de mar–sep 2023); `gh search code` (autenticado, solo lectura); WebSearch `site:sotf-mods.com`; crawl de solo-lectura de los 257 mods por la API pública; descarga **directa desde R2** (no cuenta descargas) de la última versión de 214 mods (< 40 MB) y análisis de `strings` ASCII/UTF-16 + metadatos .NET (`dnfile`) de todos sus DLL; extracción del instalador NSIS/Electron `sotfmodsoneclick-setup1.0.0.exe` en un contenedor desechable.

### 1.1 Tabla de consumidores

| # | Consumidor | Tipo / popularidad | Qué llama | Estado hoy | Criticidad v2 |
|---|---|---|---|---|---|
| C1 | **RedManager 1.1.10** (ToniMacaroni/RedManager, `src/lib/mods.ts`) | App de escritorio Tauri v1; release 1.1.10 con 123 192 descargas | `GET https://api.sotf-mods.com/api/mods?&approved={bool}&orderby=newest&page={n}&nsfw={bool}[&search={term}]` (sin `limit` → 10/pg; recorre todas las páginas con `meta.pages`) · `GET https://api.sotf-mods.com/api/mods/{id}` (id = nombre de carpeta del mod o dependencia) · descarga `https://sotf-mods.com/mods/{user.slug}/{slug}/download/{latestVersion}` · abre `https://sotf-mods.com/mods/{user.slug}/{slug}` | Funciona | **CRÍTICA** |
| C2 | **RedManager ≤ 1.1.9** (1.1.7: 33,9 k; 1.1.5: 20,1 k descargas) | idem | Mismos endpoints pero esperan campos planos `user_slug`, `latest_version`, `category_name` (forma pre-refactor feb-2025). ≤ 1.1.6 usa `https://sotf-mods.com/api/` (dominio del frontend) | **Roto** desde 2025-02-09 (descarga a `/mods/undefined/<slug>/download/undefined`); ≤ 1.1.6 roto desde la separación del API | Opcional revivir (§3.4) |
| C3 | **UpdatesChecker** (imaxel, mod in-game, 18 644 descargas) | .NET `HttpClient` + Newtonsoft (`Alt.Json`) tipado; `EnsureSuccessStatusCode()` | `GET https://api.sotf-mods.com/api/mods?limit={n}&modIds={id1,id2,...}` y `GET https://api.sotf-mods.com/api/mods?&page={n}` | Funciona (pero ignora Libraries y los 19 mods con `type=null`, ver §2.3) | **CRÍTICA** |
| C4 | **KelvinSeek** (ShokoCC, 9 884 descargas) | mod in-game | `GET https://api.sotf-mods.com/api/kelvinseek/prompt?chat_id={steamId_…_steamName_…_kelvinId_…}&text={t}&context={c}` → `text/plain` `"{command}|{respuesta}"` · `GET https://api.sotf-mods.com/api/kelvinseek/clear?chat_id=…` | Funciona | **CRÍTICA** (coste OpenAI) |
| C5 | KelvinGPT (ShokoCC, 14 727 descargas) | mod in-game | `https://sotf-mods.com/api/kelvin-gpt/prompt?chat_id=&text=&context=` y `.../clear-history?chat_id=&gpt_key=sk-…` (¡clave OpenAI del usuario en la URL!) | **Muerto** (404) | No revivir (o alias a kelvinseek, §3.4) |
| C6 | Nick's Kelvin GPT (`NicksKelvinGPT`) | mod in-game | `https://sotf-mods.com/api/kelvin-gpt?id=&text=&context=` (API de 2023) | **Muerto** (404) | No revivir |
| C7 | **sotfmodsoneclick** (Electron, servido en `/static/downloads/sotfmodsoneclick-setup1.0.0.exe`, 75 MB) | protocolo `sotf-mods-oneclick://?mod_id=…` | `GET https://api.sotf-mods.com/api/mods/{mod_id}` esperando campos **top-level** `user_slug`, `slug`, `latest_version`, `name`, `primary_image_url` → descarga `https://sotf-mods.com/mods/{user_slug}/{slug}/download/{latest_version}` | **Roto** (lee el sobre `{status,data}` como si fuera el mod → `undefined`); el botón se quitó del UI en ene-2025 | Retirar (410) |
| C8 | Manifests de mods publicados (`"url"` de RedLoader `ManifestData.Url`) | 19 de 214 mods apuntan a `sotf-mods.com/mods/...`; RedLoader solo lo guarda como “download link” | Enlace humano | 16 OK; 3 ya rotos (§4.4) | **ALTA** (resolver tolerante) |
| C9 | Tutoriales de ImAxel (`imaxel0.github.io/sotf-mods-tutorials`) | 45 páginas | `/mods` (×45), `/loader` (×2), `/profile/imaxel`, `/mods/imaxel/axel's-mod-menu`, `/mods/imaxel/tankmod`, `/mods/imaxel/plane-mod`, `/mods/tonimacaroni/redeffect`, `/mods/tonimacaroni/buildshare`, `/mods/aedev/gyrocopter` (ya no existe) | Enlaces | ALTA |
| C10 | SOTFEdit (codengine), RedNodeMods (ImAxel0), READMEs (AxelModMenu, FrankyModMenu, CameraFlow, SOTFSpeedify, ZombieMode…) | Apps/webs | `/profile/codengine`, `/mods`, `/mods/imaxel/rednodeloader`, páginas de mods | Enlaces | ALTA |
| C11 | Emails transaccionales ya enviados | Resend | `${BASE_URL}/mods/{user}/{slug}` (menciones) y `${BASE_URL}/reset-password?token=…` (1 h) | Enlaces | MEDIA |
| C12 | Google (índice) | — | `/mods`, `/builds`, `/loader`, `/mods/:u/:s`, `/builds/:u/:s`, `/profile/:u` (confirmado con `site:`) | Indexado | ALTA (SEO) |

**No son consumidores** (verificado): RedLoader (no hace llamadas HTTP al sitio; solo guarda `url` del manifest), **BuildShare** (DLL sin URLs; los builds se descargan a mano), `docker-redloader-sotf-server`, `AxelModMenu`, `SonsAxLib`, `RedNodeLoader`, `SOTFEditCompanion`, `ItemSpawner`. La extensión *immersive-translate* tiene una regla de DOM para `sotf-mods.com` (irrelevante).

**Limitaciones**: solo se analizó la **última versión** de cada mod (usuarios con versiones antiguas instaladas pueden llamar a rutas de 2023 como `sotf-mods.com/api/mods/:user/:slug/check`, hoy ya 404); mods > 40 MB (7) y mods cerrados fuera del sitio no se escanearon; bots de Discord o scripts privados son invisibles. Por eso se propone el **Tier 2** (mantener congelados los GET públicos baratos con cabeceras `Deprecation` y medir uso 90 días).

### 1.2 DTO exacto de UpdatesChecker (extraído de los metadatos .NET del DLL)

Newtonsoft ignora campos desconocidos (añadir campos es seguro), pero **falla** si un campo tipado `int`/`double`/`bool`/`DateTime` llega `null`, como string no numérico o con otra forma.

```
Root  { status:bool, data:List<Mod>, meta:Meta }
Meta  { total:int, page:int, limit:int, pages:int, next_page:int, prev_page:int }
Mod   { id:int, mod_id:string, name:string, slug:string, shortDescription:string, description:string,
        type:string, isNSFW:bool, isApproved:bool, isFeatured:bool, lastWeekDownloads:int, downloads:int,
        latestVersion:string, latestVersionSize:string, averageRating:double, reviewsCount:int,
        favoritesCount:int, sourceUrl:string, imageUrl:string, buildGuid:string, buildShareVersion:string,
        numberOfElements:int?, lastReleasedAt:DateTime, createdAt:DateTime, updatedAt:DateTime,
        userId:int, categoryId:int, images:List<{isPrimary:bool,isThumbnail:bool,url:string}>,
        user:{name,slug,imageUrl}, category:{name,slug}, versions:List<{version:string,isLatest:bool}>,
        _count:{favorites:int} }
```

Consecuencias para v2:
- `averageRating`, `reviewsCount`, `userId`, `categoryId` son **nullable en el schema Prisma** pero **no en el DTO**: en v2 nunca deben salir `null` (hoy ningún mod los tiene null; `averageRating` sale como `0`). Cuando v2 active reviews reales, `averageRating` debe seguir siendo número (p. ej. `4.5`).
- `meta.pages` con `limit=0` hoy sale `null` (Infinity) → en v2 validar `limit ≥ 1`.
- **Gotcha de implementación (Node + Postgres)**: `COUNT(*)`/`bigint`/`numeric` llegan como **string** en `node-postgres` → convertir a `number` en la capa compat. Fechas `timestamp(3) without time zone` (Prisma, en UTC) se interpretan como **hora local** en node-postgres → forzar `TZ=UTC` o type-parser; serializar con `toISOString()` (milisegundos + `Z`, p. ej. `2026-09-26T21:33:31.396Z`).

### 1.3 Contrato de RedManager 1.1.10 (TypeScript, `mods.ts`)

- Lista: usa `name, slug, mod_id, shortDescription, isApproved, category{name,slug}, user{name,slug}, imageUrl, latestVersion, lastReleasedAt, type, dependencies:string[]` y `meta.pages`. Pestañas: aprobados (`approved=true`), **no aprobados** (`approved=false`), **NSFW** (`approved=true&nsfw=true`).
- Detalle `GET /api/mods/:id`: si `status === false` → null. Usa los mismos campos. **Bug existente**: en el detalle `dependencies` es **string** (`"SonsAxLib"`), así que `for (const dependency of mod.dependencies)` itera caracteres y llama `/api/mods/S`, `/api/mods/o`… (404 inofensivos). Mantener el string en compat (fidelidad); no “arreglarlo” allí.
- Descarga: `tauri-plugin-upload` v1 → `reqwest::Client::new()` (sigue hasta 10 redirecciones, **sin User-Agent**, **no comprueba status** y escribe el cuerpo tal cual; progreso con `Content-Length` de la respuesta final). ⇒ un 302 a R2 funciona; un 200 con HTML/JSON de error produce un zip corrupto.
- CORS: el `fetch` sale del WebView con origen `https://tauri.localhost` (Windows) / `tauri://localhost`. Hoy el API refleja cualquier `Origin` con `credentials: true`.

---

## 2. Inventario completo del API legacy (`api.sotf-mods.com`)

Stack: Bun + Elysia; todas las rutas montadas en `src/index.ts` con `group('')`. Rutas estáticas ganan a paramétricas (`/api/mods/featured` y `/api/mods/find` sombrean a `:mod_id` → en v2 **reservar** los ids `featured`, `find`, `slug`).

### 2.1 Convenciones globales (observadas en producción)

| Aspecto | Comportamiento legacy |
|---|---|
| Sobre OK | `{"status":true,"data":…}` (+ `meta` en la lista). `Content-Type: application/json` (sin charset). |
| Sobre error | `{"status":false,"error":"NOT_FOUND"\|"VALIDATION"\|"UNKNOWN","message":"…"}` · 404 → `message:"No se encontró el recurso."` (en español) · validación de schema Elysia → **422** con `message:": undefined"` · errores propios (`ValidationError`, `UnauthorizedError`) y excepciones → **500** `UNKNOWN` con el mensaje (incluye trazas de Prisma, p. ej. `limit=abc`). `/api/auth/check` sin token → **500** “Unauthorized, login required”. |
| Excepción | `/api/mods/:id/download-stats` con mod inexistente → **200** `{"status":false,"message":"Mod not found"}`. KelvinSeek devuelve **texto plano**. |
| CORS | Refleja `Origin` (o `*` sin Origin), `Allow-Credentials: true`, métodos GET/POST/PUT/PATCH/DELETE/OPTIONS, `Allow-Headers: Content-Type, Authorization, X-Requested-With`, preflight 204 con `max-age 86400`; `Expose-Headers` filtra todas las cabeceras de la petición (fuga menor). |
| Caché | Ninguna (`cf-cache-status: DYNAMIC`, sin `Cache-Control`). |
| Auth | Solo `Authorization: Bearer <token>`; lookup exacto en tabla `Token` (JWT HS256 nunca verificado, `expiresAt` nunca comprobado). |
| Rate limit | Ninguno. |
| GET que mutan | `/api/mods/:id/favorite`, `/approve`, `/unapprove`, `/api/kelvinseek/prompt` (escribe DB + OpenAI), `/api/kelvinseek/clear`, y todas las rutas de descarga (contadores). |

### 2.2 Tabla de endpoints

Leyenda Tier: **T1** = mantener byte-compatible · **T2** = mantener congelado (read-only, deprecable con medición) · **T3** = retirar en el corte · — = no montado.

| # | Método y ruta | Auth | Parámetros | Respuesta (resumen) | Consumidores | Tier |
|---|---|---|---|---|---|---|
| 1 | `GET /api/mods` | no | query: `type` (def `Mod`; `Both` = sin filtro), `page` (def 1), `limit` (def 10, sin tope), `search`, `userSlug`, `userSlugFavorites`, `modIds` (csv), `approved` (`"true"`→true; cualquier otro valor presente→false; **ausente→sin filtro**), `nsfw` (`"true"`→true, si no false), `orderby`, `category` (slug) | `{status,data:[Mod+images+user+category+versions(1)+_count], meta}` (§2.3) | RedManager, UpdatesChecker, legacy web | **T1** |
| 2 | `GET /api/mods/:mod_id` | no | `mod_id` exacto (case-sensitive) | `{status,data:ModDetail}` (§2.4) | RedManager, OneClick, legacy | **T1** |
| 3 | `GET /api/mods/:mod_id/check` | no | `version` opcional | §2.5 | API pública de update-check desde 2023 (sin llamador encontrado en DLLs actuales) | **T1** |
| 4 | `GET /api/kelvinseek/prompt` | no | `text`, `context`, `chat_id` (los 3 obligatorios → si falta: 422 JSON) | `text/plain` `"{command}|{respuesta}"` (siempre 200; si OpenAI falla, respuesta de fallback con comando aproximado) | KelvinSeek | **T1** |
| 5 | `GET /api/kelvinseek/clear` | no | `chat_id` | `text/plain` `Chat cleared` | KelvinSeek | **T1** |
| 6 | `GET /api/mods/slug/:userSlug/:mod_slug` | no | — | igual que #2 | legacy SSR | T2 |
| 7 | `GET /api/mods/find` | no | `userSlug`, `mod_slug` (ambos obligatorios) | `{status,data:{mod_id}}` | legacy | T2 |
| 8 | `GET /api/mods/featured` | no | — | 12 mods `type=Mod`, aprobados, no NSFW, orden `lastWeekDownloads desc`; campos: `id,name,slug,mod_id,shortDescription,isNSFW,isApproved,isFeatured,lastReleasedAt,type,dependencies(string),lastWeekDownloads,imageUrl,downloads,favoritesCount,latestVersion,category{name,slug},user{name,slug,imageUrl,isTrusted},images[{isPrimary,isThumbnail,url}]` | legacy | T2 |
| 9 | `GET /api/builds/featured` | no | — | 4 builds; mismos campos **sin** `favoritesCount` y **con** `_count{favorites}` | legacy | T2 |
| 10 | `GET /api/stats` | no | — | `{users, mods, downloads, developers}` (§2.6) | legacy | T2 |
| 11 | `GET /api/stats/builds` | no | — | `{users, mods(=builds), downloads(builds), developers(builds)}` | legacy | T2 |
| 12 | `GET /api/categories` | no | `type` (def `Mod`; `Build`; otro → `[]`) | `[{id,name,slug}]` orden `name asc` | legacy | T2 |
| 13 | `GET /api/users/:userSlug` | no | — | `{name,slug,imageUrl,isTrusted,createdAt}` | legacy | T2 |
| 14 | `GET /api/users/:userSlug/stats` | no | — | `{modsCount,totalDownloads,downloadsLastDay,downloadsLast7Days,downloadsLast30Days,totalFavorites,totalReviews,averageRating}` | legacy | T2 |
| 15 | `GET /api/comments` | no | `mod_id` = **id numérico interno** (obligatorio; ausente → 500, no numérico → 422) | top-level desc con `replies` asc: `{id,message,imageUrl,createdAt,isHidden,user{name,slug,imageUrl,isTrusted},replies[…]}`; **devuelve también ocultos** | legacy | T2 |
| 16 | `GET /api/mods/:mod_id/download-stats` | no | `mod_id` numérico **o** string; `period` `week`(def)\|`month`\|`all` (otro → 422); `_t` ignorado | `[{date:"YYYY-MM-DD",count}]` solo días con descargas (UTC) | legacy | T2 |
| 17 | `GET /api/mods/:mod_id/download/:version` | no | `ip`, `agent` (query, se guardan tal cual; si faltan → `"undefined"`) | binario bufferizado + cuenta | directo | T2 (→ 302) |
| 18 | `GET /api/mods/slug/:userSlug/:mod_slug/download/:version` | no | idem | idem | frontend legacy (proxy) | T2 (→ 302) |
| 19 | `GET /api/auth/check` | sí | — | `{status,data:{name,slug,email,imageUrl,isTrusted}}` | legacy | T3 |
| 20 | `POST /api/auth/login` | no | `{email,password}` | `{status,data:{token,slug,name,imageUrl,isTrusted}}`; filtra existencia de email | legacy | T3 |
| 21 | `POST /api/auth/logout` | sí | — | `{status}` | legacy | T3 |
| 22 | `POST /api/auth/register` | no | `{email,username,password,confirm_password}` | `{status}` | legacy | T3 |
| 23 | `POST /api/auth/forgot-password` | no | `{email}` | `{status,message}` (anti-enumeración) | legacy | T3 |
| 24 | `POST /api/auth/reset-password` | no | `{token,password,confirm_password}` | `{status}`; borra todos los tokens del usuario | legacy | T3 |
| 25 | `GET /api/favorites` | sí | — | `[{id,mod{id,favoritesCount}}]` | legacy | T3 |
| 26 | `POST /api/favorites/toggle` | sí | `{modId:number,favorite:bool}` | `{status,data:{favorite,count}}` | legacy | T3 |
| 27 | `GET /api/mods/:mod_id/favorite` | sí | — | toggle (GET que muta) | legacy (builds) | T3 |
| 28 | `GET /api/mods/:mod_id/approve` | sí (trusted) | — | `{status,message:'Mod approved.'}` | legacy | T3 |
| 29 | `GET /api/mods/:mod_id/unapprove` | sí (trusted) | — | `{status,message:'Mod approved.'}` (bug) | legacy | T3 |
| 30 | `POST /api/files/presigned-url` | sí | `{filename,contentType?,expiresIn?}` | `{uploadUrl,fileKey}` sin restricción de tamaño/tipo/expiración | legacy | T3 |
| 31 | `POST /api/mods/upload` | sí | `{modFileKey}` | lee manifest del zip | legacy | T3 |
| 32 | `POST /api/mods/publish` | sí | `{name,shortDescription,description,isNSFW,category_id,modFileKey,thumbnailKey,imageKeys?,modSide?,isMultiplayerCompatible?,requiresAllPlayers?}` | crea mod no aprobado | legacy | T3 |
| 33 | `POST /api/builds/upload` · `POST /api/builds/publish` | sí | `{buildFileKey…}` | builds (auto-aprobados; versión = UUIDv7) | legacy | T3 |
| 34 | `POST /api/mods/:mod_id/release` | sí (dueño) | multipart `{changelog, modFile}` | nueva versión | legacy | T3 |
| 35 | `PATCH /api/mods/:mod_id/details` | sí (dueño) | multipart | edita mod | legacy | T3 |
| 36 | `POST /api/users/avatar` | sí | multipart `avatar` | `{imageUrl}` | legacy | T3 |
| 37 | `POST /api/comments` | sí | multipart `{mod_id,message,reply_id?,image?}` | comentario + PendingMention | legacy | T3 |
| 38 | `/api/reviews`, `/api/reviews/create` | — | — | **No montados** (código roto) → 404 hoy | nadie | — |
| — | Crons internos | — | cada 30 min recuenta `downloads`, `lastWeekDownloads`, `favoritesCount`, `commentsCount`; cada 10 min envía menciones | — | — | reemplazar |

### 2.3 `GET /api/mods` — especificación exacta (T1)

- **Filtros**: `search` → `name ILIKE %q%` OR `description ILIKE` OR `user.name ILIKE`. `userSlug` → autor. `userSlugFavorites` → favoritos de ese usuario. `modIds` → `mod_id IN (csv trim)`. `category` → `category.slug`. `isNSFW = (nsfw==="true")`. `type` → `type = (type||"Mod")` salvo `Both`. `approved` ausente ⇒ **sin filtro** (por eso UpdatesChecker ve también no aprobados).
- **Consecuencia oculta**: 19 mods aprobados tienen `type = null` (ItemSpawner 15 k, BetterLighter 11 k, NicksModMenu, Zippy…) y 2 son `Library` (SonsAxLib 91 k descargas): **nunca aparecen** con el `type` por defecto → RedManager no los lista y UpdatesChecker no les avisa de actualizaciones. Recomendación v2: **backfill `type='Mod'`** para los 19 null en la migración y, cuando venga `modIds`, **no aplicar el filtro de tipo por defecto** (misma forma de respuesta, resultado más útil).
- **`orderby`**: `newest`(def)→`lastReleasedAt desc`; `oldest`→asc; `most_/least_downloaded`→`downloads`; `most_/least_downloaded_week`→`lastWeekDownloads`; `most_/least_followed`→`favoritesCount`; `highest_/lowest_rating`→`averageRating`; `most_/least_comments`→`commentsCount`. Sin desempate (paginación inestable; en v2 añadir `id` como desempate — compatible).
- **Paginación**: `skip=(page-1)*limit`. `meta = {total, page, limit, pages: ceil(total/limit), next_page: min(page+1, pages), prev_page: max(page-1, 1)}` → con 0 resultados `pages=0, next_page=0`; con `limit=0` `pages=null`. `limit`/`page` no numéricos → 500 con traza Prisma (v2: 422 con el mismo sobre).
- **Forma de cada ítem** (orden de claves real): todas las columnas escalares de `Mod` — `id, name, slug, mod_id, shortDescription, description, dependencies, type, modSide, isNSFW, isApproved, isFeatured, isMultiplayerCompatible, requiresAllPlayers, lastWeekDownloads, downloads, latestVersion, latestVersionSize, averageRating, reviewsCount, favoritesCount, commentsCount, sourceUrl, imageUrl, buildGuid, buildShareVersion, numberOfElements, lastReleasedAt, createdAt, updatedAt, userId, categoryId` — más `images:[{isPrimary,isThumbnail,url}]`, `user:{name,slug,imageUrl,isTrusted}`, `category:{name,slug}|null`, `versions:[{version,isLatest}]`, `_count:{favorites}`.
  - `dependencies` aquí es **array** (`"A, B"` → `["A","B"]`, `""` → `[]`).
  - `versions` contiene **un solo elemento: la versión menor en orden de string ascendente** (casi siempre `1.0.0`, `isLatest:false`), no la última. Quirk a conservar en compat; el dato útil es `latestVersion`.
  - `description` completa (≤ 2000 chars) en cada ítem; `latestVersionSize` siempre `""`; `sourceUrl` siempre `null`; `user.imageUrl` `""` si no hay avatar.
- **Query con `?&`** (RedManager/UpdatesChecker): verificado que `fast-querystring` (parser por defecto de Fastify) lo parsea bien; las rutas compat **no deben usar schemas estrictos** (`additionalProperties:false`) para no romper con parámetros extra (`_t`, claves vacías).

### 2.4 `GET /api/mods/:mod_id` y `GET /api/mods/slug/:u/:s` (T1/T2)

`data` = mismas columnas escalares que la lista (en el mismo orden) + `images:[{url}]` (solo `url`), `user`, `category`, `versions:[…]`, `_count:{favorites}`, con:
- `dependencies` **string crudo** (`"SimpleNetworkEvents,Banking"`).
- `versions` = **todas**, ordenadas por **string desc** (bug conocido: `1.0.5` antes que `1.0.20`), cada una `{id, version, isLatest, changelog, downloadUrl, extension, filename, createdAt, updatedAt, _count:{downloads}}`. `downloadUrl` es la URL **cruda** (sin codificar) en `https://r2.sotf-mods.com/…`; `filename` es la key antigua (no siempre coincide con la key actual de R2: `downloadUrl` es la fuente de verdad).
- Devuelve también mods **no aprobados** (RedManager/UpdatesChecker dependen de ello para mods instalados).
- En compat mantener orden string; el orden semver correcto va en el API v2 nuevo.

### 2.5 `GET /api/mods/:mod_id/check` (T1)

Busca la versión con `isLatest=true`. Respuestas exactas (200):

```json
{"status":true,"newVersionAvailable":true,"message":"New version available","version":"1.3.8","changelog":"…"}
{"status":true,"newVersionAvailable":false,"message":"No new version available","version":"1.3.8","changelog":"…"}
{"status":true,"newVersionAvailable":false,"message":"Latest version","version":"1.3.8","changelog":"…"}   // sin ?version
```

Semántica: `semver.gt(latest, version)` de **node-semver** (acepta prefijo `v`; versión del cliente mayor que la publicada → `false`). Errores: mod inexistente → 404 `NOT_FOUND`; `version` no semver → **500** `{"status":false,"error":"UNKNOWN","message":"Invalid Version: notsemver"}`; builds (versión = UUIDv7) con `?version` → 500 `Invalid Version: 019a…`. v2 puede devolver 422 en esos dos casos (cualquier no-2xx es “fallo” para clientes).

### 2.6 Semántica de `/api/stats` (T2, pero sus números son “datos” que no deben perderse)

- `users` = todos los usuarios (3 883). `mods` = **todos** los registros `Mod` (257 = 221 mods/libs/null + 36 builds, incluidos no aprobados). `developers` = usuarios con ≥ 1 mod aprobado de `type="Mod"` (46).
- `downloads` = `COUNT(*)` de **toda** la tabla `ModDownload` = 1 977 059, mientras que la suma de `downloads` de los mods existentes es 1 976 625 → **434 filas huérfanas** (versiones/mods borrados). La migración debe conservarlas (o un contador “legacy_orphan_downloads”) para que el total no baje.
- Contadores por mod (`downloads`, `favoritesCount`) coinciden hoy al 100 % con las filas (verificado en los 257).

### 2.7 KelvinSeek (T1) — detalles

- Respuesta `text/plain;charset=utf-8`, formato `"{command}|{respuesta}"`; `command` ∈ lista cerrada de ~60 ids (`follow_me`, `get.logs.drop_here`, `clear.10_meters`…) que **también está compilada en el mod** → mantener la lista exacta. Sin match → `"|respuesta"`.
- `chat_id` contiene **SteamID y nombre de Steam** (dato personal) → en v2 guardarlo hasheado, retención corta (p. ej. 30 días), y **rate-limit** por IP/chat_id + tope de longitud + presupuesto mensual con kill-switch (hoy es un proxy abierto a OpenAI `gpt-4o-mini`).
- Bug interno a corregir sin afectar contrato: al superar 32 mensajes borra los **más nuevos** en lugar de los más viejos.

---

## 3. Clasificación para v2

### 3.1 (a) Endpoints que v2 DEBE mantener byte-compatibles en la misma ruta

Definición de “byte-compatible” para este proyecto: mismos **status 2xx**, mismo `Content-Type`, mismo **conjunto de claves, tipos, nulabilidad, valores y orden de claves**; mismas reglas de filtrado/orden/paginación. Para errores: mismo sobre `{status:false,error,message}` y status **no-2xx** (el código exacto 404/422/500 puede normalizarse, salvo 404 de “no encontrado”).

| Host | Ruta | Por qué |
|---|---|---|
| `api.sotf-mods.com` | `GET /api/mods` | RedManager (lista, pestañas unapproved/NSFW, búsqueda) + UpdatesChecker (DTO tipado) |
| `api.sotf-mods.com` | `GET /api/mods/:mod_id` | RedManager (mods instalados + dependencias) |
| `api.sotf-mods.com` | `GET /api/mods/:mod_id/check?version=` | API de update-check histórica y barata |
| `api.sotf-mods.com` | `GET /api/kelvinseek/prompt` · `GET /api/kelvinseek/clear` | KelvinSeek (texto plano) |
| `sotf-mods.com` | `GET /mods/:userSlug/:modSlug/download/:version` | RedManager (todas las versiones), web, enlaces viejos. **Compatible en comportamiento**: 302 → R2 (§6) |
| `sotf-mods.com` | `GET /mods/:userSlug/:modSlug` (página) | manifests, emails, RedManager “view on site”, Google |

Cambios **permitidos** dentro de la capa compat (no rompen a nadie): añadir cabeceras (`Cache-Control`, `Deprecation`, `Link`, `X-Request-Id`); CORS `Access-Control-Allow-Origin: *` **sin** credenciales en GET públicos (válido para el WebView de RedManager y cacheable sin `Vary: Origin`); desempate estable por `id`; validar `limit` (1…500) y `page` con 422 en vez de 500; excluir comentarios ocultos; no filtrar el tipo por defecto cuando llega `modIds`; backfill de `type` null. Cambios **prohibidos**: renombrar/quitar campos, cambiar tipos (string↔array↔number), devolver `null` donde hoy hay número/bool, cambiar `approved` ausente = sin filtro, cambiar el orden por defecto, envolver distinto, paginar con cursores.

Caché recomendada para T1/T2 read-only (son las rutas más calientes: RedManager recorre todas las páginas en cada arranque; UpdatesChecker en cada arranque del juego): `Cache-Control: public, max-age=60, s-maxage=300, stale-while-revalidate=600` + purga en publish/release. `check` y `mods/:id` igual. KelvinSeek: `no-store`.

### 3.2 Tier 2 — mantener congelado (solo lectura), medir y deprecar después

`/api/mods/slug/:u/:s`, `/api/mods/find`, `/api/mods/featured`, `/api/builds/featured`, `/api/stats`, `/api/stats/builds`, `/api/categories`, `/api/users/:slug`, `/api/users/:slug/stats`, `GET /api/comments`, `/api/mods/:id/download-stats`, `/api/mods/:mod_id/download/:version` y `/api/mods/slug/:u/:s/download/:version` (→ 302 + conteo, ignorando `?ip=&agent=`).

Razón: públicos, sin auth, baratos de adaptar desde el modelo v2, y no podemos ver bots/scripts privados. Responder con `Deprecation: true`, `Sunset: <fecha +12 meses>` y `Link: <https://sotf-mods.com/developers>; rel="deprecation"`, registrar User-Agent/Origin por ruta durante 90 días y decidir con datos. `download-stats` debe salir de agregados diarios (hoy escanea todas las filas: `period=all` de AxelModMenu = 36 KB y 117 k filas).

### 3.3 (b) Endpoints que se pueden retirar (T3)

Todos los autenticados o mutantes: `/api/auth/*` (6), `/api/favorites`, `/api/favorites/toggle`, `/api/mods/:id/favorite`, `/api/mods/:id/approve`, `/api/mods/:id/unapprove`, `/api/files/presigned-url`, `/api/mods/upload`, `/api/mods/publish`, `/api/builds/upload`, `/api/builds/publish`, `/api/mods/:id/release`, `PATCH /api/mods/:id/details`, `/api/users/avatar`, `POST /api/comments`. Único consumidor: el frontend legacy que v2 reemplaza. Además son inseguros (GET que mutan → CSRF/prefetch; presigned URLs sin límites; login que filtra existencia de email).

Respuesta en el corte: **410 Gone** con el sobre legacy `{"status":false,"error":"GONE","message":"This endpoint was retired in sotf-mods v2. See https://sotf-mods.com/developers"}`. Las rutas `/api/reviews*` nunca estuvieron montadas: nada que hacer (v2 implementa reviews en el API nuevo).

### 3.4 Tier 4 — “revivals” opcionales (baratos, alto valor percibido)

| Opción | Arregla | Coste | Riesgo | Recomendación |
|---|---|---|---|---|
| Caddy: `sotf-mods.com/api/*` → reverse-proxy al API compat | RedManager ≤ 1.1.6 (lista), mods de 2023 que usan el dominio principal | 3 líneas de Caddy | Nulo (hoy es 404) | **Sí** |
| Alias snake_case en ítems de la lista y en el detalle: `user_slug, user_name, user_image_url, category_slug, category_name, short_description, latest_version, favorites` | RedManager 1.1.5–1.1.9 completo (lista, “hasUpdate”, descargas) | Bajo | Bajo: Newtonsoft ignora campos extra; `favorites` no existe en el DTO de UpdatesChecker a nivel Mod. Verificar con test de contrato | **Sí** (detrás de flag) |
| Resolver de descarga tolerante: `/mods/undefined/:slug/download/undefined` → mod por slug global + última versión | RedManager ≤ 1.1.9 aun sin alias | Bajo | Nulo | **Sí** |
| Rutas 2023 `sotf-mods.com/api/mods/:user/:slug` y `/check` (forma de 2023) | Mods muy viejos | Medio | Bajo | Solo si los logs de 404 muestran tráfico |
| Alias `kelvin-gpt/*` → kelvinseek | KelvinGPT (14,7 k) y NicksKelvinGPT | Bajo | Coste OpenAI, clave del usuario en URL | **No** (mantener 404/410) |
| OneClick (`sotf-mods-oneclick://`) | Instalador Electron | Alto (el exe espera JSON plano top-level) | — | **No**: retirar el exe (410) y, si se quiere “1-click”, diseñar uno nuevo |

---

## 4. (c) URLs públicas legacy y mapa de redirecciones → v2

### 4.1 Inventario (router legacy + historial + sondas en vivo)

El idioma **no** está en la URL (cookie `lang` o `Accept-Language`; códigos no estándar `ch`→zh, `se`→sv), así que las URLs multilenguaje de v2 son nuevas y no requieren redirección.

| URL legacy | Estado medido hoy | ¿Indexada / enlazada? | Destino v2 recomendado | Código |
|---|---|---|---|---|
| `/` | 302 → `/mods` | sí | `/` = landing nueva | 200 |
| `/mods`, `/mods/` | 200 | Google, tutoriales (×45), RedNodeMods, READMEs | `/mods` (catálogo) | 200 / 301 sin barra |
| `/mods?…` | 200 | enlaces internos | ver §4.2 | 301 si trae params legacy |
| `/mods/:u/:s` | 200; si no existe: **200 con cuerpo `/404` text/plain** | Google, 19 manifests, emails, RedManager | **misma ruta** (canónica si `type≠Build`) | 200 · 301 variantes (§4.3) · **404/410 reales** |
| `/mods/:u/:s/download/:v` | 200 binario vía doble proxy (y **200** con JSON de error si no existe) | RedManager, web | misma ruta | **302 → R2** / 404 |
| `/mods/:u/:s.json` | 200 `/404` (link oEmbed mal formado en `build.njk`) | `<link>` | `/oembed?url=…` (JSON oEmbed real) | 301 |
| `/builds`, `/builds?…` | 200 | Google | `/builds` | 200 / 301 params |
| `/builds/:u/:s` | 200 (también renderiza **mods**: contenido duplicado) | Google (`/builds/reuploader/a-frame-house`…) | misma ruta si `type=Build`; si es mod → 301 a `/mods/:u/:s` | 200 / 301 |
| `/mods/:u/:s` de un **build** | 200 (duplicado) | enlaces de descarga legacy | 301 → `/builds/:u/:s` (la **descarga** se queda en `/mods/.../download/...`) | 301 |
| `/profile/:u`, `/profile/:u/` | 200; inexistente → 302 `/404` → 404 | Google, SOTFEdit, tutoriales | `/profile/:u` (mantener) | 200 / 404 |
| `/loader` | 200 | Google, tutoriales, guías (moddingcommunity, Steam) | `/loader` = guía “Instalar RedLoader / RedManager” (mantener ruta) | 200 |
| `/privacy` | 200 | requisito AdSense | `/privacy` (+ `/terms` nuevo) | 200 |
| `/login`, `/login?registered`, `/login?reset` | 200 | — | `/login` (los flags → toasts) | 200 |
| `/register`, `/forgot-password` | 200 | — | idem | 200 |
| `/reset-password?token=` | 200 | **emails** (válidos 1 h) | **misma ruta** (acepta tokens legacy migrados) | 200 |
| `/logout` | 302 → `/login` | — | GET: cierra sesión → 303 `/` | 303 |
| `/upload` | 200 (incluso sin sesión) | — | `/studio/new?type=mod` | 301 |
| `/upload-build` | 200 | — | `/studio/new?type=build` | 301 |
| `/404` | 404 `NOT_FOUND` text | destino de redirects legacy | página 404 real | 404 |
| `/ads.txt` | 200 `google.com, pub-2799839819522052, DIRECT, f08c47fec0942fa0` | AdSense | **idéntico** | 200 |
| `/robots.txt` | contenido *managed* de Cloudflare (content-signals), sin sitemap | — | robots de origen + `Sitemap:` + `Disallow: /mods/*/download/` (revisar el “managed robots.txt” de CF para que no lo pise) | 200 |
| `/sitemap.xml`, `/llms.txt`, `/favicon.ico` | 404 | — | nuevos | 200 |
| `/static/images/*` (logo, favicons, `hd_thumbnail.png`) | 200 | og:image en shares antiguos | conservar los ficheros o 301 a los nuevos assets | 200/301 |
| `/static/downloads/sotfmodsoneclick-setup1.0.0.exe` | 200 (75 MB) | páginas viejas | 410 (o 301 → `/loader`) | 410 |
| **Era 2023** (`sotf-mods-backend`): `/user/login`, `/user/register`, `/user/logout`, `/user/upload`, `/mods/upload`, `/artifacts` | 404 hoy | enlaces de 2023 | `/login`, `/register`, `/logout`, `/studio/new`, `/studio/new`, `/` | 301 |
| **Era 2023**: `/images/:file`, `/images/:file/preview` (Google Drive) | 404 hoy | imágenes viejas | — | 410 |
| **Era 2023**: `sotf-mods.com/api/*` | 404 hoy | RedManager ≤ 1.1.6, mods 2023 | proxy al API compat (§3.4) | 200 |

Reglas generales: 404/410 con **status real** (hoy los mods inexistentes devuelven 200); sin barra final (301); host `www.` → apex (301); HTTP → HTTPS lo hace Cloudflare.

### 4.2 Mapa de query-strings de `/mods` y `/builds`

Params legacy: `nsfw`, `showunapproved`, `orderby`, `category`, `search`, `page`, `type` (el UI siempre añade `showunapproved=false`, `type`, `page=1`). Regla: si la URL trae algún parámetro legacy → **301** a la URL v2 equivalente; `rel=canonical` siempre apunta a la URL limpia; filtros no indexables → `noindex,follow`.

| Legacy | v2 (propuesta; ajustar si el track de URLs decide otra cosa) |
|---|---|
| `page=1` | se elimina |
| `page=N` | `?page=N` (o `/mods/page/N` si el catálogo es HTML estático) |
| `category=<slug>` (solo) | `/mods/category/<slug>` (indexable; slugs actuales: `library`, `misc`, `model-swap`, `qol`; builds: 21 slugs) |
| `search=<q>` | `?q=<q>` (noindex) |
| `orderby=newest` / `oldest` | por defecto / `?sort=oldest` |
| `most_downloaded` / `least_downloaded` | `?sort=downloads` / `&order=asc` |
| `most_downloaded_week` / `least_…` | `?sort=trending` / `&order=asc` |
| `most_followed` / `least_followed` | `?sort=favorites` / `&order=asc` |
| `highest_rating` / `lowest_rating` | `?sort=rating` / `&order=asc` |
| `most_comments` / `least_comments` | `?sort=comments` / `&order=asc` |
| `type=Mod` · `type=Build` · `type=Both` · `type=Library` | se elimina · 301 `/builds` · `?type=all` · `?type=library` |
| `nsfw=false` · `nsfw=true` | se elimina · `?nsfw=1` (con age-gate) |
| `showunapproved=false` · `=true` | se elimina · se elimina (la cola de moderación vive en el panel) |

### 4.3 Resolver canónico de `/mods/:u/:s` (y de la ruta de descarga)

Los slugs de mod son **globalmente únicos** (publish lo exige; 0 duplicados en 257). Algoritmo:

1. `(userSlug, slug)` exacto → 200 (o 301 al tipo correcto `/mods` ↔ `/builds`).
2. Si no: buscar por `slug` global exacto → 301 al dueño actual (cubre cambio de dueño y `undefined`).
3. Si no: comparación case-insensitive y normalizada (`lower`, quitar `'`, `()`, `.`, `_`, `+` y guiones repetidos) sobre `slug` actual **y** tabla `slug_history` → 301.
4. Si no: `slug` normalizado == `mod_id` en minúsculas → 301.
5. Si no: 404 (410 si consta como borrado en `slug_history`/tombstones).

v2 debe crear **`mod_slug_history`** (y `user_slug_history` si se permite renombrar usuarios) para que futuros renombres no rompan enlaces.

### 4.4 Enlaces externos conocidos que hoy están rotos y el resolver arreglaría

| URL externa (origen) | Hoy | Destino correcto |
|---|---|---|
| `/mods/codengine/upgradeableplayerstats` (Google) | 200 `/404` | `/mods/smokyace/upgradeableplayerstats` (cambio de dueño) |
| `/mods/anwender/helimod` (manifest de HeliMod) | 200 `/404` | `/mods/eisbrecher18/helikopter-mod` (slug ≈ `mod_id`) |
| `/mods/tempbito/perishableshuffler` (manifest) | 200 `/404` | `/mods/tempbito/perishable-shuffler` (normalización) |
| `/mods/simmelsau/RemoveMountainFog` (manifest) | 200 `/404` | `/mods/simmelsau/removemountainfog` (mayúsculas) |
| `/mods/aedev/gyrocopter` (tutoriales) | 200 `/404` | 410 (mod borrado) |

### 4.5 Slugs no canónicos (opcional: normalizar con `slug_history` + 301)

15 slugs contienen `'`, `(`, `)`, `.`, `_` o `+` (funcionan, pero son feos y frágiles para codificar): `imaxel/axel's-mod-menu`, `nick/nick's-kelvin-gpt`, `richard23n/my-classmate-jin's-house`, `regitoxic/regi's-modding-library`, `regitoxic/virginia-wardrobe-18+`, `regitoxic/skeletal-chainsaw(alpha)`, `regitoxic/coop-server-tools(beta)`, `regitoxic/immersivecompanioninjuries(beta)`, `regitoxic/vampire-survival-challenge(beta)`, `simmelsau/customradio-(beta)`, `wunx/dynamic_survival_matrix`, `glad0s/force_remove_logs`, `wuxkum/gerald-r.-ford-class-aircraft-carriers`, `wuxkum/radio-alarm-trap-_but-is-us-military-base-alarm`, `usmcusn/instant-base-def.-sol-wall-gate-with-3-story-h`. Si se normalizan (p. ej. `axels-mod-menu`), el slug viejo va a `slug_history` y **tanto la página como la ruta de descarga** redirigen (la de descarga resuelve igual, sin 301 intermedio). Varios están en manifests (`nick's-kelvin-gpt`), por lo que el resolver es obligatorio si se normaliza.

---

## 5. (d) Tokens y autenticación — compatibilidad

**Hallazgos**
- Ningún cliente externo autentica (RedManager, UpdatesChecker, KelvinSeek, OneClick: todos anónimos). El API solo acepta `Authorization: Bearer` (no cookies).
- El frontend legacy guarda el token en **cookie `token`** (no HttpOnly, `SameSite=Lax`, `Secure`, 2 días), en **`localStorage.token`** (sin expiración) y lo incrusta en el DOM (`#sotf-mods-t`, base64). El SSR reenvía la cookie como Bearer.
- Tokens = JWT HS256 (`{data:{userId,exp}}`) firmados con `JWT_SECRET` pero **nunca verificados**; validez real = existir en la tabla `Token`. `expiresAt` (2 días) no se comprueba al usarlos, pero **cada login de cualquier usuario borra todos los tokens caducados** → vida práctica ≈ 2 días. Reset de contraseña borra todos los tokens del usuario.
- Contraseñas: `Bun.password.hash` por defecto = **argon2id PHC** (`$argon2id$v=19$m=65536,t=2,p=1$…`, usuarios desde sep-2023). El backend original (mar–sep 2023, `sotf-mods-backend/backend/util/hash.js`) usaba **bcrypt `genSaltSync(10)`** (`$2b$10$…`), y `Bun.password.verify` acepta ambos (PHC y MCF), por lo que esos usuarios siguen entrando hoy. **Verificar en el snapshot**: `SELECT left(password,4), count(*) FROM "User" GROUP BY 1;`.
- Email: búsqueda case-insensitive; `email @unique` es case-sensitive → comprobar duplicados por `lower(email)` antes de migrar. `name` único solo exacto (las menciones lo buscan case-insensitive).

**Recomendaciones**
1. **Contraseñas**: verificar por prefijo — `$argon2` → `@node-rs/argon2` (2.2.1) · `$2a$/$2b$/$2y$` → `@node-rs/bcrypt` (1.10.9) o `bcryptjs` (3.0.3); **rehash transparente** a argon2id (parámetros v2) tras login correcto. Login por email (y opcionalmente por nombre de usuario) — sin cambiar la experiencia.
2. **Tokens legacy**: **revocarlos todos en el corte** (forzar re-login). Motivos: vida útil ≤ 2 días de todos modos, estuvieron expuestos a JS/XSS almacenado, se guardan en claro. Mostrar un banner “Hemos renovado sotf-mods — inicia sesión de nuevo; tu contraseña sigue siendo la misma”. v2 debe **borrar** la cookie `token` y `localStorage.token` (snippet en el primer render) para no dejar restos.
   - Alternativa (si se quiere cero fricción): importar filas `Token` no caducadas como sesiones v2 (guardadas como `sha256(token)`) con su `expiresAt` original y canjear la cookie `token` una sola vez por la cookie de sesión HttpOnly nueva. No lo recomiendo por el coste/beneficio.
3. **Reset de contraseña**: mantener `/reset-password?token=`; migrar `PasswordResetToken` no caducados (expiran en 1 h, impacto mínimo si se pierden).
4. **Sesiones v2**: token opaco aleatorio, almacenado hasheado, cookie `HttpOnly; Secure; SameSite=Lax` en `sotf-mods.com`; Bearer solo para **tokens personales de API** (nueva feature para modders/herramientas) con scopes. Eliminar env vars `JWT_SECRET` y dependencias `jose`/`jsonwebtoken`.
5. Si en el futuro RedManager/UpdatesChecker quieren acciones autenticadas (favoritos, “mis mods”), ofrecer **device-code / PAT** en el API v2, no reutilizar el esquema legacy.

---

## 6. (e) Contrato de la URL de descarga

### 6.1 Hoy (legacy)

`GET sotf-mods.com/mods/:u/:s/download/:v` → el frontend hace `fetch` a `api/…/slug/:u/:s/download/:v?ip=<XFF>&agent=<UA>` → el API busca la versión, **descarga el archivo entero de R2 a memoria**, inserta `ModDownload{ip, userAgent, modVersionId}`, incrementa `Mod.downloads` y devuelve el blob; el frontend lo **bufferiza otra vez** y lo reenvía con `Content-Disposition: attachment; filename="<Nombre> <versión>.<ext>"`. Cada petición cuenta (sin dedupe, sin distinguir HEAD/Range/bots). Si no existe → **200 con JSON de error** y `content-disposition: null` (RedManager lo guarda como “zip”).

### 6.2 v2 — contrato propuesto

```
GET|HEAD https://sotf-mods.com/mods/:userSlug/:modSlug/download/:version
  (+ alias T2: api.sotf-mods.com/api/mods/:mod_id/download/:version
                api.sotf-mods.com/api/mods/slug/:u/:s/download/:version)

1. Resolver mod con el algoritmo de §4.3 (tolera usuario erróneo/“undefined”, mayúsculas, slug viejo).
2. Resolver versión: string exacto → si es "latest" o "undefined" → versión isLatest. Si no existe → 404
   (página HTML si Accept: text/html; si no, JSON {status:false,error:"NOT_FOUND",...}). Nunca 200 con error.
3. Política: mod retirado/malware → 410/451; (decisión de producto) no aprobado → ver §8.
4. Contar (asíncrono, sin bloquear la respuesta), SOLO si:
   - método GET (HEAD no cuenta) y
   - sin cabecera Range o Range que empieza en 0 ("bytes=0-") y
   - no es un bot declarado (UA de crawlers); NO descartar UA vacío (RedManager/reqwest y .NET HttpClient no envían UA).
   Evento: {mod_version_id, ts, ip_hash (sal rotativa), country (CF-IPCountry), ua, referer, client}.
   Persistir en cola/batch → tabla de eventos + agregados diarios + contador del mod.
5. Responder:
   HTTP/1.1 302 Found
   Location: https://r2.sotf-mods.com/<key codificada>[?dl=<nombre-bonito>]
   Cache-Control: no-store, private
   X-Robots-Tag: noindex, nofollow
   Referrer-Policy: no-referrer
```

**Por qué 302 (y no 301/308)**: un 301 lo cachean navegadores/CDN y las siguientes descargas no pasarían por el contador. 302/307 son equivalentes para GET; 302 es el más compatible (reqwest, .NET, Node `fetch`, `wget` y navegadores lo siguen; `curl` necesita `-L` → documentarlo).

**Codificación de la key** (verificado con HEAD contra `r2.sotf-mods.com`):

| Caso real | Ejemplo de key | Resultado |
|---|---|---|
| espacio (40 URLs) | `1790458408372_arctic fox savage.png` | `%20` → 200 · `+` → **404** |
| apóstrofo (28) | `1775413983720_axel's-mod-menu_1.3.8.zip` | crudo o `%27` → 200 |
| `+` (1) | `1765726049138_virginia-wardrobe-18+_thumbnail.png` | crudo o `%2B` → 200 |
| paréntesis (31) | `…skeletal-chainsaw(alpha)_1.1.5.zip` | crudo o `%28%29` → 200 |
| `/` en la key (1) | `download/1722123985521_virginia-wardrobe-18 _0.0.3.zip` | archivo inexistente (ver §6.4) |

Regla: `Location = R2_PUBLIC_BASE + "/" + key.split("/").map(encodeURIComponent).join("/")`. Nunca codificación de formulario (`+`). En v2 guardar **`storage_key`** (key cruda) en lugar de la URL completa y derivar la URL pública; la capa compat sigue emitiendo `downloadUrl` exactamente como hoy (URL cruda sin codificar). Para subidas nuevas generar keys seguras `[a-z0-9._-]` (`mods/<mod_id>/<version>/<hash>.zip`).

### 6.3 Detalles que el 302 cambia y cómo compensarlos

- **Nombre del archivo y builds `.json`**: R2 no envía `Content-Disposition` → el navegador guarda `1775413983720_axel's-mod-menu_1.3.8.zip` (con prefijo de timestamp) y los builds **`.json` se abrirían en la pestaña** en vez de descargarse; el atributo `download` no sirve (cross-origin). Soluciones: (1) regla de Cloudflare (Snippet/Worker) en `r2.sotf-mods.com` que añade `Content-Disposition: attachment; filename*=UTF-8''<dl>` cuando viene `?dl=` (normalizar la cache key ignorando `dl`), **recomendado**; o (2) reescribir metadatos `ContentDisposition` en R2 con CopyObject durante la migración (tocar 612 objetos; hacerlo solo en ventana controlada).
- **Content-Type**: 48 zips están como `application/x-zip-compressed`, 16 imágenes como `application/octet-stream` → corregir metadatos en la migración o forzar por extensión en el Worker.
- **Caché**: hoy R2 responde `cf-cache-status: DYNAMIC` y sin `Cache-Control` → configurar caché en `r2.sotf-mods.com` (keys inmutables con timestamp → `public, max-age=31536000, immutable`). La **ruta de descarga** en `sotf-mods.com` debe quedar **fuera de caché** (regla CF bypass + `no-store`) para que cada petición llegue al contador.
- **Protección anti-bots**: excluir `/mods/*/download/*`, `api.sotf-mods.com/api/mods*`, `/api/kelvinseek/*` de *Bot Fight Mode*, *Browser Integrity Check* y desafíos JS (RedManager y los mods no ejecutan JS y no mandan User-Agent).
- **Tamaños**: 612 versiones = 1,41 GB (máx. 352 MB `VirginiaCustomizationsExpanded`); ya no pasan por los servidores (adiós al buffer en memoria).
- **Opcional**: hacer el 302 + conteo en el **edge** (Cloudflare Worker con cola) para latencia mínima; el origen solo agrega.

### 6.4 Integridad de archivos (hallazgo de datos)

HEAD a las 1 070 URLs de archivos referenciadas por los 257 mods: **1 069 en `r2.sotf-mods.com` y 200 OK**; **1 roto**: versión `0.0.3` de `CompanionWardrobe` (mod no aprobado, NSFW) sigue apuntando a `https://files.sotf-mods.com/download/1722123985521_virginia-wardrobe-18 _0.0.3.zip` (503) y no existe en R2 con esa key ni sin el prefijo `download/`. La migración debe marcar esa versión como `unavailable` (410 en su descarga) y eliminar la última referencia a `files.sotf-mods.com` (también el `og:image` por defecto de `mod.njk`/`build.njk` y el placeholder de `upload-build.js`). Imágenes: 381 de galería/miniatura suman 696 MB, mediana 1,1 MB, 207 > 1 MB (para el track de rendimiento).

---

## 7. Verificación del contrato (cómo probar que no rompemos nada)

1. **Golden fixtures** (ya capturados): `fixtures/01-compat/*.json` + `INDEX.tsv` (ruta, status, content-type). Tests de contrato: restaurar un snapshot de la DB de producción en local, levantar la capa compat y comparar respuesta a respuesta (normalizando contadores volátiles `downloads`, `lastWeekDownloads`, `updatedAt`).
2. **Tests por cliente**:
   - UpdatesChecker: test en CI con un contenedor .NET que deserializa las respuestas con el DTO de §1.2 (Newtonsoft) — o JSON Schema equivalente generado desde ese DTO.
   - RedManager: test TS con los tipos de `mods.ts` + flujo completo (listar todas las páginas con `?&approved=true&orderby=newest&page=N&nsfw=false`, detalle, descarga siguiendo 302 con un cliente sin User-Agent que no revisa status).
   - KelvinSeek: respuesta `text/plain` y formato `a|b`.
   - Descarga: claves con espacio/apóstrofo/`+`/paréntesis; HEAD no cuenta; `Range: bytes=100-` no cuenta; `/mods/undefined/<slug>/download/undefined` resuelve.
3. **Shadow traffic** antes del cambio de DNS: espejar GETs de `api.sotf-mods.com` (vía Worker) hacia v2 y comparar cuerpos.
4. **Tras el corte**: registrar todos los 404/410 (ruta, UA, referer) durante 30 días y añadir redirecciones; métricas por ruta compat para decidir el Sunset de T2.

---

## 8. Decisiones abiertas para el usuario

1. **Mods no aprobados en la API compat**: hoy son públicos (lista con `approved=false`, detalle y descarga). RedManager tiene una pestaña “unapproved” y UpdatesChecker los incluye. Opciones: (a) mantenerlos visibles como “pendientes de revisión” (compat total), (b) ocultarlos salvo al autor (más seguro; rompe esa pestaña de RedManager). Recomendación: (a) con estados nuevos (`pending` visible, `rejected`/`malware` ocultos y 410 en descarga).
2. **NSFW sin login en la API compat** (RedManager tiene pestaña NSFW): mantener en compat (solo metadatos), age-gate en la web.
3. **KelvinSeek**: mantener (mod activo) con rate-limit y presupuesto; decidir proveedor/modelo en el track de backend.
4. **Revivals (§3.4)**: aprobar proxy `/api/*` en el dominio principal, alias snake_case y resolver `undefined`.
5. **Re-login forzado** en el corte (recomendado) vs. puente de sesiones.
6. **Normalización de slugs** con apóstrofos/paréntesis (recomendado con `slug_history`).
7. **Política de conteo** en v2 (¿dedupe por IP-hash+versión en 24 h?). Afecta a la comparabilidad histórica: sugerencia — contar “descargas” igual que hoy (cada GET válido) y añadir métrica aparte de “descargas únicas”.
8. **Retirar el instalador OneClick** (75 MB en el repo del frontend) → 410.

---

## Apéndice A — Datos medidos (2026-09-29, solo lectura)

- `/api/stats`: users 3 883 · mods 257 · downloads 1 977 059 · developers 46. `/api/stats/builds`: 36 builds · 33 889 descargas · 8 autores.
- Tipos: Mod 200 · Build 36 · **null 19** · Library 2. Aprobados: 229 (173 Mod + 36 Build + 19 null + 1 Library); no aprobados 28.
- Versiones: 612 (576 zip + 36 json); 36 versiones no-semver (todas builds, UUIDv7). 0 mods con ≠ 1 `isLatest`; `latestVersion` siempre coincide.
- Comentarios: 251 top-level + 27 respuestas; 6 con imagen; 149 autores distintos.
- Categorías de mods: `library`(4), `misc`(1), `model-swap`(2), `qol`(3); 21 categorías de builds (ids 6–26).
- CORS verificado para `https://tauri.localhost`, `tauri://localhost` y `https://sotf-mods.com`.

## Apéndice B — Fuentes

- Código legacy: `/root/sotf-mods/sotf-mods-api/src/**`, `/root/sotf-mods/sotf-mods-frontend/src/{router.ts,middlewares,static/scripts,templates}` + historial git de ambos.
- Backend original 2023: `github.com/ChoqueCastroLD/sotf-mods-backend` (`backend/routes/*.js`, `backend/util/hash.js`).
- RedManager: `github.com/ToniMacaroni/RedManager` (`src/lib/mods.ts`, `src/lib/utils.ts`, `src-tauri/Cargo.toml`; historial de `mods.ts`; releases) y `tauri-apps/plugins-workspace@v1` `plugins/upload/src/lib.rs`.
- RedLoader: `github.com/ToniMacaroni/RedLoader` (`SonsSdk/ManifestData.cs`, `SonsSdk/Private/SdkEntryPoint.cs`).
- DLLs analizados (descargados directamente de R2): `UpdatesChecker 1.0.8`, `KelvinSeek 1.0.1`, `KelvinGPT 1.0.6`, `NicksKelvinGPT 1.0.0`, `BuildShare 1.0.10` y 209 más.
- Instalador: `/root/sotf-mods/sotf-mods-frontend/src/static/downloads/sotfmodsoneclick-setup1.0.0.exe` → `app.asar` (`main.js`, `preload.js`).
- Búsquedas: `gh search code` (sotf-mods, sotfmods, kelvinseek…), WebSearch `site:sotf-mods.com` (mods, builds, profile, loader), tutoriales `github.com/ImAxel0/sotf-mods-tutorials`.
- Docs: Bun `Bun.password` (argon2id por defecto; `verify` acepta PHC y MCF/bcrypt). Versiones npm consultadas el 2026-09-29: fastify 5.12.5, @fastify/cors 11.3.0, @node-rs/argon2 2.2.1, @node-rs/bcrypt 1.10.9, bcryptjs 3.0.3, semver 7.8.5.
