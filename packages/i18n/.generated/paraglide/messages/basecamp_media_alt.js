/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Basecamp_Media_AltInputs */

const en_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Description of image ${i?.n}`)
};

const es_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descripción de la imagen ${i?.n}`)
};

const de_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beschreibung von Bild ${i?.n}`)
};

const fr_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Description de l’image ${i?.n}`)
};

const it_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descrizione dell’immagine ${i?.n}`)
};

const nl_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beschrijving van afbeelding ${i?.n}`)
};

const pl_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opis obrazu ${i?.n}`)
};

const pt_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descrição da imagem ${i?.n}`)
};

const ru_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Описание изображения ${i?.n}`)
};

const sv_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beskrivning av bild ${i?.n}`)
};

const tr_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. görselin açıklaması`)
};

const zh_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`图片 ${i?.n} 的描述`)
};

const ja_basecamp_media_alt = /** @type {(inputs: Basecamp_Media_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像 ${i?.n} の説明`)
};

/**
* | output |
* | --- |
* | "Description of image {n}" |
*
* @param {Basecamp_Media_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_alt = /** @type {((inputs: Basecamp_Media_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_alt(inputs)
	if (locale === "de") return de_basecamp_media_alt(inputs)
	if (locale === "fr") return fr_basecamp_media_alt(inputs)
	if (locale === "it") return it_basecamp_media_alt(inputs)
	if (locale === "nl") return nl_basecamp_media_alt(inputs)
	if (locale === "pl") return pl_basecamp_media_alt(inputs)
	if (locale === "pt") return pt_basecamp_media_alt(inputs)
	if (locale === "ru") return ru_basecamp_media_alt(inputs)
	if (locale === "sv") return sv_basecamp_media_alt(inputs)
	if (locale === "tr") return tr_basecamp_media_alt(inputs)
	if (locale === "zh") return zh_basecamp_media_alt(inputs)
	if (locale === "ja") return ja_basecamp_media_alt(inputs)
	return en_basecamp_media_alt(inputs)
});
