/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_News_ReadInputs */

const en_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read`)
};

const es_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer`)
};

const de_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lesen`)
};

const fr_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lire`)
};

const it_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggi`)
};

const nl_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lezen`)
};

const pl_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czytaj`)
};

const pt_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ler`)
};

const ru_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Читать`)
};

const sv_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läs`)
};

const tr_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oku`)
};

const zh_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`阅读`)
};

const ja_content_news_read = /** @type {(inputs: Content_News_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読む`)
};

/**
* | output |
* | --- |
* | "Read" |
*
* @param {Content_News_ReadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_news_read = /** @type {((inputs?: Content_News_ReadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_News_ReadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_news_read(inputs)
	if (locale === "de") return de_content_news_read(inputs)
	if (locale === "fr") return fr_content_news_read(inputs)
	if (locale === "it") return it_content_news_read(inputs)
	if (locale === "nl") return nl_content_news_read(inputs)
	if (locale === "pl") return pl_content_news_read(inputs)
	if (locale === "pt") return pt_content_news_read(inputs)
	if (locale === "ru") return ru_content_news_read(inputs)
	if (locale === "sv") return sv_content_news_read(inputs)
	if (locale === "tr") return tr_content_news_read(inputs)
	if (locale === "zh") return zh_content_news_read(inputs)
	if (locale === "ja") return ja_content_news_read(inputs)
	return en_content_news_read(inputs)
});
