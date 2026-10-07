/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Clear_FiltersInputs */

const en_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear filters`)
};

const es_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar filtros`)
};

const de_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter zurücksetzen`)
};

const fr_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer les filtres`)
};

const it_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi i filtri`)
};

const nl_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters wissen`)
};

const pl_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść filtry`)
};

const pt_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar filtros`)
};

const ru_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросить фильтры`)
};

const sv_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa filter`)
};

const tr_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreleri temizle`)
};

const zh_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除筛选`)
};

const ja_me_clear_filters = /** @type {(inputs: Me_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`絞り込みを解除`)
};

/**
* | output |
* | --- |
* | "Clear filters" |
*
* @param {Me_Clear_FiltersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_clear_filters = /** @type {((inputs?: Me_Clear_FiltersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Clear_FiltersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_clear_filters(inputs)
	if (locale === "de") return de_me_clear_filters(inputs)
	if (locale === "fr") return fr_me_clear_filters(inputs)
	if (locale === "it") return it_me_clear_filters(inputs)
	if (locale === "nl") return nl_me_clear_filters(inputs)
	if (locale === "pl") return pl_me_clear_filters(inputs)
	if (locale === "pt") return pt_me_clear_filters(inputs)
	if (locale === "ru") return ru_me_clear_filters(inputs)
	if (locale === "sv") return sv_me_clear_filters(inputs)
	if (locale === "tr") return tr_me_clear_filters(inputs)
	if (locale === "zh") return zh_me_clear_filters(inputs)
	if (locale === "ja") return ja_me_clear_filters(inputs)
	return en_me_clear_filters(inputs)
});
