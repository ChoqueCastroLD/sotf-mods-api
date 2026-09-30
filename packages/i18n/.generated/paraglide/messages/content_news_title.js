/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_News_TitleInputs */

const en_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`News`)
};

const es_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novedades`)
};

const de_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuigkeiten`)
};

const fr_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualités`)
};

const it_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novità`)
};

const nl_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuws`)
};

const pl_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualności`)
};

const pt_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novidades`)
};

const ru_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новости`)
};

const sv_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyheter`)
};

const tr_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haberler`)
};

const zh_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新闻`)
};

const ja_content_news_title = /** @type {(inputs: Content_News_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ニュース`)
};

/**
* | output |
* | --- |
* | "News" |
*
* @param {Content_News_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_news_title = /** @type {((inputs?: Content_News_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_News_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_news_title(inputs)
	if (locale === "de") return de_content_news_title(inputs)
	if (locale === "fr") return fr_content_news_title(inputs)
	if (locale === "it") return it_content_news_title(inputs)
	if (locale === "nl") return nl_content_news_title(inputs)
	if (locale === "pl") return pl_content_news_title(inputs)
	if (locale === "pt") return pt_content_news_title(inputs)
	if (locale === "ru") return ru_content_news_title(inputs)
	if (locale === "sv") return sv_content_news_title(inputs)
	if (locale === "tr") return tr_content_news_title(inputs)
	if (locale === "zh") return zh_content_news_title(inputs)
	if (locale === "ja") return ja_content_news_title(inputs)
	return en_content_news_title(inputs)
});
