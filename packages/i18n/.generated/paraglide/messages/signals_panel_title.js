/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Panel_TitleInputs */

const en_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const es_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones`)
};

const de_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungen`)
};

const fr_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const it_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifiche`)
};

const nl_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen`)
};

const pl_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiadomienia`)
};

const pt_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações`)
};

const ru_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уведомления`)
};

const sv_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviseringar`)
};

const tr_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimler`)
};

const zh_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const ja_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

/**
* | output |
* | --- |
* | "Notifications" |
*
* @param {Signals_Panel_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_panel_title = /** @type {((inputs?: Signals_Panel_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Panel_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_panel_title(inputs)
	if (locale === "de") return de_signals_panel_title(inputs)
	if (locale === "fr") return fr_signals_panel_title(inputs)
	if (locale === "it") return it_signals_panel_title(inputs)
	if (locale === "nl") return nl_signals_panel_title(inputs)
	if (locale === "pl") return pl_signals_panel_title(inputs)
	if (locale === "pt") return pt_signals_panel_title(inputs)
	if (locale === "ru") return ru_signals_panel_title(inputs)
	if (locale === "sv") return sv_signals_panel_title(inputs)
	if (locale === "tr") return tr_signals_panel_title(inputs)
	if (locale === "zh") return zh_signals_panel_title(inputs)
	if (locale === "ja") return ja_signals_panel_title(inputs)
	return en_signals_panel_title(inputs)
});
