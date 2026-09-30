/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_DmcaInputs */

const en_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const es_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const de_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const fr_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const it_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const nl_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const pl_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const pt_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const ru_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const sv_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const tr_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const zh_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const ja_search_page_dmca = /** @type {(inputs: Search_Page_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

/**
* | output |
* | --- |
* | "DMCA" |
*
* @param {Search_Page_DmcaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_dmca = /** @type {((inputs?: Search_Page_DmcaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_DmcaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_dmca(inputs)
	if (locale === "de") return de_search_page_dmca(inputs)
	if (locale === "fr") return fr_search_page_dmca(inputs)
	if (locale === "it") return it_search_page_dmca(inputs)
	if (locale === "nl") return nl_search_page_dmca(inputs)
	if (locale === "pl") return pl_search_page_dmca(inputs)
	if (locale === "pt") return pt_search_page_dmca(inputs)
	if (locale === "ru") return ru_search_page_dmca(inputs)
	if (locale === "sv") return sv_search_page_dmca(inputs)
	if (locale === "tr") return tr_search_page_dmca(inputs)
	if (locale === "zh") return zh_search_page_dmca(inputs)
	if (locale === "ja") return ja_search_page_dmca(inputs)
	return en_search_page_dmca(inputs)
});
