---
title: Mods voor Sons of the Forest installeren
seoTitle: "Sons of the Forest-mods installeren (2026): RedLoader-gids"
description: Installeer RedLoader met RedManager, zet mods in de map Mods en controleer ze in de game. Stapsgewijze gids met oplossingen voor antivirusmeldingen en patches.
tldr: Installeer RedLoader, de modloader, met RedManager (of handmatig), zet elke mod in de map Mods in je gamemap en start de game. RedManager kan elke mod van SOTF Mods met één klik installeren. Het kost ongeveer drie minuten; de gids hieronder behandelt elke stap en de bekende problemen.
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: Controleer je game
  redloader: RedLoader installeren
  mods: Mods toevoegen
  verify: Controleren in de game
  antivirus: Antivirusmeldingen
  bepinex: BepInEx of RedLoader?
  update: Bijwerken en verwijderen
  dedicated: Dedicated servers
  troubleshooting: Problemen oplossen
  oneclick: Eén-klik-installer
faq:
  - q: Moet ik de game op Steam hebben?
    a: Ja. Mods voor Sons of the Forest werken met de pc-versie van de game. RedLoader past de gamebestanden in je Steam-installatie aan, dus je hebt de game nodig via Steam op Windows (of op Linux en Steam Deck via Proton).
  - q: Kan ik een ban krijgen voor het gebruik van mods?
    a: Sons of the Forest heeft geen anti-cheat en de community gebruikt mods openlijk. Speel in multiplayer alleen met spelers die akkoord zijn met mods, en gebruik allemaal dezelfde mods en versies.
  - q: Maken mods mijn savegame kapot?
    a: De meeste mods raken je savegame niet aan. Mods die voorwerpen, gebouwen of wereldwijzigingen toevoegen, kunnen sporen achterlaten als je ze halverwege verwijdert; de modpagina vermeldt of dat veilig kan. Maak een back-up van je savemap voordat je grote mods probeert.
  - q: Waarom gebeurt er niets nadat ik een mod heb geïnstalleerd?
    a: Meestal is RedLoader niet geïnstalleerd of verouderd, is de mod in de verkeerde map uitgepakt, ontbreekt een vereiste bibliotheek of is de mod gemaakt voor BepInEx. Volg de controles bij Problemen oplossen en begin met de RedLoader-console.
  - q: Waar staan mijn gamebestanden?
    a: Klik in Steam met rechts op Sons of the Forest, kies Beheren en daarna Lokale bestanden bekijken. De map die opent bevat SonsOfTheForest.exe; daar horen RedLoader en je mods.
  - q: Werken mods na een game-update?
    a: Niet altijd. Een patch kan RedLoader of losse mods breken tot ze worden bijgewerkt. Bekijk de modpagina, de reacties en de reviews om te zien of de mod met de huidige gameversie werkt.
---

# Controleer je game

Mods werken met de **pc-versie van Sons of the Forest op Steam** (Windows, of Linux en Steam Deck via Proton). Werk de game in Steam bij voordat je begint: RedLoader en de meeste mods volgen de nieuwste patch.

Zoek je gamemap: klik in Steam met rechts op **Sons of the Forest** → **Beheren** → **Lokale bestanden bekijken**. De map die opent bevat `SonsOfTheForest.exe`. Meestal is dat:

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> Net een game-update gehad? Bekijk de modpagina, de reacties en de reviews om te zien of de mod al met de nieuwe versie werkt.

# RedLoader installeren

RedLoader is de modloader die voor Sons of the Forest is gemaakt. Elke mod op SOTF Mods heeft hem nodig. Er zijn twee manieren om hem te installeren.

## Optie A: RedManager (aanbevolen)

RedManager is de gratis modmanager voor RedLoader, van dezelfde ontwikkelaar. Hij installeert RedLoader voor je en kan elke mod van SOTF Mods, met afhankelijkheden, met één klik installeren.

