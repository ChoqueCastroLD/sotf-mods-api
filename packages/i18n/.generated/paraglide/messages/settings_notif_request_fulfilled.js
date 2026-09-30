/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Request_FulfilledInputs */

const en_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request fulfilled`)
};

const es_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Petición cumplida`)
};

const de_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anfrage erfüllt`)
};

const fr_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demande satisfaite`)
};

const it_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiesta soddisfatta`)
};

const nl_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek vervuld`)
};

const pl_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba spełniona`)
};

const pt_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedido cumprido`)
};

const ru_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос выполнен`)
};

const sv_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förfrågan uppfylld`)
};

const tr_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek karşılandı`)
};

const zh_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求已完成`)
};

const ja_settings_notif_request_fulfilled = /** @type {(inputs: Settings_Notif_Request_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストが実現しました`)
};

/**
* | output |
* | --- |
* | "Request fulfilled" |
*
* @param {Settings_Notif_Request_FulfilledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_request_fulfilled = /** @type {((inputs?: Settings_Notif_Request_FulfilledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Request_FulfilledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_request_fulfilled(inputs)
	if (locale === "de") return de_settings_notif_request_fulfilled(inputs)
	if (locale === "fr") return fr_settings_notif_request_fulfilled(inputs)
	if (locale === "it") return it_settings_notif_request_fulfilled(inputs)
	if (locale === "nl") return nl_settings_notif_request_fulfilled(inputs)
	if (locale === "pl") return pl_settings_notif_request_fulfilled(inputs)
	if (locale === "pt") return pt_settings_notif_request_fulfilled(inputs)
	if (locale === "ru") return ru_settings_notif_request_fulfilled(inputs)
	if (locale === "sv") return sv_settings_notif_request_fulfilled(inputs)
	if (locale === "tr") return tr_settings_notif_request_fulfilled(inputs)
	if (locale === "zh") return zh_settings_notif_request_fulfilled(inputs)
	if (locale === "ja") return ja_settings_notif_request_fulfilled(inputs)
	return en_settings_notif_request_fulfilled(inputs)
});
