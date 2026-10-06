/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Show_AllInputs */

const en_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show all notifications`)
};

const es_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todas las notificaciones`)
};

const de_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Benachrichtigungen anzeigen`)
};

const fr_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher toutes les notifications`)
};

const it_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra tutte le notifiche`)
};

const nl_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle meldingen tonen`)
};

const pl_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż wszystkie powiadomienia`)
};

const pt_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar todas as notificações`)
};

const ru_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать все уведомления`)
};

const sv_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa alla aviseringar`)
};

const tr_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm bildirimleri göster`)
};

const zh_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示全部通知`)
};

const ja_signals_show_all = /** @type {(inputs: Signals_Show_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての通知を表示`)
};

/**
* | output |
* | --- |
* | "Show all notifications" |
*
* @param {Signals_Show_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_show_all = /** @type {((inputs?: Signals_Show_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Show_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_show_all(inputs)
	if (locale === "de") return de_signals_show_all(inputs)
	if (locale === "fr") return fr_signals_show_all(inputs)
	if (locale === "it") return it_signals_show_all(inputs)
	if (locale === "nl") return nl_signals_show_all(inputs)
	if (locale === "pl") return pl_signals_show_all(inputs)
	if (locale === "pt") return pt_signals_show_all(inputs)
	if (locale === "ru") return ru_signals_show_all(inputs)
	if (locale === "sv") return sv_signals_show_all(inputs)
	if (locale === "tr") return tr_signals_show_all(inputs)
	if (locale === "zh") return zh_signals_show_all(inputs)
	if (locale === "ja") return ja_signals_show_all(inputs)
	return en_signals_show_all(inputs)
});
