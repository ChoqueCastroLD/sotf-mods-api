---
title: Sons of the Forest の Mod の導入方法
seoTitle: Sons of the Forest の Mod 導入方法（2026）— RedLoader ガイド
description: RedManager で RedLoader を導入し、Mod を Mods フォルダーに入れてゲーム内で確認します。ウイルス対策の誤検知やパッチ対応も含む手順ガイド。
tldr: Mod ローダーの RedLoader を RedManager（または手動）で導入し、各 Mod をゲームフォルダー内の Mods フォルダーに入れてゲームを起動します。RedManager なら SOTF Mods のどの Mod もワンクリックで導入できます。所要時間は約 3 分。下のガイドで各手順とよくある問題を解説します。
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: ゲームを確認
  redloader: RedLoader を導入
  mods: Mod を追加
  verify: ゲーム内で確認
  antivirus: ウイルス対策の警告
  bepinex: BepInEx と RedLoader
  update: 更新とアンインストール
  dedicated: 専用サーバー
  troubleshooting: トラブルシューティング
  oneclick: ワンクリックインストーラー
faq:
  - q: Steam でゲームを持っている必要がありますか？
    a: はい。Sons of the Forest の Mod はゲームの PC 版で動作します。RedLoader は Steam にインストールされたゲームファイルを変更するため、Windows の Steam 版（または Proton 経由の Linux や Steam Deck）が必要です。
  - q: Mod を使うと BAN されますか？
    a: Sons of the Forest にはチート対策システムがなく、コミュニティでは Mod が公然と使われています。マルチプレイでは Mod の使用に同意した人とだけ遊び、全員が同じ Mod とバージョンを使ってください。
  - q: Mod でセーブデータが壊れますか？
    a: ほとんどの Mod はセーブデータに触れません。アイテムや建築物、ワールドの変更を加える Mod は、プレイ途中で外すと痕跡が残ることがあります。安全に外せるかどうかは Mod のページに書かれています。大きな Mod を試す前にセーブフォルダーをバックアップしてください。
  - q: Mod を入れても何も起きないのはなぜ？
    a: たいていは RedLoader が未導入か古い、Mod を間違ったフォルダーに展開した、必要なライブラリが足りない、または BepInEx 用の Mod である、のいずれかです。RedLoader のコンソールから順に、トラブルシューティングの項目を確認してください。
  - q: ゲームファイルはどこにありますか？
    a: Steam で Sons of the Forest を右クリックし、管理、ローカルファイルを閲覧の順に選びます。開いたフォルダーに SonsOfTheForest.exe があり、RedLoader と Mod はそこに入れます。
  - q: ゲームのアップデート後も Mod は動きますか？
    a: 必ずしも動くとは限りません。パッチで RedLoader や一部の Mod が更新されるまで動かなくなることがあります。Patch Radar では現在のゲームビルド、RedLoader の状態、プレイヤーが動作を確認した人気 Mod を確認できます。
---

# ゲームを確認

Mod は **Steam 版 Sons of the Forest の PC 版**で動作します（Windows、または Proton 経由の Linux と Steam Deck）。始める前に Steam でゲームを更新してください。RedLoader とほとんどの Mod は最新パッチに合わせて作られています。

ゲームフォルダーを探します。Steam で **Sons of the Forest** を右クリック → **管理** → **ローカルファイルを閲覧**。開いたフォルダーに `SonsOfTheForest.exe` があります。通常は次の場所です：

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> ゲームが更新されたばかりなら、まず [Patch Radar](/patch-radar) を確認しましょう。RedLoader と人気 Mod が新しいビルドで動くかどうかがわかります。

# RedLoader を導入

RedLoader は Sons of the Forest 用に作られた Mod ローダーです。SOTF Mods のすべての Mod に必要です。導入方法は 2 つあります。

## 方法 A：RedManager（推奨）

RedManager は同じ開発者による RedLoader 用の無料 Mod マネージャーです。RedLoader を代わりに導入してくれるうえ、SOTF Mods のどの Mod も依存関係ごとワンクリックで導入できます。

