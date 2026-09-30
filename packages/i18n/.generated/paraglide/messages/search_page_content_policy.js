/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_Content_PolicyInputs */

const en_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Content policy`)
};

const es_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de contenido`)
};

const de_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhaltsrichtlinie`)
};

const fr_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Politique de contenu`)
};

const it_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Norme sui contenuti`)
};

const nl_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contentbeleid`)
};

const pl_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zasady treści`)
};

const pt_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de conteúdo`)
};

const ru_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Правила публикации`)
};

const sv_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innehållspolicy`)
};

const tr_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçerik politikası`)
};

const zh_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容政策`)
};

const ja_search_page_content_policy = /** @type {(inputs: Search_Page_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンテンツポリシー`)
};

/**
* | output |
* | --- |
* | "Content policy" |
*
* @param {Search_Page_Content_PolicyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_content_policy = /** @type {((inputs?: Search_Page_Content_PolicyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_Content_PolicyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_content_policy(inputs)
	if (locale === "de") return de_search_page_content_policy(inputs)
	if (locale === "fr") return fr_search_page_content_policy(inputs)
	if (locale === "it") return it_search_page_content_policy(inputs)
	if (locale === "nl") return nl_search_page_content_policy(inputs)
	if (locale === "pl") return pl_search_page_content_policy(inputs)
	if (locale === "pt") return pt_search_page_content_policy(inputs)
	if (locale === "ru") return ru_search_page_content_policy(inputs)
	if (locale === "sv") return sv_search_page_content_policy(inputs)
	if (locale === "tr") return tr_search_page_content_policy(inputs)
	if (locale === "zh") return zh_search_page_content_policy(inputs)
	if (locale === "ja") return ja_search_page_content_policy(inputs)
	return en_search_page_content_policy(inputs)
});
