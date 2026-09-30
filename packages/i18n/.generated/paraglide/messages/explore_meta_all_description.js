/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Meta_All_DescriptionInputs */

const en_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Everything on the island in one list: ${count__number} mod, library or build for Sons of the Forest, filterable and sortable.`);
	return /** @type {LocalizedString} */ (`Everything on the island in one list: ${count__number} mods, libraries and builds for Sons of the Forest, filterable and sortable.`)
	
};

const es_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Todo lo de la isla en una lista: ${count__number} mod, librería o build para Sons of the Forest, con filtros y orden.`);
	return /** @type {LocalizedString} */ (`Todo lo de la isla en una lista: ${count__number} mods, librerías y builds para Sons of the Forest, con filtros y orden.`)
	
};

const de_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Alles von der Insel in einer Liste: ${count__number} Mod, Bibliothek oder Build für Sons of the Forest, filterbar und sortierbar.`);
	return /** @type {LocalizedString} */ (`Alles von der Insel in einer Liste: ${count__number} Mods, Bibliotheken und Builds für Sons of the Forest, filterbar und sortierbar.`)
	
};

const fr_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Toute l’île dans une seule liste : ${count__number} mod, bibliothèque ou build pour Sons of the Forest, à filtrer et trier.`);
	return /** @type {LocalizedString} */ (`Toute l’île dans une seule liste : ${count__number} mods, bibliothèques et builds pour Sons of the Forest, à filtrer et trier.`)
	
};

const it_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Tutta l’isola in un unico elenco: ${count__number} mod, libreria o build per Sons of the Forest, da filtrare e ordinare.`);
	return /** @type {LocalizedString} */ (`Tutta l’isola in un unico elenco: ${count__number} mod, librerie e build per Sons of the Forest, da filtrare e ordinare.`)
	
};

const nl_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Het hele eiland in één lijst: ${count__number} mod, bibliotheek of build voor Sons of the Forest, te filteren en te sorteren.`);
	return /** @type {LocalizedString} */ (`Het hele eiland in één lijst: ${count__number} mods, bibliotheken en builds voor Sons of the Forest, te filteren en te sorteren.`)
	
};

const pl_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Cała wyspa na jednej liście: ${count__number} mod, biblioteka lub build do Sons of the Forest, z filtrami i sortowaniem.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Cała wyspa na jednej liście: ${count__number} mody, biblioteki i buildy do Sons of the Forest, z filtrami i sortowaniem.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Cała wyspa na jednej liście: ${count__number} modów, bibliotek i buildów do Sons of the Forest, z filtrami i sortowaniem.`);
	return /** @type {LocalizedString} */ (`Cała wyspa na jednej liście: ${count__number} moda, biblioteki i buildu do Sons of the Forest, z filtrami i sortowaniem.`)
	
};

const pt_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`A ilha inteira em uma lista: ${count__number} mod, biblioteca ou build para Sons of the Forest, com filtros e ordenação.`);
	return /** @type {LocalizedString} */ (`A ilha inteira em uma lista: ${count__number} mods, bibliotecas e builds para Sons of the Forest, com filtros e ordenação.`)
	
};

const ru_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Весь остров в одном списке: ${count__number} мод, библиотека или постройка для Sons of the Forest с фильтрами и сортировкой.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Весь остров в одном списке: ${count__number} мода, библиотеки и постройки для Sons of the Forest с фильтрами и сортировкой.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Весь остров в одном списке: ${count__number} модов, библиотек и построек для Sons of the Forest с фильтрами и сортировкой.`);
	return /** @type {LocalizedString} */ (`Весь остров в одном списке: ${count__number} мода, библиотеки и постройки для Sons of the Forest с фильтрами и сортировкой.`)
	
};

const sv_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Hela ön i en lista: ${count__number} modd, bibliotek eller bygge till Sons of the Forest, med filter och sortering.`);
	return /** @type {LocalizedString} */ (`Hela ön i en lista: ${count__number} moddar, bibliotek och byggen till Sons of the Forest, med filter och sortering.`)
	
};

const tr_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Adanın tamamı tek listede: Sons of the Forest için ${count__number} mod, kütüphane veya yapı, filtrelenebilir ve sıralanabilir.`);
	return /** @type {LocalizedString} */ (`Adanın tamamı tek listede: Sons of the Forest için ${count__number} mod, kütüphane ve yapı, filtrelenebilir ve sıralanabilir.`)
	
};

const zh_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`整座岛尽在一个列表：${count__number} 个 Sons of the Forest 模组、前置库和建筑，可筛选、可排序。`)
};

const ja_explore_meta_all_description = /** @type {(inputs: Explore_Meta_All_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`島のすべてをひとつのリストに。Sons of the Forest の MOD、ライブラリ、建築 ${count__number} 件を絞り込み・並べ替えできます。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Everything on the island in one list: {count__number} mod, library or build for Sons of the Forest, filterable and sortable." |
* | * | "Everything on the island in one list: {count__number} mods, libraries and builds for Sons of the Forest, filterable and sortable." |
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
