/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Open_SignalsInputs */

const en_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open notifications`)
};

const es_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir notificaciones`)
};

const de_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungen öffnen`)
};

const fr_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir les notifications`)
};

const it_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri le notifiche`)
};

const nl_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen openen`)
};

const pl_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz powiadomienia`)
};

const pt_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir notificações`)
};

const ru_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть уведомления`)
};

const sv_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna aviseringar`)
};

const tr_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimleri aç`)
};

const zh_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开通知`)
};

const ja_emails_notify_open_signals = /** @type {(inputs: Emails_Notify_Open_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知を開く`)
};

/**
* | output |
* | --- |
* | "Open notifications" |
*
* @param {Emails_Notify_Open_SignalsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_open_signals = /** @type {((inputs?: Emails_Notify_Open_SignalsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Open_SignalsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_open_signals(inputs)
	if (locale === "de") return de_emails_notify_open_signals(inputs)
	if (locale === "fr") return fr_emails_notify_open_signals(inputs)
	if (locale === "it") return it_emails_notify_open_signals(inputs)
	if (locale === "nl") return nl_emails_notify_open_signals(inputs)
	if (locale === "pl") return pl_emails_notify_open_signals(inputs)
	if (locale === "pt") return pt_emails_notify_open_signals(inputs)
	if (locale === "ru") return ru_emails_notify_open_signals(inputs)
	if (locale === "sv") return sv_emails_notify_open_signals(inputs)
	if (locale === "tr") return tr_emails_notify_open_signals(inputs)
	if (locale === "zh") return zh_emails_notify_open_signals(inputs)
	if (locale === "ja") return ja_emails_notify_open_signals(inputs)
	return en_emails_notify_open_signals(inputs)
});
