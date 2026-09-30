/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Reviews_Sort_CriticalInputs */

const en_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Critical`)
};

const es_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Críticas`)
};

const de_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kritische`)
};

const fr_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Critiques`)
};

const it_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Critiche`)
};

const nl_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kritisch`)
};

const pl_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krytyczne`)
};

const pt_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Críticas`)
};

const ru_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Критические`)
};

const sv_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kritiska`)
};

const tr_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eleştirel`)
};

const zh_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`差评`)
};

const ja_mod_reviews_sort_critical = /** @type {(inputs: Mod_Reviews_Sort_CriticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`低評価`)
};

/**
* | output |
* | --- |
* | "Critical" |
*
* @param {Mod_Reviews_Sort_CriticalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_sort_critical = /** @type {((inputs?: Mod_Reviews_Sort_CriticalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_Sort_CriticalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_sort_critical(inputs)
	if (locale === "de") return de_mod_reviews_sort_critical(inputs)
	if (locale === "fr") return fr_mod_reviews_sort_critical(inputs)
	if (locale === "it") return it_mod_reviews_sort_critical(inputs)
	if (locale === "nl") return nl_mod_reviews_sort_critical(inputs)
	if (locale === "pl") return pl_mod_reviews_sort_critical(inputs)
	if (locale === "pt") return pt_mod_reviews_sort_critical(inputs)
	if (locale === "ru") return ru_mod_reviews_sort_critical(inputs)
	if (locale === "sv") return sv_mod_reviews_sort_critical(inputs)
	if (locale === "tr") return tr_mod_reviews_sort_critical(inputs)
	if (locale === "zh") return zh_mod_reviews_sort_critical(inputs)
	if (locale === "ja") return ja_mod_reviews_sort_critical(inputs)
	return en_mod_reviews_sort_critical(inputs)
});
