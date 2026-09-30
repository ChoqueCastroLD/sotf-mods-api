/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_CrumbInputs */

const en_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare`)
};

const es_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar`)
};

const de_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergleichen`)
};

const fr_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparer`)
};

const it_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confronta`)
};

const nl_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergelijken`)
};

const pl_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Porównaj`)
};

const pt_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar`)
};

const ru_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сравнить`)
};

const sv_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jämför`)
};

const tr_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karşılaştır`)
};

const zh_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对比`)
};

const ja_explore_compare_crumb = /** @type {(inputs: Explore_Compare_CrumbInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比較`)
};

/**
* | output |
* | --- |
* | "Compare" |
*
* @param {Explore_Compare_CrumbInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_crumb = /** @type {((inputs?: Explore_Compare_CrumbInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_CrumbInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_crumb(inputs)
	if (locale === "de") return de_explore_compare_crumb(inputs)
	if (locale === "fr") return fr_explore_compare_crumb(inputs)
	if (locale === "it") return it_explore_compare_crumb(inputs)
	if (locale === "nl") return nl_explore_compare_crumb(inputs)
	if (locale === "pl") return pl_explore_compare_crumb(inputs)
	if (locale === "pt") return pt_explore_compare_crumb(inputs)
	if (locale === "ru") return ru_explore_compare_crumb(inputs)
	if (locale === "sv") return sv_explore_compare_crumb(inputs)
	if (locale === "tr") return tr_explore_compare_crumb(inputs)
	if (locale === "zh") return zh_explore_compare_crumb(inputs)
	if (locale === "ja") return ja_explore_compare_crumb(inputs)
	return en_explore_compare_crumb(inputs)
});
