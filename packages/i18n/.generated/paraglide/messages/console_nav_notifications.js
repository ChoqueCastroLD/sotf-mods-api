/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_NotificationsInputs */

const en_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const es_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones`)
};

const de_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungen`)
};

const fr_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const it_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifiche`)
};

const nl_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen`)
};

const pl_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiadomienia`)
};

const pt_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações`)
};

const ru_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уведомления`)
};

const sv_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviseringar`)
};

const tr_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimler`)
};

const zh_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const ja_console_nav_notifications = /** @type {(inputs: Console_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

/**
* | output |
* | --- |
* | "Notifications" |
*
* @param {Console_Nav_NotificationsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_notifications = /** @type {((inputs?: Console_Nav_NotificationsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_NotificationsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_notifications(inputs)
	if (locale === "de") return de_console_nav_notifications(inputs)
	if (locale === "fr") return fr_console_nav_notifications(inputs)
	if (locale === "it") return it_console_nav_notifications(inputs)
	if (locale === "nl") return nl_console_nav_notifications(inputs)
	if (locale === "pl") return pl_console_nav_notifications(inputs)
	if (locale === "pt") return pt_console_nav_notifications(inputs)
	if (locale === "ru") return ru_console_nav_notifications(inputs)
	if (locale === "sv") return sv_console_nav_notifications(inputs)
	if (locale === "tr") return tr_console_nav_notifications(inputs)
	if (locale === "zh") return zh_console_nav_notifications(inputs)
	if (locale === "ja") return ja_console_nav_notifications(inputs)
	return en_console_nav_notifications(inputs)
});
