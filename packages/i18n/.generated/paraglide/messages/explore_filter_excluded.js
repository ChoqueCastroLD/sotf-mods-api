/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Filter_ExcludedInputs */

const en_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`excluded`)
};

const es_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`excluido`)
};

const de_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ausgeschlossen`)
};

const fr_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`exclu`)
};

const it_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`escluso`)
};

const nl_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`uitgesloten`)
};

const pl_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`wykluczony`)
};

const pt_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`excluído`)
};

const ru_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`исключено`)
};

const sv_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`utesluten`)
};

const tr_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`hariç`)
};

const zh_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已排除`)
};

const ja_explore_filter_excluded = /** @type {(inputs: Explore_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`除外`)
};

/**
* | output |
* | --- |
* | "excluded" |
*
* @param {Explore_Filter_ExcludedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filter_excluded = /** @type {((inputs?: Explore_Filter_ExcludedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_ExcludedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filter_excluded(inputs)
	if (locale === "de") return de_explore_filter_excluded(inputs)
	if (locale === "fr") return fr_explore_filter_excluded(inputs)
	if (locale === "it") return it_explore_filter_excluded(inputs)
	if (locale === "nl") return nl_explore_filter_excluded(inputs)
	if (locale === "pl") return pl_explore_filter_excluded(inputs)
	if (locale === "pt") return pt_explore_filter_excluded(inputs)
	if (locale === "ru") return ru_explore_filter_excluded(inputs)
	if (locale === "sv") return sv_explore_filter_excluded(inputs)
	if (locale === "tr") return tr_explore_filter_excluded(inputs)
	if (locale === "zh") return zh_explore_filter_excluded(inputs)
	if (locale === "ja") return ja_explore_filter_excluded(inputs)
	return en_explore_filter_excluded(inputs)
});
