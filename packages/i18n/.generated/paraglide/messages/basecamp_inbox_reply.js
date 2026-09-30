/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_ReplyInputs */

const en_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply`)
};

const es_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder`)
};

const de_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antworten`)
};

const fr_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répondre`)
};

const it_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rispondi`)
};

const nl_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoorden`)
};

const pl_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedz`)
};

const pt_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder`)
};

const ru_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответить`)
};

const sv_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svara`)
};

const tr_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtla`)
};

const zh_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复`)
};

const ja_basecamp_inbox_reply = /** @type {(inputs: Basecamp_Inbox_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信`)
};

/**
* | output |
* | --- |
* | "Reply" |
*
* @param {Basecamp_Inbox_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_reply = /** @type {((inputs?: Basecamp_Inbox_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_reply(inputs)
	if (locale === "de") return de_basecamp_inbox_reply(inputs)
	if (locale === "fr") return fr_basecamp_inbox_reply(inputs)
	if (locale === "it") return it_basecamp_inbox_reply(inputs)
	if (locale === "nl") return nl_basecamp_inbox_reply(inputs)
	if (locale === "pl") return pl_basecamp_inbox_reply(inputs)
	if (locale === "pt") return pt_basecamp_inbox_reply(inputs)
	if (locale === "ru") return ru_basecamp_inbox_reply(inputs)
	if (locale === "sv") return sv_basecamp_inbox_reply(inputs)
	if (locale === "tr") return tr_basecamp_inbox_reply(inputs)
	if (locale === "zh") return zh_basecamp_inbox_reply(inputs)
	if (locale === "ja") return ja_basecamp_inbox_reply(inputs)
	return en_basecamp_inbox_reply(inputs)
});
