---
title: Så installerar du moddar till Sons of the Forest
seoTitle: Installera moddar till Sons of the Forest (2026) – RedLoader-guide
description: Installera RedLoader med RedManager, lägg moddar i mappen Mods och kontrollera dem i spelet. Steg-för-steg-guide med lösningar på antivirusvarningar och patchar.
tldr: Installera RedLoader, modd-laddaren, med RedManager (eller manuellt), lägg varje modd i mappen Mods i spelmappen och starta spelet. RedManager kan installera vilken modd som helst från SOTF Mods med ett klick. Det tar ungefär tre minuter, och guiden nedan går igenom varje steg och de vanliga problemen.
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: Kontrollera spelet
  redloader: Installera RedLoader
  mods: Lägg till moddar
  verify: Kontrollera i spelet
  antivirus: Antivirusvarningar
  bepinex: BepInEx eller RedLoader?
  update: Uppdatera och avinstallera
  dedicated: Dedikerade servrar
  troubleshooting: Felsökning
  oneclick: Ettklicksinstallation
faq:
  - q: Måste jag äga spelet på Steam?
    a: Ja. Moddar till Sons of the Forest fungerar med pc-versionen av spelet. RedLoader ändrar spelfilerna i din Steam-installation, så du behöver spelet installerat via Steam på Windows (eller på Linux och Steam Deck via Proton).
  - q: Kan jag bli bannad för att använda moddar?
    a: Sons of the Forest har inget anti-fusk, och gemenskapen använder moddar öppet. Spela bara flerspelare med folk som går med på moddar, och håll alla på samma moddar och versioner.
  - q: Förstör moddar mitt sparspel?
    a: De flesta moddar rör inte ditt sparspel. Moddar som lägger till föremål, byggen eller ändringar i världen kan lämna spår om du tar bort dem mitt i ett spel; moddsidan säger om det är säkert. Säkerhetskopiera sparmappen innan du testar stora moddar.
  - q: Varför händer ingenting när jag har installerat en modd?
    a: Oftast är RedLoader inte installerad eller inaktuell, modden packades upp i fel mapp, ett nödvändigt bibliotek saknas eller modden är gjord för BepInEx. Gå igenom kontrollerna under Felsökning och börja med RedLoader-konsolen.
  - q: Var finns spelfilerna?
    a: Högerklicka på Sons of the Forest i Steam, välj Hantera och sedan Bläddra bland lokala filer. Mappen som öppnas innehåller SonsOfTheForest.exe; dit ska RedLoader och dina moddar.
  - q: Fungerar moddar efter en speluppdatering?
    a: Inte alltid. En patch kan förstöra RedLoader eller enskilda moddar tills de uppdateras. Patch Radar visar spelets aktuella build, RedLoaders status och vilka populära moddar spelarna har bekräftat fungerar.
---

# Kontrollera spelet

Moddar fungerar med **pc-versionen av Sons of the Forest på Steam** (Windows, eller Linux och Steam Deck via Proton). Uppdatera spelet i Steam innan du börjar: RedLoader och de flesta moddar följer den senaste patchen.

Hitta spelmappen: högerklicka på **Sons of the Forest** i Steam → **Hantera** → **Bläddra bland lokala filer**. Mappen som öppnas innehåller `SonsOfTheForest.exe`. Oftast är det:

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> Kom det nyss en speluppdatering? Kolla först [Patch Radar](/patch-radar): där ser du om RedLoader och de populära moddarna redan fungerar på den nya builden.

# Installera RedLoader

RedLoader är modd-laddaren som är gjord för Sons of the Forest. Alla moddar på SOTF Mods behöver den. Det finns två sätt att installera den.

## Alternativ A: RedManager (rekommenderas)

RedManager är den kostnadsfria moddhanteraren för RedLoader, från samma utvecklare. Den installerar RedLoader åt dig och kan installera vilken modd som helst från SOTF Mods, med beroenden, med ett klick.

