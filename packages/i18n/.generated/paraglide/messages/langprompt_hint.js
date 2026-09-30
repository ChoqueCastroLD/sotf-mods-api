/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Langprompt_HintInputs */

const en_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your saved language is ${i?.language}.`)
};

const es_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu idioma guardado es ${i?.language}.`)
};

const de_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deine gespeicherte Sprache ist ${i?.language}.`)
};

const fr_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre langue enregistrée est ${i?.language}.`)
};

const it_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La tua lingua salvata è ${i?.language}.`)
};

const nl_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je opgeslagen taal is ${i?.language}.`)
};

const pl_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twój zapisany język to ${i?.language}.`)
};

const pt_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seu idioma salvo é ${i?.language}.`)
};

const ru_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш сохранённый язык: ${i?.language}.`)
};

const sv_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ditt sparade språk är ${i?.language}.`)
};

const tr_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kayıtlı diliniz: ${i?.language}.`)
};

const zh_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你保存的语言是${i?.language}。`)
};

const ja_langprompt_hint = /** @type {(inputs: Langprompt_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`保存している言語は${i?.language}です。`)
};

/**
* | output |
* | --- |
* | "Your saved language is {language}." |
*
* @param {Langprompt_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const langprompt_hint = /** @type {((inputs: Langprompt_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Langprompt_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_langprompt_hint(inputs)
	if (locale === "de") return de_langprompt_hint(inputs)
	if (locale === "fr") return fr_langprompt_hint(inputs)
	if (locale === "it") return it_langprompt_hint(inputs)
	if (locale === "nl") return nl_langprompt_hint(inputs)
	if (locale === "pl") return pl_langprompt_hint(inputs)
	if (locale === "pt") return pt_langprompt_hint(inputs)
	if (locale === "ru") return ru_langprompt_hint(inputs)
	if (locale === "sv") return sv_langprompt_hint(inputs)
	if (locale === "tr") return tr_langprompt_hint(inputs)
	if (locale === "zh") return zh_langprompt_hint(inputs)
	if (locale === "ja") return ja_langprompt_hint(inputs)
	return en_langprompt_hint(inputs)
});
