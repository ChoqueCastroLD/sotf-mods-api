/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Filter_SourceInputs */

const en_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source`)
};

const es_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Origen`)
};

const de_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelle`)
};

const fr_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source`)
};

const it_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Origine`)
};

const nl_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bron`)
};

const pl_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Źródło`)
};

const pt_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Origem`)
};

const ru_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Источник`)
};

const sv_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Källa`)
};

const tr_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak`)
};

const zh_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来源`)
};

const ja_admin_recat_filter_source = /** @type {(inputs: Admin_Recat_Filter_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`出どころ`)
};

/**
* | output |
* | --- |
* | "Source" |
*
* @param {Admin_Recat_Filter_SourceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_filter_source = /** @type {((inputs?: Admin_Recat_Filter_SourceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Filter_SourceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_filter_source(inputs)
	if (locale === "de") return de_admin_recat_filter_source(inputs)
	if (locale === "fr") return fr_admin_recat_filter_source(inputs)
	if (locale === "it") return it_admin_recat_filter_source(inputs)
	if (locale === "nl") return nl_admin_recat_filter_source(inputs)
	if (locale === "pl") return pl_admin_recat_filter_source(inputs)
	if (locale === "pt") return pt_admin_recat_filter_source(inputs)
	if (locale === "ru") return ru_admin_recat_filter_source(inputs)
	if (locale === "sv") return sv_admin_recat_filter_source(inputs)
	if (locale === "tr") return tr_admin_recat_filter_source(inputs)
	if (locale === "zh") return zh_admin_recat_filter_source(inputs)
	if (locale === "ja") return ja_admin_recat_filter_source(inputs)
	return en_admin_recat_filter_source(inputs)
});
