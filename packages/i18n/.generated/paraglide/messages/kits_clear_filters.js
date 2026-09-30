/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Clear_FiltersInputs */

const en_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear filters`)
};

const es_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar filtros`)
};

const de_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter entfernen`)
};

const fr_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer les filtres`)
};

const it_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi filtri`)
};

const nl_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters wissen`)
};

const pl_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść filtry`)
};

const pt_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar filtros`)
};

const ru_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросить фильтры`)
};

const sv_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa filter`)
};

const tr_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreleri temizle`)
};

const zh_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除筛选`)
};

const ja_kits_clear_filters = /** @type {(inputs: Kits_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`絞り込みを解除`)
};

/**
* | output |
* | --- |
* | "Clear filters" |
*
* @param {Kits_Clear_FiltersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_clear_filters = /** @type {((inputs?: Kits_Clear_FiltersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Clear_FiltersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_clear_filters(inputs)
	if (locale === "de") return de_kits_clear_filters(inputs)
	if (locale === "fr") return fr_kits_clear_filters(inputs)
	if (locale === "it") return it_kits_clear_filters(inputs)
	if (locale === "nl") return nl_kits_clear_filters(inputs)
	if (locale === "pl") return pl_kits_clear_filters(inputs)
	if (locale === "pt") return pt_kits_clear_filters(inputs)
	if (locale === "ru") return ru_kits_clear_filters(inputs)
	if (locale === "sv") return sv_kits_clear_filters(inputs)
	if (locale === "tr") return tr_kits_clear_filters(inputs)
	if (locale === "zh") return zh_kits_clear_filters(inputs)
	if (locale === "ja") return ja_kits_clear_filters(inputs)
	return en_kits_clear_filters(inputs)
});
