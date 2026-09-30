/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Quality_GalleryInputs */

const en_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 or more gallery images`)
};

const es_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 imágenes o más en la galería`)
};

const de_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 oder mehr Galeriebilder`)
};

const fr_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 images ou plus dans la galerie`)
};

const it_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 o più immagini nella galleria`)
};

const nl_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 of meer afbeeldingen in de galerij`)
};

const pl_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co najmniej 3 obrazy w galerii`)
};

const pt_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 imagens ou mais na galeria`)
};

const ru_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 и больше изображений в галерее`)
};

const sv_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 eller fler bilder i galleriet`)
};

const tr_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galeride 3 veya daha fazla görsel`)
};

const zh_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图库有 3 张以上图片`)
};

const ja_upload_quality_gallery = /** @type {(inputs: Upload_Quality_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ギャラリー画像3枚以上`)
};

/**
* | output |
* | --- |
* | "3 or more gallery images" |
*
* @param {Upload_Quality_GalleryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_quality_gallery = /** @type {((inputs?: Upload_Quality_GalleryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Quality_GalleryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_quality_gallery(inputs)
	if (locale === "de") return de_upload_quality_gallery(inputs)
	if (locale === "fr") return fr_upload_quality_gallery(inputs)
	if (locale === "it") return it_upload_quality_gallery(inputs)
	if (locale === "nl") return nl_upload_quality_gallery(inputs)
	if (locale === "pl") return pl_upload_quality_gallery(inputs)
	if (locale === "pt") return pt_upload_quality_gallery(inputs)
	if (locale === "ru") return ru_upload_quality_gallery(inputs)
	if (locale === "sv") return sv_upload_quality_gallery(inputs)
	if (locale === "tr") return tr_upload_quality_gallery(inputs)
	if (locale === "zh") return zh_upload_quality_gallery(inputs)
	if (locale === "ja") return ja_upload_quality_gallery(inputs)
	return en_upload_quality_gallery(inputs)
});
