/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Upload_Gallery_UploadingInputs */

const en_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upload of image ${i?.n}`)
};

const es_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Subida de la imagen ${i?.n}`)
};

const de_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upload von Bild ${i?.n}`)
};

const fr_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Envoi de l’image ${i?.n}`)
};

const it_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Caricamento dell’immagine ${i?.n}`)
};

const nl_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upload van afbeelding ${i?.n}`)
};

const pl_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wysyłanie obrazu ${i?.n}`)
};

const pt_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Envio da imagem ${i?.n}`)
};

const ru_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Загрузка изображения ${i?.n}`)
};

const sv_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppladdning av bild ${i?.n}`)
};

const tr_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. görselin yüklenmesi`)
};

const zh_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`图片 ${i?.n} 上传进度`)
};

const ja_upload_gallery_uploading = /** @type {(inputs: Upload_Gallery_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像 ${i?.n} のアップロード`)
};

/**
* | output |
* | --- |
* | "Upload of image {n}" |
*
* @param {Upload_Gallery_UploadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_uploading = /** @type {((inputs: Upload_Gallery_UploadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_UploadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_uploading(inputs)
	if (locale === "de") return de_upload_gallery_uploading(inputs)
	if (locale === "fr") return fr_upload_gallery_uploading(inputs)
	if (locale === "it") return it_upload_gallery_uploading(inputs)
	if (locale === "nl") return nl_upload_gallery_uploading(inputs)
	if (locale === "pl") return pl_upload_gallery_uploading(inputs)
	if (locale === "pt") return pt_upload_gallery_uploading(inputs)
	if (locale === "ru") return ru_upload_gallery_uploading(inputs)
	if (locale === "sv") return sv_upload_gallery_uploading(inputs)
	if (locale === "tr") return tr_upload_gallery_uploading(inputs)
	if (locale === "zh") return zh_upload_gallery_uploading(inputs)
	if (locale === "ja") return ja_upload_gallery_uploading(inputs)
	return en_upload_gallery_uploading(inputs)
});
