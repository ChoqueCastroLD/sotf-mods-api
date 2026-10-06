/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Image_Too_LargeInputs */

const en_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Images can be up to 10 MB.`)
};

const es_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las imágenes pueden pesar hasta 10 MB.`)
};

const de_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder dürfen bis zu 10 MB groß sein.`)
};

const fr_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les images peuvent faire jusqu’à 10 Mo.`)
};

const it_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le immagini possono pesare fino a 10 MB.`)
};

const nl_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeeldingen mogen tot 10 MB zijn.`)
};

const pl_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrazy mogą mieć do 10 MB.`)
};

const pt_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As imagens podem ter até 10 MB.`)
};

const ru_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Размер изображений не больше 10 МБ.`)
};

const sv_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder får vara upp till 10 MB.`)
};

const tr_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görseller en fazla 10 MB olabilir.`)
};

const zh_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片最大 10 MB。`)
};

const ja_upload_image_too_large = /** @type {(inputs: Upload_Image_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像は最大 10 MB です。`)
};

/**
* | output |
* | --- |
* | "Images can be up to 10 MB." |
*
* @param {Upload_Image_Too_LargeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_image_too_large = /** @type {((inputs?: Upload_Image_Too_LargeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Image_Too_LargeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_image_too_large(inputs)
	if (locale === "de") return de_upload_image_too_large(inputs)
	if (locale === "fr") return fr_upload_image_too_large(inputs)
	if (locale === "it") return it_upload_image_too_large(inputs)
	if (locale === "nl") return nl_upload_image_too_large(inputs)
	if (locale === "pl") return pl_upload_image_too_large(inputs)
	if (locale === "pt") return pt_upload_image_too_large(inputs)
	if (locale === "ru") return ru_upload_image_too_large(inputs)
	if (locale === "sv") return sv_upload_image_too_large(inputs)
	if (locale === "tr") return tr_upload_image_too_large(inputs)
	if (locale === "zh") return zh_upload_image_too_large(inputs)
	if (locale === "ja") return ja_upload_image_too_large(inputs)
	return en_upload_image_too_large(inputs)
});
