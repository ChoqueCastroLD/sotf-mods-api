---
title: Cómo instalar mods de Sons of the Forest
seoTitle: "Cómo instalar mods de Sons of the Forest (2026): Guía de RedLoader"
description: Instala RedLoader con RedManager, pon los mods en la carpeta Mods y compruébalos en el juego. Guía paso a paso con soluciones para antivirus y parches.
tldr: Instala RedLoader, el cargador de mods, con RedManager (o a mano), pon cada mod en la carpeta Mods dentro de la carpeta del juego y abre el juego. RedManager puede instalar cualquier mod de SOTF Mods con un clic. Lleva unos tres minutos, y la guía de abajo cubre cada paso y los problemas habituales.
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: Revisa tu juego
  redloader: Instala RedLoader
  mods: Añade mods
  verify: Compruébalo en el juego
  antivirus: Avisos del antivirus
  bepinex: ¿BepInEx o RedLoader?
  update: Actualizar y desinstalar
  dedicated: Servidores dedicados
  troubleshooting: Solución de problemas
  oneclick: Instalador de un clic
faq:
  - q: ¿Necesito tener el juego en Steam?
    a: Sí. Los mods de Sons of the Forest funcionan en la versión de PC del juego. RedLoader modifica los archivos del juego en tu instalación de Steam, así que necesitas el juego instalado desde Steam en Windows (o en Linux y Steam Deck con Proton).
  - q: ¿Me pueden banear por usar mods?
    a: Sons of the Forest no tiene antitrampas y la comunidad usa mods abiertamente. En multijugador, únete o crea partidas solo con jugadores que estén de acuerdo en usar mods, y que todos usen los mismos mods y versiones.
  - q: ¿Los mods romperán mi partida guardada?
    a: La mayoría de los mods no tocan tu partida. Los que añaden objetos, construcciones o cambios en el mundo pueden dejar rastros si los quitas a mitad de partida; la página del mod indica si se puede quitar sin riesgo. Haz una copia de tu carpeta de partidas antes de probar mods grandes.
  - q: ¿Por qué no pasa nada después de instalar un mod?
    a: Normalmente RedLoader no está instalado o no está actualizado, el mod se extrajo en la carpeta equivocada, falta una librería necesaria o el mod era para BepInEx. Sigue las comprobaciones de la sección de solución de problemas, empezando por la consola de RedLoader.
  - q: ¿Dónde están los archivos del juego?
    a: En Steam, haz clic derecho en Sons of the Forest, elige Administrar y luego Ver archivos locales. La carpeta que se abre contiene SonsOfTheForest.exe; RedLoader y tus mods van ahí.
  - q: ¿Los mods funcionan después de una actualización del juego?
    a: No siempre. Un parche del juego puede romper RedLoader o algunos mods hasta que se actualicen. Mira la página del mod, sus comentarios y reseñas para saber si funciona con la versión actual del juego.
---

# Revisa tu juego

Los mods funcionan con la **versión de PC de Sons of the Forest en Steam** (Windows, o Linux y Steam Deck con Proton). Actualiza el juego en Steam antes de empezar: RedLoader y la mayoría de los mods siguen el último parche.

Encuentra la carpeta del juego: en Steam, haz clic derecho en **Sons of the Forest** → **Administrar** → **Ver archivos locales**. La carpeta que se abre contiene `SonsOfTheForest.exe`. Normalmente es:

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> ¿Acaba de salir una actualización del juego? Mira la página del mod, sus comentarios y reseñas para saber si ya funciona con la nueva versión.

# Instala RedLoader

RedLoader es el cargador de mods hecho para Sons of the Forest. Todos los mods de SOTF Mods lo necesitan. Hay dos formas de instalarlo.

## Opción A: RedManager (recomendada)

RedManager es el gestor de mods gratuito para RedLoader, del mismo desarrollador. Instala RedLoader por ti y puede instalar cualquier mod de SOTF Mods, con sus dependencias, con un clic.

