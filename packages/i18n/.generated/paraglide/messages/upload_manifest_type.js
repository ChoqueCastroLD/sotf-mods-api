/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_TypeInputs */

const en_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const es_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const de_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ`)
};

const fr_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const it_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const nl_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const pl_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ`)
};

const pt_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const ru_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тип`)
};

const sv_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ`)
};

const tr_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tür`)
};

const zh_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`类型`)
};

const ja_upload_manifest_type = /** @type {(inputs: Upload_Manifest_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`種類`)
};

/**
* | output |
* | --- |
* | "Type" |
*
* @param {Upload_Manifest_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_type = /** @type {((inputs?: Upload_Manifest_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_type(inputs)
	if (locale === "de") return de_upload_manifest_type(inputs)
	if (locale === "fr") return fr_upload_manifest_type(inputs)
	if (locale === "it") return it_upload_manifest_type(inputs)
	if (locale === "nl") return nl_upload_manifest_type(inputs)
	if (locale === "pl") return pl_upload_manifest_type(inputs)
	if (locale === "pt") return pt_upload_manifest_type(inputs)
	if (locale === "ru") return ru_upload_manifest_type(inputs)
	if (locale === "sv") return sv_upload_manifest_type(inputs)
	if (locale === "tr") return tr_upload_manifest_type(inputs)
	if (locale === "zh") return zh_upload_manifest_type(inputs)
	if (locale === "ja") return ja_upload_manifest_type(inputs)
	return en_upload_manifest_type(inputs)
});
