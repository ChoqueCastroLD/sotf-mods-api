/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_FiltersInputs */

const en_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters`)
};

const es_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtros`)
};

const de_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter`)
};

const fr_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtres`)
};

const it_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtri`)
};

const nl_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters`)
};

const pl_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtry`)
};

const pt_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtros`)
};

const ru_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтры`)
};

const sv_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter`)
};

const tr_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreler`)
};

const zh_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选`)
};

const ja_ranger_filters = /** @type {(inputs: Ranger_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィルター`)
};

/**
* | output |
* | --- |
* | "Filters" |
*
* @param {Ranger_FiltersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filters = /** @type {((inputs?: Ranger_FiltersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_FiltersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filters(inputs)
	if (locale === "de") return de_ranger_filters(inputs)
	if (locale === "fr") return fr_ranger_filters(inputs)
	if (locale === "it") return it_ranger_filters(inputs)
	if (locale === "nl") return nl_ranger_filters(inputs)
	if (locale === "pl") return pl_ranger_filters(inputs)
	if (locale === "pt") return pt_ranger_filters(inputs)
	if (locale === "ru") return ru_ranger_filters(inputs)
	if (locale === "sv") return sv_ranger_filters(inputs)
	if (locale === "tr") return tr_ranger_filters(inputs)
	if (locale === "zh") return zh_ranger_filters(inputs)
	if (locale === "ja") return ja_ranger_filters(inputs)
	return en_ranger_filters(inputs)
});
