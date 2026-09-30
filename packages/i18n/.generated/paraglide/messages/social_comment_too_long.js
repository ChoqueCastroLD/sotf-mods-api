/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Social_Comment_Too_LongInputs */

const en_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Keep it under ${i?.max} characters.`)
};

const es_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Máximo ${i?.max} caracteres.`)
};

const de_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Höchstens ${i?.max} Zeichen.`)
};

const fr_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} caractères maximum.`)
};

const it_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Massimo ${i?.max} caratteri.`)
};

const nl_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maximaal ${i?.max} tekens.`)
};

const pl_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maksymalnie ${i?.max} znaków.`)
};

const pt_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No máximo ${i?.max} caracteres.`)
};

const ru_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Не больше ${i?.max} символов.`)
};

const sv_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Högst ${i?.max} tecken.`)
};

const tr_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En fazla ${i?.max} karakter.`)
};

const zh_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最多 ${i?.max} 个字符。`)
};

const ja_social_comment_too_long = /** @type {(inputs: Social_Comment_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} 文字以内にしてください。`)
};

/**
* | output |
* | --- |
* | "Keep it under {max} characters." |
*
* @param {Social_Comment_Too_LongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_too_long = /** @type {((inputs: Social_Comment_Too_LongInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_Too_LongInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_too_long(inputs)
	if (locale === "de") return de_social_comment_too_long(inputs)
	if (locale === "fr") return fr_social_comment_too_long(inputs)
	if (locale === "it") return it_social_comment_too_long(inputs)
	if (locale === "nl") return nl_social_comment_too_long(inputs)
	if (locale === "pl") return pl_social_comment_too_long(inputs)
	if (locale === "pt") return pt_social_comment_too_long(inputs)
	if (locale === "ru") return ru_social_comment_too_long(inputs)
	if (locale === "sv") return sv_social_comment_too_long(inputs)
	if (locale === "tr") return tr_social_comment_too_long(inputs)
	if (locale === "zh") return zh_social_comment_too_long(inputs)
	if (locale === "ja") return ja_social_comment_too_long(inputs)
	return en_social_comment_too_long(inputs)
});
