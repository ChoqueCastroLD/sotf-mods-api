/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_IdInputs */

const en_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest id`)
};

const es_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id de manifest`)
};

const de_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest-ID`)
};

const fr_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id de manifest`)
};

const it_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id del manifest`)
};

const nl_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest-id`)
};

const pl_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identyfikator manifestu`)
};

const pt_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id do manifest`)
};

const ru_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id в манифесте`)
};

const sv_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest-id`)
};

const tr_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest kimliği`)
};

const zh_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清单 ID`)
};

const ja_upload_manifest_id = /** @type {(inputs: Upload_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マニフェストID`)
};

/**
* | output |
* | --- |
* | "Manifest id" |
*
* @param {Upload_Manifest_IdInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_id = /** @type {((inputs?: Upload_Manifest_IdInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_IdInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_id(inputs)
	if (locale === "de") return de_upload_manifest_id(inputs)
	if (locale === "fr") return fr_upload_manifest_id(inputs)
	if (locale === "it") return it_upload_manifest_id(inputs)
	if (locale === "nl") return nl_upload_manifest_id(inputs)
	if (locale === "pl") return pl_upload_manifest_id(inputs)
	if (locale === "pt") return pt_upload_manifest_id(inputs)
	if (locale === "ru") return ru_upload_manifest_id(inputs)
	if (locale === "sv") return sv_upload_manifest_id(inputs)
	if (locale === "tr") return tr_upload_manifest_id(inputs)
	if (locale === "zh") return zh_upload_manifest_id(inputs)
	if (locale === "ja") return ja_upload_manifest_id(inputs)
	return en_upload_manifest_id(inputs)
});
