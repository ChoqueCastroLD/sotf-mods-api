/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_What_TitleInputs */

const en_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What it is`)
};

const es_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué es`)
};

const de_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was es ist`)
};

const fr_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De quoi s’agit-il`)
};

const it_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Che cos’è`)
};

const nl_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat het is`)
};

const pl_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co to jest`)
};

const pt_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que é`)
};

const ru_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что это`)
};

const sv_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad det är`)
};

const tr_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedir`)
};

const zh_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这是什么`)
};

const ja_content_kelvin_what_title = /** @type {(inputs: Content_Kelvin_What_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek とは`)
};

/**
* | output |
* | --- |
* | "What it is" |
*
* @param {Content_Kelvin_What_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_what_title = /** @type {((inputs?: Content_Kelvin_What_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_What_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_what_title(inputs)
	if (locale === "de") return de_content_kelvin_what_title(inputs)
	if (locale === "fr") return fr_content_kelvin_what_title(inputs)
	if (locale === "it") return it_content_kelvin_what_title(inputs)
	if (locale === "nl") return nl_content_kelvin_what_title(inputs)
	if (locale === "pl") return pl_content_kelvin_what_title(inputs)
	if (locale === "pt") return pt_content_kelvin_what_title(inputs)
	if (locale === "ru") return ru_content_kelvin_what_title(inputs)
	if (locale === "sv") return sv_content_kelvin_what_title(inputs)
	if (locale === "tr") return tr_content_kelvin_what_title(inputs)
	if (locale === "zh") return zh_content_kelvin_what_title(inputs)
	if (locale === "ja") return ja_content_kelvin_what_title(inputs)
	return en_content_kelvin_what_title(inputs)
});
