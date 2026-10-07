/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_State_UnreadInputs */

const en_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unread`)
};

const es_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin leer`)
};

const de_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ungelesen`)
};

const fr_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non lues`)
};

const it_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non lette`)
};

const nl_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongelezen`)
};

const pl_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieprzeczytane`)
};

const pt_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não lidas`)
};

const ru_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Непрочитанные`)
};

const sv_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olästa`)
};

const tr_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okunmamış`)
};

const zh_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未读`)
};

const ja_signals_state_unread = /** @type {(inputs: Signals_State_UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未読`)
};

/**
* | output |
* | --- |
* | "Unread" |
*
* @param {Signals_State_UnreadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_state_unread = /** @type {((inputs?: Signals_State_UnreadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_State_UnreadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_state_unread(inputs)
	if (locale === "de") return de_signals_state_unread(inputs)
	if (locale === "fr") return fr_signals_state_unread(inputs)
	if (locale === "it") return it_signals_state_unread(inputs)
	if (locale === "nl") return nl_signals_state_unread(inputs)
	if (locale === "pl") return pl_signals_state_unread(inputs)
	if (locale === "pt") return pt_signals_state_unread(inputs)
	if (locale === "ru") return ru_signals_state_unread(inputs)
	if (locale === "sv") return sv_signals_state_unread(inputs)
	if (locale === "tr") return tr_signals_state_unread(inputs)
	if (locale === "zh") return zh_signals_state_unread(inputs)
	if (locale === "ja") return ja_signals_state_unread(inputs)
	return en_signals_state_unread(inputs)
});
