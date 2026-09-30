/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Filter_IncludedInputs */

const en_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`included`)
};

const es_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`incluido`)
};

const de_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`eingeschlossen`)
};

const fr_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`inclus`)
};

const it_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`incluso`)
};

const nl_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`inbegrepen`)
};

const pl_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`uwzględniony`)
};

const pt_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`incluído`)
};

const ru_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`включено`)
};

const sv_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`inkluderad`)
};

const tr_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`dahil`)
};

const zh_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已包含`)
};

const ja_ui_domain_filter_included = /** @type {(inputs: Ui_Domain_Filter_IncludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`含む`)
};

/**
* | output |
* | --- |
* | "included" |
*
* @param {Ui_Domain_Filter_IncludedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_filter_included = /** @type {((inputs?: Ui_Domain_Filter_IncludedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Filter_IncludedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_filter_included(inputs)
	if (locale === "de") return de_ui_domain_filter_included(inputs)
	if (locale === "fr") return fr_ui_domain_filter_included(inputs)
	if (locale === "it") return it_ui_domain_filter_included(inputs)
	if (locale === "nl") return nl_ui_domain_filter_included(inputs)
	if (locale === "pl") return pl_ui_domain_filter_included(inputs)
	if (locale === "pt") return pt_ui_domain_filter_included(inputs)
	if (locale === "ru") return ru_ui_domain_filter_included(inputs)
	if (locale === "sv") return sv_ui_domain_filter_included(inputs)
	if (locale === "tr") return tr_ui_domain_filter_included(inputs)
	if (locale === "zh") return zh_ui_domain_filter_included(inputs)
	if (locale === "ja") return ja_ui_domain_filter_included(inputs)
	return en_ui_domain_filter_included(inputs)
});
