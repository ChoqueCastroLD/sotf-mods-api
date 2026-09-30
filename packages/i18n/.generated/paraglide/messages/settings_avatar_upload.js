/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Avatar_UploadInputs */

const en_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload a photo`)
};

const es_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subir una foto`)
};

const de_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto hochladen`)
};

const fr_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer une photo`)
};

const it_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica una foto`)
};

const nl_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto uploaden`)
};

const pl_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prześlij zdjęcie`)
};

const pt_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar uma foto`)
};

const ru_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить фото`)
};

const sv_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp ett foto`)
};

const tr_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fotoğraf yükle`)
};

const zh_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传照片`)
};

const ja_settings_avatar_upload = /** @type {(inputs: Settings_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写真をアップロード`)
};

/**
* | output |
* | --- |
* | "Upload a photo" |
*
* @param {Settings_Avatar_UploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_avatar_upload = /** @type {((inputs?: Settings_Avatar_UploadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Avatar_UploadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_avatar_upload(inputs)
	if (locale === "de") return de_settings_avatar_upload(inputs)
	if (locale === "fr") return fr_settings_avatar_upload(inputs)
	if (locale === "it") return it_settings_avatar_upload(inputs)
	if (locale === "nl") return nl_settings_avatar_upload(inputs)
	if (locale === "pl") return pl_settings_avatar_upload(inputs)
	if (locale === "pt") return pt_settings_avatar_upload(inputs)
	if (locale === "ru") return ru_settings_avatar_upload(inputs)
	if (locale === "sv") return sv_settings_avatar_upload(inputs)
	if (locale === "tr") return tr_settings_avatar_upload(inputs)
	if (locale === "zh") return zh_settings_avatar_upload(inputs)
	if (locale === "ja") return ja_settings_avatar_upload(inputs)
	return en_settings_avatar_upload(inputs)
});
