---
title: How to install Sons of the Forest mods
seoTitle: How to install Sons of the Forest mods (2026): RedLoader guide
description: Install RedLoader with RedManager, drop mods in the Mods folder and check them in game. Step-by-step guide with fixes for antivirus warnings and broken patches.
tldr: Install RedLoader, the mod loader, with RedManager (or by hand), put each mod in the Mods folder inside your game directory and launch the game. RedManager can install any mod from SOTF Mods in one click. It takes about three minutes, and the guide below covers every step and the usual problems.
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: Check your game
  redloader: Install RedLoader
  mods: Add mods
  verify: Verify in game
  antivirus: Antivirus warnings
  bepinex: BepInEx or RedLoader?
  update: Update and uninstall
  dedicated: Dedicated servers
  troubleshooting: Troubleshooting
  oneclick: One-click installer
faq:
  - q: Do I need to own the game on Steam?
    a: Yes. Mods for Sons of the Forest run on the PC version of the game. RedLoader patches the game files in your Steam installation, so you need the game installed from Steam on Windows (or on Linux and Steam Deck through Proton).
  - q: Can I get banned for using mods?
    a: Sons of the Forest has no anti-cheat, and mods are used openly by the community. In multiplayer, only join or host games with players who agree to use mods, and keep everyone on the same mods and versions.
  - q: Will mods break my save?
    a: Most mods don't touch your save. Mods that add items, buildings or world changes may leave traces if you remove them mid-save; the mod page says whether a mod is safe to remove. Back up your save folder before trying big mods.
  - q: Why does nothing happen after I install a mod?
    a: Usually RedLoader is not installed or not up to date, the mod was extracted into the wrong folder, a required library is missing, or the mod was made for BepInEx. Follow the checks in the troubleshooting section, starting with the RedLoader console.
  - q: Where are my game files?
    a: In Steam, right-click Sons of the Forest, choose Manage and then Browse local files. The folder that opens contains SonsOfTheForest.exe; RedLoader and your mods go there.
  - q: Do mods work after a game update?
    a: Not always. A game patch can break RedLoader or individual mods until they are updated. Check the mod page, its comments and reviews to see whether it works on the current game version.
---

# Check your game

Mods work with the **PC version of Sons of the Forest on Steam** (Windows, or Linux and Steam Deck through Proton). Update the game in Steam before you start: RedLoader and most mods follow the latest patch.

Find your game folder: in Steam, right-click **Sons of the Forest** → **Manage** → **Browse local files**. The folder that opens contains `SonsOfTheForest.exe`. Usually it is:

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> Just had a game update? Check the mod page, its comments and reviews to see whether the mod already works on the new version.

# Install RedLoader

RedLoader is the mod loader made for Sons of the Forest. Every mod on SOTF Mods needs it. There are two ways to install it.

## Option A: RedManager (recommended)

RedManager is the free mod manager for RedLoader, made by the same developer. It installs RedLoader for you and can install any mod from SOTF Mods, with its dependencies, in one click.

