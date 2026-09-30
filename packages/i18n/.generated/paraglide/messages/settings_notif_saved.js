/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_SavedInputs */

const en_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification settings saved`)
};

const es_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes de notificaciones guardados`)
};

const de_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungseinstellungen gespeichert`)
};

const fr_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres de notification enregistrés`)
};

const it_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni delle notifiche salvate`)
};

const nl_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingsinstellingen opgeslagen`)
};

const pl_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano ustawienia powiadomień`)
};

const pt_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações de notificação salvas`)
};

const ru_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки уведомлений сохранены`)
};

const sv_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviseringsinställningarna sparade`)
};

const tr_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirim ayarları kaydedildi`)
};

const zh_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知设置已保存`)
};

const ja_settings_notif_saved = /** @type {(inputs: Settings_Notif_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知設定を保存しました`)
};

/**
* | output |
* | --- |
* | "Notification settings saved" |
*
* @param {Settings_Notif_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_saved = /** @type {((inputs?: Settings_Notif_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_saved(inputs)
	if (locale === "de") return de_settings_notif_saved(inputs)
	if (locale === "fr") return fr_settings_notif_saved(inputs)
	if (locale === "it") return it_settings_notif_saved(inputs)
	if (locale === "nl") return nl_settings_notif_saved(inputs)
	if (locale === "pl") return pl_settings_notif_saved(inputs)
	if (locale === "pt") return pt_settings_notif_saved(inputs)
	if (locale === "ru") return ru_settings_notif_saved(inputs)
	if (locale === "sv") return sv_settings_notif_saved(inputs)
	if (locale === "tr") return tr_settings_notif_saved(inputs)
	if (locale === "zh") return zh_settings_notif_saved(inputs)
	if (locale === "ja") return ja_settings_notif_saved(inputs)
	return en_settings_notif_saved(inputs)
});
