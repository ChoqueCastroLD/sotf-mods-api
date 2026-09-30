/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_KitsInputs */

const en_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod kits`)
};

const es_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits de mods`)
};

const de_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Kits`)
};

const fr_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits de mods`)
};

const it_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit di mod`)
};

const nl_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modkits`)
};

const pl_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestawy modów`)
};

const pt_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits de mods`)
};

const ru_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы модов`)
};

const sv_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddpaket`)
};

const tr_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod setleri`)
};

const zh_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组合集`)
};

const ja_search_page_kits = /** @type {(inputs: Search_Page_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODキット`)
};

/**
* | output |
* | --- |
* | "Mod kits" |
*
* @param {Search_Page_KitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_kits = /** @type {((inputs?: Search_Page_KitsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_KitsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_kits(inputs)
	if (locale === "de") return de_search_page_kits(inputs)
	if (locale === "fr") return fr_search_page_kits(inputs)
	if (locale === "it") return it_search_page_kits(inputs)
	if (locale === "nl") return nl_search_page_kits(inputs)
	if (locale === "pl") return pl_search_page_kits(inputs)
	if (locale === "pt") return pt_search_page_kits(inputs)
	if (locale === "ru") return ru_search_page_kits(inputs)
	if (locale === "sv") return sv_search_page_kits(inputs)
	if (locale === "tr") return tr_search_page_kits(inputs)
	if (locale === "zh") return zh_search_page_kits(inputs)
	if (locale === "ja") return ja_search_page_kits(inputs)
	return en_search_page_kits(inputs)
});
