/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Gallery_NextInputs */

const en_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next image`)
};

const es_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagen siguiente`)
};

const de_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nächstes Bild`)
};

const fr_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image suivante`)
};

const it_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagine successiva`)
};

const nl_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende afbeelding`)
};

const pl_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następny obraz`)
};

const pt_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próxima imagem`)
};

const ru_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следующее изображение`)
};

const sv_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa bild`)
};

const tr_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonraki görsel`)
};

const zh_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一张`)
};

const ja_mod_gallery_next = /** @type {(inputs: Mod_Gallery_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次の画像`)
};

/**
* | output |
* | --- |
* | "Next image" |
*
* @param {Mod_Gallery_NextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_gallery_next = /** @type {((inputs?: Mod_Gallery_NextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Gallery_NextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_gallery_next(inputs)
	if (locale === "de") return de_mod_gallery_next(inputs)
	if (locale === "fr") return fr_mod_gallery_next(inputs)
	if (locale === "it") return it_mod_gallery_next(inputs)
	if (locale === "nl") return nl_mod_gallery_next(inputs)
	if (locale === "pl") return pl_mod_gallery_next(inputs)
	if (locale === "pt") return pt_mod_gallery_next(inputs)
	if (locale === "ru") return ru_mod_gallery_next(inputs)
	if (locale === "sv") return sv_mod_gallery_next(inputs)
	if (locale === "tr") return tr_mod_gallery_next(inputs)
	if (locale === "zh") return zh_mod_gallery_next(inputs)
	if (locale === "ja") return ja_mod_gallery_next(inputs)
	return en_mod_gallery_next(inputs)
});
