/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Avatar_UploadingInputs */

const en_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploading your photo…`)
};

const es_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subiendo tu foto…`)
};

const de_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Foto wird hochgeladen…`)
};

const fr_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoi de votre photo…`)
};

const it_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento della foto…`)
};

const nl_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je foto wordt geüpload…`)
};

const pl_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przesyłanie zdjęcia…`)
};

const pt_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviando sua foto…`)
};

const ru_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка фото…`)
};

const sv_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar upp ditt foto…`)
};

const tr_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fotoğrafın yükleniyor…`)
};

const zh_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在上传你的照片…`)
};

const ja_settings_avatar_uploading = /** @type {(inputs: Settings_Avatar_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写真をアップロード中…`)
};

/**
* | output |
* | --- |
* | "Uploading your photo…" |
*
* @param {Settings_Avatar_UploadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_avatar_uploading = /** @type {((inputs?: Settings_Avatar_UploadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Avatar_UploadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_avatar_uploading(inputs)
	if (locale === "de") return de_settings_avatar_uploading(inputs)
	if (locale === "fr") return fr_settings_avatar_uploading(inputs)
	if (locale === "it") return it_settings_avatar_uploading(inputs)
	if (locale === "nl") return nl_settings_avatar_uploading(inputs)
	if (locale === "pl") return pl_settings_avatar_uploading(inputs)
	if (locale === "pt") return pt_settings_avatar_uploading(inputs)
	if (locale === "ru") return ru_settings_avatar_uploading(inputs)
	if (locale === "sv") return sv_settings_avatar_uploading(inputs)
	if (locale === "tr") return tr_settings_avatar_uploading(inputs)
	if (locale === "zh") return zh_settings_avatar_uploading(inputs)
	if (locale === "ja") return ja_settings_avatar_uploading(inputs)
	return en_settings_avatar_uploading(inputs)
});
