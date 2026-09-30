/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Filter_MentionsInputs */

const en_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mentions`)
};

const es_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menciones`)
};

const de_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erwähnungen`)
};

const fr_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mentions`)
};

const it_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menzioni`)
};

const nl_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vermeldingen`)
};

const pl_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wzmianki`)
};

const pt_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menções`)
};

const ru_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Упоминания`)
};

const sv_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omnämnanden`)
};

const tr_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bahsedilmeler`)
};

const zh_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提及`)
};

const ja_signals_filter_mentions = /** @type {(inputs: Signals_Filter_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メンション`)
};

/**
* | output |
* | --- |
* | "Mentions" |
*
* @param {Signals_Filter_MentionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_filter_mentions = /** @type {((inputs?: Signals_Filter_MentionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Filter_MentionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_filter_mentions(inputs)
	if (locale === "de") return de_signals_filter_mentions(inputs)
	if (locale === "fr") return fr_signals_filter_mentions(inputs)
	if (locale === "it") return it_signals_filter_mentions(inputs)
	if (locale === "nl") return nl_signals_filter_mentions(inputs)
	if (locale === "pl") return pl_signals_filter_mentions(inputs)
	if (locale === "pt") return pt_signals_filter_mentions(inputs)
	if (locale === "ru") return ru_signals_filter_mentions(inputs)
	if (locale === "sv") return sv_signals_filter_mentions(inputs)
	if (locale === "tr") return tr_signals_filter_mentions(inputs)
	if (locale === "zh") return zh_signals_filter_mentions(inputs)
	if (locale === "ja") return ja_signals_filter_mentions(inputs)
	return en_signals_filter_mentions(inputs)
});
