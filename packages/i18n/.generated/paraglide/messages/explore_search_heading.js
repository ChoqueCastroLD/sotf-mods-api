/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_HeadingInputs */

const en_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

const es_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar`)
};

const de_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche`)
};

const fr_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche`)
};

const it_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca`)
};

const nl_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken`)
};

const pl_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyszukiwanie`)
};

const pt_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisa`)
};

const ru_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск`)
};

const sv_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök`)
};

const tr_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ara`)
};

const zh_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const ja_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {Explore_Search_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_heading = /** @type {((inputs?: Explore_Search_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_heading(inputs)
	if (locale === "de") return de_explore_search_heading(inputs)
	if (locale === "fr") return fr_explore_search_heading(inputs)
	if (locale === "it") return it_explore_search_heading(inputs)
	if (locale === "nl") return nl_explore_search_heading(inputs)
	if (locale === "pl") return pl_explore_search_heading(inputs)
	if (locale === "pt") return pt_explore_search_heading(inputs)
	if (locale === "ru") return ru_explore_search_heading(inputs)
	if (locale === "sv") return sv_explore_search_heading(inputs)
	if (locale === "tr") return tr_explore_search_heading(inputs)
	if (locale === "zh") return zh_explore_search_heading(inputs)
	if (locale === "ja") return ja_explore_search_heading(inputs)
	return en_explore_search_heading(inputs)
});
