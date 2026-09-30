/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Image_TypeInputs */

const en_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a PNG, JPEG, WebP, AVIF or GIF image.`)
};

const es_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa una imagen PNG, JPEG, WebP, AVIF o GIF.`)
};

const de_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwende ein PNG-, JPEG-, WebP-, AVIF- oder GIF-Bild.`)
};

const fr_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez une image PNG, JPEG, WebP, AVIF ou GIF.`)
};

const it_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa un’immagine PNG, JPEG, WebP, AVIF o GIF.`)
};

const nl_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik een PNG-, JPEG-, WebP-, AVIF- of GIF-afbeelding.`)
};

const pl_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj obrazu PNG, JPEG, WebP, AVIF lub GIF.`)
};

const pt_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use uma imagem PNG, JPEG, WebP, AVIF ou GIF.`)
};

const ru_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте изображение PNG, JPEG, WebP, AVIF или GIF.`)
};

const sv_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd en PNG-, JPEG-, WebP-, AVIF- eller GIF-bild.`)
};

const tr_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF veya GIF görseli kullan.`)
};

const zh_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请使用 PNG、JPEG、WebP、AVIF 或 GIF 图片。`)
};

const ja_social_image_type = /** @type {(inputs: Social_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG、JPEG、WebP、AVIF、GIF 画像を使ってください。`)
};

/**
* | output |
* | --- |
* | "Use a PNG, JPEG, WebP, AVIF or GIF image." |
*
* @param {Social_Image_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_image_type = /** @type {((inputs?: Social_Image_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Image_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_image_type(inputs)
	if (locale === "de") return de_social_image_type(inputs)
	if (locale === "fr") return fr_social_image_type(inputs)
	if (locale === "it") return it_social_image_type(inputs)
	if (locale === "nl") return nl_social_image_type(inputs)
	if (locale === "pl") return pl_social_image_type(inputs)
	if (locale === "pt") return pt_social_image_type(inputs)
	if (locale === "ru") return ru_social_image_type(inputs)
	if (locale === "sv") return sv_social_image_type(inputs)
	if (locale === "tr") return tr_social_image_type(inputs)
	if (locale === "zh") return zh_social_image_type(inputs)
	if (locale === "ja") return ja_social_image_type(inputs)
	return en_social_image_type(inputs)
});
