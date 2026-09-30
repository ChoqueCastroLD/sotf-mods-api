/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Unread_PrefixInputs */

const en_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unread:`)
};

const es_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin leer:`)
};

const de_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ungelesen:`)
};

const fr_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non lu :`)
};

const it_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da leggere:`)
};

const nl_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongelezen:`)
};

const pl_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieprzeczytane:`)
};

const pt_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não lido:`)
};

const ru_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не прочитано:`)
};

const sv_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oläst:`)
};

const tr_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okunmamış:`)
};

const zh_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未读：`)
};

const ja_signals_unread_prefix = /** @type {(inputs: Signals_Unread_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未読：`)
};

/**
* | output |
* | --- |
* | "Unread:" |
*
* @param {Signals_Unread_PrefixInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_unread_prefix = /** @type {((inputs?: Signals_Unread_PrefixInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Unread_PrefixInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_unread_prefix(inputs)
	if (locale === "de") return de_signals_unread_prefix(inputs)
	if (locale === "fr") return fr_signals_unread_prefix(inputs)
	if (locale === "it") return it_signals_unread_prefix(inputs)
	if (locale === "nl") return nl_signals_unread_prefix(inputs)
	if (locale === "pl") return pl_signals_unread_prefix(inputs)
	if (locale === "pt") return pt_signals_unread_prefix(inputs)
	if (locale === "ru") return ru_signals_unread_prefix(inputs)
	if (locale === "sv") return sv_signals_unread_prefix(inputs)
	if (locale === "tr") return tr_signals_unread_prefix(inputs)
	if (locale === "zh") return zh_signals_unread_prefix(inputs)
	if (locale === "ja") return ja_signals_unread_prefix(inputs)
	return en_signals_unread_prefix(inputs)
});
