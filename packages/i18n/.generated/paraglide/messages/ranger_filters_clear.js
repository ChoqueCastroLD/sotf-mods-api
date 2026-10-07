/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filters_ClearInputs */

const en_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear filters`)
};

const es_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar filtros`)
};

const de_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter zurücksetzen`)
};

const fr_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer les filtres`)
};

const it_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi i filtri`)
};

const nl_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters wissen`)
};

const pl_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść filtry`)
};

const pt_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar filtros`)
};

const ru_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросить фильтры`)
};

const sv_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa filter`)
};

const tr_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreleri temizle`)
};

const zh_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除筛选`)
};

const ja_ranger_filters_clear = /** @type {(inputs: Ranger_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィルターを解除`)
};

/**
* | output |
* | --- |
* | "Clear filters" |
*
* @param {Ranger_Filters_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filters_clear = /** @type {((inputs?: Ranger_Filters_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filters_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filters_clear(inputs)
	if (locale === "de") return de_ranger_filters_clear(inputs)
	if (locale === "fr") return fr_ranger_filters_clear(inputs)
	if (locale === "it") return it_ranger_filters_clear(inputs)
	if (locale === "nl") return nl_ranger_filters_clear(inputs)
	if (locale === "pl") return pl_ranger_filters_clear(inputs)
	if (locale === "pt") return pt_ranger_filters_clear(inputs)
	if (locale === "ru") return ru_ranger_filters_clear(inputs)
	if (locale === "sv") return sv_ranger_filters_clear(inputs)
	if (locale === "tr") return tr_ranger_filters_clear(inputs)
	if (locale === "zh") return zh_ranger_filters_clear(inputs)
	if (locale === "ja") return ja_ranger_filters_clear(inputs)
	return en_ranger_filters_clear(inputs)
});
