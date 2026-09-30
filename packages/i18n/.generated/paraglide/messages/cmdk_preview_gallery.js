/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Preview_GalleryInputs */

const en_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image gallery`)
};

const es_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galería de imágenes`)
};

const de_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildergalerie`)
};

const fr_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galerie d’images`)
};

const it_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galleria immagini`)
};

const nl_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeeldingengalerij`)
};

const pl_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galeria obrazów`)
};

const pt_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galeria de imagens`)
};

const ru_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Галерея изображений`)
};

const sv_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildgalleri`)
};

const tr_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel galerisi`)
};

const zh_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片库`)
};

const ja_cmdk_preview_gallery = /** @type {(inputs: Cmdk_Preview_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像ギャラリー`)
};

/**
* | output |
* | --- |
* | "Image gallery" |
*
* @param {Cmdk_Preview_GalleryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_preview_gallery = /** @type {((inputs?: Cmdk_Preview_GalleryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Preview_GalleryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_preview_gallery(inputs)
	if (locale === "de") return de_cmdk_preview_gallery(inputs)
	if (locale === "fr") return fr_cmdk_preview_gallery(inputs)
	if (locale === "it") return it_cmdk_preview_gallery(inputs)
	if (locale === "nl") return nl_cmdk_preview_gallery(inputs)
	if (locale === "pl") return pl_cmdk_preview_gallery(inputs)
	if (locale === "pt") return pt_cmdk_preview_gallery(inputs)
	if (locale === "ru") return ru_cmdk_preview_gallery(inputs)
	if (locale === "sv") return sv_cmdk_preview_gallery(inputs)
	if (locale === "tr") return tr_cmdk_preview_gallery(inputs)
	if (locale === "zh") return zh_cmdk_preview_gallery(inputs)
	if (locale === "ja") return ja_cmdk_preview_gallery(inputs)
	return en_cmdk_preview_gallery(inputs)
});
