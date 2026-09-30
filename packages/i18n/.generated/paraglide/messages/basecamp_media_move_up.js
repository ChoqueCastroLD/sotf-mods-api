/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Basecamp_Media_Move_UpInputs */

const en_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Move image ${i?.n} up`)
};

const es_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Subir la imagen ${i?.n}`)
};

const de_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bild ${i?.n} nach oben`)
};

const fr_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Monter l’image ${i?.n}`)
};

const it_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sposta su l’immagine ${i?.n}`)
};

const nl_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afbeelding ${i?.n} omhoog`)
};

const pl_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przesuń obraz ${i?.n} w górę`)
};

const pt_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Subir a imagem ${i?.n}`)
};

const ru_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Переместить изображение ${i?.n} выше`)
};

const sv_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flytta bild ${i?.n} uppåt`)
};

const tr_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. görseli yukarı taşı`)
};

const zh_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上移图片 ${i?.n}`)
};

const ja_basecamp_media_move_up = /** @type {(inputs: Basecamp_Media_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像 ${i?.n} を上へ`)
};

/**
* | output |
* | --- |
* | "Move image {n} up" |
*
* @param {Basecamp_Media_Move_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_move_up = /** @type {((inputs: Basecamp_Media_Move_UpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Move_UpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_move_up(inputs)
	if (locale === "de") return de_basecamp_media_move_up(inputs)
	if (locale === "fr") return fr_basecamp_media_move_up(inputs)
	if (locale === "it") return it_basecamp_media_move_up(inputs)
	if (locale === "nl") return nl_basecamp_media_move_up(inputs)
	if (locale === "pl") return pl_basecamp_media_move_up(inputs)
	if (locale === "pt") return pt_basecamp_media_move_up(inputs)
	if (locale === "ru") return ru_basecamp_media_move_up(inputs)
	if (locale === "sv") return sv_basecamp_media_move_up(inputs)
	if (locale === "tr") return tr_basecamp_media_move_up(inputs)
	if (locale === "zh") return zh_basecamp_media_move_up(inputs)
	if (locale === "ja") return ja_basecamp_media_move_up(inputs)
	return en_basecamp_media_move_up(inputs)
});
