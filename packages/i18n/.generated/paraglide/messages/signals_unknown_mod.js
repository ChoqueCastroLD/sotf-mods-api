/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Unknown_ModInputs */

const en_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a mod`)
};

const es_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`un mod`)
};

const de_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ein Mod`)
};

const fr_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`un mod`)
};

const it_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`una mod`)
};

const nl_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`een mod`)
};

const pl_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mod`)
};

const pt_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`um mod`)
};

const ru_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`мод`)
};

const sv_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`en modd`)
};

const tr_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bir mod`)
};

const zh_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`某个模组`)
};

const ja_signals_unknown_mod = /** @type {(inputs: Signals_Unknown_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あるMOD`)
};

/**
* | output |
* | --- |
* | "a mod" |
*
* @param {Signals_Unknown_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_unknown_mod = /** @type {((inputs?: Signals_Unknown_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Unknown_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_unknown_mod(inputs)
	if (locale === "de") return de_signals_unknown_mod(inputs)
	if (locale === "fr") return fr_signals_unknown_mod(inputs)
	if (locale === "it") return it_signals_unknown_mod(inputs)
	if (locale === "nl") return nl_signals_unknown_mod(inputs)
	if (locale === "pl") return pl_signals_unknown_mod(inputs)
	if (locale === "pt") return pt_signals_unknown_mod(inputs)
	if (locale === "ru") return ru_signals_unknown_mod(inputs)
	if (locale === "sv") return sv_signals_unknown_mod(inputs)
	if (locale === "tr") return tr_signals_unknown_mod(inputs)
	if (locale === "zh") return zh_signals_unknown_mod(inputs)
	if (locale === "ja") return ja_signals_unknown_mod(inputs)
	return en_signals_unknown_mod(inputs)
});
