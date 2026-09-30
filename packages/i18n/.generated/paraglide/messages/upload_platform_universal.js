/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Platform_UniversalInputs */

const en_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universal`)
};

const es_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universal`)
};

const de_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universell`)
};

const fr_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universel`)
};

const it_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universale`)
};

const nl_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universeel`)
};

const pl_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uniwersalny`)
};

const pt_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universal`)
};

const ru_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Универсальный`)
};

const sv_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universell`)
};

const tr_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Evrensel`)
};

const zh_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通用`)
};

const ja_upload_platform_universal = /** @type {(inputs: Upload_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`両対応`)
};

/**
* | output |
* | --- |
* | "Universal" |
*
* @param {Upload_Platform_UniversalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_platform_universal = /** @type {((inputs?: Upload_Platform_UniversalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Platform_UniversalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_platform_universal(inputs)
	if (locale === "de") return de_upload_platform_universal(inputs)
	if (locale === "fr") return fr_upload_platform_universal(inputs)
	if (locale === "it") return it_upload_platform_universal(inputs)
	if (locale === "nl") return nl_upload_platform_universal(inputs)
	if (locale === "pl") return pl_upload_platform_universal(inputs)
	if (locale === "pt") return pt_upload_platform_universal(inputs)
	if (locale === "ru") return ru_upload_platform_universal(inputs)
	if (locale === "sv") return sv_upload_platform_universal(inputs)
	if (locale === "tr") return tr_upload_platform_universal(inputs)
	if (locale === "zh") return zh_upload_platform_universal(inputs)
	if (locale === "ja") return ja_upload_platform_universal(inputs)
	return en_upload_platform_universal(inputs)
});
