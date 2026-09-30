/**
 * Per-mod FAQ generated from the facts (PLAN §8.7 GEO «FAQ por mod generada a partir de los
 * hechos»): «Does it work in multiplayer?», «How do I install it?», «What does it need?», «Does it
 * work on the current patch?» and «Does it work on a dedicated server?», answered from the mod's
 * declared metadata and its field-report aggregate, in the 13 locales. It gives every locale real
 * localized content on the mod page (WP-62 renders it in `#faq` with `FAQPage` JSON-LD) and feeds
 * the Markdown alternate.
 *
 * Only questions with a factual answer are produced: an unknown dedicated-server support yields no
 * question; builds get install and requirements only.
 *
 * The templates live here (not in `packages/i18n/messages`) because WP-61 owns no message
 * namespace; see docs/backlog/WP-61.md.
 */
import type { ModDetailDTO } from '@sotf/contracts/catalog';
import { LOCALE_INFO, type Locale } from '@sotf/i18n';

type MultiplayerKey = 'client_side' | 'host_only' | 'all_players' | 'singleplayer_only' | 'unknown';
type CompatKey = 'works' | 'broken' | 'mixed' | 'untested';
type DedicatedKey = 'yes' | 'partial' | 'no';

interface FaqTemplates {
  qMultiplayer: string;
  aMultiplayer: Record<MultiplayerKey, string>;
  qInstall: string;
  aInstallMod: string;
  aInstallBuild: string;
  qRequirements: string;
  aRequirementsNone: string;
  aRequirementsList: string;
  aRequirementsBuild: string;
  qCompat: string;
  aCompat: Record<CompatKey, string>;
  aCompatNoBuild: string;
  qDedicated: string;
  aDedicated: Record<DedicatedKey, string>;
}

