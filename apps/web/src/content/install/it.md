---
title: Come installare le mod di Sons of the Forest
seoTitle: Come installare le mod di Sons of the Forest (2026): Guida RedLoader
description: Installa RedLoader con RedManager, metti le mod nella cartella Mods e controllale nel gioco. Guida passo passo con soluzioni per antivirus e patch.
tldr: Installa RedLoader, il caricatore di mod, con RedManager (o a mano), metti ogni mod nella cartella Mods dentro la cartella del gioco e avvia il gioco. RedManager installa qualsiasi mod di SOTF Mods con un clic. Servono circa tre minuti e la guida qui sotto copre ogni passaggio e i problemi più comuni.
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: Controlla il gioco
  redloader: Installa RedLoader
  mods: Aggiungi le mod
  verify: Verifica nel gioco
  antivirus: Avvisi dell’antivirus
  bepinex: BepInEx o RedLoader?
  update: Aggiorna e disinstalla
  dedicated: Server dedicati
  troubleshooting: Risoluzione dei problemi
  oneclick: Installer con un clic
faq:
  - q: Devo possedere il gioco su Steam?
    a: Sì. Le mod di Sons of the Forest funzionano con la versione PC del gioco. RedLoader modifica i file del gioco nella tua installazione di Steam, quindi ti serve il gioco installato da Steam su Windows (o su Linux e Steam Deck tramite Proton).
  - q: Posso essere bannato per l’uso di mod?
    a: Sons of the Forest non ha un anti-cheat e la community usa le mod apertamente. In multigiocatore, entra o ospita partite solo con giocatori d’accordo sull’uso di mod, e tenete tutti le stesse mod e versioni.
  - q: Le mod rovineranno il mio salvataggio?
    a: La maggior parte delle mod non tocca il salvataggio. Quelle che aggiungono oggetti, costruzioni o modifiche al mondo possono lasciare tracce se le rimuovi a metà partita; la pagina della mod indica se si può rimuovere senza rischi. Fai una copia della cartella dei salvataggi prima di provare mod grandi.
  - q: Perché non succede niente dopo aver installato una mod?
    a: Di solito RedLoader non è installato o non è aggiornato, la mod è stata estratta nella cartella sbagliata, manca una libreria necessaria oppure la mod è per BepInEx. Segui i controlli della sezione Risoluzione dei problemi, partendo dalla console di RedLoader.
  - q: Dove sono i file del gioco?
    a: In Steam, fai clic destro su Sons of the Forest, scegli Gestisci e poi Sfoglia file locali. La cartella che si apre contiene SonsOfTheForest.exe; RedLoader e le tue mod vanno lì.
  - q: Le mod funzionano dopo un aggiornamento del gioco?
    a: Non sempre. Una patch può rompere RedLoader o singole mod finché non vengono aggiornate. Controlla la pagina della mod, i commenti e le recensioni per sapere se funziona con la versione attuale del gioco.
---

# Controlla il gioco

Le mod funzionano con la **versione PC di Sons of the Forest su Steam** (Windows, oppure Linux e Steam Deck tramite Proton). Aggiorna il gioco su Steam prima di iniziare: RedLoader e la maggior parte delle mod seguono l’ultima patch.

Trova la cartella del gioco: su Steam, fai clic destro su **Sons of the Forest** → **Gestisci** → **Sfoglia file locali**. La cartella che si apre contiene `SonsOfTheForest.exe`. Di solito è:

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> È appena uscito un aggiornamento del gioco? Controlla la pagina della mod, i commenti e le recensioni per sapere se funziona già con la nuova versione.

# Installa RedLoader

RedLoader è il caricatore di mod creato per Sons of the Forest. Tutte le mod di SOTF Mods ne hanno bisogno. Ci sono due modi per installarlo.

## Opzione A: RedManager (consigliata)

RedManager è il gestore di mod gratuito per RedLoader, dello stesso sviluppatore. Installa RedLoader al posto tuo e può installare qualsiasi mod di SOTF Mods, con le sue dipendenze, con un clic.

