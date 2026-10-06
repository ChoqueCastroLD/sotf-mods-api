/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Instant_HeadingInputs */

const en_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New notifications`)
};

const es_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones nuevas`)
};

const de_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Benachrichtigungen`)
};

const fr_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelles notifications`)
};

const it_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuove notifiche`)
};

const nl_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe meldingen`)
};

const pl_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe powiadomienia`)
};

const pt_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novas notificações`)
};

const ru_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые уведомления`)
};

const sv_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya aviseringar`)
};

const tr_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bildirimler`)
};

const zh_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新通知`)
};

const ja_emails_notify_instant_heading = /** @type {(inputs: Emails_Notify_Instant_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい通知`)
};

/**
* | output |
* | --- |
* | "New notifications" |
*
* @param {Emails_Notify_Instant_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_instant_heading = /** @type {((inputs?: Emails_Notify_Instant_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Instant_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_instant_heading(inputs)
	if (locale === "de") return de_emails_notify_instant_heading(inputs)
	if (locale === "fr") return fr_emails_notify_instant_heading(inputs)
	if (locale === "it") return it_emails_notify_instant_heading(inputs)
	if (locale === "nl") return nl_emails_notify_instant_heading(inputs)
	if (locale === "pl") return pl_emails_notify_instant_heading(inputs)
	if (locale === "pt") return pt_emails_notify_instant_heading(inputs)
	if (locale === "ru") return ru_emails_notify_instant_heading(inputs)
	if (locale === "sv") return sv_emails_notify_instant_heading(inputs)
	if (locale === "tr") return tr_emails_notify_instant_heading(inputs)
	if (locale === "zh") return zh_emails_notify_instant_heading(inputs)
	if (locale === "ja") return ja_emails_notify_instant_heading(inputs)
	return en_emails_notify_instant_heading(inputs)
});
