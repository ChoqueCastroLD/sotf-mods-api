/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Too_LargeInputs */

const en_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That image is larger than 10 MB.`)
};

const es_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esa imagen pesa más de 10 MB.`)
};

const de_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Bild ist größer als 10 MB.`)
};

const fr_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette image dépasse 10 Mo.`)
};

const it_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa immagine supera i 10 MB.`)
};

const nl_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die afbeelding is groter dan 10 MB.`)
};

const pl_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten obraz ma więcej niż 10 MB.`)
};

const pt_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essa imagem tem mais de 10 MB.`)
};

const ru_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это изображение больше 10 МБ.`)
};

const sv_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den bilden är större än 10 MB.`)
};

const tr_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu görsel 10 MB'tan büyük.`)
};

const zh_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该图片超过 10 MB。`)
};

const ja_basecamp_media_too_large = /** @type {(inputs: Basecamp_Media_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この画像は 10 MB を超えています。`)
};

/**
* | output |
* | --- |
* | "That image is larger than 10 MB." |
*
* @param {Basecamp_Media_Too_LargeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_too_large = /** @type {((inputs?: Basecamp_Media_Too_LargeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Too_LargeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_too_large(inputs)
	if (locale === "de") return de_basecamp_media_too_large(inputs)
	if (locale === "fr") return fr_basecamp_media_too_large(inputs)
	if (locale === "it") return it_basecamp_media_too_large(inputs)
	if (locale === "nl") return nl_basecamp_media_too_large(inputs)
	if (locale === "pl") return pl_basecamp_media_too_large(inputs)
	if (locale === "pt") return pt_basecamp_media_too_large(inputs)
	if (locale === "ru") return ru_basecamp_media_too_large(inputs)
	if (locale === "sv") return sv_basecamp_media_too_large(inputs)
	if (locale === "tr") return tr_basecamp_media_too_large(inputs)
	if (locale === "zh") return zh_basecamp_media_too_large(inputs)
	if (locale === "ja") return ja_basecamp_media_too_large(inputs)
	return en_basecamp_media_too_large(inputs)
});
