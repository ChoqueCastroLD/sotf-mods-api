/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_ByInputs */

const en_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mod by`)
};

const es_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod de`)
};

const de_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Mod von`)
};

const fr_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod de`)
};

const it_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una mod di`)
};

const nl_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod van`)
};

const pl_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod autorstwa`)
};

const pt_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um mod de`)
};

const ru_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод от`)
};

const sv_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En modd av`)
};

const tr_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı:`)
};

const zh_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组作者：`)
};

const ja_content_kelvin_by = /** @type {(inputs: Content_Kelvin_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者：`)
};

/**
* | output |
* | --- |
* | "A mod by" |
*
* @param {Content_Kelvin_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_by = /** @type {((inputs?: Content_Kelvin_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_by(inputs)
	if (locale === "de") return de_content_kelvin_by(inputs)
	if (locale === "fr") return fr_content_kelvin_by(inputs)
	if (locale === "it") return it_content_kelvin_by(inputs)
	if (locale === "nl") return nl_content_kelvin_by(inputs)
	if (locale === "pl") return pl_content_kelvin_by(inputs)
	if (locale === "pt") return pt_content_kelvin_by(inputs)
	if (locale === "ru") return ru_content_kelvin_by(inputs)
	if (locale === "sv") return sv_content_kelvin_by(inputs)
	if (locale === "tr") return tr_content_kelvin_by(inputs)
	if (locale === "zh") return zh_content_kelvin_by(inputs)
	if (locale === "ja") return ja_content_kelvin_by(inputs)
	return en_content_kelvin_by(inputs)
});
