/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Kit_ReplyInputs */

const en_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply on a kit`)
};

const es_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respuesta en un kit`)
};

const de_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort bei einem Kit`)
};

const fr_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réponse sur un kit`)
};

const it_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risposta su un kit`)
};

const nl_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoord bij een kit`)
};

const pl_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedź w zestawie`)
};

const pt_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resposta em um kit`)
};

const ru_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответ в наборе`)
};

const sv_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svar på ett kit`)
};

const tr_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitte yanıt`)
};

const zh_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套件中的回复`)
};

const ja_settings_notif_kit_reply = /** @type {(inputs: Settings_Notif_Kit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットでの返信`)
};

/**
* | output |
* | --- |
* | "Reply on a kit" |
*
* @param {Settings_Notif_Kit_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_kit_reply = /** @type {((inputs?: Settings_Notif_Kit_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Kit_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_kit_reply(inputs)
	if (locale === "de") return de_settings_notif_kit_reply(inputs)
	if (locale === "fr") return fr_settings_notif_kit_reply(inputs)
	if (locale === "it") return it_settings_notif_kit_reply(inputs)
	if (locale === "nl") return nl_settings_notif_kit_reply(inputs)
	if (locale === "pl") return pl_settings_notif_kit_reply(inputs)
	if (locale === "pt") return pt_settings_notif_kit_reply(inputs)
	if (locale === "ru") return ru_settings_notif_kit_reply(inputs)
	if (locale === "sv") return sv_settings_notif_kit_reply(inputs)
	if (locale === "tr") return tr_settings_notif_kit_reply(inputs)
	if (locale === "zh") return zh_settings_notif_kit_reply(inputs)
	if (locale === "ja") return ja_settings_notif_kit_reply(inputs)
	return en_settings_notif_kit_reply(inputs)
});
