# Translation samples (real model run)

These are the outputs of the production translation pipeline (`packages/core/src/translations/pipeline.ts`: the same masking, chunking, prompts and validation `translateMod` uses) run against the real model, not the fake LLM of the unit tests.

- Date: 2026-10-01
- Provider: OpenRouter (`https://openrouter.ai/api/v1`), model `deepseek/deepseek-v4.1-flash`, reasoning off (as in production).
- Sources: the Markdown description of the first three mods of the live catalog (`/api/v2/mods?pageSize=3`: ForestTalk, Axel's Mod Menu, SonsAxLib), read-only. The public API only exposes the rendered HTML, so the Markdown is the "Description" section of the mod's public `.md` page (`/mods/<user>/<slug>.md`). A fourth, synthetic mod ("Realistic Backpacks", not a real listing) was added because the real descriptions are short and contain no images, tables, code fences, nested lists or HTML: it exercises the chunking (two chunks) and every masked construct.
- Targets: es, de, ja. Each mod: one call for name and short description of the 3 locales, one call per description chunk and locale.
- Usage of this run: 12 calls, 6030 input and 2783 output tokens (about 0.0012 USD) for the three real mods; 7 calls, 5406 / 4069 tokens (about 0.0017 USD) for the synthetic one.

## What was checked

For every output: Markdown structure (same headings, lists, nesting, tables, quotes, blank lines), links and image destinations, URLs, code spans and fenced code, HTML (`<details>`, `<summary>`), `@mentions`, version numbers (`v0.6.3`, `2.4.1`, `1.2.0+`), numbers and units, the mod's own name, product words (Sons of the Forest, RedLoader, BuildShare), and the absence of leftover placeholders or any other marker. All of them survived in all 12 outputs and no placeholder leaked. Language quality is natural in all three languages.

## Problems found and fixed

The first run was already structurally clean (no lost or leaked placeholders, no broken Markdown). Two quality issues appeared and were fixed in the prompts (`DESCRIPTION_SYSTEM_PROMPT`, `TRANSLATION_SYSTEM_PROMPT` in `text.ts`):

1. Japanese transliterated character names ("Kelvin" became a katakana spelling) although the prompt said to keep proper nouns. The prompts now name people, characters and creators explicitly and forbid transliterating them in any script.
2. Japanese output had stray spaces after full-width punctuation and next to links, and mixed "mod" / "MOD" / "Mod" in one text. The description prompt now asks for the typography of the target language and one consistent term for "mod".

The samples below are from the run after those fixes. Remaining nits that are deliberately left alone: the mod name inside the description body is kept in English (it is a protected term; the translated title is shown separately), comments inside code blocks stay in English (code is never touched), a few Japanese texts still write "MOD" in the short description (the listing call is separate from the description calls), and the leading space of the lines in ForestTalk is a quirk of the original text, preserved as it is.

## ForestTalk
Source name: ForestTalk

Source short description: Actually talk to Kelvin and Virginia. Kelvin, now deaf, still has plenty to say. Chat through his notepad or hit O for a quick shortcut. Give him real in-game orders. Deep customization included.

Source description (1 chunk(s)):

````markdown
ForestTalk turns Kelvin and Virginia into real companions, not silent bots you just watch.

 💬 How to talk to them
 With Kelvin, open his notepad and press T to type. You can also press O while nearby and looking at him, no notepad needed. Virginia works the same way: get close, look at her, and press O, if she's willing.

 🧠 Kelvin, your companion
 I put a lot of effort into making him aware of his surroundings: nearby danger, your state, the weather, what he's doing. This mod assumes the crash left him deaf, but he can still speak. He's not a bot you click through, he's your companion, and he'll always have something to say. Warm personality, a bit shaken by what he's been through, with a strong moral compass against the forest.

 You can also give him real orders through chat: bring logs, repair the camp, build a fire, stay put, follow you, and more. Real orders he carries out in-game.

 🌿 Virginia, an independent soul
 Virginia can talk with you too, on her own terms: a fully independent person. She can't be given orders or commands, she'll only chat if she feels like it.

 ⚠️ Real environmental awareness
 Both react to what's actually happening: danger, injuries, hunger or thirst, night, rain. I dug deep into the game's code so this isn't a chat bolted on top, they react to what's going on with you.

 👀 Bonus: let them see what you see
 Type !look plus your message (e.g. !look what do you think of our base?) to send a screenshot along with it. A fun little extra, not required. Heads up: capturing it pauses the game for a split second.

 ⚙️ Deep customization
 Choose between several AI providers: Player2 (a button to generate your API key instantly), OpenAI, Gemini, OpenRouter, or your own custom/local server. Adjust how often they speak on their own, toggle danger comments, write custom personality notes, and more.

 Surviving the forest is no longer something you do alone. Kelvin and Virginia become real friends to face the island with.
````

### ForestTalk to Spanish (es)

- Name: ForestTalk
- Short description: Habla de verdad con Kelvin y Virginia. Kelvin, ahora sordo, todavía tiene mucho que decir. Chatea a través de su libreta o pulsa O para un atajo rápido. Dale órdenes reales dentro del juego. Incluye personalización profunda.

Description:

````markdown
ForestTalk convierte a Kelvin y Virginia en verdaderos compañeros, no en bots silenciosos que solo observas.

 💬 Cómo hablar con ellos
 Con Kelvin, abre su bloc de notas y pulsa T para escribir. También puedes pulsar O cuando estés cerca y mirándolo, sin necesidad de bloc de notas. Virginia funciona igual: acércate, mírala y pulsa O, si ella está dispuesta.

 🧠 Kelvin, tu compañero
 Puse mucho esfuerzo en que fuera consciente de su entorno: peligro cercano, tu estado, el clima, lo que está haciendo. Este mod asume que el accidente lo dejó sordo, pero aún puede hablar. No es un bot por el que haces clic, es tu compañero, y siempre tendrá algo que decir. Personalidad cálida, un poco conmocionado por lo que ha vivido, con una fuerte brújula moral contra el bosque.

 También puedes darle órdenes reales a través del chat: traer troncos, reparar el campamento, encender una fogata, quedarse quieto, seguirte y más. Órdenes reales que lleva a cabo en el juego.

 🌿 Virginia, un alma independiente
 Virginia también puede hablar contigo, según sus propias condiciones: una persona totalmente independiente. No se le pueden dar órdenes ni comandos, solo charlará si le apetece.

 ⚠️ Conciencia ambiental real
 Ambos reaccionan a lo que realmente está pasando: peligro, heridas, hambre o sed, noche, lluvia. Escarbé a fondo en el código del juego para que esto no sea un chat añadido por encima, reaccionan a lo que ocurre contigo.

 👀 Extra: deja que vean lo que tú ves
 Escribe !look más tu mensaje (p. ej. !look ¿qué opinas de nuestra base?) para enviar una captura de pantalla junto con él. Un pequeño extra divertido, no es obligatorio. Aviso: capturarla pausa el juego por un instante.

 ⚙️ Personalización profunda
 Elige entre varios proveedores de IA: Player2 (un botón para generar tu clave de API al instante), OpenAI, Gemini, OpenRouter, o tu propio servidor personalizado/local. Ajusta con qué frecuencia hablan por su cuenta, activa o desactiva los comentarios de peligro, escribe notas de personalidad personalizadas y más.

 Sobrevivir al bosque ya no es algo que haces solo. Kelvin y Virginia se convierten en verdaderos amigos con los que enfrentar la isla.
````

### ForestTalk to German (de)

- Name: ForestTalk
- Short description: Sprich tatsächlich mit Kelvin und Virginia. Kelvin, jetzt taub, hat noch viel zu sagen. Chatte über seinen Notizblock oder drücke O für eine schnelle Abkürzung. Gib ihm echte Befehle im Spiel. Tiefe Anpassung inklusive.

Description:

````markdown
ForestTalk verwandelt Kelvin und Virginia in echte Gefährten, nicht in stille Bots, denen du nur zusiehst.

 💬 Wie du mit ihnen sprichst
 Bei Kelvin öffnest du seinen Notizblock und drückst T zum Tippen. Du kannst auch O drücken, während du in der Nähe bist und ihn ansiehst, kein Notizblock nötig. Bei Virginia funktioniert es genauso: geh nah heran, sieh sie an und drücke O, wenn sie bereit ist.

 🧠 Kelvin, dein Gefährte
 Ich habe viel Mühe darauf verwendet, ihn für seine Umgebung zu sensibilisieren: nahe Gefahr, dein Zustand, das Wetter, was er gerade tut. Diese Mod geht davon aus, dass der Absturz ihn taub gemacht hat, aber er kann noch sprechen. Er ist kein Bot, den du durchklickst, er ist dein Gefährte, und er wird immer etwas zu sagen haben. Warme Persönlichkeit, ein wenig erschüttert von dem, was er durchgemacht hat, mit einem starken moralischen Kompass gegen den Wald.

 Du kannst ihm auch echte Befehle über den Chat geben: Holz bringen, das Lager reparieren, ein Feuer machen, bleiben, wo er ist, dir folgen und mehr. Echte Befehle, die er im Spiel ausführt.

 🌿 Virginia, eine unabhängige Seele
 Virginia kann auch mit dir sprechen, zu ihren eigenen Bedingungen: eine völlig unabhängige Person. Ihr können keine Befehle oder Anweisungen gegeben werden, sie plaudert nur, wenn ihr danach ist.

 ⚠️ Echte Umgebungswahrnehmung
 Beide reagieren auf das, was tatsächlich passiert: Gefahr, Verletzungen, Hunger oder Durst, Nacht, Regen. Ich habe mich tief in den Code des Spiels gegraben, damit das kein aufgesetzter Chat ist, sie reagieren auf das, was mit dir los ist.

 👀 Bonus: lass sie sehen, was du siehst
 Tippe !look plus deine Nachricht (z. B. !look was hältst du von unserem Lager?) ein, um einen Screenshot mitzuschicken. Ein lustiges kleines Extra, nicht erforderlich. Zur Info: Die Aufnahme pausiert das Spiel für einen Sekundenbruchteil.

 ⚙️ Tiefe Anpassung
 Wähle zwischen mehreren KI-Anbietern: Player2 (ein Button, um deinen API-Schlüssel sofort zu generieren), OpenAI, Gemini, OpenRouter oder deinen eigenen benutzerdefinierten/lokalen Server. Passe an, wie oft sie von selbst sprechen, schalte Gefahrenkommentare um, schreibe benutzerdefinierte Persönlichkeitsnotizen und mehr.

 Den Wald zu überleben ist nichts mehr, was du allein tust. Kelvin und Virginia werden echte Freunde, mit denen du dich der Insel stellst.
````

### ForestTalk to Japanese (ja)

- Name: ForestTalk
- Short description: KelvinとVirginiaと実際に会話できる。耳が聞こえなくなったKelvinは、まだたくさん話したいことがある。彼のメモ帳でチャットするか、Oキーで素早くショートカット。ゲーム内で実際に指示を出せる。深いカスタマイズ付き。

Description:

````markdown
ForestTalkはKelvinとVirginiaを、ただ眺めるだけの無口なボットではなく、本当の仲間に変えます。

 💬 彼らと話す方法
 Kelvinの場合、彼のメモ帳を開いてTを押して入力します。近くで彼を見ながらOを押すこともできます。メモ帳は必要ありません。Virginiaも同じように機能します。近づいて彼女を見て、彼女がその気ならOを押してください。

 🧠 Kelvin、あなたの仲間
 彼が周囲を認識できるようにするために、私は多大な労力を注ぎました。近くの危険、あなたの状態、天候、彼が何をしているか。このmodは墜落事故で彼が聴覚を失ったと想定していますが、彼はまだ話すことができます。彼はあなたがクリックして進めるボットではなく、あなたの仲間であり、いつも何か話すことがあります。温かい人柄で、経験したことに少し心を揺さぶられながらも、森に対して強い道徳心を持っています。

 チャットを通じて彼に本当の命令を出すこともできます。丸太を運ぶ、キャンプを修理する、火を起こす、その場に留まる、あなたについていく、などなど。彼がゲーム内で実行する本当の命令です。

 🌿 Virginia、独立した魂
 Virginiaもまた、彼女自身の条件で、あなたと話すことができます。完全に独立した人物です。彼女に命令や指示を与えることはできず、彼女が気が向いたときにだけチャットします。

 ⚠️ 本当の環境認識
 二人とも実際に起きていることに反応します。危険、怪我、飢えや渇き、夜、雨。これが後付けのチャットではないように、私はゲームのコードを深く掘り下げました。彼らはあなたに起きていることに反応します。

 👀 おまけ：あなたが見るものを彼らにも見せる
 !lookとあなたのメッセージを入力すると（例：!look 私たちの基地についてどう思う？）、スクリーンショットも一緒に送信されます。楽しいちょっとしたおまけで、必須ではありません。注意：キャプチャするとゲームが一瞬停止します。

 ⚙️ 深いカスタマイズ
 いくつかのAIプロバイダーから選べます。Player2（APIキーを即座に生成するボタン付き）、OpenAI、Gemini、OpenRouter、または独自のカスタム/ローカルサーバー。彼らが自発的に話す頻度を調整したり、危険に関するコメントを切り替えたり、カスタムの性格メモを書いたり、などなど。

 森を生き延びることは、もはや一人ですることではありません。KelvinとVirginiaは、島に立ち向かう本当の友達になります。
````

## Axel's Mod Menu
Source name: Axel's Mod Menu

Source short description: Featurefull mod menu for Sons of The Forest

Source description (1 chunk(s)):

````markdown
### Warning[#](#md-warning)

Needs my `SonsAxLib v1.2.0+` library to work, download it here: [https://sotf-mods.com/mods/imaxel/sonsaxlib](https://sotf-mods.com/mods/imaxel/sonsaxlib)

##### How to use[#](#md-how-to-use)

Default opening key is insert key. It can be changed from the mods settings.

 Showcase video: [https://youtu.be/OIoCRpvJtUI](https://youtu.be/OIoCRpvJtUI)
````

### Axel's Mod Menu to Spanish (es)

- Name: Menú de Mods de Axel
- Short description: Menú de mods con muchas funciones para Sons of The Forest

Description:

````markdown
### Advertencia[#](#md-warning)

Necesita mi biblioteca `SonsAxLib v1.2.0+` para funcionar, descárgala aquí: [https://sotf-mods.com/mods/imaxel/sonsaxlib](https://sotf-mods.com/mods/imaxel/sonsaxlib)

##### Cómo usar[#](#md-how-to-use)

La tecla de apertura predeterminada es la tecla Insert. Se puede cambiar desde los ajustes del mod.

 Vídeo de demostración: [https://youtu.be/OIoCRpvJtUI](https://youtu.be/OIoCRpvJtUI)
````

### Axel's Mod Menu to German (de)

- Name: Axels Mod-Menü
- Short description: Funktionsreiches Mod-Menü für Sons of The Forest

Description:

````markdown
### Warnung[#](#md-warning)

Benötigt meine `SonsAxLib v1.2.0+`-Bibliothek, um zu funktionieren, lade sie hier herunter: [https://sotf-mods.com/mods/imaxel/sonsaxlib](https://sotf-mods.com/mods/imaxel/sonsaxlib)

##### Verwendung[#](#md-how-to-use)

Die standardmäßige Öffnungstaste ist die Einfügen-Taste. Sie kann in den Einstellungen der Mod geändert werden.

 Vorstellungsvideo: [https://youtu.be/OIoCRpvJtUI](https://youtu.be/OIoCRpvJtUI)
````

### Axel's Mod Menu to Japanese (ja)

- Name: AxelのModメニュー
- Short description: Sons of The Forest向けの多機能Modメニュー

Description:

````markdown
### 警告[#](#md-warning)

動作には私の`SonsAxLib v1.2.0+`ライブラリが必要です。こちらからダウンロードしてください：[https://sotf-mods.com/mods/imaxel/sonsaxlib](https://sotf-mods.com/mods/imaxel/sonsaxlib)

##### 使い方[#](#md-how-to-use)

デフォルトの開くキーはInsertキーです。modの設定から変更できます。

 紹介動画：[https://youtu.be/OIoCRpvJtUI](https://youtu.be/OIoCRpvJtUI)
````

## SonsAxLib
Source name: SonsAxLib

Source short description: Small library I made which is needed for some of my mods (e.g mod menu)

Source description (1 chunk(s)):

````markdown
Just drag and drop the `Libs` folder which is inside the .zip into the game folder (where mods folder is located)
````

### SonsAxLib to Spanish (es)

- Name: SonsAxLib
- Short description: Pequeña biblioteca que he creado y que es necesaria para algunos de mis mods (p. ej., el menú de mods)

Description:

````markdown
Simplemente arrastra y suelta la carpeta `Libs` que está dentro del .zip en la carpeta del juego (donde se encuentra la carpeta mods)
````

### SonsAxLib to German (de)

- Name: SonsAxLib
- Short description: Kleine Bibliothek, die ich erstellt habe und die für einige meiner Mods benötigt wird (z. B. Mod-Menü)

Description:

````markdown
Ziehe einfach den Ordner `Libs`, der sich in der .zip befindet, per Drag and Drop in den Spielordner (dort, wo der Mods-Ordner liegt)
````

### SonsAxLib to Japanese (ja)

- Name: SonsAxLib
- Short description: 私が作成した小さなライブラリで、いくつかのMOD（例：MODメニュー）に必要です

Description:

````markdown
.zipの中にある`Libs`フォルダをゲームフォルダ（modsフォルダがある場所）にドラッグ＆ドロップするだけです
````

## Realistic Backpacks
Source name: Realistic Backpacks

Source short description: Adds realistic backpacks with weight and visible gear to Sons of the Forest.

Source description (2 chunk(s)):

````markdown
# Realistic Backpacks 2.4.1

Adds **realistic backpacks** to *Sons of the Forest* with weight, capacity and visible gear. Requires [RedLoader](https://github.com/RedLoader/RedLoader) `v0.6.3` or newer and the optional [SonsAxLib](https://sotf-mods.com/mods/imaxel/sonsaxlib) 1.2.1.

![Backpack preview](https://cdn.sotf-mods.com/img/backpack-preview.png)

## Features

- Three backpack sizes: small (12 slots), medium (24 slots) and large (36 slots).
- Heavier loads slow you down; drop items with the `G` key or run `backpack.drop all` in the console.
- Works in multiplayer: every client needs version 2.4.1 or higher.
  - Host-only setting: `AllowSharedStorage`.
  - Client setting: `ShowBackpackOnBack`.
- Compatible with BuildShare blueprints and the default crafting menu.

## Installation

1. Install RedLoader through RedManager.
2. Download `RealisticBackpacks.dll` and copy it into `_RedLoader/Mods`.
3. Start the game and press F1 to confirm that it loaded.

## Configuration

Edit `UserData/RealisticBackpacks.cfg`:

```ini
[General]
MaxWeight = 45.5
SlotCount = 24
; set to false to hide the backpack model
ShowModel = true
```

| Setting | Default | Description |
|---------|---------|-------------|
| MaxWeight | 45.5 | Maximum carry weight in kg |
| SlotCount | 24 | Number of slots |
| ShowModel | true | Show the backpack on the player's back |

> Note: changing `SlotCount` in the middle of a save will drop the items that no longer fit.

## Known issues

If you see the error `NullReferenceException at BackpackManager.Init()` after updating, delete the old config file and restart. Thanks to @Gerik22 and @ImAxel for testing, and to the whole community on <https://discord.gg/sotf-mods> for the feedback.

<details>
<summary>Why does the mod need a restart?</summary>
Because the inventory is rebuilt when the world loads, not while you play.
</details>

## Changelog

### 2.4.1

- Fixed a crash when dropping a stack of arrows while swimming.
- Improved performance on low-end PCs: the backpack model now uses 40% fewer polygons.

### 2.4.0

- Added the large backpack and the `ShowBackpackOnBack` setting.
- Reworked the weight system, so old saves from 2.3.x will be converted automatically the first time you load them. This might take a few seconds on huge saves, so please be patient and do not close the game while the conversion is running.

### 2.3.0

- Initial multiplayer support. Many thanks to everyone who tested the beta builds and sent logs, it really helped to track down the desync bugs that appeared when two players opened the same chest at the same time.


## Frequently asked questions

### Question 1: does the mod work with other inventory mods?

It depends on the mod. Mods that replace the inventory screen entirely, such as the ones listed in the [compatibility page](https://sotf-mods.com/compat), will conflict with the backpack UI. If you use version 2.1 or older, update first, then test again and report the result in the comments section so that other players can see it.

### Question 2: does the mod work with other inventory mods?

It depends on the mod. Mods that replace the inventory screen entirely, such as the ones listed in the [compatibility page](https://sotf-mods.com/compat), will conflict with the backpack UI. If you use version 2.2 or older, update first, then test again and report the result in the comments section so that other players can see it.

### Question 3: does the mod work with other inventory mods?

It depends on the mod. Mods that replace the inventory screen entirely, such as the ones listed in the [compatibility page](https://sotf-mods.com/compat), will conflict with the backpack UI. If you use version 2.3 or older, update first, then test again and report the result in the comments section so that other players can see it.

### Question 4: does the mod work with other inventory mods?

It depends on the mod. Mods that replace the inventory screen entirely, such as the ones listed in the [compatibility page](https://sotf-mods.com/compat), will conflict with the backpack UI. If you use version 2.4 or older, update first, then test again and report the result in the comments section so that other players can see it.
````

### Realistic Backpacks to Spanish (es)

- Name: Mochilas realistas
- Short description: Añade mochilas realistas con peso y equipo visible a Sons of the Forest.

Description:

````markdown
# Realistic Backpacks 2.4.1

Añade **mochilas realistas** a *Sons of the Forest* con peso, capacidad y equipo visible. Requiere [RedLoader](https://github.com/RedLoader/RedLoader) `v0.6.3` o superior y la opcional [SonsAxLib](https://sotf-mods.com/mods/imaxel/sonsaxlib) 1.2.1.

![Vista previa de la mochila](https://cdn.sotf-mods.com/img/backpack-preview.png)

## Características

- Tres tamaños de mochila: pequeña (12 ranuras), mediana (24 ranuras) y grande (36 ranuras).
- Las cargas más pesadas te ralentizan; suelta objetos con la tecla `G` o ejecuta `backpack.drop all` en la consola.
- Funciona en multijugador: cada cliente necesita la versión 2.4.1 o superior.
  - Ajuste solo para el anfitrión: `AllowSharedStorage`.
  - Ajuste del cliente: `ShowBackpackOnBack`.
- Compatible con los planos de BuildShare y el menú de fabricación predeterminado.

## Instalación

1. Instala RedLoader a través de RedManager.
2. Descarga `RealisticBackpacks.dll` y cópialo en `_RedLoader/Mods`.
3. Inicia el juego y pulsa F1 para confirmar que se ha cargado.

## Configuración

Edita `UserData/RealisticBackpacks.cfg`:

```ini
[General]
MaxWeight = 45.5
SlotCount = 24
; set to false to hide the backpack model
ShowModel = true
```

| Ajuste | Predeterminado | Descripción |
|---------|---------|-------------|
| MaxWeight | 45.5 | Peso máximo transportable en kg |
| SlotCount | 24 | Número de ranuras |
| ShowModel | true | Muestra la mochila en la espalda del jugador |

> Nota: cambiar `SlotCount` en mitad de una partida guardada hará que se caigan los objetos que ya no quepan.

## Problemas conocidos

Si ves el error `NullReferenceException at BackpackManager.Init()` después de actualizar, elimina el archivo de configuración antiguo y reinicia. Gracias a @Gerik22 y @ImAxel por las pruebas, y a toda la comunidad en <https://discord.gg/sotf-mods> por los comentarios.

<details>
<summary>¿Por qué el mod necesita un reinicio?</summary>
Porque el inventario se reconstruye cuando se carga el mundo, no mientras juegas.
</details>

## Registro de cambios

### 2.4.1

- Corregido un fallo al soltar una pila de flechas mientras nadabas.
- Mejorado el rendimiento en PCs de gama baja: el modelo de la mochila ahora usa un 40 % menos de polígonos.

### 2.4.0

- Añadida la mochila grande y el ajuste `ShowBackpackOnBack`.
- Rediseñado el sistema de peso, por lo que las partidas guardadas antiguas de 2.3.x se convertirán automáticamente la primera vez que las cargues. Esto puede tardar unos segundos en partidas enormes, así que ten paciencia y no cierres el juego mientras se realiza la conversión.

### 2.3.0

- Soporte multijugador inicial. Muchas gracias a todos los que probaron las versiones beta y enviaron registros, ayudó mucho a localizar los errores de desincronización que aparecían cuando dos jugadores abrían el mismo cofre a la vez.


## Preguntas frecuentes

### Pregunta 1: ¿funciona el mod con otros mods de inventario?

Depende del mod. Los mods que reemplazan por completo la pantalla del inventario, como los que aparecen en la [página de compatibilidad](https://sotf-mods.com/compat), entrarán en conflicto con la interfaz de la mochila. Si usas la versión 2.1 o anterior, actualiza primero, luego vuelve a probar y publica el resultado en la sección de comentarios para que otros jugadores puedan verlo.

### Pregunta 2: ¿funciona el mod con otros mods de inventario?

Depende del mod. Los mods que reemplazan por completo la pantalla del inventario, como los que aparecen en la [página de compatibilidad](https://sotf-mods.com/compat), entrarán en conflicto con la interfaz de la mochila. Si usas la versión 2.2 o anterior, actualiza primero, luego vuelve a probar y publica el resultado en la sección de comentarios para que otros jugadores puedan verlo.

### Pregunta 3: ¿funciona el mod con otros mods de inventario?

Depende del mod. Los mods que reemplazan por completo la pantalla de inventario, como los que se enumeran en la [página de compatibilidad](https://sotf-mods.com/compat), entrarán en conflicto con la interfaz de la mochila. Si usas la versión 2.3 o anterior, actualiza primero, luego vuelve a probar e informa del resultado en la sección de comentarios para que otros jugadores puedan verlo.

### Pregunta 4: ¿el mod funciona con otros mods de inventario?

Depende del mod. Los mods que reemplazan por completo la pantalla de inventario, como los que se enumeran en la [página de compatibilidad](https://sotf-mods.com/compat), entrarán en conflicto con la interfaz de la mochila. Si usas la versión 2.4 o anterior, actualiza primero, luego vuelve a probar e informa del resultado en la sección de comentarios para que otros jugadores puedan verlo.
````

### Realistic Backpacks to German (de)

- Name: Realistische Rucksäcke
- Short description: Fügt realistische Rucksäcke mit Gewicht und sichtbarer Ausrüstung zu Sons of the Forest hinzu.

Description:

````markdown
# Realistic Backpacks 2.4.1

Fügt *Sons of the Forest* **realistische Rucksäcke** mit Gewicht, Kapazität und sichtbarer Ausrüstung hinzu. Erfordert [RedLoader](https://github.com/RedLoader/RedLoader) `v0.6.3` oder neuer und die optionale [SonsAxLib](https://sotf-mods.com/mods/imaxel/sonsaxlib) 1.2.1.

![Rucksack-Vorschau](https://cdn.sotf-mods.com/img/backpack-preview.png)

## Funktionen

- Drei Rucksackgrößen: klein (12 Plätze), mittel (24 Plätze) und groß (36 Plätze).
- Schwerere Lasten verlangsamen dich; lege Gegenstände mit der Taste `G` ab oder führe `backpack.drop all` in der Konsole aus.
- Funktioniert im Mehrspielermodus: jeder Client benötigt Version 2.4.1 oder höher.
  - Nur-Host-Einstellung: `AllowSharedStorage`.
  - Client-Einstellung: `ShowBackpackOnBack`.
- Kompatibel mit BuildShare-Blueprints und dem Standard-Handwerksmenü.

## Installation

1. Installiere RedLoader über RedManager.
2. Lade `RealisticBackpacks.dll` herunter und kopiere es nach `_RedLoader/Mods`.
3. Starte das Spiel und drücke F1, um zu bestätigen, dass es geladen wurde.

## Konfiguration

Bearbeite `UserData/RealisticBackpacks.cfg`:

```ini
[General]
MaxWeight = 45.5
SlotCount = 24
; set to false to hide the backpack model
ShowModel = true
```

| Einstellung | Standard | Beschreibung |
|---------|---------|-------------|
| MaxWeight | 45.5 | Maximales Tragegewicht in kg |
| SlotCount | 24 | Anzahl der Plätze |
| ShowModel | true | Zeigt den Rucksack auf dem Rücken des Spielers |

> Hinweis: Wenn du `SlotCount` mitten in einem Speicherstand änderst, werden die Gegenstände abgelegt, die nicht mehr hineinpassen.

## Bekannte Probleme

Wenn du nach dem Aktualisieren den Fehler `NullReferenceException at BackpackManager.Init()` siehst, lösche die alte Konfigurationsdatei und starte neu. Danke an @Gerik22 und @ImAxel fürs Testen und an die gesamte Community auf <https://discord.gg/sotf-mods> für das Feedback.

<details>
<summary>Warum benötigt der Mod einen Neustart?</summary>
Weil das Inventar beim Laden der Welt neu aufgebaut wird, nicht während du spielst.
</details>

## Änderungsprotokoll

### 2.4.1

- Ein Absturz beim Ablegen eines Pfeilstapels während des Schwimmens wurde behoben.
- Verbesserte Leistung auf schwachen PCs: Das Rucksackmodell verwendet jetzt 40 % weniger Polygone.

### 2.4.0

- Der große Rucksack und die Einstellung `ShowBackpackOnBack` wurden hinzugefügt.
- Das Gewichtssystem wurde überarbeitet, sodass alte Speicherstände aus 2.3.x beim ersten Laden automatisch konvertiert werden. Bei riesigen Speicherständen kann dies einige Sekunden dauern, also bitte geduldig sein und das Spiel nicht schließen, während die Konvertierung läuft.

### 2.3.0

- Erste Mehrspieler-Unterstützung. Vielen Dank an alle, die die Beta-Builds getestet und Logs eingesendet haben, das hat wirklich geholfen, die Desync-Fehler aufzuspüren, die auftraten, wenn zwei Spieler gleichzeitig dieselbe Truhe öffneten.


## Häufig gestellte Fragen

### Frage 1: Funktioniert der Mod mit anderen Inventar-Mods?

Das hängt vom Mod ab. Mods, die den Inventarbildschirm vollständig ersetzen, wie die auf der [Kompatibilitätsseite](https://sotf-mods.com/compat) aufgeführten, stehen in Konflikt mit der Rucksack-Benutzeroberfläche. Wenn du Version 2.1 oder älter verwendest, aktualisiere zuerst, teste dann erneut und melde das Ergebnis im Kommentarbereich, damit andere Spieler es sehen können.

### Frage 2: Funktioniert der Mod mit anderen Inventar-Mods?

Das hängt vom Mod ab. Mods, die den Inventarbildschirm vollständig ersetzen, wie die auf der [Kompatibilitätsseite](https://sotf-mods.com/compat) aufgeführten, stehen in Konflikt mit der Rucksack-Benutzeroberfläche. Wenn du Version 2.2 oder älter verwendest, aktualisiere zuerst, teste dann erneut und melde das Ergebnis im Kommentarbereich, damit andere Spieler es sehen können.

### Frage 3: Funktioniert der Mod mit anderen Inventar-Mods?

Das hängt vom Mod ab. Mods, die den Inventarbildschirm vollständig ersetzen, wie die auf der [Kompatibilitätsseite](https://sotf-mods.com/compat) aufgeführten, geraten mit der Rucksack-Benutzeroberfläche in Konflikt. Wenn du Version 2.3 oder älter verwendest, aktualisiere zuerst, teste dann erneut und melde das Ergebnis im Kommentarbereich, damit andere Spieler es sehen können.

### Frage 4: Funktioniert der Mod mit anderen Inventar-Mods?

Das hängt vom Mod ab. Mods, die den Inventarbildschirm vollständig ersetzen, wie die auf der [Kompatibilitätsseite](https://sotf-mods.com/compat) aufgeführten, geraten mit der Rucksack-Benutzeroberfläche in Konflikt. Wenn du Version 2.4 oder älter verwendest, aktualisiere zuerst, teste dann erneut und melde das Ergebnis im Kommentarbereich, damit andere Spieler es sehen können.
````

### Realistic Backpacks to Japanese (ja)

- Name: リアルなバックパック
- Short description: Sons of the Forestに重量と目に見える装備を備えたリアルなバックパックを追加します。

Description:

````markdown
# Realistic Backpacks 2.4.1

*Sons of the Forest* に**リアルなバックパック**を追加します。重量、容量、目に見える装備を備えています。必要なものは [RedLoader](https://github.com/RedLoader/RedLoader) `v0.6.3` 以降と、任意で [SonsAxLib](https://sotf-mods.com/mods/imaxel/sonsaxlib) 1.2.1 です。

![バックパックのプレビュー](https://cdn.sotf-mods.com/img/backpack-preview.png)

## 機能

- 3 つのバックパックサイズ：小型（12 スロット）、中型（24 スロット）、大型（36 スロット）。
- 荷物が重いほど移動が遅くなります。`G` キーでアイテムを落とすか、コンソールで `backpack.drop all` を実行してください。
- マルチプレイに対応：すべてのクライアントがバージョン 2.4.1 以上である必要があります。
  - ホスト専用設定：`AllowSharedStorage`。
  - クライアント設定：`ShowBackpackOnBack`。
- BuildShare のブループリントおよびデフォルトのクラフトメニューと互換性があります。

## インストール

1. RedManager を通して RedLoader をインストールします。
2. `RealisticBackpacks.dll` をダウンロードして `_RedLoader/Mods` にコピーします。
3. ゲームを起動し、F1 を押して読み込まれたことを確認します。

## 設定

`UserData/RealisticBackpacks.cfg` を編集します：

```ini
[General]
MaxWeight = 45.5
SlotCount = 24
; set to false to hide the backpack model
ShowModel = true
```

| 設定 | デフォルト | 説明 |
|---------|---------|-------------|
| MaxWeight | 45.5 | 最大携行重量（kg） |
| SlotCount | 24 | スロット数 |
| ShowModel | true | プレイヤーの背中にバックパックを表示する |

> 注意：セーブの途中で `SlotCount` を変更すると、収まりきらなくなったアイテムがドロップされます。

## 既知の問題

アップデート後にエラー `NullReferenceException at BackpackManager.Init()` が表示される場合は、古い設定ファイルを削除して再起動してください。テストに協力してくれた @Gerik22 と @ImAxel、そして <https://discord.gg/sotf-mods> のコミュニティ全体にフィードバックをいただき感謝します。

<details>
<summary>なぜこの mod には再起動が必要なのですか？</summary>
インベントリはプレイ中ではなく、ワールドの読み込み時に再構築されるからです。
</details>

## 変更履歴

### 2.4.1

- 泳いでいる最中に矢のスタックをドロップした際のクラッシュを修正しました。
- 低スペック PC でのパフォーマンスを改善しました：バックパックのモデルが使用するポリゴン数が 40% 削減されました。

### 2.4.0

- 大型バックパックと `ShowBackpackOnBack` 設定を追加しました。
- 重量システムを作り直したため、2.3.x の古いセーブデータは初回読み込み時に自動的に変換されます。巨大なセーブデータでは数秒かかる場合があるため、しばらくお待ちいただき、変換中はゲームを閉じないでください。

### 2.3.0

- 初のマルチプレイ対応。ベータビルドをテストしてログを送ってくれた皆さん、本当にありがとうございました。2 人のプレイヤーが同時に同じチェストを開いたときに発生するデシンクのバグを突き止めるのに大いに役立ちました。


## よくある質問

### 質問 1：この mod は他のインベントリ mod と一緒に動作しますか？

それは mod によります。インベントリ画面を完全に置き換える mod（[互換性ページ](https://sotf-mods.com/compat) に掲載されているものなど）は、バックパックの UI と競合します。バージョン 2.1 以前を使用している場合は、まずアップデートしてから再度テストし、結果をコメント欄に報告してください。そうすれば他のプレイヤーもそれを確認できます。

### 質問 2：この mod は他のインベントリ mod と一緒に動作しますか？

それは mod によります。インベントリ画面を完全に置き換える mod（[互換性ページ](https://sotf-mods.com/compat) に掲載されているものなど）は、バックパックの UI と競合します。バージョン 2.2 以前を使用している場合は、まずアップデートしてから再度テストし、結果をコメント欄に報告してください。そうすれば他のプレイヤーもそれを確認できます。

### 質問 3：この mod は他のインベントリ mod と一緒に動作しますか？

modによります。インベントリ画面を完全に置き換えるmod、例えば[互換性ページ](https://sotf-mods.com/compat)に記載されているものは、バックパックUIと競合します。バージョン2.3以前を使用している場合は、まず更新してから再度テストし、その結果をコメント欄に報告してください。そうすれば他のプレイヤーも確認できます。

### 質問4：このmodは他のインベントリmodと併用できますか？

modによります。インベントリ画面を完全に置き換えるmod、例えば[互換性ページ](https://sotf-mods.com/compat)に記載されているものは、バックパックUIと競合します。バージョン2.4以前を使用している場合は、まず更新してから再度テストし、その結果をコメント欄に報告してください。そうすれば他のプレイヤーも確認できます。
````