/** `{name}`, `{release}` (name + version), `{list}`, `{build}` are replaced verbatim. */
export const FAQ_TEMPLATES: Readonly<Record<Locale, FaqTemplates>> = {
  en: {
    qMultiplayer: 'Does {name} work in multiplayer?',
    aMultiplayer: {
      client_side: 'Yes. {name} is client-side: only the players who want it need to install it.',
      host_only: 'Yes, but only the host needs to install it; the other players can join without it.',
      all_players: 'Yes, but every player in the session must install it, ideally the same version.',
      singleplayer_only: 'No. {name} only works in singleplayer.',
      unknown:
        'The author has not stated multiplayer support yet. Check the comments and the field reports of other players.',
    },
    qInstall: 'How do I install {name}?',
    aInstallMod:
      'Install RedLoader (RedManager can do it for you), download {release} from this page and put it in the _RedLoader/Mods folder inside your game directory. Launch the game and press F1 to confirm it loaded.',
    aInstallBuild:
      'Install RedLoader and the BuildShare mod, download the {release} blueprint from this page and import it from the BuildShare menu in game.',
    qRequirements: 'What does {name} need?',
    aRequirementsNone: 'Only Sons of the Forest on Steam and RedLoader. It has no other dependencies.',
    aRequirementsList: 'Sons of the Forest on Steam, RedLoader and: {list}.',
    aRequirementsBuild: 'Sons of the Forest on Steam, RedLoader and the BuildShare mod.',
    qCompat: 'Does {name} work on the current game patch?',
    aCompat: {
      works: 'Yes. Players report it working on patch {build}.',
      broken: 'Not right now: players report it broken on patch {build}.',
      mixed: 'Reports for patch {build} are mixed: it works for some players and not for others.',
      untested: 'Nobody has reported on patch {build} yet. If you try it, add a field report.',
    },
    aCompatNoBuild: 'There are no compatibility reports yet. If you try it, add a field report.',
    qDedicated: 'Does {name} work on a dedicated server?',
    aDedicated: {
      yes: 'Yes. {name} can be installed on a dedicated server.',
      partial: 'Partly: some features work on a dedicated server, others need a regular host.',
      no: 'No. {name} does not work on a dedicated server.',
    },
  },
  es: {
    qMultiplayer: '¿{name} funciona en multijugador?',
    aMultiplayer: {
      client_side: 'Sí. {name} funciona del lado del cliente: solo lo instalan los jugadores que quieran usarlo.',
      host_only: 'Sí, pero solo el anfitrión tiene que instalarlo; los demás jugadores pueden unirse sin él.',
      all_players: 'Sí, pero todos los jugadores de la partida deben instalarlo, idealmente la misma versión.',
      singleplayer_only: 'No. {name} solo funciona en un jugador.',
      unknown:
        'El autor aún no ha indicado si funciona en multijugador. Revisa los comentarios y los informes de campo de otros jugadores.',
    },
    qInstall: '¿Cómo se instala {name}?',
    aInstallMod:
      'Instala RedLoader (RedManager puede hacerlo por ti), descarga {release} desde esta página y ponlo en la carpeta _RedLoader/Mods dentro del directorio del juego. Abre el juego y pulsa F1 para comprobar que cargó.',
    aInstallBuild:
      'Instala RedLoader y el mod BuildShare, descarga el plano de {release} desde esta página e impórtalo desde el menú de BuildShare en la partida.',
    qRequirements: '¿Qué necesita {name}?',
    aRequirementsNone: 'Solo Sons of the Forest en Steam y RedLoader. No tiene otras dependencias.',
    aRequirementsList: 'Sons of the Forest en Steam, RedLoader y: {list}.',
    aRequirementsBuild: 'Sons of the Forest en Steam, RedLoader y el mod BuildShare.',
    qCompat: '¿{name} funciona con el parche actual del juego?',
    aCompat: {
      works: 'Sí. Los jugadores informan de que funciona en el parche {build}.',
      broken: 'Ahora mismo no: los jugadores informan de que falla en el parche {build}.',
      mixed: 'Los informes del parche {build} son mixtos: a algunos jugadores les funciona y a otros no.',
      untested: 'Nadie ha informado todavía sobre el parche {build}. Si lo pruebas, añade un informe de campo.',
    },
    aCompatNoBuild: 'Todavía no hay informes de compatibilidad. Si lo pruebas, añade un informe de campo.',
    qDedicated: '¿{name} funciona en un servidor dedicado?',
    aDedicated: {
      yes: 'Sí. {name} se puede instalar en un servidor dedicado.',
      partial: 'En parte: algunas funciones van en un servidor dedicado y otras necesitan un anfitrión normal.',
      no: 'No. {name} no funciona en un servidor dedicado.',
    },
  },
  de: {
    qMultiplayer: 'Funktioniert {name} im Mehrspielermodus?',
    aMultiplayer: {
      client_side: 'Ja. {name} läuft clientseitig: Nur die Spieler, die es nutzen wollen, müssen es installieren.',
      host_only: 'Ja, aber nur der Host muss es installieren; die anderen Spieler können ohne beitreten.',
      all_players: 'Ja, aber alle Spieler der Sitzung müssen es installieren, am besten in derselben Version.',
      singleplayer_only: 'Nein. {name} funktioniert nur im Einzelspielermodus.',
      unknown:
        'Der Autor hat die Mehrspieler-Unterstützung noch nicht angegeben. Sieh dir die Kommentare und die Feldberichte anderer Spieler an.',
    },
    qInstall: 'Wie installiere ich {name}?',
    aInstallMod:
      'Installiere RedLoader (RedManager erledigt das für dich), lade {release} von dieser Seite herunter und lege es in den Ordner _RedLoader/Mods im Spielverzeichnis. Starte das Spiel und drücke F1, um zu prüfen, ob es geladen ist.',
    aInstallBuild:
      'Installiere RedLoader und den Mod BuildShare, lade den Bauplan {release} von dieser Seite herunter und importiere ihn im Spiel über das BuildShare-Menü.',
    qRequirements: 'Was braucht {name}?',
    aRequirementsNone: 'Nur Sons of the Forest auf Steam und RedLoader. Es gibt keine weiteren Abhängigkeiten.',
    aRequirementsList: 'Sons of the Forest auf Steam, RedLoader und: {list}.',
    aRequirementsBuild: 'Sons of the Forest auf Steam, RedLoader und den Mod BuildShare.',
    qCompat: 'Funktioniert {name} mit dem aktuellen Spielpatch?',
    aCompat: {
      works: 'Ja. Spieler melden, dass es mit Patch {build} funktioniert.',
      broken: 'Derzeit nicht: Spieler melden, dass es mit Patch {build} nicht funktioniert.',
      mixed: 'Die Berichte zu Patch {build} sind gemischt: Bei manchen Spielern funktioniert es, bei anderen nicht.',
      untested: 'Zu Patch {build} gibt es noch keine Berichte. Wenn du es ausprobierst, füge einen Feldbericht hinzu.',
    },
    aCompatNoBuild:
      'Es gibt noch keine Kompatibilitätsberichte. Wenn du es ausprobierst, füge einen Feldbericht hinzu.',
    qDedicated: 'Funktioniert {name} auf einem dedizierten Server?',
    aDedicated: {
      yes: 'Ja. {name} kann auf einem dedizierten Server installiert werden.',
      partial: 'Teilweise: Manche Funktionen laufen auf einem dedizierten Server, andere brauchen einen normalen Host.',
      no: 'Nein. {name} funktioniert nicht auf einem dedizierten Server.',
    },
  },
  fr: {
    qMultiplayer: '{name} fonctionne-t-il en multijoueur ?',
    aMultiplayer: {
      client_side: 'Oui. {name} est côté client : seuls les joueurs qui veulent l’utiliser doivent l’installer.',
      host_only: 'Oui, mais seul l’hôte doit l’installer ; les autres joueurs peuvent rejoindre sans.',
      all_players: 'Oui, mais tous les joueurs de la partie doivent l’installer, idéalement dans la même version.',
      singleplayer_only: 'Non. {name} ne fonctionne qu’en solo.',
      unknown:
        'L’auteur n’a pas encore précisé la compatibilité multijoueur. Consultez les commentaires et les rapports de terrain des autres joueurs.',
    },
    qInstall: 'Comment installer {name} ?',
    aInstallMod:
      'Installez RedLoader (RedManager peut le faire pour vous), téléchargez {release} depuis cette page et placez-le dans le dossier _RedLoader/Mods du répertoire du jeu. Lancez le jeu et appuyez sur F1 pour vérifier qu’il est chargé.',
    aInstallBuild:
      'Installez RedLoader et le mod BuildShare, téléchargez le plan {release} depuis cette page et importez-le depuis le menu BuildShare en jeu.',
    qRequirements: 'De quoi {name} a-t-il besoin ?',
    aRequirementsNone: 'Seulement de Sons of the Forest sur Steam et de RedLoader. Aucune autre dépendance.',
    aRequirementsList: 'Sons of the Forest sur Steam, RedLoader et : {list}.',
    aRequirementsBuild: 'Sons of the Forest sur Steam, RedLoader et le mod BuildShare.',
    qCompat: '{name} fonctionne-t-il avec le patch actuel du jeu ?',
    aCompat: {
      works: 'Oui. Les joueurs indiquent qu’il fonctionne avec le patch {build}.',
      broken: 'Pas pour le moment : les joueurs indiquent qu’il ne fonctionne pas avec le patch {build}.',
      mixed:
        'Les rapports pour le patch {build} sont partagés : il fonctionne chez certains joueurs et pas chez d’autres.',
      untested:
        'Personne n’a encore fait de rapport pour le patch {build}. Si vous l’essayez, ajoutez un rapport de terrain.',
    },
    aCompatNoBuild:
      'Il n’y a pas encore de rapport de compatibilité. Si vous l’essayez, ajoutez un rapport de terrain.',
    qDedicated: '{name} fonctionne-t-il sur un serveur dédié ?',
    aDedicated: {
      yes: 'Oui. {name} peut être installé sur un serveur dédié.',
      partial: 'En partie : certaines fonctions marchent sur un serveur dédié, d’autres nécessitent un hôte classique.',
      no: 'Non. {name} ne fonctionne pas sur un serveur dédié.',
    },
  },
  it: {
    qMultiplayer: '{name} funziona in multigiocatore?',
    aMultiplayer: {
      client_side: 'Sì. {name} è lato client: lo installano solo i giocatori che vogliono usarlo.',
      host_only: 'Sì, ma solo l’host deve installarlo; gli altri giocatori possono unirsi senza.',
      all_players: 'Sì, ma tutti i giocatori della sessione devono installarlo, possibilmente nella stessa versione.',
      singleplayer_only: 'No. {name} funziona solo in giocatore singolo.',
      unknown:
        'L’autore non ha ancora indicato il supporto al multigiocatore. Controlla i commenti e i rapporti sul campo degli altri giocatori.',
    },
    qInstall: 'Come si installa {name}?',
    aInstallMod:
      'Installa RedLoader (RedManager può farlo per te), scarica {release} da questa pagina e mettilo nella cartella _RedLoader/Mods della directory del gioco. Avvia il gioco e premi F1 per verificare che sia caricato.',
    aInstallBuild:
      'Installa RedLoader e la mod BuildShare, scarica il progetto {release} da questa pagina e importalo dal menu di BuildShare in gioco.',
    qRequirements: 'Di cosa ha bisogno {name}?',
    aRequirementsNone: 'Solo di Sons of the Forest su Steam e di RedLoader. Non ha altre dipendenze.',
    aRequirementsList: 'Sons of the Forest su Steam, RedLoader e: {list}.',
    aRequirementsBuild: 'Sons of the Forest su Steam, RedLoader e la mod BuildShare.',
    qCompat: '{name} funziona con la patch attuale del gioco?',
    aCompat: {
      works: 'Sì. I giocatori segnalano che funziona con la patch {build}.',
      broken: 'Al momento no: i giocatori segnalano che non funziona con la patch {build}.',
      mixed: 'Le segnalazioni per la patch {build} sono contrastanti: ad alcuni giocatori funziona e ad altri no.',
      untested:
        'Nessuno ha ancora inviato segnalazioni per la patch {build}. Se lo provi, aggiungi un rapporto sul campo.',
    },
    aCompatNoBuild: 'Non ci sono ancora segnalazioni di compatibilità. Se lo provi, aggiungi un rapporto sul campo.',
    qDedicated: '{name} funziona su un server dedicato?',
    aDedicated: {
      yes: 'Sì. {name} si può installare su un server dedicato.',
      partial: 'In parte: alcune funzioni vanno su un server dedicato, altre richiedono un host normale.',
      no: 'No. {name} non funziona su un server dedicato.',
    },
  },
  nl: {
    qMultiplayer: 'Werkt {name} in multiplayer?',
    aMultiplayer: {
      client_side:
        'Ja. {name} draait aan de clientkant: alleen spelers die het willen gebruiken, hoeven het te installeren.',
      host_only: 'Ja, maar alleen de host hoeft het te installeren; de andere spelers kunnen zonder meedoen.',
      all_players: 'Ja, maar alle spelers in de sessie moeten het installeren, het liefst dezelfde versie.',
      singleplayer_only: 'Nee. {name} werkt alleen in singleplayer.',
      unknown:
        'De maker heeft nog niet aangegeven of het in multiplayer werkt. Bekijk de reacties en de veldrapporten van andere spelers.',
    },
    qInstall: 'Hoe installeer ik {name}?',
    aInstallMod:
      'Installeer RedLoader (RedManager kan dat voor je doen), download {release} via deze pagina en zet het in de map _RedLoader/Mods in je gamemap. Start de game en druk op F1 om te controleren of het geladen is.',
    aInstallBuild:
      'Installeer RedLoader en de mod BuildShare, download de blauwdruk {release} via deze pagina en importeer hem in de game via het BuildShare-menu.',
    qRequirements: 'Wat heeft {name} nodig?',
    aRequirementsNone: 'Alleen Sons of the Forest op Steam en RedLoader. Er zijn geen andere afhankelijkheden.',
    aRequirementsList: 'Sons of the Forest op Steam, RedLoader en: {list}.',
    aRequirementsBuild: 'Sons of the Forest op Steam, RedLoader en de mod BuildShare.',
    qCompat: 'Werkt {name} met de huidige gamepatch?',
    aCompat: {
      works: 'Ja. Spelers melden dat het werkt op patch {build}.',
      broken: 'Op dit moment niet: spelers melden dat het niet werkt op patch {build}.',
      mixed: 'De meldingen voor patch {build} zijn wisselend: bij sommige spelers werkt het, bij andere niet.',
      untested: 'Er zijn nog geen meldingen voor patch {build}. Probeer je het, voeg dan een veldrapport toe.',
    },
    aCompatNoBuild: 'Er zijn nog geen compatibiliteitsmeldingen. Probeer je het, voeg dan een veldrapport toe.',
    qDedicated: 'Werkt {name} op een dedicated server?',
    aDedicated: {
      yes: 'Ja. {name} kan op een dedicated server worden geïnstalleerd.',
      partial: 'Gedeeltelijk: sommige functies werken op een dedicated server, andere hebben een gewone host nodig.',
      no: 'Nee. {name} werkt niet op een dedicated server.',
    },
  },
  pl: {
    qMultiplayer: 'Czy {name} działa w trybie wieloosobowym?',
    aMultiplayer: {
      client_side: 'Tak. {name} działa po stronie klienta: instalują go tylko gracze, którzy chcą z niego korzystać.',
      host_only: 'Tak, ale instaluje go tylko host; pozostali gracze mogą dołączyć bez niego.',
      all_players: 'Tak, ale wszyscy gracze w sesji muszą go zainstalować, najlepiej w tej samej wersji.',
      singleplayer_only: 'Nie. {name} działa tylko w trybie jednoosobowym.',
      unknown:
        'Autor nie podał jeszcze, czy działa w trybie wieloosobowym. Sprawdź komentarze i raporty z terenu innych graczy.',
    },
    qInstall: 'Jak zainstalować {name}?',
    aInstallMod:
      'Zainstaluj RedLoader (RedManager może zrobić to za ciebie), pobierz {release} z tej strony i umieść go w folderze _RedLoader/Mods w katalogu gry. Uruchom grę i naciśnij F1, aby sprawdzić, czy się wczytał.',
    aInstallBuild:
      'Zainstaluj RedLoader i mod BuildShare, pobierz projekt {release} z tej strony i zaimportuj go w grze z menu BuildShare.',
    qRequirements: 'Czego potrzebuje {name}?',
    aRequirementsNone: 'Tylko Sons of the Forest na Steamie i RedLoadera. Nie ma innych zależności.',
    aRequirementsList: 'Sons of the Forest na Steamie, RedLoadera oraz: {list}.',
    aRequirementsBuild: 'Sons of the Forest na Steamie, RedLoadera i moda BuildShare.',
    qCompat: 'Czy {name} działa z aktualną łatką gry?',
    aCompat: {
      works: 'Tak. Gracze zgłaszają, że działa z łatką {build}.',
      broken: 'Obecnie nie: gracze zgłaszają, że nie działa z łatką {build}.',
      mixed: 'Zgłoszenia dla łatki {build} są różne: u części graczy działa, u innych nie.',
      untested: 'Nikt jeszcze nie zgłosił wyników dla łatki {build}. Jeśli go wypróbujesz, dodaj raport z terenu.',
    },
    aCompatNoBuild: 'Nie ma jeszcze zgłoszeń zgodności. Jeśli go wypróbujesz, dodaj raport z terenu.',
    qDedicated: 'Czy {name} działa na serwerze dedykowanym?',
    aDedicated: {
      yes: 'Tak. {name} można zainstalować na serwerze dedykowanym.',
      partial: 'Częściowo: niektóre funkcje działają na serwerze dedykowanym, inne wymagają zwykłego hosta.',
      no: 'Nie. {name} nie działa na serwerze dedykowanym.',
    },
  },
  pt: {
    qMultiplayer: '{name} funciona no multijogador?',
    aMultiplayer: {
      client_side: 'Sim. {name} funciona do lado do cliente: só instala quem quiser usar.',
      host_only: 'Sim, mas só o anfitrião precisa instalar; os outros jogadores podem entrar sem ele.',
      all_players: 'Sim, mas todos os jogadores da partida precisam instalar, de preferência a mesma versão.',
      singleplayer_only: 'Não. {name} só funciona no modo solo.',
      unknown:
        'O autor ainda não informou se funciona no multijogador. Veja os comentários e os relatórios de campo de outros jogadores.',
    },
    qInstall: 'Como instalar {name}?',
    aInstallMod:
      'Instale o RedLoader (o RedManager pode fazer isso por você), baixe {release} nesta página e coloque na pasta _RedLoader/Mods dentro do diretório do jogo. Abra o jogo e aperte F1 para confirmar que carregou.',
    aInstallBuild:
      'Instale o RedLoader e o mod BuildShare, baixe a planta {release} nesta página e importe pelo menu do BuildShare no jogo.',
    qRequirements: 'Do que {name} precisa?',
    aRequirementsNone: 'Só do Sons of the Forest na Steam e do RedLoader. Não tem outras dependências.',
    aRequirementsList: 'Sons of the Forest na Steam, RedLoader e: {list}.',
    aRequirementsBuild: 'Sons of the Forest na Steam, RedLoader e o mod BuildShare.',
    qCompat: '{name} funciona no patch atual do jogo?',
    aCompat: {
      works: 'Sim. Os jogadores relatam que funciona no patch {build}.',
      broken: 'No momento, não: os jogadores relatam que está quebrado no patch {build}.',
      mixed: 'Os relatos do patch {build} são mistos: funciona para alguns jogadores e para outros não.',
      untested: 'Ninguém relatou nada sobre o patch {build} ainda. Se você testar, adicione um relatório de campo.',
    },
    aCompatNoBuild: 'Ainda não há relatos de compatibilidade. Se você testar, adicione um relatório de campo.',
    qDedicated: '{name} funciona em servidor dedicado?',
    aDedicated: {
      yes: 'Sim. {name} pode ser instalado em um servidor dedicado.',
      partial: 'Em parte: alguns recursos funcionam em servidor dedicado, outros precisam de um anfitrião comum.',
      no: 'Não. {name} não funciona em servidor dedicado.',
    },
  },
  ru: {
    qMultiplayer: 'Работает ли {name} в мультиплеере?',
    aMultiplayer: {
      client_side:
        'Да. {name} работает на стороне клиента: устанавливать его нужно только тем, кто хочет им пользоваться.',
      host_only: 'Да, но устанавливать его нужно только хосту; остальные игроки могут подключаться без него.',
      all_players: 'Да, но его должны установить все игроки в сессии, желательно одной версии.',
      singleplayer_only: 'Нет. {name} работает только в одиночной игре.',
      unknown:
        'Автор пока не указал, поддерживается ли мультиплеер. Посмотрите комментарии и полевые отчёты других игроков.',
    },
    qInstall: 'Как установить {name}?',
    aInstallMod:
      'Установите RedLoader (RedManager может сделать это за вас), скачайте {release} на этой странице и положите в папку _RedLoader/Mods в каталоге игры. Запустите игру и нажмите F1, чтобы убедиться, что мод загрузился.',
    aInstallBuild:
      'Установите RedLoader и мод BuildShare, скачайте чертёж {release} на этой странице и импортируйте его через меню BuildShare в игре.',
    qRequirements: 'Что нужно для {name}?',
    aRequirementsNone: 'Только Sons of the Forest в Steam и RedLoader. Других зависимостей нет.',
    aRequirementsList: 'Sons of the Forest в Steam, RedLoader и: {list}.',
    aRequirementsBuild: 'Sons of the Forest в Steam, RedLoader и мод BuildShare.',
    qCompat: 'Работает ли {name} на текущем патче игры?',
    aCompat: {
      works: 'Да. Игроки сообщают, что он работает на патче {build}.',
      broken: 'Сейчас нет: игроки сообщают, что он не работает на патче {build}.',
      mixed: 'Отчёты по патчу {build} расходятся: у одних игроков он работает, у других нет.',
      untested: 'По патчу {build} отчётов пока нет. Если попробуете, добавьте полевой отчёт.',
    },
    aCompatNoBuild: 'Отчётов о совместимости пока нет. Если попробуете, добавьте полевой отчёт.',
    qDedicated: 'Работает ли {name} на выделенном сервере?',
    aDedicated: {
      yes: 'Да. {name} можно установить на выделенный сервер.',
      partial: 'Частично: некоторые функции работают на выделенном сервере, для других нужен обычный хост.',
      no: 'Нет. {name} не работает на выделенном сервере.',
    },
  },
  sv: {
    qMultiplayer: 'Fungerar {name} i flerspelarläge?',
    aMultiplayer: {
      client_side: 'Ja. {name} körs på klientsidan: bara de spelare som vill använda den behöver installera den.',
      host_only: 'Ja, men bara värden behöver installera den; de andra spelarna kan ansluta utan den.',
      all_players: 'Ja, men alla spelare i sessionen måste installera den, helst samma version.',
      singleplayer_only: 'Nej. {name} fungerar bara i enspelarläge.',
      unknown:
        'Skaparen har ännu inte angett om den fungerar i flerspelarläge. Kolla kommentarerna och andra spelares fältrapporter.',
    },
    qInstall: 'Hur installerar jag {name}?',
    aInstallMod:
      'Installera RedLoader (RedManager kan göra det åt dig), ladda ner {release} från den här sidan och lägg den i mappen _RedLoader/Mods i spelets katalog. Starta spelet och tryck på F1 för att se att den laddats.',
    aInstallBuild:
      'Installera RedLoader och modden BuildShare, ladda ner ritningen {release} från den här sidan och importera den från BuildShare-menyn i spelet.',
    qRequirements: 'Vad behöver {name}?',
    aRequirementsNone: 'Bara Sons of the Forest på Steam och RedLoader. Den har inga andra beroenden.',
    aRequirementsList: 'Sons of the Forest på Steam, RedLoader och: {list}.',
    aRequirementsBuild: 'Sons of the Forest på Steam, RedLoader och modden BuildShare.',
    qCompat: 'Fungerar {name} med spelets nuvarande patch?',
    aCompat: {
      works: 'Ja. Spelare rapporterar att den fungerar med patch {build}.',
      broken: 'Inte just nu: spelare rapporterar att den inte fungerar med patch {build}.',
      mixed: 'Rapporterna för patch {build} är blandade: den fungerar för vissa spelare men inte för andra.',
      untested: 'Ingen har rapporterat om patch {build} ännu. Om du testar den, lägg till en fältrapport.',
    },
    aCompatNoBuild: 'Det finns inga kompatibilitetsrapporter ännu. Om du testar den, lägg till en fältrapport.',
    qDedicated: 'Fungerar {name} på en dedikerad server?',
    aDedicated: {
      yes: 'Ja. {name} kan installeras på en dedikerad server.',
      partial: 'Delvis: vissa funktioner fungerar på en dedikerad server, andra kräver en vanlig värd.',
      no: 'Nej. {name} fungerar inte på en dedikerad server.',
    },
  },
  tr: {
    qMultiplayer: '{name} çok oyunculu modda çalışıyor mu?',
    aMultiplayer: {
      client_side: 'Evet. {name} istemci tarafında çalışır: yalnızca kullanmak isteyen oyuncuların kurması gerekir.',
      host_only: 'Evet, ancak yalnızca sunucuyu açan oyuncunun kurması gerekir; diğer oyuncular onsuz katılabilir.',
      all_players: 'Evet, ancak oturumdaki tüm oyuncuların kurması gerekir; tercihen aynı sürümü.',
      singleplayer_only: 'Hayır. {name} yalnızca tek oyunculu modda çalışır.',
      unknown:
        'Yapımcı çok oyunculu desteği henüz belirtmedi. Diğer oyuncuların yorumlarına ve saha raporlarına göz at.',
    },
    qInstall: '{name} nasıl kurulur?',
    aInstallMod:
      'RedLoader’ı kur (RedManager bunu senin yerine yapabilir), {release} dosyasını bu sayfadan indir ve oyun dizinindeki _RedLoader/Mods klasörüne koy. Oyunu başlat ve yüklendiğini görmek için F1’e bas.',
    aInstallBuild:
      'RedLoader’ı ve BuildShare modunu kur, {release} planını bu sayfadan indir ve oyunda BuildShare menüsünden içe aktar.',
    qRequirements: '{name} için neler gerekir?',
    aRequirementsNone: 'Yalnızca Steam’deki Sons of the Forest ve RedLoader. Başka bağımlılığı yok.',
    aRequirementsList: 'Steam’deki Sons of the Forest, RedLoader ve şunlar: {list}.',
    aRequirementsBuild: 'Steam’deki Sons of the Forest, RedLoader ve BuildShare modu.',
    qCompat: '{name} oyunun güncel yamasıyla çalışıyor mu?',
    aCompat: {
      works: 'Evet. Oyuncular {build} yamasında çalıştığını bildiriyor.',
      broken: 'Şu anda hayır: oyuncular {build} yamasında bozuk olduğunu bildiriyor.',
      mixed: '{build} yaması için raporlar karışık: bazı oyuncularda çalışıyor, bazılarında çalışmıyor.',
      untested: '{build} yaması için henüz rapor yok. Denersen bir saha raporu ekle.',
    },
    aCompatNoBuild: 'Henüz uyumluluk raporu yok. Denersen bir saha raporu ekle.',
    qDedicated: '{name} özel sunucuda çalışıyor mu?',
    aDedicated: {
      yes: 'Evet. {name} özel sunucuya kurulabilir.',
      partial: 'Kısmen: bazı özellikler özel sunucuda çalışır, diğerleri normal bir oyun sahibi gerektirir.',
      no: 'Hayır. {name} özel sunucuda çalışmaz.',
    },
  },
  zh: {
    qMultiplayer: '{name} 支持多人游戏吗？',
    aMultiplayer: {
      client_side: '支持。{name} 是客户端模组：只有想用它的玩家需要安装。',
      host_only: '支持，但只需要房主安装；其他玩家不安装也能加入。',
      all_players: '支持，但本局所有玩家都必须安装，最好是同一版本。',
      singleplayer_only: '不支持。{name} 只能在单人模式中使用。',
      unknown: '作者尚未说明是否支持多人游戏。可以看看评论和其他玩家的实测报告。',
    },
    qInstall: '如何安装 {name}？',
    aInstallMod:
      '先安装 RedLoader（RedManager 可以帮你完成），在本页下载 {release}，放进游戏目录中的 _RedLoader/Mods 文件夹。启动游戏后按 F1，确认它已经加载。',
    aInstallBuild:
      '安装 RedLoader 和 BuildShare 模组，在本页下载 {release} 蓝图，然后在游戏内的 BuildShare 菜单中导入。',
    qRequirements: '{name} 需要什么？',
    aRequirementsNone: '只需要 Steam 版 Sons of the Forest 和 RedLoader，没有其他依赖。',
    aRequirementsList: 'Steam 版 Sons of the Forest、RedLoader，以及：{list}。',
    aRequirementsBuild: 'Steam 版 Sons of the Forest、RedLoader 和 BuildShare 模组。',
    qCompat: '{name} 在当前游戏补丁上能用吗？',
    aCompat: {
      works: '能用。玩家报告它在 {build} 补丁上运行正常。',
      broken: '目前不能：玩家报告它在 {build} 补丁上已失效。',
      mixed: '{build} 补丁的报告不一：有些玩家能用，有些不能。',
      untested: '还没有人报告 {build} 补丁上的情况。如果你试过，请提交一份实测报告。',
    },
    aCompatNoBuild: '还没有兼容性报告。如果你试过，请提交一份实测报告。',
    qDedicated: '{name} 能在专用服务器上运行吗？',
    aDedicated: {
      yes: '能。{name} 可以安装在专用服务器上。',
      partial: '部分可以：有些功能能在专用服务器上运行，其他功能需要普通房主。',
      no: '不能。{name} 无法在专用服务器上运行。',
    },
  },
  ja: {
    qMultiplayer: '{name} はマルチプレイで使えますか？',
    aMultiplayer: {
      client_side: '使えます。{name} はクライアント側のMODで、使いたいプレイヤーだけがインストールすれば大丈夫です。',
      host_only: '使えます。ただしインストールが必要なのはホストだけで、ほかのプレイヤーはそのまま参加できます。',
      all_players: '使えます。ただしセッションの全員がインストールする必要があり、同じバージョンが推奨です。',
      singleplayer_only: '使えません。{name} はシングルプレイ専用です。',
      unknown: '作者はまだマルチプレイ対応を明記していません。コメントやほかのプレイヤーの動作報告を確認してください。',
    },
    qInstall: '{name} はどうやってインストールしますか？',
    aInstallMod:
      'RedLoader をインストールし（RedManager なら自動で行えます）、このページから {release} をダウンロードして、ゲームフォルダ内の _RedLoader/Mods フォルダに入れます。ゲームを起動して F1 を押すと、読み込まれたか確認できます。',
    aInstallBuild:
      'RedLoader と BuildShare MODをインストールし、このページから {release} の設計図をダウンロードして、ゲーム内の BuildShare メニューからインポートします。',
    qRequirements: '{name} に必要なものは何ですか？',
    aRequirementsNone: 'Steam 版の Sons of the Forest と RedLoader だけです。ほかの依存関係はありません。',
    aRequirementsList: 'Steam 版の Sons of the Forest、RedLoader、そして次のMOD：{list}。',
    aRequirementsBuild: 'Steam 版の Sons of the Forest、RedLoader、BuildShare MODです。',
    qCompat: '{name} は現在のゲームパッチで動きますか？',
    aCompat: {
      works: '動きます。パッチ {build} で動作するとプレイヤーから報告されています。',
      broken: '現在は動きません。パッチ {build} で動作しないとプレイヤーから報告されています。',
      mixed: 'パッチ {build} の報告は分かれています。動くプレイヤーもいれば、動かないプレイヤーもいます。',
      untested: 'パッチ {build} での報告はまだありません。試したら動作報告を追加してください。',
    },
    aCompatNoBuild: '互換性の報告はまだありません。試したら動作報告を追加してください。',
    qDedicated: '{name} は専用サーバーで使えますか？',
    aDedicated: {
      yes: '使えます。{name} は専用サーバーにインストールできます。',
      partial: '一部だけ使えます。専用サーバーで動く機能もあれば、通常のホストが必要な機能もあります。',
      no: '使えません。{name} は専用サーバーでは動作しません。',
    },
  },
};

