/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_NotificationsInputs */

const en_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const es_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones`)
};

const de_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungen`)
};

const fr_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const it_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifiche`)
};

const nl_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen`)
};

const pl_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiadomienia`)
};

const pt_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações`)
};

const ru_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уведомления`)
};

const sv_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviseringar`)
};

const tr_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimler`)
};

const zh_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const ja_ui_notifications = /** @type {(inputs: Ui_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

/**
* | output |
* | --- |
* | "Notifications" |
*
* @param {Ui_NotificationsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_notifications = /** @type {((inputs?: Ui_NotificationsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_NotificationsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_notifications(inputs)
	if (locale === "de") return de_ui_notifications(inputs)
	if (locale === "fr") return fr_ui_notifications(inputs)
	if (locale === "it") return it_ui_notifications(inputs)
	if (locale === "nl") return nl_ui_notifications(inputs)
	if (locale === "pl") return pl_ui_notifications(inputs)
	if (locale === "pt") return pt_ui_notifications(inputs)
	if (locale === "ru") return ru_ui_notifications(inputs)
	if (locale === "sv") return sv_ui_notifications(inputs)
	if (locale === "tr") return tr_ui_notifications(inputs)
	if (locale === "zh") return zh_ui_notifications(inputs)
	if (locale === "ja") return ja_ui_notifications(inputs)
	return en_ui_notifications(inputs)
});
