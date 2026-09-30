/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ author: NonNullable<unknown> }} Content_News_BylineInputs */

const en_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`by ${i?.author}`)
};

const es_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`por ${i?.author}`)
};

const de_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`von ${i?.author}`)
};

const fr_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`par ${i?.author}`)
};

const it_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`di ${i?.author}`)
};

const nl_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`door ${i?.author}`)
};

const pl_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`autor: ${i?.author}`)
};

const pt_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`por ${i?.author}`)
};

const ru_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`автор: ${i?.author}`)
};

const sv_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`av ${i?.author}`)
};

const tr_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`yazan: ${i?.author}`)
};

const zh_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者：${i?.author}`)
};

const ja_content_news_byline = /** @type {(inputs: Content_News_BylineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.author}`)
};

/**
* | output |
* | --- |
* | "by {author}" |
*
* @param {Content_News_BylineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_news_byline = /** @type {((inputs: Content_News_BylineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_News_BylineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_news_byline(inputs)
	if (locale === "de") return de_content_news_byline(inputs)
	if (locale === "fr") return fr_content_news_byline(inputs)
	if (locale === "it") return it_content_news_byline(inputs)
	if (locale === "nl") return nl_content_news_byline(inputs)
	if (locale === "pl") return pl_content_news_byline(inputs)
	if (locale === "pt") return pt_content_news_byline(inputs)
	if (locale === "ru") return ru_content_news_byline(inputs)
	if (locale === "sv") return sv_content_news_byline(inputs)
	if (locale === "tr") return tr_content_news_byline(inputs)
	if (locale === "zh") return zh_content_news_byline(inputs)
	if (locale === "ja") return ja_content_news_byline(inputs)
	return en_content_news_byline(inputs)
});
