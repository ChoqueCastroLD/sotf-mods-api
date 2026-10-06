---
title: Sons of the Forest modları nasıl kurulur
seoTitle: Sons of the Forest modları nasıl kurulur (2026): RedLoader rehberi
description: RedLoader’ı RedManager ile kur, modları Mods klasörüne koy ve oyunda kontrol et. Antivirüs uyarıları ve yamalar için çözümler içeren adım adım rehber.
tldr: Mod yükleyicisi RedLoader’ı RedManager ile (ya da elle) kur, her modu oyun klasöründeki Mods klasörüne koy ve oyunu başlat. RedManager, SOTF Mods’taki herhangi bir modu tek tıkla kurabilir. Yaklaşık üç dakika sürer; aşağıdaki rehber her adımı ve sık karşılaşılan sorunları anlatıyor.
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: Oyununu kontrol et
  redloader: RedLoader’ı kur
  mods: Mod ekle
  verify: Oyunda kontrol et
  antivirus: Antivirüs uyarıları
  bepinex: BepInEx mi RedLoader mı?
  update: Güncelleme ve kaldırma
  dedicated: Özel sunucular
  troubleshooting: Sorun giderme
  oneclick: Tek tık yükleyici
faq:
  - q: Oyuna Steam’de sahip olmam gerekiyor mu?
    a: Evet. Sons of the Forest modları oyunun PC sürümüyle çalışır. RedLoader, Steam kurulumundaki oyun dosyalarını değiştirir; bu yüzden oyunun Windows’ta Steam’den kurulu olması gerekir (ya da Proton ile Linux ve Steam Deck’te).
  - q: Mod kullandığım için ban yer miyim?
    a: Sons of the Forest’ta hile önleme sistemi yok ve topluluk modları açıkça kullanıyor. Çok oyunculu modda yalnızca mod kullanmayı kabul eden oyuncularla oyna ve herkeste aynı modlar ve sürümler olsun.
  - q: Modlar kayıt dosyamı bozar mı?
    a: Çoğu mod kayda dokunmaz. Eşya, yapı veya dünya değişikliği ekleyen modlar oyunun ortasında kaldırılırsa iz bırakabilir; mod sayfası güvenle kaldırılıp kaldırılamayacağını söyler. Büyük modları denemeden önce kayıt klasörünü yedekle.
  - q: Bir mod kurduktan sonra neden hiçbir şey olmuyor?
    a: Genellikle RedLoader kurulu değildir ya da güncel değildir, mod yanlış klasöre çıkarılmıştır, gerekli bir kütüphane eksiktir veya mod BepInEx için yapılmıştır. RedLoader konsolundan başlayarak Sorun giderme bölümündeki kontrolleri izle.
  - q: Oyun dosyaları nerede?
    a: Steam’de Sons of the Forest’a sağ tıkla, Yönet’i ve ardından Yerel dosyalara göz at’ı seç. Açılan klasörde SonsOfTheForest.exe bulunur; RedLoader ve modların oraya gider.
  - q: Oyun güncellemesinden sonra modlar çalışır mı?
    a: Her zaman değil. Bir yama, güncellenene kadar RedLoader’ı veya bazı modları bozabilir. Modun güncel oyun sürümünde çalışıp çalışmadığını görmek için mod sayfasına, yorumlara ve incelemelere bak.
---

# Oyununu kontrol et

Modlar **Steam’deki Sons of the Forest’ın PC sürümüyle** çalışır (Windows ya da Proton ile Linux ve Steam Deck). Başlamadan önce oyunu Steam’de güncelle: RedLoader ve çoğu mod en son yamayı takip eder.

Oyun klasörünü bul: Steam’de **Sons of the Forest**’a sağ tıkla → **Yönet** → **Yerel dosyalara göz at**. Açılan klasörde `SonsOfTheForest.exe` bulunur. Genellikle şudur:

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> Oyun yeni mi güncellendi? Modun yeni sürümde çalışıp çalışmadığını görmek için mod sayfasına, yorumlara ve incelemelere bak.

# RedLoader’ı kur

RedLoader, Sons of the Forest için yapılmış mod yükleyicisidir. SOTF Mods’taki her mod ona ihtiyaç duyar. Kurmanın iki yolu var.

## Seçenek A: RedManager (önerilen)

RedManager, aynı geliştiricinin RedLoader için hazırladığı ücretsiz mod yöneticisidir. RedLoader’ı senin yerine kurar ve SOTF Mods’taki herhangi bir modu bağımlılıklarıyla birlikte tek tıkla kurabilir.

