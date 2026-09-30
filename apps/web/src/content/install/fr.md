---
title: Comment installer des mods pour Sons of the Forest
seoTitle: Installer des mods Sons of the Forest (2026) — Guide RedLoader
description: Installez RedLoader avec RedManager, placez les mods dans le dossier Mods et vérifiez-les en jeu. Guide pas à pas avec solutions aux alertes antivirus et aux patchs.
tldr: Installez RedLoader, le chargeur de mods, avec RedManager (ou à la main), placez chaque mod dans le dossier Mods du répertoire du jeu et lancez le jeu. RedManager installe n’importe quel mod de SOTF Mods en un clic. Comptez environ trois minutes ; le guide ci-dessous couvre chaque étape et les problèmes courants.
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: Vérifier le jeu
  redloader: Installer RedLoader
  mods: Ajouter des mods
  verify: Vérifier en jeu
  antivirus: Alertes antivirus
  bepinex: BepInEx ou RedLoader ?
  update: Mettre à jour et désinstaller
  dedicated: Serveurs dédiés
  troubleshooting: Dépannage
  oneclick: Installateur en un clic
faq:
  - q: Dois-je posséder le jeu sur Steam ?
    a: Oui. Les mods de Sons of the Forest fonctionnent avec la version PC du jeu. RedLoader modifie les fichiers du jeu dans votre installation Steam ; il vous faut donc le jeu installé depuis Steam sous Windows (ou sous Linux et Steam Deck via Proton).
  - q: Puis-je être banni pour avoir utilisé des mods ?
    a: Sons of the Forest n’a pas d’anti-triche et la communauté utilise les mods ouvertement. En multijoueur, ne rejoignez ou n’hébergez des parties qu’avec des joueurs d’accord pour utiliser des mods, et gardez tout le monde sur les mêmes mods et versions.
  - q: Les mods vont-ils casser ma sauvegarde ?
    a: La plupart des mods ne touchent pas à votre sauvegarde. Ceux qui ajoutent des objets, des constructions ou des changements au monde peuvent laisser des traces si vous les retirez en cours de partie ; la page du mod indique s’il peut être retiré sans risque. Sauvegardez votre dossier de parties avant d’essayer de gros mods.
  - q: Pourquoi rien ne se passe après l’installation d’un mod ?
    a: En général, RedLoader n’est pas installé ou pas à jour, le mod a été extrait dans le mauvais dossier, une bibliothèque requise manque ou le mod a été fait pour BepInEx. Suivez les vérifications de la section Dépannage, en commençant par la console de RedLoader.
  - q: Où sont les fichiers du jeu ?
    a: Dans Steam, faites un clic droit sur Sons of the Forest, choisissez Gérer puis Parcourir les fichiers locaux. Le dossier qui s’ouvre contient SonsOfTheForest.exe ; RedLoader et vos mods vont là.
  - q: Les mods fonctionnent-ils après une mise à jour du jeu ?
    a: Pas toujours. Un patch peut casser RedLoader ou certains mods jusqu’à leur mise à jour. Patch Radar affiche le build actuel du jeu, l’état de RedLoader et les mods populaires que les joueurs ont confirmés comme fonctionnels.
---

# Vérifier le jeu

Les mods fonctionnent avec la **version PC de Sons of the Forest sur Steam** (Windows, ou Linux et Steam Deck via Proton). Mettez le jeu à jour dans Steam avant de commencer : RedLoader et la plupart des mods suivent le dernier patch.

Trouvez le dossier du jeu : dans Steam, clic droit sur **Sons of the Forest** → **Gérer** → **Parcourir les fichiers locaux**. Le dossier qui s’ouvre contient `SonsOfTheForest.exe`. En général, c’est :

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> Une mise à jour du jeu vient de sortir ? Consultez d’abord [Patch Radar](/patch-radar) : il indique si RedLoader et les mods populaires fonctionnent déjà sur le nouveau build.

# Installer RedLoader

RedLoader est le chargeur de mods conçu pour Sons of the Forest. Tous les mods de SOTF Mods en ont besoin. Il y a deux façons de l’installer.

## Option A : RedManager (recommandé)

