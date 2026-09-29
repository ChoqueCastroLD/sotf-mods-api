/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Nav_UploadInputs */

const en_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload`)
};

const es_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subir`)
};

const de_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hochladen`)
};

const fr_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier`)
};

const it_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica`)
};

const nl_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploaden`)
};

const pl_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prześlij`)
};

const pt_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar`)
};

const ru_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить`)
};

const sv_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp`)
};

const tr_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükle`)
};

const zh_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传`)
};

const ja_common_nav_upload = /** @type {(inputs: Common_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロード`)
};

/**
* | output |
* | --- |
* | "Upload" |
*
* @param {Common_Nav_UploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_nav_upload = /** @type {((inputs?: Common_Nav_UploadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Nav_UploadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_nav_upload(inputs)
	if (locale === "de") return de_common_nav_upload(inputs)
	if (locale === "fr") return fr_common_nav_upload(inputs)
	if (locale === "it") return it_common_nav_upload(inputs)
	if (locale === "nl") return nl_common_nav_upload(inputs)
	if (locale === "pl") return pl_common_nav_upload(inputs)
	if (locale === "pt") return pt_common_nav_upload(inputs)
	if (locale === "ru") return ru_common_nav_upload(inputs)
	if (locale === "sv") return sv_common_nav_upload(inputs)
	if (locale === "tr") return tr_common_nav_upload(inputs)
	if (locale === "zh") return zh_common_nav_upload(inputs)
	if (locale === "ja") return ja_common_nav_upload(inputs)
	return en_common_nav_upload(inputs)
});
