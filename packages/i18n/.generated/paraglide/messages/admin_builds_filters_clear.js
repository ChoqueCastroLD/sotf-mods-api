/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filters_ClearInputs */

const en_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear filters`)
};

const es_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar filtros`)
};

const de_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter zurücksetzen`)
};

const fr_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer les filtres`)
};

const it_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azzera i filtri`)
};

const nl_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters wissen`)
};

const pl_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść filtry`)
};

const pt_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar filtros`)
};

const ru_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросить фильтры`)
};

const sv_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa filter`)
};

const tr_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreleri temizle`)
};

const zh_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除筛选`)
};

const ja_admin_builds_filters_clear = /** @type {(inputs: Admin_Builds_Filters_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`絞り込みを解除`)
};

/**
* | output |
* | --- |
* | "Clear filters" |
*
* @param {Admin_Builds_Filters_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filters_clear = /** @type {((inputs?: Admin_Builds_Filters_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filters_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filters_clear(inputs)
	if (locale === "de") return de_admin_builds_filters_clear(inputs)
	if (locale === "fr") return fr_admin_builds_filters_clear(inputs)
	if (locale === "it") return it_admin_builds_filters_clear(inputs)
	if (locale === "nl") return nl_admin_builds_filters_clear(inputs)
	if (locale === "pl") return pl_admin_builds_filters_clear(inputs)
	if (locale === "pt") return pt_admin_builds_filters_clear(inputs)
	if (locale === "ru") return ru_admin_builds_filters_clear(inputs)
	if (locale === "sv") return sv_admin_builds_filters_clear(inputs)
	if (locale === "tr") return tr_admin_builds_filters_clear(inputs)
	if (locale === "zh") return zh_admin_builds_filters_clear(inputs)
	if (locale === "ja") return ja_admin_builds_filters_clear(inputs)
	return en_admin_builds_filters_clear(inputs)
});
