/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_SendInputs */

const en_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send reply`)
};

const es_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar respuesta`)
};

const de_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort senden`)
};

const fr_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer la réponse`)
};

const it_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia la risposta`)
};

const nl_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoord versturen`)
};

const pl_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij odpowiedź`)
};

const pt_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar resposta`)
};

const ru_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить ответ`)
};

const sv_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka svar`)
};

const tr_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtı gönder`)
};

const zh_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送回复`)
};

const ja_basecamp_inbox_send = /** @type {(inputs: Basecamp_Inbox_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を送信`)
};

/**
* | output |
* | --- |
* | "Send reply" |
*
* @param {Basecamp_Inbox_SendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_send = /** @type {((inputs?: Basecamp_Inbox_SendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_SendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_send(inputs)
	if (locale === "de") return de_basecamp_inbox_send(inputs)
	if (locale === "fr") return fr_basecamp_inbox_send(inputs)
	if (locale === "it") return it_basecamp_inbox_send(inputs)
	if (locale === "nl") return nl_basecamp_inbox_send(inputs)
	if (locale === "pl") return pl_basecamp_inbox_send(inputs)
	if (locale === "pt") return pt_basecamp_inbox_send(inputs)
	if (locale === "ru") return ru_basecamp_inbox_send(inputs)
	if (locale === "sv") return sv_basecamp_inbox_send(inputs)
	if (locale === "tr") return tr_basecamp_inbox_send(inputs)
	if (locale === "zh") return zh_basecamp_inbox_send(inputs)
	if (locale === "ja") return ja_basecamp_inbox_send(inputs)
	return en_basecamp_inbox_send(inputs)
});
