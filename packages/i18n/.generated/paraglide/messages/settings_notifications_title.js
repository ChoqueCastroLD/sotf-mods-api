/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notifications_TitleInputs */

const en_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const es_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones`)
};

const de_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungen`)
};

const fr_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const it_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifiche`)
};

const nl_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen`)
};

const pl_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiadomienia`)
};

const pt_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações`)
};

const ru_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уведомления`)
};

const sv_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviseringar`)
};

const tr_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimler`)
};

const zh_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const ja_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

/**
* | output |
* | --- |
* | "Notifications" |
*
* @param {Settings_Notifications_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notifications_title = /** @type {((inputs?: Settings_Notifications_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notifications_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notifications_title(inputs)
	if (locale === "de") return de_settings_notifications_title(inputs)
	if (locale === "fr") return fr_settings_notifications_title(inputs)
	if (locale === "it") return it_settings_notifications_title(inputs)
	if (locale === "nl") return nl_settings_notifications_title(inputs)
	if (locale === "pl") return pl_settings_notifications_title(inputs)
	if (locale === "pt") return pt_settings_notifications_title(inputs)
	if (locale === "ru") return ru_settings_notifications_title(inputs)
	if (locale === "sv") return sv_settings_notifications_title(inputs)
	if (locale === "tr") return tr_settings_notifications_title(inputs)
	if (locale === "zh") return zh_settings_notifications_title(inputs)
	if (locale === "ja") return ja_settings_notifications_title(inputs)
	return en_settings_notifications_title(inputs)
});
