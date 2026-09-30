/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Basecamp_Media_FullInputs */

const en_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The gallery holds ${i?.max} images at most.`)
};

const es_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La galería admite ${i?.max} imágenes como máximo.`)
};

const de_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Galerie fasst höchstens ${i?.max} Bilder.`)
};

const fr_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La galerie contient ${i?.max} images au maximum.`)
};

const it_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La galleria contiene al massimo ${i?.max} immagini.`)
};

const nl_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De galerij bevat hooguit ${i?.max} afbeeldingen.`)
};

const pl_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galeria mieści najwyżej ${i?.max} obrazów.`)
};

const pt_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A galeria comporta no máximo ${i?.max} imagens.`)
};

const ru_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`В галерее может быть не больше ${i?.max} изображений.`)
};

const sv_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galleriet rymmer högst ${i?.max} bilder.`)
};

const tr_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galeri en fazla ${i?.max} görsel alır.`)
};

const zh_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`图库最多容纳 ${i?.max} 张图片。`)
};

const ja_basecamp_media_full = /** @type {(inputs: Basecamp_Media_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ギャラリーに入れられる画像は最大 ${i?.max} 枚です。`)
};

/**
* | output |
* | --- |
* | "The gallery holds {max} images at most." |
*
* @param {Basecamp_Media_FullInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_full = /** @type {((inputs: Basecamp_Media_FullInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_FullInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_full(inputs)
	if (locale === "de") return de_basecamp_media_full(inputs)
	if (locale === "fr") return fr_basecamp_media_full(inputs)
	if (locale === "it") return it_basecamp_media_full(inputs)
	if (locale === "nl") return nl_basecamp_media_full(inputs)
	if (locale === "pl") return pl_basecamp_media_full(inputs)
	if (locale === "pt") return pt_basecamp_media_full(inputs)
	if (locale === "ru") return ru_basecamp_media_full(inputs)
	if (locale === "sv") return sv_basecamp_media_full(inputs)
	if (locale === "tr") return tr_basecamp_media_full(inputs)
	if (locale === "zh") return zh_basecamp_media_full(inputs)
	if (locale === "ja") return ja_basecamp_media_full(inputs)
	return en_basecamp_media_full(inputs)
});
