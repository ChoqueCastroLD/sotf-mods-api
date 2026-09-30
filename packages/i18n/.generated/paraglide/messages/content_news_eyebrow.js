/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_News_EyebrowInputs */

const en_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field notes`)
};

const es_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas de campo`)
};

const de_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldnotizen`)
};

const fr_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes de terrain`)
};

const it_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note sul campo`)
};

const nl_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldnotities`)
};

const pl_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notatki terenowe`)
};

const pt_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas de campo`)
};

const ru_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевые заметки`)
};

const sv_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältanteckningar`)
};

const tr_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha notları`)
};

const zh_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`野外笔记`)
};

const ja_content_news_eyebrow = /** @type {(inputs: Content_News_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドノート`)
};

/**
* | output |
* | --- |
* | "Field notes" |
*
* @param {Content_News_EyebrowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_news_eyebrow = /** @type {((inputs?: Content_News_EyebrowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_News_EyebrowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_news_eyebrow(inputs)
	if (locale === "de") return de_content_news_eyebrow(inputs)
	if (locale === "fr") return fr_content_news_eyebrow(inputs)
	if (locale === "it") return it_content_news_eyebrow(inputs)
	if (locale === "nl") return nl_content_news_eyebrow(inputs)
	if (locale === "pl") return pl_content_news_eyebrow(inputs)
	if (locale === "pt") return pt_content_news_eyebrow(inputs)
	if (locale === "ru") return ru_content_news_eyebrow(inputs)
	if (locale === "sv") return sv_content_news_eyebrow(inputs)
	if (locale === "tr") return tr_content_news_eyebrow(inputs)
	if (locale === "zh") return zh_content_news_eyebrow(inputs)
	if (locale === "ja") return ja_content_news_eyebrow(inputs)
	return en_content_news_eyebrow(inputs)
});
