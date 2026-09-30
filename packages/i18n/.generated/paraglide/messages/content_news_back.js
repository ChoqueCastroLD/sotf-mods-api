/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_News_BackInputs */

const en_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All news`)
};

const es_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las novedades`)
};

const de_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Neuigkeiten`)
};

const fr_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les actualités`)
};

const it_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le novità`)
};

const nl_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al het nieuws`)
};

const pl_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie aktualności`)
};

const pt_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as novidades`)
};

const ru_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все новости`)
};

const sv_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla nyheter`)
};

const tr_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm haberler`)
};

const zh_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部新闻`)
};

const ja_content_news_back = /** @type {(inputs: Content_News_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ニュース一覧`)
};

/**
* | output |
* | --- |
* | "All news" |
*
* @param {Content_News_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_news_back = /** @type {((inputs?: Content_News_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_News_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_news_back(inputs)
	if (locale === "de") return de_content_news_back(inputs)
	if (locale === "fr") return fr_content_news_back(inputs)
	if (locale === "it") return it_content_news_back(inputs)
	if (locale === "nl") return nl_content_news_back(inputs)
	if (locale === "pl") return pl_content_news_back(inputs)
	if (locale === "pt") return pt_content_news_back(inputs)
	if (locale === "ru") return ru_content_news_back(inputs)
	if (locale === "sv") return sv_content_news_back(inputs)
	if (locale === "tr") return tr_content_news_back(inputs)
	if (locale === "zh") return zh_content_news_back(inputs)
	if (locale === "ja") return ja_content_news_back(inputs)
	return en_content_news_back(inputs)
});
