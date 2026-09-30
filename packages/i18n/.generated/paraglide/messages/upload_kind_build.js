/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Kind_BuildInputs */

const en_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const es_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const de_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const fr_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const it_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const nl_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pl_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pt_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const ru_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройка`)
};

const sv_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygge`)
};

const tr_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı`)
};

const zh_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_upload_kind_build = /** @type {(inputs: Upload_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築`)
};

/**
* | output |
* | --- |
* | "Build" |
*
* @param {Upload_Kind_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_kind_build = /** @type {((inputs?: Upload_Kind_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Kind_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_kind_build(inputs)
	if (locale === "de") return de_upload_kind_build(inputs)
	if (locale === "fr") return fr_upload_kind_build(inputs)
	if (locale === "it") return it_upload_kind_build(inputs)
	if (locale === "nl") return nl_upload_kind_build(inputs)
	if (locale === "pl") return pl_upload_kind_build(inputs)
	if (locale === "pt") return pt_upload_kind_build(inputs)
	if (locale === "ru") return ru_upload_kind_build(inputs)
	if (locale === "sv") return sv_upload_kind_build(inputs)
	if (locale === "tr") return tr_upload_kind_build(inputs)
	if (locale === "zh") return zh_upload_kind_build(inputs)
	if (locale === "ja") return ja_upload_kind_build(inputs)
	return en_upload_kind_build(inputs)
});
