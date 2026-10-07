/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Kind_QuestionsInputs */

const en_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questions`)
};

const es_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preguntas`)
};

const de_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fragen`)
};

const fr_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questions`)
};

const it_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domande`)
};

const nl_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vragen`)
};

const pl_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pytania`)
};

const pt_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntas`)
};

const ru_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вопросы`)
};

const sv_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frågor`)
};

const tr_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorular`)
};

const zh_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`问题`)
};

const ja_basecamp_attention_kind_questions = /** @type {(inputs: Basecamp_Attention_Kind_QuestionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`質問`)
};

/**
* | output |
* | --- |
* | "Questions" |
*
* @param {Basecamp_Attention_Kind_QuestionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_kind_questions = /** @type {((inputs?: Basecamp_Attention_Kind_QuestionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Kind_QuestionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_kind_questions(inputs)
	if (locale === "de") return de_basecamp_attention_kind_questions(inputs)
	if (locale === "fr") return fr_basecamp_attention_kind_questions(inputs)
	if (locale === "it") return it_basecamp_attention_kind_questions(inputs)
	if (locale === "nl") return nl_basecamp_attention_kind_questions(inputs)
	if (locale === "pl") return pl_basecamp_attention_kind_questions(inputs)
	if (locale === "pt") return pt_basecamp_attention_kind_questions(inputs)
	if (locale === "ru") return ru_basecamp_attention_kind_questions(inputs)
	if (locale === "sv") return sv_basecamp_attention_kind_questions(inputs)
	if (locale === "tr") return tr_basecamp_attention_kind_questions(inputs)
	if (locale === "zh") return zh_basecamp_attention_kind_questions(inputs)
	if (locale === "ja") return ja_basecamp_attention_kind_questions(inputs)
	return en_basecamp_attention_kind_questions(inputs)
});