1. Download de nieuwste RedManager van de [officiële releasepagina](https://github.com/ToniMacaroni/RedManager/releases).
2. Start hem. Hij vindt je gamemap automatisch (of laat je hem kiezen).
3. Klik op **Install RedLoader** en wacht tot hij klaar is.

## Optie B: handmatige installatie

1. Download de nieuwste `RedLoader.zip` van de [officiële RedLoader-releases](https://github.com/ToniMacaroni/RedLoader/releases).
2. Pak alles uit in je gamemap, naast `SonsOfTheForest.exe`.
3. Start de game één keer. RedLoader opent een consolevenster en maakt zijn mappen aan: `_RedLoader`, `Mods` en `Libs`.

> [!WARNING]
> Download RedLoader en RedManager alleen van hun officiële GitHub-pagina’s. Kopieën op andere sites kunnen verouderd of aangepast zijn.

# Mods toevoegen

**Met RedManager:** zoek de mod, klik op **Install** en RedManager downloadt hem met de vereiste bibliotheken naar de juiste mappen.

**Handmatig:**

1. Lees op de modpagina de **Vereisten** en installeer eerst alle vereiste bibliotheken.
2. Klik op **Downloaden** en open de `.zip`.
3. Pak hem uit in je gamemap en behoud de mappen uit de zip. Modbestanden komen in `Mods` (een `.dll`, vaak met een map met dezelfde naam) en bibliotheken in `Libs` als ze er een meeleveren.
4. Bevat de zip alleen een `.dll`, zet die dan direct in de map `Mods`.

> [!IMPORTANT]
> Mods voor dedicated servers horen in de map van de server, niet in de gamemap. Zie [Dedicated servers](#dedicated).

# Controleren in de game

1. Start de game zoals altijd via Steam. De RedLoader-console opent naast de game en toont elke mod die wordt geladen; fouten staan in het rood.
2. Druk in het titelscherm op **F1** om het RedLoader-paneel te openen en controleer of je mods erin staan. Mods met instellingen tonen die daar.
3. Start of laad een game en probeer de mod.

Ontbreekt er een mod in de lijst, ga dan naar [Problemen oplossen](#troubleshooting).

# Antivirusmeldingen (vals alarm)

Sommige virusscanners en Windows SmartScreen markeren RedLoader, RedManager of een mod. Modloaders injecteren code in de game, precies waar heuristieken naar zoeken, dus meldingen zijn gewoon, ook bij schone bestanden.

Voordat je een bestand vertrouwt:

- **Download alleen van de officiële bron**: de modpagina op SOTF Mods of de officiële GitHub-releases van RedLoader en RedManager.
- **Vergelijk de checksum.** Elke versie op SOTF Mods toont de SHA-256 van het bestand. Voer op Windows in PowerShell `Get-FileHash .\bestand.zip` uit (of `certutil -hashfile bestand.zip SHA256`) en vergelijk de uitkomst.
- **Bekijk de scan.** Elke gepubliceerde versie wordt gescand met VirusTotal; het rapport staat gelinkt op de versiepagina. Je kunt het bestand ook zelf uploaden naar [VirusTotal](https://www.virustotal.com).

Klopt alles, dan kun je het bestand uit quarantaine halen en een uitzondering toevoegen **alleen voor de gamemap**. Zet je virusscanner nooit helemaal uit. Lijkt er iets niet te kloppen, meld de mod dan via zijn pagina: moderators bekijken meldingen snel.

# BepInEx of RedLoader?

SOTF Mods toont mods voor **RedLoader**. Mods voor BepInEx (gebruikelijk op andere sites) hebben een andere loader nodig: in de mappen van RedLoader doen ze gewoon niets en geven ze geen foutmelding.

- Controleer vóór het installeren dat een mod voor RedLoader is gemaakt.
- Installeer niet beide loaders tegelijk. Gebruikte je eerder BepInEx, verwijder dan zijn bestanden uit de gamemap (`BepInEx`, `doorstop_config.ini` en `winhttp.dll`).

# Bijwerken en verwijderen

**Een mod bijwerken:** RedManager toont beschikbare updates. Handmatig download je de nieuwe versie en overschrijf je de oude bestanden. Lees eerst de changelog: sommige updates vragen om een nieuwe bibliotheek of een schone configuratie.

**RedLoader bijwerken:** gebruik RedManager, of pak de nieuwe release uit over de oude. Als de game na een gamepatch niet meer start, wacht dan op een nieuwe RedLoader-release.

**Een mod verwijderen:** verwijder zijn `.dll` en zijn map uit `Mods`. Kijk eerst op de modpagina: sommige mods kun je niet veilig halverwege een savegame verwijderen.

**RedLoader helemaal verwijderen:** verwijder `_RedLoader`, `Mods` en `Libs` en de andere bestanden die de RedLoader-zip naast `SonsOfTheForest.exe` heeft gezet, en gebruik daarna in Steam **Eigenschappen → Geïnstalleerde bestanden → Integriteit van gamebestanden controleren**.

# Dedicated servers

RedLoader draait ook op de dedicated server van Sons of the Forest.

1. Installeer RedLoader in de servermap (die met `SonsOfTheForestDS.exe`), net als bij de handmatige installatie.
2. Installeer alleen mods waarvan de pagina zegt dat ze dedicated servers ondersteunen, in de map `Mods` van de server.
3. Lees de multiplayernotitie van elke mod: sommige zijn alleen op de server nodig, andere ook in de game van elke speler. Iedereen moet dezelfde versies gebruiken.

Veel serverhosts bieden RedLoader aan als optie met één klik in hun paneel. Doet de jouwe dat niet, upload de bestanden dan via hun bestandsbeheer of FTP.

# Problemen oplossen

## Er gebeurt niets: geen console, geen mods

RedLoader draait niet. Controleer of zijn bestanden naast `SonsOfTheForest.exe` staan (niet in een submap), of je de game via Steam hebt gestart en of je virusscanner ze niet in quarantaine heeft gezet. Installeer RedLoader bij twijfel opnieuw.

## De game crasht of sluit bij het opstarten

Dat gebeurt meestal na een game-update. Zoek bij de [RedLoader-releases](https://github.com/ToniMacaroni/RedLoader/releases) naar een versie die de nieuwe build ondersteunt. Om een defecte mod te vinden, haal je alle mods uit `Mods` en zet je ze in kleine groepjes terug.

## Een mod staat niet in de lijst

Waarschijnlijk staat hij in de verkeerde map, ontbreekt een vereiste bibliotheek of is hij voor BepInEx. Lees de rode regels in de RedLoader-console: daar staat welk bestand of welke bibliotheek ontbreekt.

## ‘Windows heeft uw pc beschermd’

SmartScreen waarschuwt voor programma’s die het zelden ziet. Heb je RedManager van de officiële pagina gedownload, klik dan op **Meer informatie → Toch uitvoeren**. Zie [Antivirusmeldingen](#antivirus).

## RedManager vindt de game niet

Stel de gamemap handmatig in bij de instellingen van RedManager: de map met `SonsOfTheForest.exe`.

## Spelers kunnen niet joinen of er is desync in multiplayer

Iedereen moet dezelfde mods en versies gebruiken, tenzij een mod zegt dat alleen de host hem nodig heeft. Vergelijk jullie modlijsten en werk bij naar dezelfde versies.

# De eén-klik-installer is gestopt

De oude **SOTF Mods One-Click**-installer (`sotfmodsoneclick-setup`) werkt niet meer met de site en wordt niet meer aangeboden. Heb je hem geïnstalleerd, verwijder hem dan via **Windows-instellingen → Apps**.

Gebruik in plaats daarvan [RedManager](https://github.com/ToniMacaroni/RedManager/releases): die installeert RedLoader en elke mod van SOTF Mods, met afhankelijkheden, met één klik.
