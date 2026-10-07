/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_State_AllInputs */

const en_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const es_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas`)
};

const de_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes`)
};

const it_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte`)
};

const nl_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const pl_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie`)
};

const pt_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas`)
};

const ru_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все`)
};

const sv_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_signals_state_all = /** @type {(inputs: Signals_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Signals_State_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_state_all = /** @type {((inputs?: Signals_State_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_State_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_state_all(inputs)
	if (locale === "de") return de_signals_state_all(inputs)
	if (locale === "fr") return fr_signals_state_all(inputs)
	if (locale === "it") return it_signals_state_all(inputs)
	if (locale === "nl") return nl_signals_state_all(inputs)
	if (locale === "pl") return pl_signals_state_all(inputs)
	if (locale === "pt") return pt_signals_state_all(inputs)
	if (locale === "ru") return ru_signals_state_all(inputs)
	if (locale === "sv") return sv_signals_state_all(inputs)
	if (locale === "tr") return tr_signals_state_all(inputs)
	if (locale === "zh") return zh_signals_state_all(inputs)
	if (locale === "ja") return ja_signals_state_all(inputs)
	return en_signals_state_all(inputs)
});
