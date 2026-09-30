/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Content_Kelvin_Status_CompatInputs */

const en_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`On build ${i?.build}`)
};

const es_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En la build ${i?.build}`)
};

const de_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Auf Build ${i?.build}`)
};

const fr_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sur le build ${i?.build}`)
};

const it_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sulla build ${i?.build}`)
};

const nl_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Op build ${i?.build}`)
};

const pl_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Na buildzie ${i?.build}`)
};

const pt_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Na build ${i?.build}`)
};

const ru_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`На сборке ${i?.build}`)
};

const sv_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`På build ${i?.build}`)
};

const tr_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} sürümünde`)
};

const zh_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`在 ${i?.build} 上`)
};

const ja_content_kelvin_status_compat = /** @type {(inputs: Content_Kelvin_Status_CompatInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ビルド ${i?.build}`)
};

/**
* | output |
* | --- |
* | "On build {build}" |
*
* @param {Content_Kelvin_Status_CompatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_status_compat = /** @type {((inputs: Content_Kelvin_Status_CompatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Status_CompatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_status_compat(inputs)
	if (locale === "de") return de_content_kelvin_status_compat(inputs)
	if (locale === "fr") return fr_content_kelvin_status_compat(inputs)
	if (locale === "it") return it_content_kelvin_status_compat(inputs)
	if (locale === "nl") return nl_content_kelvin_status_compat(inputs)
	if (locale === "pl") return pl_content_kelvin_status_compat(inputs)
	if (locale === "pt") return pt_content_kelvin_status_compat(inputs)
	if (locale === "ru") return ru_content_kelvin_status_compat(inputs)
	if (locale === "sv") return sv_content_kelvin_status_compat(inputs)
	if (locale === "tr") return tr_content_kelvin_status_compat(inputs)
	if (locale === "zh") return zh_content_kelvin_status_compat(inputs)
	if (locale === "ja") return ja_content_kelvin_status_compat(inputs)
	return en_content_kelvin_status_compat(inputs)
});
