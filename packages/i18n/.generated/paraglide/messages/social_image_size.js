/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Image_SizeInputs */

const en_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Images can be up to 5 MB.`)
};

const es_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las imágenes pueden pesar hasta 5 MB.`)
};

const de_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder dürfen höchstens 5 MB groß sein.`)
};

const fr_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les images peuvent peser jusqu’à 5 Mo.`)
};

const it_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le immagini possono pesare fino a 5 MB.`)
};

const nl_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeeldingen mogen maximaal 5 MB zijn.`)
};

const pl_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrazy mogą mieć maksymalnie 5 MB.`)
};

const pt_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As imagens podem ter até 5 MB.`)
};

const ru_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Размер изображения — до 5 МБ.`)
};

const sv_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder får vara högst 5 MB.`)
};

const tr_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görseller en fazla 5 MB olabilir.`)
};

const zh_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片最大 5 MB。`)
};

const ja_social_image_size = /** @type {(inputs: Social_Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像は 5 MB までです。`)
};

/**
* | output |
* | --- |
* | "Images can be up to 5 MB." |
*
* @param {Social_Image_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_image_size = /** @type {((inputs?: Social_Image_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Image_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_image_size(inputs)
	if (locale === "de") return de_social_image_size(inputs)
	if (locale === "fr") return fr_social_image_size(inputs)
	if (locale === "it") return it_social_image_size(inputs)
	if (locale === "nl") return nl_social_image_size(inputs)
	if (locale === "pl") return pl_social_image_size(inputs)
	if (locale === "pt") return pt_social_image_size(inputs)
	if (locale === "ru") return ru_social_image_size(inputs)
	if (locale === "sv") return sv_social_image_size(inputs)
	if (locale === "tr") return tr_social_image_size(inputs)
	if (locale === "zh") return zh_social_image_size(inputs)
	if (locale === "ja") return ja_social_image_size(inputs)
	return en_social_image_size(inputs)
});
