/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_BuildsInputs */

const en_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const es_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Construcciones`)
};

const de_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bauwerke`)
};

const fr_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Constructions`)
};

const it_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Costruzioni`)
};

const nl_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouwwerken`)
};

const pl_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budowle`)
};

const pt_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Construções`)
};

const ru_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройки`)
};

const sv_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggen`)
};

const tr_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılar`)
};

const zh_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_search_page_builds = /** @type {(inputs: Search_Page_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築`)
};

/**
* | output |
* | --- |
* | "Builds" |
*
* @param {Search_Page_BuildsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_builds = /** @type {((inputs?: Search_Page_BuildsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_BuildsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_builds(inputs)
	if (locale === "de") return de_search_page_builds(inputs)
	if (locale === "fr") return fr_search_page_builds(inputs)
	if (locale === "it") return it_search_page_builds(inputs)
	if (locale === "nl") return nl_search_page_builds(inputs)
	if (locale === "pl") return pl_search_page_builds(inputs)
	if (locale === "pt") return pt_search_page_builds(inputs)
	if (locale === "ru") return ru_search_page_builds(inputs)
	if (locale === "sv") return sv_search_page_builds(inputs)
	if (locale === "tr") return tr_search_page_builds(inputs)
	if (locale === "zh") return zh_search_page_builds(inputs)
	if (locale === "ja") return ja_search_page_builds(inputs)
	return en_search_page_builds(inputs)
});
