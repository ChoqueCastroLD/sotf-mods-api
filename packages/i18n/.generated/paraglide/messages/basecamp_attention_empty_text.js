/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Empty_TextInputs */

const en_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No unanswered questions, reviews or missing details right now.`)
};

const es_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora mismo no hay preguntas sin responder, reseñas pendientes ni datos que falten.`)
};

const de_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerade gibt es keine offenen Fragen, Bewertungen oder fehlenden Angaben.`)
};

const fr_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune question sans réponse, aucun avis en attente ni élément manquant pour l’instant.`)
};

const it_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al momento non ci sono domande senza risposta, recensioni in attesa o dati mancanti.`)
};

const nl_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Op dit moment geen onbeantwoorde vragen, reviews of ontbrekende gegevens.`)
};

const pl_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teraz nie ma pytań bez odpowiedzi, recenzji do odpowiedzi ani brakujących danych.`)
};

const pt_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No momento não há perguntas sem resposta, avaliações pendentes nem dados faltando.`)
};

const ru_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас нет вопросов без ответа, отзывов без ответа и недостающих данных.`)
};

const sv_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Just nu finns inga obesvarade frågor, recensioner utan svar eller saknade uppgifter.`)
};

const tr_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu an yanıtsız soru, yanıt bekleyen inceleme ya da eksik bilgi yok.`)
};

const zh_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目前没有未回答的问题、待回复的评价或缺失的信息。`)
};

const ja_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今のところ、未回答の質問、返信待ちのレビュー、足りない項目はありません。`)
};

/**
* | output |
* | --- |
* | "No unanswered questions, reviews or missing details right now." |
*
* @param {Basecamp_Attention_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_empty_text = /** @type {((inputs?: Basecamp_Attention_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_empty_text(inputs)
	if (locale === "de") return de_basecamp_attention_empty_text(inputs)
	if (locale === "fr") return fr_basecamp_attention_empty_text(inputs)
	if (locale === "it") return it_basecamp_attention_empty_text(inputs)
	if (locale === "nl") return nl_basecamp_attention_empty_text(inputs)
	if (locale === "pl") return pl_basecamp_attention_empty_text(inputs)
	if (locale === "pt") return pt_basecamp_attention_empty_text(inputs)
	if (locale === "ru") return ru_basecamp_attention_empty_text(inputs)
	if (locale === "sv") return sv_basecamp_attention_empty_text(inputs)
	if (locale === "tr") return tr_basecamp_attention_empty_text(inputs)
	if (locale === "zh") return zh_basecamp_attention_empty_text(inputs)
	if (locale === "ja") return ja_basecamp_attention_empty_text(inputs)
	return en_basecamp_attention_empty_text(inputs)
});
