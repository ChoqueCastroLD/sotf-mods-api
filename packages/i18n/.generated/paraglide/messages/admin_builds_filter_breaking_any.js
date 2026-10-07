/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filter_Breaking_AnyInputs */

const en_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breaking or not`)
};

const es_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rompe mods o no`)
};

const de_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkompatibel oder nicht`)
};

const fr_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avec ou sans casse`)
};

const it_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rompe le mod o no`)
};

const nl_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breekt mods of niet`)
};

const pl_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Psuje mody lub nie`)
};

const pt_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebra mods ou não`)
};

const ru_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ломает моды или нет`)
};

const sv_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bryter moddar eller inte`)
};

const tr_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozan ya da bozmayan`)
};

const zh_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`是否破坏性均可`)
};

const ja_admin_builds_filter_breaking_any = /** @type {(inputs: Admin_Builds_Filter_Breaking_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破壊的かどうかを問わない`)
};

/**
* | output |
* | --- |
* | "Breaking or not" |
*
* @param {Admin_Builds_Filter_Breaking_AnyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filter_breaking_any = /** @type {((inputs?: Admin_Builds_Filter_Breaking_AnyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filter_Breaking_AnyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filter_breaking_any(inputs)
	if (locale === "de") return de_admin_builds_filter_breaking_any(inputs)
	if (locale === "fr") return fr_admin_builds_filter_breaking_any(inputs)
	if (locale === "it") return it_admin_builds_filter_breaking_any(inputs)
	if (locale === "nl") return nl_admin_builds_filter_breaking_any(inputs)
	if (locale === "pl") return pl_admin_builds_filter_breaking_any(inputs)
	if (locale === "pt") return pt_admin_builds_filter_breaking_any(inputs)
	if (locale === "ru") return ru_admin_builds_filter_breaking_any(inputs)
	if (locale === "sv") return sv_admin_builds_filter_breaking_any(inputs)
	if (locale === "tr") return tr_admin_builds_filter_breaking_any(inputs)
	if (locale === "zh") return zh_admin_builds_filter_breaking_any(inputs)
	if (locale === "ja") return ja_admin_builds_filter_breaking_any(inputs)
	return en_admin_builds_filter_breaking_any(inputs)
});
