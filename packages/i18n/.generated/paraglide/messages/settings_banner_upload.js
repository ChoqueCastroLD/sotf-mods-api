/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Banner_UploadInputs */

const en_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload an image`)
};

const es_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subir una imagen`)
};

const de_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild hochladen`)
};

const fr_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer une image`)
};

const it_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica un’immagine`)
};

const nl_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding uploaden`)
};

const pl_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prześlij obraz`)
};

const pt_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar uma imagem`)
};

const ru_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить изображение`)
};

const sv_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp en bild`)
};

const tr_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel yükle`)
};

const zh_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传图片`)
};

const ja_settings_banner_upload = /** @type {(inputs: Settings_Banner_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像をアップロード`)
};

/**
* | output |
* | --- |
* | "Upload an image" |
*
* @param {Settings_Banner_UploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_banner_upload = /** @type {((inputs?: Settings_Banner_UploadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Banner_UploadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_banner_upload(inputs)
	if (locale === "de") return de_settings_banner_upload(inputs)
	if (locale === "fr") return fr_settings_banner_upload(inputs)
	if (locale === "it") return it_settings_banner_upload(inputs)
	if (locale === "nl") return nl_settings_banner_upload(inputs)
	if (locale === "pl") return pl_settings_banner_upload(inputs)
	if (locale === "pt") return pt_settings_banner_upload(inputs)
	if (locale === "ru") return ru_settings_banner_upload(inputs)
	if (locale === "sv") return sv_settings_banner_upload(inputs)
	if (locale === "tr") return tr_settings_banner_upload(inputs)
	if (locale === "zh") return zh_settings_banner_upload(inputs)
	if (locale === "ja") return ja_settings_banner_upload(inputs)
	return en_settings_banner_upload(inputs)
});
