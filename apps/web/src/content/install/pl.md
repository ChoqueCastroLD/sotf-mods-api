---
title: Jak instalować mody do Sons of the Forest
seoTitle: Jak instalować mody do Sons of the Forest (2026): RedLoader
description: Zainstaluj RedLoader przez RedManager, wrzuć mody do folderu Mods i sprawdź je w grze. Poradnik krok po kroku z rozwiązaniami problemów z antywirusem i łatkami.
tldr: Zainstaluj RedLoader, loader modów, przez RedManager (albo ręcznie), wrzuć każdy mod do folderu Mods w katalogu gry i uruchom grę. RedManager zainstaluje dowolny mod z SOTF Mods jednym kliknięciem. Zajmuje to około trzech minut, a poniższy poradnik omawia każdy krok i typowe problemy.
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: Sprawdź grę
  redloader: Zainstaluj RedLoader
  mods: Dodaj mody
  verify: Sprawdź w grze
  antivirus: Ostrzeżenia antywirusa
  bepinex: BepInEx czy RedLoader?
  update: Aktualizacja i usuwanie
  dedicated: Serwery dedykowane
  troubleshooting: Rozwiązywanie problemów
  oneclick: Instalator jednym kliknięciem
faq:
  - q: Czy muszę mieć grę na Steamie?
    a: Tak. Mody do Sons of the Forest działają z wersją gry na PC. RedLoader modyfikuje pliki gry w instalacji Steam, więc potrzebujesz gry zainstalowanej ze Steama na Windowsie (albo na Linuksie i Steam Decku przez Proton).
  - q: Czy mogę dostać bana za mody?
    a: Sons of the Forest nie ma systemu antycheat, a społeczność otwarcie używa modów. W trybie wieloosobowym dołączaj do gier i hostuj je tylko z graczami, którzy zgadzają się na mody, i trzymajcie się tych samych modów i wersji.
  - q: Czy mody zepsują mój zapis gry?
    a: Większość modów nie rusza zapisu. Mody dodające przedmioty, budowle lub zmiany w świecie mogą zostawić ślady, jeśli usuniesz je w trakcie rozgrywki; strona moda mówi, czy można go bezpiecznie usunąć. Zrób kopię folderu z zapisami przed testowaniem dużych modów.
  - q: Dlaczego po instalacji moda nic się nie dzieje?
    a: Zwykle RedLoader nie jest zainstalowany albo jest nieaktualny, mod został rozpakowany do złego folderu, brakuje wymaganej biblioteki albo mod jest do BepInEx. Przejdź przez sekcję Rozwiązywanie problemów, zaczynając od konsoli RedLoadera.
  - q: Gdzie są pliki gry?
    a: W Steamie kliknij prawym przyciskiem Sons of the Forest, wybierz Zarządzaj, a potem Przeglądaj pliki lokalne. Otwarty folder zawiera SonsOfTheForest.exe; tam trafiają RedLoader i twoje mody.
  - q: Czy mody działają po aktualizacji gry?
    a: Nie zawsze. Łatka może zepsuć RedLoader albo pojedyncze mody, dopóki nie zostaną zaktualizowane. Sprawdź stronę moda, komentarze i recenzje, aby zobaczyć, czy działa z obecną wersją gry.
---

# Sprawdź grę

Mody działają z **wersją Sons of the Forest na PC ze Steama** (Windows albo Linux i Steam Deck przez Proton). Zaktualizuj grę w Steamie przed rozpoczęciem: RedLoader i większość modów nadąża za najnowszą łatką.

Znajdź folder gry: w Steamie kliknij prawym przyciskiem **Sons of the Forest** → **Zarządzaj** → **Przeglądaj pliki lokalne**. Otwarty folder zawiera `SonsOfTheForest.exe`. Zwykle jest to:

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> Właśnie wyszła aktualizacja gry? Sprawdź stronę moda, komentarze i recenzje, aby zobaczyć, czy działa już z nową wersją.

# Zainstaluj RedLoader

RedLoader to loader modów stworzony dla Sons of the Forest. Potrzebuje go każdy mod z SOTF Mods. Można go zainstalować na dwa sposoby.

## Opcja A: RedManager (zalecana)

RedManager to darmowy menedżer modów do RedLoadera od tego samego twórcy. Instaluje RedLoader za ciebie i jednym kliknięciem instaluje dowolny mod z SOTF Mods wraz z zależnościami.

