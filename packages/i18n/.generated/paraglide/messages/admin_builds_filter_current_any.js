/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filter_Current_AnyInputs */

const en_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any build`)
};

const es_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier build`)
};

const de_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beliebiger Build`)
};

const fr_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les builds`)
};

const it_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi build`)
};

const nl_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke build`)
};

const pl_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolny build`)
};

const pt_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer build`)
};

const ru_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любая сборка`)
};

const sv_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla byggen`)
};

const tr_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm sürümler`)
};

const zh_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有版本`)
};

const ja_admin_builds_filter_current_any = /** @type {(inputs: Admin_Builds_Filter_Current_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのビルド`)
};

/**
* | output |
* | --- |
* | "Any build" |
*
* @param {Admin_Builds_Filter_Current_AnyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filter_current_any = /** @type {((inputs?: Admin_Builds_Filter_Current_AnyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filter_Current_AnyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filter_current_any(inputs)
	if (locale === "de") return de_admin_builds_filter_current_any(inputs)
	if (locale === "fr") return fr_admin_builds_filter_current_any(inputs)
	if (locale === "it") return it_admin_builds_filter_current_any(inputs)
	if (locale === "nl") return nl_admin_builds_filter_current_any(inputs)
	if (locale === "pl") return pl_admin_builds_filter_current_any(inputs)
	if (locale === "pt") return pt_admin_builds_filter_current_any(inputs)
	if (locale === "ru") return ru_admin_builds_filter_current_any(inputs)
	if (locale === "sv") return sv_admin_builds_filter_current_any(inputs)
	if (locale === "tr") return tr_admin_builds_filter_current_any(inputs)
	if (locale === "zh") return zh_admin_builds_filter_current_any(inputs)
	if (locale === "ja") return ja_admin_builds_filter_current_any(inputs)
	return en_admin_builds_filter_current_any(inputs)
});
