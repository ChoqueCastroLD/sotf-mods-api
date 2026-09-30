/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_PreferencesInputs */

const en_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification settings`)
};

const es_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes de notificaciones`)
};

const de_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungseinstellungen`)
};

const fr_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres des notifications`)
};

const it_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni delle notifiche`)
};

const nl_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingsinstellingen`)
};

const pl_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia powiadomień`)
};

const pt_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações de notificações`)
};

const ru_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки уведомлений`)
};

const sv_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviseringsinställningar`)
};

const tr_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirim ayarları`)
};

const zh_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知设置`)
};

const ja_signals_preferences = /** @type {(inputs: Signals_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知設定`)
};

/**
* | output |
* | --- |
* | "Notification settings" |
*
* @param {Signals_PreferencesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_preferences = /** @type {((inputs?: Signals_PreferencesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_PreferencesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_preferences(inputs)
	if (locale === "de") return de_signals_preferences(inputs)
	if (locale === "fr") return fr_signals_preferences(inputs)
	if (locale === "it") return it_signals_preferences(inputs)
	if (locale === "nl") return nl_signals_preferences(inputs)
	if (locale === "pl") return pl_signals_preferences(inputs)
	if (locale === "pt") return pt_signals_preferences(inputs)
	if (locale === "ru") return ru_signals_preferences(inputs)
	if (locale === "sv") return sv_signals_preferences(inputs)
	if (locale === "tr") return tr_signals_preferences(inputs)
	if (locale === "zh") return zh_signals_preferences(inputs)
	if (locale === "ja") return ja_signals_preferences(inputs)
	return en_signals_preferences(inputs)
});
