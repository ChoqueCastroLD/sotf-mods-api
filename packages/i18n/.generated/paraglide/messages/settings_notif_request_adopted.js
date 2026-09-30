/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Request_AdoptedInputs */

const en_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request adopted`)
};

const es_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Petición adoptada`)
};

const de_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anfrage übernommen`)
};

const fr_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demande adoptée`)
};

const it_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiesta adottata`)
};

const nl_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek geadopteerd`)
};

const pl_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba przejęta`)
};

const pt_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedido adotado`)
};

const ru_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос взят в работу`)
};

const sv_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förfrågan antagen`)
};

const tr_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek üstlenildi`)
};

const zh_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求已被认领`)
};

const ja_settings_notif_request_adopted = /** @type {(inputs: Settings_Notif_Request_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストが引き受けられました`)
};

/**
* | output |
* | --- |
* | "Request adopted" |
*
* @param {Settings_Notif_Request_AdoptedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_request_adopted = /** @type {((inputs?: Settings_Notif_Request_AdoptedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Request_AdoptedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_request_adopted(inputs)
	if (locale === "de") return de_settings_notif_request_adopted(inputs)
	if (locale === "fr") return fr_settings_notif_request_adopted(inputs)
	if (locale === "it") return it_settings_notif_request_adopted(inputs)
	if (locale === "nl") return nl_settings_notif_request_adopted(inputs)
	if (locale === "pl") return pl_settings_notif_request_adopted(inputs)
	if (locale === "pt") return pt_settings_notif_request_adopted(inputs)
	if (locale === "ru") return ru_settings_notif_request_adopted(inputs)
	if (locale === "sv") return sv_settings_notif_request_adopted(inputs)
	if (locale === "tr") return tr_settings_notif_request_adopted(inputs)
	if (locale === "zh") return zh_settings_notif_request_adopted(inputs)
	if (locale === "ja") return ja_settings_notif_request_adopted(inputs)
	return en_settings_notif_request_adopted(inputs)
});
