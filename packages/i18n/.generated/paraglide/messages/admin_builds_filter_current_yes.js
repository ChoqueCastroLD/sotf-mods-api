/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filter_Current_YesInputs */

const en_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current only`)
};

const es_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo la actual`)
};

const de_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur der aktuelle`)
};

const fr_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actuel uniquement`)
};

const it_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo quella attuale`)
};

const nl_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen de huidige`)
};

const pl_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko aktualny`)
};

const pt_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só o atual`)
};

const ru_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только текущая`)
};

const sv_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara det aktuella`)
};

const tr_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca güncel`)
};

const zh_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅当前版本`)
};

const ja_admin_builds_filter_current_yes = /** @type {(inputs: Admin_Builds_Filter_Current_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のビルドのみ`)
};

/**
* | output |
* | --- |
* | "Current only" |
*
* @param {Admin_Builds_Filter_Current_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filter_current_yes = /** @type {((inputs?: Admin_Builds_Filter_Current_YesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filter_Current_YesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filter_current_yes(inputs)
	if (locale === "de") return de_admin_builds_filter_current_yes(inputs)
	if (locale === "fr") return fr_admin_builds_filter_current_yes(inputs)
	if (locale === "it") return it_admin_builds_filter_current_yes(inputs)
	if (locale === "nl") return nl_admin_builds_filter_current_yes(inputs)
	if (locale === "pl") return pl_admin_builds_filter_current_yes(inputs)
	if (locale === "pt") return pt_admin_builds_filter_current_yes(inputs)
	if (locale === "ru") return ru_admin_builds_filter_current_yes(inputs)
	if (locale === "sv") return sv_admin_builds_filter_current_yes(inputs)
	if (locale === "tr") return tr_admin_builds_filter_current_yes(inputs)
	if (locale === "zh") return zh_admin_builds_filter_current_yes(inputs)
	if (locale === "ja") return ja_admin_builds_filter_current_yes(inputs)
	return en_admin_builds_filter_current_yes(inputs)
});
