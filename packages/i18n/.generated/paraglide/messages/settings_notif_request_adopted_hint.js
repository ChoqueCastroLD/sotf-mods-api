/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Request_Adopted_HintInputs */

const en_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A creator started working on your request.`)
};

const es_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un creador empezó a trabajar en tu petición.`)
};

const de_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Creator arbeitet jetzt an deiner Anfrage.`)
};

const fr_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un créateur a commencé à travailler sur votre demande.`)
};

const it_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un creator ha iniziato a lavorare alla tua richiesta.`)
};

const nl_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een maker is aan je verzoek begonnen.`)
};

const pl_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca zaczął pracować nad Twoją prośbą.`)
};

const pt_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um criador começou a trabalhar no teu pedido.`)
};

const ru_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор начал работать над вашим запросом.`)
};

const sv_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En skapare har börjat arbeta på din förfrågan.`)
};

const tr_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir geliştirici isteğin üzerinde çalışmaya başladı.`)
};

const zh_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一位创作者开始处理你的请求。`)
};

const ja_settings_notif_request_adopted_hint = /** @type {(inputs: Settings_Notif_Request_Adopted_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターがあなたのリクエストに取り組み始めました。`)
};

/**
* | output |
* | --- |
* | "A creator started working on your request." |
*
* @param {Settings_Notif_Request_Adopted_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_request_adopted_hint = /** @type {((inputs?: Settings_Notif_Request_Adopted_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Request_Adopted_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_request_adopted_hint(inputs)
	if (locale === "de") return de_settings_notif_request_adopted_hint(inputs)
	if (locale === "fr") return fr_settings_notif_request_adopted_hint(inputs)
	if (locale === "it") return it_settings_notif_request_adopted_hint(inputs)
	if (locale === "nl") return nl_settings_notif_request_adopted_hint(inputs)
	if (locale === "pl") return pl_settings_notif_request_adopted_hint(inputs)
	if (locale === "pt") return pt_settings_notif_request_adopted_hint(inputs)
	if (locale === "ru") return ru_settings_notif_request_adopted_hint(inputs)
	if (locale === "sv") return sv_settings_notif_request_adopted_hint(inputs)
	if (locale === "tr") return tr_settings_notif_request_adopted_hint(inputs)
	if (locale === "zh") return zh_settings_notif_request_adopted_hint(inputs)
	if (locale === "ja") return ja_settings_notif_request_adopted_hint(inputs)
	return en_settings_notif_request_adopted_hint(inputs)
});
