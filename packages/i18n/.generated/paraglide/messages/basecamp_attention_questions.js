/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, count: NonNullable<unknown> }} Basecamp_Attention_QuestionsInputs */

const en_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} question without an answer`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} questions without an answer`)
	
};

const es_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} pregunta sin respuesta`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} preguntas sin respuesta`)
	
};

const de_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} Frage ohne Antwort`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} Fragen ohne Antwort`)
	
};

const fr_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} : ${count__number} question sans réponse`);
	return /** @type {LocalizedString} */ (`${i?.name} : ${count__number} questions sans réponse`)
	
};

const it_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} domanda senza risposta`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} domande senza risposta`)
	
};

const nl_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} vraag zonder antwoord`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} vragen zonder antwoord`)
	
};

const pl_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} pytanie bez odpowiedzi`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} pytania bez odpowiedzi`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} pytań bez odpowiedzi`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} pytania bez odpowiedzi`)
	
};

const pt_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} pergunta sem resposta`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} perguntas sem resposta`)
	
};

const ru_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} вопрос без ответа`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} вопроса без ответа`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} вопросов без ответа`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} вопроса без ответа`)
	
};

const sv_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} fråga utan svar`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} frågor utan svar`)
	
};

const tr_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} soru yanıtsız`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${count__number} soru yanıtsız`)
	
};

const zh_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：${count__number} 个问题尚未回答`)
};

const ja_basecamp_attention_questions = /** @type {(inputs: Basecamp_Attention_QuestionsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：未回答の質問が ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name}: {count__number} question without an answer" |
* | * | "{name}: {count__number} questions without an answer" |
*
* @param {Basecamp_Attention_QuestionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_questions = /** @type {((inputs: Basecamp_Attention_QuestionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_QuestionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_questions(inputs)
	if (locale === "de") return de_basecamp_attention_questions(inputs)
	if (locale === "fr") return fr_basecamp_attention_questions(inputs)
	if (locale === "it") return it_basecamp_attention_questions(inputs)
	if (locale === "nl") return nl_basecamp_attention_questions(inputs)
	if (locale === "pl") return pl_basecamp_attention_questions(inputs)
	if (locale === "pt") return pt_basecamp_attention_questions(inputs)
	if (locale === "ru") return ru_basecamp_attention_questions(inputs)
	if (locale === "sv") return sv_basecamp_attention_questions(inputs)
	if (locale === "tr") return tr_basecamp_attention_questions(inputs)
	if (locale === "zh") return zh_basecamp_attention_questions(inputs)
	if (locale === "ja") return ja_basecamp_attention_questions(inputs)
	return en_basecamp_attention_questions(inputs)
});
