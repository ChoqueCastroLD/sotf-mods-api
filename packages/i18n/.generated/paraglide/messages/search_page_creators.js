/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_CreatorsInputs */

const en_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creators`)
};

const es_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creadores`)
};

const de_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller`)
};

const fr_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateurs`)
};

const it_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatori`)
};

const nl_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makers`)
};

const pl_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórcy`)
};

const pt_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores`)
};

const ru_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы`)
};

const sv_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcılar`)
};

const zh_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const ja_search_page_creators = /** @type {(inputs: Search_Page_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター`)
};

/**
* | output |
* | --- |
* | "Creators" |
*
* @param {Search_Page_CreatorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_creators = /** @type {((inputs?: Search_Page_CreatorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_CreatorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_creators(inputs)
	if (locale === "de") return de_search_page_creators(inputs)
	if (locale === "fr") return fr_search_page_creators(inputs)
	if (locale === "it") return it_search_page_creators(inputs)
	if (locale === "nl") return nl_search_page_creators(inputs)
	if (locale === "pl") return pl_search_page_creators(inputs)
	if (locale === "pt") return pt_search_page_creators(inputs)
	if (locale === "ru") return ru_search_page_creators(inputs)
	if (locale === "sv") return sv_search_page_creators(inputs)
	if (locale === "tr") return tr_search_page_creators(inputs)
	if (locale === "zh") return zh_search_page_creators(inputs)
	if (locale === "ja") return ja_search_page_creators(inputs)
	return en_search_page_creators(inputs)
});
