/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Cmdk_Action_LanguageInputs */

const en_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Language: ${i?.language}`)
};

const es_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Idioma: ${i?.language}`)
};

const de_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sprache: ${i?.language}`)
};

const fr_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Langue : ${i?.language}`)
};

const it_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lingua: ${i?.language}`)
};

const nl_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Taal: ${i?.language}`)
};

const pl_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Język: ${i?.language}`)
};

const pt_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Idioma: ${i?.language}`)
};

const ru_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Язык: ${i?.language}`)
};

const sv_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Språk: ${i?.language}`)
};

const tr_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dil: ${i?.language}`)
};

const zh_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`语言：${i?.language}`)
};

const ja_cmdk_action_language = /** @type {(inputs: Cmdk_Action_LanguageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`言語：${i?.language}`)
};

/**
* | output |
* | --- |
* | "Language: {language}" |
*
* @param {Cmdk_Action_LanguageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_action_language = /** @type {((inputs: Cmdk_Action_LanguageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Action_LanguageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_action_language(inputs)
	if (locale === "de") return de_cmdk_action_language(inputs)
	if (locale === "fr") return fr_cmdk_action_language(inputs)
	if (locale === "it") return it_cmdk_action_language(inputs)
	if (locale === "nl") return nl_cmdk_action_language(inputs)
	if (locale === "pl") return pl_cmdk_action_language(inputs)
	if (locale === "pt") return pt_cmdk_action_language(inputs)
	if (locale === "ru") return ru_cmdk_action_language(inputs)
	if (locale === "sv") return sv_cmdk_action_language(inputs)
	if (locale === "tr") return tr_cmdk_action_language(inputs)
	if (locale === "zh") return zh_cmdk_action_language(inputs)
	if (locale === "ja") return ja_cmdk_action_language(inputs)
	return en_cmdk_action_language(inputs)
});
