/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_Type_ModInputs */

const en_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const es_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const de_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const fr_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const it_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const pl_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const pt_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const ru_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод`)
};

const sv_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const tr_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const zh_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_upload_manifest_type_mod = /** @type {(inputs: Upload_Manifest_Type_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mod" |
*
* @param {Upload_Manifest_Type_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_type_mod = /** @type {((inputs?: Upload_Manifest_Type_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_Type_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_type_mod(inputs)
	if (locale === "de") return de_upload_manifest_type_mod(inputs)
	if (locale === "fr") return fr_upload_manifest_type_mod(inputs)
	if (locale === "it") return it_upload_manifest_type_mod(inputs)
	if (locale === "nl") return nl_upload_manifest_type_mod(inputs)
	if (locale === "pl") return pl_upload_manifest_type_mod(inputs)
	if (locale === "pt") return pt_upload_manifest_type_mod(inputs)
	if (locale === "ru") return ru_upload_manifest_type_mod(inputs)
	if (locale === "sv") return sv_upload_manifest_type_mod(inputs)
	if (locale === "tr") return tr_upload_manifest_type_mod(inputs)
	if (locale === "zh") return zh_upload_manifest_type_mod(inputs)
	if (locale === "ja") return ja_upload_manifest_type_mod(inputs)
	return en_upload_manifest_type_mod(inputs)
});
