/**
 * Seed data of the v2 taxonomy (PLAN T0-06): the 12 mod categories with icons and translations,
 * the curated tags and the first RedLoader release (PLAN §7.10).
 *
 * The SQL of `migrations/0025_seed_taxonomy.sql` is generated from this module by
 * `pnpm --filter @sotf/db gen` (scripts/gen-seed-sql.ts); a unit test fails when they drift.
 * Once 0025 has been applied in production it is frozen: later changes go into a new migration.
 */

/** The 13 locales of v2 (PLAN §7.11), English first (source language). */
export const SEED_LOCALES = [
  'en',
  'es',
  'de',
  'fr',
  'it',
  'nl',
  'pl',
  'pt-BR',
  'ru',
  'sv',
  'tr',
  'zh-Hans',
  'ja',
] as const;

export type SeedLocale = (typeof SEED_LOCALES)[number];

/** One value per v2 locale. */
type Localized<T> = Readonly<Record<SeedLocale, T>>;

export interface SeedCategory {
  slug: string;
  /** Value of the legacy "Category"."name" column (English, shown by the legacy site). */
  legacyName: string;
  /** Icon reference: `lucide:<name>` (lucide 1.48) or `fk:<name>` (Field kit sprite). */
  icon: string;
  sortOrder: number;
  /** Old slugs that must resolve to this category (e.g. `?category=qol`). */
  legacySlugs: readonly string[];
  i18n: Localized<{ name: string; description: string }>;
}

export interface SeedTag {
  slug: string;
  group: SeedTagGroup;
  sortOrder: number;
  /** Legacy "Tag"."description" (English, NOT NULL in the legacy schema). */
  description: string;
  names: Localized<string>;
}

export const SEED_TAG_GROUPS = [
  'survival',
  'gameplay',
  'building',
  'world',
  'visuals',
  'audio',
  'ui',
  'tech',
  'players',
] as const;

export type SeedTagGroup = (typeof SEED_TAG_GROUPS)[number];

export interface SeedLoaderRelease {
  name: string;
  version: string;
  /** ISO date (YYYY-MM-DD). */
  releasedAt: string;
  url: string;
}

/** Legacy category that the v2 taxonomy supersedes; its mods resolve through `legacySlugs`. */
export const RETIRED_CATEGORY_SLUGS = ['qol'] as const;

function category(
  slug: string,
  legacyName: string,
  icon: string,
  sortOrder: number,
  legacySlugs: readonly string[],
  entries: Record<SeedLocale, readonly [string, string]>,
): SeedCategory {
  const i18n = Object.fromEntries(
    SEED_LOCALES.map((lc) => [lc, { name: entries[lc][0], description: entries[lc][1] }]),
  ) as unknown as Localized<{ name: string; description: string }>;
  return { slug, legacyName, icon, sortOrder, legacySlugs, i18n };
}

