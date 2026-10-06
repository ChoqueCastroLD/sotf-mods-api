/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Page_ReadoutInputs */

const en_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const es_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones`)
};

const de_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungen`)
};

const fr_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const it_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifiche`)
};

const nl_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen`)
};

const pl_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiadomienia`)
};

const pt_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações`)
};

const ru_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уведомления`)
};

const sv_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviseringar`)
};

const tr_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimler`)
};

const zh_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const ja_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

/**
* | output |
* | --- |
* | "Notifications" |
*
* @param {Signals_Page_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_page_readout = /** @type {((inputs?: Signals_Page_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Page_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_page_readout(inputs)
	if (locale === "de") return de_signals_page_readout(inputs)
	if (locale === "fr") return fr_signals_page_readout(inputs)
	if (locale === "it") return it_signals_page_readout(inputs)
	if (locale === "nl") return nl_signals_page_readout(inputs)
	if (locale === "pl") return pl_signals_page_readout(inputs)
	if (locale === "pt") return pt_signals_page_readout(inputs)
	if (locale === "ru") return ru_signals_page_readout(inputs)
	if (locale === "sv") return sv_signals_page_readout(inputs)
	if (locale === "tr") return tr_signals_page_readout(inputs)
	if (locale === "zh") return zh_signals_page_readout(inputs)
	if (locale === "ja") return ja_signals_page_readout(inputs)
	return en_signals_page_readout(inputs)
});
