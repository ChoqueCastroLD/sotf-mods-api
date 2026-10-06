/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Search_PlaceholderInputs */

const en_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods`)
};

const es_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar mods`)
};

const de_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods suchen`)
};

const fr_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des mods`)
};

const it_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod`)
};

const nl_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods zoeken`)
};

const pl_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów`)
};

const pt_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar mods`)
};

const ru_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск модов`)
};

const sv_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök mods`)
};

const tr_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ara`)
};

const zh_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索模组`)
};

const ja_explore_catalog_search_placeholder = /** @type {(inputs: Explore_Catalog_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODを検索`)
};

/**
* | output |
* | --- |
* | "Search mods" |
*
* @param {Explore_Catalog_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_search_placeholder = /** @type {((inputs?: Explore_Catalog_Search_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Search_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_search_placeholder(inputs)
	if (locale === "de") return de_explore_catalog_search_placeholder(inputs)
	if (locale === "fr") return fr_explore_catalog_search_placeholder(inputs)
	if (locale === "it") return it_explore_catalog_search_placeholder(inputs)
	if (locale === "nl") return nl_explore_catalog_search_placeholder(inputs)
	if (locale === "pl") return pl_explore_catalog_search_placeholder(inputs)
	if (locale === "pt") return pt_explore_catalog_search_placeholder(inputs)
	if (locale === "ru") return ru_explore_catalog_search_placeholder(inputs)
	if (locale === "sv") return sv_explore_catalog_search_placeholder(inputs)
	if (locale === "tr") return tr_explore_catalog_search_placeholder(inputs)
	if (locale === "zh") return zh_explore_catalog_search_placeholder(inputs)
	if (locale === "ja") return ja_explore_catalog_search_placeholder(inputs)
	return en_explore_catalog_search_placeholder(inputs)
});
