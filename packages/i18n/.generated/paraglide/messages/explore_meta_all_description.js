/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Meta_All_DescriptionInputs */

const en_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod, library or build for Sons of the Forest in one list. Filter and sort by category, tag, rating and more.`);
	return /** @type {LocalizedString} */ (`${count__number} mods, libraries and builds for Sons of the Forest in one list. Filter and sort by category, tag, rating and more.`)
	
};

const es_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod, librería o build para Sons of the Forest en una sola lista. Filtra y ordena por categoría, etiqueta, valoración y más.`);
	return /** @type {LocalizedString} */ (`${count__number} mods, librerías y builds para Sons of the Forest en una sola lista. Filtra y ordena por categoría, etiqueta, valoración y más.`)
	
};

const de_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod, Bibliothek oder Build für Sons of the Forest in einer Liste. Filtere und sortiere nach Kategorie, Tag, Bewertung und mehr.`);
	return /** @type {LocalizedString} */ (`${count__number} Mods, Bibliotheken und Builds für Sons of the Forest in einer Liste. Filtere und sortiere nach Kategorie, Tag, Bewertung und mehr.`)
	
};

const fr_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod, bibliothèque ou build pour Sons of the Forest dans une seule liste. Filtrez et triez par catégorie, tag, note et plus.`);
	return /** @type {LocalizedString} */ (`${count__number} mods, bibliothèques et builds pour Sons of the Forest dans une seule liste. Filtrez et triez par catégorie, tag, note et plus.`)
	
};

const it_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod, libreria o build per Sons of the Forest in un unico elenco. Filtra e ordina per categoria, tag, valutazione e altro.`);
	return /** @type {LocalizedString} */ (`${count__number} mod, librerie e build per Sons of the Forest in un unico elenco. Filtra e ordina per categoria, tag, valutazione e altro.`)
	
};

const nl_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod, bibliotheek of build voor Sons of the Forest in één lijst. Filter en sorteer op categorie, tag, beoordeling en meer.`);
	return /** @type {LocalizedString} */ (`${count__number} mods, bibliotheken en builds voor Sons of the Forest in één lijst. Filter en sorteer op categorie, tag, beoordeling en meer.`)
	
};

const pl_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod, biblioteka lub build do Sons of the Forest na jednej liście. Filtruj i sortuj według kategorii, tagu, oceny i nie tylko.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} mody, biblioteki i buildy do Sons of the Forest na jednej liście. Filtruj i sortuj według kategorii, tagu, oceny i nie tylko.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} modów, bibliotek i buildów do Sons of the Forest na jednej liście. Filtruj i sortuj według kategorii, tagu, oceny i nie tylko.`);
	return /** @type {LocalizedString} */ (`${count__number} moda, biblioteki i buildu do Sons of the Forest na jednej liście. Filtruj i sortuj według kategorii, tagu, oceny i nie tylko.`)
	
};

const pt_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod, biblioteca ou build para Sons of the Forest em uma lista. Filtre e ordene por categoria, tag, avaliação e mais.`);
	return /** @type {LocalizedString} */ (`${count__number} mods, bibliotecas e builds para Sons of the Forest em uma lista. Filtre e ordene por categoria, tag, avaliação e mais.`)
	
};

const ru_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод, библиотека или постройка для Sons of the Forest в одном списке. Фильтры и сортировка по категории, тегу, оценке и другим параметрам.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода, библиотеки и постройки для Sons of the Forest в одном списке. Фильтры и сортировка по категории, тегу, оценке и другим параметрам.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов, библиотек и построек для Sons of the Forest в одном списке. Фильтры и сортировка по категории, тегу, оценке и другим параметрам.`);
	return /** @type {LocalizedString} */ (`${count__number} мода, библиотеки и постройки для Sons of the Forest в одном списке. Фильтры и сортировка по категории, тегу, оценке и другим параметрам.`)
	
};

const sv_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd, bibliotek eller bygge till Sons of the Forest i en lista. Filtrera och sortera på kategori, tagg, betyg med mera.`);
	return /** @type {LocalizedString} */ (`${count__number} moddar, bibliotek och byggen till Sons of the Forest i en lista. Filtrera och sortera på kategori, tagg, betyg med mera.`)
	
};

const tr_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Sons of the Forest için ${count__number} mod, kütüphane veya yapı tek listede. Kategori, etiket, puan ve daha fazlasına göre filtrele ve sırala.`);
	return /** @type {LocalizedString} */ (`Sons of the Forest için ${count__number} mod, kütüphane ve yapı tek listede. Kategori, etiket, puan ve daha fazlasına göre filtrele ve sırala.`)
	
};

const zh_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个 Sons of the Forest 模组、前置库和建筑尽在一个列表，可按分类、标签、评分等筛选和排序。`)
};

const ja_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest の MOD、ライブラリ、建築 ${count__number} 件をひとつのリストにまとめています。カテゴリ、タグ、評価などで絞り込み・並べ替えできます。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod, library or build for Sons of the Forest in one list. Filter and sort by category, tag, rating and more." |
* | * | "{count__number} mods, libraries and builds for Sons of the Forest in one list. Filter and sort by category, tag, rating and more." |
*
* @param {Explore_Meta_All_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_meta_all_description = /** @type {((inputs: Explore_Meta_All_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_All_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_meta_all_description(inputs)
	if (locale === "de") return de_explore_meta_all_description(inputs)
	if (locale === "fr") return fr_explore_meta_all_description(inputs)
	if (locale === "it") return it_explore_meta_all_description(inputs)
	if (locale === "nl") return nl_explore_meta_all_description(inputs)
	if (locale === "pl") return pl_explore_meta_all_description(inputs)
	if (locale === "pt") return pt_explore_meta_all_description(inputs)
	if (locale === "ru") return ru_explore_meta_all_description(inputs)
	if (locale === "sv") return sv_explore_meta_all_description(inputs)
	if (locale === "tr") return tr_explore_meta_all_description(inputs)
	if (locale === "zh") return zh_explore_meta_all_description(inputs)
	if (locale === "ja") return ja_explore_meta_all_description(inputs)
	return en_explore_meta_all_description(inputs)
});
