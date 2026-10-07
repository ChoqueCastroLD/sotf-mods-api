/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Kind_GalleryInputs */

const en_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Images`)
};

const es_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imágenes`)
};

const de_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder`)
};

const fr_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Images`)
};

const it_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagini`)
};

const nl_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeeldingen`)
};

const pl_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrazy`)
};

const pt_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagens`)
};

const ru_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображения`)
};

const sv_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder`)
};

const tr_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görseller`)
};

const zh_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片`)
};

const ja_basecamp_attention_kind_gallery = /** @type {(inputs: Basecamp_Attention_Kind_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像`)
};

/**
* | output |
* | --- |
* | "Images" |
*
* @param {Basecamp_Attention_Kind_GalleryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_kind_gallery = /** @type {((inputs?: Basecamp_Attention_Kind_GalleryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Kind_GalleryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_kind_gallery(inputs)
	if (locale === "de") return de_basecamp_attention_kind_gallery(inputs)
	if (locale === "fr") return fr_basecamp_attention_kind_gallery(inputs)
	if (locale === "it") return it_basecamp_attention_kind_gallery(inputs)
	if (locale === "nl") return nl_basecamp_attention_kind_gallery(inputs)
	if (locale === "pl") return pl_basecamp_attention_kind_gallery(inputs)
	if (locale === "pt") return pt_basecamp_attention_kind_gallery(inputs)
	if (locale === "ru") return ru_basecamp_attention_kind_gallery(inputs)
	if (locale === "sv") return sv_basecamp_attention_kind_gallery(inputs)
	if (locale === "tr") return tr_basecamp_attention_kind_gallery(inputs)
	if (locale === "zh") return zh_basecamp_attention_kind_gallery(inputs)
	if (locale === "ja") return ja_basecamp_attention_kind_gallery(inputs)
	return en_basecamp_attention_kind_gallery(inputs)
});
