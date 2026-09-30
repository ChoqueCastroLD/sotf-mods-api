/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_ExploreInputs */

const en_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore mods`)
};

const es_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const de_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods entdecken`)
};

const fr_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorer les mods`)
};

const it_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora le mod`)
};

const nl_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods verkennen`)
};

const pl_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj mody`)
};

const pt_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const ru_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Каталог модов`)
};

const sv_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utforska moddar`)
};

const tr_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları keşfet`)
};

const zh_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览模组`)
};

const ja_search_page_explore = /** @type {(inputs: Search_Page_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODを探す`)
};

/**
* | output |
* | --- |
* | "Explore mods" |
*
* @param {Search_Page_ExploreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_explore = /** @type {((inputs?: Search_Page_ExploreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_ExploreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_explore(inputs)
	if (locale === "de") return de_search_page_explore(inputs)
	if (locale === "fr") return fr_search_page_explore(inputs)
	if (locale === "it") return it_search_page_explore(inputs)
	if (locale === "nl") return nl_search_page_explore(inputs)
	if (locale === "pl") return pl_search_page_explore(inputs)
	if (locale === "pt") return pt_search_page_explore(inputs)
	if (locale === "ru") return ru_search_page_explore(inputs)
	if (locale === "sv") return sv_search_page_explore(inputs)
	if (locale === "tr") return tr_search_page_explore(inputs)
	if (locale === "zh") return zh_search_page_explore(inputs)
	if (locale === "ja") return ja_search_page_explore(inputs)
	return en_search_page_explore(inputs)
});
