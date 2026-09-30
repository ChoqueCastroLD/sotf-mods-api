/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Empty_TextInputs */

const en_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No broken reports, unanswered questions or missing pieces right now.`)
};

const es_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora mismo no hay reportes de rotura, preguntas sin responder ni piezas que falten.`)
};

const de_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerade gibt es keine Fehlerberichte, offenen Fragen oder fehlenden Angaben.`)
};

const fr_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun rapport de panne, question sans réponse ni élément manquant pour l’instant.`)
};

const it_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al momento non ci sono segnalazioni di guasti, domande senza risposta o parti mancanti.`)
};

const nl_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Op dit moment geen defectmeldingen, onbeantwoorde vragen of ontbrekende onderdelen.`)
};

const pl_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teraz nie ma zgłoszeń awarii, pytań bez odpowiedzi ani brakujących elementów.`)
};

const pt_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No momento não há relatórios de falha, perguntas sem resposta nem itens faltando.`)
};

const ru_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас нет сообщений о поломках, вопросов без ответа и недостающих деталей.`)
};

const sv_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Just nu finns inga felrapporter, obesvarade frågor eller saknade delar.`)
};

const tr_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu an bozuk raporu, yanıtsız soru ya da eksik parça yok.`)
};

const zh_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目前没有损坏报告、未回答的问题或缺失的内容。`)
};

const ja_basecamp_attention_empty_text = /** @type {(inputs: Basecamp_Attention_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今のところ、動作しないという報告、未回答の質問、足りない項目はありません。`)
};

/**
* | output |
* | --- |
* | "No broken reports, unanswered questions or missing pieces right now." |
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