RedManager est le gestionnaire de mods gratuit pour RedLoader, du même développeur. Il installe RedLoader pour vous et peut installer n’importe quel mod de SOTF Mods, avec ses dépendances, en un clic.

1. Téléchargez la dernière version de RedManager sur sa [page de versions officielle](https://github.com/ToniMacaroni/RedManager/releases).
2. Lancez-le. Il trouve le dossier du jeu automatiquement (ou vous laisse le choisir).
3. Cliquez sur **Install RedLoader** et attendez la fin.

## Option B : installation manuelle

1. Téléchargez le dernier `RedLoader.zip` depuis les [versions officielles de RedLoader](https://github.com/ToniMacaroni/RedLoader/releases).
2. Extrayez tout dans le dossier du jeu, à côté de `SonsOfTheForest.exe`.
3. Lancez le jeu une fois. RedLoader ouvre une fenêtre de console et crée ses dossiers : `_RedLoader`, `Mods` et `Libs`.

> [!WARNING]
> Ne téléchargez RedLoader et RedManager que depuis leurs pages GitHub officielles. Les copies hébergées ailleurs peuvent être obsolètes ou modifiées.

# Ajouter des mods

**Avec RedManager :** cherchez le mod, cliquez sur **Install**, et RedManager le télécharge avec ses bibliothèques requises dans les bons dossiers.

**À la main :**

1. Sur la page du mod, lisez **Prérequis** et installez d’abord toutes les bibliothèques requises.
2. Cliquez sur **Télécharger** et ouvrez le `.zip`.
3. Extrayez-le dans le dossier du jeu en conservant les dossiers du zip. Les fichiers du mod arrivent dans `Mods` (un `.dll`, souvent avec un dossier du même nom) et les bibliothèques dans `Libs` quand il y en a.
4. Si le zip ne contient qu’un `.dll`, placez-le directement dans le dossier `Mods`.

> [!IMPORTANT]
> Les mods pour serveurs dédiés vont dans le dossier du serveur, pas dans celui du jeu. Voir [Serveurs dédiés](#dedicated).

# Vérifier en jeu

1. Lancez le jeu depuis Steam comme d’habitude. La console de RedLoader s’ouvre à côté du jeu et liste chaque mod chargé ; les erreurs s’affichent en rouge.
2. Sur l’écran titre, appuyez sur **F1** pour ouvrir le panneau de RedLoader et vérifiez que vos mods y figurent. Les mods qui ont des réglages les affichent là.
3. Lancez ou chargez une partie et essayez le mod.

S’il manque un mod dans la liste, allez à [Dépannage](#troubleshooting).

# Alertes antivirus (faux positifs)

Certains antivirus et Windows SmartScreen signalent RedLoader, RedManager ou un mod. Les chargeurs de mods injectent du code dans le jeu, précisément ce que recherchent les heuristiques ; les alertes sont donc fréquentes même pour des fichiers sains.

Avant de faire confiance à un fichier :

- **Téléchargez-le uniquement depuis la source officielle** : la page du mod sur SOTF Mods, ou les versions GitHub officielles de RedLoader et RedManager.
- **Comparez la somme de contrôle.** Chaque version sur SOTF Mods affiche le SHA-256 du fichier. Sous Windows, lancez `Get-FileHash .\fichier.zip` dans PowerShell (ou `certutil -hashfile fichier.zip SHA256`) et comparez le résultat.
- **Consultez l’analyse.** Chaque version publiée est analysée avec VirusTotal ; le rapport est lié sur la page de la version. Vous pouvez aussi envoyer le fichier vous-même sur [VirusTotal](https://www.virustotal.com).

Si tout correspond, vous pouvez restaurer le fichier depuis la quarantaine et ajouter une exclusion **pour le dossier du jeu uniquement**. Ne désactivez jamais complètement votre antivirus. Si quelque chose semble anormal, signalez le mod depuis sa page : les rangers traitent les signalements rapidement.

# BepInEx ou RedLoader ?

SOTF Mods répertorie des mods pour **RedLoader**. Les mods faits pour BepInEx (courants sur d’autres sites) ont besoin d’un autre chargeur : placés dans les dossiers de RedLoader, ils ne font tout simplement rien et n’affichent aucune erreur.

- Vérifiez qu’un mod est bien conçu pour RedLoader avant de l’installer.
- N’installez pas les deux chargeurs en même temps. Si vous avez utilisé BepInEx, supprimez ses fichiers du dossier du jeu (`BepInEx`, `doorstop_config.ini` et `winhttp.dll`).

# Mettre à jour et désinstaller

**Mettre à jour un mod :** RedManager affiche les mises à jour disponibles. À la main, téléchargez la nouvelle version et écrasez les anciens fichiers. Lisez d’abord le journal des modifications : certaines mises à jour exigent une nouvelle bibliothèque ou une configuration neuve.

**Mettre à jour RedLoader :** utilisez RedManager, ou extrayez la nouvelle version par-dessus l’ancienne. Après un patch du jeu, attendez que [Patch Radar](/patch-radar) indique que RedLoader fonctionne sur le nouveau build.

**Retirer un mod :** supprimez son `.dll` et son dossier dans `Mods`. Consultez d’abord la page du mod : certains ne peuvent pas être retirés sans risque en cours de partie.

**Retirer complètement RedLoader :** supprimez `_RedLoader`, `Mods` et `Libs` ainsi que les autres fichiers ajoutés par le zip de RedLoader à côté de `SonsOfTheForest.exe`, puis dans Steam utilisez **Propriétés → Fichiers installés → Vérifier l’intégrité des fichiers du jeu**.

# Serveurs dédiés

RedLoader fonctionne aussi sur le serveur dédié de Sons of the Forest.

1. Installez RedLoader dans le dossier du serveur (celui qui contient `SonsOfTheForestDS.exe`), comme pour l’installation manuelle.
2. N’installez que des mods dont la page indique qu’ils prennent en charge les serveurs dédiés, dans le dossier `Mods` du serveur.
3. Lisez la note multijoueur de chaque mod : certains ne sont nécessaires que sur le serveur, d’autres aussi dans le jeu de chaque joueur. Tout le monde doit utiliser les mêmes versions.

Beaucoup d’hébergeurs de serveurs proposent RedLoader en un clic dans leur panneau. Sinon, envoyez les fichiers avec leur gestionnaire de fichiers ou par FTP.

# Dépannage

## Rien ne se passe : ni console ni mods

RedLoader ne s’exécute pas. Vérifiez que ses fichiers sont à côté de `SonsOfTheForest.exe` (pas dans un sous-dossier), que vous avez lancé le jeu depuis Steam et que votre antivirus ne les a pas mis en quarantaine. En cas de doute, réinstallez RedLoader.

## Le jeu plante ou se ferme au démarrage

Cela arrive surtout après une mise à jour du jeu. Consultez l’état de RedLoader sur le build actuel dans [Patch Radar](/patch-radar). Pour trouver un mod fautif, sortez tous les mods de `Mods` et remettez-les quelques-uns à la fois.

## Un mod n’apparaît pas dans la liste

Il est sans doute dans le mauvais dossier, il lui manque une bibliothèque requise, ou il est fait pour BepInEx. Lisez les lignes rouges de la console RedLoader : elles nomment le fichier ou la bibliothèque manquante.

## « Windows a protégé votre ordinateur »

SmartScreen avertit pour les programmes qu’il voit rarement. Si vous avez téléchargé RedManager depuis sa page officielle, cliquez sur **Informations complémentaires → Exécuter quand même**. Voir [Alertes antivirus](#antivirus).

## RedManager ne trouve pas le jeu

Indiquez le dossier du jeu à la main dans les réglages de RedManager : le dossier qui contient `SonsOfTheForest.exe`.

## Des joueurs ne peuvent pas rejoindre ou il y a des désynchronisations

Tout le monde doit utiliser les mêmes mods et versions, sauf si un mod indique que seul l’hôte en a besoin. Comparez vos listes de mods et passez aux mêmes versions.

# L’installateur en un clic est retiré

L’ancien installateur **SOTF Mods One-Click** (`sotfmodsoneclick-setup`) ne fonctionne plus avec le site et n’est plus proposé. Si vous l’avez installé, désinstallez-le depuis **Paramètres Windows → Applications**.

Utilisez [RedManager](https://github.com/ToniMacaroni/RedManager/releases) à la place : il installe RedLoader et n’importe quel mod de SOTF Mods, avec ses dépendances, en un clic.