export const SEED_CATEGORIES: readonly SeedCategory[] = [
  category('quality-of-life', 'Quality of Life', 'lucide:wand-sparkles', 1, ['qol'], {
    en: ['Quality of Life', 'Small fixes and conveniences that smooth out everyday survival.'],
    es: ['Calidad de vida', 'Arreglos y comodidades que hacen más llevadera la supervivencia diaria.'],
    de: ['Komfort', 'Kleine Verbesserungen und Komfortfunktionen für den Überlebensalltag.'],
    fr: ['Qualité de vie', 'Petites corrections et commodités qui facilitent la survie au quotidien.'],
    it: ['Qualità della vita', 'Piccole correzioni e comodità che semplificano la sopravvivenza di ogni giorno.'],
    nl: ['Gebruiksgemak', 'Kleine verbeteringen en gemakken die het dagelijkse overleven soepeler maken.'],
    pl: ['Udogodnienia', 'Drobne poprawki i udogodnienia, które ułatwiają codzienne przetrwanie.'],
    'pt-BR': [
      'Qualidade de vida',
      'Pequenas correções e facilidades que deixam a sobrevivência do dia a dia mais tranquila.',
    ],
    ru: ['Удобство', 'Небольшие исправления и удобства, которые облегчают повседневное выживание.'],
    sv: ['Livskvalitet', 'Små fixar och bekvämligheter som gör vardagsöverlevnaden smidigare.'],
    tr: ['Yaşam kalitesi', 'Günlük hayatta kalmayı kolaylaştıran küçük düzeltmeler ve kolaylıklar.'],
    'zh-Hans': ['便利改进', '让日常生存更顺畅的小修复与便利功能。'],
    ja: ['快適性向上', '日々のサバイバルを快適にする小さな修正や便利機能。'],
  }),
  category('gameplay', 'Gameplay & Difficulty', 'lucide:swords', 2, [], {
    en: ['Gameplay & Difficulty', 'New mechanics, balance changes and difficulty tweaks.'],
    es: ['Jugabilidad y dificultad', 'Nuevas mecánicas, cambios de equilibrio y ajustes de dificultad.'],
    de: ['Gameplay & Schwierigkeit', 'Neue Mechaniken, Balance-Änderungen und Anpassungen der Schwierigkeit.'],
    fr: ['Gameplay et difficulté', 'Nouvelles mécaniques, rééquilibrages et réglages de difficulté.'],
    it: ['Gameplay e difficoltà', 'Nuove meccaniche, bilanciamenti e regolazioni della difficoltà.'],
    nl: ['Gameplay en moeilijkheid', 'Nieuwe mechanieken, balanswijzigingen en aanpassingen aan de moeilijkheid.'],
    pl: ['Rozgrywka i trudność', 'Nowe mechaniki, zmiany balansu i ustawienia poziomu trudności.'],
    'pt-BR': ['Jogabilidade e dificuldade', 'Novas mecânicas, ajustes de balanceamento e de dificuldade.'],
    ru: ['Геймплей и сложность', 'Новые механики, изменения баланса и настройки сложности.'],
    sv: ['Spelupplägg och svårighet', 'Nya mekaniker, balansändringar och justeringar av svårighetsgraden.'],
    tr: ['Oynanış ve zorluk', 'Yeni mekanikler, denge değişiklikleri ve zorluk ayarları.'],
    'zh-Hans': ['玩法与难度', '新机制、平衡调整与难度设置。'],
    ja: ['ゲームプレイと難易度', '新しいメカニクス、バランス調整、難易度の変更。'],
  }),
  category('building', 'Building', 'lucide:hammer', 3, [], {
    en: ['Building', 'More pieces, smarter tools and more freedom for your base.'],
    es: ['Construcción', 'Más piezas, herramientas más inteligentes y más libertad para tu base.'],
    de: ['Bauen', 'Mehr Bauteile, klügere Werkzeuge und mehr Freiheit für deine Basis.'],
    fr: ['Construction', 'Plus de pièces, des outils plus malins et plus de liberté pour ta base.'],
    it: ['Costruzione', 'Più pezzi, strumenti più intelligenti e più libertà per la tua base.'],
    nl: ['Bouwen', 'Meer onderdelen, slimmer gereedschap en meer vrijheid voor je basis.'],
    pl: ['Budowanie', 'Więcej elementów, sprytniejsze narzędzia i większa swoboda przy budowie bazy.'],
    'pt-BR': ['Construção', 'Mais peças, ferramentas mais espertas e mais liberdade para a sua base.'],
    ru: ['Строительство', 'Больше деталей, удобные инструменты и больше свободы для вашей базы.'],
    sv: ['Byggande', 'Fler byggdelar, smartare verktyg och mer frihet för din bas.'],
    tr: ['İnşa', 'Üssün için daha fazla parça, daha akıllı araçlar ve daha fazla özgürlük.'],
    'zh-Hans': ['建造', '更多建筑部件、更聪明的工具，让基地设计更自由。'],
    ja: ['建築', '拠点づくりのためのパーツ追加、便利なツール、自由度の向上。'],
  }),
  category('companions', 'Companions', 'lucide:heart-handshake', 4, [], {
    en: ['Companions', 'Kelvin, Virginia and everyone who keeps you company on the island.'],
    es: ['Compañeros', 'Kelvin, Virginia y todos los que te acompañan en la isla.'],
    de: ['Begleiter', 'Kelvin, Virginia und alle, die dir auf der Insel Gesellschaft leisten.'],
    fr: ['Compagnons', "Kelvin, Virginia et tous ceux qui t'accompagnent sur l'île."],
    it: ['Compagni', "Kelvin, Virginia e chiunque ti faccia compagnia sull'isola."],
    nl: ['Metgezellen', 'Kelvin, Virginia en iedereen die je gezelschap houdt op het eiland.'],
    pl: ['Towarzysze', 'Kelvin, Virginia i wszyscy, którzy dotrzymują ci towarzystwa na wyspie.'],
    'pt-BR': ['Companheiros', 'Kelvin, Virginia e todos que fazem companhia a você na ilha.'],
    ru: ['Спутники', 'Кельвин, Вирджиния и все, кто составляет вам компанию на острове.'],
    sv: ['Följeslagare', 'Kelvin, Virginia och alla som håller dig sällskap på ön.'],
    tr: ['Yol arkadaşları', 'Kelvin, Virginia ve adada sana eşlik eden herkes.'],
    'zh-Hans': ['同伴', 'Kelvin、Virginia 以及岛上陪伴你的所有伙伴。'],
    ja: ['仲間', 'ケルビン、バージニアなど、島で一緒に過ごす仲間たち。'],
  }),
  category('weapons-gear', 'Weapons & Gear', 'lucide:crosshair', 5, [], {
    en: ['Weapons & Gear', 'Weapons, tools, armor and everything you carry.'],
    es: ['Armas y equipo', 'Armas, herramientas, armaduras y todo lo que llevas encima.'],
    de: ['Waffen & Ausrüstung', 'Waffen, Werkzeuge, Rüstungen und alles, was du bei dir trägst.'],
    fr: ['Armes et équipement', 'Armes, outils, armures et tout ce que tu portes sur toi.'],
    it: ['Armi ed equipaggiamento', 'Armi, attrezzi, armature e tutto ciò che porti con te.'],
    nl: ['Wapens en uitrusting', 'Wapens, gereedschap, pantser en alles wat je bij je draagt.'],
    pl: ['Broń i ekwipunek', 'Broń, narzędzia, pancerze i wszystko, co nosisz przy sobie.'],
    'pt-BR': ['Armas e equipamento', 'Armas, ferramentas, armaduras e tudo o que você carrega.'],
    ru: ['Оружие и снаряжение', 'Оружие, инструменты, броня и всё, что вы носите с собой.'],
    sv: ['Vapen och utrustning', 'Vapen, verktyg, rustningar och allt du bär med dig.'],
    tr: ['Silahlar ve teçhizat', 'Silahlar, aletler, zırhlar ve üzerinde taşıdığın her şey.'],
    'zh-Hans': ['武器与装备', '武器、工具、护甲以及你随身携带的一切。'],
    ja: ['武器と装備', '武器、道具、防具など、持ち歩くものすべて。'],
  }),
  category('vehicles-movement', 'Vehicles & Movement', 'lucide:car', 6, [], {
    en: ['Vehicles & Movement', 'Getting around the island: vehicles, gliders, ziplines and traversal.'],
    es: ['Vehículos y movimiento', 'Moverse por la isla: vehículos, planeadores, tirolinas y desplazamiento.'],
    de: ['Fahrzeuge & Bewegung', 'Unterwegs auf der Insel: Fahrzeuge, Gleiter, Seilrutschen und Fortbewegung.'],
    fr: ['Véhicules et déplacements', "Se déplacer sur l'île : véhicules, planeurs, tyroliennes et déplacements."],
    it: ['Veicoli e movimento', "Muoversi sull'isola: veicoli, deltaplani, teleferiche e spostamenti."],
    nl: ['Voertuigen en beweging', 'Over het eiland reizen: voertuigen, zweefvliegers, tokkelbanen en verplaatsing.'],
    pl: ['Pojazdy i poruszanie się', 'Podróżowanie po wyspie: pojazdy, lotnie, tyrolki i przemieszczanie się.'],
    'pt-BR': [
      'Veículos e movimentação',
      'Como se locomover pela ilha: veículos, planadores, tirolesas e deslocamento.',
    ],
    ru: ['Транспорт и передвижение', 'Передвижение по острову: транспорт, дельтапланы, канатные дороги и не только.'],
    sv: ['Fordon och förflyttning', 'Ta dig runt på ön: fordon, glidflygare, linbanor och förflyttning.'],
    tr: ['Araçlar ve hareket', 'Adada dolaşmak: araçlar, planörler, zip hatları ve hareket.'],
    'zh-Hans': ['载具与移动', '在岛上穿行：载具、滑翔翼、滑索与移动方式。'],
    ja: ['乗り物と移動', '島を移動する手段：乗り物、グライダー、ジップラインなど。'],
  }),
  category('model-swap', 'Model Swap', 'lucide:shirt', 7, [], {
    en: ['Model Swap', 'Replace characters, creatures and items with new models and skins.'],
    es: ['Cambio de modelos', 'Sustituye personajes, criaturas y objetos por nuevos modelos y aspectos.'],
    de: ['Modelltausch', 'Ersetze Figuren, Kreaturen und Gegenstände durch neue Modelle und Skins.'],
    fr: ['Changement de modèles', 'Remplace personnages, créatures et objets par de nouveaux modèles et skins.'],
    it: ['Sostituzione modelli', 'Sostituisci personaggi, creature e oggetti con nuovi modelli e skin.'],
    nl: ['Modelwissel', 'Vervang personages, wezens en voorwerpen door nieuwe modellen en skins.'],
    pl: ['Podmiana modeli', 'Zamień postacie, stworzenia i przedmioty na nowe modele i skórki.'],
    'pt-BR': ['Troca de modelos', 'Substitua personagens, criaturas e itens por novos modelos e skins.'],
    ru: ['Замена моделей', 'Замена персонажей, существ и предметов на новые модели и скины.'],
    sv: ['Modellbyte', 'Byt ut karaktärer, varelser och föremål mot nya modeller och skins.'],
    tr: ['Model değişimi', 'Karakterleri, yaratıkları ve eşyaları yeni modeller ve kaplamalarla değiştir.'],
    'zh-Hans': ['模型替换', '用新模型和皮肤替换角色、生物与物品。'],
    ja: ['モデル差し替え', 'キャラクター、クリーチャー、アイテムを新しいモデルやスキンに置き換え。'],
  }),
  category('ui-hud', 'UI & HUD', 'lucide:panels-top-left', 8, [], {
    en: ['UI & HUD', 'HUD elements, overlays, indicators and interface tweaks.'],
    es: ['Interfaz y HUD', 'Elementos del HUD, superposiciones, indicadores y ajustes de la interfaz.'],
    de: ['UI & HUD', 'HUD-Elemente, Overlays, Anzeigen und Anpassungen der Oberfläche.'],
    fr: ['Interface et HUD', "Éléments du HUD, surcouches, indicateurs et retouches de l'interface."],
    it: ['Interfaccia e HUD', "Elementi dell'HUD, overlay, indicatori e ritocchi all'interfaccia."],
    nl: ['Interface en HUD', 'HUD-elementen, overlays, indicatoren en aanpassingen aan de interface.'],
    pl: ['Interfejs i HUD', 'Elementy HUD, nakładki, wskaźniki i poprawki interfejsu.'],
    'pt-BR': ['Interface e HUD', 'Elementos do HUD, sobreposições, indicadores e ajustes na interface.'],
    ru: ['Интерфейс и HUD', 'Элементы HUD, оверлеи, индикаторы и доработки интерфейса.'],
    sv: ['Gränssnitt och HUD', 'HUD-element, överlägg, indikatorer och justeringar av gränssnittet.'],
    tr: ['Arayüz ve HUD', 'HUD öğeleri, katmanlar, göstergeler ve arayüz düzenlemeleri.'],
    'zh-Hans': ['界面与 HUD', 'HUD 元素、叠加层、指示器与界面调整。'],
    ja: ['UI と HUD', 'HUD 要素、オーバーレイ、インジケーター、インターフェースの調整。'],
  }),
  category('menus-sandbox', 'Menus & Sandbox', 'lucide:sliders-horizontal', 9, [], {
    en: ['Menus & Sandbox', 'Mod menus, spawners and creative tools to play your own way.'],
    es: ['Menús y sandbox', 'Menús de mods, generadores y herramientas creativas para jugar a tu manera.'],
    de: ['Menüs & Sandbox', 'Mod-Menüs, Spawner und kreative Werkzeuge, um auf deine Art zu spielen.'],
    fr: ['Menus et bac à sable', "Menus de mods, générateurs d'objets et outils créatifs pour jouer à ta façon."],
    it: ['Menu e sandbox', 'Menu mod, spawner e strumenti creativi per giocare a modo tuo.'],
    nl: ["Menu's en sandbox", "Modmenu's, spawners en creatieve tools om op jouw manier te spelen."],
    pl: ['Menu i sandbox', 'Menu modów, spawnery i narzędzia kreatywne do gry po swojemu.'],
    'pt-BR': ['Menus e sandbox', 'Menus de mods, spawners e ferramentas criativas para jogar do seu jeito.'],
    ru: ['Меню и песочница', 'Мод-меню, спавнеры и творческие инструменты, чтобы играть по-своему.'],
    sv: ['Menyer och sandlåda', 'Moddmenyer, spawners och kreativa verktyg för att spela på ditt sätt.'],
    tr: ['Menüler ve sandbox', "Mod menüleri, spawner'lar ve kendi tarzında oynaman için yaratıcı araçlar."],
    'zh-Hans': ['菜单与沙盒', '模组菜单、生成器和创意工具，按你的方式游玩。'],
    ja: ['メニューとサンドボックス', 'Mod メニュー、スポナー、自分流に遊ぶためのクリエイティブツール。'],
  }),
  category('multiplayer-servers', 'Multiplayer & Servers', 'lucide:server', 10, [], {
    en: ['Multiplayer & Servers', 'Co-op improvements, dedicated servers and admin tools.'],
    es: [
      'Multijugador y servidores',
      'Mejoras del cooperativo, servidores dedicados y herramientas de administración.',
    ],
    de: ['Mehrspieler & Server', 'Verbesserungen für Koop, dedizierte Server und Admin-Werkzeuge.'],
    fr: ['Multijoueur et serveurs', "Améliorations du coop, serveurs dédiés et outils d'administration."],
    it: ['Multigiocatore e server', 'Miglioramenti alla cooperativa, server dedicati e strumenti di amministrazione.'],
    nl: ['Multiplayer en servers', 'Verbeteringen voor co-op, dedicated servers en beheertools.'],
    pl: ['Wieloosobowe i serwery', 'Usprawnienia trybu co-op, serwery dedykowane i narzędzia administracyjne.'],
    'pt-BR': [
      'Multijogador e servidores',
      'Melhorias no cooperativo, servidores dedicados e ferramentas de administração.',
    ],
    ru: ['Мультиплеер и серверы', 'Улучшения кооператива, выделенные серверы и инструменты администратора.'],
    sv: ['Flerspelare och servrar', 'Förbättringar för co-op, dedikerade servrar och adminverktyg.'],
    tr: ['Çok oyunculu ve sunucular', 'Co-op iyileştirmeleri, özel sunucular ve yönetici araçları.'],
    'zh-Hans': ['多人与服务器', '合作模式改进、专用服务器与管理工具。'],
    ja: ['マルチプレイとサーバー', '協力プレイの改善、専用サーバー、管理ツール。'],
  }),
  category('library', 'Library', 'lucide:library-big', 11, [], {
    en: ['Libraries', 'Shared code other mods depend on. Install them when a mod asks for them.'],
    es: ['Librerías', 'Código compartido del que dependen otros mods. Instálalas cuando un mod las pida.'],
    de: ['Bibliotheken', 'Gemeinsamer Code, den andere Mods brauchen. Installiere sie, wenn ein Mod danach verlangt.'],
    fr: ['Bibliothèques', "Du code partagé dont d'autres mods dépendent. Installe-les quand un mod les demande."],
    it: ['Librerie', 'Codice condiviso da cui dipendono altre mod. Installale quando una mod le richiede.'],
    nl: ['Bibliotheken', 'Gedeelde code waar andere mods van afhangen. Installeer ze wanneer een mod erom vraagt.'],
    pl: ['Biblioteki', 'Wspólny kod, od którego zależą inne mody. Zainstaluj je, gdy mod ich wymaga.'],
    'pt-BR': ['Bibliotecas', 'Código compartilhado do qual outros mods dependem. Instale quando um mod pedir.'],
    ru: ['Библиотеки', 'Общий код, от которого зависят другие моды. Устанавливайте, когда мод их требует.'],
    sv: ['Bibliotek', 'Delad kod som andra moddar är beroende av. Installera dem när en modd kräver det.'],
    tr: ['Kütüphaneler', 'Diğer modların bağlı olduğu ortak kod. Bir mod istediğinde yükle.'],
    'zh-Hans': ['依赖库', '其他模组依赖的共享代码。当模组需要时再安装。'],
    ja: ['ライブラリ', '他の Mod が依存する共有コード。Mod に求められたときにインストールします。'],
  }),
  category('misc', 'Misc', 'lucide:shapes', 12, [], {
    en: ['Other', "Everything that doesn't fit anywhere else."],
    es: ['Otros', 'Todo lo que no encaja en ninguna otra categoría.'],
    de: ['Sonstiges', 'Alles, was nirgendwo sonst hineinpasst.'],
    fr: ['Autres', 'Tout ce qui ne rentre dans aucune autre catégorie.'],
    it: ['Altro', "Tutto ciò che non rientra in nessun'altra categoria."],
    nl: ['Overig', 'Alles wat nergens anders in past.'],
    pl: ['Inne', 'Wszystko, co nie pasuje nigdzie indziej.'],
    'pt-BR': ['Outros', 'Tudo o que não se encaixa em outra categoria.'],
    ru: ['Другое', 'Всё, что не подходит под другие категории.'],
    sv: ['Övrigt', 'Allt som inte passar in någon annanstans.'],
    tr: ['Diğer', 'Başka hiçbir yere uymayan her şey.'],
    'zh-Hans': ['其他', '不属于其他任何分类的内容。'],
    ja: ['その他', 'ほかのどのカテゴリーにも当てはまらないもの。'],
  }),
];

