/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Basecamp_Media_Move_DownInputs */

const en_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Move image ${i?.n} down`)
};

const es_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bajar la imagen ${i?.n}`)
};

const de_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bild ${i?.n} nach unten`)
};

const fr_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descendre l’image ${i?.n}`)
};

const it_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sposta giù l’immagine ${i?.n}`)
};

const nl_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afbeelding ${i?.n} omlaag`)
};

const pl_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przesuń obraz ${i?.n} w dół`)
};

const pt_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descer a imagem ${i?.n}`)
};

const ru_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Переместить изображение ${i?.n} ниже`)
};

const sv_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flytta bild ${i?.n} nedåt`)
};

const tr_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. görseli aşağı taşı`)
};

const zh_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下移图片 ${i?.n}`)
};

const ja_basecamp_media_move_down = /** @type {(inputs: Basecamp_Media_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像 ${i?.n} を下へ`)
};

/**
* | output |
* | --- |
* | "Move image {n} down" |
*
* @param {Basecamp_Media_Move_DownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_move_down = /** @type {((inputs: Basecamp_Media_Move_DownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Move_DownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_move_down(inputs)
	if (locale === "de") return de_basecamp_media_move_down(inputs)
	if (locale === "fr") return fr_basecamp_media_move_down(inputs)
	if (locale === "it") return it_basecamp_media_move_down(inputs)
	if (locale === "nl") return nl_basecamp_media_move_down(inputs)
	if (locale === "pl") return pl_basecamp_media_move_down(inputs)
	if (locale === "pt") return pt_basecamp_media_move_down(inputs)
	if (locale === "ru") return ru_basecamp_media_move_down(inputs)
	if (locale === "sv") return sv_basecamp_media_move_down(inputs)
	if (locale === "tr") return tr_basecamp_media_move_down(inputs)
	if (locale === "zh") return zh_basecamp_media_move_down(inputs)
	if (locale === "ja") return ja_basecamp_media_move_down(inputs)
	return en_basecamp_media_move_down(inputs)
});