1. Pobierz najnowszy RedManager z jego [oficjalnej strony wydań](https://github.com/ToniMacaroni/RedManager/releases).
2. Uruchom go. Sam znajdzie folder gry (albo pozwoli ci go wskazać).
3. Kliknij **Install RedLoader** i poczekaj, aż skończy.

## Opcja B: instalacja ręczna

1. Pobierz najnowszy `RedLoader.zip` z [oficjalnych wydań RedLoadera](https://github.com/ToniMacaroni/RedLoader/releases).
2. Rozpakuj wszystko do folderu gry, obok `SonsOfTheForest.exe`.
3. Uruchom grę raz. RedLoader otworzy okno konsoli i utworzy swoje foldery: `_RedLoader`, `Mods` i `Libs`.

> [!WARNING]
> Pobieraj RedLoader i RedManager tylko z ich oficjalnych stron na GitHubie. Kopie z innych serwisów mogą być nieaktualne lub zmodyfikowane.

# Dodaj mody

**Przez RedManager:** wyszukaj mod, kliknij **Install**, a RedManager pobierze go wraz z wymaganymi bibliotekami do właściwych folderów.

**Ręcznie:**

1. Na stronie moda przeczytaj **Wymagania** i najpierw zainstaluj wszystkie wymagane biblioteki.
2. Kliknij **Pobierz** i otwórz plik `.zip`.
3. Rozpakuj go do folderu gry, zachowując foldery z archiwum. Pliki moda trafią do `Mods` (plik `.dll`, często z folderem o tej samej nazwie), a biblioteki do `Libs`, jeśli mod je zawiera.
4. Jeśli archiwum zawiera tylko plik `.dll`, wrzuć go bezpośrednio do folderu `Mods`.

> [!IMPORTANT]
> Mody na serwery dedykowane trafiają do folderu serwera, a nie gry. Zobacz [Serwery dedykowane](#dedicated).

# Sprawdź w grze

1. Uruchom grę ze Steama jak zwykle. Obok gry otworzy się konsola RedLoadera z listą wczytanych modów; błędy są na czerwono.
2. Na ekranie tytułowym naciśnij **F1**, aby otworzyć panel RedLoadera, i sprawdź, czy twoje mody są na liście. Mody z ustawieniami pokazują je właśnie tam.
3. Rozpocznij lub wczytaj grę i wypróbuj mod.

Jeśli jakiegoś moda brakuje na liście, przejdź do sekcji [Rozwiązywanie problemów](#troubleshooting).

# Ostrzeżenia antywirusa (fałszywe alarmy)

Niektóre antywirusy i Windows SmartScreen oznaczają RedLoader, RedManager lub mod. Loadery modów wstrzykują kod do gry (dokładnie tego szukają heurystyki), więc ostrzeżenia zdarzają się nawet przy czystych plikach.

Zanim zaufasz plikowi:

- **Pobieraj tylko z oficjalnego źródła**: ze strony moda na SOTF Mods albo z oficjalnych wydań RedLoadera i RedManagera na GitHubie.
- **Porównaj sumę kontrolną.** Każda wersja na SOTF Mods pokazuje SHA-256 pliku. W Windowsie uruchom w PowerShellu `Get-FileHash .\plik.zip` (albo `certutil -hashfile plik.zip SHA256`) i porównaj wynik.
- **Sprawdź skan.** Każda opublikowana wersja jest skanowana przez VirusTotal; raport jest podlinkowany na stronie wersji. Możesz też samodzielnie wgrać plik do [VirusTotal](https://www.virustotal.com).

Jeśli wszystko się zgadza, możesz przywrócić plik z kwarantanny i dodać wyjątek **tylko dla folderu gry**. Nigdy nie wyłączaj antywirusa całkowicie. Jeśli coś wygląda podejrzanie, zgłoś mod z jego strony: moderatorzy szybko sprawdzają zgłoszenia.

# BepInEx czy RedLoader?

SOTF Mods publikuje mody do **RedLoadera**. Mody zrobione do BepInEx (popularne w innych serwisach) wymagają innego loadera: wrzucone do folderów RedLoadera po prostu nic nie robią i nie pokazują żadnego błędu.

- Przed instalacją sprawdź, czy mod jest przeznaczony dla RedLoadera.
- Nie instaluj obu loaderów naraz. Jeśli wcześniej używałeś BepInEx, usuń jego pliki z folderu gry (`BepInEx`, `doorstop_config.ini` i `winhttp.dll`).

# Aktualizacja i usuwanie

**Aktualizacja moda:** RedManager pokazuje dostępne aktualizacje. Ręcznie pobierz nową wersję i nadpisz stare pliki. Najpierw przeczytaj listę zmian: niektóre aktualizacje wymagają nowej biblioteki albo czystej konfiguracji.

**Aktualizacja RedLoadera:** użyj RedManagera albo rozpakuj nowe wydanie na stare. Jeśli po łatce gra przestała się uruchamiać, poczekaj na nowe wydanie RedLoadera.

**Usunięcie moda:** usuń jego plik `.dll` i folder z `Mods`. Najpierw zajrzyj na stronę moda: niektórych modów nie da się bezpiecznie usunąć w trakcie rozgrywki.

**Całkowite usunięcie RedLoadera:** usuń `_RedLoader`, `Mods` i `Libs` oraz pozostałe pliki, które archiwum RedLoadera dodało obok `SonsOfTheForest.exe`, a potem w Steamie użyj **Właściwości → Zainstalowane pliki → Zweryfikuj spójność plików gry**.

# Serwery dedykowane

RedLoader działa też na serwerze dedykowanym Sons of the Forest.

1. Zainstaluj RedLoader w folderze serwera (tym z plikiem `SonsOfTheForestDS.exe`), tak jak przy instalacji ręcznej.
2. Instaluj tylko mody, których strona mówi, że obsługują serwery dedykowane, do folderu `Mods` serwera.
3. Sprawdź uwagę o trybie wieloosobowym przy każdym modzie: niektóre są potrzebne tylko na serwerze, inne także w grze każdego gracza. Wszyscy muszą używać tych samych wersji.

Wielu dostawców serwerów oferuje RedLoader jako opcję instalowaną jednym kliknięciem w panelu. Jeśli twój nie, wgraj pliki przez menedżer plików albo FTP.

# Rozwiązywanie problemów

## Nic się nie dzieje: brak konsoli i modów

RedLoader się nie uruchamia. Upewnij się, że jego pliki leżą obok `SonsOfTheForest.exe` (nie w podfolderze), że uruchomiłeś grę ze Steama i że antywirus nie przeniósł ich do kwarantanny. W razie wątpliwości zainstaluj RedLoader ponownie.

## Gra się wysypuje lub zamyka przy starcie

Zwykle dzieje się tak po aktualizacji gry. Poszukaj w [wydaniach RedLoadera](https://github.com/ToniMacaroni/RedLoader/releases) wersji obsługującej nowy build. Aby znaleźć wadliwy mod, wyjmij wszystkie mody z `Mods` i dodawaj je z powrotem po kilka naraz.

## Moda nie ma na liście

Prawdopodobnie jest w złym folderze, brakuje mu wymaganej biblioteki albo jest do BepInEx. Przeczytaj czerwone linie w konsoli RedLoadera: wskazują brakujący plik lub bibliotekę.

## „System Windows ochronił ten komputer”

SmartScreen ostrzega przed programami, które widzi rzadko. Jeśli pobrałeś RedManager z oficjalnej strony, kliknij **Więcej informacji → Uruchom mimo to**. Zobacz [Ostrzeżenia antywirusa](#antivirus).

## RedManager nie znajduje gry

Wskaż folder gry ręcznie w ustawieniach RedManagera: folder, który zawiera `SonsOfTheForest.exe`.

## Gracze nie mogą dołączyć albo gra się rozsynchronizowuje

Wszyscy muszą używać tych samych modów i wersji, chyba że mod mówi, że potrzebuje go tylko host. Porównajcie listy modów i zaktualizujcie je do tych samych wersji.

# Instalator jednym kliknięciem został wycofany

Stary instalator **SOTF Mods One-Click** (`sotfmodsoneclick-setup`) nie działa już z serwisem i nie jest oferowany. Jeśli go zainstalowałeś, odinstaluj go w **Ustawienia systemu Windows → Aplikacje**.

Zamiast niego używaj [RedManagera](https://github.com/ToniMacaroni/RedManager/releases): instaluje RedLoader i dowolny mod z SOTF Mods wraz z zależnościami jednym kliknięciem.
