/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Filter_AllInputs */

const en_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const es_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo`)
};

const de_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout`)
};

const it_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti`)
};

const nl_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles`)
};

const pl_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko`)
};

const pt_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo`)
};

const ru_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все`)
};

const sv_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_signals_filter_all = /** @type {(inputs: Signals_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Signals_Filter_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_filter_all = /** @type {((inputs?: Signals_Filter_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Filter_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_filter_all(inputs)
	if (locale === "de") return de_signals_filter_all(inputs)
	if (locale === "fr") return fr_signals_filter_all(inputs)
	if (locale === "it") return it_signals_filter_all(inputs)
	if (locale === "nl") return nl_signals_filter_all(inputs)
	if (locale === "pl") return pl_signals_filter_all(inputs)
	if (locale === "pt") return pt_signals_filter_all(inputs)
	if (locale === "ru") return ru_signals_filter_all(inputs)
	if (locale === "sv") return sv_signals_filter_all(inputs)
	if (locale === "tr") return tr_signals_filter_all(inputs)
	if (locale === "zh") return zh_signals_filter_all(inputs)
	if (locale === "ja") return ja_signals_filter_all(inputs)
	return en_signals_filter_all(inputs)
});
