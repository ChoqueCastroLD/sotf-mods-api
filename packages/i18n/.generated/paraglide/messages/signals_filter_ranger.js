/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Filter_RangerInputs */

const en_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation`)
};

const es_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderación`)
};

const de_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation`)
};

const fr_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modération`)
};

const it_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderazione`)
};

const nl_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatie`)
};

const pl_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderacja`)
};

const pt_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderação`)
};

const ru_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модерация`)
};

const sv_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderering`)
};

const tr_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderasyon`)
};

const zh_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核`)
};

const ja_signals_filter_ranger = /** @type {(inputs: Signals_Filter_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーション`)
};

/**
* | output |
* | --- |
* | "Moderation" |
*
* @param {Signals_Filter_RangerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_filter_ranger = /** @type {((inputs?: Signals_Filter_RangerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Filter_RangerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_filter_ranger(inputs)
	if (locale === "de") return de_signals_filter_ranger(inputs)
	if (locale === "fr") return fr_signals_filter_ranger(inputs)
	if (locale === "it") return it_signals_filter_ranger(inputs)
	if (locale === "nl") return nl_signals_filter_ranger(inputs)
	if (locale === "pl") return pl_signals_filter_ranger(inputs)
	if (locale === "pt") return pt_signals_filter_ranger(inputs)
	if (locale === "ru") return ru_signals_filter_ranger(inputs)
	if (locale === "sv") return sv_signals_filter_ranger(inputs)
	if (locale === "tr") return tr_signals_filter_ranger(inputs)
	if (locale === "zh") return zh_signals_filter_ranger(inputs)
	if (locale === "ja") return ja_signals_filter_ranger(inputs)
	return en_signals_filter_ranger(inputs)
});
