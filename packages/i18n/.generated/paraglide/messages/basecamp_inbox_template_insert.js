/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Template_InsertInputs */

const en_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert a saved reply`)
};

const es_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insertar una respuesta guardada`)
};

const de_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gespeicherte Antwort einfügen`)
};

const fr_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insérer une réponse enregistrée`)
};

const it_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci una risposta salvata`)
};

const nl_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgeslagen antwoord invoegen`)
};

const pl_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wstaw zapisaną odpowiedź`)
};

const pt_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserir uma resposta salva`)
};

const ru_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вставить сохранённый ответ`)
};

const sv_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Infoga ett sparat svar`)
};

const tr_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıtlı bir yanıt ekle`)
};

const zh_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`插入已保存的回复`)
};

const ja_basecamp_inbox_template_insert = /** @type {(inputs: Basecamp_Inbox_Template_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存した返信を挿入`)
};

/**
* | output |
* | --- |
* | "Insert a saved reply" |
*
* @param {Basecamp_Inbox_Template_InsertInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_template_insert = /** @type {((inputs?: Basecamp_Inbox_Template_InsertInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Template_InsertInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_template_insert(inputs)
	if (locale === "de") return de_basecamp_inbox_template_insert(inputs)
	if (locale === "fr") return fr_basecamp_inbox_template_insert(inputs)
	if (locale === "it") return it_basecamp_inbox_template_insert(inputs)
	if (locale === "nl") return nl_basecamp_inbox_template_insert(inputs)
	if (locale === "pl") return pl_basecamp_inbox_template_insert(inputs)
	if (locale === "pt") return pt_basecamp_inbox_template_insert(inputs)
	if (locale === "ru") return ru_basecamp_inbox_template_insert(inputs)
	if (locale === "sv") return sv_basecamp_inbox_template_insert(inputs)
	if (locale === "tr") return tr_basecamp_inbox_template_insert(inputs)
	if (locale === "zh") return zh_basecamp_inbox_template_insert(inputs)
	if (locale === "ja") return ja_basecamp_inbox_template_insert(inputs)
	return en_basecamp_inbox_template_insert(inputs)
});
