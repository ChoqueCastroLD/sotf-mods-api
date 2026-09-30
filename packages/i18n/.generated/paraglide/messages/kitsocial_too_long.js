/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Kitsocial_Too_LongInputs */

const en_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The comment must have 1 to ${i?.max} characters.`)
};

const es_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El comentario debe tener de 1 a ${i?.max} caracteres.`)
};

const de_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Kommentar muss 1 bis ${i?.max} Zeichen lang sein.`)
};

const fr_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le commentaire doit contenir de 1 à ${i?.max} caractères.`)
};

const it_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il commento deve avere da 1 a ${i?.max} caratteri.`)
};

const nl_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De reactie moet 1 tot ${i?.max} tekens bevatten.`)
};

const pl_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Komentarz musi mieć od 1 do ${i?.max} znaków.`)
};

const pt_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O comentário deve ter de 1 a ${i?.max} caracteres.`)
};

const ru_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Комментарий должен содержать от 1 до ${i?.max} символов.`)
};

const sv_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kommentaren måste vara 1 till ${i?.max} tecken.`)
};

const tr_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yorum 1 ile ${i?.max} karakter arasında olmalı.`)
};

const zh_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`评论长度必须为 1 到 ${i?.max} 个字符。`)
};

const ja_kitsocial_too_long = /** @type {(inputs: Kitsocial_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`コメントは 1 文字以上 ${i?.max} 文字以内で入力してください。`)
};

/**
* | output |
* | --- |
* | "The comment must have 1 to {max} characters." |
*
* @param {Kitsocial_Too_LongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_too_long = /** @type {((inputs: Kitsocial_Too_LongInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Too_LongInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_too_long(inputs)
	if (locale === "de") return de_kitsocial_too_long(inputs)
	if (locale === "fr") return fr_kitsocial_too_long(inputs)
	if (locale === "it") return it_kitsocial_too_long(inputs)
	if (locale === "nl") return nl_kitsocial_too_long(inputs)
	if (locale === "pl") return pl_kitsocial_too_long(inputs)
	if (locale === "pt") return pt_kitsocial_too_long(inputs)
	if (locale === "ru") return ru_kitsocial_too_long(inputs)
	if (locale === "sv") return sv_kitsocial_too_long(inputs)
	if (locale === "tr") return tr_kitsocial_too_long(inputs)
	if (locale === "zh") return zh_kitsocial_too_long(inputs)
	if (locale === "ja") return ja_kitsocial_too_long(inputs)
	return en_kitsocial_too_long(inputs)
});
