/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Edit_ReplyInputs */

const en_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change reply`)
};

const es_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar la respuesta`)
};

const de_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort ändern`)
};

const fr_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier la réponse`)
};

const it_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia la risposta`)
};

const nl_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoord wijzigen`)
};

const pl_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień odpowiedź`)
};

const pt_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterar a resposta`)
};

const ru_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить ответ`)
};

const sv_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändra svaret`)
};

const tr_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtı değiştir`)
};

const zh_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修改回复`)
};

const ja_basecamp_inbox_edit_reply = /** @type {(inputs: Basecamp_Inbox_Edit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を変更`)
};

/**
* | output |
* | --- |
* | "Change reply" |
*
* @param {Basecamp_Inbox_Edit_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_edit_reply = /** @type {((inputs?: Basecamp_Inbox_Edit_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Edit_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_edit_reply(inputs)
	if (locale === "de") return de_basecamp_inbox_edit_reply(inputs)
	if (locale === "fr") return fr_basecamp_inbox_edit_reply(inputs)
	if (locale === "it") return it_basecamp_inbox_edit_reply(inputs)
	if (locale === "nl") return nl_basecamp_inbox_edit_reply(inputs)
	if (locale === "pl") return pl_basecamp_inbox_edit_reply(inputs)
	if (locale === "pt") return pt_basecamp_inbox_edit_reply(inputs)
	if (locale === "ru") return ru_basecamp_inbox_edit_reply(inputs)
	if (locale === "sv") return sv_basecamp_inbox_edit_reply(inputs)
	if (locale === "tr") return tr_basecamp_inbox_edit_reply(inputs)
	if (locale === "zh") return zh_basecamp_inbox_edit_reply(inputs)
	if (locale === "ja") return ja_basecamp_inbox_edit_reply(inputs)
	return en_basecamp_inbox_edit_reply(inputs)
});
