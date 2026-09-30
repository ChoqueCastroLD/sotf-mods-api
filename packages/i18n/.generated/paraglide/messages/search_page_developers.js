/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_DevelopersInputs */

const en_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Developers & API`)
};

const es_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desarrolladores y API`)
};

const de_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwickler & API`)
};

const fr_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Développeurs et API`)
};

const it_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sviluppatori e API`)
};

const nl_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontwikkelaars & API`)
};

const pl_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deweloperzy i API`)
};

const pt_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desenvolvedores e API`)
};

const ru_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разработчикам и API`)
};

const sv_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvecklare & API`)
};

const tr_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geliştiriciler ve API`)
};

const zh_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开发者与 API`)
};

const ja_search_page_developers = /** @type {(inputs: Search_Page_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開発者とAPI`)
};

/**
* | output |
* | --- |
* | "Developers & API" |
*
* @param {Search_Page_DevelopersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_developers = /** @type {((inputs?: Search_Page_DevelopersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_DevelopersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_developers(inputs)
	if (locale === "de") return de_search_page_developers(inputs)
	if (locale === "fr") return fr_search_page_developers(inputs)
	if (locale === "it") return it_search_page_developers(inputs)
	if (locale === "nl") return nl_search_page_developers(inputs)
	if (locale === "pl") return pl_search_page_developers(inputs)
	if (locale === "pt") return pt_search_page_developers(inputs)
	if (locale === "ru") return ru_search_page_developers(inputs)
	if (locale === "sv") return sv_search_page_developers(inputs)
	if (locale === "tr") return tr_search_page_developers(inputs)
	if (locale === "zh") return zh_search_page_developers(inputs)
	if (locale === "ja") return ja_search_page_developers(inputs)
	return en_search_page_developers(inputs)
});
