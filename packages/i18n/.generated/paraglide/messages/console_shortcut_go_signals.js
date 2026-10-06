/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcut_Go_SignalsInputs */

const en_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to Notifications`)
};

const es_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir a Notificaciones`)
};

const de_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu den Benachrichtigungen`)
};

const fr_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller aux notifications`)
};

const it_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai alle notifiche`)
};

const nl_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar Meldingen`)
};

const pl_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do powiadomień`)
};

const pt_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para Notificações`)
};

const ru_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти к уведомлениям`)
};

const sv_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå till Aviseringar`)
};

const tr_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimlere git`)
};

const zh_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往通知`)
};

const ja_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知へ移動`)
};

/**
* | output |
* | --- |
* | "Go to Notifications" |
*
* @param {Console_Shortcut_Go_SignalsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_shortcut_go_signals = /** @type {((inputs?: Console_Shortcut_Go_SignalsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcut_Go_SignalsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_shortcut_go_signals(inputs)
	if (locale === "de") return de_console_shortcut_go_signals(inputs)
	if (locale === "fr") return fr_console_shortcut_go_signals(inputs)
	if (locale === "it") return it_console_shortcut_go_signals(inputs)
	if (locale === "nl") return nl_console_shortcut_go_signals(inputs)
	if (locale === "pl") return pl_console_shortcut_go_signals(inputs)
	if (locale === "pt") return pt_console_shortcut_go_signals(inputs)
	if (locale === "ru") return ru_console_shortcut_go_signals(inputs)
	if (locale === "sv") return sv_console_shortcut_go_signals(inputs)
	if (locale === "tr") return tr_console_shortcut_go_signals(inputs)
	if (locale === "zh") return zh_console_shortcut_go_signals(inputs)
	if (locale === "ja") return ja_console_shortcut_go_signals(inputs)
	return en_console_shortcut_go_signals(inputs)
});
