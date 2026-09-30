/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Filter_ExcludedInputs */

const en_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`excluded`)
};

const es_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`excluido`)
};

const de_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ausgeschlossen`)
};

const fr_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`exclu`)
};

const it_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`escluso`)
};

const nl_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`uitgesloten`)
};

const pl_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`wykluczony`)
};

const pt_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`excluído`)
};

const ru_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`исключено`)
};

const sv_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`utesluten`)
};

const tr_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`hariç`)
};

const zh_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已排除`)
};

const ja_ui_domain_filter_excluded = /** @type {(inputs: Ui_Domain_Filter_ExcludedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`除外`)
};

/**
* | output |
* | --- |
* | "excluded" |
*
* @param {Ui_Domain_Filter_ExcludedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_filter_excluded = /** @type {((inputs?: Ui_Domain_Filter_ExcludedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Filter_ExcludedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_filter_excluded(inputs)
	if (locale === "de") return de_ui_domain_filter_excluded(inputs)
	if (locale === "fr") return fr_ui_domain_filter_excluded(inputs)
	if (locale === "it") return it_ui_domain_filter_excluded(inputs)
	if (locale === "nl") return nl_ui_domain_filter_excluded(inputs)
	if (locale === "pl") return pl_ui_domain_filter_excluded(inputs)
	if (locale === "pt") return pt_ui_domain_filter_excluded(inputs)
	if (locale === "ru") return ru_ui_domain_filter_excluded(inputs)
	if (locale === "sv") return sv_ui_domain_filter_excluded(inputs)
	if (locale === "tr") return tr_ui_domain_filter_excluded(inputs)
	if (locale === "zh") return zh_ui_domain_filter_excluded(inputs)
	if (locale === "ja") return ja_ui_domain_filter_excluded(inputs)
	return en_ui_domain_filter_excluded(inputs)
});
