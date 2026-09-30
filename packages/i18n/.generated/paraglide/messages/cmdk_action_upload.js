/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Action_UploadInputs */

const en_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload a mod`)
};

const es_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subir un mod`)
};

const de_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod hochladen`)
};

const fr_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier un mod`)
};

const it_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica una mod`)
};

const nl_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod uploaden`)
};

const pl_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prześlij moda`)
};

const pt_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar um mod`)
};

const ru_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить мод`)
};

const sv_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp en modd`)
};

const tr_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod yükle`)
};

const zh_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传模组`)
};

const ja_cmdk_action_upload = /** @type {(inputs: Cmdk_Action_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODをアップロード`)
};

/**
* | output |
* | --- |
* | "Upload a mod" |
*
* @param {Cmdk_Action_UploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_action_upload = /** @type {((inputs?: Cmdk_Action_UploadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Action_UploadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_action_upload(inputs)
	if (locale === "de") return de_cmdk_action_upload(inputs)
	if (locale === "fr") return fr_cmdk_action_upload(inputs)
	if (locale === "it") return it_cmdk_action_upload(inputs)
	if (locale === "nl") return nl_cmdk_action_upload(inputs)
	if (locale === "pl") return pl_cmdk_action_upload(inputs)
	if (locale === "pt") return pt_cmdk_action_upload(inputs)
	if (locale === "ru") return ru_cmdk_action_upload(inputs)
	if (locale === "sv") return sv_cmdk_action_upload(inputs)
	if (locale === "tr") return tr_cmdk_action_upload(inputs)
	if (locale === "zh") return zh_cmdk_action_upload(inputs)
	if (locale === "ja") return ja_cmdk_action_upload(inputs)
	return en_cmdk_action_upload(inputs)
});
