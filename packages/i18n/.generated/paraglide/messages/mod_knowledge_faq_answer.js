/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Faq_AnswerInputs */

const en_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Answer`)
};

const es_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respuesta`)
};

const de_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort`)
};

const fr_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réponse`)
};

const it_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risposta`)
};

const nl_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoord`)
};

const pl_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedź`)
};

const pt_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resposta`)
};

const ru_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответ`)
};

const sv_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svar`)
};

const tr_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cevap`)
};

const zh_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回答`)
};

const ja_mod_knowledge_faq_answer = /** @type {(inputs: Mod_Knowledge_Faq_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回答`)
};

/**
* | output |
* | --- |
* | "Answer" |
*
* @param {Mod_Knowledge_Faq_AnswerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_faq_answer = /** @type {((inputs?: Mod_Knowledge_Faq_AnswerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Faq_AnswerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_faq_answer(inputs)
	if (locale === "de") return de_mod_knowledge_faq_answer(inputs)
	if (locale === "fr") return fr_mod_knowledge_faq_answer(inputs)
	if (locale === "it") return it_mod_knowledge_faq_answer(inputs)
	if (locale === "nl") return nl_mod_knowledge_faq_answer(inputs)
	if (locale === "pl") return pl_mod_knowledge_faq_answer(inputs)
	if (locale === "pt") return pt_mod_knowledge_faq_answer(inputs)
	if (locale === "ru") return ru_mod_knowledge_faq_answer(inputs)
	if (locale === "sv") return sv_mod_knowledge_faq_answer(inputs)
	if (locale === "tr") return tr_mod_knowledge_faq_answer(inputs)
	if (locale === "zh") return zh_mod_knowledge_faq_answer(inputs)
	if (locale === "ja") return ja_mod_knowledge_faq_answer(inputs)
	return en_mod_knowledge_faq_answer(inputs)
});
