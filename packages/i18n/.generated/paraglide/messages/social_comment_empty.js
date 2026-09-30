/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_EmptyInputs */

const en_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write something first.`)
};

const es_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe algo primero.`)
};

const de_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schreib zuerst etwas.`)
};

const fr_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrivez d’abord quelque chose.`)
};

const it_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi prima qualcosa.`)
};

const nl_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijf eerst iets.`)
};

const pl_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw coś napisz.`)
};

const pt_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escreva algo primeiro.`)
};

const ru_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала напишите что-нибудь.`)
};

const sv_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv något först.`)
};

const tr_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce bir şeyler yaz.`)
};

const zh_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先写点内容。`)
};

const ja_social_comment_empty = /** @type {(inputs: Social_Comment_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まず何か書いてください。`)
};

/**
* | output |
* | --- |
* | "Write something first." |
*
* @param {Social_Comment_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_empty = /** @type {((inputs?: Social_Comment_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_empty(inputs)
	if (locale === "de") return de_social_comment_empty(inputs)
	if (locale === "fr") return fr_social_comment_empty(inputs)
	if (locale === "it") return it_social_comment_empty(inputs)
	if (locale === "nl") return nl_social_comment_empty(inputs)
	if (locale === "pl") return pl_social_comment_empty(inputs)
	if (locale === "pt") return pt_social_comment_empty(inputs)
	if (locale === "ru") return ru_social_comment_empty(inputs)
	if (locale === "sv") return sv_social_comment_empty(inputs)
	if (locale === "tr") return tr_social_comment_empty(inputs)
	if (locale === "zh") return zh_social_comment_empty(inputs)
	if (locale === "ja") return ja_social_comment_empty(inputs)
	return en_social_comment_empty(inputs)
});