export interface FaqEntry {
  /** Stable anchor (`faq-multiplayer`…). */
  id: string;
  question: string;
  answer: string;
}

/** The facts the FAQ is generated from (a subset of `ModDetailDTO`). */
export type FaqFacts = Pick<
  ModDetailDTO,
  'kind' | 'name' | 'multiplayerRole' | 'dedicatedServer' | 'dependencies' | 'compatCurrent'
> & { latestVersion: { version: string } | null };

function fill(template: string, values: Readonly<Record<string, string>>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

function listOf(locale: Locale, items: readonly string[]): string {
  try {
    return new Intl.ListFormat(LOCALE_INFO[locale].tag, { style: 'long', type: 'conjunction' }).format(items);
  } catch {
    return items.join(', ');
  }
}

/** The FAQ of a mod or build in `locale` (only questions with a factual answer). */
export function buildModFaq(facts: FaqFacts, locale: Locale): FaqEntry[] {
  const t = FAQ_TEMPLATES[locale];
  const name = facts.name.trim();
  const release = facts.latestVersion ? `${name} ${facts.latestVersion.version}` : name;
  const values = { name, release };
  const out: FaqEntry[] = [];
  const isBuild = facts.kind === 'build';

  if (!isBuild) {
    const role: MultiplayerKey = facts.multiplayerRole ?? 'unknown';
    out.push({
      id: 'faq-multiplayer',
      question: fill(t.qMultiplayer, values),
      answer: fill(t.aMultiplayer[role], values),
    });
  }

  out.push({
    id: 'faq-install',
    question: fill(t.qInstall, values),
    answer: fill(isBuild ? t.aInstallBuild : t.aInstallMod, values),
  });

  const required = facts.dependencies
    .filter((dependency) => dependency.kind === 'required')
    .map((dependency) => dependency.mod?.name ?? dependency.manifestId);
  const requirements =
    required.length > 0
      ? fill(t.aRequirementsList, { ...values, list: listOf(locale, [...new Set(required)]) })
      : isBuild
        ? fill(t.aRequirementsBuild, values)
        : fill(t.aRequirementsNone, values);
  out.push({ id: 'faq-requirements', question: fill(t.qRequirements, values), answer: requirements });

  if (!isBuild) {
    const build = facts.compatCurrent.gameBuild?.label ?? null;
    out.push({
      id: 'faq-compatibility',
      question: fill(t.qCompat, values),
      answer: build
        ? fill(t.aCompat[facts.compatCurrent.status], { ...values, build })
        : fill(t.aCompatNoBuild, values),
    });
    const dedicated = facts.dedicatedServer;
    if (dedicated === 'yes' || dedicated === 'partial' || dedicated === 'no') {
      out.push({
        id: 'faq-dedicated-server',
        question: fill(t.qDedicated, values),
        answer: fill(t.aDedicated[dedicated], values),
      });
    }
  }
  return out;
}
