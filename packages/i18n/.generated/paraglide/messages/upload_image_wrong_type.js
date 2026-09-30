/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Image_Wrong_TypeInputs */

const en_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a PNG, JPEG, WebP, AVIF or GIF image.`)
};

const es_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa una imagen PNG, JPEG, WebP, AVIF o GIF.`)
};

const de_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwende ein PNG-, JPEG-, WebP-, AVIF- oder GIF-Bild.`)
};

const fr_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez une image PNG, JPEG, WebP, AVIF ou GIF.`)
};

const it_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa un’immagine PNG, JPEG, WebP, AVIF o GIF.`)
};

const nl_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik een PNG-, JPEG-, WebP-, AVIF- of GIF-afbeelding.`)
};

const pl_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj obrazu PNG, JPEG, WebP, AVIF lub GIF.`)
};

const pt_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use uma imagem PNG, JPEG, WebP, AVIF ou GIF.`)
};

const ru_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте изображение PNG, JPEG, WebP, AVIF или GIF.`)
};

const sv_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd en PNG-, JPEG-, WebP-, AVIF- eller GIF-bild.`)
};

const tr_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF ya da GIF görsel kullan.`)
};

const zh_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请使用 PNG、JPEG、WebP、AVIF 或 GIF 图片。`)
};

const ja_upload_image_wrong_type = /** @type {(inputs: Upload_Image_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG、JPEG、WebP、AVIF、GIF の画像を使ってください。`)
};

/**
* | output |
* | --- |
* | "Use a PNG, JPEG, WebP, AVIF or GIF image." |
*
* @param {Upload_Image_Wrong_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_image_wrong_type = /** @type {((inputs?: Upload_Image_Wrong_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Image_Wrong_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_image_wrong_type(inputs)
	if (locale === "de") return de_upload_image_wrong_type(inputs)
	if (locale === "fr") return fr_upload_image_wrong_type(inputs)
	if (locale === "it") return it_upload_image_wrong_type(inputs)
	if (locale === "nl") return nl_upload_image_wrong_type(inputs)
	if (locale === "pl") return pl_upload_image_wrong_type(inputs)
	if (locale === "pt") return pt_upload_image_wrong_type(inputs)
	if (locale === "ru") return ru_upload_image_wrong_type(inputs)
	if (locale === "sv") return sv_upload_image_wrong_type(inputs)
	if (locale === "tr") return tr_upload_image_wrong_type(inputs)
	if (locale === "zh") return zh_upload_image_wrong_type(inputs)
	if (locale === "ja") return ja_upload_image_wrong_type(inputs)
	return en_upload_image_wrong_type(inputs)
});
