---
title: Como instalar mods de Sons of the Forest
seoTitle: "Como instalar mods de Sons of the Forest (2026): Guia do RedLoader"
description: Instale o RedLoader com o RedManager, coloque os mods na pasta Mods e confira no jogo. Guia passo a passo com soluções para antivírus e patches.
tldr: Instale o RedLoader, o carregador de mods, com o RedManager (ou manualmente), coloque cada mod na pasta Mods dentro da pasta do jogo e abra o jogo. O RedManager instala qualquer mod do SOTF Mods com um clique. Leva uns três minutos, e o guia abaixo cobre cada passo e os problemas mais comuns.
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: Confira seu jogo
  redloader: Instale o RedLoader
  mods: Adicione mods
  verify: Confira no jogo
  antivirus: Alertas do antivírus
  bepinex: BepInEx ou RedLoader?
  update: Atualizar e desinstalar
  dedicated: Servidores dedicados
  troubleshooting: Solução de problemas
  oneclick: Instalador de um clique
faq:
  - q: Preciso ter o jogo na Steam?
    a: Sim. Os mods de Sons of the Forest funcionam na versão de PC do jogo. O RedLoader altera os arquivos do jogo na sua instalação da Steam, então você precisa do jogo instalado pela Steam no Windows (ou no Linux e no Steam Deck com o Proton).
  - q: Posso ser banido por usar mods?
    a: Sons of the Forest não tem anticheat e a comunidade usa mods abertamente. No multijogador, só entre ou hospede partidas com jogadores que concordem em usar mods, e mantenham todos os mesmos mods e versões.
  - q: Os mods vão quebrar meu save?
    a: A maioria dos mods não mexe no seu save. Mods que adicionam itens, construções ou mudanças no mundo podem deixar rastros se você removê-los no meio da partida; a página do mod diz se é seguro removê-lo. Faça backup da pasta de saves antes de testar mods grandes.
  - q: Por que nada acontece depois que instalo um mod?
    a: Normalmente o RedLoader não está instalado ou está desatualizado, o mod foi extraído na pasta errada, falta uma biblioteca necessária ou o mod é para BepInEx. Siga as verificações da seção de solução de problemas, começando pelo console do RedLoader.
  - q: Onde ficam os arquivos do jogo?
    a: Na Steam, clique com o botão direito em Sons of the Forest, escolha Gerenciar e depois Explorar arquivos locais. A pasta que abrir contém o SonsOfTheForest.exe; o RedLoader e seus mods vão ali.
  - q: Os mods funcionam depois de uma atualização do jogo?
    a: Nem sempre. Um patch pode quebrar o RedLoader ou alguns mods até eles serem atualizados. Veja a página do mod, os comentários e as avaliações para saber se ele funciona na versão atual do jogo.
---

# Confira seu jogo

Os mods funcionam com a **versão de PC de Sons of the Forest na Steam** (Windows, ou Linux e Steam Deck com o Proton). Atualize o jogo na Steam antes de começar: o RedLoader e a maioria dos mods acompanham o patch mais recente.

Encontre a pasta do jogo: na Steam, clique com o botão direito em **Sons of the Forest** → **Gerenciar** → **Explorar arquivos locais**. A pasta que abrir contém o `SonsOfTheForest.exe`. Normalmente é:

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> Acabou de sair uma atualização do jogo? Veja a página do mod, os comentários e as avaliações para saber se ele já funciona na nova versão.

# Instale o RedLoader

O RedLoader é o carregador de mods feito para Sons of the Forest. Todo mod do SOTF Mods precisa dele. Há duas formas de instalá-lo.

## Opção A: RedManager (recomendado)

O RedManager é o gerenciador de mods gratuito para o RedLoader, do mesmo desenvolvedor. Ele instala o RedLoader para você e pode instalar qualquer mod do SOTF Mods, com as dependências, em um clique.

