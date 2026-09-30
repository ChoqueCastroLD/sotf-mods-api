/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Faq_AddInputs */

const en_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a question`)
};

const es_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir una pregunta`)
};

const de_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frage hinzufügen`)
};

const fr_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter une question`)
};

const it_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi una domanda`)
};

const nl_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vraag toevoegen`)
};

const pl_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj pytanie`)
};

const pt_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar uma pergunta`)
};

const ru_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить вопрос`)
};

const sv_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till en fråga`)
};

const tr_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soru ekle`)
};

const zh_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加问题`)
};

const ja_mod_knowledge_faq_add = /** @type {(inputs: Mod_Knowledge_Faq_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`質問を追加`)
};

/**
* | output |
* | --- |
* | "Add a question" |
*
* @param {Mod_Knowledge_Faq_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_faq_add = /** @type {((inputs?: Mod_Knowledge_Faq_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Faq_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_faq_add(inputs)
	if (locale === "de") return de_mod_knowledge_faq_add(inputs)
	if (locale === "fr") return fr_mod_knowledge_faq_add(inputs)
	if (locale === "it") return it_mod_knowledge_faq_add(inputs)
	if (locale === "nl") return nl_mod_knowledge_faq_add(inputs)
	if (locale === "pl") return pl_mod_knowledge_faq_add(inputs)
	if (locale === "pt") return pt_mod_knowledge_faq_add(inputs)
	if (locale === "ru") return ru_mod_knowledge_faq_add(inputs)
	if (locale === "sv") return sv_mod_knowledge_faq_add(inputs)
	if (locale === "tr") return tr_mod_knowledge_faq_add(inputs)
	if (locale === "zh") return zh_mod_knowledge_faq_add(inputs)
	if (locale === "ja") return ja_mod_knowledge_faq_add(inputs)
	return en_mod_knowledge_faq_add(inputs)
});
