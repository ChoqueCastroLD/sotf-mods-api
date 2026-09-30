/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Gallery_PreviousInputs */

const en_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous image`)
};

const es_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagen anterior`)
};

const de_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorheriges Bild`)
};

const fr_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image précédente`)
};

const it_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagine precedente`)
};

const nl_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorige afbeelding`)
};

const pl_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poprzedni obraz`)
};

const pt_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagem anterior`)
};

const ru_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предыдущее изображение`)
};

const sv_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Föregående bild`)
};

const tr_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önceki görsel`)
};

const zh_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一张`)
};

const ja_mod_gallery_previous = /** @type {(inputs: Mod_Gallery_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前の画像`)
};

/**
* | output |
* | --- |
* | "Previous image" |
*
* @param {Mod_Gallery_PreviousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_gallery_previous = /** @type {((inputs?: Mod_Gallery_PreviousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Gallery_PreviousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_gallery_previous(inputs)
	if (locale === "de") return de_mod_gallery_previous(inputs)
	if (locale === "fr") return fr_mod_gallery_previous(inputs)
	if (locale === "it") return it_mod_gallery_previous(inputs)
	if (locale === "nl") return nl_mod_gallery_previous(inputs)
	if (locale === "pl") return pl_mod_gallery_previous(inputs)
	if (locale === "pt") return pt_mod_gallery_previous(inputs)
	if (locale === "ru") return ru_mod_gallery_previous(inputs)
	if (locale === "sv") return sv_mod_gallery_previous(inputs)
	if (locale === "tr") return tr_mod_gallery_previous(inputs)
	if (locale === "zh") return zh_mod_gallery_previous(inputs)
	if (locale === "ja") return ja_mod_gallery_previous(inputs)
	return en_mod_gallery_previous(inputs)
});
