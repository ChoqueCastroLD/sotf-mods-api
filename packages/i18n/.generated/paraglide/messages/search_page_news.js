/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_NewsInputs */

const en_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`News`)
};

const es_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noticias`)
};

const de_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuigkeiten`)
};

const fr_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualités`)
};

const it_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novità`)
};

const nl_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuws`)
};

const pl_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualności`)
};

const pt_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notícias`)
};

const ru_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новости`)
};

const sv_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyheter`)
};

const tr_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haberler`)
};

const zh_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新闻`)
};

const ja_search_page_news = /** @type {(inputs: Search_Page_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ニュース`)
};

/**
* | output |
* | --- |
* | "News" |
*
* @param {Search_Page_NewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_news = /** @type {((inputs?: Search_Page_NewsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_NewsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_news(inputs)
	if (locale === "de") return de_search_page_news(inputs)
	if (locale === "fr") return fr_search_page_news(inputs)
	if (locale === "it") return it_search_page_news(inputs)
	if (locale === "nl") return nl_search_page_news(inputs)
	if (locale === "pl") return pl_search_page_news(inputs)
	if (locale === "pt") return pt_search_page_news(inputs)
	if (locale === "ru") return ru_search_page_news(inputs)
	if (locale === "sv") return sv_search_page_news(inputs)
	if (locale === "tr") return tr_search_page_news(inputs)
	if (locale === "zh") return zh_search_page_news(inputs)
	if (locale === "ja") return ja_search_page_news(inputs)
	return en_search_page_news(inputs)
});
