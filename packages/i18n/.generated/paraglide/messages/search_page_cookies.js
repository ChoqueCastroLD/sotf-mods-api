/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_CookiesInputs */

const en_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie policy`)
};

const es_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de cookies`)
};

const de_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie-Richtlinie`)
};

const fr_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Politique relative aux cookies`)
};

const it_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informativa sui cookie`)
};

const nl_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookiebeleid`)
};

const pl_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polityka plików cookie`)
};

const pt_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de cookies`)
};

const ru_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Политика cookie`)
};

const sv_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookiepolicy`)
};

const tr_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çerez politikası`)
};

const zh_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie 政策`)
};

const ja_search_page_cookies = /** @type {(inputs: Search_Page_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookieポリシー`)
};

/**
* | output |
* | --- |
* | "Cookie policy" |
*
* @param {Search_Page_CookiesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_cookies = /** @type {((inputs?: Search_Page_CookiesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_CookiesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_cookies(inputs)
	if (locale === "de") return de_search_page_cookies(inputs)
	if (locale === "fr") return fr_search_page_cookies(inputs)
	if (locale === "it") return it_search_page_cookies(inputs)
	if (locale === "nl") return nl_search_page_cookies(inputs)
	if (locale === "pl") return pl_search_page_cookies(inputs)
	if (locale === "pt") return pt_search_page_cookies(inputs)
	if (locale === "ru") return ru_search_page_cookies(inputs)
	if (locale === "sv") return sv_search_page_cookies(inputs)
	if (locale === "tr") return tr_search_page_cookies(inputs)
	if (locale === "zh") return zh_search_page_cookies(inputs)
	if (locale === "ja") return ja_search_page_cookies(inputs)
	return en_search_page_cookies(inputs)
});
