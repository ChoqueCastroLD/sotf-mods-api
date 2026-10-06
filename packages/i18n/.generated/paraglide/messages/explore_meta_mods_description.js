/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Meta_Mods_DescriptionInputs */

const en_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Browse ${count__number} Sons of the Forest mod for RedLoader. Filter by category, tag and multiplayer support. Free direct downloads.`);
	return /** @type {LocalizedString} */ (`Browse ${count__number} Sons of the Forest mods for RedLoader. Filter by category, tag and multiplayer support. Free direct downloads.`)
	
};

const es_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Explora ${count__number} mod de Sons of the Forest para RedLoader. Filtra por categoría, etiqueta y multijugador. Descargas directas y gratuitas.`);
	return /** @type {LocalizedString} */ (`Explora ${count__number} mods de Sons of the Forest para RedLoader. Filtra por categoría, etiqueta y multijugador. Descargas directas y gratuitas.`)
	
};

const de_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Stöbere in ${count__number} Sons-of-the-Forest-Mod für RedLoader. Filtere nach Kategorie, Tag und Multiplayer. Kostenlose Direkt-Downloads.`);
	return /** @type {LocalizedString} */ (`Stöbere in ${count__number} Sons-of-the-Forest-Mods für RedLoader. Filtere nach Kategorie, Tag und Multiplayer. Kostenlose Direkt-Downloads.`)
	
};

const fr_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Parcourez ${count__number} mod Sons of the Forest pour RedLoader. Filtrez par catégorie, tag et multijoueur. Téléchargements directs et gratuits.`);
	return /** @type {LocalizedString} */ (`Parcourez ${count__number} mods Sons of the Forest pour RedLoader. Filtrez par catégorie, tag et multijoueur. Téléchargements directs et gratuits.`)
	
};

const it_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Sfoglia ${count__number} mod di Sons of the Forest per RedLoader. Filtra per categoria, tag e multigiocatore. Download diretti e gratuiti.`);
	return /** @type {LocalizedString} */ (`Sfoglia ${count__number} mod di Sons of the Forest per RedLoader. Filtra per categoria, tag e multigiocatore. Download diretti e gratuiti.`)
	
};

const nl_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Blader door ${count__number} Sons of the Forest-mod voor RedLoader. Filter op categorie, tag en multiplayer. Gratis directe downloads.`);
	return /** @type {LocalizedString} */ (`Blader door ${count__number} Sons of the Forest-mods voor RedLoader. Filter op categorie, tag en multiplayer. Gratis directe downloads.`)
	
};

const pl_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Przeglądaj ${count__number} mod do Sons of the Forest dla RedLoadera. Filtruj według kategorii, tagu i trybu wieloosobowego. Darmowe bezpośrednie pobieranie.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Przeglądaj ${count__number} mody do Sons of the Forest dla RedLoadera. Filtruj według kategorii, tagu i trybu wieloosobowego. Darmowe bezpośrednie pobieranie.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Przeglądaj ${count__number} modów do Sons of the Forest dla RedLoadera. Filtruj według kategorii, tagu i trybu wieloosobowego. Darmowe bezpośrednie pobieranie.`);
	return /** @type {LocalizedString} */ (`Przeglądaj ${count__number} moda do Sons of the Forest dla RedLoadera. Filtruj według kategorii, tagu i trybu wieloosobowego. Darmowe bezpośrednie pobieranie.`)
	
};

const pt_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Veja ${count__number} mod de Sons of the Forest para RedLoader. Filtre por categoria, tag e multijogador. Downloads diretos e gratuitos.`);
	return /** @type {LocalizedString} */ (`Veja ${count__number} mods de Sons of the Forest para RedLoader. Filtre por categoria, tag e multijogador. Downloads diretos e gratuitos.`)
	
};

const ru_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод для Sons of the Forest под RedLoader. Фильтры по категории, тегу и мультиплееру. Бесплатные прямые загрузки.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода для Sons of the Forest под RedLoader. Фильтры по категории, тегу и мультиплееру. Бесплатные прямые загрузки.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов для Sons of the Forest под RedLoader. Фильтры по категории, тегу и мультиплееру. Бесплатные прямые загрузки.`);
	return /** @type {LocalizedString} */ (`${count__number} мода для Sons of the Forest под RedLoader. Фильтры по категории, тегу и мультиплееру. Бесплатные прямые загрузки.`)
	
};

const sv_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Bläddra bland ${count__number} modd till Sons of the Forest för RedLoader. Filtrera på kategori, tagg och flerspelarläge. Gratis direkta nedladdningar.`);
	return /** @type {LocalizedString} */ (`Bläddra bland ${count__number} moddar till Sons of the Forest för RedLoader. Filtrera på kategori, tagg och flerspelarläge. Gratis direkta nedladdningar.`)
	
};

const tr_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`RedLoader için ${count__number} Sons of the Forest modunu incele. Kategoriye, etikete ve çok oyunculu desteğe göre filtrele. Ücretsiz doğrudan indirme.`);
	return /** @type {LocalizedString} */ (`RedLoader için ${count__number} Sons of the Forest modunu incele. Kategoriye, etikete ve çok oyunculu desteğe göre filtrele. Ücretsiz doğrudan indirme.`)
	
};

const zh_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`浏览 ${count__number} 个适用于 RedLoader 的 Sons of the Forest 模组。可按分类、标签和多人模式筛选，免费直接下载。`)
};

const ja_explore_meta_mods_description = /** @type {(inputs: Explore_Meta_Mods_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`RedLoader 対応の Sons of the Forest MOD ${count__number} 件を閲覧。カテゴリ、タグ、マルチプレイで絞り込めます。無料の直接ダウンロード。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Browse {count__number} Sons of the Forest mod for RedLoader. Filter by category, tag and multiplayer support. Free direct downloads." |
* | * | "Browse {count__number} Sons of the Forest mods for RedLoader. Filter by category, tag and multiplayer support. Free direct downloads." |
*
* @param {Explore_Meta_Mods_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_meta_mods_description = /** @type {((inputs: Explore_Meta_Mods_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Mods_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_meta_mods_description(inputs)
	if (locale === "de") return de_explore_meta_mods_description(inputs)
	if (locale === "fr") return fr_explore_meta_mods_description(inputs)
	if (locale === "it") return it_explore_meta_mods_description(inputs)
	if (locale === "nl") return nl_explore_meta_mods_description(inputs)
	if (locale === "pl") return pl_explore_meta_mods_description(inputs)
	if (locale === "pt") return pt_explore_meta_mods_description(inputs)
	if (locale === "ru") return ru_explore_meta_mods_description(inputs)
	if (locale === "sv") return sv_explore_meta_mods_description(inputs)
	if (locale === "tr") return tr_explore_meta_mods_description(inputs)
	if (locale === "zh") return zh_explore_meta_mods_description(inputs)
	if (locale === "ja") return ja_explore_meta_mods_description(inputs)
	return en_explore_meta_mods_description(inputs)
});
