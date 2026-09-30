/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ index: NonNullable<unknown> }} Ranger_Media_AltInputs */

const en_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Image ${i?.index}`)
};

const es_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Imagen ${i?.index}`)
};

const de_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bild ${i?.index}`)
};

const fr_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Image ${i?.index}`)
};

const it_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Immagine ${i?.index}`)
};

const nl_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afbeelding ${i?.index}`)
};

const pl_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obraz ${i?.index}`)
};

const pt_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Imagem ${i?.index}`)
};

const ru_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изображение ${i?.index}`)
};

const sv_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bild ${i?.index}`)
};

const tr_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Görsel ${i?.index}`)
};

const zh_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`图片 ${i?.index}`)
};

const ja_ranger_media_alt = /** @type {(inputs: Ranger_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像 ${i?.index}`)
};

/**
* | output |
* | --- |
* | "Image {index}" |
*
* @param {Ranger_Media_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_media_alt = /** @type {((inputs: Ranger_Media_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Media_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_media_alt(inputs)
	if (locale === "de") return de_ranger_media_alt(inputs)
	if (locale === "fr") return fr_ranger_media_alt(inputs)
	if (locale === "it") return it_ranger_media_alt(inputs)
	if (locale === "nl") return nl_ranger_media_alt(inputs)
	if (locale === "pl") return pl_ranger_media_alt(inputs)
	if (locale === "pt") return pt_ranger_media_alt(inputs)
	if (locale === "ru") return ru_ranger_media_alt(inputs)
	if (locale === "sv") return sv_ranger_media_alt(inputs)
	if (locale === "tr") return tr_ranger_media_alt(inputs)
	if (locale === "zh") return zh_ranger_media_alt(inputs)
	if (locale === "ja") return ja_ranger_media_alt(inputs)
	return en_ranger_media_alt(inputs)
});