1. Baixe a versão mais recente do RedManager na [página oficial de versões](https://github.com/ToniMacaroni/RedManager/releases).
2. Abra o programa. Ele encontra a pasta do jogo sozinho (ou deixa você escolher).
3. Clique em **Install RedLoader** e espere terminar.

## Opção B: instalação manual

1. Baixe o `RedLoader.zip` mais recente nas [versões oficiais do RedLoader](https://github.com/ToniMacaroni/RedLoader/releases).
2. Extraia tudo na pasta do jogo, ao lado do `SonsOfTheForest.exe`.
3. Abra o jogo uma vez. O RedLoader abre uma janela de console e cria as pastas dele: `_RedLoader`, `Mods` e `Libs`.

> [!WARNING]
> Baixe o RedLoader e o RedManager só das páginas oficiais deles no GitHub. Cópias em outros sites podem estar desatualizadas ou adulteradas.

# Adicione mods

**Com o RedManager:** procure o mod, clique em **Install** e o RedManager baixa o mod e as bibliotecas necessárias nas pastas certas.

**Manualmente:**

1. Na página do mod, leia **Requisitos** e instale primeiro todas as bibliotecas necessárias.
2. Clique em **Baixar** e abra o `.zip`.
3. Extraia na pasta do jogo mantendo as pastas do zip. Os arquivos do mod ficam em `Mods` (um `.dll`, muitas vezes com uma pasta de mesmo nome) e as bibliotecas em `Libs`, quando vierem junto.
4. Se o zip tiver só um `.dll`, coloque-o direto na pasta `Mods`.

> [!IMPORTANT]
> Mods para servidores dedicados vão na pasta do próprio servidor, não na do jogo. Veja [Servidores dedicados](#dedicated).

# Confira no jogo

1. Abra o jogo pela Steam como sempre. O console do RedLoader abre ao lado do jogo e lista cada mod carregado; os erros aparecem em vermelho.
2. Na tela inicial, pressione **F1** para abrir o painel do RedLoader e confira se seus mods estão na lista. Mods com configurações mostram as opções ali.
3. Comece ou carregue uma partida e teste o mod.

Se faltar algum mod na lista, vá para [Solução de problemas](#troubleshooting).

# Alertas do antivírus (falsos positivos)

Alguns antivírus e o Windows SmartScreen marcam o RedLoader, o RedManager ou algum mod. Carregadores de mods injetam código no jogo, exatamente o que as heurísticas procuram, por isso os alertas são comuns mesmo com arquivos limpos.

Antes de confiar em um arquivo:

- **Baixe só da fonte oficial**: a página do mod no SOTF Mods ou as versões oficiais do RedLoader e do RedManager no GitHub.
- **Compare o checksum.** Cada versão no SOTF Mods mostra o SHA-256 do arquivo. No Windows, rode `Get-FileHash .\arquivo.zip` no PowerShell (ou `certutil -hashfile arquivo.zip SHA256`) e compare o resultado.
- **Confira a análise.** Cada versão publicada é analisada pelo VirusTotal; o relatório fica na página da versão. Você também pode enviar o arquivo ao [VirusTotal](https://www.virustotal.com).

Se tudo bater, você pode restaurar o arquivo da quarentena e criar uma exceção **só para a pasta do jogo**. Nunca desative o antivírus por completo. Se algo parecer errado, denuncie o mod pela página dele: os moderadores analisam as denúncias rápido.

# BepInEx ou RedLoader?

O SOTF Mods lista mods para o **RedLoader**. Mods feitos para o BepInEx (comuns em outros sites) precisam de outro carregador: colocados nas pastas do RedLoader, eles simplesmente não fazem nada e não mostram erro.

- Confira se o mod é feito para o RedLoader antes de instalar.
- Não instale os dois carregadores ao mesmo tempo. Se você usou o BepInEx antes, apague os arquivos dele da pasta do jogo (`BepInEx`, `doorstop_config.ini` e `winhttp.dll`).

# Atualizar e desinstalar

**Atualizar um mod:** o RedManager mostra as atualizações disponíveis. Manualmente, baixe a nova versão e substitua os arquivos antigos. Leia antes o changelog: algumas atualizações pedem uma biblioteca nova ou uma configuração limpa.

**Atualizar o RedLoader:** use o RedManager ou extraia a nova versão por cima da antiga. Depois de um patch do jogo, se o jogo deixar de abrir, espere uma nova versão do RedLoader.

**Remover um mod:** apague o `.dll` e a pasta dele em `Mods`. Veja antes a página do mod: alguns não podem ser removidos no meio da partida com segurança.

**Remover o RedLoader por completo:** apague `_RedLoader`, `Mods` e `Libs` e os outros arquivos que o zip do RedLoader colocou ao lado do `SonsOfTheForest.exe`; depois, na Steam, use **Propriedades → Arquivos instalados → Verificar integridade dos arquivos do jogo**.

# Servidores dedicados

O RedLoader também roda no servidor dedicado de Sons of the Forest.

1. Instale o RedLoader na pasta do servidor (a que tem o `SonsOfTheForestDS.exe`), do mesmo jeito que na instalação manual.
2. Instale só mods cuja página diga que suportam servidores dedicados, na pasta `Mods` do servidor.
3. Leia a nota de multijogador de cada mod: alguns só são necessários no servidor, outros também no jogo de cada jogador. Todos devem usar as mesmas versões.

Muitas empresas de hospedagem oferecem o RedLoader como opção de um clique no painel. Se a sua não oferecer, envie os arquivos pelo gerenciador de arquivos ou por FTP.

# Solução de problemas

## Nada acontece: sem console e sem mods

O RedLoader não está rodando. Confira se os arquivos dele estão ao lado do `SonsOfTheForest.exe` (não em uma subpasta), se você abriu o jogo pela Steam e se o antivírus não os colocou em quarentena. Na dúvida, reinstale o RedLoader.

## O jogo trava ou fecha ao iniciar

Isso costuma acontecer depois de uma atualização do jogo. Procure nas [versões do RedLoader](https://github.com/ToniMacaroni/RedLoader/releases) uma que ofereça suporte à nova build. Para achar o mod com problema, tire todos os mods de `Mods` e devolva-os aos poucos.

## Um mod não aparece na lista

Provavelmente ele está na pasta errada, falta uma biblioteca necessária ou é para o BepInEx. Leia as linhas vermelhas no console do RedLoader: elas dizem qual arquivo ou biblioteca está faltando.

## “O Windows protegeu o computador”

O SmartScreen avisa sobre programas que ele vê pouco. Se você baixou o RedManager da página oficial, clique em **Mais informações → Executar assim mesmo**. Veja [Alertas do antivírus](#antivirus).

## O RedManager não encontra o jogo

Defina manualmente a pasta do jogo nas configurações do RedManager: a pasta que contém o `SonsOfTheForest.exe`.

## Os jogadores não conseguem entrar ou há dessincronização

Todos devem usar os mesmos mods e versões, a menos que um mod diga que só o host precisa dele. Comparem as listas de mods e atualizem para as mesmas versões.

# O instalador de um clique foi descontinuado

O antigo instalador **SOTF Mods One-Click** (`sotfmodsoneclick-setup`) não funciona mais com o site e não é mais oferecido. Se você o instalou, desinstale em **Configurações do Windows → Aplicativos**.

Use o [RedManager](https://github.com/ToniMacaroni/RedManager/releases) no lugar: ele instala o RedLoader e qualquer mod do SOTF Mods, com as dependências, em um clique.
