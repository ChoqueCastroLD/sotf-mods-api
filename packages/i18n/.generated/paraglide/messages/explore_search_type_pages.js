/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_Type_PagesInputs */

const en_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pages`)
};

const es_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas`)
};

const de_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seiten`)
};

const fr_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pages`)
};

const it_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagine`)
};

const nl_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina’s`)
};

const pl_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strony`)
};

const pt_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas`)
};

const ru_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страницы`)
};

const sv_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidor`)
};

const tr_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfalar`)
};

const zh_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面`)
};

const ja_explore_search_type_pages = /** @type {(inputs: Explore_Search_Type_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページ`)
};

/**
* | output |
* | --- |
* | "Pages" |
*
* @param {Explore_Search_Type_PagesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_type_pages = /** @type {((inputs?: Explore_Search_Type_PagesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Type_PagesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_type_pages(inputs)
	if (locale === "de") return de_explore_search_type_pages(inputs)
	if (locale === "fr") return fr_explore_search_type_pages(inputs)
	if (locale === "it") return it_explore_search_type_pages(inputs)
	if (locale === "nl") return nl_explore_search_type_pages(inputs)
	if (locale === "pl") return pl_explore_search_type_pages(inputs)
	if (locale === "pt") return pt_explore_search_type_pages(inputs)
	if (locale === "ru") return ru_explore_search_type_pages(inputs)
	if (locale === "sv") return sv_explore_search_type_pages(inputs)
	if (locale === "tr") return tr_explore_search_type_pages(inputs)
	if (locale === "zh") return zh_explore_search_type_pages(inputs)
	if (locale === "ja") return ja_explore_search_type_pages(inputs)
	return en_explore_search_type_pages(inputs)
});