1. RedManager’ın en son sürümünü [resmî sürüm sayfasından](https://github.com/ToniMacaroni/RedManager/releases) indir.
2. Çalıştır. Oyun klasörünü kendisi bulur (ya da seçmene izin verir).
3. **Install RedLoader**’a tıkla ve bitmesini bekle.

## Seçenek B: elle kurulum

1. En son `RedLoader.zip` dosyasını [RedLoader’ın resmî sürümlerinden](https://github.com/ToniMacaroni/RedLoader/releases) indir.
2. Her şeyi oyun klasörüne, `SonsOfTheForest.exe` dosyasının yanına çıkar.
3. Oyunu bir kez başlat. RedLoader bir konsol penceresi açar ve klasörlerini oluşturur: `_RedLoader`, `Mods` ve `Libs`.

> [!WARNING]
> RedLoader’ı ve RedManager’ı yalnızca resmî GitHub sayfalarından indir. Başka sitelerdeki kopyalar eski ya da değiştirilmiş olabilir.

# Mod ekle

**RedManager ile:** modu ara, **Install**’a tıkla; RedManager modu ve gerekli kütüphanelerini doğru klasörlere indirir.

**Elle:**

1. Mod sayfasında **Gereksinimler**’i oku ve önce gerekli tüm kütüphaneleri kur.
2. **İndir**’e tıkla ve `.zip` dosyasını aç.
3. Zip içindeki klasörleri koruyarak oyun klasörüne çıkar. Mod dosyaları `Mods` klasörüne (bir `.dll`, çoğu zaman aynı adlı bir klasörle), kütüphaneler varsa `Libs` klasörüne gider.
4. Zip yalnızca bir `.dll` içeriyorsa, onu doğrudan `Mods` klasörüne koy.

> [!IMPORTANT]
> Özel sunucu modları oyun klasörüne değil, sunucunun kendi klasörüne kurulur. Bkz. [Özel sunucular](#dedicated).

# Oyunda kontrol et

1. Oyunu her zamanki gibi Steam’den başlat. RedLoader konsolu oyunun yanında açılır ve yüklediği her modu listeler; hatalar kırmızı görünür.
2. Başlık ekranında RedLoader panelini açmak için **F1**’e bas ve modlarının listede olduğunu kontrol et. Ayarları olan modlar ayarlarını orada gösterir.
3. Bir oyun başlat ya da yükle ve modu dene.

Listede bir mod eksikse [Sorun giderme](#troubleshooting) bölümüne git.

# Antivirüs uyarıları (hatalı alarmlar)

Bazı antivirüs programları ve Windows SmartScreen, RedLoader’ı, RedManager’ı veya bir modu işaretleyebilir. Mod yükleyicileri oyuna kod enjekte eder; sezgisel taramaların aradığı şey tam da budur, bu yüzden temiz dosyalarda bile uyarı görmek yaygındır.

Bir dosyaya güvenmeden önce:

- **Yalnızca resmî kaynaktan indir**: SOTF Mods’taki mod sayfasından ya da RedLoader ve RedManager’ın resmî GitHub sürümlerinden.
- **Sağlama toplamını karşılaştır.** SOTF Mods’taki her sürüm dosyanın SHA-256 değerini gösterir. Windows’ta PowerShell’de `Get-FileHash .\dosya.zip` (ya da `certutil -hashfile dosya.zip SHA256`) çalıştır ve sonucu karşılaştır.
- **Taramaya bak.** Yayımlanan her sürüm VirusTotal ile taranır; rapor sürüm sayfasında bağlantılıdır. Dosyayı [VirusTotal](https://www.virustotal.com)’e kendin de yükleyebilirsin.

Her şey tutuyorsa dosyayı karantinadan geri alabilir ve **yalnızca oyun klasörü için** bir istisna ekleyebilirsin. Antivirüsünü asla tamamen kapatma. Bir şey yanlış görünüyorsa modu sayfasından bildir: moderatörler bildirimleri hızla inceler.

# BepInEx mi RedLoader mı?

SOTF Mods, **RedLoader** için modları listeler. BepInEx için yapılmış modlar (başka sitelerde yaygındır) farklı bir yükleyiciye ihtiyaç duyar: RedLoader klasörlerine konduklarında hiçbir şey yapmazlar ve hata da göstermezler.

- Kurmadan önce modun RedLoader için yapıldığını kontrol et.
- İki yükleyiciyi aynı anda kurma. Daha önce BepInEx kullandıysan dosyalarını oyun klasöründen sil (`BepInEx`, `doorstop_config.ini` ve `winhttp.dll`).

# Güncelleme ve kaldırma

**Bir modu güncelle:** RedManager mevcut güncellemeleri gösterir. Elle yapıyorsan yeni sürümü indir ve eski dosyaların üzerine yaz. Önce değişiklik günlüğünü oku: bazı güncellemeler yeni bir kütüphane ya da temiz bir yapılandırma ister.

**RedLoader’ı güncelle:** RedManager’ı kullan ya da yeni sürümü eskisinin üzerine çıkar. Bir oyun yamasından sonra oyun açılmıyorsa RedLoader’ın yeni bir sürümünü bekle.

**Bir modu kaldır:** `.dll` dosyasını ve klasörünü `Mods` içinden sil. Önce mod sayfasına bak: bazı modlar oyunun ortasında güvenle kaldırılamaz.

**RedLoader’ı tamamen kaldır:** `_RedLoader`, `Mods` ve `Libs` klasörlerini ve RedLoader zip’inin `SonsOfTheForest.exe` yanına eklediği diğer dosyaları sil, ardından Steam’de **Özellikler → Yüklü dosyalar → Oyun dosyalarının bütünlüğünü doğrula**’yı kullan.

# Özel sunucular

RedLoader, Sons of the Forest özel sunucusunda da çalışır.

1. RedLoader’ı sunucu klasörüne (`SonsOfTheForestDS.exe` bulunan klasör) elle kurulumdaki gibi kur.
2. Yalnızca sayfasında özel sunucu desteği belirtilen modları sunucunun `Mods` klasörüne kur.
3. Her modun çok oyunculu notunu oku: bazıları yalnızca sunucuda, bazıları her oyuncunun oyununda da gerekir. Herkes aynı sürümleri kullanmalı.

Birçok oyun sunucusu sağlayıcısı, panelinde RedLoader’ı tek tıkla kurma seçeneği sunar. Seninki sunmuyorsa dosyaları dosya yöneticisiyle ya da FTP ile yükle.

# Sorun giderme

## Hiçbir şey olmuyor: ne konsol ne mod

RedLoader çalışmıyor. Dosyalarının `SonsOfTheForest.exe`’nin yanında (alt klasörde değil) olduğundan, oyunu Steam’den başlattığından ve antivirüsün onları karantinaya almadığından emin ol. Emin değilsen RedLoader’ı yeniden kur.

## Oyun açılışta çöküyor ya da kapanıyor

Bu genellikle bir oyun güncellemesinden sonra olur. [RedLoader sürümleri](https://github.com/ToniMacaroni/RedLoader/releases) arasında yeni oyun sürümünü destekleyen bir sürüm ara. Sorunlu modu bulmak için tüm modları `Mods` klasöründen çıkar ve onları birkaçar birkaçar geri ekle.

## Bir mod listede görünmüyor

Muhtemelen yanlış klasördedir, gerekli bir kütüphanesi eksiktir ya da BepInEx için yapılmıştır. RedLoader konsolundaki kırmızı satırları oku: eksik dosyayı veya kütüphaneyi yazarlar.

## “Windows bilgisayarınızı korudu”

SmartScreen, seyrek gördüğü programlar için uyarır. RedManager’ı resmî sayfasından indirdiysen **Ek bilgi → Yine de çalıştır**’a tıkla. Bkz. [Antivirüs uyarıları](#antivirus).

## RedManager oyunu bulamıyor

Oyun klasörünü RedManager ayarlarından elle belirt: `SonsOfTheForest.exe` dosyasını içeren klasör.

## Oyuncular katılamıyor ya da çok oyunculuda senkron bozuluyor

Bir mod yalnızca sunucu sahibinin ihtiyaç duyduğunu söylemiyorsa herkes aynı modları ve sürümleri kullanmalı. Mod listelerinizi karşılaştırın ve aynı sürümlere güncelleyin.

# Tek tık yükleyici kullanımdan kaldırıldı

Eski **SOTF Mods One-Click** yükleyicisi (`sotfmodsoneclick-setup`) artık siteyle çalışmıyor ve sunulmuyor. Kurduysan **Windows Ayarları → Uygulamalar**’dan kaldır.

Onun yerine [RedManager](https://github.com/ToniMacaroni/RedManager/releases) kullan: RedLoader’ı ve SOTF Mods’taki herhangi bir modu bağımlılıklarıyla birlikte tek tıkla kurar.
