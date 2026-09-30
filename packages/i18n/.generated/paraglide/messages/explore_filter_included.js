/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Filter_IncludedInputs */

const en_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`included`)
};

const es_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`incluido`)
};

const de_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`eingeschlossen`)
};

const fr_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`inclus`)
};

const it_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`incluso`)
};

const nl_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`inbegrepen`)
};

const pl_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`uwzględniony`)
};

const pt_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`incluído`)
};

const ru_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`включено`)
};

const sv_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`inkluderad`)
};

const tr_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`dahil`)
};

const zh_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已包含`)
};

const ja_explore_filter_included = /** @type {(inputs: Explore_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`含む`)
};

/**
* | output |
* | --- |
* | "included" |
*
* @param {Explore_Filter_IncludedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filter_included = /** @type {((inputs?: Explore_Filter_IncludedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_IncludedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filter_included(inputs)
	if (locale === "de") return de_explore_filter_included(inputs)
	if (locale === "fr") return fr_explore_filter_included(inputs)
	if (locale === "it") return it_explore_filter_included(inputs)
	if (locale === "nl") return nl_explore_filter_included(inputs)
	if (locale === "pl") return pl_explore_filter_included(inputs)
	if (locale === "pt") return pt_explore_filter_included(inputs)
	if (locale === "ru") return ru_explore_filter_included(inputs)
	if (locale === "sv") return sv_explore_filter_included(inputs)
	if (locale === "tr") return tr_explore_filter_included(inputs)
	if (locale === "zh") return zh_explore_filter_included(inputs)
	if (locale === "ja") return ja_explore_filter_included(inputs)
	return en_explore_filter_included(inputs)
});
