/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_New_BuildInputs */

const en_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A build`)
};

const es_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una build`)
};

const de_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einen Build`)
};

const fr_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un build`)
};

const it_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una build`)
};

const nl_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een build`)
};

const pl_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pt_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma build`)
};

const ru_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройку`)
};

const sv_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett bygge`)
};

const tr_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir yapı`)
};

const zh_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_upload_new_build = /** @type {(inputs: Upload_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築`)
};

/**
* | output |
* | --- |
* | "A build" |
*
* @param {Upload_New_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_new_build = /** @type {((inputs?: Upload_New_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_New_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_new_build(inputs)
	if (locale === "de") return de_upload_new_build(inputs)
	if (locale === "fr") return fr_upload_new_build(inputs)
	if (locale === "it") return it_upload_new_build(inputs)
	if (locale === "nl") return nl_upload_new_build(inputs)
	if (locale === "pl") return pl_upload_new_build(inputs)
	if (locale === "pt") return pt_upload_new_build(inputs)
	if (locale === "ru") return ru_upload_new_build(inputs)
	if (locale === "sv") return sv_upload_new_build(inputs)
	if (locale === "tr") return tr_upload_new_build(inputs)
	if (locale === "zh") return zh_upload_new_build(inputs)
	if (locale === "ja") return ja_upload_new_build(inputs)
	return en_upload_new_build(inputs)
});
