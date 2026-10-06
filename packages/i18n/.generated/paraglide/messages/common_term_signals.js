/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_SignalsInputs */

const en_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const es_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones`)
};

const de_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungen`)
};

const fr_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const it_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifiche`)
};

const nl_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen`)
};

const pl_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiadomienia`)
};

const pt_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações`)
};

const ru_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уведомления`)
};

const sv_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviseringar`)
};

const tr_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimler`)
};

const zh_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const ja_common_term_signals = /** @type {(inputs: Common_Term_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

/**
* | output |
* | --- |
* | "Notifications" |
*
* @param {Common_Term_SignalsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_signals = /** @type {((inputs?: Common_Term_SignalsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_SignalsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_signals(inputs)
	if (locale === "de") return de_common_term_signals(inputs)
	if (locale === "fr") return fr_common_term_signals(inputs)
	if (locale === "it") return it_common_term_signals(inputs)
	if (locale === "nl") return nl_common_term_signals(inputs)
	if (locale === "pl") return pl_common_term_signals(inputs)
	if (locale === "pt") return pt_common_term_signals(inputs)
	if (locale === "ru") return ru_common_term_signals(inputs)
	if (locale === "sv") return sv_common_term_signals(inputs)
	if (locale === "tr") return tr_common_term_signals(inputs)
	if (locale === "zh") return zh_common_term_signals(inputs)
	if (locale === "ja") return ja_common_term_signals(inputs)
	return en_common_term_signals(inputs)
});
