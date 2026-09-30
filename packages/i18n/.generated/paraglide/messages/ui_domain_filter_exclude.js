/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Ui_Domain_Filter_ExcludeInputs */

const en_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Exclude ${i?.label}`)
};

const es_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Excluir ${i?.label}`)
};

const de_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} ausschließen`)
};

const fr_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Exclure ${i?.label}`)
};

const it_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escludi ${i?.label}`)
};

const nl_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} uitsluiten`)
};

const pl_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wyklucz: ${i?.label}`)
};

const pt_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Excluir ${i?.label}`)
};

const ru_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Исключить: ${i?.label}`)
};

const sv_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uteslut ${i?.label}`)
};

const tr_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} hariç tut`)
};

const zh_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`排除 ${i?.label}`)
};

const ja_ui_domain_filter_exclude = /** @type {(inputs: Ui_Domain_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} を除外`)
};

/**
* | output |
* | --- |
* | "Exclude {label}" |
*
* @param {Ui_Domain_Filter_ExcludeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_filter_exclude = /** @type {((inputs: Ui_Domain_Filter_ExcludeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Filter_ExcludeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_filter_exclude(inputs)
	if (locale === "de") return de_ui_domain_filter_exclude(inputs)
	if (locale === "fr") return fr_ui_domain_filter_exclude(inputs)
	if (locale === "it") return it_ui_domain_filter_exclude(inputs)
	if (locale === "nl") return nl_ui_domain_filter_exclude(inputs)
	if (locale === "pl") return pl_ui_domain_filter_exclude(inputs)
	if (locale === "pt") return pt_ui_domain_filter_exclude(inputs)
	if (locale === "ru") return ru_ui_domain_filter_exclude(inputs)
	if (locale === "sv") return sv_ui_domain_filter_exclude(inputs)
	if (locale === "tr") return tr_ui_domain_filter_exclude(inputs)
	if (locale === "zh") return zh_ui_domain_filter_exclude(inputs)
	if (locale === "ja") return ja_ui_domain_filter_exclude(inputs)
	return en_ui_domain_filter_exclude(inputs)
});
