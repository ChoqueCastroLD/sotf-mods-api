---
title: Mods für Sons of the Forest installieren
seoTitle: Sons-of-the-Forest-Mods installieren (2026) – RedLoader-Anleitung
description: RedLoader mit RedManager installieren, Mods in den Ordner Mods legen und im Spiel prüfen. Schritt-für-Schritt-Anleitung mit Lösungen für Virenwarnungen und Patches.
tldr: Installiere RedLoader, den Mod-Loader, mit RedManager (oder von Hand), leg jeden Mod in den Ordner Mods in deinem Spielverzeichnis und starte das Spiel. RedManager installiert jeden Mod von SOTF Mods mit einem Klick. Das dauert etwa drei Minuten; die Anleitung unten deckt jeden Schritt und die üblichen Probleme ab.
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: Spiel prüfen
  redloader: RedLoader installieren
  mods: Mods hinzufügen
  verify: Im Spiel prüfen
  antivirus: Virenwarnungen
  bepinex: BepInEx oder RedLoader?
  update: Aktualisieren und entfernen
  dedicated: Dedizierte Server
  troubleshooting: Fehlerbehebung
  oneclick: Ein-Klick-Installer
faq:
  - q: Muss ich das Spiel auf Steam besitzen?
    a: Ja. Mods für Sons of the Forest laufen mit der PC-Version des Spiels. RedLoader verändert die Spieldateien in deiner Steam-Installation, du brauchst also das Spiel von Steam unter Windows (oder unter Linux und auf dem Steam Deck mit Proton).
  - q: Kann ich wegen Mods gebannt werden?
    a: Sons of the Forest hat keinen Anti-Cheat, und die Community nutzt Mods ganz offen. Spiel im Mehrspielermodus nur mit Leuten, die mit Mods einverstanden sind, und haltet alle dieselben Mods und Versionen.
  - q: Machen Mods meinen Spielstand kaputt?
    a: Die meisten Mods verändern deinen Spielstand nicht. Mods, die Gegenstände, Gebäude oder Weltänderungen hinzufügen, können Spuren hinterlassen, wenn du sie mitten im Spielstand entfernst; die Mod-Seite sagt, ob das sicher ist. Sichere deinen Spielstand-Ordner, bevor du große Mods ausprobierst.
  - q: Warum passiert nach der Installation eines Mods nichts?
    a: Meist ist RedLoader nicht installiert oder veraltet, der Mod wurde in den falschen Ordner entpackt, eine benötigte Bibliothek fehlt oder der Mod ist für BepInEx. Geh die Punkte unter Fehlerbehebung durch und fang mit der RedLoader-Konsole an.
  - q: Wo sind meine Spieldateien?
    a: Klicke in Steam mit der rechten Maustaste auf Sons of the Forest, wähle Verwalten und dann Lokale Dateien durchsuchen. Der Ordner, der sich öffnet, enthält SonsOfTheForest.exe; dort kommen RedLoader und deine Mods hin.
  - q: Funktionieren Mods nach einem Spielupdate?
    a: Nicht immer. Ein Spielpatch kann RedLoader oder einzelne Mods kaputt machen, bis sie aktualisiert werden. Patch Radar zeigt den aktuellen Spiel-Build, den Status von RedLoader und welche beliebten Mods Spieler als funktionsfähig bestätigt haben.
---

# Spiel prüfen

Mods funktionieren mit der **PC-Version von Sons of the Forest auf Steam** (Windows, oder Linux und Steam Deck mit Proton). Aktualisiere das Spiel in Steam, bevor du anfängst: RedLoader und die meisten Mods folgen dem neuesten Patch.

Finde deinen Spielordner: Rechtsklick auf **Sons of the Forest** in Steam → **Verwalten** → **Lokale Dateien durchsuchen**. Der Ordner, der sich öffnet, enthält `SonsOfTheForest.exe`. Meist ist es:

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> Gerade ein Spielupdate gehabt? Schau zuerst in den [Patch Radar](/patch-radar): Er zeigt, ob RedLoader und die beliebten Mods schon mit dem neuen Build funktionieren.

# RedLoader installieren

RedLoader ist der Mod-Loader für Sons of the Forest. Jeder Mod auf SOTF Mods braucht ihn. Es gibt zwei Wege, ihn zu installieren.

## Option A: RedManager (empfohlen)

