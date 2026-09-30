/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, max: NonNullable<unknown> }} Basecamp_Media_GalleryInputs */

const en_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gallery (${i?.count}/${i?.max})`)
};

const es_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galería (${i?.count}/${i?.max})`)
};

const de_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galerie (${i?.count}/${i?.max})`)
};

const fr_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galerie (${i?.count}/${i?.max})`)
};

const it_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galleria (${i?.count}/${i?.max})`)
};

const nl_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galerij (${i?.count}/${i?.max})`)
};

const pl_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galeria (${i?.count}/${i?.max})`)
};

const pt_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galeria (${i?.count}/${i?.max})`)
};

const ru_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Галерея (${i?.count}/${i?.max})`)
};

const sv_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galleri (${i?.count}/${i?.max})`)
};

const tr_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galeri (${i?.count}/${i?.max})`)
};

const zh_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`图库（${i?.count}/${i?.max}）`)
};

const ja_basecamp_media_gallery = /** @type {(inputs: Basecamp_Media_GalleryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ギャラリー（${i?.count}/${i?.max}）`)
};

/**
* | output |
* | --- |
* | "Gallery ({count}/{max})" |
*
* @param {Basecamp_Media_GalleryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_gallery = /** @type {((inputs: Basecamp_Media_GalleryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_GalleryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_gallery(inputs)
	if (locale === "de") return de_basecamp_media_gallery(inputs)
	if (locale === "fr") return fr_basecamp_media_gallery(inputs)
	if (locale === "it") return it_basecamp_media_gallery(inputs)
	if (locale === "nl") return nl_basecamp_media_gallery(inputs)
	if (locale === "pl") return pl_basecamp_media_gallery(inputs)
	if (locale === "pt") return pt_basecamp_media_gallery(inputs)
	if (locale === "ru") return ru_basecamp_media_gallery(inputs)
	if (locale === "sv") return sv_basecamp_media_gallery(inputs)
	if (locale === "tr") return tr_basecamp_media_gallery(inputs)
	if (locale === "zh") return zh_basecamp_media_gallery(inputs)
	if (locale === "ja") return ja_basecamp_media_gallery(inputs)
	return en_basecamp_media_gallery(inputs)
});
