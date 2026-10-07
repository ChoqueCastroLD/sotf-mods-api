/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Sort_BusiestInputs */

const en_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busiest first`)
};

const es_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más activas primero`)
};

const de_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Last zuerst`)
};

const fr_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus chargées d'abord`)
};

const it_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più cariche prima`)
};

const nl_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drukste eerst`)
};

const pl_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najbardziej obciążone najpierw`)
};

const pt_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais ocupadas primeiro`)
};

const ru_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала самые загруженные`)
};

const sv_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest belastade först`)
};

const tr_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yoğun önce`)
};

const zh_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最繁忙优先`)
};

const ja_admin_ops_sort_busiest = /** @type {(inputs: Admin_Ops_Sort_BusiestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`負荷が高い順`)
};

/**
* | output |
* | --- |
* | "Busiest first" |
*
* @param {Admin_Ops_Sort_BusiestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_sort_busiest = /** @type {((inputs?: Admin_Ops_Sort_BusiestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Sort_BusiestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_sort_busiest(inputs)
	if (locale === "de") return de_admin_ops_sort_busiest(inputs)
	if (locale === "fr") return fr_admin_ops_sort_busiest(inputs)
	if (locale === "it") return it_admin_ops_sort_busiest(inputs)
	if (locale === "nl") return nl_admin_ops_sort_busiest(inputs)
	if (locale === "pl") return pl_admin_ops_sort_busiest(inputs)
	if (locale === "pt") return pt_admin_ops_sort_busiest(inputs)
	if (locale === "ru") return ru_admin_ops_sort_busiest(inputs)
	if (locale === "sv") return sv_admin_ops_sort_busiest(inputs)
	if (locale === "tr") return tr_admin_ops_sort_busiest(inputs)
	if (locale === "zh") return zh_admin_ops_sort_busiest(inputs)
	if (locale === "ja") return ja_admin_ops_sort_busiest(inputs)
	return en_admin_ops_sort_busiest(inputs)
});
