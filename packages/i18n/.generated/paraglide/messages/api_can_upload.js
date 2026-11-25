/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Can_UploadInputs */

const en_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload new mods and builds`)
};

const es_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subir mods y builds nuevos`)
};

const de_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Mods und Builds hochladen`)
};

const fr_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer de nouveaux mods et builds`)
};

const it_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricare nuove mod e build`)
};

const nl_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe mods en builds uploaden`)
};

const pl_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysyłać nowe mody i buildy`)
};

const pt_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar novos mods e builds`)
};

const ru_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загружать новые моды и постройки`)
};

const sv_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp nya moddar och byggen`)
};

const tr_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni modlar ve yapılar yükle`)
};

const zh_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传新模组和建筑`)
};

const ja_api_can_upload = /** @type {(inputs: Api_Can_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい Mod や建築をアップロード`)
};

/**
* | output |
* | --- |
* | "Upload new mods and builds" |
*
* @param {Api_Can_UploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_can_upload = /** @type {((inputs?: Api_Can_UploadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Can_UploadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_can_upload(inputs)
	if (locale === "de") return de_api_can_upload(inputs)
	if (locale === "fr") return fr_api_can_upload(inputs)
	if (locale === "it") return it_api_can_upload(inputs)
	if (locale === "nl") return nl_api_can_upload(inputs)
	if (locale === "pl") return pl_api_can_upload(inputs)
	if (locale === "pt") return pt_api_can_upload(inputs)
	if (locale === "ru") return ru_api_can_upload(inputs)
	if (locale === "sv") return sv_api_can_upload(inputs)
	if (locale === "tr") return tr_api_can_upload(inputs)
	if (locale === "zh") return zh_api_can_upload(inputs)
	if (locale === "ja") return ja_api_can_upload(inputs)
	return en_api_can_upload(inputs)
});