RedManager ist der kostenlose Mod-Manager für RedLoader vom selben Entwickler. Er installiert RedLoader für dich und kann jeden Mod von SOTF Mods samt Abhängigkeiten mit einem Klick installieren.

1. Lade die neueste Version von RedManager von der [offiziellen Release-Seite](https://github.com/ToniMacaroni/RedManager/releases) herunter.
2. Starte ihn. Er findet deinen Spielordner automatisch (oder lässt dich ihn auswählen).
3. Klicke auf **Install RedLoader** und warte, bis es fertig ist.

## Option B: manuelle Installation

1. Lade die neueste `RedLoader.zip` von den [offiziellen RedLoader-Releases](https://github.com/ToniMacaroni/RedLoader/releases) herunter.
2. Entpacke alles in deinen Spielordner, neben `SonsOfTheForest.exe`.
3. Starte das Spiel einmal. RedLoader öffnet ein Konsolenfenster und legt seine Ordner an: `_RedLoader`, `Mods` und `Libs`.

> [!WARNING]
> Lade RedLoader und RedManager nur von ihren offiziellen GitHub-Seiten herunter. Kopien auf anderen Seiten können veraltet oder manipuliert sein.

# Mods hinzufügen

**Mit RedManager:** Such den Mod, klicke auf **Install**, und RedManager lädt ihn samt benötigter Bibliotheken in die richtigen Ordner.

**Von Hand:**

1. Lies auf der Mod-Seite die **Voraussetzungen** und installiere zuerst alle benötigten Bibliotheken.
2. Klicke auf **Herunterladen** und öffne die `.zip`.
3. Entpacke sie in deinen Spielordner und behalte die Ordner aus der Zip bei. Mod-Dateien landen in `Mods` (eine `.dll`, oft mit einem gleichnamigen Ordner), Bibliotheken in `Libs`, wenn sie eine mitbringen.
4. Enthält die Zip nur eine `.dll`, leg sie direkt in den Ordner `Mods`.

> [!IMPORTANT]
> Mods für dedizierte Server gehören in den Ordner des Servers, nicht in den Spielordner. Siehe [Dedizierte Server](#dedicated).

# Im Spiel prüfen

1. Starte das Spiel wie gewohnt über Steam. Die RedLoader-Konsole öffnet sich neben dem Spiel und listet jeden geladenen Mod auf; Fehler erscheinen rot.
2. Drück im Titelbildschirm **F1**, um das RedLoader-Panel zu öffnen, und prüfe, ob deine Mods aufgeführt sind. Mods mit Einstellungen zeigen sie dort.
3. Starte oder lade ein Spiel und probier den Mod aus.

Fehlt ein Mod in der Liste, geh zu [Fehlerbehebung](#troubleshooting).

# Virenwarnungen (Fehlalarme)

Manche Virenscanner und Windows SmartScreen schlagen bei RedLoader, RedManager oder einem Mod an. Mod-Loader schleusen Code ins Spiel ein – genau das suchen Heuristiken –, daher sind Warnungen auch bei sauberen Dateien häufig.

Bevor du einer Datei vertraust:

- **Lade nur von der offiziellen Quelle**: der Mod-Seite auf SOTF Mods oder den offiziellen GitHub-Releases von RedLoader und RedManager.
- **Vergleiche die Prüfsumme.** Jede Version auf SOTF Mods zeigt den SHA-256 der Datei. Führe unter Windows in der PowerShell `Get-FileHash .\datei.zip` aus (oder `certutil -hashfile datei.zip SHA256`) und vergleiche das Ergebnis.
- **Sieh dir den Scan an.** Jede veröffentlichte Version wird mit VirusTotal gescannt; der Bericht ist auf der Versionsseite verlinkt. Du kannst die Datei auch selbst bei [VirusTotal](https://www.virustotal.com) hochladen.

Passt alles, kannst du die Datei aus der Quarantäne holen und eine Ausnahme **nur für den Spielordner** anlegen. Schalte deinen Virenschutz nie ganz ab. Wirkt etwas verdächtig, melde den Mod über seine Seite: Die Ranger prüfen Meldungen schnell.

# BepInEx oder RedLoader?

SOTF Mods listet Mods für **RedLoader**. Mods für BepInEx (auf anderen Seiten verbreitet) brauchen einen anderen Loader: In den RedLoader-Ordnern tun sie einfach nichts und zeigen keinen Fehler.

- Prüfe vor der Installation, dass ein Mod für RedLoader gemacht ist.
- Installiere nicht beide Loader gleichzeitig. Hast du vorher BepInEx genutzt, entferne seine Dateien aus dem Spielordner (`BepInEx`, `doorstop_config.ini` und `winhttp.dll`).

# Aktualisieren und entfernen

**Mod aktualisieren:** RedManager zeigt verfügbare Updates. Von Hand lädst du die neue Version herunter und überschreibst die alten Dateien. Lies vorher das Änderungsprotokoll: Manche Updates brauchen eine neue Bibliothek oder eine frische Konfiguration.

**RedLoader aktualisieren:** Nutze RedManager oder entpacke das neue Release über das alte. Warte nach einem Spielpatch, bis der [Patch Radar](/patch-radar) zeigt, dass RedLoader mit dem neuen Build funktioniert.

**Mod entfernen:** Lösche seine `.dll` und seinen Ordner aus `Mods`. Schau vorher auf die Mod-Seite: Manche Mods lassen sich nicht gefahrlos mitten im Spielstand entfernen.

**RedLoader komplett entfernen:** Lösche `_RedLoader`, `Mods` und `Libs` sowie die übrigen Dateien, die die RedLoader-Zip neben `SonsOfTheForest.exe` angelegt hat, und nutze dann in Steam **Eigenschaften → Installierte Dateien → Spieldateien auf Fehler überprüfen**.

# Dedizierte Server

RedLoader läuft auch auf dem dedizierten Server von Sons of the Forest.

1. Installiere RedLoader in den Serverordner (den mit `SonsOfTheForestDS.exe`), genau wie bei der manuellen Installation.
2. Installiere nur Mods, deren Seite dedizierte Server unterstützt, in den Ordner `Mods` des Servers.
3. Beachte den Mehrspieler-Hinweis jedes Mods: Manche braucht nur der Server, andere auch das Spiel jedes Spielers. Alle müssen dieselben Versionen nutzen.

Viele Server-Hoster bieten RedLoader als Ein-Klick-Option in ihrem Panel an. Wenn deiner das nicht tut, lade die Dateien über seinen Dateimanager oder per FTP hoch.

# Fehlerbehebung

## Es passiert nichts: keine Konsole, keine Mods

RedLoader läuft nicht. Achte darauf, dass seine Dateien neben `SonsOfTheForest.exe` liegen (nicht in einem Unterordner), dass du das Spiel über Steam gestartet hast und dass dein Virenscanner sie nicht in Quarantäne verschoben hat. Installiere RedLoader im Zweifel neu.

## Das Spiel stürzt beim Start ab oder schließt sich

Das passiert meist nach einem Spielupdate. Sieh im [Patch Radar](/patch-radar) nach dem RedLoader-Status auf dem aktuellen Build. Um einen fehlerhaften Mod zu finden, nimm alle Mods aus `Mods` heraus und füge sie in kleinen Gruppen wieder hinzu.

## Ein Mod fehlt in der Liste

Wahrscheinlich liegt er im falschen Ordner, eine benötigte Bibliothek fehlt oder er ist für BepInEx. Lies die roten Zeilen in der RedLoader-Konsole: Sie nennen die fehlende Datei oder Bibliothek.

## „Der Computer wurde durch Windows geschützt“

SmartScreen warnt vor Programmen, die es selten sieht. Wenn du RedManager von der offiziellen Seite heruntergeladen hast, klicke auf **Weitere Informationen → Trotzdem ausführen**. Siehe [Virenwarnungen](#antivirus).

## RedManager findet das Spiel nicht

Gib den Spielordner in den Einstellungen von RedManager von Hand an: den Ordner, der `SonsOfTheForest.exe` enthält.

## Mitspieler können nicht beitreten oder es gibt Desyncs

Alle müssen dieselben Mods und Versionen nutzen, außer ein Mod sagt, dass nur der Host ihn braucht. Vergleicht eure Mod-Listen und aktualisiert auf dieselben Versionen.

# Der Ein-Klick-Installer wurde eingestellt

Der alte **SOTF Mods One-Click**-Installer (`sotfmodsoneclick-setup`) funktioniert nicht mehr mit der Seite und wird nicht mehr angeboten. Falls du ihn installiert hast, deinstalliere ihn über **Windows-Einstellungen → Apps**.

Nutze stattdessen [RedManager](https://github.com/ToniMacaroni/RedManager/releases): Er installiert RedLoader und jeden Mod von SOTF Mods samt Abhängigkeiten mit einem Klick.
