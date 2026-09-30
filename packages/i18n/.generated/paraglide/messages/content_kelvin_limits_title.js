/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Limits_TitleInputs */

const en_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limits`)
};

const es_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Límites`)
};

const de_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grenzen`)
};

const fr_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limites`)
};

const it_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limiti`)
};

const nl_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limieten`)
};

const pl_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limity`)
};

const pt_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limites`)
};

const ru_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ограничения`)
};

const sv_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gränser`)
};

const tr_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sınırlar`)
};

const zh_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`限制`)
};

const ja_content_kelvin_limits_title = /** @type {(inputs: Content_Kelvin_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制限`)
};

/**
* | output |
* | --- |
* | "Limits" |
*
* @param {Content_Kelvin_Limits_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_limits_title = /** @type {((inputs?: Content_Kelvin_Limits_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Limits_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_limits_title(inputs)
	if (locale === "de") return de_content_kelvin_limits_title(inputs)
	if (locale === "fr") return fr_content_kelvin_limits_title(inputs)
	if (locale === "it") return it_content_kelvin_limits_title(inputs)
	if (locale === "nl") return nl_content_kelvin_limits_title(inputs)
	if (locale === "pl") return pl_content_kelvin_limits_title(inputs)
	if (locale === "pt") return pt_content_kelvin_limits_title(inputs)
	if (locale === "ru") return ru_content_kelvin_limits_title(inputs)
	if (locale === "sv") return sv_content_kelvin_limits_title(inputs)
	if (locale === "tr") return tr_content_kelvin_limits_title(inputs)
	if (locale === "zh") return zh_content_kelvin_limits_title(inputs)
	if (locale === "ja") return ja_content_kelvin_limits_title(inputs)
	return en_content_kelvin_limits_title(inputs)
});
