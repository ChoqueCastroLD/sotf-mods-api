/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Questions_ActionInputs */

const en_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Answer in the inbox`)
};

const es_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder en la bandeja`)
};

const de_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Posteingang antworten`)
};

const fr_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répondre dans la boîte`)
};

const it_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rispondi nella posta`)
};

const nl_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beantwoorden in de inbox`)
};

const pl_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedz w skrzynce`)
};

const pt_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder na caixa de entrada`)
};

const ru_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответить во входящих`)
};

const sv_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svara i inkorgen`)
};

const tr_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelen kutusunda yanıtla`)
};

const zh_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在收件箱回答`)
};

const ja_basecamp_attention_questions_action = /** @type {(inputs: Basecamp_Attention_Questions_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信箱で回答`)
};

/**
* | output |
* | --- |
* | "Answer in the inbox" |
*
* @param {Basecamp_Attention_Questions_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_questions_action = /** @type {((inputs?: Basecamp_Attention_Questions_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Questions_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_questions_action(inputs)
	if (locale === "de") return de_basecamp_attention_questions_action(inputs)
	if (locale === "fr") return fr_basecamp_attention_questions_action(inputs)
	if (locale === "it") return it_basecamp_attention_questions_action(inputs)
	if (locale === "nl") return nl_basecamp_attention_questions_action(inputs)
	if (locale === "pl") return pl_basecamp_attention_questions_action(inputs)
	if (locale === "pt") return pt_basecamp_attention_questions_action(inputs)
	if (locale === "ru") return ru_basecamp_attention_questions_action(inputs)
	if (locale === "sv") return sv_basecamp_attention_questions_action(inputs)
	if (locale === "tr") return tr_basecamp_attention_questions_action(inputs)
	if (locale === "zh") return zh_basecamp_attention_questions_action(inputs)
	if (locale === "ja") return ja_basecamp_attention_questions_action(inputs)
	return en_basecamp_attention_questions_action(inputs)
});