1. Descarga la última versión de RedManager desde su [página oficial de versiones](https://github.com/ToniMacaroni/RedManager/releases).
2. Ábrelo. Encuentra la carpeta del juego automáticamente (o te deja elegirla).
3. Haz clic en **Install RedLoader** y espera a que termine.

## Opción B: instalación manual

1. Descarga el último `RedLoader.zip` desde las [versiones oficiales de RedLoader](https://github.com/ToniMacaroni/RedLoader/releases).
2. Extrae todo en la carpeta del juego, junto a `SonsOfTheForest.exe`.
3. Abre el juego una vez. RedLoader abre una ventana de consola y crea sus carpetas: `_RedLoader`, `Mods` y `Libs`.

> [!WARNING]
> Descarga RedLoader y RedManager solo desde sus páginas oficiales de GitHub. Las copias en otros sitios pueden estar desactualizadas o manipuladas.

# Añade mods

**Con RedManager:** busca el mod, haz clic en **Install** y RedManager lo descarga junto con sus librerías necesarias en las carpetas correctas.

**A mano:**

1. En la página del mod, lee **Requisitos** e instala primero todas las librerías necesarias.
2. Haz clic en **Descargar** y abre el `.zip`.
3. Extráelo en la carpeta del juego, respetando las carpetas del zip. Los archivos del mod acaban en `Mods` (un `.dll`, a menudo con una carpeta del mismo nombre) y las librerías en `Libs` cuando traen una.
4. Si el zip solo contiene un `.dll`, ponlo directamente en la carpeta `Mods`.

> [!IMPORTANT]
> Los mods para servidores dedicados van en la carpeta del propio servidor, no en la del juego. Consulta [Servidores dedicados](#dedicated).

# Compruébalo en el juego

1. Abre el juego desde Steam como siempre. La consola de RedLoader se abre junto al juego y muestra cada mod que carga; los errores aparecen en rojo.
2. En la pantalla de título, pulsa **F1** para abrir el panel de RedLoader y comprueba que tus mods aparecen. Los mods con ajustes los muestran ahí.
3. Empieza o carga una partida y prueba el mod.

Si falta un mod en la lista, ve a [Solución de problemas](#troubleshooting).

# Avisos del antivirus (falsos positivos)

Algunos antivirus y Windows SmartScreen marcan RedLoader, RedManager o algún mod. Los cargadores de mods inyectan código en el juego, que es justo lo que buscan las heurísticas, así que los avisos son habituales incluso con archivos limpios.

Antes de fiarte de un archivo:

- **Descárgalo solo de la fuente oficial**: la página del mod en SOTF Mods o las versiones oficiales de RedLoader y RedManager en GitHub.
- **Compara el checksum.** Cada versión en SOTF Mods muestra el SHA-256 del archivo. En Windows, ejecuta `Get-FileHash .\archivo.zip` en PowerShell (o `certutil -hashfile archivo.zip SHA256`) y compara el resultado.
- **Revisa el análisis.** Cada versión publicada se analiza con VirusTotal; el informe está enlazado en la página de la versión. También puedes subir el archivo tú mismo a [VirusTotal](https://www.virustotal.com).

Si todo coincide, puedes restaurar el archivo de la cuarentena y añadir una exclusión **solo para la carpeta del juego**. Nunca desactives el antivirus por completo. Si algo no cuadra, reporta el mod desde su página: los moderadores revisan los reportes rápido.

# ¿BepInEx o RedLoader?

SOTF Mods publica mods para **RedLoader**. Los mods hechos para BepInEx (habituales en otros sitios) necesitan otro cargador: puestos en las carpetas de RedLoader simplemente no hacen nada y no muestran ningún error.

- Comprueba que el mod dice que es para RedLoader antes de instalarlo.
- No instales los dos cargadores a la vez. Si usaste BepInEx antes, borra sus archivos de la carpeta del juego (`BepInEx`, `doorstop_config.ini` y `winhttp.dll`).

# Actualizar y desinstalar

**Actualizar un mod:** RedManager muestra las actualizaciones disponibles. A mano, descarga la nueva versión y sobrescribe los archivos antiguos. Lee antes el registro de cambios: algunas actualizaciones necesitan una librería nueva o una configuración limpia.

**Actualizar RedLoader:** usa RedManager o extrae la nueva versión encima de la anterior. Tras un parche del juego, si el juego deja de iniciarse, espera a una nueva versión de RedLoader.

**Quitar un mod:** borra su `.dll` y su carpeta de `Mods`. Mira antes la página del mod: algunos mods no se pueden quitar a mitad de partida sin riesgo.

**Quitar RedLoader por completo:** borra `_RedLoader`, `Mods` y `Libs` y los demás archivos que el zip de RedLoader añadió junto a `SonsOfTheForest.exe`; después, en Steam, usa **Propiedades → Archivos instalados → Verificar la integridad de los archivos del juego**.

# Servidores dedicados

RedLoader también funciona en el servidor dedicado de Sons of the Forest.

1. Instala RedLoader en la carpeta del servidor (la que contiene `SonsOfTheForestDS.exe`), igual que en la instalación manual.
2. Instala solo mods cuya página diga que admiten servidores dedicados, en la carpeta `Mods` del servidor.
3. Revisa la nota de multijugador de cada mod: algunos solo hacen falta en el servidor y otros también en el juego de cada jugador. Todos deben usar las mismas versiones.

Muchos proveedores de servidores ofrecen RedLoader como opción de un clic en su panel. Si el tuyo no, sube los archivos con su gestor de archivos o por FTP.

# Solución de problemas

## No pasa nada: ni consola ni mods

RedLoader no se está ejecutando. Asegúrate de que sus archivos están junto a `SonsOfTheForest.exe` (no en una subcarpeta), de que abriste el juego desde Steam y de que el antivirus no los puso en cuarentena. Si dudas, reinstala RedLoader.

## El juego se cuelga o se cierra al arrancar

Suele pasar tras una actualización del juego. Busca en las [versiones de RedLoader](https://github.com/ToniMacaroni/RedLoader/releases) una que admita la nueva build. Para encontrar el mod culpable, saca todos los mods de `Mods` y vuelve a añadirlos de pocos en pocos.

## Un mod no aparece en la lista

Probablemente está en la carpeta equivocada, le falta una librería necesaria o es para BepInEx. Lee las líneas rojas de la consola de RedLoader: indican el archivo o la librería que falta.

## Windows protegió tu PC

SmartScreen avisa de programas que no ha visto a menudo. Si descargaste RedManager de su página oficial, haz clic en **Más información → Ejecutar de todas formas**. Consulta [Avisos del antivirus](#antivirus).

## RedManager no encuentra el juego

Indica la carpeta del juego a mano en los ajustes de RedManager: la carpeta que contiene `SonsOfTheForest.exe`.

## Los jugadores no pueden unirse o hay desincronización en multijugador

Todos deben usar los mismos mods y versiones, salvo que un mod diga que solo lo necesita el host. Comparad vuestras listas de mods y actualizad a las mismas versiones.

# El instalador de un clic está retirado

El antiguo instalador **SOTF Mods One-Click** (`sotfmodsoneclick-setup`) ya no funciona con el sitio y ya no se ofrece. Si lo instalaste, desinstálalo desde **Configuración de Windows → Aplicaciones**.

Usa [RedManager](https://github.com/ToniMacaroni/RedManager/releases) en su lugar: instala RedLoader y cualquier mod de SOTF Mods, con sus dependencias, con un clic.
