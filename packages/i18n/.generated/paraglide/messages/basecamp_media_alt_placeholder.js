/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Alt_PlaceholderInputs */

const en_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What the image shows`)
};

const es_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué muestra la imagen`)
};

const de_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was das Bild zeigt`)
};

const fr_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que montre l’image`)
};

const it_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa mostra l’immagine`)
};

const nl_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat de afbeelding toont`)
};

const pl_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co pokazuje obraz`)
};

const pt_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que a imagem mostra`)
};

const ru_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что показано на изображении`)
};

const sv_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad bilden visar`)
};

const tr_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görselde ne var`)
};

const zh_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片展示了什么`)
};

const ja_basecamp_media_alt_placeholder = /** @type {(inputs: Basecamp_Media_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像に写っているもの`)
};

/**
* | output |
* | --- |
* | "What the image shows" |
*
* @param {Basecamp_Media_Alt_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_alt_placeholder = /** @type {((inputs?: Basecamp_Media_Alt_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Alt_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_alt_placeholder(inputs)
	if (locale === "de") return de_basecamp_media_alt_placeholder(inputs)
	if (locale === "fr") return fr_basecamp_media_alt_placeholder(inputs)
	if (locale === "it") return it_basecamp_media_alt_placeholder(inputs)
	if (locale === "nl") return nl_basecamp_media_alt_placeholder(inputs)
	if (locale === "pl") return pl_basecamp_media_alt_placeholder(inputs)
	if (locale === "pt") return pt_basecamp_media_alt_placeholder(inputs)
	if (locale === "ru") return ru_basecamp_media_alt_placeholder(inputs)
	if (locale === "sv") return sv_basecamp_media_alt_placeholder(inputs)
	if (locale === "tr") return tr_basecamp_media_alt_placeholder(inputs)
	if (locale === "zh") return zh_basecamp_media_alt_placeholder(inputs)
	if (locale === "ja") return ja_basecamp_media_alt_placeholder(inputs)
	return en_basecamp_media_alt_placeholder(inputs)
});
