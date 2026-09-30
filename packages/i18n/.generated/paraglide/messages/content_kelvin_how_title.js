/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_How_TitleInputs */

const en_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to use it`)
};

const es_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo se usa`)
};

const de_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So benutzt du es`)
};

const fr_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment l’utiliser`)
};

const it_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come si usa`)
};

const nl_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo gebruik je het`)
};

const pl_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak używać`)
};

const pt_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como usar`)
};

const ru_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как пользоваться`)
};

const sv_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så använder du den`)
};

const tr_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nasıl kullanılır`)
};

const zh_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用方法`)
};

const ja_content_kelvin_how_title = /** @type {(inputs: Content_Kelvin_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使い方`)
};

/**
* | output |
* | --- |
* | "How to use it" |
*
* @param {Content_Kelvin_How_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_how_title = /** @type {((inputs?: Content_Kelvin_How_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_How_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_how_title(inputs)
	if (locale === "de") return de_content_kelvin_how_title(inputs)
	if (locale === "fr") return fr_content_kelvin_how_title(inputs)
	if (locale === "it") return it_content_kelvin_how_title(inputs)
	if (locale === "nl") return nl_content_kelvin_how_title(inputs)
	if (locale === "pl") return pl_content_kelvin_how_title(inputs)
	if (locale === "pt") return pt_content_kelvin_how_title(inputs)
	if (locale === "ru") return ru_content_kelvin_how_title(inputs)
	if (locale === "sv") return sv_content_kelvin_how_title(inputs)
	if (locale === "tr") return tr_content_kelvin_how_title(inputs)
	if (locale === "zh") return zh_content_kelvin_how_title(inputs)
	if (locale === "ja") return ja_content_kelvin_how_title(inputs)
	return en_content_kelvin_how_title(inputs)
});
