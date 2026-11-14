/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Cover_Too_BigInputs */

const en_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The image is too large.`)
};

const es_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La imagen es demasiado grande.`)
};

const de_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Bild ist zu groß.`)
};

const fr_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’image est trop lourde.`)
};

const it_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’immagine è troppo grande.`)
};

const nl_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De afbeelding is te groot.`)
};

const pl_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obraz jest za duży.`)
};

const pt_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A imagem é grande demais.`)
};

const ru_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображение слишком большое.`)
};

const sv_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilden är för stor.`)
};

const tr_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel çok büyük.`)
};

const zh_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片太大。`)
};

const ja_modpacks_cover_too_big = /** @type {(inputs: Modpacks_Cover_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像が大きすぎます。`)
};

/**
* | output |
* | --- |
* | "The image is too large." |
*
* @param {Modpacks_Cover_Too_BigInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_cover_too_big = /** @type {((inputs?: Modpacks_Cover_Too_BigInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Cover_Too_BigInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_cover_too_big(inputs)
	if (locale === "de") return de_modpacks_cover_too_big(inputs)
	if (locale === "fr") return fr_modpacks_cover_too_big(inputs)
	if (locale === "it") return it_modpacks_cover_too_big(inputs)
	if (locale === "nl") return nl_modpacks_cover_too_big(inputs)
	if (locale === "pl") return pl_modpacks_cover_too_big(inputs)
	if (locale === "pt") return pt_modpacks_cover_too_big(inputs)
	if (locale === "ru") return ru_modpacks_cover_too_big(inputs)
	if (locale === "sv") return sv_modpacks_cover_too_big(inputs)
	if (locale === "tr") return tr_modpacks_cover_too_big(inputs)
	if (locale === "zh") return zh_modpacks_cover_too_big(inputs)
	if (locale === "ja") return ja_modpacks_cover_too_big(inputs)
	return en_modpacks_cover_too_big(inputs)
});
