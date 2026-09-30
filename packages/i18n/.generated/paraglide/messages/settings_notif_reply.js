/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_ReplyInputs */

const en_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replies`)
};

const es_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respuestas`)
};

const de_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antworten`)
};

const fr_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réponses`)
};

const it_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risposte`)
};

const nl_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoorden`)
};

const pl_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedzi`)
};

const pt_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respostas`)
};

const ru_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответы`)
};

const sv_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svar`)
};

const tr_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtlar`)
};

const zh_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复`)
};

const ja_settings_notif_reply = /** @type {(inputs: Settings_Notif_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信`)
};

/**
* | output |
* | --- |
* | "Replies" |
*
* @param {Settings_Notif_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_reply = /** @type {((inputs?: Settings_Notif_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_reply(inputs)
	if (locale === "de") return de_settings_notif_reply(inputs)
	if (locale === "fr") return fr_settings_notif_reply(inputs)
	if (locale === "it") return it_settings_notif_reply(inputs)
	if (locale === "nl") return nl_settings_notif_reply(inputs)
	if (locale === "pl") return pl_settings_notif_reply(inputs)
	if (locale === "pt") return pt_settings_notif_reply(inputs)
	if (locale === "ru") return ru_settings_notif_reply(inputs)
	if (locale === "sv") return sv_settings_notif_reply(inputs)
	if (locale === "tr") return tr_settings_notif_reply(inputs)
	if (locale === "zh") return zh_settings_notif_reply(inputs)
	if (locale === "ja") return ja_settings_notif_reply(inputs)
	return en_settings_notif_reply(inputs)
});
