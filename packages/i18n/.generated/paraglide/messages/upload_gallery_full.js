/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Upload_Gallery_FullInputs */

const en_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The gallery is full (${i?.max} images).`)
};

const es_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La galería está llena (${i?.max} imágenes).`)
};

const de_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Galerie ist voll (${i?.max} Bilder).`)
};

const fr_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La galerie est pleine (${i?.max} images).`)
};

const it_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La galleria è piena (${i?.max} immagini).`)
};

const nl_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De galerij is vol (${i?.max} afbeeldingen).`)
};

const pl_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galeria jest pełna (${i?.max} obrazów).`)
};

const pt_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A galeria está cheia (${i?.max} imagens).`)
};

const ru_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Галерея заполнена (${i?.max} изображений).`)
};

const sv_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galleriet är fullt (${i?.max} bilder).`)
};

const tr_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galeri dolu (${i?.max} görsel).`)
};

const zh_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`图库已满（${i?.max} 张）。`)
};

const ja_upload_gallery_full = /** @type {(inputs: Upload_Gallery_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ギャラリーがいっぱいです（${i?.max} 枚）。`)
};

/**
* | output |
* | --- |
* | "The gallery is full ({max} images)." |
*
* @param {Upload_Gallery_FullInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_full = /** @type {((inputs: Upload_Gallery_FullInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_FullInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_full(inputs)
	if (locale === "de") return de_upload_gallery_full(inputs)
	if (locale === "fr") return fr_upload_gallery_full(inputs)
	if (locale === "it") return it_upload_gallery_full(inputs)
	if (locale === "nl") return nl_upload_gallery_full(inputs)
	if (locale === "pl") return pl_upload_gallery_full(inputs)
	if (locale === "pt") return pt_upload_gallery_full(inputs)
	if (locale === "ru") return ru_upload_gallery_full(inputs)
	if (locale === "sv") return sv_upload_gallery_full(inputs)
	if (locale === "tr") return tr_upload_gallery_full(inputs)
	if (locale === "zh") return zh_upload_gallery_full(inputs)
	if (locale === "ja") return ja_upload_gallery_full(inputs)
	return en_upload_gallery_full(inputs)
});
