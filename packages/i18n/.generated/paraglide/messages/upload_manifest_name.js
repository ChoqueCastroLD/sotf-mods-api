/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_NameInputs */

const en_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const es_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre`)
};

const de_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const fr_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom`)
};

const it_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const nl_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam`)
};

const pl_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa`)
};

const pt_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const ru_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название`)
};

const sv_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn`)
};

const tr_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad`)
};

const zh_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称`)
};

const ja_upload_manifest_name = /** @type {(inputs: Upload_Manifest_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前`)
};

/**
* | output |
* | --- |
* | "Name" |
*
* @param {Upload_Manifest_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_name = /** @type {((inputs?: Upload_Manifest_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_name(inputs)
	if (locale === "de") return de_upload_manifest_name(inputs)
	if (locale === "fr") return fr_upload_manifest_name(inputs)
	if (locale === "it") return it_upload_manifest_name(inputs)
	if (locale === "nl") return nl_upload_manifest_name(inputs)
	if (locale === "pl") return pl_upload_manifest_name(inputs)
	if (locale === "pt") return pt_upload_manifest_name(inputs)
	if (locale === "ru") return ru_upload_manifest_name(inputs)
	if (locale === "sv") return sv_upload_manifest_name(inputs)
	if (locale === "tr") return tr_upload_manifest_name(inputs)
	if (locale === "zh") return zh_upload_manifest_name(inputs)
	if (locale === "ja") return ja_upload_manifest_name(inputs)
	return en_upload_manifest_name(inputs)
});
