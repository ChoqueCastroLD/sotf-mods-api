/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Filters_ApplyInputs */

const en_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply filters`)
};

const es_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicar filtros`)
};

const de_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter anwenden`)
};

const fr_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appliquer les filtres`)
};

const it_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Applica i filtri`)
};

const nl_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters toepassen`)
};

const pl_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zastosuj filtry`)
};

const pt_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicar filtros`)
};

const ru_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Применить фильтры`)
};

const sv_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd filter`)
};

const tr_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreleri uygula`)
};

const zh_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用筛选`)
};

const ja_explore_filters_apply = /** @type {(inputs: Explore_Filters_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`絞り込みを適用`)
};

/**
* | output |
* | --- |
* | "Apply filters" |
*
* @param {Explore_Filters_ApplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filters_apply = /** @type {((inputs?: Explore_Filters_ApplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filters_ApplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filters_apply(inputs)
	if (locale === "de") return de_explore_filters_apply(inputs)
	if (locale === "fr") return fr_explore_filters_apply(inputs)
	if (locale === "it") return it_explore_filters_apply(inputs)
	if (locale === "nl") return nl_explore_filters_apply(inputs)
	if (locale === "pl") return pl_explore_filters_apply(inputs)
	if (locale === "pt") return pt_explore_filters_apply(inputs)
	if (locale === "ru") return ru_explore_filters_apply(inputs)
	if (locale === "sv") return sv_explore_filters_apply(inputs)
	if (locale === "tr") return tr_explore_filters_apply(inputs)
	if (locale === "zh") return zh_explore_filters_apply(inputs)
	if (locale === "ja") return ja_explore_filters_apply(inputs)
	return en_explore_filters_apply(inputs)
});