1. Download the latest RedManager from its [official releases page](https://github.com/ToniMacaroni/RedManager/releases).
2. Run it. It finds your game folder automatically (or lets you pick it).
3. Click **Install RedLoader** and wait until it finishes.

## Option B: manual installation

1. Download the latest `RedLoader.zip` from the [official RedLoader releases](https://github.com/ToniMacaroni/RedLoader/releases).
2. Extract everything into your game folder, next to `SonsOfTheForest.exe`.
3. Launch the game once. RedLoader opens a console window and creates its folders: `_RedLoader`, `Mods` and `Libs`.

> [!WARNING]
> Only download RedLoader and RedManager from their official GitHub pages. Copies on other sites may be outdated or tampered with.

# Add mods

**With RedManager:** search for the mod, click **Install**, and RedManager downloads it and its required libraries into the right folders.

**By hand:**

1. On the mod page, read **Requirements** and install every required library first.
2. Click **Download** and open the `.zip`.
3. Extract it into your game folder, keeping the folders inside the zip. Mod files end up in `Mods` (a `.dll`, often with a folder of the same name) and libraries in `Libs` when they ship one.
4. If the zip contains only a `.dll`, put it directly in the `Mods` folder.

> [!IMPORTANT]
> Mods for dedicated servers go in the server's own folder, not in the game folder. See [Dedicated servers](#dedicated).

# Verify in game

1. Launch the game from Steam as usual. The RedLoader console opens next to the game and lists every mod it loads; errors appear in red.
2. On the title screen, press **F1** to open the RedLoader panel and check that your mods are listed. Mods with settings show them there.
3. Start or load a game and try the mod.

If a mod is missing from the list, go to [Troubleshooting](#troubleshooting).

# Antivirus warnings (false positives)

Some antivirus tools and Windows SmartScreen flag RedLoader, RedManager or a mod. Mod loaders inject code into the game, which is what heuristics look for, so warnings are common even for clean files.

Before you trust a file:

- **Download only from the official source**: the mod page on SOTF Mods, or the official GitHub releases of RedLoader and RedManager.
- **Compare the checksum.** Each version on SOTF Mods lists the file's SHA-256. On Windows, run `Get-FileHash .\file.zip` in PowerShell (or `certutil -hashfile file.zip SHA256`) and compare the result.
- **Check the scan.** Every published version is scanned with VirusTotal; the report is linked on the version page. You can also upload the file to [VirusTotal](https://www.virustotal.com) yourself.

If everything matches, you can restore the file from quarantine and add an exclusion **for the game folder only**. Never turn your antivirus off completely. If something looks wrong, report the mod from its page: moderators review reports quickly.

# BepInEx or RedLoader?

SOTF Mods lists mods for **RedLoader**. Mods made for BepInEx (common on other sites) need a different loader: placed in RedLoader's folders they simply do nothing and show no error.

- Check that a mod says it is made for RedLoader before installing it.
- Don't install both loaders at once. If you used BepInEx before, remove its files from the game folder (`BepInEx`, `doorstop_config.ini` and `winhttp.dll`).

# Update and uninstall

**Update a mod:** RedManager shows available updates. By hand, download the new version and overwrite the old files. Read the changelog first: some updates need a new library or a fresh config.

**Update RedLoader:** use RedManager, or extract the new release over the old one. After a game patch, if the game no longer starts, wait for a new RedLoader release.

**Remove a mod:** delete its `.dll` and its folder from `Mods`. Check the mod page first: some mods are not safe to remove mid-save.

**Remove RedLoader completely:** delete `_RedLoader`, `Mods` and `Libs` and the other files the RedLoader zip added next to `SonsOfTheForest.exe`, then in Steam use **Properties → Installed files → Verify integrity of game files**.

# Dedicated servers

RedLoader also runs on the Sons of the Forest dedicated server.

1. Install RedLoader into the server folder (the one with `SonsOfTheForestDS.exe`), the same way as the manual installation.
2. Only install mods whose page says they support dedicated servers, into the server's `Mods` folder.
3. Check each mod's multiplayer note: some are needed only on the server, others on every player's game too. Everyone must use the same versions.

Many game-server hosts offer RedLoader as a one-click option in their panel. If yours doesn't, upload the files with its file manager or FTP.

# Troubleshooting

## Nothing happens: no console, no mods

RedLoader is not running. Make sure its files are next to `SonsOfTheForest.exe` (not in a subfolder), that you launched the game from Steam, and that your antivirus didn't quarantine them. Reinstall RedLoader if in doubt.

## The game crashes or closes on start

This usually follows a game update. Look through the [RedLoader releases](https://github.com/ToniMacaroni/RedLoader/releases) for a version that supports the new game build. To find a faulty mod, move all mods out of `Mods` and add them back a few at a time.

## A mod is not in the list

The mod is probably in the wrong folder, missing a required library, or made for BepInEx. Read the red lines in the RedLoader console: they name the missing file or library.

## Windows protected your PC

SmartScreen warns about programs it hasn't seen often. If you downloaded RedManager from its official page, click **More info → Run anyway**. See [Antivirus warnings](#antivirus).

## RedManager can't find the game

Set the game folder by hand in RedManager's settings: the folder that contains `SonsOfTheForest.exe`.

## Players can't join or things desync in multiplayer

Everyone must run the same mods and versions, unless a mod says only the host needs it. Compare your mod lists and update to the same versions.

# The one-click installer is retired

The old **SOTF Mods One-Click** installer (`sotfmodsoneclick-setup`) no longer works with the site and is no longer offered. If you installed it, uninstall it from **Windows Settings → Apps**.

Use [RedManager](https://github.com/ToniMacaroni/RedManager/releases) instead: it installs RedLoader and any mod from SOTF Mods, with its dependencies, in one click.
