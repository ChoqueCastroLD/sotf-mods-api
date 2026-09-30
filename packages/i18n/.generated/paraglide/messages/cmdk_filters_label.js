/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Filters_LabelInputs */

const en_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters`)
};

const es_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtros`)
};

const de_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter`)
};

const fr_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtres`)
};

const it_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtri`)
};

const nl_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters`)
};

const pl_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtry`)
};

const pt_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtros`)
};

const ru_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтры`)
};

const sv_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter`)
};

const tr_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreler`)
};

const zh_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选`)
};

const ja_cmdk_filters_label = /** @type {(inputs: Cmdk_Filters_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィルター`)
};

/**
* | output |
* | --- |
* | "Filters" |
*
* @param {Cmdk_Filters_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_filters_label = /** @type {((inputs?: Cmdk_Filters_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Filters_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_filters_label(inputs)
	if (locale === "de") return de_cmdk_filters_label(inputs)
	if (locale === "fr") return fr_cmdk_filters_label(inputs)
	if (locale === "it") return it_cmdk_filters_label(inputs)
	if (locale === "nl") return nl_cmdk_filters_label(inputs)
	if (locale === "pl") return pl_cmdk_filters_label(inputs)
	if (locale === "pt") return pt_cmdk_filters_label(inputs)
	if (locale === "ru") return ru_cmdk_filters_label(inputs)
	if (locale === "sv") return sv_cmdk_filters_label(inputs)
	if (locale === "tr") return tr_cmdk_filters_label(inputs)
	if (locale === "zh") return zh_cmdk_filters_label(inputs)
	if (locale === "ja") return ja_cmdk_filters_label(inputs)
	return en_cmdk_filters_label(inputs)
});
