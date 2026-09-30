/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Faq_EmptyInputs */

const en_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No questions yet. Add the ones you keep answering.`)
};

const es_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay preguntas. Añade las que sueles responder.`)
};

const de_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Fragen. Füge die hinzu, die du immer wieder beantwortest.`)
};

const fr_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune question pour l’instant. Ajoutez celles auxquelles vous répondez sans cesse.`)
};

const it_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna domanda. Aggiungi quelle a cui rispondi sempre.`)
};

const nl_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen vragen. Voeg de vragen toe die je steeds beantwoordt.`)
};

const pl_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak pytań. Dodaj te, na które stale odpowiadasz.`)
};

const pt_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há perguntas. Adicione as que você sempre responde.`)
};

const ru_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вопросов пока нет. Добавьте те, на которые вы отвечаете постоянно.`)
};

const sv_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga frågor än. Lägg till de du svarar på hela tiden.`)
};

const tr_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz soru yok. Sürekli yanıtladığın soruları ekle.`)
};

const zh_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有问题。添加你经常回答的问题。`)
};

const ja_mod_knowledge_faq_empty = /** @type {(inputs: Mod_Knowledge_Faq_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ質問はありません。よく答える質問を追加してください。`)
};

/**
* | output |
* | --- |
* | "No questions yet. Add the ones you keep answering." |
*
* @param {Mod_Knowledge_Faq_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_faq_empty = /** @type {((inputs?: Mod_Knowledge_Faq_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Faq_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_faq_empty(inputs)
	if (locale === "de") return de_mod_knowledge_faq_empty(inputs)
	if (locale === "fr") return fr_mod_knowledge_faq_empty(inputs)
	if (locale === "it") return it_mod_knowledge_faq_empty(inputs)
	if (locale === "nl") return nl_mod_knowledge_faq_empty(inputs)
	if (locale === "pl") return pl_mod_knowledge_faq_empty(inputs)
	if (locale === "pt") return pt_mod_knowledge_faq_empty(inputs)
	if (locale === "ru") return ru_mod_knowledge_faq_empty(inputs)
	if (locale === "sv") return sv_mod_knowledge_faq_empty(inputs)
	if (locale === "tr") return tr_mod_knowledge_faq_empty(inputs)
	if (locale === "zh") return zh_mod_knowledge_faq_empty(inputs)
	if (locale === "ja") return ja_mod_knowledge_faq_empty(inputs)
	return en_mod_knowledge_faq_empty(inputs)
});
