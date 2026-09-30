/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Tpl_Filter_AllInputs */

const en_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`All (${i?.count})`)
};

const es_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Todas (${i?.count})`)
};

const de_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alle (${i?.count})`)
};

const fr_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tous (${i?.count})`)
};

const it_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tutti (${i?.count})`)
};

const nl_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alle (${i?.count})`)
};

const pl_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wszystkie (${i?.count})`)
};

const pt_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Todos (${i?.count})`)
};

const ru_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Все (${i?.count})`)
};

const sv_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alla (${i?.count})`)
};

const tr_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tümü (${i?.count})`)
};

const zh_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`全部（${i?.count}）`)
};

const ja_admin_tpl_filter_all = /** @type {(inputs: Admin_Tpl_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`すべて（${i?.count}）`)
};

/**
* | output |
* | --- |
* | "All ({count})" |
*
* @param {Admin_Tpl_Filter_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_filter_all = /** @type {((inputs: Admin_Tpl_Filter_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Filter_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_filter_all(inputs)
	if (locale === "de") return de_admin_tpl_filter_all(inputs)
	if (locale === "fr") return fr_admin_tpl_filter_all(inputs)
	if (locale === "it") return it_admin_tpl_filter_all(inputs)
	if (locale === "nl") return nl_admin_tpl_filter_all(inputs)
	if (locale === "pl") return pl_admin_tpl_filter_all(inputs)
	if (locale === "pt") return pt_admin_tpl_filter_all(inputs)
	if (locale === "ru") return ru_admin_tpl_filter_all(inputs)
	if (locale === "sv") return sv_admin_tpl_filter_all(inputs)
	if (locale === "tr") return tr_admin_tpl_filter_all(inputs)
	if (locale === "zh") return zh_admin_tpl_filter_all(inputs)
	if (locale === "ja") return ja_admin_tpl_filter_all(inputs)
	return en_admin_tpl_filter_all(inputs)
});
