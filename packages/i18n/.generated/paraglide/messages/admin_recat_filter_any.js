/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Filter_AnyInputs */

const en_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any`)
};

const es_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquiera`)
};

const de_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beliebig`)
};

const fr_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes`)
};

const it_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi`)
};

const nl_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const pl_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolne`)
};

const pt_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer`)
};

const ru_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любая`)
};

const sv_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hepsi`)
};

const zh_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_admin_recat_filter_any = /** @type {(inputs: Admin_Recat_Filter_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "Any" |
*
* @param {Admin_Recat_Filter_AnyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_filter_any = /** @type {((inputs?: Admin_Recat_Filter_AnyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Filter_AnyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_filter_any(inputs)
	if (locale === "de") return de_admin_recat_filter_any(inputs)
	if (locale === "fr") return fr_admin_recat_filter_any(inputs)
	if (locale === "it") return it_admin_recat_filter_any(inputs)
	if (locale === "nl") return nl_admin_recat_filter_any(inputs)
	if (locale === "pl") return pl_admin_recat_filter_any(inputs)
	if (locale === "pt") return pt_admin_recat_filter_any(inputs)
	if (locale === "ru") return ru_admin_recat_filter_any(inputs)
	if (locale === "sv") return sv_admin_recat_filter_any(inputs)
	if (locale === "tr") return tr_admin_recat_filter_any(inputs)
	if (locale === "zh") return zh_admin_recat_filter_any(inputs)
	if (locale === "ja") return ja_admin_recat_filter_any(inputs)
	return en_admin_recat_filter_any(inputs)
});
