/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Nav_NotificationsInputs */

const en_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const es_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones`)
};

const de_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungen`)
};

const fr_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const it_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifiche`)
};

const nl_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen`)
};

const pl_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiadomienia`)
};

const pt_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações`)
};

const ru_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уведомления`)
};

const sv_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviseringar`)
};

const tr_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimler`)
};

const zh_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const ja_shell_nav_notifications = /** @type {(inputs: Shell_Nav_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

/**
* | output |
* | --- |
* | "Notifications" |
*
* @param {Shell_Nav_NotificationsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_nav_notifications = /** @type {((inputs?: Shell_Nav_NotificationsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Nav_NotificationsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_nav_notifications(inputs)
	if (locale === "de") return de_shell_nav_notifications(inputs)
	if (locale === "fr") return fr_shell_nav_notifications(inputs)
	if (locale === "it") return it_shell_nav_notifications(inputs)
	if (locale === "nl") return nl_shell_nav_notifications(inputs)
	if (locale === "pl") return pl_shell_nav_notifications(inputs)
	if (locale === "pt") return pt_shell_nav_notifications(inputs)
	if (locale === "ru") return ru_shell_nav_notifications(inputs)
	if (locale === "sv") return sv_shell_nav_notifications(inputs)
	if (locale === "tr") return tr_shell_nav_notifications(inputs)
	if (locale === "zh") return zh_shell_nav_notifications(inputs)
	if (locale === "ja") return ja_shell_nav_notifications(inputs)
	return en_shell_nav_notifications(inputs)
});
