/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Search_ButtonInputs */

const en_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

const es_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar`)
};

const de_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suchen`)
};

const fr_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher`)
};

const it_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca`)
};

const nl_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken`)
};

const pl_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj`)
};

const pt_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar`)
};

const ru_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Найти`)
};

const sv_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök`)
};

const tr_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ara`)
};

const zh_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const ja_explore_catalog_search_button = /** @type {(inputs: Explore_Catalog_Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {Explore_Catalog_Search_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_search_button = /** @type {((inputs?: Explore_Catalog_Search_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Search_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_search_button(inputs)
	if (locale === "de") return de_explore_catalog_search_button(inputs)
	if (locale === "fr") return fr_explore_catalog_search_button(inputs)
	if (locale === "it") return it_explore_catalog_search_button(inputs)
	if (locale === "nl") return nl_explore_catalog_search_button(inputs)
	if (locale === "pl") return pl_explore_catalog_search_button(inputs)
	if (locale === "pt") return pt_explore_catalog_search_button(inputs)
	if (locale === "ru") return ru_explore_catalog_search_button(inputs)
	if (locale === "sv") return sv_explore_catalog_search_button(inputs)
	if (locale === "tr") return tr_explore_catalog_search_button(inputs)
	if (locale === "zh") return zh_explore_catalog_search_button(inputs)
	if (locale === "ja") return ja_explore_catalog_search_button(inputs)
	return en_explore_catalog_search_button(inputs)
});