1. Scarica l’ultima versione di RedManager dalla sua [pagina ufficiale delle release](https://github.com/ToniMacaroni/RedManager/releases).
2. Avvialo. Trova la cartella del gioco da solo (o ti permette di sceglierla).
3. Fai clic su **Install RedLoader** e aspetta che finisca.

## Opzione B: installazione manuale

1. Scarica l’ultimo `RedLoader.zip` dalle [release ufficiali di RedLoader](https://github.com/ToniMacaroni/RedLoader/releases).
2. Estrai tutto nella cartella del gioco, accanto a `SonsOfTheForest.exe`.
3. Avvia il gioco una volta. RedLoader apre una finestra di console e crea le sue cartelle: `_RedLoader`, `Mods` e `Libs`.

> [!WARNING]
> Scarica RedLoader e RedManager solo dalle loro pagine GitHub ufficiali. Le copie su altri siti possono essere vecchie o manomesse.

# Aggiungi le mod

**Con RedManager:** cerca la mod, fai clic su **Install** e RedManager la scarica con le librerie necessarie nelle cartelle giuste.

**A mano:**

1. Nella pagina della mod, leggi **Requisiti** e installa prima tutte le librerie necessarie.
2. Fai clic su **Scarica** e apri lo `.zip`.
3. Estrailo nella cartella del gioco mantenendo le cartelle dello zip. I file della mod finiscono in `Mods` (un `.dll`, spesso con una cartella con lo stesso nome) e le librerie in `Libs`, se ne includono una.
4. Se lo zip contiene solo un `.dll`, mettilo direttamente nella cartella `Mods`.

> [!IMPORTANT]
> Le mod per server dedicati vanno nella cartella del server, non in quella del gioco. Vedi [Server dedicati](#dedicated).

# Verifica nel gioco

1. Avvia il gioco da Steam come sempre. La console di RedLoader si apre accanto al gioco ed elenca ogni mod caricata; gli errori compaiono in rosso.
2. Nella schermata del titolo, premi **F1** per aprire il pannello di RedLoader e controlla che le tue mod siano elencate. Le mod con impostazioni le mostrano lì.
3. Avvia o carica una partita e prova la mod.

Se manca una mod nell’elenco, vai a [Risoluzione dei problemi](#troubleshooting).

# Avvisi dell’antivirus (falsi positivi)

Alcuni antivirus e Windows SmartScreen segnalano RedLoader, RedManager o una mod. I caricatori di mod iniettano codice nel gioco, proprio ciò che cercano le euristiche, quindi gli avvisi sono comuni anche con file puliti.

Prima di fidarti di un file:

- **Scaricalo solo dalla fonte ufficiale**: la pagina della mod su SOTF Mods o le release ufficiali di RedLoader e RedManager su GitHub.
- **Confronta il checksum.** Ogni versione su SOTF Mods mostra lo SHA-256 del file. Su Windows, esegui `Get-FileHash .\file.zip` in PowerShell (oppure `certutil -hashfile file.zip SHA256`) e confronta il risultato.
- **Controlla la scansione.** Ogni versione pubblicata viene analizzata con VirusTotal; il report è collegato nella pagina della versione. Puoi anche caricare tu il file su [VirusTotal](https://www.virustotal.com).

Se tutto corrisponde, puoi ripristinare il file dalla quarantena e aggiungere un’esclusione **solo per la cartella del gioco**. Non disattivare mai del tutto l’antivirus. Se qualcosa non torna, segnala la mod dalla sua pagina: i moderatori esaminano le segnalazioni in fretta.

# BepInEx o RedLoader?

SOTF Mods pubblica mod per **RedLoader**. Le mod fatte per BepInEx (comuni su altri siti) richiedono un altro caricatore: messe nelle cartelle di RedLoader semplicemente non fanno nulla e non mostrano errori.

- Controlla che una mod sia fatta per RedLoader prima di installarla.
- Non installare entrambi i caricatori insieme. Se usavi BepInEx, elimina i suoi file dalla cartella del gioco (`BepInEx`, `doorstop_config.ini` e `winhttp.dll`).

# Aggiorna e disinstalla

**Aggiornare una mod:** RedManager mostra gli aggiornamenti disponibili. A mano, scarica la nuova versione e sovrascrivi i vecchi file. Leggi prima il changelog: alcuni aggiornamenti richiedono una nuova libreria o una configurazione pulita.

**Aggiornare RedLoader:** usa RedManager oppure estrai la nuova release sopra la vecchia. Dopo una patch del gioco, se il gioco non si avvia più, aspetta una nuova release di RedLoader.

**Rimuovere una mod:** elimina il suo `.dll` e la sua cartella da `Mods`. Controlla prima la pagina della mod: alcune non si possono rimuovere a metà partita senza rischi.

**Rimuovere del tutto RedLoader:** elimina `_RedLoader`, `Mods` e `Libs` e gli altri file che lo zip di RedLoader ha aggiunto accanto a `SonsOfTheForest.exe`, poi su Steam usa **Proprietà → File installati → Verifica l’integrità dei file di gioco**.

# Server dedicati

RedLoader funziona anche sul server dedicato di Sons of the Forest.

1. Installa RedLoader nella cartella del server (quella con `SonsOfTheForestDS.exe`), come nell’installazione manuale.
2. Installa solo mod la cui pagina indica il supporto ai server dedicati, nella cartella `Mods` del server.
3. Leggi la nota multigiocatore di ogni mod: alcune servono solo sul server, altre anche nel gioco di ogni giocatore. Tutti devono usare le stesse versioni.

Molti provider di server offrono RedLoader con un clic nel loro pannello. Se il tuo no, carica i file con il suo file manager o via FTP.

# Risoluzione dei problemi

## Non succede niente: niente console e niente mod

RedLoader non è in esecuzione. Assicurati che i suoi file siano accanto a `SonsOfTheForest.exe` (non in una sottocartella), di aver avviato il gioco da Steam e che l’antivirus non li abbia messi in quarantena. Nel dubbio, reinstalla RedLoader.

## Il gioco va in crash o si chiude all’avvio

Succede di solito dopo un aggiornamento del gioco. Cerca tra le [release di RedLoader](https://github.com/ToniMacaroni/RedLoader/releases) una versione che supporti la nuova build. Per trovare la mod difettosa, togli tutte le mod da `Mods` e rimettile poche alla volta.

## Una mod non compare nell’elenco

Probabilmente è nella cartella sbagliata, le manca una libreria necessaria oppure è per BepInEx. Leggi le righe rosse nella console di RedLoader: indicano il file o la libreria mancante.

## “Windows ha protetto il PC”

SmartScreen avvisa per i programmi che vede di rado. Se hai scaricato RedManager dalla pagina ufficiale, fai clic su **Ulteriori informazioni → Esegui comunque**. Vedi [Avvisi dell’antivirus](#antivirus).

## RedManager non trova il gioco

Imposta a mano la cartella del gioco nelle impostazioni di RedManager: la cartella che contiene `SonsOfTheForest.exe`.

## I giocatori non riescono a entrare o ci sono desincronizzazioni

Tutti devono usare le stesse mod e versioni, a meno che una mod non dica che serve solo all’host. Confrontate gli elenchi delle mod e aggiornate alle stesse versioni.

# L’installer con un clic è stato ritirato

Il vecchio installer **SOTF Mods One-Click** (`sotfmodsoneclick-setup`) non funziona più con il sito e non viene più offerto. Se l’hai installato, disinstallalo da **Impostazioni di Windows → App**.

Usa invece [RedManager](https://github.com/ToniMacaroni/RedManager/releases): installa RedLoader e qualsiasi mod di SOTF Mods, con le sue dipendenze, con un clic.
