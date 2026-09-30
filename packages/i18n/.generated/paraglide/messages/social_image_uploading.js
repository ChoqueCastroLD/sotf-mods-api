/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Image_UploadingInputs */

const en_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploading…`)
};

const es_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subiendo…`)
};

const de_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird hochgeladen…`)
};

const fr_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoi…`)
};

const it_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento…`)
};

const nl_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploaden…`)
};

const pl_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przesyłanie…`)
};

const pt_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviando…`)
};

const ru_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка…`)
};

const sv_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar upp…`)
};

const tr_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleniyor…`)
};

const zh_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传中…`)
};

const ja_social_image_uploading = /** @type {(inputs: Social_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロード中…`)
};

/**
* | output |
* | --- |
* | "Uploading…" |
*
* @param {Social_Image_UploadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_image_uploading = /** @type {((inputs?: Social_Image_UploadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Image_UploadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_image_uploading(inputs)
	if (locale === "de") return de_social_image_uploading(inputs)
	if (locale === "fr") return fr_social_image_uploading(inputs)
	if (locale === "it") return it_social_image_uploading(inputs)
	if (locale === "nl") return nl_social_image_uploading(inputs)
	if (locale === "pl") return pl_social_image_uploading(inputs)
	if (locale === "pt") return pt_social_image_uploading(inputs)
	if (locale === "ru") return ru_social_image_uploading(inputs)
	if (locale === "sv") return sv_social_image_uploading(inputs)
	if (locale === "tr") return tr_social_image_uploading(inputs)
	if (locale === "zh") return zh_social_image_uploading(inputs)
	if (locale === "ja") return ja_social_image_uploading(inputs)
	return en_social_image_uploading(inputs)
});
