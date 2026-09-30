/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Clear_FiltersInputs */

const en_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear filters`)
};

const es_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar filtros`)
};

const de_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter zurücksetzen`)
};

const fr_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer les filtres`)
};

const it_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi i filtri`)
};

const nl_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters wissen`)
};

const pl_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść filtry`)
};

const pt_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar filtros`)
};

const ru_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросить фильтры`)
};

const sv_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa filter`)
};

const tr_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreleri temizle`)
};

const zh_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除筛选`)
};

const ja_basecamp_mods_clear_filters = /** @type {(inputs: Basecamp_Mods_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィルターをクリア`)
};

/**
* | output |
* | --- |
* | "Clear filters" |
*
* @param {Basecamp_Mods_Clear_FiltersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_clear_filters = /** @type {((inputs?: Basecamp_Mods_Clear_FiltersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Clear_FiltersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_clear_filters(inputs)
	if (locale === "de") return de_basecamp_mods_clear_filters(inputs)
	if (locale === "fr") return fr_basecamp_mods_clear_filters(inputs)
	if (locale === "it") return it_basecamp_mods_clear_filters(inputs)
	if (locale === "nl") return nl_basecamp_mods_clear_filters(inputs)
	if (locale === "pl") return pl_basecamp_mods_clear_filters(inputs)
	if (locale === "pt") return pt_basecamp_mods_clear_filters(inputs)
	if (locale === "ru") return ru_basecamp_mods_clear_filters(inputs)
	if (locale === "sv") return sv_basecamp_mods_clear_filters(inputs)
	if (locale === "tr") return tr_basecamp_mods_clear_filters(inputs)
	if (locale === "zh") return zh_basecamp_mods_clear_filters(inputs)
	if (locale === "ja") return ja_basecamp_mods_clear_filters(inputs)
	return en_basecamp_mods_clear_filters(inputs)
});
