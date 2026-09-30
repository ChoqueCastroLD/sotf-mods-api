/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_KelvinseekInputs */

const en_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const es_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const de_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const fr_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const it_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const nl_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const pl_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const pt_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const ru_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const sv_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const tr_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const zh_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const ja_search_page_kelvinseek = /** @type {(inputs: Search_Page_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

/**
* | output |
* | --- |
* | "KelvinSeek" |
*
* @param {Search_Page_KelvinseekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_kelvinseek = /** @type {((inputs?: Search_Page_KelvinseekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_KelvinseekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_kelvinseek(inputs)
	if (locale === "de") return de_search_page_kelvinseek(inputs)
	if (locale === "fr") return fr_search_page_kelvinseek(inputs)
	if (locale === "it") return it_search_page_kelvinseek(inputs)
	if (locale === "nl") return nl_search_page_kelvinseek(inputs)
	if (locale === "pl") return pl_search_page_kelvinseek(inputs)
	if (locale === "pt") return pt_search_page_kelvinseek(inputs)
	if (locale === "ru") return ru_search_page_kelvinseek(inputs)
	if (locale === "sv") return sv_search_page_kelvinseek(inputs)
	if (locale === "tr") return tr_search_page_kelvinseek(inputs)
	if (locale === "zh") return zh_search_page_kelvinseek(inputs)
	if (locale === "ja") return ja_search_page_kelvinseek(inputs)
	return en_search_page_kelvinseek(inputs)
});