type TagRow = readonly [slug: string, description: string, ...names: string[]];

/** Names in SEED_LOCALES order: en, es, de, fr, it, nl, pl, pt-BR, ru, sv, tr, zh-Hans, ja. */
// biome-ignore format: tabular translation data reads better one tag per line
const TAG_ROWS: Readonly<Record<SeedTagGroup, readonly TagRow[]>> = {
  survival: [
    ['inventory', 'Carrying capacity, inventory layout and item management.', 'Inventory', 'Inventario', 'Inventar', 'Inventaire', 'Inventario', 'Inventaris', 'Ekwipunek', 'Inventário', 'Инвентарь', 'Inventarie', 'Envanter', '物品栏', 'インベントリ'],
    ['crafting', 'Recipes, crafting and item creation.', 'Crafting', 'Fabricación', 'Herstellung', 'Artisanat', 'Creazione', 'Crafting', 'Wytwarzanie', 'Criação', 'Крафт', 'Tillverkning', 'Üretim', '制作', 'クラフト'],
    ['storage', 'Storage containers, racks and holders.', 'Storage', 'Almacenamiento', 'Lagerung', 'Stockage', 'Deposito', 'Opslag', 'Przechowywanie', 'Armazenamento', 'Хранение', 'Förvaring', 'Depolama', '储物', '収納'],
    ['cooking', 'Food, recipes and cooking.', 'Cooking', 'Cocina', 'Kochen', 'Cuisine', 'Cucina', 'Koken', 'Gotowanie', 'Culinária', 'Готовка', 'Matlagning', 'Yemek pişirme', '烹饪', '料理'],
    ['hunting', 'Hunting, traps for game and animal drops.', 'Hunting', 'Caza', 'Jagd', 'Chasse', 'Caccia', 'Jagen', 'Polowanie', 'Caça', 'Охота', 'Jakt', 'Avcılık', '狩猎', '狩り'],
    ['fishing', 'Fishing and fish.', 'Fishing', 'Pesca', 'Angeln', 'Pêche', 'Pesca', 'Vissen', 'Wędkarstwo', 'Pesca', 'Рыбалка', 'Fiske', 'Balıkçılık', '钓鱼', '釣り'],
    ['vitals', 'Health, hunger, thirst, stamina and sleep.', 'Vitals', 'Constantes vitales', 'Vitalwerte', 'Besoins vitaux', 'Parametri vitali', 'Vitale waarden', 'Parametry życiowe', 'Sinais vitais', 'Показатели выживания', 'Livsvärden', 'Yaşam değerleri', '生存数值', 'ステータス'],
    ['looting', 'Loot tables, pickups and item drops.', 'Loot', 'Botín', 'Beute', 'Butin', 'Bottino', 'Buit', 'Łupy', 'Saque', 'Добыча', 'Byte', 'Ganimet', '战利品', '戦利品'],
  ],
  gameplay: [
    ['difficulty', 'Harder or easier survival.', 'Difficulty', 'Dificultad', 'Schwierigkeit', 'Difficulté', 'Difficoltà', 'Moeilijkheid', 'Poziom trudności', 'Dificuldade', 'Сложность', 'Svårighetsgrad', 'Zorluk', '难度', '難易度'],
    ['combat', 'Fighting, damage and combat mechanics.', 'Combat', 'Combate', 'Kampf', 'Combat', 'Combattimento', 'Gevechten', 'Walka', 'Combate', 'Бой', 'Strid', 'Dövüş', '战斗', '戦闘'],
    ['enemies', 'Mutants, cannibals and enemy behavior.', 'Enemies', 'Enemigos', 'Gegner', 'Ennemis', 'Nemici', 'Vijanden', 'Wrogowie', 'Inimigos', 'Враги', 'Fiender', 'Düşmanlar', '敌人', '敵'],
    ['cheats', 'Cheats and god-mode style options.', 'Cheats', 'Trucos', 'Cheats', 'Triches', 'Trucchi', 'Cheats', 'Kody', 'Trapaças', 'Читы', 'Fusk', 'Hileler', '作弊', 'チート'],
    ['spawner', 'Spawn items, creatures or structures.', 'Spawner', 'Generador', 'Spawner', 'Générateur', 'Spawner', 'Spawner', 'Spawner', 'Spawner', 'Спавнер', 'Spawner', 'Spawner', '生成器', 'スポナー'],
    ['teleport', 'Teleporting and fast travel.', 'Teleport', 'Teletransporte', 'Teleport', 'Téléportation', 'Teletrasporto', 'Teleporteren', 'Teleportacja', 'Teletransporte', 'Телепорт', 'Teleportering', 'Işınlanma', '传送', 'テレポート'],
    ['time-control', 'Day length, time of day and pausing.', 'Time control', 'Control del tiempo', 'Zeitsteuerung', 'Contrôle du temps', 'Controllo del tempo', 'Tijdsbeheer', 'Kontrola czasu', 'Controle do tempo', 'Управление временем', 'Tidskontroll', 'Zaman kontrolü', '时间控制', '時間操作'],
  ],
  building: [
    ['building-tools', 'Placement, snapping and building helpers.', 'Building tools', 'Herramientas de construcción', 'Bauwerkzeuge', 'Outils de construction', 'Strumenti di costruzione', 'Bouwgereedschap', 'Narzędzia budowlane', 'Ferramentas de construção', 'Инструменты строительства', 'Byggverktyg', 'İnşa araçları', '建造工具', '建築ツール'],
    ['structures', 'New buildable pieces and structures.', 'Structures', 'Estructuras', 'Bauwerke', 'Structures', 'Strutture', 'Bouwwerken', 'Konstrukcje', 'Estruturas', 'Постройки', 'Byggnader', 'Yapılar', '建筑', '建造物'],
    ['defenses', 'Traps, walls and base defense.', 'Defenses', 'Defensas', 'Verteidigung', 'Défenses', 'Difese', 'Verdediging', 'Obrona', 'Defesas', 'Оборона', 'Försvar', 'Savunma', '防御', '防衛'],
    ['decoration', 'Furniture and decorative items.', 'Decoration', 'Decoración', 'Dekoration', 'Décoration', 'Decorazione', 'Decoratie', 'Dekoracje', 'Decoração', 'Декор', 'Dekoration', 'Dekorasyon', '装饰', '装飾'],
  ],
  world: [
    ['map', 'GPS, map markers and navigation.', 'Map', 'Mapa', 'Karte', 'Carte', 'Mappa', 'Kaart', 'Mapa', 'Mapa', 'Карта', 'Karta', 'Harita', '地图', 'マップ'],
    ['weather', 'Weather and seasons.', 'Weather', 'Clima', 'Wetter', 'Météo', 'Meteo', 'Weer', 'Pogoda', 'Clima', 'Погода', 'Väder', 'Hava durumu', '天气', '天候'],
    ['exploration', 'Caves, bunkers and points of interest.', 'Exploration', 'Exploración', 'Erkundung', 'Exploration', 'Esplorazione', 'Verkenning', 'Eksploracja', 'Exploração', 'Исследование', 'Utforskning', 'Keşif', '探索', '探索'],
    ['wildlife', 'Animals and their behavior.', 'Wildlife', 'Fauna', 'Tierwelt', 'Faune', 'Fauna', 'Dieren', 'Fauna', 'Fauna', 'Животные', 'Djurliv', 'Yaban hayatı', '野生动物', '野生動物'],
  ],
  visuals: [
    ['graphics', 'Visual quality, shaders and post-processing.', 'Graphics', 'Gráficos', 'Grafik', 'Graphismes', 'Grafica', 'Graphics', 'Grafika', 'Gráficos', 'Графика', 'Grafik', 'Grafik', '画面', 'グラフィック'],
    ['lighting', 'Lights, torches and night visibility.', 'Lighting', 'Iluminación', 'Beleuchtung', 'Éclairage', 'Illuminazione', 'Verlichting', 'Oświetlenie', 'Iluminação', 'Освещение', 'Belysning', 'Aydınlatma', '光照', 'ライティング'],
    ['camera', 'Camera modes, field of view and photo tools.', 'Camera', 'Cámara', 'Kamera', 'Caméra', 'Telecamera', 'Camera', 'Kamera', 'Câmera', 'Камера', 'Kamera', 'Kamera', '镜头', 'カメラ'],
    ['animations', 'New or changed animations.', 'Animations', 'Animaciones', 'Animationen', 'Animations', 'Animazioni', 'Animaties', 'Animacje', 'Animações', 'Анимации', 'Animationer', 'Animasyonlar', '动画', 'アニメーション'],
    ['cosmetics', 'Skins, outfits and appearance.', 'Cosmetics', 'Estética', 'Kosmetik', 'Cosmétiques', 'Estetica', 'Cosmetica', 'Kosmetyka', 'Cosméticos', 'Внешний вид', 'Kosmetika', 'Kozmetik', '外观', '見た目'],
  ],
  audio: [
    ['music', 'Soundtrack and music.', 'Music', 'Música', 'Musik', 'Musique', 'Musica', 'Muziek', 'Muzyka', 'Música', 'Музыка', 'Musik', 'Müzik', '音乐', '音楽'],
    ['sound', 'Sound effects and audio.', 'Sound', 'Sonido', 'Sound', 'Son', 'Audio', 'Geluid', 'Dźwięk', 'Som', 'Звук', 'Ljud', 'Ses', '音效', 'サウンド'],
  ],
  ui: [
    ['hud', 'Heads-up display elements.', 'HUD', 'HUD', 'HUD', 'HUD', 'HUD', 'HUD', 'HUD', 'HUD', 'HUD', 'HUD', 'HUD', 'HUD', 'HUD'],
    ['keybinds', 'Controls, hotkeys and key remapping.', 'Keybinds', 'Controles', 'Tastenbelegung', 'Raccourcis clavier', 'Comandi', 'Toetsen', 'Sterowanie', 'Atalhos', 'Управление', 'Kortkommandon', 'Tuş atamaları', '按键绑定', 'キー設定'],
    ['minimap', 'Minimaps and compasses on screen.', 'Minimap', 'Minimapa', 'Minikarte', 'Mini-carte', 'Minimappa', 'Minikaart', 'Minimapa', 'Minimapa', 'Мини-карта', 'Minikarta', 'Mini harita', '小地图', 'ミニマップ'],
  ],
  tech: [
    ['performance', 'Frame rate, loading times and optimization.', 'Performance', 'Rendimiento', 'Leistung', 'Performances', 'Prestazioni', 'Prestaties', 'Wydajność', 'Desempenho', 'Производительность', 'Prestanda', 'Performans', '性能', 'パフォーマンス'],
    ['bug-fixes', 'Fixes for bugs of the game or of other mods.', 'Bug fixes', 'Correcciones', 'Fehlerbehebungen', 'Corrections de bugs', 'Correzioni di bug', 'Bugfixes', 'Poprawki błędów', 'Correções de bugs', 'Исправления ошибок', 'Buggfixar', 'Hata düzeltmeleri', '错误修复', 'バグ修正'],
    ['localization', 'Translations of the game or of other mods.', 'Localization', 'Traducción', 'Übersetzung', 'Traduction', 'Traduzione', 'Vertaling', 'Tłumaczenie', 'Tradução', 'Локализация', 'Översättning', 'Çeviri', '本地化', 'ローカライズ'],
    ['config-menu', 'Configurable from the in-game mod settings menu.', 'In-game settings', 'Ajustes en el juego', 'Einstellungen im Spiel', 'Réglages en jeu', 'Impostazioni in gioco', 'Instellingen in het spel', 'Ustawienia w grze', 'Configurações no jogo', 'Настройки в игре', 'Inställningar i spelet', 'Oyun içi ayarlar', '游戏内设置', 'ゲーム内設定'],
    ['developer-tools', 'Debugging and modding tools.', 'Developer tools', 'Herramientas para desarrolladores', 'Entwicklerwerkzeuge', 'Outils de développement', 'Strumenti per sviluppatori', 'Ontwikkelaarstools', 'Narzędzia deweloperskie', 'Ferramentas de desenvolvimento', 'Инструменты разработчика', 'Utvecklarverktyg', 'Geliştirici araçları', '开发者工具', '開発者ツール'],
  ],
  players: [
    ['co-op', 'Improves playing together.', 'Co-op', 'Cooperativo', 'Koop', 'Coop', 'Cooperativa', 'Co-op', 'Co-op', 'Cooperativo', 'Кооператив', 'Co-op', 'Co-op', '合作', '協力プレイ'],
    ['accessibility', 'Makes the game easier to see, hear or control.', 'Accessibility', 'Accesibilidad', 'Barrierefreiheit', 'Accessibilité', 'Accessibilità', 'Toegankelijkheid', 'Dostępność', 'Acessibilidade', 'Доступность', 'Tillgänglighet', 'Erişilebilirlik', '无障碍', 'アクセシビリティ'],
  ],
};

function buildTags(): SeedTag[] {
  const tags: SeedTag[] = [];
  for (const group of SEED_TAG_GROUPS) {
    for (const [slug, description, ...names] of TAG_ROWS[group]) {
      if (names.length !== SEED_LOCALES.length) {
        throw new Error(`tag "${slug}": expected ${SEED_LOCALES.length} names, got ${names.length}`);
      }
      const localized = Object.fromEntries(SEED_LOCALES.map((lc, i) => [lc, names[i]])) as Localized<string>;
      tags.push({ slug, group, sortOrder: tags.length + 1, description, names: localized });
    }
  }
  return tags;
}

export const SEED_TAGS: readonly SeedTag[] = buildTags();

export const SEED_LOADER_RELEASES: readonly SeedLoaderRelease[] = [
  {
    name: 'RedLoader',
    version: '0.8.6',
    releasedAt: '2025-02-26',
    url: 'https://github.com/ToniMacaroni/RedLoader/releases/tag/0.8.6',
  },
];
