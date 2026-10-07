/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Sort_FailedInputs */

const en_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most failures`)
};

const es_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más fallos`)
};

const de_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Fehler`)
};

const fr_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus d'échecs`)
};

const it_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più errori`)
};

const nl_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meeste mislukkingen`)
};

const pl_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najwięcej błędów`)
};

const pt_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais falhas`)
};

const ru_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше всего сбоев`)
};

const sv_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flest fel`)
};

const tr_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok hata`)
};

const zh_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失败最多`)
};

const ja_admin_ops_sort_failed = /** @type {(inputs: Admin_Ops_Sort_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗が多い順`)
};

/**
* | output |
* | --- |
* | "Most failures" |
*
* @param {Admin_Ops_Sort_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_sort_failed = /** @type {((inputs?: Admin_Ops_Sort_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Sort_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_sort_failed(inputs)
	if (locale === "de") return de_admin_ops_sort_failed(inputs)
	if (locale === "fr") return fr_admin_ops_sort_failed(inputs)
	if (locale === "it") return it_admin_ops_sort_failed(inputs)
	if (locale === "nl") return nl_admin_ops_sort_failed(inputs)
	if (locale === "pl") return pl_admin_ops_sort_failed(inputs)
	if (locale === "pt") return pt_admin_ops_sort_failed(inputs)
	if (locale === "ru") return ru_admin_ops_sort_failed(inputs)
	if (locale === "sv") return sv_admin_ops_sort_failed(inputs)
	if (locale === "tr") return tr_admin_ops_sort_failed(inputs)
	if (locale === "zh") return zh_admin_ops_sort_failed(inputs)
	if (locale === "ja") return ja_admin_ops_sort_failed(inputs)
	return en_admin_ops_sort_failed(inputs)
});
