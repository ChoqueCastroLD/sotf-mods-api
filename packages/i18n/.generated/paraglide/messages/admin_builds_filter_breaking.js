/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filter_BreakingInputs */

const en_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breaking`)
};

const es_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rompe mods`)
};

const de_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkompatibel`)
};

const fr_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Casse les mods`)
};

const it_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rompe le mod`)
};

const nl_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breekt mods`)
};

const pl_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Psuje mody`)
};

const pt_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebra mods`)
};

const ru_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ломает моды`)
};

const sv_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bryter moddar`)
};

const tr_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozuyor`)
};

const zh_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破坏性`)
};

const ja_admin_builds_filter_breaking = /** @type {(inputs: Admin_Builds_Filter_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破壊的`)
};

/**
* | output |
* | --- |
* | "Breaking" |
*
* @param {Admin_Builds_Filter_BreakingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filter_breaking = /** @type {((inputs?: Admin_Builds_Filter_BreakingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filter_BreakingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filter_breaking(inputs)
	if (locale === "de") return de_admin_builds_filter_breaking(inputs)
	if (locale === "fr") return fr_admin_builds_filter_breaking(inputs)
	if (locale === "it") return it_admin_builds_filter_breaking(inputs)
	if (locale === "nl") return nl_admin_builds_filter_breaking(inputs)
	if (locale === "pl") return pl_admin_builds_filter_breaking(inputs)
	if (locale === "pt") return pt_admin_builds_filter_breaking(inputs)
	if (locale === "ru") return ru_admin_builds_filter_breaking(inputs)
	if (locale === "sv") return sv_admin_builds_filter_breaking(inputs)
	if (locale === "tr") return tr_admin_builds_filter_breaking(inputs)
	if (locale === "zh") return zh_admin_builds_filter_breaking(inputs)
	if (locale === "ja") return ja_admin_builds_filter_breaking(inputs)
	return en_admin_builds_filter_breaking(inputs)
});