1. [公式リリースページ](https://github.com/ToniMacaroni/RedManager/releases) から最新の RedManager をダウンロードします。
2. 起動します。ゲームフォルダーは自動で見つかります（手動で選ぶこともできます）。
3. **Install RedLoader** をクリックし、完了するまで待ちます。

## 方法 B：手動で導入

1. [RedLoader の公式リリース](https://github.com/ToniMacaroni/RedLoader/releases) から最新の `RedLoader.zip` をダウンロードします。
2. 中身をすべてゲームフォルダーの `SonsOfTheForest.exe` と同じ場所に展開します。
3. ゲームを一度起動します。RedLoader がコンソールウィンドウを開き、`_RedLoader`、`Mods`、`Libs` の各フォルダーを作成します。

> [!WARNING]
> RedLoader と RedManager は必ず公式の GitHub ページからダウンロードしてください。ほかのサイトのコピーは古いか改ざんされている可能性があります。

# Mod を追加

**RedManager の場合：** Mod を検索して **Install** をクリックすると、必要なライブラリと一緒に正しいフォルダーへダウンロードされます。

**手動の場合：**

1. Mod のページで **必要なもの** を確認し、必要なライブラリを先にすべて導入します。
2. **ダウンロード** をクリックして `.zip` を開きます。
3. zip 内のフォルダー構成を保ったままゲームフォルダーに展開します。Mod のファイルは `Mods`（`.dll` と、多くの場合同名のフォルダー）に、ライブラリが含まれていれば `Libs` に入ります。
4. zip に `.dll` しか入っていない場合は、そのまま `Mods` フォルダーに入れてください。

> [!IMPORTANT]
> 専用サーバー用の Mod はゲームフォルダーではなく、サーバー自身のフォルダーに入れます。[専用サーバー](#dedicated) を参照してください。

# ゲーム内で確認

1. いつもどおり Steam からゲームを起動します。RedLoader のコンソールがゲームの横に開き、読み込んだ Mod を一覧表示します。エラーは赤で表示されます。
2. タイトル画面で **F1** を押して RedLoader のパネルを開き、Mod が一覧にあることを確認します。設定のある Mod はここに設定が表示されます。
3. ゲームを開始またはロードして Mod を試します。

一覧に Mod がない場合は [トラブルシューティング](#troubleshooting) へ。

# ウイルス対策の警告（誤検知）

一部のウイルス対策ソフトや Windows SmartScreen は、RedLoader、RedManager、あるいは Mod を検出することがあります。Mod ローダーはゲームにコードを注入するため、まさにヒューリスティック検出の対象になり、安全なファイルでも警告が出ることはよくあります。

ファイルを信頼する前に：

- **公式の入手先だけから** ダウンロードします。SOTF Mods の Mod ページ、または RedLoader と RedManager の公式 GitHub リリースです。
- **チェックサムを照合します。** SOTF Mods の各バージョンにはファイルの SHA-256 が表示されています。Windows の PowerShell で `Get-FileHash .\file.zip`（または `certutil -hashfile file.zip SHA256`）を実行して比べてください。
- **スキャン結果を確認します。** 公開された各バージョンは VirusTotal でスキャンされ、レポートはバージョンページにリンクされています。自分で [VirusTotal](https://www.virustotal.com) にアップロードすることもできます。

すべて一致すれば、ファイルを隔離から戻し、**ゲームフォルダーだけ**を除外に追加できます。ウイルス対策を完全に無効にするのはやめましょう。怪しい点があれば Mod のページから報告してください。レンジャーがすぐに確認します。

# BepInEx と RedLoader

SOTF Mods に掲載されているのは **RedLoader** 用の Mod です。BepInEx 用の Mod（ほかのサイトでよく見かけます）には別のローダーが必要で、RedLoader のフォルダーに入れても何も起きず、エラーも表示されません。

- 導入前に、その Mod が RedLoader 用かどうかを確認してください。
- 2 つのローダーを同時に入れないでください。以前 BepInEx を使っていた場合は、ゲームフォルダーからそのファイル（`BepInEx`、`doorstop_config.ini`、`winhttp.dll`）を削除してください。

# 更新とアンインストール

**Mod の更新：** RedManager が利用可能な更新を表示します。手動の場合は新しいバージョンをダウンロードして古いファイルに上書きします。先に変更履歴を読んでください。新しいライブラリや設定の初期化が必要な更新もあります。

**RedLoader の更新：** RedManager を使うか、新しいリリースを古いものの上に展開します。ゲームにパッチが入ったら、[Patch Radar](/patch-radar) で RedLoader が新ビルドで動くと表示されるまで待ちましょう。

**Mod の削除：** `Mods` からその `.dll` とフォルダーを削除します。先に Mod のページを確認してください。プレイ途中で安全に外せない Mod もあります。

**RedLoader を完全に削除：** `_RedLoader`、`Mods`、`Libs` と、RedLoader の zip が `SonsOfTheForest.exe` の横に追加したほかのファイルを削除し、Steam で **プロパティ → インストール済みファイル → ゲームファイルの整合性を確認** を実行します。

# 専用サーバー

RedLoader は Sons of the Forest の専用サーバーでも動作します。

1. 手動導入と同じ手順で、サーバーフォルダー（`SonsOfTheForestDS.exe` があるフォルダー）に RedLoader を導入します。
2. ページに専用サーバー対応と書かれている Mod だけを、サーバーの `Mods` フォルダーに入れます。
3. 各 Mod のマルチプレイに関する注意を確認します。サーバーだけで必要なものもあれば、全プレイヤーのゲームにも必要なものもあります。全員が同じバージョンを使ってください。

多くのゲームサーバー事業者は、管理パネルで RedLoader をワンクリックで導入できるようにしています。対応していない場合は、ファイルマネージャーや FTP でファイルをアップロードしてください。

# トラブルシューティング

## 何も起きない：コンソールも Mod も出ない

RedLoader が動いていません。ファイルが `SonsOfTheForest.exe` と同じ場所（サブフォルダーではなく）にあるか、Steam からゲームを起動したか、ウイルス対策ソフトに隔離されていないかを確認してください。迷ったら RedLoader を入れ直しましょう。

## 起動時にゲームがクラッシュする・閉じる

たいていはゲームのアップデート後に起こります。[Patch Radar](/patch-radar) で現在のビルドでの RedLoader の状態を確認してください。原因の Mod を探すには、`Mods` からすべての Mod を出し、少しずつ戻していきます。

## Mod が一覧に出ない

フォルダーが間違っている、必要なライブラリが足りない、または BepInEx 用の Mod である可能性が高いです。RedLoader のコンソールの赤い行を読んでください。足りないファイルやライブラリの名前が表示されています。

## 「Windows によって PC が保護されました」

SmartScreen は、あまり見かけないプログラムに警告を出します。RedManager を公式ページからダウンロードしたなら、**詳細情報 → 実行** をクリックしてください。[ウイルス対策の警告](#antivirus) も参照してください。

## RedManager がゲームを見つけられない

RedManager の設定で、`SonsOfTheForest.exe` があるフォルダーを手動で指定してください。

## マルチプレイで参加できない・同期がずれる

ホストだけが必要と書かれた Mod を除き、全員が同じ Mod とバージョンを使う必要があります。Mod の一覧を見比べて、同じバージョンに更新してください。

# ワンクリックインストーラーは廃止されました

旧 **SOTF Mods One-Click** インストーラー（`sotfmodsoneclick-setup`）はサイトと連携しなくなり、提供も終了しました。インストールしている場合は **Windows の設定 → アプリ** からアンインストールしてください。

代わりに [RedManager](https://github.com/ToniMacaroni/RedManager/releases) を使いましょう。RedLoader と SOTF Mods のどの Mod も、依存関係ごとワンクリックで導入できます。
