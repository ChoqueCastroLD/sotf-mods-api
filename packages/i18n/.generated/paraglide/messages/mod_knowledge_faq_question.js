/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Faq_QuestionInputs */

const en_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Question`)
};

const es_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pregunta`)
};

const de_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frage`)
};

const fr_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Question`)
};

const it_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domanda`)
};

const nl_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vraag`)
};

const pl_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pytanie`)
};

const pt_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pergunta`)
};

const ru_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вопрос`)
};

const sv_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fråga`)
};

const tr_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soru`)
};

const zh_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`问题`)
};

const ja_mod_knowledge_faq_question = /** @type {(inputs: Mod_Knowledge_Faq_QuestionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`質問`)
};

/**
* | output |
* | --- |
* | "Question" |
*
* @param {Mod_Knowledge_Faq_QuestionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_faq_question = /** @type {((inputs?: Mod_Knowledge_Faq_QuestionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Faq_QuestionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_faq_question(inputs)
	if (locale === "de") return de_mod_knowledge_faq_question(inputs)
	if (locale === "fr") return fr_mod_knowledge_faq_question(inputs)
	if (locale === "it") return it_mod_knowledge_faq_question(inputs)
	if (locale === "nl") return nl_mod_knowledge_faq_question(inputs)
	if (locale === "pl") return pl_mod_knowledge_faq_question(inputs)
	if (locale === "pt") return pt_mod_knowledge_faq_question(inputs)
	if (locale === "ru") return ru_mod_knowledge_faq_question(inputs)
	if (locale === "sv") return sv_mod_knowledge_faq_question(inputs)
	if (locale === "tr") return tr_mod_knowledge_faq_question(inputs)
	if (locale === "zh") return zh_mod_knowledge_faq_question(inputs)
	if (locale === "ja") return ja_mod_knowledge_faq_question(inputs)
	return en_mod_knowledge_faq_question(inputs)
});