1. Ladda ner senaste RedManager från dess [officiella releasesida](https://github.com/ToniMacaroni/RedManager/releases).
2. Starta den. Den hittar spelmappen själv (eller låter dig välja den).
3. Klicka på **Install RedLoader** och vänta tills den är klar.

## Alternativ B: manuell installation

1. Ladda ner senaste `RedLoader.zip` från [RedLoaders officiella releaser](https://github.com/ToniMacaroni/RedLoader/releases).
2. Packa upp allt i spelmappen, bredvid `SonsOfTheForest.exe`.
3. Starta spelet en gång. RedLoader öppnar ett konsolfönster och skapar sina mappar: `_RedLoader`, `Mods` och `Libs`.

> [!WARNING]
> Ladda bara ner RedLoader och RedManager från deras officiella GitHub-sidor. Kopior på andra sajter kan vara inaktuella eller manipulerade.

# Lägg till moddar

**Med RedManager:** sök efter modden, klicka på **Install**, så laddar RedManager ner den och dess nödvändiga bibliotek till rätt mappar.

**Manuellt:**

1. Läs **Krav** på moddsidan och installera först alla nödvändiga bibliotek.
2. Klicka på **Ladda ner** och öppna `.zip`-filen.
3. Packa upp den i spelmappen och behåll mapparna i zip-filen. Moddens filer hamnar i `Mods` (en `.dll`, ofta med en mapp med samma namn) och bibliotek i `Libs` när sådana ingår.
4. Innehåller zip-filen bara en `.dll`, lägg den direkt i mappen `Mods`.

> [!IMPORTANT]
> Moddar för dedikerade servrar ska ligga i serverns egen mapp, inte i spelmappen. Se [Dedikerade servrar](#dedicated).

# Kontrollera i spelet

1. Starta spelet från Steam som vanligt. RedLoader-konsolen öppnas bredvid spelet och listar varje modd som laddas; fel visas i rött.
2. Tryck **F1** på startskärmen för att öppna RedLoader-panelen och kontrollera att dina moddar finns med. Moddar med inställningar visar dem där.
3. Starta eller ladda ett spel och testa modden.

Saknas en modd i listan, gå till [Felsökning](#troubleshooting).

# Antivirusvarningar (falsklarm)

Vissa antivirusprogram och Windows SmartScreen flaggar RedLoader, RedManager eller en modd. Modd-laddare injicerar kod i spelet, precis det heuristiken letar efter, så varningar är vanliga även för rena filer.

Innan du litar på en fil:

- **Ladda bara ner från den officiella källan**: moddsidan på SOTF Mods eller de officiella GitHub-releaserna av RedLoader och RedManager.
- **Jämför kontrollsumman.** Varje version på SOTF Mods visar filens SHA-256. Kör `Get-FileHash .\fil.zip` i PowerShell på Windows (eller `certutil -hashfile fil.zip SHA256`) och jämför resultatet.
- **Titta på skanningen.** Varje publicerad version skannas med VirusTotal; rapporten är länkad på versionssidan. Du kan också ladda upp filen till [VirusTotal](https://www.virustotal.com) själv.

Stämmer allt kan du återställa filen från karantänen och lägga till ett undantag **bara för spelmappen**. Stäng aldrig av antivirusprogrammet helt. Om något verkar fel, rapportera modden från dess sida: rangers går igenom rapporter snabbt.

# BepInEx eller RedLoader?

SOTF Mods listar moddar för **RedLoader**. Moddar gjorda för BepInEx (vanliga på andra sajter) behöver en annan laddare: i RedLoaders mappar gör de helt enkelt ingenting och visar inget fel.

- Kontrollera att en modd är gjord för RedLoader innan du installerar den.
- Installera inte båda laddarna samtidigt. Om du har använt BepInEx tidigare, ta bort dess filer från spelmappen (`BepInEx`, `doorstop_config.ini` och `winhttp.dll`).

# Uppdatera och avinstallera

**Uppdatera en modd:** RedManager visar tillgängliga uppdateringar. Manuellt laddar du ner den nya versionen och skriver över de gamla filerna. Läs ändringsloggen först: vissa uppdateringar kräver ett nytt bibliotek eller en ren konfiguration.

**Uppdatera RedLoader:** använd RedManager eller packa upp den nya releasen över den gamla. Vänta efter en spelpatch tills [Patch Radar](/patch-radar) visar att RedLoader fungerar på den nya builden.

**Ta bort en modd:** radera dess `.dll` och mapp i `Mods`. Kolla moddsidan först: vissa moddar går inte att ta bort säkert mitt i ett spel.

**Ta bort RedLoader helt:** radera `_RedLoader`, `Mods` och `Libs` och de andra filer som RedLoaders zip lade bredvid `SonsOfTheForest.exe`, och använd sedan **Egenskaper → Installerade filer → Verifiera spelfilernas integritet** i Steam.

# Dedikerade servrar

RedLoader fungerar också på den dedikerade servern för Sons of the Forest.

1. Installera RedLoader i servermappen (den med `SonsOfTheForestDS.exe`), på samma sätt som vid manuell installation.
2. Installera bara moddar vars sida säger att de stöder dedikerade servrar, i serverns mapp `Mods`.
3. Läs flerspelarnoteringen för varje modd: vissa behövs bara på servern, andra även i varje spelares spel. Alla måste använda samma versioner.

Många serverleverantörer erbjuder RedLoader som ett ettklicksval i sin panel. Om din inte gör det, ladda upp filerna med deras filhanterare eller via FTP.

# Felsökning

## Ingenting händer: ingen konsol, inga moddar

RedLoader körs inte. Se till att filerna ligger bredvid `SonsOfTheForest.exe` (inte i en undermapp), att du startade spelet via Steam och att antivirusprogrammet inte har satt dem i karantän. Installera om RedLoader om du är osäker.

## Spelet kraschar eller stängs vid start

Det händer oftast efter en speluppdatering. Kolla RedLoaders status på den aktuella builden i [Patch Radar](/patch-radar). För att hitta en trasig modd, flytta ut alla moddar ur `Mods` och lägg tillbaka dem några i taget.

## En modd syns inte i listan

Den ligger troligen i fel mapp, saknar ett nödvändigt bibliotek eller är gjord för BepInEx. Läs de röda raderna i RedLoader-konsolen: de namnger filen eller biblioteket som saknas.

## ”Windows skyddade datorn”

SmartScreen varnar för program den sällan ser. Om du laddade ner RedManager från den officiella sidan, klicka på **Mer information → Kör ändå**. Se [Antivirusvarningar](#antivirus).

## RedManager hittar inte spelet

Ange spelmappen manuellt i RedManagers inställningar: mappen som innehåller `SonsOfTheForest.exe`.

## Spelare kan inte ansluta eller det blir desynk i flerspelare

Alla måste köra samma moddar och versioner, om inte en modd säger att bara värden behöver den. Jämför era moddlistor och uppdatera till samma versioner.

# Ettklicksinstallationen är nedlagd

Den gamla installeraren **SOTF Mods One-Click** (`sotfmodsoneclick-setup`) fungerar inte längre med sajten och erbjuds inte längre. Om du har installerat den, avinstallera den via **Windows-inställningar → Appar**.

Använd [RedManager](https://github.com/ToniMacaroni/RedManager/releases) i stället: den installerar RedLoader och vilken modd som helst från SOTF Mods, med beroenden, med ett klick.
