/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_NoscriptInputs */

const en_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The console needs JavaScript. Turn it on to manage your mods, notifications and settings.`)
};

const es_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La consola necesita JavaScript. Actívalo para gestionar tus mods, tus notificaciones y tus ajustes.`)
};

const de_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Konsole braucht JavaScript. Aktiviere es, um deine Mods, Benachrichtigungen und Einstellungen zu verwalten.`)
};

const fr_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La console a besoin de JavaScript. Activez-le pour gérer vos mods, vos notifications et vos paramètres.`)
};

const it_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La console ha bisogno di JavaScript. Attivalo per gestire le tue mod, le notifiche e le impostazioni.`)
};

const nl_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De console heeft JavaScript nodig. Zet het aan om je mods, meldingen en instellingen te beheren.`)
};

const pl_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsola wymaga JavaScriptu. Włącz go, aby zarządzać modami, powiadomieniami i ustawieniami.`)
};

const pt_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O console precisa de JavaScript. Ative-o para gerenciar seus mods, notificações e configurações.`)
};

const ru_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для консоли нужен JavaScript. Включите его, чтобы управлять модами, уведомлениями и настройками.`)
};

const sv_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsolen behöver JavaScript. Slå på det för att hantera dina moddar, aviseringar och inställningar.`)
};

const tr_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsol için JavaScript gerekiyor. Modlarını, bildirimlerini ve ayarlarını yönetmek için JavaScript’i aç.`)
};

const zh_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制台需要 JavaScript。请开启它来管理你的模组、通知和设置。`)
};

const ja_console_noscript = /** @type {(inputs: Console_NoscriptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンソールには JavaScript が必要です。MOD、通知、設定を管理するには有効にしてください。`)
};

/**
* | output |
* | --- |
* | "The console needs JavaScript. Turn it on to manage your mods, notifications and settings." |
*
* @param {Console_NoscriptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_noscript = /** @type {((inputs?: Console_NoscriptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_NoscriptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_noscript(inputs)
	if (locale === "de") return de_console_noscript(inputs)
	if (locale === "fr") return fr_console_noscript(inputs)
	if (locale === "it") return it_console_noscript(inputs)
	if (locale === "nl") return nl_console_noscript(inputs)
	if (locale === "pl") return pl_console_noscript(inputs)
	if (locale === "pt") return pt_console_noscript(inputs)
	if (locale === "ru") return ru_console_noscript(inputs)
	if (locale === "sv") return sv_console_noscript(inputs)
	if (locale === "tr") return tr_console_noscript(inputs)
	if (locale === "zh") return zh_console_noscript(inputs)
	if (locale === "ja") return ja_console_noscript(inputs)
	return en_console_noscript(inputs)
});
